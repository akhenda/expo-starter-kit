import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '@screens/Onboarding';
import SplashScreen from '@screens/Splash';

import type { SplashStackParamList } from './SplashNavigator.props';

const { Navigator, Screen } = createNativeStackNavigator<SplashStackParamList>();

const SplashNavigator = (): React.ReactElement => {
  return (
    <Navigator>
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="Welcome to ExpoStarter" component={OnboardingScreen} />
    </Navigator>
  );
};

export default SplashNavigator;
