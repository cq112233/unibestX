import buffer from "@ohos:buffer";
import type { BusinessError } from "@ohos:base";
import { FrameCallback } from "@ohos:arkui.UIContext";
import { buildWeb } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-web-view/utssdk/app-harmony/builder&1.0.0";
import type { TitleUpdateEvent, PostMessageToServiceEvent, LoadEvent, MessageEvent, LoadingEvent, DownloadEvent, ErrorEvent } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-web-view/utssdk/app-harmony/builder&1.0.0";
import componentSnapshot from "@ohos:arkui.componentSnapshot";
import type { FrameCallback as FrameCallback__1 } from "@ohos:arkui.UIContext";
import { createDownloadDelegate } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-web-view/utssdk/app-harmony/webview&1.0.0";
import fs from "@ohos:file.fs";
import image__1 from "@ohos:multimedia.image";
import image from "@ohos:multimedia.image";
import { UTSObject, UTS, UniNativeViewEvent, UTSJSONObject, UniViewElementImpl, getCurrentPages, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { string, ComponentPublicInstance, UniNativeViewElement, NavigateToOptions, NavigateBackOptions, SwitchTabOptions, ReLaunchOptions, RedirectToOptions, UniElement, UniPage } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { uni, getCurrentMP, getAbilityContext } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import util from "@ohos:util";
import webview from "@ohos:web.webview";
class WebViewProgressStyles extends UTSObject {
    color!: string.ColorString;
}
class WebViewStyles extends UTSObject {
    progress!: WebViewProgressStyles | boolean;
}
class UniWebviewContextLoadDataOptions extends UTSObject {
    data!: string;
    baseURL: string | null = null;
    mimeType: string | null = null;
    encoding: string | null = null;
}
type UniWebViewContextLoadDataOptions = UniWebviewContextLoadDataOptions;
class UniWebViewElementLoadDataOptions extends UTSObject {
    data!: string;
    baseURL: string | null = null;
    mimeType: string | null = null;
    encoding: string | null = null;
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
class CustomFrameCallback extends FrameCallback {
    cb: () => void;
    constructor(cb: () => void) {
        super();
        this.cb = cb;
    }
    onIdle() {
        this.cb();
    }
}
async function getSnapshotArea(pixelMap: PixelMap, scrollYOffsets: number[], width: number, height: number): Promise<image.PositionArea> {
    const stride = pixelMap.getBytesNumberPerRow();
    const bytesNumber = pixelMap.getPixelBytesNumber();
    const buffer: ArrayBuffer = new ArrayBuffer(bytesNumber);
    const len = scrollYOffsets.length;
    if (len >= 2) {
        const realScrollHeight = scrollYOffsets[len - 1] - scrollYOffsets[len - 2];
        if (height - realScrollHeight > 0) {
            const cropRegion: image.Region = {
                x: 0,
                y: vp2px(height - realScrollHeight),
                size: {
                    height: vp2px(realScrollHeight),
                    width: vp2px(width)
                }
            };
            if (cropRegion.size.height == 0) {
                return {
                    pixels: buffer,
                    offset: 0,
                    stride: stride,
                    region: {
                        size: {
                            width: 0,
                            height: 0
                        },
                        x: 0,
                        y: 0
                    }
                };
            }
            await pixelMap.crop(cropRegion);
        }
    }
    const imgInfo = pixelMap.getImageInfoSync();
    const area: image.PositionArea = {
        pixels: buffer,
        offset: 0,
        stride: stride,
        region: {
            size: {
                width: imgInfo.size.width,
                height: imgInfo.size.height
            },
            x: 0,
            y: 0
        }
    };
    pixelMap.readPixelsSync(area);
    return area;
}
async function mergeImage(areaArray: image.PositionArea[], lastOffsetY: number, listWidth: number, listHeight: number): Promise<PixelMap> {
    const opts: image.InitializationOptions = {
        editable: true,
        pixelFormat: 4,
        size: {
            width: vp2px(listWidth),
            height: Math.round(vp2px(lastOffsetY + listHeight))
        }
    };
    const longPixelMap = image.createPixelMapSync(opts);
    let imgPosition: number = 0;
    for (let i = 0; i < areaArray.length; i++) {
        const readArea = areaArray[i];
        const area: image.PositionArea = {
            pixels: readArea.pixels,
            offset: 0,
            stride: readArea.stride,
            region: {
                size: {
                    width: readArea.region.size.width,
                    height: readArea.region.size.height
                },
                x: 0,
                y: imgPosition
            }
        };
        imgPosition += readArea.region.size.height;
        longPixelMap.writePixelsSync(area);
    }
    return longPixelMap;
}
const BASE64_ENCODING = 'base64';
class BindWebViewController {
    private controllerAttachedInvokers: Array<() => void> = [];
    isControllerAttached: boolean = false;
    isPageEnd: boolean = false;
    controller: webview.WebviewController = new webview.WebviewController();
    constructor() { }
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
    onControllerAttached() {
        if (!this.isControllerAttached) {
            this.isControllerAttached = true;
            this.controllerAttachedInvokers.forEach((cb) => cb());
            this.controllerAttachedInvokers = [];
        }
    }
    onPageEnd() {
        if (!this.isPageEnd) {
            this.isPageEnd = true;
        }
    }
    back() {
        this.invokeController('backward');
    }
    forward() {
        this.invokeController('forward');
    }
    reload() {
        this.invokeController('refresh');
    }
    stop() {
        this.invokeController('stop');
    }
    evalJS(js: string) {
        this.invokeController('runJavaScript', js);
    }
    getContentHeight(): number {
        return this.controller.getPageHeight();
    }
    canBack(): boolean {
        return this.controller.accessBackward();
    }
    canForward(): boolean {
        return this.controller.accessForward();
    }
    loadData(options: UniWebViewElementLoadDataOptions) {
        let data = options.data;
        let encoding = options?.encoding;
        const baseURL = options?.baseURL ?? '';
        if (encoding == null && baseURL.length === 0) {
            try {
                const htmlBytes = new util.TextEncoder().encodeInto(data);
                const byteOffset = htmlBytes.byteOffset;
                const byteLength = htmlBytes.byteLength;
                const htmlBuffer = byteOffset == 0 && byteLength == htmlBytes.buffer.byteLength ? htmlBytes.buffer : htmlBytes.buffer.slice(byteOffset, byteOffset + byteLength);
                data = buffer.from(htmlBuffer).toString(BASE64_ENCODING);
                encoding = BASE64_ENCODING;
            }
            catch (error) {
                UTS.console.error('[WebView loadData] Failed to encode data to base64:', error);
            }
        }
        if (encoding !== BASE64_ENCODING) {
            data = data.replace(/#/g, '%23');
        }
        this.invokeController('loadData', data, options.mimeType ?? "text/html", encoding ?? "UTF-8", baseURL ?? '');
    }
}
interface BuilderWebViewParams {
    id?: string;
    src?: string;
    horizontalScrollBarAccess: boolean;
    verticalScrollBarAccess: boolean;
    bounces: boolean;
    disableUserSelectMenu: boolean;
    controller?: webview.WebviewController;
    delegate?: webview.WebDownloadDelegate;
    onMessage?: (event: MessageEvent) => void;
    onTitleUpdate?: (event: TitleUpdateEvent) => void;
    onPostMessageToService?: (event: PostMessageToServiceEvent) => void;
    onContentHeightChange?: (contentHeight: number) => void;
    onLoad?: (event: LoadEvent) => void;
    onLoading?: (event: LoadingEvent) => void;
    onDownload?: (event: DownloadEvent) => void;
    onError?: (event: ErrorEvent) => void;
    onControllerAttached?: () => void;
    handleAreaChange?: (oldValue: Area, newValue: Area) => void;
    handleScroll?: (event: OnScrollEvent) => void;
}
interface BuilderWebViewEvents {
    onMessage?: (customEvent: UniNativeViewEvent) => void;
    onLoad?: (customEvent: UniNativeViewEvent) => void;
    onLoading?: (customEvent: UniNativeViewEvent) => void;
    onDownload?: (customEvent: UniNativeViewEvent) => void;
    onContentheightchange?: (customEvent: UniNativeViewEvent) => void;
    onError?: (customEvent: UniNativeViewEvent) => void;
}
function capitalizeFirstLetter(str: string): string {
    if (!str)
        return '';
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);
    return firstLetter + restOfString;
}
class NativeWebView {
    __v_skip: boolean = true;
    private webviewElement: UniWebViewElement | undefined;
    private element: UniNativeViewElement;
    private params: BuilderWebViewParams = {
        src: '',
        horizontalScrollBarAccess: true,
        verticalScrollBarAccess: true,
        bounces: true,
        disableUserSelectMenu: false
    };
    private events: BuilderWebViewEvents = {};
    private webComponentContent: ComponentContent;
    private lastPageHeight: number = 0;
    id = `web_view_id_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
    bindWebViewController: BindWebViewController = new BindWebViewController();
    constructor(element: UniNativeViewElement, events: BuilderWebViewEvents = {}) {
        this.events = events;
        this.element = element;
        this.initParams();
        this.element.bindHarmonyWrappedBuilder(wrapBuilder<[
            BuilderWebViewParams
        ]>(buildWeb), this.params);
        this.element.bindHarmonyController(this.bindWebViewController);
        if (typeof this.element['getHarmonyComponentContent'] === 'function') {
            this.webComponentContent = (this.element as any).getHarmonyComponentContent() as ComponentContent;
        }
        else {
            this.webComponentContent = this.element.getHarmonyBuilderNode();
        }
        if (this.element.parentElement) {
            this.webviewElement = this.element.parentElement as Object as UniWebViewElement;
            this.webviewElement.setNativeWebView(this);
        }
    }
    private dispatchEvent(type: string, event: UniNativeViewEvent) {
        (this.events as any)[`on${capitalizeFirstLetter(type)}`]?.(event);
    }
    private initParams() {
        this.params.id = this.id;
        this.params.delegate = createDownloadDelegate();
        this.params.controller = this.bindWebViewController.controller;
        this.params.onMessage = (event: MessageEvent) => {
            const detail = new UTSJSONObject();
            detail.set('data', event.detail.data);
            this.dispatchEvent('message', new UniNativeViewEvent("message", detail));
        };
        this.params.onTitleUpdate = (event: TitleUpdateEvent) => { };
        this.params.onPostMessageToService = (event: PostMessageToServiceEvent) => {
            const detail = event.detail;
            const name = detail.args.data.name;
            const arg: any = detail.args.data.arg;
            switch (name) {
                case 'navigateTo':
                    uni.navigateTo({
                        url: encodeURI(arg.url)
                    } as NavigateToOptions);
                    break;
                case 'navigateBack':
                    const delta = parseInt(arg.delta);
                    uni.navigateBack({
                        delta: !isNaN(delta) ? delta : 1
                    } as NavigateBackOptions);
                    break;
                case 'switchTab':
                    uni.switchTab({
                        url: encodeURI(arg.url)
                    } as SwitchTabOptions);
                    break;
                case 'reLaunch':
                    uni.reLaunch({
                        url: encodeURI(arg.url)
                    } as ReLaunchOptions);
                    break;
                case 'redirectTo':
                    uni.redirectTo({
                        url: encodeURI(arg.url)
                    } as RedirectToOptions);
                    break;
            }
        };
        this.params.onContentHeightChange = (contentHeight: number) => {
            this.lastPageHeight = contentHeight;
            const detail = new UTSJSONObject();
            detail.set('height', contentHeight);
            this.dispatchEvent('contentheightchange', new UniNativeViewEvent("contentheightchange", detail));
        };
        this.params.onLoad = (event: LoadEvent) => {
            this.bindWebViewController.onPageEnd();
            const detail = new UTSJSONObject();
            detail.set('url', event.detail.url);
            detail.set('src', event.detail.src);
            this.dispatchEvent('load', new UniNativeViewEvent("load", detail));
        };
        this.params.onLoading = (event: LoadingEvent) => {
            const detail = new UTSJSONObject();
            detail.set('url', event.detail.url);
            detail.set('src', event.detail.src);
            this.dispatchEvent('loading', new UniNativeViewEvent("loading", detail));
        };
        this.params.onDownload = (event: DownloadEvent) => {
            const detail = new UTSJSONObject();
            detail.set('url', event.detail.url);
            detail.set('userAgent', event.detail.userAgent);
            detail.set('contentDisposition', event.detail.contentDisposition);
            detail.set('mimetype', event.detail.mimetype);
            detail.set('contentLength', event.detail.contentLength);
            this.dispatchEvent('download', new UniNativeViewEvent("download", detail));
        };
        this.params.onError = (event: ErrorEvent) => {
            const detail = new UTSJSONObject();
            detail.set('errSubject', event.detail.errSubject);
            detail.set('errCode', event.detail.errCode);
            detail.set('errMsg', event.detail.errMsg);
            detail.set('url', event.detail.url);
            detail.set('fullUrl', event.detail.fullUrl);
            detail.set('src', event.detail.src);
            this.dispatchEvent('error', new UniNativeViewEvent("error", detail));
        };
        this.params.onControllerAttached = () => {
            this.bindWebViewController.onControllerAttached();
        };
        this.params.handleAreaChange = (_: Area, newValue: Area) => {
            if (this.webviewElement) {
                this.webviewElement.widthByAreaChange = newValue.width as number;
                this.webviewElement.heightByAreaChange = newValue.height as number;
            }
        };
        this.params.handleScroll = (event) => {
            if (this.webviewElement) {
                this.webviewElement.curOffsetY = event.yOffset;
            }
        };
    }
    setSrc(src: string | null = null) {
        if (this.params.src !== src) {
            this.params.src = src ?? '';
            this.updateParams();
        }
    }
    setWebViewStyles(webViewStyles: WebViewStyles | null = null) { }
    setHorizontalScrollBarAccess(access: boolean) {
        if (this.params.horizontalScrollBarAccess !== access) {
            this.params.horizontalScrollBarAccess = access;
            this.updateParams();
        }
    }
    setVerticalScrollBarAccess(access: boolean) {
        if (this.params.verticalScrollBarAccess !== access) {
            this.params.verticalScrollBarAccess = access;
            this.updateParams();
        }
    }
    setBounces(bounces: boolean) {
        if (this.params.bounces !== bounces) {
            this.params.bounces = bounces;
            this.updateParams();
        }
    }
    setDisableUserSelectMenu(disableUserSelectMenu: boolean) {
        if (this.params.disableUserSelectMenu !== disableUserSelectMenu) {
            this.params.disableUserSelectMenu = disableUserSelectMenu;
            this.updateParams();
        }
    }
    private updateParams() {
        this.webComponentContent.update(this.params);
    }
    back() {
        this.bindWebViewController.back();
    }
    forward() {
        this.bindWebViewController.forward();
    }
    reload() {
        this.bindWebViewController.reload();
    }
    stop() {
        this.bindWebViewController.stop();
    }
    evalJS(js: string) {
        this.bindWebViewController.evalJS(js);
    }
    getContentHeight(): number {
        const pageHeight = this.bindWebViewController.getContentHeight();
        if (this.lastPageHeight === 0 && this.lastPageHeight !== pageHeight) {
            return pageHeight;
        }
        return this.lastPageHeight;
    }
    loadData(options: UniWebViewElementLoadDataOptions) {
        this.bindWebViewController.loadData(options);
    }
    destroy() {
        this.params.delegate?.onBeforeDownload(undefined);
        this.params.delegate?.onDownloadUpdated(undefined);
        this.params.delegate?.onDownloadFinish(undefined);
        this.params.delegate?.onDownloadFailed(undefined);
        this.webComponentContent.dispose();
    }
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
    complete?: (res: any) => void;
}
class UniWebViewElement extends UniViewElementImpl implements IUniWebViewElement {
    tagName: string = 'WEB-VIEW';
    nodeName: string = 'WEB-VIEW';
    private uiContext: UIContext | null = null;
    private nativeWebview: NativeWebView | null = null;
    private nativeWebviewAttachedInvokers: Array<() => void> = [];
    private isNativeWebviewAttached: boolean = false;
    private lastScrollHeight: number = 0;
    widthByAreaChange: number = 0;
    heightByAreaChange: number = 0;
    curOffsetY: number = 0;
    getHarmonyController(): webview.WebviewController | null {
        return this.nativeWebview?.bindWebViewController?.controller ?? null;
    }
    setNativeWebView(nativeWebview: NativeWebView) {
        this.nativeWebview = nativeWebview;
        if (!this.isNativeWebviewAttached) {
            this.isNativeWebviewAttached = true;
            this.nativeWebviewAttachedInvokers.forEach((cb) => cb());
            this.nativeWebviewAttachedInvokers = [];
        }
    }
    private invokeNativeWebview(fn: () => void) {
        if (this.isNativeWebviewAttached && this.nativeWebview != null) {
            fn();
        }
        else {
            this.nativeWebviewAttachedInvokers.push(fn);
        }
    }
    back() {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.back();
        });
    }
    forward() {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.forward();
        });
    }
    reload() {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.reload();
        });
    }
    stop() {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.stop();
        });
    }
    evalJS(js: string) {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.evalJS(js);
        });
    }
    getContentHeight(): number {
        return this.nativeWebview?.getContentHeight() ?? 0;
    }
    loadData(options: UniWebViewElementLoadDataOptions) {
        this.invokeNativeWebview(() => {
            this.nativeWebview?.loadData(options);
        });
    }
    private awaitOnIdle(): Promise<void> {
        return new Promise((resolve) => {
            const context = this.getUIContext();
            if (context) {
                context.postDelayedFrameCallback(new CustomFrameCallback(resolve as () => void) as FrameCallback__1, 50);
            }
            else {
                setTimeout(resolve, 100);
            }
        });
    }
    private getUIContext(): UIContext | null {
        if (this.uiContext)
            return this.uiContext;
        const mainWindow = getCurrentMP().window;
        if (!mainWindow)
            return null;
        const uiContext = mainWindow.getUIContext();
        if (!uiContext)
            return null;
        this.uiContext = uiContext;
        return this.uiContext;
    }
    private async webViewScrollSnapshot(): Promise<PixelMap> {
        return new Promise(async (resolve, reject) => {
            this.lastScrollHeight = 0;
            const controller: webview.WebviewController = this.getHarmonyController() as webview.WebviewController;
            const originOffsetY: number = this.curOffsetY;
            const componentWidth: number = this.widthByAreaChange;
            const componentHeight: number = this.heightByAreaChange;
            const scrollHeight: number = componentHeight * 0.7;
            const areaArray: image__1.PositionArea[] = [];
            const scrollYOffsets: number[] = [];
            controller.scrollTo(0, 0);
            await this.awaitOnIdle();
            this.webViewSnapCurrentScreen(scrollYOffsets, componentWidth, componentHeight, scrollHeight, areaArray, controller).then(async (pixelMap: PixelMap) => {
                controller.scrollTo(0, originOffsetY);
                await this.awaitOnIdle();
                resolve(pixelMap);
            }).catch((e: BusinessError) => {
                reject(e);
            });
        }) as Promise<PixelMap>;
    }
    private async webViewSnapCurrentScreen(scrollYOffsets: number[], componentWidth: number, componentHeight: number, scrollHeight: number, areaArray: image__1.PositionArea[], controller: webview.WebviewController): Promise<PixelMap> {
        const componentId = this.nativeWebview?.id;
        const curOffsetY: number = this.curOffsetY;
        scrollYOffsets.push(curOffsetY);
        await this.awaitOnIdle();
        const pixelMap: PixelMap = await componentSnapshot.get(componentId)!;
        const area: image__1.PositionArea = await getSnapshotArea(pixelMap, scrollYOffsets, componentWidth, componentHeight);
        areaArray.push(area);
        const totalScrollHeight = curOffsetY + componentHeight;
        if (Math.ceil(totalScrollHeight) < controller.getPageHeight() && this.lastScrollHeight !== totalScrollHeight) {
            this.lastScrollHeight = totalScrollHeight;
            controller.scrollByWithResult(0, scrollHeight);
            await this.awaitOnIdle();
            return await this.webViewSnapCurrentScreen(scrollYOffsets, componentWidth, componentHeight, scrollHeight, areaArray, controller);
        }
        else {
            return await mergeImage(areaArray, scrollYOffsets[scrollYOffsets.length - 1], componentWidth, componentHeight);
        }
    }
    private pixelMapToImgPath(context: Context, format: string, pixelMap: image__1.PixelMap): Promise<string> {
        return new Promise((resolve, reject) => {
            const fileDir = context.tempDir;
            const folderName = 'uni-snapshot';
            const isDirExist = fs.accessSync(`${fileDir}/${folderName}`, fs.AccessModeType.WRITE);
            if (!isDirExist) {
                fs.mkdirSync(`${fileDir}/${folderName}`, true);
            }
            const file = fs.openSync(`${fileDir}/${folderName}/${Date.now()}.${format}`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
            const imagePackerApi = image__1.createImagePacker();
            const packOpts: image__1.PackingOption = {
                format: `image/${format}`,
                quality: 100
            };
            imagePackerApi.packToFile(pixelMap, file.fd, packOpts, (err) => {
                pixelMap.release();
                if (err) {
                    reject({
                        message: 'pixelMapToImgPath fail'
                    } as BusinessError);
                }
                else {
                    resolve(file.path);
                }
            });
        });
    }
    takeSnapshot(options: TakeSnapshotOptions) {
        const DEFAULT_TYPE = 'file';
        const DEFAULT_FORMAT = 'png';
        let type = options.type!;
        let format = options.format!;
        if (type !== DEFAULT_TYPE) {
            type = DEFAULT_TYPE;
        }
        if (format !== DEFAULT_FORMAT) {
            format = DEFAULT_FORMAT;
        }
        const controller = this.getHarmonyController();
        if (controller) {
            try {
                this.webViewScrollSnapshot().then((imagePixelMap: PixelMap) => {
                    if (type === DEFAULT_TYPE && imagePixelMap) {
                        this.pixelMapToImgPath(getAbilityContext(), format, imagePixelMap).then((tempFilePath: string) => {
                            const res: TakeSnapshotSuccess = {
                                tempFilePath
                            };
                            options.success?.(res);
                            options.complete?.(res);
                        }).catch((error: BusinessError) => {
                            const err: TakeSnapshotFail = {
                                errMsg: `UniElement takeSnapshot fail: ${error.message}`
                            };
                            options.fail?.(err);
                            options.complete?.(err);
                        }).finally(() => {
                            imagePixelMap.release();
                        });
                    }
                }).catch((error: BusinessError | number) => {
                    const err: TakeSnapshotFail = {
                        errMsg: `UniElement takeSnapshot fail: ${typeof error === 'number' ? error : error.message}`
                    };
                    options.fail?.(err);
                    options.complete?.(err);
                });
            }
            catch (err) {
                if (err) {
                    const takeSnapshotFail: TakeSnapshotFail = {
                        errMsg: (err as BusinessError).message
                    };
                    options?.fail?.(takeSnapshotFail);
                    options?.complete?.(takeSnapshotFail);
                    return;
                }
            }
        }
    }
    dispose() {
        this.nativeWebview?.destroy();
        this.nativeWebview = null;
    }
}
const getWebViewContext = (id: string, component: ComponentPublicInstance | null = null): WebViewContext | null => {
    let webViewElement: UniWebViewElement | null | undefined = null;
    if (component == null) {
        const pages = getCurrentPages() as UniPage[];
        if (pages.length > 0) {
            const page = pages[pages.length - 1];
            if (!page) {
                UTS.console.error(`getCurrentPages is empty`);
                return null;
            }
            webViewElement = ((page.vm as any).$el as UniElement)?.parentElement?.querySelector('#' + id) as UniWebViewElement;
            if (webViewElement == null) {
                const dialogPages = page.getDialogPages() as UniPage[];
                if (dialogPages.length > 0) {
                    const topDialogPage = dialogPages[dialogPages.length - 1];
                    if (!topDialogPage) {
                        UTS.console.error(`getDialogPages is empty`);
                        return null;
                    }
                    webViewElement = ((topDialogPage.vm as any).$el as UniElement)?.parentElement?.querySelector('#' + id) as Object as UniWebViewElement;
                }
            }
        }
    }
    else {
        webViewElement = (component.$el as UniElement)?.parentElement?.querySelector('#' + id) as Object as UniWebViewElement;
    }
    if (webViewElement == null)
        return null;
    return new WebViewContextImpl(webViewElement);
};
const createWebViewContext: CreateWebViewContext = defineSyncApi<WebViewContext | null>('createWebViewContext', (id: string, component: ComponentPublicInstance | null = null): WebViewContext | null => {
    return getWebViewContext(id, component);
}) as CreateWebViewContext;
const createWebviewContext: CreateWebviewContext = defineSyncApi<WebviewContext | null>('createWebviewContext', (id: string, component: ComponentPublicInstance | null = null): WebviewContext | null => {
    return getWebViewContext(id, component) as WebviewContext | null;
}) as CreateWebviewContext;
class WebViewContextImpl implements WebViewContext {
    private webViewElement?: UniWebViewElement | null = null;
    constructor(webViewElement: UniWebViewElement | null = null) {
        this.webViewElement = webViewElement;
    }
    back() {
        this.webViewElement?.back();
    }
    forward() {
        this.webViewElement?.forward();
    }
    reload() {
        this.webViewElement?.reload();
    }
    stop() {
        this.webViewElement?.stop();
    }
    evalJS(js: string) {
        this.webViewElement?.evalJS(js);
    }
    getContentHeight(): number {
        return this.webViewElement?.getContentHeight() ?? 0;
    }
    loadData(options: UniWebViewContextLoadDataOptions) {
        this.webViewElement?.loadData(options as UniWebViewElementLoadDataOptions);
    }
}
export { UniWebviewContextLoadDataOptions as UniWebviewContextLoadDataOptions, UniWebViewElementLoadDataOptions as UniWebViewElementLoadDataOptions, WebViewProgressStyles as WebViewProgressStyles, WebViewStyles as WebViewStyles };
export type { CreateWebViewContext as CreateWebViewContext, CreateWebviewContext as CreateWebviewContext, UniWebViewContextLoadDataOptions as UniWebViewContextLoadDataOptions, WebViewContext as WebViewContext, WebviewContext as WebviewContext };
export { NativeWebView as NativeWebView };
export { UniWebViewElement as UniWebViewElement };
export { createWebViewContext as createWebViewContext };
export { createWebviewContext as createWebviewContext };
