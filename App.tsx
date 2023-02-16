import { StatusBar } from 'expo-status-bar';

import '@src/config/init';

import Main from './src';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Main />
    </>
  );
}
