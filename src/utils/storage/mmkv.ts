import { MMKV } from 'react-native-mmkv';
import type { StateStorage } from 'zustand/middleware';

const storage = new MMKV();

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string) {
  try {
    return storage.getString(key);
  } catch {
    return undefined;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string) {
  try {
    storage.set(key, value);

    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load(key: string) {
  try {
    const almostThere = storage.getString(key);

    return almostThere ? JSON.parse(almostThere) : null;
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save<T = unknown>(key: string, value: T) {
  try {
    storage.set(key, JSON.stringify(value));

    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string) {
  try {
    storage.delete(key);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

/**
 * Burn it all to the ground.
 */
export function clear() {
  try {
    storage.clearAll();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

/**
 * Zustand MMKV interface
 */
export const zustandMMKVStorage: StateStorage = {
  getItem: (key) => storage.getString(key) ?? null,
  removeItem: (key) => storage.delete(key),
  setItem: (key, value) => storage.set(key, value),
};

export const mmkvStorage = {
  clear,
  load,
  loadString,
  remove,
  save,
  saveString,
};

export default storage;
