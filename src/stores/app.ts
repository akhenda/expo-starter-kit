import { createStore } from '@udecode/zustood';
import { createJSONStorage } from 'zustand/middleware';

import { zustandMMKVStorage } from '@src/utils/storage/mmkv';

const APP_STATE_STORAGE_KEY = '@AppState';

const initialAppState = {
  colorScheme: '',
  haptics: false,
  hasOnboarded: false,
};

export const appStore = createStore('app')(initialAppState, {
  devtools: {
    enabled: __DEV__,
  },
  persist: {
    enabled: true,
    name: APP_STATE_STORAGE_KEY,
    storage: createJSONStorage(() => zustandMMKVStorage),
  },
})
  .extendActions((set, get) => ({
    changeTheme: (payload: string) => set.colorScheme(payload),
    onboard: () => set.hasOnboarded(true),
    toggleHaptics: () => set.haptics(!get.haptics()),
  }))
  .extendActions((set) => ({
    reset: () => {
      const { colorScheme, haptics, hasOnboarded } = initialAppState;

      set.haptics(haptics);
      set.colorScheme(colorScheme);
      set.hasOnboarded(hasOnboarded);
    },
  }));
