## 4.4.4（2026-06-01）
fix(calendar): 修复隐藏挂载场景首日偏移异常

问题原因：日历在容器隐藏时初始化可能拿到宽度 0，导致首日 margin-left 计算异常。
改动范围：
1) month.vue：为宽度计算增加 windowWidth 兜底，并在非 APP-NVUE 使用百分比首日偏移。
2) month.uvue：首日偏移改为百分比计算，同时保留宽度查询兜底。
影响说明：仅调整日历首日布局偏移，不改变日期选择与事件回调逻辑。

## 4.4.3（2026-05-31）
扩展 up-datetime-picker 支持小时与秒级选择

- 在 uvue 实现中新增 datehour、timesecond、datetimesecond 模式处理逻辑
- 增加 minSecond/maxSecond 秒级边界并补齐列生成、回显与变更计算
- 同步更新 TypeScript 类型定义，确保模式与新属性可被正确提示和约束

## 4.4.2（2026-05-30）
feat: add pageInline prop to up-popup, up-picker, up-datetime-picker

When pageInline=true the picker renders inline on the page rather than
as a floating popup — fixes scroll-to-default-value issue on Android/
HarmonyOS (issue #941 equivalent) and enables always-visible inline
datetime/picker use cases.

## 4.4.1（2026-05-29）
fix(avatar): 修复 uvue 头像 src 监听导致默认图覆盖问题

- up-avatar.uvue: 仅在 src 为空/空白时触发 errorHandler
- up-avatar.uvue: 移除 onMounted 中对 avatarUrl 的二次重置，避免覆盖回退结果

## 4.4.0（2026-05-27）
feat: 新增更多组件与示例页，修复多平台兼容问题

新增安卓演示组件（25 个）：
- up-popover, up-pagination, up-agreement, up-float-button
- up-coupon, up-select, up-dragsort, up-signature, up-color-picker
- up-cascader, up-tree, up-choose, up-virtual-list, up-pull-refresh
- up-refresh-virtual-list, up-city-locate, up-goods-sku, up-pdf-reader
- up-markdown, up-short-video, up-barcode, up-poster, up-cropper
- up-lazy-load, up-qrcode

新增安卓基础/兼容组件（4 个）：
- up-canvas, up-cate-tab, up-view, up-message-input

新增数据组件（2 个）：
- up-action-sheet-data, up-picker-data

恢复/补齐安卓端功能（18 处）：
- up-cascader 多级联动、up-color-picker 调色、up-cate-tab 联动滚动
- up-poster 二维码和渐变绘制、up-cropper 裁剪交互
- up-signature 多语言文案、up-barcode/up-qrcode 图片导出
- up-waterfall 列间距和自适应列数、up-loading-icon 旋转动画
- up-code-input 光标闪烁、up-checkbox 表单校验联动
- up-notify/up-toast 完成回调、up-index-list 对象索引项支持
- up-upload 读取回调/确认事件/自动上传/文件选择结果返回
- up-line-progress 安卓实现

修复安卓端崩溃与异常（12 处）：
- up-col Promise 强转 number 导致 ClassCastException
- up-rate NullPointerException
- up-number-box Integer 强转 String 的 ClassCastException（2 处）
- up-pagination NPE 及 block 组件不识别
- up-select data() 中访问 props 导致 NPE
- up-picker 数组越界 IndexOutOfBoundsException
- up-calendar selected 数组越界
- up-popup 内容被遮罩层遮挡
- up-count-down/up-datetime-picker/up-skeleton/up-subsection 数值比较
- up-notify 顶部判断、up-popup 布尔比较

修复跨平台与 UI 问题（10 处）：
- up-cell 自定义图标 H5 不显示及安卓图片过大
- up-calendar 默认显示 2000-01、打开卡顿（延迟初始化优化）
- up-select 箭头跑到文字下方
- up-slider 滑块无法显示及区间数值重叠
- up-table2 合并单元格文字遮挡及 H5 横向滚动
- up-barcode EAN/UPC 格式无法显示
- up-parse 安卓富文本渲染、up-markdown 安卓渲染能力
- up-qrcode 安卓画布绘制尺寸与显示、新增静区配置
- navbar/messageInput/readMore/floatButton/dragsort 多个问题
- 过渡组件方向动画

补充示例与资源：
- up-tooltip/up-title/up-copy/up-tabbar/up-index-list 演示入口
- up-section 默认配置、组件 D 示例页滚动容器
- swipeAction/tooltip 注册到 pages.json
- 模板示例页、公共数据、静态资源、pdfjs 资源


## 4.3.33（2026-05-26）
style: 统一剩余组件示例页标题 DOM 结构并发布

## 4.3.32（2026-05-19）
feat: 日历组件新增今天快捷按钮并支持回到当月

本次在 up-calendar 的 vue/uvue 实现中增加 showToday 配置与今天按钮交互，点击后可快速定位到今天所在月份，并对今天日期做独立高亮（不覆盖现有选中态）。同时补充 js/uts 多语言键 up_calendar_today 及类型声明，确保各端行为一致。
## 4.3.31（2026-05-15）
style: 统一组件示例页标题 DOM 结构

- 将示例区块标题外层标签由 text 替换为 view 包裹结构
- 内部文本 class 统一调整为 text，优化样式作用域与布局兼容性
- 同步更新 alert、badge 及 code 组件的演示页面

## 4.3.30（2026-05-14）
refactor: 统一调整组件示例页标题DOM结构

- 将 loadmore 与 scrollList 示例页标题外层标签由 text 替换为 view 包裹结构
- 优化标题容器布局能力，便于后续统一样式管理与对齐处理

## 4.3.29（2026-05-13）
refactor: 统一调整组件示例页标题DOM结构

- 将 radio、sticky、swipeAction 示例页中的标题元素由 `<text>` 替换为 `<view>` 包裹 `<text>` 的结构
- 优化标题容器布局能力，便于后续统一添加样式或对齐处理
- 保持原有文本内容与类名逻辑不变，仅调整外层容器标签

## 4.3.28（2026-05-11）
style: 统一组件示例页标题结构以优化样式布局

- 将 image、line、link 及 loading-icon 示例页的标题外层标签由 text 替换为 view
- 内部文本节点统一追加 text 类名以适配最新样式规范
- 优化演示区块 DOM 结构，提升多端布局一致性与渲染兼容性

## 4.3.27（2026-05-11）
refactor: 迁移示例页至组合式API并新增表格演示

- 将 card、form、countDown 等示例页的 Options API 迁移至 <script setup> 组合式语法
- 统一替换 $refs 方法调用为 $callMethod 配合类型断言，适配 UTS/TS 强类型环境
- 新增 table2 组件演示页，覆盖基础渲染、排序筛选、固定列、树形结构及单元格合并等场景
- calendar 示例页补充单月切换模式下的单选、区间与多选日期用例
- 调整 grid、skeleton 等页面的标题 DOM 结构，统一外层包裹 view 容器
- 修正 card 示例页的样式类名前缀并更新部分静态资源链接

## 4.3.26（2026-05-09）
style: 调整 gap 示例页标题 DOM 结构

- 使用 view 容器包裹原有 text 标题节点
- 为内部 text 元素添加 text 类名以支持样式定制
- 统一修改基本案例、自定义颜色、高度及边距四个模块的标题结构

## 4.3.25（2026-05-08）
chore: 更新 empty 组件演示页资源链接与图片格式

- 将静态资源基础域名从旧 CDN 迁移至新域名并启用 HTTPS
- 统一将示例图片文件后缀由 png 更改为 jpg
- 调整演示效果标题的 DOM 结构，外层增加 view 容器包裹

## 4.3.24（2026-05-07）
style: 优化 divider 示例页标题结构

- 将各示例区块的标题 text 标签改为 view 包裹 text 结构，并统一 class 为 text
- 调整 DOM 层级以适配新样式规范，解决原有 text 标签直接作为容器可能引发的布局问题
- 覆盖基本案例、虚线、细线、点代替文字、文本左右对齐及自定义颜色等全部演示模块

## 4.3.23（2026-05-06）
fix: 修复复选框示例数据绑定并优化标题布局结构

- 将各组件示例页的标题文本统一包裹至 view 容器并添加 text 类名
- 修正 checkbox 示例中 label 属性绑定错误，恢复为 item['name']
- 调整 checkboxChange 方法签名，增加 name 参数并启用控制台日志
- 统一代码缩进与换行格式，提升示例页代码可读性

## 4.3.22（2026-04-30）
feat: 新增 subsection 禁用与动态颜色及 swiper 纵向滑动支持

- up-subsection 新增 disabled 属性，禁用时拦截点击事件并应用置灰样式
- up-subsection 新增 activeColorKeyName 与 inactiveColorKeyName，支持从列表数据动态读取颜色
- up-swiper 新增 vertical 属性，支持配置轮播图滑动方向为纵向
- up-transition 移除根节点 touchmove 事件监听，优化页面滚动交互体验

## 4.3.21（2026-04-29）
fix: 优化数字输入框清空与失焦边界校验逻辑

- 输入过程中允许临时清空，不再立即回退至最小值
- 将边界值修正与值变更触发逻辑统一移至失焦事件处理
- 同步修复 .vue 与 .uvue 双端组件的输入交互逻辑

## 4.3.20（2026-04-28）
fix: 修复微信小程序中交叉观察器上下文触发 Vue 告警

- 将交叉观察器创建方法的上下文参数替换为 this.$scope 优先回退至 this
- 避免在微信小程序环境下传入组件代理实例时触发 Vue 的 keys 枚举告警
- 补充组件样式文件末尾缺失的换行符

## 4.3.19（2026-04-28）
refactor: 重构 empty 组件并增强 tabbar-item 路由同步

- 将 up-empty 迁移至 `<script setup>` 语法，使用 `computed` 与 `defineProps` 重构响应式逻辑
- up-empty 图标提示文案全面接入 `t()` 国际化函数，移除硬编码文本并修正模板样式合并方式
- up-tabbar-item 新增基于页面路由的激活状态同步机制，支持通过 `name` 路径自动匹配高亮
- up-tabbar-item 引入定时器轮询路由变化，并完善组件挂载与卸载时的生命周期清理逻辑
- up-grid-item 注释废弃的 `$upGridItem` 全局事件监听代码，移除冗余逻辑

## 4.3.18（2026-04-27）
refactor: 重构评分组件逻辑并增强数值与边界处理

- 统一 Vue2/Vue3 的 activeIndex 初始化与监听逻辑，移除条件编译分支
- 新增 normalizeActiveIndex 等辅助方法，安全解析 props 并限制数值范围
- 引入 ensureRateMetrics 校验布局尺寸，避免 rateWidth 为 NaN 导致计算异常
- 在触摸与点击事件处理前增加边界守卫，拦截无效坐标与未初始化状态
- 规范化 emitEvent 输出值，确保 change 事件与双向绑定数据一致性
- 调整示例页标题 DOM 结构，优化样式兼容性

## 4.3.17（2026-04-26）
feat: 新增 up-table2 高级表格组件及路由配置

- 新增 up-table2 主组件及 tableRow 递归行组件，提供 Vue 与 UVue 双版本实现
- 内置树形数据展开、单元格合并、列排序、数据过滤、行多选及固定列等高级功能
- 优化表头固定与横向滚动交互，支持滚动阴影提示与斑马纹/高亮行样式
- 更新页面路由配置与示例组件菜单，新增 Table2 演示入口并移除 Form 适配中标识
- 补充表格组件演示所需的静态图标资源

## 4.3.16（2026-04-24）
fix: 优化 datetime-picker 同步逻辑并补充多组件类型定义

- 重构 up-datetime-picker 列构建逻辑，抽离 buildColumns 方法
- 新增 columnsEqual 对比函数，避免列数据未变化时重复渲染
- 引入 syncColumnsAfterChange 延迟更新选中索引，修复列数据变更时的索引错位问题
- 补充 album 组件 onPreview 事件与 stop 属性类型
- 修正 radio 组件插槽定义，区分 icon 与 label 插槽
- 新增 subsection 组件动态颜色字段键名及 disabled 属性类型
- 补充 swiper 组件 vertical 纵向滑动属性类型

## 4.3.15（2026-04-24）
feat: 日历组件新增单月切换模式并修复日期计算逻辑

- 新增 monthSwitch 属性，支持非滚动的单月切换交互模式
- 头部组件新增年月切换按钮及禁用状态控制，适配新交互
- 恢复并修正 month 组件的日期宽度计算与首行偏移样式逻辑
- 修正默认日期判空条件及选中数组克隆方式，避免数据引用污染

## 4.3.14（2026-04-22）
refactor: 下拉菜单组件重构为 Vue3 script setup 语法

- 将 Options API 全面替换为 Composition API 语法结构
- 使用 defineProps/defineEmits/ref/computed/watch 替代原有选项式写法
- 引入 useUltraUI 组合式函数管理父子实例通信，移除 $parent 直接调用
- 模板绑定统一改为 props.xxx 访问，并适配 $up.addUnit 工具方法
- 增加 Vue2/Vue3 条件编译以兼容 v-model 属性与事件触发逻辑
- 通过 defineExpose 显式暴露 init/close/setActive 等核心方法

## 4.3.13（2026-04-21）
refactor: 将 up-divider 组件重构为 setup 语法

- 模板样式绑定调整为调用全局 $up.addStyle 方法
- 脚本逻辑由 Options API 迁移至 <script setup> 组合式语法
- 使用 defineProps 内联声明属性并对接默认配置，移除原有 mixin 依赖
- 计算属性与事件处理函数改为直接声明，清理冗余注释

## 4.3.12（2026-04-20）
fix: 修复 NVUE 环境下折叠面板高度计算异常

- 优化 APP-NVUE 条件下 getComponentRect 回调的返回值处理逻辑
- 增加空值保护并显式将 height 设为 auto，避免布局渲染异常

## 4.3.11（2026-04-20）
feat: up-album 新增 stop 属性与 preview 事件

- 新增 stop 布尔属性，支持在触发内置预览时阻止点击事件冒泡
- 新增 preview 事件，当关闭内置预览时向外抛出图片列表与当前索引
- 重构 onPreviewTap 方法，统一接收事件对象并拆分内置与自定义预览逻辑
- 同步更新多端文件的默认配置、Props 定义与 Emits 声明

## 4.3.10（2026-04-19）
refactor: 迁移 count-to 至 setup 语法并增强 picker 滚动稳定性及datetime-picker快速滚动优化

- 将 count-to 组件全面迁移至组合式 API，合并动画帧与计数逻辑以提升可维护性
- 为 datetime-picker 新增安全取值与类型转换辅助函数，解决快速滚动时的越界与空值异常
- 优化日期边界计算与正则解析逻辑，增加非法日期兜底、范围校验及 NaN 防护
- 完善 show 状态监听与 close 交互逻辑，确保输入框模式下的面板显隐状态严格同步

## 4.3.9（2026-04-17）
refactor: 将 up-copy 与 up-count-down 迁移至 script setup 语法

- 将组件逻辑从 Options API 迁移至 <script setup lang="uts"> 组合式 API
- 使用 defineProps 与 defineEmits 替代原有配置，移除 mixin 混入依赖
- 采用 ref 管理内部状态，配合 watch 与生命周期钩子处理副作用与清理
- 通过 defineExpose 显式暴露倒计时控制方法，规范外部调用接口
- 调整倒计时递归函数声明方式以兼容 app-android 平台，并统一接入默认配置

## 4.3.8（2026-04-16）
fix: 修复栅格样式合并问题并增强折叠面板类型安全

- 修正 up-col 组件样式合并逻辑，移除冗余的 deepMerge 调用，确保 customStyle 正确生效
- 为 up-collapse-item 的 accordion 属性增加空值判断，避免未定义时触发类型断言异常
- 在 up-collapse 组件中为 expanded 状态补充 as boolean 类型断言，提升 UTS 环境下的类型安全性
- 新增 AI 调试与验证规范文档，明确 HBuilderX CLI 编译校验流程及提交前强制验证规则

## 4.3.7（2026-04-16）
fix: 修正 checkbox 事件传参顺序并清理冗余逻辑

- 移除单元格分组组件中重复定义的 border 属性
- 调整 change 事件触发时机至 v-model 更新后，确保状态同步
- 为 change 事件补充第二参数，返回当前操作复选框的选中状态与 name 值
- 简化复选框组件中 disabled 与 labelDisabled 的空值判断逻辑
- 增加 borderBottom 属性读取前的非空校验，防止潜在报错

## 4.3.6（2026-04-16）
fix: 修正 checkbox 事件传参顺序并清理冗余逻辑

- 移除单元格分组组件中重复定义的 border 属性
- 调整 change 事件触发时机至 v-model 更新后，确保状态同步
- 为 change 事件补充第二参数，返回当前操作复选框的选中状态与 name 值
- 简化复选框组件中 disabled 与 labelDisabled 的空值判断逻辑
- 增加 borderBottom 属性读取前的非空校验，防止潜在报错

## 4.3.5（2026-04-15）
refactor: 提取日历公共类型并清理组件冗余代码

- 将日历月份组件的日期类型抽离至独立 types.uts 文件，并重命名为 UPCalendarMonthsItemDate 实现跨组件复用
- 同步更新日历主组件与月份组件的类型引用、函数参数标注及数组声明，修正 Number 为 number
- 移除头像组件中冗余的 customStyle 属性定义
- 为操作面板的 select 事件参数补充 UTSJSONObject 类型断言以通过 UTS 类型检查
- 统一日历组件中部分模式判断与数组长度比较的运算符为 ==

## 4.3.4（2026-04-15）
refactor: 优化核心工具函数类型定义与空值处理逻辑

- 优化 timeFormat 与 toast 函数参数类型，增加空值拦截逻辑避免运行时异常
- 重构 getProperty 嵌套属性获取逻辑，补充中间节点类型校验并简化遍历流程
- 放宽 setProperty 赋值参数类型限制以支持任意数据类型写入
- 移除配置模块中残留的调试打印语句
- 调整多行文本省略样式中 CSS 属性声明顺序，提升跨端渲染兼容性
## 4.3.3（2026-04-14）
fix: 修复 useUltraUI 中父组件属性与 refs 的键值判断逻辑

- 将 propsData 与 refsData 的键值检查改为 UTSJSONObject.keys().includes()
- 提升键存在性判断的准确性，避免直接访问可能引发的空值或类型异常
- 确保仅当父组件明确传递对应字段时才同步数据至 parentData
## 4.3.2（2026-04-14）
refactor: 重写 async-validator 适配 UTS 环境

- 移除旧版 JS 兼容代码与冗余校验函数，全面采用 UTS 类型系统重写核心逻辑
- 重构 Schema 类，使用 Promise 递归调用替代原有回调与 asyncMap 机制实现串行校验
- 新增 normalizeRuleObject 统一处理规则对象，严格适配 UPFormRuleItem 类型定义
- 简化内置校验器实现，移除深层对象嵌套校验与复杂异步并行映射逻辑
- 标记消息模板替换、正则模式匹配及异步验证器 Promise 处理为待完善项

## 4.3.1（2026-04-14）
fix(i18n): 修复新版本HBuilderX下多语言报错

- 将 `uni_modules/uview-ultra/libs/i18n/locales` 下多语言资源从 `*.json` 调整为 `*.js`（保留原内容）
- 新增各语言 `*.uts` 资源文件，补齐 uni-app x/UTS 侧可直接导入的本地化模块
- 更新 `libs/i18n/index.js` 与 `libs/i18n/index.uts` 的导入路径，分别指向对应平台资源
- 调整 `components/page-nav/page-nav.vue` 为 `script setup` 写法，保持原有展示与跳转逻辑

## 4.3.0（2026-04-14）
add(form): 新增 uni-app x 表单校验支持及 Android 兼容问题

- 重构 `up-form`/`up-form-item` 为 `script setup`，统一通过 `defineExpose + $callMethod` 交互，移除对子组件 `$data` 的直接访问
- 修复表单校验链路：规则读取、触发器过滤、字段消息回写、Promise 回调处理，避免校验结果丢失
- 增加 `UPFormRuleItem` 类型定义并在 `types/index.uts` 导出，统一表单规则结构
- 修复 async-validator 在 uni-app x Android 的多处兼容问题（空值强转、函数调用、first 选项判空、字段聚合 NPE）
- 调整 `up-form-item` 默认 `rules` 结构与取值逻辑，保证规则在 UTS 下可稳定识别
- 重新启用 `pages/componentsC/form/form` 页面路由并同步相关配置格式

## 4.2.60（2026-03-08）
refactor: 【组合式API重构】 up-gap组件（uni-app-x）

## 4.2.59（2026-03-07）
refactor: 【组合式API重构】 优化up-loading-icon、up-index-anchor等（uni-app-x）

## 4.2.58（2026-03-07）
refactor: 【组合式API重构】 优化up-td、up-row等（uni-app-x）

## 4.2.57（2026-03-06）
refactor: 【组合式API重构】 优化up-waterfall（uni-app-x）

## 4.2.56（2026-03-05）
refactor: 【组合式API重构】 优化getParent（uni-app-x）

## 4.2.55（2026-03-05）
refactor: 【组合式API重构】 优化colorGradent支持常用名称颜色（uni-app-x）

## 4.2.54（2026-03-04）
refactor: 【组合式API重构】 优化index.uts（uni-app-x）

## 4.2.53（2026-03-02）
refactor: 【组合式API重构】 up-column-notice组件（uni-app-x）

## 4.2.52（2026-02-27）
refactor: 【组合式API重构】 up-car-keyboard组件（uni-app-x）

## 4.2.51（2026-02-26）
refactor: 【组合式API重构】 up-button组件（uni-app-x）

## 4.2.50（2026-02-26）
refactor: 【组合式API重构】 up-icon组件（uni-app-x）

## 4.2.49（2026-02-25）
refactor: 【组合式API重构】 up-image组件（uni-app-x）

## 4.2.48（2026-02-23）
refactor: 【组合式API重构】 up-input输入框组件（uni-app-x）

## 4.2.47（2026-02-14）
refactor: 【组合式API重构】 up-grid宫格组件（uni-app-x）

## 4.2.46（2026-02-13）
refactor: 【组合式API重构】 up-index-list索引列表组件（uni-app-x）

## 4.2.45（2026-02-12）
refactor: 【组合式API重构】 修复up-row-notice组件在app-android箭头函数导致递归报错（uni-app-x）

## 4.2.44（2026-02-12）
refactor: 【组合式API重构】 up-datetime-picker组件（uni-app-x）

## 4.2.43（2026-02-09）
refactor: 【组合式API重构】 up-row-notice组件（uni-app-x）

## 4.2.42（2026-02-07）
refactor: 【组合式API重构】 up-collapse组件（uni-app-x）

## 4.2.41（2026-02-07）
refactor: 【组合式API重构】 优化up-action-sheet组件（uni-app-x）

## 4.2.40（2026-02-06）
refactor: 【组合式API重构】 修复up-cell组件（uni-app-x）

## 4.2.39（2026-02-06）
improvment: 优化mixin等

## 4.2.38（2026-02-05）
refactor: 【组合式API重构】 支持template中使用$u.addUnit $u.addStyle $u.timeFormat（uni-app-x）

## 4.2.37（2026-02-05）
refactor: 【组合式API重构】 新增up-title组件（uni-app-x）

## 4.2.36（2026-02-05）
refactor: 【组合式API重构】 up-card组件（uni-app-x）

## 4.2.35（2026-02-04）
refactor: 【组合式API重构】 up-cell组件（uni-app-x）

## 4.2.34（2026-02-03）
refactor: 【组合式API重构】 up-cell-group组件（uni-app-x）

## 4.2.33（2026-02-03）
refactor: 【组合式API重构】 up-box组件（uni-app-x）

## 4.2.32（2026-02-02）
refactor: 【组合式API重构】 优化up-avatar组件（uni-app-x）

## 4.2.31（2026-02-02）
refactor: 【组合式API重构】 优化up-col组件（uni-app-x）

## 4.2.30（2026-02-02）
refactor: 【组合式API重构】 修复up-number-box组件（uni-app-x）

## 4.2.29（2026-01-31）
refactor: 【组合式API重构】 修复up-col组件（uni-app-x）

## 4.2.28（2026-01-31）
refactor: 【组合式API重构】 steps示例优化warning（uni-app-x）

## 4.2.27（2026-01-30）
refactor: 【组合式API重构】 subsection示例优化warning（uni-app-x）

## 4.2.26（2026-01-30）
refactor: 【组合式API重构】 swiper示例优化warning（uni-app-x）

## 4.2.25（2026-01-30）
refactor: 【组合式API重构】 tabs示例优化warning（uni-app-x）

## 4.2.24（2026-01-29）
refactor: 【组合式API重构】 text示例优化warning（uni-app-x）

## 4.2.23（2026-01-29）
refactor: 【组合式API重构】 textarea示例优化warning（uni-app-x）

## 4.2.22（2026-01-29）
refactor: 【组合式API重构】 tooltip示例优化warning（uni-app-x）

## 4.2.21（2026-01-28）
refactor: 【组合式API重构】 up-count-downr优化（uni-app-x）

## 4.2.20（2026-01-28）
refactor: 【组合式API重构】 up- picker优化（uni-app-x）

## 4.2.19（2026-01-28）
refactor: 【组合式API重构】 up-item-steps优化（uni-app-x）

## 4.2.18（2026-01-28）
refactor: 【组合式API重构】 up-subsection优化（uni-app-x）

## 4.2.17（2026-01-28）
refactor: 【组合式API重构】 up-textarea优化（uni-app-x）

## 4.2.16（2026-01-28）
refactor: 【组合式API重构】 up-checkbox-group组件与up-collapse-item优化（uni-app-x）

## 4.2.15（2026-01-27）
fix: 修复refactor: 【组合式API重构】 up-badge组件（uni-app-x）

## 4.2.14（2026-01-27）
fix: 修复refactor: 【组合式API重构】 up-badge组件（uni-app-x）

## 4.2.13（2026-01-27）
fix: 修复refactor: 【组合式API重构】 up-code-input组件（uni-app-x）

## 4.2.12（2026-01-27）
fix: 修复refactor: 【组合式API重构】 up-col组件（uni-app-x）

## 4.2.11（2026-01-27）
fix: 修复refactor: 【组合式API重构】 up-row组件（uni-app-x）

## 4.2.10（2026-01-27）
refactor: 【组合式API重构】 up-upload组件优化（uni-app-x）

## 4.2.9（2026-01-27）
refactor: 【组合式API重构】 up-checkbox组件优化（uni-app-x）

## 4.2.8（2026-01-26）
refactor: 【组合式API重构】 up-table组件（uni-app-x）

## 4.2.7（2026-01-26）
refactor: 【组合式API重构】 up-td组件（uni-app-x）

## 4.2.6（2026-01-26）
refactor: 【组合式API重构】 up-th组件（uni-app-x）

## 4.2.5（2026-01-26）
refactor: 【组合式API重构】 up-tr组件（uni-app-x）

## 4.2.4（2026-01-26）
refactor: 【组合式API重构】 优化完善组件父子关系管理组合式函数（uni-app-x）

## 4.2.3（2026-01-25）
refactor: 【组合式API重构】 修复addUnit错误返回auto导致样式异常（uni-app-x）

## 4.2.2（2026-01-24）
refactor: 【组合式API重构】 up-code组件（uni-app-x）

## 4.2.1（2026-01-24）
fix: 修复upload类型报错

## 4.2.0（2026-01-24）
fix: 处理H5端编译大量warning

change: LICENSE协议变更

## 4.1.29（2026-01-24）
refactor: 【组合式API重构】 父子组件架构支持组合式函数hooks方式（uni-app-x）

refactor: 【组合式API重构】 up-checkbox组件（uni-app-x）

refactor: 【组合式API重构】 up-checkbox-group组件（uni-app-x）

## 4.1.28（2026-01-23）
refactor: 【组合式API重构】 back-top组件（uni-app-x）

## 4.1.27（2026-01-23）
fix: 修复index.uts

## 4.1.26（2026-01-23）
fix: 修复input组件warning

## 4.1.25（2026-01-23）
fix: 优化up-tabbar组件change事件（uni-app-x）

## 4.1.24（2026-01-23）
fix: 修复throttle方法及up-button点击事件不触发问题（uni-app-x）

## 4.1.23（2026-01-23）
fix: up-picker组件warning处理

## 4.1.22（2026-01-22）
fix: code-input组件warning处理

## 4.1.21（2026-01-22）
refactor: 【组合式API重构】 avatar-group组件（uni-app-x）

## 4.1.20（2026-01-22）
refactor: 【组合式API重构】avatar组件（uni-app-x）

## 4.1.19（2026-01-22）
fix: 完善up-code组件

## 4.1.18（2026-01-21）
improvment: 优化inedx.uts导出

## 4.1.17（2026-01-21）
refactor: 【组合式API重构】 up-alert组件（uni-app-x）

## 4.1.16（2026-01-21）
fix: 修复checkbox组件warning

## 4.1.15（2026-01-21）
fix: 修复action-sheet组件warning

## 4.1.14（2026-01-21）
fix: 修复calendar组件warning

## 4.1.13（2026-01-21）
fix: 修复datetimepicker组件warning

## 4.1.12（2026-01-21）
fix: 修复picker组件warning

## 4.1.11（2026-01-20）
fix: 修复scroll-list组件warning

## 4.1.10（2026-01-20）
fix: 修复avatar组件warning

## 4.1.9（2026-01-20）
add: 在template中无法使用addStyle所以新增内置$upAddStyle支持

## 4.1.8（2026-01-20）
add: 在template中无法使用addUnit所以新增内置$upAddUnit支持

## 4.1.7（2026-01-20）
fix: 修复完善up-collapse-item子组件

## 4.1.6（2026-01-20）
refactor: 【组合式API重构】 常用方法优化（uni-app-x）

## 4.1.5（2026-01-20）
fix: 修复up-count-to组件语法（uni-app-x）

## 4.1.4（2026-01-20）
fix: 修复touch.uts语法（uni-app-x）

## 4.1.3（2026-01-19）
refactor: 【组合式API重构】album组件和action-sheet组件（uni-app-x）

## 4.1.2（2026-01-19）
refactor: 【组合式API重构】album组件（uni-app-x）

## 4.1.1（2026-01-19）
refactor: 组合式API重构之全局mixin转为组合式API（uni-app-x）

## 4.1.0（2026-01-19）
refactor: 【组合式API重构】action-sheet组件（uni-app-x）

## 4.0.146（2026-01-17）
fix: 修复radio组件props类型转换

## 4.0.145（2026-01-16）
fix: 修复radio组件props报warning

## 4.0.144（2026-01-16）
fix: 修复count-to组件props报warning

## 4.0.143（2026-01-16）
​fix: 修复grid-item报wanning Object is possibly 'null'​

## 4.0.142（2026-01-15）
fix: 修复bem方法冗余语句

## 4.0.141（2026-01-15）
fix: 修复radio组件使用size参数warning

## 4.0.140（2026-01-15）
fix: 修复throttle方法Function类型

## 4.0.139（2026-01-15）
fix: 修复throttle方法Function类型

## 4.0.138（2026-01-15）
fix: warning: Identity equality for arguments of types 'Number' and 'Int' can be unstable because of implicit boxing

## 4.0.137（2026-01-15）
fix: 修复button和avatar-group语法

## 4.0.136（2026-01-15）
fix: 修复button组件warning: Type 'String' is not assignable to type 'string'

## 4.0.135（2026-01-15）
fix: 修复badge组件value参数warning

## 4.0.134（2026-01-15）
fix: 修复avatar-group组件warning

## 4.0.133（2026-01-15）
fix: 修复parse组件props缺少)（uni-app）

## 4.0.132（2026-01-15）
improvment: upGetRect方法从mixin迁移至function为组合式API适配（uni-app-x）

## 4.0.131（2026-01-15）
improvment: bem方法迁移至function工具中（uni-app-x）

## 4.0.130（2026-01-14）
fix：恢复code组件props类型

## 4.0.129（2026-01-14）
fix: 优化digit工具方法（uni-app-x)

## 4.0.128（2026-01-14）
fix: 修复tabs组建warning

## 4.0.127（2026-01-13）
fix: 修复list组件在支付宝小程序下scrolltolower无法触发（uni-app、uni-app-x） #422

## 4.0.126（2026-01-13）
fix: 修复throttle

## 4.0.125（2026-01-13）
fix: 修复upload组件类型转换问题

## 4.0.124（2026-01-13）
fix: 修复icon组件报错

## 4.0.123（2026-01-13）
fix: 修复icon组件warning

## 4.0.122（2026-01-12）
fix: 修复swiper-action组件warning

## 4.0.121（2026-01-12）
fix: 修复sticky组件warning

## 4.0.120（2026-01-12）
fix: 修复mixin语法问题（uin-app-x）

## 4.0.119（2026-01-10）
improvment: dropdown组建warning修复

## 4.0.118（2026-01-10）
improvment: 内置dayjs防止未安装依赖（uni-app）

## 4.0.117（2026-01-09）
fix: 修复tabs组件props使用相关warning

## 4.0.116（2026-01-09）
fix: 修复loading-icon组件toString使用warning

## 4.0.115（2026-01-09）
improvment: 优化getParent方法warning

## 4.0.114（2026-01-09）
improvment: 修复tag组件warning(uni-app-x)

## 4.0.113（2026-01-08）
fix: 修复code-input组件animation样式warning

## 4.0.112（2026-01-08）
fix:  修复count-down数值对比warning

## 4.0.111（2026-01-08）
fix: 修复loading-icon样式warning

## 4.0.110（2026-01-08）
fix: 修复qrcode组件在App不显示logo(uni-app)

improvment: qrcode逻辑优化封装(uni-app)

fix: nvue下采用webview支持二维码显示logo(因为gcanvas不支持图片渲染)(uni-app)

## 4.0.109（2026-01-08）
improvment: 使用官方已经支持的uni.setClipboardData代替三方插件

## 4.0.108（2026-01-07）
fix: 优化多个组件props增强鸿蒙兼容性

## 4.0.107（2026-01-07）
fix: 修复count-to组件warning

## 4.0.106（2026-01-07）
fix: 修复upload组件warning

## 4.0.105（2026-01-07）
fix: 临时去除qrcode引起报错

## 4.0.104（2026-01-07）
fix: 修复fles.scss样式兼容性warning

## 4.0.103（2026-01-06）
fix: 修复--uni-safe-area-inset缺少var

## 4.0.102（2026-01-06）
fix: 修复i18n的warning

## 4.0.101（2026-01-06）
fix: property value `inherit` is not supported for `line-height`

## 4.0.100（2026-01-06）
fix: 修复loading-icon组件颜色样式默认值

## 4.0.99（2026-01-06）
fix: 修复number-box样式warning

## 4.0.98（2026-01-05）
fix: 修复loading-page样式warning

## 4.0.97（2026-01-05）
fix: uni-app-x下安全区域使用--uni-safe-area-inset

## 4.0.96（2026-01-05）
fix: 修复digit工具方法

## 4.0.95（2026-01-05）
fix: 修复icon组件部分warning

## 4.0.94（2026-01-04）
improvment: 修复transition组件warning

## 4.0.93（2026-01-04）
improvment: 修复tabs组件css警告

## 4.0.92（2026-01-04）
fix: 修复演示首页图标不显示

fix: list-item等组件报错

## 4.0.91（2026-01-04）
更新Readme

## 4.0.90（2026-01-03）
fix: 修复box组件示例sass变量前缀

## 4.0.89（2025-12-31）
improvment: number-box等组件warning处理

## 4.0.8（2025-12-30）
fix: 修复 transition组件适配后warning

## 4.0.7（2025-12-29）
fix: 修复list-item组件warning

## 4.0.6（2025-12-29）
fix: transition动画warning修复

## 4.0.5（2025-12-29）
fix:  修复Readme标签内容

## 4.0.4（2025-12-29）
fix: colorGradient方法适配uts

## 4.0.3（2025-12-27）
fix: 增加uni_modules插件依赖

## 4.0.2（2025-12-26）
LICENSE更新

## 4.0.1（2025-12-26）
fix: 修复文档网址

## 4.0.0（2025-12-26）
初步发布uni-app-x版本
