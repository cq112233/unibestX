import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  applyRouteFromUrl,
  checkAndInterceptPageShow,
  clearRouteQuery,
  consumeNavigateBackInterceptorVerdict,
  installRouteInterceptor,
  interceptNativeBack,
  interceptNativeTabSwitch,
  navigateBackInterceptor,
  navigateToInterceptor,
  registerBeforeEach,
  registerOnError,
  resetLastHandledNavigateBackTarget,
  resetLastHandledSwitchTabTarget,
  resetRegisteredErrorHandlers,
  resetRegisteredGuards,
  saveRouteQuery,
  setBypassInterceptorOnce,
  switchTabInterceptor
} from '@/uni_modules/route-bestX/index.uts';

describe('interceptNativeTabSwitch', () => {
  afterEach(() => {
    setBypassInterceptorOnce(false);
    resetRegisteredGuards();
    resetRegisteredErrorHandlers();
    resetLastHandledNavigateBackTarget();
    resetLastHandledSwitchTabTarget();
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

  it('keeps rejecting the same TabBar target within the dedupe window', () => {
    applyRouteFromUrl('/src/pages/index/index');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next('/src/sub/auth/login');
    });
    registerBeforeEach(guard as any);
    const navigateTo = (globalThis as any).uni.navigateTo as ReturnType<typeof vi.fn>;
    navigateTo.mockClear();

    expect(interceptNativeTabSwitch('src/pages/basic/basic')).toBe(false);
    expect(switchTabInterceptor.invoke({ url: 'src/pages/basic/basic' })).toBe(false);

    expect(guard).toHaveBeenCalledTimes(1);
    expect(navigateTo).toHaveBeenCalledTimes(1);
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

  it('reuses the navigateBack interceptor verdict once for the following onBackPress', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/routerBasicDemo/routerBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(true);
    expect(consumeNavigateBackInterceptorVerdict()).toBe(true);
    expect(consumeNavigateBackInterceptorVerdict()).toBe(null);
    expect(guard).toHaveBeenCalledTimes(1);
  });

  it('keeps rejecting the same back target within the dedupe window', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next('/src/sub/auth/login');
    });
    registerBeforeEach(guard as any);
    const navigateTo = (globalThis as any).uni.navigateTo as ReturnType<typeof vi.fn>;
    navigateTo.mockClear();

    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(false);
    expect(interceptNativeBack()).toBe(false);

    expect(guard).toHaveBeenCalledTimes(1);
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });

  it('does not replay a rejected native back guard through the API interceptor', () => {
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/index/index', options: {} },
      { route: 'src/sub/modalBasicDemo/modalBasicDemo', options: {} }
    ]);
    applyRouteFromUrl('/src/sub/modalBasicDemo/modalBasicDemo');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next('/src/sub/auth/login');
    });
    registerBeforeEach(guard as any);
    const navigateTo = (globalThis as any).uni.navigateTo as ReturnType<typeof vi.fn>;
    navigateTo.mockClear();

    expect(interceptNativeBack()).toBe(false);
    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(false);

    expect(guard).toHaveBeenCalledTimes(1);
    expect(navigateTo).toHaveBeenCalledTimes(1);
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

  it('restores the saved query for switchTab without a query string', () => {
    const basicQuery = new Map<string, string>();
    basicQuery.set('a', '3');
    saveRouteQuery('/src/pages/basic/basic', basicQuery);
    applyRouteFromUrl('/src/pages/index/index');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    expect(switchTabInterceptor.invoke({ url: '/src/pages/basic/basic' })).toBe(true);

    expect(guard.mock.calls[0][0].fullPath).toBe('/src/pages/basic/basic?a=3');
    expect(guard.mock.calls[0][0].query.get('a')).toBe('3');
    expect(guard.mock.calls[0][0].params.get('a')).toBe('3');
    expect(guard.mock.calls[0][3]).toBe('switchTab');
    clearRouteQuery('/src/pages/basic/basic');
  });

  it('does not replay a saved Tab query for navigateTo', () => {
    const staleQuery = new Map<string, string>();
    staleQuery.set('a', '3');
    saveRouteQuery('/src/sub/modalBasicDemo/modalBasicDemo', staleQuery);
    applyRouteFromUrl('/src/pages/index/index');
    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);

    expect(navigateToInterceptor.invoke({ url: '/src/sub/modalBasicDemo/modalBasicDemo' })).toBe(true);

    expect(guard.mock.calls[0][0].fullPath).toBe('/src/sub/modalBasicDemo/modalBasicDemo');
    expect(guard.mock.calls[0][0].query.size).toBe(0);
    expect(guard.mock.calls[0][0].params.size).toBe(0);
    expect(guard.mock.calls[0][3]).toBe('navigateTo');
    clearRouteQuery('/src/sub/modalBasicDemo/modalBasicDemo');
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
