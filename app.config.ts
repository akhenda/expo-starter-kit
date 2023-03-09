import type { ConfigContext, ExpoConfig } from '@expo/config';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.APP_VARIANT ?? 'development'}`,
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
  const identifier = {
    development: 'dev',
    preview: 'preview',
    production: '',
    rc: 'rc',
  }[variant];

  const variantConfig = {
    ...config,
    android: {
      ...config.android,
      package: `com.akhenda.expostarter${identifier ? `.${identifier}` : ''}`,
    },
    icon: `./assets/icon${identifier ? `-${identifier}` : ''}.png`,
    ios: {
      ...config.ios,
      bundleIdentifier: `com.akhenda.expostarter${identifier ? `.${identifier}` : ''}`,
    },
    name: `${config.name} ${identifier ? `(${identifier.toUpperCase()})` : ''}`,
  } as ExpoConfig;

  // const variantConfig = {
  //   development: {
  //     ...config,
  //     android: {
  //       ...config.android,
  //       package: 'com.akhenda.expostarter.dev',
  //     },
  //     icon: './assets/icon-dev.png',
  //     ios: {
  //       ...config.ios,
  //       bundleIdentifier: 'com.akhenda.expostarter.dev',
  //     },
  //     name: `${config.name} (DEV)`,
  //   },
  //   preview: {
  //     ...config,
  //     android: {
  //       ...config.android,
  //       package: 'com.akhenda.expostarter.preview',
  //     },
  //     icon: './assets/icon-preview.png',
  //     ios: {
  //       ...config.ios,
  //       bundleIdentifier: 'com.akhenda.expostarter.preview',
  //     },
  //     name: `${config.name} (PREVIEW)`,
  //   },
  //   production: {
  //     ...config,
  //     android: {
  //       ...config.android,
  //       package: 'com.akhenda.expostarter',
  //     },
  //     icon: './assets/icon.png',
  //     ios: {
  //       ...config.ios,
  //       bundleIdentifier: 'com.akhenda.expostarter',
  //     },
  //     name: config.name,
  //   },
  //   rc: {
  //     ...config,
  //     android: {
  //       ...config.android,
  //       package: 'com.akhenda.expostarter.rc',
  //     },
  //     icon: './assets/icon-rc.png',
  //     ios: {
  //       ...config.ios,
  //       bundleIdentifier: 'com.akhenda.expostarter.rc',
  //     },
  //     name: `${config.name} (RC)`,
  //   },
  // }[variant] as ExpoConfig;

  return variantConfig;
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
