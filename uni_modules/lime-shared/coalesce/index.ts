// @ts-nocheck
/**
 * 返回第一个非空值。
 * - 跳过 null、undefined
 * - 对字符串类型，额外跳过空字符串 ''
 * - 保留 0、false 等类型合法值
 */
// #ifdef UNI-APP-X && APP
export function coalesce<T>(...values : (any | null)[]) : T | null {
	for (const value of values) {
		if (value == null) continue;
		if (typeof value == 'string' && value == '') continue;
		return value as T;
	}
	return null;
}
// #endif
// #ifndef UNI-APP-X && APP
export function coalesce<T>(...values : (T | null | undefined)[]) : T | null {
	for (const value of values) {
		if (value == null || value === undefined) continue;
		if (typeof value === 'string' && value === '') continue;
		return value as T;
	}
	return null;
}
// #endif