import { FullscreenError as IFullscreenError, FullscreenErrorCode } from '@dcloudio/uni-app-x/types/native';
import { UniEvent } from '../UniEvent';
import { SourceError } from '../../../uni-app-harmony';
export declare class FullscreenError implements IFullscreenError {
    errCode: FullscreenErrorCode;
    errSubject: 'requestFullscreen' | 'exitFullscreen';
    data: ESObject;
    cause: SourceError | null;
    errMsg: string;
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen', errCode: FullscreenErrorCode, errMsg?: string);
}
export declare class AlreadyFullScreenError extends FullscreenError {
    constructor();
}
export declare class ElementNotSupportFullScreenError extends FullscreenError {
    constructor();
}
export declare class NoElementFullScreenError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
export declare class PageNotReadyOrDestroyedError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
export declare class ComponentNotReadyError extends FullscreenError {
    constructor(errSubject: 'requestFullscreen' | 'exitFullscreen');
}
export declare class fullscreenerrorEvent extends UniEvent {
    constructor();
}
