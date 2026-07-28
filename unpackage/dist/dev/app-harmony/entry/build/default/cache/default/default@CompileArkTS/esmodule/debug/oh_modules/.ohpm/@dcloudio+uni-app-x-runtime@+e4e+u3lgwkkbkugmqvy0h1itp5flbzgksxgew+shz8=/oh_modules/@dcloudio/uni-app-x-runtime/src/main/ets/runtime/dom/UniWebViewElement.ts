import type { UniWebViewElement as IUniWebViewElement, UniWebViewElementLoadDataOptions } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { WebView } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/WebView&1.0.0";
import type { WebViewOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/WebView&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import webview from "@ohos:web.webview";
import { UniWebViewLoadEvent, UniWebViewMessageEvent, UniWebViewLoadingEvent, UniWebViewDownloadEvent, UniWebViewErrorEvent, UniWebViewContentHeightChangeEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniWebViewEvent/index&1.0.0";
import { createDownloadDelegate } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import buffer from "@ohos:buffer";
import util from "@ohos:util";
const BASE64_ENCODING = 'base64';
export function WebViewBuilder(options: WebViewOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new WebView(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniWebViewElement.ets", line: 24, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "WebView" });
    }
}
class WebViewFrameNode extends UniFrameNode {
    componentInstance!: WebView;
}
export class UniWebViewElementImpl extends UniElementImpl<WebViewFrameNode> implements IUniWebViewElement {
    private options!: WebViewOptions;
    private controller!: webview.WebviewController;
    private controllerAttachedInvokers: Array<() => void> = [];
    private isControllerAttached: boolean = false;
    private isPageEnd: boolean = false;
    private lastPageHeight: number = 0;
    protected widthByAreaChange: number = 0;
    protected heightByAreaChange: number = 0;
    protected curOffsetY: number = 0;
    static override get defaultStyle() {
        const baseDefaultStyle = super.defaultStyle as Map<string, [
            string
        ] | [
            string,
            boolean
        ]>;
        const defaultStyle = new Map(baseDefaultStyle);
        defaultStyle.set('width', ['100%', true]);
        defaultStyle.set('height', ['100%', true]);
        return defaultStyle;
    }
    protected override createFrameNode(): WebViewFrameNode {
        const controller = this.controller = new webview.WebviewController();
        this.options = {
            delegate: createDownloadDelegate(),
            controller,
            onContentHeightChange: (contentHeight) => {
                this.lastPageHeight = contentHeight;
                this.dispatchEvent(new UniWebViewContentHeightChangeEvent({
                    height: this.lastPageHeight
                }));
            },
            onControllerAttached: () => {
                if (!this.isControllerAttached) {
                    this.isControllerAttached = true;
                    this.controllerAttachedInvokers.forEach(cb => cb());
                    this.controllerAttachedInvokers = [];
                }
            },
            onPageEnd: () => {
                if (!this.isPageEnd) {
                    this.isPageEnd = true;
                }
            },
            onPostMessageToService: (event) => {
                const detail = event.detail;
                const name = detail.args.data.name;
                const arg: any = detail.args.data.arg;
                switch (name) {
                    case 'navigateTo':
                        globalThis.uni.navigateTo({
                            url: encodeURI(arg.url)
                        });
                        break;
                    case 'navigateBack':
                        const delta = parseInt(arg.delta);
                        globalThis.uni.navigateBack({
                            delta: !isNaN(delta) ? delta : 1
                        });
                        break;
                    case 'switchTab':
                        globalThis.uni.switchTab({
                            url: encodeURI(arg.url)
                        });
                        break;
                    case 'reLaunch':
                        globalThis.uni.reLaunch({
                            url: encodeURI(arg.url)
                        });
                        break;
                    case 'redirectTo':
                        globalThis.uni.redirectTo({
                            url: encodeURI(arg.url)
                        });
                        break;
                }
            }
        };
        const web = createUniFrameNode<WebViewFrameNode, WebViewOptions>(this.app.context!, WebViewFrameNode, wrapBuilder(WebViewBuilder), this.options);
        web.componentInstance.handleAreaChange = (_: Area, newValue: Area) => {
            this.widthByAreaChange = newValue.width as number;
            this.heightByAreaChange = newValue.height as number;
        };
        web.componentInstance.handleScroll = (event) => {
            this.curOffsetY = event.yOffset;
        };
        return web;
    }
    override updateNativeNodeStyle(key: string, value: Object): void {
        switch (key) {
            default:
                super.updateNativeNodeStyle(key, value);
        }
    }
    override updateNativeAttribute(key: string, value: any) {
        switch (key) {
            case 'src':
                this.frameNode.componentInstance.src = value as string;
                break;
            case 'updateTitle':
                if (typeof value === 'boolean') {
                    this.frameNode.componentInstance.onTitleUpdate = value ? (event) => {
                        const detail = event.detail;
                        this.page.navBarFrameNode.componentInstance.titleText = detail.title;
                    } : undefined;
                }
                break;
            case 'horizontalScrollBarAccess':
                if (typeof value === 'boolean') {
                    this.frameNode.componentInstance.setHorizontalScrollBarAccess(value);
                }
                break;
            case 'verticalScrollBarAccess':
                if (typeof value === 'boolean') {
                    this.frameNode.componentInstance.setVerticalScrollBarAccess(value);
                }
                break;
            case 'bounces':
                if (typeof value === 'boolean') {
                    this.frameNode.componentInstance.bounces = value;
                }
        }
    }
    protected override initNativeEvent(type: string): void {
        switch (type) {
            case 'load': {
                this.frameNode.componentInstance.onLoad = (event) => {
                    this.dispatchEvent(new UniWebViewLoadEvent('load', event.detail));
                };
                break;
            }
            case 'message': {
                this.frameNode.componentInstance.onMessage = (event) => {
                    this.dispatchEvent(new UniWebViewMessageEvent('message', event.detail));
                };
                break;
            }
            case 'loading': {
                this.frameNode.componentInstance.onLoading = (event) => {
                    this.dispatchEvent(new UniWebViewLoadingEvent('loading', event.detail));
                };
                break;
            }
            case 'download': {
                this.frameNode.componentInstance.onDownload = (event) => {
                    this.dispatchEvent(new UniWebViewDownloadEvent('download', event.detail));
                };
                break;
            }
            case 'error': {
                this.frameNode.componentInstance.onError = (event) => {
                    this.dispatchEvent(new UniWebViewErrorEvent('error', event.detail));
                };
                break;
            }
            default:
                super.initNativeEvent(type);
                break;
        }
    }
    protected override deleteNativeEvent(type: string, res: void | Object): boolean {
        switch (type) {
            case 'load': {
                this.frameNode.componentInstance.onLoad = undefined;
                return true;
            }
            case 'message': {
                this.frameNode.componentInstance.onMessage = undefined;
                return true;
            }
            case 'loading': {
                this.frameNode.componentInstance.onLoading = undefined;
                return true;
            }
            case 'download': {
                this.frameNode.componentInstance.onDownload = undefined;
                return true;
            }
            case 'error': {
                this.frameNode.componentInstance.onError = undefined;
                return true;
            }
            default:
                return super.deleteNativeEvent(type, res);
        }
    }
    override getHarmonyController<T extends webview.WebviewController>(): T | null {
        return this.controller as T;
    }
    private invokeController(methodName: string, ...args: any[]): any {
        if (this.isControllerAttached) {
            return this.controller[methodName](...args);
        }
        else {
            this.controllerAttachedInvokers.push(() => {
                this.controller[methodName](...args);
            });
        }
    }
    back(): void {
        this.invokeController('backward');
    }
    forward(): void {
        this.invokeController('forward');
    }
    reload(): void {
        this.invokeController('refresh');
    }
    stop(): void {
        this.invokeController('stop');
    }
    evalJS(js: string): void {
        this.invokeController('runJavaScript', js);
    }
    getContentHeight(): number {
        const pageHeight = this.controller.getPageHeight();
        if (this.lastPageHeight === 0 && this.lastPageHeight !== pageHeight) {
            return pageHeight;
        }
        return this.lastPageHeight;
    }
    canBack(): boolean {
        return this.controller.accessBackward();
    }
    canForward(): boolean {
        return this.controller.accessForward();
    }
    loadData(options: UniWebViewElementLoadDataOptions): void {
        /**
         * @tutorial https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-webview#loaddata
         *
         * 若加载本地图片，可以给baseUrl或historyUrl任一参数赋值空格，详情请参考示例代码。
         * 加载本地图片场景，baseUrl和historyUrl不能同时为空，否则图片无法成功加载。
         * 若html中的富文本中带有注入#等特殊字符，建议将baseUrl和historyUrl两个参数的值设置为"空格"。
         * data数据必须使用base64编码或将内容中的任何#字符编码为%23。否则#将被视为内容的结尾而剩余的文本将被用作文档片段标识符。
         *
         * 用户不传递 encoding 且 baseURL 为空时，则默认对 data 进行 base64 编码后再传给底层，以兼容用户直接传入 html 中有特殊字符鸿蒙 Web 显示异常 https://issues.dcloud.net.cn/pages/issues/detail?id=28962
         *    如果 encoding=base64 且 baseURL 不为空会将 base64 内容原样显示
         */
        let data = options.data;
        let encoding = options?.encoding;
        const baseURL = options?.baseURL ?? '';
        if (encoding == null && baseURL.length === 0) {
            try {
                const htmlBytes = new util.TextEncoder().encodeInto(data);
                const byteOffset = htmlBytes.byteOffset;
                const byteLength = htmlBytes.byteLength;
                const htmlBuffer = byteOffset == 0 && byteLength == htmlBytes.buffer.byteLength
                    ? htmlBytes.buffer
                    : htmlBytes.buffer.slice(byteOffset, byteOffset + byteLength);
                data = buffer.from(htmlBuffer).toString(BASE64_ENCODING);
                encoding = BASE64_ENCODING;
            }
            catch (error) {
                console.error('[WebView loadData] Failed to encode data to base64:', error);
            }
        }
        if (encoding !== BASE64_ENCODING) {
            data = data.replace(/#/g, '%23');
        }
        this.invokeController('loadData', data, options.mimeType ?? "text/html", encoding ?? "UTF-8", baseURL ?? '');
    }
    override dispose(): void {
        this.options.delegate.onBeforeDownload(undefined);
        this.options.delegate.onDownloadUpdated(undefined);
        this.options.delegate.onDownloadFinish(undefined);
        this.options.delegate.onDownloadFailed(undefined);
        super.dispose();
    }
}
