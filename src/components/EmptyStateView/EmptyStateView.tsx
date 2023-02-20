import { Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { Text, View } from '@components/Themed';

import type { EmptyStateViewProps } from './EmptyStateView.props';
import styles from './EmptyStateView.styles';

const { $buttonText, $container, $header, $image, $subHeader, $lottie } = styles;

const EmptyStateView = ({
  lottieSource,
  lottieStyle,
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
      {!!lottieSource && <LottieView autoPlay style={[$lottie, lottieStyle]} source={lottieSource} />}
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
