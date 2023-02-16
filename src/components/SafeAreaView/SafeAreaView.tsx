import React, { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import { $container } from './SafeAreaView.styles';
import { SafeAreaViewProps, SaveAreaInset } from './SafeAreaView.types';

const SafeAreaView = ({ insets, style: $style, ...rest }: SafeAreaViewProps): ReactElement => {
  const safeAreaInsets: EdgeInsets = useSafeAreaInsets();

  const toStyleProp = (inset: SaveAreaInset): ViewStyle => {
    switch (inset) {
      case SaveAreaInset.BOTTOM:
        return { paddingBottom: safeAreaInsets.bottom };
      case SaveAreaInset.TOP:
        return { paddingTop: safeAreaInsets.top };
      default:
        return {};
    }
  };

  const createInsets = (): StyleProp<ViewStyle> => {
    if (insets) return React.Children.map(insets, toStyleProp);

    return {};
  };

  return <View style={[$container, $style, createInsets()]} {...rest} />;
};

export default SafeAreaView;
