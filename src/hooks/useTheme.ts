import { useCallback, useEffect, useState } from 'react';
import { Assets, Colors, Spacings, Typography } from 'react-native-ui-lib';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import type { StatusBarStyle } from 'expo-status-bar';

import { useTrackedStore } from '@src/stores';
import { colors, images, spacing, typography } from '@src/theme';

import useColorScheme from './useColorScheme';

export default function useTheme() {
  const colorScheme = useColorScheme();
  const theme = useTrackedStore().app.theme();

  const [navTheme, setNavTheme] = useState<Theme>(DefaultTheme);
  const [statusBarBGColor, setStatusBarBGColor] = useState('light');
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('auto');

  /**
   * Callback funtion to load RNUILib typographies.
   *
   * Useful when the color scheme changes
   */
  const loadTypographies = useCallback(() => {
    Typography.loadTypographies({
      body: { ...typography.light.body1 },
      body2: { ...typography.light.body2 },
      button: { ...typography.light.button },
      caption: { ...typography.light.caption },
      h1: { ...typography.light.h1 },
      h2: { ...typography.light.h2 },
      h3: { ...typography.light.h3 },
      h4: { ...typography.light.h4 },
      h5: { ...typography.light.h5 },
      h6: { ...typography.light.h6 },
      overline: { ...typography.light.overline },
      p: { ...typography.light.paragraph },
      subtitle: { ...typography.light.subtitle1 },
      subtitle2: { ...typography.light.subtitle2 },
    });
  }, []);

  /**
   * Callback funtion to load RNUILib colors & schemes.
   *
   * Useful when the color scheme changes
   */
  const loadColors = useCallback(() => {
    if (theme === 'default') {
      Colors.loadColors(colors.rnuilib.colors);
      Colors.loadSchemes(colors.rnuilib.themes);
      Colors.setScheme('default');
    } else {
      Colors.loadColors({ ...colors.rnuilib.colors, ...colors.rnuilib.themes[theme] });
      Colors.loadSchemes({ dark: {}, light: {} });
      Colors.setScheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    // load spacings
    Spacings.loadSpacings(spacing);

    // load assets
    Object.entries(images).forEach(([key, val]) => {
      if (Number.isInteger(val)) {
        Assets.loadAssetsGroup('default', { [key]: val });
      } else {
        Assets.loadAssetsGroup(key, val);
      }
    });

    loadTypographies();
  }, [loadTypographies]);

  useEffect(() => {
    loadColors();
  }, [colorScheme, theme, loadColors]);

  useEffect(() => {
    // for more information - https://reactnavigation.org/docs/themes
    const MyDefaultTheme = {
      colors: {
        ...DefaultTheme.colors,
        background: Colors.bg,
        // border: Colors.border,
        card: Colors.bgPaper,
        // notification: Colors.secondary,
        primary: Colors.primary,
        text: Colors.text,
      },
      dark: false,
    } satisfies Theme;

    const MyDarkTheme = {
      colors: {
        ...DarkTheme.colors,
        background: Colors.bg,
        // border: Colors.border,
        card: Colors.bgPaper,
        // notification: Colors.secondary,
        primary: Colors.primary,
        text: Colors.text,
      },
      dark: true,
    } satisfies Theme;

    const appearance = theme === 'default' ? colorScheme : theme;

    switch (appearance) {
      case 'dark':
        setNavTheme(MyDarkTheme);
        setStatusBarStyle('light');
        break;
      case 'light':
        setNavTheme(MyDefaultTheme);
        setStatusBarStyle('dark');
        break;
      default:
        setNavTheme(MyDefaultTheme);
        setStatusBarStyle('auto');
        break;
    }

    setStatusBarBGColor(colors.rnuilib.themes[appearance as 'light' | 'dark'].bgPaper);
  }, [theme, colorScheme]);

  return { navTheme, statusBarBGColor, statusBarStyle };
}
