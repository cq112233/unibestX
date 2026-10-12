---
name: lime-use Vue 组合式函数库
description: 功能丰富的 Vue 组合式函数库，提供各种实用的工具函数，帮助开发者提高开发效率。
tags:
  - use
  - 组合式
  - hooks
  - 工具
plugin: lime-use
category: SDK 工具库
dependencies: []
---

# lime-use

一个功能丰富的 Vue 组合式函数库，提供各种实用的工具函数，帮助开发者提高开发效率。

## 文档链接
📚 组件详细文档请访问以下站点：
- [lime-use 文档 - 站点1](https://limex.qcoon.cn/uts/use.html)
- [lime-use 文档 - 站点2](https://limeui.netlify.app/uts/use.html)
- [lime-use 文档 - 站点3](https://limeui.familyzone.top/uts/use.html)

## 安装方法
1. 在 uni-app 插件市场中搜索并导入 `lime-use`
2. 导入后可能需要重新编译项目
3. 在组件中使用所需的组合式函数

## 函数列表

| 函数名 | 说明 |
| --- | --- |
| `useCodeTimer` | 验证码倒计时管理函数 |
| `useCountDown` | 通用倒计时管理函数 |
| `usePageBackPress` | 页面返回键控制函数 |
| `useZIndex` | z-index 管理函数 |
| `useCssTransition` | CSS 过渡动画管理函数 |
| `useClickAway` | 点击外部区域事件监听函数 |
| `useIntersectionObserver` | 元素交叉观察器函数 |
| `useResizeObserver` | 元素尺寸变化观察器函数 |

## useCodeTimer

### 简介
`useCodeTimer` 是一个用于管理验证码倒计时的 Vue 组合式函数，支持倒计时状态的保存与恢复，适用于各种需要验证码功能的场景。

### 功能特性

- **基本倒计时**：提供从指定秒数倒计时到0的功能
- **状态显示**：自动管理倒计时过程中的文本显示
- **状态保存与恢复**：支持页面刷新后保持倒计时状态
- **事件回调**：提供开始和结束时的回调函数
- **手动控制**：支持手动开始、重置和停止倒计时
- **暂停/继续**：支持暂停和继续倒计时
- **精确计时**：基于时间戳的精确倒计时计算

### 代码演示

```html
<button @click="handleGetCode" :disabled="!canGetCode">{{ tip }}</button>
<button @click="handleReset">重置</button>
<button @click="handleStop">停止</button>
<button @click="handlePause" :disabled="!isRunning">暂停</button>
<button @click="handleResume" :disabled="!isPaused">继续</button>
```

```typescript
import { useCodeTimer, type UseCodeTimerOptions } from '@/uni_modules/lime-use'

const { 
  tip,
  canGetCode,
  start,
  reset,
  stop,
  pause,
  resume,
  isPaused,
  secondsRemaining
} = useCodeTimer({
  seconds: 120,
  startText: '获取验证码',
  changeText: '重新获取 (X秒)',
  endText: '重新获取',
  keepRunning: true,
  uniqueKey: 'myCodeTimer',
  interval: 1000,
  onStart: () => {
    console.log('倒计时开始')
  },
  onEnd: () => {
    console.log('倒计时结束')
  }
} as UseCodeTimerOptions)

const handleGetCode = () => {
  start()
}

const handleReset = () => {
  reset()
}

const handleStop = () => {
  stop()
}

const handlePause = () => {
  pause()
}

const handleResume = () => {
  resume()
}

const isRunning = computed(() => !canGetCode.value && !isPaused.value)
```

### API 文档

#### Options 选项

| 选项名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| seconds | 倒计时秒数 | _number_ | `60` | 可选 |
| startText | 开始前的文本 | _string_ | `'获取验证码'` | 可选 |
| changeText | 倒计时中的文本，`X` 会被替换为剩余秒数 | _string_ | `'X秒重新获取'` | 可选 |
| endText | 倒计时结束后的文本 | _string_ | `'重新获取'` | 可选 |
| keepRunning | 是否在页面刷新后保持倒计时状态 | _boolean_ | `false` | 可选 |
| uniqueKey | 用于本地存储的唯一键名 | _string_ | `'default_code_timer'` | 可选 |
| onStart | 倒计时开始时的回调函数 | _`() => void`_ | - | 可选 |
| onEnd | 倒计时结束时的回调函数 | _`() => void`_ | - | 可选 |
| interval | 定时器间隔（毫秒） | _number_ | `1000` | 可选 |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| tip | 当前显示的文本 | _`ComputedRef<string>`_ |
| canGetCode | 是否可以重新获取验证码 | _`Ref<boolean>`_ |
| start | 开始倒计时的函数 | _`() => void`_ |
| reset | 重置倒计时的函数 | _`() => void`_ |
| stop | 停止倒计时的函数（与 reset 类似，但会保存状态） | _`() => void`_ |
| pause | 暂停倒计时的函数 | _`() => void`_ |
| resume | 继续倒计时的函数 | _`() => void`_ |
| isPaused | 是否处于暂停状态 | _`Ref<boolean>`_ |
| secondsRemaining | 当前剩余秒数 | _`Ref<number>`_ |

### 使用注意事项

1. **唯一性键名**：使用 `keepRunning` 选项时，需要提供唯一的 `uniqueKey` 以避免冲突
2. **数据隔离**：倒计时状态会保存在本地存储中，建议合理设置 `uniqueKey` 以确保数据隔离
3. **自动保存**：在组件卸载时，倒计时状态会自动保存（如果启用了 `keepRunning`）
4. **事件触发**：恢复倒计时时，会自动触发 `onStart` 回调
5. **精确计时**：该函数使用基于时间戳的计算方式，确保长时间运行时的计时精度

## usePageBackPress

### 简介
`usePageBackPress` 是一个用于管理当前页面返回键控制的 Vue 组合式函数，支持判断当前页面是否有打开的弹窗以及隐藏当前页面顶层弹窗。

### 在 uni-app app 安卓端使用

如果在 uni-app app 安卓端也需要返回时隐藏弹出框，则需要在每个页面中使用 `onBackPress` 和 `usePageBackPress` 钩子函数：

```typescript
import { onBackPress } from '@dcloudio/uni-app'
import { usePageBackPress } from '@/uni_modules/lime-use'

const { shouldStopBack, hidePopup } = usePageBackPress()

onBackPress(() => {
	if (shouldStopBack.value) {
		hidePopup()
		return true
	}
	return false
})
```

### API 文档

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| shouldStopBack | 是否应该阻止返回（当前页面有打开的弹窗） | _`ComputedRef<boolean>`_ |
| hidePopup | 隐藏当前页面顶层弹窗的方法 | _`() => void`_ |

## useZIndex

### 简介
`useZIndex` 是一个用于管理 z-index 值的 Vue 组合式函数，确保弹窗等元素的层级正确，避免层级冲突。

### 功能特性

- **z-index 管理**：自动管理 z-index 值的增加和减少
- **系统对话框适配**：自动调整系统对话框的 z-index，避免覆盖官方固定值
- **响应式状态**：使用 Vue 的响应式 API，确保 z-index 状态的实时更新
- **初始值设置**：可配置初始 z-index 值

### 代码演示

```typescript
import { useZIndex } from '@/uni_modules/lime-use'

const { zIndex, increase, decrease, adjustSystemDialogZIndex } = useZIndex()

const onOpen = () => {
  increase()
  adjustSystemDialogZIndex()
}

const onClose = () => {
  decrease()
}
```

### API 文档

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| zIndex | z-index 响应式引用 | _`Ref<number>`_ |
| increase | 增加 z-index 值的方法 | _`() => void`_ |
| decrease | 减少 z-index 值的方法 | _`() => void`_ |
| adjustSystemDialogZIndex | 调整系统对话框 z-index 的方法 | _`() => void`_ |

## useCssTransition

### 简介
`useCssTransition` 是一个用于管理 CSS 过渡动画的 Vue 组合式函数，支持 enter/leave 过渡效果，自动处理类名切换，适用于弹窗、提示框等需要显示/隐藏动画的场景。

### 功能特性

- **自动类名管理**：自动处理 `enter-from`、`enter-to`、`leave-from`、`leave-to` 等类名
- **过渡事件**：提供完整的过渡生命周期事件（before-enter、enter、after-enter 等）
- **自定义类名**：支持自定义 enter/leave 各阶段的类名
- **动态过渡名称**：支持动态设置过渡名称，自动应用对应的 CSS 类名前缀
- **队列管理**：防止过渡冲突，自动处理快速切换场景

### 代码演示

```typescript
import { ref } from 'vue'
import { useCssTransition } from '@/uni_modules/lime-use'

const visible = ref(false)

const { display, classes, inited, toggle } = useCssTransition({
  visible: visible,
  name: 'fade',
  duration: 300,
  emits: (event) => {
    console.log('过渡事件:', event)
  }
})

// 显示/隐藏
const show = () => {
  visible.value = true
}

const hide = () => {
  visible.value = false
}
```

```html
<!-- 在模板中使用 -->
<view v-show="display" :class="classes">
  过渡内容
</view>
```

对应的 CSS：
```css
/* 淡入淡出效果 */
.l-fade-enter-active,
.l-fade-leave-active {
  transition: opacity 0.3s ease;
}

.l-fade-enter-from,
.l-fade-leave-to {
  opacity: 0;
}

.l-fade-enter-to,
.l-fade-leave-from {
  opacity: 1;
}
```

### API 文档

#### Options 选项

| 选项名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| visible | 可见性状态 | _`MaybeRefOrGetter<boolean>`_ | - | 必填，控制显示/隐藏 |
| name | 过渡名称 | _`MaybeRefOrGetter<string>`_ | `'fade'` | 可选，对应 CSS 类名前缀 |
| duration | 过渡持续时间 | _`number`_ | `300` | 可选，单位毫秒 |
| appear | 初始渲染时是否显示过渡 | _`boolean`_ | `false` | 可选 |
| prefix | 类名前缀 | _`string`_ | `'l-'` | 可选 |
| enterPreClass | Enter 的 Pre 类 | _`string \| string[]`_ | - | 可选，防止插入时闪烁 |
| enterFromClass | 进入起始类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| enterActiveClass | 进入激活类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| enterToClass | 进入结束类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| leaveFromClass | 离开起始类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| leaveActiveClass | 离开激活类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| leaveToClass | 离开结束类名 | _`string \| string[]`_ | - | 可选，覆盖默认类名 |
| removeClasses | 是否在结束后移除类名 | _`boolean`_ | `false` | 可选 |
| emits | 过渡事件回调 | _`(Name: CssTransitionEmitStatus) => void`_ | - | 可选 |
| onNextTick | 下一个 tick 回调 | _`(Name: CssTransitionEmitStatus) => Promise<void>`_ | - | 可选 |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| display | 是否显示元素（用于 v-show） | _`Ref<boolean>`_ |
| inited | 是否已初始化 | _`Ref<boolean>`_ |
| classes | 当前类名 | _`Ref<string>`_ |
| finish | 结束过渡的方法 | _`() => void`_ |
| toggle | 切换显示状态的方法 | _`(v: boolean) => void`_ |

#### 过渡事件

| 事件名 | 说明 |
| --- | --- |
| before-enter | 进入过渡开始前 |
| enter | 进入过渡开始 |
| after-enter | 进入过渡结束 |
| enter-cancelled | 进入过渡取消 |
| before-leave | 离开过渡开始前 |
| leave | 离开过渡开始 |
| after-leave | 离开过渡结束 |
| leave-cancelled | 离开过渡取消 |

### 使用注意事项

1. **CSS 类名规则**：默认使用 `l-{name}-enter-from`、`l-{name}-enter-active` 等类名格式
2. **display 和 visible**：`display` 用于控制 DOM 显示，`visible` 是目标状态，两者可能不一致（动画过程中）
3. **类名绑定**：在模板中使用 `:class="classes"` 绑定过渡类名
4. **v-show 配合**：使用 `v-show="display"` 控制元素显示/隐藏
5. **自定义类名**：可以通过 `enterFromClass` 等选项完全自定义类名

## useClickAway

### 简介
`useClickAway` 是一个用于监听点击外部区域事件的 Vue 组合式函数，支持跨平台使用，适用于弹窗、下拉菜单等需要点击外部区域关闭的场景。

### 功能特性

- **跨平台支持**：支持 Uni-APP-X/APP、Web 及其他平台
- **自动事件管理**：自动注册和移除事件监听器，避免内存泄漏
- **手动控制**：提供 `stop` 方法，允许手动停止监听
- **灵活配置**：支持监听单个元素或元素数组
- **性能优化**：使用 `Set` 数据结构存储监听器，提高性能

### 代码演示

```typescript
import { ref } from 'vue'
import { useClickAway } from '@/uni_modules/lime-use'

const target = ref<UniElement | null>(null)

const { stop } = useClickAway(target, (event) => {
  console.log('点击了外部区域', event)
  // 在这里执行关闭弹窗、隐藏菜单等操作
})

// 手动停止监听
const handleStop = () => {
  stop()
}
```

```html
<!-- 在模板中使用 -->
<view ref="target">
  点击外部区域会触发回调
</view>
```

### 手动绑定事件

在不支持自动绑定事件的平台，可以在根元素上手动绑定点击事件：

```html
<!-- 在页面的根元素上绑定点击事件 -->
<view @click="onPageClick">
  <!-- 页面内容 -->
</view>
```

```javascript
// 在页面的脚本中
import { handleClickAway } from '@/uni_modules/lime-use'

const onPageClick = (event) => {
  // 手动调用 handleClickAway 函数
  handleClickAway(event)
}
```

### API 文档

#### 参数

| 参数 | 说明 | 类型 | 备注 |
| --- | --- | --- | --- |
| target | 目标元素或元素数组 | _`MaybeRefOrGetter<UniElement | null>`_ | 必填，监听点击外部的元素 |
| listener | 点击外部区域时触发的回调函数 | _`(event: UniEvent) => void`_ | 必填，点击外部区域时的回调 |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| stop | 停止监听的方法 | _`() => void`_ |

### 使用注意事项

1. **元素引用**：确保 `target` 能够正确获取到 DOM 元素的引用
2. **跨平台兼容**：在不同平台上，事件监听器的实现方式不同，但 API 使用方式一致
3. **手动绑定**：在不支持自动绑定的平台上，需要手动绑定 `handleClickAway` 函数
4. **内存管理**：组件卸载时会自动停止监听，也可以通过 `stop` 方法手动停止
5. **性能优化**：该函数使用全局事件监听器管理，避免了重复注册事件监听器

## useCountDown

### 简介
`useCountDown` 是一个通用的倒计时管理函数，支持毫秒精度的倒计时，可自定义时间格式，适用于各种需要倒计时功能的场景。

### 功能特性

- **毫秒级精度**：支持毫秒级的倒计时渲染
- **自定义格式**：支持自定义时间格式化模板
- **实时更新**：实时计算并返回当前倒计时状态
- **手动控制**：支持手动开始、暂停和重置倒计时
- **生命周期管理**：自动处理组件激活/失活状态
- **事件回调**：提供倒计时变化和结束时的回调函数

### 代码演示

```typescript
import { ref } from 'vue'
import { useCountDown, type UseCountDownOptions } from '@/uni_modules/lime-use'

// 基本用法
const { current, formattedTime, start, pause, reset } = useCountDown({
  time: 30 * 60 * 60 * 1000, // 30分钟
  format: 'HH:mm:ss',
  onChange: (current) => {
    console.log('倒计时变化:', current)
  },
  onFinish: () => {
    console.log('倒计时结束')
  }
} as UseCountDownOptions)

// 毫秒级倒计时
const { formattedTime: msTime } = useCountDown({
  time: 60 * 1000, // 1分钟
  millisecond: true,
  format: 'ss:SSS'
})

// 自定义格式
const { formattedTime: customTime } = useCountDown({
  time: 24 * 60 * 60 * 1000, // 1天
  format: 'DD 天 HH 时 mm 分 ss 秒'
})

// 手动控制
const handleStart = () => {
  start()
}

const handlePause = () => {
  pause()
}

const handleReset = () => {
  reset() // 重置为初始时间
  // 或 reset(60000) // 重置为60秒
}
```

### API 文档

#### Options 选项

| 选项名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| time | 倒计时总时间（毫秒） | _number_ | - | 必填 |
| millisecond | 是否启用毫秒级渲染 | _boolean_ | `false` | 可选 |
| format | 时间格式化模板 | _string_ | `'HH:mm:ss'` | 可选 |
| onChange | 倒计时变化时的回调函数 | _`(current: CurrentTime) => void`_ | - | 可选 |
| onFinish | 倒计时结束时的回调函数 | _`() => void`_ | - | 可选 |

#### 格式化模板说明

| 占位符 | 说明 | 示例 |
| --- | --- | --- |
| DD | 天数 | 01, 02, 30 |
| HH | 小时 | 00, 01, 23 |
| mm | 分钟 | 00, 01, 59 |
| ss | 秒数 | 00, 01, 59 |
| SSS | 毫秒（三位数） | 000, 001, 999 |
| SS | 毫秒（两位数） | 00, 01, 99 |
| S | 毫秒（一位数） | 0, 1, 9 |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| current | 当前倒计时状态 | _`ComputedRef<CurrentTime>`_ |
| formattedTime | 格式化后的时间字符串 | _`ComputedRef<string>`_ |
| start | 开始倒计时的函数 | _`() => void`_ |
| pause | 暂停倒计时的函数 | _`() => void`_ |
| reset | 重置倒计时的函数 | _`(totalTime?: number) => void`_ |

#### CurrentTime 类型

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| total | 总剩余时间（毫秒） | _number_ |
| days | 剩余天数 | _number_ |
| hours | 剩余小时数 | _number_ |
| minutes | 剩余分钟数 | _number_ |
| seconds | 剩余秒数 | _number_ |
| milliseconds | 剩余毫秒数 | _number_ |

### 使用注意事项

1. **时间精度**：启用 `millisecond` 后，倒计时会以毫秒级精度更新，可能会增加性能消耗
2. **格式化模板**：当使用 `DD` 占位符时，天数会单独显示，否则会累加到小时数中
3. **生命周期**：在组件激活/失活时，倒计时会自动暂停和恢复
4. **内存管理**：组件卸载时会自动停止倒计时，避免内存泄漏
5. **性能优化**：非毫秒级倒计时会在同一秒内避免重复更新，提高性能

## useIntersectionObserver

### 简介
`useIntersectionObserver` 是一个用于监听元素交叉状态的 Vue 组合式函数，支持判断元素是否进入或离开视口，适用于懒加载、无限滚动等场景。

### 功能特性

- **交叉状态监听**：监听元素是否进入或离开视口
- **自动清理**：组件卸载时自动停止监听
- **手动控制**：提供 `stop` 方法，允许手动停止监听
- **灵活配置**：支持配置交叉变化的阈值和方向

### 代码演示

```typescript
import { ref } from 'vue'
import { useIntersectionObserver } from '@/uni_modules/lime-use'

const targetRef = ref<UniElement | null>(null)

const { isIntersecting, stop } = useIntersectionObserver(
  targetRef,
  (entries) => {
    entries.forEach(entry => {
      console.log('交叉状态变化:', entry.isIntersecting)
    })
  },
  {
    threshold: 0.5,
    direction: 'vertical'
  }
)

// 手动停止监听
const handleStop = () => {
  stop()
}
```

```html
<!-- 在模板中使用 -->
<view ref="targetRef">
  需要监听交叉状态的元素
</view>
```

### API 文档

#### 参数

| 参数 | 说明 | 类型 | 备注 |
| --- | --- | --- | --- |
| target | 目标元素 | _`MaybeRefOrGetter<UniElement | null>`_ | 必填，监听交叉状态的元素 |
| callback | 交叉状态变化时的回调函数 | _`(entries: IntersectionObserverEntry[]) => void`_ | 必填，交叉状态变化时的回调 |
| options | 配置选项 | _`IntersectionObserverOptions`_ | 可选，交叉观察器配置 |

#### Options 选项

| 选项名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| threshold | 交叉比例阈值 | _`number \| number[]`_ | `0` |
| direction | 监听方向 | _`'vertical' \| 'horizontal' \| 'both'`_ | `'both'` |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| isIntersecting | 是否处于交叉状态 | _`ComputedRef<boolean>`_ |
| stop | 停止监听的方法 | _`() => void`_ |

## useResizeObserver

### 简介
`useResizeObserver` 是一个用于监听元素尺寸变化的 Vue 组合式函数，支持 Uni-APP-X 环境，适用于需要根据元素尺寸进行自适应布局的场景。

### 功能特性

- **尺寸变化监听**：监听元素宽度和高度的变化
- **Uni-APP-X 支持**：支持在 Uni-APP-X 环境下使用 UniResizeObserver API
- **多个元素观察**：支持同时观察多个元素的尺寸变化
- **自动清理**：组件卸载时自动停止观察
- **手动控制**：提供 `stop` 方法，允许手动停止观察

### 代码演示

```typescript
import { ref } from 'vue'
import { useResizeObserver } from '@/uni_modules/lime-use'

const targetRef = ref<UniElement | null>(null)

const { resizeRef, isSupported, stop } = useResizeObserver((entries) => {
  entries.forEach(entry => {
    console.log('尺寸变化:', entry.contentRect)
  })
})

// 监听多个元素
const { resizeRefs, isSupported: multiSupported, stop: multiStop } = useResizeObserver((entries) => {
  entries.forEach(entry => {
    console.log('元素尺寸变化:', entry.contentRect)
  })
})

// 手动停止监听
const handleStop = () => {
  stop()
}
```

```html
<!-- 在模板中使用 -->
<view ref="resizeRef">
  需要监听尺寸变化的元素
</view>

<!-- 监听多个元素 -->
<view v-for="(el, index) in elements" :key="index" :ref="el => resizeRefs[index] = el">
  第 {{ index + 1 }} 个元素
</view>
```

### API 文档

#### 参数

| 参数 | 说明 | 类型 | 备注 |
| --- | --- | --- | --- |
| callback | 尺寸变化时的回调函数 | _`ResizeObserverCallback`_ | 必填，尺寸变化时的回调 |
| options | 配置选项 | _`UseResizeObserverOptions`_ | 可选，观察器配置 |

#### Options 选项

| 选项名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | _`MaybeRefOrGetter<boolean>`_ | `false` |

#### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| resizeRef | 单个元素引用 | _`Ref<UniElement | null>`_ |
| resizeRefs | 多个元素引用数组 | _`Ref<UniElement[]>`_ |
| isSupported | 是否支持 UniResizeObserver | _`ComputedRef<boolean>`_ |
| stop | 停止观察的方法 | _`() => void`_ |

### 使用注意事项

1. **Uni-APP-X 支持**：该函数在 Uni-APP-X 环境下使用原生 UniResizeObserver API，在其他环境下会打印警告
2. **元素引用**：确保 `resizeRef` 能够正确获取到 DOM 元素的引用
3. **内存管理**：组件卸载时会自动停止观察，也可以通过 `stop` 方法手动停止
4. **多个元素**：通过 `resizeRefs` 可以同时观察多个元素的尺寸变化

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |
