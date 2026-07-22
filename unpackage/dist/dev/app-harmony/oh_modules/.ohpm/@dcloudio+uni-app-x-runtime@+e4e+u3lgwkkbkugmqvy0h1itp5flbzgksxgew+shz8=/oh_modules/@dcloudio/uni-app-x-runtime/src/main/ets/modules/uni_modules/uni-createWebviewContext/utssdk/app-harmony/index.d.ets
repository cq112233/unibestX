import { string, ComponentPublicInstance, UTSObject } from "@dcloudio/uni-app-framework";
type CreateWebviewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebViewContext | null;
type CreateWebViewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebViewContext | null;
declare class UniWebviewContextLoadDataOptions extends UTSObject {
    data: string;
    baseURL: string | null;
    mimeType: string | null;
    encoding: string | null;
}
interface WebViewContext {
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    loadData(options: UniWebviewContextLoadDataOptions): void;
}
declare const createWebViewContext: CreateWebViewContext;
declare const createWebviewContext: CreateWebviewContext;
export { CreateWebviewContext as CreateWebviewContext, UniWebviewContextLoadDataOptions as UniWebviewContextLoadDataOptions, WebViewContext as WebViewContext };
export { CreateWebViewContext as CreateWebViewContext };
export { createWebViewContext as createWebViewContext };
export { createWebviewContext as createWebviewContext };
