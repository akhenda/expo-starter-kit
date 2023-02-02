import React, { useState } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { SplashNavigator } from '@navigation/navigators/SplashNavigator';
import { NoInternet } from '@src/components';
import { AppNavigator } from '@src/navigation/navigators/AppNavigator';
import ModalScreen from '@src/screens/ModalScreen';

import type { RootStackParamList } from './RootNavigator.props';

const { Navigator, Screen } = createSharedElementStackNavigator<RootStackParamList>();

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootNavigator = () => {
  const [isConnected] = useState(true);

  return (
    <Navigator initialRouteName="Splash Stack" screenOptions={{ headerShown: false }}>
      {isConnected ? (
        <>
          <Screen name="Splash Stack" component={SplashNavigator} />
          <Screen name="App Stack" component={AppNavigator} />
          <Screen name="Modal" component={ModalScreen} options={{ presentation: 'modal' }} />
        </>
      ) : (
        <Screen name="You are Offline" component={NoInternet} />
      )}
    </Navigator>
  );
};

export default RootNavigator;
