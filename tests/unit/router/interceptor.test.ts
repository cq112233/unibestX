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

async function loadInterceptor() {
  vi.resetModules();
  const { router } = await import('@/src/router/index.uts');
  const interceptorMod = await import('@/uni_modules/route-bestX/interceptor/interceptor.uts');
  const stateMod = await import('@/uni_modules/route-bestX/core/route-state.uts');
  return { ...interceptorMod, ...stateMod, router };
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
    const { LOGIN_PAGE } = await import('@/src/router/config.uts');

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
    const { LOGIN_PAGE } = await import('@/src/router/config.uts');

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

  it('navigateBackInterceptor 能够根据页面栈解析目标页面并交由守卫拦截/放行', async () => {
    const { navigateBackInterceptor, routeState } = await loadInterceptor();

    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' },
      { route: 'src/pages/me/me' }
    ]);

    const allowed = navigateBackInterceptor.invoke({ delta: 1 });
    expect(allowed).toBe(true);
    expect(routeState.path).toBe('/src/pages/index/index');
  });

  it('checkDirectEntry 能够处理 App 冷启动进入首屏（options 为空或无 path）并跑守卫', async () => {
    const { checkDirectEntry, resetInitialEntryChecked, routeState } = await loadInterceptor();
    resetInitialEntryChecked();

    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' }
    ]);

    // 冷启动普通进入：options 为 null
    checkDirectEntry(null);
    expect(routeState.path).toBe('/src/pages/index/index');
  });

  it('checkDirectEntry 外部直达带需要登录的路径时，未登录会改跳登录页', async () => {
    const { checkDirectEntry, resetInitialEntryChecked } = await loadInterceptor();
    resetInitialEntryChecked();
    const { LOGIN_PAGE } = await import('@/src/router/config.uts');

    checkDirectEntry({ path: 'src/sub/routerParamsBasicDemo/routerParamsBasicDemo' } as any);
    expect(uni.navigateTo).toHaveBeenCalledTimes(1);
    expect((uni.navigateTo as any).mock.calls[0][0].url.startsWith(LOGIN_PAGE)).toBe(true);
  });

  it('routeState 变化时会正确记录 previousRouteState 作为前序离开页', async () => {
    const { navigateToInterceptor, routeState } = await loadInterceptor();
    const { previousRouteState } = await import('@/uni_modules/route-bestX/core/route-state.uts');

    (globalThis as any).getCurrentPages = vi.fn(() => [{ route: 'src/pages/index/index' }]);
    navigateToInterceptor.invoke({ url: '/src/pages/me/me' });

    expect(routeState.path).toBe('/src/pages/me/me');
    expect(previousRouteState.path).toBe('/src/pages/index/index');
  });

  it('checkAndInterceptPageShow 能够拦截支付宝侧滑手势返回，自动触发 navigateBack 守卫', async () => {
    const { checkAndInterceptPageShow, resetLastHandledNavigateBackTarget, routeState } = await loadInterceptor();
    resetLastHandledNavigateBackTarget();

    // 假设用户原先处于 /src/pages/me/me
    (globalThis as any).getCurrentPages = vi.fn(() => [{ route: 'src/pages/me/me' }]);
    routeState.path = '/src/pages/me/me';
    routeState.fullPath = '/src/pages/me/me';

    // 模拟支付宝原生侧滑返回到了 /src/pages/index/index（此时未触发 uni.onAppRoute，routeState 滞留）
    (globalThis as any).getCurrentPages = vi.fn(() => [{ route: 'src/pages/index/index' }]);

    const allowed = checkAndInterceptPageShow();
    expect(allowed).toBe(true);

    // 500ms 内再次调用会被防抖去重直接放行
    const allowedTwice = checkAndInterceptPageShow();
    expect(allowedTwice).toBe(true);
  });

  it('checkAndInterceptPageShow 当返回到需要登录的页面时，未登录会自动拦截并重定向', async () => {
    const { checkAndInterceptPageShow, resetLastHandledNavigateBackTarget, routeState } = await loadInterceptor();
    resetLastHandledNavigateBackTarget();
    const { LOGIN_PAGE } = await import('@/src/router/config.uts');

    // 假设用户原先处于免登录页面 /src/pages/index/index
    routeState.path = '/src/pages/index/index';
    routeState.fullPath = '/src/pages/index/index';

    // 模拟手势返回到了需要登录的受保护页面 /src/sub/routerParamsBasicDemo/routerParamsBasicDemo
    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/sub/routerParamsBasicDemo/routerParamsBasicDemo' }
    ]);

    const allowed = checkAndInterceptPageShow();
    expect(allowed).toBe(false);
    expect(uni.navigateTo).toHaveBeenCalledTimes(1);
    expect((uni.navigateTo as any).mock.calls[0][0].url.startsWith(LOGIN_PAGE)).toBe(true);
  });

  it('checkAndInterceptPageShow 能够识别同路径页面带参数重进后的手势返回', async () => {
    const { checkAndInterceptPageShow, resetLastHandledNavigateBackTarget, routeState } = await loadInterceptor();
    resetLastHandledNavigateBackTarget();

    // 假设用户原先带参重进了 /src/sub/routerBasicDemo/routerBasicDemo
    routeState.path = '/src/sub/routerBasicDemo/routerBasicDemo';
    routeState.fullPath = '/src/sub/routerBasicDemo/routerBasicDemo?id=2001&from=self';
    routeState.pages = [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: { id: '2001', from: 'self' } }
    ];

    // 模拟手势返回出栈：页面栈从 3 减为 2，栈顶变为无参的上一层实例
    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} }
    ]);

    const allowed = checkAndInterceptPageShow();
    expect(allowed).toBe(true);
  });

  it('checkAndInterceptPageShow 在同路径新页面初次进入（栈深增加）时直接放行，不会误触发 navigateBack', async () => {
    const { checkAndInterceptPageShow, resetLastHandledNavigateBackTarget, routeState } = await loadInterceptor();
    resetLastHandledNavigateBackTarget();

    // 假设原先在第 1 层页面栈
    routeState.path = '/src/sub/routerBasicDemo/routerBasicDemo';
    routeState.fullPath = '/src/sub/routerBasicDemo/routerBasicDemo';
    routeState.pages = [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} }
    ];

    // 新页面打开：页面栈增加到 3，新页面初次渲染
    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: { from: 'self', id: '2001' } }
    ]);

    const allowed = checkAndInterceptPageShow();
    expect(allowed).toBe(true);
  });

  it('navigateBackInterceptor 执行后紧随其后的 checkAndInterceptPageShow 命中防抖不重复跑守卫', async () => {
    const { navigateBackInterceptor, checkAndInterceptPageShow, resetLastHandledNavigateBackTarget, routeState } = await loadInterceptor();
    resetLastHandledNavigateBackTarget();

    routeState.path = '/src/sub/routerBasicDemo/routerBasicDemo';
    routeState.fullPath = '/src/sub/routerBasicDemo/routerBasicDemo?id=2001&from=self';
    routeState.pages = [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: { id: '2001', from: 'self' } }
    ];

    // 1. 点击 navbar 返回：触发 navigateBackInterceptor
    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: { id: '2001', from: 'self' } }
    ]);
    const allowed = navigateBackInterceptor.invoke({ delta: 1 });
    expect(allowed).toBe(true);

    // 2. 出栈后页面 onPageShow 触发 checkAndInterceptPageShow
    (globalThis as any).getCurrentPages = vi.fn(() => [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo', options: {} }
    ]);
    const showAllowed = checkAndInterceptPageShow();
    expect(showAllowed).toBe(true);
  });
});
