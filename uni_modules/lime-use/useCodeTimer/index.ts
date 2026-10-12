// @ts-nocheck

/**
 * @file useCodeTimer/index.ts
 * @description 验证码倒计时管理组合式函数
 * @author lime-ui
 * @date 2025
 * @license MIT
 */

// 条件编译：排除UNI-APP-X环境
// #ifndef UNI-APP-X
// 导入Vue响应式API和计算属性
import { ref, onMounted, onBeforeUnmount, computed } from '@/uni_modules/lime-shared/vue';
// 导入类型定义
import type { Ref, ComputedRef } from '@/uni_modules/lime-shared/vue';
// #endif

// 导入作用域清理工具函数
import { tryOnScopeDispose } from '../shared/tryOnScopeDispose'

/**
 * 验证码倒计时选项配置
 */
export type UseCodeTimerOptions = {
	/** 倒计时总秒数，默认值：60秒 */
	seconds ?: number;
	/** 倒计时开始前显示的文本，默认值：'获取验证码' */
	startText ?: string;
	/** 倒计时进行中显示的文本，X会被替换为剩余秒数，默认值：'X秒重新获取' */
	changeText ?: string;
	/** 倒计时结束后显示的文本，默认值：'重新获取' */
	endText ?: string;
	/** 是否在页面刷新后保持倒计时状态，默认值：false */
	keepRunning ?: boolean;
	/** 用于本地存储的唯一键名，避免多个倒计时冲突，默认值：'default_code_timer' */
	uniqueKey ?: string;
	/** 定时器间隔（毫秒），默认值：1000ms */
	interval?: number;
	/** 倒计时开始时的回调函数 */
	onStart ?: () => void;
	/** 倒计时结束时的回调函数 */
	onEnd ?: () => void;
};

/**
 * 验证码倒计时返回值
 */
export type UseCodeTimerReturn = {
	/** 当前显示的文本 */
	tip : ComputedRef<string>
	/** 是否可以重新获取验证码 */
	canGetCode : Ref<boolean>;
	/** 开始倒计时的函数 */
	start : () => void;
	/** 重置倒计时的函数 */
	reset : () => void;
	/** 停止倒计时的函数 */
	stop : () => void;
	/** 暂停倒计时的函数 */
	pause : () => void;
	/** 继续倒计时的函数 */
	resume : () => void;
	/** 是否处于暂停状态 */
	isPaused : Ref<boolean>;
	/** 当前剩余秒数 */
	secondsRemaining : Ref<number>;
}

/**
 * 验证码倒计时管理组合式函数
 * @param {UseCodeTimerOptions} options - 配置选项
 * @returns {UseCodeTimerReturn} 倒计时控制对象
 * @example
 * const { tip, canGetCode, start } = useCodeTimer({
 *   seconds: 60,
 *   startText: '获取验证码',
 *   changeText: '重新获取 (X秒)',
 *   endText: '重新获取',
 *   keepRunning: true,
 *   uniqueKey: 'myCodeTimer'
 * })
 */
export function useCodeTimer(options : UseCodeTimerOptions = {}) : UseCodeTimerReturn {
	// 解构并设置默认值
	const {
		seconds = 60,           // 倒计时总秒数
		startText = '获取验证码', // 开始前文本
		changeText = 'X秒重新获取', // 倒计时中文本
		endText = '重新获取',     // 结束后文本
		keepRunning = false,     // 是否保持运行状态
		uniqueKey = 'default_code_timer', // 唯一键名
		onStart,                // 开始回调
		onEnd,                  // 结束回调
		interval = 1000         // 定时器间隔
	} = options;

	// 当前秒数（响应式）
	const secNum = ref<number>(seconds);
	// 是否可以获取验证码（计算属性）
	const canGetCode = computed(() : boolean => secNum.value == seconds);
	// 是否暂停（响应式）
	const isPaused = ref<boolean>(false);
	// 定时器ID
	let timer : number | null = null;

	/**
	 * 当前显示的文本（计算属性）
	 * 根据倒计时状态返回不同的文本
	 */
	const tip = computed<string>(() => {
		if (secNum.value == seconds) {
			// 初始状态或倒计时结束
			return startText;
		} else if (secNum.value > 0) {
			// 倒计时进行中，替换X为剩余秒数
			return changeText.replace(/x|X/, `${secNum.value}`);
		} else {
			// 倒计时结束
			return endText;
		}
	});

	/**
	 * 保存倒计时状态到本地存储
	 */
	const saveTimestampToStorage = () => {
		// 仅当启用了keepRunning且定时器存在时才保存
		if (!keepRunning || timer == null) return;
		
		// 仅在倒计时进行中保存
		if (secNum.value > 0 && secNum.value <= seconds) {
			// 计算结束时间戳
			const nowTimestamp = Math.floor(Date.now() / 1000);
			try {
				// 保存到本地存储
				uni.setStorageSync(`${uniqueKey}_$limeCodeTimerTimestamp`, nowTimestamp + secNum.value);
			} catch (error) {
				// 保存失败时输出警告
				console.warn('Failed to save timer state to storage:', error);
			}
		}
	};

	/**
	 * 从本地存储恢复倒计时状态
	 * @returns {boolean} 是否成功恢复
	 */
	const restoreFromStorage = () : boolean => {
		try {
			// 从本地存储获取保存的时间戳
			const lastTimestamp = parseInt(`${uni.getStorageSync(`${uniqueKey}_$limeCodeTimerTimestamp`)}`);
			// 检查是否为有效数字
			if (isNaN(lastTimestamp)) return false;

			// 获取当前时间戳
			const nowTimestamp = Math.floor(Date.now() / 1000);
			// 检查是否需要恢复
			if (keepRunning && lastTimestamp > nowTimestamp) {
				// 计算剩余秒数
				secNum.value = lastTimestamp - nowTimestamp;
				// 清除已使用的存储
				uni.removeStorageSync(`${uniqueKey}_$limeCodeTimerTimestamp`);
				return true;
			}
		} catch (error) {
			// 恢复失败时输出警告
			console.warn('Failed to restore timer state from storage:', error);
		}
		return false;
	};

	/**
	 * 清理函数，停止定时器并保存状态
	 */
	const cleanup = () => {
		if (timer != null) {
			// 保存当前状态
			saveTimestampToStorage();
			// 清除定时器
			clearInterval(timer!);
			// 重置定时器ID
			timer = null;
		}
	};

	/**
	 * 内部启动函数，用于恢复或用户触发
	 * 使用时间戳计算剩余时间，提高计时精度
	 */
	const _startInternal = () => {
		// 清除已存在的定时器
		if (timer != null) clearInterval(timer!);

		// 记录开始时间戳，用于精确计算剩余时间
		const startTime = Date.now();
		// 记录初始剩余秒数
		const initialRemaining = secNum.value;

		// 触发开始回调
		onStart?.();
		// 保存初始状态
		saveTimestampToStorage();

		// 创建定时器
		timer = setInterval(() => {
			// 基于时间戳计算已流逝的时间（秒）
			const elapsed = Math.floor((Date.now() - startTime) / 1000);
			// 更新剩余秒数
			secNum.value = initialRemaining - elapsed;
			
			if (secNum.value > 0) {
				// 倒计时进行中，保存状态
				saveTimestampToStorage();
			} else {
				// 倒计时结束
				if (timer != null) {
					// 清除定时器
					clearInterval(timer!);
					timer = null;
				}
				// 重置秒数
				secNum.value = seconds;
				// 触发结束回调
				onEnd?.();
			}
		}, interval);
	};

	/**
	 * 开始倒计时
	 */
	const start = () => {
		// 只有在可以获取验证码时才允许开始
		if (!canGetCode.value) return;
		// 调用内部启动函数
		_startInternal();
	};

	/**
	 * 重置倒计时
	 */
	const reset = () => {
		// 清除定时器
		if (timer != null) {
			clearInterval(timer!);
			timer = null;
		}
		// 重置秒数
		secNum.value = seconds;
		// 重置暂停状态
		isPaused.value = false;
		// 清除本地存储
		if (keepRunning) {
			try {
				uni.removeStorageSync(`${uniqueKey}_$limeCodeTimerTimestamp`);
			} catch (error) {
				console.warn('Failed to remove timer state from storage:', error);
			}
		}
	};

	/**
	 * 暂停倒计时
	 */
	const pause = () => {
		if (timer != null) {
			// 清除定时器
			clearInterval(timer!);
			timer = null;
			// 设置暂停状态
			isPaused.value = true;
		}
	};
	
	/**
	 * 继续倒计时
	 */
	const resume = () => {
		// 仅在暂停状态且倒计时未结束时允许继续
		if (isPaused.value && secNum.value > 0 && secNum.value < seconds) {
			// 重置暂停状态
			isPaused.value = false;
			// 调用内部启动函数
			_startInternal();
		}
	};

	/**
	 * 组件挂载时恢复倒计时状态
	 */
	onMounted(() => {
		// 尝试从本地存储恢复状态
		const shouldRestore = restoreFromStorage();
		// 如果成功恢复，则启动倒计时
		if (!shouldRestore) return;
		_startInternal();
	});

	/**
	 * 清理逻辑：优先使用作用域自动清理
	 * 如果不在作用域内，则回退到组件卸载前清理
	 */
	if (!tryOnScopeDispose(cleanup)) {
		// 组件卸载前清理
		onBeforeUnmount(cleanup);
	}

	/**
	 * 返回倒计时控制对象
	 */
	return {
		tip,                // 当前显示的文本
		canGetCode,         // 是否可以重新获取验证码
		start,              // 开始倒计时
		reset,              // 重置倒计时
		stop: cleanup,      // 停止倒计时
		pause,              // 暂停倒计时
		resume,             // 继续倒计时
		isPaused,           // 是否处于暂停状态
		secondsRemaining: secNum // 当前剩余秒数
	} as UseCodeTimerReturn;
}