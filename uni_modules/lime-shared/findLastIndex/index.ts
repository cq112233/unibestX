// @/uni_modules/lime-shared/arrayUtils.ts

/**
 * 兼容版 findLastIndex（ES2023 polyfill）
 */
export function findLastIndex<T>(
	array : T[],
	predicate : (value : T, index : number, obj : T[]) => boolean) : number {
	
	// #ifndef UNI-APP-X && APP-ANDROID	
	if (typeof array.findLastIndex == 'function') {
		// 如果原生支持，直接用（未来兼容）
		return array.findLastIndex(predicate);
	}
	// #endif
	// 否则降级到 for 循环
	for (let i = array.length - 1; i >= 0; i--) {
		if (predicate(array[i], i, array)) {
			return i;
		}
	}
	return -1;
}