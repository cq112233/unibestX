# useRequest 组合式请求 hook 设计规格

## 1. 概述

`src/http` 目前只有命令式 Promise API：`http.get<T>()` / `post` / `request` / `upload` / `downloadFile`，配 `abortHttp(requestKey)` / `abortAllHttp()` / `clearCache(fingerprint)`。错误已由 `responded.onSuccess` 拆包、`defaultBusinessAfterError` 统一弹 toast，返回的就是业务数据。

但这套 API **不提供任何请求状态**。页面想显示「加载中」只有自己写：

```uts
const loading = ref<boolean>(false);
loading.value = true;
http.get<User>('/user/info').then((data) => {
  loading.value = false;
  user.value = data;
}, (err) => {
  loading.value = false;
});
```

全仓翻下来，「`xxxLoading = ref<boolean>(false)` + 手动翻转」这一范式散落在 3 个页面、共 6 处：

| 位置 | 变量 |
| :--- | :--- |
| `src/sub/httpBasicDemo/httpBasicDemo.uvue:406` | `loading` |
| `src/sub/httpBasicDemo/httpBasicDemo.uvue:411` | `cloudLoading` |
| `src/sub/httpBasicDemo/httpBasicDemo.uvue:414` | `uploadLoading` |
| `src/sub/httpBasicDemo/httpBasicDemo.uvue:418` | `downloadLoading` |
| `src/sub/nestedScrollFunctionDemo/nestedScrollFunctionDemo.uvue:259` | `articleLoading` |
| `src/sub/zpagingFunctionDemo/zpagingFunctionDemo.uvue:272` | `isLoadMoreLoading` |

也就是说这个样板是「谁需要谁手写」，没有统一形态，也就没人处理竞态、重复请求、卸载后写状态这些问题。

本设计新增 **`src/http/hooks/useRequest.uts`**，对标 Alova 的 `useRequest`，把「请求状态机 + 发起/取消/刷新 + 生命周期回调」收进一个组合式 hook。

### 1.1 目标

- 页面不再手写 `loading` / `data` / `error` 三件套与 try/finally。
- 统一处理并发竞态、失败重试、轮询、防抖、卸载清理——这些是手写版本几乎必然写错的地方。
- 形态对齐 Alova，降低熟悉 Alova 的开发者的迁移成本。

### 1.2 非目标（明确不做）

- 不做缓存层（`cacheFor` / `staleTime` / `force` / `update`）。`src/http` 自带的是「同指纹在飞去重」，不是响应缓存；本版不引入响应缓存，因此这一族选项全部落空。
- 不做中间件体系与 `useSerialRequest` / `useWatcher` / `usePagination`。
- 不做 `downloading` / `uploading` 进度状态（只对上传下载有意义，需要额外接 `getTask` / `onProgressUpdate`）。

---

## 2. 对标范围

| Alova `useRequest` 能力 | 本版 | 理由 |
| :--- | :--- | :--- |
| 基础状态 / 基础用法 | ✅ | 核心诉求 |
| `immediate: false` 关闭自动请求 | ✅ | 语义等同我们原本设想的 `manual`，命名对齐 Alova |
| `initialData` 静态初始值 | ✅ | 避免每次渲染都要判 `null` |
| `initialData` 传函数（同步读缓存做骨架屏） | ✅ 但**拆成两个字段** | UTS 只支持与 `null` 的联合，`T \| null \| (() => T \| null)` 写不出来；`any` + 运行时 `typeof` 判断会丢类型且在鸿蒙端有额外约束 |
| `send(...args)` 可变参 | ✅ | |
| 参数在 handler 里接收 | ✅ 走 `ctx.args` | |
| 事件回调里能拿到 `event.args` | ✅ | |
| 回调做成「绑定函数」而非配置项 | ✅ | 顺带解决「必须先解构出 ref 才能引用」的顺序问题 |
| `abort()` | ✅ | 用 `ctx.requestKey` 委托 `abortHttp`。注意 GET 去重命中时只有逻辑取消，见 4.8 |
| `force`（绕过缓存强制请求） | ❌ | 语义依附缓存，本版无缓存，落地即空转 |
| `downloading` / `uploading` | ❌ | 非目标 |
| `update()`（改缓存做乐观更新） | ❌ | 非目标 |
| 中间件 `middleware` | ❌ | 非目标；且 UTS 里中间件链的异质签名与 `useSerialRequest` 是同一块硬骨头 |
| `useFetcher` 的 `fetching` | ❌ 改名 `refreshing` | Alova 的 `fetching` 是 `useFetcher` 里 `loading` 的**同义词**（官方原话：「fetching 的效果与 loading 相同」），价值依附「只刷缓存、不返回 data」，与本 hook 无关。我们保留「区分首次加载 / 刷新中」这个真需求，但改名为 `refreshing`，避免同名不同义 |

---

## 3. API 契约

```uts
// ===== 顶层 type 别名 =====
// 剩余参数不能内联写在对象类型的属性上（UTS 语法报错），必须先抽成顶层别名再挂上去

/** 可变参发送函数；被 abort / 竞态丢弃时 resolve null */
export type UseRequestSender<T> = (...args: Array<any>) => Promise<T | null>;

/** 三个生命周期回调解收到的统一事件对象 */
export type UseRequestEvent<T> = {
  args: Array<any>;      // 本次 send 的参数
  data: T | null;        // 成功时有值，其余为 null
  error: Error | null;   // 失败时有值，其余为 null
};

/** 回调绑定函数：调用它才完成绑定 */
export type UseRequestBinder<T> = (cb: (event: UseRequestEvent<T>) => void) => void;

export type UseRequestContext = {
  requestKey: string;    // 交给 extra.requestKey，abort() 才能真取消
  args: Array<any>;      // send(1, 2, 3) 传进来的参数
};

export type UseRequestOptions<T> = {
  immediate?: boolean;              // 默认 true：setup 后自动发一次（无参）
  initialData?: T | null;           // 静态初始值，默认 null
  initialDataFn?: () => T | null;   // 同步求初始值（如从 storage 读）；两者都给时以 initialDataFn 为准
  debounce?: number;                // 毫秒，默认 0（关闭）
  retry?: number;                   // 失败重试次数，默认 0
  retryDelay?: number;              // 重试间隔毫秒，默认 0
  polling?: number;                 // 轮询间隔毫秒，默认 0（关闭）
};

export type UseRequestResult<T> = {
  data: Ref<T | null>;
  loading: Ref<boolean>;      // 有请求在飞（含首次）
  refreshing: Ref<boolean>;   // loading && data != null，即「已有内容时的刷新中」
  error: Ref<Error | null>;
  send: UseRequestSender<T>;
  abort: () => void;
  refresh: () => Promise<T | null>;   // 用上一次的 args 重发
  onSuccess: UseRequestBinder<T>;
  onError: UseRequestBinder<T>;
  onComplete: UseRequestBinder<T>;
  startPolling: () => void;
  stopPolling: () => void;
};

export function useRequest<T>(
  fn: (ctx: UseRequestContext) => Promise<T>,
  options?: UseRequestOptions<T> | null
): UseRequestResult<T>
```

用法：

```uts
const { data, loading, refreshing, error, send, abort, onSuccess, onError } = useRequest<Article>(
  (ctx) => http.get<Article>(`/article/${ctx.args[0]}`, {
    extra: { requestKey: ctx.requestKey }
  }),
  { immediate: false, retry: 2, debounce: 300 }
);

onSuccess((event) => { console.log('拿到了', event.data?.title, '参数', event.args); });
onError((event) => { console.log('挂了', event.error?.message); });

send(1024);   // 触发
```

`startPolling` / `stopPolling` 是我们自己加的（Alova 把轮询放在 middleware 里，本版没有 middleware），供页面在切 tab、离开页面等时机手动停轮询用。

---

## 4. 状态与语义

### 4.1 状态定义

| 状态 | 定义 |
| :--- | :--- |
| `loading` | 有一次请求在飞（含首次、重试、轮询） |
| `refreshing` | `loading == true` 且 `data != null`。页面据此把「首次加载」渲染成骨架屏、把「刷新中」渲染成小转圈，而不会把已有内容换掉 |
| `data` | 最后一次**被采纳**的响应数据；`abort` / 竞态丢弃不写入 |
| `error` | 每次请求**开始**时置 `null`，失败时写入本次的 `Error`。于是「`error != null`」恒等于「最后一次请求失败了」，无需额外判断。`abort()` 不额外改动它（该请求开始时就已清空，取消后就保持 `null`） |

### 4.2 并发竞态（必须处理）

内部维护自增代次 `seq`。每次 `send` / `refresh` / 轮询触发都 `seq++` 并捕获本次的值，响应回来时**只有捕获值等于当前 `seq` 才写状态**（`data` / `error` / `loading` 同理）。这样连续触发时「先发后到」的旧响应会被丢弃，`loading` 也由最新一次决定，不会被旧请求提前置回 `false`。

### 4.3 重试

- `retry: n` 表示失败后最多再试 `n` 次，间隔 `retryDelay`。
- **只重试网络层失败**。判据：`err instanceof BusinessError` 直接放弃重试（业务码错误重试纯属浪费），主动 `abort` 也不重试。这个判据与既有实现一致——`src/http/request/request.uts:199` 判断是否吞掉 toast 用的就是同一个 `instanceof`，说明跑到 hook 手里的错误确实是这个类，不需要再包一层归一。
- 重试期间保持 `loading`，不重新进入 `refreshing` 的翻转过程。

### 4.4 轮询

- `polling > 0` 时启用；`immediate: false` 的场景下不自动开始，需调 `startPolling()`。
- **轮询不把 `loading` 置 `true`**，否则页面会一直转圈。
- 轮询失败：不写 `error`、不触发 `onError`、不重试，等下一个周期。（**toast 不在此列**——toast 由 `src/http` 的 `defaultBusinessAfterError` 统一决定，hook 既不弹也管不了。轮询场景想安静，需要在业务侧自己处理 `afterError` 钩子。这一点是本版的一个已知缺口，不在本次范围内解决。）
- 卸载时自动 `stopPolling`；`stopPolling()` 幂等，未在轮询时调用是空操作。

### 4.5 abort 与卸载

- `abort()` = 顶掉代次 `seq`（后续响应作废，含「已入队但还没触发的防抖」）+ `abortHttp(ctx.requestKey)` 取消底层请求 + `loading = false`。**「取消底层请求」这一步在 GET 去重命中时不生效**，此时只有 `seq` 守卫提供的逻辑取消——见 4.8。
- **`abort()` 不触发 `onError`**（取消不是错误），但**触发 `onComplete`**（对齐 Alova）。`onComplete` 收到的 event 里 `data` 与 `error` **都是 `null`**——据此可把「被取消」与「成功」「失败」区分开。
- `send()` 被 abort / 竞态丢弃时 resolve `null`。
- `abort()` 在没有请求在飞时是空操作（仍然触发一次 `onComplete`）。
- `refresh()` 用上一次的 `args` 重发；若从未 `send` 过（例如 `immediate: false` 且还没手动发），等价于 `send()` 无参发起一次。
- 页面 `onUnmounted` 时自动：置 `disposed` 标记 → `abort()` → `stopPolling()`。`disposed` 标记用于挡住「防抖延迟到卸载之后才触发」的那一次。

### 4.6 防抖

复用 `uni_modules/lime-shared` 的 `debounce`（遵守红线 42，不手写通用工具），引入形态照抄项目内既有用法：`import { debounce } from '@/uni_modules/lime-shared/debounce';`（见 `src/sub/limeSharedFunctionDemo/limeSharedFunctionDemo.uvue:292`）。两平台签名不一致（APP 版单参、Web 版 `...args`），统一按「传一个 `Array<any>`」的方式调用即可兼容。

**已知短板**：该库版本没有 `cancel()` / `flush()`，卸载后那次 pending 触发无法从外部取消。因此：

- 卸载后：`disposed` 守卫把它变成空操作（不会真发请求）。
- `abort()` 后：靠代次 `seq` 作废（触发时发现捕获的代次已过期，直接 return）。

两者合起来覆盖了「取消」的全部实际需求，因此**不引入本地自写防抖**。

### 4.7 `immediate` 的触发时机

`immediate: true`（默认）时，首次请求在 `useRequest()` **被调用的当下同步发起**（即在 `setup` 期间），而不是等到 `onMounted`——与 Alova 一致，也让请求尽早并行于首屏渲染。

`polling > 0` 时，**首次请求同样在 setup 当下发出**（与 `immediate` 一致，不额外等一个 `polling` 间隔），之后每隔 `polling` 毫秒发一次。定时器用 `setInterval` 持有 id，`stopPolling()` 清掉；卸载清理走 `onUnmounted` 注册。

### 4.8 与 http 层 GET 去重的交互（重要约束）

`client.uts:684-691` 有一条既有行为：**GET 请求默认按指纹去重**，指纹是 `method|url|JSON.stringify(data)`（`lifecycle.uts:216-229`），命中时**直接复用同一份在飞 Promise，不再发新请求**；开关是 `extra.dedupe`，只有显式传 `false` 才关。注意指纹里**不含 `requestKey`**。

对 hook 有两个直接后果，必须在实现里正面处理，不能等运行时才发现：

1. **`abort()` 在去重命中时退化为空转。** 第二次 `send` 走的是 `return pending`（`client.uts:689`），根本不会执行到登记 `extra.requestKey` 的那段（`client.uts:381-384`）。于是 `abortHttp(第二次的 requestKey)` 打在一个从未登记过的键上——底层请求照跑不停。
   **应对**：不指望 `abortHttp` 兜住这种情况，状态正确性由 `seq` 代次守卫保证（迟到的响应写不进 `data` / `loading`）。也就是说「取消」在这条路径上是**逻辑取消**（状态不再变化），不是**网络取消**。这一点写进文档而不是藏着。
2. **`refresh()` 在去重命中时不会真的重发。** 同名 GET 还在飞时点刷新，拿回的是同一份 Promise。对「避免重复流量」是好事，但和 Alova「refresh 必定重发」的直觉不同，页面写轮询/刷新时必须知道。
   **应对**：连 `immediate: true` 的首发在内，hook 自己**不去动 `dedupe` 开关**（那是调用方在 `extra` 里的地盘，hook 不该覆盖）。需要在某次调用上强制重发的，由调用方自己传 `extra: { dedupe: false }`。这条约束写进 hook 的文件头注释。

3. 去重只作用于 **GET**（`client.uts:685` 的 `isGet &&`），POST / PUT / DELETE 不受影响，`abort()` 在这些方法上是真取消。

### 4.9 `send()` 的失败策略（与 Alova 的一处刻意偏离）

Alova 的 `send()` 在失败时 reject。本版**不 reject，失败也 resolve `null`**，错误只走 `error` 状态与 `onError` 绑定函数。

理由：`src/http` 已经统一弹过 toast，多数调用方不关心失败；而原生端一个没人 `catch` 的 rejected promise 会变成 unhandled rejection，比 H5 更难排查。代价是 `await send()` 拿到 `null` 时分不清「失败」还是「被取消/竞态丢弃」——要区分看 `error` 状态。

---

## 5. 落位与依赖

- 新增 `src/http/hooks/useRequest.uts`（类型与实现同文件；类型不拆 `.ts`——红线 20 禁止跨分支共享类型经 `.ts` 转发）。
- 门面：`src/http/index.uts` 增加一条 `export * from './hooks/useRequest.uts';`。同一顶层符号只在这一层门面转发（红线 15/36），且 hook 内部**精准导入** `../request/request.uts` 这个具体实现文件而非 `index.uts`，不构成自环。
- 依赖：`vue`（`ref` / `onUnmounted` / `Ref` 类型）、`lime-shared/debounce`、`../request/request.uts`（`http`、`abortHttp`）、`../error/error.uts`（`BusinessError`）。
- 文件体积预期 250~350 行。若超过 400 行，再把「防抖 + 重试 + 轮询」抽成 `src/http/hooks/internal/scheduler.uts`。

---

## 6. UTS 风险点与验证顺序

按风险从高到低，**实现的第一步是先写一个最小骨架并跑真编译**，骨架通过再往里填逻辑——这四项任何一项不成立都要改 API 形态，晚发现等于返工。

1. **泛型 + `type` 字面量赋值**：`const result: UseRequestResult<T> = { ... }` 这种「泛型实例化 + 对象字面量赋值」是整个设计的最大风险点，Kotlin 端行为未知。
2. **红线 41**：断言里绝不能出现泛型实例化**别名**，只能直写本体。返回处一律用「先声明带类型标注的变量再 `return`」，不用 `as`。
3. **红线 25**：`send` 的剩余参数必须走顶层 `type UseRequestSender<T>` 别名，不能内联声明在结果对象的属性上。
4. **`lime-shared/debounce` 的解析**：项目内现成用法是目录形态导入，但那是 `.uvue`；`.uts` 里是否同样解析成功未经验证。失败则改用显式 `debounce/index.ts` 路径。
5. **`Ref<T | null>` 泛型嵌套**在 Kotlin 端的表现。

验证命令：`pnpm dev:app-android`（真编译，看 `unpackage/cache/.app-android/src/index.kt` 是否生成并通过）+ `pnpm test`（单测，走 esbuild 转译，**不复现**上面第 1~3 条的 Kotlin 层风险，所以两者都要跑）。

---

## 7. 测试计划

新增 `tests/unit/api/use-request.test.ts`（与既有 `http.test.ts` / `http-stream.test.ts` 同目录）。底层用假 `uni.request` 拦截，沿用 `tests/unit/api/http-stream.test.ts` 里 `installFakeRequest()` 的写法（捕获入参、暴露 resolve/reject 入口、可 abort）。

覆盖点（都是手写版本几乎必然写错的地方）：

1. 状态机基本流转：`loading` 翻转、成功写 `data`、失败写 `error`、绑定回调收到正确 `event`。
2. **并发竞态**：连续两次 `send`，第二次先返回、第一次后返回 → `data` 必须是第二次的，且第一次的迟到响应不覆盖。
3. 重试：网络错误重试 `n` 次后成功；`BusinessError` **不**重试；`retry: 0` 时不重试。
4. 防抖：连续 `send(a)` / `send(b)` / `send(c)` 只发一次，且参数是最后那次。
5. 轮询：`polling` 期间 `loading` 不翻转；`stopPolling` 后不再发；轮询失败不写 `error`。
6. `abort()`：底层 `requestKey` 被 `abortHttp` 取消、`onError` **不**触发、`onComplete` 触发（`data`/`error` 均为 `null`）、`send()` resolve `null`。
7. **去重交互（4.8）**：同参数 GET 连续 `send` 两次，断言底层只发出**一次**请求（`uni.request` 调用计数），且 `abort()` 后迟到的响应仍不写 `data`；再断言传 `extra: { dedupe: false }` 时确实发两次。这条要用真实 `createHttpClient` 而非裸 promise stub，否则测不到去重层。
8. 卸载：`onUnmounted` 后迟到的响应与 pending 防抖都不再写状态（不产生「已卸载组件仍更新」）。
9. `initialData` / `initialDataFn` 的取值优先级。

---

## 8. 示例页改动

`src/sub/httpBasicDemo/httpBasicDemo.uvue` 现有 5 张卡（第 1 张 uniCloud 云对象、第 2 张 Mock 列表、第 3 张「真实接口请求状态」、第 4 张文件上传、第 5 张文件下载）。在其末尾追加第 6 张卡「useRequest 组合式请求」，沿用该页既有的卡片容器类（`rounded-[16px] p-[20px] m-[16px] border-[1px] border-solid border-[#edf2f7] bg-[#ffffff]`）与卡头注释条风格（`<!-- ============ N. 标题 ============ -->`）。

内容：

- 请求示例展示 `loading` / `data` / `error` 三种渲染分支，并把 `refreshing` 单独渲染出来以示区别。
- 可点按钮分别触发：`send` 带参、`refresh`、`abort`、`stopPolling`。
- 防抖输入框（连续输入只发一次）与轮询开关。

**定位**：第 3 张卡已经在手写 `loading = ref<boolean>(false)` 那套（见 1. 概述的表），新卡是它的对照——同一件事用 hook 写。第 3 张卡**不改动**，保留手写形态作为对比样本。

页面按规约写 `definePage`（`layout: 'navbar'`、`enablePullDownRefresh: true`）——该页已有此配置，只做增量追加。

---

## 9. 交付清单

| 项 | 文件 |
| :--- | :--- |
| hook 本体 | `src/http/hooks/useRequest.uts`（新增） |
| 门面导出 | `src/http/index.uts`（+1 行） |
| 单元测试 | `tests/unit/api/use-request.test.ts`（新增） |
| 示例 | `src/sub/httpBasicDemo/httpBasicDemo.uvue`（追加一节） |
