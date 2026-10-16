import { beforeEach, describe, expect, it, vi } from 'vitest';
import { utsObject } from './helpers';

/**
 * useRouter / resolveUrl（vue-router 形态的导航器）行为验证
 *
 * 为什么必须在这里验：导航器的方法名与 uni 原生 API 是一对一映射的，
 * 映射错了不会有任何编译提示 —— push 接到 redirectTo 上、back 的 delta 传反，
 * 页面照样能跳，只是页面栈被悄悄改写。这里把「哪个方法落到哪个 uni API、
 * 入参长什么样」逐条钉死。
 *
 * 覆盖面只到「UTS 语法糖之下」的这层语义；对象形态在真机上才暴露的
 * ClassCastException（字面量 vs 带类型标注的变量）单测**不复现**，
 * 那部分靠文档约束 + 真机把关。
 */

/** 取一份全新的模块（route-state 有模块级状态，逐用例重置） */
async function loadRouter() {
  vi.resetModules();
  const { setPageMetaJson } = await import('@/uni_modules/route-bestX/core/route-state.uts');
  const { PAGE_META_JSON } = await import('@/src/router/generated/page-meta.uts');
  setPageMetaJson(PAGE_META_JSON);
  const useRouterMod = await import('@/uni_modules/route-bestX/hooks/useRouter.uts');
  const utilsMod = await import('@/uni_modules/route-bestX/utils/utils.uts');
  const interceptorMod = await import('@/uni_modules/route-bestX/interceptor/interceptor.uts');
  return { ...useRouterMod, ...utilsMod, ...interceptorMod };
}

describe('useRouter Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (globalThis as any).getCurrentPages = vi.fn(() => []);
  });

  it('useRouter 返回单例，且首次调用会安装 onAppRoute 监听', async () => {
    const { useRouter } = await loadRouter();

    expect(useRouter()).toBe(useRouter());
    expect(uni.onAppRoute).toHaveBeenCalledTimes(1);
  });

  it('router.currentRoute 等价于 useRoute() 的返回值', async () => {
    (globalThis as any).getCurrentPages = vi.fn(() => [{ route: 'src/pages/index/index' }]);
    const { useRouter, router } = await loadRouter();

    expect(router.currentRoute).toBeDefined();
    expect(router.currentRoute.path).toBe('/src/pages/index/index');
    expect(router.currentRoute.name).toBe('index');
    expect(useRouter().currentRoute.path).toBe('/src/pages/index/index');
  });

  it('router.currentRoute.pages / page 获取页面栈与当前页面', async () => {
    const mockPages = [
      { route: 'src/pages/index/index' },
      { route: 'src/sub/routerBasicDemo/routerBasicDemo' }
    ];
    (globalThis as any).getCurrentPages = vi.fn(() => mockPages);
    const { useRouter, router } = await loadRouter();

    expect(router.currentRoute.pages).toHaveLength(2);
    expect(router.currentRoute.page).toEqual({ route: 'src/sub/routerBasicDemo/routerBasicDemo' });
    expect(useRouter().currentRoute.pages).toHaveLength(2);
  });

  it('push 字符串形态：原样透传给 uni.navigateTo', async () => {
    const { useRouter } = await loadRouter();

    useRouter().push('/src/sub/auth/login');

    expect(uni.navigateTo).toHaveBeenCalledWith({ url: '/src/sub/auth/login' });
  });

  it('push 对象字面量形态：path + query 序列化（值 URL 编码、number/boolean 可传）', async () => {
    const { useRouter } = await loadRouter();

    useRouter().push(utsObject({ path: '/src/pages/detail/detail', query: { id: 1, tab: 'a b', open: true } }));

    expect(uni.navigateTo).toHaveBeenCalledWith({ url: '/src/pages/detail/detail?id=1&tab=a%20b&open=true' });
  });

  it('push 空入参 / 缺 path 时不触发任何跳转', async () => {
    const { useRouter } = await loadRouter();

    const router = useRouter();
    expect(router.push(null)).toBeNull();
    expect(router.push(utsObject({ query: { id: 1 } }))).toBeNull();

    expect(uni.navigateTo).not.toHaveBeenCalled();
  });

  it('replace / relaunch / switchTab 各自落到对应 uni API', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();

    router.replace('/src/pages/me/me');
    router.relaunch('/src/pages/index/index');
    router.switchTab('/src/pages/basic/basic');

    expect(uni.redirectTo).toHaveBeenCalledWith({ url: '/src/pages/me/me' });
    expect(uni.reLaunch).toHaveBeenCalledWith({ url: '/src/pages/index/index' });
    expect(uni.switchTab).toHaveBeenCalledWith({ url: '/src/pages/basic/basic' });
    expect(uni.navigateTo).not.toHaveBeenCalled();
  });

  it('back 默认退 1 层，可指定层数；go 只接受负数', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    router.back();
    router.back(3);
    router.go(-2);
    router.go(1);

    expect(uni.navigateBack).toHaveBeenNthCalledWith(1, { delta: 1 });
    expect(uni.navigateBack).toHaveBeenNthCalledWith(2, { delta: 3 });
    expect(uni.navigateBack).toHaveBeenNthCalledWith(3, { delta: 2 });
    expect(uni.navigateBack).toHaveBeenCalledTimes(3);
    expect(warnSpy).toHaveBeenCalledTimes(1);

    warnSpy.mockRestore();
  });

  it('resolve 只做归一化、不跳转', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();

    expect(router.resolve('/a/b')).toBe('/a/b');
    expect(router.resolve(utsObject({ path: '/a/b', query: { id: 2 } }))).toBe('/a/b?id=2');
    expect(router.resolve(null)).toBe('');

    expect(uni.navigateTo).not.toHaveBeenCalled();
  });

  it('resolveUrl / serializeQuery 直接从 utils 叶子模块也可用（精准导入路径）', async () => {
    const { resolveUrl, serializeQuery } = await loadRouter();

    expect(resolveUrl('src/pages/index/index?tab=2')).toBe('src/pages/index/index?tab=2');
    expect(resolveUrl(utsObject({ path: '/a', query: { ids: [1, 2], skip: null } }))).toBe('/a?ids=1%2C2');
    expect(serializeQuery(null)).toBe('');
  });

  it('push 命名路由形态：按 name 匹配路径，params 直接转 query（与 path + query 完全一致）', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();

    // 匹配 definePage 显式声明了 name: 'routerBasicDemo' 的页面
    router.push(utsObject({ name: 'routerBasicDemo', params: { tab: 'a', id: 101 } }));

    expect(uni.navigateTo).toHaveBeenCalledWith({
      url: '/src/sub/routerBasicDemo/routerBasicDemo?tab=a&id=101'
    });
  });

  it('push 命名路由形态：未显式声明 name 时按路径最后一个单词匹配（如 modalBasicDemo）', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();

    // modalBasicDemo 页面未显式写 name，按路径最后一个单词 modalBasicDemo 匹配
    router.push(utsObject({ name: 'modalBasicDemo', params: { from: 'test' } }));

    expect(uni.navigateTo).toHaveBeenCalledWith({
      url: '/src/sub/modalBasicDemo/modalBasicDemo?from=test'
    });
  });

  it('replace / resolve 命名路由形态：落到 redirectTo 与纯解析', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();

    router.replace(utsObject({ name: 'index', params: { tab: 1 } }));
    expect(uni.redirectTo).toHaveBeenCalledWith({
      url: '/src/pages/index/index?tab=1'
    });

    const resolved = router.resolve(utsObject({ name: 'modalBasicDemo', params: { foo: 'bar' } }));
    expect(resolved).toBe('/src/sub/modalBasicDemo/modalBasicDemo?foo=bar');
  });

  it('push 命名路由形态：查无此 name 时警告并返回 null，不触发任何跳转', async () => {
    const { useRouter } = await loadRouter();
    const router = useRouter();
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const res = router.push(utsObject({ name: 'nonExistentPageName', params: { a: 1 } }));

    expect(res).toBeNull();
    expect(uni.navigateTo).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('未找到路由名称「nonExistentPageName」'));
    warnSpy.mockRestore();
  });
});

describe('router 门面导出与 createRouter 配置（@/src/router/index.uts）', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('业务入口 router 单例与 default 导出正确', async () => {
    vi.resetModules();
    const routerMod = await import('@/src/router/index.uts');

    expect(routerMod.router).toBeDefined();
    expect(routerMod.default).toBe(routerMod.router);
  });

  it('createRouter({ tabbarPath })：push 和 replace 自动转为 switchTab，普通路径保持 navigateTo', async () => {
    const { createRouter, registerTabbarHandler } = await loadRouter();
    registerTabbarHandler(null);

    const router = createRouter({
      tabbarPath: ['/src/pages/index/index', '/src/pages/me/me']
    });

    // 1. push 到 TabBar 路径，自动转为 switchTab
    router.push('/src/pages/index/index');
    expect(uni.switchTab).toHaveBeenCalledWith({ url: '/src/pages/index/index' });
    expect(uni.navigateTo).not.toHaveBeenCalled();

    // 2. replace 到 TabBar 路径，同样自动纠偏为 switchTab
    router.replace('/src/pages/me/me');
    expect(uni.switchTab).toHaveBeenCalledWith({ url: '/src/pages/me/me' });
    expect(uni.redirectTo).not.toHaveBeenCalled();

    // 3. 普通非 TabBar 路径，照常使用 navigateTo
    router.push('/src/sub/auth/login');
    expect(uni.navigateTo).toHaveBeenCalledWith({ url: '/src/sub/auth/login' });

    registerTabbarHandler(null);
  });

  it('createRouter 同时配置 tabbarPath、isTabbar 与 switchTab：三者联动生效', async () => {
    const { createRouter, registerTabbarHandler } = await loadRouter();
    registerTabbarHandler(null);

    const customSwitchTab = vi.fn();
    const customIsTabbar = vi.fn((url: string) => url.includes('/src/pages/special'));

    const router = createRouter({
      tabbarPath: ['/src/pages/index/index'],
      isTabbar: customIsTabbar,
      switchTab: customSwitchTab
    });

    // 1. 命中 tabbarPath，触发自定义 switchTab
    router.push('/src/pages/index/index');
    expect(customSwitchTab).toHaveBeenCalledWith('/src/pages/index/index');

    // 2. 命中 isTabbar 自定义判定，同样触发自定义 switchTab
    router.push('/src/pages/special/custom');
    expect(customSwitchTab).toHaveBeenCalledWith('/src/pages/special/custom');

    // 3. 未命中任何 TabBar 条件，正常走 navigateTo
    router.push('/src/sub/auth/login');
    expect(uni.navigateTo).toHaveBeenCalledWith({ url: '/src/sub/auth/login' });

    registerTabbarHandler(null);
  });

  it('支持传入 intercept: false 跳过拦截器 (push, replace, relaunch, switchTab, back)', async () => {
    const { useRouter, isBypassInterceptorOnce, navigateToInterceptor, setBypassInterceptorOnce } = await loadRouter();
    const router = useRouter();

    // 1. push 传入 false，会设置 bypassInterceptorOnce
    router.push('/src/sub/auth/login', false);
    expect(isBypassInterceptorOnce()).toBe(true);
    // 拦截器 invoke 执行时直接放行并复位
    expect(navigateToInterceptor.invoke({ url: '/src/sub/auth/login' })).toBe(true);
    expect(isBypassInterceptorOnce()).toBe(false);

    // 2. replace 传入 false
    router.replace('/src/sub/auth/login', false);
    expect(isBypassInterceptorOnce()).toBe(true);
    setBypassInterceptorOnce(false);

    // 3. relaunch 传入 false
    router.relaunch('/src/pages/index/index', false);
    expect(isBypassInterceptorOnce()).toBe(true);
    setBypassInterceptorOnce(false);

    // 4. switchTab 传入 false
    router.switchTab('/src/pages/index/index', false);
    expect(isBypassInterceptorOnce()).toBe(true);
    setBypassInterceptorOnce(false);

    // 5. back 传入 false
    router.back(1, false);
    expect(isBypassInterceptorOnce()).toBe(true);
    setBypassInterceptorOnce(false);

    // 6. 对象形态传 { intercept: false }
    router.push({ path: '/src/sub/auth/login', intercept: false });
    expect(isBypassInterceptorOnce()).toBe(true);
    setBypassInterceptorOnce(false);

    // 7. 默认 intercept 为 true，不跳过拦截器
    router.push('/src/sub/auth/login');
    expect(isBypassInterceptorOnce()).toBe(false);
  });
});
