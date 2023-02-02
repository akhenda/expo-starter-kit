import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type ProfileStackParamList = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileStackScreenProps<Screen extends keyof ProfileStackParamList> = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
