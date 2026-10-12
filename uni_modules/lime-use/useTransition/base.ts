// @ts-nocheck
// #ifndef UNI-APP-X
import type { Ref } from '@/uni_modules/lime-shared/vue'
import { toValue } from '@/uni_modules/lime-shared/vue'
// #endif
import { raf } from '@/uni_modules/lime-shared/raf'
import { identity as linear } from '../shared/identity'
import type { CubicBezierPoints, EasingFunction, UseTransitionOptions} from './types'

/**
 * 从三次贝塞尔曲线点创建缓动函数。
 */
function createEasingFunction([p0, p1, p2, p3]: CubicBezierPoints): EasingFunction {
	const a = (a1: number, a2: number) => 1 - 3 * a2 + 3 * a1
	const b = (a1: number, a2: number) => 3 * a2 - 6 * a1
	const c = (a1: number) => 3 * a1

	const calcBezier = (t: number, a1: number, a2: number) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t

	const getSlope = (t: number, a1: number, a2: number) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1)

	const getTforX = (x: number) => {
		let aGuessT = x

		for (let i = 0; i < 4; ++i) {
			const currentSlope = getSlope(aGuessT, p0, p2)
			if (currentSlope == 0)
				return aGuessT
			const currentX = calcBezier(aGuessT, p0, p2) - x
			aGuessT -= currentX / currentSlope
		}

		return aGuessT
	}
	return (x: number) => (p0 == p1 && p2 == p3) ? x : calcBezier(getTforX(x), p1, p3)
}

/**
 * 线性插值
 */
function lerp(a: number, b: number, alpha: number): number {
	return a + alpha * (b - a)
}

/**
 * 默认插值函数
 */
function defaultInterpolation<T>(a: T, b: T, t: number): T {
	const aVal = a //toValue<any>(a)
	const bVal = b //toValue<any>(b)

	if (typeof aVal == 'number' && typeof bVal == 'number') {
		return lerp(aVal as number, bVal as number, t) as T
	}

	if (Array.isArray(aVal) && Array.isArray(bVal)) {
		const _aVal = aVal as any[]
		const _bVal = bVal as any[]
		return _aVal.map((v, i) => {
			if (i < _bVal.length && typeof v == 'number' && typeof _bVal[i] == 'number') {
				return lerp(v, toValue(_bVal[i]), t)
			}
			return v
		}) as T
	}
	
	throw new Error('未知的过渡类型，请指定插值函数。')
}



/**
 * 从一个值过渡到另一个值。
 *
 * @param source 源值引用
 * @param from 起始值
 * @param to 目标值
 * @param options 过渡选项
 */
export function transition<T>(
	source: Ref<T>,
	from: T,
	to: T,
	options: UseTransitionOptions<T> = {},
): Promise<void> {
	const fromVal = from //toValue<T>(from)
	const toVal = to // toValue<T>(to)
	const duration = toValue<number>(options.duration ?? 1000)
	const startedAt = Date.now()
	const endAt = Date.now() + duration

	const interpolation = (from: T, to: T, t: number): T => {
		if(options.interpolation != null && typeof options.interpolation == 'function') {
			return options.interpolation(from, to, t)
		}
		return defaultInterpolation(from, to, t)
	}

	const ease = (n: number):number => {
		const easing = options.easing 
		if(easing == null) {
			return linear(n)
		}
		if (typeof easing == 'function') {
			return easing(n)
		}
		
		const easingValue = toValue<EasingFunction | CubicBezierPoints>(easing!)
		if (typeof easingValue == 'function') {
			return easingValue(n)
		}
		return createEasingFunction(easingValue as CubicBezierPoints)(n)
	}

	return new Promise<void>((resolve) => {
		source.value = fromVal
		let tick: (() => void)|null = null
		tick = () => {
			if (options.abort != null && typeof options.abort == 'function' && options.abort()) {
				resolve()
				return
			}

			const now = Date.now()
			const alpha = ease((now - startedAt) / duration)

			source.value = interpolation(fromVal, toVal, alpha)

			if (options.onChange != null && typeof options.onChange == 'function') {
				options.onChange(source.value)
			}

			if (now < endAt && tick!=null) {
				// #ifdef UNI-APP-X && APP || WEB
				requestAnimationFrame(tick!)
				// #endif
				// #ifndef UNI-APP-X && APP || WEB
				raf(tick!)
				// #endif
			} else {
				source.value = toVal
				if (options.onChange != null && typeof options.onChange == 'function') {
					options.onChange(source.value)
				}
				resolve()
			}
		}

		tick?.()
	})
}

