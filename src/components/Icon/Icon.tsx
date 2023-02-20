import * as VectorIcons from '@expo/vector-icons';
import noop from 'lodash/noop';

import { colors } from '@src/theme';

import type { IconElements, IconFamily, IconProps } from './Icon.props';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const Icon = <T extends IconFamily>({
  family,
  name = 'home',
  color = colors.dark.tint,
  size = 24,
  marginLeft,
  marginRight,
  style,
  buttonStyle,
  onButtonPress = noop,
  isButton = false,
}: IconProps<T>) => {
  const origin = family || 'Ionicons';
  const IconX = VectorIcons[origin] as IconElements['Ionicons'];

  if (isButton) {
    return <IconX.Button name={name} size={size} color={color} style={buttonStyle} onPress={onButtonPress} />;
  }

  return <IconX name={name} size={size} color={color} style={[{ marginLeft, marginRight }, style]} />;
};

export default Icon;
