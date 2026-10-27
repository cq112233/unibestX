import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  applyRouteFromUrl,
  installRouteInterceptor,
  interceptNativeTabSwitch,
  registerBeforeEach,
  resetRegisteredGuards
} from '@/uni_modules/route-bestX/index.uts';

describe('interceptNativeTabSwitch', () => {
  afterEach(() => {
    resetRegisteredGuards();
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
});
