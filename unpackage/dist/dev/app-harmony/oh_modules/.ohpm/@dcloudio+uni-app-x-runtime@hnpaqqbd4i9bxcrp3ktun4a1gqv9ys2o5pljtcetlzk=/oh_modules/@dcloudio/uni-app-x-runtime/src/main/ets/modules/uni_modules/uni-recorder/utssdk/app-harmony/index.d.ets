import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type GetRecorderManager = () => RecorderManager;
declare class RecorderManagerStartOptions extends UTSObject {
    duration: number | null;
    sampleRate: number | null;
    numberOfChannels: number | null;
    encodeBitRate: number | null;
    format: 'aac' | 'mp3' | 'pcm' | 'wav' | 'm4a' | null;
    frameSize: number | null;
}
interface RecorderManagerOnStopResult {
    tempFilePath: string;
}
interface RecorderManager {
    start(options: RecorderManagerStartOptions): void;
    pause(): void;
    resume(): void;
    stop(): void;
    onStart(options: (result: Object) => void): void;
    offStart(): void;
    onPause(options: (result: Object) => void): void;
    offPause(): void;
    onStop(options: (result: RecorderManagerOnStopResult) => void): void;
    offStop(): void;
    onFrameRecorded(options: (result: Object) => void): void;
    offFrameRecorded(): void;
    onError(options: (result: IRecorderManagerFail) => void): void;
    offError(): void;
    onResume(options: (result: Object) => void): void;
    offResume(): void;
    onInterruptionBegin(options: (result: Object) => void): void;
    offInterruptionBegin(): void;
    onInterruptionEnd(options: (result: Object) => void): void;
    offInterruptionEnd(): void;
}
type RecorderManagerErrorCode = 1107601 | 1107602 | 1107603 | 1107604 | 1107605 | 1107606 | 1107607 | 1107608;
interface IRecorderManagerFail extends IUniError {
    errCode: RecorderManagerErrorCode;
}
declare const getRecorderManager: GetRecorderManager;
export { GetRecorderManager as GetRecorderManager, IRecorderManagerFail as IRecorderManagerFail, RecorderManager as RecorderManager, RecorderManagerErrorCode as RecorderManagerErrorCode, RecorderManagerOnStopResult as RecorderManagerOnStopResult, RecorderManagerStartOptions as RecorderManagerStartOptions };
export { getRecorderManager as getRecorderManager };
