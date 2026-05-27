// @ts-nocheck
/**
 * 类名属性类型
 * @description 支持 string、number、null、undefined、对象和数组类型
 */
// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif

export type ClassProp =
	| string
	| number
	| null
	| undefined
	| UTSJSONObject
	| ClassProp[]

/**
 * 把各种类型的参数拼接成字符串类名，以便解决小程序不支持 classObject 的问题
 * @description 支持多种参数类型的类名拼接，包括字符串、数字、数组和对象
 * @param args 类名参数，可以是字符串、数字、null、undefined、对象或数组
 * @returns 拼接后的类名字符串
 * @example
 * classNames('foo', 'bar') // 'foo bar'
 * classNames('foo', { bar: true, baz: false }) // 'foo bar'
 * classNames('foo', ['bar', 'baz']) // 'foo bar baz'
 * classNames('foo', null, 'bar') // 'foo bar'
 * classNames({ foo: true, bar: false, baz: true }) // 'foo baz'
 */
export function classNames(...args : ClassProp[]) : string {
	return classNamesArray(args)
}

/**
 * 处理数组的类名
 * @description 用于内部递归处理数组类型的类名
 * @param args 类名数组
 * @returns 拼接后的类名字符串
 */
function classNamesArray(args : ClassProp[]) : string {
	const result : string[] = []

	for (let i = 0; i < args.length; i++) {
		const arg = args[i]
		if (arg == null) {
			continue
		}

		if (typeof arg == 'string') {
			const trimmed = arg.trim()
			if (trimmed != '') {
				result.push(trimmed)
			}
		} else if (typeof arg == 'number') {
			if (isFinite(arg)) {
				result.push(`${arg}`)
			}
		} else if (Array.isArray(arg)) {
			if (arg.length > 0) {
				const className = classNamesArray(arg)
				if (className != '') {
					result.push(className)
				}
			}
		} else if (typeof arg == 'object') {
			// #ifndef UNI-APP-X && APP
			for (const key in arg) {
				const value = arg[key]
				if (value == true) {
					result.push(key)
				}
			}
			// #endif
			// #ifdef UNI-APP-X && APP
			(arg as UTSJSONObject).toMap().forEach((value, key) => {
				if (value == true) {
					result.push(key)
				}
			})
			// #endif
		}
	}

	return result.join(' ')
}