import { onPageShow } from '@dcloudio/uni-app';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { utsObject } from './helpers';

/**
 * useRoute（vue-router 形态的路由响应式状态）行为验证
 *
 * 为什么必须在这里验：路由状态的正确性全在「写入时机 + 覆盖规则」上 ——
 * 三层数据源（onAppRoute / 拦截器兜底 / 页面栈回读）写的是同一份状态，
 * 谁先谁后、什么情况下该跳过，写错了不会有任何编译提示，只会静默地把 query 抹掉
 * 或者一直停在旧页面上。这几条正是本文件覆盖的对象。
 *
 * 覆盖面只到「UTS 语法糖之下」的这层语义；`.uts` 在 Kotlin 通道才暴露的坑
 * （联合类型三元、链式 .catch、泛型别名进 as 位置）单测走 esbuild 转译**不复现**，
 * 那部分靠真机 / Kotlin 编译把关。
 */

/** 取一份全新的 route-state 模块（模块级状态在用例间会串，必须逐用例重置） */
async function loadRouteState() {
  vi.resetModules();
  const mod = await import('@/src/router/hooks/route-state.uts');
  const useRouteMod = await import('@/src/router/hooks/useRoute.uts');
  return { ...mod, useRoute: useRouteMod.useRoute };
}

/** 取最近一次注册的 onAppRoute 监听回调 */
function lastAppRouteListener(): (event: any) => void {
  const calls = (uni.onAppRoute as any).mock.calls;
  return calls[calls.length - 1][0];
}

/**
 * 让页面栈停在指定路由
 *
 * `options` 对应真机 UniPage 的 `options`（路由参数，见 src/router/utils/utils.uts 的
 * getCurrentPageOptions）—— 不传时真机拿到的是 undefined，此处保持一致。
 */
function setPageStack(route: string, options?: Record<string, any>): void {
  const page: Record<string, any> = { route };
  if (options != null) {
    page.options = utsObject(options);
  }
  (globalThis as any).getCurrentPages = vi.fn(() => [page]);
}

/** 取 useRoute 注册到 onPageShow 上的回调（页面重新显示时回读路由） */
function lastPageShowHandler(): () => void {
  const calls = (onPageShow as unknown as { mock: { calls: any[][] } }).mock.calls;
  return calls[calls.length - 1][0];
}

describe('useRoute Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (globalThis as any).getCurrentPages = vi.fn(() => []);
  });

  it('首次调用会安装 onAppRoute 监听，并从页面栈回读当前路由', async () => {
    setPageStack('src/pages/index/index');
    const { useRoute } = await loadRouteState();

    const route = useRoute();

    expect(uni.onAppRoute).toHaveBeenCalledTimes(1);
    expect(route.path).toBe('/src/pages/index/index');
    expect(route.fullPath).toBe('/src/pages/index/index');
  });

  it('重复调用只安装一次监听，且返回同一个共享对象', async () => {
    const { useRoute } = await loadRouteState();

    const first = useRoute();
    const second = useRoute();

    expect(uni.onAppRoute).toHaveBeenCalledTimes(1);
    expect(first).toBe(second);
  });

  it('onAppRoute 事件会把 path / query / fullPath 落进状态（path 自动补前导斜杠）', async () => {
    const { useRoute } = await loadRouteState();
    const route = useRoute();

    lastAppRouteListener()(utsObject({
      path: 'src/sub/detail/detail',
      query: utsObject({ id: '7', tab: 'home' }),
      openType: 'navigateTo'
    }));

    expect(route.path).toBe('/src/sub/detail/detail');
    expect(route.query.get('id')).toBe('7');
    expect(route.query.get('tab')).toBe('home');
    expect(route.fullPath).toBe('/src/sub/detail/detail?id=7&tab=home');
  });

  it('onAppRoute 的非法 / 空 path 事件被忽略，不清空已有状态', async () => {
    const { useRoute, applyRouteFromUrl } = await loadRouteState();
    const route = useRoute();
    applyRouteFromUrl('/src/pages/me/me');

    lastAppRouteListener()(utsObject({ path: '', query: null, openType: 'navigateBack' }));

    expect(route.path).toBe('/src/pages/me/me');
  });

  it('applyRouteFromUrl 解析 query（含百分号转义与空值）', async () => {
    const { applyRouteFromUrl, routeState } = await loadRouteState();

    applyRouteFromUrl('/src/sub/auth/login?redirect=%2Fsrc%2Fpages%2Fme%2Fme&flag');

    expect(routeState.path).toBe('/src/sub/auth/login');
    expect(routeState.query.get('redirect')).toBe('/src/pages/me/me');
    expect(routeState.query.get('flag')).toBe('');
    expect(routeState.fullPath).toBe('/src/sub/auth/login?redirect=%2Fsrc%2Fpages%2Fme%2Fme&flag');
  });

  it('syncRouteState 在路径未变化时跳过，不会抹掉 onAppRoute 写入的 query', async () => {
    const { useRoute, syncRouteState } = await loadRouteState();
    const route = useRoute();

    lastAppRouteListener()(utsObject({ path: 'src/pages/detail/detail', query: utsObject({ id: '9' }), openType: 'navigateTo' }));
    setPageStack('src/pages/detail/detail');
    syncRouteState();

    expect(route.query.get('id')).toBe('9');
  });

  it('syncRouteState 在路径变化时回读页面栈（拿不到 query 时落空 query）', async () => {
    const { useRoute, syncRouteState } = await loadRouteState();
    const route = useRoute();

    setPageStack('src/pages/me/me');
    syncRouteState();

    expect(route.path).toBe('/src/pages/me/me');
    expect(route.query.size).toBe(0);
    expect(route.fullPath).toBe('/src/pages/me/me');
  });

  it('syncRouteState 从页面栈的 options 拿到 query（App 端没有 onAppRoute，这是 query 的唯一来源）', async () => {
    const { useRoute, syncRouteState } = await loadRouteState();
    const route = useRoute();

    setPageStack('src/sub/routerBasicDemo/routerBasicDemo', { id: 2001, from: 'self' });
    syncRouteState();

    expect(route.path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    expect(route.query.get('id')).toBe('2001');
    expect(route.query.get('from')).toBe('self');
    expect(route.fullPath).toBe('/src/sub/routerBasicDemo/routerBasicDemo?id=2001&from=self');
  });

  it('状态非空时 useRoute 不再回读页面栈：栈顶还停在上一页也不会把目标路由覆盖回去', async () => {
    const { useRoute, applyRouteFromUrl } = await loadRouteState();
    const route = useRoute();

    // 页面栈顶仍是上一页（App 端新页面入栈有滞后）；目标路由由导航发起方写入
    setPageStack('src/pages/index/index');
    applyRouteFromUrl('/src/sub/routerBasicDemo/routerBasicDemo?id=2001');

    // 新页面 setup 里再次调用 useRoute
    useRoute();

    expect(route.path).toBe('/src/sub/routerBasicDemo/routerBasicDemo');
    expect(route.query.get('id')).toBe('2001');
  });

  it('冷启动时页面栈还没建立：ensureRouteReady 延后一拍补读一次', async () => {
    vi.useFakeTimers();
    try {
      (globalThis as any).getCurrentPages = vi.fn(() => []);
      const { useRoute } = await loadRouteState();
      const route = useRoute();
      expect(route.path).toBe('');

      setPageStack('src/pages/index/index');
      vi.runAllTimers();

      expect(route.path).toBe('/src/pages/index/index');
    }
    finally {
      vi.useRealTimers();
    }
  });

  it('useRoute 注册 onPageShow：页面重新显示时回读页面栈（返回上一页 / 物理返回键）', async () => {
    const { useRoute, applyRouteFromUrl } = await loadRouteState();
    const route = useRoute();

    applyRouteFromUrl('/src/sub/routerBasicDemo/routerBasicDemo?id=2001');
    expect(route.query.get('id')).toBe('2001');

    // 点返回：栈顶回到首页（无参数）—— 只有 onPageShow 这个时机能看到栈已经变了
    setPageStack('src/pages/index/index');
    lastPageShowHandler()();

    expect(route.path).toBe('/src/pages/index/index');
    expect(route.query.size).toBe(0);
    expect(route.fullPath).toBe('/src/pages/index/index');
  });

  it('meta 两级数据源：未注册时回退 pages.json 页面配置，setRouteMeta 注册后覆盖它', async () => {
    const { useRoute, setRouteMeta, removeRouteMeta, getRouteMeta, getPageConfig, applyRouteFromUrl } = await loadRouteState();
    const route = useRoute();

    // 一级（默认）：pages.json 里该页面的配置项（构建期生成，见 src/router/generated/page-meta.uts）
    applyRouteFromUrl('/src/pages/index/index');
    expect(route.meta).not.toBeNull();
    expect(getPageConfig('/src/pages/index/index')?.getString('path')).toBe('/src/pages/index/index');

    // 二级（覆盖）：手写注册优先，兼容带不带 /src 前缀两种写法
    setRouteMeta('pages/index/index', utsObject({ name: 'home', title: '首页', requireAuth: false }));
    applyRouteFromUrl('/src/pages/index/index');
    expect(route.name).toBe('home');
    expect(route.meta?.getString('title')).toBe('首页');
    expect(getRouteMeta('/src/pages/index/index')?.getBoolean('requireAuth')).toBe(false);

    // 移除注册后又回落到 pages.json 的配置项
    removeRouteMeta('/src/pages/index/index');
    const fallback = getRouteMeta('/src/pages/index/index');
    expect(fallback).not.toBeNull();
    expect(fallback?.getString('title')).toBeNull();
    expect(fallback?.getString('path')).toBe('/src/pages/index/index');
  });

  it('params 恒为空 Map；definePage 未声明 name 时 name 为 null', async () => {
    const { useRoute, applyRouteFromUrl } = await loadRouteState();
    const route = useRoute();

    applyRouteFromUrl('/src/pages/function/function');

    expect(route.params.size).toBe(0);
    expect(route.meta).not.toBeNull();
    expect(route.name).toBeNull();
  });

  it('uninstallRouteStateListener 后重新调用 useRoute 会再次安装', async () => {
    const { useRoute, uninstallRouteStateListener } = await loadRouteState();

    useRoute();
    uninstallRouteStateListener();
    expect(uni.offAppRoute).toHaveBeenCalledTimes(1);

    useRoute();
    expect(uni.onAppRoute).toHaveBeenCalledTimes(2);
  });
});
