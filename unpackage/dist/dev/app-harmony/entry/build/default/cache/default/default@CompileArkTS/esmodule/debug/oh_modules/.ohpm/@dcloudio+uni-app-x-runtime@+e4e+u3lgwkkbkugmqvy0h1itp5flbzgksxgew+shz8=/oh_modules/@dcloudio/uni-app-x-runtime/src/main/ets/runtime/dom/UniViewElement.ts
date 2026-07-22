import type { UniViewElement as IUniViewElement, RequestFullscreenOptions, ExitFullscreenFailCallback, ExitFullscreenOptions } from '@dcloudio/uni-app-x/types/native';
import { UniHoverElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniHoverElement&1.0.0";
import display from "@ohos:display";
import { FrameNode } from "@ohos:arkui.node";
import window from "@ohos:window";
import { DrawableContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/DrawableContext&1.0.0";
import { fullscreenchangeEvent, AlreadyFullScreenError, NoElementFullScreenError, PageNotReadyOrDestroyedError, ComponentNotReadyError, fullscreenerrorEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElementRequestFullscreen/index&1.0.0";
import type { FullscreenError } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElementRequestFullscreen/index&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import { UniCssFlexEdge, UniCssPositionType } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { DEFAULT_TRANSFORM } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/css&1.0.0";
export type RequestFullscreenOrientation = 'auto' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait';
type fullscreenchangeCallback = (event: fullscreenchangeEvent) => void;
export class UniViewElementImpl<T extends FrameNode | null = FrameNode | null> extends UniHoverElementImpl<T> implements IUniViewElement {
    static skipDefaultFrameNodeStyle = true;
    private _drawableContext: DrawableContext | null = null;
    private fullscreenchangeCallbacks: fullscreenchangeCallback[] = [];
    private fullscreenerrorCallbacks: ExitFullscreenFailCallback[] = [];
    protected requestFullscreenOptions: RequestFullscreenOptions = {
        success: null,
        fail: null,
        complete: null
    };
    constructor() {
        super();
    }
    protected override createFrameNode(): T {
        const view = new FrameNode(this.app.context!);
        view.commonAttribute
            .clip(true)
            .transform(DEFAULT_TRANSFORM as Object as object)
            .opacity(1);
        return view as Object as T;
    }
    override checkLayout() {
        const hasNewLayout = this.layoutNode.hasNewLayout();
        super.checkLayout();
        if (hasNewLayout) {
            this._updateDrawableContextSizeIfNeed();
        }
    }
    getDrawableContext(): DrawableContext {
        if (this._drawableContext == null) {
            this._drawableContext = new DrawableContext();
            this._updateDrawableContextSizeIfNeed();
            this.frameNode!.getRenderNode()?.appendChild(this._drawableContext);
        }
        return this._drawableContext;
    }
    private _updateDrawableContextSizeIfNeed() {
        if (this._drawableContext != null) {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            this._drawableContext.size = { width, height };
        }
    }
    protected setNavigation(status: 'show' | 'hide') {
        const appWindow = getUniApp()?.window;
        if (status === 'show') {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                appWindow?.setSpecificSystemBarEnabled('navigation', true);
                appWindow?.setSpecificSystemBarEnabled('navigationIndicator', true);
            }
            else {
                appWindow?.setWindowSystemBarEnable(['navigation']);
            }
        }
        else {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                appWindow?.setSpecificSystemBarEnabled('navigation', false);
                appWindow?.setSpecificSystemBarEnabled('navigationIndicator', false);
            }
            else {
                appWindow?.setWindowSystemBarEnable([]);
            }
        }
    }
    protected resolveIsFullscreenFrameNode(options?: RequestFullscreenOptions | null): Promise<void> {
        const appWindow = getUniApp()!.window;
        if (options?.navigationUI) {
            this.requestFullscreenOptions.navigationUI = options.navigationUI;
        }
        else {
            this.requestFullscreenOptions.navigationUI = 'hide';
        }
        if (options?.orientation) {
            this.requestFullscreenOptions.orientation = options.orientation;
        }
        else {
            this.requestFullscreenOptions.orientation = 'landscape';
        }
        let orientation: window.Orientation = window.Orientation.PORTRAIT;
        switch (this.requestFullscreenOptions.orientation) {
            case 'auto':
                if (canIUse('SystemCapability.Window.SessionManager')) {
                    orientation = window.Orientation.AUTO_ROTATION_UNSPECIFIED;
                }
                else {
                    orientation = window.Orientation.AUTO_ROTATION_RESTRICTED;
                }
                break;
            case 'landscape':
                orientation = window.Orientation.AUTO_ROTATION_LANDSCAPE_RESTRICTED;
                break;
            case 'landscape-primary':
                orientation = window.Orientation.LANDSCAPE;
                break;
            case 'landscape-secondary':
                orientation = window.Orientation.LANDSCAPE_INVERTED;
                break;
            case 'portrait':
                orientation = window.Orientation.PORTRAIT;
                break;
        }
        if (this.requestFullscreenOptions.orientation === 'portrait') {
            if (canIUse('SystemCapability.Window.SessionManager')) {
                appWindow.disableLandscapeMultiWindow();
            }
        }
        else {
            if (this.isFullscreen) {
                if (canIUse('SystemCapability.Window.SessionManager')) {
                    appWindow.enableLandscapeMultiWindow();
                }
            }
        }
        return appWindow.setPreferredOrientation(orientation).then(() => new Promise((resolve) => {
            setTimeout(() => {
                appWindow.setWindowSystemBarEnable([]);
                switch (this.requestFullscreenOptions.navigationUI) {
                    case 'auto':
                    case 'show':
                        this.setNavigation('show');
                        break;
                    case 'hide':
                        this.setNavigation('hide');
                        break;
                }
                this.setFullscreenFrameNodeStyle();
                this.page.requestFullscreen();
                resolve();
            }, 20);
        }));
    }
    private resolveFullscreenFrameNode(options?: RequestFullscreenOptions | ExitFullscreenOptions | null, successCallback?: () => void, failCallback?: (error: FullscreenError) => void) {
        let frameNode = this.frameNode as FrameNode;
        if (frameNode) {
            let fullscreenLayerOrParent = frameNode.getParent();
            let pageFullscreenFrameNode: FrameNode | null = null;
            if (fullscreenLayerOrParent && !this.isFullscreen) {
                pageFullscreenFrameNode = fullscreenLayerOrParent.getParent();
            }
            if (fullscreenLayerOrParent) {
                fullscreenLayerOrParent.removeChild(frameNode);
                this.addFrameNode(frameNode);
                if (this.isFullscreen) {
                    this.resolveIsFullscreenFrameNode(options)
                        .then(successCallback)
                        .catch(() => {
                        failCallback?.(new PageNotReadyOrDestroyedError('requestFullscreen'));
                    });
                }
                else {
                    pageFullscreenFrameNode?.removeChild(fullscreenLayerOrParent);
                }
                return true;
            }
        }
        failCallback?.(new PageNotReadyOrDestroyedError(this.isFullscreen ? 'requestFullscreen' : 'exitFullscreen'));
        return false;
    }
    private resetLayoutSize(width: number, height: number) {
        if (this.requestFullscreenOptions.orientation === 'auto') {
            this.layoutNode['setStyleWidth'](width);
            this.layoutNode['setStyleHeight'](height);
        }
        else if (this.requestFullscreenOptions.orientation === 'portrait') {
            if (width < height) {
                this.layoutNode['setStyleWidth'](width);
                this.layoutNode['setStyleHeight'](height);
            }
            else {
                this.layoutNode['setStyleWidth'](height);
                this.layoutNode['setStyleHeight'](width);
            }
        }
        else {
            if (width < height) {
                this.layoutNode['setStyleWidth'](height);
                this.layoutNode['setStyleHeight'](width);
            }
            else {
                this.layoutNode['setStyleWidth'](width);
                this.layoutNode['setStyleHeight'](height);
            }
        }
    }
    private fullscreenFrameNodeOnWindowSizeChange() {
        const appWindow = getUniApp()?.window;
        if (!appWindow) {
            return;
        }
        const setLayout = (size: Size) => {
            if (this.isFullscreen) {
                const width = px2vp(size.width);
                const height = px2vp(size.height);
                this.resetLayoutSize(width, height);
            }
            else {
                appWindow.off('windowSizeChange', setLayout);
            }
        };
        appWindow.on('windowSizeChange', setLayout);
    }
    private setFullscreenFrameNodeStyle() {
        const appWindow = getUniApp()!.window;
        const frameNode = this.frameNode;
        if (frameNode) {
            frameNode.commonAttribute.position({ x: 0, y: 0 } as Position);
            this.layoutNode['setStylePositionType'](UniCssPositionType.Fixed);
            this.layoutNode['setStylePosition'](UniCssFlexEdge.Top, 0);
            this.layoutNode['setStylePosition'](UniCssFlexEdge.Bottom, 0);
            this.layoutNode['setStylePosition'](UniCssFlexEdge.Left, 0);
            this.layoutNode['setStylePosition'](UniCssFlexEdge.Right, 0);
            this.layoutNode['setStyleMargin'](UniCssFlexEdge.Top, 0);
            this.layoutNode['setStyleMargin'](UniCssFlexEdge.Bottom, 0);
            this.layoutNode['setStyleMargin'](UniCssFlexEdge.Left, 0);
            this.layoutNode['setStyleMargin'](UniCssFlexEdge.Right, 0);
            if (!(this.fullscreenLayoutCache.has('setStyleWidth') ||
                this.fullscreenLayoutCache.has('setStyleWidthPercent'))) {
                this.fullscreenLayoutCache.set('setStyleWidth', { key: 'setStyleWidth', args: [this.layoutNode.getLayoutWidth()] });
            }
            if (!(this.fullscreenLayoutCache.has('setStyleHeight') ||
                this.fullscreenLayoutCache.has('setStyleHeightPercent'))) {
                this.fullscreenLayoutCache.set('setStyleHeight', { key: 'setStyleHeight', args: [this.layoutNode.getLayoutHeight()] });
            }
            if (['portrait', 'auto'].includes(this.requestFullscreenOptions.orientation as string)) {
                const displayWidth = display.getDefaultDisplaySync().width;
                const displayHeight = display.getDefaultDisplaySync().height;
                const width = px2vp(displayWidth);
                const height = px2vp(displayHeight);
                this.resetLayoutSize(width, height);
                if (this.requestFullscreenOptions.orientation === 'auto') {
                    this.fullscreenFrameNodeOnWindowSizeChange();
                }
                this.page.document.requestRenderQueue();
            }
            else {
                const setLayout = (size: Size) => {
                    if (this.isFullscreen) {
                        const width = px2vp(size.width);
                        const height = px2vp(size.height);
                        this.resetLayoutSize(width, height);
                    }
                    else {
                        appWindow.off('windowSizeChange', setLayout);
                    }
                };
                appWindow.on('windowSizeChange', setLayout);
            }
        }
    }
    protected requestFullscreenError() {
        this.isFullscreen = false;
        this.page.fullscreenElement = null;
        this.exitFullscreenResetStyle();
    }
    requestFullscreen(options: RequestFullscreenOptions | null) {
        if (this.page.fullscreenElement) {
            const fullscreenError = new AlreadyFullScreenError();
            options?.fail?.(fullscreenError);
            this.callFullscreenerrorCallbacks(fullscreenError);
            return;
        }
        if (this.isFullscreen) {
            options?.fail?.(new AlreadyFullScreenError());
            options?.complete?.({});
            return;
        }
        this.isFullscreen = true;
        const frameNode = this.frameNode;
        if (frameNode) {
            this.resolveFullscreenFrameNode(options, () => {
                options?.success?.();
                options?.complete?.({});
                this.callFullscreenchangeCallbacks();
            }, (error) => {
                this.requestFullscreenError();
                options?.fail?.(error);
                options?.complete?.({});
                this.callFullscreenerrorCallbacks(error);
            });
        }
        else {
            const error = new PageNotReadyOrDestroyedError('requestFullscreen');
            this.requestFullscreenError();
            options?.fail?.(error);
            options?.complete?.({});
            this.callFullscreenerrorCallbacks(error);
        }
    }
    fullscreenchange(callback: fullscreenchangeCallback) {
        this.fullscreenchangeCallbacks.push(callback);
    }
    protected callFullscreenchangeCallbacks() {
        const event = new fullscreenchangeEvent();
        this.dispatchEvent(event.type, event);
        this.fullscreenchangeCallbacks.forEach((callback) => {
            callback(event);
        });
    }
    fullscreenerror(callback: ExitFullscreenFailCallback) {
        this.fullscreenerrorCallbacks.push(callback);
    }
    protected callFullscreenerrorCallbacks(error?: FullscreenError | string) {
        const event = new fullscreenerrorEvent();
        this.dispatchEvent(event.type, event);
        if (typeof error === 'string' || typeof error === 'undefined') {
            error = new ComponentNotReadyError(this.isFullscreen ? 'requestFullscreen' : 'exitFullscreen');
        }
        this.fullscreenerrorCallbacks.forEach((callback) => {
            callback(error as FullscreenError);
        });
    }
    protected exitFullscreenResetStyle() {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            getUniApp()?.window.setSpecificSystemBarEnabled('navigationIndicator', true);
        }
        if (!this.fullscreenLayoutCache.has('setStylePositionType')) {
            this.layoutNode['setStylePositionType'](UniCssPositionType.Relative);
            this.checkPosition(false);
        }
        Array.from(this.fullscreenLayoutCache.keys()).forEach((method) => {
            if (method === 'setStylePositionType' &&
                this.fullscreenLayoutCache.get('setStylePositionType')?.args[0] !== UniCssPositionType.Fixed) {
                this.checkPosition(false);
            }
            const item = this.fullscreenLayoutCache.get(method);
            if (item) {
                this.updateLayoutNodeStyle(item.key, method, ...item.args);
            }
        });
        this.frameNode?.commonAttribute.position(this.nativeStyleCache.position);
        if (canIUse('SystemCapability.Window.SessionManager') && this.app) {
            this.app.window.setSpecificSystemBarEnabled('navigation', true);
            this.app.window.setSpecificSystemBarEnabled('navigationIndicator', true);
        }
        this.page && this.page.setHideStatusBar(this.page.getPageStyle().toMap());
    }
    _exitFullscreen(options?: ExitFullscreenOptions | null): boolean | void {
        if (!this.isFullscreen) {
            options?.fail?.(new NoElementFullScreenError('exitFullscreen'));
            options?.complete?.({});
            return;
        }
        this.isFullscreen = false;
        const status = this.resolveFullscreenFrameNode(options);
        this.exitFullscreenResetStyle();
        status && this.callFullscreenchangeCallbacks();
        this.setNavigation('show');
        return status;
    }
}
