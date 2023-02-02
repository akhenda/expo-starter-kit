import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type AuthStackParamList = {
  'Sign In': undefined;
  'Verify Phone Number': undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = CompositeScreenProps<
  StackScreenProps<AuthStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
