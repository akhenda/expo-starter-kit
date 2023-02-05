import type { SchemeType } from 'react-native-ui-lib';
import { createStore } from '@udecode/zustood';
import { createJSONStorage } from 'zustand/middleware';

import Config from '@src/config';
import { zustandMMKVStorage } from '@src/utils/storage/mmkv';

const APP_STATE_STORAGE_KEY = '@AppState';

export type AppState = {
  theme: SchemeType;
  haptics: boolean;
  hasOnboarded: boolean;
};

const initialAppState = {
  haptics: false,
  hasOnboarded: false,
  theme: 'default',
} satisfies AppState;

export const appStore = createStore('app')<AppState>(initialAppState, {
  devtools: {
    enabled: Config.USE_ZUSTAND_DEV_TOOLS,
  },
  persist: {
    enabled: true,
    name: APP_STATE_STORAGE_KEY,
    storage: createJSONStorage(() => zustandMMKVStorage),
  },
})
  .extendSelectors((_, get) => ({
    isSystemTheme: () => get.theme() === 'default',
  }))
  .extendActions((set, get) => ({
    changeTheme: (payload: SchemeType) => set.theme(payload),
    onboard: () => set.hasOnboarded(true),
    toggleHaptics: () => set.haptics(!get.haptics()),
  }))
  .extendActions((set) => ({
    reset: () => {
      const { theme, haptics, hasOnboarded } = initialAppState;

      set.haptics(haptics);
      set.theme(theme);
      set.hasOnboarded(hasOnboarded);
    },
  }));
