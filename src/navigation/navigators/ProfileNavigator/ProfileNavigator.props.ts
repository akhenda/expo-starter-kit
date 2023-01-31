import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProfileStackParamList = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileStackRouteProp<Route extends keyof ProfileStackParamList> = RouteProp<ProfileStackParamList, Route>;
export type ProfileStackNavigationProp<Route extends keyof ProfileStackParamList> = NativeStackNavigationProp<
  ProfileStackParamList,
  Route
>;

export type ProfileStackScreenProps<Screen extends keyof ProfileStackParamList> = NativeStackScreenProps<
  ProfileStackParamList,
  Screen
>;

export interface ProfileScreenProps {
  navigation: ProfileStackNavigationProp<'Profile'>;
  route: ProfileStackRouteProp<'Profile'>;
}

export interface EditProfileScreenProps {
  navigation: ProfileStackNavigationProp<'Edit Profile'>;
  route: ProfileStackRouteProp<'Edit Profile'>;
}
