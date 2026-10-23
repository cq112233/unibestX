# AppText

支持全局字号缩放的文本组件。单根 `<text>`，`class` 直接透传，不需要 `custom-class`。

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
| `fontFamily` | `string` | `''` | 覆盖字体族；空串表示系统字体 |
| `color` | `string` | `''` | 可选文字颜色；不传时由 class 控制 |

## 字号缩放

```uts
import { useFontStore } from '@/src/store/index.uts';

const fontStore = useFontStore();
fontStore.setFontScale(1.15);
fontStore.resetFontScale();
```

- 缩放范围：`0.85 ~ 1.35`，默认 `1`。
- 只影响使用 `AppText` 渲染的文本；原生 `<text>` 和第三方组件内部文本不会自动跟随。
- 字号比例会持久化，`App.uvue` 启动时调用 `initFontScale()` 校正恢复值。

可运行示例：`src/sub/fontBasicDemo/fontBasicDemo.uvue`。
