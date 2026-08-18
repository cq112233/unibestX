/**
 * 持久化插件
 *
 * 自动把 store.$state 同步到 uni.setStorageSync，下次启动时还原。
 * 通过 pinia.use(createPersistPlugin({...})) 启用。
 *
 * @example
 * ```uts
 * const pinia = createPinia()
 * pinia.use(createPersistPlugin({
 *   keyPrefix: 'pinia:',
 *   includeStores: ['user', 'app'],   // 仅持久化指定 store
 *   excludeStores: [],
 *   serializer: null
 * } as PersistOptions))
 * ```
 */

import {
	PiniaPlugin,
	PiniaPluginContext,
	PersistOptions,
	PersistSerializer,
	SubscriptionMutation
} from './types.uts'
import { PiniaStoreBase } from './storeBase.uts'

/** 默认 JSON 序列化器 */
const defaultSerializer : PersistSerializer = {
	serialize: (state : UTSJSONObject) : string => {
		const s = JSON.stringify(state)
		return s == null ? '{}' : s!
	},
	deserialize: (raw : string) : UTSJSONObject => {
		if (raw == '') return ({} as UTSJSONObject)
		const parsed = JSON.parseObject(raw)
		if (parsed == null) return ({} as UTSJSONObject)
		return parsed!
	}
}

/** 默认配置 */
function mergePersistOptions(opts : PersistOptions | null) : PersistOptions {
	const defaults : PersistOptions = {
		keyPrefix: 'pinia:',
		includeStores: null,
		excludeStores: [],
		serializer: null
	}
	if (opts == null) return defaults
	const o = opts!
	return {
		keyPrefix: o.keyPrefix,
		includeStores: o.includeStores,
		excludeStores: o.excludeStores,
		serializer: o.serializer
	} as PersistOptions
}

/** 判断某个 store id 是否应该被持久化 */
function shouldPersist(storeId : string, opts : PersistOptions) : boolean {
	// 黑名单优先（包含即排除）
	for (let i = 0; i < opts.excludeStores.length; i++) {
		if (opts.excludeStores[i] == storeId) return false
	}
	if (opts.includeStores == null) return true
	const list = opts.includeStores!
	for (let i = 0; i < list.length; i++) {
		if (list[i] == storeId) return true
	}
	return false
}

/**
 * 创建持久化插件
 *
 * @param opts 配置；传 null 使用默认值
 */
export function createPersistPlugin(opts : PersistOptions | null) : PiniaPlugin {
	const config = mergePersistOptions(opts)
	const serializer = config.serializer == null ? defaultSerializer : config.serializer!

	const plugin : PiniaPlugin = (ctx : PiniaPluginContext) : void => {
		const id = ctx.storeId
		if (!shouldPersist(id, config)) return

		const storageKey = config.keyPrefix + id

		const storeBase : PiniaStoreBase = ctx.store as any as PiniaStoreBase

		// 1. 启动时还原：把 storage 里的 JSON 转 UTSJSONObject 后交给子类的 _hydrate 装载
		try {
			const raw = uni.getStorageSync(storageKey)
			if (raw != null && typeof raw == 'string' && (raw as string) != '') {
				const restored = serializer.deserialize(raw as string)
				storeBase._hydrate(restored)
			}
		} catch (e) {
			__f__('warn','at uni_modules/x-pinia-s/instans/persist.uts:99','[x-pinia-s][persist] restore failed for ' + id + ':', e)
		}

		// 2. 订阅状态变更，写回 storage
		// state 参数已是 storeBase._serialize() 的结果（由 PiniaStoreBase 内部分发）
		storeBase.$subscribe((_mutation : SubscriptionMutation, state : UTSJSONObject) : void => {
			try {
				const str = serializer.serialize(state)
				uni.setStorageSync(storageKey, str)
			} catch (e) {
				__f__('warn','at uni_modules/x-pinia-s/instans/persist.uts:109','[x-pinia-s][persist] save failed for ' + id + ':', e)
			}
		})
	}
	return plugin
}

/**
 * 手动清空某个 store 的持久化数据（不影响内存中的状态）
 *
 * @param storeId   store id
 * @param keyPrefix storage key 前缀，需要与 createPersistPlugin 时使用的一致
 */
export function clearPersistedState(storeId : string, keyPrefix : string) : void {
	try {
		uni.removeStorageSync(keyPrefix + storeId)
	} catch (e) {
		__f__('warn','at uni_modules/x-pinia-s/instans/persist.uts:126','[x-pinia-s][persist] clear failed for ' + storeId + ':', e)
	}
}
