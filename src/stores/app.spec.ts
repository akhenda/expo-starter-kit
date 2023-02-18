import { act, renderHook } from '@testing-library/react-native';

import { appStore } from './app';

const useAppStore = appStore.useStore;

describe('App store', () => {
  describe('when first create', () => {
    it('initialize default state', () => {
      const { result } = renderHook(() => useAppStore());

      expect(result.current.haptics).toBe(false);
      expect(result.current.hasOnboarded).toBe(false);
      expect(result.current.theme).toBe('default');
    });
  });

  describe('when changeTheme', () => {
    it('updates the theme', () => {
      const { result } = renderHook(() => useAppStore());

      act(() => {
        appStore.set.changeTheme('dark');
      });

      expect(result.current.theme).toBe('dark');
    });
  });
});
