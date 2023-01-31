import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type SplashStackParamList = {
  Splash: undefined;
  'Welcome to ExpoStarter': undefined;
};

export type SplashStackRouteProp<Route extends keyof SplashStackParamList> = RouteProp<SplashStackParamList, Route>;
export type SplashStackNavigationProp<Route extends keyof SplashStackParamList> = NativeStackNavigationProp<
  SplashStackParamList,
  Route
>;

export type SplashStackScreenProps<Screen extends keyof SplashStackParamList> = NativeStackScreenProps<
  SplashStackParamList,
  Screen
>;

export interface SplashScreenProps {
  navigation: SplashStackNavigationProp<'Splash'>;
  route: SplashStackRouteProp<'Splash'>;
}

export interface OnboardingScreenProps {
  navigation: SplashStackNavigationProp<'Welcome to ExpoStarter'>;
  route: SplashStackRouteProp<'Welcome to ExpoStarter'>;
}
