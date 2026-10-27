import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { safeHideNativeTabBar, safeRestoreNativeTabBar } from '@/src/tabbar/core/native.uts';
import { needHideNativeTabbar } from '@/src/tabbar/core/strategy.uts';

describe('native tabbar safety', () => {
  beforeEach(() => {
    const existing = document.getElementById('hide-native-tabbar-style');
    if (existing != null) {
      existing.remove();
    }
  });

  afterEach(() => {
    const existing = document.getElementById('hide-native-tabbar-style');
    if (existing != null) {
      existing.remove();
    }
  });

  it('does not inject hide-native-tabbar-style when needHideNativeTabbar is false', () => {
    if (!needHideNativeTabbar) {
      safeHideNativeTabBar();
      expect(document.getElementById('hide-native-tabbar-style')).toBeNull();
    }
  });

  it('cleans up hide-native-tabbar-style when safeRestoreNativeTabBar is called in non-mode2', () => {
    if (!needHideNativeTabbar) {
      const dummy = document.createElement('style');
      dummy.id = 'hide-native-tabbar-style';
      document.head.appendChild(dummy);
      expect(document.getElementById('hide-native-tabbar-style')).not.toBeNull();

      safeRestoreNativeTabBar();
      expect(document.getElementById('hide-native-tabbar-style')).toBeNull();
    }
  });
});
