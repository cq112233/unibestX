# 图标篇

项目提供一套轻量 + 可扩展的图标方案，优先使用字体图标，避免为普通图标引入大体积图片。

## 方案对比

| 方案 | 组件 / 资源 | 适用场景 |
| :--- | :--- | :--- |
| `uni-icons` | `<uni-icons />` | 通用内置图标、TabBar、按钮 |
| `lime-icon` | `<l-icon />` | Iconify 图标集、自有字体图标、SVG 图标 |
| 本地图片 | `static/tabbar/*.png` | 原生 TabBar 必须使用的图片图标 |

## uni-icons

```html
<uni-icons type="contact" size="24" color="#3b82f6" />
<uni-icons type="left" size="24" :color="iconColor" />
```

Easycom 自动注册，页面中直接使用短横线标签，无需手动 import。

## lime-icon

```html
<l-icon name="ri:aliens-fill" size="24" color="#10b981" />
<l-icon name="icon-park-outline:acoustic" size="32" color="#f43f5e" />
```

- 默认支持 Iconify 图标集合。
- 可注册自有字体图标和 SVG 图标。
- **SVG 模式依赖 `lime-svg` 原生插件，需要授权并使用自定义基座**；不需要 SVG 能力时不要启用。

## TabBar 图标

```uts
{
  iconType: 'icon',
  icon: 'home',
  iconActive: 'home-filled',
  iconPath: 'static/tabbar/home.png',
  selectedIconPath: 'static/tabbar/home_fill.png'
}
```

- 自定义 TabBar 可直接使用 `uni-icons`。
- 原生 TabBar 只接受图片路径，请提供普通与选中两张 PNG。

## 规范

- 图标颜色从主题令牌获取，不硬编码整套配色。
- 图标尺寸与旁边文字保持视觉对齐，优先用父级 `flex` 布局。
- 可点击图标放进带事件的 `<view>` 或原生按钮容器中，不要依赖图标组件自身承担点击区域。

