import { beforeEach, describe, expect, it, vi } from 'vitest';
import { utsObject } from './helpers';

/**
 * 路由拦截器（登录校验 + 目标路由写入）行为验证
 *
 * 为什么必须在这里验：拦截器是 `useRoute()` 状态的**第一数据源**。
 * `uni.onAppRoute` 要等目标页 onShow 之后才触发（真机 5.26 实测会触发，但晚于目标页 setup），
 * 而 App 端页面栈在新页面入栈后还会滞后一段时间 —— 于是「跳转发起时由发起方写入目标路由」
 * 成了目标页首帧唯一可靠的写入点 —— 一旦这条链路写错（相对路径没解析、被登录拦下也照写、
 * plugin:// 也写进去），页面上的 useRoute() 会稳定显示错的路由，且**没有任何编译期提示**。
 *
 * 覆盖面只到「UTS 语法糖之下」的这层语义；真机上才暴露的坑（`options as XxxOptions`
 * 的类型分支、ClassCastException）单测**不复现**，那部分靠真机把关。
 */

/** 取一份全新的模块（route-state 有模块级状态，逐用例重置） */
async function loadInterceptor() {
  vi.resetModules();
  const interceptorMod = await import('@/src/router/interceptor/interceptor.uts');
  const stateMod = await import('@/src/router/hooks/route-state.uts');
  return { ...interceptorMod, ...stateMod };
}

/** 让页面栈停在指定路由 */
function setPageStack(route: string): void {
  (globalThis as any).getCurrentPages = vi.fn(() => [{ route }]);
}

describe('路由拦截器 Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (globalThis as any).getCurrentPages = vi.fn(() => []);
  });

  it('navigateTo 放行时把目标路由（含 query）写进 useRoute 状态', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();

    const allowed = navigateToInterceptor.invoke({ url: '/src/sub/routerBasicDemo/routerBasicDemo?id=2001&from=self' });

    expect(allowed).toBe(true);
    expect(routeState.path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    expect(routeState.query.get('id')).toBe('2001');
    expect(routeState.query.get('from')).toBe('self');
    expect(routeState.fullPath).toBe('/src/sub/routerBasicDemo/routerBasicDemo?id=2001&from=self');
  });

  it('redirectTo / reLaunch / switchTab 三个拦截器同样写入目标路由', async () => {
    const { redirectToInterceptor, reLaunchInterceptor, switchTabInterceptor, routeState } = await loadInterceptor();

    redirectToInterceptor.invoke({ url: '/src/pages/me/me' });
    expect(routeState.path).toBe('/src/pages/me/me');

    reLaunchInterceptor.invoke({ url: '/src/pages/index/index?tab=2' });
    expect(routeState.path).toBe('/src/pages/index/index');
    expect(routeState.query.get('tab')).toBe('2');

    switchTabInterceptor.invoke({ url: '/src/pages/function/function' });
    expect(routeState.path).toBe('/src/pages/function/function');
  });

  it('相对路径按当前页所在目录解析后再写入（与登录校验同一套口径）', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();

    setPageStack('src/sub/routerBasicDemo/routerBasicDemo');
    navigateToInterceptor.invoke({ url: 'detail/detail?id=9' });

    expect(routeState.path).toBe('/src/sub/routerBasicDemo/detail/detail');
    expect(routeState.query.get('id')).toBe('9');
  });

  it('被登录校验拦下时不写目标路由（拦截器已改跳登录页，路由交给那次跳转自己写）', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();
    const { LOGIN_PAGE } = await import('@/src/router/config/config.uts');

    // 黑名单模式：EXCLUDE_LOGIN_PATH_LIST 里的页面在未登录时被拦下并跳登录页
    const allowed = navigateToInterceptor.invoke({ url: '/src/sub/routerParamsBasicDemo/routerParamsBasicDemo' });

    expect(allowed).toBe(false);
    expect(routeState.path).toBe('');
    expect(uni.navigateTo).toHaveBeenCalledTimes(1);
    expect((uni.navigateTo as any).mock.calls[0][0].url.startsWith(LOGIN_PAGE)).toBe(true);
  });

  it('plugin:// 与 http(s):// 不是本应用页面，不进路由状态', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();

    navigateToInterceptor.invoke({ url: 'plugin://some-plugin/index' });
    expect(routeState.path).toBe('');

    navigateToInterceptor.invoke({ url: 'https://doc.dcloud.net.cn/uni-app-x/' });
    expect(routeState.path).toBe('');
  });

  it('跳转失败时回读页面栈，把提前写入的目标路由回滚成当前页', async () => {
    vi.useFakeTimers();
    try {
      const { navigateToInterceptor, routeState } = await loadInterceptor();

      navigateToInterceptor.invoke({ url: '/src/sub/notExist/notExist' });
      expect(routeState.path).toBe('/src/sub/notExist/notExist');

      // 跳转没发生：栈顶仍是当前页（这里模拟「当前页是首页」）
      setPageStack('src/pages/index/index');
      navigateToInterceptor.fail?.({ errMsg: 'navigateTo:fail page not found' });
      vi.runAllTimers();

      expect(routeState.path).toBe('/src/pages/index/index');
    }
    finally {
      vi.useRealTimers();
    }
  });

  it('空 url / 缺 url 不写路由状态，且不影响放行', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();

    expect(navigateToInterceptor.invoke({})).toBe(true);
    expect(routeState.path).toBe('');

    expect(navigateToInterceptor.invoke(null)).toBe(true);
    expect(routeState.path).toBe('');
  });

  it('已登录却进登录页时，按守卫裁决改跳 redirect 指向的页面，且本次不写目标路由', async () => {
    // 登录态由框架侧算好送给守卫（守卫本身是纯函数），这里把 store 打成「已登录」
    vi.resetModules();
    vi.doMock('@/src/store/index.uts', () => ({
      useTokenStore: () => ({ hasValidLogin: () => true })
    }));
    try {
      const { navigateToInterceptor, routeState } = await loadInterceptor();
      // 用一个非 TabBar 页面当回跳目标：TabBar 目标会改走 switchTabbar，另有用例覆盖
      const target = '/src/sub/routerBasicDemo/routerBasicDemo?tab=2';

      const allowed = navigateToInterceptor.invoke({ url: `/src/sub/auth/login?redirect=${encodeURIComponent(target)}` });

      expect(allowed).toBe(false);
      // 被拦下时不能写路由状态：改跳那次跳转自己会写，写这里会把状态写成登录页
      expect(routeState.path).toBe('');
      expect(uni.navigateTo).toHaveBeenCalledTimes(1);
      expect((uni.navigateTo as any).mock.calls[0][0].url).toBe(target);
    }
    finally {
      vi.doUnmock('@/src/store/index.uts');
    }
  });

  it('守卫返回的改跳目标原样派发（框架不参与登录业务判断）', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();
    const { LOGIN_PAGE } = await import('@/src/router/config/config.uts');

    // 未登录 + 命中排除名单 → 守卫给出「登录页?redirect=原地址」，框架只负责跳
    const originalPath = '/src/sub/routerParamsBasicDemo/routerParamsBasicDemo?id=1';
    const allowed = navigateToInterceptor.invoke({ url: originalPath });

    expect(allowed).toBe(false);
    expect(routeState.path).toBe('');
    expect((uni.navigateTo as any).mock.calls[0][0].url)
      .toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(originalPath)}`);
  });

  it('守卫的改跳目标命中 TabBar 页面时不走 navigateTo（改由 switchTabbar 派发）', async () => {
    vi.resetModules();
    vi.doMock('@/src/store/index.uts', () => ({
      useTokenStore: () => ({ hasValidLogin: () => true })
    }));
    try {
      const { navigateToInterceptor } = await loadInterceptor();

      // 已登录进登录页、没带 redirect → 守卫兜底回首页（首页是 TabBar 页）
      const allowed = navigateToInterceptor.invoke({ url: '/src/sub/auth/login' });

      expect(allowed).toBe(false);
      // uni.navigateTo 跳 TabBar 页面会被框架拒绝，必须让 switchTabbar 接手
      // （它按当前 TabBar 策略走 switchTab / redirectTo，故这里只断言「没走 navigateTo」）
      expect(uni.navigateTo).not.toHaveBeenCalled();
      const dispatched: number = (uni.switchTab as any).mock.calls.length + (uni.redirectTo as any).mock.calls.length;
      expect(dispatched).toBeGreaterThan(0);
    }
    finally {
      vi.doUnmock('@/src/store/index.uts');
    }
  });

  it('已被登录拦下的 url 不会被写进状态（登录页跳转由它自己那次 invoke 负责）', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();

    navigateToInterceptor.invoke({ url: `/src/sub/auth/login?redirect=${encodeURIComponent('/src/pages/me/me')}` });

    expect(routeState.path).toBe('/src/sub/auth/login');
    expect(routeState.query.get('redirect')).toBe('/src/pages/me/me');
    expect(utsObject({ redirect: routeState.query.get('redirect') }).getString('redirect')).toBe('/src/pages/me/me');
  });
});
