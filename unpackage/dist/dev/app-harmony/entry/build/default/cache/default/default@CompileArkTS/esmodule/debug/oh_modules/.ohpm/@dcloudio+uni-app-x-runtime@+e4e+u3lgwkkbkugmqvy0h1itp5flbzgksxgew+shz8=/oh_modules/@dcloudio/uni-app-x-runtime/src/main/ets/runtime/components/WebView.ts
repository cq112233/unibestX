if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WebView_Params {
    src?: string;
    bounces?: boolean;
    horizontalScrollBarAccess?: boolean;
    verticalScrollBarAccess?: boolean;
    needSetSrc?;
    isAttached?;
    delegate?: webview.WebDownloadDelegate;
    controller?: webview.WebviewController;
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
}
import webview from "@ohos:web.webview";
import deviceInfo from "@ohos:deviceInfo";
import type { BusinessError } from "@ohos:base";
import abilityAccessCtrl from "@ohos:abilityAccessCtrl";
import type common from "@ohos:app.ability.common";
import type { Permissions } from "@ohos:abilityAccessCtrl";
import bundleManager from "@ohos:bundle.bundleManager";
import { createTelSchemeHandler } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import type { ComponentBaseOptions } from '../Node';
import { getRealPath, getAbilityContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/index&1.0.0";
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
    arg: any;
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
    data: Array<any>;
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
const getSslErrorMessage = (event: SslError): string => {
    switch (event) {
        case SslError.Invalid:
            return 'SSL certificate is invalid';
        case SslError.HostMismatch:
            return 'Hostname mismatch';
        case SslError.DateInvalid:
            return 'The certificate date is invalid.';
        case SslError.Untrusted:
            return 'The certificate authority is not trusted.';
        default:
            return 'SSL error';
    }
};
export class WebView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__src = new SynchedPropertySimpleOneWayPU(params.src, this, "src");
        this.__bounces = new SynchedPropertySimpleOneWayPU(params.bounces, this, "bounces");
        this.__horizontalScrollBarAccess = new ObservedPropertySimplePU(true, this, "horizontalScrollBarAccess");
        this.__verticalScrollBarAccess = new ObservedPropertySimplePU(true, this, "verticalScrollBarAccess");
        this.needSetSrc = false;
        this.isAttached = false;
        this.delegate = undefined;
        this.controller = new webview.WebviewController();
        this.attributeUpdater = undefined;
        this.onAboutToAppear = undefined;
        this.onMessage = undefined;
        this.onTitleUpdate = undefined;
        this.onPostMessageToService = undefined;
        this.onContentHeightChange = undefined;
        this.onLoad = undefined;
        this.onLoading = undefined;
        this.onDownload = undefined;
        this.onError = undefined;
        this.handleAreaChange = undefined;
        this.handleScroll = undefined;
        this.onControllerAttached = undefined;
        this.onPageEnd = undefined;
        this.setInitiallyProvidedValue(params);
        this.declareWatch("src", this.setSrc);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WebView_Params) {
        if (params.bounces === undefined) {
            this.__bounces.set(true);
        }
        if (params.horizontalScrollBarAccess !== undefined) {
            this.horizontalScrollBarAccess = params.horizontalScrollBarAccess;
        }
        if (params.verticalScrollBarAccess !== undefined) {
            this.verticalScrollBarAccess = params.verticalScrollBarAccess;
        }
        if (params.needSetSrc !== undefined) {
            this.needSetSrc = params.needSetSrc;
        }
        if (params.isAttached !== undefined) {
            this.isAttached = params.isAttached;
        }
        if (params.delegate !== undefined) {
            this.delegate = params.delegate;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.attributeUpdater !== undefined) {
            this.attributeUpdater = params.attributeUpdater;
        }
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
        if (params.onMessage !== undefined) {
            this.onMessage = params.onMessage;
        }
        if (params.onTitleUpdate !== undefined) {
            this.onTitleUpdate = params.onTitleUpdate;
        }
        if (params.onPostMessageToService !== undefined) {
            this.onPostMessageToService = params.onPostMessageToService;
        }
        if (params.onContentHeightChange !== undefined) {
            this.onContentHeightChange = params.onContentHeightChange;
        }
        if (params.onLoad !== undefined) {
            this.onLoad = params.onLoad;
        }
        if (params.onLoading !== undefined) {
            this.onLoading = params.onLoading;
        }
        if (params.onDownload !== undefined) {
            this.onDownload = params.onDownload;
        }
        if (params.onError !== undefined) {
            this.onError = params.onError;
        }
        if (params.handleAreaChange !== undefined) {
            this.handleAreaChange = params.handleAreaChange;
        }
        if (params.handleScroll !== undefined) {
            this.handleScroll = params.handleScroll;
        }
        if (params.onControllerAttached !== undefined) {
            this.onControllerAttached = params.onControllerAttached;
        }
        if (params.onPageEnd !== undefined) {
            this.onPageEnd = params.onPageEnd;
        }
    }
    updateStateVars(params: WebView_Params) {
        this.__src.reset(params.src);
        this.__bounces.reset(params.bounces);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__src.purgeDependencyOnElmtId(rmElmtId);
        this.__bounces.purgeDependencyOnElmtId(rmElmtId);
        this.__horizontalScrollBarAccess.purgeDependencyOnElmtId(rmElmtId);
        this.__verticalScrollBarAccess.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__src.aboutToBeDeleted();
        this.__bounces.aboutToBeDeleted();
        this.__horizontalScrollBarAccess.aboutToBeDeleted();
        this.__verticalScrollBarAccess.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __src: SynchedPropertySimpleOneWayPU<string>;
    get src() {
        return this.__src.get();
    }
    set src(newValue: string) {
        this.__src.set(newValue);
    }
    private __bounces: SynchedPropertySimpleOneWayPU<boolean>;
    get bounces() {
        return this.__bounces.get();
    }
    set bounces(newValue: boolean) {
        this.__bounces.set(newValue);
    }
    private __horizontalScrollBarAccess?: ObservedPropertySimplePU<boolean>;
    get horizontalScrollBarAccess() {
        return this.__horizontalScrollBarAccess.get();
    }
    set horizontalScrollBarAccess(newValue: boolean) {
        this.__horizontalScrollBarAccess.set(newValue);
    }
    private __verticalScrollBarAccess?: ObservedPropertySimplePU<boolean>;
    get verticalScrollBarAccess() {
        return this.__verticalScrollBarAccess.get();
    }
    set verticalScrollBarAccess(newValue: boolean) {
        this.__verticalScrollBarAccess.set(newValue);
    }
    private needSetSrc;
    private isAttached;
    private delegate: webview.WebDownloadDelegate;
    private controller: webview.WebviewController;
    private attributeUpdater?: object;
    private onAboutToAppear?: (instance: WebView) => void;
    private onMessage?: (event: MessageEvent) => void;
    private onTitleUpdate?: (event: TitleUpdateEvent) => void;
    private onPostMessageToService?: (event: PostMessageToServiceEvent) => void;
    private onContentHeightChange?: (contentHeight: number) => void;
    private onLoad?: (event: LoadEvent) => void;
    private onLoading?: (event: LoadingEvent) => void;
    private onDownload?: (event: DownloadEvent) => void;
    private onError?: (event: ErrorEvent) => void;
    private handleAreaChange?: (oldValue: Area, newValue: Area) => void;
    private handleScroll?: (event: OnScrollEvent) => void;
    private onControllerAttached?: () => void;
    private onPageEnd?: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({
                src: this.src ?? '',
                controller: this.controller,
                renderMode: RenderMode.SYNC_RENDER
            });
            Web.attributeModifier.bind(this)(this.attributeUpdater);
            Web.backgroundColor(Color.Transparent);
            Web.overScrollMode(this.bounces ? OverScrollMode.ALWAYS : OverScrollMode.NEVER);
            Web.keyboardAvoidMode(WebKeyboardAvoidMode.RESIZE_VISUAL);
            Web.geolocationAccess(true);
            Web.domStorageAccess(true);
            Web.fileAccess(true);
            Web.metaViewport(true);
            Web.mediaPlayGestureAccess(false);
            Web.imageAccess(true);
            Web.onlineImageAccess(true);
            Web.darkMode(WebDarkMode.Auto);
            Web.horizontalScrollBarAccess(this.horizontalScrollBarAccess);
            Web.verticalScrollBarAccess(this.verticalScrollBarAccess);
            Web.mixedMode(MixedMode.All);
            Web.onPermissionRequest((event) => {
                const request = event.request;
                const requestedResources = request.getAccessibleResource();
                const permissions: Permissions[] = [];
                const resources: ProtectedResourceType[] = [];
                if (requestedResources.includes(ProtectedResourceType.VIDEO_CAPTURE)) {
                    permissions.push('ohos.permission.CAMERA');
                    resources.push(ProtectedResourceType.VIDEO_CAPTURE);
                }
                if (requestedResources.includes(ProtectedResourceType.AUDIO_CAPTURE)) {
                    permissions.push('ohos.permission.MICROPHONE');
                    resources.push(ProtectedResourceType.AUDIO_CAPTURE);
                }
                if (permissions.length > 0) {
                    const context = getContext(this) as common.UIAbilityContext;
                    const atManager = abilityAccessCtrl.createAtManager();
                    atManager.requestPermissionsFromUser(context, permissions).then((data) => {
                        const granted: ProtectedResourceType[] = resources.filter((resource, index) => data.authResults[index] === 0);
                        if (granted.length === 0) {
                            request.deny();
                            return;
                        }
                        request.grant(granted);
                    }).catch((error: BusinessError) => {
                        console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);
                        request.deny();
                    });
                }
            });
            Web.onControllerAttached(() => {
                this.isAttached = true;
                if (this.needSetSrc) {
                    this.needSetSrc = false;
                    this.setSrc();
                }
                try {
                    this.controller.setDownloadDelegate(this.delegate);
                    const userAgent = `${this.controller.getUserAgent()} ${getUniApp()!.userAgent.fullUserAgent}`;
                    this.controller.setCustomUserAgent(userAgent);
                    const src = getRealPath(this.src);
                    if (src) {
                        // TODO 调用 setCustomUserAgent 后必须重新 loadUrl，否则 controller 上方法会失效
                        this.controller.loadUrl(src);
                    }
                    this.controller.setWebSchemeHandler('tel', createTelSchemeHandler());
                }
                catch (error) {
                    // TODO: Implement error handling.
                }
                this.onControllerAttached?.();
            });
            Web.onLoadIntercept((event) => {
                let url = event.data.getRequestUrl();
                const context = this.getUIContext().getHostContext();
                if (context) {
                    let harmonyFilesDir = [
                        context.filesDir,
                        context.getApplicationContext().filesDir,
                        context.resourceDir,
                        context.getApplicationContext().resourceDir
                    ].filter(item => !!item);
                    let allowingUniversalAccess = harmonyFilesDir.map(item => item + '/uni-app-x/apps').concat(harmonyFilesDir.map(item => item + '/uni-static'));
                    try {
                        if (deviceInfo.sdkApiVersion < 21) {
                            if (url.startsWith('file:/') &&
                                (url.includes(context.tempDir) || url.includes(context.getApplicationContext().tempDir) ||
                                    url.includes(context.cacheDir) || url.includes(context.getApplicationContext().cacheDir))) {
                                allowingUniversalAccess = [];
                            }
                            this.controller?.setPathAllowingUniversalAccess(allowingUniversalAccess);
                        }
                        else {
                            allowingUniversalAccess.push(context.cacheDir, context.getApplicationContext().cacheDir, context.tempDir, context.getApplicationContext().tempDir);
                            this.controller?.setPathAllowingUniversalAccess(allowingUniversalAccess);
                        }
                    }
                    catch (error) {
                        console.error('[runtime-harmony] Webview setPathAllowingUniversalAccess error: ' + error);
                    }
                }
                // 兼容 mailto:// 等协议
                if (!(/https{0,1}:\/\//.test(url) || url.startsWith('file:/')) && /\w+:/.test(url)) {
                    const scheme = (url.match(/(\w+:)\w/) ?? [])[1];
                    if (scheme) {
                        url = url.replace(scheme, scheme + '//');
                    }
                    try {
                        let canOpen = bundleManager.canOpenLink(url);
                        if (canOpen) {
                            getAbilityContext()?.openLink(url);
                            return true;
                        }
                        else {
                            // console.error('Webview failed to open link: ' + url)
                        }
                    }
                    catch (e) {
                        // console.error('Webview failed to open link: ' + url + '. ' + e)
                    }
                }
                return false;
            });
            Web.onTitleReceive(event => {
                this.onTitleUpdate?.({
                    detail: {
                        title: event?.title
                    }
                });
            });
            Web.onConsole(event => {
                if (event) {
                    console.log('getMessage: ' + JSON.stringify(event.message.getMessage()));
                }
                return false;
            });
            Web.onAlert((event) => {
                if (event) {
                    AlertDialog.show({
                        message: event.message,
                        autoCancel: false,
                        alignment: DialogAlignment.Center,
                        confirm: {
                            value: 'OK',
                            action: () => {
                                event.result.handleConfirm();
                            }
                        }
                    });
                }
                return true;
            });
            Web.onErrorReceive(event => {
                const errorInfo = event.error.getErrorInfo();
                this.onError?.({
                    detail: {
                        errSubject: 'uni-web-view',
                        errCode: 100002,
                        errMsg: errorInfo,
                        url: event.request.getRequestUrl(),
                        fullUrl: this.controller.getUrl(),
                        src: this.src
                    }
                });
            });
            Web.onHttpErrorReceive((event) => {
                this.onError?.({
                    detail: {
                        errSubject: 'uni-web-view',
                        errCode: 100003,
                        errMsg: 'http error',
                        url: event.request.getRequestUrl(),
                        fullUrl: this.controller.getUrl(),
                        src: this.src
                    }
                });
            });
            Web.onSslErrorEventReceive((event) => {
                event.handler.handleConfirm();
                this.onError?.({
                    detail: {
                        errSubject: 'uni-web-view',
                        errCode: 100001,
                        errMsg: getSslErrorMessage(event.error),
                        url: this.controller.getOriginalUrl(),
                        fullUrl: this.controller.getUrl(),
                        src: this.src
                    }
                });
            });
            Web.javaScriptProxy({
                object: {
                    postMessage: (data: string) => {
                        this.onMessage?.({ detail: { data: [(typeof data === 'string' ? JSON.parse(data) : data).data ?? ''] } });
                    },
                    postMessageToService: (data: string) => {
                        this.onPostMessageToService?.({ detail: typeof data === 'string' ? JSON.parse(data) : data });
                    },
                    onContentHeightChange: (contentHeight: number) => {
                        this.onContentHeightChange?.(contentHeight);
                    }
                },
                name: '__uniapp_x_',
                methodList: ['postMessage', 'postMessageToService', 'onContentHeightChange'],
                controller: this.controller
            });
            Web.onGeolocationShow((event) => {
                const context = getContext(this) as common.UIAbilityContext;
                const atManager = abilityAccessCtrl.createAtManager();
                atManager.requestPermissionsFromUser(context, ["ohos.permission.APPROXIMATELY_LOCATION", "ohos.permission.LOCATION"]).then((data) => {
                    if (data.authResults.some(item => item === 0)) {
                        event.geolocation.invoke(event.origin, true, true);
                    }
                    else {
                        event.geolocation.invoke(event.origin, false, false);
                    }
                }).catch((error: BusinessError) => {
                    console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);
                    event.geolocation.invoke(event.origin, false, false);
                });
            });
            Web.onPageEnd((event) => {
                const url = event.url;
                this.onLoad?.({
                    detail: {
                        src: url,
                        url: url
                    }
                });
                this.onPageEnd?.();
            });
            Web.onPageBegin((event) => {
                this.onLoading?.({
                    detail: {
                        src: event.url,
                        url: event.url
                    }
                });
            });
            Web.onDownloadStart((event) => {
                this.onDownload?.({
                    detail: {
                        url: event.url,
                        userAgent: event.userAgent,
                        contentDisposition: event.contentDisposition,
                        mimetype: event.mimetype,
                        contentLength: event.contentLength
                    }
                });
            });
            Web.onAreaChange(this.handleAreaChange);
            Web.onScroll((e) => {
                this.handleScroll?.(e);
            });
            Web.javaScriptOnDocumentEnd([
                {
                    script: `(() => {
    try {
        let __uniapp_lastHeight = null
        function triggerOnContentHeightChange(newHeight) {
          if (__uniapp_lastHeight == null) {
            __uniapp_lastHeight = newHeight
            window.__uniapp_x_.onContentHeightChange(newHeight);
          } else if (newHeight !== __uniapp_lastHeight) {
            __uniapp_lastHeight = newHeight
            window.__uniapp_x_.onContentHeightChange(newHeight);
          }
        }

        // 创建一个 ResizeObserver 实例
        const resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
            // 检查 body 元素的尺寸是否发生变化
            if (entry.target === document.body) {
              const bodyHeight = document.body.scrollHeight;
              triggerOnContentHeightChange(bodyHeight)
            }
          }
        });

        // 将 ResizeObserver 实例绑定到 body 元素上
        resizeObserver.observe(document.body);
    } catch (err) {
        console.log(err);
    }
})()`,
                    scriptRules: ["*"]
                }
            ]);
        }, Web);
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    aboutToDisappear(): void {
        try {
            this.controller.deleteJavaScriptRegister('__uniapp_x_');
        }
        catch (e) {
        }
    }
    setSrc() {
        if (!this.src) {
            return;
        }
        if (!this.isAttached) {
            this.needSetSrc = true;
            return;
        }
        this.controller.loadUrl(getRealPath(this.src));
    }
    setHorizontalScrollBarAccess(value: boolean) {
        this.horizontalScrollBarAccess = value;
        this.refresh();
    }
    setVerticalScrollBarAccess(value: boolean) {
        this.verticalScrollBarAccess = value;
        this.refresh();
    }
    private refresh() {
        if (this.isAttached) {
            this.controller.refresh();
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
