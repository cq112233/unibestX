/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./error.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./error.uts` 解析到同目录的
 * `error.d.uts.ts`，因此本文件必须与 `error.uts` **同目录同名**，不能挪走。
 *
 * 修改 `error.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/** 错误分类：离线 / 超时 / HTTP / 业务 / 未知 */
export type AppErrorKind = 'offline' | 'timeout' | 'http' | 'business' | 'unknown';

/** 归一化后的错误信息 */
export type AppErrorInfo = {
  kind: AppErrorKind;
  message: string;
  code: number;
};

/** 当前是否判定为离线（基于最近一次网络状态查询的缓存） */
export declare function isOffline(): boolean;

/**
 * 将任意失败信息归一成可读文案
 * @param rawMessage uni.request fail / 业务 message
 * @param code 业务码；网络失败常用 -1
 */
export declare function resolveErrorMessage(rawMessage: string, code: number = -1): AppErrorInfo;

/** 列表 / 页面失败时的默认提示 */
export declare function defaultFailMessage(rawMessage: string = ''): string;
