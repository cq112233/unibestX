import { AVVolumePanelOptions } from "./builder";
import { string, ComponentPublicInstance, UTSObject, UniElement, IUniError, UniNativeViewElement, UniViewElementImpl } from "@dcloudio/uni-app-framework";
type CreateVideoContext = (videoId: string.VideoIdString, component?: ComponentPublicInstance | null) => VideoContext | null;
declare class Danmu extends UTSObject {
    text: string | null;
    color: string | null;
    time: number | null;
}
declare class RequestFullScreenOptions extends UTSObject {
    direction: 0 | 90 | -90 | null;
}
interface VideoContext {
    play(): void;
    pause(): void;
    seek(position: number): void;
    stop(): void;
    sendDanmu(danmu: Danmu): void;
    playbackRate(rate: number): void;
    requestFullScreen(direction?: RequestFullScreenOptions | null): void;
    exitFullScreen(): void;
}
interface UniVideoEvent {
    bubbles: boolean;
    cancelable: boolean;
    type: string;
    target?: UniElement | null;
    currentTarget?: UniElement | null;
    timeStamp: number;
    stopPropagation(): void;
    preventDefault(): void;
}
interface UniVideoTimeUpdateEvent extends UniVideoEvent {
    readonly detail: UniVideoTimeUpdateEventDetail;
}
declare class UniVideoTimeUpdateEventDetail extends UTSObject {
    currentTime: number;
    duration: number;
}
interface UniVideoFullScreenChangeEvent extends UniVideoEvent {
    readonly detail: UniVideoFullScreenChangeEventDetail;
}
type UniVideoFullScreenDirection = 'vertical' | 'horizontal';
declare class UniVideoFullScreenChangeEventDetail extends UTSObject {
    fullScreen: boolean;
    direction: UniVideoFullScreenDirection;
}
interface UniVideoErrorEvent extends UniVideoEvent {
    readonly detail: VideoError;
}
type VideoErrorCode = 100001 | 200001 | 300001;
interface VideoError extends IUniError {
    errCode: VideoErrorCode;
}
interface UniVideoProgressEvent extends UniVideoEvent {
    readonly detail: UniVideoProgressEventDetail;
}
declare class UniVideoProgressEventDetail extends UTSObject {
    buffered: number;
}
interface UniVideoFullScreenClickEvent extends UniVideoEvent {
    readonly detail: UniVideoFullScreenClickEventDetail;
}
declare class UniVideoFullScreenClickEventDetail extends UTSObject {
    screenX: number;
    screenY: number;
    screenWidth: number;
    screenHeight: number;
}
interface UniVideoControlsToggleEvent extends UniVideoEvent {
    readonly detail: UniVideoControlsToggleEventDetail;
}
declare class UniVideoControlsToggleEventDetail extends UTSObject {
    show: boolean;
}
export { AVVolumePanelOptions as AVVolumePanelOptions };
interface BuilderVideoOptions extends VideoOptions {
}
interface VideoEvent {
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onStop?: () => void;
    onError?: () => void;
    onPrepared?: (event: OnPreparedEvent) => void;
    onSeeking?: (event: OnSeekingEvent) => void;
    onSeeked?: (event: OnSeekedEvent) => void;
    onTimeUpdate?: (event: OnUpdateEvent) => void;
    onFullscreenChange?: (event: OnFullscreenChange) => void;
}
type ObjectFit = 'contain' | 'fill' | 'cover';
interface BuilderVideoParams {
    options: BuilderVideoOptions;
    event?: VideoEvent;
    objectFit?: ObjectFit | ImageFit;
    muted?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    controls?: boolean;
    eventSeed: number;
    volumeOptions?: AVVolumePanelOptions;
}
interface OnPreparedEvent {
    duration: number;
}
interface OnSeekingEvent {
    time: number;
}
interface OnSeekedEvent {
    time: number;
}
interface OnUpdateEvent {
    time: number;
}
interface OnFullscreenChange {
    fullscreen: boolean;
}
declare class Video {
    private bindVideoController?;
    private harmonyBuilderNode;
    private params;
    private _currentMP;
    private pendingPlayAfterPrepared;
    private prepared;
    private readyToSetNextSrc;
    private srcQueue;
    private originalSrc;
    fullscreening: boolean;
    constructor(element: UniNativeViewElement, params: BuilderVideoParams);
    private windowStatusChange;
    private updateParams;
    private getObjectFit;
    private formatPlaybackRate;
    private flushSrcQueue;
    private resetVideoState;
    private setSrc;
    dispose(): void;
    destroy(): void;
    set src(src: string);
    set poster(poster: string);
    set objectFit(objectFit: ObjectFit);
    set autoplay(autoplay: boolean);
    set loop(loop: boolean);
    set playbackRate(playbackRate: string | number);
    set muted(muted: boolean);
    set controls(controls: boolean);
    displayTheFirstFrame(): void;
    play(): void;
    pause(): void;
    stop(): void;
    reset(): void;
    seek(time: number): void;
    requestFullscreen(options?: RequestFullScreenOptions | null): void;
    exitFullscreen(): void;
    sendDanmu(danmu: Danmu): void;
    setVolume(options: AVVolumePanelOptions): void;
}
interface IUniVideoElement extends UniElement {
    play(): void;
    pause(): void;
    seek(position: number): void;
    stop(): void;
    sendDanmu(danmu: Danmu): void;
    playbackRate(rate: number): void;
    requestFullScreen(options?: RequestFullScreenOptions | null): void;
    exitFullScreen(): void;
}
declare class UniVideoElement extends UniViewElementImpl implements IUniVideoElement {
    tagName: string;
    nodeName: string;
    private video;
    private lastNavigationStyle;
    dispose(): void;
    getHarmonyController(): VideoController | null;
    setVideo(video: Video): void;
    getVideo(): Video | null;
    play(): void;
    pause(): void;
    seek(position: number): void;
    stop(): void;
    sendDanmu(danmu: Danmu): void;
    playbackRate(rate: number): void;
    requestFullScreen(options?: ESObject | null): void;
    exitFullScreen(): void;
    requestFullscreen(options?: ESObject | undefined | null): void;
    _exitFullscreen(): void;
}
declare const createVideoContext: CreateVideoContext;
declare class AudioManager {
    offVolumeChange: () => void;
    currentVolume: number;
    maxVolume: number;
    minVolume: number;
    constructor(mediaVolumeChange: (volume: number) => void);
}
declare class Brightness {
    private window?;
    constructor();
    getBrightness(): number;
    setBrightness(brightness: number): Promise<void>;
}
export { VideoContext as VideoContext, Danmu as Danmu, RequestFullScreenOptions as RequestFullScreenOptions, CreateVideoContext as CreateVideoContext, UniVideoFullScreenDirection as UniVideoFullScreenDirection, VideoError as VideoError, VideoErrorCode as VideoErrorCode, UniVideoEvent as UniVideoEvent };
export { UniVideoTimeUpdateEvent as UniVideoTimeUpdateEvent, UniVideoTimeUpdateEventDetail as UniVideoTimeUpdateEventDetail, UniVideoFullScreenChangeEvent as UniVideoFullScreenChangeEvent, UniVideoFullScreenChangeEventDetail as UniVideoFullScreenChangeEventDetail, UniVideoErrorEvent as UniVideoErrorEvent, UniVideoProgressEvent as UniVideoProgressEvent, UniVideoProgressEventDetail as UniVideoProgressEventDetail, UniVideoFullScreenClickEvent as UniVideoFullScreenClickEvent, UniVideoFullScreenClickEventDetail as UniVideoFullScreenClickEventDetail, UniVideoControlsToggleEvent as UniVideoControlsToggleEvent, UniVideoControlsToggleEventDetail as UniVideoControlsToggleEventDetail, UniVideoTimeUpdateEvent as VideoTimeUpdateEvent, UniVideoTimeUpdateEventDetail as VideoTimeUpdateEventDetail, UniVideoFullScreenChangeEvent as VideoFullScreenChangeEvent, UniVideoFullScreenChangeEventDetail as VideoFullScreenChangeEventDetail, UniVideoErrorEvent as VideoErrorEvent, UniVideoProgressEvent as VideoProgressEvent, UniVideoProgressEventDetail as VideoProgressEventDetail, UniVideoFullScreenClickEvent as VideoFullScreenClickEvent, UniVideoFullScreenClickEventDetail as VideoFullScreenClickEventDetail, UniVideoControlsToggleEvent as VideoControlsToggleEvent, UniVideoControlsToggleEventDetail as VideoControlsToggleEventDetail };
export { BuilderVideoOptions as BuilderVideoOptions };
export { VideoEvent as VideoEvent };
export { ObjectFit as ObjectFit };
export { BuilderVideoParams as BuilderVideoParams };
export { OnPreparedEvent as OnPreparedEvent };
export { OnSeekingEvent as OnSeekingEvent };
export { OnSeekedEvent as OnSeekedEvent };
export { OnUpdateEvent as OnUpdateEvent };
export { OnFullscreenChange as OnFullscreenChange };
export { Video as Video };
export { UniVideoElement as UniVideoElement };
export { createVideoContext as createVideoContext };
export { AudioManager as AudioManager };
export { Brightness as Brightness };
