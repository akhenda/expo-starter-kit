const LIGHT_SPLASH = {
  backgroundColor: '#FFFFFF',
  // image: './src/assets/images/splash.png',
  resizeMode: 'contain',
};

const DARK_SPLASH = {
  backgroundColor: '#194351',
  // image: './src/assets/images/splash.png',
  resizeMode: 'contain',
};

const SHARED_SPLASH = {
  splash: {
    ...LIGHT_SPLASH,
    dark: {
      ...DARK_SPLASH,
    },
  },
};

export default {
  android: {
    adaptiveIcon: {
      backgroundColor: '#194351',
      foregroundImage: './src/assets/images/adaptive-icon.png',
    },
    googleServicesFile: './google-services.json',
    package: 'com.akhenda.expostarter',
    ...SHARED_SPLASH,
  },
  /**
   * https://github.com/expo/expo/issues/11604
   * https://www.aronberezkin.com/posts/a-step-by-step-guide-to-writing-your-first-expo-config-plugin
   */
  // androidStatusBar: {
  //   backgroundColor: '#00000000',
  //   barStyle: 'dark-content',
  //   translucent: true,
  // },
  assetBundlePatterns: ['**/*'],
  extra: {
    eas: {
      projectId: '9cee5153-b650-4374-b3ce-a92218e67978',
    },
  },
  icon: './src/assets/images/icon.png',
  ios: {
    bundleIdentifier: 'com.akhenda.expostarter',
    googleServicesFile: './GoogleService-Info.plist',
    supportsTablet: true,
    ...SHARED_SPLASH,
  },
  jsEngine: 'hermes',
  name: 'expo-starter',
  orientation: 'portrait',
  plugins: [
    'expo-community-flipper',
    '@react-native-firebase/app',
    '@react-native-firebase/app-check',
    '@react-native-firebase/app-distribution',
    '@react-native-firebase/auth',
    '@react-native-firebase/crashlytics',
    '@react-native-firebase/perf',
    '@react-native-firebase/firestore',
    '@react-native-firebase/storage',
    '@react-native-firebase/dynamic-links',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  scheme: 'expo-starter',
  slug: 'expo-starter-kit',
  splash: LIGHT_SPLASH,
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/9cee5153-b650-4374-b3ce-a92218e67978',
  },
  userInterfaceStyle: 'automatic',
  version: '1.0.0',
  web: {
    favicon: './src/assets/images/favicon.png',
  },
};
