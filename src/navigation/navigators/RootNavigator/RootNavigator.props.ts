import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AppStackParamList } from '@navigation/navigators/AppNavigator/AppNavigator.props';
import type { SplashStackParamList } from '@navigation/navigators/SplashNavigator/SplashNavigator.props';

export type RootStackParamList = {
  'Splash Stack': NavigatorScreenParams<SplashStackParamList>;
  'App Stack': NavigatorScreenParams<AppStackParamList>;
  'You are Offline': undefined;
  Modal: undefined;
};

export type RootStackRouteProp<Route extends keyof RootStackParamList> = RouteProp<RootStackParamList, Route>;
export type RootStackNavigationProp<Route extends keyof RootStackParamList> = NativeStackNavigationProp<
  RootStackParamList,
  Route
>;

export type RootStackScreenProps<Route extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Route
>;
