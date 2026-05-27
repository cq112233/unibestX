/**
 * 安全地在数组指定索引处赋值，兼容 Android 平台对稀疏数组的限制。
 * 
 * 行为说明：
 * - 非 Android：等同于 arr[index] = value（可能产生稀疏数组）
 * - Android：若 index >= length，则先用 undefined 填充至 index，再赋值（紧凑数组，无空槽）
 * 
 * @param arr - 目标数组（会被修改）
 * @param index - 非负整数索引
 * @param value - 要设置的值
 * @throws {Error} 如果 index 不是非负整数
 */
export function assignAtIndex<T>(arr : T[], index : number, value : T) : void {
	
	// 输入校验
	if (index < 0) {
		throw new Error(`Index must be a non-negative integer, got ${index}`);
	}
	
	// #ifndef APP-ANDROID
	// 标准环境：直接赋值（允许稀疏数组）
	arr[index] = value;
	// #endif

	// #ifdef APP-ANDROID
	// Android 环境：安全赋值，避免稀疏数组导致的异常
	if (index < arr.length) {
		arr[index] = value;
	} else {
		// 手动扩展数组，中间填充 undefined
		// 注意：使用 push(undefined) 而不是 arr[length++] = undefined，
		// 因为某些 Android 引擎对直接 length 赋值也敏感
		while (arr.length <= index) {
			arr.push(null as T);
		}
		
		// arr.set(index, value)
		arr[index] = value;
	}
	// #endif
}