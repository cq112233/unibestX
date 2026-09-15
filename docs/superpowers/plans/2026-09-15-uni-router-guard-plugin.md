# uni-router-guard 导航拦截插件 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在 `uni_modules/uni-router-guard/` 从零实现一个与业务零耦合的导航拦截插件：`createRouter()` 装配、`beforeEach((to, from, next) => {})` / `afterEach((to, from) => {})` 的 vue-router 3 同签名守卫链、`push/replace/relaunch/switchTab/back` 跳转门面，裁决 API 为 `next()` / `next('/x')` / `next(false)`。

**架构：** `lib/types.uts` 是零依赖叶子；`lib/url.uts` 与 `lib/guard.uts` 是纯函数与纯执行器（不碰 `uni` 全局，可在 node 里跑决策矩阵）；`lib/interceptor.uts` 独占 `uni.addInterceptor` 安装/卸载与裁决派发；`lib/router.uts` 用工厂函数把它们组装成 `Router` 对象字面量（UTS 禁止传递 Class 实例，见 `UTS110111151`）；根 `index.uts` 做**单层** `export *` 门面。

**技术栈：** uni-app X / UTS (`.uts`)；node 22 的 TS 类型剥离（`node xxx.ts`）跑 harness，**不引入任何测试框架**；验证依赖真机 Android 构建（必须出现 `编译为android class`）。

**规格：** `docs/superpowers/specs/2026-09-15-uni-router-guard-plugin-design.md`

---

## 前置事实（已实测，实施者无需重新验证）

| 事实 | 证据 |
| --- | --- |
| UTS **不支持任意类型联合**，`string \| number` 这类必须声明 `any` | `.agents/rules/uniappx.md:215` |
| UTS **支持剩余参数** `(...args: Array<any>)` | `uni_modules/lime-i18n/common/util.uts:139` 的 `parseArgs` |
| UTS 支持可选字段 `a ?: A` | `src/utils/upload/index.uts:14` 的 `onProgress?: (progress: number) => void` |
| `UTSJSONObject` **有** `getString/getJSON/getArray/getAny/toMap`，**没有**可用的动态写入接口 | 框架声明：`/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-uts-v1/node_modules/@dcloudio/uni-uts-v1/lib/uts/types/uts/common/UTSJSONObject.d.ts` 的 `toMap(): Map<string, any>`（616 行）、`getJSON(key)`（396 行）、`getAny(key)`（108 行）、`keys(item): Array<string>`（710 行，声明在 `UTSJSONObjectConstructor` 上，按 `UTSJSONObject.keys(obj)` 调用） |
| 键遍历**两种写法**已实测可过 Kotlin：① `UTSJSONObject.keys(obj)` + `getAny()`；② `obj.toMap().forEach((value, key) => {})`（**不写类型标注**） | 任务 0 探针真机实测（见下节「Kotlin 禁区」） |
| ⚠️ `obj.toMap().forEach((value: any, key: string) => {})`（**显式标注 any**）会在 Kotlin 报 error17；`map.keys()` 会在 Kotlin 报「`keys` 是 `MutableSet` 属性不是函数」 | 任务 0 探针真机实测 |
| `isArray()` 是本项目可用的全局判定 | `uni_modules/lime-i18n/common/util.uts:141` |
| `type X = (...args: Array<any>) => void` 作为**函数类型字段**能过 Kotlin 编译，且 `next()` 可**无参调用** | 任务 0 探针真机实测通过（VDOM/Kotlin 通道，0 error） |
| `node` v22.22.2 可直接执行 `.ts`（类型剥离），无需 tsx/esbuild | 本机实测：`node main.ts` 打印 `ok`（`import type` + `as` + 类型标注均通过） |
| `uni.addInterceptor` / `removeInterceptor` 的真实签名 | 框架声明 `.../uni-interceptor/utssdk/interface.d.ts`：`addInterceptor(name, interceptor)`；`removeInterceptor(name, interceptor \| null)` |
| 各跳转 API 的 options 在 App 端是**不同的 Kotlin 类**，必须按 API 分别强转 | 既有代码 `src/router/interceptor.uts:177-245` 的四个 interceptor 对象 |
| 本项目 UTS 被 `.ts`/`.uvue` 导入时需要配套 `*.d.uts.ts`；但 **uni_modules 下的 `.uts` 不需要** | 全仓 `find uni_modules -name "*.d.uts.ts"` 为 0 命中；`tsconfig.json` 的 `exclude` 含 `uni_modules` |
| `main.uts` / `App.uvue` 是全局入口，可临时接线做真机验证 | `main.uts` 调用 `createApp()`；`App.uvue` 的 `onShow` 里已调 `checkDirectEntry` |

## UTS→Kotlin 验证通道（任务 0 实测修正，**实施者必读**）

`manifest.json` 的 `uni-app-x` 当前是 `{ "vapor": true, "vapor-render-target": "bytecode" }`。**在这个配置下，真机运行走「蒸汽模式 + 字节码」，完全跳过 Kotlin 阶段**：

```
编译器版本：5.24（uni-app x）蒸汽模式
当前视图层编译目标：字节码
```

因此 `grep -c "编译为android class" <log>` 恒为 `0`（实测两轮 mock 均如此），SKILL.md 1.3.15 那条判据**在当前配置下永远无法满足** —— 不是代码有问题，是通道没进 Kotlin。UTS 逻辑层此模式下走 `uts2js`（`unpackage/cache/vapor/.app-android/.uts2js/`），所以「只测字节码」等于**没测 Kotlin**。

**要进 Kotlin 阶段，必须临时把 `uni-app-x` 里的 `vapor` 键去掉**（回到 VDOM 模式），再跑不带 `--compile` 的真机构建：

```bash
# 1) 临时改 manifest.json：  "uni-app-x": { "styleIsolationVersion": "2" }   ← 删掉 vapor / vapor-render-target
# 2) 真机构建（唯一可信通道）
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android \
  --project /Users/chenqi/Desktop/unibestX --deviceId <序列号>
# 3) 判据（两个都要满足）
grep -c "编译为android class" <log>   # ≥ 1（实测 VDOM 模式为 89）
grep -aE "error:|kotlin编译失败" <log> # 0 命中
# 4) 跑完把 manifest.json 还原
```

- **设备**：`adb devices` 实测可用设备 `JTK5T19928025722`（Huawei TAS-AL00）。
- **本轮实测**：VDOM 模式 `编译为android class` ×89、`编译成功`、`error:` 0 命中、探针 4 行结果全部正确。
- **两种模式都要跑**：字节码（vapor）模式是项目默认，Kotlin（VDOM）模式才暴露 Kotlin 禁区。任务 9 要求两者都过。

### Kotlin 禁区（任务 0 真机证伪，**实现时一律避开**）

| 写法 | 字节码(vapor) | Kotlin(VDOM) |
| --- | --- | --- |
| `obj.toMap().forEach((value: any, key: string) => {})` | ✅ | ❌ error17：实际 `Function2<Any, String, Unit>`，预期 `Function1<Map.Entry<String, Any?>, Unit>` |
| `map.keys()` | ✅ | ❌ `Expression 'keys' of type 'MutableSet<String>' cannot be invoked as a function` |
| `obj.toMap().forEach((value, key) => {})`（不写标注） | ✅ | ✅ |
| `UTSJSONObject.keys(obj)` + `obj.getAny(key)` | ✅ | ✅ |
| `obj.toMap().forEach((entry: any) => {})`（单参） | ✅ | ✅ |
| `Map<string, string>.forEach((value: string, key: string) => {})` | ✅ | ✅ |
| `setTimeout(localFn, 1200)`（局部函数当值传递） | ✅ | ❌ error18 `找不到名称"localFn"`，须写 `setTimeout(() => { localFn(); }, 1200)` |
| 在对象字面量的回调里引用外层 `<script setup>` 的局部函数 | ✅ | ❌ 同上 error18（把函数体内联进 lambda 即可） |

---

## 文件结构

**创建（交付物）：**

| 文件 | 职责 |
| --- | --- |
| `uni_modules/uni-router-guard/package.json` | 插件元信息，`main: "index.uts"`，`dcloudext.type: "uts"` |
| `uni_modules/uni-router-guard/index.uts` | 唯一门面：单层 `export *`（types / url / router 三个），不放任何实现 |
| `uni_modules/uni-router-guard/lib/types.uts` | 全部公开类型 + 3 个默认值常量。零依赖叶子 |
| `uni_modules/uni-router-guard/lib/url.uts` | URL 解析、规范化、相对路径解析、query 读写、`any` 入参归一。**纯函数，不碰 `uni`** |
| `uni_modules/uni-router-guard/lib/guard.uts` | 守卫注册表与同步执行器。**纯逻辑，不碰 `uni`** |
| `uni_modules/uni-router-guard/lib/interceptor.uts` | 唯一碰 `uni.addInterceptor` 的文件：安装/卸载/裁决派发/递归保护 |
| `uni_modules/uni-router-guard/lib/router.uts` | `createRouter()` 工厂，组装成 `Router` 对象字面量 |
| `uni_modules/uni-router-guard/readme.md`、`changelog.md` | 用法、与 vue-router 的差异、与 `src/router` 二选一 |
| `scripts/router-guard-test/build.mjs` | 把纯 `.uts` 转成 `.ts`、并把 harness 自身一起搬进 `.build/`（补 `.ts` 后缀、加 `{"type":"module"}`） |
| `scripts/router-guard-test/cases.ts` | 断言（决策矩阵） |
| `scripts/router-guard-test/run.ts` | 执行器：逐条跑断言，失败即 `process.exitCode = 1` |
| `scripts/router-guard-test/shim.ts` | node 侧全局垫片（补 UTS 内置的 `isArray`） |

> **运行目录只有 `.build/`**：`cases.ts` / `run.ts` 里写的是 `./url.ts` 这类相对导入，只有和生成物同目录才解析得到。源文件手写在 `scripts/router-guard-test/` 下，`build.mjs` 负责搬运，改完重跑脚本即可。

**创建（临时，验证后删除）：**

| 文件 | 用途 |
| --- | --- |
| `src/sub/routerGuardProbe/routerGuardProbe.uvue` | 任务 0 的 UTS 探针 + 任务 10 的人工回归入口 |

**只改 1 行（验证后还原）：** `main.uts` —— 临时 `import` 探针页用到的插件符号，逼编译器真的编译它。

**追加 1 条忽略规则：** `.gitignore` 增加 `scripts/router-guard-test/.build/`（harness 运行目录，勿提交）。

**不修改：** `src/router/**`、`src/store/**`、`src/tabbar/**` 一律不动（规格 1.1 已声明本插件与现有路由体系并存）。

---

## 任务 0：UTS 探针 + 真机基线（**先证伪，再实现**）

这一步是整个计划里唯一「可能推翻设计」的地方：有三种 UTS 写法是设计的地基，项目里都没有先例。**在写任何实现代码之前先把它们编译过一遍**，免得实现完才发现地基不成立。

### ✅ 执行结果（2026-09-15 真机实测，步骤 1-6 已完成）

**判据达成**：VDOM/Kotlin 通道 `编译为android class` ×89、`项目 unibestX 编译成功。`、`error:` **0 命中**；设备 `JTK5T19928025722`（Huawei TAS-AL00）。

真机 `console.log` 原样输出（`src/sub/routerGuardProbe/routerGuardProbe.uvue:138-141`）：

```
[probe] A: next('/x?y=1')=true next(false)=true next()=true
[probe] B: name=p depth=5 resolve=false
[probe] C: /src/pages/index/index?C1[id=1;tags=a,b;] C2[entry=tags=a,b;] C3[id=1;tags=a,b;]
[probe] D: id:1;
```

| 探针 | 结论 | 对设计的影响 |
| --- | --- | --- |
| A：函数类型字段 + 剩余参数 | ✅ **通过**。`type Next = (...args: Array<any>) => void` 能过 Kotlin，且 `next()` / `next(false)` / `next('/x?y=1')` 三种调用真机全部正确 | 规格 §3.3 的 `next` 形态**无需退回**，与 vue-router 的 `next()` 写法可以保持一致 |
| B：可选字段 + `??` | ✅ 通过 | 无需改动 |
| C：对象字面量 → `any` → `UTSJSONObject` → `Map<string,string>` | ⚠️ **原写法被证伪**：`toMap().forEach((value: any, key: string) => {})` 在 Kotlin 报 error17；`map.keys()` 在 Kotlin 报「属性不是函数」。**替代写法 C1（`UTSJSONObject.keys()` + `getAny()`）与 C3（不写类型标注的 `toMap().forEach`）均通过** | 任务 3 的 `url.uts` 已按 C1 改写（见任务 3） |
| D：`Map<string,string>.forEach` | ✅ 通过 | 无需改动 |
| 附加（临时衔接代码暴露） | ❌ `setTimeout(localFn, 1200)` 与「对象字面量回调里引用外层局部函数」在 Kotlin 报 error18 | 已记入上方「Kotlin 禁区」表；插件实现不得依赖这两写法 |

> **探针页相对计划原文的两处调整**（都保留在文件里，任务 10 整页删除）：
> 1. `runAll()` 末尾追加 4 行 `console.log('[probe] ' + lineN.value)` —— 用 `adb`/CLI 日志取证，替代「肉眼确认」。
> 2. 探针 C 改成三写法对照（C1/C2/C3），并把 `readLocation` 的返回串改为拼接三者结果。

> **额外临时改动（计划原文未列，任务 10 一并还原）**：`App.uvue` 加了 `// #ifdef APP-ANDROID` 内的一段自动 `uni.navigateTo` 到探针页（带最多 8 次重试）—— 否则无法在无人值守下打开探针页；`manifest.json` 为进 Kotlin 阶段临时删过 `vapor` 键，**已还原**。

**文件：**
- 创建：`src/sub/routerGuardProbe/routerGuardProbe.uvue`
- 修改：`main.uts`（临时，导入探针里定义的符号，逼编译器编译）

- [x] **步骤 1：清掉遗留目录**

`uni_modules/uni-router-guard/` 下有一个**未被 git 跟踪**的空 `.build`（`feat/router-guard` 分支的遗留产物，本分支没有该插件的任何文件）。

运行：`ls -la uni_modules/uni-router-guard/test/.build`
预期：目录存在但为空。

运行：`rm -rf uni_modules/uni-router-guard/test`
预期：`uni_modules/uni-router-guard/` 变成空目录。

- [x] **步骤 2：写探针页**

创建 `src/sub/routerGuardProbe/routerGuardProbe.uvue`（本项目二级/分包页标准模板，`definePage` 必须显式声明）：

> ⚠️ **下面是计划初稿，实际落盘的文件已按任务 0 结论改过两处**（`runAll()` 追加 4 行 `console.log`、探针 C 改为 C1/C2/C3 三写法对照）。以磁盘上的 `src/sub/routerGuardProbe/routerGuardProbe.uvue` 为准，勿按本代码块回退覆盖。
> 其中探针 C 的 `query!.toMap().forEach((value: any, key: string): void => {})` 已被真机证伪（Kotlin error17），保留在此仅作失败样本留档。

```html
<template>
  <view class="flex-1 flex flex-col p-[16px]">
    <text class="text-[#16a34a]">{{ line1 }}</text>
    <text class="text-[#16a34a]">{{ line2 }}</text>
    <text class="text-[#16a34a]">{{ line3 }}</text>
    <text class="text-[#16a34a]">{{ line4 }}</text>
    <button @click="runAll">重新执行探针</button>
  </view>
</template>

<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',
  showBack: true,
  hideNavbar: false,
  enablePullDownRefresh: true,
  style: {
    navigationBarTitleText: 'UTS 探针',
    navigationStyle: 'custom'
  }
});

// ── 探针 A：函数类型字段 + 剩余参数，next() 可以无参调用 ──
type ProbeNext = (...args: Array<any>) => void;
type ProbeGuard = (to: string, next: ProbeNext) => void;

const guardA: ProbeGuard = (to: string, next: ProbeNext): void => {
  if (to == 'redirect') {
    next('/x?y=1');
    return;
  }
  if (to == 'abort') {
    next(false);
    return;
  }
  next();
};

// ── 探针 B：可选字段 + 函数类型可选字段 + ?? 取值 ──
type ProbeOptions = {
  name ?: string;
  resolve ?: (url: string) => string;
  depth ?: number;
};

// ── 探针 C：对象字面量 → any → UTSJSONObject 读取（含嵌套） ──
function readLocation(to: any): string {
  const obj = to as UTSJSONObject;
  const path = obj.getString('path') ?? '';
  const query = obj.getJSON('query');
  let queryStr = '';
  if (query != null) {
    query!.toMap().forEach((value: any, key: string): void => {
      queryStr += `${key}=${value}&`;
    });
  }
  return `${path}?${queryStr}`;
}

const line1 = ref('A: 未执行');
const line2 = ref('B: 未执行');
const line3 = ref('C: 未执行');
const line4 = ref('D: 未执行');

function runAll(): void {
  // A：三种 next 形态都要能调用（能走到这里就说明编译通过）
  let called1 = false;
  let called2 = false;
  let called3 = false;
  guardA('redirect', (...args: Array<any>): void => { called1 = args.length > 0 && (args[0] as string) == '/x?y=1'; });
  guardA('abort', (...args: Array<any>): void => { called2 = args.length > 0 && (args[0] as boolean) == false; });
  guardA('pass', (...args: Array<any>): void => { called3 = args.length == 0; });
  line1.value = `A: next('/x?y=1')=${called1} next(false)=${called2} next()=${called3}`;

  // B：可选字段
  const opts: ProbeOptions = { name: 'p' };
  const name = opts.name ?? '(空)';
  const depth = opts.depth ?? 5;
  const hasResolve = opts.resolve != null;
  line2.value = `B: name=${name} depth=${depth} resolve=${hasResolve}`;

  // C：对象字面量 → any → UTSJSONObject
  line3.value = `C: ${readLocation({ path: '/src/pages/index/index', query: { id: 1, tags: ['a', 'b'] } })}`;

  // D：Map 遍历 + 边界判断
  const m = new Map<string, string>();
  m.set('id', '1');
  let acc = '';
  m.forEach((value: string, key: string): void => { acc += `${key}:${value};`; });
  line4.value = `D: ${acc}`;
}

onNavbarPullDownRefresh(() => {
  runAll();
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 500);
});

runAll();
</script>

<style lang="scss" scoped>
</style>
```

- [x] **步骤 3：逼编译器真的编译这些类型**

`src/sub/**` 的页面会被自研 vite 插件扫描并写进 `pages.json`，但探针里的类型是页面**内部**的，只要页面被编译就够；不过为了确保编译发生在 Kotlin 阶段而不是被摇树掉，在 `main.uts` 顶部临时加一行导入：

修改 `main.uts`，在 `import { installRouteInterceptor } ...` 之后插入：

```uts
// TODO(临时): 探针页编译验证用，任务 10 结束后删除
import './src/sub/routerGuardProbe/routerGuardProbe.uvue';
```

- [x] **步骤 4：跑 H5（快，先排除语法错）**

运行：`pnpm build:h5`
预期：出现 `项目 unibestX 编译成功。` 与 `✅ H5 打包成功`。既有噪声 `error TS2305 ... resolveEasycom` 属正常，不作为失败判据。

- [x] **步骤 5：跑真机构建（关键判据）**

运行：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android \
  --project /Users/chenqi/Desktop/unibestX --deviceId <序列号>
```

预期：日志中 **`编译为android class` 出现 ≥ 1 次**，且最终出现 `项目 unibestX 编译成功。`

- [x] **步骤 6：真机肉眼确认 4 行结果**

在设备上打开「UTS 探针」页，预期：

```
A: next('/x?y=1')=true next(false)=true next()=true
B: name=p depth=5 resolve=false
C: /src/pages/index/index?id=1&tags=<非空>
D: id:1;
```

> C 行的 `tags=` 后面**不校验具体格式**：数组在 Kotlin 侧的 `toString()` 与 JS 不一致（`[a, b]` / `a,b` 都可能）。这一行要证的是「嵌套对象字面量能被 `getJSON` + `toMap()` 读出来」，不是数组的字符串形态。

**若 A 行编译不过**（函数类型字段里的剩余参数不被支持）：退回「`next` 入参必填」方案 —— 把 `Next` 改成 `(value: any) => void`，放行写 `next(null)`，并在规格 §3.3 与 readme 里如实记录这条与 vue-router 的差异。**此时必须先停下来告知用户，不要自行改设计。**

- [x] **步骤 7：Commit**

```bash
git add src/sub/routerGuardProbe/routerGuardProbe.uvue main.uts
git commit -m "test(router-guard): 新增 UTS 探针页，验证函数类型剩余参数等三项假设"
```

---

## 任务 1：types.uts（零依赖叶子）

**文件：**
- 创建：`uni_modules/uni-router-guard/lib/types.uts`

- [ ] **步骤 1：写类型定义**

```uts
/**
 * uni-router-guard 公开类型定义
 *
 * ⚠️ 本文件必须保持零依赖：插件内部各模块与使用方都从这里取类型。
 * ⚠️ 一律禁止 interface：UTS 不允许把对象字面量赋给 interface（UTS110111163）。
 * ⚠️ 禁止 undefined：空值一律 null，联合类型仅限 `T | null`。
 */

/**
 * 路由目标：一次导航的目标或来源。
 *
 * 与 vue-router 的 to/from 形态对齐，但有两处确定差异：
 * - params 恒为空（无路由表 ⇒ 无动态段）
 * - query 是 Map 而非对象（UTS 无法动态构造 UTSJSONObject）
 */
export type RouteTarget = {
  /** 原始 url 字符串（保留 query 原文） */
  url: string;
  /** 规范化路径：带前导 /、不含 query */
  path: string;
  /** path + 原始 query 串 */
  fullPath: string;
  /** 查询参数，值恒为 string */
  query: Map<string, string>;
  /** 恒为空，仅为与 vue-router 形态一致 */
  params: Map<string, string>;
  /** 触发本次导航的 uni API 名 */
  api: string;
};

/**
 * next 回调。
 *
 * ⚠️ 用剩余参数而非 `(value: any) => void`：vue-router 的 next() / next('/x') /
 *    next(false) 三种形态**参数个数**都不同，UTS 只支持与 null 的联合类型，
 *    剩余参数是唯一能同时容纳它们的写法（依据见计划的「前置事实」表）。
 */
export type Next = (...args: Array<any>) => void;

/** 前置守卫：签名与 vue-router 3 的全局前置守卫逐字相同 */
export type NavigationGuard = (to: RouteTarget, from: RouteTarget, next: Next) => void;

/** 后置钩子：签名与 vue-router 3 的全局后置钩子逐字相同 */
export type AfterNavigationHook = (to: RouteTarget, from: RouteTarget) => void;

/** createRouter 选项 */
export type RouterOptions = {
  /** 需要拦截的 API 名；不传用 DEFAULT_APIS */
  apis ?: Array<string>;
  /** 裁决改跳时统一使用的跳转 API；不传用 'navigateTo' */
  redirectApi ?: string;
  /** 改跳时按 url 决定跳转 API（如「是 TabBar 页就 switchTab」）；不传则恒用 redirectApi */
  resolveRedirectApi ?: (url: string) => string;
  /** 同一次导航的重定向链深度上限；不传用 5 */
  maxRedirectDepth ?: number;
  /** 打印拦截链路日志；不传用 false */
  debug ?: boolean;
};

/** createRouter 返回的路由器实例 */
export type Router = {
  /** 注册前置守卫，返回注销函数 */
  beforeEach: (guard: NavigationGuard) => () => void;
  /** 注册后置钩子，返回注销函数 */
  afterEach: (hook: AfterNavigationHook) => () => void;
  /** 新页面入栈 */
  push: (to: any) => Promise<any> | null;
  /** 替换当前页 */
  replace: (to: any) => Promise<any> | null;
  /** 关闭所有页面再打开 */
  relaunch: (to: any) => Promise<any> | null;
  /** 跳转到 TabBar 页面 */
  switchTab: (to: any) => Promise<any> | null;
  /** 返回；back() 等价 back(1) */
  back: (...args: Array<number>) => void;
  /** 卸载全部已安装的拦截器 */
  uninstall: () => void;
};

/** 默认拦截的 5 个导航 API */
export const DEFAULT_APIS: Array<string> = [
  'navigateTo',
  'redirectTo',
  'reLaunch',
  'switchTab',
  'navigateBack'
];

/** 默认的改跳 API */
export const DEFAULT_REDIRECT_API: string = 'navigateTo';

/** 默认的重定向链深度上限 */
export const DEFAULT_MAX_REDIRECT_DEPTH: number = 5;
```

- [ ] **步骤 2：Commit**

```bash
git add uni_modules/uni-router-guard/lib/types.uts
git commit -m "feat(uni-router-guard): 新增公开类型与默认值常量"
```

---

## 任务 2：harness 骨架 + url 的失败测试

**文件：**
- 创建：`scripts/router-guard-test/build.mjs`
- 创建：`scripts/router-guard-test/shim.ts`
- 创建：`scripts/router-guard-test/cases.ts`
- 创建：`scripts/router-guard-test/run.ts`

- [ ] **步骤 1：忽略 harness 运行目录**

在 `.gitignore` 末尾追加：

```
# router-guard harness 的运行目录（由 build.mjs 生成）
scripts/router-guard-test/.build/
```

- [ ] **步骤 2：写转换脚本**

`scripts/router-guard-test/build.mjs`：

```js
#!/usr/bin/env node
/**
 * 把插件里的纯逻辑 .uts 转成 node 能直接执行的 .ts，并把 harness 自身一起搬进 .build/。
 *
 * 为什么 harness 也要搬：cases.ts / run.ts 里写的是 `./url.ts` 这种相对导入，
 * 只有和生成物同目录才解析得到。所以 .build/ 是**唯一运行目录**：
 *   node scripts/router-guard-test/.build/run.ts
 * 源文件仍手写在 scripts/router-guard-test/ 下，改完重跑本脚本即可。
 *
 * 只处理不碰 uni 全局的模块 —— interceptor.uts 会调 uni.addInterceptor 且有
 * 条件编译强转，不进 harness（由真机回归覆盖）。
 *
 * 转换内容刻意只有一处：相对导入补 .ts 后缀（node ESM 不猜扩展名）。
 * 一旦需要改写语法才能跑，说明这些模块已经不纯了 —— 那正是需要知道的事，
 * 所以遇到条件编译标记直接报错退出。
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SRC_DIR = path.join(ROOT, 'scripts/router-guard-test');
const OUT = path.join(SRC_DIR, '.build');
const PLUGIN_LIB = path.join(ROOT, 'uni_modules/uni-router-guard/lib');

/** 需要从 .uts 转成 .ts 的插件模块 */
const UTS_SOURCES = ['types.uts', 'url.uts'];

/** 原样搬进 .build/ 的 harness 文件 */
const HARNESS_FILES = ['shim.ts', 'cases.ts', 'run.ts'];

let missing = 0;

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'package.json'), JSON.stringify({ type: 'module' }, null, 2));

for (const name of UTS_SOURCES) {
  const file = path.join(PLUGIN_LIB, name);
  if (!fs.existsSync(file)) {
    console.error(`✗ 缺少源文件：${path.relative(ROOT, file)}`);
    missing += 1;
    continue;
  }
  const src = fs.readFileSync(file, 'utf8');
  if (/#\s*(ifdef|ifndef|endif)/.test(src)) {
    console.error(`✗ ${name} 里出现了条件编译标记：纯逻辑模块不应有平台分支`);
    process.exitCode = 1;
    continue;
  }
  const out = src.replace(/from '(\.\/[^']+)\.uts'/g, "from '$1.ts'");
  fs.writeFileSync(path.join(OUT, name.replace(/\.uts$/, '.ts')), out);
  console.log(`✓ ${name} → .build/${name.replace(/\.uts$/, '.ts')}`);
}

for (const name of HARNESS_FILES) {
  const file = path.join(SRC_DIR, name);
  if (!fs.existsSync(file)) {
    console.error(`✗ 缺少 harness 文件：${path.relative(ROOT, file)}`);
    missing += 1;
    continue;
  }
  fs.copyFileSync(file, path.join(OUT, name));
  console.log(`✓ ${name} → .build/${name}`);
}

if (missing > 0) {
  console.error(`\n${missing} 个文件缺失，构建中止`);
  process.exitCode = 1;
} else {
  console.log('\n构建完成，运行：node scripts/router-guard-test/.build/run.ts');
}
```

- [ ] **步骤 3：写 node 侧全局垫片**

`scripts/router-guard-test/shim.ts`（UTS 内置的 `isArray` 在 node 里不存在，必须补）：

```ts
// UTS 内置全局 → node 侧等价实现。必须在导入被测模块**之前**执行，
// 因此 run.ts 用动态 import 保证顺序（静态 import 会被提升）。
const g = globalThis as any;
g.isArray = Array.isArray;

export {};
```

- [ ] **步骤 4：写断言集（URL 部分）**

`scripts/router-guard-test/cases.ts`：

```ts
import type { Next, RouteTarget } from './types.ts';
import {
  normalizeLocation,
  normalizePath,
  parseQuery,
  parseUrl,
  resolveRelativePath,
  serializeQuery
} from './url.ts';

/** 累计失败的用例名 */
export const failures: Array<string> = [];

function check(name: string, actual: any, expected: any): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${name}`);
    return;
  }
  console.log(`  ✗ ${name}\n      期望 ${e}\n      实际 ${a}`);
  failures.push(name);
}

export function runUrlCases(): void {
  console.log('\n[url] normalizePath');
  check('补前导斜杠', normalizePath('src/pages/x/x'), '/src/pages/x/x');
  check('已是绝对路径不动', normalizePath('/src/pages/x/x'), '/src/pages/x/x');
  check('空串原样返回', normalizePath(''), '');

  console.log('\n[url] resolveRelativePath');
  check('相对路径按当前页目录解析', resolveRelativePath('sub', '/src/pages/index/index'), '/src/pages/index/sub');
  check('绝对路径不解析', resolveRelativePath('/a/b', '/src/pages/index/index'), '/a/b');
  check('协议链接不解析', resolveRelativePath('https://a.com/x', '/src/pages/index/index'), 'https://a.com/x');
  check('页栈为空时不拼接', resolveRelativePath('sub', ''), 'sub');

  console.log('\n[url] parseQuery');
  check('解码百分号转义', parseQuery('name=%E5%BC%A0%E4%B8%89').get('name'), '张三');
  check('无值键给空串', parseQuery('flag').get('flag'), '');
  check('值里含等号不丢内容', parseQuery('a=b=c').get('a'), 'b=c');
  check('空串得到空 Map', parseQuery('').size, 0);

  console.log('\n[url] parseUrl');
  const t = parseUrl('/a/b?id=1&x=2', '', 'navigateTo');
  check('path 去掉 query', t.path, '/a/b');
  check('query 逐项', t.query.get('id'), '1');
  check('fullPath 保留 query 原文', t.fullPath, '/a/b?id=1&x=2');
  check('url 原样保留', t.url, '/a/b?id=1&x=2');
  check('api 透传', t.api, 'navigateTo');
  check('params 恒为空', t.params.size, 0);
  check('相对 url 按当前页解析', parseUrl('sub?id=1', '/src/pages/index/index', 'navigateTo').path, '/src/pages/index/sub');
  check('src/ 前缀补斜杠', parseUrl('src/pages/x/x', '', 'navigateTo').path, '/src/pages/x/x');
  check('无 query 时 fullPath 不带问号', parseUrl('/a/b', '', 'navigateTo').fullPath, '/a/b');

  console.log('\n[url] normalizeLocation(any)');
  check('字符串形态', normalizeLocation('/a/b?x=1'), '/a/b?x=1');
  check('对象形态', normalizeLocation({ path: '/a/b', query: { id: 1 } }), '/a/b?id=1');
  check('对象形态无 query', normalizeLocation({ path: '/a/b' }), '/a/b');
  check('对象形态数字值', normalizeLocation({ path: '/a/b', query: { n: 42 } }), '/a/b?n=42');
  check('对象形态布尔值', normalizeLocation({ path: '/a/b', query: { ok: true } }), '/a/b?ok=true');
  check('对象形态中文值做编码', normalizeLocation({ path: '/a/b', query: { k: '中' } }), '/a/b?k=%E4%B8%AD');
  check('对象形态数组用逗号连接', normalizeLocation({ path: '/a/b', query: { ids: [1, 2] } }), '/a/b?ids=1%2C2');
  check('对象形态 null 值忽略', normalizeLocation({ path: '/a/b', query: { x: null } }), '/a/b');
  check('空路径返回空串', normalizeLocation({ path: '' }), '');
  check('null 入参返回空串', normalizeLocation(null), '');

  console.log('\n[url] serializeQuery');
  check('null 得到空串', serializeQuery(null), '');
  check('空对象得到空串', serializeQuery({}), '');
}
```

- [ ] **步骤 5：写执行器**

`scripts/router-guard-test/run.ts`：

```ts
// 先跑垫片，再动态导入被测模块——静态 import 会被提升到垫片之前
await import('./shim.ts');

const { failures, runUrlCases } = await import('./cases.ts');

runUrlCases();

if (failures.length > 0) {
  console.error(`\n❌ ${failures.length} 条失败`);
  process.exitCode = 1;
} else {
  console.log('\n✅ 全部通过');
}
```

- [ ] **步骤 6：跑一次，确认红灯**

运行：`node scripts/router-guard-test/build.mjs`
预期：**exit 1**，输出 `✗ 缺少源文件：uni_modules/uni-router-guard/lib/url.uts` 与 `1 个文件缺失，构建中止`。

运行：`node scripts/router-guard-test/.build/run.ts; echo "exit=$?"`
预期：因 `.build/` 里只有 `package.json`，报模块解析失败 + `exit=1`。

- [ ] **步骤 7：Commit**

```bash
git add scripts/router-guard-test .gitignore
git commit -m "test(router-guard): 新增 node harness 骨架与 URL 决策矩阵（此时为红）"
```

---

## 任务 3：url.uts（纯函数）

**文件：**
- 创建：`uni_modules/uni-router-guard/lib/url.uts`

- [ ] **步骤 1：实现**

```uts
/**
 * URL 解析与规范化。
 *
 * ⚠️ 本文件是**纯函数**：不调用 getCurrentPages()、不碰 uni 全局，也不做任何日志。
 *    「当前页路径」一律作为入参传入，这样整套规则能在 node 里跑决策矩阵
 *    （scripts/router-guard-test）。
 *
 * ⚠️ UTS 约束：下标读取的边界判断必须与读取同时发生（Kotlin 越界会抛异常）；
 *    数字/数组必须显式标注类型；空值用 null，不用 undefined。
 */
import type { RouteTarget } from './types.uts';

/** 规范化路径：补前导斜杠（'src/pages/x' → '/src/pages/x'），空串原样返回 */
export function normalizePath(path: string): string {
  if (path == '') {
    return '';
  }
  if (path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
}

/** 是否协议链接（plugin:// / http:// / https://） */
export function isProtocolUrl(path: string): boolean {
  if (path.startsWith('plugin://')) {
    return true;
  }
  if (path.startsWith('http://')) {
    return true;
  }
  return path.startsWith('https://');
}

/**
 * 相对路径解析：把 'subpage' 解析为「当前页所在目录」下的绝对路径。
 * - 已带前导 / 或协议链接 → 原样返回
 * - currentPagePath 为空（页栈为空，如冷启动首个页面）→ 原样返回，不做拼接
 */
export function resolveRelativePath(path: string, currentPagePath: string): string {
  if (path == '' || path.startsWith('/')) {
    return path;
  }
  if (isProtocolUrl(path)) {
    return path;
  }
  if (currentPagePath == '') {
    return path;
  }
  const base = normalizePath(currentPagePath);
  const slashIdx = base.lastIndexOf('/');
  if (slashIdx < 0) {
    return path;
  }
  const dir = base.substring(0, slashIdx);
  return `${dir}/${path}`;
}

/** URL 解码；'%' 转义非法时原样返回，不抛异常 */
export function decodeValue(value: string): string {
  if (!value.includes('%')) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  }
  catch (e) {
    return value;
  }
}

/** 解析 query 串为 Map（值做 URL 解码） */
export function parseQuery(queryStr: string): Map<string, string> {
  const query = new Map<string, string>();
  if (queryStr == '') {
    return query;
  }
  const pairs = queryStr.split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    if (pair == '') {
      continue;
    }
    const eqIdx = pair.indexOf('=');
    if (eqIdx < 0) {
      query.set(decodeValue(pair), '');
    }
    else {
      query.set(pair.substring(0, eqIdx), decodeValue(pair.substring(eqIdx + 1)));
    }
  }
  return query;
}

/** query 值的字符串化：string/number/boolean 直转，数组用 , 连接，对象用 JSON */
export function stringifyQueryValue(value: any): string {
  if (isArray(value)) {
    const items: Array<string> = [];
    const arr = value as Array<any>;
    for (let i = 0; i < arr.length; i++) {
      items.push(stringifyQueryValue(arr[i]));
    }
    return items.join(',');
  }
  const valueType = typeof value;
  if (valueType == 'string') {
    return value as string;
  }
  if (valueType == 'number') {
    return (value as number).toString();
  }
  if (valueType == 'boolean') {
    return (value as boolean) ? 'true' : 'false';
  }
  if (valueType == 'object') {
    return JSON.stringify(value) ?? '';
  }
  return '';
}

/**
 * 把 `{ path, query }` 里的 query 序列化为 query 串（值来自 UTSJSONObject 字面量）。
 * null 值按「忽略该键」处理。
 *
 * ⚠️ 键遍历必须用本写法（任务 0 真机实测）：`UTSJSONObject.keys()` + `getAny()`。
 *    禁用 `query.toMap().forEach((value: any, key: string) => {})` —— 显式标注 any 会在 Kotlin 报 error17。
 */
export function serializeQuery(query: UTSJSONObject | null): string {
  if (query == null) {
    return '';
  }
  const parts: Array<string> = [];
  const keys = UTSJSONObject.keys(query);
  keys.forEach((key: string): void => {
    const value = query.getAny(key);
    if (value == null) {
      return;
    }
    parts.push(`${key}=${encodeURIComponent(stringifyQueryValue(value))}`);
  });
  return parts.join('&');
}

/**
 * 把 push/replace 的入参归一为 url 字符串。支持两种形态（与 vue-router 一致）：
 * 字符串，以及 `{ path, query }` 对象字面量。
 *
 * ⚠️ 对象形态必须是**字面量**：字面量在 UTS 里编译为 UTSJSONObject；
 *    若使用者先声明成带 type 标注的变量再传，会编译成 Kotlin data class，
 *    这里 `as UTSJSONObject` 就会抛 ClassCastException（H5/node 正常、只在真机崩）。
 *    插件因此**不导出**对象形态的类型别名，避免诱导出那种写法。
 */
export function normalizeLocation(to: any): string {
  if (to == null) {
    return '';
  }
  if (typeof to == 'string') {
    return to as string;
  }
  const obj = to as UTSJSONObject;
  const path = obj.getString('path') ?? '';
  if (path == '') {
    return '';
  }
  const queryStr = serializeQuery(obj.getJSON('query'));
  if (queryStr == '') {
    return path;
  }
  return `${path}?${queryStr}`;
}

/**
 * 把 url 解析为 RouteTarget。
 *
 * @param url 原始 url（可含 query、可为相对路径）
 * @param currentPagePath 当前页路径（getCurrentPages() 栈顶的 route）；页栈为空传 ''
 * @param api 触发本次导航的 uni API 名
 */
export function parseUrl(url: string, currentPagePath: string, api: string): RouteTarget {
  const queryIdx = url.indexOf('?');
  const rawPath = queryIdx >= 0 ? url.substring(0, queryIdx) : url;
  const queryStr = queryIdx >= 0 ? url.substring(queryIdx + 1) : '';

  let path = rawPath;
  if (path != '' && !path.startsWith('/') && !isProtocolUrl(path)) {
    if (path.startsWith('src/')) {
      path = `/${path}`;
    }
    else {
      path = resolveRelativePath(path, currentPagePath);
    }
  }

  const query = parseQuery(queryStr);
  return {
    url: url,
    path: path,
    fullPath: queryStr == '' ? path : `${path}?${queryStr}`,
    query: query,
    params: new Map<string, string>(),
    api: api
  } as RouteTarget;
}
```

- [ ] **步骤 2：跑测试**

运行：`node scripts/router-guard-test/build.mjs && node scripts/router-guard-test/.build/run.ts; echo "exit=$?"`
预期：`✅ 全部通过` 与 `exit=0`。

- [ ] **步骤 3：确认测试真的会红（红线 28）**

把 `resolveRelativePath` 里的 `return \`${dir}/${path}\`;` 临时改成 `return path;`，重跑步骤 2。
预期：至少 1 条失败 + `exit=1`。确认后**改回来**再重跑一次确认全绿。

- [ ] **步骤 4：Commit**

```bash
git add uni_modules/uni-router-guard/lib/url.uts
git commit -m "feat(uni-router-guard): 新增 url 纯函数模块（URL 决策矩阵全绿）"
```

---

## 任务 4：guard 的失败测试（next 裁决表 + 守卫链）

**文件：**
- 修改：`scripts/router-guard-test/build.mjs`（`SOURCES` 加 `guard.uts`）
- 修改：`scripts/router-guard-test/cases.ts`（追加 `runGuardCases`）
- 修改：`scripts/router-guard-test/run.ts`（调用 `runGuardCases`）

- [ ] **步骤 1：把 guard.uts 纳入转换**

修改 `scripts/router-guard-test/build.mjs`：

```js
const UTS_SOURCES = ['types.uts', 'url.uts'];
```
改为
```js
const UTS_SOURCES = ['types.uts', 'url.uts', 'guard.uts'];
```

- [ ] **步骤 2：追加守卫用例**

在 `scripts/router-guard-test/cases.ts` 顶部把 import 补全：

```ts
import type { NavigationGuard, Next, RouteTarget } from './types.ts';
import { registerAfterHook, registerBeforeGuard, resetGuards, runAfterHooks, runBeforeGuards } from './guard.ts';
```

在文件末尾追加：

```ts
/** 注册单个守卫后跑一次前置链，返回裁决（顺带隔离上一条用例的注册状态） */
function outcomeOf(guard: NavigationGuard) {
  resetGuards();
  registerBeforeGuard(guard);
  const to = parseUrl('/a/b?id=1', '', 'navigateTo') as RouteTarget;
  const from = parseUrl('/c/d', '', 'navigateTo') as RouteTarget;
  return runBeforeGuards(to, from);
}

/** 捕获「守卫是否被调用」的辅助变量容器 */
type Probe = { hit: number };

export function runGuardCases(): void {
  console.log('\n[guard] next 裁决表');
  const pass0 = outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next();
  });
  check('next() 放行', pass0.pass, true);
  check('next() 无改跳', pass0.redirect, null);

  check('next(null) 放行', outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next(null);
  }).pass, true);

  check('next(true) 放行', outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next(true);
  }).pass, true);

  const redirected = outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next('/login?redirect=%2Fa');
  });
  check('next(url) 拦截', redirected.pass, false);
  check('next(url) 带去重定向目标', redirected.redirect, '/login?redirect=%2Fa');

  const aborted = outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next(false);
  });
  check('next(false) 拦截', aborted.pass, false);
  check('next(false) 不改跳', aborted.redirect, null);

  check('next(空串) 按中止处理', outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next('');
  }).pass, false);

  check('next(非法值) fail-safe 中止', outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next(123);
  }).pass, false);

  const forgot = outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    // 故意不调用 next
  });
  check('未调用 next 时中止', forgot.pass, false);
  check('未调用 next 时打标 missingNext', forgot.missingNext, true);

  const twice = outcomeOf((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next('/first');
    next();
  });
  check('重复调用 next 只认第一次', twice.redirect, '/first');

  console.log('\n[guard] 守卫链');
  const order: Array<string> = [];
  check('两个守卫都放行 → 放行', outcomeOf2(
    (to: RouteTarget, from: RouteTarget, next: Next): void => {
      order.push('g1');
      next();
    },
    (to: RouteTarget, from: RouteTarget, next: Next): void => {
      order.push('g2');
      next();
    }
  ).pass, true);
  check('守卫按注册顺序执行', order.join(','), 'g1,g2');

  const shortCircuit: Array<string> = [];
  const sc = outcomeOf2(
    (to: RouteTarget, from: RouteTarget, next: Next): void => {
      shortCircuit.push('g1');
      next('/login');
    },
    (to: RouteTarget, from: RouteTarget, next: Next): void => {
      shortCircuit.push('g2');
      next();
    }
  );
  check('前一守卫改跳时短路', sc.redirect, '/login');
  check('短路后第二个守卫不执行', shortCircuit.join(','), 'g1');

  const probe: Probe = { hit: 0 };
  resetGuards();
  const unregister = registerBeforeGuard((to: RouteTarget, from: RouteTarget, next: Next): void => {
    probe.hit = probe.hit + 1;
    next();
  });
  registerBeforeGuard((to: RouteTarget, from: RouteTarget, next: Next): void => {
    next();
  });
  unregister();
  runBeforeGuards(parseUrl('/a/b', '', 'navigateTo') as RouteTarget, parseUrl('/c/d', '', 'navigateTo') as RouteTarget);
  check('注销函数能移除该守卫', probe.hit, 0);

  console.log('\n[guard] 后置钩子');
  const afterOrder: Array<string> = [];
  resetGuards();
  registerAfterHook((to: RouteTarget, from: RouteTarget): void => {
    afterOrder.push('h1');
  });
  const unregisterAfter = registerAfterHook((to: RouteTarget, from: RouteTarget): void => {
    afterOrder.push('h2');
  });
  runAfterHooks(parseUrl('/a/b', '', 'navigateTo') as RouteTarget, parseUrl('/c/d', '', 'navigateTo') as RouteTarget);
  check('后置钩子按注册顺序执行', afterOrder.join(','), 'h1,h2');
  unregisterAfter();
  runAfterHooks(parseUrl('/a/b', '', 'navigateTo') as RouteTarget, parseUrl('/c/d', '', 'navigateTo') as RouteTarget);
  check('注销后不再执行', afterOrder.join(','), 'h1,h2,h1');
}

/** 注册两个守卫后跑一次前置链 */
function outcomeOf2(guard1: NavigationGuard, guard2: NavigationGuard) {
  resetGuards();
  registerBeforeGuard(guard1);
  registerBeforeGuard(guard2);
  const to = parseUrl('/a/b', '', 'navigateTo') as RouteTarget;
  const from = parseUrl('/c/d', '', 'navigateTo') as RouteTarget;
  return runBeforeGuards(to, from);
}
```

- [ ] **步骤 3：执行器接入**

`scripts/router-guard-test/run.ts` 改为：

```ts
// 先跑垫片，再动态导入被测模块——静态 import 会被提升到垫片之前
await import('./shim.ts');

const { failures, runGuardCases, runUrlCases } = await import('./cases.ts');

runUrlCases();
runGuardCases();

if (failures.length > 0) {
  console.error(`\n❌ ${failures.length} 条失败`);
  process.exitCode = 1;
} else {
  console.log('\n✅ 全部通过');
}
```

- [ ] **步骤 4：跑一次，确认红灯**

运行：`node scripts/router-guard-test/build.mjs; echo "exit=$?"`
预期：**exit=1** + `✗ 缺少源文件：uni_modules/uni-router-guard/lib/guard.uts` + `1 个文件缺失，构建中止`。

- [ ] **步骤 5：Commit**

```bash
git add scripts/router-guard-test
git commit -m "test(router-guard): 追加 next 裁决表与守卫链用例（此时为红）"
```

---

## 任务 5：guard.uts（守卫注册表 + 同步执行器）

**文件：**
- 创建：`uni_modules/uni-router-guard/lib/guard.uts`

- [ ] **步骤 1：实现**

```uts
/**
 * 守卫注册表与同步执行器。
 *
 * ⚠️ 守卫只能是同步的：uni.addInterceptor 的 invoke 必须同步返回 boolean，
 *    因此 vue-router 里 `await userStore.getUserInfo()` 那类异步守卫写不出来。
 *    需要异步校验时的模式是「先 next(false) 拦下，异步完成后再自己跳」。
 *
 * ⚠️ 不碰 uni 全局：本文件必须能在 node 里跑（scripts/router-guard-test）。
 */
import type { AfterNavigationHook, NavigationGuard, Next, RouteTarget } from './types.uts';

/** 前置守卫链的执行结果 */
export type GuardOutcome = {
  /** 是否放行 */
  pass: boolean;
  /** 拦截时的改跳目标；null 表示静默拦截 */
  redirect: string | null;
  /** 是否有守卫未调用 next（仅用于日志排查） */
  missingNext: boolean;
};

let beforeGuards: Array<NavigationGuard> = [];
let afterHooks: Array<AfterNavigationHook> = [];
let debugEnabled: boolean = false;

/** 开关链路日志 */
export function setGuardDebug(enabled: boolean): void {
  debugEnabled = enabled;
}

function log(message: string): void {
  if (debugEnabled) {
    console.log(`[uni-router-guard] ${message}`);
  }
}

/** 清空全部守卫（测试与热重载用） */
export function resetGuards(): void {
  beforeGuards = [];
  afterHooks = [];
}

/** 注册前置守卫，返回注销函数 */
export function registerBeforeGuard(guard: NavigationGuard): () => void {
  beforeGuards.push(guard);
  return (): void => {
    beforeGuards = beforeGuards.filter((item: NavigationGuard): boolean => item != guard);
  };
}

/** 注册后置钩子，返回注销函数 */
export function registerAfterHook(hook: AfterNavigationHook): () => void {
  afterHooks.push(hook);
  return (): void => {
    afterHooks = afterHooks.filter((item: AfterNavigationHook): boolean => item != hook);
  };
}

/**
 * 执行前置守卫链，语义对齐 vue-router 3：
 *
 *   next()                   放行，链条继续
 *   next(null) / next(true)  放行
 *   next('/x')               立即短路：中止本次导航并改跳
 *   next(false)              立即短路：中止本次导航且不跳转
 *   非法值 / 未调用 next      立即短路 + 中止（fail-safe，不静默放行）
 */
export function runBeforeGuards(to: RouteTarget, from: RouteTarget): GuardOutcome {
  const total = beforeGuards.length;
  for (let i = 0; i < total; i++) {
    // 守卫在链上可能把自己或别人注销掉，数组会变短；边界判断必须紧贴读取（红线 1.3.16）
    if (i >= beforeGuards.length) {
      break;
    }
    const guard = beforeGuards[i];

    let called = false;
    let aborted = false;
    let target: string | null = null;
    let invalid = false;

    const next: Next = (...args: Array<any>): void => {
      if (called) {
        console.warn('[uni-router-guard] 同一个守卫内重复调用了 next，后续调用被忽略');
        return;
      }
      called = true;
      if (args.length == 0) {
        return;
      }
      const value = args[0];
      if (value == null) {
        return;
      }
      const valueType = typeof value;
      if (valueType == 'boolean') {
        if ((value as boolean) == false) {
          aborted = true;
        }
        return;
      }
      if (valueType == 'string') {
        const url = value as string;
        if (url == '') {
          aborted = true;
        }
        else {
          target = url;
        }
        return;
      }
      invalid = true;
    };

    guard(to, from, next);

    if (invalid) {
      console.warn(`[uni-router-guard] 守卫返回值非法（只接受 null / true / false / 非空字符串），已按中止处理：${to.fullPath}`);
      return { pass: false, redirect: null, missingNext: false } as GuardOutcome;
    }
    if (target != null) {
      log(`守卫改跳：${to.fullPath} → ${target}`);
      return { pass: false, redirect: target, missingNext: false } as GuardOutcome;
    }
    if (aborted) {
      log(`守卫中止导航：${to.fullPath}`);
      return { pass: false, redirect: null, missingNext: false } as GuardOutcome;
    }
    if (!called) {
      console.warn(`[uni-router-guard] 守卫未调用 next，已按中止处理（vue-router 会挂起导航，同步形态不能挂）：${to.fullPath}`);
      return { pass: false, redirect: null, missingNext: true } as GuardOutcome;
    }
  }
  return { pass: true, redirect: null, missingNext: false } as GuardOutcome;
}

/** 执行全部后置钩子：不参与裁决、不影响导航结果 */
export function runAfterHooks(to: RouteTarget, from: RouteTarget): void {
  const total = afterHooks.length;
  for (let i = 0; i < total; i++) {
    if (i >= afterHooks.length) {
      break;
    }
    afterHooks[i](to, from);
  }
}
```

- [ ] **步骤 2：跑测试**

运行：`node scripts/router-guard-test/build.mjs && node scripts/router-guard-test/.build/run.ts; echo "exit=$?"`
预期：`✅ 全部通过` + `exit=0`。

- [ ] **步骤 3：确认会红（红线 28）**

把 `runBeforeGuards` 里 `if (!called)` 那一整段删除，重跑步骤 2。
预期：`未调用 next 时中止` 与 `未调用 next 时打标 missingNext` 两条失败 + `exit=1`。确认后**改回来**并重跑确认全绿。

- [ ] **步骤 4：Commit**

```bash
git add uni_modules/uni-router-guard/lib/guard.uts
git commit -m "feat(uni-router-guard): 新增守卫注册表与同步执行器（next 裁决表全绿）"
```

---

## 任务 6：interceptor.uts（唯一碰 uni 全局的运行时）

**文件：**
- 创建：`uni_modules/uni-router-guard/lib/interceptor.uts`

- [ ] **步骤 1：实现**

```uts
/**
 * uni.addInterceptor 的安装、卸载与裁决派发。
 *
 * ⚠️ 这是插件里唯一直接操作 uni 全局的运行时文件（另一个是 router.uts 的跳转门面）。
 *    纯逻辑一律留在 url.uts / guard.uts，那样才能进 node harness。
 */
import type { RouteTarget, RouterOptions } from './types.uts';
import { DEFAULT_MAX_REDIRECT_DEPTH, DEFAULT_REDIRECT_API } from './types.uts';
import { runAfterHooks, runBeforeGuards, setGuardDebug } from './guard.uts';
import { parseUrl } from './url.uts';

// #ifndef APP
/**
 * H5 / 小程序侧没有框架注入的 Interceptor 类型，这里补一个结构等价的最小定义。
 * App 原生端由框架提供同名类型，故必须用条件编译隔离（既有做法见 src/router/interceptor.uts）。
 */
export type Interceptor = {
  invoke: (options: any) => boolean;
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (res: any) => void;
};
// #endif

let installedApis: Array<string> = [];
let redirectDepth: number = 0;
let redirectApiName: string = DEFAULT_REDIRECT_API;
let maxRedirectDepth: number = DEFAULT_MAX_REDIRECT_DEPTH;
let resolveRedirectApi: ((url: string) => string) | null = null;
let debugEnabled: boolean = false;

function log(message: string): void {
  if (debugEnabled) {
    console.log(`[uni-router-guard] ${message}`);
  }
}

/** 当前页（页栈顶）的路径；页栈为空时返回 '' */
export function getCurrentPagePath(): string {
  const pages = getCurrentPages();
  let currentPath = '';
  if (pages.length > 0) {
    currentPath = pages[pages.length - 1].route;
  }
  return currentPath;
}

/** 上一页（页栈倒数第二个）的路径；不足两页时返回 '' */
export function getPreviousPagePath(): string {
  const pages = getCurrentPages();
  let previousPath = '';
  if (pages.length > 1) {
    previousPath = pages[pages.length - 2].route;
  }
  return previousPath;
}

/**
 * 从各跳转 API 的 options 中取 url。
 *
 * ⚠️ App 原生端每个 API 的 options 是**不同的 Kotlin 类**，必须按 API 分别强转；
 *    混用会抛 ClassCastException（`as` 是非空转换，红线 1.3.17）。因此只在 API 名命中时强转。
 * ⚠️ 使用方通过 apis 追加的自定义 API 不走 App 分支 —— 插件不可能知道它的 options 类型。
 */
export function extractUrl(api: string, options: any): string {
  if (options == null) {
    return '';
  }
  // #ifdef APP
  if (api == 'navigateTo') {
    return (options as NavigateToOptions).url;
  }
  if (api == 'redirectTo') {
    return (options as RedirectToOptions).url;
  }
  if (api == 'reLaunch') {
    return (options as ReLaunchOptions).url;
  }
  if (api == 'switchTab') {
    return (options as SwitchTabOptions).url;
  }
  return '';
  // #endif
  // #ifndef APP
  const optionsObj = options as UTSJSONObject;
  return (optionsObj.url != null) ? (optionsObj.url as string) : '';
  // #endif
}

/** 派发改跳；url 为 null/空表示静默拦截，不做任何跳转 */
function dispatchRedirect(url: string | null): void {
  if (url == null || url == '') {
    return;
  }

  redirectDepth = redirectDepth + 1;
  if (redirectDepth > maxRedirectDepth) {
    console.warn(`[uni-router-guard] 重定向链深度超过 ${maxRedirectDepth}，已放弃本次改跳：${url}`);
    return;
  }

  const api = resolveRedirectApi != null ? resolveRedirectApi!(url) : redirectApiName;
  log(`派发改跳（${api}）：${url}`);

  if (api == 'switchTab') {
    uni.switchTab({ url: url });
  }
  else if (api == 'reLaunch') {
    uni.reLaunch({ url: url });
  }
  else if (api == 'redirectTo') {
    uni.redirectTo({ url: url });
  }
  else {
    uni.navigateTo({ url: url });
  }
}

/** 单次导航的统一处理：建上下文 → 跑守卫链 → 派发裁决 */
function handleInvoke(api: string, options: any): boolean {
  const url = extractUrl(api, options);
  const currentPath = getCurrentPagePath();

  let targetUrl = url;
  if (api == 'navigateBack') {
    // 返回没有 url：目标取「上一页」，页栈不足两页时退回当前页。
    // 不读 delta：多级返回一律按上一页处理，是一条已记录的近似。
    const previousPath = getPreviousPagePath();
    targetUrl = previousPath == '' ? currentPath : previousPath;
  }

  const to = parseUrl(targetUrl, currentPath, api);
  const from = parseUrl(currentPath, currentPath, api);
  const outcome = runBeforeGuards(to, from);

  if (!outcome.pass) {
    dispatchRedirect(outcome.redirect);
    return false;
  }

  // 放行即把重定向链计数归零：只有连续改跳才会累加
  redirectDepth = 0;
  // afterEach 在放行时同步触发，不依赖未验证的 interceptor success 回调（规格 5.4）
  runAfterHooks(to, from);
  return true;
}

function createInterceptor(api: string): Interceptor {
  return {
    invoke: (options: any): boolean => handleInvoke(api, options)
  } as Interceptor;
}

/** 安装拦截器；幂等 —— 会先卸载上一次安装的 */
export function installInterceptors(apis: Array<string>): void {
  uninstallInterceptors();
  for (let i = 0; i < apis.length; i++) {
    const api = apis[i];
    uni.addInterceptor(api, createInterceptor(api));
    installedApis.push(api);
  }
  log(`已安装拦截器：${installedApis.join(',')}`);
}

/**
 * 卸载拦截器。
 *
 * ⚠️ 只能按 API 名整条移除：uni.removeInterceptor 的粒度就是「某个 API 上的拦截器」，
 *    因此使用方若自己也为同一个 API 装过拦截器，会被一并移除。这是 uni 的能力边界，
 *    已写进 readme。
 */
export function uninstallInterceptors(): void {
  for (let i = 0; i < installedApis.length; i++) {
    uni.removeInterceptor(installedApis[i], null);
  }
  installedApis = [];
}

/** 应用 createRouter 传入的选项 */
export function configureInterceptor(options: RouterOptions): void {
  redirectApiName = options.redirectApi ?? DEFAULT_REDIRECT_API;
  maxRedirectDepth = options.maxRedirectDepth ?? DEFAULT_MAX_REDIRECT_DEPTH;
  resolveRedirectApi = options.resolveRedirectApi ?? null;
  debugEnabled = options.debug ?? false;
  setGuardDebug(debugEnabled);
  redirectDepth = 0;
}
```

- [ ] **步骤 2：H5 编译确认语法**

运行：`pnpm build:h5`
预期：`项目 unibestX 编译成功。`（此任务的产物还没被任何页面导入，编译不会覆盖它，先过一遍语法关即可。）

- [ ] **步骤 3：Commit**

```bash
git add uni_modules/uni-router-guard/lib/interceptor.uts
git commit -m "feat(uni-router-guard): 新增拦截器安装、卸载与裁决派发"
```

---

## 任务 7：router.uts + index.uts + package.json

**文件：**
- 创建：`uni_modules/uni-router-guard/lib/router.uts`
- 创建：`uni_modules/uni-router-guard/index.uts`
- 创建：`uni_modules/uni-router-guard/package.json`

- [ ] **步骤 1：实现 router.uts**

```uts
/**
 * createRouter：把守卫注册表、拦截器与跳转门面组装成一个 Router 对象。
 *
 * ⚠️ 用工厂函数 + 类型化对象字面量，**不用 class**：UTS 禁止把 Class 实例赋值给变量
 *    或作为普通对象传递（UTS110111151），而 Router 必须能被使用者拿着到处传。
 */
import type { AfterNavigationHook, NavigationGuard, Router, RouterOptions } from './types.uts';
import { DEFAULT_APIS } from './types.uts';
import { registerAfterHook, registerBeforeGuard } from './guard.uts';
import { configureInterceptor, installInterceptors, uninstallInterceptors } from './interceptor.uts';
import { normalizeLocation } from './url.uts';

/** 按 API 名派发一次跳转；返回值与底层 uni API 一致 */
function navigateBy(api: string, url: string): Promise<any> | null {
  if (api == 'redirectTo') {
    return uni.redirectTo({ url: url });
  }
  if (api == 'reLaunch') {
    return uni.reLaunch({ url: url });
  }
  if (api == 'switchTab') {
    return uni.switchTab({ url: url });
  }
  return uni.navigateTo({ url: url });
}

/** 把跳转入参归一为 url；为空时返回 null，调用方据此直接返回 null */
function resolveUrl(to: any): string | null {
  const url = normalizeLocation(to);
  if (url == '') {
    console.warn('[uni-router-guard] 跳转入参为空，已忽略');
    return null;
  }
  return url;
}

/** 创建路由器实例；内部完成拦截器安装（幂等） */
export function createRouter(options: RouterOptions | null = null): Router {
  const opts = options ?? ({} as RouterOptions);
  configureInterceptor(opts);
  installInterceptors(opts.apis ?? DEFAULT_APIS);

  const router: Router = {
    beforeEach: (guard: NavigationGuard): () => void => registerBeforeGuard(guard),
    afterEach: (hook: AfterNavigationHook): () => void => registerAfterHook(hook),
    push: (to: any): Promise<any> | null => {
      const url = resolveUrl(to);
      if (url == null) {
        return null;
      }
      return navigateBy('navigateTo', url);
    },
    replace: (to: any): Promise<any> | null => {
      const url = resolveUrl(to);
      if (url == null) {
        return null;
      }
      return navigateBy('redirectTo', url);
    },
    relaunch: (to: any): Promise<any> | null => {
      const url = resolveUrl(to);
      if (url == null) {
        return null;
      }
      return navigateBy('reLaunch', url);
    },
    switchTab: (to: any): Promise<any> | null => {
      const url = resolveUrl(to);
      if (url == null) {
        return null;
      }
      return navigateBy('switchTab', url);
    },
    back: (...args: Array<number>): void => {
      const delta = args.length > 0 ? args[0] : 1;
      uni.navigateBack({ delta: delta });
    },
    uninstall: (): void => {
      uninstallInterceptors();
    }
  };

  return router;
}
```

> 若 UTS 报 `Promise<NavigateToSuccess>` 与 `Promise<any> | null` 不兼容，把 `navigateBy` 的返回类型改成 `any`，其余不动（方法签名里的 `Promise<any> | null` 保留，它只是给使用者的文档）。

- [ ] **步骤 2：实现门面 index.uts**

```uts
/**
 * uni-router-guard 统一入口。
 *
 * ⚠️ 全插件只有本文件做 `export *`，且是**单层**：被转发的模块自身不再对外 `export *`，
 *    否则 UTS 在 Android 端会把符号改名成 xxx__1（红线 1.1.12）。
 * ⚠️ 不转发 lib/interceptor.uts 与 lib/guard.uts：它们是内部机制，
 *    对外能力已由 Router 实例的 beforeEach / afterEach 暴露。
 */
export * from './lib/types.uts';
export * from './lib/router.uts';
export * from './lib/url.uts';
```

- [ ] **步骤 3：写 package.json**

```json
{
  "id": "uni-router-guard",
  "displayName": "uni-router-guard 导航拦截",
  "version": "1.0.0",
  "main": "index.uts",
  "description": "uni-app X 的导航守卫运行时：vue-router 风格的 beforeEach/afterEach 与 next 裁决，拦截 uni.navigateTo 等 5 个跳转 API，零业务依赖。",
  "keywords": ["uni-app-x", "uts", "router", "guard", "interceptor"],
  "repository": "",
  "engines": {
    "HBuilderX": "^4.0",
    "uni-app-x": "^4.0"
  },
  "dcloudext": {
    "type": "uts",
    "sale": {
      "regular": { "price": "0.00" },
      "sourcecode": { "price": "0.00" }
    },
    "contact": { "qq": "" },
    "declaration": {
      "ads": "无",
      "data": "无",
      "permissions": "无"
    },
    "npmurl": ""
  },
  "uni_modules": {
    "dependencies": [],
    "encrypt": [],
    "platforms": {
      "cloud": { "tcb": "y", "aliyun": "y", "alipay": "y" },
      "client": {
        "uni-app-x": {
          "web": { "safari": "y", "chrome": "y" },
          "app": { "android": "y", "ios": "y", "harmony": "x" },
          "mp": { "weixin": "x" }
        }
      }
    }
  }
}
```

> `harmony` 与 `weixin` 标 `x` 是**如实声明**：本计划只做了 Android 真机验证，其余端未验证。readme 里同步写明。

- [ ] **步骤 4：Commit**

```bash
git add uni_modules/uni-router-guard/lib/router.uts uni_modules/uni-router-guard/index.uts uni_modules/uni-router-guard/package.json
git commit -m "feat(uni-router-guard): 新增 createRouter 工厂与插件门面"
```

---

## 任务 8：静态回归（H5 构建 + lint）

**文件：** 无（只跑命令）

- [ ] **步骤 1：记录基线**

运行：`git stash list; pnpm lint 2>&1 | tail -5`
预期：记下改造前的 `✖ N problems (E errors, W warnings)` 数字，作为对照基线。

- [ ] **步骤 2：H5 构建**

运行：`pnpm build:h5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`。

- [ ] **步骤 3：lint 不得新增 error**

运行：`pnpm lint 2>&1 | tail -5`
预期：errors 数**与步骤 1 的基线相同**（新增 warning 可以接受，新增 error 不可以）。若新增 error，按提示修掉后重跑。

- [ ] **步骤 4：Commit（若步骤 3 有改动）**

```bash
git add -A uni_modules/uni-router-guard scripts/router-guard-test
git commit -m "chore(uni-router-guard): 修掉 lint 报出的问题"
```

---

## 任务 9：真机构建（Kotlin 通道验证）

**文件：** 无（只跑命令）

- [ ] **步骤 1：把插件接进 App 入口（临时）**

修改 `main.uts`：把任务 0 的探针页 import 换成本插件的导入，并临时装配一次（**任务 10 结束后整段还原**）：

```uts
import { createRouter } from './uni_modules/uni-router-guard';
import type { RouteTarget } from './uni_modules/uni-router-guard';

// TODO(临时): 真机验证用，任务 10 结束后删除
const probeRouter = createRouter({ debug: true });
probeRouter.beforeEach((to: RouteTarget, from: RouteTarget, next: (...args: Array<any>) => void): void => {
  console.log('[probe] beforeEach', to.api, to.fullPath, 'from', from.path);
  next();
});
probeRouter.afterEach((to: RouteTarget, from: RouteTarget): void => {
  console.log('[probe] afterEach', to.fullPath);
});
```

- [ ] **步骤 2：真机构建**

运行：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android \
  --project /Users/chenqi/Desktop/unibestX --deviceId <序列号>
```

> ⚠️ **必须先关掉 vapor，否则这轮是假绿**：项目 `manifest.json` 的 `uni-app-x` 默认是 `{ "vapor": true, "vapor-render-target": "bytecode" }`，真机运行走**蒸汽模式 + 字节码**，`编译为android class` 恒为 0、UTS 只经 `uts2js`，**根本不进 Kotlin**。
>
> 跑之前把该块临时改成 `"uni-app-x": { "styleIsolationVersion": "2" }`（删掉 `vapor` / `vapor-render-target`），跑完**立即还原**。详见上方「UTS→Kotlin 验证通道」一节。

预期：日志中 **`编译为android class` 出现 ≥ 1 次**（任务 0 实测 VDOM 模式为 89 次），`error:` **0 命中**，最终 `项目 unibestX 编译成功。`

**两种模式都要跑、都要过**：

1. **VDOM/Kotlin**（去掉 `vapor` 键）—— 唯一能暴露 Kotlin 禁区的通道，判据如上。
2. **蒸汽/字节码**（`manifest.json` 还原后）—— 项目默认运行方式，预期 `编译成功` 且真机无红字报错。

- [ ] **步骤 3：确认 Kotlin 产物里真的有插件代码**

运行：`grep -c "uni-router-guard\|installInterceptors" unpackage/cache/.app-android/src/index.kt`

> 路径以实际产物为准（`unpackage/cache/.app-android/` 下的 `.kt` 文件）。预期：**≥ 1**。
> 若为 0 说明代码根本没进 Kotlin 编译（例如被摇树掉），必须回头检查 `main.uts` 的临时接线是否生效。

- [ ] **步骤 4：确认没有 `__1` 改名**

运行：`grep -rn "installInterceptors__1\|createRouter__1" unpackage/cache/.app-android/src/ | head`
预期：**无输出**（有输出即命中红线 1.1.12 的多层 `export *` 改名）。

---

## 任务 10：手工回归矩阵 + 清理临时文件

**文件：**
- 修改：`src/sub/routerGuardProbe/routerGuardProbe.uvue`（加触发按钮）
- 修改：`main.uts`（把临时守卫换成下面的分流守卫）
- 删除：`src/sub/routerGuardProbe/routerGuardProbe.uvue`
- 还原：`main.uts`

- [ ] **步骤 1：换成按路径分流的临时守卫**

把 `main.uts` 里任务 9 的临时守卫改成：

```uts
// TODO(临时): 真机回归用，本任务结束后整段删除
const probeRouter = createRouter({ debug: true });
probeRouter.beforeEach((to: RouteTarget, from: RouteTarget, next: (...args: Array<any>) => void): void => {
  console.log('[probe] beforeEach api=' + to.api + ' fullPath=' + to.fullPath + ' from=' + from.path
    + ' id=' + (to.query.get('id') ?? '(无)'));
  if (to.path.endsWith('/routerGuardProbe/blocked')) {
    console.log('[probe] → next(false)');
    next(false);
    return;
  }
  if (to.path.endsWith('/routerGuardProbe/redirect')) {
    console.log('[probe] → next(/src/sub/test/test)');
    next('/src/sub/test/test');
    return;
  }
  if (to.path.endsWith('/routerGuardProbe/loop-a')) {
    next('/src/sub/routerGuardProbe/loop-b');
    return;
  }
  if (to.path.endsWith('/routerGuardProbe/loop-b')) {
    next('/src/sub/routerGuardProbe/loop-a');
    return;
  }
  console.log('[probe] → next()');
  next();
});
probeRouter.afterEach((to: RouteTarget, from: RouteTarget): void => {
  console.log('[probe] afterEach ' + to.fullPath);
});
```

- [ ] **步骤 2：给探针页加触发按钮**

在探针页 `<template>` 里加按钮，并加对应方法：

```html
<button @click="goNormal">1 普通跳转带参</button>
<button @click="goBlocked">2 next(false)</button>
<button @click="goRedirect">3 next(改跳)</button>
<button @click="goRelative">4 相对路径</button>
<button @click="goObject">5 push 对象形态</button>
<button @click="goLoop">6 无限改跳</button>
<button @click="goBack">7 返回</button>
```

```uts
function goNormal(): void {
  uni.navigateTo({ url: '/src/sub/test/test?id=1' });
}
function goBlocked(): void {
  uni.navigateTo({ url: '/src/sub/routerGuardProbe/routerGuardProbe/blocked' });
}
function goRedirect(): void {
  uni.navigateTo({ url: '/src/sub/routerGuardProbe/routerGuardProbe/redirect' });
}
function goRelative(): void {
  uni.navigateTo({ url: 'routerGuardProbe?from=relative' });
}
function goObject(): void {
  probeRouter.push({ path: '/src/sub/test/test', query: { id: 1, tags: ['a', 'b'] } });
}
function goLoop(): void {
  probeRouter.push('/src/sub/routerGuardProbe/loop-a');
}
function goBack(): void {
  probeRouter.back();
}
```

> `probeRouter` 需要在这个页面里可见：把 `main.uts` 里的临时 `probeRouter` 改成 `src/sub/routerGuardProbe/probe.ts` 导出的单例，页面 `import` 它。这是**临时接线**，任务结束随临时文件一起删除。

- [ ] **步骤 3：逐条核对（真机 + 控制台日志）**

| # | 操作 | 预期日志 / 现象 |
| --- | --- | --- |
| 1 | 点「1 普通跳转带参」 | `beforeEach api=navigateTo fullPath=/src/sub/test/test?id=1`、`id=1`、`→ next()`、`afterEach /src/sub/test/test?id=1`；页面真的跳过去 |
| 2 | 点「2 next(false)」 | 出现 `→ next(false)`，**不出现 afterEach**，页面**不跳转** |
| 3 | 点「3 next(改跳)」 | 出现 `→ next(/src/sub/test/test)`；随后**新的一轮** `beforeEach fullPath=/src/sub/test/test`（改跳会重新触发拦截器）→ 最终停在 test 页 |
| 4 | 点「4 相对路径」 | `fullPath=/src/sub/routerGuardProbe/routerGuardProbe?from=relative`（相对路径按当前页目录解析成功） |
| 5 | 点「5 push 对象形态」 | `fullPath=/src/sub/test/test?id=1&tags=a%2Cb`（数组用逗号连接后整体编码） |
| 6 | 点「6 无限改跳」 | 反复几轮 loop-a / loop-b 后出现 `重定向链深度超过 5，已放弃本次改跳`，**不崩溃、不死循环** |
| 7 | 点「7 返回」 | `beforeEach api=navigateBack`，`from` 是当前页，随后正常返回 |
| 8 | 临时把分流守卫里的两个 `next()` 删掉一个，再点「1」 | 出现 `守卫未调用 next，已按中止处理` 警告，且**页面不跳转** |

- [ ] **步骤 4：清理临时物**

运行：

```bash
rm -rf src/sub/routerGuardProbe
git checkout -- main.uts
```

预期：`git status --short` 中不再出现 `main.uts` 与 `src/sub/routerGuardProbe/`。

- [ ] **步骤 5：确认清理后仍能编译**

运行：`pnpm build:h5`
预期：`项目 unibestX 编译成功。`（插件本体不被任何页面引用，构建不受影响。）

- [ ] **步骤 6：Commit**

```bash
git add -A
git commit -m "test(uni-router-guard): 完成真机回归矩阵并移除临时验证页"
```

---

## 任务 11：readme 与 changelog

**文件：**
- 创建：`uni_modules/uni-router-guard/readme.md`
- 创建：`uni_modules/uni-router-guard/changelog.md`

- [ ] **步骤 1：写 readme（必须包含以下全部小节与代码）**

````markdown
# uni-router-guard

uni-app X 的导航守卫运行时。零业务依赖：只依赖 `uni` 全局，不引 Pinia、不读项目配置。

拦截 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `navigateBack`，用 vue-router 3 的写法做裁决。

## 安装

把 `uni-router-guard` 放进 `uni_modules/`，在 `main.uts` 里创建一次：

```uts
import { createRouter } from '@/uni_modules/uni-router-guard';
import type { RouteTarget } from '@/uni_modules/uni-router-guard';

const router = createRouter({ debug: false });

router.beforeEach((to: RouteTarget, from: RouteTarget, next: (...args: Array<any>) => void): void => {
  console.log('前往', to.fullPath);
  next();
});

export function createApp() {
  // ...你自己的后续逻辑
}
```

## next 的四种形态

| 写法 | 结果 |
| --- | --- |
| `next()` | 放行，链条继续 |
| `next(null)` / `next(true)` | 放行 |
| `next('/login?a=1')` | 中止本次导航，改跳该地址 |
| `next(false)` | 中止本次导航，且不跳转 |
| 其他值 / 忘记调用 | 警告 + 中止（**fail-safe**：不静默放行） |

## 跳转门面

```uts
router.push('/src/pages/me/me?id=1');
router.push({ path: '/src/pages/me/me', query: { id: 1, tags: ['a', 'b'] } });
router.replace('/src/pages/login/login');
router.relaunch('/src/pages/index/index');
router.switchTab('/src/pages/me/me');
router.back();
router.back(2);
```

## 与 src/router 二选一

项目自带的 `src/router/`（登录白/黑名单策略）与本插件**同时安装会各自跑一条守卫链**，导致重复重定向。请只保留一个。

## 与 vue-router 的差异（已确认的三条）

1. **没有路由表**：没有 `routes`、命名路由、动态段、`<router-view>`，`to.params` 恒为空。
2. **`to.query` 是 `Map`**，读法是 `to.query.get('id')` 而不是 `to.query.id`（UTS 无法动态构造 `UTSJSONObject`）。
3. **`afterEach` 在放行时同步触发**，不是「导航确认成功后」。原因：uni 侧只有 interceptor 的 `success` 回调能代表成功，而它的跨平台行为没有官方说明。

## 平台支持

Android 真机已验证。**HarmonyOS 与小程序未验证**（`package.json` 的 `uni_modules.platforms` 里如实标为 `x`）。

## 已知边界

- 守卫必须是**同步**的（`uni.addInterceptor` 的 `invoke` 同步返回 boolean）。需要异步校验时：先 `next(false)` 拦下，异步完成后再自己跳。
- `push({ path, query })` 的对象形态**必须直接传字面量**。先存进带类型标注的变量再传，会在真机抛 `ClassCastException`。
- `router.uninstall()` 按 API 名整条移除，会一并移除你自己为同一 API 装的拦截器。
- 改跳目标若是 TabBar 页面，必须配 `resolveRedirectApi`：

```uts
const router = createRouter({
  resolveRedirectApi: (url: string): string => {
    return isTabbarPage(url) ? 'switchTab' : 'navigateTo';
  }
});
```

- `navigateBack` 被拦截时，`to` 取「上一页」；多级返回（`delta > 1`）一律按上一页处理。
````

- [ ] **步骤 2：写 changelog**

```markdown
## 1.0.0（2026-09-15）

- 首个版本：`createRouter()`、`beforeEach` / `afterEach`、`next()` / `next('/x')` / `next(false)` 裁决
- 拦截 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `navigateBack`
- 跳转门面：`push` / `replace` / `relaunch` / `switchTab` / `back` / `uninstall`
- 重定向链深度保护（默认上限 5）与可选 `resolveRedirectApi`
- 自带 node harness（`scripts/router-guard-test/`）
```

- [ ] **步骤 3：Commit**

```bash
git add uni_modules/uni-router-guard/readme.md uni_modules/uni-router-guard/changelog.md
git commit -m "docs(uni-router-guard): 补充 readme 与 changelog"
```

---

## 任务 12：按项目铁律回写 SKILL.md（**条件触发**）

**触发条件（满足任一即执行）：** 本次实现过程中发现任何 UTS 语法 / 组件属性 / 生命周期 / 样式在 VDOM 与 Vapor 下不通用，或踩到 SKILL 未记录的新坑（例如任务 0 探针暴露的「函数类型字段 + 剩余参数」限制）。

**文件：**
- 修改：`.agents/skills/unibestX-skill/SKILL.md`
- 修改：`.claude/skills/unibestX-skill/SKILL.md`（跨 agent 工具链同步，规格 3.5 要求）

- [ ] **步骤 1：判断是否需要写**

若任务 0 的探针全部一次通过、且实现过程没有再踩到新坑 → **本任务无内容，直接勾掉并说明「无新增」**。

> ✅ **任务 0 已判定：本任务必做，且内容已确定。** 探针在 VDOM/Kotlin 与 Vapor/字节码两条通道下表现不同，命中触发条件。

**待回写的 4 条（任务 0 真机实测，证据见「Kotlin 禁区」表）：**

1. **语法层（1.1 追加）**：`obj.toMap().forEach((value: any, key: string) => {})` —— 显式给 `any` 值参数标注类型，在 Kotlin 报 error17（实际 `Function2<Any, String, Unit>` / 预期 `Function1<Map.Entry<String, Any?>, Unit>`），而**不写标注**或改用 `UTSJSONObject.keys(obj)` + `getAny(key)` 均可过。同族：`map.keys()` 在 Kotlin 里是 `MutableSet` 属性，不能按函数调用。
2. **语法层（1.1 追加）**：Kotlin 下**不能把外层局部函数当值传递**（`setTimeout(localFn, 1200)` 报 error18 `找不到名称`），必须包一层 lambda；且在对象字面量的回调里引用外层 `<script setup>` 局部函数同样报 error18。与既有 1.1.4 的「局部声明在自身初始化表达式内不可见」同族。
3. **运行时/工程层（1.3 追加，或并入 1.3.15）**：`manifest.json` 的 `uni-app-x.vapor = true` + `vapor-render-target = "bytecode"` 下，真机运行走蒸汽/字节码，**`编译为android class` 恒为 0、UTS 只经 uts2js，完全跳过 Kotlin**。要验证 Kotlin 必须先删 `vapor` 键（VDOM 模式）。这条直接补强 1.3.15 的「假绿」清单 —— 它给出了第三个假绿来源，而且这个来自项目自身配置，比命令选择更隐蔽。
4. **3.3 快速排查表 / 3.4 红线清单**：同步上述 3 条。

- [ ] **步骤 2：按四维分类归位**

- 语法/类型层 → 追加到 **1.1 语法核心铁律**（新编号 1.1.15 起）
- 样式层 → **1.2**
- 运行时层 → **1.3**（新编号 1.3.20 起）
- 同步更新 **3.3 快速排查表** 与 **3.4 红线清单**

- [ ] **步骤 3：两个文件同步**

`.agents/skills/unibestX-skill/SKILL.md` 与 `.claude/skills/unibestX-skill/SKILL.md` 内容必须一致（规格 3.5 第 3 条）。

- [ ] **步骤 4：Commit**

```bash
git add .agents/skills/unibestX-skill/SKILL.md .claude/skills/unibestX-skill/SKILL.md
git commit -m "docs(skill): 回写 uni-router-guard 实现中暴露的 UTS 约束"
```

---

## 计划自检

**1. 规格覆盖度**

| 规格章节 | 对应任务 |
| --- | --- |
| 3.1 `createRouter` 与 `RouterOptions` | 任务 1（类型）、任务 6（configure）、任务 7（工厂） |
| 3.2 `RouteTarget` / `Next` / 守卫签名 | 任务 1 |
| 3.3 next 裁决表（6 种形态） | 任务 4（用例）、任务 5（实现） |
| 3.4 跳转门面 + 3.4.1 对象形态 + 3.4.2 query 序列化 | 任务 3（`normalizeLocation`/`serializeQuery`）、任务 7（门面）、任务 4 第 2 步用例 |
| 3.5 卸载 | 任务 6（`uninstallInterceptors`）、任务 7（`router.uninstall`） |
| 5.1 URL 解析四条规则 | 任务 3 |
| 5.2 按 API 分别强转 + 自定义 API 走 Json 分支 | 任务 6（`extractUrl`） |
| 5.3 裁决派发 + 深度保护 + `resolveRedirectApi` | 任务 6（`dispatchRedirect`）、任务 10 第 3 步第 6 条 |
| 5.4 afterEach 放行时触发 | 任务 6（`handleInvoke`）、任务 10 第 3 步第 1/2 条 |
| 6 红线遵守 | 任务 1（type/可选字段）、任务 5（显式类型）、任务 7（单层 export）、任务 9 第 4 步（`__1` 检查） |
| 7 风险与约束 | 全部落进任务 10 的矩阵与任务 11 的 readme |
| 8.1 node harness | 任务 2–5 |
| 8.2 真机构建 | 任务 9 |
| 8.3 手工回归矩阵 | 任务 10 |
| 9 交付清单 | 任务 1、2、3、5、6、7、11 |

**2. 占位符扫描**：本计划不含「待定 / TODO / 类似任务 N / 添加适当的错误处理」这类写法。任务 10 的临时接线、任务 12 的条件触发都已写明具体判据。

**3. 类型一致性**：`RouteTarget`（url/path/fullPath/query/params/api）、`Next`、`NavigationGuard`、`AfterNavigationHook`、`GuardOutcome`（pass/redirect/missingNext）、`RouterOptions`（apis/redirectApi/resolveRedirectApi/maxRedirectDepth/debug）、`Router`（beforeEach/afterEach/push/replace/relaunch/switchTab/back/uninstall）在任务 1、4、5、6、7、10 中逐字一致；纯函数名 `normalizePath` / `resolveRelativePath` / `parseQuery` / `serializeQuery` / `stringifyQueryValue` / `normalizeLocation` / `parseUrl` 在任务 2 的用例与任务 3 的实现中一致；`registerBeforeGuard` / `registerAfterHook` / `runBeforeGuards` / `runAfterHooks` / `resetGuards` 在任务 4 与任务 5 中一致；`configureInterceptor` / `installInterceptors` / `uninstallInterceptors` 在任务 6 与任务 7 中一致。

**4. 一处刻意的不对称**：`guard.uts` 与 `interceptor.uts` 都不进 `index.uts` 门面（内部机制），但 `url.uts` 进了（纯函数，使用者可能直接拿 `parseUrl` 做自己的判断）。这是有意为之，不是遗漏。

---

## 执行交接

计划已完成并保存到 `docs/superpowers/plans/2026-09-15-uni-router-guard-plugin.md`。两种执行方式：

**1. 子代理驱动（推荐）** —— 每个任务调度一个新的子代理，任务间进行审查，快速迭代

**2. 内联执行** —— 在当前会话中使用 executing-plans 执行任务，批量执行并设有检查点
