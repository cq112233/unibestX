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
  const useRouterMod = await import('@/src/router/hooks/useRouter.uts');
  const utilsMod = await import('@/src/router/utils/utils.uts');
  return { ...useRouterMod, ...utilsMod };
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
});

describe('router 门面导出（@/src/router）', () => {
  it('useRoute / useRouter / router / routeState 都能从门面取到', async () => {
    vi.resetModules();
    const facade = await import('@/src/router/index.uts');

    expect(typeof facade.useRoute).toBe('function');
    expect(typeof facade.useRouter).toBe('function');
    expect(facade.router).toBeInstanceOf(facade.Router);
    expect(facade.useRouter()).toBe(facade.router);
    expect(typeof facade.getRouteMeta).toBe('function');
    expect(typeof facade.setRouteMeta).toBe('function');
  });
});
