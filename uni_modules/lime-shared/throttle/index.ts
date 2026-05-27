// @ts-nocheck
/**
 * 节流函数，用于限制函数的调用频率
 * @param fn 要进行节流的函数
 * @param interval 两次调用之间的最小间隔时间
 * @returns 节流后的函数
 */
export type ThrottleOptions = {
	/**
	 * 是否在节流开始时立即执行
	 * @default true
	 */
	leading ?: boolean;

	/**
	 * 是否在节流结束后执行最后一次调用
	 * @default true
	 */
	trailing ?: boolean;
}



/**
 * 节流函数，限制函数在一定时间内只能执行一次
 * @param func 需要节流的函数
 * @param wait 节流间隔时间（毫秒）
 * @param options 配置选项
 * @param options.leading 是否在节流开始时立即执行（默认 true）
 * @param options.trailing 是否在节流结束时执行最后一次调用（默认 true）
 * @returns 返回节流后的函数
 */
// #ifndef APP-ANDROID 
export function throttle<T extends (...args : any[]) => any>(
	func : T,
	wait : number,
	options : ThrottleOptions = {}
) : (...args : Parameters<T>) => void {
	let lastCallTime = 0;
	let timerId : ReturnType<typeof setTimeout> | null = null;
	const { leading = true, trailing = true } = options;
	return function (...args : Parameters<T>) {
		const now = Date.now();
		const timeSinceLastCall = now - lastCallTime;
		// 1. 如果 leading=true 且距离上次调用超过 wait，立即执行
		if (leading && timeSinceLastCall >= wait) {
			lastCallTime = now;
			func.apply(this, args);
		}
		// 2. 如果 trailing=true，设置定时器在 wait 时间后执行最后一次调用
		else if (trailing && !timerId) {
			timerId = setTimeout(() => {
				lastCallTime = Date.now();
				func.apply(this, args);
				timerId = null;
			}, wait - timeSinceLastCall);
		}
	};
}
// #endif

// #ifdef APP-ANDROID 
export function throttle<T extends any|null>(
	func: (args : T) => void, 
	wait : number,
	options : ThrottleOptions = {}
) : (args : T) => void {
	let lastCallTime = 0;
	let timerId  = -1;
	const { leading = true, trailing = true } = options;
	return function (args : T) {
		const now = Date.now();
		const timeSinceLastCall = now - lastCallTime;
		// 1. 如果 leading=true 且距离上次调用超过 wait，立即执行
		if (leading && timeSinceLastCall >= wait) {
			lastCallTime = now;
			func(args);
		}
		// 2. 如果 trailing=true，设置定时器在 wait 时间后执行最后一次调用
		else if (trailing && timerId > -1) {
			timerId = setTimeout(() => {
				lastCallTime = Date.now();
				func(args);
				timerId = -1;
			}, wait - timeSinceLastCall);
		}
	};
}
// #endif