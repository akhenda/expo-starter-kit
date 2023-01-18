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
  // eslint-disable-next-line global-require
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  // eslint-disable-next-line lodash/prefer-noop
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
