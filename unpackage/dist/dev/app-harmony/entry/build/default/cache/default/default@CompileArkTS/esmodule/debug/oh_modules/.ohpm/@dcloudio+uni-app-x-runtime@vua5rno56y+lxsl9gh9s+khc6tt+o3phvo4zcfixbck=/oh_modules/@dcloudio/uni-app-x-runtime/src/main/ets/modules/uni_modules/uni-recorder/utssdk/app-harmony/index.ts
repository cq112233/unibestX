import media from "@ohos:multimedia.media";
import type { BusinessError } from "@ohos:base";
import { UTSObject, UTS, UniError, UTSHarmony, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import fileIo__1 from "@ohos:file.fs";
import fileIo from "@ohos:file.fs";
import { getEnv } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
const API_GET_RECORDER_MANAGER = 'getRecorderManager';
type GetRecorderManager = () => RecorderManager;
class RecorderManagerStartOptions extends UTSObject {
    duration: number | null = null;
    sampleRate: number | null = null;
    numberOfChannels: number | null = null;
    encodeBitRate: number | null = null;
    format: 'aac' | 'mp3' | 'pcm' | 'wav' | 'm4a' | null = null;
    frameSize: number | null = null;
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
type RecorderState = 'pause' | 'resume' | 'start' | 'stop' | 'error' | 'frameRecorded' | 'interruptionBegin' | 'interruptionEnd';
type ErrorCb = (result: IRecorderManagerFail) => void;
interface Callbacks {
    pause?: Function | null;
    resume?: Function | null;
    start?: Function | null;
    stop?: Function | null;
    error?: ErrorCb | null;
    frameRecorded?: Function | null;
    interruptionBegin?: Function | null;
    interruptionEnd?: Function | null;
}
const callbacks: Callbacks = {
    pause: null,
    resume: null,
    start: null,
    stop: null,
    error: null,
    frameRecorded: null,
    interruptionBegin: null,
    interruptionEnd: null
};
function setRecordStateCallback(state: RecorderState, cb: Function | ErrorCb | null = null) {
    switch (state) {
        case 'pause':
            callbacks.pause = cb;
            break;
        case 'resume':
            callbacks.resume = cb;
            break;
        case 'start':
            callbacks.start = cb;
            break;
        case 'stop':
            callbacks.stop = cb;
            break;
        case 'error':
            callbacks.error = cb as ErrorCb;
            break;
        case 'frameRecorded':
            callbacks.frameRecorded = cb;
            break;
        case 'interruptionBegin':
            callbacks.interruptionBegin = cb;
            break;
        case 'interruptionEnd':
            callbacks.interruptionEnd = cb;
            break;
    }
}
function deleteRecordStateCallback(state: RecorderState) {
    setRecordStateCallback(state);
}
interface StateChangeRes extends RecorderManagerOnStopResult {
    errMsg?: string;
    frameBuffer?: ArrayBuffer;
    isLastFrame?: boolean;
    doNotAskAgain?: boolean;
}
function onRecorderStateChange(state: RecorderState, res: StateChangeRes | IRecorderManagerFail | null = null): void {
    switch (state) {
        case 'pause':
            return callbacks.pause?.(res);
        case 'resume':
            return callbacks.resume?.(res);
        case 'start':
            return callbacks.start?.(res);
        case 'stop':
            return callbacks.stop?.(res);
        case 'error':
            return callbacks.error?.(res as IRecorderManagerFail);
        case 'frameRecorded':
            return callbacks.frameRecorded?.(res);
        case 'interruptionBegin':
            return callbacks.interruptionBegin?.(res);
        case 'interruptionEnd':
            return callbacks.interruptionEnd?.(res);
    }
}
function createFile(supportFormats: string[], format: string, defaultExt: string): fileIo.File {
    const TEMP_PATH = getEnv().TEMP_PATH as string;
    const filePath = `${TEMP_PATH}/uni-recorder/`;
    if (!fileIo.accessSync(filePath)) {
        fileIo.mkdirSync(filePath, true);
    }
    const fileName = `${Date.now()}.${supportFormats.includes(format ?? '') ? format?.toLocaleLowerCase() : defaultExt}`;
    const file: fileIo.File = fileIo.openSync(`${filePath}${fileName}`, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
    return file;
}
function transformErrorCode(errCode: number): RecorderManagerErrorCode {
    switch (errCode) {
        case 201:
            return 1107601;
        case 401:
            return 1107606;
        case 5400106:
            return 1107605;
        case 5400107:
            return 1107607;
    }
    return errCode as RecorderManagerErrorCode;
}
const RecorderManagerUniErrorSubject = 'uni-recorder';
const RecorderManagerUniErrors: Map<RecorderManagerErrorCode, string> = new Map([
    [
        1107601,
        'No microphone permissions.'
    ],
    [
        1107602,
        'This sample rate is not supported.'
    ],
    [
        1107603,
        'The sample rate does not match the encoding bitrate.'
    ],
    [
        1107604,
        'Failed to start.'
    ],
    [
        1107605,
        'This audio format is not supported.'
    ],
    [
        1107606,
        'Other errors.'
    ],
    [
        1107607,
        'Audio interrupted.'
    ],
    [
        1107608,
        'Audio is recording.'
    ]
]);
class RecorderManagerFailImpl extends UniError implements IRecorderManagerFail {
    errCode: RecorderManagerErrorCode;
    constructor(errCode: RecorderManagerErrorCode, errMsg: string = '') {
        super();
        this.errSubject = RecorderManagerUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = errMsg != "" ? errMsg : (UTS.mapGet(RecorderManagerUniErrors, errCode) ?? errMsg);
    }
}
type SupportFormat = 'aac' | 'mp3' | 'm4a' | 'wav';
const supportFormats: Array<SupportFormat> = [
    'aac',
    'mp3',
    'm4a',
    'wav'
];
function getAudioCodec(format: SupportFormat): media.CodecMimeType {
    switch (format) {
        case 'aac':
            return media.CodecMimeType.AUDIO_AAC;
        case 'mp3':
            return media.CodecMimeType.AUDIO_MP3;
        case 'm4a':
            return media.CodecMimeType.AUDIO_AAC;
        case 'wav':
            return media.CodecMimeType.AUDIO_G711MU;
        default:
            return media.CodecMimeType.AUDIO_AAC;
    }
}
function getFileFormat(format: SupportFormat): media.ContainerFormatType {
    switch (format) {
        case 'aac':
            return media.ContainerFormatType.CFT_MPEG_4A;
        case 'mp3':
            return media.ContainerFormatType.CFT_MP3;
        case 'm4a':
            return media.ContainerFormatType.CFT_MPEG_4A;
        case 'wav':
            return media.ContainerFormatType.CFT_WAV;
        default:
            return media.ContainerFormatType.CFT_MPEG_4A;
    }
}
class AVRecorder {
    private avRecorder?: media.AVRecorder;
    private isFirstStart: boolean = true;
    constructor() { }
    private onStateChange(file: fileIo__1.File) {
        if (this.avRecorder) {
            this.avRecorder.on('stateChange', async (state, reason) => {
                switch (state) {
                    case 'idle':
                        this.isFirstStart = true;
                        break;
                    case 'started':
                        if (this.isFirstStart) {
                            this.isFirstStart = false;
                            onRecorderStateChange('start');
                        }
                        else {
                            if (reason === media.StateChangeReason.BACKGROUND) {
                                onRecorderStateChange('interruptionEnd');
                            }
                            onRecorderStateChange('resume');
                        }
                        break;
                    case 'paused':
                        if (reason === media.StateChangeReason.BACKGROUND) {
                            onRecorderStateChange('interruptionBegin');
                        }
                        onRecorderStateChange('pause');
                        break;
                    case 'stopped':
                        onRecorderStateChange('stop', {
                            tempFilePath: file.path
                        } as StateChangeRes);
                        fileIo__1.closeSync(file);
                        break;
                }
            });
            this.avRecorder.on('error', (err: BusinessError) => {
                onRecorderStateChange('error', new RecorderManagerFailImpl(transformErrorCode(err.code), err.message) as IRecorderManagerFail);
            });
        }
    }
    private async release(): Promise<void> {
        if (this.avRecorder !== undefined) {
            await this.avRecorder.reset();
            await this.avRecorder.release();
            this.avRecorder = undefined;
        }
    }
    async start(options: RecorderManagerStartOptions): Promise<void> {
        if (this.avRecorder !== undefined) {
            await this.release();
        }
        this.avRecorder = await media.createAVRecorder();
        const _options_sampleRate = options.sampleRate, sampleRate = _options_sampleRate == null ? 8000 : _options_sampleRate, _options_numberOfChannels = options.numberOfChannels, numberOfChannels = _options_numberOfChannels == null ? 2 : _options_numberOfChannels, _options_encodeBitRate = options.encodeBitRate, encodeBitRate = _options_encodeBitRate == null ? 48000 : _options_encodeBitRate, _options_duration = options.duration, duration = _options_duration == null ? 60000 : _options_duration, _options_format = options.format, format = _options_format == null ? 'aac' : _options_format;
        const file = createFile(supportFormats, format!, 'aac');
        this.onStateChange(file);
        const audioProfile: media.AVRecorderProfile = {
            audioBitrate: format === 'wav' ? 64000 : encodeBitRate!,
            audioChannels: format === 'wav' ? 1 : numberOfChannels!,
            audioCodec: getAudioCodec(format! as SupportFormat),
            audioSampleRate: format === 'wav' ? 8000 : sampleRate!,
            fileFormat: getFileFormat(format! as SupportFormat)
        };
        const audioConfig: media.AVRecorderConfig = {
            audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,
            profile: audioProfile,
            url: 'fd://' + file.fd
        };
        return new Promise((resolve, reject) => {
            UTSHarmony.requestSystemPermission([
                'ohos.permission.MICROPHONE'
            ], async (allRight: boolean): Promise<void> => {
                if (allRight) {
                    await this.avRecorder?.prepare(audioConfig);
                    await this.avRecorder?.start();
                    if (duration) {
                        setTimeout(async (): Promise<void> => {
                            await this.avRecorder?.stop();
                        }, duration);
                    }
                    resolve();
                }
                else {
                    onRecorderStateChange('error', new RecorderManagerFailImpl(1107601) as IRecorderManagerFail);
                    reject();
                }
            }, (doNotAskAgain: boolean) => {
                onRecorderStateChange('error', new RecorderManagerFailImpl(1107601) as IRecorderManagerFail);
                reject();
            });
        });
    }
    async pause(): Promise<void> {
        if (this.avRecorder !== undefined && this.avRecorder.state === 'started') {
            await this.avRecorder.pause();
        }
    }
    async resume(): Promise<void> {
        if (this.avRecorder !== undefined && this.avRecorder.state === 'paused') {
            await this.avRecorder.resume();
        }
    }
    async stop(): Promise<void> {
        if (this.avRecorder !== undefined && (this.avRecorder.state === 'started' || this.avRecorder.state === 'paused')) {
            await this.avRecorder.stop();
            await this.release();
            this.isFirstStart = true;
        }
    }
}
let RECORDER_MANAGER: AVRecorder | null = null;
const DEFAULT_FORMAT = 'aac';
class RecorderManagerImpl implements RecorderManager {
    __v_skip: boolean = true;
    start(options: RecorderManagerStartOptions | null = null): void {
        if (options == null)
            options = {} as RecorderManagerStartOptions;
        if (!options.format)
            options.format = DEFAULT_FORMAT;
        if (supportFormats.includes((options.format ?? '') as SupportFormat)) {
            RECORDER_MANAGER = new AVRecorder();
        }
        if (RECORDER_MANAGER) {
            RECORDER_MANAGER.start(options);
        }
        else {
            onRecorderStateChange('error', new RecorderManagerFailImpl(1107605));
        }
    }
    pause(): void {
        if (RECORDER_MANAGER)
            RECORDER_MANAGER.pause();
    }
    resume(): void {
        if (RECORDER_MANAGER)
            RECORDER_MANAGER.resume();
    }
    async stop(): Promise<void> {
        if (RECORDER_MANAGER) {
            try {
                await RECORDER_MANAGER.stop();
            }
            catch (error) { }
            RECORDER_MANAGER = null;
        }
    }
    onStart(options: (result: Object) => void): void {
        setRecordStateCallback('start', options);
    }
    onPause(options: (result: Object) => void): void {
        setRecordStateCallback('pause', options);
    }
    onStop(options: (result: RecorderManagerOnStopResult) => void): void {
        setRecordStateCallback('stop', options);
    }
    onFrameRecorded(options: (result: Object) => void): void {
        setRecordStateCallback('frameRecorded', options);
    }
    onError(options: (result: IRecorderManagerFail) => void): void {
        setRecordStateCallback('error', options);
    }
    onResume(options: (result: Object) => void): void {
        setRecordStateCallback('resume', options);
    }
    onInterruptionBegin(options: (result: Object) => void): void {
        setRecordStateCallback('interruptionBegin', options);
    }
    onInterruptionEnd(options: (result: Object) => void): void {
        setRecordStateCallback('interruptionEnd', options);
    }
    offStart(): void {
        deleteRecordStateCallback('start');
    }
    offPause(): void {
        deleteRecordStateCallback('pause');
    }
    offStop(): void {
        deleteRecordStateCallback('stop');
    }
    offFrameRecorded(): void {
        deleteRecordStateCallback('frameRecorded');
    }
    offError(): void {
        deleteRecordStateCallback('error');
    }
    offResume(): void {
        deleteRecordStateCallback('resume');
    }
    offInterruptionBegin(): void {
        deleteRecordStateCallback('interruptionBegin');
    }
    offInterruptionEnd(): void {
        deleteRecordStateCallback('interruptionEnd');
    }
}
let recorderManager: RecorderManager | null = null;
const getRecorderManager: GetRecorderManager = defineSyncApi<RecorderManager>(API_GET_RECORDER_MANAGER, (): RecorderManager => {
    if (recorderManager)
        return recorderManager;
    else
        recorderManager = new RecorderManagerImpl();
    return recorderManager;
}) as GetRecorderManager;
export { RecorderManagerStartOptions as RecorderManagerStartOptions };
export type { GetRecorderManager as GetRecorderManager, IRecorderManagerFail as IRecorderManagerFail, RecorderManager as RecorderManager, RecorderManagerErrorCode as RecorderManagerErrorCode, RecorderManagerOnStopResult as RecorderManagerOnStopResult };
export { getRecorderManager as getRecorderManager };
