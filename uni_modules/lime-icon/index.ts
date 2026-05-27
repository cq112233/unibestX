// @ts-nocheck
// #ifndef APP-ANDROID || UNI-APP-X && APP-HARMONY
import defalutIconList from '@/uni_modules/lime-icon/static/icons.json';
// #endif

// 条件导入：根据不同的编译环境导入不同的Vue API
// #ifndef UNI-APP-X
import { type ComputedRef, computed, unref, ref } from '@/uni_modules/lime-shared/vue';
// 定义UTSJSONObject类型，用于表示通用的JSON对象
// 在非UNI-APP-X环境下，使用Record<string, string>作为别名
type UTSJSONObject = Record<string, string>
// #endif
// #ifdef UNI-APP-X
import { ComputedRef } from 'vue';
// 在UNI-APP-X环境下，Object就是UTSJSONObject
const Object = UTSJSONObject
// #endif

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export type FontIconConfig = {
	/** 前缀，如 'tdesign' */
	prefix : string
	/** 字体家族名称 */
	fontFamily : string
	/** 图标映射，图标名: Unicode编码 */
	icons ?: UTSJSONObject
	/** 字体文件路径（可选） */
	fontUrl ?: string
	/** JSON 文件路径，包含图标映射 */
	jsonUrl ?: string
	/** 自动加载JSON的图标 */
	autoLoadJson ?: boolean
}

export type IconifyConfig = {
	/** 前缀，如 'tdesign' */
	prefix : string
	/** Iconify API地址，默认 https://api.iconify.design */
	apiUrl ?: string
	/** 本地SVG数据，图标名: SVG字符串 */
	icons ?: UTSJSONObject
	/** JSON 文件路径，包含本地SVG数据 */
	jsonUrl ?: string
	/** 自动加载JSON的图标 */
	autoLoadJson ?: boolean
}

/**
 * 解析图标名称返回类型
 */
export type ParsedIconName = {
	/** 前缀，可以是空字符串或特定的值 */
	prefix : string;
	/** 图标名称 */
	iconName : string;
	/** 是否有前缀 */
	hasPrefix : boolean;
	/** 是否是图片类型的图标 */
	isImage : boolean;
	/** 是否是Unicode字符 */
	isUnicode : boolean;
	/** 是否是SVG图标的路径 */
	isSvg : boolean;
}

/**
 * 字体图标信息类型
 */
export type FontIconInfo = {
	fontFamily : string;
	unicode : string;
	char : string;
	className : string;
};

/**
 * Iconify图标信息类型
 */
export type IconifyInfo = {
	prefix : string;
	apiUrl : string;
	isLocal : boolean;
	svgContent : string;
	iconName : string;
};

/**
 * useIcon Hook选项类型
 */
export type UseIconOptions = {
	prefix ?: string;
};

/**
 * useIcon Hook返回类型
 */
export type UseIconReturn = {
	type : ComputedRef<'image' | 'font' | 'iconify' | 'unknown'>;
	fontIcon : ComputedRef<FontIconInfo | null>;
	iconifyUrl : ComputedRef<string|null>;
	iconifyInfo : ComputedRef<IconifyInfo | null>;
	imageUrl : ComputedRef<string>;
	parsed : ParsedIconName;
}


/**
 * 字体图标库注册表
 * 存储所有已注册的字体图标库配置
 */
const fontIconRegistry = new Map<string, FontIconConfig>()

/**
 * Iconify图标库注册表
 * 存储所有已注册的Iconify图标库配置
 */
const iconifyRegistry = new Map<string, IconifyConfig>()

/**
 * JSON数据缓存
 * 存储已加载的JSON数据，避免重复加载
 * 键：JSON文件的URL路径
 * 值：解析后的JSON对象
 */
const jsonCache = new Map<string, UTSJSONObject>()

/**
 * 图标数据存储
 * 存储所有已加载的图标数据（字体图标编码或SVG内容）
 * 键：图标库前缀
 * 值：图标名到图标数据的映射对象
 */
const iconData = new Map<string, UTSJSONObject>()

/**
 * 响应式计数器
 * 用于追踪图标数据的变化，触发相关组件的响应式更新
 */
const iconDataChangeCount = ref(0)

/**
 * 默认的Iconify API地址
 * 当未指定apiUrl时使用此地址
 */
let DEFAULT_ICONIFY_API = 'https://api.iconify.design'

/**
 * 设置默认Iconify API地址
 * @param apiUrl 默认的Iconify API地址
 */
export function setIconifyApi(apiUrl: string): void {
	DEFAULT_ICONIFY_API = apiUrl
	console.log(`已设置默认Iconify API: ${DEFAULT_ICONIFY_API}`)
}

/**
 * 获取当前默认Iconify API地址
 */
export function getIconifyApi(): string {
	return DEFAULT_ICONIFY_API
}

/**
 * 检查值是否为 null 或 undefined
 * @param value 要检查的值
 * @returns 如果值为 null 或 undefined，则返回 true，否则返回 false
 */
export function isNullish(value ?: any) : boolean {
	// #ifdef APP-ANDROID
	return value == null;
	// #endif
	// #ifndef APP-ANDROID
	return value == null || value == undefined;
	// #endif
}


/**
 * 检查是否是Unicode字符
 * @param str 要检查的字符串
 * @returns 如果是Unicode字符（非ASCII字符）则返回true
 */
function isUnicodeChar(str : string) : boolean {
	// 匹配非ASCII字符
	return /[^\x00-\x7F]/.test(str)
}

/**
 * 检查是否是Unicode转义序列
 * @param str 要检查的字符串
 * @returns 如果是Unicode转义序列则返回true
 */
function isUnicodeEscape(str : string) : boolean {
	// 匹配 \uXXXX 格式
	return /^\\u[0-9a-fA-F]{4}$/.test(str)
}

/**
 * 解析Unicode字符
 * @param str Unicode字符串（可能是转义序列或实际字符）
 * @returns 解析后的Unicode字符
 */
function parseUnicode(str : string) : string {
	// 如果是 \uXXXX 格式，转换为实际字符
	if (isUnicodeEscape(str)) {
		return String.fromCharCode(parseInt(str.slice(2), 16))
	}
	// 否则直接返回字符串
	return str
}

/**
 * 判断URL是否是网络地址
 * @param url 要检查的URL
 * @returns 如果是网络地址（以http://或https://开头），则返回true，否则返回false
 */
function isNetworkUrl(url : string) : boolean {
	return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * 加载JSON数据（支持网络地址和本地文件）
 * @param jsonUrl JSON文件的URL路径（本地或网络地址）
 * @returns Promise<UTSJSONObject> 解析后的JSON对象
 */
async function loadJsonData(jsonUrl : string) : Promise<UTSJSONObject> {
	// 检查缓存中是否已有该URL的数据，避免重复加载
	if (jsonCache.has(jsonUrl)) {
		return jsonCache.get(jsonUrl)!
	}

	// 判断是否是网络地址
	if (isNetworkUrl(jsonUrl)) {
		// 网络地址使用 uni.request 加载
		return new Promise((resolve, reject) => {
			uni.request({
				url: jsonUrl,
				dataType: 'text',
				success: (res) => {
					// 检查请求状态码
					if (res.statusCode == 200) {
						const data = res.data as UTSJSONObject
						// 缓存加载的数据
						jsonCache.set(jsonUrl, data)
						resolve(data)
					} else {
						reject(new Error(`加载失败: ${res.statusCode}`))
					}
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	} else {
		// 本地文件 - 使用 uni.request 或 uni.getFileSystemManager 加载
		return new Promise((resolve, reject) => {
			try {
				const fs = uni.getFileSystemManager()
				fs.readFile({
					filePath: jsonUrl,
					encoding: 'utf-8',
					success: (res) => {
						try {
							// 解析JSON字符串
							const data = JSON.parse(res.data as string) as UTSJSONObject
							// 缓存加载的数据
							jsonCache.set(jsonUrl, data)
							resolve(data)
						} catch (error) {
							reject(new Error('解析JSON失败'))
						}
					},
					fail: (err) => {
						reject(err)
					}
				})
			} catch (fsError) {
				reject(fsError)
			}
		})
	}
}


export const loadingFonts = ref<FontIconConfig[]>([])
/**
 * 注册一个字体图标库
 * @param config 字体图标配置对象
 * @returns Promise<void>
 */
export async function registerFontIcon(config : FontIconConfig) : Promise<void> {
	const { prefix, jsonUrl } = config
	const icons = config.icons ?? {}
	// 存储配置到全局注册表
	fontIconRegistry.set(prefix, config)

	// 加载字体文件（如果提供了字体URL）
	if (!isNullish(config.fontUrl)) {
		loadingFonts.value.push(config)
		uni.loadFontFace({
			family: config.fontFamily,   // 字体家族名称
			source: `url("${config.fontUrl}")`,  // 字体文件来源URL
			// #ifndef UNI-APP-X && APP
			scopes: ['webview', 'native'],  // 支持的平台范围
			// #endif
			success: () => {
				const existingIndex = loadingFonts.value.findIndex((item)=> {
					return item.fontUrl == config.fontUrl
				})
				
				if(existingIndex  > -1) {
					loadingFonts.value.splice(existingIndex , 1)
				}
				
				console.log(`字体加载成功: ${config.fontFamily}; 正在加载字体数量: ${loadingFonts.value.length}`)
			},
			fail: (err) => {console.error(`字体加载失败: ${config.fontFamily}`, err)}
		})
	}

	// 如果有初始图标，先使用
	if (Object.keys(icons).length > 0) {
		iconData.set(prefix, icons)
		iconDataChangeCount.value++ // 增加计数器以触发响应式更新
		console.log(`已注册字体图标库: ${prefix} (内置${Object.keys(icons).length}个图标)`)

		// 异步加载JSON合并
		if (!isNullish(jsonUrl)) {
			loadAndMergeJson(prefix, jsonUrl!)
		}
	}
	// 从JSON加载
	else if (!isNullish(jsonUrl)) {
		try {
			const jsonIcons = await loadJsonData(jsonUrl!)
			iconData.set(prefix, jsonIcons)
			iconDataChangeCount.value++ // 增加计数器以触发响应式更新
			console.log(`已注册字体图标库: ${prefix} (从JSON加载${Object.keys(jsonIcons).length}个图标)`)
		} catch (error) {
			console.log('jsonUrl', jsonUrl)
			console.error(`注册字体图标库失败: ${prefix}`, error)
			throw error
		}
	} else {
		console.warn(`注册字体图标库: ${prefix}，但未提供图标数据`)
	}
}


/**
 * 异步加载并合并JSON图标
 */
/**
 * 异步加载并合并JSON图标数据
 * @param prefix 图标库前缀
 * @param jsonUrl JSON文件的URL路径（本地或网络地址）
 * @returns Promise<void>
 */
async function loadAndMergeJson(prefix : string, jsonUrl : string) : Promise<void> {
	try {
		// 加载JSON数据（使用缓存避免重复加载）
		const jsonIcons = await loadJsonData(jsonUrl)
		// 获取当前已有的图标数据（如果没有则使用空对象）
		const currentIcons = iconData.get(prefix) ?? {}
		// 合并现有图标和新加载的图标（新图标会覆盖同名旧图标）
		const mergedIcons = { ...currentIcons, ...jsonIcons }
		// 更新图标数据存储
		iconData.set(prefix, mergedIcons)
		// 增加响应式计数器，触发相关组件的更新
		iconDataChangeCount.value++
		// 打印合并成功信息
		console.log(`已合并图标库: ${prefix}，现有${Object.keys(mergedIcons).length}个图标`)
	} catch (error) {
		// 加载失败时打印警告，保留现有图标数据
		console.warn(`加载图标JSON失败: ${jsonUrl}，使用现有图标`)
	}
}


/**
 * 注册一个Iconify图标库
 * @param config Iconify图标库配置对象
 * @returns Promise<void>
 */
export async function registerIconify(config : IconifyConfig) : Promise<void> {
	const { prefix, jsonUrl, apiUrl = DEFAULT_ICONIFY_API } = config
	const icons = config.icons ?? {}
	// 存储配置到全局注册表
	iconifyRegistry.set(prefix, config)

	// 检查是本地SVG集合还是远程API
	if (Object.keys(icons).length > 0) {
		// 本地SVG集合 - 直接使用提供的图标数据
		iconData.set(prefix, icons)
		iconDataChangeCount.value++ // 增加计数器以触发响应式更新
		console.log(`已注册本地Iconify图标库: ${prefix} (内置${Object.keys(icons).length}个图标)`)

		// 异步加载JSON合并（如果提供了JSON URL）
		if (jsonUrl) {
			loadAndMergeJson(prefix, jsonUrl)
		}
	} else if (jsonUrl) {
		// 从JSON加载本地SVG数据
		try {
			const jsonIcons = await loadJsonData(jsonUrl)
			iconData.set(prefix, jsonIcons)
			iconDataChangeCount.value++ // 增加计数器以触发响应式更新
			console.log(`已注册本地Iconify图标库: ${prefix} (从JSON加载${Object.keys(jsonIcons).length}个图标)`)
		} catch (error) {
			console.error(`注册本地Iconify图标库失败: ${prefix}`, error)
			throw error
		}
	} else {
		// 远程Iconify API模式 - 不存储图标数据，使用时从API获取
		console.log(`已注册远程Iconify图标库: ${prefix} (API: ${apiUrl})`)
	}
}



/**
 * 获取字体图标对应的Unicode字符
 * @param iconName 图标名称
 * @param prefix 图标库前缀（可选）
 * @returns 图标对应的Unicode字符，如果未找到则返回空字符串
 */
export function font(iconName : string, prefix : string|null = null) : string {
	// 检查是否提供了前缀
	if (!isNullish(prefix)) {
		// 优先从指定的前缀中查找图标
		if (fontIconRegistry.has(prefix!) && iconData.has(prefix!)) {
			const icons = iconData.get(prefix!)!
			// 如果找到对应的图标编码，将其转换为Unicode字符
			if (!isNullish(icons[iconName])) {
				return String.fromCharCode(parseInt(`${icons[iconName]}`, 16))
			}
		}
	} else {
		// 如果没有提供前缀，尝试从所有已注册的字体图标库中查找
		let result = ''
		fontIconRegistry.forEach((config, currentPrefix) => {
			if (result == '') { // 只需要找到第一个匹配的图标
				if (iconData.has(currentPrefix)) {
					const icons = iconData.get(currentPrefix)!
					if (!isNullish(icons[iconName])) {
						result = String.fromCharCode(parseInt(`${icons[iconName]}`, 16))
					}
				}
			}
		})
		return result
	}
	// 如果未找到匹配的图标，返回空字符串
	return ''
}


/**
 * 解析图标名称并返回图标信息
 * @param name 图标名称或路径
 * @returns 解析后的图标信息对象
 */
export function parseIconName(name : string, prefix : string = '') : ParsedIconName {
	// 检查是否是Unicode字符（如：\uE6EF 或 实际的Unicode字符）
	if (isUnicodeChar(name) || isUnicodeEscape(name)) {
		return {
			prefix,
			iconName: name,
			hasPrefix: false,
			isImage: false,
			isUnicode: true,
			isSvg: false
		} as ParsedIconName
	}
	
	// 检查是否是图片路径
	const isImageUrl = name.startsWith('/') ||
		name.startsWith('http') ||
		name.startsWith('data:') ||
		/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(name);
	
	// 检查是否是SVG图片
	const isSvgPath = /\.(svg)$/i.test(name) || name.startsWith('data:image/svg+xml;');
	
	if (isImageUrl) {
		return {
			prefix: '',  // 图片没有前缀
			iconName: name,
			hasPrefix: false,
			isImage: true,
			isUnicode: false,
			isSvg: isSvgPath
		} as ParsedIconName
	}

	// 检查是否是带有冒号的格式 (如: "prefix:icon-name")
	if (name.includes(':')) {
		const [prefix, iconName] = name.split(':')
		return {
			prefix: prefix,
			iconName,
			hasPrefix: true,
			isImage: false,
			isUnicode: false,
			isSvg: false
		} as ParsedIconName
	}

	// 默认情况：无前缀的普通图标名称
	return {
		prefix,
		iconName: name,
		hasPrefix: false,
		isImage: false,
		isUnicode: false,
		isSvg: false
	} as ParsedIconName

}


/**
 * 核心Hook：解析并返回图标信息
 * @param name 图标名称或路径
 * @param options 可选配置项
 * @returns 图标信息对象，包含图标类型、字体信息、Iconify信息或图片路径
 */
export function useIcon(name : MaybeRef<string>, options : UseIconOptions = {}) : UseIconReturn {
	// 解析图标名称，转换为标准化的图标信息
	const parsed = computed(():ParsedIconName => parseIconName(`${unref(name)}`, options.prefix ?? 'l'))
	// 确定图标的类型（图片、字体图标、Iconify图标或未知类型）
	const type = computed(() => {
		const { prefix, isImage, hasPrefix, isUnicode } = parsed.value
		// 1. Unicode字符类型
		if (isUnicode) return 'font' // Unicode当作字体图标处理

		// 2. 图片类型
		if (isImage) return 'image'

		// 3. 带有前缀的格式
		if (hasPrefix) {
			// 先检查是否是已注册的字体图标
			if (fontIconRegistry.has(prefix)) return 'font'
			// 再检查是否是已注册的Iconify
			if (iconifyRegistry.has(prefix)) return 'iconify'
			// 如果都不是，当作Iconify远程图标处理
			return 'iconify'
		}

		// 4. 无前缀的格式，但有传入的prefix选项
		if (!isNullish(options.prefix)) {
			if (fontIconRegistry.has(options.prefix!)) return 'font'
			if (iconifyRegistry.has(options.prefix!)) return 'iconify'
		}

		// 5. 默认当作字体图标处理
		return 'font'
	})

	// 获取字体图标信息
	const fontIcon = computed(():FontIconInfo|null => {
		iconDataChangeCount.value

		if (type.value == 'font') {
			const { prefix, iconName, hasPrefix, isUnicode } = parsed.value
			if (isUnicode) {
				const char = parseUnicode(iconName)
				return {
					fontFamily: options.prefix ?? '',
					unicode: iconName,
					char,
					className: ''
				} as FontIconInfo

			}
			// 确定目标前缀
			let targetPrefix = ''
			if (hasPrefix) {
				// 格式如 "add" 且 tdesign 是已注册的字体图标
				targetPrefix = prefix
			} else if (!isNullish(options.prefix)) {
				// 格式如 "add" 且传入了 prefix="tdesign"
				targetPrefix = options.prefix!
			} else {
				// 格式如 "add" 但没有指定前缀，尝试查找
				// for (const [currentPrefix] of fontIconRegistry.entries()) {
				// 	if (iconData.has(currentPrefix)) {
				// 		const icons = iconData.get(currentPrefix)!
				// 		if (!isNullish(icons[iconName])) {
				// 			targetPrefix = currentPrefix
				// 			break
				// 		}
				// 	}
				// }
			}
			// 获取图标数据
			if (!isNullish(targetPrefix) && fontIconRegistry.has(targetPrefix) && iconData.has(targetPrefix)) {
				const config = fontIconRegistry.get(targetPrefix)!
				const icons = iconData.get(targetPrefix)!
				const unicode = `${icons[iconName] ?? ''}`
				return {
					fontFamily: config.fontFamily,
					unicode,
					char: unicode != '' ? String.fromCharCode(parseInt(unicode, 16)) : '',
					className: `${config.prefix}-${iconName}`
				} as FontIconInfo
			}
		}
		return null
	})

	// 获取Iconify图标信息
	const iconifyInfo = computed(():IconifyInfo|null => {
		iconDataChangeCount.value
		if (type.value == 'iconify') {
			const { prefix, iconName, hasPrefix } = parsed.value

			// 确定目标前缀
			let targetPrefix = prefix
			let targetIconName = iconName

			if (!hasPrefix) {
				// 格式如 "add" 但传入了 prefix 选项
				if (!isNullish(options.prefix)) {
					targetPrefix = options.prefix!
					targetIconName = iconName
				} else {
					return null
				}
			}

			// 获取配置
			const config = iconifyRegistry.get(targetPrefix)
			const icons = iconData.get(targetPrefix)

			// 判断是本地SVG还是远程API
			// 有 icons 数据就是本地，否则是远程
			const isLocal = !isNullish(icons) && Object.keys(icons!).length > 0

			// 确定API地址
			let apiUrl = DEFAULT_ICONIFY_API
			if (!isNullish(config) && !isNullish(config?.apiUrl)) {
				apiUrl = config!.apiUrl!
			}

			return {
				prefix: targetPrefix,
				apiUrl,
				isLocal,
				svgContent: isLocal ? `${icons?.[targetIconName] ?? ''}` : '',
				iconName: targetIconName
			} as IconifyInfo
		}
		return null
	})

	// 获取Iconify图标的URL
	const iconifyUrl = computed(():string|null => {
		const info = iconifyInfo.value
		if (isNullish(info)) return null

		if (info!.isLocal && info!.svgContent != '') {
			// const str = encodeURIComponent(info?.svgContent ?? '') ?? ''
			// return `data:image/svg+xml;base64,${btoa((str))}`
			return info?.svgContent ?? ''
		}

		return `${info!.apiUrl}/${info!.prefix}/${info!.iconName}.svg`
	})

	// 获取图片URL
	const imageUrl = computed(() => {
		if (type.value == 'image') {
			return parsed.value.iconName
		}
		return ''
	})

	// 返回所有图标信息
	return {
		type,          // 图标类型的响应式引用
		fontIcon,      // 字体图标信息的响应式引用
		iconifyUrl,    // Iconify图标URL的响应式引用
		iconifyInfo,   // Iconify图标信息的响应式引用
		imageUrl,      // 图片URL的响应式引用
		parsed: parsed.value  // 解析后的图标基本信息
	} as UseIconReturn
}

// 注册默认字体
registerFontIcon({
	prefix: 'l',
	fontFamily: 'l',
	// #ifndef APP-ANDROID || UNI-APP-X && APP-HARMONY
	icons: defalutIconList,
	// #endif
	// #ifdef APP-ANDROID || UNI-APP-X && APP-HARMONY
	jsonUrl: '/uni_modules/lime-icon/static/icons.json'
	// #endif
})


// <l-icon name="add" prefix="tdesign"> // 使用iconfont
// <l-icon name="add" prefix="my">      // 使用iconfont
// <l-icon name="tdesign:add">          // 使用iconify ==> https://api.iconify.design/tdesign/add.svg
// <l-icon name="my:add">				// 使用iconify ==> https://api.iconify.design/my/add.svg
// <l-icon name="/static/logo.png">		// 使用图片
// <l-icon name="/static/logo.svg">		// 使用svg图片