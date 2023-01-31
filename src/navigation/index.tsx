/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 * https://www.jakallergis.com/proper-react-navigation-v-5-with-type-script
 */
import * as React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import useColorScheme from '@hooks/useColorScheme';

import { RootNavigator } from './navigators/RootNavigator';
import { useLinkingConfig } from './config';
import { navigationRef } from './utils';

export type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>> & object;

export default function Navigation({ initialState, onStateChange }: Partial<NavigationProps>) {
  const colorScheme = useColorScheme();
  const linkingConfig = useLinkingConfig();

  return (
    <NavigationContainer
      linking={linkingConfig}
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      initialState={initialState}
      onStateChange={onStateChange}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
