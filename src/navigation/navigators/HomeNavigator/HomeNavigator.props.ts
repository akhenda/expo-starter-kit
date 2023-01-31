import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp } from '@react-navigation/core';
import type { DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import type { CompositeScreenProps, NavigatorScreenParams, RouteProp } from '@react-navigation/native';

import type { MoviesStackParamList } from '@navigation/navigators/MoviesNavigator/MoviesNavigator.props';
import type { ProfileStackParamList } from '@navigation/navigators/ProfileNavigator/ProfileNavigator.props';
import type { RootStackParamList, RootStackScreenProps } from '@navigation/navigators/RootNavigator';
import type { SeriesStackParamList } from '@navigation/navigators/SeriesNavigator/SeriesNavigator.props';

export type HomeBottomTabParamList = {
  Notifications: undefined;
  'Profile Stack': NavigatorScreenParams<ProfileStackParamList>;
  'TV Shows Stack': NavigatorScreenParams<SeriesStackParamList>;
  'Movies Stack': NavigatorScreenParams<MoviesStackParamList>;
};

export type HomeDrawerParamList = {
  'Home Tabs': NavigatorScreenParams<HomeBottomTabParamList>;
  About: undefined;
  'Contact Developer': undefined;
  Ratings: undefined;
};

export type HomeBottomTabScreenProps<T extends keyof HomeBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeBottomTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type HomeScreenDrawerProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>;
  route: RouteProp<HomeDrawerParamList, 'Home Tabs'>;
};

export type NotificationsTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabParamList, 'Notifications'>,
  DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabParamList, 'Profile Stack'>,
  DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
>;

export type SeriesTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabParamList, 'TV Shows Stack'>,
  DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
>;

export type MoviesTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabParamList, 'Movies Stack'>,
  DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
>;
