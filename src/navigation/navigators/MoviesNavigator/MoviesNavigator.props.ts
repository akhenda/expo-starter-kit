import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type MoviesStackParamList = {
  Movies: undefined;
  Movie: undefined;
};

export type MoviesStackRouteProp<Route extends keyof MoviesStackParamList> = RouteProp<MoviesStackParamList, Route>;
export type MoviesStackNavigationProp<Route extends keyof MoviesStackParamList> = NativeStackNavigationProp<
  MoviesStackParamList,
  Route
>;

export type MoviesStackScreenProps<Screen extends keyof MoviesStackParamList> = NativeStackScreenProps<
  MoviesStackParamList,
  Screen
>;

export interface MoviesScreenProps {
  navigation: MoviesStackNavigationProp<'Movies'>;
  route: MoviesStackRouteProp<'Movies'>;
}

export interface MovieScreenProps {
  navigation: MoviesStackNavigationProp<'Movie'>;
  route: MoviesStackRouteProp<'Movie'>;
}
