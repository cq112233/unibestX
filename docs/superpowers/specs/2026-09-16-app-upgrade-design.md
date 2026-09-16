# App 整包升级（Android APK / iOS 跳商店 / H5 提示刷新）设计文档

- 日期：2026-09-16
- 状态：待实现
- 相关技能：`unibestX-skill`（1.3 运行时约束、4-utils 工具库、5-infra 基础设施）

## 1. 背景

uni-app x 的 app-Android 端编译为纯原生，**没有 wgt 资源包、不支持热更新**（DCloud 官方文档明确说明）。
因此 App 端唯一的版本迭代路径是**整包升级**：检测新版本 → 下载完整 APK → 唤起系统安装器。

## 2. 目标与范围

### 2.1 覆盖端

| 端 | 行为 |
| :--- | :--- |
| App-Android | 完整流程：检测 → 下载（带进度）→ `uni.installApk` 安装 |
| App-iOS | 检测到新版本 → 跳转 AppStore（iOS 禁止程序化安装） |
| H5 | 比对构建 ID → 提示「发现新版本，点击刷新」 |
| 微信小程序 | **no-op**，直接返回（小程序走微信自身的发版与静默更新机制） |

### 2.2 更新策略（四条全支持）

1. **强制更新** —— 后端下发 `forceUpdate: true`，弹窗不可关闭、返回键拦截，必须完成安装
2. **可选更新** —— 用户可「稍后再说」，本次关闭，下次冷启动再提示
3. **跳过此版本** —— 用户可「跳过此版本」，按 `versionCode` 持久化，永久静默直到出现更高版本
4. **静默下载** —— 后台先下完 APK，再弹「下载完成，是否安装」

### 2.3 明确不做（YAGNI）

- 不做灰度 / 分渠道（后端若需要，由接口侧自行实现）
- 不做增量差分升级（uni-app x 无 wgt，差分包无意义）
- 不做 iOS 企业证书内部分发
- 不做下载断点续传（`uni.downloadFile` 不提供；失败即重试整包）
- 不改动现有 `src/http/request.uts` 拦截器逻辑

## 3. 文件清单

| 文件 | 类型 | 职责 |
| :--- | :--- | :--- |
| `src/api/appVersion.uts` | 新增 | 版本查询接口（照 `src/api/foo.uts` 约定） |
| `src/utils/upgrade/index.uts` | 新增 | 升级编排层：比对、决策、下载、安装 |
| `src/utils/upgrade/index.d.uts.ts` | 新增 | IDE 声明（登记进 `HANDWRITTEN`） |
| `src/utils/upgrade/types.uts` | 新增 | 纯类型叶子 |
| `src/components/AppUpdateDialog/AppUpdateDialog.uvue` | 新增 | 更新弹窗组件 |
| `App.ku.uvue` | 修改 | 挂载弹窗组件 |
| `src/pages/*/[basic\|function\|me\|index\|ai].uvue` | 修改 | `onBackPress` 增加强制更新拦截 |
| `src/pages/me/views/MeView.uvue` | 修改 | 「检查更新」手动入口 |
| `src/i18n/locales/zh-CN.json` / `en-US.json` | 修改 | 新增 `upgrade` 文案段 |
| `scripts/gen-uts-dts.mjs` | 修改 | `HANDWRITTEN` 增加 `upgrade` |
| `manifest.json` | 修改 | 声明 `REQUEST_INSTALL_PACKAGES` 权限 |
| `vite.config.ts` | 修改 | 注入构建 ID（仅 H5 用） |

### 3.1 依赖关系

```text
MeView / App.uvue(冷启动)
        │
        ▼
src/utils/upgrade/index.uts  ──► src/api/appVersion.uts ──► src/http/request.uts
        │
        ├──► src/utils/env/index.uts       (版本号读取)
        ├──► src/utils/i18n/index.uts      (全部文案)
        ├──► src/utils/toast/index.uts     (轻提示)
        └──► src/components/AppUpdateDialog (弹窗 UI)
```

`src/api/` 层只负责 HTTP，`src/utils/upgrade/` 只负责编排，UI 在组件层 —— 三层不互相越界。

## 4. 接口契约

### 4.1 请求

```http
GET {API_DOMAINS.DEFAULT}/app/version/latest?platform=android&versionCode=100
```

- `platform`：`android` / `ios`（取自 `getCompilePlatform()`）
- `versionCode`：当前包的整型版本号
- **必须携带 `extra: { ignoreAuth: true }`**

> ⚠️ **`ignoreAuth: true` 是硬性要求，不是优化项。**
> `src/http/request.uts` 的响应拦截器对 401 会调用 `toLoginPage()`。
> 冷启动时用户未登录，一次升级检查请求就会把人**踢到登录页** —— 这类 bug 只在
> 「未登录 + 恰好有更新」的组合下出现，极难复现。

### 4.2 响应

经 `HttpClient.request()` 已解包 `{ code, data }`，`.then()` 直接拿到 `data`：

```uts
export type IAppVersion = {
  versionName: string;   // '1.2.0'，仅用于展示
  versionCode: number;   // 120，比对以此为准
  downloadUrl: string;   // APK 直链 / iOS AppStore 链接
  forceUpdate: boolean;  // true 时走强制更新
  updateLog: string;     // 更新说明，多行用 \n
  fileSize: number;      // 字节，用于展示与弱网提示
};
```

### 4.3 接口函数

```uts
// src/api/appVersion.uts
export function getLatestAppVersion(platform: string, versionCode: number): Promise<IAppVersion>
```

字段取值照 `foo.uts` 的 `getString` / `getNumber` 写法逐字段读取，
缺省值：字符串 `''`、数字 `0`、布尔 `false`。任必填字段（`versionName` / `versionCode` / `downloadUrl`）为空时 reject。

## 5. 版本比对

### 5.1 当前版本号来源

**以 `versionCode` 为准，`versionName` 只用于展示。**

```uts
export function getCurrentVersionCode(): number   // uni.getAppBaseInfo().appVersionCode
export function getCurrentVersionName(): string   // uni.getAppBaseInfo().appVersion
```

> ⚠️ **不要复用 `src/utils/env/index.uts` 的 `getAppVersion()` 做比对。**
> 它的优先级是 `getSystemInfoSync().appVersion` → 小程序 `getAppBaseInfo()` → `VITE_APP_VERSION`，
> 三个来源会漂移，且返回的是 versionName 字符串，**没有 versionCode**。

### 5.1.1 `appVersionCode` 是字符串，不是数字

`@dcloudio/types` 中 `GetAppBaseInfoResult.appVersionCode` 的类型是 **`string`**：

```ts
/** `manifest.json` 中应用版本名号 */
appVersionCode: string;
```

因此 `getCurrentVersionCode(): number` 内部必须 `parseInt` 并处理解析失败：

```uts
const raw = `${uni.getAppBaseInfo().appVersionCode ?? ''}`;
const code = parseInt(raw, 10);
return isNaN(code) ? 0 : code;
```

`0` 表示「读不到本地版本号」。此时 `serverCode > 0` 恒成立，会导致**每次都提示更新**。
所以判定逻辑必须额外守卫：`localCode == 0` 时直接放弃本次检查并打日志，不弹窗。

### 5.1.2 这些 API 无法在仓库内验证

`uni.installApk`、`uni.getAppBaseInfo().appVersionCode` 在 `node_modules` 里
**都查不到 uni-app x 的权威类型定义**（`@dcloudio/types` 提供的 `uni.d.ts` 是
**legacy uni-app** 的类型，tsconfig 通过 `types: ["@dcloudio/types"]` 引用它）。
uni-app x 的 API 由 HBuilderX 内置编译器校验，**仓库内无法静态确认**。

因此：**字段名与签名一律以真机构建结果为准**，IDE 没补全不代表写法错。
验证方式按 SKILL 红线 32 / 45 —— 必须走不带 `--compile` 的真机构建，
并先确认日志中 `编译为android class` 出现 ≥ 1 次。

### 5.2 判定规则

```text
有更新  ⟺  serverVersionCode > localVersionCode
```

用严格大于，不用「不等于」—— 防止后端回滚版本导致客户端误判。

## 6. 状态流转

```text
checkAppUpdate(manual: boolean)
 │
 ├─ 微信小程序 ──────────────────────────────► return（no-op）
 │
 ├─ H5 ────────────────────────────────────► 比对构建 ID，不一致则提示「点击刷新」
 │
 └─ App
     ├─ GET /app/version/latest
     │
     ├─ 请求失败 ──────────────────────────► 静默；manual 时 toast 报错
     │
     ├─ serverCode <= localCode ───────────► 静默；manual 时 toast「已是最新版本」
     │
     └─ serverCode > localCode
         ├─ !manual && 已跳过该 versionCode ─► 静默
         │
         ├─ forceUpdate ────────────────────► 强制弹窗
         │     · 无关闭按钮 / 点遮罩不关 / onBackPress 拦截
         │     · 不参与静默下载（用户不会干等）
         │
         ├─ 静默下载已开启 ─────────────────► 后台 downloadFile（带进度）
         │     · 完成后弹「下载完成」[立即安装] [稍后]
         │     · 此分支不再走下面的可选弹窗
         │
         └─ 普通可选更新 ───────────────────► 弹窗（更新说明 + 包大小 + 版本号）
               ├─ [立即更新]   → 进度 → installApk
               ├─ [跳过此版本] → 持久化 versionCode，永久静默
               └─ [稍后再说]   → 只关闭，不持久化，下次冷启动再提示
```

### 6.1 策略间优先级

```text
forceUpdate  >  静默下载  >  跳过此版本  >  普通可选
```

- **强制更新压过静默下载**：强制场景下用户必须立刻看到进度，静默反而增加等待焦虑
- **`manual = true` 压过「跳过此版本」与静默**：用户主动点了「检查更新」，必须给出可见反馈

### 6.2 持久化

| Key | 值 | 说明 |
| :--- | :--- | :--- |
| `upgradeSkippedVersionCode` | number | 被跳过的 `versionCode` |

用 `uni.setStorageSync` / `uni.getStorageSync`（照 `src/store/vdom/token.uts` 的既有写法）。
「跳过此版本」比对的是 `versionCode` 而非 `versionName` —— 版本号字符串可能被后端复用，整型不会。

## 7. 模块导出面

```uts
// src/utils/upgrade/types.uts
export type AppUpdateInfo = {
  versionName: string;
  versionCode: number;
  downloadUrl: string;
  forceUpdate: boolean;
  updateLog: string;
  fileSize: number;
};

// src/utils/upgrade/index.uts
export type UpdateState = 'idle' | 'checking' | 'available' | 'downloading' | 'ready';

export const updateState: Ref<UpdateState>;        // 驱动弹窗
export const updateInfo: Ref<AppUpdateInfo | null>; // 当前待更新信息
export const downloadPercent: Ref<number>;          // 0-100
export const isForceUpdate: ComputedRef<boolean>;

export function checkAppUpdate(manual: boolean = false): void;
export function startDownloadAndInstall(): void;
export function skipCurrentVersion(): void;
export function dismissUpdate(): void;
export function isUpdateBlockingBack(): boolean;    // 供页面 onBackPress 判断
export function getCurrentVersionCode(): number;
export function getCurrentVersionName(): string;
export function clearSkippedVersion(): void;
```

`isUpdateBlockingBack()` 在 **强制更新且弹窗可见** 时返回 `true`，其余情况 `false`。

## 8. 弹窗组件

### 8.1 挂载方式：组件挂全局骨架（方案 B）

组件 `src/components/AppUpdateDialog/AppUpdateDialog.uvue` 挂在 `App.ku.uvue` 根部，
在 `<scroll-view>` **之后**、`<Tabbar>` 同级，用绝对定位铺满遮罩。

**选它的理由**：

1. 项目 `.env` 中 `VITE_TABBAR_MODE=4`（单页保活自定义 TabBar），遮罩天然盖得住 TabBar，
   官方 `uni.openDialogPage` 的核心优势用不上
2. 不动 `pages.config.json` → `pages.json` 的代码生成链路（`plugins/vite-plugin-uni-pages.ts`
   会自动同步回写，插新页面进去有被覆盖风险）
3. 全端同构，小程序 no-op 不需要额外分支

**已知代价**（见 8.3）：返回键拦截落到页面级 `onBackPress`，需要改 5 个页面文件。

> 若将来切到 `VITE_TABBAR_MODE=1`（原生 TabBar），遮罩盖不住原生 TabBar 底部，
> 届时改用 `uni.openDialogPage` 即可 —— 模块导出面不变，只换 UI 挂载层。

### 8.2 状态与交互

组件直接订阅 `src/utils/upgrade/index.uts` 导出的 ref，**不做 props 透传**（避免 App.ku.uvue 多一层中转）。

| 状态 | 弹窗表现 |
| :--- | :--- |
| `available` + 非强制 | 标题 + 版本号 + 包大小 + 更新说明 + [立即更新] [跳过此版本] [稍后再说] |
| `available` + 强制 | 同上但**只有** [立即更新]，无关闭按钮，遮罩不可点，返回键拦截 |
| `downloading` | 进度条 + 百分比 + 已下载/总大小；强制模式不可取消 |
| `ready` | 「下载完成」+ [立即安装] [稍后]（强制模式只有 [立即安装]） |
| 其他 | 不渲染 |

`fileSize` 格式化为 `12.3 MB` 展示。更新说明按 `\n` 拆分为多个兄弟 `<text>` 节点
（原生端 `<text>` 内不可嵌套多个文本节点，见 SKILL 红线 10）。

### 8.3 返回键拦截

`onBackPress` 是**页面级**钩子（项目现有用法见 `src/pages/basic/basic.uvue:29`），
组件内不可靠。因此需要在这 5 个页面的现有 `onBackPress` 回调**开头**加一行：

```uts
onBackPress((options: OnBackPressOptions): boolean => {
  if (isUpdateBlockingBack()) {
    return true;   // 强制更新中，吞掉返回
  }
  // ...原有逻辑不动
})
```

页面清单：`src/pages/basic/basic.uvue`、`src/pages/function/function.uvue`、
`src/pages/me/me.uvue`、`src/pages/index/index.uvue`、`src/pages/ai/ai.uvue`。

## 9. 下载与安装

### 9.1 下载

```uts
let downloadTask: DownloadTask | null = null;
downloadTask = uni.downloadFile({
  url: info.downloadUrl,
  success: (res) => { /* res.tempFilePath → installApk */ },
  fail: (err) => { /* 读 err.errMsg，见 10.2 */ }
});
downloadTask.onProgressUpdate((res) => { downloadPercent.value = res.progress; });
```

> ⚠️ **不能写成 `const downloadTask = uni.downloadFile(...)` 再在回调里引用它** ——
> 局部声明在自身初始化表达式内不可见，Kotlin 编译报 `error18 找不到名称`。
> 必须 `let` 先声明、后赋值（SKILL 红线 31 / 1.1.14）。

### 9.2 安装

```uts
uni.installApk({
  filePath: tempFilePath,   // ⚠️ 仅接受本地路径
  success: () => {},
  fail: (err) => { /* err.errCode -1300002 找不到文件 */ }
});
```

- **平台**：仅 Android（3.94+）。iOS / Web / 小程序均不支持
- **路径**：只接受本地路径，网络路径必须先 `uni.downloadFile` 落盘
- **权限**：Android 8.0+ 需 `android.permission.REQUEST_INSTALL_PACKAGES`（见 11.1）
- **类型**：`installApk` 在仓库 `node_modules` 中**没有任何类型定义**（uni-app x API
  由 HBuilderX 内置编译器提供）。**IDE 不给补全、不给报错，不代表写法有问题** ——
  唯一判据是真机构建结果（见 5.1.2）

### 9.3 iOS 分支

iOS 不调 `installApk`，改为把用户送到 `downloadUrl`（AppStore 链接）。

**基线方案（默认实现）：`uni.showModal` 展示商店地址 + 复制。**

理由：仓库内**查不到** uni-app x 可用的打开外链 API —— 全盘搜索 `node_modules`，
`openURL` 只出现在 `html5plus/plus.d.ts`，那是**老版 uni-app 的 plus API，uni-app x 里不存在**。
在无法静态确认的情况下，用 `showModal` 是唯一不依赖未验证 API 的写法。

**可选优化（真机验证通过后再升级）**：若真机构建确认 `uni.openURL` 在 uni-app x 可用，
再把 iOS 分支换成直接跳转。这是一次**纯局部替换**，不影响模块其余部分。

## 10. 错误处理

| 场景 | 处理 |
| :--- | :--- |
| 版本接口请求失败 | 静默；`manual` 时 `toastError` |
| 响应缺必填字段 | reject → 同上 |
| 下载失败 / 网络中断 | 弹窗保留，提示「下载失败，请重试」，提供 [重试] 按钮 |
| 下载返回非 200 | 同「下载失败」 |
| `installApk` fail | `toastError` + 兜底提示「请到应用市场更新」 |
| 存储读写失败 | try/catch 吞掉，「跳过此版本」退化为仅本次生效 |

### 10.1 失败值不是 Error 实例

lime-request 会把拦截器抛出的 `Error` 转成 `LimeRequestFail` **普通对象**，
`err.message` 取不到。必须读 `err.errMsg` 或 `err.cause.message`，
或照 `src/sub/httpDemo/httpDemo.uvue` 做 `instanceof Error` → `instanceof UTSJSONObject` 多级兜底。

### 10.2 日志

开发期用 `console.log` 输出关键节点（当前版本、服务端版本、判定结果、下载进度），
与项目现有 `updateSystemInfo` 的日志风格一致。**不引入日志库。**

## 11. 平台缺口与前置条件

### 11.1 Android 权限（阻塞项）

`manifest.json` 的 `app-android` 段目前**没有任何权限声明**，需新增：

```json
"app-android": {
  "distribute": {
    "permissions": [
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
    ]
  }
}
```

> ⚠️ 改权限后**必须重新打自定义基座**才能调试，标准基座不生效。
> 若暂时不便重打基座：代码照常实现，但 `installApk` 会失败 —— 需在验收时明确区分
> 「代码问题」与「基座未更新」。

### 11.2 H5 构建 ID（待实现细节）

`vite.config.ts` 用 `define` 注入构建时间戳，产物根生成 `version.json`，
运行时 fetch 比对，不一致则提示刷新。

> 该分支需要改 `vite.config.ts` 并新增构建产物文件，**作为独立小任务处理**，
> 不阻塞 App 端主线。若判定成本过高，H5 可先降级为 no-op。

## 12. 测试策略

### 12.1 可测的部分（node 单测）

纯逻辑抽成无副作用函数，可脱离运行时测试：

- `compareVersion(serverCode, localCode): boolean`
- `shouldSkip(versionCode, manual): boolean`
- `formatFileSize(bytes): string`
- `decisionOf(info, localCode, manual, skippedCode): 'force' | 'silent' | 'optional' | 'none'`

**决策函数 `decisionOf` 是核心**，四条策略的优先级全部收敛在它内部，必须有穷举用例覆盖
（force × manual × skipped 的 2×2×2 组合 + 无更新 + 网络失败）。

### 12.2 必须真机验证的部分

按 SKILL 红线 32 / 45，**不能用 `launch app-android --compile true` 冒充编译验证**：

- 强制更新时返回键确实被吞掉
- `installApk` 能唤起系统安装器（依赖 11.1 的权限与自定义基座）
- 进度条回调在真机上的频率与数值单调性

### 12.3 测试文件位置

待 `writing-plans` 阶段确认项目是否已有 node 单测设施；若无，则最简方案是用
`node --test` 直接跑纯函数（这些函数不依赖 uni API，可独立成 `.ts` 便于测试）。

## 13. 待确认假设

| # | 假设 | 若不成立的调整 |
| :--- | :--- | :--- |
| 1 | 后端接口为 `GET /app/version/latest`，字段照 `IAppVersion` | 只改 `src/api/appVersion.uts` 一处，其余不动 |
| 2 | Android 权限可加入 `manifest.json` 并重打自定义基座 | 代码照常实现，验收时标注需补权限 |
| 3 | H5 构建 ID 方案可行 | H5 降级为 no-op |
| 4 | 项目无现成 node 单测设施，用 `node --test` | 接入既有测试框架 |
| 5 | `uni.getAppBaseInfo().appVersionCode` 在 uni-app x 中字段名与 legacy 类型一致 | 真机构建报错时按编译器提示改名 |
| 6 | `uni.installApk` 在真机构建中可用（仓库无类型定义） | 按编译器提示调整；仍不可用则退回「跳浏览器下载」 |

## 14. 实现顺序

1. `src/api/appVersion.uts` + 类型（可独立验收）
2. `src/utils/upgrade/` 纯逻辑 + 单测（**先写测试**）
3. 模块接线：i18n 文案、toast、持久化
4. `AppUpdateDialog.uvue` 组件
5. 挂载到 `App.ku.uvue` + 5 个页面的 `onBackPress`
6. `MeView` 手动入口 + `App.uvue` 冷启动接入
7. `HANDWRITTEN` 登记 + 跑 `node scripts/gen-uts-dts.mjs`
8. Android 权限 + 真机验证
