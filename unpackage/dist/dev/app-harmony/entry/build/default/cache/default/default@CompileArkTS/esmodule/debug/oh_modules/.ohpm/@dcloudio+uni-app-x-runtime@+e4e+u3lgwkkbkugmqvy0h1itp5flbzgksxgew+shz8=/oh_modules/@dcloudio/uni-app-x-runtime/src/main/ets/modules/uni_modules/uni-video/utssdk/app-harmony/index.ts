import type OHWindow from "@ohos:window";
import audio from "@ohos:multimedia.audio";
import { buildVideo } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-video/utssdk/app-harmony/builder&1.0.0";
import type { AVVolumePanelOptions } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-video/utssdk/app-harmony/builder&1.0.0";
import type font from "@ohos:font";
import { getCurrentMP, getRealPath } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { UTSObject, UTSHarmony, uni, UTSJSONObject, UniViewElementImpl, defineSyncApi, getCurrentPages, UTS } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { string, ComponentPublicInstance, UniElement, IUniError, UniNativeViewElement, UniPage } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type CreateVideoContext = (videoId: string.VideoIdString, component?: ComponentPublicInstance | null) => VideoContext | null;
class Danmu extends UTSObject {
    text: string | null = null;
    color: string | null = null;
    time: number | null = null;
}
class RequestFullScreenOptions extends UTSObject {
    direction: 0 | 90 | -90 | null = null;
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
class UniVideoTimeUpdateEventDetail extends UTSObject {
    currentTime!: number;
    duration!: number;
}
interface UniVideoFullScreenChangeEvent extends UniVideoEvent {
    readonly detail: UniVideoFullScreenChangeEventDetail;
}
type UniVideoFullScreenDirection = 'vertical' | 'horizontal';
class UniVideoFullScreenChangeEventDetail extends UTSObject {
    fullScreen!: boolean;
    direction!: UniVideoFullScreenDirection;
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
class UniVideoProgressEventDetail extends UTSObject {
    buffered!: number;
}
interface UniVideoFullScreenClickEvent extends UniVideoEvent {
    readonly detail: UniVideoFullScreenClickEventDetail;
}
class UniVideoFullScreenClickEventDetail extends UTSObject {
    screenX!: number;
    screenY!: number;
    screenWidth!: number;
    screenHeight!: number;
}
interface UniVideoControlsToggleEvent extends UniVideoEvent {
    readonly detail: UniVideoControlsToggleEventDetail;
}
class UniVideoControlsToggleEventDetail extends UTSObject {
    show!: boolean;
}
UTSHarmony.onAppAbilityWindowStageCreate((window) => {
    setTimeout(async (): Promise<void> => {
        const mainWindow = await window.getMainWindow();
        mainWindow.getUIContext().getFont().registerFont({
            familyName: 'uni-video-icon',
            familySrc: { "id": 0, "type": 30000, params: ['uni-video/uni-video-icon.ttf'], "bundleName": "com.bigScreen.qizhi", "moduleName": "entry" }
        } as font.FontOptions);
    }, 40);
});
export type { AVVolumePanelOptions as AVVolumePanelOptions };
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
const formatVideoOptions = (options: VideoOptions): VideoOptions => {
    if (typeof options.src === 'string') {
        options.src = getRealPath(options.src) as string;
        if (options.src?.startsWith('/')) {
            options.src = 'file://' + options.src;
        }
    }
    return options;
};
class BindVideoController {
    private videoElement: UniVideoElement | null = null;
    controller: VideoController = new VideoController();
    setVideoElement(videoElement: UniVideoElement) {
        this.videoElement = videoElement;
    }
    play() {
        this.controller.start();
    }
    pause() {
        this.controller.pause();
    }
    stop() {
        this.seek(0);
        this.pause();
    }
    reset() {
        this.controller.reset();
    }
    seek(position: number) {
        this.controller.setCurrentTime(position, SeekMode.Accurate);
    }
    requestFullscreen(options: RequestFullScreenOptions | null = null) {
        this.videoElement?.requestFullScreen(options);
    }
    exitFullscreen() {
        this.videoElement?.exitFullScreen();
    }
    dispose() {
        this.videoElement = null;
    }
}
class Video {
    private bindVideoController?: BindVideoController;
    private harmonyBuilderNode: ComponentContent | null = null;
    private params: BuilderVideoParams;
    private _currentMP = getCurrentMP();
    private pendingPlayAfterPrepared = false;
    private prepared = false;
    private readyToSetNextSrc = true;
    private srcQueue: string[] = [];
    private originalSrc: string = '';
    fullscreening: boolean = false;
    constructor(element: UniNativeViewElement, params: BuilderVideoParams) {
        const videoEvent: VideoEvent = {};
        let triggerPlayEvent = true;
        videoEvent.onTimeUpdate = (event) => {
            uni.$emit(`__UNIVIDEO_ON_TIME_UPDATE_${params.eventSeed}`, event.time);
        };
        videoEvent.onPlay = () => {
            triggerPlayEvent ? uni.$emit(`__UNIVIDEO_ON_PLAY_${params.eventSeed}`) : triggerPlayEvent = true;
        };
        videoEvent.onPause = () => {
            if (this.fullscreening) {
                triggerPlayEvent = false;
                this.fullscreening = false;
                this.play();
            }
            else {
                uni.$emit(`__UNIVIDEO_ON_PAUSE_${params.eventSeed}`);
            }
        };
        videoEvent.onError = () => {
            this.readyToSetNextSrc = true;
            this.flushSrcQueue();
            uni.$emit(`__UNIVIDEO_ON_ERROR_${params.eventSeed}`);
        };
        videoEvent.onEnded = () => {
            uni.$emit(`__UNIVIDEO_ON_ENDED_${params.eventSeed}`);
        };
        videoEvent.onPrepared = (event) => {
            this.prepared = true;
            this.readyToSetNextSrc = true;
            this.flushSrcQueue();
            uni.$emit(`__UNIVIDEO_ON_PREPARED_${params.eventSeed}`, event.duration);
            if (this.pendingPlayAfterPrepared) {
                this.pendingPlayAfterPrepared = false;
                this.play();
            }
        };
        params.event = videoEvent;
        const bindVideoController = new BindVideoController();
        const videoElement = element.parentElement?.parentElement;
        if (videoElement) {
            (videoElement as Object as UniVideoElement).setVideo(this);
            bindVideoController.setVideoElement((videoElement as Object as UniVideoElement));
        }
        this.bindVideoController = bindVideoController;
        params.options.controller = bindVideoController.controller;
        if (params.objectFit) {
            params.objectFit = this.getObjectFit(params.objectFit as ObjectFit);
        }
        this.params = params;
        if (typeof this.params.options.src === 'string') {
            this.originalSrc = this.params.options.src;
        }
        formatVideoOptions(this.params.options);
        this.params.volumeOptions = {
            show: false
        } as AVVolumePanelOptions;
        element.bindHarmonyWrappedBuilder(wrapBuilder<[
            BuilderVideoParams
        ]>(buildVideo), this.params);
        element.bindHarmonyController(this.bindVideoController);
        if (typeof element['getHarmonyComponentContent'] === 'function') {
            this.harmonyBuilderNode = (element as any).getHarmonyComponentContent() as ComponentContent;
        }
        else {
            this.harmonyBuilderNode = element.getHarmonyBuilderNode();
        }
        this._currentMP.window?.on('windowStatusChange', this.windowStatusChange);
    }
    private windowStatusChange = () => {
        uni.$emit(`__UNIVIDEO_ON_WINDOW_STATUS_CHANGE_${this.params?.eventSeed}`);
    };
    private updateParams() {
        formatVideoOptions(this.params.options);
        this.harmonyBuilderNode?.update(this.params);
    }
    private getObjectFit(objectFit: ObjectFit): ImageFit {
        switch (objectFit) {
            case 'contain':
                return ImageFit.Contain;
            case 'fill':
                return ImageFit.Fill;
            case 'cover':
                return ImageFit.Cover;
            default:
                return ImageFit.Contain;
        }
    }
    private formatPlaybackRate(rate: number): number {
        const validValues = [
            0.75,
            1.0,
            1.25,
            1.75,
            2.0
        ];
        let closest = validValues[0];
        let closestDiff = Math.abs(rate - closest);
        for (let i = 1; i < validValues.length; i++) {
            let diff = Math.abs(rate - validValues[i]);
            if (diff < closestDiff) {
                closest = validValues[i];
                closestDiff = diff;
            }
        }
        return closest;
    }
    private flushSrcQueue() {
        if (this.srcQueue.length > 0) {
            const src = this.srcQueue[this.srcQueue.length - 1];
            this.srcQueue.length = 0;
            this.src = src;
        }
    }
    private resetVideoState() {
        this.pendingPlayAfterPrepared = false;
        this.readyToSetNextSrc = true;
        this.srcQueue = [];
        this.params.volumeOptions!.show = false;
    }
    private setSrc(src: string) {
        if (!this.readyToSetNextSrc) {
            this.srcQueue.push(src);
            return;
        }
        this.originalSrc = this.params.options.src = src;
        this.prepared = false;
        this.pendingPlayAfterPrepared = false;
        this.readyToSetNextSrc = false;
        this.updateParams();
    }
    dispose() {
        this.bindVideoController?.dispose();
        this.bindVideoController = undefined;
        this.harmonyBuilderNode?.dispose();
        this.harmonyBuilderNode = null;
        if (this.params.event) {
            this.params.event.onTimeUpdate = undefined;
            this.params.event.onPlay = undefined;
            this.params.event.onPause = undefined;
            this.params.event.onError = undefined;
            this.params.event.onEnded = undefined;
            this.params.event.onPrepared = undefined;
            this.params.event = undefined;
        }
        this._currentMP.window?.off('windowStatusChange', this.windowStatusChange);
    }
    destroy() {
        this.dispose();
    }
    set src(src: string) {
        if (src === this.originalSrc) {
            this.resetVideoState();
            this.params.options.src = '';
            this.updateParams();
            setTimeout(() => {
                this.setSrc(src);
            }, 100);
            return;
        }
        this.setSrc(src);
    }
    set poster(poster: string) {
        this.params.options.previewUri = poster;
        this.updateParams();
    }
    set objectFit(objectFit: ObjectFit) {
        this.params.objectFit = this.getObjectFit(objectFit);
        this.updateParams();
    }
    set autoplay(autoplay: boolean) {
        this.params.autoplay = autoplay;
        this.updateParams();
    }
    set loop(loop: boolean) {
        this.params.loop = loop;
        this.updateParams();
    }
    set playbackRate(playbackRate: string | number) {
        this.params.options.currentProgressRate = this.formatPlaybackRate(typeof playbackRate === 'number' ? playbackRate : parseFloat(playbackRate));
        this.updateParams();
    }
    set muted(muted: boolean) {
        this.params.muted = muted;
        this.updateParams();
    }
    set controls(controls: boolean) {
        this.params.controls = controls;
        this.updateParams();
    }
    displayTheFirstFrame() {
        this.bindVideoController?.controller.setCurrentTime(1, SeekMode.PreviousKeyframe);
    }
    play() {
        if (!this.prepared) {
            this.pendingPlayAfterPrepared = true;
            return;
        }
        this.bindVideoController?.play();
    }
    pause() {
        this.pendingPlayAfterPrepared = false;
        this.bindVideoController?.pause();
    }
    stop() {
        this.resetVideoState();
        this.bindVideoController?.stop();
    }
    reset() {
        this.resetVideoState();
        this.bindVideoController?.reset();
    }
    seek(time: number) {
        this.bindVideoController?.seek(time);
    }
    requestFullscreen(options: RequestFullScreenOptions | null = null) {
        this.bindVideoController?.requestFullscreen(options);
    }
    exitFullscreen() {
        this.bindVideoController?.exitFullscreen();
    }
    sendDanmu(danmu: Danmu) {
        uni.$emit(`__UNIVIDEO_SEND_DANMU_${this.params.eventSeed}`, new UTSJSONObject(new UTSJSONObject({
            text: danmu.text,
            color: danmu.color,
            time: danmu.time
        })));
    }
    setVolume(options: AVVolumePanelOptions) {
        if (this.params.volumeOptions == null) {
            this.params.volumeOptions = {
                show: false
            };
        }
        if (options.show != null) {
            this.params.volumeOptions.show = options.show;
        }
        if (options.volumeLevel != null) {
            this.params.volumeOptions.volumeLevel = options.volumeLevel;
        }
        this.params.volumeOptions.positionX = options.positionX;
        this.params.volumeOptions.positionY = options.positionY;
        this.updateParams();
    }
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
class UniVideoElement extends UniViewElementImpl implements IUniVideoElement {
    tagName: string = 'VIDEO';
    nodeName: string = 'VIDEO';
    private video: Video | null = null;
    private lastNavigationStyle: string = '';
    dispose() {
        this.video?.dispose();
        this.video = null;
        super.dispose();
    }
    getHarmonyController(): VideoController | null {
        const videoNativeElement = this.firstChild?.firstChild as UniNativeViewElement;
        if (videoNativeElement) {
            return (videoNativeElement.getHarmonyController<BindVideoController>() as BindVideoController).controller;
        }
        return null;
    }
    setVideo(video: Video) {
        this.video = video;
    }
    getVideo(): Video | null {
        return this.video;
    }
    play() {
        this.video?.play();
    }
    pause() {
        this.video?.pause();
    }
    seek(position: number) {
        this.video?.seek(position);
    }
    stop() {
        this.video?.stop();
    }
    sendDanmu(danmu: Danmu) {
        this.video?.sendDanmu(danmu);
    }
    playbackRate(rate: number) {
        this.video && (this.video.playbackRate = rate);
    }
    requestFullScreen(options: any | null = null) {
        let requestFullscreenOptions: any = options ?? {};
        if (options?.direction === 0) {
            requestFullscreenOptions = {
                orientation: 'portrait'
            };
        }
        if (options?.direction === 90) {
            requestFullscreenOptions = {
                orientation: 'landscape-primary'
            };
        }
        if (options?.direction === -90) {
            requestFullscreenOptions = {
                orientation: 'landscape-secondary'
            };
        }
        this.requestFullscreen(requestFullscreenOptions);
    }
    exitFullScreen() {
        this.page.exitFullscreen();
    }
    requestFullscreen(options: any | undefined | null = null): void {
        const nativePage: any = (this.uniPage as any).getNativePage();
        if (this.uniPage.fullscreenElement) {
            options?.fail?.();
            this.callFullscreenerrorCallbacks('The current page already has a fullscreen element.');
            return;
        }
        if (this.isFullscreen)
            return;
        this.isFullscreen = true;
        this.video && (this.video.fullscreening = true);
        this.lastNavigationStyle = this.uniPage.getPageStyle().get('navigationStyle') ?? '';
        this.resolveIsFullscreenFrameNode(options).then(() => {
            nativePage.fullscreenElement = this;
            this.uniPage.setPageStyle(new UTSJSONObject(new UTSJSONObject({
                navigationStyle: 'custom'
            })));
            this.checkPosition(true);
            options?.success?.();
            this.callFullscreenchangeCallbacks();
        }).catch(() => {
            nativePage.setPageOrientation(this.uniPage.getPageStyle().toMap());
            this.requestFullscreenError();
            this.uniPage.setPageStyle(new UTSJSONObject(new UTSJSONObject({
                navigationStyle: this.lastNavigationStyle
            })));
            this.video && (this.video.fullscreening = false);
            options?.fail?.();
            this.callFullscreenerrorCallbacks();
        });
        options?.complete?.();
    }
    _exitFullscreen() {
        if (!this.isFullscreen) {
            return;
        }
        this.isFullscreen = false;
        this.video && (this.video.fullscreening = true);
        this.page?.setPageStyle(new UTSJSONObject(new UTSJSONObject({
            navigationStyle: this.lastNavigationStyle
        })));
        this.exitFullscreenResetStyle();
        this.callFullscreenchangeCallbacks();
    }
}
const createVideoContext: CreateVideoContext = defineSyncApi<VideoContext | null>('createVideoContext', (videoId: string, component: ComponentPublicInstance | null = null): VideoContextImpl | null => {
    let videoElement: UniVideoElement | null | undefined = null;
    if (component == null) {
        const pages = getCurrentPages() as UniPage[];
        if (pages.length > 0) {
            const page = pages[pages.length - 1];
            if (!page) {
                UTS.console.error(`getCurrentPages is empty`);
                return null;
            }
            videoElement = ((page.vm as any).$el as UniElement)?.parentElement?.querySelector('#' + videoId) as (UniVideoElement | null);
            if (videoElement == null) {
                const dialogPages = page.getDialogPages() as UniPage[];
                if (dialogPages.length > 0) {
                    const topDialogPage = dialogPages[dialogPages.length - 1];
                    if (!topDialogPage) {
                        UTS.console.error(`getDialogPages is empty`);
                        return null;
                    }
                    videoElement = ((topDialogPage.vm as any).$el as UniElement)?.parentElement?.querySelector('#' + videoId) as (UniVideoElement | null);
                }
            }
        }
    }
    else {
        videoElement = (component.$el as UniElement)?.parentElement?.querySelector('#' + videoId) as (UniVideoElement | null);
    }
    if (videoElement == null)
        return null;
    return new VideoContextImpl(videoElement.getVideo());
}) as CreateVideoContext;
class VideoContextImpl implements VideoContext {
    private video?: Video | null = null;
    constructor(video: Video | null = null) {
        this.video = video;
    }
    play() {
        this.video?.play();
    }
    pause() {
        this.video?.pause();
    }
    seek(position: number) {
        this.video?.seek(position);
    }
    stop() {
        this.video?.stop();
    }
    sendDanmu(danmu: Danmu) {
        this.video?.sendDanmu(danmu);
    }
    playbackRate(rate: number) {
        this.video && (this.video.playbackRate = rate);
    }
    requestFullScreen(options: RequestFullScreenOptions | null = null) {
        this.video?.requestFullscreen(options);
    }
    exitFullScreen() {
        this.video?.exitFullscreen();
    }
}
class AudioManager {
    offVolumeChange: () => void = () => { };
    currentVolume: number = 0;
    maxVolume: number = 1;
    minVolume: number = 0;
    constructor(mediaVolumeChange: (volume: number) => void) {
        const VolumeMEDIA = audio.AudioVolumeType.MEDIA;
        let audioManager = audio.getAudioManager();
        let audioVolumeManager: audio.AudioVolumeManager = audioManager.getVolumeManager();
        const volumeChange = (volumeEvent: audio.VolumeEvent) => {
            if (volumeEvent.volumeType === VolumeMEDIA) {
                mediaVolumeChange(volumeEvent.volume);
            }
        };
        audioVolumeManager.on('volumeChange', volumeChange);
        const audioVolumeGroupManager = audioVolumeManager.getVolumeGroupManagerSync(audio.DEFAULT_VOLUME_GROUP_ID);
        this.currentVolume = audioVolumeGroupManager.getVolumeSync(VolumeMEDIA);
        this.minVolume = audioVolumeGroupManager.getMinVolumeSync(VolumeMEDIA);
        this.maxVolume = audioVolumeGroupManager.getMaxVolumeSync(VolumeMEDIA);
        this.offVolumeChange = () => {
            audioVolumeManager.off('volumeChange', volumeChange);
        };
    }
}
class Brightness {
    private window?: OHWindow.Window;
    constructor() {
        const currentMP = getCurrentMP();
        this.window = currentMP.window;
    }
    getBrightness(): number {
        const brightness = this.window?.getWindowProperties().brightness ?? 0;
        return brightness === -1 ? 0.3 : brightness;
    }
    setBrightness(brightness: number): Promise<void> {
        if (this.window) {
            return this.window.setWindowBrightness(brightness);
        }
        else {
            return Promise.reject('window is not defined');
        }
    }
}
export { Danmu as Danmu, RequestFullScreenOptions as RequestFullScreenOptions };
export type { VideoContext as VideoContext, CreateVideoContext as CreateVideoContext, UniVideoFullScreenDirection as UniVideoFullScreenDirection, VideoError as VideoError, VideoErrorCode as VideoErrorCode, UniVideoEvent as UniVideoEvent };
export { UniVideoTimeUpdateEventDetail as UniVideoTimeUpdateEventDetail, UniVideoFullScreenChangeEventDetail as UniVideoFullScreenChangeEventDetail, UniVideoProgressEventDetail as UniVideoProgressEventDetail, UniVideoFullScreenClickEventDetail as UniVideoFullScreenClickEventDetail, UniVideoControlsToggleEventDetail as UniVideoControlsToggleEventDetail, UniVideoTimeUpdateEventDetail as VideoTimeUpdateEventDetail, UniVideoFullScreenChangeEventDetail as VideoFullScreenChangeEventDetail, UniVideoProgressEventDetail as VideoProgressEventDetail, UniVideoFullScreenClickEventDetail as VideoFullScreenClickEventDetail, UniVideoControlsToggleEventDetail as VideoControlsToggleEventDetail };
export type { UniVideoTimeUpdateEvent as UniVideoTimeUpdateEvent, UniVideoFullScreenChangeEvent as UniVideoFullScreenChangeEvent, UniVideoErrorEvent as UniVideoErrorEvent, UniVideoProgressEvent as UniVideoProgressEvent, UniVideoFullScreenClickEvent as UniVideoFullScreenClickEvent, UniVideoControlsToggleEvent as UniVideoControlsToggleEvent, UniVideoTimeUpdateEvent as VideoTimeUpdateEvent, UniVideoFullScreenChangeEvent as VideoFullScreenChangeEvent, UniVideoErrorEvent as VideoErrorEvent, UniVideoProgressEvent as VideoProgressEvent, UniVideoFullScreenClickEvent as VideoFullScreenClickEvent, UniVideoControlsToggleEvent as VideoControlsToggleEvent };
export type { BuilderVideoOptions as BuilderVideoOptions };
export type { VideoEvent as VideoEvent };
export type { ObjectFit as ObjectFit };
export type { BuilderVideoParams as BuilderVideoParams };
export type { OnPreparedEvent as OnPreparedEvent };
export type { OnSeekingEvent as OnSeekingEvent };
export type { OnSeekedEvent as OnSeekedEvent };
export type { OnUpdateEvent as OnUpdateEvent };
export type { OnFullscreenChange as OnFullscreenChange };
export { Video as Video };
export { UniVideoElement as UniVideoElement };
export { createVideoContext as createVideoContext };
export { AudioManager as AudioManager };
export { Brightness as Brightness };
