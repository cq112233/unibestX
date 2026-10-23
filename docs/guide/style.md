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

## 全局字体：AppText

需要跟随全局字体与字号缩放变化的业务文案，统一使用 `AppText`。组件已通过 Easycom 注册，不需要手动 import：

```html
<view class="flex flex-col p-[16px]">
  <AppText variant="title" class="text-[#1e293b] mb-[8px]">订单详情</AppText>
  <AppText variant="body" class="text-[#64748b]">今天 14:30 已送达</AppText>
  <AppText variant="caption" class="text-[#94a3b8] mt-[6px]">共 3 件商品</AppText>
</view>
```

`AppText` 的职责边界：

- `variant` 控制字号、字重与行高：`title` / `subtitle` / `body` / `caption` / `label`。
- `class` 控制颜色、外边距、对齐与布局；**不要再写 `text-[14px]` 等字号类**，字号由组件统一接管。
- 需要单次覆盖时可用 `size` / `weight` / `lineHeight` / `color`，但业务页面优先使用 `variant + class`。
- 组件是单根 `<text>`，纯文本直接放进默认插槽；不要塞 `<view>` 或多个兄弟 `<text>`。
- 图标字符、`uni-icons`、第三方组件内部文字**不要**替换成 `AppText`，避免全局字体族破坏图标字体。
- 原生 `<button>`、`rich-text` 和第三方组件内部文字不会自动应用全局字体，需要逐步迁移或单独设置。

字体与字号由 `useFontStore` 统一管理：

```uts
import { useFontStore } from '@/src/store/index.uts';

const fontStore = useFontStore();

fontStore.setFont('alimama-daoli');
fontStore.setFontScale(1.15);
fontStore.resetFont();
```

- 字体清单维护在 `src/config/font.uts`，新增字体只需追加配置。
- 远程字体通过 `uni.loadFontFace` 注册；失败时保留系统字体兜底，不会阻塞页面。
- 用户选择与字号比例会持久化；`App.uvue` 启动时调用 `initFont()` 重新注册远程字体。

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

