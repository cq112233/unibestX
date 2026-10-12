// @ts-nocheck
// #ifndef UNI-APP-X
import {
	ref,
	computed,
	onActivated,
	onDeactivated,
	onBeforeUnmount,
	type ComputedRef
} from '@/uni_modules/lime-shared/vue';
// #endif

// #ifdef UNI-APP-X
// #ifndef APP-ANDROID
import type { ComputedRef } from 'vue'
// #endif
// #endif

import { raf, cancelRaf } from '@/uni_modules/lime-shared/raf';
import { parseFormat } from './utils';
import { fillZero } from '@/uni_modules/lime-shared/fillZero';

// export * from './utils';

export type CurrentTime = {
	days : number;
	hours : number;
	total : number;
	minutes : number;
	seconds : number;
	milliseconds : number;
};

export type UseCountDownOptions = {
	time : number;
	millisecond ?: boolean;
	format?: string;
	onChange ?: (current : CurrentTime) => void;
	onFinish ?: () => void;
};

// 定义返回类型
export type UseCountDownReturn = {
	start : () => void;
	pause : () => void;
	reset : (totalTime ?: number) => void;
	current : ComputedRef<CurrentTime>;
	formattedTime: ComputedRef<string>;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * 将时间转换为CurrentTime结构体
 * @param {number} time - 时间（毫秒）
 * @returns {CurrentTime} - 当前时间结构体
 */
function parseTime(time : number) : CurrentTime {
	const days = Math.floor(time / DAY);
	const hours = Math.floor((time % DAY) / HOUR);
	const minutes = Math.floor((time % HOUR) / MINUTE);
	const seconds = Math.floor((time % MINUTE) / SECOND);
	const milliseconds = Math.floor(time % SECOND);

	return {
		total: time,
		days,
		hours,
		minutes,
		seconds,
		milliseconds,
	} as CurrentTime
}

/**
 * 判断两个时间是否在同一秒
 * @param {number} time1 - 时间1（毫秒）
 * @param {number} time2 - 时间2（毫秒）
 * @returns {boolean} - 是否在同一秒
 */
function isSameSecond(time1 : number, time2 : number) : boolean {
	const diff = Math.abs(time1 - time2);
	return diff < 1000 || Math.floor(time1 / 1000) == Math.floor(time2 / 1000);
}
// #ifndef APP-ANDROID
const now = () : number => (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
// #endif

// #ifdef APP-ANDROID
const now = () : number => System.nanoTime() / 1_000_000.0  // Date.now();
// #endif

/**
 * 倒计时功能函数
 * @param {UseCountDownOptions} options - 倒计时选项
 * @returns {UseCountDownReturn} - 倒计时返回值
 */
export function useCountDown(options : UseCountDownOptions) : UseCountDownReturn {
	let rafId : number = -1;
	let endTime : number = 0;
	let counting : boolean = false;
	let deactivated : boolean = false;
	let tick : (() => void) = () => {};
	const remain = ref(options.time);
	const current = computed(() : CurrentTime => parseTime(remain.value));
	const formattedTime = computed(() : string => {
		if (options.format != null) {
			return parseFormat(options.format!, current.value);
		}
		return `${fillZero(current.value.hours)}:${fillZero(current.value.minutes)}:${fillZero(current.value.seconds)}`;
	});

	/**
	 * 暂停倒计时
	 */
	const pause = () => {
		counting = false;
		cancelRaf(rafId);
	};

	/**
	 * 获取当前剩余时间
	 * @returns {number} - 剩余时间（毫秒）
	 */
	const getCurrentRemain = () : number => Math.max(endTime - now(), 0);

	/**
	 * 设置剩余时间
	 * @param {number} value - 剩余时间（毫秒）
	 */
	const setRemain = (value : number) => {
		remain.value = value;
		options.onChange?.(current.value);
	};



	tick = () => {
		rafId = raf(() => {
			if (counting) {
				const remainRemain = getCurrentRemain();
				if (remainRemain <= 0) {
					setRemain(0);
					pause();
					options.onFinish?.();
					return;
				}
				if (options.millisecond != null && options.millisecond! || !isSameSecond(remainRemain, remain.value)) {
					setRemain(remainRemain);
				}
				tick();
			}
		});
	}

	/**
	 * 开始倒计时
	 */
	const start = () => {
		if (!counting) {
			endTime = now() + remain.value;
			counting = true;
			tick();
		}
	};

	/**
	 * 重置倒计时
	 * @param {number} [totalTime=options.time] - 重置后的总时间（毫秒）
	 */
	const reset = (totalTime : number | null) => {
		pause();
		remain.value = totalTime ?? options.time;
	};

	onBeforeUnmount(pause);

	onActivated(() => {
		if (deactivated) {
			counting = true;
			deactivated = false;
			tick();
		}
	});

	onDeactivated(() => {
		if (counting) {
			pause();
			deactivated = true;
		}
	});

	return {
		start,
		pause,
		reset,
		current,
		formattedTime,
	} as UseCountDownReturn
}
