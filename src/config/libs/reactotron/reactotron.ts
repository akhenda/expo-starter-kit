/* eslint-disable no-console */
/**
 * This file does the setup for integration with Reactotron, which is a
 * free desktop app for inspecting and debugging your React Native app.
 *
 * The functions are invoked from app.tsx and you can change the config there.
 *
 * Check out the "Custom Commands" section for some cool tools you can use,
 * customize, and make your own.
 *
 * Note that Fast Refresh doesn't play well with this file, so if you edit this,
 * do a full refresh of your app instead.
 *
 * @see_also https://github.com/infinitered/reactotron/issues/162
 *
 * @refresh reset
 */
import { Platform } from 'react-native';
import { ArgType } from 'reactotron-core-client'; // eslint-disable-line import/no-extraneous-dependencies
import { networking } from 'reactotron-react-native'; // eslint-disable-line import/no-extraneous-dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';

import { goBack, navigate, resetRoot } from '@src/navigation/utils';
import { asyncStorage } from '@utils/storage';

import { Reactotron } from './client';
import { DEFAULT_REACTOTRON_CONFIG, ReactotronConfig } from './config';
import { fakeReactotron } from './fake';

/**
 * Avoid setting up Reactotron multiple times with Fast Refresh
 */
let reactotronIsSetUp = false;

/**
 * We tell typescript we intend to hang Reactotron off of the console object.
 *
 * It'll live at console.tron, so you can use it like so:
 *
 *   console.tron.log('hello world')
 *
 * You can also import Reactotron yourself from ./client
 * and use it directly, like Reactotron.log('hello world')
 */
declare global {
  interface Console {
    /**
     * Reactotron client for logging, displaying, measuring performance,
     * and more. See https://github.com/infinitered/reactotron for more!
     */
    tron: typeof Reactotron;
  }
}

// in dev, we attach Reactotron, in prod we attach a interface-compatible mock.
if (__DEV__) {
  console.tron = Reactotron; // attach reactotron to `console.tron`
} else {
  // attach a mock so if things sneak by our __DEV__ guards, we won't crash.
  console.tron = fakeReactotron as typeof Reactotron;
}

const config = DEFAULT_REACTOTRON_CONFIG;

/**
 * Configure reactotron based on the the config settings passed in, then connect if we need to.
 */
export function setupReactotron(customConfig: ReactotronConfig = {}) {
  // only run this in dev... metro bundler will ignore this block: 🎉
  if (__DEV__) {
    // only setup once.
    if (reactotronIsSetUp) return;

    // merge the passed in config with our default config
    Object.assign(config, customConfig);

    // configure reactotron
    Reactotron.configure({
      host: config.host,
      name: config.name,
    });

    Reactotron.use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    );

    // hookup middleware
    if (Platform.OS !== 'web') {
      if (config.useAsyncStorage) Reactotron.setAsyncStorageHandler?.(AsyncStorage);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      Reactotron.useReactNative({
        asyncStorage: config.useAsyncStorage ? undefined : false,
        editor: false,
        // there are more options to editor
        errors: { veto: () => false }, // eslint-disable-line lodash/prefer-constant
        networking: {
          // optionally, you can turn it off with false.
          ignoreUrls: /\/(logs|symbolicate|errorHandler\.js)$/,
        }, // or turn it off with false
        overlay: false, // just turning off overlay
        storybook: false,
      });
    }

    // connect to the app
    Reactotron.connect();

    /**
     * Reactotron allows you to define custom commands that you can run
     * from Reactotron itself, and they will run in your app.
     *
     * Define them in the section below with `onCustomCommand`. Use your
     * creativity -- this is great for development to quickly and easily
     * get your app into the state you want.
     */
    Reactotron.onCustomCommand({
      command: 'resetStore',
      description: 'Resets the AsyncStorage store',
      handler: () => {
        Reactotron.log?.('resetting store');
        asyncStorage.clear();
      },
      title: 'Reset Root Store',
    });

    Reactotron.onCustomCommand({
      command: 'resetNavigation',
      description: 'Resets the navigation state',
      handler: () => {
        Reactotron.log?.('resetting navigation state');
        resetRoot({ index: 0, routes: [] });
      },
      title: 'Reset Navigation State',
    });

    Reactotron.onCustomCommand({
      args: [
        {
          name: 'route',
          type: ArgType.String,
        },
      ],
      command: 'navigateTo',
      description: 'Navigates to a screen by name.',
      handler: (args) => {
        const { route } = args;

        if (route) {
          console.log(`Navigating to: ${route}`);
          navigate(route);
        } else {
          console.log('Could not navigate. No route provided.');
        }
      },
      title: 'Navigate To Screen',
    });

    Reactotron.onCustomCommand({
      command: 'goBack',
      description: 'Goes back',
      handler: () => {
        Reactotron.log?.('Going back');
        goBack();
      },
      title: 'Go Back',
    });

    // clear if we should
    if (config.clearOnLoad) Reactotron.clear?.();

    reactotronIsSetUp = true;
  }
}
