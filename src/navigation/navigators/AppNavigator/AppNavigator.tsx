/* eslint-disable no-nested-ternary */
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { AuthNavigator } from '@navigation/navigators/AuthNavigator';
import { HomeNavigator } from '@navigation/navigators/HomeNavigator';
import NotAuthorizedScreen from '@screens/Auth/NotAuthorized';
import EditProfileScreen from '@screens/Profile/EditProfile';

import type { AppStackParamList } from './AppNavigator.props';

const { Navigator, Screen } = createSharedElementStackNavigator<AppStackParamList>();

const fakeToken = { isAuthenticated: true, isAuthorized: true };
const profile = { firstName: 'John', lastName: 'Doe', phoneNumber: 123 };
const { isAuthenticated, isAuthorized } = fakeToken;

const AppNavigator = () => {
  return (
    <Navigator>
      {isAuthenticated ? (
        isAuthorized ? (
          !profile.firstName || !profile.lastName || !profile.phoneNumber ? (
            <Screen name="Edit Profile" component={EditProfileScreen} initialParams={{ isFirstTime: true }} />
          ) : (
            <Screen
              name="Home Stack"
              component={HomeNavigator}
              options={{ headerShown: false }}
              sharedElements={() => ['logo']}
            />
          )
        ) : (
          <Screen name="You are not Authorized" component={NotAuthorizedScreen} />
        )
      ) : (
        <Screen name="Auth Stack" component={AuthNavigator} options={{ headerShown: false }} />
      )}
    </Navigator>
  );
};

export default AppNavigator;
