// @ts-nocheck
let counter = 0;
export function uniqid(prefix : string = 'lime') {
	// #ifdef WEB
	if (typeof crypto !== 'undefined' && crypto.randomUUID) {
		const uuid = crypto.randomUUID().replace(/-/g, '_');
		return `${prefix}_${uuid}`;
	}
	// #endif
	
	 // fallback：时间戳 + 随机 + 计数器
	const time = Date.now().toString(36);           		 // 时间戳（毫秒），确保跨刷新唯一
	const random = Math.random().toString(36).substring(2, 10).padEnd(8, '0');      // 随机部分，取前8位足够
	const count = (++counter).toString(36).padStart(4, '0'); // 计数器补零，避免太短

	return `${prefix}_${time}_${random}_${count}`;
}