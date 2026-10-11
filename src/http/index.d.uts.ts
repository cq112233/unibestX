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

/**
 * 请求前置钩子函数类型（支持同步函数或返回 Promise 的 async 异步函数）
 */
export type BeforeRequestHook = (config: LimeRequestConfig) => any;

/**
 * 响应成功后置钩子函数类型（支持转换/解包数据，支持 async 异步函数）
 */
export type AfterResponseSuccessHook = (data: any, config: LimeRequestConfig) => any;

/**
 * 响应失败后置钩子函数类型（可执行统一错误提示等副作用，支持 async 异步函数）
 */
export type AfterResponseErrorHook = (err: any, config: LimeRequestConfig) => any;

/**
 * 请求完成拦截钩子函数类型（对齐 Alova onComplete，无论成功、失败或命中缓存均触发）
 */
export type AfterResponseCompleteHook = (config: LimeRequestConfig) => any;

/**
 * 复合响应拦截器配置对象（完全对齐 Alova responded: { onSuccess, onError, onComplete }）
 */
export type RespondedOptions = {
  onSuccess?: AfterResponseSuccessHook;
  onError?: AfterResponseErrorHook;
  onComplete?: AfterResponseCompleteHook;
};

/**
 * 兼容别名
 */
export type AfterResponseOptions = RespondedOptions;

/**
 * 令牌刷新函数类型
 */
export type RefreshTokenFn = () => Promise<boolean>;

/**
 * 未授权/登录过期处理器类型
 */
export type UnauthorizedFn = () => void;

/**
 * 请求适配器函数类型（接收基础配置，返回底层 Request 实例，对齐 Alova requestAdapter 规范）
 */
export type HttpRequestAdapter = (config: LimeRequestConfig) => Request;

/**
 * HttpClient 实例化配置选项
 */
export type HttpClientOptions = {
  baseURL: string;
  timeout?: number;
  header?: UTSJSONObject;
  dataType?: string;
  responseType?: string;
  sslVerify?: boolean;
  withCredentials?: boolean;
  /**
   * 请求适配器（对齐 Alova requestAdapter 规范，解耦底层网络驱动）
   */
  requestAdapter?: HttpRequestAdapter;
  /**
   * 底层 Request 实例（可选，支持外部直接传入已初始化的 client）
   */
  client?: Request;
  /**
   * 请求生命周期管理器（可选，支持自定义或共享生命周期）
   */
  lifecycle?: RequestLifecycle;
  beforeRequest?: BeforeRequestHook;
  afterResponse?: any;
  responded?: any;
  respondedOptions?: RespondedOptions;
  refreshToken?: RefreshTokenFn;
  onUnauthorized?: UnauthorizedFn;
};

/**
 * 401 哨兵：拦截器抛出它表示「应尝试刷新并重放」，由 HttpClient.request 捕获。
 */
export declare const REFRESHABLE_401: string;

/**
 * 从未知错误对象中安全提取错误文案。
 * 兼容 Error 实例、LimeRequestFail、UTSJSONObject、普通 JS 对象与字符串。
 */
export declare function extractErrorMessage(err: any): string;

/** 判断错误是否为拦截器抛出的「可刷新 401」哨兵 */
export declare function isRefreshable401(err: any): boolean;

/** 浅拷贝请求配置：重放时不能复用已被拦截器改写的对象，同时保留 getTask 等回调字段 */
export declare function cloneConfig(config: LimeRequestConfig): LimeRequestConfig;

/**
 * 把任意错误（包括 LimeRequestFail）安全地转成 Error，供抛出使用。
 */
export declare function toError(err: any): Error;

/**
 * 通用 HTTP 客户端控制器
 */
export declare class HttpClient {
  private client: Request;

  private lifecycle: RequestLifecycle;

  private beforeRequestHooks: Array<BeforeRequestHook>;

  private afterSuccessHooks: Array<AfterResponseSuccessHook>;

  private afterErrorHooks: Array<AfterResponseErrorHook>;

  private afterCompleteHooks: Array<AfterResponseCompleteHook>;

  private refreshTokenHandler: RefreshTokenFn | null;

  private unauthorizedHandler: UnauthorizedFn | null;

  constructor(options: HttpClientOptions | null = null);

  private setupInterceptors(): void;

  beforeRequest(hook: BeforeRequestHook): HttpClient;

  removeBeforeRequest(hook: BeforeRequestHook): void;

  clearBeforeRequest(): void;

  afterResponse(
    onSuccessOrOptions: any | null = null,
    onError: AfterResponseErrorHook | null = null,
    onComplete: AfterResponseCompleteHook | null = null
  ): HttpClient;

  responded(
    onSuccessOrOptions: any | null = null,
    onError: AfterResponseErrorHook | null = null,
    onComplete: AfterResponseCompleteHook | null = null
  ): HttpClient;

  removeAfterResponse(
    onSuccess: AfterResponseSuccessHook | null = null,
    onError: AfterResponseErrorHook | null = null,
    onComplete: AfterResponseCompleteHook | null = null
  ): void;

  clearAfterResponse(): void;

  private async applyBeforeRequest(config: LimeRequestConfig): Promise<LimeRequestConfig>;

  private async applyAfterSuccess<T>(data: T, config: LimeRequestConfig): Promise<T>;

  private async applyAfterError<T>(err: any, config: LimeRequestConfig): Promise<T>;

  private async applyAfterComplete(config: LimeRequestConfig): Promise<void>;

  abort(requestKey: string): void;

  abortAll(): void;

  clearCache(fingerprint: string = ''): void;

  getLifecycle(): RequestLifecycle;

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

export { ContentTypeEnum, ResultEnum, ShowMessage } from './internal/enum.uts';

export { defaultLifecycle, HttpLifecycle, RequestLifecycle } from './internal/lifecycle.uts';

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

/**
 * 默认请求适配器：基于 lime-request 实例化底层网络驱动客户端
 */
export declare function defaultRequestAdapter(config: LimeRequestConfig): Request;

/**
 * 业务默认请求前置拦截钩子：处理业务 Token 鉴权与注入
 */
export declare function defaultBusinessBeforeRequest(config: LimeRequestConfig): void;

/**
 * 业务默认响应成功钩子：状态码判定、业务 code 校验、Toast 提示、业务 401 标记与数据解包
 */
export declare function defaultBusinessAfterSuccess(data: any, config: LimeRequestConfig): any;

/**
 * 业务默认响应失败钩子：统一网络错误提示
 */
export declare function defaultBusinessAfterError(err: any, _config: LimeRequestConfig): void;

/**
 * 业务默认响应完成钩子：请求收尾处理（无论成功、失败或命中缓存均会执行）
 */
export declare function defaultBusinessAfterComplete(_config: LimeRequestConfig): void;

/**
 * 默认基础 HTTP 配置选项（集成业务 Token 注入、统一错误提示与无感刷新）
 */
export declare const DEFAULT_HTTP_OPTIONS: HttpClientOptions;

/**
 * 工厂函数：统一创建并生成 HttpClient 实例
 */
export declare function createHttpClient(options: HttpClientOptions | null = null): HttpClient;

/**
 * 全局默认 HTTP 客户端单例（使用 createHttpClient 工厂模式创建生成）
 */
export declare const http: HttpClient;

/**
 * 便捷函数：取消指定 requestKey 的在飞请求（委托给默认 http 实例）
 */
export declare function abortHttp(requestKey: string): void;

/**
 * 便捷函数：取消全部在飞请求（委托给默认 http 实例）
 */
export declare function abortAllHttp(): void;

/**
 * 便捷函数：清除缓存（委托给默认 http 实例）
 */
export declare function clearCache(fingerprint: string = ''): void;

/**
 * 便捷函数：文件上传（委托给默认 http 实例）
 */
export declare function uploadHttp(url: string, config: LimeRequestConfig | null = null): Promise<T>;

export default http;

/** 流式数据块 */
export type StreamChunk = {
  /** 本次新到达的文本片段 */
  text: string;
  /** 累计已接收的字符数 */
  receivedLength: number;
  /** 从发起请求到收到该块的耗时（毫秒） */
  elapsedMs: number;
};

/**
 * 增量 UTF-8 解码器
 *
 * 为什么需要它：UTS 内置的 TextDecoder.decode() 只有单参数签名（没有 Web 端的 `{ stream: true }`），
 * 若直接对每个 chunk 调用 decode()，被 chunk 边界切断的多字节字符（中文、emoji）会被替换成
 * U+FFFD「」。本类自持一个尾部字节缓冲，只解码完整的 UTF-8 字符序列，残缺尾部留给下一块拼接。
 */
export declare class Utf8StreamDecoder {
  private _pending: Array<number>;

  private _decoder: TextDecoder;

  decodeChunk(buffer: ArrayBuffer): string;

  reset(): void;

  private _findSafeEnd(bytes: Array<number>, total: number): number;
}

/**
 * 发起一个 chunked 流式 POST 请求，返回逐块吐出文本的 Observable。
 *
 * 订阅时立即发起请求；取消订阅（unsubscribe）会 abort 掉底层 RequestTask，
 * 流正常完成或出错时也会自动释放。
 *
 * @param url 完整请求地址
 * @param body 请求体（字符串，通常是 JSON.stringify 的结果）
 * @param header 请求头，不需要时传 null
 * @param timeout 超时时间（毫秒）
 */
export declare function requestStream(
  url: string,
  body: string,
  header: UTSJSONObject | null = null,
  timeout: number = 60000
): Observable<StreamChunk>;

/**
 * 本地模拟流：把一段完整文本按 chunkSize 切片、以 intervalMs 为间隔逐块吐出。
 *
 * 与 requestStream 返回完全相同的 Observable<StreamChunk> 类型，
 * 因此可作为「真实接口不可用」时的降级数据源（配合 catchError 使用）。
 *
 * @param text 要模拟输出的完整文本
 * @param chunkSize 每块字符数（默认 6）
 * @param intervalMs 每块间隔毫秒数（默认 90）
 */
export declare function simulateStream(
  text: string,
  chunkSize: number = 6,
  intervalMs: number = 90
): Observable<StreamChunk>;
