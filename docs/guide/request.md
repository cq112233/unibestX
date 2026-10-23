# 请求篇

项目网络层基于 [`request-bestX`](https://github.com/cq112233/unibestX/tree/main/uni_modules/request-bestX) 开发，分为三层：

```text
页面 / 组件
    ↓ useQuery / useMutation
src/api/<module>/<file>.uts
    ↓ http / secondaryHttp
src/http
    ↓
request-bestX
    ↓
uni.request / uploadFile / downloadFile
```

- `src/http`：业务实例、Token、401、错误提示、响应解包、多域名。
- `src/api`：接口函数、DTO 类型、数据转换与 Mock。
- `request-bestX`：请求引擎、缓存、Query / Mutation hooks、上传下载与流式。

页面与组件禁止直接调用 `uni.request`、`uni.uploadFile`、`uni.downloadFile`。

## 导入口径

```uts
// 业务实例
import { http, secondaryHttp } from '@/src/http/index.uts';

// Hooks、类型与底层工具
import {
  useQuery,
  useMutation,
  useQueryClient,
  requestStream
} from '@/uni_modules/request-bestX/index.uts';
import type {
  HttpClient,
  HttpRequestConfig,
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
```

| 内容 | 导入位置 |
| :--- | :--- |
| 主业务 / 副业务实例 | `@/src/http/index.uts` |
| 业务错误类型 | `@/src/http/index.uts` |
| Query / Mutation / 缓存 | `@/uni_modules/request-bestX/index.uts` |
| 接口函数与 DTO | `@/src/api/<module>/<file>.uts` |

不要从 `src/http/instances/internal/` 导入实现，也不要在页面里重新创建 HTTP 客户端。

## 请求实例

| 实例 | BaseURL | H5 代理前缀 | 用途 |
| :--- | :--- | :--- | :--- |
| `http` | `VITE_SERVER_BASEURL` | `/api` | 主业务服务 |
| `secondaryHttp` | `VITE_SERVER_BASEURL_SECONDARY` | `/api-secondary` | 副服务 / 独立业务域名 |

```ini
# H5 直连为 false；需要 Vite 反向代理时设为 true
VITE_H5_USE_PROXY=false

VITE_SERVER_BASEURL=https://api.example.com
VITE_SERVER_BASEURL_SECONDARY=https://report.example.com
```

App 与小程序始终直连完整域名。H5 开启代理后请求相对路径，由 `vite.config.ts` 转发到真实服务。

### 业务实例已处理

- 自动注入当前 Token。
- 校验响应体业务状态码。
- 解包 `{ code, data, message }`，`then` 直接拿到业务 `data`。
- 统一提取网络错误与业务错误。
- 默认显示失败 Toast；可用 `extra.toast=false` 关闭。
- 401 清理 Token 与用户信息并跳登录页。

默认业务实例是单 Token 模式，没有刷新 Token 实现。需要双 Token 时，在 `src/http/instances/` 扩展实例并注入刷新回调，不要在页面里处理。

## API 层标准写法

所有接口函数放在 `src/api/<module>/`。页面只调用接口函数，不直接使用 `http`。

### GET 请求

```uts
// src/api/user/user.uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export type UserInfo = {
  id: number;
  name: string;
  avatar: string;
};

export function fetchUserApi(id: number): Promise<UserInfo> {
  return http.get<UTSJSONObject>(`/user/${id}`, {} as HttpRequestConfig)
    .then((data: UTSJSONObject): UserInfo => {
      return {
        id: data.getNumber('id') ?? 0,
        name: data.getString('name') ?? '',
        avatar: data.getString('avatar') ?? ''
      } as UserInfo;
    });
}
```

`http.get<T>` 的 `T` 是**解包后的业务 data 类型**，不是完整响应体。需要类型转换时，在 API 层把 `UTSJSONObject` 转成强类型 DTO。

### 分页 GET

```uts
export type PageResult<T> = {
  list: T[];
  total: number;
  hasMore: boolean;
};

export function fetchUserListApi(
  pageNo: number = 1,
  pageSize: number = 10,
  keyword: string = ''
): Promise<PageResult<UserInfo>> {
  return http.get<UTSJSONObject>('/user/list', {
    params: { page: pageNo, pageSize: pageSize, keyword: keyword } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): PageResult<UserInfo> => {
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    const total = data.getNumber('total') ?? 0;
    const page = data.getNumber('page') ?? pageNo;
    const size = data.getNumber('pageSize') ?? pageSize;
    return {
      list: rawList.map((item: UTSJSONObject): UserInfo => {
        return {
          id: item.getNumber('id') ?? 0,
          name: item.getString('name') ?? '',
          avatar: item.getString('avatar') ?? ''
        } as UserInfo;
      }),
      total: total,
      hasMore: page * size < total
    } as PageResult<UserInfo>;
  });
}
```

分页函数统一使用 `(pageNo = 1, pageSize = 10, keyword = '')` 签名，页面不需要了解后端分页字段。

### POST / PUT / DELETE

```uts
export type CreateUserInput = {
  name: string;
  avatar: string;
};

export function createUserApi(input: CreateUserInput): Promise<UserInfo> {
  return http.post<UserInfo>('/user', input as UTSJSONObject, {} as HttpRequestConfig);
}

export function updateUserApi(id: number, input: CreateUserInput): Promise<UserInfo> {
  return http.put<UserInfo>(`/user/${id}`, input as UTSJSONObject, {} as HttpRequestConfig);
}

export function deleteUserApi(id: number): Promise<null> {
  return http.delete<null>(`/user/${id}`, null, {} as HttpRequestConfig);
}
```

| 方法 | 签名 | 说明 |
| :--- | :--- | :--- |
| `http.request<T>` | `(config)` | 完全自定义请求 |
| `http.get<T>` | `(url, config?)` | 查询参数放 `config.params` |
| `http.post<T>` / `put<T>` / `patch<T>` / `delete<T>` | `(url, data?, config?)` | 请求体在第二参 |
| `http.upload<T>` | `(url, config)` | 必须显式写返回类型 |
| `http.downloadFile` | `(url, config?)` | 返回 `DownloadResult` |
| `http.stream` | `(config, onChunk, onEnd)` | 底层二进制分块 |

## 请求配置

`HttpRequestConfig` 常用字段：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `params` | `any` | query 参数，自动拼接与编码 |
| `data` | `any` | POST / PUT / PATCH 请求体 |
| `header` / `headers` | `UTSJSONObject` | 本次请求头 |
| `timeout` | `number` | 本次超时时间，业务实例默认 5000ms |
| `baseURL` | `string` | 覆盖实例域名 |
| `enableCache` | `boolean` | 开启同请求 TTL 内存缓存 |
| `filePath` | `string` | 上传文件本地路径 |
| `name` | `string` | 上传文件字段名 |
| `formData` | `any` | 上传附加表单 |
| `getTask` | `(task) => void` | 获取上传 / 下载任务句柄 |
| `extra` | `UTSJSONObject` | 业务扩展开关 |

常用 `extra`：

```uts
// 免登录接口
extra: { ignoreAuth: true } as UTSJSONObject

// 关闭自动错误 Toast，由页面自行展示
extra: { toast: false } as UTSJSONObject

// 跳过 401 刷新；仅供刷新接口等特殊场景
extra: { skipRefresh: true } as UTSJSONObject
```

## 异步状态 Hooks

页面读取数据使用 `useQuery`，写操作使用 `useMutation`，缓存联动使用 `useQueryClient`。三个 Hook 必须在组件 `setup` 中同步调用。

### useQuery

| 参数 | 类型 | 默认值 | 说明 |
| :--- | :--- | :---: | :--- |
| `queryKey` | `Array<any> \| string \| () => any` | 必填 | 缓存键；Ref 变化会自动重查 |
| `queryFn` | `(ctx) => Promise<T>` | 必填 | 查询函数，只调用 API 层 |
| `enabled` | `boolean \| Ref \| Getter` | `true` | 是否允许触发，适合依赖查询 |
| `staleTime` | `number` | `0` | 数据新鲜期，窗口内直接命中缓存 |
| `gcTime` | `number` | `300000` | 缓存回收时间 |
| `retry` | `number` | `0` | 网络错误重试次数 |
| `retryDelay` | `number` | `0` | 重试间隔 |
| `refetchInterval` | `number` | `0` | 轮询间隔 |
| `refetchOnReconnect` | `boolean` | `true` | 断网恢复后自动刷新 |
| `initialData` | `T \| null` | `null` | 首屏占位数据 |
| `initialDataFn` | `() => T \| null` | `null` | 动态初始数据 |

返回字段：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Ref<T \| null>` | 查询数据 |
| `lastError` | `Ref<Error \| null>` | 最近一次异常，字段名不是 `error` |
| `status` | `Ref<'pending' \| 'success' \| 'error'>` | 主状态 |
| `isPending` | `Ref<boolean>` | 首次查询尚未完成 |
| `isLoading` | `Ref<boolean>` | 首次且无有效缓存时加载中 |
| `isFetching` | `Ref<boolean>` | 任意网络拉取中，包含后台刷新 |
| `isSuccess` / `isError` | `Ref<boolean>` | 成功 / 失败状态 |
| `refetch` | `() => Promise<T \| null>` | 忽略 staleTime 强制重查 |
| `cancel` / `abort` | `() => void` | 取消正在执行的请求 |

```uts
import { ref } from 'vue';
import { useQuery } from '@/uni_modules/request-bestX/index.uts';
import type {
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
import { fetchUserListApi } from '@/src/api/user/user.uts';
import type { PageResult, UserInfo } from '@/src/api/user/user.uts';

const page = ref<number>(1);
const keyword = ref<string>('');

const {
  data: listData,
  isPending: listPending,
  isFetching: listFetching,
  isError: listError,
  lastError: listErrorObj,
  refetch: refetchList
} = useQuery<PageResult<UserInfo>>({
  queryKey: ['user', 'list', page, keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<PageResult<UserInfo>> => {
    return fetchUserListApi(page.value, 10, keyword.value);
  },
  staleTime: 30000,
  retry: 2
} as QueryOptions<PageResult<UserInfo>>);

function nextPage(): void {
  page.value = page.value + 1;
}
```

### useMutation

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| `mutationKey` | `Array<any> \| string` | 可选的变更标识 |
| `mutationFn` | `(variables) => Promise<TData>` | 写操作函数 |
| `onMutate` | `(variables) => any` | 变更前钩子，可做乐观更新 |
| `onSuccess` | `(data, variables, context) => void` | 成功回调 |
| `onError` | `(error, variables, context) => void` | 失败回调 |
| `onSettled` | `(data, error, variables, context) => void` | 完成回调 |
| `retry` / `retryDelay` | `number` | 重试配置 |

返回字段：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `data` | `Ref<TData \| null>` | 最近一次成功结果 |
| `variables` | `Ref<TVariables \| null>` | 最近一次执行参数 |
| `lastError` | `Ref<Error \| null>` | 最近一次异常 |
| `status` | `Ref<'idle' \| 'pending' \| 'success' \| 'error'>` | 变更状态 |
| `isPending` / `isLoading` | `Ref<boolean>` | 执行中 |
| `mutate` | `(variables) => void` | 非阻塞触发，异常走 `onError` / `lastError` |
| `mutateAsync` | `(variables) => Promise<TData>` | 可 await，并直接抛错 |
| `reset` | `() => void` | 重置为 idle |

```uts
import {
  useMutation,
  useQueryClient
} from '@/uni_modules/request-bestX/index.uts';
import type { MutationOptions } from '@/uni_modules/request-bestX/index.uts';
import { createUserApi } from '@/src/api/user/user.uts';
import type { CreateUserInput, UserInfo } from '@/src/api/user/user.uts';

const queryClient = useQueryClient();

const {
  isPending: creatingUser,
  mutate: createUser
} = useMutation<UserInfo, CreateUserInput>({
  mutationKey: ['user', 'create'],
  mutationFn: (input: CreateUserInput): Promise<UserInfo> => {
    return createUserApi(input);
  },
  onSuccess: (_created: UserInfo, _input: CreateUserInput, _ctx: any): void => {
    queryClient.invalidateQueries(['user', 'list']);
  },
  onError: (err: Error, _input: CreateUserInput, _ctx: any): void => {
    uni.showToast({ title: err.message, icon: 'none' });
  }
} as MutationOptions<UserInfo, CreateUserInput>);

function submitUser(input: CreateUserInput): void {
  createUser(input);
}
```

### 页面消费状态

```html
<view v-if="listPending">
  <text>正在加载...</text>
</view>

<view v-else-if="listError">
  <text>{{ listErrorObj?.message ?? '加载失败' }}</text>
  <text @click="refetchList">重新加载</text>
</view>

<view v-else>
  <text>共 {{ listData?.total ?? 0 }} 条</text>
  <text>{{ listFetching ? '同步中...' : '已加载' }}</text>
  <text @click="nextPage">下一页</text>
  <text @click="submitUser({ name: 'Alice', avatar: '' })">
    {{ creatingUser ? '提交中...' : '新增用户' }}
  </text>
</view>
```

- `isPending` 表示首次查询状态；`isFetching` 包含后台刷新、轮询和重新激活。
- `lastError` 是 Hook 的异常字段，不是 `error`。
- 模板自动解包 Ref；在 `script` 中读取时需要 `.value`。
- 不要为纯转发的 `isPending` / `isFetching` / `isError` 写 `computed`。

## 缓存操作

```uts
const queryClient = useQueryClient();
const listKey: Array<any> = ['user', 'list', 1, ''];

// 前缀失效：所有 ['user', 'list', ...] 查询重新拉取
queryClient.invalidateQueries(['user', 'list']);

// 读取 / 写入缓存
const cached = queryClient.getQueryData<UserInfo>(listKey);
queryClient.setQueryData<UserInfo>(listKey, nextUser);

// 取消 / 移除
queryClient.cancelQueries(['user', 'list']);
queryClient.removeQueries(listKey);
```

| 方法 | 用途 |
| :--- | :--- |
| `invalidateQueries(filters)` | 标记失效并通知活跃查询重拉 |
| `refetchQueries(filters)` | 重新拉取匹配查询 |
| `getQueryData(key)` | 同步读取缓存 |
| `setQueryData(key, data)` | 写入或覆盖缓存 |
| `removeQueries(filters)` | 移除缓存 |
| `cancelQueries(filters)` | 取消正在执行的查询 |

`queryKey` 传数组时按前缀匹配；需要精确匹配时使用 `{ queryKey, exact: true }`。

## 文件上传

```uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export function uploadAvatarApi(filePath: string): Promise<string> {
  return http.upload<string>('/upload/avatar', {
    filePath: filePath,
    name: 'file'
  } as HttpRequestConfig);
}
```

上传进度通过 `getTask` 获取任务句柄：

```uts
http.upload<string>('/upload/avatar', {
  filePath: filePath,
  name: 'file',
  getTask: (task: any): void => {
    const uploadTask = task as UploadTask;
    uploadTask.onProgressUpdate((res: OnProgressUpdateResult): void => {
      console.log('上传进度', res.progress);
    });
  }
} as HttpRequestConfig);
```

## 文件下载

```uts
import { http } from '@/src/http/index.uts';
import type {
  DownloadResult,
  HttpRequestConfig
} from '@/uni_modules/request-bestX/index.uts';

export function downloadReportApi(
  url: string,
  onProgress: ((progress: number) => void) | null = null
): Promise<DownloadResult> {
  const progressCallback = onProgress;
  return http.downloadFile(url, {
    getTask: (task: any): void => {
      const downloadTask = task as DownloadTask;
      if (progressCallback != null) {
        downloadTask.onProgressUpdate((res: OnProgressDownloadResult): void => {
          progressCallback(res.progress);
        });
      }
    }
  } as HttpRequestConfig);
}
```

## 流式请求

文本流推荐使用 `requestStream`，它内置增量 UTF-8 解码，避免中文和 Emoji 在分块边界乱码：

```uts
import {
  requestStream
} from '@/uni_modules/request-bestX/index.uts';
import type {
  StreamChunk,
  StreamTask
} from '@/uni_modules/request-bestX/index.uts';
import { http } from '@/src/http/index.uts';

let reply: string = '';

const task: StreamTask = requestStream({
  url: '/ai/chat',
  body: JSON.stringify({ question: '你好' }),
  onChunk: (chunk: StreamChunk): void => {
    reply = reply + chunk.text;
  },
  onComplete: (): void => {
    console.log('流式输出完成');
  },
  onError: (err: Error): void => {
    console.error('流式输出失败', err.message);
  }
}, http);

// 主动中止
// task.abort();
```

`requestStream` 的 `onChunk` 每块都是完整文本片段，不要直接把半截 JSON 交给渲染器。需要解析 SSE / NDJSON 时，先按协议分帧再更新 UI。底层 `http.stream` 返回 `ArrayBuffer`，更适合自定义二进制协议。

## 错误处理

业务错误类型：

| 类型 | 含义 |
| :--- | :--- |
| `HttpError` | HTTP 状态码、网络错误或 401 |
| `BusinessError` | HTTP 成功但业务 code 表示失败 |
| `resolveErrorMessage` | 把原始错误归一成用户可读文案 |

页面需要手动收尾时使用双参 `.then(ok, err)`：

```uts
let loading = true;

fetchUserApi(1).then((user: UserInfo): void => {
  console.log(user);
}, (err: any): void => {
  uni.showToast({ title: `${err}`, icon: 'none' });
}).finally((): void => {
  loading = false;
});
```

不要链式写 `.catch()`，Kotlin 端会出现重载不可解析。默认请求层已经显示错误 Toast，只有设置了 `extra.toast=false` 或需要额外交互时才在页面重复提示。

## Mock 与接口生成

```bash
# H5 + 本地 Mock
pnpm dev:mock

# 根据 OpenAPI / Apifox 契约生成 UTS 类型与接口
pnpm api:gen
```

Mock 与真实接口切换只改接口函数体，冻结函数签名和 DTO，页面代码不需要改动。生成规范见[自动生成接口](/guide/api-generator)。

## 常见错误

| 错误写法 | 正确做法 |
| :--- | :--- |
| 页面直接 `uni.request` | 页面 → `src/api` → `http` |
| `http.get<{ code, data }>` | `T` 只写解包后的 data 类型 |
| 把 `UTSJSONObject` 传给页面 | 在 API 层转换成 DTO |
| 页面里重复注入 Token | 交给 `src/http` |
| 写操作使用 `useQuery` | 使用 `useMutation` |
| 写成功后手动改列表 | `invalidateQueries` 自动重拉 |
| 解构 `error` | 使用 `lastError` |
| 修改 queryKey 后手动 `refetch` | 让响应式 queryKey 自动触发 |
| 无泛型调用 `http.upload` | 显式写 `http.upload<T>` |
| 半截流数据直接渲染 | 先累积 / 分帧 |
| 页面处理 401 跳登录 | 交给业务实例 |
| 副服务重新创建客户端 | 使用 `secondaryHttp` |

## 验证清单

```bash
pnpm typecheck
pnpm test
pnpm exec eslint src/http src/api --ext .uts,.uvue
git diff --check
```

- 页面没有直接调用原生网络 API。
- 接口函数签名稳定，强类型 DTO 不越过 API 层。
- 查询使用 `useQuery`，变更使用 `useMutation`。
- 写成功后失效对应缓存。
- `lastError`、`isPending`、`isFetching` 使用正确。
- 上传泛型、下载任务与流式中止逻辑完整。
- 401、Token 和登录跳转没有在页面重复实现。
- 涉及 App 原生网络行为时，额外完成 HBuilderX / 真机验证。

> 完整底层 API 见 [`request-bestX` 文档](https://github.com/cq112233/unibestX/tree/main/uni_modules/request-bestX) 与 [`src/http/README.md`](https://github.com/cq112233/unibestX/blob/main/src/http/README.md)。
