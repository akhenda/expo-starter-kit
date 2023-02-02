import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { colors } from '@src/theme';

const $container: ViewStyle = {
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  width: '100%',
};

const $lottie: ViewStyle = {
  aspectRatio: 1,
  marginBottom: 40,
  width: '60%',
};

const $image: ImageStyle = {
  aspectRatio: 1,
  height: 'auto',
  marginBottom: 40,
  resizeMode: 'contain',
  width: '80%',
};

const $header: TextStyle = {
  fontSize: 28,
};

const $subHeader: TextStyle = {
  fontSize: 16,
};

const $buttonText: TextStyle = {
  color: colors.light.tint,
  fontSize: 16,
  textDecorationColor: colors.light.tint,
  textDecorationLine: 'underline',
};

export default {
  $buttonText,
  $container,
  $header,
  $image,
  $lottie,
  $subHeader,
};
