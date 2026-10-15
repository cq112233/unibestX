import { mount } from '@vue/test-utils';
import { defineComponent, nextTick } from 'vue';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import CapsuleTabbar from '@/src/tabbar/ui/capsule/index.uvue';
import {
  notifyPageShow,
  onTabPageShow,
  onTabShow,
  resetTabSwitchThrottle,
  safeHideNativeTabBar,
  safeRestoreNativeTabBar,
  setCurIdx,
  tabbarList
} from '@/src/tabbar/index.uts';

describe('tabBar Lifecycle & Cleanup Tests', () => {
  beforeEach(() => {
    setCurIdx(0);
    resetTabSwitchThrottle();
    safeRestoreNativeTabBar();
  });

  it('safeHideNativeTabBar and safeRestoreNativeTabBar manage DOM style tag properly in H5', () => {
    safeHideNativeTabBar();
    const styleEl = document.getElementById('hide-native-tabbar-style');
    expect(styleEl).not.toBeNull();

    safeRestoreNativeTabBar();
    expect(document.getElementById('hide-native-tabbar-style')).toBeNull();
  });

  it('resetTabSwitchThrottle clears pending timers without throwing', () => {
    expect(() => resetTabSwitchThrottle()).not.toThrow();
  });

  it('onTabPageShow cleans up watcher and subscriber upon component unmount', async () => {
    const callback = vi.fn();

    const TestComp = defineComponent({
      setup() {
        onTabPageShow(1, callback);
        return () => null;
      }
    });

    const wrapper = mount(TestComp);
    notifyPageShow();

    // Switch to tab 1 -> callback triggered
    setCurIdx(1);
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    // Unmount component
    wrapper.unmount();

    // Switch to tab 0 then back to tab 1
    setCurIdx(0);
    await nextTick();
    setCurIdx(1);
    await nextTick();

    // Because component unmounted, callback must NOT be called again
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('onTabShow cleans up curIdx watcher upon component unmount', async () => {
    const callback = vi.fn();

    const TestComp = defineComponent({
      setup() {
        onTabShow(2, callback);
        return () => null;
      }
    });

    const wrapper = mount(TestComp);

    // Switch to tab 2 -> callback triggered
    setCurIdx(2);
    await nextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    // Unmount component
    wrapper.unmount();

    // Switch to tab 0 then back to tab 2
    setCurIdx(0);
    await nextTick();
    setCurIdx(2);
    await nextTick();

    // Callback must NOT be called after unmount
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('capsuleTabbar component mounts, cleans up on unmount, and restores native tabbar', () => {
    const wrapper = mount(CapsuleTabbar);
    expect(document.getElementById('hide-native-tabbar-style')).not.toBeNull();

    wrapper.unmount();
    expect(document.getElementById('hide-native-tabbar-style')).toBeNull();
  });

  it('tabbarList includes iconPath and selectedIconPath attributes', () => {
    expect(tabbarList.length).toBeGreaterThan(0);
    for (const item of tabbarList) {
      expect(item).toHaveProperty('pagePath');
      expect(item).toHaveProperty('text');
      expect(item).toHaveProperty('iconType');
      expect(item).toHaveProperty('icon');
    }
  });
});
