import type { NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type { AppStackParamList } from '@navigation/navigators/AppNavigator/AppNavigator.props';
import type { SplashStackParamList } from '@navigation/navigators/SplashNavigator/SplashNavigator.props';

export type RootStackParamList = {
  'Splash Stack': NavigatorScreenParams<SplashStackParamList>;
  'App Stack': NavigatorScreenParams<AppStackParamList>;
  'You are Offline': undefined;
  Modal: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>;
