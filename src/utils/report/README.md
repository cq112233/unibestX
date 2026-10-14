# src/utils/report 埋点与异常上报

行为埋点与全局异常上报的统一门面。设计上**只留钩子、不给实现**：不绑任何厂商 SDK、不注册回调函数引用（UTS 不允许传函数引用），接入时替换某个函数的**函数体**即可，签名保持不变。

---

## 目录结构

```text
src/utils/report/
├── index.uts              # 门面：export * 自 error.uts 与 track.uts（业务侧统一从这引）
├── track.uts              # 行为埋点：track / trackPageView / trackClick + 上报地址与 stub
├── error.uts              # 异常上报：reportError / reportErrorMessage + 脱敏 + 上报地址与 stub
└── internal/
    └── common.uts         # currentPagePath()：取页面栈顶路由，失败返回空串
```

---

## 当前状态（接入前必读）

**两个通道默认都是关闭的，不会把数据发到任何地方**：

| | 触发发送的条件 | 不满足时 |
| :--- | :--- | :--- |
| 埋点 `track()` | 已 `setTrackEndpoint(url)` **且** `isProd()` | 完全静默（连本地日志都没有） |
| 异常 `reportError()` | 已 `setErrorReportUrl(url)` **且** `isProd()` | 仍会 `console.error('[error-report]', …)`，只是不发网络请求 |

`isProd()` 来自 `@/src/config`（判 `getCurrentEnv() == 'production'`）。地址为空时 stub **直接 return**，这是刻意的防御：避免开发期把数据误发到未知域名。全仓库目前只有 [App.uvue](../../../App.uvue) 接了错误上报，`track` / `trackPageView` 还没有调用方。

---

## 快速上手

### 1. 上报一个异常

```uts
import { reportError, reportErrorMessage } from '@/src/utils/report/index.uts';

// 带原始错误对象：自动提取 message 与 stack，并先做脱敏
reportError(err, '自动检查更新失败');

// 只有文案、没有错误对象
reportErrorMessage('支付回调签名校验不通过');
```

`err` 可以是 `Error` / 字符串 / 任意对象；传 `null` 时用第二参作为 message，两参都空则退化成 `'unknown'`。

上报前必经脱敏（见下），**堆栈也脱**（请求 URL 上可能挂 token）。

### 2. 打一个埋点

```uts
import { track, trackClick, trackPageView } from '@/src/utils/report/index.uts';

track('order_submit', '{"amount":99,"channel":"wechat"}'); // 自定义事件 + 属性
trackClick('btn_login');                                   // 点击：语义上等于 track('click', …)
trackPageView();                                           // 曝光：page 缺省取页面栈顶路由
trackPageView('/pages/detail/detail');                     // 显式指定页面（如上报的是上一个页面）
```

**属性必须传 JSON 字符串**（`propsJson: string`），不是 `UTSJSONObject` —— UTS 侧跨端传对象字面量有类型风险，这里是刻意收成字符串的。

⚠️ `trackClick(name)` 会把 name 直接拼进 `{"name":"…"}`，**含双引号会破坏 JSON 结构**，命名只用字母 / 数字 / 下划线。

### 3. 接入真实上报通道

两步，二选一即可（推荐先配地址，再改 stub）：

```uts
// 1. 在应用启动处配地址（例如 App.uvue 的 onLaunch）
import { setTrackEndpoint, setErrorReportUrl } from '@/src/utils/report/index.uts';
setTrackEndpoint('https://api.example.com/track');
setErrorReportUrl('https://api.example.com/client-error');
```

```uts
// 2. 改 stub 函数体，把 payload 发出去（签名一个字都不要改）
// track.uts
export function onTrackStub(payload: TrackPayload): void {
  // http.post(trackEndpoint, payload as any);   // 也可以在这里接第三方 SDK
}

// error.uts
export function onErrorReportStub(payload: ErrorReportPayload): void {
  // http.post(reportUrl, payload as any);
}
```

`track()` / `reportError()` 调用 stub 时都套了 `try/catch`：上报通道自己抛错不会污染业务链路。

---

## API

### 埋点（`track.uts`）

| 导出 | 签名 | 说明 |
| :--- | :--- | :--- |
| `track` | `(event: string, propsJson: string = '')` | 上报一个埋点事件；`event` 为空直接 return |
| `trackPageView` | `(page: string = '')` | 页面曝光，等价 `track('page_view', '{"page":"…"}')`；page 为空取 `currentPagePath()` |
| `trackClick` | `(name: string)` | 点击埋点，等价 `track('click', '{"name":"…"}')` |
| `setTrackEndpoint` | `(url: string)` | 配置上报地址；传空字符串 = 关闭上报 |
| `getTrackEndpoint` | `() => string` | —— |
| `onTrackStub` | `(payload: TrackPayload)` | **接入点**：替换函数体实现真实上报 |

`TrackPayload = { event, propsJson, page, time }`（`time` 为 `Date.now()` 毫秒数）。

### 异常（`error.uts`）

| 导出 | 签名 | 说明 |
| :--- | :--- | :--- |
| `reportError` | `(err: any \| null, extraMessage: string = '')` | 记录并尝试上报；`console.error('[error-report]', …)` 总会执行 |
| `reportErrorMessage` | `(message: string)` | 纯文案上报，内部转调 `reportError(null, message)` |
| `setErrorReportUrl` / `getErrorReportUrl` | `(url: string)` / `() => string` | 上报地址；空 = 只打本地日志 |
| `onErrorReportStub` | `(payload: ErrorReportPayload)` | **接入点**：替换函数体实现真实上报 |
| `maskSensitive` | `(text: string) => string` | 脱敏工具，返回**新字符串，不改动入参** |

`ErrorReportPayload = { message, stack, page, time }`。

### 脱敏规则（`maskSensitive`）

覆盖两种形态：JSON 里的 `"key":"value"`，以及 `key=value` 串。

| 对象 | 规则 |
| :--- | :--- |
| 手机号 | `13800138000` → `138****8000`（扫描连续 11 位数字，首位必须是 `1`） |
| 敏感字段值 | 保留首尾各 4 位，中间 `****`；长度 ≤ 8 时整体 `****` |

字段名清单（`SENSITIVE_KEYS`）：`token` / `accessToken` / `refreshToken` / `password` / `authorization`。**新增敏感字段名要来这里加**，否则不会被抹掉。

---

## 注意

1. **接入 = 改函数体，不改签名**。不要试图把回调注册进去 —— UTS 不允许传函数引用，这也是本模块只留 stub 的原因。
2. **`propsJson` 是字符串不是对象**；`trackClick` 的 name 不能带双引号。
3. **默认关闭是安全设计，不是没接好**。地址为空时埋点静默、异常只打本地日志；要让通道真正工作，必须**同时**满足「配了地址」与「生产环境」。
4. **脱敏在 stub 之前执行** —— 即使你替换了 stub，拿到的 payload 也已经是脱敏后的，别指望在 stub 里再拿原文。
5. `currentPagePath()` 读 `getCurrentPages()` 栈顶，**失败一律返回空串、不抛错**，埋点不会因为拿不到路由而中断。

---

## 相关

- 全局接线：[App.uvue](../../../App.uvue) 的 `onError`（全平台）与 `onUnhandledRejection`（仅 Web / 小程序，需条件编译隔离）
- 环境判定：`@/src/config` 的 `isProd()` / `getCurrentEnv()`
- 契约：`unibestX-skill` 分册 8（`references/8-utils-spec.md` 的 8.4.7）
