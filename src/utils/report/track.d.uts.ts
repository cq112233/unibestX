/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./track.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./track.uts` 解析到同目录的
 * `track.d.uts.ts`，因此本文件必须与 `track.uts` **同目录同名**，不能挪走。
 *
 * 修改 `track.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
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
