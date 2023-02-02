/**
 * https://reactnavigation.org/docs/typescript/#type-checking-screens-and-params-in-nested-navigator
 */
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

import type { MoviesStackParamList } from '@navigation/navigators/MoviesNavigator/MoviesNavigator.props';
import type { ProfileStackParamList } from '@navigation/navigators/ProfileNavigator/ProfileNavigator.props';
import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';
import type { SeriesStackParamList } from '@navigation/navigators/SeriesNavigator/SeriesNavigator.props';

export type HomeBottomTabParamList = {
  Notifications: undefined;
  'Profile Stack': NavigatorScreenParams<ProfileStackParamList>;
  'Series Stack': NavigatorScreenParams<SeriesStackParamList>;
  'Movies Stack': NavigatorScreenParams<MoviesStackParamList>;
};

export type HomeDrawerParamList = {
  'Home Tabs': NavigatorScreenParams<HomeBottomTabParamList>;
  About: undefined;
  'Contact Developer': undefined;
  Ratings: undefined;
};

export type HomeBottomTabScreenProps<Tab extends keyof HomeBottomTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeBottomTabParamList, Tab>,
  CompositeScreenProps<RootStackScreenProps<keyof RootStackParamList>, DrawerScreenProps<HomeDrawerParamList>>
>;

export type NotificationsScreenProps = HomeBottomTabScreenProps<'Notifications'>;
export type ProfileScreenProps = HomeBottomTabScreenProps<'Profile Stack'>;
export type SeriesScreenProps = HomeBottomTabScreenProps<'Series Stack'>;
export type MoviesScreenProps = HomeBottomTabScreenProps<'Movies Stack'>;

// export type HomeScreenDrawerProps = DrawerContentComponentProps & {
//   navigation: DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>;
//   route: RouteProp<HomeDrawerParamList, 'Home Tabs'>;
// };

// export type NotificationsTabNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<HomeBottomTabParamList, 'Notifications'>,
//   DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
// >;

// export type ProfileTabNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<HomeBottomTabParamList, 'Profile Stack'>,
//   DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
// >;

// export type SeriesTabNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<HomeBottomTabParamList, 'Series Stack'>,
//   DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
// >;

// export type MoviesTabNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<HomeBottomTabParamList, 'Movies Stack'>,
//   DrawerNavigationProp<HomeDrawerParamList, 'Home Tabs'>
// >;
