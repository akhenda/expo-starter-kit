import { StatusBar } from 'expo-status-bar';

import App from './src';

export default function MainApp() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <App />
    </>
  );
}
