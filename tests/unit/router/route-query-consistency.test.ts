import { afterEach, describe, expect, it, vi } from 'vitest';
import { installRouteStateListener, uninstallRouteStateListener } from '@/uni_modules/route-bestX/core/route-state.uts';
import {
  applyRouteFromUrl,
  clearRouteQuery,
  installRouteInterceptor,
  navigateBackInterceptor,
  navigateToInterceptor,
  registerBeforeEach,
  resetLastHandledNavigateBackTarget,
  resetLastHandledSwitchTabTarget,
  resetRegisteredGuards,
  routeState,
  saveRouteQuery,
  switchTabInterceptor
} from '@/uni_modules/route-bestX/index.uts';

const DETAIL_PATH = '/src/sub/queryConsistencyDetail/queryConsistencyDetail';

afterEach(() => {
  resetRegisteredGuards();
  resetLastHandledNavigateBackTarget();
  resetLastHandledSwitchTabTarget();
  uninstallRouteStateListener();
  clearRouteQuery(DETAIL_PATH);
  vi.restoreAllMocks();
});

function getAppRouteCallback(): (event: any) => void {
  const onAppRoute = (globalThis as any).uni.onAppRoute as ReturnType<typeof vi.fn>;
  onAppRoute.mockClear();
  installRouteStateListener();
  return onAppRoute.mock.calls[0][0];
}

describe('route query consistency', () => {
  it('does not reuse a switchTab guard verdict across different query params', () => {
    const now = Date.now();
    vi.spyOn(Date, 'now').mockReturnValue(now);
    applyRouteFromUrl('/src/pages/index/index');

    const guard = vi.fn((to: any, _from: any, next: any): void => {
      if (to.query.get('id') == '2') {
        next('/src/sub/auth/login');
        return;
      }
      next();
    });
    registerBeforeEach(guard as any);

    expect(switchTabInterceptor.invoke({ url: `${DETAIL_PATH}?id=1` })).toBe(true);
    expect(switchTabInterceptor.invoke({ url: `${DETAIL_PATH}?id=2` })).toBe(false);

    expect(guard).toHaveBeenCalledTimes(2);
    expect(guard.mock.calls[1][0].query.get('id')).toBe('2');
  });

  it('does not restore a stale query on a query-less navigateTo', () => {
    const callback = getAppRouteCallback();
    applyRouteFromUrl('/src/pages/index/index');

    expect(navigateToInterceptor.invoke({ url: `${DETAIL_PATH}?id=123` })).toBe(true);
    expect(routeState.query.get('id')).toBe('123');

    expect(navigateToInterceptor.invoke({ url: DETAIL_PATH })).toBe(true);
    callback({
      openType: 'navigateTo',
      path: 'src/sub/queryConsistencyDetail/queryConsistencyDetail',
      query: {}
    });

    expect(routeState.fullPath).toBe(DETAIL_PATH);
    expect(routeState.query.size).toBe(0);
    expect(routeState.query.get('id') ?? null).toBeNull();
  });

  it('keeps an explicitly restored switchTab query in routeState', () => {
    const savedQuery = new Map<string, string>();
    savedQuery.set('id', '123');
    saveRouteQuery(DETAIL_PATH, savedQuery);
    applyRouteFromUrl('/src/pages/index/index');

    expect(switchTabInterceptor.invoke({ url: DETAIL_PATH })).toBe(true);

    expect(routeState.fullPath).toBe(`${DETAIL_PATH}?id=123`);
    expect(routeState.query.get('id')).toBe('123');
  });

  it('keeps the switchTab query when Android onAppRoute reports an empty query', () => {
    const callback = getAppRouteCallback();
    applyRouteFromUrl('/src/pages/index/index');

    expect(switchTabInterceptor.invoke({ url: `${DETAIL_PATH}?id=123` })).toBe(true);
    expect(routeState.query.get('id')).toBe('123');

    callback({
      openType: 'switchTab',
      path: 'src/sub/queryConsistencyDetail/queryConsistencyDetail',
      query: {}
    });

    expect(routeState.query.get('id')).toBe('123');
    expect(routeState.fullPath).toBe(`${DETAIL_PATH}?id=123`);
  });

  it('keeps fullPath encoded and query decoded for non-ASCII values', () => {
    applyRouteFromUrl('/src/pages/index/index');
    const title = '儿童绘本';

    expect(navigateToInterceptor.invoke({ url: `${DETAIL_PATH}?title=${encodeURIComponent(title)}` })).toBe(true);

    expect(routeState.query.get('title')).toBe(title);
    expect(routeState.fullPath).toBe(`${DETAIL_PATH}?title=${encodeURIComponent(title)}`);
  });

  it('does not run beforeEach twice when H5 popstate follows navigateBack', () => {
    installRouteInterceptor();
    vi.spyOn(globalThis as any, 'getCurrentPages').mockReturnValue([
      { route: 'src/pages/basic/basic', options: {} },
      { route: 'src/sub/tailwindcssBasicDemo/tailwindcssBasicDemo', options: { a: '1', b: '2' } }
    ]);
    const now = Date.now();
    vi.spyOn(Date, 'now').mockReturnValue(now);
    applyRouteFromUrl('/src/sub/tailwindcssBasicDemo/tailwindcssBasicDemo?a=1&b=2');

    const guard = vi.fn((_to: any, _from: any, next: any): void => {
      next();
    });
    registerBeforeEach(guard as any);
    window.history.replaceState(null, '', '#/src/pages/basic/basic');

    expect(navigateBackInterceptor.invoke({ delta: 1 })).toBe(true);
    window.dispatchEvent(new Event('popstate'));

    expect(guard).toHaveBeenCalledTimes(1);
  });
});
