import { createStackNavigator } from '@react-navigation/stack';

import SeriesScreen from '@screens/Series';

import type { SeriesStackParamList } from './SeriesNavigator.props';

const { Navigator, Screen } = createStackNavigator<SeriesStackParamList>();

const SeriesNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TV Shows" component={SeriesScreen} />
      <Screen name="TV Show" component={SeriesScreen} />
    </Navigator>
  );
};

export default SeriesNavigator;
