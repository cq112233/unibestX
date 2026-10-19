# src/http 网络通信层

全项目**唯一的网络出口**。基于纯原生 `uni.request` / `uni.uploadFile` / `uni.downloadFile` 驱动，零第三方库依赖。

底层核心模块（`src/http/request`）为纯净基础设施调度引擎，不含任何业务代码；业务层（`src/http/instances`）负责 Token 鉴权注入、401 静默刷新与重放、统一错误提示与数据解包。

> 🚨 **业务与页面一律不直接调 `uni.request` / `uni.uploadFile` / `uni.downloadFile`**。统一通过 `src/http` 提供的 `http` 实例或各业务专属客户端发起请求。

---

## 目录结构

```text
src/http/
├── index.uts                     # 统一门面：re-export 核心库、业务实例与 Vue Query Hooks
├── request/                      # 纯净原生 HTTP 核心调度库（可独立沉淀）
│   ├── index.uts                 # 核心门面：createHttpClient、HttpClient、QueryClient、useQuery、useMutation...
│   ├── core/                     # 核心层
│   │   ├── client.uts            # HttpClient 核心调度引擎（钩子链 / 取消 / 去重 / TTL 缓存 / stream）
│   │   ├── lifecycle.uts         # RequestLifecycle：取消登记 + 并发去重 + TTL 缓存 + 请求指纹
│   │   ├── types.uts             # HttpRequestConfig / HttpResponse / HttpError / AbortableTask / 钩子类型
│   │   └── enum.uts              # ContentTypeEnum（仅网络传输层标准常量）
│   ├── hooks/                    # Vue Query 风格组合式请求与数据中枢层
│   │   ├── index.uts             # Hooks 门面导出
│   │   ├── types.uts             # QueryKey / QueryOptions / MutationOptions / QueryClient 等强类型定义
│   │   ├── queryClient.uts       # QueryClient 缓存调度中枢、useQueryClient 与 VueQueryPlugin
│   │   ├── useQuery.uts          # useQuery 声明式查询（staleTime / 轮询 / 自动重试 / abort / 响应式）
│   │   └── useMutation.uts       # useMutation 变更状态机（乐观更新 onMutate / mutateAsync / 状态管理）
│   └── util/                     # 工具层
│       ├── url.uts               # URL 路径拼接与 Query 序列化
│       └── helper.uts            # 错误提取、状态码解析、配置克隆
├── instances/                    # 业务 HTTP 客户端实例与业务规则层
│   ├── default.uts               # 默认主业务 http 单例
│   ├── secondary.uts             # 辅助域名 secondaryHttp 单例
│   └── internal/
│       ├── factory.uts           # 业务实例配置工厂（注入 Token、401 刷新重试、统一 Toast、数据解包）
│       ├── refresh.uts           # 业务 Token 静默刷新（单飞，并发 401 仅刷新一次）
│       ├── enum.uts              # ResultEnum / ShowMessage / IResponse
│       └── config.uts            # 业务多域名与 H5 代理路径映射
├── stream/
│   └── stream.uts                # requestStream(Observable) / Utf8StreamDecoder / simulateStream
└── error/
    └── error.uts                 # 统一错误归一：AppErrorInfo / BusinessError / HttpError / resolveErrorMessage
```

---

## 快速上手

### 1. 发请求（api 层的标准写法）

```uts
// src/api/<page>/<page>.uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/src/http/index.uts';

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
2. **`http.post<T>(url, data, config)`**：请求体走第二参；`put` / `delete` 签名相同。
3. **页面侧用双参 `.then(ok, err)` 收尾，不要写链式 `.catch()`** —— 后者在 Kotlin 端报 `error25` 重载不可解析。关 `loading` 放 `finally`。

| 方法 | 签名 | 说明 |
| :--- | :--- | :--- |
| `http.request<T>` | `(config: HttpRequestConfig)` | 需要完全自定义配置时使用 |
| `http.get<T>` | `(url: string, config?: HttpRequestConfig \| null)` | 查询参数放 `config.params` |
| `http.post<T>` / `put<T>` / `delete<T>` | `(url: string, data?: any \| null, config?)` | 常规变更请求 |
| `http.upload<T>` | `(url: string, config)` | 文件上传，`T` 无法从入参推断，需显式标注 |
| `http.downloadFile` | `(url: string, config?) => Promise<DownloadResult>` | 文件下载 |
| `http.stream` | `(config, onChunk, onEnd) => StreamTask` | 流式分块传输（SSE / NDJSON） |

### 2. 文件上传

```uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/src/http/index.uts';

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
import type { DownloadResult, HttpRequestConfig } from '@/src/http/index.uts';

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
