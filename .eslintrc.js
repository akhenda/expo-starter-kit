module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@react-native-community', 'heimdall/native', 'heimdall/tests'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@assets': './src/constants/assets',
          '@colors': './src/constants/colors',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
        },
        cwd: 'babel.config.js',
        extensions: ['.js', 'jsx', '.ios.js', '.android.js', '.ts', '.tsx'],
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    },
  },
  rules: {
    'no-use-before-define': ['off', { functions: false, classes: false }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
