import React from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import type { AppStackNavigationProp } from '@navigation/navigators/AppNavigator';
import { MoviesNavigator } from '@navigation/navigators/MoviesNavigator';
import { ProfileNavigator } from '@navigation/navigators/ProfileNavigator';
import { SeriesNavigator } from '@navigation/navigators/SeriesNavigator';
import AboutScreen from '@screens/About';
import ContactDeveloperScreen from '@screens/ContactDeveloper';
import NotificationsScreen from '@screens/Notifications';
import RatingsScreen from '@screens/Ratings';
import {
  BellIcon,
  HomeIcon,
  InfoIcon,
  MobileIcon,
  MoviesIcon,
  PersonIcon,
  StarIcon,
  TVIcon,
} from '@src/components/Icons';
import useColorScheme from '@src/hooks/useColorScheme';
import { colors } from '@src/theme';

import type { HomeBottomTabParamList, HomeDrawerParamList } from './HomeNavigator.props';

const InfoIconButton = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<AppStackNavigationProp<'Home Stack'>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Home Stack', { screen: 'About' })}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <InfoIcon size={25} color={colors[colorScheme].text.primary} marginRight={15} />
    </Pressable>
  );
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();
const BottomTab = createBottomTabNavigator<HomeBottomTabParamList>();

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const HomeBottomNavigator = (): React.ReactElement => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TV Shows Stack"
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TV Shows Stack"
        component={SeriesNavigator}
        options={{
          headerShown: false,
          tabBarIcon: TVIcon,
          title: 'TV Shows',
        }}
      />
      <BottomTab.Screen
        name="Movies Stack"
        component={MoviesNavigator}
        options={{ headerShown: false, tabBarIcon: MoviesIcon, title: 'Movies' }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false, tabBarIcon: BellIcon, title: 'Notifications' }}
      />
      <BottomTab.Screen
        name="Profile Stack"
        component={ProfileNavigator}
        options={{ headerShown: false, tabBarIcon: PersonIcon, title: 'Profile' }}
      />
    </BottomTab.Navigator>
  );
};

const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator screenOptions={{ headerRight: InfoIconButton }}>
    <Drawer.Screen
      name="Home Tabs"
      component={HomeBottomNavigator}
      options={{ drawerIcon: HomeIcon, title: 'ExpoStarter' }}
    />
    <Drawer.Screen name="About" component={AboutScreen} options={{ drawerIcon: InfoIcon, title: 'About' }} />
    <Drawer.Screen
      name="Contact Developer"
      component={ContactDeveloperScreen}
      options={{ drawerIcon: MobileIcon, title: 'Contact Developer' }}
    />
    <Drawer.Screen name="Ratings" component={RatingsScreen} options={{ drawerIcon: StarIcon, title: 'Ratings' }} />
  </Drawer.Navigator>
);

export default HomeNavigator;
