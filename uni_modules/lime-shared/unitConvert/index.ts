// @ts-nocheck
import { isString } from '../isString'
import { isNumeric } from '../isNumeric'

/**
 * 单位转换函数，将字符串数字或带有单位的字符串转换为数字
 * @param value 要转换的值，可以是字符串数字或带有单位的字符串
 * @returns 转换后的数字，如果无法转换则返回0
 */
// #ifndef UNI-APP-X && APP
export function unitConvert(value : string | number | null | undefined, base : number = 0) : number {
	if (value == null) return NaN
	// 如果是字符串数字
	if (isNumeric(value)) {
		return Number(value);
	}
	// 如果有单位
	if (isString(value)) {
		const reg = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g;
		const results = reg.exec(value);
		if (!value || !results) {
			return NaN;
		}
		const unit = results[3];
		const _value = parseFloat(value);
		if (unit === 'rpx') {
			return uni.upx2px(_value);
		}
		if (unit === 'px') {
			return _value * 1;
		}
		if (unit == '%') {
			return _value / 100 * base
		}
		// 如果是其他单位，可以继续添加对应的转换逻辑
	}
	return NaN;
}
// #endif


// #ifdef UNI-APP-X && APP
import { isNumber } from '../isNumber'
export function unitConvert(value : any | null, base : number = 0) : number {
	if (value == null) return NaN
	if (isNumber(value)) {
		return value as number
	}
	// 如果是字符串数字
	if (isNumeric(value)) {
		return parseFloat(value as string);
	}
	// 如果有单位
	if (isString(value)) {
		const reg = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g;
		const results = reg.exec(value as string);
		if (results == null) {
			return NaN;
		}
		const unit = results[3];
		const _value = parseFloat(value);
		if (unit == 'rpx') {
			return uni.rpx2px(_value)
		}
		if (unit == 'px') {
			return _value;
		}
		if (unit == '%') {
			return _value / 100 * base
		}
		// 如果是其他单位，可以继续添加对应的转换逻辑
	}
	return NaN;
}
// #endif

export function parseUnit(
	// #ifndef UNI-APP-X && APP
	value : string | number | null | undefined,
	// #endif
	// #ifdef UNI-APP-X && APP
	value : string | number | null,
	// #endif
	base : number = 0
) : number | null {
	const result = unitConvert(value, base);
	return isNaN(result) ? null : result;
}

// 示例
// console.log(unitConvert("123")); // 输出: 123 (字符串数字转换为数字)
// console.log(unitConvert("3.14em")); // 输出: 0 (无法识别的单位)
// console.log(unitConvert("20rpx")); // 输出: 根据具体情况而定 (根据单位进行转换)
// console.log(unitConvert(10)); // 输出: 10 (数字不需要转换)