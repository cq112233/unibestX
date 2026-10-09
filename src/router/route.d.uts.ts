/**
 * `route.uts` 的类型声明（供 IDE / TS 语言服务使用）
 */
export declare function ensureLeadingSlash(path: string): string;
export declare function removeLeadingSlash(path: string): string;
export declare function cleanPath(path: string): string;
export declare function isSamePath(path1: string, path2: string): boolean;
export declare function getCurrentRoute(): string;
export declare function getCurrentPath(): string;
export declare function getQueryString(url: string): string;
export declare function getPageStackLength(): number;

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

export declare const route: RouteUtils;
export declare const routeUtils: RouteUtils;
export default route;
