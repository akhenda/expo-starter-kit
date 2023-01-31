import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type SeriesStackParamList = {
  'TV Shows': undefined;
  'TV Show': undefined;
};

export type SeriesStackRouteProp<Route extends keyof SeriesStackParamList> = RouteProp<SeriesStackParamList, Route>;
export type SeriesStackNavigationProp<Route extends keyof SeriesStackParamList> = NativeStackNavigationProp<
  SeriesStackParamList,
  Route
>;

export type SeriesStackScreenProps<Route extends keyof SeriesStackParamList> = NativeStackScreenProps<
  SeriesStackParamList,
  Route
>;

export interface TVShowsScreenProps {
  navigation: SeriesStackNavigationProp<'TV Shows'>;
  route: SeriesStackRouteProp<'TV Shows'>;
}

export interface TVShowScreenProps {
  navigation: SeriesStackNavigationProp<'TV Show'>;
  route: SeriesStackRouteProp<'TV Show'>;
}
