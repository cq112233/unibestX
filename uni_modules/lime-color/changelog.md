## 2.0.0（2026-07-11）
- refactor: 清理 `color.uts` 中注释掉的历史代码（instanceof 检查、Map 实现版本、for/while 循环）
- refactor: `reversedNames` 从实例属性改为模块级常量，避免每个 TinyColor 实例都重建颜色名称反向映射表
- refactor: `setAlpha` 合并重载签名为单一 `string | number` 参数
- refactor: 精简 `format-input.uts` 的 `inputToRGB` 中 `any` 类型为具体联合类型
- fix: 修复 `toString` 的参数类型为 `LimeColorFormats | null`，`override toString()` 正确委托带参版本
- fix: 修复 `conversion.uts` 中 `numberInputToObject` 位运算在大于 `0x7FFFFFFF` 的数值上溢出的问题，改用除法运算
- fix: 删除 `rgbToHsl`/`rgbToHsv` switch 分支中的调试 `console.log`
- chore: 删除空接口 `LimeColor`，从 `LimeColorInput` 联合类型中移除
- chore: 删除未使用的 `utssdk/unierror.uts`
- chore: 删除冗余的 utssdk 平台目录（`app-android-o`、`app-js-o`、`index-o.uts`）
- chore: 删除测试桩文件 `common/test.uts` 和 `components/lime-color/lime-color.vue`
- chore: 修复 readme 赞助图片 CDN 地址（`testingcf.jsdelivr.net` → `cdn.jsdelivr.net`）
## 0.0.7（2025-08-31）
- chore: 更新文档
## 0.0.6（2025-04-21）
- feat: 兼容uniappx 鸿蒙next
## 0.0.5（2024-09-30）
- fix: 修复 vue2类型问题
## 0.0.4（2024-06-25）
- chore: 更改为非`utssdk`结构
## 0.0.3（2024-06-19）
- feat: 支持`uniapp`
## 0.0.2（2024-03-30）
- fix: 修复 因equals导致web可能报错
## 0.0.1（2024-03-12）
- init