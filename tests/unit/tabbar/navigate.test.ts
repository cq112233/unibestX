import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { curIdx, setCurIdx } from '@/src/tabbar/core/state.uts';
import { readTabPageQuery, resetTabPageQueries, setTabPageUrl } from '@/src/tabbar/core/tab-page.uts';
import { switchTabbar } from '@/src/tabbar/core/navigate.uts';
import type { TabNavigationContext, TabNavigationNext } from '@/src/tabbar/core/tab-navigation.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/core/tab-navigation.uts';
import { isSinglePageTabbar } from '@/src/tabbar/core/strategy.uts';

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
    expect(isSinglePageTabbar).toBe(true);

    switchTabbar('/src/pages/me/me?id=42');

    expect(curIdx.value).toBe(1);
    expect(readTabPageQuery('/src/pages/me/me').get('id')).toBe('42');
  });

  it('restores the active virtual tab query after returning to the mode-4 host page', () => {
    expect(isSinglePageTabbar).toBe(true);
    window.location.hash = '#/src/sub/auth/login';
    const redirectTo = (globalThis as any).uni.redirectTo as ReturnType<typeof vi.fn>;
    const originalRedirect = redirectTo.getMockImplementation();
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/sub/auth/login' }
    ]);
    redirectTo.mockImplementation((options: any): void => {
      // 模拟 uni.redirectTo 打开宿主页后地址栏被重置为根路径
      window.location.hash = '#/';
      if (typeof options.success == 'function') {
        options.success({});
      }
    });

    switchTabbar('/src/pages/me/me');

    if (originalRedirect != null) {
      redirectTo.mockImplementation(originalRedirect);
    }
    else {
      redirectTo.mockImplementation((): void => {});
    }

    expect(redirectTo).toHaveBeenCalledWith(expect.objectContaining({
      url: '/src/pages/index/index'
    }));
    expect(window.location.hash).toBe('#/?tab=me');
  });

  it('passes source, target, query and trigger to the navigation guard', () => {
    setCurIdx(1);
    setTabPageUrl('/src/pages/me/me?id=7');
    let captured: TabNavigationContext | null = null;
    registerTabNavigationGuard((context: TabNavigationContext, next: TabNavigationNext): void => {
      captured = context;
      next(false);
    });

    switchTabbar('/src/pages/index/index?from=third-party&token=abc', 'tabClick');

    expect(captured).not.toBeNull();
    expect(captured!.from).toBe('/src/pages/me/me?id=7');
    expect(captured!.fromPath).toBe('/src/pages/me/me');
    expect(captured!.to).toBe('/src/pages/index/index?from=third-party&token=abc');
    expect(captured!.toPath).toBe('/src/pages/index/index');
    expect(captured!.query.get('from')).toBe('third-party');
    expect(captured!.query.get('token')).toBe('abc');
    expect(captured!.api).toBe('tabClick');
    expect(curIdx.value).toBe(1);
  });

  it('waits for an asynchronous pre-action before switching', async () => {
    const steps: Array<string> = [];
    registerTabNavigationGuard((_context: TabNavigationContext, next: TabNavigationNext): void => {
      steps.push('before');
      setTimeout((): void => {
        steps.push('after');
        next(true);
      }, 0);
    });

    switchTabbar('/src/pages/me/me?id=42', 'router');

    expect(steps).toEqual(['before']);
    expect(curIdx.value).toBe(0);
    await vi.waitFor((): void => {
      expect(curIdx.value).toBe(1);
    });
    expect(steps).toEqual(['before', 'after']);
    expect(readTabPageQuery('/src/pages/me/me').get('id')).toBe('42');
  });
});
