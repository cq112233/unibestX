/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./stream.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./stream.uts` 解析到同目录的
 * `stream.d.uts.ts`，因此本文件必须与 `stream.uts` **同目录同名**，不能挪走。
 *
 * 修改 `stream.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
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
