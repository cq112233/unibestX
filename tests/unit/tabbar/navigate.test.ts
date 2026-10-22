import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { curIdx, setCurIdx } from '@/src/tabbar/core/state.uts';
import { readTabPageQuery, resetTabPageQueries } from '@/src/tabbar/core/tab-page.uts';
import { switchTabbar } from '@/src/tabbar/core/navigate.uts';
import { isSinglePageTabbar } from '@/src/tabbar/core/strategy.uts';

describe('switchTabbar', () => {
  beforeEach(() => {
    resetTabPageQueries();
    setCurIdx(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('updates the virtual tab state without a global navigation guard', () => {
    expect(isSinglePageTabbar).toBe(true);

    switchTabbar('/src/pages/basic/basic?id=42');

    expect(curIdx.value).toBe(1);
    expect(readTabPageQuery('/src/pages/basic/basic').get('id')).toBe('42');
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
});
