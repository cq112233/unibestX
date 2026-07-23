import { LivePlayerErrorCode } from './unierror.uts'

export type StreamingContextListener = {
	play: () => void
	pause: () => void
	replay: () => void
	requestFullScreen: (callback?: LivePlayerOptions) => void
	exitFullScreen: (callback?: LivePlayerOptions) => void
}

export type StreamingBufferingListener = {
	onBufferingStart : () => void
	onBufferingEnd : () => void
}

export type StreamingMuteChangedListener = (isMute : boolean) => void

export type StreamingProgressListener = (progress : number, duration : number) => void

export type LivePlayerStreamingStateListener = (info : UniLivePlayerStatechangeEvent) => void

export type LivePlayerStreamingErrorListener = (info : UniLivePlayerErrorEvent) => void

export type StreamingFullScreenChangedListener = (info: UniLivePlayerFullscreenchangeEvent) => void


// 对外暴露接口 ------------------------------------------------

/**
 * 通用事件
 */
interface LivePlayerEvent {
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
 * 播放状态变化事件
 */
export interface UniLivePlayerStatechangeEvent extends LivePlayerEvent {
	detail : UniLivePlayerStatechangeEventDetail
}

export type UniLivePlayerStatechangeEventDetail = {
	code : number
}

/**
 * 全屏事件
 */
export interface UniLivePlayerFullscreenchangeEvent extends LivePlayerEvent {
	detail: UniLivePlayerFullscreenchangeEventDetail
}

export type UniLivePlayerFullscreenchangeEventDetail = {
	direction : string
	fullScreen: boolean
}

/**
 *  错误事件
 */
export interface UniLivePlayerErrorEvent extends LivePlayerEvent {
	detail : UniLivePlayerError
}

export type UniLivePlayerError = {
	errCode : LivePlayerErrorCode
	errMsg : string
}

export type LivePlayerSuccess = UTSJSONObject;
export type LivePlayerSuccessCallback = (res : LivePlayerSuccess) => void;
export type LivePlayerFail = UTSJSONObject;
export type LivePlayerFailCallback = (res : LivePlayerFail) => void;
export type LivePlayerComplete = any;
export type LivePlayerCompleteCallback = (res : LivePlayerComplete) => void;

/**
 * 方法调用参数
 */
export type LivePlayerOptions = {
	success?: LivePlayerSuccessCallback | null,
	fail?: LivePlayerFailCallback | null,
	complete?: LivePlayerCompleteCallback | null
}

export interface LivePlayerContext {
	/** 
	 * 播放
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	play(options?: LivePlayerOptions) : void
	/**
	 * 暂停
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	pause(options?: LivePlayerOptions) : void
	/**
	 * 停止
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	stop(options?: LivePlayerOptions) : void
	/**
	 * 恢复
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	resume(options?: LivePlayerOptions) : void
	/**
	 * 静音
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	mute(options?: LivePlayerOptions): void
	/**
	 * 全屏
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	requestFullScreen(options?: LivePlayerOptions): void
	/**
	 * 退出全屏
     * @uniPlatform {
     *   "mp": {
     *     "weixin": {
     *       "hostVer": "√",
     *       "uniVer": "√",
     *       "unixVer": "4.41"
     *     },
     *     "alipay": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "baidu": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "toutiao": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "lark": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "qq": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "kuaishou": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     },
     *     "jd": {
     *       "hostVer": "-",
     *       "uniVer": "-",
     *       "unixVer": "-"
     *     }
     *   }
     * }
     */
	exitFullScreen(options?: LivePlayerOptions): void
}

/**
 * 创建 liveplayer context
 */
export type CreateLivePlayerContext = (livePlayerId : string, component ?: ComponentPublicInstance | null) => LivePlayerContext | null

export interface Uni {
	createLivePlayerContext : (livePlayerId : string, component ?: ComponentPublicInstance | null) => LivePlayerContext | null;
}