const getPlugins = () => {
  const plugins = [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@assets': './src/theme/assets',
          '@colors': './src/constants/colors',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@src': './src/',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '~assets': './src/assets',
        },
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx'],
        root: ['./src/'],
      },
    ],
    [
      'i18next-extract',
      {
        discardOldKeys: true,
        keyAsDefaultValue: ['en'],
        keyAsDefaultValueForDerivedKeys: false,
        keySeparator: null,
        locales: ['en'],
        nsSeparator: null,
        outputPath: 'src/services/i18n/locales/en.json',
      },
    ],
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(['transform-remove-console', { exclude: ['error', 'warn', 'info'] }]);
  }

  return plugins;
};

module.exports = (api) => {
  api.cache(true);

  return {
    plugins: getPlugins(),
    presets: ['babel-preset-expo'],
  };
};
