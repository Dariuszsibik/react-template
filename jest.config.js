module.exports = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
        '^.+\\.(js|jsx)$': '@swc/jest',
    },
    moduleNameMapper: {
        "^@Components(.*)$": "<rootDir>/src/shared/components$1",
        "^@Shared(.*)$": "<rootDir>/src/shared/$1",
        "^@Core(.*)$": "<rootDir>/src/core$1",
        "^@Constants(.*)$": "<rootDir>/src/constants$1",
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    }
};
