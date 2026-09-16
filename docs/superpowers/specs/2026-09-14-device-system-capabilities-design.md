# 原生设备系统能力扩展设计规格 (2026-09-14)

## 1. 概述

本项目 uni-app X 在分包二级页面 `src/sub/device/device.uvue` 中提供了原生设备能力的集中演示。为了进一步丰富跨端系统级能力演示，本设计在现有功能（剪贴板复制、相机扫码）的基础上，系统性扩展 6 项核心系统能力：
1. **拨号 (Make Phone Call)**
2. **系统分享 (System Share)**
3. **打开文档 (Open Document)**
4. **选文件 (Choose File)**
5. **震动反馈 (Vibrate - 短震/长震)**
6. **键盘高度避让 (Keyboard Height Evasion)**

本方案全面严格遵守 `unibestX-skill` 与 `.agents/rules/uniappx.md` 中的 UTS 强类型约束、跨端原生渲染限制与代码生成红线。

---

## 2. 架构设计与页面布局

### 2.1 页面容器与生命周期
- **骨架结构**：页面根节点为 `<view class="flex flex-col p-[16px]">`，由全局 `layout: 'navbar'` 提供的外层 `scroll-view` 平滑接管垂直滚动与下拉刷新；
- **下拉刷新闭环**：通过 `onNavbarPullDownRefresh` 与 `stopNavbarPullDownRefresh` 规范处理页面刷新；
- **资源清理闭环**：键盘高度全局监听器在 `onUnmounted` 时通过 `uni.offKeyboardHeightChange` 规范解绑，防止内存泄漏。

### 2.2 样式与渲染规范
- 避免深重阴影，卡片与表单全部统一使用细致边框 `border-[1px] border-solid border-[#e2e8f0]`；
- 文字颜色类名全部挂载在 `<text>` 元素上，严禁挂载在 `<view>` 容器上；
- 所有颜色严格使用十六进制标准色（如 `#ffffff`、`#3b82f6`、`#10b981`、`#f59e0b`、`#6366f1` 等）；
- 等宽数字/代码展示统一采用内联 `style="font-family: monospace;"`。

---

## 3. 功能模块详细设计

### 3.1 模块 1：通信与系统分享 (`Card title="通信与系统分享"`)

#### 3.1.1 拨打电话
- **UI**：电话号码输入框 `<input v-model="phoneNumber" />`（初始值 `'10086'`），操作按钮「拨打电话」；
- **逻辑**：
  ```uts
  uni.makePhoneCall({
    phoneNumber: phoneNumber.value,
    fail: () => {
      uni.showToast({ title: '已取消或拨打失败', icon: 'none' });
    }
  });
  ```

#### 3.1.2 系统分享
- **UI**：分享摘要与跳转链接输入框，操作按钮「调起系统分享」；
- **逻辑**：
  ```uts
  // #ifdef APP || MP-WEIXIN
  uni.shareWithSystem({
    summary: shareSummary.value,
    href: shareHref.value,
    success: () => {
      uni.showToast({ title: '分享调用成功', icon: 'success' });
    },
    fail: () => {
      uni.showToast({ title: '已取消或分享失败', icon: 'none' });
    }
  });
  // #endif
  // #ifndef APP || MP-WEIXIN
  uni.setClipboardData({
    data: `${shareSummary.value} ${shareHref.value}`,
    success: () => {
      uni.showToast({ title: '链接已复制到剪贴板', icon: 'none' });
    }
  });
  // #endif
  ```

---

### 3.2 模块 2：文件与文档预览 (`Card title="文件与文档预览"`)

#### 3.2.1 选择文件
- **UI**：选择文件操作按钮，并在下方展示选中文件的**名称**、**格式化大小**（B/KB/MB）与**临时路径**；
- **逻辑**：
  ```uts
  uni.chooseFile({
    count: 1,
    type: 'all',
    success: (res) => {
      const files = res.tempFiles;
      if (files.length > 0) {
        selectedFileName.value = files[0].name != null ? files[0].name : '未知文件';
        selectedFileSize.value = files[0].size != null ? files[0].size : 0;
        selectedFilePath.value = files[0].path != null ? files[0].path : '';
      }
    },
    fail: () => {
      uni.showToast({ title: '未选择文件', icon: 'none' });
    }
  });
  ```

#### 3.2.2 打开本地已选文档
- **逻辑**：若 `selectedFilePath` 不为空，调用 `uni.openDocument`：
  ```uts
  uni.openDocument({
    filePath: selectedFilePath.value,
    showMenu: true,
    fail: () => {
      uni.showToast({ title: '打开文档失败，请检查格式', icon: 'none' });
    }
  });
  ```

#### 3.2.3 下载并打开在线示例文档 (PDF)
- **逻辑**：调用 `uni.downloadFile` 下载标准在线 PDF 示例文件，下载成功后调用 `uni.openDocument` 打开：
  ```uts
  uni.showLoading({ title: '下载示例文档中...' });
  uni.downloadFile({
    url: samplePdfUrl,
    success: (res) => {
      uni.hideLoading();
      uni.openDocument({
        filePath: res.tempFilePath,
        fileType: 'pdf',
        showMenu: true,
        fail: () => {
          uni.showToast({ title: '文档引擎打开失败', icon: 'none' });
        }
      });
    },
    fail: () => {
      uni.hideLoading();
      uni.showToast({ title: '文档下载失败', icon: 'none' });
    }
  });
  ```

---

### 3.3 模块 3：触感与震动反馈 (`Card title="触感与工具"`)

- **剪贴板复制**：保留原有文本输入框与 `handleCopy` 剪贴板复制；
- **短震动反馈**：`uni.vibrateShort({ type: 'light' })`；
- **长震动反馈**：`uni.vibrateLong()`；
- 使用 `#ifdef APP || MP-WEIXIN` 条件编译隔离，不支持端友好提示。

---

### 3.4 模块 4：键盘高度实时感知与避让 (`Card title="键盘感知与避让"`)

#### 3.4.1 事件类型与监听
- **红线铁律**：事件回调参数必须声明为 `UniInputKeyboardHeightChangeEvent`，严禁声明为 `UniInputKeyboardHeightChangeEventDetail`；
- **输入框绑定**：
  ```html
  <input
    v-model="keyboardInputText"
    placeholder="点击激活软键盘触发避让"
    :adjust-position="false"
    @keyboardheightchange="handleKeyboardHeightChange"
    class="..."
  />
  ```
- **回调与全局监听**：
  ```uts
  function handleKeyboardHeightChange(e: UniInputKeyboardHeightChangeEvent): void {
    keyboardHeight.value = e.detail.height;
  }
  ```
- 配合 `uni.onKeyboardHeightChange` 与 `onUnmounted` 内 `uni.offKeyboardHeightChange`。

#### 3.4.2 避让演练效果
- 容器带有动态样式 `:style="{ paddingBottom: `${keyboardHeight}px` }"`；
- 实时显示数值：`键盘高度: {{ keyboardHeight }} px`；
- 提供操作按钮「收起软键盘」，点击执行 `uni.hideKeyboard()`。

---

### 3.5 模块 5：相机与多媒体 (`Card title="相机与多媒体"`)

- 完整保留现有的照片拍摄/相册选择预览、扫码测试功能。

---

### 3.6 模块 6：功能导航卡片文案同步

- 同步更新 `src/pages/function/components/UtilsNavCard.uvue` 中关于设备能力的描述文案。

---

## 4. 验证计划

1. **语法与类型检查**：运行 `npm run lint` 验证无 ESLint 语法与类型报错；
2. **UTS 规范自检**：
   - 无 `interface` 关键字（全部 `type`）；
   - 无 `undefined`；
   - 无 `<view class="text-xxx">`；
   - 键盘高度事件类型为 `UniInputKeyboardHeightChangeEvent`；
   - 边框与颜色全为十六进制。
3. **编译构建验证**：构建或模拟器校验无 TS2305、ClassCastException 或 UTS 编译报错。
