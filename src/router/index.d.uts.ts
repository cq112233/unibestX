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
 * 跳转到登录页面，带防抖与节流保护，避免并发请求时重复打开多个登录页。
 * - 权威引用 config.uts 中的 LOGIN_PAGE 配置
 * - 使用 getCurrentPath() 精准判断当前页面，避免重复打开自身
 * - 默认 1000ms 节流窗口
 *
 * @param options 可选配置项（mode: 'navigateTo' | 'reLaunch', queryString: string）
 */
export declare function toLoginPage(options: UTSJSONObject | null = null): void;

export default toLoginPage;
