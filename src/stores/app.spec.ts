import { act, renderHook } from '@testing-library/react-native';

import { appStore } from './app';

const useAppStore = appStore.useStore;

describe('App store', () => {
  it('has initial state', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.haptics).toBe(false);
    expect(result.current.hasOnboarded).toBe(false);
    expect(result.current.theme).toBe('default');
  });

  it('updates the theme when changeTheme action is called', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      appStore.set.changeTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
  });

  it('onboarding a user works as expected', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.hasOnboarded).toBeFalse();

    act(() => {
      appStore.set.onboard();
    });

    expect(result.current.hasOnboarded).toBeTrue();
  });

  it('haptics are toggled when toggleHaptics is fired', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.haptics).toBeFalse();

    act(() => {
      appStore.set.toggleHaptics();
    });

    expect(result.current.haptics).toBeTrue();

    act(() => {
      appStore.set.toggleHaptics();
    });

    expect(result.current.haptics).toBeFalse();
  });

  it('computed property isSystemTheme works as expected', () => {
    expect(appStore.get.isSystemTheme()).toBeTrue();

    act(() => {
      appStore.set.changeTheme('dark');
    });

    expect(appStore.get.isSystemTheme()).toBeFalse();

    act(() => {
      appStore.set.changeTheme('light');
    });

    expect(appStore.get.isSystemTheme()).toBeFalse();

    act(() => {
      appStore.set.changeTheme('default');
    });

    expect(appStore.get.isSystemTheme()).toBeTrue();
  });

  it('reset state works correctly', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      appStore.set.onboard();
      appStore.set.toggleHaptics();
      appStore.set.changeTheme('dark');
    });

    expect(appStore.get.isSystemTheme()).toBeFalse();
    expect(result.current.hasOnboarded).toBeTrue();
    expect(result.current.haptics).toBeTrue();
    expect(result.current.theme).toEqual('dark');

    act(() => {
      appStore.set.reset();
    });

    expect(appStore.get.isSystemTheme()).toBeTrue();
    expect(result.current.hasOnboarded).toBeFalse();
    expect(result.current.haptics).toBeFalse();
    expect(result.current.theme).toBe('default');
  });
});
