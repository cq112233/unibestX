// @ts-nocheck
// import type { MaybeRef, MaybeRefOrGetter } from 'vue'
import type { MaybeRef } from '../shared/types';
export type NumberOrNumberArray = number | number[]
/**
 * 三次贝塞尔曲线点
 */
export type CubicBezierPoints = number[]

/**
 * 缓动函数
 */
export type EasingFunction = (n: number) => number

/**
 * 插值函数
 */
export type InterpolationFunction<T> = (from: T, to: T, t: number) => T


/**
 * 跟随值进行过渡的选项
 */
export type UseTransitionOptions<T> = {
	/**
	 * 暂时未实现
	 */
	immediate ?: boolean
	/**
	 * 手动中止过渡
	 */
	abort?: () => boolean
	
	/**
	 * 过渡持续时间（毫秒）
	 */
	duration?: MaybeRef<number>
	
	/**
	 * 计算过渡进度的缓动函数或三次贝塞尔曲线点
	 */
	easing?: MaybeRef<EasingFunction | CubicBezierPoints>
	
	/**
	 * 自定义插值函数
	 */
	interpolation?: InterpolationFunction<T>
	
	/**
	 * 开始过渡前的等待时间（毫秒）
	 */
	delay?: MaybeRef<number>

	/**
	 * 禁用过渡
	 */
	disabled?: MaybeRef<boolean>

	/**
	 * 过渡完成后执行的回调
	 */
	onFinished?: () => void

	/**
	 * 过渡开始后执行的回调
	 */
	onStarted?: () => void

	/**
	 * 过渡过程中值变化时执行的回调
	 */
	onChange?: (value: T) => void
}

/**
 * 过渡预设类型
 */
export type TransitionPresetsType = {
	linear: EasingFunction
	easeInSine: CubicBezierPoints
	easeOutSine: CubicBezierPoints
	easeInOutSine: CubicBezierPoints
	easeInQuad: CubicBezierPoints
	easeOutQuad: CubicBezierPoints
	easeInOutQuad: CubicBezierPoints
	easeInCubic: CubicBezierPoints
	easeOutCubic: CubicBezierPoints
	easeInOutCubic: CubicBezierPoints
	easeInQuart: CubicBezierPoints
	easeOutQuart: CubicBezierPoints
	easeInOutQuart: CubicBezierPoints
	easeInQuint: CubicBezierPoints
	easeOutQuint: CubicBezierPoints
	easeInOutQuint: CubicBezierPoints
	easeInExpo: CubicBezierPoints
	easeOutExpo: CubicBezierPoints
	easeInOutExpo: CubicBezierPoints
	easeInCirc: CubicBezierPoints
	easeOutCirc: CubicBezierPoints
	easeInOutCirc: CubicBezierPoints
	easeInBack: CubicBezierPoints
	easeOutBack: CubicBezierPoints
	easeInOutBack: CubicBezierPoints
}