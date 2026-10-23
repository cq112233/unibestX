# 常见问题 2

## Android 白屏或插件异常

1. 清理 `unpackage`。
2. 重新执行 HBuilderX 编译。
3. 检查是否引入了未准备自定义基座的原生插件。
4. 检查是否有循环依赖或端专属 API 裸调用。

## H5 正常，小程序异常

优先检查：

- 是否穿透了公共入口，直接 import 模块内部文件。
- 是否使用了只有 Web 存在的 DOM / window / localStorage。
- 是否把纯类型从 `.ts` 跨分支转发。
- 是否使用了小程序未实现的原生组件或 API。

## 自定义 TabBar 遮挡页面

业务页面需要给底部预留安全区。优先使用项目导出的 TabBar 高度、安全区和底部 padding，不要写死 `80px`。

## TabBar 切换没有走全局守卫

模式 4 的 Tab 切换不是系统页面跳转。需要在 TabBar 层使用 `setupTabNavigationGuard()` 或对应 hooks，不要只依赖 `router.beforeEach()`。

## 样式在 App 端不生效

- 检查是否使用了 `gap` / `space-*`。
- 检查文字类样式是否写在 `<text>` 上。
- 检查动态颜色是否绑定到根容器内联 `:style`。
- 检查安全区是否使用 `p-safe` / `pb-safe`。

## 文档与源码不一致

以当前分支源码和 Skill 分册为准。发现文档过期时，先提交 issue 或同步修改文档，不要按旧截图或旧分支直接照搬配置。

