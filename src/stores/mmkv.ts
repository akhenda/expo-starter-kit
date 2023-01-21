/* eslint-disable import/no-extraneous-dependencies */
import { MMKV } from 'react-native-mmkv';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import type { StateStorage } from 'zustand/middleware';

const storage = new MMKV();

export const zustandMMKVStorage: StateStorage = {
  getItem: (key) => storage.getString(key) ?? null,
  removeItem: (key) => storage.delete(key),
  setItem: (key, value) => storage.set(key, value),
};

if (__DEV__) initializeMMKVFlipper({ default: storage });

export default storage;
