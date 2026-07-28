import webview from "@ohos.web.webview";
import { ComponentBaseOptions } from '../Node';
interface Detail {
}
interface Event {
    detail: Detail;
}
interface PostMessageToServiceEventDetailArgsDataOptions {
    timestamp: number;
}
interface PostMessageToServiceEventDetailArgsData {
    options: PostMessageToServiceEventDetailArgsDataOptions;
    name: string;
    arg: ESObject;
}
interface PostMessageToServiceEventDetailArgs {
    data: PostMessageToServiceEventDetailArgsData;
    webviewIds: string[];
}
interface PostMessageToServiceEventDetail {
    type: string;
    args: PostMessageToServiceEventDetailArgs;
}
interface PostMessageToServiceEvent extends Event {
    detail: PostMessageToServiceEventDetail;
}
interface TitleUpdateEventDetail {
    title?: string;
}
interface TitleUpdateEvent extends Event {
    detail: TitleUpdateEventDetail;
}
interface LoadEventDetail {
    src: string;
    /**
     * @deprecated
     */
    url: string;
}
interface LoadEvent extends Event {
    detail: LoadEventDetail;
}
interface MessageEventDetail {
    data: Array<ESObject>;
}
interface MessageEvent extends Event {
    detail: MessageEventDetail;
}
interface LoadingEventDetail {
    src: string;
    /**
     * @deprecated
     */
    url: string;
}
interface LoadingEvent extends Event {
    detail: LoadingEventDetail;
}
interface DownloadEventDetail {
    /**
     * 下载链接
     */
    url: string;
    /**
     * 用户代理
     */
    userAgent: string;
    /**
     * 指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地
     */
    contentDisposition: string;
    /**
     * 媒体类型
     */
    mimetype: string;
    /**
     * 文件大小
     */
    contentLength: number;
}
interface DownloadEvent extends Event {
    detail: DownloadEventDetail;
}
interface ErrorEventDetail {
    errSubject: string;
    /**
     * 统一错误码
     * 100001 ssl error
     * 100002 page error
     * 100003 http error
     */
    errCode: 100001 | 100002 | 100003;
    /**
     * 统一错误描述信息
     */
    errMsg: string;
    /**
     * 加载错误的网页链接，非完整链接，仅包含scheme://authority部分
     */
    url: string;
    /**
     * 加载错误的网页链接，完整链接
     */
    fullUrl: string;
    /**
     * 加载错误的网页链接，完整链接
     */
    src: string;
}
interface ErrorEvent extends Event {
    detail: ErrorEventDetail;
}
export interface WebViewOptions extends ComponentBaseOptions {
    src?: string;
    onTitleUpdate?: (event: TitleUpdateEvent) => void;
    onPostMessageToService?: (event: PostMessageToServiceEvent) => void;
    onContentHeightChange?: (contentHeight: number) => void;
    onControllerAttached?: () => void;
    onPageEnd?: () => void;
    controller: webview.WebviewController;
    delegate: webview.WebDownloadDelegate;
}
@Component
export declare struct WebView {
    @Prop
    src: string;
    @Prop
    bounces: boolean;
    @State
    horizontalScrollBarAccess?: boolean;
    @State
    verticalScrollBarAccess?: boolean;
    private needSetSrc;
    private isAttached;
    delegate: webview.WebDownloadDelegate;
    controller: webview.WebviewController;
    attributeUpdater?: object;
    onAboutToAppear?: (instance: WebView) => void;
    onMessage?: (event: MessageEvent) => void;
    onTitleUpdate?: (event: TitleUpdateEvent) => void;
    onPostMessageToService?: (event: PostMessageToServiceEvent) => void;
    onContentHeightChange?: (contentHeight: number) => void;
    onLoad?: (event: LoadEvent) => void;
    onLoading?: (event: LoadingEvent) => void;
    onDownload?: (event: DownloadEvent) => void;
    onError?: (event: ErrorEvent) => void;
    handleAreaChange?: (oldValue: Area, newValue: Area) => void;
    handleScroll?: (event: OnScrollEvent) => void;
    onControllerAttached?: () => void;
    onPageEnd?: () => void;
    build(): void;
    aboutToAppear(): void;
    aboutToDisappear(): void;
    setSrc(): void;
    setHorizontalScrollBarAccess(value: boolean): void;
    setVerticalScrollBarAccess(value: boolean): void;
    private refresh;
}
export {};
