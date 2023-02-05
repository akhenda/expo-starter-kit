import type { NavigationContainerProps, Theme } from '@react-navigation/native';

import type { RootStackParamList } from '@navigation/navigators/RootNavigator';

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

export type NavigationProps = {
  initialState: NavigationContainerProps['initialState'];
  theme?: Theme;
  onStateChange: NavigationContainerProps['onStateChange'];
};
