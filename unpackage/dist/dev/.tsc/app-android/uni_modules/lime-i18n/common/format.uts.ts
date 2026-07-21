// @ts-nocheck
import { isObject } from './util'

type Token = {
	type : 'text' | 'named' | 'list' | 'unknown',
	value : string
}

const RE_TOKEN_LIST_VALUE = /^(?:\d)+/
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/



/**
 * 解析格式化字符串并生成一个包含标记（Token）的数组。
 * 这些标记可以是文本、列表或命名值。
 *
 * @param {string} format - 需要解析的格式化字符串。
 * @returns {Array<Token>} 返回一个包含解析后的标记的数组。
 */
export function parse(format : string) : Array<Token> {
	const tokens : Array<Token> = []
	let position : number = 0

	let text : string = ''
	while (position < format.length) {
		let char : string = format.charAt(position++)
		if (char == '{') {
			if (text.length > 0) {
				const token : Token = { type: 'text', value: text }
				tokens.push(token)
			}
			text = ''
			let sub : string = ''
			char = format.charAt(position++)

			while (char != '}') {
				sub += char
				char = format.charAt(position++)
			}
			const isClosed = char == '}'

			const type = RE_TOKEN_LIST_VALUE.test(sub)
				? 'list'
				: isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
					? 'named'
					: 'unknown'
			const token : Token = { type, value: sub }
			tokens.push(token)
		} else if (char == '%') {
			// when found rails i18n syntax, skip text capture
			if (format.charAt(position) != '{') {
				text += char
			}
		} else {
			text += char
		}
	}

	if (text.length > 0) {
		const token : Token = { type: 'text', value: text }
		tokens.push(token)
	}

	return tokens
}


/**
 * 根据给定的标记数组和值对象或数组，编译出相应的值数组。
 * 
 * @param {Array<Token>} tokens - 标记数组，包含文本、列表和命名值。
 * @param {Object | Array<any>} values - 值对象或数组，用于替换标记中的占位符。
 * @returns {Array<any>} 返回编译后的值数组。
 */

function compile(tokens : Array<Token>, values : UTSJSONObject) : Array<any>
function compile(tokens : Array<Token>, values : Array<any>) : Array<any>
function compile(tokens : Array<Token>, values : any) : Array<any> {
	const compiled : Array<any> = []
	let index : number = 0;
	const mode : string = Array.isArray(values)
		? 'list'
		: isObject(values)
			? 'named'
			: 'unknown'
	if (mode == 'unknown') {
		return compiled
	}
	while (index < tokens.length) {
		const token : Token = tokens[index]
		switch (token.type) {
			case 'text':
				compiled.push(token.value)
				break
			case 'list':
				const index = parseInt(token.value, 10)
				if(mode == 'list') {
					const value = (values as any[])[index]
					compiled.push(value)
				} else {
					if (process.env.NODE_ENV !== 'production') {
						warn('list did not receive a valid values array')
					}
				}
				break
			case 'named':
				if (mode == 'named') {
					const value = (values as UTSJSONObject)[token.value] ?? ''
					compiled.push(`${value}`)
				} else {
					if (process.env.NODE_ENV !== 'production') {
						warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`)
					}
				}
				break
			case 'unknown':
				if(token.value.startsWith("'") && token.value.endsWith("'")) {
					compiled.push(token.value.slice(1, -1))
				} else if (process.env.NODE_ENV !== 'production') {
					warn(`Detect 'unknown' type of token!`)
				}
				break
		}
		index++
	}

	return compiled
}

export {compile}

export default class BaseFormatter {
	private _caches : Map<string, Token[]>
	constructor() {
		this._caches = new Map<string, Token[]>()
	}
	interpolate(message : string, values : any | null) : any[] {
		if (values == null) {
			return [message]
		}
		let tokens : Array<Token> | null = this._caches.get(message)
		if (tokens == null) {
			tokens = parse(message)
			this._caches.set(message, tokens)
		}
		return compile(tokens, values)
	}
}