import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '@screens/Onboarding';
import SplashScreen from '@screens/Splash';

import type { SplashStackParamList } from './SplashNavigator.props';

const { Navigator, Screen } = createStackNavigator<SplashStackParamList>();

const SplashNavigator = () => {
  return (
    <Navigator>
      <Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Screen name="Welcome to ExpoStarter" component={OnboardingScreen} />
    </Navigator>
  );
};

export default SplashNavigator;
