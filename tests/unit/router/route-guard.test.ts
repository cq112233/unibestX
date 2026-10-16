import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

/**
 * 业务路由守卫（src/router/guard/）决策矩阵测试
 *
 * 为什么值得单测：规则是**纯函数**（入参 = 上下文，出参 = 裁决），登录态由 guard/guardLogin.uts 的
 * buildGuardContext() 算好传进来 —— 于是「登录态 × 黑白名单策略 × 目标页面」这 6 种组合可以
 * 在这里一次跑完，不用起真机、不用打桩 store。这层语义一旦写错，表现是「某些页面莫名要登录 /
 * 莫名不拦」，而且**没有任何编译期提示**，只能靠决策矩阵兜住。
 *
 * ⚠️ 这里只覆盖「裁决」这一层：真实跳转（TabBar 走 switchTab、改跳后路由状态写谁）
 *    属于框架侧，由 interceptor.test.ts 覆盖，真机行为另算。
 */

const LOGIN_PAGE = '/src/sub/auth/login';
const HOME_PAGE = '/src/pages/index/index';
const EXCLUDE_PAGE = '/src/sub/routerParamsBasicDemo/routerParamsBasicDemo';

/** 把契约、规则、入口一起取回来 —— 测试要同时验「单条规则」与「整条链」 */
async function importGuardModules() {
  const types = await import('@/src/router/guard/types.uts');
  const login = await import('@/src/router/guard/guardLogin.uts');
  const entry = await import('@/src/router/guard/index.uts');
  return { ...types, ...login, ...entry };
}

/**
 * 取一份全新的守卫模块，并按需把登录策略换成白名单 / 黑名单
 *
 * ⚠️ `vi.resetModules()` 只清模块缓存，**不会**注销 `vi.doMock` 注册的假模块 ——
 *    不先 doUnmock，白名单用例的 mock 会泄漏到后面所有用例。
 */
async function loadGuard(needLoginMode?: boolean) {
  vi.resetModules();
  vi.doUnmock('@/src/router/config/config.uts');
  if (needLoginMode == null) {
    return await importGuardModules();
  }
  vi.doMock('@/src/router/config/config.uts', async () => {
    const actual = await vi.importActual<Record<string, any>>('@/src/router/config/config.uts');
    return { ...actual, isNeedLoginMode: needLoginMode };
  });
  return await importGuardModules();
}

/** 造一份守卫上下文 */
function makeCtx(over: Record<string, any> = {}): any {
  const path: string = over.path ?? '/src/pages/me/me';
  const query: Map<string, string> = new Map(Object.entries(over.query ?? {}));
  const fromPath: string = over.fromPath ?? '/src/pages/index/index';
  const fromQuery: Map<string, string> = new Map(Object.entries(over.fromQuery ?? {}));
  const from = over.from ?? { path: fromPath, query: fromQuery, fullPath: over.fromFullPath ?? fromPath };
  return {
    to: { path, query, fullPath: over.fullPath ?? path },
    from,
    api: over.api ?? 'navigateTo',
    isLoggedIn: over.isLoggedIn ?? false
  };
}

describe('路由守卫（业务层）决策矩阵', () => {
  describe('名单判定 judgeIsExcludePath', () => {
    it('全等命中名单；省略前导斜杠（src/xxx）会自动补斜杠后再比', async () => {
      const { judgeIsExcludePath } = await loadGuard();

      expect(judgeIsExcludePath(EXCLUDE_PAGE)).toBe(true);
      expect(judgeIsExcludePath(EXCLUDE_PAGE.substring(1))).toBe(true);
      expect(judgeIsExcludePath('/src/pages/me/me')).toBe(false);
    });

    it('不做前缀 / 通配匹配 —— 只写父目录不算命中', async () => {
      const { judgeIsExcludePath } = await loadGuard();

      expect(judgeIsExcludePath('/src/sub/routerParamsBasicDemo')).toBe(false);
      expect(judgeIsExcludePath(`${EXCLUDE_PAGE}/detail`)).toBe(false);
    });
  });

  describe('已登录', () => {
    it('目标不是登录页 → 一律放行', async () => {
      const { guardRoute } = await loadGuard();

      const result = guardRoute(makeCtx({ path: '/src/pages/me/me', isLoggedIn: true }));

      expect(result.pass).toBe(true);
      expect(result.redirect).toBe(null);
    });

    it('目标不是登录页时，即便命中排除名单也照样放行（名单只管未登录）', async () => {
      const { guardRoute } = await loadGuard();

      expect(guardRoute(makeCtx({ path: EXCLUDE_PAGE, isLoggedIn: true })).pass).toBe(true);
    });

    it('进登录页且带 redirect → 拦下，改跳 redirect 指向的页面', async () => {
      const { guardRoute } = await loadGuard();

      const result = guardRoute(makeCtx({
        path: LOGIN_PAGE,
        query: { redirect: '/src/pages/me/me?tab=2' },
        isLoggedIn: true
      }));

      expect(result.pass).toBe(false);
      expect(result.redirect).toBe('/src/pages/me/me?tab=2');
    });

    it('进登录页但没带 redirect（或为空串）→ 拦下，回首页兜底', async () => {
      const { guardRoute } = await loadGuard();

      expect(guardRoute(makeCtx({ path: LOGIN_PAGE, isLoggedIn: true })).redirect).toBe(HOME_PAGE);
      expect(guardRoute(makeCtx({ path: LOGIN_PAGE, query: { redirect: '' }, isLoggedIn: true })).redirect).toBe(HOME_PAGE);
    });
  });

  describe('未登录 · 黑名单策略（默认）', () => {
    it('普通页面 → 放行', async () => {
      const { guardRoute } = await loadGuard(false);

      const result = guardRoute(makeCtx({ path: '/src/pages/me/me' }));

      expect(result.pass).toBe(true);
    });

    it('命中排除名单 → 拦下并改跳登录页，redirect 带回原地址（含 query）', async () => {
      const { guardRoute } = await loadGuard(false);

      const fullPath = `${EXCLUDE_PAGE}?id=1&from=self`;
      const result = guardRoute(makeCtx({ path: EXCLUDE_PAGE, fullPath }));

      expect(result.pass).toBe(false);
      expect(result.redirect).toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`);
    });

    it('登录页本身不在名单里 → 放行（否则改跳登录页会无限循环）', async () => {
      const { guardRoute } = await loadGuard(false);

      expect(guardRoute(makeCtx({ path: LOGIN_PAGE })).pass).toBe(true);
    });
  });

  describe('未登录 · 白名单策略（isNeedLoginMode）', () => {
    it('命中排除名单 → 放行', async () => {
      const { guardRoute } = await loadGuard(true);

      expect(guardRoute(makeCtx({ path: EXCLUDE_PAGE })).pass).toBe(true);
    });

    it('登录页 → 放行（同上：终止改跳循环）', async () => {
      const { guardRoute } = await loadGuard(true);

      expect(guardRoute(makeCtx({ path: LOGIN_PAGE })).pass).toBe(true);
    });

    it('其余页面 → 一律拦下并改跳登录页', async () => {
      const { guardRoute } = await loadGuard(true);

      const fullPath = '/src/pages/me/me?tab=2';
      const result = guardRoute(makeCtx({ path: '/src/pages/me/me', fullPath }));

      expect(result.pass).toBe(false);
      expect(result.redirect).toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`);
    });
  });

  describe('改跳登录页 · 回跳地址的编码口径', () => {
    it('整串只编码一次（登录页那边解码一次正好还原）', async () => {
      const { guardRoute } = await loadGuard(false);
      // 真实链路里 fullPath 是**解码态**（parseUrlToObj 已解过码），值里可以带中文 / 空格 / & / 斜杠
      const fullPath = `${EXCLUDE_PAGE}?name=张三 & 好友/self&from=push`;
      const redirect = guardRoute(makeCtx({ path: EXCLUDE_PAGE, fullPath })).redirect;

      expect(redirect).toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`);
      // 二次编码的签名：多编一层的话，上面的 %E5 / %26 会变成 %25E5 / %2526
      expect((redirect as string).substring(`${LOGIN_PAGE}?redirect=`.length)).not.toContain('%25');
    });
  });

  describe('裁决构造器与上下文', () => {
    it('allow() = 放行且不跳转；block() 默认 = 静默拦截（redirect 为 null）', async () => {
      const { allow, block } = await loadGuard();

      expect(allow()).toEqual({ pass: true, redirect: null });
      expect(block()).toEqual({ pass: false, redirect: null });
      expect(block('/src/sub/auth/login')).toEqual({ pass: false, redirect: '/src/sub/auth/login' });
    });

    it('守卫拿得到触发本次跳转的 API 名（供按 API 差异化裁决）', async () => {
      const { guardRoute } = await loadGuard();

      // 默认实现不区分 API，但上下文必须把 api 如实带进去，业务自定义规则要用
      expect(guardRoute(makeCtx({ api: 'switchTab' })).pass).toBe(true);
    });

    it('默认实现不碰 uni API（守卫只表达意图，跳转由框架派发）', async () => {
      const { guardRoute } = await loadGuard(true);

      guardRoute(makeCtx({ path: '/src/pages/me/me' }));

      expect((globalThis as any).uni.navigateTo).not.toHaveBeenCalled();
      expect((globalThis as any).uni.switchTab).not.toHaveBeenCalled();
    });
  });

  describe('规则与编排的分工：guardLogin（单条规则） vs guardRoute（守卫链）', () => {
    it('单条规则可脱离守卫链单独裁决（新增规则照这个形状就自带可测性）', async () => {
      const { guardLogin } = await loadGuard(false);

      expect(guardLogin(makeCtx({ path: '/src/pages/me/me' })).pass).toBe(true);
      expect(guardLogin(makeCtx({ path: EXCLUDE_PAGE })).pass).toBe(false);
    });

    it('守卫链只做编排：只有登录一条规则时，整条链的裁决与 guardLogin 逐例一致', async () => {
      const { guardLogin, guardRoute } = await loadGuard(false);
      const cases: any[] = [
        makeCtx({ path: '/src/pages/me/me' }),
        makeCtx({ path: EXCLUDE_PAGE, fullPath: `${EXCLUDE_PAGE}?id=1` }),
        makeCtx({ path: LOGIN_PAGE }),
        makeCtx({ path: '/src/pages/me/me', isLoggedIn: true }),
        makeCtx({ path: LOGIN_PAGE, query: { redirect: '/src/pages/me/me' }, isLoggedIn: true }),
        makeCtx({ path: LOGIN_PAGE, isLoggedIn: true })
      ];

      // 编排层不得引入任何自己的裁决 —— 一旦出现「链里额外加了 if」，这里就会挂
      cases.forEach((ctx) => {
        expect(guardRoute(ctx)).toEqual(guardLogin(ctx));
      });
    });

    it('规则拦下时，它的裁决原样作为整条链的结果（redirect 一字不改）', async () => {
      const { guardLogin, guardRoute } = await loadGuard(false);
      const fullPath = `${EXCLUDE_PAGE}?id=1&from=self`;
      const ctx = makeCtx({ path: EXCLUDE_PAGE, fullPath });

      const first = guardLogin(ctx);

      expect(first.pass).toBe(false);
      expect(guardRoute(ctx)).toEqual(first);
      expect(guardRoute(ctx).redirect).toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`);
    });
  });

  describe('上下文装配 buildGuardContext（业务信号的唯一取处）', () => {
    it('登录态取自 tokenStore.hasValidLogin()，to / from / api 原样带过去', async () => {
      vi.resetModules();
      // 打桩值可变：写死一边过不了两边，才算真验了委派
      let storedLogin = false;
      vi.doMock('@/src/store/index.uts', () => ({
        useTokenStore: () => ({ hasValidLogin: () => storedLogin })
      }));
      try {
        const { buildGuardContext } = await import('@/src/router/guard/guardLogin.uts');
        const to = {
          path: '/src/pages/me/me',
          query: new Map<string, string>([['tab', '2']]),
          fullPath: '/src/pages/me/me?tab=2'
        };
        const from = {
          path: '/src/pages/index/index',
          query: new Map<string, string>(),
          fullPath: '/src/pages/index/index'
        };

        const ctx = buildGuardContext(to, from, 'switchTab');

        expect(ctx.isLoggedIn).toBe(false);
        expect(ctx.to).toBe(to); // 框架给的 URL 事实原样透传，业务侧不做二次归一化
        expect(ctx.from).toBe(from); // 来源页面路由原样透传
        expect(ctx.api).toBe('switchTab');

        storedLogin = true;
        expect(buildGuardContext(to, from, 'navigateTo').isLoggedIn).toBe(true);
      }
      finally {
        vi.doUnmock('@/src/store/index.uts');
      }
    });

    it('框架侧（interceptor.uts）不碰业务：不 import store、连注释里都不出现业务词', async () => {
      // 边界回归闸：把 store / 登录判断 / 业务名词挪回框架文件，行为测试全都照样绿 —— 只有这里能拦住
      const frameworkSrc = fs.readFileSync(
        path.resolve(__dirname, '../../../src/router/interceptor/interceptor.uts'),
        'utf-8'
      );

      expect(frameworkSrc.includes('@/src/store')).toBe(false);
      expect(frameworkSrc.includes('hasValidLogin')).toBe(false);
      // 框架只认 guard/index.uts 的一个中立入口：既不该探进规则文件，也不该在字面上提到这条规则
      expect(frameworkSrc.includes('guardLogin')).toBe(false);
      expect(frameworkSrc.includes('buildGuardContext')).toBe(false);
      expect(frameworkSrc.includes('登录')).toBe(false);
      expect(frameworkSrc.includes('runRouterGuard')).toBe(true);

      // 业务缝反向确认：取登录态这件事确实落在业务目录里（装配那一步）
      const businessSrc = fs.readFileSync(
        path.resolve(__dirname, '../../../src/router/guard/guardLogin.uts'),
        'utf-8'
      );
      expect(businessSrc.includes('@/src/store')).toBe(true);
    });
  });

  describe('框架唯一入口 runRouterGuard（装配 + 跑链收口）', () => {
    it('一个符号吃下「导航事实」吐出「裁决」：说明装配确实喂进了规则链', async () => {
      vi.resetModules();
      vi.doUnmock('@/src/router/config/config.uts');
      vi.doMock('@/src/store/index.uts', () => ({
        useTokenStore: () => ({ hasValidLogin: () => false })
      }));
      try {
        const { runRouterGuard } = await import('@/src/router/guard/index.uts');
        const to = {
          path: EXCLUDE_PAGE,
          query: new Map<string, string>(),
          fullPath: EXCLUDE_PAGE
        };
        const from = {
          path: '/src/pages/index/index',
          query: new Map<string, string>(),
          fullPath: '/src/pages/index/index'
        };

        // 默认黑名单策略 + 未登录 + 名单内页面 → 拦下并改跳登录页
        const decision = runRouterGuard(to, from, 'navigateTo');

        expect(decision.pass).toBe(false);
        expect(decision.redirect).toBe(`${LOGIN_PAGE}?redirect=${encodeURIComponent(EXCLUDE_PAGE)}`);
      }
      finally {
        vi.doUnmock('@/src/store/index.uts');
      }
    });
  });
});
