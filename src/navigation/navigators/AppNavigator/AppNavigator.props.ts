import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type { AuthStackParamList } from '@navigation/navigators/AuthNavigator/AuthNavigator.props';
import type { HomeDrawerParamList } from '@navigation/navigators/HomeNavigator/HomeNavigator.props';
import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type AppStackParamList = {
  'Auth Stack': NavigatorScreenParams<AuthStackParamList>;
  'Home Stack': NavigatorScreenParams<HomeDrawerParamList>;
  'You are not Authorized': undefined;
  'Edit Profile': { isFirstTime: boolean };
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> = CompositeScreenProps<
  StackScreenProps<AppStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
