import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  'Sign In': undefined;
  'Verify Phone Number': undefined;
};

export type AuthStackRouteProp<Route extends keyof AuthStackParamList> = RouteProp<AuthStackParamList, Route>;
export type AuthStackNavigationProp<Route extends keyof AuthStackParamList> = NativeStackNavigationProp<
  AuthStackParamList,
  Route
>;

export type AuthStackScreenProps<Route extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Route
>;

export interface PhoneSignInScreenProps {
  navigation: AuthStackNavigationProp<'Sign In'>;
  route: AuthStackRouteProp<'Sign In'>;
}

export interface VerifyPhoneScreenProps {
  navigation: AuthStackNavigationProp<'Verify Phone Number'>;
  route: AuthStackRouteProp<'Verify Phone Number'>;
}
