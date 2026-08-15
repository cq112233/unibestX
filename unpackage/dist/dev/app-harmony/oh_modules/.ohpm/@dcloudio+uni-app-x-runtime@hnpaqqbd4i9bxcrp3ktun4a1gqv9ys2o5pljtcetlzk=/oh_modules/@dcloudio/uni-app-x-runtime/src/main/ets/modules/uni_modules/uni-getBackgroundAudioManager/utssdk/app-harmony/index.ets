import { BusinessError } from '@ohos.base';
import { audio } from '@kit.AudioKit';
import { avSession } from '@kit.AVSessionKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { fileIo } from '@kit.CoreFileKit';
import { getRealPath } from "@dcloudio/uni-app-framework";
import { media } from '@kit.MediaKit';
import { onError, IUniError, UTS, UTSHarmony, defineSyncApi } from "@dcloudio/uni-app-framework";
import { uri } from '@kit.ArkTS';
import { wantAgent } from '@kit.AbilityKit';
type GetBackgroundAudioManager = () => BackgroundAudioManager;
interface BackgroundAudioManager {
    duration: number;
    currentTime: number;
    paused: boolean;
    src: string;
    startTime: number;
    buffered: number;
    title: string;
    epname: string;
    singer: string;
    coverImgUrl: string;
    webUrl: string;
    protocol: string;
    playbackRate?: number;
    cache: boolean;
    play(): void;
    pause(): void;
    seek(position: number): void;
    stop(): void;
    onCanplay(callback: (result: Object) => void): void;
    onPlay(callback: (result: Object) => void): void;
    onPause(callback: (result: Object) => void): void;
    onStop(callback: (result: Object) => void): void;
    onEnded(callback: (result: Object) => void): void;
    onSeeking(callback: (result: Object) => void): void;
    onSeeked(callback: (result: Object) => void): void;
    onTimeUpdate(callback: (result: Object) => void): void;
    onPrev(callback: (result: Object) => void): void;
    onNext(callback: (result: Object) => void): void;
    onError(callback: (result: ICreateBackgroundAudioFail) => void): void;
    onWaiting(callback: (result: Object) => void): void;
    offCanplay(): void;
    offPlay(): void;
    offPause(): void;
    offStop(): void;
    offEnded(): void;
    offSeeking(): void;
    offSeeked(): void;
    offTimeUpdate(): void;
    offPrev(): void;
    offNext(): void;
    offError(): void;
    offWaiting(): void;
}
type CreateBackgroundAudioErrorCode = 1107601 | 1107602 | 1107603 | 1107604 | 1107605 | 1107609;
interface ICreateBackgroundAudioFail extends IUniError {
    errCode: CreateBackgroundAudioErrorCode;
}
const API_GET_BACKGROUND_AUDIO_MANAGER = 'getBackgroundAudioManager';
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
    onPrevCallbacks: Function[] = [];
    onNextCallbacks: Function[] = [];
    constructor(){}
    destroy() {
        this.onCanplayCallbacks = [];
        this.onPlayCallbacks = [];
        this.onPauseCallbacks = [];
        this.onStopCallbacks = [];
        this.onEndedCallbacks = [];
        this.onTimeUpdateCallbacks = [];
        this.onErrorCallbacks = [];
        this.onWaitingCallbacks = [];
        this.onSeekingCallbacks = [];
        this.onSeekedCallbacks = [];
        this.onPrevCallbacks = [];
        this.onNextCallbacks = [];
    }
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
    prev() {
        callCallbacks(this.onPrevCallbacks);
    }
    onPrev(callback: Function) {
        this.onPrevCallbacks.push(callback);
    }
    offPrev(callback: Function) {
        remoteCallback(this.onPrevCallbacks, callback);
    }
    next() {
        callCallbacks(this.onNextCallbacks);
    }
    onNext(callback: Function) {
        this.onNextCallbacks.push(callback);
    }
    offNext(callback: Function) {
        remoteCallback(this.onNextCallbacks, callback);
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
interface TempAbilityInfo {
    bundleName: string;
    name: string;
}
const audioPlayerCallback = new AudioPlayerCallback();
let id: number = 0;
class AVSession {
    session: avSession.AVSession | null = null;
    metadata: avSession.AVMetadata = {
        assetId: '',
        skipIntervals: avSession.SkipIntervals.SECONDS_10
    };
    playbackState: avSession.AVPlaybackState = {
        state: avSession.PlaybackState.PLAYBACK_STATE_INITIAL,
        position: {
            elapsedTime: 0,
            updateTime: new Date().getTime()
        },
        bufferedTime: 1000,
        isFavorite: false
    };
    createSessionPromise: Promise<avSession.AVSession> | null = null;
    constructor(){}
    async init(): Promise<avSession.AVSession> {
        if (this.session) return this.session;
        this.metadata.assetId = `${id++}`;
        this.createSessionPromise = avSession.createAVSession(UTSHarmony.getUIAbilityContext()!, `backgroundAudioPlayer_${id}`, 'audio');
        this.session = await this.createSessionPromise;
        this.createSessionPromise = null;
        this.setAVMetadata();
        this.setAVPlaybackState();
        return this.session!;
    }
    async setAVMetadata(): Promise<void> {
        if (!this.session) {
            await this.createSessionPromise;
        }
        this.session?.setAVMetadata(this.metadata);
    }
    async setAVPlaybackState(): Promise<void> {
        if (!this.session) {
            await this.createSessionPromise;
        }
        this.session?.setAVPlaybackState(this.playbackState);
    }
    async destroy(): Promise<void> {
        if (this.session) {
            this.session.off('play');
            this.session.off('pause');
            this.session.off('stop');
            this.session.off('playNext');
            this.session.off('playPrevious');
            this.session.off('seek');
            return this.session.deactivate();
        }
        this.session = null;
    }
}
function startBackgroundTask(): Promise<void> {
    const abilityInfo = UTSHarmony.getUIAbilityContext()!.abilityInfo as TempAbilityInfo;
    const wantAgentInfo: wantAgent.WantAgentInfo = {
        wants: [
            {
                bundleName: abilityInfo.bundleName,
                abilityName: abilityInfo.name
            }
        ],
        operationType: wantAgent.OperationType.START_ABILITY,
        requestCode: 0,
        wantAgentFlags: [
            wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG
        ]
    };
    return wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj)=>{
        return backgroundTaskManager.startBackgroundRunning(UTSHarmony.getUIAbilityContext()!, backgroundTaskManager.BackgroundMode.AUDIO_PLAYBACK, wantAgentObj);
    }).catch((err: BusinessError)=>{});
}
async function stopBackgroundTask(): Promise<void> {
    return backgroundTaskManager.stopBackgroundRunning(UTSHarmony.getUIAbilityContext()!).then(()=>{}).catch((err: BusinessError)=>{});
}
async function START_BACKGROUND(): Promise<void> {
    await startBackgroundTask();
}
async function STOP_BACKGROUND(): Promise<void> {
    await stopBackgroundTask();
}
const LOG = (msg: string): void =>UTS.console.log(`[getBackgroundAudioManager]: ${msg}`);
class STATE_TYPE {
    static IDLE: string = 'idle';
    static PLAYING: string = 'playing';
    static PAUSED: string = 'paused';
    static STOPPED: string = 'stopped';
    static ERROR: string = 'error';
}
class BGAManagerImpl implements BackgroundAudioManager {
    __v_skip: boolean = true;
    static audioPlayer?: media.AudioPlayer;
    static avSession?: AVSession;
    private _src: string = '';
    private _startTime: number = 0;
    private _buffered: number = 0;
    private _title: string = '';
    private _epname: string = '';
    private _singer: string = '';
    private _coverImgUrl: string = '';
    private _webUrl: string = '';
    private _protocol: string = '';
    private _playbackRate: number = 1;
    private _dataloaded: boolean = false;
    private isPlaying: boolean = false;
    private avSessionIsActive: boolean = false;
    readonly obeyMuteSwitch: boolean = false;
    private _onDataLoad: Function = ()=>{};
    private _onPlay: Function = ()=>{};
    private _onPause: Function = ()=>{};
    private _onEnded: Function = ()=>{};
    private _onTimeUpdate: (positionMS: number) => void = (positionMS: number)=>{};
    private _onError: Function = ()=>{};
    private _onBufferingUpdate: Function = ()=>{};
    private avSessionDestroyPromise: Promise<void> | null = null;
    private _cache: boolean = false;
    constructor(){
        this.init();
        this.createAVSession();
    }
    private async createAVSession(): Promise<void> {
        const _audioPlayer = BGAManagerImpl.audioPlayer;
        BGAManagerImpl.avSession = new AVSession();
        const _avSession = BGAManagerImpl.avSession;
        this._onDataLoad = async (): Promise<void> =>{
            _avSession.metadata.duration = _audioPlayer!.duration;
            _avSession.setAVMetadata();
        };
        this._onPlay = async (): Promise<void> =>{
            _avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_PLAY;
            _avSession.setAVPlaybackState();
        };
        this._onPause = ()=>{
            _avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_PAUSE;
            _avSession.setAVPlaybackState();
        };
        this._onEnded = ()=>{
            _avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_COMPLETED;
            _avSession.setAVPlaybackState();
        };
        this._onTimeUpdate = (positionMS: number)=>{
            _avSession.playbackState.position = {
                elapsedTime: positionMS,
                updateTime: new Date().getTime()
            } as avSession.PlaybackPosition;
            _avSession?.setAVPlaybackState();
        };
        this._onError = ()=>{
            _avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_ERROR;
            _avSession.setAVPlaybackState();
        };
        this._onBufferingUpdate = ()=>{
            _avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_BUFFERING;
            _avSession.setAVPlaybackState();
        };
    }
    private async avSessionInit(): Promise<avSession.AVSession | null | undefined> {
        const _avSession = BGAManagerImpl.avSession;
        if (!_avSession) return;
        if (_avSession.session == null) {
            await _avSession.init();
        }
        if (this.avSessionDestroyPromise != null) {
            await this.avSessionDestroyPromise;
        }
        if (this.avSessionIsActive) return;
        this.avSessionDestroyPromise = null;
        _avSession.session?.on('play', ()=>this.play());
        _avSession.session?.on('pause', ()=>this.pause());
        _avSession.session?.on('stop', ()=>this.stop());
        _avSession.session?.on('playNext', ()=>audioPlayerCallback.next());
        _avSession.session?.on('playPrevious', ()=>audioPlayerCallback.prev());
        _avSession.session?.on('seek', (position)=>{
            this.seek(position / 1000);
        });
        await _avSession.session?.activate();
        this.avSessionIsActive = true;
        return _avSession.session;
    }
    init() {
        BGAManagerImpl.audioPlayer = media.createAudioPlayer();
        const _audioPlayer = BGAManagerImpl.audioPlayer;
        _audioPlayer.on('dataLoad', ()=>{
            this._dataloaded = true;
            this._onDataLoad();
            audioPlayerCallback.canPlay();
        });
        _audioPlayer.on('play', ()=>{
            this.isPlaying = true;
            this._onPlay();
            audioPlayerCallback.play();
        });
        _audioPlayer.on('pause', ()=>{
            this.isPlaying = false;
            this._onPause();
            audioPlayerCallback.pause();
        });
        _audioPlayer.on('stop', ()=>{
            this.isPlaying = false;
        });
        _audioPlayer.on('finish', ()=>{
            this.isPlaying = false;
            if (BGAManagerImpl.avSession) {
                this.avSessionDestroyPromise = BGAManagerImpl.avSession.destroy().then(()=>{
                    this.avSessionIsActive = false;
                });
            }
            this._onEnded();
            STOP_BACKGROUND();
            audioPlayerCallback.ended();
        });
        _audioPlayer.on('timeUpdate', (res)=>{
            this._onTimeUpdate(res);
            audioPlayerCallback.timeUpdate(res / 1000);
        });
        _audioPlayer.on('error', (err)=>{
            this.isPlaying = false;
            this._onError();
            audioPlayerCallback.error(new AudioPlayerError(err.message, err.code));
        });
        _audioPlayer.on('bufferingUpdate', (infoType, value)=>{
            switch(infoType){
                case media.BufferingInfoType.BUFFERING_START:
                    this._onBufferingUpdate();
                    audioPlayerCallback.waiting();
                    break;
                case media.BufferingInfoType.BUFFERING_END:
                    if (this._dataloaded) {
                        this._onPlay();
                        audioPlayerCallback.canPlay();
                    }
                    break;
                case media.BufferingInfoType.BUFFERING_PERCENT:
                    break;
                case media.BufferingInfoType.CACHED_DURATION:
                    this._buffered = value;
                    break;
            }
        });
        _audioPlayer.on('audioInterrupt', (InterruptEvent)=>{
            if (_audioPlayer && InterruptEvent.hintType === audio.InterruptHint.INTERRUPT_HINT_PAUSE) {
                this.isPlaying = false;
                _audioPlayer.pause();
            }
            if (_audioPlayer && InterruptEvent.hintType === audio.InterruptHint.INTERRUPT_HINT_RESUME) {
                this.isPlaying = true;
                _audioPlayer.play();
            }
        });
    }
    get duration() {
        if (!BGAManagerImpl.audioPlayer) {
            return 0;
        }
        return BGAManagerImpl.audioPlayer.duration / 1000;
    }
    get currentTime() {
        return (BGAManagerImpl.audioPlayer?.currentTime ?? 0) / 1000;
    }
    get paused() {
        if (!BGAManagerImpl.audioPlayer) {
            return false;
        }
        return BGAManagerImpl.audioPlayer.state === STATE_TYPE.PAUSED;
    }
    get src() {
        if (!BGAManagerImpl.audioPlayer) {
            return '';
        }
        return BGAManagerImpl.audioPlayer.src;
    }
    set src(value) {
        if (typeof value !== 'string') {
            audioPlayerCallback.error(new AudioPlayerError(`set src: ${value} is not string`, 10004));
            return;
        }
        if (!BGAManagerImpl.audioPlayer) {
            audioPlayerCallback.error(new AudioPlayerError(`player is not exist`, 10001));
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
            } catch (err) {
                audioPlayerCallback.error(new AudioPlayerError((err as BusinessError).message, (err as BusinessError).code));
            }
        }
        if (BGAManagerImpl.audioPlayer.src) {
            BGAManagerImpl.audioPlayer.reset();
        }
        BGAManagerImpl.audioPlayer.src = path;
        this._src = value;
        if (this._startTime) {
            this.seek(this._startTime);
        }
        if (BGAManagerImpl.avSession) {
            if (this.title.length === 0) {
                BGAManagerImpl.avSession.metadata.title = new uri.URI(value).getLastSegment();
            }
            BGAManagerImpl.avSession.metadata.description = value;
        }
        this.play();
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(time: number) {
        this._startTime = time;
    }
    get title() {
        return this._title;
    }
    set title(titleName: string) {
        this._title = titleName;
        BGAManagerImpl.avSession!.metadata.title = titleName;
    }
    get buffered() {
        if (!BGAManagerImpl.audioPlayer) return 0;
        media.PlaybackInfoKey.BUFFER_DURATION;
        return this._buffered / 1000;
    }
    get epname() {
        return this._epname;
    }
    set epname(epName: string) {
        this._epname = epName;
        BGAManagerImpl.avSession!.metadata.album = epName;
    }
    get singer() {
        return this._singer;
    }
    set singer(singerName: string) {
        this._singer = singerName;
        BGAManagerImpl.avSession!.metadata.artist = singerName;
    }
    get coverImgUrl() {
        return this._coverImgUrl;
    }
    set coverImgUrl(url: string) {
        this._coverImgUrl = url;
        BGAManagerImpl.avSession!.metadata.mediaImage = url;
    }
    get webUrl() {
        return this._webUrl;
    }
    set webUrl(url: string) {
        this._webUrl = url;
    }
    get protocol() {
        return this._protocol;
    }
    set protocol(protocolType: string) {
        this._protocol = protocolType;
    }
    set playbackRate(rate: number) {
        audioPlayerCallback.error(new AudioPlayerError('HarmonyOS Audio setting playbackRate is not supported.', -1));
    }
    get playbackRate() {
        return this._playbackRate;
    }
    set cache(value: boolean) {
        this._cache = value;
    }
    get cache() {
        return this._cache;
    }
    async play(): Promise<void> {
        if (!BGAManagerImpl.audioPlayer) {
            return;
        }
        const state = BGAManagerImpl.audioPlayer.state;
        if (this.isPlaying || ![
            STATE_TYPE.PAUSED,
            STATE_TYPE.STOPPED,
            STATE_TYPE.IDLE
        ].includes(state)) {
            return;
        }
        this.isPlaying = true;
        if (this._src && BGAManagerImpl.audioPlayer.src === '') {
            this.src = this._src;
        }
        await this.avSessionInit();
        BGAManagerImpl.audioPlayer.play();
        START_BACKGROUND();
    }
    pause() {
        if (!BGAManagerImpl.audioPlayer) {
            return;
        }
        this.isPlaying = false;
        const state = BGAManagerImpl.audioPlayer.state;
        if (STATE_TYPE.PLAYING !== state) {
            return;
        }
        BGAManagerImpl.audioPlayer.pause();
    }
    stop() {
        if (!BGAManagerImpl.audioPlayer) {
            return;
        }
        if (![
            STATE_TYPE.PAUSED,
            STATE_TYPE.PLAYING
        ].includes(BGAManagerImpl.audioPlayer.state)) {
            return;
        }
        this.isPlaying = false;
        BGAManagerImpl.audioPlayer.seek(0);
        BGAManagerImpl.audioPlayer.stop();
        STOP_BACKGROUND();
        audioPlayerCallback.stop();
        BGAManagerImpl.audioPlayer.reset();
        BGAManagerImpl.audioPlayer.src = '';
        if (BGAManagerImpl.avSession) {
            BGAManagerImpl.avSession.playbackState.state = avSession.PlaybackState.PLAYBACK_STATE_STOP;
            BGAManagerImpl.avSession.setAVPlaybackState();
            this.avSessionDestroyPromise = BGAManagerImpl.avSession.destroy().then(()=>{
                this.avSessionIsActive = false;
            });
        }
    }
    seek(position: number) {
        if (!BGAManagerImpl.audioPlayer) {
            return;
        }
        const state = BGAManagerImpl.audioPlayer.state;
        if (![
            STATE_TYPE.PAUSED,
            STATE_TYPE.PLAYING,
            STATE_TYPE.IDLE
        ].includes(state)) {
            return;
        }
        audioPlayerCallback.seeking();
        const positionMS = position * 1000;
        BGAManagerImpl.audioPlayer.seek(positionMS);
        audioPlayerCallback.seeked();
    }
    onCanplay(callback: (result: Object) => void): void {
        audioPlayerCallback.onCanplay(callback);
    }
    onPlay(callback: (result: Object) => void): void {
        audioPlayerCallback.onPlay(callback);
    }
    onPause(callback: (result: Object) => void): void {
        audioPlayerCallback.onPause(callback);
    }
    onStop(callback: (result: Object) => void): void {
        audioPlayerCallback.onStop(callback);
    }
    onEnded(callback: (result: Object) => void): void {
        audioPlayerCallback.onEnded(callback);
    }
    onTimeUpdate(callback: (result: Object) => void): void {
        audioPlayerCallback.onTimeUpdate(callback);
    }
    onError(callback: (result: ICreateBackgroundAudioFail) => void): void {
        audioPlayerCallback.onError(callback);
    }
    onWaiting(callback: (result: Object) => void): void {
        audioPlayerCallback.onWaiting(callback);
    }
    onPrev(callback: (result: Object) => void): void {
        audioPlayerCallback.onPrev(callback);
    }
    onNext(callback: (result: Object) => void): void {
        audioPlayerCallback.onNext(callback);
    }
    onSeeking(callback: (result: Object) => void): void {
        audioPlayerCallback.onSeeking(callback);
    }
    onSeeked(callback: (result: Object) => void): void {
        audioPlayerCallback.onSeeked(callback);
    }
    offCanplay(): void {
        audioPlayerCallback.onCanplayCallbacks = [];
    }
    offPlay(): void {
        audioPlayerCallback.onPlayCallbacks = [];
    }
    offPause(): void {
        audioPlayerCallback.onPauseCallbacks = [];
    }
    offStop(): void {
        audioPlayerCallback.onStopCallbacks = [];
    }
    offEnded(): void {
        audioPlayerCallback.onEndedCallbacks = [];
    }
    offTimeUpdate(): void {
        audioPlayerCallback.onTimeUpdateCallbacks = [];
    }
    offError(): void {
        audioPlayerCallback.onErrorCallbacks = [];
    }
    offWaiting(): void {
        audioPlayerCallback.onWaitingCallbacks = [];
    }
    offPrev(): void {
        audioPlayerCallback.onPrevCallbacks = [];
    }
    offNext(): void {
        audioPlayerCallback.onNextCallbacks = [];
    }
    offSeeking(): void {
        audioPlayerCallback.onSeekingCallbacks = [];
    }
    offSeeked(): void {
        audioPlayerCallback.onSeekedCallbacks = [];
    }
}
let backgroundAudioManager: BackgroundAudioManager | null = null;
const getBackgroundAudioManager: GetBackgroundAudioManager = defineSyncApi<BackgroundAudioManager>(API_GET_BACKGROUND_AUDIO_MANAGER, (): BackgroundAudioManager =>{
    if (!backgroundAudioManager) backgroundAudioManager = new BGAManagerImpl();
    return backgroundAudioManager;
}) as GetBackgroundAudioManager;
export { BackgroundAudioManager as BackgroundAudioManager, CreateBackgroundAudioErrorCode as CreateBackgroundAudioErrorCode, GetBackgroundAudioManager as GetBackgroundAudioManager, ICreateBackgroundAudioFail as ICreateBackgroundAudioFail };
export { getBackgroundAudioManager as getBackgroundAudioManager };
