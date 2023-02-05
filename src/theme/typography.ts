/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Platform } from 'react-native';
import { Coda_400Regular as codaRegular } from '@expo-google-fonts/coda';
import {
  Ubuntu_400Regular as ubuntuRegular,
  Ubuntu_400Regular_Italic as ubuntuRegularItalic,
  Ubuntu_500Medium as ubuntuMedium,
  Ubuntu_500Medium_Italic as ubuntuMediumItalic,
} from '@expo-google-fonts/ubuntu';

import { colors } from '@src/theme/colors';
import { rfs } from '@src/theme/metrics';

export const customFontsToLoad = {
  codaRegular,
  ubuntuRegular,
  ubuntuRegularItalic,
  ubuntuMedium,
  ubuntuMediumItalic,
};

const fonts = {
  coda: {
    // Cross-platform Google font.
    normal: 'codaRegular',
  } as const,
  ubuntu: {
    // Cross-platform Google font.
    normal: 'ubuntuRegular',
    italic: 'ubuntuRegularItalic',
    medium: 'ubuntuMedium',
    mediumItalic: 'ubuntuMediumItalic',
  } as const,
  helveticaNeue: {
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  },
  courier: {
    // iOS only font.
    normal: 'Courier',
  },
  sansSerif: {
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  },
  monospace: {
    // Android only font.
    normal: 'monospace',
  },
};

/**
 * An object of common font sizes.
 * Uses a responsive font scale helper function
 */
const sizes = {
  small: rfs(12),
  navigation: rfs(18),
  heading: rfs(24),
  title: rfs(20),

  h1: rfs(6 * 16),
  h2: rfs(3.75 * 16),
  h3: rfs(3 * 16),
  h4: rfs(2.125 * 16),
  h5: rfs(1.5 * 16),
  h6: rfs(1.25 * 16),

  subtitle1: rfs(1 * 16),
  subtitle2: rfs(0.875 * 16),

  body1: rfs(1 * 16),
  body2: rfs(0.875 * 16),

  button: rfs(0.875 * 16),
  caption: rfs(0.75 * 16),
  overline: rfs(0.75 * 16),
} as const;

/**
 * An object of common typography styles.
 */
const base = (theme: 'light' | 'dark') => ({
  body: {
    color: theme === 'light' ? colors.light.text.primary : colors.dark.text.primary,
    fontFamily: fonts.ubuntu.normal,
    fontWeight: '400',
  } as const,
  headings: {
    color: theme === 'light' ? colors.light.text.primary : colors.dark.text.primary,
    fontFamily: fonts.coda.normal,
    fontWeight: '300',
  } as const,
});

const styles = (theme: 'light' | 'dark') => ({
  h1: {
    ...base(theme).headings,
    fontSize: sizes.h1,
    lineHeight: 1.167 * sizes.h1,
  },
  h2: {
    ...base(theme).headings,
    fontSize: sizes.h2,
    lineHeight: 1.2 * sizes.h2,
  },
  h3: {
    ...base(theme).headings,
    fontSize: sizes.h3,
    lineHeight: 1.167 * sizes.h3,
    fontWeight: '400',
  },
  h4: {
    ...base(theme).headings,
    fontSize: sizes.h4,
    lineHeight: 1.235 * sizes.h4,
    fontWeight: '400',
  },
  h5: {
    ...base(theme).headings,
    fontSize: sizes.h5,
    lineHeight: 1.334 * sizes.h5,
    fontWeight: '400',
  },
  h6: {
    ...base(theme).headings,
    fontSize: sizes.h6,
    lineHeight: 1.6 * sizes.h6,
    fontWeight: '500',
  },
  subtitle1: {
    // h6
    ...base(theme).body,
    fontSize: sizes.subtitle1,
    lineHeight: 1.75 * sizes.subtitle1,
  },
  subtitle2: {
    // h6
    ...base(theme).body,
    fontSize: sizes.subtitle2,
    fontWeight: '500',
    lineHeight: 1.57 * sizes.subtitle2,
  },
  paragraph: {
    // p
    ...base(theme).body,
    fontSize: sizes.body1,
    lineHeight: 1.5 * sizes.body1,
  },
  body1: {
    // p
    ...base(theme).body,
    fontSize: sizes.body1,
    lineHeight: 1.5 * sizes.body1,
  },
  body2: {
    // p
    ...base(theme).body,
    fontSize: sizes.body2,
    lineHeight: 1.43 * sizes.body2,
  },
  button: {
    // span
    ...base(theme).body,
    fontSize: sizes.button,
    fontWeight: '500',
    lineHeight: 1.75 * sizes.button,
    textTransform: 'uppercase',
  },
  caption: {
    // span
    ...base(theme).body,
    fontSize: sizes.caption,
    lineHeight: 1.66 * sizes.caption,
  },
  overline: {
    // span
    ...base(theme).body,
    fontSize: sizes.overline,
    lineHeight: 2.66 * sizes.overline,
    textTransform: 'uppercase',
  },
});

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,

  /**
   * The primary font. Used in most places.
   */
  primary: fonts.ubuntu,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),

  sizes,

  dark: styles('dark'),
  light: styles('light'),
} as const;
