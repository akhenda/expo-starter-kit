import { createStackNavigator } from '@react-navigation/stack';

import PhoneSignInScreen from '@screens/Auth/PhoneSignIn';
import VerifyPhoneScreen from '@screens/Auth/VerifyPhone';

import type { AuthStackParamList } from './AuthNavigator.props';

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Navigator>
      <Screen name="Sign In" component={PhoneSignInScreen} />
      <Screen name="Verify Phone Number" component={VerifyPhoneScreen} />
    </Navigator>
  );
};

export default AuthNavigator;
