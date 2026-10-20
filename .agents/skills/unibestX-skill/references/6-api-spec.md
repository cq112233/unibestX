# 6 API 接口层手册（一页一目录 · 契约类型与模拟数据同层 · 请求实现 · 后端就绪只换函数体）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：**新增页面并要同步建接口层时**、把页面 / 组件里写死的假数据抽成接口函数时、设计模拟数据集与契约类型时、对接后端真实接口时、写 `http` 请求 / 文件上传 / SSE 流式接口时 —— 必须首先阅读并严格遵循本分册。
>
> **与其它分册的分工**：页面层级与组件拆分看分册 5（铁律 5 讲「模拟数据必须收拢进接口层」，本分册讲「接口层自己怎么写」）；新增页面的整体生成流程看分册 4；`http` / 上传 / 流式的底层能力与配置见 `uni_modules/request-bestX/readme.md`（本分册只讲**怎么在 api 层正确使用它们**）；跨端运行时差异看分册 3。
>
> **核心定位**：**页面只管「要什么数据」，api 层只管「数据从哪来」** —— 每个页面在 `src/api/<page>/` 下有一套自己的接口层（接口函数 + 契约类型 + 模拟数据集），页面组件通过 `@/src/api/<page>/<page>.uts` 引入返回 `Promise<T>` 的接口函数；开发期返回本地模拟数据、后端就绪后返回真实响应，**对调用方完全透明，对接时页面侧零改动**。
>
> 📌 **6.1–6.8 是规范与铁律**；**6.9 起是手册部分**：常用请求写法（8 种）→ 坑点 → 速查 → 自检红线。**新建接口层看 6.5（模拟→真实双实现），写请求查 6.9，速查看 6.11。**

---

## 6.1 落位与命名：一页一目录（新增页面必产接口层）

### 1. 路径映射：目录名与页面目录严格同名

$$\text{页面目录: } \texttt{src/pages/<page\_name>/} \text{ 或 } \texttt{src/sub/<page\_name>/} \quad \Longrightarrow \quad \text{接口目录: } \texttt{src/api/<page\_name>/}$$

| 页面 | 接口目录 | 页面 | 接口目录 |
| :--- | :--- | :--- | :--- |
| `src/pages/index/` | `src/api/index/` | `src/pages/ball/` | `src/api/ball/` |
| `src/pages/mall/` | `src/api/mall/` | `src/sub/cart/` | `src/api/cart/` |
| `src/sub/order-detail/` | `src/api/order-detail/` | `src/sub/qa-detail/` | `src/api/qa-detail/` |

- **挂 `pages/` 还是 `sub/` 不影响接口目录名**，一律以页面目录名为准；目录名用 kebab-case（`order-detail`），与页面目录逐字一致；
- **接口层属于全局层**：组件里一律写 `import { fetchXxx } from '@/src/api/<page>/<page>.uts'`，**严禁** `'../../api/<page>/<page>.uts'` 这类相对穿透（哪怕文件结构上够得着，见分册 5 铁律 1）。

### 2. 硬门槛：没有配套接口层的新页面，视为未交付

- 每新增一个页面，**必须在同一次改动里建出 `src/api/<page>/<page>.uts`**，哪怕当前只有一个接口、只有一屏数据；
- **严禁**在 `.uvue` 页面或组件里用 `ref([...])` / `reactive({...})` 硬编码假数据，也**严禁**留「等后端接好了再抽接口」的尾巴（届时的改动面会从「一个函数体」膨胀成「整页组件重排」）；
- **交付前自查判据**：这个页面里每一块将来会由后端下发的数据，都能顺着「页面组件 → `@/src/api/<page>/<page>.uts` 里的某个 `fetchXxx()`」找到出处；找不到 ⇒ 接口层没建完。

### 3. 目录形态：默认单文件，按页面体量递进拆分

```text
src/api/<page>/
├── <page>.uts          # ★ 必须：接口函数 + 契约类型 + 模拟数据集（按模块用注释分段）
└── types.uts           #   仅在类型被多段共用时拆出：只放 type（严禁 interface），不写函数、不写数据
```

| 形态 | 触发条件 | 目录长什么样 |
| :--- | :--- | :--- |
| **形态一：单文件内联**（默认） | 类型只被本模块单一处消费 | 只有 `src/api/<page>/<page>.uts`，类型 / 模拟数据集 / 函数三块按模块分段全在里面，**不建** `types.uts` |
| **形态二：类型下沉**（可选） | **类型要被多段共用** | `types.uts` 放契约类型，`<page>.uts` 只留接口函数与模拟数据集 |
| **形态三：按接口域拆兄弟文件** | 同页有多个互不相干的接口域，且主文件已贴 500 行硬上限 | 在 `src/api/<page>/` 下再开 `src/api/<page>/<模块>.uts`，**每个文件自带「类型 + 模拟数据集 + 函数」三块** |

- 🚨 **「类型抽不抽」看共用，不看行数**：类型通常只占文件 **0~13%** 行数，把它抽成 `types.uts` **并不减行**（实测 868 行的 `client.uts` 里类型只占 46 行，抽完还剩 822 行，照样超 500）。`types.uts` 的**唯一**触发条件是「类型被多处共用」（含跨 `.ts` / `.uts` 分支共用，见 `SKILL.md` A.2 第 20 条）；文件真的大到读不动时，正确做法是**按接口域拆兄弟文件（形态三）**，不是抽类型；
- ⚠️ **数据集过大时按接口域拆兄弟文件**（形态三），但**严禁**为了「看起来更整齐」把三个函数拆成三个文件 —— 过度碎裂会让后端契约散落在多个文件里，联调时找不全；
- ❌ **旧形态已废弃**：把所有模块的数据集堆进一个共享文件不再使用；模拟数据按模块分段写在 `<page>.uts` 内，过大时按形态三拆兄弟文件。

### 4. 命名约定（照抄，别自创）

| 对象 | 约定 | 例子 |
| :--- | :--- | :--- |
| 页面同名接口文件 | `<页面目录名>.uts` | `src/api/order-detail/order-detail.uts` |
| 分页接口函数名 | `fetch<模块><实体>List` | `fetchOrderList`、`fetchFollowList` |
| 详情 / 单条接口函数名 | `fetch<实体>Detail` / `fetch<实体>ById` | `fetchQaDetail`、`getFooById` |
| 写操作函数名 | `create<实体>` / `update<实体>` / `delete<实体>` | `createPost`、`updateAddress` |
| 数据集常量名 | `LOCAL_<模块>_<用途>`（`export const`，`Array<XxxItem>` 全量标注） | `LOCAL_WALLPAPERS`、`LOCAL_FOLLOW_POSTS` |
| DTO 类型名 | `<实体>Item` / `<实体>Detail`（**type，禁 interface**） | `WallpaperItem`、`QaQuestionDetail` |
| 分页容器 | `PageResult<T>`（收在 `types.uts`，全页共用一份；带页面前缀的 `IndexPageResult<T>` 同样合法，**同一页只用一种**） | `PageResult<WallpaperItem>` |
| 查询参数类型 | `<函数名>Query` 或复用 `<实体>Query` | `OriginalQuery` |

- **分页函数签名统一为 `(pageNo, pageSize, keyword)` 三件套并给默认值**（如 `pageNo: number = 1, pageSize: number = 10, keyword: string = ''`），后端接好后**默认值与入参顺序一个字都不改**（见 6.5）。

---

## 6.2 契约类型铁律

- **一律 `type`，严禁 `interface`**：规避 UTS 对对象字面量赋值的 `UTS110111163` 编译错误（详见分册 1 与 `SKILL.md` A.2 第 1 条）；
- **空值一律 `null`，严禁 `undefined`**：可选字段写成 `category?: string | null`，不要写 `category?: string | undefined`（规避 `UTS110111119`）；
- **类型跟着接口走**：后端 DTO 收在 api 层（`<page>.uts` 对应段内，或 `types.uts`）；**页面目录不设 `types.uts`**：页面 / 组件的 UI 类型（分区项、下灌给子视图的展示模型、props 结构）直接写在对应 `.uvue` 的 `script` 里，被同页多个组件共用时放进该组件自己的模块文件，**严禁**从页面目录反向 import 类型进 api 层；
- **分页容器只有一份真源**：

  ```uts
  // src/api/<page>/types.uts —— 只含 type 的叶子文件（不写函数、不写数据集）
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

- **数据集只在 api 层**：默认内联在 `<page>.uts`，**严禁**出现在 `.uvue` 页面与组件里；
- **按模块独立造数，严禁一份数据喂两个模块**：`LOCAL_A_*` 与 `LOCAL_B_*` 各造一份，哪怕结构看着一样；A 段的数组**不得**被 B 段的接口函数取用（分册 5 铁律 4 / 铁律 5）；
- **数据集与函数同文件时不导出**：只有拆到独立文件时才 `export` `LOCAL_*` 常量给同目录的 `<page>.uts` 取数，且**不得**被另一个模块的数据文件或接口函数引用；
- **函数名与数据集必须一一对应**：`LOCAL_WALLPAPERS` 只服务 `fetchWallpaperList`，**严禁**抽一个「通用 `fetchList(type)`」让多个模块共用 —— 一旦合并，某天 A 要加分页、B 要加筛选，函数立刻长出 `if (type == 'a')` 分支，模块独立性当场死亡；
- **模拟函数体要长得像真接口**：该分页就分页（`startIndex` / `endIndex` / `hasMore` 全算出来），该筛选就筛选（`category != 'all'` 时 `filter`），该用 `setTimeout` 模拟延迟就用 —— **开发期就能暴露分页与筛选的真实行为**，别写成「无视入参返回整个数组」，否则联调时页面才第一次见到分页逻辑；
- **数据集里的字段类型必须与契约类型逐字对齐**：`Array<WallpaperItem>` 全量标注，**严禁**用 `any` 或省略标注去做「先跑通再说」；类型对不上时错在编译期，比运行期崩在真机上好查得多。

```uts
// src/api/index/index.uts【壁纸段】—— 数据集只服务壁纸段，禁止被其它模块引用
import type { WallpaperItem } from '../types.uts';

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

- **上传**：用 `http.upload<T>(url, config)`（`@/src/http/index.uts` 的 `http` 单例，底层走 `uni.uploadFile`，自动带 token），`T` 无法从入参推断、**必须显式标注**（如 `http.upload<string>(...)`）；`config` 里放 `filePath` / `name` / `formData`（见 `uni_modules/request-bestX/readme.md` 1.4）；返回值是 OSS 地址字符串 —— 需要时在 api 层包一个语义化函数（如 `uploadAvatar(filePath): Promise<string>`）再暴露给页面，**严禁**页面里直接调 `uni.chooseImage` + `uni.uploadFile` 拼流程。OSS 直传地址读 `getOssUploadUrl()` / `getOssUploadPath()`（`@/src/config/env/env.uts`），严禁硬编码；
- **SSE / 流式**：用 `requestStream(options, client = null)`（`@/uni_modules/request-bestX/index.uts`，返回 `StreamTask`，chunk 通过回调/订阅消费）或 `simulateStream`。**流式接口同样收在 api 层**：在 `<page>.uts` 里包一个 `fetchXxxStream(params, onChunk)` 形态的函数，页面只负责把 chunk 往渲染层喂；**半截块不进渲染器**（分册 3 的 3.23 有完整事故与结论）。

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
export function fetchWallpaperList(category: string = 'all', pageNo: number = 1, pageSize: number = 9): Promise<PageResult<WallpaperItem>> {
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
export function fetchWallpaperList(category: string = 'all', pageNo: number = 1, pageSize: number = 9): Promise<PageResult<WallpaperItem>> {
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

页面侧的 import **自始至终是同一行，不区分模拟期与联调期**（L1 容器引函数、L2 私有视图只引类型）：

```uts
import { fetchWallpaperList } from '@/src/api/index/index.uts';
import type { WallpaperItem } from '@/src/api/index/index.uts';
```

---

## 6.6 新增页面时的接口层产出清单（照序执行）

1. 定页面目录名 → 建 `src/api/<page>/` 目录；
2. 逐个数清这个页面的**业务模块**，每个模块想好「要哪几个接口」；
3. 建 `src/api/<page>/<page>.uts`（**必产**），按模块用注释分段，每段写：类型 → 数据集 → 接口函数；
4. 判断形态：**类型被多段共用** ⇒ 拆 `types.uts`；某接口域已经独立到贴 500 行上限 ⇒ 拆兄弟文件（形态三）。⚠️ **别按「文件总行数」决定是否抽 `types.uts`** —— 类型通常只占 0~13%，抽了并不减行；
5. 每个接口函数**现在就用 `Promise<T>` 签名**、入参写全（分页三件套给默认值），保证将来只换函数体；
6. 页面 / 组件里**只**通过 `@/src/api/<page>/<page>.uts` 取数，删掉任何 `ref([...])` 假数据；
7. 交付前 `wc -l` 自查：任何 `.uts` 不得超过 **500 行**（分册 5 铁律 2）；超了**按接口域拆兄弟文件**（形态三），而不是抽 `types.uts`。

---

## 6.7 接口层自检红线清单

- [ ] **1. 新页面必产 `src/api/<page>/<page>.uts`** —— 页面里每块后端数据都能顺到某个 `fetchXxx()`，否则视为未交付（6.1）
- [ ] **2. 页面目录下严禁放数据集文件**，`.uvue` 里严禁 `ref([...])` 硬编码假数据（6.1 / 分册 5 铁律 5）
- [ ] **3. 一律 `type`，严禁 `interface`**；空值一律 `null`，严禁 `undefined`（6.2 / A.2 第 1、2 条）
- [ ] **4. 严禁 `UTSJSONObject` 出 api 层** —— 弱类型必须在 api 层用 `getString` / `getNumber` + `??` 映射成强类型 DTO 再返回（6.2 / 6.5）
- [ ] **5. 后端 DTO 只放 api 层** —— 页面目录不设 `types.uts`，UI 类型写在对应 `.uvue` 内；严禁页面侧反向给 api 层提供类型（6.2）
- [ ] **6. 模拟数据按模块独立造数** —— 数据集与函数名一一对应、互不引用，严禁「通用 `fetchList(type)`」共用函数（6.3 / 分册 5 铁律 5）
- [ ] **7. 模拟函数体要像真接口** —— 分页 / 筛选 / 排序逻辑照写，别无视入参返回整个数组（6.3）
- [ ] **8. 严禁自己写 `uni.request`** —— 一律走 `http` 单例 / `http.upload` / `requestStream`（6.4）
- [ ] **9. 拦截器已处理的错误不要重复处理** —— api 层不写 `uni.showToast`、不判 401、不跳登录页（6.4）
- [ ] **10. 对接后端只换函数体** —— 函数名 / 入参（含默认值）/ 返回类型一个字不改，模拟数据常量先留着（6.5）
- [ ] **11. 接口引用一律 `@/src/api/<page>/<page>.uts`** —— 严禁相对路径穿透（6.1 / 分册 5 铁律 1）
- [ ] **12. 单个接口文件严禁超 500 行** —— 只允许按接口域向下拆兄弟文件（拆兄弟文件才能真正减行），不允许为整齐而碎裂；⚠️ `types.uts` 的拆分依据是「类型被多处共用」，**不是**行数（6.1 / 分册 5 铁律 2）

---

## 6.8 真实标杆与现网现状（诚实清单）

**结构标杆（同一套规范的下游项目 Chaser，可直接对照）**：

```text
Chaser/src/api/
├── index/                      # 对应 src/pages/index/ 页面
│   ├── index.uts               #   9 个分页 / 列表接口函数，按「关注 / 精选 / 原创 / 视频 / 小视频 / 壁纸」六段注释分隔
│   └── types.uts               #   只含 type 的契约类型叶子文件（含通用分页容器 PageResult<T>）
├── qa-detail/
│   ├── qa-detail.uts           #   类型 + 数据集 + 函数三块同文件（482 行）
│   └── reply-friends.uts       #   ⚠️ 形态三：主文件贴 500 行上限，写回复弹层的接口域单独成文件
├── forum/  (forum.uts + 数据集 + types.uts)
└── address/ auth/ ball/ cart/ mall/ order-*/ product/ search/ service/ zone/ ...
```

**本项目 unibestX 现状**：`src/api/` 下现有 `src/api/example.uts`（216 行，`FooItem` + 分页容器 `PageResult<T>`，含 `http.get` / `http.upload` / `http.downloadFile` 的完整调用示例，可作为**写法参照**）、`src/api/auth/auth.uts`、`src/api/privacy/privacy.uts`；页面级 `src/api/<page>/` 接口目录尚未逐页建立。**从今往后新建的页面一律按本分册直接落位，不再产生页面侧的数据集文件。**

---

## 6.9 常用请求写法（GET / POST / PUT / DELETE / 上传 / 下载 / 流式）

> 全部收在 api 层，页面只调函数。`UTSJSONObject` → 强类型**就地转换**（见 6.5），严禁把弱类型抛给页面。

### 1. GET —— 列表 + 分页

```uts
export function fetchGoodsList(pageNo: number = 1, pageSize: number = 10): Promise<PageResult<GoodsItem>> {
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
export function createGoods(payload: GoodsPayload): Promise<number> {
  return http.post<UTSJSONObject>('/api/v1/goods', payload as UTSJSONObject, null)
    .then((raw: UTSJSONObject): number => raw.getNumber('id') ?? 0);
}
```

### 3. PUT —— 整体更新

```uts
export function updateGoods(id: number, payload: GoodsPayload): Promise<boolean> {
  return http.put<UTSJSONObject>(`/api/v1/goods/${id}`, payload as UTSJSONObject, null)
    .then((raw: UTSJSONObject): boolean => raw.getBoolean('success') ?? false);
}
```

### 4. DELETE —— 删除

```uts
export function deleteGoods(id: number): Promise<boolean> {
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
export function uploadAvatar(filePath: string): Promise<string> {
  return http.upload<string>(getOssUploadUrl(), {
    filePath: filePath,
    name: 'file'
  } as HttpRequestConfig);
}
```

### 6. 下载

```uts
export function downloadReport(url: string, filePath: string): Promise<DownloadResult> {
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
export function fetchAnswerStream(question: string, onChunk: (text: string) => void, onDone: () => void): void {
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

数据必须来自 `src/api/<page>/`，否则后端就绪时改动面爆炸（6.1）。

### ② 接口目录名与页面目录不同名

`src/sub/order-list/` ⇒ `src/api/order-list/`，逐字对应。

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

### ⑨ 抽一个「通用 `fetchList(type)`」

模块独立性当场死亡（6.3）。

### ⑩ 页面目录下放数据集文件

旧形态已废弃；数据集默认内联在 `src/api/<page>/<page>.uts`，过大时才按接口域拆兄弟文件（6.1）。

### ⑪ 自己写 `uni.request`

绕过鉴权、401、业务码、toast 全套拦截器（6.4）。

### ⑫ 在 api 层 / 页面层重复处理 401 与 toast

拦截器已处理，重复处理会导致双 toast / 重复跳登录（6.4）。

### ⑬ 对接后端时改了函数签名

页面侧 `.then((data: Array<X>) => ...)` 当场编译报错；签名必须冻结（6.5）。

### ⑭ 单个接口文件超 500 行还不拆

按接口域拆兄弟文件；**不要**用抽 `types.uts` 当减行手段（6.1 / 6.6）。

### ⑮ 接口函数引用用相对路径

一律 `@/src/api/<page>/<page>.uts`（6.1）。

### ⑯ 上传时 `T` 没显式标注

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
| 分页容器 | `type PageResult<T> = { list, hasMore, total }` | 本页接口文件 / `types.uts` |
| 弱类型取值 | `getString` / `getNumber` / `getBoolean` + `??` | `UTSJSONObject` 方法 |
| 数组取值 | `getArray<T>('list', [] as Array<T>)` | 同上 |

---

## 6.12 接口层自检红线清单（补充 6.7）

- [ ] **13. 新建页面同批建接口层** —— 页面里每块后端数据都能顺到某个 `fetchXxx()`
- [ ] **14. 目录名逐字同名** —— `src/api/<page>/<page>.uts`
- [ ] **15. 契约全 `type`** —— 零 `interface`，空值用 `null`
- [ ] **16. `UTSJSONObject` 不出 api 层** —— 弱类型就地转强类型 DTO
- [ ] **17. `as` 不写泛型别名** —— 直写 `as PageResult<Item>`
- [ ] **18. 模拟数据按模块独立造数** —— 数据集与函数一一对应，互不引用
- [ ] **19. 模拟行为像真接口** —— 分页 / 筛选 / 延迟照写
- [ ] **20. 请求只走 `http` 单例** —— 不写 `uni.request`，不重复处理 401 / toast
- [ ] **21. 对接后端只换函数体** —— 函数名 / 入参（含默认值）/ 返回类型冻结
- [ ] **22. 分页签名统一** —— `(pageNo = 1, pageSize = 10, keyword = '')`
- [ ] **23. 单文件 ≤ 500 行** —— 超了按接口域拆兄弟文件
- [ ] **24. 引用走别名** —— `@/src/api/<page>/<page>.uts`
- [ ] **25. 上传 / 流式有显式类型** —— `http.upload<string>`，流式走 `requestStream`
