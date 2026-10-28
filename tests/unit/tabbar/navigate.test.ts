import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { curIdx, setCurIdx } from '@/src/tabbar/core/state.uts';
import { readTabPageQuery, resetTabPageQueries, setTabPageUrl } from '@/src/tabbar/core/tab-page.uts';
import { switchTabbar } from '@/src/tabbar/core/navigate.uts';
import type { TabNavigationContext, TabNavigationNext } from '@/src/tabbar/core/tab-navigation.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/core/tab-navigation.uts';
import { isSinglePageTabbar, selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from '@/src/tabbar/core/strategy.uts';

describe('switchTabbar', () => {
  beforeEach(() => {
    resetTabPageQueries();
    setCurIdx(0);
  });

  afterEach(() => {
    registerTabNavigationGuard(null);
    vi.restoreAllMocks();
  });

  it('updates the virtual tab state without a global navigation guard', () => {
    if (!isSinglePageTabbar) {
      return;
    }
    expect(isSinglePageTabbar).toBe(true);

    switchTabbar('/src/pages/basic/basic?id=42');

    expect(curIdx.value).toBe(1);
    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('42');
  });

  it('restores the active virtual tab query after returning to the mode-4 host page via reLaunch when host is not in stack', () => {
    if (!isSinglePageTabbar) {
      return;
    }
    window.location.hash = '#/src/sub/auth/login';
    const reLaunch = (globalThis as any).uni.reLaunch as ReturnType<typeof vi.fn>;
    const originalReLaunch = reLaunch.getMockImplementation();
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/sub/auth/login' }
    ]);
    reLaunch.mockImplementation((options: any): void => {
      window.location.hash = '#/';
      if (typeof options?.success == 'function') {
        options.success({});
      }
    });

    switchTabbar('/src/pages/me/me');

    if (originalReLaunch != null) {
      reLaunch.mockImplementation(originalReLaunch);
    }
    else {
      reLaunch.mockImplementation((): void => {});
    }

    expect(reLaunch).toHaveBeenCalledWith(expect.objectContaining({
      url: '/src/pages/index/index'
    }));
    expect(window.location.hash).toBe('#/?tab=me');
  });

  it('navigates back to the existing mode-4 host page instead of re-launching or redirecting', () => {
    if (!isSinglePageTabbar) {
      return;
    }
    window.location.hash = '#/src/sub/auth/login';
    const navigateBack = (globalThis as any).uni.navigateBack as ReturnType<typeof vi.fn>;
    const originalNavigateBack = navigateBack.getMockImplementation();
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index' },
      { route: 'src/sub/auth/login' }
    ]);
    navigateBack.mockImplementation((options: any): void => {
      window.location.hash = '#/';
      if (typeof options?.success == 'function') {
        options.success({});
      }
    });

    switchTabbar('/src/pages/me/me');

    if (originalNavigateBack != null) {
      navigateBack.mockImplementation(originalNavigateBack);
    }
    else {
      navigateBack.mockImplementation((): void => {});
    }

    expect(navigateBack).toHaveBeenCalledWith(expect.objectContaining({
      delta: 1
    }));
    expect(window.location.hash).toBe('#/?tab=me');
  });

  it('passes source, target, query and trigger to the navigation guard', () => {
    if (!isSinglePageTabbar) {
      return;
    }
    setCurIdx(1);
    setTabPageUrl('/src/pages/basic/basic?id=7');
    let captured: TabNavigationContext | null = null;
    registerTabNavigationGuard((context: TabNavigationContext, next: TabNavigationNext): void => {
      captured = context;
      next(false);
    });

    switchTabbar('/src/pages/me/me?from=third-party&token=abc', 'tabClick');

    expect(captured).not.toBeNull();
    expect(captured!.from).toBe('/src/pages/basic/basic?id=7');
    expect(captured!.fromPath).toBe('/src/pages/basic/basic');
    expect(captured!.to).toBe('/src/pages/me/me?from=third-party&token=abc');
    expect(captured!.toPath).toBe('/src/pages/me/me');
    expect(captured!.query.get('from')).toBe('third-party');
    expect(captured!.query.get('token')).toBe('abc');
    expect(captured!.api).toBe('tabClick');
    expect(curIdx.value).toBe(1);
  });

  it('waits for an asynchronous pre-action before switching', async () => {
    if (!isSinglePageTabbar) {
      return;
    }
    const steps: Array<string> = [];
    registerTabNavigationGuard((_context: TabNavigationContext, next: TabNavigationNext): void => {
      steps.push('before');
      setTimeout((): void => {
        steps.push('after');
        next(true);
      }, 0);
    });

    switchTabbar('/src/pages/basic/basic?id=42', 'tabClick');

    expect(steps).toEqual(['before']);
    expect(curIdx.value).toBe(0);
    await vi.waitFor((): void => {
      expect(curIdx.value).toBe(1);
    });
    expect(steps).toEqual(['before', 'after']);
    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('42');
  });

  it('restores the switchTab query in the H5 address bar after navigation succeeds', () => {
    const usesNativeTabSwitch = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR
      || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
    if (!usesNativeTabSwitch) {
      return;
    }
    const switchTab = (globalThis as any).uni.switchTab as ReturnType<typeof vi.fn>;
    const originalSwitchTab = switchTab.getMockImplementation();
    window.location.hash = '#/src/pages/index/index';
    switchTab.mockImplementation((options: any): void => {
      window.location.hash = '#/src/pages/basic/basic';
      if (typeof options?.success == 'function') {
        options.success({});
      }
    });

    switchTabbar('/src/pages/basic/basic?a=3');

    if (originalSwitchTab != null) {
      switchTab.mockImplementation(originalSwitchTab);
    }
    else {
      switchTab.mockImplementation((): void => {});
    }

    expect(window.location.hash).toBe('#/src/pages/basic/basic?a=3');
  });
});
