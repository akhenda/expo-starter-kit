import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Text, View } from '@components/Themed';

import type { EmptyStateViewProps } from './EmptyStateView.props';
import styles from './EmptyStateView.styles';

const { $buttonText, $container, $header, $image, $subHeader } = styles;

const EmptyStateView = ({
  imageSource,
  imageStyle,
  headerTextStyle,
  subHeaderText,
  subHeaderTextStyle,
  buttonStyle,
  buttonText,
  buttonTextStyle,
  children,
  style,
  onButtonClick,
  headerText = 'Empty State View',
}: EmptyStateViewProps) => {
  return (
    <View testID="containerView" style={[$container, style]}>
      {!!imageSource && <Image source={imageSource} style={[$image, imageStyle]} />}
      {!!headerText && (
        <Text testID="headerText" style={[$header, headerTextStyle]}>
          {headerText}
        </Text>
      )}
      {!!subHeaderText && <Text style={[$subHeader, subHeaderTextStyle]}>{subHeaderText}</Text>}
      {!!buttonText && (
        <TouchableOpacity testID="testButton" onPress={onButtonClick} style={[$buttonText, buttonStyle]}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

export default EmptyStateView;
