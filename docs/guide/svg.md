# SVG 篇

SVG 在 uni-app X 中不是完全等价的跨端能力。是否可用取决于**运行平台、渲染方式和 SVG 的使用方式**，不能直接照搬 Web 端的 `<svg>` 方案。

## 推荐优先级

1. **字体图标**：`uni-icons`，跨端最稳。
2. **Iconify / 字体图标**：`lime-icon`，适合大量图标。
3. **PNG 图片**：原生 TabBar、复杂彩色图标和启动资源。
4. **SVG 资源**：仅在确认目标端支持后使用。

## 项目现状

- `static/copyright.svg` 作为静态资源存在。
- `lime-icon` 支持 SVG 图标模式，但依赖 `lime-svg` 原生插件，需要授权与自定义基座。
- 不建议在业务组件里直接写内联 `<svg>` 并假设 Android / iOS / 小程序都支持。

## 使用建议

```html
<!-- ✅ 普通图片资源：先确认目标端能解码 SVG -->
<image src="/static/copyright.svg" class="w-[80px] h-[20px]" />

<!-- ✅ 需要全端稳定时：改用字体图标 -->
<uni-icons type="info" size="20" color="#64748b" />
```

## 选型规则

- 只做 H5：可以使用常规 SVG。
- App / 小程序也要运行：优先字体图标或 PNG。
- 必须使用彩色 SVG：先验证目标端，再决定是否引入 `lime-svg` 与自定义基座。
- 原生 TabBar：使用 PNG，不使用 SVG。

