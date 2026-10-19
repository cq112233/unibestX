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
