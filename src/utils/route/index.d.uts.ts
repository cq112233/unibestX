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
 * import { cleanPath, getCurrentPath } from '@/src/utils/route/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { route } from '@/src/utils/route/index.uts';
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
