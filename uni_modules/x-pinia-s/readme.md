# x-pinia-s

uni-app-x 严格类型版 Pinia，**class extends** 风格，专为 UTS 设计。
demo演示,(https://ext.dcloud.net.cn/plugin?id=16369)[TMUI4x的demo示例]。
本插件为免费。
允许商用，随意传播和使用，也允许自行改进二开。
本插件由(https://ext.dcloud.net.cn/plugin?id=16369)[TMUI4x]作者持续更新维护，如有问题，请不要随意打差评，
请把问题写在评论区，我将更新和修复。

## 特性

- ✅ class-based 风格（`class XxxStore extends PiniaStoreBase`）
- ✅ 严格 UTS 类型，编辑器全程提示
- ✅ `$id` / `$state` / `$reset` / `$patch` / `$subscribe` / `$onAction` / `$dispose`
- ✅ 插件系统 (`pinia.use(plugin)`)
- ✅ 内置持久化插件 (`createPersistPlugin`)
- ✅ Options API 辅助函数 (`mapState` / `mapActions`)
- ✅ Vue 插件标准接入 (`app.use(pinia)`)

## 安装

导入位于 `uni_modules/x-pinia-s`的插件，使用见下面的示例。

**特别说明**：创建和定义和原VuePinia是有些许区别的，由于UTS语法限制和原生安卓限制不可能一模一样，但为了不改变使用风格。在使用中几乎和原版一样，只有在定义Store时需要遵循新的类继承规则，Uvue页面使用上基本和原版一样没有什么特别的区别。
因此如果你们想用ai写，只要让AI读本文档即可。

## 快速开始

### 类型导入

函数方法配置等默认是不需要使用as xxx类型的。如果某些时候需要二次封装把一些配置放置其它文件再导入到主文件需要使用类型定义。
所有类型定义文件从：

```ts

// 正确：从这个文件中导出你需要的类型文件
import type {PersistOptions } from '@/uni_modules/x-pinia-s/instans/types.uts'

// 错误：禁止以下方式导出类型
import { type PersistOptions } from '@/uni_modules/x-pinia-s'

```


### 1. 在 main.uts 中创建并注册 pinia

**推荐写法（Pinia 实例定义在顶层）**：

```ts
import { createSSRApp } from 'vue'
import App from './App.uvue'
import { createPinia } from '@/uni_modules/x-pinia-s'

const pinia = createPinia()         // ① 顶层定义（必须！见下方说明）

export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia)                    // ② Vue 标准插件接入
	// 可选：暴露给 Options API 模板（仅当你用 this.$pinia 时才加这行）
	// app.config.globalProperties.$pinia = pinia
	return { app }
}
```

> ⚠️ **官方规则约束（必读）**：
> - 给 `app.config.globalProperties` 赋值的变量**必须定义在模块顶层**，不支持局部变量赋值（app-android 平台强制约束）。
> - 因此 `pinia` 必须在 `createApp()` **外部**（顶层）定义。
> - `app.use(pinia)` 内部的 `install()` **不会**自动给 `globalProperties.$pinia` 赋值（因为 install 内 this 属于局部值）。如需 `this.$pinia` 模板访问，请按上面注释自己写一行赋值。
> - 组合式 API（`<script setup>`）中通过 `useStore()` 直接访问 store，不需要 `$pinia` 全局属性。

### 2. 定义一个 store（直观 Pinia 风格）

**actions 就是普通 class method，不需要任何包装**。如果你想要 `$reset` / `$patch` / 持久化 工作，按需重写 `_doReset` / `_hydrate` / `_serialize` 三个钩子方法即可（其它情况下不重写）。

```ts
// stores/counter.uts
import { defineStore, PiniaStoreBase } from '@/uni_modules/x-pinia-s'

type CounterState = { count : number, name : string }

export class CounterStore extends PiniaStoreBase {
	// 1. 响应式状态（reactive<T> 强类型保留）
	state : CounterState = reactive<CounterState>({ count: 0, name: '' })

	// 2. computed 字段（依赖 this.state；UTS 字段初始化按声明顺序，state 必须在前）
	doubled : ComputedRef<number> = computed(() : number => this.state.count * 2)

	// 3. constructor 中 super() 后绑定 state
	constructor() {
		super()
		this.bindState(this.state)
	}

	// 4. actions = 普通 class method，直接修改 state
	increment() : void { this.state.count++ }
	setName(n : string) : void { this.state.name = n }
	doubleAndStore(x : number) : number {
		const r = x * 2
		this.state.count = r
		return r
	}

	// 5. 想要 $reset 工作？重写 _doReset
	override _doReset() : void {
		this.state.count = 0
		this.state.name = ''
	}

	// 6. 想要 $patch 或持久化的 hydrate 工作？重写 _hydrate
	override _hydrate(data : UTSJSONObject) : void {
		if (data['count'] != null) this.state.count = data['count'] as number
		if (data['name'] != null) this.state.name = data['name'] as string
	}

	// 7. 想要持久化保存或订阅器收到 state 快照？重写 _serialize
	override _serialize() : UTSJSONObject {
		return { count: this.state.count, name: this.state.name } as UTSJSONObject
	}
}

export const useCounterStore = defineStore<CounterStore>('counter', () : CounterStore => new CounterStore())
```

> **为什么需要 `_doReset` / `_hydrate` / `_serialize` 三个钩子？**
>
> UTS 是名义类型系统，没有 Proxy，**`reactive<T>(...)` 返回的是 `TReactiveObject` 强类型 class，无法 cast 为 UTSJSONObject**（强行 cast 运行时报 ClassCastException）。框架因此无法运行时遍历 reactive 对象的字段，也无法把 partial UTSJSONObject "自动" 应用到 state。
>
> 解决：使用 **Template Method 模式** —— 框架负责调度（触发订阅器、写 storage 等），子类按需实现 3 个钩子告诉框架"如何 reset / hydrate / serialize 你的 state"。
>
> 不需要这些功能时，3 个钩子都可以不重写，store 仍能正常工作（state 修改、computed、actions、`$subscribe` 监听 state 变化、`$onAction` 都依然有效）。

### 跨页面 store 共享原理（`effectScope`）

Vue / UTS 中的 `computed` / `watch` 默认会**绑定到当前组件的生命周期**，组件销毁时被自动停止。如果直接在 store 类的字段中写 `computed(...)`、在 `_setupBy` 中写 `watch(...)`，第一次创建 store 是在某个页面 setup 中，store 内的所有 effect 就被该页面捕获了 —— 用户返回上页后再进入，store 实例虽然命中缓存，但里面的 computed / watch 已经被销毁，**操作 state 不再触发任何更新**。

**框架内部已用 `effectScope()` 解决**：`defineStore` 内部为每个 store 创建一个独立的 `EffectScope`，把 `new XxxStore()` 和 `_setupBy()` 都包在 `scope.run()` 里执行。这样 store 内所有 reactive effects 都绑定到 scope，与组件生命周期隔离。`store.$dispose()` 会调用 `scope.stop()` 一次性清理。

用户**无需关心** —— 这是 Pinia 跨页面共享的标准实现。

### 3. 在页面中使用（直观 Pinia 风格）

```uvue
<script lang="ts" setup>
	import { useCounterStore } from '@/stores/counter.uts'

	const counter = useCounterStore()
</script>
<template>
	<view>
		<text>count = {{ counter.state.count }}</text>
		<text>doubled = {{ counter.doubled }}</text>
		<x-button @click="counter.increment()">+1</x-button>
		<x-button @click="counter.setName('小明')">改名</x-button>
		<x-button @click="counter.$reset()">重置</x-button>
	</view>
</template>
```

## 字段声明顺序（重要）

UTS class 字段初始化按**声明顺序**执行（编译到 Kotlin 的字段初始化器顺序）：

```ts
export class CounterStore extends PiniaStoreBase {
	// ✅ 正确顺序：先 state，再依赖 state 的 computed
	state : CounterState = reactive<CounterState>({ count: 0 })
	doubled : ComputedRef<number> = computed(() : number => this.state.count * 2)

	constructor() {
		super()
		this.bindState(this.state)   // ✅ 必须 super() 之后调用
	}

	// action 写成普通 method，无字段顺序约束
	increment() : void { this.state.count++ }
}
```

```ts
// ❌ 错误：computed 在 state 之前声明，this.state 未初始化
export class BadStore extends PiniaStoreBase {
	doubled : ComputedRef<number> = computed(() : number => this.state.count * 2)  // ✗
	state : CounterState = reactive<CounterState>({ count: 0 })
}
```

## 高级：让 action 被 `$onAction` 追踪

通常 actions 直接写普通 method 即可。仅当你**主动需要 `$onAction` 订阅器收到该 action 调用通知**（例如做日志、调试中间件、回滚）时，才把方法体用 `this.callAction()` 包裹：

```ts
export class CounterStore extends PiniaStoreBase {
	state : CounterState = reactive<CounterState>({ count: 0, name: '' })

	constructor() { super(); this.bindState(this.state) }

	// 普通 action（不被 $onAction 追踪）
	increment() : void {
		this.state.count++
	}

	// 被追踪的 action
	loggedIncrement() : void {
		this.callAction('loggedIncrement', () : any => {
			this.state.count++
			return null
		})
	}

	// 被追踪 + 上报参数给订阅器
	setName(n : string) : void {
		this.callActionWithArgs('setName', () : any => {
			this.state.name = n
			return null
		}, [n] as Array<any>)
	}
}
```

## API

### `createPinia() : IPinia`

创建一个 Pinia 实例（应用应只创建一个）。

### `defineStore<T>(id, factory) : () => T`

定义一个 store。

| 参数 | 类型 | 说明 |
|---|---|---|
| `id` | `string` | 全局唯一 id |
| `factory` | `() => T` | 工厂函数，返回 PiniaStoreBase 子类实例 |

返回 `useStore` 函数，重复调用返回同一实例。

### `PiniaStoreBase` 公共字段/方法

| 成员 | 类型 | 说明 |
|---|---|---|
| `$id` | `string` | store id（由 defineStore 注入） |
| `$state` | `any` | 当前 state 引用（与子类的 state 字段同引用，类型为 any） |
| `$reset()` | `void` | 调用子类 `_doReset()` 然后触发订阅器 |
| `$patch(partial)` | `void` | 调用子类 `_hydrate(partial)` 然后触发订阅器 |
| `$subscribe(cb)` | `UnsubscribeFn` | 订阅状态变更（cb 收到的 state 是 `_serialize()` 的结果） |
| `$onAction(cb)` | `UnsubscribeFn` | 订阅 action 调用 |
| `$dispose()` | `void` | 销毁 store |
| `bindState(state)` | `void` | **protected** 子类工具：绑定响应式状态（构造函数中调用一次） |
| `callAction(name, fn)` | `any \| null` | **protected** 子类工具：让某个 action 触发 $onAction 订阅；普通 action 不需要 |
| `callActionWithArgs(name, fn, args)` | `any \| null` | **protected** 同 `callAction`，但额外把参数列表上报给订阅器 |
| `_doReset()` | `void` | **可重写** 子类按需重写：定义 reset 行为；默认空实现 |
| `_hydrate(data)` | `void` | **可重写** 子类按需重写：把 UTSJSONObject 数据装载到 state（$patch / 持久化共用）；默认空实现 |
| `_serialize()` | `UTSJSONObject` | **可重写** 子类按需重写：把 state 转 UTSJSONObject（订阅器分发 / 持久化共用）；默认返回空对象 |

### `setActivePinia` / `getActivePinia`

多 Pinia 实例场景下手动切换。

## 持久化

```ts
import { createPinia, createPersistPlugin, PersistOptions } from '@/uni_modules/x-pinia-s'

const pinia = createPinia()
pinia.use(createPersistPlugin({
	keyPrefix: 'pinia:',
	includeStores: ['counter', 'user'],   // 仅持久化指定 store；null 表示全部
	excludeStores: [],
	serializer: null                       // 自定义序列化器；null 用 JSON
} as PersistOptions))
```

清空某个 store 的持久化数据：

```ts
import { clearPersistedState } from '@/uni_modules/x-pinia-s'
clearPersistedState('counter', 'pinia:')   // 第二参数与 createPersistPlugin 的 keyPrefix 保持一致
```

## 插件开发

```ts
import { PiniaPlugin, PiniaPluginContext, PiniaStoreBase } from '@/uni_modules/x-pinia-s'

const myPlugin : PiniaPlugin = (ctx : PiniaPluginContext) : void => {
	console.log('store created:', ctx.storeId)
	// ctx.store 类型为 any，cast 为 PiniaStoreBase 后访问公共方法
	const store = ctx.store as any as PiniaStoreBase
	store.$subscribe((mutation, state) : void => {
		console.log('mutation:', mutation, state)
	})
	store.$onAction((info, after, onError) : void => {
		console.log('action:', info.name)
	})
}

pinia.use(myPlugin)
```

> **与原版 Pinia 的差异**：插件**不能返回扩展对象**给 store。
> UTS 严格类型不允许向 class 实例动态注入属性，所以 `PiniaPlugin` 返回类型是 `void`。
> 插件应通过 `$subscribe` / `$onAction` 等 hook 完成所有逻辑（监听、记录、持久化等）。

## 订阅 / 取消订阅

```ts
const counter = useCounterStore()

const unsubState = counter.$subscribe((mutation, state) : void => {
	console.log('[' + mutation.type + ']', state)
})

const unsubAction = counter.$onAction((ctx, after, onError) : void => {
	console.log('action begin:', ctx.name, ctx.args)
	after((result) : void => {
		console.log('action end with:', result)
	})
	onError((err) : void => {
		console.warn('action failed:', err)
	})
})

// 取消
unsubState()
unsubAction()
```

## Options API 辅助函数

仅提供 `mapState` / `mapStateMapped`。**不提供 `mapActions`**：UTS 严格类型不允许从 any 动态获取函数引用并调用，actions 在 Options API 里手写一行代理即可（更类型安全）：

```uvue
<script lang="ts">
	import { mapState } from '@/uni_modules/x-pinia-s'
	import { useCounterStore } from '@/stores/counter.uts'

	export default {
		computed: {
			...mapState(useCounterStore, ['state', 'doubled'])
		},
		methods: {
			// actions 手写代理：一行一个，类型完全保留
			increment() : void { useCounterStore().increment() },
			setName(n : string) : void { useCounterStore().setName(n) }
		}
	}
</script>
```

## 注意事项

| 项 | 说明 |
|---|---|
| **必须 `class extends PiniaStoreBase`** | UTS 不支持 `interface extends interface` 的稳定使用，class 继承是唯一可靠方式 |
| **constructor 中 `super()` 后必须 `this.bindState(state)`** | 否则 `$reset` / `$patch` / `$subscribe` / 持久化 都不可用 |
| **state 必须用 `reactive` 包裹** | `reactive({...} as XxxStateType)` |
| **字段声明顺序** | 依赖 `this.state` 的 computed 必须在 state 字段**之后**声明 |
| **action 直接写普通 method** | 与 Pinia 一致，无需任何包装；`store.increment()` 直接调用 |
| **想触发 $onAction 时再用 `this.callAction`** | 普通 action 不会被 $onAction 通知；需要追踪某个 action 时才包装 |
| **state 字段必须 JSON 可序列化** | 内部用 `JSON.stringify` 做初始快照与持久化；不要在 state 中放 Map/Set/类实例/Date |
| **同 id 单例** | 重复调用 `useStore()` 返回同一实例 |
| **不要直接 new XxxStore()** | 必须通过 `useCounterStore()` 调用，否则没有 `_setupBy` 注入，公共方法不可用 |

## 设计决策

| 问题 | 方案 |
|---|---|
| UTS 不支持 `interface X extends interface Y`？ | 改用 `class X extends PiniaStoreBase`（UTS 中 class 继承稳定支持） |
| UTS 不能可靠使用 `<T extends PiniaStoreBase>` 泛型约束？ | `defineStore<T>` 不加约束，运行时 `cast as any as PiniaStoreBase` |
| 自定义 state 类型与 UTSJSONObject 名义不兼容？ | `bindState(state : any)` 入参用 any，与 Vue Pinia 内部 `_state: any` 一致 |
| **UTS 函数类型签名不允许 `...rest` 修饰符？** | action 不做成 `withAction(name, fn) → wrappedFn` 字段；改为 `callAction(name, fn : () => any)` 在 action method 内调用，参数通过闭包捕获 |
| Pinia 自动 state 检测/action 拦截依赖 Proxy，UTS 没有？ | 显式 `bindState` + `callAction`，写法稍重但类型完全可控 |
| 循环依赖 types ↔ storeBase？ | `IPinia._stores: Map<string, any>`、`PiniaPluginContext.store: any`；插件文件按需 import PiniaStoreBase 做 cast |

## 与 Vue Pinia 的差异

| 项 | Vue Pinia | x-pinia-s |
|---|---|---|
| Store 风格 | Setup / Options | 仅 class extends |
| 自动 state 检测 | ✅（基于 ref/reactive） | ❌（需 `this.bindState(this.state)`） |
| 自动 action 拦截 | ✅（基于 Proxy） | ❌（需在 action method 内 `this.callAction(name, fn)`） |
| 类型推导 | 完全自动 | 用户显式 `class XxxStore extends PiniaStoreBase` |
| `storeToRefs` | ✅ | ❌（直接 `store.state.xxx` 即可） |
| 热更新 | ✅ | ❌ |

差异主要源自 **UTS 严格类型 + 无 Proxy + 无 hoisting**。但响应式、订阅、插件、持久化能力完全对齐。

## 开发文档

- [UTS 语法](https://uniapp.dcloud.net.cn/tutorial/syntax-uts.html)
- [Vue Pinia 官方文档](https://pinia.vuejs.org/)
