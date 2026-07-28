import type { FullscreenError as IFullscreenError, FullscreenErrorCode } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniEvent&1.0.0";
import { SourceError } from "@normalized:N&&&@dcloudio/uni-app-harmony/index&1.0.0";
export class FullscreenError implements IFullscreenError {
    errCode: FullscreenErrorCode = 106601;
    errSubject: 'requestFullscreen' | 'exitFullscreen' = 'requestFullscreen';
    data: any = {};
    cause: SourceError | null = null;
    errMsg: string = '';
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen', errCode: FullscreenErrorCode, errMsg?: string) {
        this.errCode = errCode;
        this.errSubject = errSubject;
        this.errMsg = errMsg ?? `${errSubject}:fail`;
        this.cause = new SourceError(this.errMsg);
    }
}
enum FullscreenErrorCodeEnum {
    AlreadyFullScreen = 106600,
    ElementNotSupportFullScreen = 106601,
    NoElementFullScreen = 106602,
    PageNotReadyOrDestroyed = 106603,
    ComponentNotReady = 106604
}
export class AlreadyFullScreenError extends FullscreenError {
    constructor() {
        super('requestFullscreen', FullscreenErrorCodeEnum.AlreadyFullScreen, `requestFullscreen:fail Already in fullscreen`);
    }
}
export class ElementNotSupportFullScreenError extends FullscreenError {
    constructor() {
        super('requestFullscreen', FullscreenErrorCodeEnum.ElementNotSupportFullScreen, `requestFullscreen:fail Element does not support fullscreen`);
    }
}
export class NoElementFullScreenError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen') {
        super(errSubject, FullscreenErrorCodeEnum.NoElementFullScreen, `${errSubject}:fail No element is in fullscreen`);
    }
}
export class PageNotReadyOrDestroyedError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen') {
        super(errSubject, FullscreenErrorCodeEnum.PageNotReadyOrDestroyed, `${errSubject}:fail Page is not ready or has been destroyed`);
    }
}
export class ComponentNotReadyError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen') {
        super(errSubject, FullscreenErrorCodeEnum.ComponentNotReady, `${errSubject}:fail Component is not ready`);
    }
}
export class fullscreenerrorEvent extends UniEvent {
    constructor() {
        super('fullscreenerror');
    }
}
