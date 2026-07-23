import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type CreateInnerAudioContext = () => InnerAudioContext;
declare class SetInnerAudioOptionSuccess extends UTSObject {
}
type SetInnerAudioOptionSuccessCallback = (result: SetInnerAudioOptionSuccess) => void;
type SetInnerAudioOptionFail = ICreateInnerAudioContextFail;
type SetInnerAudioOptionFailCallback = (result: SetInnerAudioOptionFail) => void;
type SetInnerAudioOptionComplete = Object;
type SetInnerAudioOptionCompleteCallback = (result: SetInnerAudioOptionComplete) => void;
declare class SetInnerAudioOptionOptions extends UTSObject {
    mixWithOther: boolean | null;
    speakerOn: boolean | null;
    obeyMuteSwitch: boolean | null;
    success: SetInnerAudioOptionSuccessCallback | null;
    fail: SetInnerAudioOptionFailCallback | null;
    complete: SetInnerAudioOptionCompleteCallback | null;
}
type SetInnerAudioOption = (option: SetInnerAudioOptionOptions) => void;
interface InnerAudioContext {
    duration: number;
    currentTime: number;
    paused: boolean;
    src: string;
    startTime: number;
    buffered: number;
    autoplay: boolean;
    loop: boolean;
    obeyMuteSwitch: boolean;
    volume: number;
    playbackRate?: number;
    pause(): void;
    stop(): void;
    play(): void;
    seek(position: number): void;
    destroy(): void;
    onCanplay(callback: (result: Object) => void): void;
    onPlay(callback: (result: Object) => void): void;
    onPause(callback: (result: Object) => void): void;
    onStop(callback: (result: Object) => void): void;
    onEnded(callback: (result: Object) => void): void;
    onTimeUpdate(callback: (result: Object) => void): void;
    onError(callback: (result: ICreateInnerAudioContextFail) => void): void;
    onWaiting(callback: (result: Object) => void): void;
    onSeeking(callback: (result: Object) => void): void;
    onSeeked(callback: (result: Object) => void): void;
    offCanplay(callback: (result: Object) => void): void;
    offPlay(callback: (result: Object) => void): void;
    offPause(callback: (result: Object) => void): void;
    offStop(callback: (result: Object) => void): void;
    offEnded(callback: (result: Object) => void): void;
    offTimeUpdate(callback: (result: Object) => void): void;
    offError(callback: (result: ICreateInnerAudioContextFail) => void): void;
    offWaiting(callback: (result: Object) => void): void;
    offSeeking(callback: (result: Object) => void): void;
    offSeeked(callback: (result: Object) => void): void;
}
type CreateInnerAudioContextErrorCode = 1107601 | 1107602 | 1107603 | 1107604 | 1107605 | 1107609;
interface ICreateInnerAudioContextFail extends IUniError {
    errCode: CreateInnerAudioContextErrorCode;
}
declare const createInnerAudioContext: CreateInnerAudioContext;
declare const setInnerAudioOption: SetInnerAudioOption;
export { CreateInnerAudioContext as CreateInnerAudioContext, CreateInnerAudioContextErrorCode as CreateInnerAudioContextErrorCode, ICreateInnerAudioContextFail as ICreateInnerAudioContextFail, InnerAudioContext as InnerAudioContext, SetInnerAudioOption as SetInnerAudioOption, SetInnerAudioOptionComplete as SetInnerAudioOptionComplete, SetInnerAudioOptionCompleteCallback as SetInnerAudioOptionCompleteCallback, SetInnerAudioOptionFail as SetInnerAudioOptionFail, SetInnerAudioOptionFailCallback as SetInnerAudioOptionFailCallback, SetInnerAudioOptionOptions as SetInnerAudioOptionOptions, SetInnerAudioOptionSuccess as SetInnerAudioOptionSuccess, SetInnerAudioOptionSuccessCallback as SetInnerAudioOptionSuccessCallback };
export { createInnerAudioContext as createInnerAudioContext };
export { setInnerAudioOption as setInnerAudioOption };
