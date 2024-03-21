const appConfig = {
    app: {
        name: 'React app',
        env: process.env.APP_ENV,
        origin: process.env.API_ORIGIN,
        apiUrl: process.env.API_URL,
        apiLoginUrl: process.env.API_LOGIN_URL,
    },
};

export const config = Object.freeze(appConfig);
