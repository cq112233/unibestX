import { LivePusherErrorCode } from './unierror.uts'

/**
 * 通用事件
 */
interface LivePusherEvent {
	bubbles : boolean
	cancelable : boolean
	type : string
	target ?: UniElement | null
	currentTarget ?: UniElement | null
	// #ifdef APP-ANDROID
	timeStamp : Long
	// #endif
	// #ifdef APP-IOS
	timeStamp : number
	// #endif
	stopPropagation() : void
	preventDefault() : void
}

/**
 * 推流状态变化事件
 */
export interface UniLivePusherStatechangeEvent extends LivePusherEvent {
	detail : UniLivePusherStatechangeEventDetail
}

export type UniLivePusherStatechangeEventDetail = {
	code : number,
	message : string
}

/**
 * 推流网络状态事件
 */
export interface UniLivePusherNetstatusEvent extends LivePusherEvent {
	detail : UniLivePusherNetstatusEventDetail
}

export type UniLivePusherNetstatusEventDetail = {
	videoBitrate : number,
	audioBitrate : number,
	videoFPS : number,
	videoGOP : number,
	netSpeed : number,
	videoWidth : number,
	videoHeight : number
}

/**
 * 错误事件
 */

export interface UniLivePusherErrorEvent extends LivePusherEvent {
	detail : UniLivePusherError
}

export type UniLivePusherError = {
	errCode : LivePusherErrorCode
	errMsg : string
}

/**
 * LivePusherContext
 */
export type LivePusherContextSettings = {
	url : string
	devicePosition : string
	mode : string
	localMirror : string
	remoteMirror : boolean
	autoFocus : boolean
	muted : boolean
	orientation : string
	beauty : number
	whiten : number
	enableCamera : boolean
	enableMic : boolean
	audioQuality : string
	minBitrate : number
	maxBitrate : number
	audioVolumeType : string
	aspect : string
	backgroundMute : boolean
	waitingImage : string
	zoom : number
	videoWidth : number
	videoHeight : number
}

export type StreamingStateListener = (info : UniLivePusherStatechangeEvent) => void

export type StreamingStatusListener = (info : UniLivePusherNetstatusEvent) => void

export type StreamingErrorListener = (info : UniLivePusherErrorEvent) => void



export type SnapCallbackMessage = {
	width : number,
	height : number,
	tempImagePath : string
}

export type LivePusherSuccess = UTSJSONObject;
export type LivePusherSuccessCallback = (res : LivePusherSuccess) => void;
export type LivePusherFail = UTSJSONObject;
export type LivePusherFailCallback = (res : LivePusherFail) => void;
export type LivePusherComplete = any;
export type LivePusherCompleteCallback = (res : LivePusherComplete) => void;

export type LivePusherOptions = {
	success?: LivePusherSuccessCallback | null,
	fail?: LivePusherFailCallback | null,
	complete?: LivePusherCompleteCallback | null
}

export interface LivePusherContext {
	start(options? : LivePusherOptions) : void
	stop(options? : LivePusherOptions) : void
	switchCamera(options? : LivePusherOptions) : void
	toggleTorch(options? : LivePusherOptions) : void
	pause(options? : LivePusherOptions) : void
	resume(options? : LivePusherOptions) : void
	getMaxZoom(options? : LivePusherOptions) : void
	setZoom(zoom : number, options? : LivePusherOptions) : void
	startPreview(options? : LivePusherOptions) : void
	stopPreview(options? : LivePusherOptions) : void
	snapshot(options? : LivePusherOptions) : void
	sendMessage(message : string, options? : LivePusherOptions) : void
}

export type CreateLivePusherContext = (livePusherId : string, component ?: ComponentPublicInstance | null) => LivePusherContext | null

export interface Uni {
	createLivePusherContext : (livePusherId : string, component ?: ComponentPublicInstance | null) => LivePusherContext | null;
}