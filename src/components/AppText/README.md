# AppText

跟随全局字体与字号缩放的文本组件。单根 `<text>`，`class` 直接透传，不需要 `custom-class`。

```html
<AppText variant="title" class="text-[#1e293b] mb-[8px]">订单详情</AppText>
<AppText variant="body" class="text-[#64748b]">今天 14:30 已送达</AppText>
```

## Props

| Prop | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `variant` | `string` | `body` | `title` / `subtitle` / `body` / `caption` / `label` |
| `size` | `number` | `0` | 覆盖基础字号（px），仍会乘全局缩放 |
| `weight` | `string` | `''` | 覆盖字重，如 `bold` / `500` |
| `lineHeight` | `number` | `0` | 覆盖基础行高（px），仍会乘全局缩放 |
| `color` | `string` | `''` | 可选文字颜色；不传时由 class 控制 |

## 约束

- `class` 只写颜色、间距、对齐与布局，不要写 `text-[14px]` 字号类。
- 只接收纯文本，不要把 `<view>` 或多个兄弟节点放进默认插槽。
- 图标字符、`uni-icons`、第三方组件内部文字不要使用 `AppText`。
- 普通 `<text>` 不会自动跟随全局字体，新增业务文案应优先使用 `AppText`。

## Store

```uts
import { useFontStore } from '@/src/store/index.uts';

const fontStore = useFontStore();
fontStore.setFont('alimama-daoli');
fontStore.setFontScale(1.15);
```

字体清单见 `src/config/font/font.uts`，完整 Store 说明见 `src/store/README.md`。

可运行示例：[`src/sub/fontBasicDemo/fontBasicDemo.uvue`](../../sub/fontBasicDemo/fontBasicDemo.uvue)。
