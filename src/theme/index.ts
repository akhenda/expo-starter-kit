import { colors } from './colors';
import metrics, { rfs } from './metrics';
import styles from './styles';
import { typography } from './typography';

export * from './assets';
export * from './colors';
export * from './metrics';
export * from './spacing';
export * from './timing';
export * from './typography';

export const theme = {
  dark: {
    ...colors.dark,
    ...typography.dark,
    ...styles.dark,
  },
  light: {
    ...colors.light,
    ...typography.light,
    ...styles.light,
  },
  metrics,
  rfs,
};
