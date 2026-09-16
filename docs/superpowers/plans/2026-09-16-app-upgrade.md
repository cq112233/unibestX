# App 整包升级 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 为 uni-app x 项目实现 App 端整包升级（Android 下载 APK 并唤起安装、iOS 跳商店、H5 提示刷新、小程序 no-op），支持强制更新、可选更新、跳过此版本、静默下载四条策略。

**架构：** 三层分离 —— `src/api/` 只做 HTTP；`src/utils/upgrade/` 做编排（纯逻辑抽到 `.ts` 便于单测，编排在 `.uts`）；`src/components/AppUpdateDialog/` 做 UI。弹窗挂在全局骨架 `App.ku.uvue` 上，返回键拦截落到页面级 `onBackPress`。

**技术栈：** uni-app x（UTS / uvue）、Vue 3 组合式 API、lime-request、`node:test`（Node 22 内置，配 `--experimental-strip-types`）

**规格：** [docs/superpowers/specs/2026-09-16-app-upgrade-design.md](../specs/2026-09-16-app-upgrade-design.md)

---

## 对规格的两处调整（实现前必读）

### 调整 1：纯逻辑放 `.ts` 而不是 `.uts`（替换规格第 3 节的 `types.uts`）

规格原定 `src/utils/upgrade/types.uts`。实际实现改为 **`types.ts` + `logic.ts`**，理由：

1. **`.uts` 无法被 node 直接执行**，纯逻辑放 `.uts` 就只能靠「手写一份镜像 `.ts` 去测」，测的不是真实代码 —— 正好命中 SKILL 红线 28（本项目曾用 20/20 全绿的手搭树测试掩盖真机样式丢失）。
2. **`.uts` 引用运行时 `.ts` 有明确先例**：`src/store/index.uts:70` 的 `import pinia from './vapor/index.ts'`、`:86-88` 的 `export * from './vapor/app.ts'`。
3. Node v22.22.2 的 `--experimental-strip-types` 已实测可用，零新增依赖。

### 调整 2：`index.uts` 不转发类型（规避 SKILL 红线 36）

SKILL 红线 36：跨分支共享的纯类型严禁放在 `.ts` 实现文件里经 `export *` 转发（微信小程序 uts2js 链路拿不到，业务侧 `import type` 报 `"X" is not exported by "..."`）。

因此本模块**不从 `index.uts` 导出任何类型**。消费方只调函数、读 ref；类型需要时直接从 `./types.ts` 导入。

---

## 已实测的技术前提

| 事实 | 验证方式 | 结果 |
| :--- | :--- | :--- |
| Node 版本 | `node -v` | v22.22.2 |
| TS 直跑 | `node --experimental-strip-types --test "<glob>"` | ✅ 通过 |
| 项目无测试设施 | `package.json` 无 `test` script，全仓无 `*.test.ts` | 需新建 |
| `appVersionCode` 类型 | `@dcloudio/types` 的 legacy `uni.d.ts` | **`string`**，需 `parseInt` |
| `uni.installApk` 类型 | 全盘搜 `node_modules` | **零命中**，只能靠真机构建验证 |

> ⚠️ **`--experimental-strip-types` 的限制**：不支持 `enum`、`namespace`、构造函数参数属性；类型导入必须用 `import type`。本项目本就禁用 `interface`、统一用 `type`，天然兼容。

---

## 任务 0：建分支

**文件：** 无

- [ ] **步骤 1：从 main 建功能分支**

```bash
git checkout -b feat/app-upgrade
git status --short
```

预期：提示 `Switched to a new branch 'feat/app-upgrade'`，工作区干净。

> ⚠️ 本仓库的 `unpackage/` 构建产物**被 git 跟踪**，跑一次构建会改动约 60 个已跟踪文件。
> **全程严禁 `git add -A` / `git add .`**，每次提交只显式 `git add <具体文件>`。

---

## 任务 1：搭测试设施 + 三个简单纯函数

**文件：**
- 创建：`src/utils/upgrade/types.ts`
- 创建：`src/utils/upgrade/logic.ts`
- 创建：`tests/unit/upgrade/logic.test.ts`
- 修改：`package.json`（加 `test` script）
- 修改：`tsconfig.json`（`include` 加 `tests/**/*.ts`）

- [ ] **步骤 1：写类型定义**

创建 `src/utils/upgrade/types.ts`：

```ts
/** 服务端下发的版本信息（与 src/api/appVersion.uts 的 IAppVersion 字段一一对应） */
export type AppUpdateInfo = {
  versionName: string;
  versionCode: number;
  downloadUrl: string;
  forceUpdate: boolean;
  /** 是否走后端静默下载策略（后端字段，缺省 false） */
  silentDownload: boolean;
  updateLog: string;
  /** 字节数，未知为 0 */
  fileSize: number;
};

/** 版本检查后的决策结果 */
export type UpdateDecision =
  /** 无更新，或本地版本号读不到 */
  | 'none'
  /** 有更新但用户已跳过该版本 */
  | 'silent'
  /** 普通可选更新：弹窗让用户选 */
  | 'optional'
  /** 强制更新：弹窗不可关闭 */
  | 'force'
  /** 静默下载：后台先下完，再提示安装 */
  | 'silentDownload';

/** decisionOf 的入参 */
export type DecisionInput = {
  info: AppUpdateInfo | null;
  /** 本地 versionCode，读不到时为 0 */
  localCode: number;
  /** 是否由用户手动触发（「我的」页按钮） */
  manual: boolean;
  /** 已持久化的「跳过此版本」versionCode，无则 0 */
  skippedCode: number;
};
```

- [ ] **步骤 2：写失败的测试**

创建 `tests/unit/upgrade/logic.test.ts`：

```ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compareVersion, shouldSkip, formatFileSize } from '../../../src/utils/upgrade/logic.ts';

test('compareVersion: 服务端更高才有更新', () => {
  assert.equal(compareVersion(120, 100), true);
  assert.equal(compareVersion(100, 100), false);
  assert.equal(compareVersion(99, 100), false);
});

test('compareVersion: 本地读不到（0）时不算有更新', () => {
  assert.equal(compareVersion(120, 0), false);
});

test('shouldSkip: 跳过的是同一个 versionCode', () => {
  assert.equal(shouldSkip(120, 120), true);
  assert.equal(shouldSkip(120, 121), false);
  assert.equal(shouldSkip(0, 120), false);
});

test('formatFileSize: 按 B / KB / MB 分档', () => {
  assert.equal(formatFileSize(512), '512 B');
  assert.equal(formatFileSize(2048), '2.0 KB');
  assert.equal(formatFileSize(12897484), '12.3 MB');
});

test('formatFileSize: 未知大小返回空串', () => {
  assert.equal(formatFileSize(0), '');
  assert.equal(formatFileSize(-1), '');
});
```

- [ ] **步骤 3：配置并运行测试，确认失败**

在 `package.json` 的 `scripts` 中加一行（放在 `lint` 之前）：

```json
"test": "node --experimental-strip-types --test \"tests/**/*.test.ts\"",
```

在 `tsconfig.json` 的 `include` 数组末尾加 `"tests/**/*.ts"`，使测试文件获得 IDE 类型支持。

运行：`pnpm test`

预期：FAIL，报错形如 `Cannot find module '.../src/utils/upgrade/logic.ts'`（文件还不存在）。

- [ ] **步骤 4：写最少实现**

创建 `src/utils/upgrade/logic.ts`：

```ts
import type { AppUpdateInfo, DecisionInput, UpdateDecision } from './types.ts';

/**
 * 服务端版本是否高于本地版本。
 *
 * ⚠️ 用严格大于而非「不等于」：防止后端回滚版本时客户端误判为有更新。
 * ⚠️ localCode 为 0 表示「本地版本号读不到」（见 getCurrentVersionCode），
 *    此时一律返回 false，否则 serverCode > 0 恒成立，会每次启动都弹更新。
 */
export function compareVersion(serverCode: number, localCode: number): boolean {
  if (localCode <= 0 || serverCode <= 0) {
    return false;
  }
  return serverCode > localCode;
}

/**
 * 该版本的「跳过」标记是否命中。
 *
 * ⚠️ 比对 versionCode 而非 versionName：版本号字符串可能被后端复用，整型不会。
 */
export function shouldSkip(skippedCode: number, serverCode: number): boolean {
  if (skippedCode <= 0 || serverCode <= 0) {
    return false;
  }
  return skippedCode === serverCode;
}

/**
 * 字节数格式化为可读字符串。
 *
 * ⚠️ 返回空串表示「未知大小」，由 UI 决定隐藏还是显示占位 —— 本函数不产出用户可见文案，
 *    所有面向用户的文案一律走 src/utils/i18n/index.uts。
 */
export function formatFileSize(bytes: number): string {
  if (bytes <= 0) {
    return '';
  }
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

/** decisionOf 的占位实现，任务 2 补全 */
export function decisionOf(input: DecisionInput): UpdateDecision {
  return 'none';
}
```

- [ ] **步骤 5：运行测试确认通过**

运行：`pnpm test`

预期：PASS，`# pass 5`，`# fail 0`。

- [ ] **步骤 6：Commit**

```bash
git add src/utils/upgrade/types.ts src/utils/upgrade/logic.ts tests/unit/upgrade/logic.test.ts package.json tsconfig.json
git commit -m "feat: 新增升级模块纯逻辑基础函数与 node:test 测试设施"
```

---

## 任务 2：核心决策函数 `decisionOf`（TDD）

**文件：**
- 修改：`src/utils/upgrade/logic.ts`
- 修改：`tests/unit/upgrade/logic.test.ts`

这是整个模块的核心 —— 四条策略的优先级**全部**收敛在这一个函数里。

优先级（规格 6.1）：`force > 静默下载 > 跳过此版本 > 普通可选`，且 `manual` 压过「跳过」与「静默下载」。

- [ ] **步骤 1：写失败的测试**

在 `tests/unit/upgrade/logic.test.ts` 末尾追加：

```ts
import { decisionOf } from '../../../src/utils/upgrade/logic.ts';
import type { AppUpdateInfo } from '../../../src/utils/upgrade/types.ts';

function makeInfo(over: Partial<AppUpdateInfo> = {}): AppUpdateInfo {
  return {
    versionName: '1.2.0',
    versionCode: 120,
    downloadUrl: 'https://example.com/app.apk',
    forceUpdate: false,
    silentDownload: false,
    updateLog: '修了几个 bug',
    fileSize: 12897484,
    ...over
  };
}

test('decisionOf: info 为 null 时无决策', () => {
  assert.equal(decisionOf({ info: null, localCode: 100, manual: false, skippedCode: 0 }), 'none');
});

test('decisionOf: 本地版本读不到时无决策', () => {
  assert.equal(decisionOf({ info: makeInfo(), localCode: 0, manual: false, skippedCode: 0 }), 'none');
});

test('decisionOf: 无更新时无决策', () => {
  assert.equal(decisionOf({ info: makeInfo({ versionCode: 100 }), localCode: 100, manual: false, skippedCode: 0 }), 'none');
});

test('decisionOf: forceUpdate 优先级最高，压过跳过与静默下载', () => {
  const info = makeInfo({ forceUpdate: true, silentDownload: true });
  assert.equal(decisionOf({ info, localCode: 100, manual: false, skippedCode: 120 }), 'force');
});

test('decisionOf: manual 压过「跳过此版本」', () => {
  assert.equal(decisionOf({ info: makeInfo(), localCode: 100, manual: true, skippedCode: 120 }), 'optional');
});

test('decisionOf: manual 压过静默下载', () => {
  assert.equal(decisionOf({ info: makeInfo({ silentDownload: true }), localCode: 100, manual: true, skippedCode: 0 }), 'optional');
});

test('decisionOf: 非 manual 命中跳过则静默', () => {
  assert.equal(decisionOf({ info: makeInfo(), localCode: 100, manual: false, skippedCode: 120 }), 'silent');
});

test('decisionOf: 跳过的是旧版本时不生效', () => {
  assert.equal(decisionOf({ info: makeInfo(), localCode: 100, manual: false, skippedCode: 110 }), 'optional');
});

test('decisionOf: 静默下载策略生效', () => {
  assert.equal(decisionOf({ info: makeInfo({ silentDownload: true }), localCode: 100, manual: false, skippedCode: 0 }), 'silentDownload');
});

test('decisionOf: 默认走普通可选', () => {
  assert.equal(decisionOf({ info: makeInfo(), localCode: 100, manual: false, skippedCode: 0 }), 'optional');
});
```

- [ ] **步骤 2：运行测试验证失败**

运行：`pnpm test`

预期：FAIL 10 条 —— `decisionOf` 是占位实现，恒返回 `'none'`。

- [ ] **步骤 3：实现 `decisionOf`**

在 `src/utils/upgrade/logic.ts` 中，**删除**占位的 `decisionOf`，替换为：

```ts
/**
 * 根据版本信息与用户选择，决定本次升级动作。
 *
 * 优先级（规格 6.1）：
 *   forceUpdate  >  静默下载  >  跳过此版本  >  普通可选
 * 且 manual（用户主动点「检查更新」）压过「跳过此版本」与「静默下载」——
 * 用户主动点了按钮还不给可见反馈会很怪。
 */
export function decisionOf(input: DecisionInput): UpdateDecision {
  // 无版本信息，或本地版本号读不到 —— 不弹任何东西，避免每次都提示更新
  if (input.info === null || input.localCode <= 0) {
    return 'none';
  }
  // 服务端不高于本地 —— 无更新
  if (!compareVersion(input.info.versionCode, input.localCode)) {
    return 'none';
  }
  // 强制更新优先级最高：压过跳过与静默下载
  if (input.info.forceUpdate) {
    return 'force';
  }
  // 用户主动检查：跳过与静默下载都不再生效
  if (input.manual) {
    return 'optional';
  }
  // 已跳过该版本
  if (shouldSkip(input.skippedCode, input.info.versionCode)) {
    return 'silent';
  }
  // 后端开启静默下载
  if (input.info.silentDownload) {
    return 'silentDownload';
  }
  return 'optional';
}
```

- [ ] **步骤 4：运行测试验证通过**

运行：`pnpm test`

预期：PASS，`# pass 15`，`# fail 0`。

- [ ] **步骤 5：Commit**

```bash
git add src/utils/upgrade/logic.ts tests/unit/upgrade/logic.test.ts
git commit -m "feat: 实现升级决策核心函数 decisionOf 并覆盖四条策略优先级"
```

---

## 任务 3：接口层 `src/api/appVersion.uts`

**文件：**
- 创建：`src/api/appVersion.uts`

**无单测** —— 本文件依赖 `http` 与 `UTSJSONObject`，只能在运行时验证。

- [ ] **步骤 1：写接口文件**

创建 `src/api/appVersion.uts`：

```uts
import { http } from '../http/request';
import type { LimeRequestConfig } from '@/uni_modules/lime-request';

/**
 * 服务端下发的版本信息
 *
 * ⚠️ 本类型是 src/utils/upgrade/types.ts 中 AppUpdateInfo 的 UTS 侧对应物，
 *    两边字段必须保持一致，改一处要同步另一处。
 */
export type IAppVersion = {
  versionName: string;
  versionCode: number;
  downloadUrl: string;
  forceUpdate: boolean;
  silentDownload: boolean;
  updateLog: string;
  fileSize: number;
};

/**
 * 查询最新版本
 *
 * ⚠️ 必须带 ignoreAuth: true —— src/http/request.uts 的响应拦截器对 401 会调用
 *    toLoginPage()。冷启动时用户未登录，一次升级检查请求就会把人踢到登录页。
 *    这类 bug 只在「未登录 + 恰好有更新」的组合下出现，极难复现。
 *
 * @param platform 编译目标平台（android / ios）
 * @param versionCode 当前包的整型版本号
 */
export function getLatestAppVersion(platform: string, versionCode: number): Promise<IAppVersion> {
  return http.get<UTSJSONObject>('/app/version/latest', {
    params: {
      platform,
      versionCode
    } as UTSJSONObject,
    extra: {
      ignoreAuth: true
    } as UTSJSONObject
  } as LimeRequestConfig).then((data: UTSJSONObject): IAppVersion => {
    const versionName = data.getString('versionName') ?? '';
    const downloadUrl = data.getString('downloadUrl') ?? '';

    // 必填字段缺失时 reject，交由调用方按「检查失败」处理，而不是弹出一个空信息的升级框
    if (versionName == '' || downloadUrl == '') {
      throw new Error('版本接口响应缺少必填字段');
    }

    return {
      versionName,
      versionCode: data.getNumber('versionCode') ?? 0,
      downloadUrl,
      forceUpdate: data.getBoolean('forceUpdate') ?? false,
      silentDownload: data.getBoolean('silentDownload') ?? false,
      updateLog: data.getString('updateLog') ?? '',
      fileSize: data.getNumber('fileSize') ?? 0
    } as IAppVersion;
  });
}
```

- [ ] **步骤 2：静态检查**

运行：`pnpm lint`

预期：无 error 级问题（warning 可接受）。

> ⚠️ **本步骤不验证 UTS 编译**。`getBoolean` 等方法名在 uni-app x 中的确切签名
> 无法在仓库内静态确认（`uni.installApk` 在 `node_modules` 里零命中，同理）。
> 真正的编译验证在任务 10 的真机构建。

- [ ] **步骤 3：Commit**

```bash
git add src/api/appVersion.uts
git commit -m "feat: 新增版本查询接口层 appVersion"
```

---

## 任务 4：国际化文案

**文件：**
- 修改：`src/i18n/locales/zh-CN.json`
- 修改：`src/i18n/locales/en-US.json`

- [ ] **步骤 1：加中文文案**

在 `src/i18n/locales/zh-CN.json` 顶层加 `upgrade` 段（与 `message` / `tabbar` / `basic` 同级）：

```json
"upgrade": {
  "title": "发现新版本",
  "versionLabel": "版本号",
  "sizeLabel": "包大小",
  "logLabel": "更新内容",
  "updateNow": "立即更新",
  "later": "稍后再说",
  "skip": "跳过此版本",
  "downloading": "正在下载…",
  "downloadDone": "下载完成",
  "install": "立即安装",
  "downloadFailed": "下载失败，请重试",
  "retry": "重试",
  "installFailed": "安装失败，请到应用市场更新",
  "checkingTip": "正在检查更新…",
  "latestTip": "已是最新版本",
  "checkFailedTip": "检查更新失败",
  "forceTip": "此版本为重要更新，需完成升级后才能继续使用",
  "goStore": "去 App Store 更新",
  "copyLink": "复制链接",
  "linkCopied": "链接已复制",
  "h5NewVersion": "发现新版本，点击刷新",
  "updateLogEmpty": "本次更新暂无说明"
}
```

- [ ] **步骤 2：加英文文案**

在 `src/i18n/locales/en-US.json` 同一位置加：

```json
"upgrade": {
  "title": "Update Available",
  "versionLabel": "Version",
  "sizeLabel": "Size",
  "logLabel": "What's New",
  "updateNow": "Update Now",
  "later": "Later",
  "skip": "Skip This Version",
  "downloading": "Downloading…",
  "downloadDone": "Download Complete",
  "install": "Install Now",
  "downloadFailed": "Download failed, please retry",
  "retry": "Retry",
  "installFailed": "Install failed, please update from the app store",
  "checkingTip": "Checking for updates…",
  "latestTip": "You're on the latest version",
  "checkFailedTip": "Failed to check for updates",
  "forceTip": "This is a required update. Please upgrade to continue.",
  "goStore": "Update from App Store",
  "copyLink": "Copy Link",
  "linkCopied": "Link copied",
  "h5NewVersion": "A new version is available, tap to refresh",
  "updateLogEmpty": "No release notes for this version"
}
```

- [ ] **步骤 3：验证 JSON 合法**

运行：

```bash
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/zh-CN.json','utf8')); JSON.parse(require('fs').readFileSync('src/i18n/locales/en-US.json','utf8')); console.log('JSON OK')"
```

预期：输出 `JSON OK`。

- [ ] **步骤 4：Commit**

```bash
git add src/i18n/locales/zh-CN.json src/i18n/locales/en-US.json
git commit -m "feat: 新增升级功能中英文案"
```

---

## 任务 5：编排层 `src/utils/upgrade/index.uts`

**文件：**
- 创建：`src/utils/upgrade/index.uts`

**无单测** —— 本文件依赖 uni API。纯决策逻辑已在任务 1/2 覆盖。

- [ ] **步骤 1：写编排层第一部分（状态 + 版本号 + 持久化）**

创建 `src/utils/upgrade/index.uts`：

```uts
import { computed, ref } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import { getLatestAppVersion } from '@/src/api/appVersion.uts';
import type { IAppVersion } from '@/src/api/appVersion.uts';
import { getCompilePlatform } from './../env/index.uts';
import { toast, toastError, toastSuccess } from './../toast/index.uts';
import { t } from './../i18n/index.uts';
import { decisionOf, formatFileSize } from './logic.ts';
import type { AppUpdateInfo, DecisionInput, UpdateDecision } from './types.ts';

/** 跳过版本的持久化 key */
const SKIPPED_VERSION_KEY: string = 'upgradeSkippedVersionCode';

/** 弹窗状态机 */
export type UpdateState = 'idle' | 'checking' | 'available' | 'downloading' | 'ready';

/** 当前本次会话的待更新信息，null 表示无更新 */
export const updateInfo = ref(null as AppUpdateInfo | null);

/** 弹窗状态 */
export const updateState = ref('idle' as UpdateState);

/** 下载进度 0-100 */
export const downloadPercent = ref(0);

/** 是否处于强制更新流程（决定弹窗能否关闭、返回键能否拦截） */
export const isForceUpdate = computed<boolean>((): boolean => updateInfo.value?.forceUpdate ?? false);

/** 弹窗是否可见 */
export const isDialogVisible = computed<boolean>((): boolean => updateState.value != 'idle' && updateState.value != 'checking');

/**
 * 读取本地包的版本号（整型）
 *
 * ⚠️ appVersionCode 在 @dcloudio/types 中是 string，必须 parseInt。
 * ⚠️ 返回 0 表示读不到，此时 decisionOf 会放弃本次检查，绝不弹窗。
 */
export function getCurrentVersionCode(): number {
  try {
    const code: number = parseInt(`${uni.getAppBaseInfo().appVersionCode ?? ''}`, 10);
    return isNaN(code) ? 0 : code;
  }
  catch (_e) {
    return 0;
  }
}

/** 读取本地包的版本名（仅用于展示） */
export function getCurrentVersionName(): string {
  try {
    const name = `${uni.getAppBaseInfo().appVersion ?? ''}`;
    return name != '' ? name : '1.0.0';
  }
  catch (_e) {
    return '1.0.0';
  }
}

/** 读取已跳过的 versionCode，无则 0 */
function getSkippedVersionCode(): number {
  try {
    const raw = `${uni.getStorageSync(SKIPPED_VERSION_KEY) ?? ''}`;
    if (raw == '') {
      return 0;
    }
    const code: number = parseInt(raw, 10);
    return isNaN(code) ? 0 : code;
  }
  catch (_e) {
    return 0;
  }
}

/** 持久化「跳过此版本」。存储失败时静默降级为仅本次生效 */
function setSkippedVersionCode(code: number): void {
  try {
    uni.setStorageSync(SKIPPED_VERSION_KEY, `${code}`);
  }
  catch (_e) {
    // 存储不可用时不阻断流程，用户下次启动会再被提示一次
  }
}

/** 清除「跳过此版本」记录（调试 / 「我的」页可用） */
export function clearSkippedVersion(): void {
  try {
    uni.removeStorageSync(SKIPPED_VERSION_KEY);
  }
  catch (_e) {
  }
}
```

- [ ] **步骤 2：追加编排层第二部分（检查 + 决策）**

在 `src/utils/upgrade/index.uts` 末尾追加：

```uts
/**
 * 检查更新
 *
 * @param manual 是否由用户手动触发。true 时无视「跳过此版本」与静默下载，
 *               且失败 / 无更新时会给出可见反馈（toast）。
 */
export function checkAppUpdate(manual: boolean = false): void {
  // 微信小程序走自身发版与静默更新机制，不做处理
  // #ifdef MP-WEIXIN
  return;
  // #endif

  // H5 无「整包版本」概念，走构建 ID 比对，见 checkH5Update
  // #ifdef H5
  checkH5Update(manual);
  return;
  // #endif

  if (manual) {
    toast(t('upgrade.checkingTip'));
  }

  // 'checking' 被 isDialogVisible 排除，因此检查期间不会闪出空弹窗
  updateState.value = 'checking';

  const platform: string = getCompilePlatform();
  const localCode: number = getCurrentVersionCode();

  if (localCode <= 0) {
    console.warn('[upgrade] 本地版本号读不到，放弃本次检查');
    updateState.value = 'idle';
    if (manual) {
      toastError(t('upgrade.checkFailedTip'));
    }
    return;
  }

  getLatestAppVersion(platform, localCode).then((data: IAppVersion): void => {
    const info = {
      versionName: data.versionName,
      versionCode: data.versionCode,
      downloadUrl: data.downloadUrl,
      forceUpdate: data.forceUpdate,
      silentDownload: data.silentDownload,
      updateLog: data.updateLog,
      fileSize: data.fileSize
    } as AppUpdateInfo;

    const decision: UpdateDecision = decisionOf({
      info,
      localCode,
      manual,
      skippedCode: getSkippedVersionCode()
    } as DecisionInput);

    applyDecision(decision, info, manual);
  }).catch((err: any): void => {
    // lime-request 会把拦截器抛出的 Error 转成 LimeRequestFail 普通对象，err.message 取不到
    const msg: string = `${err?.errMsg ?? err?.cause?.message ?? err?.message ?? ''}`;
    console.warn('[upgrade] 检查更新失败:', msg);
    updateState.value = 'idle';
    if (manual) {
      toastError(t('upgrade.checkFailedTip'));
    }
  });
}

/** 按决策结果驱动 UI */
function applyDecision(decision: UpdateDecision, info: AppUpdateInfo, manual: boolean): void {
  if (decision == 'none') {
    updateState.value = 'idle';
    if (manual) {
      toastSuccess(t('upgrade.latestTip'));
    }
    return;
  }
  if (decision == 'silent') {
    updateState.value = 'idle';
    return;
  }

  updateInfo.value = info;

  if (decision == 'force' || decision == 'optional') {
    updateState.value = 'available';
    return;
  }

  // silentDownload：后台先下完，再提示安装
  updateState.value = 'downloading';
  startDownload();
}
```

> ⚠️ 上面用到了 `IAppVersion` 与 `DecisionInput`，其 import 已含在步骤 1 的 import 段中。
> `checkH5Update`、`startDownload` 在后续步骤定义 —— UTS 局部变量不提升，
> 但**顶层 `function` 声明可以后置**（同 `systemInfo/index.uts` 的写法）。
> ⚠️ 反之，`const` / `let` 顶层变量**不能**后置：步骤 3 的 `downloadTask` / `isDownloading`
> 若放在 `startDownload` 之后就没事，但**绝不能**被上方的函数在定义前引用。

- [ ] **步骤 3：追加下载 + 安装部分**

在文件末尾追加：

```uts
/** ⚠️ 必须是 let：不能写成 const task = uni.downloadFile(...) 再在回调里引用它，
 *  UTS 局部声明在自身初始化表达式内不可见，Kotlin 编译报 error18 找不到名称。 */
let downloadTask: DownloadTask | null = null;

/** 本次是否已在下载中，防止重复点击「立即更新」起多个任务 */
let isDownloading: boolean = false;

/** 已下载完成的 APK 本地路径，空串表示尚未下载成功 */
let downloadedFilePath: string = '';

/** 开始下载 APK（不自动安装） */
function startDownload(): void {
  const info = updateInfo.value;
  if (info == null || isDownloading) {
    return;
  }
  isDownloading = true;
  downloadPercent.value = 0;
  // 复位上一次的落盘路径，避免「重新下载后又点到旧的包」
  downloadedFilePath = '';

  downloadTask = uni.downloadFile({
    url: info.downloadUrl,
    success: (res: DownloadFileSuccess): void => {
      // ⚠️ HTTP 状态码非 200 时**不会**走 fail 分支，只能在这里判断
      if (res.statusCode != 200) {
        isDownloading = false;
        updateState.value = 'available';
        toastError(t('upgrade.downloadFailed'));
        return;
      }
      isDownloading = false;
      downloadPercent.value = 100;
      downloadedFilePath = res.tempFilePath;

      // 强制更新不询问用户，直接进安装；可选更新停在 ready 等用户点「立即安装」
      if (isForceUpdate.value) {
        installApk(downloadedFilePath);
        return;
      }
      updateState.value = 'ready';
    },
    fail: (err: DownloadFileFail): void => {
      isDownloading = false;
      updateState.value = 'available';
      console.warn('[upgrade] 下载失败:', err.errMsg);
      toastError(t('upgrade.downloadFailed'));
    }
  });

  downloadTask.onProgressUpdate((res: DownloadProgressUpdate): void => {
    downloadPercent.value = res.progress;
  });
}

/**
 * 唤起系统安装器
 *
 * ⚠️ 仅 Android 支持（uni.installApk，3.94+）。iOS / Web / 小程序不支持，
 *    由 checkAppUpdate 的平台分支提前拦截，正常不会走到这里。
 * ⚠️ filePath 只接受本地路径，网络路径必须先 downloadFile 落盘。
 * ⚠️ Android 8.0+ 需 REQUEST_INSTALL_PACKAGES 权限，且必须重打自定义基座。
 */
function installApk(filePath: string): void {
  // #ifdef APP-ANDROID
  uni.installApk({
    filePath,
    fail: (err: InstallApkFail): void => {
      console.warn('[upgrade] 安装失败:', err.errCode, err.errMsg);
      toastError(t('upgrade.installFailed'));
    }
  });
  // #endif

  // iOS：不允许程序化安装，把用户送到 AppStore
  // #ifdef APP-IOS
  showIosStoreDialog();
  // #endif
}

/** 用户点击「立即更新」：开始下载 */
export function startDownloadAndInstall(): void {
  const info = updateInfo.value;
  if (info == null) {
    return;
  }
  updateState.value = 'downloading';
  startDownload();
}

/**
 * 用户点击「立即安装」
 *
 * ⚠️ 刻意不复用 startDownloadAndInstall：包已经落盘了，再下一次是纯浪费流量。
 *    只有 downloadedFilePath 为空（异常路径）才回退去重新下载。
 */
export function installReadyApk(): void {
  if (downloadedFilePath == '') {
    startDownloadAndInstall();
    return;
  }
  installApk(downloadedFilePath);
}

/** 用户点击「跳过此版本」。强制更新下不应调用 */
export function skipCurrentVersion(): void {
  const info = updateInfo.value;
  if (info != null) {
    setSkippedVersionCode(info.versionCode);
  }
  dismissUpdate();
}

/** 用户点击「稍后再说」——只关闭，不持久化，下次冷启动会再提示 */
export function dismissUpdate(): void {
  if (isForceUpdate.value) {
    return;
  }
  updateState.value = 'idle';
  updateInfo.value = null;
  downloadPercent.value = 0;
}

/**
 * 强制更新且弹窗可见时返回 true，供页面 onBackPress 吞掉返回事件。
 *
 * ⚠️ onBackPress 是页面级钩子，组件内不可靠，因此拦截逻辑落在 5 个页面里。
 */
export function isUpdateBlockingBack(): boolean {
  return isDialogVisible.value && isForceUpdate.value;
}

/** 格式化的包大小，未知时返回空串 */
export function getFormattedFileSize(): string {
  return formatFileSize(updateInfo.value?.fileSize ?? 0);
}
```

- [ ] **步骤 4：追加 iOS 与 H5 分支**

在文件末尾追加：

```uts
/**
 * iOS：store 链接弹窗
 *
 * ⚠️ 刻意不用 uni.openURL —— 该 API 在仓库内查不到 uni-app x 的权威定义，
 *    全盘搜索 node_modules，openURL 只出现在 html5plus/plus.d.ts，
 *    那是老版 uni-app 的 plus API，uni-app x 里不存在。
 *    在无法静态确认前，用 showModal + 复制链接是唯一不依赖未验证 API 的写法。
 */
function showIosStoreDialog(): void {
  const url: string = updateInfo.value?.downloadUrl ?? '';
  if (url == '') {
    return;
  }
  uni.showModal({
    title: t('upgrade.title'),
    content: `${t('upgrade.goStore')}\n${url}`,
    confirmText: t('upgrade.copyLink'),
    success: (res): void => {
      if (res.confirm) {
        uni.setClipboardData({
          data: url,
          success: (): void => {
            toastSuccess(t('upgrade.linkCopied'));
          }
        });
      }
    }
  });
}

/**
 * H5：比对构建 ID，不一致则提示刷新
 *
 * ⚠️ 依赖 vite.config.ts 注入的构建 ID 与产物根的 version.json，
 *    这两项在任务 11 中实现。在此之前本函数为安全空实现。
 */
function checkH5Update(manual: boolean): void {
  // #ifdef H5
  const localBuild: string = `${import.meta.env.VITE_BUILD_ID ?? ''}`;
  if (localBuild == '') {
    if (manual) {
      toastSuccess(t('upgrade.latestTip'));
    }
    return;
  }
  uni.request({
    url: './version.json',
    success: (res): void => {
      const remote = res.data as UTSJSONObject | null;
      const remoteBuild: string = remote?.getString('buildId') ?? '';
      if (remoteBuild != '' && remoteBuild != localBuild) {
        toast(t('upgrade.h5NewVersion'));
        setTimeout((): void => {
          uni.location.reload();
        }, 1500);
      }
      else if (manual) {
        toastSuccess(t('upgrade.latestTip'));
      }
    },
    fail: (): void => {
      if (manual) {
        toastError(t('upgrade.checkFailedTip'));
      }
    }
  });
  // #endif
}
```

> ⚠️ `uni.request` 在此处是**唯一豁免** —— 它读的是应用自身的静态产物 `version.json`，
> 不经过 `src/http/request.uts` 的业务拦截器（拦截器带鉴权头与 401 跳登录，对静态资源是错的）。

- [ ] **步骤 5：静态检查**

运行：`pnpm lint`

预期：无 error 级问题。

- [ ] **步骤 6：Commit**

```bash
git add src/utils/upgrade/index.uts
git commit -m "feat: 新增升级编排层（检查/决策/下载/安装/H5/iOS 分支）"
```

---

## 任务 6：更新弹窗组件

**文件：**
- 创建：`src/components/AppUpdateDialog/AppUpdateDialog.uvue`

- [ ] **步骤 1：写组件 template**

创建 `src/components/AppUpdateDialog/AppUpdateDialog.uvue`：

```vue
<template>
  <!-- 全屏遮罩：铺满父容器，仅弹窗可见时渲染 -->
  <view
    v-if="visible"
    class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center"
    style="background-color: rgba(0, 0, 0, 0.5); z-index: 9999;"
    @click="handleMaskClick"
  >
    <view
      class="w-[300px] rounded-[16px] bg-[#ffffff] overflow-hidden flex flex-col"
      @click="noop"
    >
      <!-- 标题 -->
      <view class="w-full px-[20px] pt-[20px] pb-[12px] flex flex-col">
        <text class="text-[17px] font-bold text-[#1e293b]">{{ titleText }}</text>
      </view>

      <!-- 版本号 + 包大小 -->
      <view class="w-full px-[20px] flex flex-row items-center flex-wrap">
        <text class="text-[13px] text-[#64748b] mr-[12px]">
          {{ versionLabel }}: {{ versionName }}
        </text>
        <text v-if="sizeText != ''" class="text-[13px] text-[#64748b]">
          {{ sizeLabel }}: {{ sizeText }}
        </text>
      </view>

      <!-- 强制更新提示 -->
      <view v-if="isForce" class="w-full px-[20px] pt-[10px]">
        <text class="text-[12px] text-[#dc2626] leading-[18px]">{{ forceTip }}</text>
      </view>

      <!-- 更新说明：按换行拆成兄弟 text 节点（原生端 text 内不可嵌套多个文本节点） -->
      <scroll-view
        class="w-full mt-[12px] px-[20px]"
        style="max-height: 160px;"
        direction="vertical"
      >
        <view class="flex flex-col">
          <text class="text-[13px] text-[#334155] leading-[20px] mb-[4px]">{{ logLabel }}</text>
          <text
            v-for="(line, idx) in logLines"
            :key="idx"
            class="text-[13px] text-[#475569] leading-[20px]"
          >
            {{ line }}
          </text>
        </view>
      </scroll-view>

      <!-- 下载进度 -->
      <view v-if="state == 'downloading'" class="w-full px-[20px] pt-[14px] flex flex-col">
        <view class="w-full h-[6px] rounded-[3px] bg-[#e2e8f0] overflow-hidden">
          <view class="h-[6px] rounded-[3px] bg-[#3b82f6]" :style="{ width: progressWidth }" />
        </view>
        <text class="text-[12px] text-[#64748b] mt-[6px]">{{ downloadingText }} {{ percent }}%</text>
      </view>

      <!-- 按钮区 -->
      <view class="w-full px-[20px] pt-[16px] pb-[20px] flex flex-col">
        <!-- 下载完成：安装 -->
        <view
          v-if="state == 'ready'"
          class="w-full h-[44px] rounded-[8px] bg-[#3b82f6] flex flex-row items-center justify-center"
          @click="handleInstall"
        >
          <text class="text-[#ffffff] text-[15px] font-bold">{{ installText }}</text>
        </view>

        <!-- 下载中：仅强制模式显示重试 -->
        <view
          v-else-if="state == 'downloading'"
          class="w-full h-[44px] rounded-[8px] bg-[#94a3b8] flex flex-row items-center justify-center"
        >
          <text class="text-[#ffffff] text-[15px] font-bold">{{ downloadingText }}</text>
        </view>

        <!-- 可选更新：立即更新 + 跳过 + 稍后 -->
        <view v-else class="w-full flex flex-col">
          <view
            class="w-full h-[44px] rounded-[8px] bg-[#3b82f6] flex flex-row items-center justify-center"
            @click="handleUpdateNow"
          >
            <text class="text-[#ffffff] text-[15px] font-bold">{{ updateNowText }}</text>
          </view>
          <view v-if="!isForce" class="w-full flex flex-row items-center justify-center mt-[12px]">
            <text class="text-[13px] text-[#94a3b8] mr-[20px]" @click="handleSkip">{{ skipText }}</text>
            <text class="text-[13px] text-[#64748b]" @click="handleLater">{{ laterText }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
```

- [ ] **步骤 2：写组件 script**

在同一文件的 `</template>` 后追加：

```vue
<script setup lang="uts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import {
  downloadPercent,
  dismissUpdate,
  getFormattedFileSize,
  isDialogVisible,
  isForceUpdate,
  installReadyApk,
  skipCurrentVersion,
  startDownloadAndInstall,
  updateInfo,
  updateState
} from '@/src/utils/upgrade/index.uts';
import { t } from '@/src/utils/i18n/index.uts';

const visible: ComputedRef<boolean> = isDialogVisible;
const state: ComputedRef<string> = computed<string>((): string => updateState.value);
const isForce: ComputedRef<boolean> = isForceUpdate;

const titleText: ComputedRef<string> = computed<string>((): string => t('upgrade.title'));
const versionLabel: ComputedRef<string> = computed<string>((): string => t('upgrade.versionLabel'));
const sizeLabel: ComputedRef<string> = computed<string>((): string => t('upgrade.sizeLabel'));
const logLabel: ComputedRef<string> = computed<string>((): string => t('upgrade.logLabel'));
const updateNowText: ComputedRef<string> = computed<string>((): string => t('upgrade.updateNow'));
const laterText: ComputedRef<string> = computed<string>((): string => t('upgrade.later'));
const skipText: ComputedRef<string> = computed<string>((): string => t('upgrade.skip'));
const downloadingText: ComputedRef<string> = computed<string>((): string => t('upgrade.downloading'));
const installText: ComputedRef<string> = computed<string>((): string => t('upgrade.install'));
const forceTip: ComputedRef<string> = computed<string>((): string => t('upgrade.forceTip'));

const versionName: ComputedRef<string> = computed<string>((): string => updateInfo.value?.versionName ?? '');
const sizeText: ComputedRef<string> = computed<string>((): string => getFormattedFileSize());
const percent: ComputedRef<number> = computed<number>((): number => downloadPercent.value);
const progressWidth: ComputedRef<string> = computed<string>((): string => `${downloadPercent.value}%`);

/** 更新说明按换行拆成数组，供 v-for 渲染兄弟 text 节点 */
const logLines: ComputedRef<string[]> = computed<string[]>((): string[] => {
  const raw: string = updateInfo.value?.updateLog ?? '';
  if (raw == '') {
    return [t('upgrade.updateLogEmpty')];
  }
  return raw.split('\n');
});

/** 强制模式下点遮罩不关；可选模式下关闭 */
function handleMaskClick(): void {
  if (isForce.value) {
    return;
  }
  dismissUpdate();
}

function handleUpdateNow(): void {
  startDownloadAndInstall();
}

/** 下载已完成，直接安装已落盘的包（不重新下载） */
function handleInstall(): void {
  installReadyApk();
}

function handleSkip(): void {
  skipCurrentVersion();
}

function handleLater(): void {
  dismissUpdate();
}

/** 阻止弹窗内容区的点击冒泡到遮罩 */
function noop(): void {
}
</script>

<style scoped></style>
```

- [ ] **步骤 3：静态检查**

运行：`pnpm lint`

预期：无 error 级问题。

- [ ] **步骤 4：Commit**

```bash
git add src/components/AppUpdateDialog/AppUpdateDialog.uvue
git commit -m "feat: 新增升级弹窗组件 AppUpdateDialog"
```

---

## 任务 7：挂载弹窗 + 页面返回键拦截

**文件：**
- 修改：`App.ku.uvue:2-17`
- 修改：`src/pages/basic/basic.uvue`、`src/pages/function/function.uvue`、`src/pages/me/me.uvue`、`src/pages/index/index.uvue`、`src/pages/ai/ai.uvue`

- [ ] **步骤 1：挂载弹窗到全局骨架**

在 `App.ku.uvue` 的模板中，把 `<Tabbar>` 那行**之后**（仍在根 `view` 内）插入组件：

```vue
    <!-- 自定义 TabBar：根据 config.uts 中的 type 配置切换形态（胶囊或标准底座） -->
    <Tabbar v-if="customTabbarEnable && isCurrentPageTabbar" />

    <!-- 全局 App 升级弹窗：绝对定位遮罩，覆盖页面内容与自定义 TabBar -->
    <AppUpdateDialog />
```

在同文件 `<script setup lang="uts">` 的 import 段末尾加：

```uts
import AppUpdateDialog from '@/src/components/AppUpdateDialog/AppUpdateDialog.uvue';
```

> ⚠️ 不用 easycom 自动导入 —— 项目现有 `NavBar` 也是显式 `import`（`src/layouts/navbar.uvue:51`），照抄这个约定。

- [ ] **步骤 2：给 5 个页面加返回键拦截**

先确认每个页面的现有 `onBackPress` 写法：

```bash
grep -n -A 8 "onBackPress" src/pages/basic/basic.uvue src/pages/function/function.uvue src/pages/me/me.uvue src/pages/index/index.uvue src/pages/ai/ai.uvue
```

在**每个**页面的 `onBackPress` 回调**第一行**插入拦截判断：

```uts
onBackPress((options: OnBackPressOptions): boolean => {
  // 强制更新进行中：吞掉返回事件，用户必须先完成升级
  if (isUpdateBlockingBack()) {
    return true;
  }
  // ...以下保持原有逻辑不动
})
```

并在每个页面的 import 段加：

```uts
import { isUpdateBlockingBack } from '@/src/utils/upgrade/index.uts';
```

> ⚠️ **局部方法定义必须在调用点之前**，但顶层 import 不受此限（SKILL 红线 30 针对的是 `<script setup>` 内的局部函数）。

- [ ] **步骤 3：静态检查**

运行：`pnpm lint`

预期：无 error 级问题。

- [ ] **步骤 4：Commit**

```bash
git add App.ku.uvue src/pages/basic/basic.uvue src/pages/function/function.uvue src/pages/me/me.uvue src/pages/index/index.uvue src/pages/ai/ai.uvue
git commit -m "feat: 挂载升级弹窗到全局骨架并接入页面返回键拦截"
```

---

## 任务 8：接入冷启动与「我的」页手动入口

**文件：**
- 修改：`App.uvue`（`onLaunch`）
- 修改：`src/pages/me/views/MeView.uvue`

- [ ] **步骤 1：冷启动接入**

在 `App.uvue` 的 `<script setup lang="uts">` import 段加：

```uts
import { checkAppUpdate } from '@/src/utils/upgrade/index.uts';
```

在 `onLaunch` 回调**末尾**追加：

```uts
  // 冷启动检查 App 更新（小程序端内部直接 return；H5 走构建 ID 比对）
  checkAppUpdate(false);
```

> ⚠️ 放在 `onLaunch` 末尾而非开头：`checkAppUpdate` 会发起网络请求，
> 不应阻塞主题初始化与 TabBar 注册。

- [ ] **步骤 2：「我的」页加手动入口**

在 `src/pages/me/views/MeView.uvue` 的按钮区域，紧挨现有登录/退出按钮**之前**插入：

```vue
      <!-- 检查更新：手动触发，无视「跳过此版本」，失败/无更新均有 toast 反馈 -->
      <view
        class="w-full h-[44px] rounded-[8px] bg-[#f1f5f9] flex flex-row items-center justify-center mb-[12px]"
        @click="handleCheckUpdate"
      >
        <text class="text-[#334155] text-[14px] font-bold">检查更新</text>
      </view>
```

在 `<script setup lang="uts">` 的 import 段加：

```uts
import { checkAppUpdate } from '@/src/utils/upgrade/index.uts';
```

并在 `handleLogin` / `handleLogout` 附近（**调用点之前**）加函数：

```uts
// 手动检查更新：manual=true 会无视「跳过此版本」与静默下载
function handleCheckUpdate(): void {
  checkAppUpdate(true);
}
```

> ⚠️ 文案暂用硬编码中文占位。项目 UI 中存在大量硬编码中文（如本文件的「退出登录」「登录」），
> 与 `src/utils/i18n` 的 `t()` 并存。升级弹窗走 i18n，此处入口按钮跟随本文件既有风格。
> 若需国际化，后续在 `upgrade` 段加 `checkButton` 键并替换。

- [ ] **步骤 3：静态检查**

运行：`pnpm lint`

预期：无 error 级问题。

- [ ] **步骤 4：Commit**

```bash
git add App.uvue src/pages/me/views/MeView.uvue
git commit -m "feat: 接入 App 冷启动自动检查与「我的」页手动检查入口"
```

---

## 任务 9：登记 HANDWRITTEN 并生成 IDE 声明

**文件：**
- 修改：`scripts/gen-uts-dts.mjs:46`

- [ ] **步骤 1：把 upgrade 加入 HANDWRITTEN**

修改 `scripts/gen-uts-dts.mjs` 第 46 行：

```js
const HANDWRITTEN = new Set(['systemInfo', 'upgrade']);
```

> ⚠️ 必须登记，否则脚本会把 `src/utils/upgrade/index.d.uts.ts` 覆盖成推断错误的版本
> （模块导出面含 `computed` / `ref`，生成器无法静态推断，同 `systemInfo` 的处境）。
> 见 SKILL 红线 40。

- [ ] **步骤 2：手工创建声明文件**

创建 `src/utils/upgrade/index.d.uts.ts`：

```ts
/**
 * `index.uts` 的类型声明（供 IDE / TS 语言服务使用）
 *
 * ⚠️ 本文件与 `index.uts` 是**手工同步**的两份东西（已登记进 gen-uts-dts.mjs 的
 *    HANDWRITTEN 集合，脚本会跳过它）。改了 `.uts` 的导出面必须回来同步这里，
 *    否则补全和类型会对不上 —— 编译不会报错，只会静默失准。
 *
 * ⚠️ 为什么需要这个文件：`src/types/uni.d.ts` 里有 `declare module '*.uts'` 这样的
 *    无 body 通配声明，会让所有 `.uts` 导入解析成 any。靠 tsconfig 的
 *    `allowArbitraryExtensions` 规则，`./index.uts` 能解析到同目录的
 *    `index.d.uts.ts`，真实解析优先于通配声明，补全与类型得以恢复。
 *    该规则要求声明文件与 `.uts` **同目录同名**，所以本文件不能挪走。
 *
 * ⚠️ 刻意不从这里导出任何类型 —— 类型统一定义在 `types.ts`，
 *    经 `.ts` 经 `export *` 转发到 `.uts` 会命中 SKILL 红线 36
 *    （微信小程序 uts2js 链路拿不到，业务侧 import type 直接报错）。
 */
import type { ComputedRef, Ref } from 'vue';
import type { AppUpdateInfo } from './types.ts';

/** 弹窗状态机 */
export type UpdateState = 'idle' | 'checking' | 'available' | 'downloading' | 'ready';

/** 当前本次会话的待更新信息，null 表示无更新 */
export declare const updateInfo: Ref<AppUpdateInfo | null>;

/** 弹窗状态 */
export declare const updateState: Ref<UpdateState>;

/** 下载进度 0-100 */
export declare const downloadPercent: Ref<number>;

/** 是否处于强制更新流程（决定弹窗能否关闭、返回键能否拦截） */
export declare const isForceUpdate: ComputedRef<boolean>;

/** 弹窗是否可见 */
export declare const isDialogVisible: ComputedRef<boolean>;

/** 读取本地包的版本号（整型），读不到时为 0 */
export declare function getCurrentVersionCode(): number;

/** 读取本地包的版本名（仅用于展示） */
export declare function getCurrentVersionName(): string;

/** 清除「跳过此版本」记录 */
export declare function clearSkippedVersion(): void;

/** 检查更新。manual 为 true 时无视「跳过此版本」与静默下载 */
export declare function checkAppUpdate(manual?: boolean): void;

/** 用户点击「立即更新」 */
export declare function startDownloadAndInstall(): void;

/** 用户点击「立即安装」：安装已落盘的包，路径为空时回退为重新下载 */
export declare function installReadyApk(): void;

/** 用户点击「跳过此版本」 */
export declare function skipCurrentVersion(): void;

/** 用户点击「稍后再说」——只关闭，不持久化 */
export declare function dismissUpdate(): void;

/** 强制更新且弹窗可见时返回 true，供页面 onBackPress 吞掉返回事件 */
export declare function isUpdateBlockingBack(): boolean;

/** 格式化的包大小，未知时返回空串 */
export declare function getFormattedFileSize(): string;
```

- [ ] **步骤 3：跑脚本并校验**

运行：

```bash
node scripts/gen-uts-dts.mjs
pnpm check:uts-dts
```

预期：脚本正常结束；`check:uts-dts` 退出码 0（无「不同步」输出）。

- [ ] **步骤 4：Commit**

```bash
git add scripts/gen-uts-dts.mjs src/utils/upgrade/index.d.uts.ts
git commit -m "feat: 升级模块登记 HANDWRITTEN 并补充 IDE 类型声明"
```

---

## 任务 10：Android 权限 + 真机验证

**文件：**
- 修改：`manifest.json`（`app-android.distribute`）

这是**唯一能验证 UTS 编译与 `installApk` 可用性的任务**。

- [ ] **步骤 1：声明安装权限**

在 `manifest.json` 的 `app-android.distribute` 对象中加 `permissions` 数组：

```json
"app-android": {
  "distribute": {
    "modules": {
      "uni-oauth": {
        "weixin": {}
      }
    },
    "permissions": [
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
    ],
    "icons": { "...保持原样..." },
    "splashScreens": { "...保持原样..." }
  }
}
```

- [ ] **步骤 2：编译前先确认真进了 Kotlin 阶段**

按 SKILL 红线 32 / 45：**严禁用 `launch app-android --compile true` 或
`compile app-android --file` 充当编译验证**，也需警惕 `vapor-render-target: "bytecode"`
会让整轮跳过 Kotlin（本项目 `manifest.json` 正是这个配置）。

先确认 `manifest.json` 的 `uni-app-x` 段，**若为验证 Kotlin 需临时改为**：

```json
"uni-app-x": {
  "styleIsolationVersion": "2"
}
```

（即临时删掉 `vapor` 与 `vapor-render-target` 两个键，改走 VDOM 模式；
验证完**必须改回**。）

- [ ] **步骤 3：真机构建**

```bash
pnpm dev:app-android 2>&1 | tee /tmp/upgrade-build.log
```

构建结束后，**先数这行确认没走假绿通道**：

```bash
grep -c "编译为android class" /tmp/upgrade-build.log
```

预期：`>= 1`。**若为 0，说明这轮没进 Kotlin，任何「编译成功」都不作数**，回步骤 2 检查。

再查 Kotlin 报错：

```bash
grep -aE "error:|kotlin编译失败" /tmp/upgrade-build.log
```

预期：无输出。**若有报错**，最可能的几处及修法：

| 报错关键词 | 原因 | 修法 |
| :--- | :--- | :--- |
| `找不到名称` / `error18` | `index.uts` 里后置的函数却在前方被引用 | 把 `function` 声明挪到调用点之前 |
| `appVersionCode` 相关 | uni-app x 与 legacy 类型字段名不一致 | 按编译器提示改字段名 |
| `installApk` 相关 | API 名或参数名不符 | 按编译器提示改；仍不可用则退回「跳浏览器下载」 |
| `DownloadTask` / `DownloadFileSuccess` 类型不存在 | 类型名不符 | 去掉显式类型标注，靠推断 |
| `getBoolean` / `getNumber` 不存在 | `UTSJSONObject` 方法名不符 | 改用 `data['字段名']` 取值后断言 |

- [ ] **步骤 4：真机功能验证**

按顺序验证（每项记下结果）：

- [ ] 后端起一个 `versionCode` 更高的版本响应，冷启动 App → 弹窗出现，显示版本号 / 包大小 / 更新说明
- [ ] 点「稍后再说」→ 弹窗关闭；杀进程重启 → **再次弹出**
- [ ] 点「跳过此版本」→ 弹窗关闭；杀进程重启 → **不再弹出**
- [ ] 「我的」页点「检查更新」→ **仍然弹出**（manual 压过跳过）
- [ ] 后端把 `forceUpdate` 改 true → 重启 App → 弹窗**无关闭按钮、无跳过/稍后**，点遮罩不关
- [ ] 强制更新下按系统返回键 → **弹窗仍在**（未被退出）
- [ ] 点「立即更新」→ 进度条推进、百分比单调递增
- [ ] 下载完成 → **系统安装器被唤起**（若失败且提示「未知来源被禁止」，确认已重打自定义基座）
- [ ] 后端把 `silentDownload` 改 true → 重启 App → 不弹窗，后台下载，完成后弹「下载完成」

- [ ] **步骤 5：还原 manifest 的 vapor 配置**

把步骤 2 临时删掉的键改回：

```json
"uni-app-x": {
  "styleIsolationVersion": "2",
  "vapor": true,
  "vapor-render-target": "bytecode"
}
```

- [ ] **步骤 6：Commit（只提交 manifest）**

```bash
git add manifest.json
git commit -m "feat: 声明 Android 安装权限以支持应用内整包升级"
```

---

## 任务 11（可选，不阻塞主线）：H5 构建 ID

**文件：**
- 修改：`vite.config.ts`
- 修改：`scripts/build-h5.mjs`（或新增产物写入步骤）

> H5 分支当前是安全空实现（`VITE_BUILD_ID` 未定义时直接返回）。
> 若判定成本过高，本任务可整体跳过，H5 保持 no-op。

- [ ] **步骤 1：构建期注入构建 ID**

在 `vite.config.ts` 的 `define` 配置中加入：

```ts
define: {
  'import.meta.env.VITE_BUILD_ID': JSON.stringify(`${Date.now()}`)
}
```

- [ ] **步骤 2：产物写 version.json**

在 `scripts/build-h5.mjs` 构建完成、产物落到 `unpackage/dist/build/web` 之后追加：

```js
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'unpackage/dist/build/web';
writeFileSync(
  join(outDir, 'version.json'),
  JSON.stringify({ buildId: `${Date.now()}` }),
  'utf8'
);
console.log('[build-h5] version.json 已写入');
```

> ⚠️ 此处 `Date.now()` 与 vite 的 `define` 取值**不同源**，会导致上线后首次访问即误报「有新版本」。
> 正确做法是把构建 ID 存进环境变量，vite 与脚本共用。实现时必须先解决这一点，
> **否则本任务不能上线**。这也是把它列为可选任务的原因。

- [ ] **步骤 3：验证**

```bash
pnpm build:h5
test -f unpackage/dist/build/web/version.json && echo "version.json OK"
```

预期：输出 `version.json OK`。

- [ ] **步骤 4：Commit**

```bash
git add vite.config.ts scripts/build-h5.mjs
git commit -m "feat: H5 构建 ID 注入与 version.json 产物"
```

---

## 完成标准

- [ ] `pnpm test` 全绿（15 条用例）
- [ ] `pnpm lint` 无 error
- [ ] `pnpm check:uts-dts` 退出码 0
- [ ] 真机构建日志中 `编译为android class` ≥ 1，且无 Kotlin 报错
- [ ] 任务 10 步骤 4 的 9 项真机验证全部通过
- [ ] `manifest.json` 的 `vapor` 配置已还原

## 已知未决项（交付时需明确告知）

1. **iOS 跳转用 `showModal` + 复制链接**，未用 `uni.openURL`（该 API 在 uni-app x 中无法静态确认）。若真机验证 `uni.openURL` 可用，再升级为直接跳转。
2. **`uni.installApk` 与 `appVersionCode` 的签名未经静态验证** —— 仓库 `node_modules` 中零命中，只能靠真机构建暴露差异。第一次真机构建大概率需要按报错迭代。
3. **H5 分支为可选任务**，默认是安全空实现。若要做，必须先解决构建 ID 同源问题。
4. **「检查更新」按钮文案是硬编码中文**，与 `MeView.uvue` 现有风格一致（该文件本身大量硬编码中文）；升级弹窗文案走 i18n。
