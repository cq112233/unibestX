# 原生设备系统能力扩展（拨号、系统分享、打开文档、选文件、震动、键盘避让）实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在 `src/sub/device/device.uvue` 中系统化扩展 6 项核心原生系统能力（拨号、系统分享、打开文档、选文件、震动反馈、键盘高度避让），并在 `src/pages/function/components/UtilsNavCard.uvue` 中同步入口能力说明。

**架构：** 遵循 `unibestX-skill` 规范，页面根容器采用 `view.flex.flex-col`，由全局 `navbar` 布局平滑接管滚动与下拉刷新。各能力按高内聚卡片组织（通信与分享、文件与文档预览、触感与震动、键盘感知与避让、相机多媒体），强类型约束一律采用 `type`，键盘事件使用 `UniInputKeyboardHeightChangeEvent`。

**技术栈：** uni-app X, UTS (uni type script), Vue 3 (`<script setup lang="uts">`), Tailwind CSS.

---

## 涉及文件与职责

- **修改：** [`src/sub/device/device.uvue`](file:///Users/chenqi/Desktop/unibestX/src/sub/device/device.uvue) — 承载所有设备与系统能力卡片的实现、交互状态与事件监听。
- **修改：** [`src/pages/function/components/UtilsNavCard.uvue`](file:///Users/chenqi/Desktop/unibestX/src/pages/function/components/UtilsNavCard.uvue) — 更新功能入口卡片副标题与描述文案。
- **规格参考：** [`docs/superpowers/specs/2026-09-14-device-system-capabilities-design.md`](file:///Users/chenqi/Desktop/unibestX/docs/superpowers/specs/2026-09-14-device-system-capabilities-design.md)

---

## 任务列表

### 任务 1：重构与扩展 `src/sub/device/device.uvue` 核心功能

**文件：**
- 修改：[`src/sub/device/device.uvue`](file:///Users/chenqi/Desktop/unibestX/src/sub/device/device.uvue)

- [ ] **步骤 1：定义状态与响应式数据**
  - `phoneNumber: ref('10086')`
  - `shareSummary: ref('unibestX - 高性能跨端原生开发框架')`
  - `shareHref: ref('https://unibestx.com')`
  - `selectedFileName: ref('')`
  - `selectedFileSize: ref(0)`
  - `selectedFilePath: ref('')`
  - `keyboardInputText: ref('')`
  - `keyboardHeight: ref(0)`
  - 保留 `copyText`、`photoUrl`、`scanResult`

- [ ] **步骤 2：实现 6 项系统能力逻辑函数**
  - 拨号：`makePhoneCall()`
  - 分享：`shareWithSystem()`
  - 选文件：`chooseFile()`
  - 打开文档：`openSelectedDocument()` 与 `downloadAndOpenSampleDoc()`
  - 震动：`triggerShortVibration()` 与 `triggerLongVibration()`
  - 键盘高度避让：`handleKeyboardHeightChange(e: UniInputKeyboardHeightChangeEvent)`、`hideKeyboard()`，在 `onMounted` 注册 `uni.onKeyboardHeightChange`，在 `onUnmounted` 执行 `uni.offKeyboardHeightChange`。

- [ ] **步骤 3：构建模板各卡片视图**
  - 卡片 1：通信与系统分享 (`Card title="通信与系统分享"`)
  - 卡片 2：文件与文档预览 (`Card title="文件与文档预览"`)
  - 卡片 3：键盘感知与高度避让 (`Card title="键盘感知与避让"`)
  - 卡片 4：触感与震动工具 (`Card title="触感与工具"`)
  - 卡片 5：相机与多媒体 (`Card title="相机与多媒体"`)

- [ ] **步骤 4：严格自检 UTS 语法与原生样式红线**
  - 严禁 `interface`，类型全为 `type`
  - 严禁 `undefined`
  - 严禁 `<view class="text-xxx">`
  - 颜色值全部标准十六进制

---

### 任务 2：同步更新 `UtilsNavCard.uvue` 入口描述

**文件：**
- 修改：[`src/pages/function/components/UtilsNavCard.uvue`](file:///Users/chenqi/Desktop/unibestX/src/pages/function/components/UtilsNavCard.uvue)

- [ ] **步骤 1：更新入口副标题与功能描述**
  - 将原生设备能力的副标题与功能标签从原有仅相机扫码扩展为：“拨号分享、文件文档、震动反馈、键盘避让、扫码相机”。

---

### 任务 3：语法校验、规范复查与 Commit

- [ ] **步骤 1：运行 ESLint 校验**
  - 命令：`npm run lint`
  - 预期：0 报错。
- [ ] **步骤 2：提交代码到 Git 仓库**
  - 命令：`git commit -m "feat(device): 扩展拨号、系统分享、打开文档、选文件、震动与键盘高度避让等系统能力"`

---

## 验证计划

1. `npm run lint` 验证代码规范；
2. 逐条对照 `unibestX-skill` 3.4 节红线清单自检；
3. 检查页面各交互按钮、状态更新与兜底逻辑闭环。
