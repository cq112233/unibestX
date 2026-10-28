import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  applyRouteFromUrl,
  checkAndInterceptPageShow,
  clearRouteQuery,
  createRouter,
  installRouteInterceptor,
  interceptNativeBack,
  interceptNativeTabSwitch,
  navigateBackInterceptor,
  redirectToInterceptor,
  registerBeforeEach,
  registerOnError,
  registerTabbarHandler,
  resetLastHandledNavigateBackTarget,
  resetRegisteredErrorHandlers,
  resetRegisteredGuards,
  saveRouteQuery,
  setBypassInterceptorOnce
} from '@/uni_modules/route-bestX/index.uts';
import { resolveTabbarBackTarget, switchTabbar } from '@/src/tabbar/core/navigate.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/core/tab-navigation.uts';
import { setCurIdx } from '@/src/tabbar/core/state.uts';
import { resetTabPageQueries, setTabPageUrl } from '@/src/tabbar/core/tab-page.uts';
import { selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from '@/src/tabbar/core/strategy.uts';

describe('interceptNativeTabSwitch', () => {
  afterEach(() => {
    registerTabbarHandler(null);
    registerTabNavigationGuard(null);
    setBypassInterceptorOnce(false);
    resetRegisteredGuards();
    resetRegisteredErrorHandlers();
    resetLastHandledNavigateBackTarget();
    resetTabPageQueries();
    setCurIdx(0);
    vi.restoreAllMocks();
  });

  it('runs the beforeEach pipeline for a native TabBar tap', () => {
    applyRouteFromUrl('/src/pages/index/index');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    const allowed = interceptNativeTabSwitch('src/pages/basic/basic');

    expect(allowed).toBe(true);
    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].path).toBe('/src/pages/basic/basic');
    expect(guard.mock.calls[0][1].path).toBe('/src/pages/index/index');
    expect(guard.mock.calls[0][3]).toBe('switchTab');
  });

  it('intercepts switchTab before the target page lifecycle starts', () => {
    const onBeforeAppRoute = (globalThis as any).uni.onBeforeAppRoute as ReturnType<typeof vi.fn>;
    onBeforeAppRoute.mockClear();
    installRouteInterceptor();

    const callback = onBeforeAppRoute.mock.calls[0][0];
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    applyRouteFromUrl('/src/pages/function/function');
    registerBeforeEach(guard as any);

    callback({ openType: 'switchTab', path: 'src/pages/me/me', query: {} });

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].path).toBe('/src/pages/me/me');
    expect(guard.mock.calls[0][1].path).toBe('/src/pages/function/function');
    expect(guard.mock.calls[0][3]).toBe('switchTab');
  });

  it('runs the switchTab guard only once when the tab handler forwards to redirectTo', () => {
    if (selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR && selectedTabbarStrategy != TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE) {
      return;
    }
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);
    const redirectTo = (globalThis as any).uni.redirectTo as ReturnType<typeof vi.fn>;
    redirectTo.mockImplementationOnce((options: any): void => {
      redirectToInterceptor.invoke(options);
    });
    const router = createRouter({
      isTabbar: (url: string): boolean => url.includes('/src/pages/basic/basic'),
      switchTab: (url: string): void => {
        switchTabbar(url, 'router');
      }
    });
    applyRouteFromUrl('/src/pages/index/index');

    router.push('/src/pages/basic/basic?a=2');

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].fullPath).toBe('/src/pages/basic/basic?a=2');
    expect(guard.mock.calls[0][1].path).toBe('/src/pages/index/index');
    expect(guard.mock.calls[0][3]).toBe('switchTab');
  });

  it('keeps the redirectTo guard active for TabBar taps in redirect modes', () => {
    if (selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR && selectedTabbarStrategy != TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE) {
      return;
    }
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);
    const redirectTo = (globalThis as any).uni.redirectTo as ReturnType<typeof vi.fn>;
    redirectTo.mockImplementationOnce((options: any): void => {
      redirectToInterceptor.invoke(options);
    });
    applyRouteFromUrl('/src/pages/index/index');

    switchTabbar('/src/pages/basic/basic?a=2', 'tabClick');

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][3]).toBe('redirectTo');
  });

  it('runs the guard only once when router enters a mode-4 tab page', () => {
    if (selectedTabbarStrategy != TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR) {
      return;
    }
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} }
    ]);
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    const tabGuard = vi.fn((_context: any, next: any): void => {
      next(true);
    });
    registerBeforeEach(guard as any);
    registerTabNavigationGuard(tabGuard as any);
    const router = createRouter({
      isTabbar: (url: string): boolean => url.includes('/src/pages/basic/basic'),
      switchTab: (url: string): void => {
        switchTabbar(url, 'router');
      }
    });
    applyRouteFromUrl('/src/pages/index/index');

    router.push('/src/pages/basic/basic?a=2');

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][3]).toBe('switchTab');
    expect(tabGuard).not.toHaveBeenCalled();
  });

  it('runs navigateBack guard for a native back press', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/routerBasicDemo/routerBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    const allowed = interceptNativeBack();

    expect(allowed).toBe(true);
    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].path).toBe('/src/pages/index/index');
    expect(guard.mock.calls[0][1].path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
  });

  it('restores the active mode-4 tab when native back targets the host page', () => {
    if (selectedTabbarStrategy != TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR) {
      return;
    }
    setCurIdx(1);
    setTabPageUrl('/src/pages/basic/basic?a=2');
    registerTabbarHandler({
      isTabbar: (url: string): boolean => url.includes('/src/pages/index/index'),
      switchTab: (_url: string): void => {},
      resolveBackTarget: resolveTabbarBackTarget
    } as any);
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    expect(interceptNativeBack()).toBe(true);

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].fullPath).toBe('/src/pages/basic/basic?a=2');
    expect(guard.mock.calls[0][1].path).toBe('/src/sub/modalBasicDemo/modalBasicDemo');
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
  });

  it('allows app exit at the root without reporting navigateBack errors', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} }
    ]);
    applyRouteFromUrl('/src/pages/basic/basic?a=2');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    const onError = vi.fn();
    registerBeforeEach(guard as any);
    registerOnError(onError as any);

    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(true);
    navigateBackInterceptor.fail!(new Error('root exit'));
    expect(guard).not.toHaveBeenCalled();
    expect(onError).not.toHaveBeenCalled();
  });

  it('runs the navigateBack guard without the uni.navigateBack interceptor', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/basic/basic', options: { tab: 'basic' } },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);
    const navigateBack = (globalThis as any).uni.navigateBack as ReturnType<typeof vi.fn>;
    navigateBack.mockClear();

    interceptNativeBack();

    expect(navigateBack).not.toHaveBeenCalled();
    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].path).toBe('/src/pages/basic/basic');
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
  });

  it('restores the saved query when a mini-program tab page returns without options', () => {
    const basicQuery = new Map<string, string>();
    basicQuery.set('a', '3');
    saveRouteQuery('/src/pages/basic/basic', basicQuery);
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/basic/basic', options: {} },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: { a: '1', b: '2' } }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo?a=1&b=2');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(true);

    expect(guard.mock.calls[0][0].fullPath).toBe('/src/pages/basic/basic?a=3');
    expect(guard.mock.calls[0][0].query.get('a')).toBe('3');
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
    clearRouteQuery('/src/pages/basic/basic');
  });

  it('resolves native back from the current top page after Alipay already popped the stack', () => {
    if (selectedTabbarStrategy != TABBAR_STRATEGY_MAP.NO_TABBAR && selectedTabbarStrategy != TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE) {
      return;
    }
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    applyRouteFromUrl('/src/sub/routerBasicDemo/routerBasicDemo');
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: { a: '1' } }
    ]);

    const allowed = interceptNativeBack();

    expect(allowed).toBe(true);
    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][0].fullPath).toBe('/src/pages/index/index?a=1');
    expect(guard.mock.calls[0][1].path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
  });

  it('runs the native back guard only once when Alipay emits a page-show fallback', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: { a: '1' } }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo?a=1');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);
    const now = Date.now();
    const nowSpy = vi.spyOn(Date, 'now').mockReturnValue(now);

    expect(interceptNativeBack()).toBe(true);
    nowSpy.mockReturnValue(now + 600);
    expect(checkAndInterceptPageShow('/src/pages/index/index')).toBe(true);

    expect(guard).toHaveBeenCalledTimes(1);
    expect(guard.mock.calls[0][3]).toBe('navigateBack');
  });
});
