import { string, ComponentPublicInstance, UTSObject, UniWebViewElement, UniPageImpl, UTS, UniElement, defineSyncApi } from "@dcloudio/uni-app-framework";
type CreateWebviewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebViewContext | null;
type CreateWebViewContext = (webviewId: string.WebviewIdString, component?: ComponentPublicInstance | null) => WebViewContext | null;
class UniWebviewContextLoadDataOptions extends UTSObject {
    data!: string;
    baseURL: string | null = null;
    mimeType: string | null = null;
    encoding: string | null = null;
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
const getWebViewContext = (id: string, component: ComponentPublicInstance | null = null): WebViewContext | null =>{
    let webViewElement: UniWebViewElement | null | undefined = null;
    if (component == null) {
        const pages = globalThis.getCurrentPages() as UniPageImpl[];
        if (pages.length > 0) {
            const page = pages[pages.length - 1];
            if (!page) {
                UTS.console.error(`getCurrentPages is empty`);
                return null;
            }
            webViewElement = ((page.vm as ESObject).$el as UniElement)?.parentElement?.querySelector('#' + id) as UniWebViewElement;
            if (webViewElement == null) {
                const dialogPages = page.getDialogPages() as UniPageImpl[];
                if (dialogPages.length > 0) {
                    const topDialogPage = dialogPages[dialogPages.length - 1];
                    if (!topDialogPage) {
                        UTS.console.error(`getDialogPages is empty`);
                        return null;
                    }
                    webViewElement = ((topDialogPage.vm as ESObject).$el as UniElement)?.parentElement?.querySelector('#' + id) as Object as UniWebViewElement;
                }
            }
        }
    } else {
        webViewElement = (component.$el as UniElement)?.parentElement?.querySelector('#' + id) as Object as UniWebViewElement;
    }
    if (webViewElement == null) return null;
    return new WebViewContextImpl(webViewElement);
};
const createWebViewContext: CreateWebViewContext = defineSyncApi<WebViewContext | null>('createWebViewContext', (id: string, component: ComponentPublicInstance | null = null): WebViewContext | null =>{
    return getWebViewContext(id, component);
}) as CreateWebViewContext;
const createWebviewContext: CreateWebviewContext = defineSyncApi<WebViewContext | null>('createWebviewContext', (id: string, component: ComponentPublicInstance | null = null): WebViewContext | null =>{
    return getWebViewContext(id, component);
}) as CreateWebviewContext;
class WebViewContextImpl implements WebViewContext {
    private webviewElement: UniWebViewElement | null = null;
    constructor(webviewElement: UniWebViewElement){
        this.webviewElement = webviewElement;
    }
    back() {
        this.webviewElement?.back();
    }
    forward() {
        this.webviewElement?.forward();
    }
    reload() {
        this.webviewElement?.reload();
    }
    stop() {
        this.webviewElement?.stop();
    }
    evalJS(js: string) {
        this.webviewElement?.evalJS(js);
    }
    getContentHeight(): number {
        return this.webviewElement?.getContentHeight() ?? 0;
    }
    loadData(options: UniWebviewContextLoadDataOptions) {
        this.webviewElement?.loadData(options);
    }
}
export { CreateWebviewContext as CreateWebviewContext, UniWebviewContextLoadDataOptions as UniWebviewContextLoadDataOptions, WebViewContext as WebViewContext };
export { CreateWebViewContext as CreateWebViewContext };
export { createWebViewContext as createWebViewContext };
export { createWebviewContext as createWebviewContext };
