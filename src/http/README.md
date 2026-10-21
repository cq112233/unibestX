# src/http 网络通信层

全项目**唯一的网络出口**。基于纯原生 `uni.request` / `uni.uploadFile` / `uni.downloadFile` 驱动，零第三方库依赖。

底层核心调度引擎与通用能力已沉淀至独立模块 `uni_modules/request-bestX`；`src/http` 专注于业务层（`instances`、`error`、`openapi`），负责 Token 鉴权注入、401 静默刷新与重放、统一错误提示与数据解包。

> 🚨 **业务与页面一律不直接调 `uni.request` / `uni.uploadFile` / `uni.downloadFile`**。统一通过 `src/http` 提供的 `http` 实例发起业务请求；通用能力（如 `useQuery`、`useMutation`、`requestStream` 与通用类型）从 `@/uni_modules/request-bestX` 引入。

---

## 目录结构

```text
src/http/
├── index.uts                     # 统一业务门面：导出业务实例 (http/secondaryHttp) 与业务错误/枚举
├── instances/                    # 业务 HTTP 客户端实例与业务规则层
│   ├── index.uts                 # 业务实例导出
│   ├── default.uts               # 默认主业务 http 单例
│   ├── secondary.uts             # 辅助域名 secondaryHttp 单例
│   └── internal/
│       ├── factory.uts           # 业务实例配置工厂（注入 Token、401 刷新重试、统一 Toast、数据解包）
│       ├── refresh.uts           # 业务 Token 静默刷新（单飞，并发 401 仅刷新一次）
│       ├── enum.uts              # ResultEnum / ShowMessage / IResponse
│       └── config.uts            # 业务多域名与 H5 代理路径映射
└── error/
    └── error.uts                 # 统一错误归一：AppErrorInfo / BusinessError / resolveErrorMessage
```

---

## 快速上手

### 1. 发请求（api 层的标准写法）

```uts
// src/api/<page>/<page>.uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

/**
 * 分页拉取列表
 * @param pageNo 页码，从 1 开始计数
 * @param pageSize 单页条数，默认 10（一屏）
 * @param keyword 搜索关键词，空串表示不按关键词过滤
 */
export function fetchFooList(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<PageResult<FooItem>> {
  return http.get<UTSJSONObject>('/foo', {
    params: { name: keyword, page: pageNo, pageSize } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): PageResult<FooItem> => {
    // ⚠️ `getArray<T>(key, 默认值)` 的泛型实参必须显式写全：UTS 不从默认值反推元素类型
    // @ts-expect-error UTS 编译要求显式泛型实参；TS 侧 getArray 为 any 会报 TS2347
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    const total = data.getNumber('total') ?? 0;
    const page = data.getNumber('page') ?? pageNo;
    const size = data.getNumber('pageSize') ?? pageSize;
    return {
      list: rawList.map((item: UTSJSONObject): FooItem => {
        return {
          id: item.getNumber('id') ?? 0,
          name: item.getString('name') ?? ''
        } as FooItem;
      }),
      hasMore: page * size < total,
      total: total
    } as PageResult<FooItem>;
  });
}
```

三个必须知道的点：

1. **返回值已经解包**。`http.get<T>` 内部把响应体的 `{ code, data, message }` 拆开了，`then` 拿到的就是 `data` 本身 —— 所以 `T` 只标注**业务数据**的类型（`http.get<UTSJSONObject>`）。
2. **`http.post<T>(url, data, config)`**：请求体走第二参；`put` / `patch` / `delete` 签名相同。
3. **页面侧用双参 `.then(ok, err)` 收尾，不要写链式 `.catch()`** —— 后者在 Kotlin 端报 `error25` 重载不可解析。关 `loading` 放 `finally`。

| 方法 | 签名 | 说明 |
| :--- | :--- | :--- |
| `http.request<T>` | `(config: HttpRequestConfig)` | 需要完全自定义配置时使用 |
| `http.get<T>` | `(url: string, config?: HttpRequestConfig \| null)` | 查询参数放 `config.params` |
| `http.post<T>` / `put<T>` / `patch<T>` / `delete<T>` | `(url: string, data?: any \| null, config?)` | 常规变更请求（`patch` 只传需变更的字段） |
| `http.upload<T>` | `(url: string, config)` | 文件上传，`T` 无法从入参推断，需显式标注 |
| `http.downloadFile` | `(url: string, config?) => Promise<DownloadResult>` | 文件下载 |
| `http.stream` | `(config, onChunk, onEnd) => StreamTask` | 流式分块传输（SSE / NDJSON） |

### 2. 文件上传

```uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

/**
 * 上传单个文件到 OSS
 * @param filePath 本地文件路径（App 端为 `file://` 绝对路径，H5 为相对路径）
 * @returns OSS 上的可访问地址
 */
export function uploadFooFile(filePath: string): Promise<string> {
  return http.upload<string>(FOO_UPLOAD_PATH, {
    filePath,
    name: 'file' // 后端接收的字段名
  } as HttpRequestConfig);
}
```

### 3. 文件下载（带进度）

```uts
import { http } from '@/src/http/index.uts';
import type { DownloadResult, HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export function downloadFooFile(
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

---

## 异步请求 Hooks（对标 TanStack Query）

本项目 HTTP 层基于 `request-bestX` 模块开发，并直接复用其声明式异步状态管理能力。页面读取服务端数据用 `useQuery`，新增 / 修改 / 删除用 `useMutation`，再通过 `useQueryClient` 联动缓存。完整参数表见 [request-bestX](../../uni_modules/request-bestX/readme.md)。

| Hook | 职责 |
| :--- | :--- |
| `useQuery` | 查询数据，自动维护 `data` / `isPending` / `isFetching` / `isError` / `lastError` 与缓存 |
| `useMutation` | 执行写操作，提供 `isPending` / `mutate` / `mutateAsync` 与 `onSuccess` / `onError` 生命周期 |
| `useQueryClient` | 读取、写入、失效或移除查询缓存 |

### 1. 查询、变更与缓存联动

```html
<script setup lang="uts">
import { ref } from 'vue';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@/uni_modules/request-bestX/index.uts';
import type {
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
import { createFoo, fetchFooList } from '@/src/api/foo/foo.uts';
import type { FooItem, PageResult } from '@/src/api/foo/foo.uts';

/** 全局查询客户端：读取 / 失效缓存 */
const queryClient = useQueryClient();

/** 当前页码 */
const page = ref<number>(1);

/** 搜索关键字 */
const keyword = ref<string>('');

// useQuery：queryKey 中放 Ref，页码或关键字变化后自动取消旧请求并重新拉取
const {
  data: listData,
  isPending: listPending,
  isFetching: listFetching,
  isError: listError,
  lastError: listErrorObj,
  refetch: refetchList
} = useQuery<PageResult<FooItem>>({
  queryKey: ['foo', 'list', page, keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<PageResult<FooItem>> => {
    return fetchFooList(page.value, 10, keyword.value);
  },
  staleTime: 30000,
  retry: 2
} as QueryOptions<PageResult<FooItem>>);

// useMutation：成功后按 queryKey 前缀失效列表缓存
const {
  isPending: creatingFoo,
  mutate: createFooItem
} = useMutation<FooItem, string>({
  mutationFn: (name: string): Promise<FooItem> => {
    return createFoo(name);
  },
  onSuccess: (_created: FooItem, _name: string, _ctx: any): void => {
    queryClient.invalidateQueries(['foo', 'list']);
  },
  onError: (err: Error, _name: string, _ctx: any): void => {
    uni.showToast({ title: err.message, icon: 'none' });
  }
} as MutationOptions<FooItem, string>);

/** 翻页：无需手写 watch，queryKey 变化会自动查询 */
function nextPage(): void {
  page.value = page.value + 1;
}

/** 新建：mutate 不抛出异常，失败统一走 onError */
function submitFoo(name: string): void {
  createFooItem(name);
}
</script>
```

### 2. 页面中消费响应式状态

Vue 模板会自动解包 Hook 返回的 Ref：

```html
<view v-if="listPending">
  <text>正在加载...</text>
</view>

<view v-else-if="listError">
  <text>{{ listErrorObj?.message ?? '加载失败' }}</text>
  <text @click="refetchList">点击重试</text>
</view>

<view v-else>
  <text>共 {{ listData?.total ?? 0 }} 条{{ listFetching ? '（同步中）' : '' }}</text>
  <text @click="nextPage">下一页</text>
  <text @click="submitFoo('新条目')">{{ creatingFoo ? '提交中...' : '新建' }}</text>
</view>
```

- `isPending`：首次查询尚未完成；`isFetching`：任意网络拉取中，包含后台刷新和轮询。
- `lastError` 是当前 Hook 的异常字段；`refetch()` 会忽略 `staleTime`，强制请求服务端。
- `queryFn` 只调用 `src/api` 接口函数，不在页面里直接使用 `http`。

### 3. 缓存操作

```uts
import { useQueryClient } from '@/uni_modules/request-bestX/index.uts';
import type { FooItem, PageResult } from '@/src/api/foo/foo.uts';

// 沿用上例中的 page / keyword
const queryClient = useQueryClient();

// 前缀失效：所有 ['foo', 'list', ...] 查询都会重新拉取
queryClient.invalidateQueries(['foo', 'list']);

/** 乐观更新：把服务端返回的新列表写入当前查询缓存 */
function updateFooCache(nextPageData: PageResult<FooItem>): void {
  const listKey: Array<any> = ['foo', 'list', page.value, keyword.value];
  queryClient.setQueryData<PageResult<FooItem>>(listKey, nextPageData);
}

/** 移除当前查询缓存 */
function removeFooCache(): void {
  const listKey: Array<any> = ['foo', 'list', page.value, keyword.value];
  queryClient.removeQueries(listKey);
}
```

| 方法 | 用途 |
| :--- | :--- |
| `invalidateQueries(filters)` | 将匹配缓存标记过期并通知活跃查询重新拉取，传数组时按前缀匹配 |
| `refetchQueries(filters)` | 重新拉取匹配查询 |
| `getQueryData(key)` | 同步读取指定 `queryKey` 的缓存数据 |
| `setQueryData(key, data)` | 直接写入或覆盖指定缓存 |
| `removeQueries(filters)` | 移除匹配缓存 |
| `cancelQueries(filters)` | 取消匹配查询中正在执行的请求 |

### 4. 使用约束

- `useQuery` / `useMutation` / `useQueryClient` 必须在组件的 `setup` 内调用，不能放在普通函数或模块顶层。
- `queryKey` 使用稳定数组：固定业务前缀在前，动态参数（`page`、`keyword` 等）直接放 Ref，变更后自动重查。
- 查询用 `useQuery`，写操作用 `useMutation`；写成功后调用 `invalidateQueries([业务前缀])`，不要在页面手工维护列表副本。
- `mutate` 不抛出异常，错误交给 `onError` / `lastError`；需要 `await` 并捕获异常时使用 `mutateAsync`。
