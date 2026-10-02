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
 * 获取当前应用名称（全端从 import.meta.env 读取）
 */
export declare function getAppTitle(): string;

/**
 * 获取当前应用版本号（优先从系统运行时获取，若为空从 VITE_APP_VERSION 或兜底 1.0.0）
 */
export declare function getAppVersion(): string;

/**
 * 获取接口 BaseURL 地址（全端从 import.meta.env 读取）
 */
export declare function getApiBaseUrl(): string;

/**
 * 获取备用接口 BaseURL 地址（全端从 import.meta.env 读取）
 */
export declare function getApiSecondaryUrl(): string;

/**
 * 获取 H5 是否开启反向代理（VITE_H5_USE_PROXY 开关：true 走 /api，false 直连）
 */
export declare function getH5UseProxy(): boolean;

/**
 * 获取默认主题主色调（全端从 import.meta.env 读取）
 */
export declare function getDefaultTheme(): string;

/**
 * 获取默认国际化语言（全端从 import.meta.env 读取，未配置时自动识别系统语言，最后兜底 zh-CN）
 */
export declare function getDefaultLocale(): string;

/**
 * 获取流式演示接口地址（VITE_STREAM_URL）
 *
 * 支持两种写法：
 * - 相对路径（如 /stream/chat）：自动拼接 getApiBaseUrl() 成为完整地址
 * - 完整域名（https://...）：直接使用
 *
 * 配置为空时返回空字符串，此时演示页会自动使用本地模拟流。
 */
export declare function getStreamUrl(): string;

/**
 * 获取 OSS 上传基础域名（VITE_UPLOAD_BASEURL）
 */
export declare function getOssBaseUrl(): string;

/**
 * 获取 OSS 上传接口路径（VITE_UPLOAD_PATH）
 */
export declare function getOssUploadPath(): string;

/**
 * 获取 OSS 上传完整接口地址
 */
export declare function getOssUploadUrl(): string;

/**
 * 获取环境变量中配置的 TabBar 策略模式（0: 无, 1: 原生, 2: 带原生自定义, 3: 纯自定义, 4: 单页保活）
 */
export declare function getTabBarMode(): string;

/**
 * 解析并获取当前环境变量中配置的 TabBar 策略模式数值（0:无, 1:原生, 2:带原生自定义, 3:纯自定义, 4:单页TabBar）
 */
export declare function getTabbarStrategyNum(): number;

/**
 * 判断当前是否为原生 TabBar 模式（VITE_TABBAR_MODE 为 1 或 NATIVE_TABBAR）
 */
export declare function isNativeTabBar(): boolean;

/**
 * 获取当前是否为 Vapor 渲染模式（使用 uni-app X 原生编译条件 VUE3-VAPOR 判定）
 */
export declare function isVaporMode(): boolean;

/**
 * 获取当前运行环境类型标识（'development' | 'test' | 'production'）
 */
export declare function getCurrentEnv(): string;

/**
 * 获取当前运行环境中文名称（'开发环境' | '测试环境' | '生产环境'）
 */
export declare function getCurrentEnvName(): string;

/**
 * 便捷判断：是否为开发环境
 */
export declare function isDev(): boolean;

/**
 * 便捷判断：是否为测试环境
 */
export declare function isTest(): boolean;

/**
 * 便捷判断：是否为生产环境
 */
export declare function isProd(): boolean;

/**
 * 获取当前编译目标平台（如 "H5"、"Android"、"iOS"、"微信小程序" 等）
 */
export declare function getCompilePlatform(): string;

/**
 * 获取当前编译运行模式（如 "Vapor 模式 (开发)" / "VDOM 模式 (生产)"）
 */
export declare function getCompileMode(): string;

/**
 * 环境变量与运行环境工具聚合类
 *
 * 集中呈现所有环境变量与运行模式获取方法，一目了然；同时支持面向对象式 `env.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { getApiBaseUrl, isDev } from '@/src/utils/env/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { env } from '@/src/utils/env/index.uts';
 * console.log(env.getApiBaseUrl());
 * ```
 */
export declare class EnvUtils {
  getAppTitle(): string;

  getAppVersion(): string;

  getApiBaseUrl(): string;

  getApiSecondaryUrl(): string;

  getH5UseProxy(): boolean;

  getDefaultTheme(): string;

  getDefaultLocale(): string;

  getStreamUrl(): string;

  getOssBaseUrl(): string;

  getOssUploadPath(): string;

  getOssUploadUrl(): string;

  getTabBarMode(): string;

  getTabbarStrategyNum(): number;

  isNativeTabBar(): boolean;

  isVaporMode(): boolean;

  getCurrentEnv(): string;

  getCurrentEnvName(): string;

  isDev(): boolean;

  isTest(): boolean;

  isProd(): boolean;

  getCompilePlatform(): string;

  getCompileMode(): string;
}

/** 环境变量与运行环境工具全局单例 */
export declare const env: EnvUtils;

/** 别名导出 */
export declare const envUtils: EnvUtils;

export default env;
