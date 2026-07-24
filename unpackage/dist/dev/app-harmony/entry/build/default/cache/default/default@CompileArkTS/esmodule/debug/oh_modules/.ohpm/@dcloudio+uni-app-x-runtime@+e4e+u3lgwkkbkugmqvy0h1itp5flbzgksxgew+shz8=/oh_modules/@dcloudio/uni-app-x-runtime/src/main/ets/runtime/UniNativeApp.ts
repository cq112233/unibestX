import { getAbilityContext, getEntryAbility, getWindowStage } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
import type { Manifest } from './manifest';
import OHWindow from "@ohos:window";
import { TEMPLATE_PAGE_NAME } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/Page&1.0.0";
import type { NativeLoadFontFaceOptions, UniKeyEvent, UniNativeApp as IUniNativeApp } from '@dcloudio/uni-app-x/types/native';
import { UniPageManagerImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniPageManager&1.0.0";
import { UniCallbackWrapper } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniCallbackWrapper&1.0.0";
import { TinyEmitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
import { clearSafeAreaInsetsChange, formatFontFaceSrc, getCurrentPages, getResourceStr, readTextSync, registerFont } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { initVar, initPages } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/uni-app-x-framework-dev&1.0.0";
import type { UniPageImpl } from '@dcloudio/uni-runtime-harmony/UniPage';
import { getPrivacyAgree, setPrivacyAgree, getAppTheme, getUserAgent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/index&1.0.0";
import { GlobalDocument } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/GlobalDocument&1.0.0";
import { clearApp, genApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniApp&1.0.0";
import type { BusinessError } from "@ohos:base";
import errorManager from "@ohos:app.ability.errorManager";
let mainApp: UniNativeAppImpl | null = null;
function getMainApp() {
    return mainApp;
}
export type AnimationType = 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'none';
interface IOpenUniAppConfig {
    /**
     * @internal
     */
    isMain?: boolean;
    animationType?: AnimationType;
    animationDuration?: number;
    wantUri?: string;
}
export function getManifest(appID?: string): Manifest {
    const manifestPath = getResourceStr('/manifest.json', true, appID) as string;
    const manifestContent = readTextSync(manifestPath);
    return JSON.parse(manifestContent);
}
interface IUserAgent {
    value: string;
    concatenate: boolean;
    fullUserAgent: string;
}
interface LaunchOptions {
    appScheme: string;
    appLink: string;
}
export class UniNativeAppImpl implements IUniNativeApp {
    appid: string;
    /**
     * @internal
     */
    manifest: Manifest;
    /**
     * @internal
     */
    window!: OHWindow.Window;
    /**
     * @internal
     */
    context: UIContext | null = null;
    /**
     * @internal
     */
    router = new NavPathStack();
    /**
     * @internal
     */
    public userAgent: IUserAgent = {
        value: '',
        concatenate: true,
        fullUserAgent: getUserAgent(),
    };
    appTheme: string = getAppTheme();
    pageManager: UniPageManagerImpl = new UniPageManagerImpl();
    /**
     * @internal
     */
    _emitter = new TinyEmitter();
    private appStartDuration = 0;
    private globalDocument = new GlobalDocument();
    private windowStage: OHWindow.WindowStage;
    private isMain: boolean;
    appScheme: string = '';
    /**
     * @internal
     */
    animationType?: AnimationType;
    /**
     * @internal
     */
    animationDuration?: number;
    private windowStageEventType: OHWindow.WindowStageEventType = OHWindow.WindowStageEventType.SHOWN;
    constructor(id: string, config?: IOpenUniAppConfig) {
        if (mainApp) {
            throw new Error('app already opened');
        }
        mainApp = this;
        this.appid = id;
        this.isMain = config?.isMain ?? false;
        if (config?.wantUri) {
            this.appScheme = config.wantUri;
        }
        if (!this.isMain) {
            this.animationType = config?.animationType ?? 'slide-in-right';
            this.animationDuration = config?.animationDuration ?? 300;
        }
        const windowStage = getWindowStage();
        if (!windowStage) {
            mainApp = null;
            throw new Error('windowStage is required');
        }
        this.windowStage = windowStage;
        // TODO 校验 manifest
        this.manifest = getManifest(id);
        // TODO initUserAgentOnce
        const initWindow = (err: BusinessError, window: OHWindow.Window) => {
            this.window = window;
            // 启用沉浸式，以保障后续部分安全区相关测量正常
            window.setWindowLayoutFullScreen(true);
            window.on('keyboardHeightChange', size => {
                // TODO
                // appLifeCycle.emit('keyboardHeightChange', size)
            });
            windowStage.on('windowStageEvent', (type: OHWindow.WindowStageEventType) => {
                if (this.windowStageEventType === type) {
                    return;
                }
                switch (type) {
                    case OHWindow.WindowStageEventType.SHOWN:
                        this.windowStageEventType = type;
                        this._emitter.emit('onShow');
                        this._emitter.emit('onNewIntent', {
                            appScheme: this.appScheme,
                            appLink: this.appScheme
                        } as LaunchOptions);
                        break;
                    case OHWindow.WindowStageEventType.HIDDEN:
                        this.windowStageEventType = type;
                        this._emitter.emit('onHide');
                        break;
                    default:
                        break;
                }
            });
            window.loadContentByName(TEMPLATE_PAGE_NAME, async (err) => {
                if (err.code) {
                    console.error('loadContent error:', err);
                    return;
                }
                if (!this.isMain) {
                    // 设置为透明背景，以便后续子窗口动画与主窗口交互
                    window.setWindowBackgroundColor('#00000000');
                }
                this.context = window.getUIContext();
                this.context.getFont().registerFont({
                    familyName: 'uni-icon',
                    familySrc: { "id": 0, "type": 30000, params: ['uni-app-x/uni-icon.ttf'], "bundleName": "com.bigScreen.qizhi", "moduleName": "entry" }
                });
                const base = `../../resources/resfile/uni-app-x/apps/${id}/www/import`;
                initVar(globalThis.uni);
                initPages();
                try {
                    const entryAbility = getEntryAbility();
                    await entryAbility!.onImport?.(`${base}/app-config`);
                    await entryAbility!.onImport?.(`${base}/app-service`);
                    // TODO 移除全局 document
                    globalThis.document = this.globalDocument;
                    // TODO 移出全局 __mount__
                    const mount = globalThis.__mount__ as () => void;
                    genApp();
                    mount();
                }
                catch (e) {
                    // TODO 暂时不使用 tag
                    console.error(e);
                }
                if (config?.isMain) {
                    let errorCallback: errorManager.ErrorObserver = {
                        onUnhandledException: (errMsg) => {
                            // ignore
                        },
                        onException: (errorObj) => {
                            // TODO 暂时不使用 tag
                            console.error(errorObj as Object as string);
                        }
                    };
                    errorManager.on('error', errorCallback);
                    this.appStartDuration = Date.now() - getEntryAbility().startTime;
                }
                window.showWindow();
            });
        };
        if (config?.isMain) {
            windowStage.getMainWindow(initWindow);
        }
        else {
            windowStage.createSubWindow(`uni-mp-${id}`, initWindow);
        }
        this.initPrivacyAuthorization();
    }
    onEvent(event: string): void {
        throw new Error('Method not implemented.');
    }
    addEventListener<T>(event: 'onShow' | 'onHide' | 'onExit' | 'onThemeChange' | 'onError' | 'onNewIntent', callback: (event: T) => void): UniCallbackWrapper {
        const callbackWrapper = new UniCallbackWrapper(callback);
        this._emitter.on(event, callback);
        return callbackWrapper;
    }
    removeEventListener(event: string, callbackWrapper: UniCallbackWrapper): void {
        const callback = callbackWrapper.callback;
        this._emitter.off(event, callback);
    }
    addKeyEventListener(event: 'onBackButton', callback: (event: UniKeyEvent) => boolean): void {
        this._emitter.on(event, (event: UniKeyEvent) => {
            const pages = getCurrentPages() as UniPageImpl[];
            const currentPage = pages[pages.length - 1];
            const currentNativePage = currentPage && currentPage.getNativePage();
            if (currentNativePage && currentNativePage.fullscreenElement != null) {
                currentPage.getNativePage().exitFullscreen();
            }
            else {
                callback(event);
            }
        });
    }
    quit(): void {
        // 清理逻辑，除事件外基本自上而下 app -> framework -> core
        clearSafeAreaInsetsChange();
        this._emitter.emit('onExit');
        this._emitter.off('onShow');
        this._emitter.off('onHide');
        this._emitter.off('onExit');
        this._emitter.off('onThemeChange');
        this._emitter.off('onError');
        this._emitter.off('onBackButton');
        try {
            this.windowStage.off('windowStageEvent');
        }
        catch (e) {
            // ignore error
        }
        try {
            this.window.off('keyboardHeightChange');
        }
        catch (e) {
            // ignore error
        }
        this.globalDocument.dispose();
        globalThis.document = undefined;
        clearApp();
        mainApp = null;
        if (this.isMain) {
            getAbilityContext()!.terminateSelf();
        }
        else {
            this.window.destroyWindow();
        }
    }
    getAppStartDuration(): number {
        return this.appStartDuration;
    }
    loadFontFace(options: NativeLoadFontFaceOptions): void {
        registerFont(formatFontFaceSrc(options.source), options, this.context);
    }
    getRedirectInfo(): Map<string, Object> {
        // TODO implement
        return new Map();
    }
    connectResizeObserver(observerId: string, callback?: ((res: Object) => void) | undefined): void {
        throw new Error('Method not implemented.');
    }
    observeResizeObserver(observerId: string, pageId: string, elemId: string): void {
        throw new Error('Method not implemented.');
    }
    unobserveResizeObserver(observerId: string, pageId: string, elemId: string): void {
        throw new Error('Method not implemented.');
    }
    disconnectResizeObserver(observerId: string): void {
        throw new Error('Method not implemented.');
    }
    getLaunchOptionsSync(): LaunchOptions {
        return {
            appScheme: this.appScheme,
            appLink: this.appScheme,
        };
    }
    getAndroidApplication(): Object {
        throw new Error('Method not implemented.');
    }
    private initPrivacyAuthorization() {
        if (getPrivacyAgree()) {
            return;
        }
        let appHarmony: object | null = (this.manifest as object)['app-harmony'];
        if (appHarmony) {
            let privacyValue: string | null = appHarmony['initPrivacyAuthorization'];
            if (privacyValue && privacyValue == 'agree') {
                setPrivacyAgree(true);
            }
            else {
                setPrivacyAgree(false);
            }
        }
    }
}
export function openUniApp(appID: string, config?: IOpenUniAppConfig) {
    const app = new UniNativeAppImpl(appID, config);
    return app;
}
export function closeUniApp() {
    if (mainApp) {
        mainApp.quit();
    }
}
export function getUniApp(): UniNativeAppImpl | null {
    return getMainApp();
}
