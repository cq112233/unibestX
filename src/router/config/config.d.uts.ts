/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./config.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./config.uts` 解析到同目录的
 * `config.d.uts.ts`，因此本文件必须与 `config.uts` **同目录同名**，不能挪走。
 *
 * 修改 `config.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
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
