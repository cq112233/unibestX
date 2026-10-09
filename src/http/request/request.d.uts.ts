/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./request.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./request.uts` 解析到同目录的
 * `request.d.uts.ts`，因此本文件必须与 `request.uts` **同目录同名**，不能挪走。
 *
 * 修改 `request.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export { ContentTypeEnum, ResultEnum, ShowMessage } from './internal/enum.uts';

export { abortAllHttp, abortHttp } from './internal/lifecycle.uts';

export { clearCache } from './internal/lifecycle.uts';

/**
 * 通用响应格式（兼容 message 与 msg 字段）
 */
export type IResponse<T> = {
  code: number;
  data: T;
  message: string;
  msg?: string;
};

export type ApiDomainConfig = {
  DEFAULT: string;
  SECONDARY: string;
};

export declare const API_DOMAINS: ApiDomainConfig;

export declare class HttpClient {
  request<T>(config: LimeRequestConfig): Promise<T>;

  private execute<T>(config: LimeRequestConfig, fingerprint: string, cacheTtl: number): Promise<T>;

  private handleFailure<T>(err: any, config: LimeRequestConfig, requestKey: string, fingerprint: string): Promise<T>;

  private handleUnauthorizedOnce(): void;

  private cacheIfNeeded<T>(fingerprint: string, cacheTtl: number, data: T): void;

  private send<T>(config: LimeRequestConfig): Promise<T>;

  get<T>(url: string, config: LimeRequestConfig | null = null): Promise<T>;

  post<T>(url: string, data: any | null = null, config: LimeRequestConfig | null = null): Promise<T>;

  put<T>(url: string, data: any | null = null, config: LimeRequestConfig | null = null): Promise<T>;

  delete<T>(url: string, data: any | null = null, config: LimeRequestConfig | null = null): Promise<T>;

  upload<T>(url: string, config: LimeRequestConfig | null = null): Promise<T>;
}

export declare const http: HttpClient;

export default http;
