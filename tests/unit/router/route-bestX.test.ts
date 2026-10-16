import { describe, expect, it } from 'vitest';
import {
  createEmptyRoute,
  createRouter,
  createRouterError,
  decodeQueryValue,
  decodeSafe,
  getRouteMeta,
  getRouterErrorMessage,
  isNavigationFailure,
  parseUrlToObj,
  resetRegisteredAfterHooks,
  resetRegisteredErrorHandlers,
  resetRegisteredGuards,
  resolvePathByName,
  ROUTER_ERROR_CODE,
  runAfterEachHooks,
  runRouterGuard,
  setRoutes,
  setRoutesMeta,
  useRoute,
  useRouter
} from '@/uni_modules/route-bestX/index.uts';
import type { NextFunction, RouteRecordRaw, RouteTarget } from '@/uni_modules/route-bestX/index.uts';

describe('route-bestX uni_modules 插件核心验证', () => {
  it('能够通过 createRouter 和 useRouter 获取单例路由器', () => {
    const r1 = createRouter();
    const r2 = useRouter();
    expect(r1).toBe(r2);
  });

  it('app.use(router) 安装时自动向 globalProperties 注入 $router 与 $route', () => {
    const router = createRouter();
    const mockApp = {
      config: {
        globalProperties: {} as Record<string, any>
      },
      use(plugin: any) {
        if (typeof plugin.install === 'function') {
          plugin.install(this);
        }
      }
    };
    mockApp.use(router);
    expect(mockApp.config.globalProperties.$router).toBe(router);
    expect(mockApp.config.globalProperties.$route).toBe(router.currentRoute);
  });

  it('useRoute 能够提供标准的空路由结构', () => {
    const route = useRoute();
    expect(route).toBeDefined();
    expect(route.path).toBeDefined();
    expect(route.query).toBeDefined();

    const empty = createEmptyRoute();
    expect(empty.path).toBe('');
    expect(empty.query.size).toBe(0);
  });

  it('router.beforeEach 能够正确拦截并重定向', () => {
    resetRegisteredGuards();
    const router = createRouter();

    let authenticated = false;
    router.beforeEach((to: RouteTarget, _from: RouteTarget, next: NextFunction) => {
      if (!authenticated && to.path.startsWith('/admin')) {
        next('/login');
      }
      else {
        next();
      }
    });

    const adminRoute = {
      path: '/admin/dashboard',
      query: new Map<string, string>(),
      fullPath: '/admin/dashboard'
    } as RouteTarget;

    // 1. 未鉴权被拦截
    const res1 = runRouterGuard(adminRoute, null, 'navigateTo');
    expect(res1.pass).toBe(false);
    expect(res1.redirect).toBe('/login');

    // 2. 鉴权后放行
    authenticated = true;
    const res2 = runRouterGuard(adminRoute, null, 'navigateTo');
    expect(res2.pass).toBe(true);
    expect(res2.redirect).toBeNull();

    resetRegisteredGuards();
  });

  it('beforeEach 支持返回 false 取消导航以及返回字符串重定向', () => {
    resetRegisteredGuards();
    const router = createRouter();

    router.beforeEach((to: RouteTarget) => {
      if (to.path === '/cancel') {
        return false;
      }
      if (to.path === '/redirect') {
        return '/home';
      }
      return true;
    });

    expect(runRouterGuard({ path: '/cancel', query: new Map(), fullPath: '/cancel' } as RouteTarget, null, 'navigateTo').pass).toBe(false);
    expect(runRouterGuard({ path: '/redirect', query: new Map(), fullPath: '/redirect' } as RouteTarget, null, 'navigateTo').redirect).toBe('/home');
    expect(runRouterGuard({ path: '/other', query: new Map(), fullPath: '/other' } as RouteTarget, null, 'navigateTo').pass).toBe(true);

    resetRegisteredGuards();
  });

  it('router.afterEach 支持注册后置钩子并在导航完成时被调用，且内置幂等排重', () => {
    resetRegisteredAfterHooks();

    const router = createRouter();
    const calls: Array<{ to: string; from: string; failure: any }> = [];

    const hook = (to: RouteTarget, from: RouteTarget, failure?: any | null) => {
      calls.push({ to: to.path, from: from.path, failure });
    };

    router.afterEach(hook);
    // 重复注册同一个函数不会导致执行多次（幂等排重）
    router.afterEach(hook);

    const toRoute = { path: '/to', query: new Map(), fullPath: '/to' } as RouteTarget;
    const fromRoute = { path: '/from', query: new Map(), fullPath: '/from' } as RouteTarget;

    runAfterEachHooks(toRoute, fromRoute, null);

    expect(calls.length).toBe(1);
    expect(calls[0].to).toBe('/to');
    expect(calls[0].from).toBe('/from');
    expect(calls[0].failure).toBeNull();

    resetRegisteredAfterHooks();
  });

  it('router.onError 支持注册错误回调并在守卫抛出异常时自动触发', () => {
    resetRegisteredGuards();
    resetRegisteredErrorHandlers();

    const router = createRouter();
    const capturedErrors: any[] = [];

    const errorHandler = (err: any, to?: RouteTarget | null, from?: RouteTarget | null) => {
      capturedErrors.push({ err, to: to?.path, from: from?.path });
    };

    router.onError(errorHandler);
    // 幂等排重
    router.onError(errorHandler);

    // 注册一个会抛出异常的守卫
    router.beforeEach(() => {
      throw new Error('Test Guard Failure');
    });

    const target = { path: '/error-page', query: new Map(), fullPath: '/error-page' } as RouteTarget;
    const from = { path: '/start', query: new Map(), fullPath: '/start' } as RouteTarget;

    const result = runRouterGuard(target, from, 'navigateTo');

    // 异常被捕获并短路拦截
    expect(result.pass).toBe(false);
    expect(capturedErrors.length).toBe(1);
    expect(capturedErrors[0].err.message).toBe('Test Guard Failure');
    expect(capturedErrors[0].to).toBe('/error-page');
    expect(capturedErrors[0].from).toBe('/start');

    resetRegisteredGuards();
    resetRegisteredErrorHandlers();
  });

  it('router_ERROR_CODE 遵循 101/102, 201/202, 301~304 规范并提供标准描述与校验', () => {
    expect(ROUTER_ERROR_CODE.GUARD_CANCELLED).toBe(101);
    expect(ROUTER_ERROR_CODE.MAX_REDIRECT_EXCEEDED).toBe(102);
    expect(ROUTER_ERROR_CODE.BACK_STACK_DEPTH_INVALID).toBe(201);
    expect(ROUTER_ERROR_CODE.NAVIGATE_BACK_FAILED).toBe(202);
    expect(ROUTER_ERROR_CODE.NAVIGATE_TO_FAILED).toBe(301);
    expect(ROUTER_ERROR_CODE.REDIRECT_TO_FAILED).toBe(302);
    expect(ROUTER_ERROR_CODE.RELAUNCH_FAILED).toBe(303);
    expect(ROUTER_ERROR_CODE.SWITCH_TAB_FAILED).toBe(304);

    expect(getRouterErrorMessage(101)).toBe('导航被守卫 next(false) 主动取消');
    expect(getRouterErrorMessage(102)).toBe('重定向次数超过上限（默认 10 层，防死循环）');
    expect(getRouterErrorMessage(201)).toBe('back 失败：页面栈深度不足');
    expect(getRouterErrorMessage(202)).toBe('uni.navigateBack 调用失败');
    expect(getRouterErrorMessage(301)).toBe('uni.navigateTo 调用失败（页面未注册 / 栈超 10 层等）');
    expect(getRouterErrorMessage(302)).toBe('uni.redirectTo 调用失败');
    expect(getRouterErrorMessage(303)).toBe('uni.reLaunch 调用失败');
    expect(getRouterErrorMessage(304)).toBe('uni.switchTab 调用失败（目标页不在 tabBar 等）');

    const err = createRouterError(ROUTER_ERROR_CODE.GUARD_CANCELLED);
    expect(isNavigationFailure(err)).toBe(true);
    expect(isNavigationFailure(err, 101)).toBe(true);
    expect(isNavigationFailure(err, 102)).toBe(false);
    expect(isNavigationFailure(new Error('other'))).toBe(false);
  });

  it('支持批量注册路由表 (routes / setRoutes / setRoutesMeta)', () => {
    // 1. setRoutesMeta 字典形态
    setRoutesMeta({
      '/pages/goods/list': { name: 'goodsList', title: '商品列表' },
      '/pages/goods/detail': { name: 'goodsDetail', title: '商品详情' }
    });
    expect(resolvePathByName('goodsList')).toBe('/pages/goods/list');
    expect(resolvePathByName('goodsDetail')).toBe('/pages/goods/detail');
    expect(getRouteMeta('/pages/goods/detail')?.title).toBe('商品详情');

    // 2. setRoutes 数组形态
    const routeRecords: RouteRecordRaw[] = [
      { path: '/pages/order/list', name: 'orderList', meta: { title: '订单列表' } },
      { path: '/pages/order/detail', name: 'orderDetail', meta: { title: '订单详情' } }
    ];
    setRoutes(routeRecords);
    expect(resolvePathByName('orderList')).toBe('/pages/order/list');
    expect(resolvePathByName('orderDetail')).toBe('/pages/order/detail');
    expect(getRouteMeta('/pages/order/detail')?.title).toBe('订单详情');

    // 3. createRouter 传入 routes 选项
    createRouter({
      routes: [
        { path: '/pages/cart/index', name: 'cart', meta: { title: '购物车' } }
      ]
    });
    expect(resolvePathByName('cart')).toBe('/pages/cart/index');
    expect(getRouteMeta('/pages/cart/index')?.title).toBe('购物车');
  });

  it('decodeSafe 与 decodeQueryValue 支持多层编码安全解码与异常防护', () => {
    // 1. 无需解码的普通文本
    expect(decodeSafe('hello')).toBe('hello');
    expect(decodeQueryValue('hello')).toBe('hello');

    // 2. 单层 URL 编码
    expect(decodeSafe('%2Fpages%2Findex')).toBe('/pages/index');
    expect(decodeQueryValue('%2Fpages%2Findex')).toBe('/pages/index');

    // 3. 多层/嵌套编码（例如二次编码的 redirect 参数）
    expect(decodeSafe('%252Fsub%252Fdetail%253Fid%253D123%2526name%253Dabc')).toBe(
      '/sub/detail?id=123&name=abc'
    );
    expect(decodeSafe('%252fsub%252fdetail%253fid%253d123')).toBe('/sub/detail?id=123');

    // 4. 非法或字面量百分号（异常防护不崩溃，保留原文）
    expect(decodeSafe('100%')).toBe('100%');
    expect(decodeSafe('%E0%A4%A')).toBe('%E0%A4%A');

    // 5. parseUrlToObj 自动调用 decodeSafe 使得路由参数直接获得最终解码值
    const parsed = parseUrlToObj('/sub/auth/login?redirect=%252Fsub%252Fdetail%253Fid%253D1');
    expect(parsed.path).toBe('/sub/auth/login');
    expect(parsed.query.get('redirect')).toBe('/sub/detail?id=1');
  });
});
