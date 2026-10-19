# request-bestX

> 专为 **uni-app X / UTS** 打造的现代化跨端 HTTP 网络请求与状态机引擎。
> 纯原生 `uni.request` 驱动，零第三方库依赖，全平台零报错。

---

## 🌟 核心特性

- 🎯 **TanStack Vue Query 声明式状态机**：原生实现 `useQuery` / `useMutation` / `QueryClient`，支持自动缓存、staleTime、自动重试、轮询、依赖查询与并发去重。
- ⚡️ **Axios 风格拦截器链**：支持 `beforeRequest`、`responded.onSuccess`、`responded.onError`、`responded.onComplete` 链式异步中间件。
- 🛡 **全平台强类型零报错**：全量采用 UTS `type` 类型别名规范，杜绝 `interface` 带来的底层字面量赋值编译报错与 Android `ClassCastException`。
- 🚀 **性能调度引擎**：内置请求指纹算法，支持 **GET 请求瞬时并发去重 (Inflight Deduplication)** 与 **TTL 内存缓存**。
- 📶 **断网重连自动恢复 (refetchOnReconnect)**：原生深度对接 `uni.onNetworkStatusChange` 与 `onlineManager`，网络由断开恢复连接时自动刷新数据，告别手动重刷。
- 🤖 **AI 大模型流式传输**：内置 `requestStream` 与增量 `Utf8StreamDecoder`，彻底防止分块接收时中文与 Emoji 被截断乱码。
- 🔌 **全端一致**：Web / Android / iOS / 鸿蒙等全平台一套代码无缝运行。

---

## 📖 快速导航目录

- [一、基础请求客户端 (HttpClient)](#一基础请求客户端-httpclient)
  - [1.1 基础创建 HTTP 实例](#11-基础创建-http-实例)
  - [1.2 常用调用示例](#12-常用调用示例)
  - [1.3 createHttpClient 配置参数 (HttpClientOptions)](#13-createhttpclient-配置参数-httpclientoptions)
  - [1.4 请求配置参数 (HttpRequestConfig)](#14-请求配置参数-httprequestconfig)
  - [1.5 响应结果对象 (HttpResponse / DownloadResult / HttpError)](#15-响应结果对象-httpresponse--downloadresult--httperror)
- [二、声明式查询状态机 (useQuery)](#二声明式查询状态机-usequery)
  - [2.1 常用调用示例](#21-常用调用示例)
  - [2.2 响应式动态参数 (分页/搜索联动)](#22-响应式动态参数-分页搜索联动)
  - [2.3 输入参数全览 (QueryOptions)](#23-输入参数全览-queryoptions)
  - [2.4 返回结果对象全览 (QueryResult)](#24-返回结果对象全览-queryresult)
- [三、声明式变更状态机 (useMutation)](#三声明式变更状态机-usemutation)
  - [3.1 常用调用示例](#31-常用调用示例)
  - [3.2 输入参数全览 (MutationOptions)](#32-输入参数全览-mutationoptions)
  - [3.3 返回结果对象全览 (MutationResult)](#33-返回结果对象全览-mutationresult)
- [四、全局调度中枢与网络管理 (QueryClient & onlineManager)](#四全局调度中枢与网络管理-queryclient--onlinemanager)
  - [4.1 QueryClient 实例方法与参数](#41-queryclient-实例方法与参数)
  - [4.2 全局网络管理器 (onlineManager)](#42-全局网络管理器-onlinemanager)
  - [4.3 Vue 插件全局注册 (VueQueryPlugin)](#43-vue-插件全局注册-vuequeryplugin)
- [五、AI 大模型流式通信 (requestStream)](#五ai-大模型流式通信-requeststream)
  - [5.1 调用示例](#51-调用示例)
  - [5.2 输入参数全览 (StreamOptions)](#52-输入参数全览-streamoptions)
  - [5.3 分块数据对象 (StreamChunk) 与控制句柄 (StreamTask)](#53-分块数据对象-streamchunk-与控制句柄-streamtask)
- [六、目录结构与规范](#六目录结构与规范)

---

## 一、基础请求客户端 (HttpClient)

适用于常规命令式 API 请求调用，提供类似 Axios 的单例/多实例管理、URL 拼接序列化与全局拦截器。

### 1.1 基础创建 HTTP 实例

最小可用示例：只需要一个 `baseURL` 就能创建实例，其余配置全部可选。

```uts
// src/http/instances/default.uts
import { createHttpClient } from '@/uni_modules/request-bestX/index.uts';
import type {
  HttpClient,
  HttpClientOptions,
  HttpRequestConfig,
  RespondedOptions
} from '@/uni_modules/request-bestX/index.uts';

const options: HttpClientOptions = {
  // 必填：接口根地址（App / 小程序直连；H5 跨域建议走 vite 代理或后端 CORS）
  baseURL: 'https://api.example.com',
  // 可选：超时时间，默认 60000ms
  timeout: 10000,
  // 可选：全局默认请求头
  header: {
    'Content-Type': 'application/json'
  } as UTSJSONObject,
  // 可选：前置拦截器，每次请求发出前执行（支持同步或返回 Promise）
  beforeRequest: (config: HttpRequestConfig): void => {
    const header: UTSJSONObject = config.header ?? ({} as UTSJSONObject);
    const token = uni.getStorageSync('token');
    if (token != null && `${token}` != '') {
      header['Authorization'] = 'Bearer ' + `${token}`;
    }
    config.header = header;
  },
  // 可选：后置拦截器，统一处理成功 / 失败 / 完成
  responded: {
    onSuccess: (data: any, _config: HttpRequestConfig): any => {
      // 可在此统一解包 { code, data, message }，直接返回业务数据
      return data;
    },
    onError: (err: any, _config: HttpRequestConfig): void => {
      console.error('[http] 请求失败：', err);
    },
    onComplete: (_config: HttpRequestConfig): void => {
      // 统一收尾，例如关闭全屏 loading
    }
  } as RespondedOptions
} as HttpClientOptions;

// 导出单例：整个应用共用同一个实例（拦截器、缓存、去重都挂在这个实例上）
export const http: HttpClient = createHttpClient(options);
```

在 api 层统一从这里导入并发起请求：

```uts
// src/api/user/user.uts
import { http } from '@/src/http/instances/default.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export function fetchUserInfo(id: number): Promise<UTSJSONObject> {
  return http.get<UTSJSONObject>('/user/info', {
    params: { id } as UTSJSONObject
  } as HttpRequestConfig);
}
```

**多实例 / 多域名**：不同服务各建一个实例即可，它们之间的拦截器、缓存与并发去重互相隔离：

```uts
export const secondaryHttp: HttpClient = createHttpClient({
  baseURL: 'https://api-secondary.example.com',
  timeout: 15000
} as HttpClientOptions);
```

> 💡 两个小提示：
>
> - 使用 `requestStream` 且不想每次传 `customClient` 时，创建完实例后调用 `setDefaultStreamClient(http)` 注册为默认流式客户端。
> - 在 `.uvue` / `.uts` 中导入本模块时，建议写全 `@/uni_modules/request-bestX/index.uts`，可避免编辑器类型补全丢失。

### 1.2 常用调用示例

```uts
import { createHttpClient } from '@/uni_modules/request-bestX/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

const client = createHttpClient({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  beforeRequest: (config: HttpRequestConfig): void => {
    // 注入请求头与 Token
  }
});

// GET 请求
const users = await client.get<Array<User>>('/users', {
  params: { status: 'active' }
} as HttpRequestConfig);

// POST 请求 (第二参为请求体，第三参为配置项)
const newUser = await client.post<User>('/users', { name: 'Alice' });

// 文件上传
const uploadUrl = await client.upload<string>('/upload', {
  filePath: 'file://path/to/avatar.png',
  name: 'file'
} as HttpRequestConfig);

// 文件下载
const dl = await client.downloadFile('https://example.com/file.pdf');
console.log('文件临时保存路径:', dl.tempFilePath);
```

### 1.3 createHttpClient 配置参数 (HttpClientOptions)

| 选项名 | 类型 | 必填 | 默认值 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `baseURL` | `string` | 否 | `''` | 接口基础公共前缀地址 |
| `timeout` | `number` | 否 | `60000` | 超时时间（毫秒） |
| `header` | `UTSJSONObject` | 否 | `{}` | 全局默认请求头 |
| `requestAdapter` | `HttpRequestAdapter` | 否 | 原生适配器 | 底层请求驱动适配器函数（自定义传输或单测 Mock 时使用） |
| `beforeRequest` | `BeforeRequestHook` | 否 | `null` | 前置拦截器（支持同步或返回 Promise 的异步函数） |
| `responded` | `RespondedOptions` | 否 | `null` | 后置拦截器对象（含 `onSuccess`, `onError`, `onComplete`） |

### 1.4 请求配置参数 (HttpRequestConfig)

在调用 `client.request`、`client.get`、`client.post`、`client.upload`、`client.downloadFile` 时传入的配置对象：

| 参数字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| `url` | `string` | 否 | 请求相对或绝对路径 |
| `method` | `HttpRequestMethod` | 否 | 请求方法：`'GET'` \| `'POST'` \| `'PUT'` \| `'DELETE'` 等 |
| `data` | `any` | 否 | POST / PUT / DELETE 的请求体负载数据 |
| `params` | `any` | 否 | 查询参数对象，会自动拼接到 URL query 后 |
| `header` / `headers` | `UTSJSONObject` | 否 | 本次请求专属自定义 Header |
| `timeout` | `number` | 否 | 本次请求超时时间（毫秒） |
| `baseURL` | `string` | 否 | 覆盖全局的 baseURL |
| `enableCache` | `boolean` | 否 | 是否启用同请求 TTL 缓存（默认不开启） |
| `filePath` | `string` | 否 | **文件上传专有**：要上传的本地文件临时路径 |
| `name` | `string` | 否 | **文件上传专有**：后端接收文件的表单字段名 |
| `formData` | `any` | 否 | **文件上传专有**：额外的 HTTP 请求中其他表单数据 |
| `getTask` | `(task: any) => void` | 否 | 任务句柄监听（如监听下载进度 `onProgressUpdate`） |
| `extra` | `any` | 否 | 自定义扩展参数，拦截器可自由读取 |

### 1.5 响应结果对象 (HttpResponse / DownloadResult / HttpError)

#### `HttpResponse<T>` (client.request 的完整返回值)
- `data: T`：服务端响应体数据（已解包业务数据或原始 JSON）
- `statusCode: number`：HTTP 状态码（如 200, 401, 500）
- `header: UTSJSONObject`：服务端响应头字典
- `config: HttpRequestConfig`：发起该请求时所使用的配置项

#### `DownloadResult` (client.downloadFile 的返回值)
- `tempFilePath: string`：下载成功后的本地临时文件绝对路径
- `statusCode: number`：下载 HTTP 响应状态码（通常为 200）

#### `HttpError` (请求抛出的标准异常类)
- `statusCode: number`：HTTP 错误状态码（0 代表网络不通或主动取消）
- `data: any`：服务端返回的完整错误响应体
- `message: string`：错误提示摘要信息

---

## 二、声明式查询状态机 (useQuery)

对标 **TanStack Vue Query**。负责数据拉取、自动缓存、并发去重、响应式状态绑定与断网自动恢复。

### 2.1 常用调用示例

```uts
import { useQuery } from '@/uni_modules/request-bestX';
import type { QueryOptions } from '@/uni_modules/request-bestX';

const userQuery = useQuery<UserInfo>({
  queryKey: ['user', userId],
  queryFn: (): Promise<UserInfo> => fetchUserInfo(userId),
  staleTime: 30000, // 30秒内数据视为新鲜，不重复发送网络请求
  retry: 2 // 遇到网络错误自动重试2次
} as QueryOptions<UserInfo>);
```

在模板中直接响应式消费：
```html
<view v-if="userQuery.isLoading.value">加载中...</view>
<view v-else-if="userQuery.isError.value">出错了：{{ userQuery.error.value?.message }}</view>
<view v-else>{{ userQuery.data.value?.name }}</view>
```

### 2.2 响应式动态参数 (分页/搜索联动)

当分页页码或搜索关键词改变时，**直接将 `ref` 响应式变量放入 `queryKey` 数组中**。底层会自动建立响应式依赖追踪：当 `page.value++` 时，自动取消上一页请求、自动拉取新页码数据并维护独立缓存：

```uts
const page = ref<number>(1);
const keyword = ref<string>('');

// 响应式声明：直接把 Ref 放入 queryKey 数组
const todoListQuery = useQuery<PageResult<TodoItem>>({
  queryKey: ['todos', 'list', page, keyword],
  queryFn: (): Promise<PageResult<TodoItem>> => {
    return fetchTodoList(page.value, keyword.value);
  }
} as QueryOptions<PageResult<TodoItem>>);

// 切换页码：无需手写 watch，也无需调 refetch，数据全自动拉取！
function handleNextPage() {
  page.value = page.value + 1; // 🚀 自动拉取第 2 页
}
```

### 2.3 输入参数全览 (QueryOptions)

| 参数字段 | 类型 | 必填 | 默认值 | 详细说明 |
| :--- | :--- | :---: | :---: | :--- |
| `queryKey` | `Array<any> \| string \| () => any` | **是** | - | 查询主键。支持普通值、Ref 或 Getter 函数，Ref 变化自动重拉 |
| `queryFn` | `(ctx: QueryFunctionContext) => Promise<T>` | **是** | - | 异步执行函数，入参含 `ctx.signal` 与 `ctx.requestKey` |
| `enabled` | `boolean \| Ref<boolean> \| () => boolean` | 否 | `true` | 是否允许触发请求。支持 Ref/Getter 动态控制（依赖查询） |
| `staleTime` | `number` | 否 | `0` | 数据保鲜期（毫秒），窗口内重复访问直接命中内存缓存不发请求 |
| `gcTime` | `number` | 否 | `300000` | 缓存淘汰时长（5分钟），过期后自动垃圾回收 |
| `retry` | `number` | 否 | `0` | 网络层失败自动重试次数 |
| `retryDelay` | `number` | 否 | `0` | 重试前等待毫秒数 |
| `refetchInterval` | `number` | 否 | `0` | 定时轮询间隔（毫秒），组件卸载自动清除定时器 |
| `refetchOnReconnect` | `boolean` | 否 | `true` | **网络断开后重新连上时，是否自动在后台重拉最新数据** |
| `initialData` | `T` | 否 | `null` | 初始占位数据，在首次接口返回前立即展示 |
| `initialDataFn` | `() => T \| null` | 否 | `null` | 动态获取初始数据函数（如从本地 Storage 读取） |
| `isRetryable` | `(err: any) => boolean` | 否 | `null` | 自定义错误是否允许重试判定（默认非业务码错误允许重试） |
| `meta` | `UTSJSONObject` | 否 | `null` | 附加元数据，可在拦截器或 queryFn 中读取 |

### 2.4 返回结果对象全览 (QueryResult)

`const result = useQuery(...)` 返回的对象包含以下响应式变量与控制方法：

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Ref<T \| null>` | 响应式查询数据引用，初始为 `initialData` 或 `null` |
| `error` | `Ref<Error \| null>` | 响应式异常对象，无错误时为 `null` |
| `status` | `Ref<'pending' \| 'success' \| 'error'>` | 主状态枚举：挂起中 / 成功 / 失败 |
| `isLoading` | `Ref<boolean>` | **首次加载中**（没有缓存数据且正在发起请求时为 true） |
| `isFetching` | `Ref<boolean>` | **网络拉取中**（包含首次加载和后台静默重刷） |
| `isSuccess` | `Ref<boolean>` | 数据是否已成功就绪 |
| `isError` | `Ref<boolean>` | 本次查询是否以失败告终 |
| `refetch` | `() => Promise<T \| null>` | 手动强制刷新数据（忽略 staleTime 限制） |
| `cancel` / `abort` | `() => void` | 主动中断当前正在执行的底层网络请求 |

---

## 三、声明式变更状态机 (useMutation)

适用于数据新增、修改、删除等操作，支持异步状态跟踪、乐观更新与回调闭包。

### 3.1 常用调用示例

```uts
import { useMutation, useQueryClient } from '@/uni_modules/request-bestX';
import type { MutationOptions } from '@/uni_modules/request-bestX';

const queryClient = useQueryClient();

const { isPending, mutate, mutateAsync } = useMutation<LoginResult, LoginParams>({
  mutationKey: ['auth', 'login'],
  mutationFn: (variables: LoginParams): Promise<LoginResult> => apiLogin(variables),
  onSuccess(res) {
    uni.showToast({ title: '登录成功！', icon: 'success' });
    // 自动重刷用户信息
    queryClient.invalidateQueries(['user']);
  },
  onError(err) {
    uni.showToast({ title: err.message, icon: 'none' });
  }
} as MutationOptions<LoginResult, LoginParams>);

// 触发方式 1：常规触发（错误在 onError 统一处理）
function handleLogin() {
  mutate({ username: 'admin', password: '123' });
}

// 触发方式 2：异步等待返回
async function handleAsyncLogin() {
  try {
    const res = await mutateAsync({ username: 'admin', password: '123' });
    console.log('登录成功得到数据:', res);
  } catch (e) {
    console.error('登录失败捕获:', e);
  }
}
```

### 3.2 输入参数全览 (MutationOptions)

| 参数字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| `mutationFn` | `(variables: TVariables) => Promise<TData>` | **是** | 执行变更的异步函数，接收变更入参并返回结果 Promise |
| `mutationKey` | `MutationKey` | 否 | 变更标识键，用于 `queryClient.isMutating` 区分不同动作 |
| `onMutate` | `(variables: TVariables) => Promise<TContext> \| TContext` | 否 | **变更触发前执行**，可用于乐观更新并返回上下文对象（供回滚使用） |
| `onSuccess` | `(data: TData, variables: TVariables, context: TContext) => void` | 否 | 变更成功回调 |
| `onError` | `(err: Error, variables: TVariables, context: TContext) => void` | 否 | 变更失败回调 |
| `onSettled` | `(data, err, variables, context) => void` | 否 | 变更完成回调（无论成功或失败均会触发） |

### 3.3 返回结果对象全览 (MutationResult)

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Ref<TData \| null>` | 最近一次成功返回的数据 |
| `error` | `Ref<Error \| null>` | 最近一次执行异常对象 |
| `status` | `Ref<'idle' \| 'pending' \| 'success' \| 'error'>` | 变更状态：空闲 / 提交中 / 成功 / 失败 |
| `isIdle` | `Ref<boolean>` | 是否处于初始空闲状态 |
| `isPending` | `Ref<boolean>` | 是否正在提交请求中（常用于防重复提交与按钮 Loading） |
| `isSuccess` | `Ref<boolean>` | 是否变更成功 |
| `isError` | `Ref<boolean>` | 是否变更失败 |
| `mutate` | `(variables: TVariables) => void` | 同步触发变更函数 |
| `mutateAsync` | `(variables: TVariables) => Promise<TData>` | 异步返回 Promise 结果的触发函数 |
| `reset` | `() => void` | 重置所有响应式状态回初始 `idle` |

---

## 四、全局调度中枢与网络管理 (QueryClient & onlineManager)

### 4.1 QueryClient 实例方法与参数

通过 `const queryClient = useQueryClient()` 获取全局单例：

| 方法名称 | 参数签名 | 返回值 | 详细作用 |
| :--- | :--- | :---: | :--- |
| `invalidateQueries` | `(filters?: QueryFilterParam)` | `void` | **缓存失效**：匹配前缀的所有缓存标记过期，并自动触发激活组件后台重拉 |
| `getQueryData<T>` | `(key: QueryKey)` | `T \| null` | 读取指定 Key 的当前有效内存缓存 |
| `setQueryData<T>` | `(key: QueryKey, data: T \| null)` | `void` | 手动覆写或更新缓存（常用于乐观更新或立即同步） |
| `getQueryState<T>` | `(key: QueryKey)` | `QueryCacheRecord \| null` | 读取指定 Key 的完整元数据（含 `dataUpdatedAt`, `isFetching` 等） |
| `cancelQueries` | `(filters?: QueryFilterParam)` | `void` | 掐断匹配查询的在飞网络请求任务 |
| `removeQueries` | `(filters?: QueryFilterParam)` | `void` | 从内存字典中彻底移除匹配的缓存条目 |
| `isMutating` | `(filters?: MutationFilterParam)` | `number` | 探测正在提交中的变更数量（0 表示无变更，>0 表示有提交中） |
| `clear` | `()` | `void` | 清空所有缓存数据、监听器与取消句柄 |

### 4.2 全局网络管理器 (onlineManager)

原生深度对接 `uni.onNetworkStatusChange`，提供网络状态感知与断网重连广播：

```uts
import { onlineManager } from '@/uni_modules/request-bestX';

// 1. 获取当前设备是否在线
const isOnline: boolean = onlineManager.isNetworkOnline();

// 2. 监听网络在线切换事件
const unsubscribe = onlineManager.subscribe((connected: boolean) => {
  console.log('网络状态改变:', connected ? '在线' : '离线');
});

// 3. 手动模拟网络状态（常用于测试或自动化单测）
onlineManager.setOnline(true);
```

| 方法 | 入参 | 返回值 | 说明 |
| :--- | :--- | :---: | :--- |
| `isNetworkOnline` | `()` | `boolean` | 查询当前设备网络连通状态 |
| `subscribe` | `(listener: (isOnline: boolean) => void)` | `() => void` | 监听网络变化，返回注销函数 |
| `setOnline` | `(online: boolean)` | `void` | 手动覆盖在线状态并触发广播 |

### 4.3 Vue 插件全局注册 (VueQueryPlugin)

```uts
// main.uts
import { VueQueryPlugin, QueryClient } from '@/uni_modules/request-bestX';

const myQueryClient = new QueryClient();
app.use(VueQueryPlugin, { queryClient: myQueryClient });
```

> 💡 **零配置开箱即用**：若不显式调用 `app.use(VueQueryPlugin)`，`useQueryClient()` 会自动回退并复用内置的 `defaultQueryClient` 单例。

---

## 五、AI 大模型流式通信 (requestStream)

内置增量 UTF-8 多字节解码器（`Utf8StreamDecoder`），彻底解决大模型 SSE / NDJSON 打字机流式传输时中文与 Emoji 字符跨分块被截断引发乱码的问题。

### 5.1 调用示例

```uts
import { requestStream } from '@/uni_modules/request-bestX';
import type { StreamChunk, StreamTask } from '@/uni_modules/request-bestX';

const task: StreamTask = requestStream({
  url: '/api/chat/completions',
  body: JSON.stringify({ prompt: '讲个笑话' }),
  onChunk: (chunk: StreamChunk): void => {
    // 增量文本已完成防乱码解码
    replyContent.value += chunk.text;
  },
  onComplete: (): void => {
    console.log('打字机输出完毕');
  },
  onError: (err: Error): void => {
    console.error('流式传输失败:', err);
  }
});

// 中途停止大模型生成：
// task.abort();
```

### 5.2 输入参数全览 (StreamOptions)

| 参数字段 | 类型 | 必填 | 默认值 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `url` | `string` | **是** | - | 流式通信接口目标地址 |
| `onChunk` | `(chunk: StreamChunk) => void` | **是** | - | 接收到数据分块时的实时回调函数 |
| `method` | `string` | 否 | `'POST'` | HTTP 请求方法 |
| `body` | `string` | 否 | `null` | 请求体内容（通常为 JSON 字符串） |
| `header` | `UTSJSONObject` | 否 | `{}` | 请求头参数 |
| `onComplete` | `() => void` | 否 | `null` | 流式传输正常结束回调 |
| `onError` | `(err: Error) => void` | 否 | `null` | 流式传输异常中断回调 |
| `customClient` | `HttpClient` | 否 | `null` | 指定自定义网络客户端实例 |

### 5.3 分块数据对象 (StreamChunk) 与控制句柄 (StreamTask)

#### `StreamChunk` (onChunk 回调的入参)
- `text: string`：当前分块解析出来的增量 UTF-8 文本内容
- `accumulated: string`：从流开始至今累计收到的完整字符串
- `deltaLength: number`：当前分块文本字符长度
- `raw: ArrayBuffer`：底层原生网络推送的原始二进制分块数据

#### `StreamTask` (requestStream 返回的控制句柄)
- `abort: () => void`：主动终止底层流式网络连接与打字机输出

---

## 六、目录结构与规范

```text
uni_modules/request-bestX/
├── index.uts             # 模块核心统一门面出口
├── package.json          # DCloud 插件市场元数据
├── readme.md             # 官方使用说明文档
├── core/                 # 核心网络驱动层
│   ├── client.uts        # HttpClient 调度引擎（拦截器链 / 去重 / TTL 缓存）
│   ├── lifecycle.uts     # RequestLifecycle 请求生命周期与并发指纹管理
│   ├── types.uts         # 基础强类型与 HttpError
│   └── enum.uts          # ContentTypeEnum 网络传输常量
├── hooks/                # 声明式状态机层
│   ├── index.uts         # Hooks 统一导出
│   ├── types.uts         # QueryOptions / MutationOptions / QueryResult 强类型
│   ├── queryClient.uts   # QueryClient 缓存中枢、onlineManager 与 VueQueryPlugin
│   ├── useQuery.uts      # useQuery 声明式查询（动态 Key 响应式追踪、重试、轮询、重连刷新）
│   └── useMutation.uts   # useMutation 声明式变更状态机（乐观更新、异步状态）
├── stream/               # AI 流式大模型传输层
│   └── stream.uts        # requestStream / Utf8StreamDecoder / simulateStream
└── util/                 # 工具函数层
    ├── url.uts           # URL 路径安全合并与 Query 序列化
    └── helper.uts        # 配置克隆、错误解析辅助函数
```

---

## 📄 开源与规范协议

- 本库遵循 **MIT** 开源协议。
- 专为 **unibestX** 架构设计，严格遵循 uni-app X 原生强类型规范（全量 `type` 别名，杜绝 `interface` 报错）。
