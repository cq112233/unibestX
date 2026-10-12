// @ts-nocheck
import { identity } from '../shared/identity'
import type { CubicBezierPoints, EasingFunction, TransitionPresetsType } from './types'

// 单独定义每个过渡效果常量
const easeInSine: CubicBezierPoints = [0.12, 0, 0.39, 0]
const easeOutSine: CubicBezierPoints = [0.61, 1, 0.88, 1]
const easeInOutSine: CubicBezierPoints = [0.37, 0, 0.63, 1]
const easeInQuad: CubicBezierPoints = [0.11, 0, 0.5, 0]
const easeOutQuad: CubicBezierPoints = [0.5, 1, 0.89, 1]
const easeInOutQuad: CubicBezierPoints = [0.45, 0, 0.55, 1]
const easeInCubic: CubicBezierPoints = [0.32, 0, 0.67, 0]
const easeOutCubic: CubicBezierPoints = [0.33, 1, 0.68, 1]
const easeInOutCubic: CubicBezierPoints = [0.65, 0, 0.35, 1]
const easeInQuart: CubicBezierPoints = [0.5, 0, 0.75, 0]
const easeOutQuart: CubicBezierPoints = [0.25, 1, 0.5, 1]
const easeInOutQuart: CubicBezierPoints = [0.76, 0, 0.24, 1]
const easeInQuint: CubicBezierPoints = [0.64, 0, 0.78, 0]
const easeOutQuint: CubicBezierPoints = [0.22, 1, 0.36, 1]
const easeInOutQuint: CubicBezierPoints = [0.83, 0, 0.17, 1]
const easeInExpo: CubicBezierPoints = [0.7, 0, 0.84, 0]
const easeOutExpo: CubicBezierPoints = [0.16, 1, 0.3, 1]
const easeInOutExpo: CubicBezierPoints = [0.87, 0, 0.13, 1]
const easeInCirc: CubicBezierPoints = [0.55, 0, 1, 0.45]
const easeOutCirc: CubicBezierPoints = [0, 0.55, 0.45, 1]
const easeInOutCirc: CubicBezierPoints = [0.85, 0, 0.15, 1]
const easeInBack: CubicBezierPoints = [0.36, 0, 0.66, -0.56]
const easeOutBack: CubicBezierPoints = [0.34, 1.56, 0.64, 1]
const easeInOutBack: CubicBezierPoints = [0.68, -0.6, 0.32, 1.6]

/**
 * 常用过渡效果
 *
 * @see https://easings.net
 */
export const TransitionPresets: TransitionPresetsType = {
	linear: (n) => identity(n),
	easeInSine,
	easeOutSine,
	easeInOutSine,
	easeInQuad,
	easeOutQuad,
	easeInOutQuad,
	easeInCubic,
	easeOutCubic,
	easeInOutCubic,
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
	easeInQuint,
	easeOutQuint,
	easeInOutQuint,
	easeInExpo,
	easeOutExpo,
	easeInOutExpo,
	easeInCirc,
	easeOutCirc,
	easeInOutCirc,
	easeInBack,
	easeOutBack,
	easeInOutBack,
}
