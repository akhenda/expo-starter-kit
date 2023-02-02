import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type SplashStackParamList = {
  Splash: undefined;
  'Welcome to ExpoStarter': undefined;
};

export type SplashStackScreenProps<Screen extends keyof SplashStackParamList> = CompositeScreenProps<
  StackScreenProps<SplashStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
