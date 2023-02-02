import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

const $container: ViewStyle = {
  alignItems: 'center',
  backgroundColor: 'transparent',
  flexDirection: 'row',
};

const $title: TextStyle = {};

const $image: ImageStyle = {
  aspectRatio: 1,
  height: 'auto',
  marginRight: 5,
  resizeMode: 'contain',
  width: 30,
};

export default {
  $container,
  $image,
  $title,
};
