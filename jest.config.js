/**
 * Jest config file for Expo projects.
 *
 * @module jestConfig
 * @see https://jestjs.io/docs/configuration
 * @see https://docs.expo.dev/guides/testing-with-jest/
 */

const { join } = require('node:path');

/** @type {import('jest').Config} */
const config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/jest.setup.js',
    '!**/changelog.config.js',
    '!**/.eslintrc.js',
    '!**/.prettierrc.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  /** @see module:jestSetup */
  setupFiles: [join(__dirname, 'jest.setup.ts')],
};

module.exports = config;
