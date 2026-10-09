/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./interceptor.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./interceptor.uts` 解析到同目录的
 * `interceptor.d.uts.ts`，因此本文件必须与 `interceptor.uts` **同目录同名**，不能挪走。
 *
 * 修改 `interceptor.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export type Interceptor = {
  invoke: (options: any) => boolean;
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (res: any) => void;
};

/**
 * 判断路径是否符合排除登录校验名单 (EXCLUDE_LOGIN_PATH_LIST)
 */
export declare function judgeIsExcludePath(path: string): boolean;

/**
 * 路由 API 独立拦截器
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
