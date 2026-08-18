import { string, UTSObject, ComponentPublicInstance, UniNativeViewEvent, UniNativeViewElement, UniElement, UniViewElementImpl } from "@dcloudio/uni-app-framework";
import webview from "@ohos.web.webview";
declare class WebViewProgressStyles extends UTSObject {
    color: string.ColorString;
}
declare class WebViewStyles extends UTSObject {
    progress: WebViewProgressStyles | boolean;
}
declare class UniWebviewContextLoadDataOptions extends UTSObject {
    data: string;
    baseURL: string | null;
    mimeType: string | null;
    encoding: string | null;
}
type UniWebViewContextLoadDataOptions = UniWebviewContextLoadDataOptions;
declare class UniWebViewElementLoadDataOptions extends UTSObject {
    data: string;
    baseURL: string | null;
    mimeType: string | null;
    encoding: string | null;
}
interface WebviewContext {
    forward(): void;
    back(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    loadData(options: UniWebViewContextLoadDataOptions): void;
}
interface WebViewContext extends WebviewContext {
}
type CreateWebviewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebviewContext | null;
type CreateWebViewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebViewContext | null;
declare class BindWebViewController {
    private controllerAttachedInvokers;
    isControllerAttached: boolean;
    isPageEnd: boolean;
    controller: webview.WebviewController;
    constructor();
    private invokeController;
    onControllerAttached(): void;
    onPageEnd(): void;
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    canBack(): boolean;
    canForward(): boolean;
    loadData(options: UniWebViewElementLoadDataOptions): void;
}
interface BuilderWebViewEvents {
    onMessage?: (customEvent: UniNativeViewEvent) => void;
    onLoad?: (customEvent: UniNativeViewEvent) => void;
    onLoading?: (customEvent: UniNativeViewEvent) => void;
    onDownload?: (customEvent: UniNativeViewEvent) => void;
    onContentheightchange?: (customEvent: UniNativeViewEvent) => void;
    onError?: (customEvent: UniNativeViewEvent) => void;
}
declare class NativeWebView {
    __v_skip: boolean;
    private webviewElement;
    private element;
    private params;
    private events;
    private webComponentContent;
    private lastPageHeight;
    id: string;
    bindWebViewController: BindWebViewController;
    constructor(element: UniNativeViewElement, events?: BuilderWebViewEvents);
    private dispatchEvent;
    private initParams;
    setSrc(src?: string | null): void;
    setWebViewStyles(webViewStyles?: WebViewStyles | null): void;
    setHorizontalScrollBarAccess(access: boolean): void;
    setVerticalScrollBarAccess(access: boolean): void;
    setBounces(bounces: boolean): void;
    setDisableUserSelectMenu(disableUserSelectMenu: boolean): void;
    private updateParams;
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    loadData(options: UniWebViewElementLoadDataOptions): void;
    destroy(): void;
}
interface IUniWebViewElement extends UniElement {
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    loadData(options: UniWebViewElementLoadDataOptions): void;
}
interface TakeSnapshotSuccess {
    tempFilePath: string;
}
interface TakeSnapshotFail {
    errMsg: string;
}
interface TakeSnapshotOptions {
    type?: string;
    format?: string;
    success?: (res: TakeSnapshotSuccess) => void;
    fail?: (err: TakeSnapshotFail) => void;
    complete?: (res: ESObject) => void;
}
declare class UniWebViewElement extends UniViewElementImpl implements IUniWebViewElement {
    tagName: string;
    nodeName: string;
    private uiContext;
    private nativeWebview;
    private nativeWebviewAttachedInvokers;
    private isNativeWebviewAttached;
    private lastScrollHeight;
    widthByAreaChange: number;
    heightByAreaChange: number;
    curOffsetY: number;
    getHarmonyController(): webview.WebviewController | null;
    setNativeWebView(nativeWebview: NativeWebView): void;
    private invokeNativeWebview;
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    loadData(options: UniWebViewElementLoadDataOptions): void;
    private awaitOnIdle;
    private getUIContext;
    private webViewScrollSnapshot;
    private webViewSnapCurrentScreen;
    private pixelMapToImgPath;
    takeSnapshot(options: TakeSnapshotOptions): void;
    dispose(): void;
}
declare const createWebViewContext: CreateWebViewContext;
declare const createWebviewContext: CreateWebviewContext;
export { CreateWebViewContext as CreateWebViewContext, CreateWebviewContext as CreateWebviewContext, UniWebviewContextLoadDataOptions as UniWebviewContextLoadDataOptions, UniWebViewContextLoadDataOptions as UniWebViewContextLoadDataOptions, UniWebViewElementLoadDataOptions as UniWebViewElementLoadDataOptions, WebViewProgressStyles as WebViewProgressStyles, WebViewStyles as WebViewStyles, WebViewContext as WebViewContext, WebviewContext as WebviewContext };
export { NativeWebView as NativeWebView };
export { UniWebViewElement as UniWebViewElement };
export { createWebViewContext as createWebViewContext };
export { createWebviewContext as createWebviewContext };
