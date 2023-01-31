import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from '@navigation/navigators/AuthNavigator';
import { HomeNavigator } from '@navigation/navigators/HomeNavigator';
import NotAuthorizedScreen from '@screens/Auth/NotAuthorized';
import EditProfileScreen from '@screens/Profile/EditProfile';

import type { AppStackParamList } from './AppNavigator.props';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const isAuthenticated = true;
const isAuthorized = false;
const profile = { firstName: 'John', lastName: 'Doe', phoneNumber: 123 };

const AppNavigator = () => {
  return (
    <Navigator>
      {!isAuthenticated ? (
        <Screen name="Auth Stack" component={AuthNavigator} options={{ headerShown: false }} />
      ) : null}
      {!isAuthorized ? <Screen name="You are not Authorized" component={NotAuthorizedScreen} /> : null}
      {!profile.firstName || !profile.lastName || !profile.phoneNumber ? (
        <Screen name="Edit Profile" component={EditProfileScreen} initialParams={{ isFirstTime: true }} />
      ) : (
        <Screen name="Home Stack" component={HomeNavigator} options={{ headerShown: false }} />
      )}
    </Navigator>
  );
};

export default AppNavigator;
