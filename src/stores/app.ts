import { createStore } from '@udecode/zustood';
import { createJSONStorage } from 'zustand/middleware';

import { zustandMMKVStorage } from './mmkv';

const APP_STATE_STORAGE_KEY = '@AppState';

const initialAppState = {
  colorScheme: '',
  haptics: false,
  hasOnboarded: false,
};

export const appStore = createStore('repo')(
  {
    ...initialAppState,
    middlewares: ['persist'],
  },
  {
    persist: {
      name: APP_STATE_STORAGE_KEY,
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  },
)
  .extendActions((set, get) => ({
    changeTheme: (payload: string) => set.colorScheme(payload),
    onboard: () => set.hasOnboarded(true),
    toggleHaptics: () => set.haptics(!get.haptics()),
  }))
  .extendActions((set) => ({
    reset: () => {
      set.haptics(initialAppState.haptics);
      set.colorScheme(initialAppState.colorScheme);
      set.hasOnboarded(initialAppState.hasOnboarded);
    },
  }));
