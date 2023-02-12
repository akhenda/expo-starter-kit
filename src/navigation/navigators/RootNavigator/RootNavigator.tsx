import React, { useEffect } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';

import { SplashNavigator } from '@navigation/navigators/SplashNavigator';
import { AppNavigator } from '@src/navigation/navigators/AppNavigator';
import ModalScreen from '@src/screens/ModalScreen';
import { NoInternet } from '@src/screens/NoInternet';

import type { RootStackParamList } from './RootNavigator.props';

const { Navigator, Screen } = createSharedElementStackNavigator<RootStackParamList>();

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootNavigator = () => {
  const { isConnected } = useNetInfo();
  const navigation = useNavigation();

  useEffect(() => {
    if (isConnected === false) navigation.navigate('You are Offline');
  }, [isConnected, navigation]);

  return (
    <Navigator initialRouteName="Splash Stack" screenOptions={{ headerShown: false }}>
      <Screen name="Splash Stack" component={SplashNavigator} />
      <Screen name="App Stack" component={AppNavigator} />
      <Screen name="Modal" component={ModalScreen} options={{ presentation: 'modal' }} />
      <Screen
        name="You are Offline"
        component={NoInternet}
        options={{ gestureEnabled: false, presentation: 'modal' }}
      />
    </Navigator>
  );
};

export default RootNavigator;
