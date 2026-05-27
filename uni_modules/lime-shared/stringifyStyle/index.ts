// @ts-nocheck
/**
 * 驼峰命名转短横线命名
 * @param str - 需要转换的字符串
 * @returns 转换后的短横线命名字符串
 */
function toKebabCase(str : string) : string {
	return str
		.replace(/^[A-Z]/, (m : string, _a : number, _b : string) => m.toLowerCase())
		.replace(/[A-Z]/g, (m : string, _a : number, _b : string) => '-' + m.toLowerCase())
}

// #ifndef UNI-APP-X
type UTSJSONObject = Record<string, any>
// #endif

export type StyleProp =
	| string
	| UTSJSONObject
	| null
	| undefined
	| false
	| StyleProp[]

/**
 * 把样式对象拼接成字符串，解决小程序不支持 styleObject 的问题
 * @description 支持多种参数类型的样式拼接，包括字符串、对象和数组
 * @param args 样式参数，可以是字符串、对象、null、undefined、false 或数组
 * @returns 拼接后的样式字符串
 * @example
 * stringifyStyle('color: red') // 'color: red;'
 * stringifyStyle({ color: 'red', fontSize: '14px' }) // 'color: red;font-size: 14px;'
 * stringifyStyle(['color: red', 'background: blue']) // 'color: red;background: blue;'
 * stringifyStyle('color: red', null, 'background: blue') // 'color: red;background: blue;'
 * stringifyStyle({ color: 'red', display: false, opacity: 0 }) // 'color: red;opacity: 0;'
 */
export function stringifyStyle(...args : StyleProp[]) : string {
	return stringifyStyleArray(args)
}

function isValidStyleValue(value : StyleProp) : boolean {
	if (value == null) return false; 	// 排除 null/undefined
	if (value == '') return false; 		// 排除空字符串
	if (typeof value == 'number') {
		return isFinite(value as number);  		// 允许有效数字，排除 NaN/Infinity
	}
	if (typeof value == 'boolean') {
		return false 					// 排除所有布尔值
	}
	return true;  						// 字符串和其他情况
}


/**
 * 处理数组的样式
 * @description 用于内部递归处理数组类型的样式
 * @param args 样式数组
 * @returns 拼接后的样式字符串
 */
function stringifyStyleArray(args : StyleProp[]) : string {
	const result : string[] = []

	for (let i = 0; i < args.length; i++) {
		const arg = args[i]
		if (!isValidStyleValue(arg)) continue
		if (typeof arg == 'string') {
			result.push(arg)
		} else if (Array.isArray(arg)) {
			if (arg.length > 0) {
				const style = stringifyStyleArray(arg)
				if (style != '') {
					result.push(style)
				}
			}
		} else if (typeof arg == 'object') {
			// #ifndef APP-ANDROID || APP-IOS
			for (const key in arg) {
				const value = arg[key]
				if (isValidStyleValue(value)) {
					result.push(`${toKebabCase(key)}:${value}`)
				}
			}
			// #endif
			// #ifdef APP-ANDROID || APP-IOS 
			(arg as UTSJSONObject).toMap().forEach((value, key) => {
				if (isValidStyleValue(value)) {
					result.push(`${toKebabCase(key)}:${value}`)
				}
			})
			// #endif
		}
	}

	return result.join(';')
}

/**
 * 将对象转换为 CSS 自定义属性字符串
 * @param obj - 包含主题变量的对象
 * @param prefix - CSS 变量的前缀，默认为 '--l-'
 * @returns CSS 变量字符串，例如 '--l-image-color: red; --l-bg: blue;'
 */
export function toCssVars(obj : UTSJSONObject, prefix = '--l-') : string {
	const cssVars : string[] = [];

	if (typeof obj == 'object') {
		// #ifndef APP-ANDROID || APP-IOS
		for (const key in obj) {
			const value = obj[key]
			if (isValidStyleValue(value)) {
				const cssVarName = prefix + toKebabCase(key);
				cssVars.push(`${cssVarName}:${value}`)
			}

		}
		// #endif
		// #ifdef APP-ANDROID || APP-IOS 
		(obj as UTSJSONObject).toMap().forEach((value, key) => {
			if (isValidStyleValue(value)) {
				const cssVarName = prefix + toKebabCase(key);
				cssVars.push(`${cssVarName}:${value}`)
			}
		})
		// #endif

	}


	return cssVars.join(';') + ';'; // 加上最后的分号以符合 CSS 规范
}