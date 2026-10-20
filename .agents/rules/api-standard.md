---
trigger: glob
description: 接口层硬性契约 —— 一页一目录、只走 http 单例、弱类型不出 api 层
globs: src/**/*.uts,src/**/*.ts,src/**/*.vue,src/**/*.uvue
---

# api-standard（Glob：`src/**/*.{uts,ts,vue,uvue}`）

> 只写「合不合规」的判定标准。`http` 的完整参数、分页模板、模拟数据造数细则 → **unibestX-skill 分册 6**。

## MUST

- **新页面必须同批建接口层**：`src/pages/<page>/` 或 `src/sub/<page>/` ⇒ `src/api/<page>/<page>.uts`，目录名逐字同名。
- **请求只走 `http` 单例**：`import { http } from '@/src/http/index.uts'`（或精准导入 `@/src/http/instances/default.uts`）。
- **接口函数一律以 `Api` 结尾**（`fetchXxxListApi` / `fetchXxxDetailApi` / `createXxxApi` / `updateXxxApi` / `deleteXxxApi`）。
- **接口函数返回 `Promise<T>`**，分页入参统一 `(pageNo = 1, pageSize = 10, keyword = '')` 并给默认值。
- **弱类型就地转强类型**：后端 `UTSJSONObject` 必须在 api 层用 `getString` / `getNumber` / `getBoolean` + `??` 兜底映射成 DTO 再返回。
- **契约一律 `type`**，分页容器统一 `type PageResult<T> = { list, hasMore, total }`。
- **模拟数据按模块独立造数**：数据集与函数一一对应、互不引用；模拟行为要像真接口（分页 / 筛选照写）。
- **后端就绪只换函数体**：函数名、入参（含默认值）、返回类型冻结，页面侧零改动。

## MUST NOT

- **禁止直接写 `uni.request` / `uni.uploadFile`**（绕过鉴权、401、业务码、toast 全套拦截器）。
- **禁止 `UTSJSONObject` 出 api 层**（页面模板必然踩 `error17` / `ClassCastException`）。
- **禁止在 api 层重复处理 401 与 toast**（拦截器已统一处理）。
- **禁止页面目录下出现数据集文件**，禁止在 `.uvue` 里 `ref([...])` 硬编码假数据。
- **禁止用 `interface`**；禁止用泛型实例化别名做 `as` 断言。
- **接口文件不设行数上限**：`src/api/` 下按接口域拆分，只为独立演进，不按行数拆。

---

> 📖 需要 `http.get/post/upload` 参数表、`useQuery` / `useMutation` 用法、完整「模拟→真实」双实现、流式接口写法 → 加载 **unibestX-skill 分册 6**（`.agents/skills/unibestX-skill/references/6-api-spec.md`）。
