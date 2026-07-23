import { Manifest } from './manifest';
import OHWindow from '@ohos.window';
import { NativeLoadFontFaceOptions, UniKeyEvent, UniNativeApp as IUniNativeApp } from '@dcloudio/uni-app-x/types/native';
import { UniPageManagerImpl } from './dom/UniPageManager';
import { UniCallbackWrapper } from './dom/UniCallbackWrapper';
import { TinyEmitter } from 'tiny-emitter';
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
export declare function getManifest(appID?: string): Manifest;
interface IUserAgent {
    value: string;
    concatenate: boolean;
    fullUserAgent: string;
}
interface LaunchOptions {
    appScheme: string;
    appLink: string;
}
export declare class UniNativeAppImpl implements IUniNativeApp {
    appid: string;
    /**
     * @internal
     */
    manifest: Manifest;
    /**
     * @internal
     */
    window: OHWindow.Window;
    /**
     * @internal
     */
    context: UIContext | null;
    /**
     * @internal
     */
    router: NavPathStack;
    /**
     * @internal
     */
    userAgent: IUserAgent;
    appTheme: string;
    pageManager: UniPageManagerImpl;
    /**
     * @internal
     */
    _emitter: TinyEmitter;
    private appStartDuration;
    private globalDocument;
    private windowStage;
    private isMain;
    appScheme: string;
    /**
     * @internal
     */
    animationType?: AnimationType;
    /**
     * @internal
     */
    animationDuration?: number;
    private windowStageEventType;
    constructor(id: string, config?: IOpenUniAppConfig);
    onEvent(event: string): void;
    addEventListener<T>(event: 'onShow' | 'onHide' | 'onExit' | 'onThemeChange' | 'onError' | 'onNewIntent', callback: (event: T) => void): UniCallbackWrapper;
    removeEventListener(event: string, callbackWrapper: UniCallbackWrapper): void;
    addKeyEventListener(event: 'onBackButton', callback: (event: UniKeyEvent) => boolean): void;
    quit(): void;
    getAppStartDuration(): number;
    loadFontFace(options: NativeLoadFontFaceOptions): void;
    getRedirectInfo(): Map<string, Object>;
    connectResizeObserver(observerId: string, callback?: ((res: Object) => void) | undefined): void;
    observeResizeObserver(observerId: string, pageId: string, elemId: string): void;
    unobserveResizeObserver(observerId: string, pageId: string, elemId: string): void;
    disconnectResizeObserver(observerId: string): void;
    getLaunchOptionsSync(): LaunchOptions;
    getAndroidApplication(): Object;
    private initPrivacyAuthorization;
}
export declare function openUniApp(appID: string, config?: IOpenUniAppConfig): UniNativeAppImpl;
export declare function closeUniApp(): void;
export declare function getUniApp(): UniNativeAppImpl | null;
export {};
