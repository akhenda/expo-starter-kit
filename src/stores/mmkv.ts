/* eslint-disable import/no-extraneous-dependencies */
import { MMKV } from 'react-native-mmkv';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import type { StateStorage } from 'zustand/middleware';

const storage = new MMKV();

export function getItem<T>(key: string): T {
  const value = storage.getString(key);

  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  storage.delete(key);
}

export const zustandMMKVStorage: StateStorage = {
  getItem: (key) => storage.getString(key) ?? null,
  removeItem: (key) => storage.delete(key),
  setItem: (key, value) => storage.set(key, value),
};

if (__DEV__) initializeMMKVFlipper({ default: storage });

export default storage;
