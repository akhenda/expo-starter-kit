import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AuthStackParamList } from '@navigation/navigators/AuthNavigator/AuthNavigator.props';
import type { HomeDrawerParamList } from '@navigation/navigators/HomeNavigator/HomeNavigator.props';

export type AppStackParamList = {
  'Auth Stack': NavigatorScreenParams<AuthStackParamList>;
  'Home Stack': NavigatorScreenParams<HomeDrawerParamList>;
  'You are not Authorized': undefined;
  'Edit Profile': { isFirstTime: boolean };
};

export type AppStackRouteProp<Route extends keyof AppStackParamList> = RouteProp<AppStackParamList, Route>;
export type AppStackNavigationProp<Route extends keyof AppStackParamList> = NativeStackNavigationProp<
  AppStackParamList,
  Route
>;

export type AppStackScreenProps<Route extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  Route
>;
