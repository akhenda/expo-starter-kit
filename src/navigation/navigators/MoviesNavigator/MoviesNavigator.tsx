import { createStackNavigator } from '@react-navigation/stack';

import MoviesScreen from '@screens/Movies';

import type { MoviesStackParamList } from './MoviesNavigator.props';

const { Navigator, Screen } = createStackNavigator<MoviesStackParamList>();

const MoviesNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Movies" component={MoviesScreen} />
      <Screen name="Movie" component={MoviesScreen} />
    </Navigator>
  );
};

export default MoviesNavigator;
