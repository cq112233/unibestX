import { UniWebViewElement as IUniWebViewElement, UniWebViewElementLoadDataOptions } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from './UniElement';
import { WebView, WebViewOptions } from '../components/WebView';
import { UniFrameNode } from '../Node';
import webview from "@ohos.web.webview";
@Builder
export declare function WebViewBuilder(options: WebViewOptions): void;
declare class WebViewFrameNode extends UniFrameNode {
    componentInstance: WebView;
}
export declare class UniWebViewElementImpl extends UniElementImpl<WebViewFrameNode> implements IUniWebViewElement {
    private options;
    private controller;
    private controllerAttachedInvokers;
    private isControllerAttached;
    private isPageEnd;
    private lastPageHeight;
    protected widthByAreaChange: number;
    protected heightByAreaChange: number;
    protected curOffsetY: number;
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    protected createFrameNode(): WebViewFrameNode;
    updateNativeNodeStyle(key: string, value: Object): void;
    updateNativeAttribute(key: string, value: ESObject): void;
    protected initNativeEvent(type: string): void;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    getHarmonyController<T extends webview.WebviewController>(): T | null;
    private invokeController;
    back(): void;
    forward(): void;
    reload(): void;
    stop(): void;
    evalJS(js: string): void;
    getContentHeight(): number;
    canBack(): boolean;
    canForward(): boolean;
    loadData(options: UniWebViewElementLoadDataOptions): void;
    dispose(): void;
}
export {};
