/**
 * Jest config file for Expo projects.
 *
 * @module jestConfig
 * @see https://jestjs.io/docs/configuration
 * @see https://docs.expo.dev/guides/testing-with-jest/
 * @see https://github.com/vanGalilea/react-native-testing
 */

const { join } = require('node:path');
const { pathsToModuleNameMapper } = require('ts-jest');

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('jest').Config} */
const config = {
  preset: 'jest-expo',
  // By default, all files inside `node_modules` are not transformed. But some 3rd party
  // modules are published as untranspiled, Jest will not understand the code in these modules.
  // To overcome this, exclude these modules in the ignore pattern.
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)',
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

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  coverageReporters: ['json-summary', 'text', 'lcov', 'json', 'html', 'text-summary'],
  coverageThreshold: {
    global: {
      lines: 60,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
};

module.exports = config;
