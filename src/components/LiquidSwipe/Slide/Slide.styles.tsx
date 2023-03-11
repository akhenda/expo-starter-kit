import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import metrics from '@src/theme/metrics';

export const { width, height } = metrics;
const SIZE = width - 75;

/**
 * Default styles for the top level container/wrapper in this component
 */
export const $container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  padding: 75,
  paddingTop: 150,
};

export const $image: ImageStyle = {
  height: SIZE,
  width: SIZE,
};

export const $title: TextStyle = {
  color: 'white',
  fontFamily: 'SFProDisplay-Bold',
  fontSize: 48,
  marginBottom: 16,
  textAlign: 'center',
};

export const $description: TextStyle = {
  color: 'white',
  fontFamily: 'SFProDisplay-Regular',
  fontSize: 18,
  textAlign: 'center',
};
