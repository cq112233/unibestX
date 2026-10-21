# 10 HTTP 网络层手册（`src/http` 业务实例 · `request-bestX` hooks · 错误与鉴权）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：新增 / 修改接口函数、页面接真实后端、使用 `useQuery` / `useMutation` / `useQueryClient`、上传 / 下载 / 流式请求、处理 401、Token 注入、双域名、统一错误提示时 —— **必须先阅读本分册**。
>
> **权威源码说明**：[src/http/README.md](../../../../src/http/README.md) 是业务网络层的完整文档，底层 Hook 参数以 [`uni_modules/request-bestX/readme.md`](../../../../uni_modules/request-bestX/readme.md) 为准；本分册负责把两者收敛成可执行规则与正反例。

---

## 10.1 三层职责：页面 → api → http / hooks

```text
页面 / 组件
  ├─ 读数据：useQuery({ queryFn: fetchXxxApi })
  ├─ 写数据：useMutation({ mutationFn: createXxxApi })
  └─ 禁止：uni.request / 在页面直接拼请求
          │
          ▼
src/api/<page>/<page>.uts          ← 接口函数：Promise<T> + 类型转换 + 模拟数据
          │
          ▼
src/http/instances                 ← 业务实例：Token、401 刷新、Toast、解包、多域名
          │
          ▼
uni_modules/request-bestX          ← 请求引擎：HttpClient、hooks、上传 / 下载 / 流式
```

### 导入口径

```uts
// ✅ 业务 HTTP 实例
import { http, secondaryHttp } from '@/src/http/index.uts';

// ✅ 底层 hooks / 类型 / 工具
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@/uni_modules/request-bestX/index.uts';
import type {
  HttpClient,
  HttpRequestConfig,
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
```

| 你要的 | 从哪拿 |
| :--- | :--- |
| 主业务请求实例 | `@/src/http/index.uts` 的 `http` |
| 副业务请求实例 | `@/src/http/index.uts` 的 `secondaryHttp` |
| 业务错误类型 / 错误归一 | `@/src/http/index.uts` |
| `useQuery` / `useMutation` / `useQueryClient` | `@/uni_modules/request-bestX/index.uts` |
| 请求配置 / 返回类型 | `@/uni_modules/request-bestX/index.uts` 的 `import type` |
| 页面接口函数 | `@/src/api/<page>/<page>.uts` |

> 🚨 业务页面和组件**严禁直接调用** `uni.request` / `uni.uploadFile` / `uni.downloadFile`。连接口层都不应绕过 `src/http`。

---

## 10.2 请求实例与自动能力

### 10.2.1 `http` 与 `secondaryHttp`

| 实例 | BaseURL | H5 代理前缀 | 用途 |
| :--- | :--- | :--- | :--- |
| `http` | `VITE_SERVER_BASEURL` | `/api` | 主业务服务 |
| `secondaryHttp` | `VITE_SERVER_BASEURL_SECONDARY` | `/api-secondary` | 副服务 / 独立业务域 |

```uts
import { http, secondaryHttp } from '@/src/http/index.uts';

// 主服务
http.get<UTSJSONObject>('/user/profile');

// 副服务
secondaryHttp.get<UTSJSONObject>('/report/summary');
```

- H5 开启 `VITE_H5_USE_PROXY=true` 时走 Vite 代理；App / 小程序直连环境变量中的域名。
- 不要在业务里重新 `new` 一个请求客户端；需要独立域名时先确认是否已有实例或应在 `instances/` 扩展。

### 10.2.2 已内置、不要重复实现的业务能力

| 能力 | 位置 | 业务侧注意 |
| :--- | :--- | :--- |
| Token 自动注入 | `instances/internal/factory.uts` | 默认自动加 `token`，不需要手写鉴权头 |
| 401 静默刷新 / 重放 | `instances/internal/refresh.uts` | 并发 401 单飞刷新；业务不要重复刷新或重复跳登录 |
| 业务 code 校验 | `factory.uts` | 非成功码统一抛错；默认 Toast，可用 `extra.toast=false` 关闭 |
| 响应数据解包 | `factory.uts` | `http.get<T>` 的 `then` 直接拿业务 `data` |
| 统一错误归一 | `error/error.uts` | 使用 `BusinessError` / `HttpError` / `resolveErrorMessage` |

常用 `extra` 开关：

```uts
// 免登录接口
extra: { ignoreAuth: true } as UTSJSONObject

// 关闭业务错误自动 Toast，由页面自行展示
extra: { toast: false } as UTSJSONObject

// 跳过 401 刷新（刷新接口自身使用，业务一般不要碰）
extra: { skipRefresh: true } as UTSJSONObject
```

---

## 10.3 接口层标准写法

### 10.3.1 GET：返回值已解包

```uts
// src/api/order/order.uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export type OrderItem = {
  id: number;
  title: string;
};

export type OrderPage = {
  list: OrderItem[];
  hasMore: boolean;
  total: number;
};

/**
 * 分页拉取订单
 * @param pageNo 页码，从 1 开始
 * @param pageSize 单页条数，默认 10
 * @param keyword 搜索关键词，空串表示不过滤
 */
export function fetchOrderListApi(
  pageNo: number = 1,
  pageSize: number = 10,
  keyword: string = ''
): Promise<OrderPage> {
  return http.get<UTSJSONObject>('/order/list', {
    params: {
      page: pageNo,
      pageSize: pageSize,
      keyword: keyword
    } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): OrderPage => {
    // @ts-expect-error UTS 要求显式泛型实参
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    const total = data.getNumber('total') ?? 0;
    return {
      list: rawList.map((item: UTSJSONObject): OrderItem => {
        return {
          id: item.getNumber('id') ?? 0,
          title: item.getString('title') ?? ''
        } as OrderItem;
      }),
      hasMore: pageNo * pageSize < total,
      total: total
    } as OrderPage;
  });
}
```

必须记住：

1. `http.get<T>` 的 `T` 是**业务 data 的类型**，不是整个 `{ code, data, message }` 响应体。
2. `UTSJSONObject` 必须在 api 层转成强类型 DTO，**不要泄露给页面模板**。
3. `getNumber()` 返回 `number | null`，必须用 `??` 兜底。
4. `getArray<T>(key, default)` 在 UTS 侧要显式写泛型实参。
5. `as` 不能写泛型实例化别名；直接写 `as OrderPage` / `as PageResult<OrderItem>`，不要先定义别名再实例化。

### 10.3.2 POST / PUT / DELETE

```uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

export type CreateOrderInput = {
  title: string;
  amount: number;
};

/** 新建订单 */
export function createOrderApi(input: CreateOrderInput): Promise<OrderItem> {
  return http.post<OrderItem>('/order', input as UTSJSONObject, {} as HttpRequestConfig);
}

/** 更新订单 */
export function updateOrderApi(id: number, input: CreateOrderInput): Promise<OrderItem> {
  return http.put<OrderItem>(`/order/${id}`, input as UTSJSONObject, {} as HttpRequestConfig);
}

/** 删除订单 */
export function deleteOrderApi(id: number): Promise<null> {
  return http.delete<null>(`/order/${id}`, null, {} as HttpRequestConfig);
}
```

- 签名固定后，后端就绪只换函数体，页面侧零改动。
- 接口函数统一带 `Api` 后缀：`fetchXxxApi` / `createXxxApi` / `updateXxxApi` / `deleteXxxApi`。
- 分页签名统一 `(pageNo = 1, pageSize = 10, keyword = '')`。
- 新页面必须同批建 `src/api/<page>/<page>.uts`，页面里不能 `ref([...])` 直接造假数据。

---

## 10.4 TanStack Query 风格 hooks

### 10.4.1 何时用哪个

| Hook | 场景 | 关键状态 / 方法 |
| :--- | :--- | :--- |
| `useQuery` | 读取服务端数据、列表、详情、轮询 | `data`、`isPending`、`isFetching`、`isError`、`lastError`、`refetch` |
| `useMutation` | 新增、修改、删除 | `isPending`、`mutate`、`mutateAsync`、`lastError`、`reset` |
| `useQueryClient` | 缓存读写、失效、取消 | `invalidateQueries`、`setQueryData`、`removeQueries`、`cancelQueries` |

### 10.4.2 标准查询 + 变更 + 缓存失效

```uts
<script setup lang="uts">
import { ref } from 'vue';
import {
  useMutation,
  useQuery,
  useQueryClient
} from '@/uni_modules/request-bestX/index.uts';
import type {
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
import { createOrderApi, fetchOrderListApi } from '@/src/api/order/order.uts';
import type { CreateOrderInput, OrderItem, OrderPage } from '@/src/api/order/order.uts';

const queryClient = useQueryClient();
const page = ref<number>(1);
const keyword = ref<string>('');

// 读取：queryKey 中放 Ref，页码 / 关键字变化自动重查
const {
  data: listData,
  isPending: listPending,
  isFetching: listFetching,
  isError: listError,
  lastError: listErrorObj,
  refetch: refetchList
} = useQuery<OrderPage>({
  queryKey: ['order', 'list', page, keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<OrderPage> => {
    return fetchOrderListApi(page.value, 10, keyword.value);
  },
  staleTime: 30000,
  retry: 2
} as QueryOptions<OrderPage>);

// 写入：成功后按 queryKey 前缀失效列表缓存
const {
  isPending: creatingOrder,
  mutate: createOrder
} = useMutation<OrderItem, string>({
  mutationFn: (title: string): Promise<OrderItem> => {
    return createOrderApi({ title, amount: 0 } as CreateOrderInput);
  },
  onSuccess: (_created: OrderItem, _title: string, _ctx: any): void => {
    queryClient.invalidateQueries(['order', 'list']);
  },
  onError: (err: Error, _title: string, _ctx: any): void => {
    uni.showToast({ title: err.message, icon: 'none' });
  }
} as MutationOptions<OrderItem, string>);
</script>
```

规则：

- `useQuery` / `useMutation` / `useQueryClient` 必须在组件 `setup` 内同步调用。
- `queryFn` / `mutationFn` 只调用 `src/api` 函数，不在页面里直接 `http.get`。
- 动态参数直接放 `queryKey` 的 Ref，**不要自己 watch 后再手动 refetch**。
- 错误字段叫 `lastError`，不是 `error`。
- `mutate` 不抛异常，错误交给 `onError` / `lastError`；需要 await 并捕获时用 `mutateAsync`。
- 写成功后调用 `invalidateQueries([业务前缀])`，不要在页面维护列表副本。

### 10.4.3 缓存操作

```uts
const queryClient = useQueryClient();
const listKey: Array<any> = ['order', 'list', page.value, keyword.value];

// 前缀失效：所有 ['order', 'list', ...] 查询后台重拉
queryClient.invalidateQueries(['order', 'list']);

// 乐观更新 / 写入缓存
queryClient.setQueryData<OrderPage>(listKey, nextPageData);

// 移除 / 取消
queryClient.removeQueries(listKey);
queryClient.cancelQueries(['order', 'list']);
```

---

## 10.5 上传、下载与流式

### 上传

```uts
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

/** 上传单个文件，返回 OSS 地址 */
export function uploadAvatarApi(filePath: string): Promise<string> {
  return http.upload<string>('/upload/avatar', {
    filePath: filePath,
    name: 'file'
  } as HttpRequestConfig);
}
```

`http.upload<T>` 无法从入参推断返回类型，**必须显式写泛型实参**。

### 下载

```uts
import { http } from '@/src/http/index.uts';
import type { DownloadResult, HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

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

### 流式

```uts
const task = http.stream({
  url: '/ai/chat',
  method: 'POST',
  data: { question: '你好' } as UTSJSONObject
} as HttpRequestConfig, (chunk: string): void => {
  // 逐块拼接 / 渲染，不要把半截块直接交给渲染器
}, (): void => {
  // 流结束
});
```

流式接口的完整参数、取消方式与平台差异见 `uni_modules/request-bestX/readme.md`。

---

## 10.6 错误处理与 Promise 写法

### 页面 / api 内需要手动收尾时

```uts
let loading = true;

fetchOrderListApi(1, 10, '').then(
  (data: OrderPage): void => {
    // 成功
  },
  (err: any): void => {
    // 失败：统一错误信息已经由 http 实例归一
    uni.showToast({ title: `${err}`, icon: 'none' });
  }
).finally((): void => {
  loading = false;
});
```

- 使用双参 `.then(ok, err)`，**严禁链式 `.catch()`**：Kotlin 端会报 `error25` 重载不可解析。
- 请求层已经默认处理业务错误 Toast；页面只在 `extra.toast=false` 或需要额外交互时再提示。
- 401、Token 刷新、登录跳转由业务实例统一处理，页面不要重复实现。
- 请求失败必须回滚 loading / submitting 状态，避免按钮永久禁用。

---

## 10.7 高频坑点

| # | 错误写法 | 正确做法 |
| :--- | :--- | :--- |
| ① | 页面直接 `uni.request` | 页面 → `src/api` → `http`，统一走业务实例 |
| ② | `http.get<{ code, data }>` | `T` 只写解包后的业务 data 类型 |
| ③ | 把 `UTSJSONObject` 返回给页面 | 在 api 层转强类型 DTO，模板不接触弱类型对象 |
| ④ | `getNumber('id')` 直接赋给 `number` | 用 `?? 0` 兜底 |
| ⑤ | `http.upload('/x', ...)` 不写泛型 | 写 `http.upload<string>(...)` |
| ⑥ | 在页面重复处理 401 / Token | 交给 `src/http` 实例，业务层不重复 |
| ⑦ | 写操作用 `useQuery` | 写操作使用 `useMutation` |
| ⑧ | 修改 queryKey 里的 Ref 后又手动 `refetch` | 让 `queryKey` 响应式依赖自动触发，避免重复请求 |
| ⑨ | 从 hook 解构 `error` | 字段是 `lastError` |
| ⑩ | 使用链式 `.catch()` | 双参 `.then(ok, err)` + `finally` |
| ⑪ | 写成功后手动改列表副本 | `invalidateQueries([业务前缀])` 自动重拉 |
| ⑫ | 对接后端时改接口函数签名 | 签名冻结，只换函数体 |
| ⑬ | 副服务也新建客户端 | 优先使用 `secondaryHttp` |
| ⑭ | 业务直接 import `instances/internal/` | 从 `@/src/http/index.uts` 导入公开实例 |
| ⑮ | 流式半截 chunk 直接渲染 | 先累积 / 分帧，再交给渲染层 |

---

## 10.8 验证命令

```bash
pnpm typecheck
pnpm test
pnpm exec eslint src/http src/api --ext .uts,.uvue
git diff --check
```

涉及 UTS Kotlin 编译、上传 / 下载、流式接口或原生网络行为时，必须补充 HBuilderX / 真机验证；H5 构建通过不等于 App 原生端通过。

---

## 10.9 自检红线清单

- [ ] **1. 唯一出口**：页面 / 组件没有直接调用 `uni.request` / `uni.uploadFile` / `uni.downloadFile`。
- [ ] **2. 三层分离**：页面只调 `src/api`，api 只调 `http`，hooks 只在页面 / 组件 `setup` 使用。
- [ ] **3. 导入口径**：业务实例从 `src/http` 拿，hooks / 类型从 `request-bestX` 拿。
- [ ] **4. 响应解包**：`http.get<T>` 的 `T` 是业务 data 类型。
- [ ] **5. 类型转换**：`UTSJSONObject` 不越过 api 层；数字字段用 `??` 兜底。
- [ ] **6. 分页签名**：`(pageNo = 1, pageSize = 10, keyword = '')` 保持不变。
- [ ] **7. 接口命名**：接口函数带 `Api` 后缀，函数与页面目录逐字对应。
- [ ] **8. 读用 Query**：读取、轮询、分页使用 `useQuery`，Ref 放 `queryKey`。
- [ ] **9. 写用 Mutation**：新增、修改、删除使用 `useMutation`。
- [ ] **10. 缓存联动**：写成功后 `invalidateQueries`，不手改列表副本。
- [ ] **11. 错误字段**：使用 `lastError`，未写不存在的 `error`。
- [ ] **12. Promise 写法**：双参 `.then(ok, err)`，无链式 `.catch()`。
- [ ] **13. 鉴权单源**：不重复注入 Token、不重复刷新 401、不重复跳登录。
- [ ] **14. 多域名**：副服务使用 `secondaryHttp`，未重复造客户端。
- [ ] **15. 上传泛型**：`http.upload<T>` 显式标注返回类型。
- [ ] **16. 流式分帧**：半截 chunk 不直接渲染。
- [ ] **17. Mock 切换**：后端就绪只换函数体，签名、import、页面调用不变。
- [ ] **18. 验证闭环**：至少跑 typecheck、test、ESLint；原生网络行为另跑真机验证。
