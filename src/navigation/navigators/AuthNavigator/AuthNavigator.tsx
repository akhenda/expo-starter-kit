import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PhoneSignInScreen from '@screens/Auth/PhoneSignIn';
import VerifyPhoneScreen from '@screens/Auth/VerifyPhone';

import type { AuthStackParamList } from './AuthNavigator.props';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = (): React.ReactElement => {
  return (
    <Navigator>
      <Screen name="Sign In" component={PhoneSignInScreen} />
      <Screen name="Verify Phone Number" component={VerifyPhoneScreen} />
    </Navigator>
  );
};

export default AuthNavigator;
