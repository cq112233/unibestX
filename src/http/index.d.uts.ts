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

export type UploadFileOptions = {
  url?: string;
  filePath: string;
  name?: string;
  header?: UTSJSONObject;
  formData?: UTSJSONObject;
  ignoreAuth?: boolean;
  onProgress?: (progress: number) => void;
};

/**
 * 默认 OSS 上传基础域名与接口路径（支持直接在 .env 中配置 VITE_UPLOAD_BASEURL 与 VITE_UPLOAD_PATH）
 */
export declare const DEFAULT_OSS_BASE_URL: string;

export declare const DEFAULT_OSS_UPLOAD_PATH: string;

export declare const DEFAULT_OSS_UPLOAD_URL: string;

/**
 * 使用 uni.uploadFile 统一封装的文件上传函数（App / 小程序 / H5 全端通用）
 * - 统一原生 uni.uploadFile 底层调用
 * - 支持传入完整 URL 或仅传入相对路径（如 /gateway/... 自动拼接 base URL）
 * - 自动携带 Token（可传 ignoreAuth: true 跳过）
 * - 支持 onProgress 上传进度回调
 * - 严格解析并校验返回值（兼容 code: 200 / "200" / success: true / 各种 url 结构）
 *
 * 使用示例：
 * uni.chooseImage({
 *   count: 1,
 *   success: (res) => {
 *     const filePath = res.tempFilePaths[0] as string;
 *     uploadOssFile(filePath)
 *       .then((url: string) => {
 *         console.log('上传成功 OSS 地址:', url);
 *       })
 *       .catch((err: Error | null) => {
 *         uni.showToast({ title: err?.message ?? '上传失败', icon: 'none' });
 *       });
 *   }
 * });
 */
export declare function uploadFile(options: UploadFileOptions): Promise<string>;

/**
 * 上传 OSS 文件快捷函数
 */
export declare function uploadOssFile(
  filePath: string,
  formData: UTSJSONObject | null = null,
  ignoreAuth: boolean = false
): Promise<string>;

/**
 * 文件上传工具聚合类
 *
 * 集中呈现文件上传相关方法，一目了然；同时支持面向对象式 `upload.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { uploadFile, uploadOssFile } from '@/src/http/upload/upload.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { upload } from '@/src/http/upload/upload.uts';
 * upload.uploadOssFile(filePath);
 * ```
 */
export declare class UploadUtils {
  uploadFile(options: UploadFileOptions): Promise<string>;

  uploadOssFile(
    filePath: string,
    formData: UTSJSONObject | null = null,
    ignoreAuth: boolean = false
  ): Promise<string>;
}

/** 上传工具全局单例 */
export declare const upload: UploadUtils;

/** 别名导出 */
export declare const uploadUtils: UploadUtils;

export default upload;
