import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

const $container: ViewStyle = {
  flex: 1,
};

const $content: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
};

const $image: ImageStyle = {
  aspectRatio: 1,
  height: 'auto',
  marginBottom: 40,
  width: '60%',
};

const $title: TextStyle = {
  fontSize: 22,
  marginBottom: 15,
};

const $description: TextStyle = {
  marginVertical: 20,
  paddingHorizontal: 20,
  textAlign: 'center',
};

export default {
  $container,
  $content,
  $description,
  $image,
  $title,
};
