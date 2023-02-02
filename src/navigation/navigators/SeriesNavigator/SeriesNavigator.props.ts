import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type {
  RootStackParamList,
  RootStackScreenProps,
} from '@navigation/navigators/RootNavigator/RootNavigator.props';

export type SeriesStackParamList = {
  'TV Shows': undefined;
  'TV Show': undefined;
};

export type SeriesStackScreenProps<Screen extends keyof SeriesStackParamList> = CompositeScreenProps<
  StackScreenProps<SeriesStackParamList, Screen>,
  RootStackScreenProps<keyof RootStackParamList>
>;
