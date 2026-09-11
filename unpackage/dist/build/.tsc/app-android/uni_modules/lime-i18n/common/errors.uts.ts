type I18nErrorCodesTypes = {
	UNEXPECTED_RETURN_TYPE: number
	INVALID_ARGUMENT: number
	MUST_BE_CALL_SETUP_TOP: number
	NOT_INSTALLED: number
	REQUIRED_VALUE: number
	INVALID_VALUE: number
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: number
	NOT_INSTALLED_WITH_PROVIDE: number
	UNEXPECTED_ERROR: number
	NOT_COMPATIBLE_LEGACY_VUE_I18N: number
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: number
	TYPE_MISMATCH: number
}

export const I18nErrorCodes: I18nErrorCodesTypes = {
  // composer模块错误
  UNEXPECTED_RETURN_TYPE: 24,
  // legacy模块错误
  INVALID_ARGUMENT: 25,
  // i18n模块错误
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive模块错误
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools错误
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // 意外错误
  UNEXPECTED_ERROR: 32,
  // 不兼容的旧版vue-i18n构造函数
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // 在旧版API模式下，Compostion API不可用。请确保旧版API模式正常工作
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
  // 类型不匹配
  TYPE_MISMATCH: 35
}

export const errorMessages: Map<number, string> = new Map<number, string>([
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE, 'composer中返回类型异常'],
  [I18nErrorCodes.INVALID_ARGUMENT, '参数无效'],
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, '必须在`setup`函数的顶部调用'],
  [I18nErrorCodes.NOT_INSTALLED, '需要用`app.use`函数安装'],
  [I18nErrorCodes.UNEXPECTED_ERROR, '意外错误'],
  [I18nErrorCodes.REQUIRED_VALUE, `值中必需，{0}`],
  [I18nErrorCodes.INVALID_VALUE, `值无效`],
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, `无法设置vue-devtools插件`],
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE, '需要用`provide`函数安装'],
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, '不兼容的旧版VueI18n。'],
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY, '在旧版API模式下，Compostion API不可用。请确保旧版API模式正常工作'],
  [I18nErrorCodes.TYPE_MISMATCH, '类型不匹配']
])

// export function createI18nError(code: number, msg?: string) {
// 	if(process.env.NODE_ENV !== 'production') {
// 		console.warn(`[vue-i18n] : ${msg ?? errorMessages.get(code)}`)
// 	}
// 	new Error(errorMessages.get(code) ?? 'code error')
// }