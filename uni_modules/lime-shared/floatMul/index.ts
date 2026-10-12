// @ts-nocheck
import {isNumber} from '../isNumber';
// #ifdef APP-ANDROID && !VUE3-VAPOR
// java.math.BigDecimal 是 JVM 类，只有编译成 Kotlin 时才存在；
// 蒸汽模式（VUE3-VAPOR）下 App 逻辑层打成 JS，这行会被打包成未定义全局，
// 加载期直接 `ReferenceError: BigDecimal is not defined` 拖垮整个逻辑层，故一并排除
import BigDecimal from 'java.math.BigDecimal'
// import BigDecimal from 'java.math.BigDecimal'
// import StringBuilder from 'java.lang.StringBuilder'
// import java.math.BigDecimal;
// #endif

/**
 * 乘法函数，用于处理浮点数乘法并保持精度。
 * @param {number} num1 - 第一个乘数。
 * @param {number} num2 - 第二个乘数。
 * @returns {number} 乘法运算的结果，保留正确的精度。
 */
export function floatMul(num1 : number, num2 : number) : number {
	if (!(isNumber(num1) || isNumber(num2))) {
		console.warn('Please pass in the number type');
		return NaN;
	}
	let m = 0;
	// #ifdef APP-ANDROID && !VUE3-VAPOR
	let	s1 = BigDecimal.valueOf(num1.toDouble()).toPlainString(); //new UTSNumber(num1).toString() // //`${num1.toFloat()}`// num1.toString(),
	let	s2 = BigDecimal.valueOf(num2.toDouble()).toPlainString(); //new UTSNumber(num2).toString() //`${num2.toFloat()}`//.toString();
	// #endif
	// #ifndef APP-ANDROID && !VUE3-VAPOR
	let	s1:string = `${num1}`// num1.toString(),
	let	s2:string = `${num2}`//.toString();
	// #endif
	
	try {
		m += s1.split('.')[1].length;
	} catch (error) { }
	try {
		m += s2.split('.')[1].length;
	} catch (error) { }
	
	// #ifdef APP-ANDROID && !VUE3-VAPOR
	return parseFloat(s1.replace('.', '')) * parseFloat(s2.replace('.', '')) / Math.pow(10, m);
	// #endif
	// #ifndef APP-ANDROID && !VUE3-VAPOR
	return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
	// #endif
}
