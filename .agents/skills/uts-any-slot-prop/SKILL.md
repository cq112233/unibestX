---
name: uts-any-slot-prop
description: Use when uni-app x（.uvue）编译报错，Kotlin 编译失败提示「参数类型不匹配：实际类型为 'Any?'，预期类型为 'UTSJSONObject'」（error17），通常出现在作用域插槽（#default / #handler）解构出的 item 传给需要 UTSJSONObject 的函数时。也适用于 vdom/vapor 双模式适配时在模板表达式中做类型断言。
---

# UTS 作用域插槽 Any? 类型报错

## 概述
uni-app x 的 uvue 模板中，作用域插槽（`#default="{ item, index }"`）解构出的插槽 props 类型会被编译器推断为 `Any?`，而不是组件实际绑定的类型（如 `UTSJSONObject`）。把它直接传给需要具体类型的函数，会导致 Kotlin 编译失败。

官方说明：[UTS 编译器已知问题 error17](https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error17)

## 何时使用
- 编译日志出现：`参数类型不匹配：实际类型为 'Any?'，预期类型为 'UTSJSONObject'`
- 报错位置在 `.uvue` 模板里调用 `getLabel(item)`、`getItemDisabled(item)` 等函数
- 模板中写了 `#default="{ item, index }"`、`#handler="{ item }"` 这类作用域插槽解构

不适用：`v-for` 循环变量走正常类型推断，不需要额外断言。

## 核心模式
在模板调用点用 `as` 断言，把插槽 prop 收窄到期望类型：

```html
<!-- 错误：item 类型是 Any?，无法传给期望 UTSJSONObject 的函数 -->
<text>{{ getLabel(item) }}</text>

<!-- 修复：显式断言 -->
<text>{{ getLabel(item as UTSJSONObject) }}</text>
```

`as` 断言在 uvue 模板表达式中可用，与 `(index as number) + 1` 是同一写法。

## 快速参考
| 场景 | 写法 |
| --- | --- |
| 插槽 item 传给 UTSJSONObject 函数 | `getLabel(item as UTSJSONObject)` |
| 插槽 item 做条件判断 | `getItemDisabled(item as UTSJSONObject) ? ... : ...` |
| 插槽 index 转 number | `(index as number) + 1` |

## 常见错误
- 在模板给插槽解构加类型注解（`#default="{ item }: { item: UTSJSONObject }"`）：uvue 模板语法不支持，会报错，用调用点 `as` 断言。
- 把函数签名改成 `any` 绕过：可编译但丢失类型检查，优先保持签名严格、在模板断言。
- 漏掉 index：`index` 同样是 `Any?`，需要 `(index as number)` 才能做算术。

## 相关 UTS 编译注意点（vdom/vapor 适配）
| 问题 | 处理 |
| --- | --- |
| 模板/逻辑里 `===` / `!==` | 改为 `==` / `!=`（Kotlin/Swift 原生端引用比较问题） |
| CSS `height: 100vh` | uvue 不支持 vh，用 `uni.getWindowInfo().windowHeight` 内联 px 或 `100%` |
| `watch(() => props.x, ...)` | getter 显式返回类型：`watch((): string => props.x, ...)` |
| `let timer = 0` | 显式声明：`let timer: number = 0` |
| 定义对象结构类型 | 一律 `type`，禁止 `interface`（见 AGENTS.md 项目规则） |
