/**
 * @internal
 */
export type OnAppCrashCallback = () => void

/**
 * 监听应用崩溃
 * @internal
 */
export type OnAppCrash = (callback : OnAppCrashCallback) => void

/**
 * 取消监听应用崩溃
 * @internal
 */
export type OffAppCrash = () => void

/**
 * @internal
 */
export type AppCrashInfo = {
	/**
	 * 唯一标识符
	 */
	id : string,
	/**
	 * 崩溃的堆栈信息
	 */
	file : string,
	/**
	 * 崩溃发生的时间
	 */
	time : string
}

/**
 * 获取所有的崩溃信息
 * @internal
 */
// #ifdef APP-IOS
export type GetAppCrashInfoIOS = () => Array<Map<string, any>>
// #endif

// #ifdef APP-ANDROID
export type GetAppCrashInfo = () => Array<AppCrashInfo> | null
// #endif

/**
 * 删除指定的崩溃信息，id为空则删除所有的崩溃信息
 * @internal
 */
export type DeleteAppCrashInfo = (id : string | null) => void

export type CreatAppCrash = () => void


export interface Uni {
	/**
	 * 监听异常崩溃发生(iOS不支持)
	 * @internal
	 */
	__onAppCrash(callback : OnAppCrashCallback | null) : void,
	/**
	 * 取消异常崩溃发生(iOS不支持)
	 * @internal
	 */
	__offAppCrash() : void,
	
	/**
	 * 获取异常崩溃数据
	 * @internal
	 */
	// #ifdef APP-IOS
	__getAppCrashInfo() :  Array<Map<string, any>> | null,
	// #endif
	// #ifdef APP-ANDROID
	__getAppCrashInfo() : Array<AppCrashInfo> | null,
	// #endif
	/**
	 * 删除本地对应Crash数据
	 * @internal
	 */
	__deleteAppCrashInfo(id : string | null) : void,
	/**
	 * 触发crash
	 * @internal
	 */
	__createAppCrash() : void
}