# 样式篇

项目使用 **Tailwind CSS v4 + SCSS + uni-app X 原生渲染**。样式首先必须满足原生端能力，再考虑 Web 端效果。

## 基本原则

- 使用方括号任意值：`text-[13px]`、`p-[16px]`、`bg-[#ffffff]`。
- 边框显式写全：`border-[1px] border-solid border-[#e2e8f0]`。
- 原生端不使用 `gap-*`、`space-x-*`、`space-y-*`。
- 文字颜色、字号、字重、行高与字体族必须写在 `<text>` 上，不要写在 `<view>`。
- 安全区统一使用 `p-safe`、`pt-safe`、`pb-safe`。
- 动态颜色统一走主题令牌或 CSS 变量，不在业务页面写死。

## 推荐写法

```html
<view class="flex flex-col p-[16px]">
  <text class="text-[16px] font-bold text-[#1f2937] mb-[8px]">标题</text>
  <text class="text-[13px] leading-[20px] text-[#64748b]">说明文字</text>
  <view class="flex flex-row items-center mt-[12px]">
    <text class="text-[13px] text-[#3b82f6] mr-[8px]">操作</text>
    <text class="text-[13px] text-[#94a3b8]">辅助信息</text>
  </view>
</view>
```

## 字号缩放：AppText

需要跟随全局字号比例变化的业务文案，统一使用 `AppText`。组件支持 Easycom；微信发行端建议在页面内显式 import，避免自动注册遗漏：

```html
<AppText variant="title" class="text-[#1e293b] mb-[8px]">订单详情</AppText>
<AppText variant="body" class="text-[#64748b]">今天 14:30 已送达</AppText>
```

```uts
import { useFontStore } from '@/src/store/index.uts';
import AppText from '@/src/components/AppText/AppText.uvue';

const fontStore = useFontStore();
fontStore.setFontScale(1.15); // 0.85 ~ 1.35
fontStore.resetFontScale();
```

- 全局 Store 只缩放使用 `AppText` 渲染的文本，不切换字体族。
- 原生 `<text>`、`uni-icons` 与第三方组件内部文本不会自动跟随。
- 字号比例会持久化，`App.uvue` 启动时调用 `initFontScale()` 校正恢复值。
- 自定义字体示例位于 `src/sub/fontBasicDemo/font/`，仅该演示页按需使用；微信端通过 `loadFontFace` 远程注册，App/H5 使用分包内本地字体。

## 主题与暗黑模式

配色唯一真源是根目录 `theme.json`，运行时代理在 `src/theme/index.uts`。

```uts
import { useThemeStore } from '@/src/store/index.uts';

const themeStore = useThemeStore();
themeStore.setTheme('#0957DE');
themeStore.setThemeMode('dark'); // auto | light | dark
```

- 不要在页面里写死全局背景色、导航栏色或 TabBar 色。
- CSS 变量必须绑定在根容器内联 `:style` 上，原生端才会随 JS 变化重绘。
- 详细令牌与 API 见 [src/theme/README.md](https://github.com/cq112233/unibestX/blob/main/src/theme/README.md)。

## Layout

页面通过 `definePage({ layout: 'navbar' })` 选择布局：

- `default`：普通页面。
- `navbar`：自定义导航栏 + 滚动容器。
- `empty`：全屏布局。
- `false`：禁用布局包裹。

