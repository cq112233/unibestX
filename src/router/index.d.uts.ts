/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 登录拦截策略映射
 */
export declare const LOGIN_STRATEGY_MAP: any;

/**
 * 选中的全局登录策略（此处默认采用黑名单策略）
 */
export declare const LOGIN_STRATEGY: any;

/**
 * 是否启用强制登录策略（白名单策略）
 */
export declare const isNeedLoginMode: any;

/**
 * 登录页面绝对路由路径
 */
export declare const LOGIN_PAGE: string;

/**
 * 注册页面绝对路由路径
 */
export declare const REGISTER_PAGE: string;

/**
 * 登录相关基础页面路径列表
 */
export declare const LOGIN_PAGE_LIST: any;

/**
 * 排除在外的页面路径列表：
 * - 白名单模式下：此列表中的页面可以直接访问，无须登录（如首页、关于页）
 * - 黑名单模式下：此列表中的页面在未登录时会被强制拦截，并重定向至登录页
 */
export declare const EXCLUDE_LOGIN_PATH_LIST: string[];

export type Interceptor = {
  invoke: (options: any) => boolean;
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (res: any) => void;
};

/**
 * URL 解析结构体
 */
export type UrlObj = {
  /** 页面路由路径（不含参数） */
  path: string;
  /** 路由参数键值对 Map */
  query: Map<string, string>;
};

/**
 * 解析 URL 字符串为路径与参数键值对
 * 例如: "/src/pages/login?redirect=index" -> { path: "/src/pages/login", query: { redirect: "index" } }
 */
export declare function parseUrlToObj(url: string): UrlObj;

/**
 * 判断路径是否符合排除登录校验名单 (EXCLUDE_LOGIN_PATH_LIST)
 */
export declare function judgeIsExcludePath(path: string): boolean;

/**
 * 各路由跳转 API 独立拦截器，保证在 App (Android/Kotlin) 原生端能够正确将 options 强转为对应的 Options 类型
 */
export declare const navigateToInterceptor: Interceptor;

export declare const redirectToInterceptor: Interceptor;

export declare const reLaunchInterceptor: Interceptor;

export declare const switchTabInterceptor: Interceptor;

/**
 * 地图选点调用拦截器（默认直接放行）
 */
export declare const chooseLocationInterceptor: Interceptor;

/**
 * 全局路由拦截安装器
 */
export declare function installRouteInterceptor(): void;

/**
 * 校验并处理直接进入（如 H5 直链、小程序分享链接等）的路由场景，补充权限校验
 */
export declare function checkDirectEntry(options: UTSJSONObject | null): void;

/**
 * 保证路径以前导斜杠 "/" 开头
 * 例如："pages/index" -> "/pages/index"
 *
 * @param path 原始路径
 * @returns 以前导斜杠开头的路径
 */
export declare function ensureLeadingSlash(path: string): string;

/**
 * 去除路径前导斜杠 "/"
 * 例如："/pages/index" -> "pages/index"
 *
 * @param path 原始路径
 * @returns 去除前导斜杠后的路径
 */
export declare function removeLeadingSlash(path: string): string;

/**
 * 清洗并规范化页面路径（去除 ? 及后面的查询参数，统一保证前导 /）
 * 例如：
 * - "src/pages/index/index?foo=1" -> "/src/pages/index/index"
 * - "/pages/index/index?tab=2" -> "/pages/index/index"
 * - "pages/index/index" -> "/pages/index/index"
 *
 * @param path 原始路径或包含参数的 URL
 * @returns 规范化后的路径（以 / 开头，不含 query 参数）
 */
export declare function cleanPath(path: string): string;

/**
 * 比较两个页面路径是否指向同一页面
 * 自动去除 query 参数与前导斜杠，支持完整匹配与结尾路由匹配
 * 例如：
 * - "/pages/index/index" 与 "pages/index/index?foo=1" -> true
 * - "/src/pages/index/index" 与 "pages/index/index" -> true
 * - "pages/index/index" 与 "/pages/index/index" -> true
 *
 * @param path1 路径1
 * @param path2 路径2
 * @returns 是否指向同一页面
 */
export declare function isSamePath(path1: string, path2: string): boolean;

/**
 * 获取当前栈顶页面的原生 route 路径字符串（如 "pages/index/index"）
 * @returns 页面路由字符串，未获取到时返回空字符串 ""
 */
export declare function getCurrentRoute(): string;

/**
 * 获取当前栈顶页面的规范化路径（统一带前导 "/"，且去除 URL 参数）
 * 例如："/pages/index/index"
 * @returns 规范化路径字符串，未获取到时返回空字符串 ""
 */
export declare function getCurrentPath(): string;

/**
 * 获取 URL 中的查询参数字符串（去除 ?）
 * 例如："/pages/login?from=home&tab=1" -> "from=home&tab=1"
 *
 * @param url 完整 URL 字符串
 * @returns 查询参数字符串，无参数时返回空字符串 ""
 */
export declare function getQueryString(url: string): string;

/**
 * 获取当前页面栈的深度（当前打开的页面数）
 * @returns 页面栈数量
 */
export declare function getPageStackLength(): number;

/**
 * 路由工具聚合类
 *
 * 集中呈现所有路由与路径处理方法，一目了然；同时支持面向对象式 `route.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { cleanPath, getCurrentPath } from '@/src/router/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { route } from '@/src/router/index.uts';
 * console.log(route.getCurrentPath());
 * ```
 */
export declare class RouteUtils {
  cleanPath(path: string): string;

  ensureLeadingSlash(path: string): string;

  getCurrentPath(): string;

  getCurrentRoute(): string;

  getPageStackLength(): number;

  getQueryString(url: string): string;

  isSamePath(path1: string, path2: string): boolean;

  removeLeadingSlash(path: string): string;
}

/** 路由工具全局单例 */
export declare const route: RouteUtils;

/** 别名导出 */
export declare const routeUtils: RouteUtils;

export default route;

/**
 * 跳转到登录页面，带防抖与节流保护，避免并发请求时重复打开多个登录页。
 * - 权威引用 config.uts 中的 LOGIN_PAGE 配置
 * - 使用 getCurrentPath() 精准判断当前页面，避免重复打开自身
 * - 默认 1000ms 节流窗口
 *
 * @param options 可选配置项（mode: 'navigateTo' | 'reLaunch', queryString: string）
 */
export declare function toLoginPage(options: UTSJSONObject | null = null): void;

export default toLoginPage;
