import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SeriesScreen from '@screens/Series';

import type { SeriesStackParamList } from './SeriesNavigator.props';

const { Navigator, Screen } = createNativeStackNavigator<SeriesStackParamList>();

const SeriesNavigator = (): React.ReactElement => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="TV Shows" component={SeriesScreen} />
      <Screen name="TV Show" component={SeriesScreen} />
    </Navigator>
  );
};

export default SeriesNavigator;
