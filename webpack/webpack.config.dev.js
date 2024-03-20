const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const { EsbuildPlugin } = require('esbuild-loader');

const Aliases = require('./webpack.aliases.js');

const mode = 'development';

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
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
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
                                        minify: false,
                                        transpileTemplateLiterals: false,
                                    },
                                ],
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',

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
                      { loader: 'style-loader' },
                      { loader: 'css-loader' },
                      { loader: 'sass-loader' },
                    ],
                  },
                {
                    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
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
                minify: false,
                hash: false,
                cache: false,
                showErrors: true,
            }),

            new Dotenv({
                path: './environments/.env.development',
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
        ],
        optimization: {
            minimize: false,
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
            },
        },

        performance: {
            maxEntrypointSize: Infinity,
            maxAssetSize: 1024 ** 2,
        },

        devtool: 'inline-source-map',

        devServer: {
            host: '0.0.0.0',
            port: 3000,
            server: 'http',
            historyApiFallback: true,
            hot: true,
            open: true,
        },
    };
};
