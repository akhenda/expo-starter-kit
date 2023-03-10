/* eslint-disable lodash/prefer-noop */
/* eslint-disable global-require */
/**
 * Additional setup code that should run before Jest starts.
 *
 * Note that this file is different from `jest.config.js`, as that file cannot
 * actually call any `jest` methods whereas this one can (each file gets loaded
 * during a different part of Jest's lifecycle).
 *
 * @module jestSetup
 * @see module:jestConfig
 */

import { AccessibilityInfo, NativeModules } from 'react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';

// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

/**
 * Prevent error 'expo-linking needs access to the expo-constants manifest' when
 * running unit tests.
 *
 * @see https://github.com/expo/expo/issues/18742
 */
jest.mock('expo-linking', () => {
  const module: typeof import('expo-linking') = {
    ...jest.requireActual('expo-linking'),
    createURL: jest.fn(),
  };

  return module;
});

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-mmkv-flipper-plugin');
jest.mock('zustand');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

// RNUILIb Mocks
// https://github.com/wix/react-native-ui-lib/blob/master/jest-setup.js
jest.mock('@react-native-community/blur', () => {});
NativeModules.StatusBarManager = { getHeight: jest.fn() };
jest.spyOn(AccessibilityInfo, 'isScreenReaderEnabled').mockImplementation(() => Promise.resolve(false));
jest.mock('react-native', () => {
  const reactNative = jest.requireActual('react-native');
  reactNative.NativeModules.KeyboardTrackingViewTempManager = {};
  return reactNative;
});

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
