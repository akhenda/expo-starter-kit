// eslint-disable-next-line simple-import-sort/imports
import '@src/config/i18n';

import { StatusBar } from 'expo-status-bar';

import Entry from './src';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Entry />
    </>
  );
}
