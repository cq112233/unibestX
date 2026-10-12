// @ts-nocheck
// export function toLowercaseSeparator(key: string) {
//   return key.replace(/([A-Z])/g, '-$1').toLowerCase();
// }

/**
 * 将字符串转换为指定连接符的命名约定
 * @param str 要转换的字符串
 * @param separator 指定的连接符，默认为 "-"
 * @returns 转换后的字符串
 */
export function kebabCase(str : string, separator : string = "-") : string {
	return str
		
		// #ifdef APP-ANDROID
		// 后两个形参是为对齐 Kotlin 端 Regex.replace 回调签名而占位的，必须区分命名：
		// TS 允许重名 `_`，但 uts 插件用的 esbuild 会直接报 "_ cannot be bound multiple times"
		.replace(/[A-Z]/g, (match : string, _offset : number, _input : string) : string => `${separator}${match.toLowerCase()}`) // 将大写字母替换为连接符加小写字母
		// #endif
		// #ifndef APP-ANDROID
		.replace(/[A-Z]/g, (match : string) : string => `${separator}${match.toLowerCase()}`) // 将大写字母替换为连接符加小写字母
		// #endif
		.replace(/[\s_-]+/g, separator) // 将空格、下划线和短横线替换为指定连接符
		.replace(new RegExp(`^${separator}|${separator}$`, "g"), "") // 删除开头和结尾的连接符
		.toLowerCase(); // 将结果转换为全小写
}