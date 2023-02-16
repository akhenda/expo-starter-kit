import { useCallback, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useNavigationPersistence } from '@src/navigation/utils';
import { setupReactotron } from '@src/services/reactotron';
import { customFontsToLoad } from '@src/theme/typography';

import useTheme from './useTheme';

SplashScreen.preventAutoHideAsync();

// Set up Reactotron, which is a free desktop app for inspecting and debugging
// React Native apps. Learn more here: https://github.com/infinitered/reactotron
setupReactotron({
  // clear the Reactotron window when the app loads/reloads
  clearOnLoad: true,

  // generally going to be localhost
  host: 'localhost',

  // log the initial restored state from AsyncStorage
  logInitialState: true,

  // Reactotron can monitor AsyncStorage for you
  useAsyncStorage: true,
});

export default function useOnAppStart() {
  const { navTheme, statusBarBGColor, statusBarStyle } = useTheme();
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence();

  const [appIsReady, setAppIsReady] = useState(false);
  const [isFontsLoadingComplete, setFontsLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          // eslint-disable-next-line global-require
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          ...customFontsToLoad,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setFontsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
    // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
    // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
    // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
    if (isNavigationStateRestored && isFontsLoadingComplete) {
      setTimeout(() => {
        setAppIsReady(true);
      }, 200);
    }
  }, [isFontsLoadingComplete, isNavigationStateRestored]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return {
    appIsReady,
    initialNavigationState,
    navTheme,
    onLayoutRootView,
    onNavigationStateChange,
    statusBarBGColor,
    statusBarStyle,
  };
}
