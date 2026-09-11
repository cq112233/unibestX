type warnMessagesTypes = {
	FALLBACK_TO_ROOT: number
	NOT_FOUND_PARENT_SCOPE: number
	IGNORE_OBJ_FLATTEN: number
	DEPRECATE_TC: number
}
export const I18nWarnCodes:warnMessagesTypes = {
	// 使用根语言环境回退到{type} '{key}'
	FALLBACK_TO_ROOT:  8,
	// 未找到父作用域，使用全局作用域
	NOT_FOUND_PARENT_SCOPE: 9,
	// 忽略对象扁平化：'{key}'键具有字符串值
	IGNORE_OBJ_FLATTEN: 10,
	// 'tc'和'$tc'已在v10中被弃用，请使用't'或'$t'代替。'tc'和'$tc'将在v11中移除
	DEPRECATE_TC: 11
}



export const warnMessages : Map<number, string> = new Map<number, string>([
	[I18nWarnCodes.FALLBACK_TO_ROOT, `使用根语言环境回退到{type} '{key}'。`],
	[I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, `未找到父作用域，使用全局作用域。`],
	[I18nWarnCodes.IGNORE_OBJ_FLATTEN, `忽略对象扁平化：'{key}'键具有字符串值。`],
	[I18nWarnCodes.DEPRECATE_TC, `'tc'和'$tc'已在v10中被弃用，请使用't'或'$t'代替。'tc'和'$tc'将在v11中移除。`],
])