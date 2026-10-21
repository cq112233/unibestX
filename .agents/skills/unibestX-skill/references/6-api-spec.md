# 6 API 接口层手册（业务模块目录 · 契约类型与模拟数据同层 · 请求实现 · 后端就绪只换函数体）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：**新增页面并要同步建接口层时**、把页面 / 组件里写死的假数据抽成接口函数时、设计模拟数据集与契约类型时、对接后端真实接口时、写 `http` 请求 / 文件上传 / SSE 流式接口时 —— 必须首先阅读并严格遵循本分册。
>
> **与其它分册的分工**：页面层级、组件拆分与 API 目录归属看分册 5（5.6 讲「API 按业务模块聚合」，本分册讲「接口层自己怎么写」）；新增页面的整体生成流程看分册 4；`http` / 上传 / 流式的底层能力与配置见 `uni_modules/request-bestX/readme.md`（本分册只讲**怎么在 api 层正确使用它们**）；跨端运行时差异看分册 3。
>
> **核心定位**：**页面只管「要什么数据」，api 层只管「数据从哪来」** —— 接口按**业务模块**收拢在 `src/api/<module>/` 下（接口函数 + 契约类型 + 模拟数据集），页面组件通过具体 `.uts` 文件引入返回 `Promise<T>` 的接口函数；开发期返回本地模拟数据、后端就绪后返回真实响应，**对调用方完全透明，对接时页面侧零改动**。
>
> 📌 **6.1–6.8 是规范与铁律**；**6.9 起是手册部分**：常用请求写法（8 种）→ 坑点 → 速查 → 自检红线。**新建接口层看 6.5（模拟→真实双实现），写请求查 6.9，速查看 6.11。**

---

## 6.1 落位与命名：一业务模块一目录（新增页面必须接入接口层）

### 1. 路径映射：接口按业务模块聚合

$$\text{业务模块: } \texttt{src/api/<module\_name>/} \quad \Longleftarrow \quad \text{该模块的页面: } \texttt{src/pages/<page>/} \text{ 或 } \texttt{src/sub/<module>/<page>/}$$

| 页面 | 接口文件 | 页面 | 接口文件 |
| :--- | :--- | :--- | :--- |
| `src/pages/index/` | `src/api/index/index.uts` | `src/pages/ball/` | `src/api/ball/ball.uts` |
| `src/sub/order/list/` | `src/api/order/list.uts` | `src/sub/order/detail/` | `src/api/order/detail.uts` |
| `src/sub/order/edit/` | `src/api/order/edit.uts` | `src/sub/login/` | `src/api/login/login.uts` |

- **TabBar 页与非 TabBar 页共用业务模块时，接口共用同一 `src/api/<module>/`**，不因路由容器不同而复制接口；
- 目录名使用 kebab-case；接口文件按页面名或稳定接口域命名；
- **接口层属于全局层**：调用方一律写 `import { fetchXxxApi } from '@/src/api/<module>/<file>.uts'`，**严禁** `'../../api/...'` 这类相对穿透；
- **精准导入**：不使用 `src/api/<module>/index.uts` 聚合门面。

### 2. 硬门槛：没有接口归属的新页面，视为未交付

- 每新增一个页面，**必须在同一次改动里接入对应业务模块的接口文件**；已有接口可复用时不得重复建目录；
- 业务模块首次出现时，建 `src/api/<module>/<module>.uts` 或按页面拆出 `<page>.uts`；
- 若页面当前没有任何后端数据，接口层可暂不建文件，但不得用 `ref([...])` 伪造业务数据；
- **严禁**在 `.uvue` 页面或组件里用 `ref([...])` / `reactive({...})` 硬编码假数据，也**严禁**留「等后端接好了再抽接口」的尾巴（届时的改动面会从「一个函数体」膨胀成「整页组件重排」）；
- **交付前自查判据**：页面里每一块将来会由后端下发的数据，都能顺着「页面组件 → `@/src/api/<module>/<file>.uts` 里的某个 `fetchXxxApi()`」找到出处；找不到 ⇒ 接口层没建完。

### 3. 目录形态：按业务模块聚合，按接口域拆分

```text
src/api/<module>/
├── <module>.uts        # 多个页面共用接口；单页模块默认用此文件
├── <page>.uts          # 仅某个页面使用的接口
├── <domain>.uts        # 独立演进的接口域
└── types.uts           # 仅类型被两个以上文件共用时拆出
```

| 形态 | 触发条件 | 目录长什么样 |
| :--- | :--- | :--- |
| **形态一：模块单文件**（默认） | 业务模块只有一个页面，或各页面共用同一组接口 | 只有 `src/api/<module>/<module>.uts`，类型 / 模拟数据集 / 函数三块按接口域分段 |
| **形态二：按页面拆兄弟文件** | 多个页面各有独立接口，且会独立演进 | `src/api/<module>/<page>.uts`，每个文件自带「类型 + 模拟数据集 + 函数」 |
| **形态三：类型下沉**（可选） | **类型被两个以上文件共用** | `types.uts` 只放契约类型，其余文件保留接口与数据集 |

- 🚨 **「类型抽不抽」看共用，不看行数**：`types.uts` 的唯一触发条件是「类型被两个以上文件共用」（含跨 `.ts` / `.uts` 分支共用，见 `SKILL.md` A.2 第 20 条）；
- ⚠️ **按页面 / 接口域拆文件，不按单个函数拆**：一个接口域内的类型、数据集、函数保持同文件，避免契约散落；
- ❌ **旧形态已废弃**：把所有模块的数据集堆进一个共享文件不再使用；模拟数据按模块分段写在 `<page>.uts` 内，过大时按形态三拆兄弟文件。

### 4. 命名约定（照抄，别自创）

| 对象 | 约定 | 例子 |
| :--- | :--- | :--- |
| 模块同名接口文件 | `<模块目录名>.uts` | `src/api/order/order.uts` |
| 页面独立接口文件 | `<页面目录名>.uts` | `src/api/order/detail.uts` |
| 接口函数后缀 | **一律以 `Api` 结尾** | `fetchOrderListApi`、`createOrderApi` |
| 分页接口函数名 | `fetch<模块><实体>ListApi` | `fetchOrderListApi`、`fetchFollowListApi` |
| 详情 / 单条接口函数名 | `fetch<实体>DetailApi` / `fetch<实体>ByIdApi` | `fetchQaDetailApi`、`getFooByIdApi` |
| 写操作函数名 | `create<实体>Api` / `update<实体>Api` / `delete<实体>Api` | `createPostApi`、`updateAddressApi` |
| 数据集常量名 | `LOCAL_<模块>_<用途>`（`export const`，`Array<XxxItem>` 全量标注） | `LOCAL_WALLPAPERS`、`LOCAL_FOLLOW_POSTS` |
| DTO 类型名 | `<实体>Item` / `<实体>Detail`（**type，禁 interface**） | `WallpaperItem`、`QaQuestionDetail` |
| 分页容器 | `PageResult<T>`（收在 `types.uts`，全模块共用一份；带页面前缀的 `IndexPageResult<T>` 同样合法，**同一模块只用一种**） | `PageResult<WallpaperItem>` |
| 查询参数类型 | `<函数名>Query` 或复用 `<实体>Query` | `OriginalQuery` |

- **分页函数签名统一为 `(pageNo, pageSize, keyword)` 三件套并给默认值**（如 `pageNo: number = 1, pageSize: number = 10, keyword: string = ''`），后端接好后**默认值与入参顺序一个字都不改**（见 6.5）。

---

## 6.2 契约类型铁律

- **一律 `type`，严禁 `interface`**：规避 UTS 对对象字面量赋值的 `UTS110111163` 编译错误（详见分册 1 与 `SKILL.md` A.2 第 1 条）；
- **空值一律 `null`，严禁 `undefined`**：可选字段写成 `category?: string | null`，不要写 `category?: string | undefined`（规避 `UTS110111119`）；
- **类型跟着接口走**：后端 DTO 收在 api 层（接口文件对应段内，或 `types.uts`）；**页面目录不设 `types.uts`**：页面 / 组件的 UI 类型直接写在对应 `.uvue` 的 `script` 里，被同页多个组件共用时放进该组件自己的模块文件，**严禁**从页面目录反向 import 类型进 api 层；
- **分页容器只有一份真源**：

  ```uts
  // src/api/<module>/types.uts —— 只含 type 的叶子文件（不写函数、不写数据集）
  export type PageResult<T> = {
    list: Array<T>;
    hasMore: boolean;
    total: number;
  };
  ```

- **弱类型必须在 api 层就地转强类型，严禁 `UTSJSONObject` 出 api 层**：后端返回的对象要在 api 层用 `getString` / `getNumber` / `getBoolean` + `??` 兜底映射成强类型 DTO 再 `return`；**严禁把 `UTSJSONObject` 直接抛给页面**，否则页面模板里必然踩 `UTS110111163` / `error17` / 运行期 `ClassCastException`；
- **`PageResult<T>` 严禁用「泛型实例化别名」做 `as` 断言**：`} as PageResult<WallpaperItem>);` ✅，`type WallpaperPageResult = PageResult<WallpaperItem>` 后写 `} as WallpaperPageResult);` ❌ —— UTS 把 `as` 断言编译成构造调用 `new WallpaperPageResult({...})`，而别名只是编译期 `type`、**没有运行期绑定**，产物里留下指向不存在标识符的 `new`，**编译期零报错**、运行期抛 `ReferenceError`（详见 `SKILL.md` A.2 第 41 条与 1.25）。**别名只允许出现在类型位置**（返回值标注 / 回调参数标注）；
- **api 层内部也要守住原生安全取值**：数组下标读取先做边界检查（`i < arr.length && arr[i]`）、可能为 null 的字段做 `as` 断言前先判空（`SKILL.md` A.2 第 18 / 19 条）。

---

## 6.3 模拟数据集铁律（按模块独立造数）

- **数据集只在 api 层**：默认内联在对应业务模块的接口文件，**严禁**出现在 `.uvue` 页面与组件里；
- **按模块独立造数，严禁一份数据喂两个模块**：`LOCAL_A_*` 与 `LOCAL_B_*` 各造一份，哪怕结构看着一样；A 段的数组**不得**被 B 段的接口函数取用（分册 5 铁律 4 / 铁律 5）；
- **数据集与函数同文件时不导出**：只有拆到独立文件时才 `export` `LOCAL_*` 常量给同目录接口文件取数，且**不得**被另一个业务模块的数据文件或接口函数引用；
- **函数名与数据集必须一一对应**：`LOCAL_WALLPAPERS` 只服务 `fetchWallpaperListApi`，**严禁**抽一个「通用 `fetchListApi(type)`」让多个模块共用 —— 一旦合并，某天 A 要加分页、B 要加筛选，函数立刻长出 `if (type == 'a')` 分支，模块独立性当场死亡；
- **模拟实现默认最简**：3 条数据 + 直接返回 + `hasMore` 一行算出来，**不要**写筛选循环、数组切片、分页算法；只有当页面确实要验证分页 / 筛选 / 空态交互时，才把对应逻辑加进模拟实现（模板见 6.9 第 0 节）；
- **数据集里的字段类型必须与契约类型逐字对齐**：`Array<WallpaperItem>` 全量标注，**严禁**用 `any` 或省略标注去做「先跑通再说」；类型对不上时错在编译期，比运行期崩在真机上好查得多。

```uts
// src/api/index/index.uts【壁纸段】—— 数据集只服务壁纸段，禁止被其它模块引用
import type { WallpaperItem } from './types.uts';

export const LOCAL_WALLPAPERS: Array<WallpaperItem> = [
  { id: 601, title: '球房晨光', url: 'https://img.example.com/601.jpg', category: 'star' }
];
```

---

## 6.4 请求实现：一律走 `src/http` 的 `http` 单例

> 🚨 **严禁自己写 `uni.request`**：鉴权头、业务码判定、401 清 token 并跳登录、错误 toast 全部已经收在 `src/http/instances/internal/factory.uts` 的默认拦截器里，绕过去就等于把这些能力全部重写一遍，且必然漏掉其中一项。

### 1. 单例 API（`import { http } from '@/src/http/index.uts'` 或精准导入 `'@/src/http/instances/default.uts'`）

| 方法 | 签名 | 说明 |
| :--- | :--- | :--- |
| `http.get<T>` | `(url: string, config: HttpRequestConfig \| null)` | `params` 放查询串 |
| `http.post<T>` | `(url: string, data: any \| null, config)` | `data` 放请求体 |
| `http.put<T>` / `http.delete<T>` | 同 `post` | —— |
| `http.upload<T>` | `(url: string, config)` | 走 `uni.uploadFile`，自动带 token；`config` 放 `filePath` / `name` / `formData` |

- **返回值已经被解包**：`http.get<T>` 内部会把响应里的 `{ code, data }` 拆开，`then` 拿到的是 **`data` 本身**（不是整个响应体）。因此 `T` 只标注**业务数据**的类型，别再写成 `IResponse<T>`；
- **`config` 常用字段**（类型 `HttpRequestConfig`，来自 `@/uni_modules/request-bestX/index.uts`）：

  | 字段 | 用途 | 写法 |
  | :--- | :--- | :--- |
  | `params` | GET 查询参数 | `params: { pageNo: 1 } as UTSJSONObject` |
  | `baseURL` | 切换域名 | `baseURL: API_DOMAINS.SECONDARY`（`API_DOMAINS` 同文件导出） |
  | `extra.ignoreAuth` | 该接口不需要登录态 | `extra: { ignoreAuth: true } as UTSJSONObject` |
  | `extra.toast` | 关闭业务错误自动 toast（如轮询、可静默失败的接口） | `extra: { toast: false } as UTSJSONObject` |
  | `extra.domain` | 临时指定完整域名 | 少用，优先用 `API_DOMAINS` |

### 2. 错误与鉴权：api 层不要再包一层

拦截器已统一处理下列情况，**api 层与页面层都不要重复处理**：

- HTTP 状态码 `!= 200`：`ShowMessage(statusCode)` 文案 toast；**`401` 额外清 token 并 `reLaunch` 到登录页**；
- 业务码 `code != 0 && code != 200`：toast 后端返回的 `message` / `msg`（`extra.toast: false` 可关）；**业务码 `401` 同样清 token 并跳登录页**；
- 网络失败：toast「网络错误，请稍后再试」并 `reject`。

⇒ 因此 api 层函数里**不要再写** `uni.showToast` / 跳登录 / 判 401；**页面侧只需要用 `.then` 的第二参（拒绝回调）收尾自己的 loading 状态**（`finally` 里关 `loading`）。**注意写双参 `.then(onFulfilled, onRejected)`，不要写链式 `.catch()`** —— 后者在 Kotlin 端报 `error25` 重载不可解析（见分册 1 的 1.21）。

### 3. 文件上传与流式接口也走既有封装

- **上传**：用 `http.upload<T>(url, config)`（`@/src/http/index.uts` 的 `http` 单例，底层走 `uni.uploadFile`，自动带 token），`T` 无法从入参推断、**必须显式标注**（如 `http.upload<string>(...)`）；`config` 里放 `filePath` / `name` / `formData`（见 `uni_modules/request-bestX/readme.md` 1.4）；返回值是 OSS 地址字符串 —— 需要时在 api 层包一个语义化函数（如 `uploadAvatarApi(filePath): Promise<string>`）再暴露给页面，**严禁**页面里直接调 `uni.chooseImage` + `uni.uploadFile` 拼流程。OSS 直传地址读 `getOssUploadUrl()` / `getOssUploadPath()`（`@/src/config/env/env.uts`），严禁硬编码；
- **SSE / 流式**：用 `requestStream(options, client = null)`（`@/uni_modules/request-bestX/index.uts`，返回 `StreamTask`，chunk 通过回调/订阅消费）或 `simulateStream`。**流式接口同样收在 api 层**：在 `<page>.uts` 里包一个 `fetchXxxStreamApi(params, onChunk)` 形态的函数，页面只负责把 chunk 往渲染层喂；**半截块不进渲染器**（分册 3 的 3.23 有完整事故与结论）。

---

## 6.5 后端就绪：只换函数体，签名一个字都不改

对接后端时**不搬迁文件、不改 import 路径、不改函数名与入参**，只把函数体从「返回模拟数据」换成「发请求 + 类型转换」：

```uts
// 【对接前】模拟实现
/**
 * 分页获取壁纸列表
 * @param category 分类标识，传 'all' 表示全部分类
 * @param pageNo 页码，从 1 开始计数
 * @param pageSize 单页条数，默认 9（首页九宫格一屏）
 */
export function fetchWallpaperListApi(category: string = 'all', pageNo: number = 1, pageSize: number = 9): Promise<PageResult<WallpaperItem>> {
  return Promise.resolve({
    list: LOCAL_WALLPAPERS,
    hasMore: false,
    total: LOCAL_WALLPAPERS.length
  } as PageResult<WallpaperItem>);
}

// 【对接后】http 实现：函数名 / 入参（含默认值）/ 返回类型与上面逐字一致，页面侧零改动
//（JSDoc 同样原样保留——注释也是契约的一部分，页面侧悬停提示不该因换实现而消失或改口）
/**
 * 分页获取壁纸列表
 * @param category 分类标识，传 'all' 表示全部分类
 * @param pageNo 页码，从 1 开始计数
 * @param pageSize 单页条数，默认 9（首页九宫格一屏）
 */
export function fetchWallpaperListApi(category: string = 'all', pageNo: number = 1, pageSize: number = 9): Promise<PageResult<WallpaperItem>> {
  return http.get<UTSJSONObject>('/api/v1/index/wallpaper/list', {
    params: { category, pageNo, pageSize } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): PageResult<WallpaperItem> => {
    // 弱类型就地转强类型：getString / getNumber + 默认值兜底，严禁把 UTSJSONObject 抛给页面
    // getArray 用「两参形式」直接给空数组默认值（官方 API：只写 key 时返回 Array<T> | null，需自行 ?? 兜底）
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    return {
      list: rawList.map((item: UTSJSONObject): WallpaperItem => {
        return {
          id: item.getNumber('id') ?? 0,
          title: item.getString('title') ?? '',
          url: item.getString('url') ?? '',
          category: item.getString('category') ?? ''
        } as WallpaperItem;
      }),
      hasMore: data.getBoolean('hasMore') ?? false,
      total: data.getNumber('total') ?? 0
    } as PageResult<WallpaperItem>;
  });
}
```

**换函数体时的三条硬要求**：

1. **签名冻结**：函数名、入参（含默认值与顺序）、返回 `Promise<T>` 的类型**一个字都不许改** —— 改签名就是改契约，页面侧的 `.then((data: Array<XxxItem>) => ...)` 会当场编译报错；
2. **弱类型就地转换**：`UTSJSONObject` → 强类型 DTO 的映射只写在 api 层（见上），**这是页面模板里 `UTS110111163` / `error17` / `ClassCastException` 的根治手段**；
3. **模拟数据集先留着**：接口刚联调通、后端还在动的时候，`LOCAL_*` 常量与模拟实现不要删（后端挂了可以一行切回来）；等接口验收稳定后再连同常量一起清掉。

页面侧的 import **自始至终是同一行，不区分模拟期与联调期**（根组件 / 模块组件引函数，视图组件只引类型）：

```uts
import { fetchWallpaperListApi } from '@/src/api/index/index.uts';
import type { WallpaperItem } from '@/src/api/index/index.uts';
```

---

## 6.6 新增页面时的接口层产出清单（照序执行）

1. 定页面所属业务模块 → 找到或新建 `src/api/<module>/` 目录；
2. 逐个数清页面内的**业务区块**，每个区块想好「要哪几个接口」；
3. 新建或复用 `src/api/<module>/<module>.uts`；多个页面各有独立接口时按页面拆 `<page>.uts`，每个文件按接口域分段；
4. 判断形态：**类型被两个以上文件共用** ⇒ 拆 `types.uts`；某个接口域需要独立演进 ⇒ 拆兄弟文件。⚠️ **接口文件不设行数上限**，拆分依据是接口域边界，不是行数；
5. 每个接口函数**现在就用 `Promise<T>` 签名**、入参写全（分页三件套给默认值），保证将来只换函数体；
6. 页面 / 组件里**只**通过 `@/src/api/<module>/<file>.uts` 取数，删掉任何 `ref([...])` 假数据；
7. 接口文件不设行数上限：只有想把某个接口域独立演进时才拆兄弟文件（形态三），**不要**为了整齐而碎裂。

---

## 6.7 接口层自检红线清单

- [ ] **1. 新页面必须接入 `src/api/<module>/`** —— 页面里每块后端数据都能顺到某个 `fetchXxxApi()`，否则视为未交付（6.1）
- [ ] **2. 页面目录下严禁放数据集文件**，`.uvue` 里严禁 `ref([...])` 硬编码假数据（6.1 / 分册 5 铁律 5）
- [ ] **3. 一律 `type`，严禁 `interface`**；空值一律 `null`，严禁 `undefined`（6.2 / A.2 第 1、2 条）
- [ ] **4. 严禁 `UTSJSONObject` 出 api 层** —— 弱类型必须在 api 层用 `getString` / `getNumber` + `??` 映射成强类型 DTO 再返回（6.2 / 6.5）
- [ ] **5. 后端 DTO 只放 api 层** —— 页面目录不设 `types.uts`，UI 类型写在对应 `.uvue` 内；严禁页面侧反向给 api 层提供类型（6.2）
- [ ] **6. 模拟数据按模块独立造数** —— 数据集与函数名一一对应、互不引用，严禁「通用 `fetchListApi(type)`」共用函数（6.3 / 分册 5 铁律 5）
- [ ] **7. 模拟函数体要像真接口** —— 分页 / 筛选 / 排序逻辑照写，别无视入参返回整个数组（6.3）
- [ ] **8. 严禁自己写 `uni.request`** —— 一律走 `http` 单例 / `http.upload` / `requestStream`（6.4）
- [ ] **9. 拦截器已处理的错误不要重复处理** —— api 层不写 `uni.showToast`、不判 401、不跳登录页（6.4）
- [ ] **10. 对接后端只换函数体** —— 函数名 / 入参（含默认值）/ 返回类型一个字不改，模拟数据常量先留着（6.5）
- [ ] **11. 接口引用一律 `@/src/api/<module>/<file>.uts`** —— 严禁相对路径穿透，严禁 `index.uts` 聚合入口（6.1）
- [ ] **12. 接口文件不按行数拆** —— `src/api/` 下的文件不设行数上限；拆兄弟文件的依据是接口域独立，`types.uts` 的依据是类型被多处共用（6.1）
- [ ] **13. 函数名以 `Api` 结尾** —— `fetchXxxListApi` / `fetchXxxDetailApi` / `createXxxApi` / `updateXxxApi` / `deleteXxxApi`

---

## 6.8 真实标杆与现网现状（诚实清单）

**结构标杆（同一套规范的下游项目 Chaser，可直接对照）**：

```text
Chaser/src/api/
├── index/                      # 对应 src/pages/index/ 页面
│   ├── index.uts               #   9 个分页 / 列表接口函数，按「关注 / 精选 / 原创 / 视频 / 小视频 / 壁纸」六段注释分隔
│   └── types.uts               #   只含 type 的契约类型叶子文件（含通用分页容器 PageResult<T>）
├── qa-detail/
│   ├── qa-detail.uts           #   类型 + 数据集 + 函数三块同文件
│   └── reply-friends.uts       #   形态三：回复弹层接口域独立演进，单独成文件
├── forum/  (forum.uts + 数据集 + types.uts)
└── address/ auth/ ball/ cart/ mall/ order-*/ product/ search/ service/ zone/ ...
```

**本项目 unibestX 现状**：`src/api/` 下现有 `src/api/example.uts`（`FooItem` + 分页容器 `PageResult<T>`，含 `http.get` / `http.upload` / `http.downloadFile` 的完整调用示例，可作为**写法参照**）、`src/api/auth/auth.uts`、`src/api/privacy/privacy.uts`；新接口一律按业务模块落位到 `src/api/<module>/`，不再产生页面侧的数据集文件。

---

## 6.9 常用请求写法（GET / POST / PUT / DELETE / 上传 / 下载 / 流式）

> 全部收在 api 层，页面只调函数。`UTSJSONObject` → 强类型**就地转换**（见 6.5），严禁把弱类型抛给页面。

### 0. 新页面最小模板（默认照抄，别加戏）

> **默认就这么写**：3 条数据 + 直接返回 + `hasMore` 一行算出来。**不要**生成筛选循环、数组切片、分页算法 —— 等页面确实要验证分页 / 筛选行为时再加。

```uts
// ==========================================
// 文件位置：src/api/new-page/new-page.uts（对应页面 src/sub/new-page/）
// ==========================================
import { http } from '@/src/http/index.uts';
import type { HttpRequestConfig } from '@/uni_modules/request-bestX/index.uts';

/** 列表条目契约 */
export type NewPageItem = {
  id: number,
  title: string,
  desc: string,
  createdAt: string
};

/** 分页容器：本页所有分页接口共用 */
export type PageResult<T> = {
  list: Array<T>,
  hasMore: boolean,
  total: number
};

/**
 * 分页获取列表数据
 * @param pageNo 页码，从 1 开始计数，默认第 1 页
 * @param pageSize 单页条数，默认 10
 * @param keyword 搜索关键字，空串表示不筛选
 * @returns 分页容器；hasMore 表示是否还有下一页
 */
export function fetchNewPageListApi(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<PageResult<NewPageItem>> {
  // 开发期模拟数据：3 条，字段与 NewPageItem 逐字对齐
  const LOCAL_NEW_PAGE_ITEMS: Array<NewPageItem> = [
    { id: 1, title: '示例数据一', desc: '这是标准业务页的列表条目示例。', createdAt: '2026-10-20 09:00' },
    { id: 2, title: '示例数据二', desc: '数据统一从接口层获取，页面不硬编码。', createdAt: '2026-10-19 18:30' },
    { id: 3, title: '示例数据三', desc: '后端就绪后只替换函数体。', createdAt: '2026-10-18 14:20' }
  ];

  // TODO 后端就绪后换成下面的 http.get 实现，签名不动
  // 联调时：注释掉下方 Mock return，取消下面 3 行注释并替换 '.../xxxx' 即可
  // return http.get<PageResult<NewPageItem>>('.../xxxx', {
  //   params: { pageNo: pageNo, pageSize: pageSize, keyword: keyword } as UTSJSONObject
  // } as HttpRequestConfig);
  return new Promise<PageResult<NewPageItem>>((resolve) => {
    setTimeout((): void => {
      resolve({
        list: LOCAL_NEW_PAGE_ITEMS,
        hasMore: LOCAL_NEW_PAGE_ITEMS.length > (pageNo * pageSize),
        total: LOCAL_NEW_PAGE_ITEMS.length
      } as PageResult<NewPageItem>);
    }, 300);
  });
}

// ---------- 后端就绪后：注释掉上面的模拟实现，换成下面这段（签名 / 入参 / 返回类型一字不改） ----------
// export function fetchNewPageListApi(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<PageResult<NewPageItem>> {
//   return http.get<UTSJSONObject>('/api/v1/new-page/list', {
//     params: { pageNo: pageNo, pageSize: pageSize, keyword: keyword } as UTSJSONObject
//   } as HttpRequestConfig).then((data: UTSJSONObject): PageResult<NewPageItem> => {
//     // 弱类型就地转强类型：getString / getNumber + 默认值兜底
//     const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
//     return {
//       list: rawList.map((raw: UTSJSONObject): NewPageItem => {
//         return {
//           id: raw.getNumber('id') ?? 0,
//           title: raw.getString('title') ?? '',
//           desc: raw.getString('desc') ?? '',
//           createdAt: raw.getString('createdAt') ?? ''
//         } as NewPageItem;
//       }),
//       hasMore: data.getBoolean('hasMore') ?? false,
//       total: data.getNumber('total') ?? 0
//     } as PageResult<NewPageItem>;
//   });
// }
```

### 1. GET —— 列表 + 分页

```uts
export function fetchGoodsListApi(pageNo: number = 1, pageSize: number = 10): Promise<PageResult<GoodsItem>> {
  return http.get<UTSJSONObject>('/api/v1/goods/list', {
    params: { pageNo: pageNo, pageSize: pageSize } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): PageResult<GoodsItem> => {
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    return {
      list: rawList.map((raw: UTSJSONObject): GoodsItem => {
        return { id: raw.getNumber('id') ?? 0, title: raw.getString('title') ?? '' } as GoodsItem;
      }),
      hasMore: data.getBoolean('hasMore') ?? false,
      total: data.getNumber('total') ?? 0
    } as PageResult<GoodsItem>;
  });
}
```

### 2. POST —— 创建

```uts
export function createGoodsApi(payload: GoodsPayload): Promise<number> {
  return http.post<UTSJSONObject>('/api/v1/goods', payload as UTSJSONObject, null)
    .then((raw: UTSJSONObject): number => raw.getNumber('id') ?? 0);
}
```

### 3. PUT —— 整体更新

```uts
export function updateGoodsApi(id: number, payload: GoodsPayload): Promise<boolean> {
  return http.put<UTSJSONObject>(`/api/v1/goods/${id}`, payload as UTSJSONObject, null)
    .then((raw: UTSJSONObject): boolean => raw.getBoolean('success') ?? false);
}
```

### 4. DELETE —— 删除

```uts
export function deleteGoodsApi(id: number): Promise<boolean> {
  return http.delete<UTSJSONObject>(`/api/v1/goods/${id}`, null, null)
    .then((raw: UTSJSONObject): boolean => raw.getBoolean('success') ?? false);
}
```

### 5. 上传

```uts
import { getOssUploadUrl } from '@/src/config/env/env.uts';

/**
 * 上传头像
 * @param filePath 本地临时文件路径（App 端为 file:// 绝对路径）
 */
export function uploadAvatarApi(filePath: string): Promise<string> {
  return http.upload<string>(getOssUploadUrl(), {
    filePath: filePath,
    name: 'file'
  } as HttpRequestConfig);
}
```

### 6. 下载

```uts
export function downloadReportApi(url: string, filePath: string): Promise<DownloadResult> {
  return http.download(url, {
    filePath: filePath   // 不传则落到临时目录
  } as HttpRequestConfig);
}
```

### 7. 流式（SSE）

```uts
import { requestStream } from '@/uni_modules/request-bestX/index.uts';
import type { StreamChunk, StreamOptions } from '@/uni_modules/request-bestX/index.uts';

/**
 * 发起流式问答
 * @param question 用户问题
 * @param onChunk 每收到一块增量文本时回调（半截块不进渲染器，见分册 3.23）
 * @param onDone 流结束回调
 */
export function fetchAnswerStreamApi(question: string, onChunk: (text: string) => void, onDone: () => void): void {
  const options: StreamOptions = {
    url: '/api/v1/ai/chat',
    method: 'POST',
    data: { question: question } as UTSJSONObject
  } as StreamOptions;
  requestStream(options).onChunk((chunk: StreamChunk): void => {
    onChunk(chunk.text);
  }).onComplete((): void => {
    onDone();
  });
}
```

---

## 6.10 坑点清单（接口层）

### ① 页面里直接 `ref([...])` 假数据

数据必须来自 `src/api/<module>/`，否则后端就绪时改动面爆炸（6.1）。

### ② 按页面机械复制接口目录

`src/sub/order/list/` 与 `src/sub/order/detail/` 各自复制一份 `src/api/order-list/`、`src/api/order-detail/`；应统一复用 `src/api/order/`。

### ③ 用 `interface` 定义 DTO

`UTS110111163`（分册 1.1）。

### ④ 把 `UTSJSONObject` 直接返回给页面

页面模板里必然踩 `error17` / `ClassCastException`；必须在 api 层转强类型（6.2）。

### ⑤ `getNumber()` 没做 `??` 兜底

返回类型是 `number | null`，直接赋给非空字段 Kotlin 编译报错。

### ⑥ 用泛型实例化别名做 `as` 断言

`as WallpaperPageResult` 会在运行期抛 `ReferenceError`；直写 `as PageResult<WallpaperItem>`（6.2 / 分册 1.25）。

### ⑦ 模拟数据无视入参直接返回整份数据

联调时页面才第一次见到分页 / 筛选逻辑，埋雷（6.3）。

### ⑧ 一份模拟数据喂两个模块

A 段数据集被 B 段引用，后续 A 加字段 B 静默变形（6.3）。

### ⑨ 抽一个「通用 `fetchListApi(type)`」

模块独立性当场死亡（6.3）。

### ⑩ 页面目录下放数据集文件

旧形态已废弃；数据集默认内联在 `src/api/<module>/<file>.uts`，过大时才按接口域拆兄弟文件（6.1）。

### ⑪ 自己写 `uni.request`

绕过鉴权、401、业务码、toast 全套拦截器（6.4）。

### ⑫ 在 api 层 / 页面层重复处理 401 与 toast

拦截器已处理，重复处理会导致双 toast / 重复跳登录（6.4）。

### ⑬ 对接后端时改了函数签名

页面侧 `.then((data: Array<X>) => ...)` 当场编译报错；签名必须冻结（6.5）。

### ⑭ 接口函数引用用相对路径

一律 `@/src/api/<module>/<file>.uts`（6.1）。

### ⑮ 上传时 `T` 没显式标注

`http.upload<T>` 无法从入参推断，必须写 `http.upload<string>(...)`。

---

## 6.11 接口层速查表

| 我要什么 | 写法 | 从哪导入 |
| :--- | :--- | :--- |
| 发起 GET | `http.get<T>(url, { params } as HttpRequestConfig)` | `@/src/http/index.uts` |
| 发起 POST | `http.post<T>(url, data, config)` | 同上 |
| PUT / DELETE | `http.put<T>(url, data, config)` / `http.delete<T>(url, data, config)` | 同上 |
| 局部更新 | 用 `http.post` 或 `http.put` 走整条更新（小程序 / App 端不支持的方法一律不用） | 同上 |
| 上传文件 | `http.upload<string>(url, config)` | 同上 |
| 下载文件 | `http.download(url, config)` → `Promise<DownloadResult>` | 同上 |
| 切备用域名 | `baseURL: API_DOMAINS.SECONDARY` | `@/src/http/index.uts` |
| 免登录接口 | `extra: { ignoreAuth: true } as UTSJSONObject` | —— |
| 关业务错误 toast | `extra: { toast: false } as UTSJSONObject` | —— |
| 流式接口 | `requestStream(options)` | `@/uni_modules/request-bestX/index.uts` |
| OSS 上传地址 | `getOssUploadUrl()` / `getOssUploadPath()` | `@/src/config/env/env.uts` |
| 分页容器 | `type PageResult<T> = { list, hasMore, total }` | 本业务模块接口文件 / `types.uts` |
| 弱类型取值 | `getString` / `getNumber` / `getBoolean` + `??` | `UTSJSONObject` 方法 |
| 数组取值 | `getArray<T>('list', [] as Array<T>)` | 同上 |

---

## 6.12 接口层自检红线清单（补充 6.7）

- [ ] **13. 新建页面接入业务模块接口** —— 页面里每块后端数据都能顺到某个 `fetchXxxApi()`
- [ ] **14. 接口按业务模块聚合** —— `src/api/<module>/<file>.uts`
- [ ] **15. 契约全 `type`** —— 零 `interface`，空值用 `null`
- [ ] **16. `UTSJSONObject` 不出 api 层** —— 弱类型就地转强类型 DTO
- [ ] **17. `as` 不写泛型别名** —— 直写 `as PageResult<Item>`
- [ ] **18. 模拟数据按模块独立造数** —— 数据集与函数一一对应，互不引用
- [ ] **19. 模拟行为像真接口** —— 分页 / 筛选 / 延迟照写
- [ ] **20. 请求只走 `http` 单例** —— 不写 `uni.request`，不重复处理 401 / toast
- [ ] **21. 对接后端只换函数体** —— 函数名 / 入参（含默认值）/ 返回类型冻结
- [ ] **22. 分页签名统一** —— `(pageNo = 1, pageSize = 10, keyword = '')`
- [ ] **23. 接口函数名以 `Api` 结尾** —— `fetchXxxApi` / `createXxxApi` 等，一律带后缀
- [ ] **24. 接口文件不设行数上限** —— 只在接口域需要独立演进时拆兄弟文件
- [ ] **25. 引用走别名** —— `@/src/api/<module>/<file>.uts`
- [ ] **26. 上传 / 流式有显式类型** —— `http.upload<string>`，流式走 `requestStream`
