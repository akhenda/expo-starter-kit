import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { createNavigationContainerRef, NavigationState, useNavigation } from '@react-navigation/native';

import type { PersistNavigationConfig } from '@config/config.base';
import Config from '@src/config';
import { useIsMounted } from '@src/hooks/useLifecycle';
import { mmkvStorage as storage } from '@src/services/storage';

import type { RootStackParamList } from './navigators/RootNavigator';

export const NAVIGATION_PERSISTENCE_KEY = '@NAVIGATION_STATE';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(state?: NavigationState<RootStackParamList>): keyof RootStackParamList {
  if (!state || !state.index) return 'App Stack';

  const route = state.routes[state.index];

  if (!route) return 'App Stack';

  // Found the active route -- return the name
  if (!route.state) return route.name;

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state as NavigationState<RootStackParamList>);
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: keyof RootStackParamList) => boolean) {
  // The reason we're using a ref here is because we need to be able
  // to update the canExit function without re-setting up all the listeners
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) return false;

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState() as NavigationState<RootStackParamList>);

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        BackHandler.exitApp();

        return true;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();

        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
}

/**
 * This helper function will determine whether we should enable navigation persistence
 * based on a config setting and the __DEV__ environment (dev or prod).
 */
function navigationRestoredDefaultState(persistNavigation: PersistNavigationConfig) {
  if (persistNavigation === 'always') return false;
  if (persistNavigation === 'dev' && __DEV__) return false;
  if (persistNavigation === 'prod' && !__DEV__) return false;

  // all other cases, disable restoration by returning true
  return true;
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(persistenceKey: string = NAVIGATION_PERSISTENCE_KEY) {
  const isMounted = useIsMounted();
  const routeNameRef = useRef<string | undefined>();
  const initNavState = navigationRestoredDefaultState(Config.persistNavigation);

  const [initialNavigationState, setInitialNavigationState] = useState<NavigationState<RootStackParamList>>();
  const [isRestored, setIsRestored] = useState(initNavState);

  const onNavigationStateChange = (state?: NavigationState) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state as NavigationState<RootStackParamList>);

    if (previousRouteName !== currentRouteName) {
      // track screens.
      if (__DEV__)
        // eslint-disable-next-line no-console
        console.tron.display?.({
          name: 'currentRouteName',
          preview: currentRouteName,
          value: currentRouteName,
        });
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    storage.save(persistenceKey, state);
  };

  const restoreState = useCallback(async () => {
    try {
      const state = (await storage.load(persistenceKey)) as NavigationState<RootStackParamList>;

      if (state) setInitialNavigationState(state);
    } finally {
      if (isMounted()) setIsRestored(true);
    }
  }, [persistenceKey, isMounted]);

  useEffect(() => {
    if (!isRestored) restoreState();
  }, [isRestored, restoreState]);

  return { initialNavigationState, isRestored, onNavigationStateChange, restoreState };
}

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useHeader.md)
 */
export function useHeader(header: React.ReactNode, deps: unknown[] = []) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header,
      headerShown: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, header, navigation]);
}

/**
 * use this to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(...args: Parameters<typeof navigationRef.navigate>): void {
  if (navigationRef.isReady()) navigationRef.navigate(...args);
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) navigationRef.goBack();
}

export function resetRoot(params = { index: 0, routes: [] }) {
  if (navigationRef.isReady()) navigationRef.resetRoot(params);
}
