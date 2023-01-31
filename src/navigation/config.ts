/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import type { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import type { RootStackParamList } from './navigators/RootNavigator';

const prefixes = [Linking.createURL('/'), 'https://app.example.com'];

export const linkingConfigLoggedIn: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      'App Stack': {
        screens: {
          'Edit Profile': 'edit-profile',
          'Home Stack': {
            screens: {
              About: 'about',
            },
          },
          'You are not Authorized': '403',
        },
      },
      Modal: 'modal',
    },
  },
  prefixes,
};

export const linkingConfigLoggedOut: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      'App Stack': '*',
    },
  },
  prefixes,
};

export const useLinkingConfig = () => {
  const isAuthenticated = true;

  return isAuthenticated ? linkingConfigLoggedIn : linkingConfigLoggedOut;
};
