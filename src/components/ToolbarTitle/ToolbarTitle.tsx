import { Image } from 'react-native';
import { HeaderTitle } from '@react-navigation/elements';

import { View } from '@src/components/Themed';
import { images } from '@src/theme';

import type { ToolbarTitleProps } from './ToolbarTitle.props';
import styles from './ToolbarTitle.styles';

const { $container, $title, $image } = styles;

const ToolbarTitle = ({ title = 'ExpoStarter', hideLogo = false }: ToolbarTitleProps) => {
  return (
    <View style={$container}>
      {!hideLogo && <Image style={$image} source={images.logo} />}
      <HeaderTitle style={$title}>{title}</HeaderTitle>
    </View>
  );
};

export default ToolbarTitle;
