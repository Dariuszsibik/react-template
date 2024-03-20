const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const { EsbuildPlugin } = require('esbuild-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const Aliases = require('./webpack.aliases.js');

const mode = 'production';

module.exports = (env) => {
    return {
        mode,
        entry: path.join(__dirname, '../src', 'index.tsx'),

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
            alias: Aliases,
        },

        output: {
            publicPath: '/',
            path: path.resolve(__dirname, '../dist'),
            filename: 'js/[name].[chunkhash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.?(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            plugins: [
                                [
                                    'babel-plugin-styled-components',
                                    {
                                        minify: true,
                                        transpileTemplateLiterals: true,
                                    },
                                ],
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            {
                                                autoprefixer: {
                                                    grid: true,
                                                    flexbox: true,
                                                },
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    // SCSS (SASS) Loader
                    test: /\.s[ac]ss$/i,
                    use: [
                      { loader: MiniCssExtractPlugin.loader },
                      { loader: 'css-loader' },
                      { loader: 'sass-loader' },
                    ],
                  },
                {
                    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            filename: 'assets/[hash][ext][query]',
                        },
                    },
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {
                                native: false,
                            },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../public', 'index.html'),
                minify: true,
                hash: true,
                cache: true,
                showErrors: false,
            }),

            new Dotenv({
                path: './environments/.env.production',
                systemvars: true,
            }),

            new MiniCssExtractPlugin(),

            new CopyPlugin({
                patterns: [
                    {
                        from: 'public/favicon.ico',
                        to: '.',
                    },
                    {
                        from: 'public/robots.txt',
                        to: '.',
                    },
                    {
                        from: 'public/sitemap.xml',
                        to: '.',
                    },
                ],
            }),
        ].concat(
            !env.analyze
                ? []
                : [
                      new BundleAnalyzerPlugin({
                          analyzerHost: 'localhost',
                          analyzerPort: 3006,
                          reportTitle: 'Template - Analyze Bundle Sizes',
                      }),
                  ]
        ),
        optimization: {
            minimize: true,
            mergeDuplicateChunks: true,
            removeEmptyChunks: true,
            sideEffects: false,
            minimizer: [
                new EsbuildPlugin({
                    target: 'es2015',
                }),
            ],
            splitChunks: {
                chunks: 'all',
                // cacheGroups: {
                //     vendors: {
                //         test: /[\\/]node_modules[\\/]/,
                //         chunks: 'all',
                //         enforce: true,
                //         name: (module) => {
                //             const [, match] = module.context.match(
                //                 /[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/
                //             );

                //             return `vendors/${match.replace('@', '')}`;
                //         },
                //     },
                // },
            },
        },

        performance: {
            maxEntrypointSize: Infinity,
            maxAssetSize: 1024 ** 2,
        },

        devtool: 'source-map',
    };
};
