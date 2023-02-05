/* eslint-disable sort-keys-fix/sort-keys-fix */
/**
 * Stargate Color Pallete: #0099cc,#194351,#29576e,#4285b0,#1c7ab0
 *
 * @see https://coolors.co/0099cc-194351-29576e-4285b0-1c7ab0
 * @see https://www.color-hex.com/color-palette/89198
 */
const stargateColors = {
  blueGreen: '#0099cc',
  midnightGreenEagleGreen: '#194351',
  blueSapphire: '#29576e',
  steelBlue: '#4285b0',
  starCommandBlue: '#1c7ab0',
} as const;

/**
 * https://colors.eva.design/
 */
const palette = {
  primary100: '#D0F6FB',
  primary200: '#A3E8F7',
  primary300: '#72CBE7',
  primary400: '#4CA7CF',
  primary500: '#1C7AB0',
  primary600: '#145F97',
  primary700: '#0E477E',
  primary800: '#083266',
  primary900: '#052454',

  success100: '#EBFBD0',
  success200: '#D3F7A2',
  success300: '#AEE771',
  success400: '#88D04B',
  success500: '#57B21A',
  success600: '#409913',
  success700: '#2D800D',
  success800: '#1D6708',
  success900: '#125504',

  info100: '#D3E4FF',
  info200: '#A8C8FF',
  info300: '#7CA8FF',
  info400: '#5C8EFF',
  info500: '#2663ff',
  info600: '#1B4CDB',
  info700: '#1337B7',
  info800: '#0C2693',
  info900: '#071A7A',

  warning100: '#FEF7CB',
  warning200: '#FEEE98',
  warning300: '#FEE165',
  warning400: '#FDD53F',
  warning500: '#fcc100',
  warning600: '#D8A000',
  warning700: '#B58200',
  warning800: '#926500',
  warning900: '#785000',

  danger100: '#FDE7D0',
  danger200: '#FBC9A1',
  danger300: '#F4A271',
  danger400: '#E97C4D',
  danger500: '#db4518',
  danger600: '#BC2C11',
  danger700: '#9D180C',
  danger800: '#7F0907',
  danger900: '#69040A',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

/**
 * https://bareynol.github.io/mui-theme-creator
 */
const derived = {
  primary: {
    main: palette.primary500,
    light: 'rgb(73, 148, 191)',
    dark: 'rgb(19, 85, 123)',
    contrastText: '#fff',
  },
  secondary: {
    main: palette.success500,
    light: 'rgb(120, 193, 71)',
    dark: 'rgb(60, 124, 18)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: palette.danger500,
    light: 'rgb(226, 106, 70)',
    dark: 'rgb(153, 48, 16)',
    contrastText: 'fff',
  },
  warning: {
    main: palette.warning500,
    light: 'rgb(252, 205, 51)',
    dark: 'rgb(176, 135, 0)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: palette.info500,
    light: 'rgb(81, 130, 255)',
    dark: 'rgb(26, 69, 178)',
    contrastText: '#fff',
  },
  success: {
    main: palette.success500,
    light: 'rgb(120, 193, 71)',
    dark: 'rgb(60, 124, 18)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },

  text: {
    dark: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
    light: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },

  background: {
    dark: {
      default: stargateColors.midnightGreenEagleGreen,
      paper: stargateColors.blueSapphire,
    },
    light: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,

  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',

  derived,

  dark: {
    tint: palette.info100,
    border: derived.text.dark.primary,
    divider: 'rgba(255, 255, 255, 0.12)',
    separator: stargateColors.steelBlue,
    error: derived.error.main,
    errorBackground: derived.error.light,
    text: derived.text.dark,
    background: derived.background.dark,
  },
  light: {
    tint: stargateColors.blueGreen,
    border: derived.text.light.primary,
    divider: 'rgba(0, 0, 0, 0.12)',
    separator: stargateColors.steelBlue,
    error: derived.error.main,
    errorBackground: derived.error.light,
    text: derived.text.light,
    background: derived.background.light,
  },

  rnuilib: {
    colors: {
      bgDark: derived.background.dark.default,
      bgDarkPaper: derived.background.dark.paper,
      bgLight: derived.background.light.default,
      bgLightPaper: derived.background.light.paper,
      black: derived.text.light.primary,
      blacker: derived.text.light.secondary,
      blackish: derived.text.light.disabled,
      error: derived.error.main,
      info: derived.info.main,
      primary: derived.primary.main,
      secondary: derived.secondary.main,
      success: derived.success.main,
      warning: derived.warning.main,
      white: derived.text.dark.primary,
      whiter: derived.text.dark.secondary,
      whitish: derived.text.dark.disabled,
    },

    themes: {
      system: {},
      default: {},
      dark: {
        tint: palette.info100,
        border: derived.text.dark.primary,
        divider: 'rgba(255, 255, 255, 0.12)',
        separator: stargateColors.steelBlue,
        error: derived.error.main,
        errorBg: derived.error.light,
        text: derived.text.dark.primary,
        textSecondary: derived.text.dark.secondary,
        textDisabled: derived.text.dark.disabled,
        textHint: derived.text.dark.hint,
        bg: derived.background.dark.default,
        bgPaper: derived.background.dark.paper,
      },
      light: {
        tint: stargateColors.blueGreen,
        border: derived.text.light.primary,
        divider: 'rgba(0, 0, 0, 0.12)',
        separator: stargateColors.steelBlue,
        error: derived.error.main,
        errorBg: derived.error.light,
        text: derived.text.light.primary,
        textSecondary: derived.text.light.secondary,
        textDisabled: derived.text.light.disabled,
        textHint: derived.text.light.hint,
        bg: derived.background.light.default,
        bgPaper: derived.background.light.paper,
      },
    },
  },
} as const;
