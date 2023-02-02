import type React from 'react';
import type { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { AnimatedLottieViewProps } from 'lottie-react-native';

export interface EmptyStateViewProps {
  /**
   * Lottie animation source
   */
  lottieSource?: AnimatedLottieViewProps['source'];

  /**
   * Lottie animation style
   */
  lottieStyle?: AnimatedLottieViewProps['style'];

  /**
   * Image source
   */
  imageSource?: ImageSourcePropType;

  /**
   * Image style
   */
  imageStyle?: StyleProp<ImageStyle>;

  /**
   * Text of the header
   */
  headerText: string;

  /**
   * Style of the header
   */
  headerTextStyle?: StyleProp<TextStyle>;

  /**
   * Text of Sub header
   */
  subHeaderText?: string | null;

  /**
   * Style of the sub header
   */
  subHeaderTextStyle?: StyleProp<TextStyle>;

  /**
   * Style for the container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Button Text
   */
  buttonText?: string;

  /**
   * Button Text style
   */
  buttonTextStyle?: StyleProp<TextStyle>;

  /**
   * Button Style
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Callback function
   * Trigger when a the button inside is clicked
   */
  onButtonClick?: () => void;

  /**
   * Any Children want to pass in
   */
  children?: React.ReactNode;
}
