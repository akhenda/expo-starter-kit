// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@assets': './src/constants/assets',
            '@colors': './src/constants/colors',
            '@components': './src/components',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@src': './src/',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
          extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx'],
          root: ['./src/'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
