import type { ConfigContext, ExpoConfig } from '@expo/config';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.APP_VARIANT} ?? 'development'`,
});

const { APP_VARIANT } = process.env;

const LIGHT_SPLASH = {
  backgroundColor: '#FFFFFF',
  resizeMode: 'contain',
};

const DARK_SPLASH = {
  backgroundColor: '#194351',
  resizeMode: 'contain',
};

const SHARED_SPLASH = {
  splash: { ...LIGHT_SPLASH, dark: { ...DARK_SPLASH } } as ConfigContext['config']['splash'],
};

const getVariantConfig = (config: ConfigContext['config'], variant: NodeJS.AppVariant) => {
  return {
    development: {
      ...config,
      android: {
        ...config.android,
        package: 'dev.com.akhenda.expostarter',
      },
      icon: './assets/icon-dev.png',
      ios: {
        ...config.ios,
        bundleIdentifier: 'dev.com.akhenda.expostarter',
      },
      name: `[DEV] ${config.name}`,
    },
    preview: {
      ...config,
      android: {
        ...config.android,
        package: 'preview.com.akhenda.expostarter',
      },
      icon: './assets/icon-preview.png',
      ios: {
        ...config.ios,
        bundleIdentifier: 'preview.com.akhenda.expostarter',
      },
      name: `[PREVIEW] ${config.name}`,
    },
    production: {
      ...config,
      android: {
        ...config.android,
        package: 'com.akhenda.expostarter',
      },
      icon: './assets/icon.png',
      ios: {
        ...config.ios,
        bundleIdentifier: 'com.akhenda.expostarter',
      },
      name: config.name,
    },
    rc: {
      ...config,
      android: {
        ...config.android,
        package: 'rc.com.akhenda.expostarter',
      },
      icon: './assets/icon-rc.png',
      ios: {
        ...config.ios,
        bundleIdentifier: 'rc.com.akhenda.expostarter',
      },
      name: `[RC] ${config.name}`,
    },
  }[variant] as ExpoConfig;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  /**
   * https://github.com/expo/expo/issues/11604
   * https://www.aronberezkin.com/posts/a-step-by-step-guide-to-writing-your-first-expo-config-plugin
   */
  // androidStatusBar: {
  //   backgroundColor: '#00000000',
  //   barStyle: 'dark-content',
  //   translucent: true,
  // },
  ...getVariantConfig(config, APP_VARIANT),
  ...SHARED_SPLASH,
});
