import type React from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface EmptyStateViewProps {
  /**
   * Image source
   */
  imageSource?: number;

  /**
   * Main image style
   */
  imageStyle?: ImageStyle | ImageStyle[];

  /**
   * Text of the header
   */
  headerText: string;

  /**
   * Style of the header
   */
  headerTextStyle?: TextStyle | TextStyle[];

  /**
   * Text of Sub header
   */
  subHeaderText?: string | null;

  /**
   * Style of the sub header
   */
  subHeaderTextStyle?: TextStyle | TextStyle[];

  /**
   * Style for the container
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * Button Text
   */
  buttonText?: string;

  /**
   * Button Text style
   */
  buttonTextStyle?: TextStyle | TextStyle[];

  /**
   * Button Style
   */
  buttonStyle?: ViewStyle | ViewStyle[];

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
