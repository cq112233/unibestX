# useCodeTimer

## 简介
`useCodeTimer` 是一个用于管理验证码倒计时的 Vue 组合式函数，支持倒计时状态的保存与恢复，适用于各种需要验证码功能的场景。

## 功能特性

- **基本倒计时**：提供从指定秒数倒计时到0的功能
- **状态显示**：自动管理倒计时过程中的文本显示
- **状态保存与恢复**：支持页面刷新后保持倒计时状态
- **事件回调**：提供开始和结束时的回调函数
- **手动控制**：支持手动开始、重置和停止倒计时
- **暂停/继续**：支持暂停和继续倒计时
- **精确计时**：基于时间戳的精确倒计时计算

## 安装

该函数是 `lime-use` 库的一部分，您可以通过以下方式安装：

1. 在 uni-app 插件市场中搜索并导入 `lime-use`
2. 导入后可能需要重新编译项目

## 代码演示

### HTML 模板

```html
<button @click="handleGetCode" :disabled="!canGetCode">{{ tip }}</button>
<button @click="handleReset">重置</button>
<button @click="handleStop">停止</button>
<button @click="handlePause" :disabled="!isRunning">暂停</button>
<button @click="handleResume" :disabled="!isPaused">继续</button>
```

### TypeScript 使用方式

```typescript
// TypeScript 用户使用方式（推荐）
import { useCodeTimer, type UseCodeTimerOptions } from '@/uni_modules/lime-use'

// 或者使用原有的导入方式
// import { useCodeTimer, type UseCodeTimerOptions } from '@/uni_modules/lime-use/useCodeTimer'

// 使用 useCodeTimer 组合式函数
const { 
  tip,                // 当前显示的文本
  canGetCode,         // 是否可以重新获取验证码
  start,              // 开始倒计时
  reset,              // 重置倒计时
  stop,               // 停止倒计时
  pause,              // 暂停倒计时
  resume,             // 继续倒计时
  isPaused,           // 是否处于暂停状态
  secondsRemaining    // 当前剩余秒数
} = useCodeTimer({
  seconds: 120,                    // 倒计时总秒数
  startText: '获取验证码',          // 倒计时开始前显示的文本
  changeText: '重新获取 (X秒)',     // 倒计时进行中显示的文本，X会被替换为剩余秒数
  endText: '重新获取',              // 倒计时结束后显示的文本
  keepRunning: true,               // 是否在页面刷新后保持倒计时状态
  uniqueKey: 'myCodeTimer',        // 用于本地存储的唯一键名，避免多个倒计时冲突
  interval: 1000,                  // 定时器间隔（毫秒），不支持 UNI-APP-X 环境
  onStart: () => {
    console.log('倒计时开始')       // 倒计时开始时的回调函数
  },
  onEnd: () => {
    console.log('倒计时结束')       // 倒计时结束时的回调函数
  }
} as UseCodeTimerOptions)

// 处理获取验证码
const handleGetCode = () => {
  // 调用接口发送验证码
  // ...
  
  // 开始倒计时
  start()
}

// 处理重置倒计时
const handleReset = () => {
  // 重置倒计时
  reset()
}

// 处理停止倒计时
const handleStop = () => {
  // 停止倒计时（会保存当前状态）
  stop()
}

// 处理暂停倒计时
const handlePause = () => {
  pause()
}

// 处理继续倒计时
const handleResume = () => {
  resume()
}

// 计算是否正在运行
const isRunning = computed(() => !canGetCode.value && !isPaused.value)
```

### JavaScript 使用方式

```javascript
// JavaScript 用户可以这样使用（推荐）
import { useCodeTimer } from '@/uni_modules/lime-use'

// 或者使用原有的导入方式
// import { useCodeTimer } from '@/uni_modules/lime-use/useCodeTimer'

// 使用 useCodeTimer 组合式函数
const { 
  tip,                // 当前显示的文本
  canGetCode,         // 是否可以重新获取验证码
  start,              // 开始倒计时
  reset,              // 重置倒计时
  stop,               // 停止倒计时
  pause,              // 暂停倒计时
  resume,             // 继续倒计时
  isPaused,           // 是否处于暂停状态
  secondsRemaining    // 当前剩余秒数
} = useCodeTimer({
  seconds: 120,                    // 倒计时总秒数
  startText: '获取验证码',          // 倒计时开始前显示的文本
  changeText: '重新获取 (X秒)',     // 倒计时进行中显示的文本，X会被替换为剩余秒数
  endText: '重新获取',              // 倒计时结束后显示的文本
  keepRunning: true,               // 是否在页面刷新后保持倒计时状态
  uniqueKey: 'myCodeTimer',        // 用于本地存储的唯一键名，避免多个倒计时冲突
  interval: 1000,                  // 定时器间隔（毫秒），不支持 UNI-APP-X 环境
  onStart: () => {
    console.log('倒计时开始')       // 倒计时开始时的回调函数
  },
  onEnd: () => {
    console.log('倒计时结束')       // 倒计时结束时的回调函数
  }
})
```

## API 文档

### Options 选项

| 选项名 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| seconds | 倒计时秒数 | _number_ | `60` | 可选 |
| startText | 开始前的文本 | _string_ | `'获取验证码'` | 可选 |
| changeText | 倒计时中的文本，`X` 会被替换为剩余秒数 | _string_ | `'X秒重新获取'` | 可选 |
| endText | 倒计时结束后的文本 | _string_ | `'重新获取'` | 可选 |
| keepRunning | 是否在页面刷新后保持倒计时状态 | _boolean_ | `false` | 可选 |
| uniqueKey | 用于本地存储的唯一键名 | _string_ | `'default_code_timer'` | 可选 |
| onStart | 倒计时开始时的回调函数 | _() => void_ | - | 可选 |
| onEnd | 倒计时结束时的回调函数 | _() => void_ | - | 可选 |
| interval | 定时器间隔（毫秒） | _number_ | `1000` | 可选，不支持 UNI-APP-X 环境 |

### 返回值

| 返回值 | 说明 | 类型 |
| --- | --- | --- |
| tip | 当前显示的文本 | _ComputedRef<string>_ |
| canGetCode | 是否可以重新获取验证码 | _Ref<boolean>_ |
| start | 开始倒计时的函数 | _() => void_ |
| reset | 重置倒计时的函数 | _() => void_ |
| stop | 停止倒计时的函数（与 reset 类似，但会保存状态） | _() => void_ |
| pause | 暂停倒计时的函数 | _() => void_ |
| resume | 继续倒计时的函数 | _() => void_ |
| isPaused | 是否处于暂停状态 | _Ref<boolean>_ |
| secondsRemaining | 当前剩余秒数 | _Ref<number>_ |

## 使用注意事项

1. **唯一性键名**：使用 `keepRunning` 选项时，需要提供唯一的 `uniqueKey` 以避免冲突
2. **数据隔离**：倒计时状态会保存在本地存储中，建议合理设置 `uniqueKey` 以确保数据隔离
3. **自动保存**：在组件卸载时，倒计时状态会自动保存（如果启用了 `keepRunning`）
4. **事件触发**：恢复倒计时时，会自动触发 `onStart` 回调
5. **环境兼容性**：`interval` 选项不支持 UNI-APP-X 环境
6. **精确计时**：该函数使用基于时间戳的计算方式，确保长时间运行时的计时精度

## 常见问题

### 1. 为什么页面刷新后倒计时没有继续？

请确保您设置了 `keepRunning: true` 并且提供了唯一的 `uniqueKey`。

### 2. 为什么倒计时显示的时间与实际不一致？

JavaScript 定时器存在一定的精度问题，该函数已使用基于时间戳的计算方式来提高精度。如果仍有问题，请检查您的设备性能和网络状况。

### 3. 如何在多个组件中使用不同的倒计时？

为每个倒计时实例提供不同的 `uniqueKey` 即可避免冲突。

## 示例场景

### 手机号验证码

```typescript
const { tip, canGetCode, start } = useCodeTimer({
  seconds: 60,
  startText: '获取验证码',
  changeText: '重新获取 (X秒)',
  endText: '重新获取',
  keepRunning: true,
  uniqueKey: 'phone_code_timer'
})

const sendPhoneCode = async () => {
  if (!canGetCode.value) return
  
  try {
    // 调用发送验证码接口
    await api.sendSmsCode(phone.value)
    
    // 开始倒计时
    start()
    
    uni.showToast({
      title: '验证码已发送',
      icon: 'success'
    })
  } catch (error) {
    uni.showToast({
      title: '发送失败，请重试',
      icon: 'error'
    })
  }
}
```

### 邮箱验证码

```typescript
const { tip, canGetCode, start } = useCodeTimer({
  seconds: 120,
  startText: '获取邮箱验证码',
  changeText: 'X秒后重新获取',
  endText: '重新获取邮箱验证码',
  keepRunning: true,
  uniqueKey: 'email_code_timer'
})

const sendEmailCode = async () => {
  if (!canGetCode.value) return
  
  try {
    // 调用发送邮箱验证码接口
    await api.sendEmailCode(email.value)
    
    // 开始倒计时
    start()
    
    uni.showToast({
      title: '邮箱验证码已发送',
      icon: 'success'
    })
  } catch (error) {
    uni.showToast({
      title: '发送失败，请重试',
      icon: 'error'
    })
  }
}
```

## 更新日志

### v0.0.1

- 初始版本发布
- 支持基本的倒计时功能
- 支持状态保存与恢复
- 支持事件回调
- 支持暂停/继续功能

