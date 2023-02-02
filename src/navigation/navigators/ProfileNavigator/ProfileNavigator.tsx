import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditProfileScreen from '@screens/Profile/EditProfile';
import ProfileScreen from '@screens/Profile/Profile';

import type { ProfileStackParamList } from './ProfileNavigator.props';

const { Navigator, Screen } = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Edit Profile" component={EditProfileScreen} />
    </Navigator>
  );
};

export default ProfileNavigator;
