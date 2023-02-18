import storage from '@src/services/storage/mmkv';

if (__DEV__) {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const { initializeMMKVFlipper } = require('react-native-mmkv-flipper-plugin');

  initializeMMKVFlipper({ default: storage });
}

/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export default {
  API_KEY: process.env.API_KEY,
  API_URL: 'https://www.omdbapi.com/',
  USE_ZUSTAND_DEV_TOOLS: false,
} as const;
