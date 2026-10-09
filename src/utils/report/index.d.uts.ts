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
export type ErrorReportPayload = {
  message: string;
  stack: string;
  page: string;
  time: number;
};

/** 配置上报地址（空则只打本地日志） */
export declare function setErrorReportUrl(url: string): void;

/** 当前错误上报地址 */
export declare function getErrorReportUrl(): string;

/**
 * 抹掉文本中的敏感信息。
 *
 * 覆盖两种常见形态：JSON 里的 "key":"value"，以及 key=value 形式的串。
 */
export declare function maskSensitive(text: string): string;

/**
 * 业务覆盖此 stub 实现真实上报（保持签名，勿改为传函数引用注册）。
 * 默认只在已配置 reportUrl 且生产环境时提示，不会误打到未知域名。
 */
export declare function onErrorReportStub(payload: ErrorReportPayload): void;

/**
 * 记录并尝试上报一个错误。
 * @param err 错误对象；可为 Error / 字符串 / 任意对象
 * @param extraMessage 附加说明（如「自动检查更新失败」）
 */
export declare function reportError(err: any | null, extraMessage: string = ''): void;

/** 仅上报文案（无 Error 对象） */
export declare function reportErrorMessage(message: string): void;

export type TrackPayload = {
  event: string;
  propsJson: string;
  page: string;
  time: number;
};

/** 配置埋点上报地址（空则 stub 不真正发送） */
export declare function setTrackEndpoint(url: string): void;

/** 当前埋点上报地址 */
export declare function getTrackEndpoint(): string;

/**
 * 业务覆盖此 stub 实现真实上报。
 *
 * 默认实现只在本项目已配置上报地址、且处于生产环境时才提示，
 * 避免开发期误发数据。接入真实 SDK 时替换本函数体即可，签名保持不变。
 */
export declare function onTrackStub(payload: TrackPayload): void;

/**
 * 上报一个埋点事件
 * @param event 事件名
 * @param propsJson 属性 JSON 字符串（UTS 友好，避免传对象）
 */
export declare function track(event: string, propsJson: string = ''): void;

/** 页面曝光：page 为空则取当前路由 */
export declare function trackPageView(page: string = ''): void;

/** 点击埋点 */
export declare function trackClick(name: string): void;
