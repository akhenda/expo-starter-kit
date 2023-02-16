import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export enum SaveAreaInset {
  TOP = 'top',
  BOTTOM = 'bottom',
}

type InsetsProp = SaveAreaInset | SaveAreaInset[];

export interface SafeAreaViewProps extends ViewProps {
  /**
   * Extra styles for the container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * The insets to apply to a screen
   */
  insets?: InsetsProp;
}

export type SafeAreaViewElement = React.ReactElement<SafeAreaViewProps>;
