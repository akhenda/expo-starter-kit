/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./src/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import useOnAppStart from './hooks/useOnAppStart';
import { ErrorBoundary } from './screens/ErrorScreen/ErrorBoundary';
import Config from './config';
import Navigation from './navigation';

export default function Main() {
  const {
    appIsReady,
    initialNavigationState,
    onNavigationStateChange,
    navTheme,
    statusBarBGColor,
    statusBarStyle,
    onLayoutRootView,
  } = useOnAppStart();

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} onLayout={onLayoutRootView}>
      <ErrorBoundary catchErrors={Config.catchErrors} navTheme={navTheme}>
        <StatusBar style={statusBarStyle} backgroundColor={statusBarBGColor} />
        <Navigation initialState={initialNavigationState} onStateChange={onNavigationStateChange} theme={navTheme} />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
