import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MoviesScreen from '@screens/Movies';

import type { MoviesStackParamList } from './MoviesNavigator.props';

const { Navigator, Screen } = createNativeStackNavigator<MoviesStackParamList>();

const MoviesNavigator = (): React.ReactElement => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Movies" component={MoviesScreen} />
      <Screen name="Movie" component={MoviesScreen} />
    </Navigator>
  );
};

export default MoviesNavigator;
