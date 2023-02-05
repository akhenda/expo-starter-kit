/* eslint-disable react/require-default-props */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import isObject from 'lodash/isObject';

import { colors } from '@src/theme';

import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors.light & keyof typeof colors.dark,
  accessor?: 'primary' | 'default',
): string {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) return colorFromProps;

  const themeColor = colors[theme][colorName];

  if (isObject(themeColor) && accessor && Object.keys(themeColor).includes(accessor)) {
    return themeColor[accessor as keyof typeof themeColor];
  }

  return themeColor as never as string;
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ dark: darkColor, light: lightColor }, 'text', 'primary');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ dark: darkColor, light: lightColor }, 'background', 'default');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
