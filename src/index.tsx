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
// eslint-disable-next-line simple-import-sort/imports
import './config/libs/i18n';

import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import useOnAppStart from './hooks/useOnAppStart';
import Navigation from './navigation';
import { ErrorBoundary } from './screens/ErrorScreen/ErrorBoundary';
import Config from './config';

export default function App() {
  const { isFontsLoadingComplete, isNavigationStateRestored, initialNavigationState, onNavigationStateChange } =
    useOnAppStart();

  if (!isFontsLoadingComplete || !isNavigationStateRestored) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <StatusBar />
        <Navigation initialState={initialNavigationState} onStateChange={onNavigationStateChange} />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
