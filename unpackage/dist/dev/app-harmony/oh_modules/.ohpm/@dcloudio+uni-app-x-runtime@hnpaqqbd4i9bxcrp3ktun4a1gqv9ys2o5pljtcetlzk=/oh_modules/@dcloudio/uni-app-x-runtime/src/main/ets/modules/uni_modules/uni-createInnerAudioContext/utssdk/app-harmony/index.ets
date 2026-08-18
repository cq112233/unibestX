import deviceInfo from '@ohos.deviceInfo';
import { BusinessError } from '@ohos.base';
import { UTSObject, onError, IUniError, ApiOptions, ProtocolOptions, UTS, defineSyncApi, defineAsyncApi, ApiExecutor, ApiError } from "@dcloudio/uni-app-framework";
import { audio } from '@kit.AudioKit';
import { fileIo } from '@kit.CoreFileKit';
import { getRealPath } from "@dcloudio/uni-app-framework";
import { media } from '@kit.MediaKit';
type CreateInnerAudioContext = () => InnerAudioContext;
class SetInnerAudioOptionSuccess extends UTSObject {
}
type SetInnerAudioOptionSuccessCallback = (result: SetInnerAudioOptionSuccess) => void;
type SetInnerAudioOptionFail = ICreateInnerAudioContextFail;
type SetInnerAudioOptionFailCallback = (result: SetInnerAudioOptionFail) => void;
type SetInnerAudioOptionComplete = Object;
type SetInnerAudioOptionCompleteCallback = (result: SetInnerAudioOptionComplete) => void;
class SetInnerAudioOptionOptions extends UTSObject {
    mixWithOther: boolean | null = null;
    speakerOn: boolean | null = null;
    obeyMuteSwitch: boolean | null = null;
    success: SetInnerAudioOptionSuccessCallback | null = null;
    fail: SetInnerAudioOptionFailCallback | null = null;
    complete: SetInnerAudioOptionCompleteCallback | null = null;
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
const API_CREATE_INNER_AUDIO_CONTEXT = 'createInnerAudioContext';
const API_SET_INNER_AUDIO_OPTION = 'setInnerAudioOption';
const SetInnerAudioOptionOptionsOptions: ApiOptions<SetInnerAudioOptionOptions> = {
    formatArgs: new Map<string, boolean>([
        [
            'mixWithOther',
            true
        ],
        [
            'speakerOn',
            true
        ]
    ])
};
const SetInnerAudioOptionProtocol = new Map<string, ProtocolOptions>([
    [
        'mixWithOther',
        {
            type: 'boolean'
        }
    ],
    [
        'speakerOn',
        {
            type: 'boolean'
        }
    ]
]);
function isFileUri(path: string): boolean | "" {
    return path && typeof path === 'string' && (path.startsWith('file://') || path.startsWith('datashare://'));
}
function isSandboxPath(path: string): boolean | "" {
    return path && typeof path === 'string' && path.startsWith('/data/storage/');
}
function getFdFromUriOrSandBoxPath(uri: string): number {
    try {
        const file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);
        return file.fd;
    } catch (error) {
        UTS.console.info(`[AdvancedAPI] Can not get file from uri: ${uri} `);
    }
    throw new Error('file is not exist');
}
function callCallbacks(callbacks: Function[], ...args: Object[]) {
    callbacks.forEach((cb)=>{
        typeof cb === 'function' && cb(...args);
    });
}
function remoteCallback(callbacks: Function[], callback: Function) {
    const index = callbacks.indexOf(callback);
    if (index > -1) {
        callbacks.splice(index, 1);
    }
}
class AudioPlayerError {
    errMsg: string;
    errCode: number;
    constructor(errMsg: string, errCode: number){
        this.errMsg = errMsg;
        this.errCode = errCode;
    }
}
class AudioPlayerCallback {
    onCanplayCallbacks: Function[] = [];
    onPlayCallbacks: Function[] = [];
    onPauseCallbacks: Function[] = [];
    onStopCallbacks: Function[] = [];
    onEndedCallbacks: Function[] = [];
    onTimeUpdateCallbacks: Function[] = [];
    onErrorCallbacks: Function[] = [];
    onWaitingCallbacks: Function[] = [];
    onSeekingCallbacks: Function[] = [];
    onSeekedCallbacks: Function[] = [];
    constructor(){}
    canPlay() {
        callCallbacks(this.onCanplayCallbacks);
    }
    onCanplay(callback: Function) {
        this.onCanplayCallbacks.push(callback);
    }
    offCanplay(callback: Function) {
        remoteCallback(this.onCanplayCallbacks, callback);
    }
    play() {
        callCallbacks(this.onPlayCallbacks);
    }
    onPlay(callback: Function) {
        this.onPlayCallbacks.push(callback);
    }
    offPlay(callback: Function) {
        remoteCallback(this.onPlayCallbacks, callback);
    }
    pause() {
        callCallbacks(this.onPauseCallbacks);
    }
    onPause(callback: Function) {
        this.onPauseCallbacks.push(callback);
    }
    offPause(callback: Function) {
        remoteCallback(this.onPauseCallbacks, callback);
    }
    stop() {
        callCallbacks(this.onStopCallbacks);
    }
    onStop(callback: Function) {
        this.onStopCallbacks.push(callback);
    }
    offStop(callback: Function) {
        remoteCallback(this.onStopCallbacks, callback);
    }
    ended() {
        callCallbacks(this.onEndedCallbacks);
    }
    onEnded(callback: Function) {
        this.onEndedCallbacks.push(callback);
    }
    offEnded(callback: Function) {
        remoteCallback(this.onEndedCallbacks, callback);
    }
    timeUpdate(time: number) {
        callCallbacks(this.onTimeUpdateCallbacks, time);
    }
    onTimeUpdate(callback: Function) {
        this.onTimeUpdateCallbacks.push(callback);
    }
    offTimeUpdate(callback: Function) {
        remoteCallback(this.onTimeUpdateCallbacks, callback);
    }
    error(res: AudioPlayerError) {
        callCallbacks(this.onErrorCallbacks, res);
    }
    onError(callback: Function) {
        this.onErrorCallbacks.push(callback);
    }
    offError(callback: Function) {
        remoteCallback(this.onErrorCallbacks, callback);
    }
    onPrev(callback: Function) {
        UTS.console.info('ios only');
    }
    onNext(callback: Function) {
        UTS.console.info('ios only');
    }
    waiting() {
        callCallbacks(this.onWaitingCallbacks);
    }
    onWaiting(callback: Function) {
        this.onWaitingCallbacks.push(callback);
    }
    offWaiting(callback: Function) {
        remoteCallback(this.onWaitingCallbacks, callback);
    }
    seeking() {
        callCallbacks(this.onSeekingCallbacks);
    }
    onSeeking(callback: Function) {
        this.onSeekingCallbacks.push(callback);
    }
    offSeeking(callback: Function) {
        remoteCallback(this.onSeekingCallbacks, callback);
    }
    seeked() {
        callCallbacks(this.onSeekedCallbacks);
    }
    onSeeked(callback: Function) {
        this.onSeekedCallbacks.push(callback);
    }
    offSeeked(callback: Function) {
        remoteCallback(this.onSeekedCallbacks, callback);
    }
}
const AUDIOS: Record<string, InnerAudioContext | undefined> = {};
const AUDIO_PLAYERS: Record<string, media.AudioPlayer | undefined> = {};
const LOG = (msg: string): void =>UTS.console.log(`[createInnerAudioContext]: ${msg}`);
class STATE_TYPE {
    static IDLE: string = 'idle';
    static PLAYING: string = 'playing';
    static PAUSED: string = 'paused';
    static STOPPED: string = 'stopped';
    static ERROR: string = 'error';
}
class AudioPlayer implements InnerAudioContext {
    __v_skip: boolean = true;
    private audioPlayerCallback: AudioPlayerCallback = new AudioPlayerCallback();
    private _volume: number = 1;
    private _src: string = '';
    private _autoplay: boolean = false;
    private _startTime: number = 0;
    private _buffered: number = 0;
    private _title: string = '';
    private audioId: string = '';
    private _playbackRate: number = 1;
    private _dataloaded: boolean = false;
    readonly obeyMuteSwitch: boolean = false;
    constructor(audioId: string){
        this.audioId = audioId;
        this.init();
    }
    init() {
        AUDIO_PLAYERS[this.audioId]?.on('dataLoad', ()=>{
            this._dataloaded = true;
            this.audioPlayerCallback.canPlay();
        });
        AUDIO_PLAYERS[this.audioId]?.on('play', ()=>{
            this.audioPlayerCallback.play();
        });
        AUDIO_PLAYERS[this.audioId]?.on('pause', ()=>{
            this.audioPlayerCallback.pause();
        });
        AUDIO_PLAYERS[this.audioId]?.on('finish', ()=>{
            this.audioPlayerCallback.ended();
        });
        AUDIO_PLAYERS[this.audioId]?.on('timeUpdate', (res)=>{
            this.audioPlayerCallback.timeUpdate(res / 1000);
        });
        AUDIO_PLAYERS[this.audioId]?.on('error', (err)=>{
            this.audioPlayerCallback.error(new AudioPlayerError(err.message, err.code));
        });
        AUDIO_PLAYERS[this.audioId]?.on('bufferingUpdate', (infoType, value)=>{
            switch(infoType){
                case media.BufferingInfoType.BUFFERING_START:
                    this.audioPlayerCallback.waiting();
                    break;
                case media.BufferingInfoType.BUFFERING_END:
                    if (this._dataloaded) {
                        this.audioPlayerCallback.canPlay();
                    }
                    break;
                case media.BufferingInfoType.BUFFERING_PERCENT:
                    break;
                case media.BufferingInfoType.CACHED_DURATION:
                    this._buffered = value;
                    break;
            }
        });
        AUDIO_PLAYERS[this.audioId]?.on('audioInterrupt', (InterruptEvent)=>{
            if (AUDIO_PLAYERS[this.audioId] && InterruptEvent.hintType === audio.InterruptHint.INTERRUPT_HINT_PAUSE) {
                AUDIO_PLAYERS[this.audioId]!.pause();
            }
        });
    }
    get duration() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return 0;
        }
        return audioPlayer.duration / 1000;
    }
    get currentTime() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return 0;
        }
        return audioPlayer.currentTime / 1000;
    }
    get paused() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return false;
        }
        return audioPlayer.state === STATE_TYPE.PAUSED;
    }
    get loop() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return false;
        }
        return audioPlayer.loop;
    }
    set loop(value) {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (audioPlayer) {
            audioPlayer.loop = value;
        }
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (audioPlayer) {
            this._volume = value;
            audioPlayer.setVolume(value);
        }
    }
    get src() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return '';
        }
        return audioPlayer.src;
    }
    set src(value) {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (typeof value !== 'string') {
            this.audioPlayerCallback.error(new AudioPlayerError(`set src: ${value} is not string`, 10004));
            return;
        }
        if (!audioPlayer) {
            this.audioPlayerCallback.error(new AudioPlayerError(`player is not exist`, 10001));
            return;
        }
        value = getRealPath(value);
        if (value.startsWith('/')) {
            value = `file://${value}`;
        }
        if (!value || !(value.startsWith('http:') || value.startsWith('https:') || isFileUri(value) || isSandboxPath(value))) {
            LOG(`set src: ${value} is invalid`);
            return;
        }
        let path: string = '';
        if (value.startsWith('http:') || value.startsWith('https:')) {
            path = value;
        } else if (isFileUri(value) || isSandboxPath(value)) {
            try {
                const fd = getFdFromUriOrSandBoxPath(value);
                path = `fd://${fd}`;
            } catch (error) {
                UTS.console.error(`${UTS.JSON.stringify(error)}`);
            }
        }
        if (audioPlayer.src && path !== audioPlayer.src) {
            audioPlayer.reset();
        }
        AUDIO_PLAYERS[this.audioId]!.src = path;
        this._src = value;
        if (this._autoplay) {
            audioPlayer.play();
            if (this._startTime) {
                audioPlayer.seek(this._startTime);
            }
        }
    }
    get startTime() {
        return this._startTime / 1000;
    }
    set startTime(time: number) {
        this._startTime = time * 1000;
    }
    get autoplay() {
        return this._autoplay;
    }
    set autoplay(flag) {
        this._autoplay = flag;
    }
    get buffered() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) return 0;
        return this._buffered / 1000;
    }
    set playbackRate(rate: number) {
        this.audioPlayerCallback.error(new AudioPlayerError('HarmonyOS Next Audio setting playbackRate is not supported.', -1));
    }
    get playbackRate() {
        return this._playbackRate;
    }
    play() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return;
        }
        const state = audioPlayer.state ?? '';
        if (![
            STATE_TYPE.PAUSED,
            STATE_TYPE.STOPPED,
            STATE_TYPE.IDLE
        ].includes(state)) {
            return;
        }
        if (this._src && audioPlayer.src === '') {
            this.src = this._src;
        }
        audioPlayer.play();
    }
    pause() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return;
        }
        const state = audioPlayer.state;
        if (STATE_TYPE.PLAYING !== state) {
            return;
        }
        audioPlayer.pause();
    }
    stop() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return;
        }
        if (![
            STATE_TYPE.PAUSED,
            STATE_TYPE.PLAYING
        ].includes(audioPlayer.state)) {
            return;
        }
        audioPlayer.stop();
        audioPlayer.reset();
        audioPlayer.src = this.src;
        this.audioPlayerCallback.stop();
    }
    seek(position: number) {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return;
        }
        const state = audioPlayer.state;
        if (![
            STATE_TYPE.PAUSED,
            STATE_TYPE.PLAYING,
            STATE_TYPE.IDLE
        ].includes(state)) {
            return;
        }
        this.audioPlayerCallback.seeking();
        audioPlayer.seek(position * 1000);
        this.audioPlayerCallback.seeked();
    }
    destroy() {
        const audioPlayer = AUDIO_PLAYERS[this.audioId];
        if (!audioPlayer) {
            return;
        }
        audioPlayer.release();
        AUDIO_PLAYERS[this.audioId] = undefined;
        AUDIOS[this.audioId] = undefined;
    }
    onCanplay(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onCanplay(callback);
    }
    onPlay(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onPlay(callback);
    }
    onPause(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onPause(callback);
    }
    onStop(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onStop(callback);
    }
    onEnded(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onEnded(callback);
    }
    onTimeUpdate(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onTimeUpdate(callback);
    }
    onError(callback: (result: ICreateInnerAudioContextFail) => void): void {
        this.audioPlayerCallback.onError(callback);
    }
    onWaiting(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onWaiting(callback);
    }
    onSeeking(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onSeeking(callback);
    }
    onSeeked(callback: (result: Object) => void): void {
        this.audioPlayerCallback.onSeeked(callback);
    }
    offCanplay(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offCanplay(callback);
    }
    offPlay(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offPlay(callback);
    }
    offPause(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offPause(callback);
    }
    offStop(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offStop(callback);
    }
    offEnded(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offEnded(callback);
    }
    offTimeUpdate(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offTimeUpdate(callback);
    }
    offError(callback: (result: ICreateInnerAudioContextFail) => void): void {
        this.audioPlayerCallback.offError(callback);
    }
    offWaiting(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offWaiting(callback);
    }
    offSeeking(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offSeeking(callback);
    }
    offSeeked(callback: (result: Object) => void): void {
        this.audioPlayerCallback.offSeeked(callback);
    }
}
function createAudioInstance(): string {
    const audioId = `${Date.now()}${Math.random()}`;
    AUDIO_PLAYERS[audioId] = media.createAudioPlayer();
    AUDIOS[audioId] = new AudioPlayer(audioId);
    return audioId;
}
const createInnerAudioContext: CreateInnerAudioContext = defineSyncApi<InnerAudioContext>(API_CREATE_INNER_AUDIO_CONTEXT, ()=>{
    const audioId = createAudioInstance();
    return AUDIOS[audioId];
}) as CreateInnerAudioContext;
const setInnerAudioOption: SetInnerAudioOption = defineAsyncApi<SetInnerAudioOptionOptions, SetInnerAudioOptionSuccess>(API_SET_INNER_AUDIO_OPTION, async (options: SetInnerAudioOptionOptions, res: ApiExecutor<SetInnerAudioOptionSuccess>): Promise<void> =>{
    try {
        let _options_speakerOn = options.speakerOn, speakerOn = _options_speakerOn == null ? true : _options_speakerOn, _options_mixWithOther = options.mixWithOther, mixWithOther = _options_mixWithOther == null ? true : _options_mixWithOther;
        const audioManager = audio.getAudioManager();
        const sessionManager = audioManager.getSessionManager();
        if (deviceInfo.sdkApiVersion >= 20) {
            if (speakerOn) {
                await (sessionManager as ESObject).setDefaultOutputDevice(audio.DeviceType.SPEAKER);
                mixWithOther = false;
            } else {
                await (sessionManager as ESObject).setDefaultOutputDevice(audio.DeviceType.EARPIECE);
            }
        }
        await sessionManager.activateAudioSession({
            concurrencyMode: mixWithOther ? audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS : audio.AudioConcurrencyMode.CONCURRENCY_PAUSE_OTHERS
        } as audio.AudioSessionStrategy);
        res.resolve({} as SetInnerAudioOptionSuccess);
    } catch (error) {
        res.reject((error as BusinessError).message, {
            errCode: (error as BusinessError).code
        } as ApiError);
    }
}, SetInnerAudioOptionProtocol, SetInnerAudioOptionOptionsOptions) as SetInnerAudioOption;
export { CreateInnerAudioContext as CreateInnerAudioContext, CreateInnerAudioContextErrorCode as CreateInnerAudioContextErrorCode, ICreateInnerAudioContextFail as ICreateInnerAudioContextFail, InnerAudioContext as InnerAudioContext, SetInnerAudioOption as SetInnerAudioOption, SetInnerAudioOptionComplete as SetInnerAudioOptionComplete, SetInnerAudioOptionCompleteCallback as SetInnerAudioOptionCompleteCallback, SetInnerAudioOptionFail as SetInnerAudioOptionFail, SetInnerAudioOptionFailCallback as SetInnerAudioOptionFailCallback, SetInnerAudioOptionOptions as SetInnerAudioOptionOptions, SetInnerAudioOptionSuccess as SetInnerAudioOptionSuccess, SetInnerAudioOptionSuccessCallback as SetInnerAudioOptionSuccessCallback };
export { createInnerAudioContext as createInnerAudioContext };
export { setInnerAudioOption as setInnerAudioOption };
