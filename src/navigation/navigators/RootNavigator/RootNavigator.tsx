import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashNavigator } from '@navigation/navigators/SplashNavigator';
import { NoInternet } from '@src/components';
import { AppNavigator } from '@src/navigation/navigators/AppNavigator';
import ModalScreen from '@src/screens/ModalScreen';

import type { RootStackParamList } from './RootNavigator.props';

const { Navigator, Screen, Group } = createNativeStackNavigator<RootStackParamList>();

const isConnected = true;

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="App Stack" screenOptions={{ headerShown: false }}>
      {isConnected ? (
        <>
          <Screen name="App Stack" component={AppNavigator} />
          <Screen name="Splash Stack" component={SplashNavigator} />
          <Group screenOptions={{ presentation: 'modal' }}>
            <Screen name="Modal" component={ModalScreen} />
          </Group>
        </>
      ) : (
        <Screen name="You are Offline" component={NoInternet} />
      )}
    </Navigator>
  );
};

export default RootNavigator;
