# src/http 网络通信层

全项目**唯一的网络出口**。单例客户端、鉴权注入、401 静默刷新与重放、错误归一、并发去重、TTL 缓存、上传下载、流式（SSE）分块接收、组合式请求状态机，全部收在这里。

> 🚨 **业务与页面一律不直接调 `uni.request` / `uni.uploadFile` / `uni.downloadFile`**。绕过这一层，等于把鉴权、业务码判定、401 清 token 跳登录、错误提示、取消与去重全部重写一遍，且必然漏掉其中一项。

---

## 目录结构

```text
src/http/
├── index.uts                     # 门面：re-export 下面四块（业务侧 import 入口）
├── request/
│   ├── request.uts               # ✅ 业务入口：http 单例、API_DOMAINS、默认拦截器、具名包装
│   └── internal/
│       ├── client.uts            # HttpClient 核心调度引擎（钩子链 / 取消 / 去重 / TTL 缓存 / 401 重放 / stream）
│       ├── lifecycle.uts         # RequestLifecycle：取消登记 + 并发去重 + TTL 缓存 + 请求指纹
│       ├── refresh.uts           # accessToken 静默刷新（单飞，并发 401 只打一次刷新接口）
│       └── enum.uts              # ResultEnum / ContentTypeEnum / ShowMessage
├── hooks/
│   └── useRequest.uts            # 组合式请求状态机（data / loading / error / 重试 / 防抖 / 轮询）
├── stream/
│   └── stream.uts                # requestStream(Observable) / Utf8StreamDecoder / simulateStream
└── error/
    └── error.uts                 # 错误归一：AppErrorInfo / BusinessError / HttpError / resolveErrorMessage
```

| 文件 | 你要动的场景 |
| :--- | :--- |
| `request/request.uts` | 改超时 / 默认 header / 拦截器行为 / 域名表 / 加具名包装函数 |
| `request/internal/client.uts` | 改调度内核（钩子顺序、取消、去重、缓存、401 重放） |
| `hooks/useRequest.uts` | 加 hook 能力（新配置项、新状态） |
| `stream/stream.uts` | 加流式解析能力（新的分帧协议、新的解码器） |
| `error/error.uts` | 加错误分类或改统一文案 |

**写模块路径**：模块内互相引用用相对路径（`../error/error.uts`）；模块外一律 `@/src/...` 别名，且**优先精准导入具体实现文件**（如 `@/src/http/hooks/useRequest.uts`），不要穿越 `index.uts` 门面（分册 1 的 1.22，红线 36 —— 门面互引会在 Android 原生端造成类静态初始化死循环与 NPE）。

---

## 快速上手

### 1. 发请求（api 层的标准写法）

```uts
// src/api/<page>/<page>.uts
import { http } from '@/src/http/index.uts';
import type { LimeRequestConfig } from '@/uni_modules/lime-request';

/**
 * 分页拉取列表
 * @param pageNo 页码，从 1 开始计数
 * @param pageSize 单页条数，默认 10（一屏）
 * @param keyword 搜索关键词，空串表示不按关键词过滤
 */
export function fetchFooList(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<PageResult<FooItem>> {
  return http.get<UTSJSONObject>('/foo/list', {
    params: { pageNo, pageSize, keyword } as UTSJSONObject
  } as LimeRequestConfig).then((data: UTSJSONObject): PageResult<FooItem> => {
    // ⚠️ getNumber / getString 返回的是可空类型，`??` 兜底不可省，
    //    否则赋给非空字段会被 Kotlin 以 error17「参数类型不匹配」拒绝
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    return {
      list: rawList.map((item: UTSJSONObject): FooItem => {
        return {
          id: item.getNumber('id') ?? 0,
          name: item.getString('name') ?? ''
        } as FooItem;
      }),
      hasMore: data.getBoolean('hasMore') ?? false,
      total: data.getNumber('total') ?? 0
    } as PageResult<FooItem>;
  });
}
```

三个必须知道的点：

1. **返回值已经解包**。`http.get<T>` 内部把响应体的 `{ code, data, message }` 拆开了，`then` 拿到的就是 `data` 本身 —— 所以 `T` 只标注**业务数据**的类型（`http.get<UTSJSONObject>`），**别再写成 `IResponse<T>`**。
2. **`http.post<T>(url, data, config)`**：请求体走第二参；`put` / `delete` 签名相同。
3. **页面侧用双参 `.then(ok, err)` 收尾，不要写链式 `.catch()`** —— 后者在 Kotlin 端报 `error25` 重载不可解析（分册 1 的 1.21）。关 `loading` 放 `finally`。

| 方法 | 签名 |
| :--- | :--- |
| `http.request<T>` | `(config: LimeRequestConfig)` —— 需要完全手写配置时才用 |
| `http.get<T>` | `(url: string, config?: LimeRequestConfig \| null)` —— 查询参数放 `config.params` |
| `http.post<T>` / `put<T>` / `delete<T>` | `(url: string, data?: any \| null, config?)` |
| `http.upload<T>` | `(url: string, config)` —— `T` 无法从入参推断，**必须显式标注** |
| `http.downloadFile` | `(url: string, config?) => Promise<DownloadResult>` |
| `http.stream` | `(config, onChunk, onEnd) => StreamTask` —— 方法固定 POST |

### 2. 文件上传

```uts
import { http } from '@/src/http/index.uts';
import type { LimeRequestConfig } from '@/uni_modules/lime-request';

/**
 * 上传单个文件到 OSS
 * @param filePath 本地文件路径（App 端为 `file://` 绝对路径，H5 为相对路径）
 * @returns OSS 上的可访问地址
 */
export function uploadFooFile(filePath: string): Promise<string> {
  return http.upload<string>(FOO_UPLOAD_PATH, {
    filePath,
    name: 'file' // 后端接收的字段名，缺失会被底层直接报参数缺失
  } as LimeRequestConfig);
}
```

- 走底层 `UPLOAD` 分支，**自动携带 token**；
- 地址从 `getOssUploadPath()` / `getOssUploadUrl()`（`@/src/config`）读，严禁硬编码；
- 页面里**不要**自己拼 `uni.chooseImage` + `uni.uploadFile`，在 api 层包一个语义化函数再暴露；
- 需要进度时在 `config.getTask` 里拿 `UploadTask` 监听（照抄 `src/api/example.uts` 的 `uploadFooFile`）。

### 3. 文件下载（带进度）

```uts
import { http } from '@/src/http/index.uts';
import type { DownloadResult } from '@/src/http/index.uts';
import type { LimeRequestConfig, LimeRequestTask } from '@/uni_modules/lime-request';

/**
 * 下载文件到临时目录
 * @param url 下载地址：支持完整 `http(s)://` 地址，相对路径会与 baseURL 拼接
 * @param onProgress 进度回调（0~100），不需要进度时传 null
 */
export function downloadFooFile(
  url: string,
  onProgress: ((progress: number) => void) | null = null
): Promise<DownloadResult> {
  // 先把可空参数落到局部常量：嵌套 lambda 内直接对可空参数做智能转换在原生端不可靠
  const progressCallback = onProgress;
  return http.downloadFile(url, {
    getTask: (task: LimeRequestTask): void => {
      const downloadTask = task as DownloadTask; // 仅 DOWNLOAD 任务具备进度监听能力
      if (progressCallback != null) {
        downloadTask.onProgressUpdate((res: OnProgressDownloadResult): void => {
          progressCallback(res.progress);
        });
      }
    }
  } as LimeRequestConfig);
}
```

`DownloadResult` = `{ tempFilePath: string, statusCode: number }` —— 拿到的是**临时文件路径**，需要持久化时自行 `uni.saveFile`。

### 4. 流式（SSE / NDJSON）

```uts
import { onUnmounted } from 'vue';
import { requestStream, simulateStream } from '@/src/http/stream/stream.uts';
import type { StreamChunk } from '@/src/http/stream/stream.uts';
import { scan } from '@/src/utils/rxjs-lite/index.uts';

// 相对路径自动拼 baseURL，token 由默认前置钩子注入
const source = requestStream('/api/v1/chat/stream', body, null, 60000);
const sub = source
  .pipe(scan((acc: string, chunk: StreamChunk): string => acc + chunk.text, ''))
  .subscribe((full: string): void => {
    content.value = full;
  }, (err: any): void => {
    console.error(err);
  });

// 卸载时务必退订，否则流还在收、页面已经没了
onUnmounted(() => { sub.unsubscribe(); });
```

| 导出 | 用途 |
| :--- | :--- |
| `requestStream(url, body, header?, timeout=60000)` | 真实流式接口，返回 `Observable<StreamChunk>`（**方法固定 POST**） |
| `simulateStream(text, chunkSize=6, intervalMs=90)` | 本地模拟流，类型完全一致，接口不可用时降级（配 `catchError`） |
| `streamHttp(url, body, onChunk, onEnd, config?)` | 回调式的具名包装（`request/request.uts`），需要 `StreamTask.abort()` 时用 |
| `Utf8StreamDecoder` | 增量 UTF-8 解码器，见下 |

`StreamChunk` = `{ text, receivedLength, elapsedMs }`。

**为什么要 `Utf8StreamDecoder`**：UTS 的 `TextDecoder.decode()` 没有 Web 端的 `{ stream: true }`，逐块解码会把被 chunk 边界切断的中文 / emoji 变成 U+FFFD `�`。解码器自持尾部字节缓冲，只解完整字符，残缺尾部留给下一块 —— **半截块不进渲染器**（分册 3 有完整事故记录）。

**流的响应体不走业务码拆包**（它本来就不是 `{ code, data }` 包装），硬套会在流收完的那一刻误报失败，所以 `HttpClient.stream` 自己发请求、只把原始字节块交出来。

### 5. `useRequest` 组合式请求

```uts
import { useRequest } from '@/src/http/hooks/useRequest.uts';
import type { UseRequestContext, UseRequestEvent } from '@/src/http/hooks/useRequest.uts';

/** 列表请求：手动触发，每次完成刷一次界面 */
const listRequest = useRequest<PageResult<FooItem>>((ctx: UseRequestContext): Promise<PageResult<FooItem>> => {
  let keyword: string = '';
  if (ctx.args.length > 0) {
    keyword = ctx.args[0] as string;
  }
  return fetchFooList(1, 10, keyword);
}, {
  immediate: false,
  retry: 2,
  retryDelay: 600
});

listRequest.onError((_e: UseRequestEvent<PageResult<FooItem>>): void => {
  // 失败提示：默认已由拦截器 toast，这里只做本页自己的收尾
});

// 触发：listRequest.send('关键词')；手动刷新：listRequest.refresh()
```

| 配置项 | 默认 | 说明 |
| :--- | :--- | :--- |
| `immediate` | `true` | 调用当下自动发一次（无参）；`false` 表示纯手动。注意它**只影响首帧自动触发**，不会阻止 `startPolling()` |
| `initialData` | `null` | 静态初始值 |
| `initialDataFn` | —— | 同步求初始值（如从 storage 读）；与 `initialData` 同时给时以本项为准 |
| `debounce` | `0` | 防抖毫秒数（如搜索框 400ms） |
| `retry` | `0` | 失败重试次数，**只对网络层失败生效**，业务码失败不重试 |
| `retryDelay` | `0` | 重试间隔毫秒 |
| `polling` | `0` | 轮询间隔毫秒，配 `startPolling()` / `stopPolling()` |

返回值：`data` / `loading` / `refreshing`（已有内容时的刷新中）/ `error` 四个 `Ref`，加 `send` / `abort` / `refresh` 三个动作与 `onSuccess` / `onError` / `onComplete` 三个回调绑定器。

两个坑：

- **必须把 `ctx.requestKey` 交给 `extra.requestKey`**，否则 `abort()` 掐不到这次请求；
- **`useRequest` 走精准导入** `@/src/http/hooks/useRequest.uts`，不要从 `index.uts` 门面二次转发（`src/sub/httpBasicDemo/httpBasicDemo.uvue` 是现成先例）。

完整语义（并发竞态、`send()` 的失败策略、与 GET 去重的交互）见 [docs/superpowers/specs/2026-10-13-useRequest-design.md](../../docs/superpowers/specs/2026-10-13-useRequest-design.md)。

### 6. 取消 / 去重 / 缓存

```uts
import { http, abortHttp, abortAllHttp, clearCache } from '@/src/http/index.uts';

// 1. 发请求时登记取消键
http.get<FooItem>('/foo', { extra: { requestKey: 'foo-detail' } as UTSJSONObject } as LimeRequestConfig);

// 2. 别处取消它
abortHttp('foo-detail');
abortAllHttp(); // 退出页面 / 切账号时清全部在飞请求

// 3. 清缓存：传指纹只清一条，传空清全部
clearCache();
```

**`config.extra` 开关全集**（都由 api 层传，不传即不启用）：

| 开关 | 生效范围 | 语义 |
| :--- | :--- | :--- |
| `extra.requestKey` | 全部 | 登记 `RequestTask` 的键，**传了才能被 `abort()` 取消**；同键后登记覆盖先登记 |
| `extra.ignoreAuth` | 全部 | 跳过 token 注入（登录 / 刷新 token 这类接口必须开） |
| `extra.toast` | 全部 | `false` 关闭业务错误的自动 toast（轮询、可静默失败的接口） |
| `extra.domain` | 全部 | 临时覆盖域名，优先级 `extra.domain` > `config.baseURL` > 客户端 `baseURL`；少用，优先 `API_DOMAINS` |
| `extra.dedupe` | **仅 GET** | 同指纹复用同一个 Promise；**只有显式传 `false` 才关** |
| `extra.cacheTtl` | **仅 GET** | 毫秒数，> 0 才启用内存 TTL 缓存（命中时同样触发 `onComplete`） |
| `extra.skipRefresh` | 全部 | 401 不再抛「可刷新」哨兵 —— **刷新接口自身必须开**，否则无限递归 |

去重与缓存**共用同一把请求指纹**（`lifecycle.buildRequestKey(config)`，由 method + url + 序列化后的 data/params 算出），`clearCache(fingerprint)` 传的就是它。

---

## 拦截器已经替你做掉的事

**api 层与页面层都不要再包一层**：

| 情况 | 拦截器行为 |
| :--- | :--- |
| HTTP 状态码 `!= 200` | `ShowMessage(statusCode)` 文案 toast 并 reject |
| HTTP `401` | 清 token → `reLaunch` 登录页；带 refreshToken 时**先静默刷新再重放原请求**（并发 401 单飞，只打一次刷新接口） |
| 业务码 `code != 0 && code != 200` | toast 后端返回的 `message` / `msg` 并抛 `BusinessError`（`extra.toast: false` 可关） |
| 业务码 `401` | 同样清 token 并跳登录页 |
| 网络失败 / 超时 | toast「网络错误」/「请求超时」并 reject |

刷新失败时由**首个**调用方执行收尾（清登录 + 跳登录页），并发请求不会各自登出一次。

## 错误归一

```uts
import { resolveErrorMessage } from '@/src/http/error/error.uts';
import type { AppErrorInfo, AppErrorKind } from '@/src/http/error/error.uts';

// AppErrorKind = 'offline' | 'timeout' | 'http' | 'business' | 'unknown'
```

`AppErrorInfo = { kind, message, code, statusCode }` —— `code` 为 `-1` 表示网络层就失败了、根本没拿到业务码；`statusCode` 为 `0` 表示拿不到。需要按 `kind` 决定「提示 / 重试 / 引导去设置」时用它，页面里**不要硬编码错误文案**。

`BusinessError` / `HttpError` 存在的意义是让业务码与状态码跟着错误对象上抛，而不是拼进文案里 —— 拼进文案下游就只能拿到字符串，既无法分类，又可能把内部标记弹给用户。

## 红线

1. **严禁自己写 `uni.request` / `uni.uploadFile` / `uni.downloadFile`** —— 一律走 `http` 单例与上面的封装（分册 7 的 7.4）。
2. **严禁链式 `.catch()`** —— 写双参 `.then(ok, err)`（Kotlin `error25`，分册 1 的 1.21）。
3. **`http.upload<T>` 的 `T` 必须显式标注** —— 无法从入参推断。
4. **底层模块不得穿越 `index.uts` 门面互相引用**（精准导入，分册 1 的 1.22）。
5. **`getNumber` / `getString` 的 `??` 兜底不可省**，且**不要把 `UTSJSONObject` 抛给页面** —— 在 api 层就地转成强类型。
6. **流式的半截块不进渲染器**（分册 3）。

## 相关

- 接口层写法参照：[src/api/example.uts](../api/example.uts)（非页面接口层，照抄用）
- 活体演示页：[src/sub/httpBasicDemo/httpBasicDemo.uvue](../sub/httpBasicDemo/httpBasicDemo.uvue) —— 分页 / 上传 / 下载 / `useRequest` 重试防抖轮询 / 流式，全在这一个页面里跑
- 契约与红线：`unibestX-skill` 分册 7（`references/7-api-spec.md` 的 7.4）
- 域名与环境变量：`@/src/config`（`getApiBaseUrl` / `getApiSecondaryUrl` / `getH5UseProxy`）
- 流式依赖的响应式工具：[src/utils/rxjs-lite/](../utils/rxjs-lite/)（`Observable` / `scan` / `takeUntil` / `catchError`）
