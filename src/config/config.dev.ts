// eslint-disable-next-line import/no-extraneous-dependencies
import { connectToDevTools } from 'react-devtools-core';

import storage from '@src/utils/storage/mmkv';

if (__DEV__) {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const { initializeMMKVFlipper } = require('react-native-mmkv-flipper-plugin');

  initializeMMKVFlipper({ default: storage });

  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}

/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export default {
  API_URL: 'https://api.themoviedb.org/3/',
};
