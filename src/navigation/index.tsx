/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 * https://www.jakallergis.com/proper-react-navigation-v-5-with-type-script
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './navigators/RootNavigator';
import { useLinkingConfig } from './config';
import type { NavigationProps } from './types';
import { navigationRef } from './utils';

export default function Navigation({ initialState, theme, onStateChange }: NavigationProps) {
  const linkingConfig = useLinkingConfig();

  return (
    <NavigationContainer
      linking={linkingConfig}
      ref={navigationRef}
      theme={theme}
      initialState={initialState}
      onStateChange={onStateChange}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
