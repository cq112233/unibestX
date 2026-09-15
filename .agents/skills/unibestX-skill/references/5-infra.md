# 五、页面与应用基础设施（http · router · layouts · i18n）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用，收录 `src/http/`、`src/router/`、`src/layouts/`、`src/i18n/` 四个基础设施目录的对外 API 与使用规范。
>
> **何时读本文件**：发起 HTTP 请求或做流式（SSE / 打字机）输出之前、要改路由拦截与登录跳转之前、要选页面布局或改导航栏 / 状态栏之前、要增改多语言文案之前。
>
> **回写规则**：这四个目录新增导出、改变调用姿势或新增跨端限制时，同步追加到本文件对应小节，编号续接 `5.6`、`5.7`…；若新增了整个基础设施目录，另起 `5.6` 并按同一结构撰写。同时更新 [SKILL.md](../SKILL.md) 的导航表。

> 📎 **通用约定（适用于本文件全部模块）**
> 1. **与分册 4 的分工必须分清**：**分册 4（`src/utils/`）是「工具函数」**——取路径、取主题色、`$t` 取文案、弹 toast、`uploadFile` 上传；**本分册是「配置与装配」**——请求客户端的拦截器链路、路由闸门与登录策略、页面布局选型、语言包装配。想在运行时**读**什么走分册 4，想**改配置 / 定策略 / 选骨架**走本分册。
> 2. **import 路径带 `.uts` 扩展名**，`@` 指向项目根（仅对**存在声明文件**的模块生效，见下条）：`import { http } from '@/src/http/request.uts'`。
> 3. ⚠️ **`src/http/` 与 `src/router/` 目前没有任何 `.d.uts.ts` 声明文件**，`scripts/gen-uts-dts.mjs` 只生成 `src/utils/<模块>/index.uts` 加三个硬编码文件（`src/store/types.uts`、`src/i18n/index.uts`、`src/tabbar/index.uts`）。**后果**：这两个目录的 import **带不带 `.uts` 扩展名都报 `TS2307`**（已实测），补全与类型全丢。本仓库 `.vscode/settings.json` 关了 `typescript.validate.enable`，所以**不显示红波浪线，只表现为「没补全」**——「IDE 没报错」不能当模块解析正常的证据。要修就得把对应文件加进脚本的 `EXTRA_SOURCES` 再跑 `pnpm gen:uts-dts`。**这不是笔误，是当前真实状态**，照抄本文件示例即可，运行期不受影响。
> 4. **`src/i18n/index.uts` 与全部 `src/utils/*/index.uts` 有声明文件**，按第 2 条正常写即可。
> 5. **本分册除 5.1 的一处 H5 代理分支外，四个模块均无 Vapor / VDOM 分流**，全端跑同一份实现；唯一的 vapor/vdom 差异在 `setLocale` 的落点（见 5.5）。

---

## 5.1 HTTP 请求（http/request）

**一句话定位**：基于 `uni_modules/lime-request` 搭的项目级 HTTP 客户端——域名选择、超时、Token 注入、HTTP 状态码与业务码校验、401 清 Token 跳登录、错误 toast 全部收口在拦截器里，对外只暴露一个 `http` 单例，`then` 拿到的**已经是拆过包的 `data`**。

**何时用**：常规 REST 接口（GET / POST / PUT / DELETE）与走 `uni.uploadFile` 的文件上传。**不要**自己写 `uni.request`——鉴权头、`code` 判定、401 跳登录、H5 反向代理前缀都在本模块内。反过来，**流式 / SSE 打字机场景不要用本模块**（见 5.2），它是一次性 JSON 语义。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `http` | `const http: HttpClient` | **全局唯一入口**；同时是 `export default`，两种导入等价 |
| `HttpClient`（类） | 6 个方法见下 | 聚合类，内部全部打到模块级 `requestInstance` |
| `HttpClient.request<T>` | `(config: LimeRequestConfig): Promise<T>` | 底层入口，`url` 必须自己写在 config 里 |
| `HttpClient.get<T>` | `(url: string, config: LimeRequestConfig \| null = null): Promise<T>` | GET，`params` 会拼成查询串 |
| `HttpClient.post<T>` | `(url: string, data: any \| null = null, config: LimeRequestConfig \| null = null): Promise<T>` | POST，`data` 在第 2 位 |
| `HttpClient.put<T>` | 同 `post` | PUT |
| `HttpClient.delete<T>` | 同 `post` | DELETE，**支持带 body** |
| `HttpClient.upload<T>` | `(url: string, config: LimeRequestConfig \| null = null): Promise<T>` | 走 `uni.uploadFile`，返回**未解析的原始字符串** |
| `API_DOMAINS` | `const { DEFAULT: string; SECONDARY: string }` | 主 / 备用域名；H5 开代理时两者都是 `'/api'` |
| `ResultEnum` | 常量对象（`0/200/400/401/403/404/405/408/500/…`） | 业务码 / HTTP 码常量（来自 `tools/enum.uts`） |
| `ContentTypeEnum` | 常量对象（`AppJson` / `FormUrlEncoded` / `FormData`） | Content-Type 常量 |
| `ShowMessage` | `(status: number): string` | HTTP 状态码 → 中文文案，**末尾自带「，请检查网络或联系管理员！」** |
| `IResponse<T>` | `type { code; data; message; msg? }` | 通用响应结构声明（`types.uts`，全仓零引用） |
| `LimeRequestFail` | `type { errCode; errSubject; data; cause; errMsg; source? }` | **失败时的 reject 值形态**，从 `@/uni_modules/lime-request` 导入 |
| 拦截器注册口 | —— | **不对外暴露**：`requestInstance` 是模块私有，想加拦截器只能自己 `new Request(...)` |

```uts
import httpDefault, { http, API_DOMAINS } from '@/src/http/request.uts'
import { ResultEnum, ContentTypeEnum, ShowMessage } from '@/src/http/tools/enum.uts'
import type { LimeRequestConfig } from '@/uni_modules/lime-request'

// 1) 常规请求：后端是 { code, data, message } 时，then 拿到的直接是 data
http.get<UTSJSONObject>('/foo', {
  params: { name: 'unix', page: 1, pageSize: 10 } as UTSJSONObject,
  baseURL: API_DOMAINS.SECONDARY,                // 单次切备用域名（等价写法：extra.domain）
} as LimeRequestConfig).then((data: UTSJSONObject): void => {
  console.log(data.getString('name'))
})

// 2) 免登录接口（登录页、公开数据）必须显式声明，否则请求根本发不出去
http.post<UTSJSONObject>('/public/list', null, {
  extra: { ignoreAuth: true } as UTSJSONObject
} as LimeRequestConfig)

// 3) PUT / DELETE
http.put<UTSJSONObject>('/foo/1', { name: 'bar' } as UTSJSONObject)
http.delete<any>('/foo/1')

// 4) 静默失败：业务码错误不弹 toast（⚠️ 网络错误 / HTTP 状态码错误的 toast 关不掉）
http.get<UTSJSONObject>('/silent', { extra: { toast: false } as UTSJSONObject } as LimeRequestConfig)

// 5) 取消请求：靠 getTask 拿任务对象再 abort
let task: RequestTask | null = null
http.get<any>('/slow', {
  getTask: (t) => { task = t as RequestTask }
} as LimeRequestConfig)
// 稍后（用户点「取消」时）——⚠️ getTask 是异步回调，紧接着调用时 task 还是 null
task?.abort()

// 6) 拿完整响应体 / 自定义错误兜底：照 src/sub/httpDemo/httpDemo.uvue 的多级兜底写
import { useTokenStore } from '@/src/store'
```

**使用注意**：

- **配置项全集**（`LimeRequestConfig`，全部可选）：`url`、`baseURL`、`method`（`OPTIONS/GET/HEAD/POST/PUT/DELETE/TRACE/CONNECT/DOWNLOAD/UPLOAD`）、`data`、`params`、`header`、`timeout`（单例默认 **5000**）、`dataType`、`responseType`、`sslVerify`、`withCredentials`、`enableHttp2`、`enableCache`、`enableChunked`、`enableCookie`、`defer`、`getTask`、`extra`，以及上传专用的 `files`/`file`/`fileType`/`filePath`/`name`/`formData`。**没有 loading 相关配置**——本模块只做 toast，`uni.showLoading` 要页面自己管。
- `extra` 是本项目自定义的三个开关，全部按 `UTSJSONObject` 读取：`ignoreAuth: true`（跳过鉴权）、`domain`（覆盖本次 `baseURL`）、`toast: false`（**只**抑制业务码错误的 toast）。
- ⚠️ **鉴权头字段名是 `token`，不是 `Authorization`、无 `Bearer` 前缀**，值取自 `useTokenStore().getToken()`（有 `accessToken` 用 `accessToken`，否则用 `token`）。**取不到 token 会在请求拦截器里直接 `throw new Error('[请求错误]：未登录')`，请求根本发不出去**——登录页与公开接口必须 `extra: { ignoreAuth: true }`。`useTokenStore` 依赖 Pinia 已安装，别放进应用初始化之前的裸顶层逻辑。
- **Content-Type**：`method != 'UPLOAD'` 且未显式指定时强制 `application/json;charset=UTF-8`；`Accept` 兜底 `application/json, text/plain, */*`。**UPLOAD 刻意不覆盖** Content-Type——否则 `uni.uploadFile` 的 multipart boundary 被冲掉，H5 上传可能失败。
- **域名**：默认 `API_DOMAINS.DEFAULT`（`VITE_SERVER_BASEURL`，兜底 `https://ukw0y1.laf.run`）；`baseURL`（或 `extra.domain`）可单次覆盖。H5 下 `VITE_H5_USE_PROXY=true` 时 DEFAULT / SECONDARY 双双变成 `'/api'`；**小程序 / App 不支持 `/api`**，配了 `/` 开头的地址会被回退成默认完整域名。`url` 传绝对地址（`http(s)://` 开头）时 `baseURL` 整体失效。以上常量都是**模块加载时**算好的，改 `.env` 必须重新构建。
- ⚠️ **错误处理契约（最容易踩）**：拦截器里的 `throw new Error(...)` 会被 lime-request 的 `reducerFactory.resolve/reject` 捕获，转成 `LimeRequestFail` **普通对象**后 `reject`。也就是说 **catch 到的不是 `Error` 实例，`err.message` 取不到**；要么读 `err.errMsg`，要么读 `err.cause.message`，要么照 `src/sub/httpDemo/httpDemo.uvue` 做 `instanceof Error` → `instanceof UTSJSONObject`（依次读 `message` / `msg` / `errMsg`）的多级兜底。**注意这与 5.2 相反**（流式的 `error` 是真正的 `Error` 实例）。
- **校验顺序**：先 HTTP 状态码——**`statusCode != 200` 一律算失败**（`201` / `204` / `304` 同样失败），弹 `ShowMessage(status)` 且 `icon: 'error'`，`401` 额外清 Token 并 `toLoginPage({ mode: 'reLaunch' })`；再业务码——`code` 用 `getNumber('code')` 读取，**只有 `0`（`Success0`）与 `200`（`Success200`）算成功**，否则取 `message`（无则 `msg`，再无则「未知错误」）弹 toast 并 `throw`，其中 `code === 401` 同样清 Token + reLaunch 登录页。响应体为 `null` 直接 `throw new Error('返回的响应数据为空')`。
- ⚠️ **`code` 用 `getNumber('code')` 读**：后端把 `code` 返回成字符串（如 `"200"`）时**读不出数字，整段业务码校验被静默跳过**，任何响应都当成功。同理，响应里**没有 `code` 字段时也不做业务码校验**——后端契约变更 + 前端零感知，排查成本极高。
- **拆包规则**：响应体是对象且含 `code` → 返回 `obj.data`（`data` 为 null 时 `throw '响应结构包含 code，但 data 字段为空'`）；没有 `code` → 原样返回整个响应体。**六个方法都拆包**，想拿完整响应体只能自己 `new Request(...)`。
- ⚠️ **`http.upload<T>` 不做 JSON 解析、不判 `code`**，且响应拦截器对 `UPLOAD` / `DOWNLOAD` **提前 return**，所以**上传不享受 401 跳登录、也不弹 HTTP 状态码 toast**。要「传文件拿回可访问 URL」请直接用 **4.8 的 `uploadFile` / `uploadOssFile`**。
- **与 4.8 的 Token 逻辑同源但不同实现**：两处都是 `useTokenStore().getToken()` 写进 header 的 `token` 字段、都用 `ignoreAuth` 跳过；但一套在 http 拦截器里（空 token 直接抛错）、一套在 `uploadFile` 里（空 token 静默不写）。**改鉴权规则要同时改两处**。
- ⚠️ **传入的配置对象会被就地改写**：`get/post/put/delete` 会往 config 上写 `url` / `method`，请求拦截器会往 `header` 上写 Content-Type / Accept / **token**。把同一个 config 或 header 常量复用到多个请求上会串数据（4.8 的 `uploadFile` 有同款问题）。
- **无重试、无请求去重、无 loading**：源码里没有任何重试或并发控制逻辑，要重试得自己在 `catch` 里写。
- **`HttpClient` 没有 `download`**（响应拦截器却专门为 `method === 'DOWNLOAD'` 开了提前放行分支——能力留着、入口没收），也**没有拦截器注册口**。另：`new HttpClient()` **并不隔离**——所有方法都打到模块级 `requestInstance`，自建实例只是方法分组，不隔离 baseURL / 超时 / 拦截器。

---

## 5.2 流式请求（http/stream）

**一句话定位**：绕过 `http` 层、直接用 `uni.request` 的 `enableChunked` + `onChunkReceived` 逐块收数据，把每块解码成 `Observable<StreamChunk>`；同时提供 `simulateStream` 本地假流，两者返回**完全相同的类型**，可互相替换。

**何时用**：SSE / chunked 打字机输出（AI 对话、长文生成），或任何要「数据边到边渲染」的场景。普通 JSON 接口用 5.1。**注意本模块不参与 http 层的任何逻辑**：不注 Token、不拼 baseURL、不校验业务码、不弹 toast。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `StreamChunk` | `type { text: string; receivedLength: number; elapsedMs: number }` | 数据块；`receivedLength` 是**累计字符数**（非字节数），`elapsedMs` 从发起请求起算 |
| `requestStream` | `(url: string, body: string, header: UTSJSONObject \| null = null, timeout: number = 60000): Observable<StreamChunk>` | 真实分块 POST；**订阅时才发请求**，取消订阅即 abort |
| `simulateStream` | `(text: string, chunkSize: number = 6, intervalMs: number = 90): Observable<StreamChunk>` | 本地模拟流，按 `chunkSize` 切片、`intervalMs` 间隔吐出；`text` 为空立即 complete |
| `Utf8StreamDecoder`（类） | `decodeChunk(buffer: ArrayBuffer): string` / `reset(): void` | 增量 UTF-8 解码器，防多字节字符被 chunk 边界截断成 `�` |
| 聚合单例 / 默认导出 | —— | **本模块只有具名导出**，无 `export default`、无聚合类（与分册 4 的风格不同） |

```uts
import { requestStream, simulateStream } from '@/src/http/stream.uts'
import type { StreamChunk } from '@/src/http/stream.uts'
import { Observable, scan, catchError, finalize } from '@/src/utils/rxjs-lite/index.uts'
import type { Subscription } from '@/src/utils/rxjs-lite/index.uts'
import { useTokenStore } from '@/src/store'

let sub: Subscription | null = null

// ⚠️ 函数名不要叫 stop：Vue 的 @vue/reactivity 全局导出了 stop()，会被抢解析
function stopStream(): void {
  if (sub != null) {
    sub.unsubscribe()      // 触发 teardown → task.abort()，立即中断底层请求
    sub = null
  }
}

function start(): void {
  stopStream()             // 先掐掉上一个流，避免两个流同时写同一份状态
  content.value = ''

  sub = requestStream(
    'https://ukw0y1.laf.run/ai/chat',                      // 必须是完整地址：模块不做 baseURL 拼接
    JSON.stringify({ prompt: '你好' } as UTSJSONObject),   // body 必须是字符串
    {
      'Content-Type': 'application/json',
      'token': useTokenStore().getToken()                  // 模块不自动带 token，要自己塞
    } as UTSJSONObject,
    60000
  )
    // ⚠️ pipe 一次只接一个操作符，多个操作符必须链式 .pipe().pipe()
    .pipe(catchError((_err: any): Observable<StreamChunk> => simulateStream('接口不可用，已降级为本地模拟')))
    .pipe(finalize((): void => { loading.value = false }))          // 完成/出错/取消都会走一次
    .pipe(scan((acc: string, chunk: StreamChunk): string => acc + chunk.text, ''))
    .subscribe(
      (full: string): void => { content.value = full },
      (err: Error): void => { console.error(err.message) },        // ✅ 这里是 Error 实例，可安全取 message
      (): void => { console.log('流结束') }
    )
}

onUnmounted((): void => { stopStream() })   // 页面卸载必须取消，否则底层请求继续跑

// 只想本地演示 / 不想碰网络时，直接换数据源，下游 scan/subscribe 完全不用改：
// sub = simulateStream('一段演示文本', 6, 90).pipe(scan(...)).subscribe(...)
```

**使用注意**：

- **与 5.1 的分工（本模块最大的坑）**：`stream` 不经过 `http` / lime-request，因此**没有** Token 注入、**没有** `API_DOMAINS` 拼接、**没有** H5 `/api` 代理前缀、**没有** `code` 校验、**没有**统一 toast / 401 跳登录。URL、header（含 token）、业务码都要自己处理。
- **取消 / 中断机制与 5.1 不同**：request 靠 `getTask` + `task.abort()`；stream 靠 `Subscription.unsubscribe()`——teardown 里执行 `settled = true; task.abort()`，取消后不会再有任何 `next` / `complete` / `error`。rxjs-lite 在**流正常完成或出错时也会自动 unsubscribe**，`finalize` 会被调用一次，用来复位 loading 正好。也可用 `takeUntil(subject.asObservable())` 做「外部信号中断」。
- **错误契约与 5.1 相反**：这里 `subscriber.error(new Error(msg))` 下沉的是**真正的 `Error` 实例**（源码注释说明这是为规避 UTS 里对象字面量 / `UTSJSONObject` 断言的运行时不确定性），页面侧 `err instanceof Error` 可安全取 `.message`；`fail` 时文案取 `err.errMsg`，兜底「网络请求失败」。
- ⚠️ **`success` 回调把响应对象丢弃了**（`success: (_res) => settle(null)`），所以 **HTTP 状态码拿不到**：服务端返回 401 / 500 时，只要传输层成功就会走 `complete` 而不是 `error`。需要区分 HTTP 错误得自己改这个模块。
- **请求形态是固定的 POST**：`method: 'POST'`、`enableChunked: true`、`responseType: 'arraybuffer'`、`dataType: 'text'`，`body` 必须是字符串（自己 `JSON.stringify`）。`timeout` 默认 60000ms。
- **`header` 传 `null`（默认）时**使用内置头 `Content-Type: application/json` 与 `Accept: text/event-stream, application/x-ndjson, application/json`；**一旦自己传了对象就整体替换，两个头都不再兜底**——上面示例因此显式补了 `Content-Type`。
- **中文 / emoji 安全**：`Utf8StreamDecoder` 自持一个尾部字节缓冲，只解码完整的 UTF-8 序列，被 chunk 边界截断的多字节字符会留到下一块拼接，**不会被替换成 U+FFFD `�`**（UTS 的 `TextDecoder.decode()` 只有单参数签名，没有 Web 端的 `{ stream: true }`）。每次订阅内部 new 一个实例，正常用不到 `reset()`。
- 文本为空的 chunk 会被丢掉（`if (text.length <= 0) return`），所以「只到了半个多字节字符」的那一次不会有任何发射。
- **平台**：源码注释写明 `enableChunked` 与 `RequestTask.onChunkReceived` 在 **Web / Android / iOS / 鸿蒙 4.71+** 均可用。**无 Vapor / VDOM 分流**，全端同一份实现。
- **无重试逻辑**：源码里没有任何自动重连 / 重试；要重试得自己在 `catchError` 里返回新的 `Observable`。
- **`requestStream` 目前全仓库零调用**（只有 `simulateStream` 在 `src/sub/rxjsDemo/rxjsDemo.uvue` 被使用），叠加「success 丢弃状态码」的问题，真实 SSE 链路没有任何回归示例——**首次接真实流式接口时务必自行验证错误分支**。

---

## 5.3 路由与拦截器（router）

**一句话定位**：`src/router/` 是「路由表 + 导航闸门」——定义登录页等绝对路径常量与登录策略，并用 `uni.addInterceptor` 在 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` 上做未登录拦截、`redirect` 回跳，以及已登录访问登录页的反向重定向。

**何时用**：要改「哪些页面必须登录」「登录策略是黑名单还是白名单」「点未登录按钮时跳登录页」时用它。要在运行时**读取**当前页面路径做高亮 / 埋点 / 比对，用 **4.1 `route`**（`getCurrentPath` / `cleanPath` / `isSamePath`），**不要碰 5.3**；取多语言文案用 **4.4 `i18n`**，本模块里没有翻译函数。

> 📌 **导入写法**：本目录 4 个消费方（`main.uts`、`App.uvue`、`src/http/request.uts`、`src/pages/me/views/MeView.uvue`）**全部绕过 `index.uts` 直接引用具体文件**，且都写**无扩展名**。`src/router/index.uts` 那个 barrel 目前是**死代码**（因此也没有对应的 `.d.uts.ts`，见文件头通用约定第 3 条）。**推荐照仓库现状从具体文件导入**。

| API | 所在文件 | 签名 | 说明 |
| :--- | :--- | :--- | :--- |
| `LOGIN_STRATEGY_MAP` | `config.uts` | `{ DEFAULT_NO_NEED_LOGIN: 0, DEFAULT_NEED_LOGIN: 1 }` | 策略枚举常量（黑名单 / 白名单） |
| `LOGIN_STRATEGY` | `config.uts` | `number` | 当前全局策略，默认 `DEFAULT_NO_NEED_LOGIN`（黑名单） |
| `isNeedLoginMode` | `config.uts` | `boolean` | 由 `LOGIN_STRATEGY == DEFAULT_NEED_LOGIN` 派生；当前为 `false` |
| `LOGIN_PAGE` | `config.uts` | `string` | 登录页绝对路径 `'/src/sub/auth/login'` |
| `REGISTER_PAGE` | `config.uts` | `string` | 注册页绝对路径 `'/src/sub/auth/register'` |
| `LOGIN_PAGE_LIST` | `config.uts` | `string[]` | `[LOGIN_PAGE, REGISTER_PAGE]` |
| `EXCLUDE_LOGIN_PATH_LIST` | `config.uts` | `string[]` | 登录名单，语义**随策略翻转**（见下） |
| `UrlObj`（type） | `interceptor.uts` | `{ path: string; query: Map<string, string> }` | URL 解析结果结构 |
| `parseUrlToObj` | `interceptor.uts` | `(url: string): UrlObj` | 把 `"/a/b?x=1&y=2"` 拆成 path 与 query Map |
| `judgeIsExcludePath` | `interceptor.uts` | `(path: string): boolean` | 归一化 `src/` 前缀后，判断是否命中名单 |
| `navigateToInterceptor` / `redirectToInterceptor` / `reLaunchInterceptor` / `switchTabInterceptor` / `chooseLocationInterceptor` | `interceptor.uts` | `Interceptor` | 五个拦截器对象（`chooseLocation` 是**恒放行**占位） |
| `Interceptor`（type） | `interceptor.uts` | `{ invoke: (options: any) => boolean; success?; fail?; complete? }` | ⚠️ 整个类型被 `// #ifndef APP` 包裹，**APP 端不存在** |
| `installRouteInterceptor` | `interceptor.uts` | `(): void` | 一次性把上述 5 个拦截器挂到对应 API 上 |
| `checkDirectEntry` | `interceptor.uts` | `(options: UTSJSONObject \| null): void` | 直链 / 分享进入时补齐登录校验 |
| `toLoginPage` | `toLoginPage.uts` | `(options: UTSJSONObject \| null = null): void` | 带 1000ms 节流与「当前页已是登录页」判重的跳登录页 |

```uts
// ① 入口注册：main.uts 的 createApp() 内已调过一次，业务代码不要重复调用
import { installRouteInterceptor } from '@/src/router/interceptor'

// ② 业务里真正会用的：读配置常量 + 主动跳登录页
import { LOGIN_PAGE, EXCLUDE_LOGIN_PATH_LIST, judgeIsExcludePath } from '@/src/router/config'
import { toLoginPage } from '@/src/router/toLoginPage'

// 未登录时跳登录页（1000ms 内重复调用会被丢弃；当前页已是登录页则直接 return）
// ⚠️ 入参是 UTSJSONObject，调用点必须显式 as UTSJSONObject
toLoginPage({ mode: 'reLaunch' } as UTSJSONObject)

// 带 redirect 参数跳（queryString 原样拼在 LOGIN_PAGE 后面，调用方自己负责 encode）
toLoginPage({
  mode: 'navigateTo',
  queryString: '?redirect=' + encodeURIComponent('/src/pages/me/me?tab=2')
} as UTSJSONObject)

// ③ 想把某页纳入「必须登录」（当前黑名单模式）：只改 config.uts 一个数组
console.log(LOGIN_PAGE, judgeIsExcludePath('/src/sub/test/test'))  // '/src/sub/auth/login' true

// ④ 切成白名单模式：把 config.uts 的 LOGIN_STRATEGY 改成 LOGIN_STRATEGY_MAP.DEFAULT_NEED_LOGIN
//    ⚠️ EXCLUDE_LOGIN_PATH_LIST 的含义会跟着翻转，原来「必须登录」的列表要清空重写

// ⑤ 直链 / 分享链接进入时补权限校验（App.uvue 的 onShow 里已按 #ifndef APP 接好）
import { checkDirectEntry } from '@/src/router/interceptor'
onShow((options?) => {
  // #ifndef APP
  checkDirectEntry(options);
  // #endif
});
```

**使用注意**：

- **注册时机已固定**：`installRouteInterceptor()` 在 `main.uts` 的 `createApp()` 内、`createSSRApp(App)` 之前调用。`uni.addInterceptor` 是**追加**语义而非覆盖，重复调用会给同一个 API 叠多个拦截器——**不要在其他地方再调一次**。
- **拦截范围与返回值**：只挂了 `navigateTo` / `reLaunch` / `redirectTo` / `switchTab` / `chooseLocation` 五个；`navigateBack` **不受任何拦截**。⚠️ **`invoke` 只有显式返回 `false` 才取消本次跳转**，返回 `true` 放行，**返回 `undefined` / 不写 `return` 一律视为放行**——「我加了拦截器怎么没拦住」十有八九是没写 `return false`。
- **每个跳转 API 一个独立拦截器对象，是刻意设计**：源码注释写明，为了让 App（Android / Kotlin）原生端能把 `options` 强转成对应的 `NavigateToOptions` / `RedirectToOptions` / `ReLaunchOptions` / `SwitchTabOptions`；非 APP 端则统一退化成 `UTSJSONObject` + `url as string` 兜底。源码里是 `// #ifdef APP` / `// #ifndef APP` 成对双写。**不要为了「优雅」把 5 个拦截器合并成一个**。
- ⚠️ **`Interceptor` 类型在 APP 端不存在**（被 `// #ifndef APP` 包裹），但 5 个拦截器常量都标注了它——跨端共享代码里 `import type { Interceptor }` 会在 APP 编译期炸掉，**只能在 `#ifndef APP` 分支内引用**。对照：同文件的 `type UrlObj` 没有条件编译，全端可用。**条件编译里不能放会被其他分支引用的类型定义**。
- **登录态判定**：`doIntercept` 内部读 `useTokenStore().hasValidLogin()`（等价 `hasLoginInfo() && isTokenValid()`）。token 为空**或已过期**都算未登录——所以「有 token 但过期」也会被拦住并重定向。
- **未登录重定向的完整链路**：`doIntercept` 把「归一化后的 path + 原始 query」拼成 `fullPath`，再以 `LOGIN_PAGE?redirect=<encodeURIComponent(fullPath)>` 跳转。接收端在 `src/sub/auth/login.uvue` 的 `onLoad` 里取 `options['redirect']`，登录成功后 `decodeURIComponent` 还原，再判断 `isPageTabbar(targetUrl)` 决定走 `switchTabbar(targetUrl)` 还是 `uni.redirectTo`。**改登录页路径时 `LOGIN_PAGE`、`pages.json` 分包配置、登录页自身三处必须同步。**
- **已登录还去访问登录页**：会被反向重定向到 `query.redirect`，没有就是兜底 `/src/pages/index/index`；目标若是 tabbar 页走 `switchTabbar`（来自 `@/src/tabbar/index.uts`），否则 `uni.navigateTo`。这条分支就是为了防止「登录成功后又回到登录页」的死循环。
- ⚠️ **`EXCLUDE_LOGIN_PATH_LIST` 一个数组两套含义**：黑名单模式下它是「必须登录」，白名单模式下它是「免登录放行」。切 `LOGIN_STRATEGY` 时**必须同时重写这个数组**，否则静默拦成反的。当前数组只有一条 `'/src/sub/test/test'`，源码注释标了 `// 示例值`。
- **匹配是精确数组元素相等**（`EXCLUDE_LOGIN_PATH_LIST.includes(normalizedPath)`），**不是前缀 / 后缀匹配**——这点与 4.1 `isSamePath` 的 `endsWith` 语义**完全不同，别混用**。列表里写**绝对路径、不要带 query**（url 上的 query 已先被 `parseUrlToObj` 剥掉）。
- ⚠️ **相对路径会按当前页目录解析**：不以 `/`、`plugin://`、`http://`、`https://` 开头的 url，会取 `getCurrentPages()` 栈顶页面的目录作基准拼成绝对路径再判定。同一句 `navigateTo({ url: 'detail' })` 从不同页面发起会落到不同地址、拦截结果也可能不同——**跨页跳转一律写全绝对路径 `/src/sub/...`**。
- **`toLoginPage` 的两道保护**：模块级 `lastRedirectTime` 做 **1000ms 节流**（并发请求同时收到 401 时只打开一个登录页），并用 4.1 的 `getCurrentPath()` 判断当前页是否已是登录页来避免重复打开自身。`mode` 默认 `'navigateTo'`，只有传 `'reLaunch'` 才走 `uni.reLaunch`。
- **`checkDirectEntry` 在 APP 端不执行**：`App.uvue` 的 `onShow` 里调用点被 `// #ifndef APP` 包住。它读 `options.path` 拼成 `/${path}` 后**手动调** `navigateToInterceptor.invoke({ url } as any)`；H5 分支还会额外读 `window.location.hash` 覆盖 url。它是「直链绕过拦截器」这一漏洞的补丁，**新增直链入口时别忘了对应分支**。
- ⚠️ **`toLoginPage` 的 `export default` 被 `index.uts` 的 `export *` 吃掉了**：`export *` **不转发 default 导出**，所以 `import toLoginPage from '@/src/router/index.uts'` 取不到，必须具名导入或从 `toLoginPage.uts` 直接导。全项目零处使用这个 default，属纯陷阱。**做 barrel 文件时，被聚合模块对外一律只提供具名导出。**
- 本模块**全同步、无生命周期要求、没有 vapor/vdom 分支**——三个文件里没有任何 `#ifdef VUE3-VAPOR`。

---

## 5.4 页面布局（layouts）

**一句话定位**：`src/layouts/` 下三个布局组件（`navbar` / `default` / `empty`）由 `plugins/uni-layouts-plugin.ts` 在编译时**自动包裹页面 `<template>` 根**——你在页面里永远不手写布局组件，只在 `definePage` 里写一个 `layout: 'xxx'`，插件负责 import、包裹，并把 `definePage` 的所有字段当 props 注入。

**何时用**：每个新建页面都必须选一次 `layout`。项目里 **18 个页面全部使用 `layout: 'navbar'`**（含 4 个 TabBar 页与全部子包页），这是**默认且唯一被验证过的选择**。骨架写法本身见 **2.1**（标准二级页）、**2.2**（TabBar 页）、**2.3**（二级页）、**2.4**（整页自然滚动）。

**三种布局对比**

| layout | 文件 | 结构特征 | 适用页面 |
| :--- | :--- | :--- | :--- |
| `navbar` | `src/layouts/navbar.uvue` | 根 `view.navbar-layout flex-1 flex flex-col` → 顶部 `<NavBar>`（**`v-if="isCustomNav"`，即必须 `style.navigationStyle: 'custom'` 才渲染**）→ 下方 `scroll-view.flex-1` 滚动容器。自带状态栏占位、导航栏、返回箭头、下拉刷新 | **首选**。TabBar 页、二级页、子包页，即一切需要自定义顶栏的页面 |
| `default` | `src/layouts/default.uvue` | 根 `view.navbar-layout flex-1 flex flex-col` + 一个 `scroll-view.flex-1`。**无 NavBar、无状态栏占位**（顶栏交给系统原生）；不写 `layout` 字段时的兜底布局 | 想用系统原生导航栏、页面只需一个滚动容器。**当前仓库无页面使用** |
| `empty` | `src/layouts/empty.uvue` | 根 `view.empty-layout flex flex-col` + 裸 `<slot />`。**无滚动容器、无顶栏、无状态栏，且没有 `flex-1`**（不撑满高度） | 页面自带完整骨架与滚动、不需要框架干预 |
| `false` | —— | 插件**完全不包裹**，**连 `empty` 那层根 view 都没有**，页面模板就是最终根 | 需要彻底摆脱 layout 包裹的特殊页 |

**能力差异速查**

| 能力 | `navbar` | `default` | `empty` / `false` |
| :--- | :--- | :--- | :--- |
| 状态栏占位 | ✅ 由 `NavBar` 的 `.status-bar` 提供，高度取 `safeAreaInsets.top`，兜底 `systemInfo.statusBarHeight` | ❌ | ❌ |
| 导航栏 / 返回箭头 | ✅ `<NavBar>` | ❌（系统原生） | ❌ |
| 自带滚动容器 | ✅ `scroll-view` `flex-1` | ✅ `scroll-view` `flex-1` | ❌ |
| 内容区撑满 | ✅ 根 `flex-1` | ✅ 根 `flex-1` | ❌ 根只有 `flex flex-col` |
| 派发 [4.7](../references/4-utils.md) 的滚动 / 触底 / 下拉事件 | ✅ 全部 3 个 | ✅ **同样全部 3 个**（`default.uvue` L222/L254/L263） | ❌ 完全没有 |
| 受 4.7 的 `set*` / `reset*` 广播控制 | ✅ 监听全部 9 个 | ⚠️ **只监听 `stopPagePullDownRefresh`**，其余 `set*` 是无声空操作 | ❌ |
| 消费 `definePage` 顶栏字段 | `showBack` / `hideNavbar` / `title` / `hideStatusBar` 等**全部生效** | **全部不生效**（props 有声明但源码从未读取） | **全部不生效** |

**definePage 配置**

插件把 `definePage` 里除 `layout` 外的**所有键**（以及 `pages.json` 同名字段）转成 props 注入布局组件，并做三个静默重命名：`class` → `custom-page-class`、`customStyle` → `custom-page-style`、`style` → `page-style`。其余键按 kebab-case 传。

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `layout` | `'navbar' \| 'default' \| 'empty' \| string \| false` | 选布局。**不写时兜底 `'default'`**；写 `false` 或 `'false'` 时完全不包裹。自定义名对应 `src/layouts/[name].uvue` |
| `type` | `'home' \| string` | `'home'` 标记全局首页（自动排 `pages[0]`）；`navbar` 内还用它给**单页 TabBar 模式**取标题。**仅首页填** |
| `title` | `string` | 页面标题简写，`navbar` 中作为标题的**最低优先级兜底** |
| `showBack` | `boolean`，默认 `true` | 是否显示返回箭头。**TabBar 页与首页必须显式写 `false`** |
| `hideNavbar` / `hideNavBar` | `boolean`，默认 `false` | 隐藏导航栏；`navbar` 中参与 `isNavbarVisible` 判定 |
| `showNavbar` / `showNavBar` | `boolean`，默认 `true` | 显示导航栏，与上者任一为「隐藏」即隐藏 |
| `hideStatusBar` | `boolean`，默认 `false` | 隐藏**状态栏占位高度**（实现完全沉浸全屏）。⚠️ **仅 `navbar` 声明并消费**，写到 `default` / `empty` 上是无效字段 |
| `enablePullDownRefresh` | `boolean`，默认 `false` | **顶层字段**，`navbar` 与 `default` 均消费 → 由布局内 `scroll-view` 驱动自定义下拉刷新（见 2.2）。**必须写在顶层，不要写进 `style`** |
| `style` | `object` | 整体作为 `page-style` 注入。`navbar` 实际读取 `navigationStyle`、`navigationBarTitleText`、`navigationBarBackgroundColor`、`navigationBarTextStyle`、`enablePullDownRefresh` |
| `style.navigationStyle` | `'default' \| 'custom'` | ⚠️ **`navbar` 布局下必须写 `'custom'`，否则 `<NavBar>` 不渲染**，详见下方红线 |
| `style.navigationBarTitleText` | `string` | 标题，优先级高于 `title` |
| `style.navigationBarBackgroundColor` | `string` | 导航栏背景色，优先于 `navigationBarBackgroundColor` / `bgColor` |
| `style.navigationBarTextStyle` | `string` | 标题与返回箭头颜色，优先于 `navigationBarTextStyle` / `titleColor` |
| `style.enablePullDownRefresh` | `boolean` | 开启**原生**下拉刷新。⚠️ **原生优先**：一旦为 `true`，布局内自定义下拉被强制关闭。**本仓库未使用此写法** |
| `customPageClass` / `class` / `customClass` / `layoutClass` | `string` | 依次追加到布局根容器的 class 上。推荐全局原子类，如 `'init-page'` |
| `customPageStyle` / `customStyle` / `layoutStyle` | `string` | 依次以 `;` 拼接成根容器行内样式，**穿透样式隔离、全端绝对生效** |
| `debug` / `debugHome` | `boolean`，默认 `false` | 沙盒独立调试：只编译当前页以加速构建；`debugHome` 把它设为启动首页（全局仅允许 1 个）。⚠️ **调试完必须改回 `false`** |
| `needLogin` | `boolean` | 登录拦截标记（类型已声明） |

```uts
<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',                 // 👈 选布局：'navbar' | 'default' | 'empty' | false
  type: 'home',                     // 仅全局首页填；单页 TabBar 模式靠它取 Tab 标题
  showBack: false,                  // TabBar 首页不显示返回箭头（二级页写 true）
  hideStatusBar: false,             // 状态栏占位：false 正常占位，true 完全沉浸（仅 navbar 生效）
  hideNavbar: false,                // 隐藏顶部导航栏
  enablePullDownRefresh: true,      // 顶层字段：开启布局内自定义下拉刷新
  customPageClass: 'init-page',                     // 追加到布局根容器的类名
  customPageStyle: 'background-color: transparent;',// 根容器行内样式，穿透样式隔离
  debug: false,                     // 沙盒独立调试，调试完必须改回 false
  debugHome: false,                 // 沙盒调试时是否为启动首页，全局仅 1 个
  style: {
    navigationBarTitleText: '首页',  // 标题
    navigationStyle: 'custom',       // ⚠️ navbar 布局必须写，否则不渲染 NavBar
  },
});

// 下拉刷新收尾：数据加载完必须手动停止动画（详见 4.7）
onNavbarPullDownRefresh(() => {
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 1000);
});
</script>
```

**使用注意**：

- ⚠️ **`layout: 'navbar'` 必须同时写 `style.navigationStyle: 'custom'`**。`navbar.uvue` 里是 `<NavBar v-if="isCustomNav">`，而 `isCustomNav` 只认 `pageStyle.navigationStyle == 'custom'`；**漏写时导航栏、返回箭头、状态栏占位全部静默消失**，页面看起来只剩一个滚动容器，**且不报任何错**。仓库内 18 个 navbar 页面无一例外都写了 `'custom'`。**这是全项目最容易踩的坑——请当作硬性必需项，而非惯例。**
- ⚠️ **`navbar` 布局下不要用 `<scroll-view>` 当页面根**，会与外层滚动容器形成双重滚动与手势冲突——滚动交给布局，要局部滚动就在根 `view` 内部自写（完整骨架见 **2.1**）。
- ⚠️ **`layout: 'navbar'` 时原生 `onPageScroll` / `onReachBottom` 收不到事件**，必须改用 `onNavbarPageScroll` / `onNavbarReachBottom`（见 **2.4** 与 **4.7**）。`default` 布局**也能收到**这三个事件，但**不监听任何 `set*` 广播**，所以 `setNavbarTitle` / `setHideNavbar` / `setStatusBarVisible` 在 `default` 页上是无声空操作；`empty` / `false` 则连滚动与触底事件都没有。
- ⚠️ **`enablePullDownRefresh` 有两个位置、语义不同**：顶层（**推荐**，驱动布局内 `scroll-view` 自定义下拉）与 `style.enablePullDownRefresh`（原生下拉，**一旦为 `true` 会强制关掉自定义下拉**）。**本仓库统一只用顶层写法。**
- ⚠️ **布局 props 不是运行时响应式的**：`hideNavbar` / `title` / `hideStatusBar` 只在渲染时读一次——**`definePage` 是编译期数据，不是响应式状态**。运行时要改标题、显隐导航栏或状态栏，统一走 4.7 的 `set*` 广播方法，**不要试图去改 `definePage` 或 props**。`navbar` 监听的全部 9 个 `set*` / `reset*` 方法清单与签名见 **4.7 的 API 表**；其中最常打交道的三个是 `setNavbarTitle(title)`、`setHideNavbar(hide)`、`setHideStatusBar(hide)`（以及成对反向语义的 `setNavbarVisible(visible)` / `setStatusBarVisible(visible)`，见 4.7 的「参数语义方向相反」条）。
- ⚠️ **`showBack` 默认 `true`**：TabBar 页与首页必须显式写 `false`，否则导航栏左下角多出一个返回箭头（二级页保持默认或写 `true`，见 **2.3**）。
- ⚠️ **`hideStatusBar` 仅对 `navbar` 布局有效**。`default.uvue` / `empty.uvue` 的 props 里根本没有这个字段，写在它们上面不会有任何效果，**也不报错**。
- ⚠️ **`layout: 'empty'` 与 `layout: false` 不等价**：前者仍渲染一层 `view.empty-layout flex flex-col` 根容器（可继续用 `customPageClass` / `customPageStyle` 定制）；后者插件直接不包裹。二者**都没有 `flex-1`**，页面要撑满需自己写；也都没有滚动容器。
- **`default` 与 `navbar` 共用同一个根类名 `navbar-layout`**（`navbar.uvue:190`、`default.uvue:171`，两处 `<style>` 均为空）。自定义 `.navbar-layout` 样式会**同时命中两者**，属潜在污染点。
- ⚠️ **`debug` / `debugHome` 是编译期沙盒开关，忘记关会导致线上包只剩一个页面**——属构建产物层面的严重事故，`DefinePageOptions` 类型注释里已用 ⚠️ 标注两次。
- **`navbar` 布局通过 `defineExpose` 暴露了 `setNavbarTitle` / `resetNavbarTitle` / `setTitle`**，但插件生成的包裹模板没有挂 ref，页面拿不到这个实例——**改标题请走 4.7 的 `setNavbarTitle`**。
- **三个布局均无 `#ifdef` 条件编译、无 Vapor / VDOM 分流**，行为全端一致；差异只体现在是否配置了 `navigationStyle: 'custom'`。
- ⚠️ **布局 / 页面内自定义函数一律加业务前缀，且严格声明在使用点之前**：UTS 中 `<script setup>` 内的 `function` 是「声明点之后才可见」的局部量，且**会被同名包级导出函数悄悄接管**（`navbar.uvue:313-318` 的作者注释记录了实测：与 `utils/refresh/index.uts` 的包级 `setNavbarTitle` 同名时，布局内局部函数被接管，导致**事件自触发死循环**）。与 **1.3.x 的同名冲突**条目相关。

---

## 5.5 国际化配置（i18n）

**一句话定位**：`src/i18n/` 是语言包的**组织与装配层**——把 `locales/*.json` 通过 `lime-i18n` 的 `createI18n` 组装成全局插件实例，并决定默认语言与回退语言。

**何时用**：新增 / 修改文案 key、新增一种语言、调整默认或回退语言时改这里。**日常在页面里取文案不要碰本模块**，走 **4.4 `i18n`**（`$t` / `t` / `getI18nText`）——本模块只 `export default`，且类型是 `any`。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `i18n`（**唯一 default 导出**） | `UvueI18n` | `createI18n` 返回的实例，`main.uts` 里 `app.use(i18n)` 注册 |
| `i18n.global.locale`（成员） | `ComputedRef<string>`，可写 | 当前语言，赋值即切换 |
| `i18n.global.t`（成员） | `(key: string, named?: any): string` | 底层翻译；**4.4 的 `t` / `$t` 就是对它的包装**，业务别直接用 |
| `i18n.availableLocales`（成员） | `string[]` | 当前 `messages` 的键排序后的可用语言列表 |
| `createI18n` 的 `locale` | `string` | 默认语言，本项目传 `getDefaultLocale()` |
| `createI18n` 的 `fallbackLocale` | `string` | 回退语言，本项目**固定 `'en-US'`** |
| `createI18n` 的 `messages` | `UTSJSONObject` | 语言包集合，键为 locale 字符串 |
| `zh-CN.json` / `en-US.json` | JSON | `src/i18n/locales/` 下，顶层 4 个命名空间：`message` / `tabbar` / `basic` / `function` |

```uts
// ① 正常业务代码不要 import i18n 本身（类型是 any），取文案走 4.4：
import { $t } from '@/src/utils/i18n/index.uts'
const title = $t('basic.langTitle')                     // '语言设置'
const hello = $t('message.hello', { msg: 'hi' })        // 'hi，世界！'（命名插值）

// ② 切语言走 store，不要直接操作 i18n 实例
import { useAppStore } from '@/src/store'
useAppStore().setLocale('en-US')
// 切完必须再调 4.4 的 setTabbarItem() 才刷新原生 TabBar 文案（见 LangSwitchCard.uvue）

// ③ 新增一个 key —— 改两个 JSON，路径与 key 必须完全一致
//    src/i18n/locales/zh-CN.json:  "me": { "logout": "退出登录" }
//    src/i18n/locales/en-US.json:  "me": { "logout": "Log out" }
//    页面里：$t('me.logout')

// ④ 新增一种语言（ja-JP）—— 四步，缺一不可
// 4-1 新建 src/i18n/locales/ja-JP.json，结构与 zh-CN.json 完全对齐
// 4-2 改 src/i18n/index.uts 的 import 与 messages：'ja-JP': jaJP as UTSJSONObject
// 4-3 想被系统语言自动选中：改 src/utils/env/index.uts 的 getDefaultLocale() 加分支
// 4-4 有切换 UI 的话：src/pages/basic/components/LangSwitchCard.uvue 的 languageOptions 加一项
```

**使用注意**：

- **默认语言来源**：`locale: getDefaultLocale()`（**4.3 `env`**）。优先级是 `import.meta.env.VITE_DEFAULT_LOCALE` → 系统语言 `uni.getSystemInfoSync().appLanguage`（含 `zh` → `zh-CN`，含 `en` → `en-US`）→ 兜底 `'zh-CN'`。**要改默认语言，改 `.env.*` 的 `VITE_DEFAULT_LOCALE` 或改 `getDefaultLocale()`，不要在这里写死字符串。**
- ⚠️ **`fallbackLocale` 固定 `'en-US'`**：只存在于 `zh-CN.json` 的 key，在英文包里缺失时会**静默显示英文**，而不是报错或回退成 key。两边都缺时，4.4 的 `t` / `$t` 才兜底返回 key 本身。**新增 key 必须两个语言包同时加。**
- **`messages` 的键、JSON 文件名、`setLocale()` 的入参三者是同一个字符串**（`'zh-CN'` / `'en-US'`），改一处就要三处同步。lime-i18n 内部直接拿这个值去 `messages` 里查，对不上就是空字典。
- ⚠️ **`i18n` 的 TS 类型是 `any`**：`src/i18n/index.d.uts.ts` 只声明了 `declare const i18n: any; export default i18n;`。所以 `i18n.global.locale` 之类成员**没有任何补全**——这也是 **4.4 明确要求「优先走 `@/src/utils/i18n/index.uts`」**的原因。改了 `src/i18n/index.uts` 的导出面后要重跑 `pnpm gen:uts-dts`（校验用 `pnpm check:uts-dts`）；**增删语言包不改导出面，无需重跑**。
- **key 是嵌套 JSON 的点分路径**，顶层是命名空间。现有 4 个：`message`（零散文案）、`tabbar`（原生 TabBar 五项）、`basic`（基础示例页）、`function`（功能示例页）。**新增页面请开新的顶层命名空间**（如 `me`），别往 `message` 里堆。
- **命名插值**用 `{xxx}` 占位：`"hello": "{msg}，世界！"` → `$t('message.hello', { msg: 'hi' })`。两个语言包里**占位符名字必须一致**，否则另一边不会被替换。JSON 里**不能有注释、不能有尾逗号**（与 `.uts` 不同，这里没有编译期容错）。
- ⚠️ **切语言的落点不在本模块**：走 `appStore.setLocale(lang)`（`src/store/vdom/app.uts` 与 `src/store/vapor/app.ts` 各一份实现，都写同一个 `i18n.global.locale.value`），store 开了 `persist: true` 持久化；lime-i18n 自身还会在 locale 被赋值时 `uni.setStorageSync('uVueI18nLocale', val)`。**vapor / vdom 有差异**：vapor 侧多一层 `if (i18n?.global?.locale != null)` 空判断，vdom 侧直接赋值。**这是本分册唯一的 vapor/vdom 分流点。**
- **切完必须再调 4.4 的 `setTabbarItem()`** 才会刷新原生 TabBar 文案，参考 `src/pages/basic/components/LangSwitchCard.uvue` 的 `switchLanguage()`（`setLocale` → `setTabbarItem()` → `toast`）；当前页导航栏标题同理走 4.7 的 `setNavigationBarTitle()`。
- ⚠️ **`createI18n` 是全局单例**：lime-i18n 内部用模块级变量保存实例，再调一次会**覆盖**它。全项目只应在 `src/i18n/index.uts` 里调一次。
- ⚠️ **lime-i18n 自己也会挂 `switchTab` 拦截器**：composer 初始化全局实例时会 `uni.addInterceptor('switchTab', interceptor)`，用途是切 tab 后（`complete` + 50ms 延时）刷 tabbar 文案。所以 **`switchTab` 上同时存在 lime-i18n 和 5.3 的 `switchTabInterceptor` 两个拦截器**。前者只实现 `complete`、不返回 `false`，不影响 5.3 的拦截结果，但调试 `switchTab` 被拦时要知道有两个订阅者。
- **lime-i18n 还支持本项目未启用的选项**：`numberFormats` / `datetimeFormats` / `tabBars` / `inheritLocale` / `formatter`。其中 **`tabBars` 是内建的 TabBar 多语言方案**（配了之后语言变化时自动 `setTabBarItems`），本项目**没用**，走的是 4.4 的 `setTabbarItem()` 手动刷新。**两套不要同时上**，否则 tabbar 文案会被写两遍。
- ⚠️ **语言包覆盖是部分的**：现有 key 只覆盖 `basic` / `function` / `message` / `tabbar` 四个命名空间。登录页 `src/sub/auth/login.uvue`、`RouterDemoCard.uvue` 等**仍写死中文，切英文不会变**。新增页面要接入多语言，得自己往两个语言包里加 key。
- **`createI18n` / `useI18n` 只在 `#ifdef UNI-APP-X` 下导出**（`uni_modules/lime-i18n/index.uts` 的 `#ifndef UNI-APP-X` 分支是空的）——非 uni-app X 目标里 import 会拿不到符号。
