/**
 * x-pinia-s
 *
 * uni-app-x 严格类型版 Pinia，class extends 风格。
 *
 * @example
 * ```uts
 * // main.uts
 * import { createSSRApp } from 'vue'
 * import App from './App.uvue'
 * import { createPinia } from '@/uni_modules/x-pinia-s'
 *
 * export function createApp() {
 *   const app = createSSRApp(App)
 *   const pinia = createPinia()
 *   app.use(pinia)
 *   return { app }
 * }
 * ```
 *
 * @author tmui4x
 * @copyright https://tmui.design
 */

// ============ 类型 ============
export {
	UnsubscribeFn,
	SubscriptionMutationType,
	SubscriptionMutation,
	StateSubscriptionCallback,
	ActionContext,
	AfterActionCallback,
	OnErrorActionCallback,
	ActionSubscriptionCallback,
	IPinia,
	PiniaPlugin,
	PiniaPluginContext,
	PersistOptions,
	PersistSerializer
} from './instans/types.uts'

// ============ Store 基类 ============
export { PiniaStoreBase } from './instans/storeBase.uts'

// ============ 核心 API ============
export { createPinia } from './instans/createPinia.uts'
export { defineStore } from './instans/defineStore.uts'
export { setActivePinia, getActivePinia } from './instans/rootState.uts'

// ============ 持久化 ============
export { createPersistPlugin, clearPersistedState } from './instans/persist.uts'

// ============ Options API 辅助函数（仅 mapState 系列） ============
export {
	mapState,
	mapStateMapped
} from './instans/mapHelpers.uts'
