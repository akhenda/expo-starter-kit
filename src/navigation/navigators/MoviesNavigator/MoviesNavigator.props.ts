import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type MoviesStackParamList = {
  Movies: undefined;
  Movie: undefined;
};

export type MoviesStackScreenProps<Screen extends keyof MoviesStackParamList> = CompositeScreenProps<
  StackScreenProps<MoviesStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
