/* eslint-disable sort-keys-fix/sort-keys-fix */
/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  micro: 2,
  extraSmall: 8,
  tiny: 4,
  medium: 16,
  small: 12,
  extraLarge: 32,
  large: 24,
  huge: 48,
  massive: 64,
} as const;

export type Spacing = keyof typeof spacing;
