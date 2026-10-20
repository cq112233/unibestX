# 1 UTS 强类型与语法手册（类型契约 · 完整示例 · 场景写法 · 报错索引）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用，收录 UTS 语法与类型系统的全部铁律、正反例与实测结论。
>
> **何时读本文件**：定义对象结构与类型标注、写 `export` / `class` / 闭包 / 定时器回调 / 集合遍历，或遇到 `UTS110111163`、`UTS110111119`、`UTS110111120`、`error1`、`error17`、`error18`、`error25`、`NoSuchMethodError`、`ClassCastException`、VSCode 里的 `TS2322` / `TS2352` 等编译、运行期与编辑器诊断报错时。
>
> **与其它分册的分工**：本分册只讲**语言层**（类型怎么定义、值怎么比较、函数怎么写、模块怎么导出）。样式写法看分册 2，跨端运行期差异看分册 3，页面 / 接口 / 工具库 / 路由的工程规范分别看分册 4 / 5 / 6 / 7 / 8。
>
> **30 秒速记**：`type` 不用 `interface`；空值只用 `null`；条件写显式布尔；基础类型比较用 `==`；`number` / `Array` 显式标注；函数签名全标注；可空用 `?.` 与 `??`；异步用双参 `.then`，不写 `.catch`；`as` 后面不写泛型别名。
>
> 📌 **1.1–1.29 是逐条铁律**（每条含错误码、底层原理、强制规范、正反例）；**1.30 起是手册部分**：类型怎么声明与导入（1.30）→ 类型系统能表达什么（1.31）→ 完整可编译示例（1.32）→ 多种场景写法（1.33）→ 坑点清单（1.34）→ 报错索引（1.35）→ 速查表（1.36）→ 自检红线（1.37）。**上手先读 1.32，报错先查 1.35，排查先翻 1.34。**

## 1.1 一律禁止使用 `interface`，全面统一使用 `type`

- **错误码**：`UTS110111163: Object literals only support object types defined by construction type, and do not support interfaces`
- **底层原理**：UTS 将 `interface` 严格映射为底层面向对象纯接口，禁止将对象字面量（如 `{ name: 'foo' }`）、Mock 数据或 API 返回值赋值给 `interface`。
- **强制规范**：定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`，全部统一使用 `type`（类型别名）**。

```ts
// ❌ 错误：触发 UTS110111163 编译崩溃
interface UserInfo {
  name: string
  age: number
}
const user: UserInfo = { name: "Tom", age: 18 }

// ✅ 正确：统一使用 type
type UserInfo = {
  name: string
  age: number
}
const user: UserInfo = { name: "Tom", age: 18 }
```

## 1.2 不支持 `undefined`，必须初始化为 `null`

- **错误码**：`UTS110111119`
- **底层原理**：UTS 编译到 Kotlin / Swift / ArkTS 这类原生强类型语言，而原生类型系统里根本没有 `undefined` 这个概念，UTS 因此在语言层面把它整个移除了。
- **强制规范**：所有变量必须被初始化；表示空值必须使用 `null`，且联合类型目前**仅支持与 `null` 的联合**（`Type | null`）。

```ts
// ❌ 错误：`undefined` 与可选参数 `?` 在 UTS 里都不存在，编译报 UTS110111119
let value: string | undefined
function test(param?: string): void {}

// ✅ 正确：用 `null` 初始化，可选参数写成显式的 `Type | null`
let value: string | null = null
function test(param: string | null): void {}
```

## 1.3 条件语句必须为显式布尔表达式

- **错误码**：`UTS110111120`
- **底层原理**：UTS 取消了 JS 的 truthy / falsy 隐式转换 —— 原生强类型语言里「一个值算不算真」没有统一定义（Kotlin 里 `String` 甚至不能直接放在条件位置），所以条件处只接受真正的 `boolean`。
- **强制规范**：严禁使用 JS 中的 truthy / falsy 隐式转换（如 `if (str)` 或 `arr || []`），必须显式与 `null`、空字符串或数值进行布尔比较。

```ts
// ❌ 错误：条件位置给了非布尔值，编译报 UTS110111120
if (obj) {}
if (str) {}
const list = arr || []

// ✅ 正确：显式写出要比较的对象与边界
if (obj != null) {}
if (str != null && str != "") {}
const list = arr != null ? arr : []
```

## 1.4 等值比较使用 `==` / `!=`，禁止对基础类型使用 `===` / `!==`

- **错误码**：没有编译错误，但 Kotlin 阶段会产 `warning: Identity equality for arguments of types 'Number' and 'Int' can be unstable because of implicit boxing.` —— **要当作缺陷看，不要当噪音**。
- **底层原理**：在 Kotlin (Android) 原生端，`===` 会编译为引用/身份比较（Identity Equality）。对于字符串，比较的是内存地址而非文本内容；对于数值/布尔值，隐式装箱（Implicit Boxing）会导致不同包装对象的引用比较返回 `false`。
- **强制规范**：对 `string`、`number`、`boolean` 一律使用值比较运算符 `==` 和 `!=`。
- **构建期警告实证（本项目实测）**：`===` 在 Kotlin 阶段会直接吐警告，**连模板表达式也算**：

  ```text
  warning: Identity equality for arguments of types 'Number' and 'Int' can be unstable because of implicit boxing.
  at src/sub/nested-scroll/nested-scroll.uvue:21:16
  21 |  :empty="articleList.length === 0"
  ```

  这行的实际后果是「空状态可能永远不显示」（`length` 为 `Int`、字面量 `0` 被装箱成 `Number`，身份比较不稳定）。**构建日志里的这条 warning 要当作缺陷看，不要当噪音**；`grep -n "Identity equality" <build.log>` 可一次性扫出全项目残留。

```ts
// ❌ 错误：在 Android 原生端即使内容相同也可能判断为 false
if (statusCode === 200) {}
if (routePath === '/home') {}

// ✅ 正确：安全的值比较
if (statusCode == 200) {}
if (routePath == '/home') {}
```

## 1.5 数字与数组必须显式声明类型

- **错误码**：无独立报错码，属**类型推导歧义** —— 推导结果随目标平台漂移（Kotlin 端 `Int` 与 `Double` 是两种类型），往往要到后续赋值或比较时才以类型不匹配的形式炸出来，排查成本更高。
- **底层原理**：UTS 把 `number` 编译为各平台的原生数值类型，字面量 `0` 在 Kotlin 端推成 `Int`、换个上下文可能推成 `Double`；裸写 `[]` 更是推不出元素类型。`string` 与 `boolean` 没有这种平台分叉，才允许依赖字面量推导。
- **强制规范**：除 `string` 和 `boolean` 可以依据字面量可靠推导外，**`number` 和 `Array` 必须显式注明类型**。

```ts
// ❌ 错误：推导出的类型随平台漂移，裸数组则根本推不出元素类型
let count = 0
let list = []

// ✅ 正确：写明类型（`Array<string>` 与 `string[]` 等价）
let count: number = 0
let list: Array<string> = []
// 或
let list: string[] = []
```

## 1.6 函数参数、返回值类型与安全调用运算符 `?.`

- **错误码**：无独立报错码，缺标注时按「推导出的类型与调用方不符」报类型不匹配；可空类型漏写 `?.` 则在 Kotlin 端以空指针形式炸出来。
- **底层原理**：函数签名要随代码一起编译进原生产物，参数与返回值类型不能靠运行时推断；对可空类型直接取属性，在 Kotlin 里等价于对 `null` 取值，必然崩。
- **强制规范**：所有函数参数及返回值必须显式声明类型；无返回值函数必须明确声明为 `:void`。对可空类型调用属性或方法时必须使用安全调用运算符 `?.`。

```ts
// ❌ 错误：参数与返回值都没标注，可空类型也没走安全调用
function calculate(score) {
  return score * 2
}

// ✅ 正确：签名全标注；可空类型用 `?.` 配 `??` 兜底
function calculate(score: number): number {
  return score * 2
}
function getLength(str: string | null): number {
  return str?.length ?? 0
}
```

## 1.7 类型定义必须在文件顶层作用域

- **错误码**：`UTS100006`（type）、`UTS110111166`（interface）
- **底层原理**：`type` 要编译成目标语言的原生类型声明，而 Kotlin / Swift / ArkTS 都**不允许在函数体内声明类型**，所以类型只能落在文件顶层作用域。
- **强制规范**：`type` 严禁声明在函数或代码块内部，必须提取到文件最顶层作用域。

```ts
// ❌ 错误：类型声明落在函数体内部，编译报 UTS100006
function buildUser(): void {
  type UserInfo = { name: string }
  const user: UserInfo = { name: "Tom" }
}

// ✅ 正确：提到文件最顶层
type UserInfo = { name: string }
function buildUser(): void {
  const user: UserInfo = { name: "Tom" }
}
```

## 1.8 作用域插槽解构变量推断为 `Any?`

- **错误码**：`error17: 参数类型不匹配：实际类型为 'Any?'，预期类型为 'UTSJSONObject'`
- **底层原理**：作用域插槽的数据在原生端是运行期才知道形状的 `Any?`，编译器无法从模板上下文推出具体类型，传给强类型函数时自然对不上签名。
- **强制规范**：在 `.uvue` 模板中，作用域插槽（如 `#default="{ item, index }"`）解构出的属性会被推导为 `Any?`。传参给强类型函数时必须在模板调用点显式使用 `as` 进行类型断言收窄。

```html
<!-- ❌ 错误：item 为 Any?，导致编译失败 -->
<text>{{ formatItem(item) }}</text>
<text>{{ index + 1 }}</text>

<!-- ✅ 正确：在模板调用点显式断言 -->
<text>{{ formatItem(item as UTSJSONObject) }}</text>
<text>{{ (index as number) + 1 }}</text>
```

## 1.9 Class 语法使用约束

- **错误码**：`UTS110111128`（`#prop`）、`UTS110111129`（下标访问）、`UTS110111130`（`static {}`）、`UTS110111131`（继承）、`UTS110111151`（传递 Class）
- **底层原理**：UTS 的 `class` 直接编译为 Kotlin / Swift / ArkTS 的原生类，必须服从这些原生语言共同的面向对象规则 —— 只有原生可见性修饰符、没有 JS 的 `#` 私有字段、没有「把实例当字典存取」的下标语义、静态初始化必须走方法。
- **强制规范**：
  1. 私有属性禁止 `#prop`，统一写 `private prop`；
  2. Class 实例禁止 `obj[key]` 下标访问，必须用点操作符 `obj.prop`；
  3. 禁止静态块 `static {}`，改用私有静态方法 `private static initData()` 做初始化；
  4. 子类继承必须显式声明 `constructor()` 并调用 `super()`；
  5. Class 仅作为类型使用，禁止赋值给变量或作为普通对象传递，需要实例时用工厂函数。

```ts
// ❌ 错误：五条约束的典型违规写法
class UserInfo {
  #name: string = ""            // UTS110111128
  static { initGlobal() }       // UTS110111130
  pick(key: string): string {
    return this[key]            // UTS110111129
  }
}
class Admin extends UserInfo {} // UTS110111131：缺 constructor() + super()
const maker = UserInfo          // UTS110111151：Class 当值传递

// ✅ 正确
class UserInfo {
  private name: string = ""
  private static initData(): void {}
  constructor() {
    UserInfo.initData()
  }
  pick(): string {
    return this.name
  }
}
class Admin extends UserInfo {
  constructor() {
    super()
  }
}
function createUser(): UserInfo {
  return new UserInfo()
}
```

- **`super(...)` 构造实参中不能引用 `this`**：Kotlin 端父类构造先于子类字段初始化执行，`super(...)` 的实参里引用 `this` 会编译失败。需要把「子类自己的状态」交给父类构造时（典型如 `class Subject extends Observable`），**改用组合而非继承**：让 `Subject` 持有一个私有 `_observers` 数组，并额外提供 `asObservable(): Observable<T>` 返回一个由 `this` 闭包驱动的 `Observable` 供下游 `.pipe()` 使用。本项目实现见 `uni_modules/rxjs-bestX/index.uts` 的 `Subject`。

## 1.10 严禁在对象字面量（UTSJSONObject）中放入顶层函数作为聚合对象导出

- **错误码**：无 UTS 错误码，Android (Kotlin) 编译失败：`error: Function invocation 'xxx()' expected. at src/utils/xxx.uts`
- **底层原理**：UTS 在 Android 端将对象字面量 `{ getApiBaseUrl }` 编译为 Kotlin 的 `_uO("getApiBaseUrl" to getApiBaseUrl)`。在 Kotlin 语法中，顶层函数名 `getApiBaseUrl` 不能作为裸值赋值给键值对，编译器会强行要求函数调用 `getApiBaseUrl()`；且 `UTSJSONObject` 在强类型原生端无法动态调用方法。
- **强制规范**：
  1. 所有工具库必须使用标准 ES 模块具名函数导出：`export function getApiBaseUrl(): string { ... }`；
  2. 业务方统一按需具名解构导入：`import { getApiBaseUrl } from '@/src/config/env/env.uts'`；
  3. **一律严禁**写出如 `export const env = { getApiBaseUrl, ... }` 或 `export default { ... }` 这种包裹函数的对象字面量导出。

```uts
// ❌ 错误：对象字面量里裹顶层函数 → Kotlin 报 Function invocation 'getApiBaseUrl()' expected
export function getApiBaseUrl(): string { return "https://api.example.com"; }
export const env = { getApiBaseUrl };

// ✅ 正确：只用具名函数导出，业务方按需解构导入
export function getApiBaseUrl(): string { return "https://api.example.com"; }
// 业务方：import { getApiBaseUrl } from '@/src/config/env/env.uts';
```

## 1.11 严禁顶层函数与同名属性采用 Getter 命名冲突（Kotlin 平台声明冲突导致 NoSuchMethodError）

- **错误码**：Android 运行时崩溃：`error: java.lang.NoSuchMethodError: No static method getWindowHeight()Lio/dcloud/uniapp/vue/ComputedRef; in class Luni/.../IndexKt;`
- **底层原理**：在 Kotlin 原生编译中，包顶层属性 `val windowHeight = computed(...)` 会被 Kotlin 编译器自动生成静态 getter：`public static final ComputedRef getWindowHeight()`。若同文件在顶层还显式导出了同名顶层函数 `export function getWindowHeight(): number`，在 JVM 字节码层面上会产生方法签名冲突（Platform Declaration Clash），函数的返回类型覆盖挤占了响应式属性的 getter。当 Vue 模板在执行 `{{ windowHeight }}` 时，因找不到匹配的 getter 而在运行时直接崩溃。
- **强制规范**：
  1. 顶层若已导出属性 `export const windowHeight = computed(...)`，**严禁在顶层额外导出 `export function getWindowHeight()`**；
  2. 若需面向对象风格的调用，封装在独立 class 的实例方法中（如 `systemUtils.getWindowHeight()`），因为类实例方法编译为类成员虚拟方法，绝不会干扰包顶层的静态方法签名。

```uts
// ❌ 错误：顶层 computed 隐式生成静态 getter getWindowHeight()，与同名顶层函数撞签名
export const windowHeight = computed((): number => uni.getWindowInfo().windowHeight);
export function getWindowHeight(): number { return windowHeight.value; }

// ✅ 正确：顶层不再导出同名 get* 函数，需要面向对象调用就收敛到类实例方法
export const windowHeight = computed((): number => uni.getWindowInfo().windowHeight);
class SystemUtils {
  getWindowHeight(): number { return windowHeight.value; }
}
```

- **⚠️ 极易漏判**：冲突的判定只取决于**名字形状**（`foo` ↔ `getFoo`），与两个声明的**业务语义是否相关无关**。只要顶层有 `export const tabBarHeight = computed(...)`，那么同文件的顶层 `export function getTabBarHeight(includeSafeArea: boolean)` 就必然冲突 —— 哪怕它带参数、语义上看着是"另一个函数"。**同理，顶层 `export function getScrollHeight()` 与顶层 `export const scrollHeight = computed(...)` 也会撞**。
- **⚠️ 为什么 H5 / 本地开发期发现不了**：H5 编译目标是 JS，不产生 Kotlin 静态 getter；`launch app-android --compile true` 也**不到 Kotlin 阶段**。所以本项目 `pnpm build:h5` 全绿、真机才炸，**不能用 H5 构建通过来证明这条规则没被违反**。
- **本项目真实案例（2026-09-15，`src/utils/systemInfo/index.uts` 重构）**：该文件同时存在顶层 `export const tabBarHeight = computed(...)` 与顶层 `export function getTabBarHeight(includeSafeArea)`，正好命中此坑。处置方式：
  - 顶层 `getTabBarHeight(includeSafeArea)` → 改名为**私有** `calcTabBarHeight(includeSafeArea)`（去掉 `export`，且主动避开 `get` 前缀）；
  - 顶层 `getNavBarHeight()` → **直接删除**（它只是 `navBarHeight.value` 的转发，无独立逻辑）；
  - 两个带参数的对外入口统一收敛到 `SystemUtils` 类的实例方法 `getNavBarHeight()` / `getTabBarHeight(includeSafeArea)`；
  - 同轮把可写 `ref`（`menuRect`）改为「私有 `menuRectRef` + 对外只读 `computed`」，让对外导出面里**没有可写 ref**，顺带消掉一类"外部误写状态"的隐患。
- **自查命令（改完 `.uts` 导出面后跑一次）**：

  ```bash
  # 1) 列出顶层属性/computed —— 每个名字都隐含一个 get<Name>() Kotlin 静态 getter
  grep -nE "^export const [A-Za-z_]" src/utils/xxx/index.uts
  # 2) 顶层若出现 get* 函数，逐个与上一步的名字比对；命中即违规
  grep -nE "^export function get[A-Z]" src/utils/xxx/index.uts
  ```

## 1.12 严禁多层 / 重复 `export *` 星号重导出同一顶层符号（Kotlin 端符号被改名 `xxx__1`）

- **错误码**（一错两态，同一根因）：
  1. **编译期**：`.uts` 文件引用处报 `error18 找不到名称"useTokenStore"`（`参考: compiler-known-issues.html#error18`）；
  2. **运行期**：`.uvue` 页面调用处崩溃 `java.lang.NoSuchMethodError: No static method getUseAppStore()Lkotlin/jvm/functions/Function0; in class Luni/UNIB120614/IndexKt`。
- **底层原理**：UTS 在 Android 端会把**多个 `.uts` 源文件合并**生成同一个 Kotlin 文件（如 `unpackage/cache/.app-android/src/index.kt`，Kotlin 类名 `IndexKt`）。当同一个顶层符号（如 `useAppStore`）被 **两层门面重复 `export *` 转发**（例如 `src/store/index.uts` → `./vdom/app.uts`，同时 `src/store/vdom/index.uts` 也 → `./app`），合并后会产生重名声明，UTS 编译器将后者**自动改名为 `useAppStore__1`**：
  - `.uts` 文件内的调用点会被**同步改写**为 `useTokenStore__1()`，因此 `.uts` 之间可能"看起来正常"；
  - `.uvue` 页面编译为**独立的 Kotlin 文件**（如 `App.ku.kt`），其调用点不会同步改写，仍写 `useAppStore()` → Kotlin 按顶层属性生成 getter 访问 `IndexKt.getUseAppStore()` → 该静态方法不存在 → 编译期 or 运行期崩溃。
- **强制规范**：
  1. 一个顶层符号**只允许在一层门面中 `export *` 转发**；门面链严禁套娃（`index.uts` 再 `export *` 一个同样做 `export *` 的 `index.uts`）；
  2. 本项目 `src/store/index.uts` 是**唯一**门面，`src/store/vdom/index.uts`、`src/store/vapor/index.uts` 只负责创建并默认导出 pinia 实例，**严禁再 `export *` 转发 stores**；
  3. 同理，新增聚合门面（如 `src/tabbar/index.uts`、`src/router/index.uts`）时，被聚合的子模块自身不得再对外做整包重导出，避免形成两层转发。
- **排查方法（人工定位）**：直接检查生成的 Kotlin 产物，若出现 `useXxx__1`、`val useAppStore__1 =` 字样即命中：

  ```bash
  grep -n "val use" unpackage/cache/.app-android/src/index.kt
  ```

- **❌ 错误示例**（两层 `export *` 转发同一 store，导致 `useAppStore__1`）：

```uts
// ❌ src/store/vdom/index.uts —— 子模块内部又转发一次
export default pinia;
export * from './app';
export * from './token';
export * from './user';

// ❌ src/store/index.uts —— 门面再次转发，形成两层重导出
export * from './vdom/app.uts';
export * from './vdom/token.uts';
export * from './vdom/user.uts';
```

```uts
// ✅ src/store/vdom/index.uts —— 只创建并默认导出 pinia 实例
export default pinia;
```

```uts
// ✅ src/store/index.uts —— 唯一门面，单层转发到具体实现文件
// #ifdef !VUE3-VAPOR
import pinia from './vdom/index.uts';
// #endif
export default pinia;

// #ifdef !VUE3-VAPOR
export * from './vdom/app.uts';
export * from './vdom/token.uts';
export * from './vdom/user.uts';
// #endif
```

## 1.13 局部声明在**其自身的初始化表达式内不可见** —— `const timerId = setInterval(() => clearInterval(timerId))` 必炸

- **错误码**（历史案例，原 `src/http/stream/stream.uts`，该模块已随网络层重构迁到 `uni_modules/request-bestX/stream/stream.uts`；报错文本与规则不变）：

  ```text
  error: 找不到名称"timerId"。参考: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error18
  at src/http/stream/stream.uts:292:22
  292|        clearInterval(timerId);
  ```

  报错点看着毫无道理：`timerId` 就在紧外包着它的那个 `setInterval` 的同一条语句上。

- **底层原理**：Kotlin 里局部声明**在其自身的初始化表达式内不可见** —— 回调体虽然在 `setInterval` 的实参位置，但它的可见域不包含「正在被初始化的那个变量」。JS 之所以侥幸能跑，纯粹因为回调是**延后求值**的。
- **强制规范**：拆成「先声明、后赋值」，**注意不能用 `const`**（`const` 必须自带初始化器）：

  ```uts
  // ❌ 错误：Kotlin 报 error18 找不到名称
  const timerId = setInterval((): void => {
    clearInterval(timerId);
  }, intervalMs);

  // ✅ 正确：先声明后赋值
  let timerId: number = 0;
  timerId = setInterval((): void => {
    clearInterval(timerId);
  }, intervalMs);
  ```

- **同族情形（一律按此处理）**：任何「回调体引用承载它的那个变量」都命中此坑 —— 定时器句柄、事件监听句柄、递归闭包、`subscribe` 里回读自己的 `subscription`。
- **为什么容易被当成误报**：这类代码在 **H5 上完全正常**（浏览器 JS 引擎延迟执行 + 变量提升），只有走到 Kotlin 阶段才炸；而 `launch app-android --compile true` 根本不到 Kotlin 阶段（见 3.15），于是"本地一直是好的"。

---

## 1.14 遍历「值类型为 `any` 的 Map」时，**给回调参数显式标注 `any`** 会炸 —— 去掉标注或改用 `UTSJSONObject.keys()`；且 `map.keys()` 在 Kotlin 里是属性不是函数

- **错误码**（本项目实测，unix-router-guard 任务 0 探针，真机 VDOM/Kotlin 通道）：

  ```text
  error: 参数类型不匹配：实际类型为 'Function2<Any, String, Unit>'，预期类型为 'Function1<Map.Entry<String, Any?>, Unit>'。
  参考: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error17
  at src/sub/routerGuardProbe/routerGuardProbe.uvue:60:27
  60 |      query!.toMap().forEach((value: any, key: string): void => {
  ```

  同一次编译里的同族报错：

  ```text
  error: Expression 'keys' of type 'MutableSet<String>' cannot be invoked as a function. Function 'invoke()' is not found.
  at src/sub/routerGuardProbe/routerGuardProbe.uvue:67:15
  67 |    const ks = m.keys();
  ```

- **底层原理**：`UTSJSONObject.toMap()` 的值类型是 `any`（即 Kotlin 的 `Any?`）。Kotlin 侧 `Map.forEach` 的真实签名只有 `(Map.Entry<K, V>) -> Unit` 一个；UTS **显式标注** `(value: any, key: string)` 时会按「双参函数」去匹配，生成 `Function2<Any, String, Unit>` 对不上 `Function1<Map.Entry<...>>`。**不写标注**让编译器自行推导就能对上。而 `keys` 在 UTS 的类型声明里是方法、编译到 Kotlin 却是 `Map.keys` **属性**（`MutableSet<String>`），因此不能带括号调用。

- **强制规范**（两种写法都真机验过，Kotlin 编译 0 error）：

  ```uts
  // ❌ 错误：给 any 值参数显式标注 → error17
  query.toMap().forEach((value: any, key: string): void => { ... });
  // ❌ 错误：map.keys() → Kotlin 报「属性不能当函数调用」
  const ks = map.keys();

  // ✅ 正确（写法 1，推荐）：UTSJSONObject.keys() + getAny()
  const keys = UTSJSONObject.keys(query);   // query: UTSJSONObject
  keys.forEach((key: string): void => {
    const value = query.getAny(key);
    if (value == null) { return; }
    parts.push(`${key}=${encodeURIComponent(`${value}`)}`);
  });

  // ✅ 正确（写法 2）：双参 forEach，但**不写类型标注**
  query.toMap().forEach((value, key) => {
    parts.push(`${key}=${value}`);
  });
  ```

- **对照（重要）**：本条**只在 Kotlin 阶段暴露**。同一份代码在**蒸汽 / 字节码模式**（本项目 `manifest.json` 默认配置，见 3.20）下完全正常。本项目 `uni_modules/lime-i18n/common/composer.uts` 就写着双参 `toMap().forEach((value, key) => ...)` —— 它能跑正是因为**没写类型标注**；一旦「好心」补上 `: any` 就会在 Kotlin 端炸。
- **范围界定**：`Array.forEach` 带标注没问题（`keys.forEach((key: string): void => {})` 实测可用）；`Map<string, string>.forEach((value: string, key: string) => {})` 也实测可用。**只有「值类型为 `any` 的 Map」**命中此坑。

---

## 1.15 Kotlin 下**局部函数不能当值传递** —— `setTimeout(localFn, 100)` 报 `error18`，必须包一层 lambda

- **错误码**（本项目实测，`App.uvue` 真机 VDOM/Kotlin 通道）：

  ```text
  error: 找不到名称"openProbePage"。参考: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error18
  at App.uvue:38:19
  36 |      fail: () => {
  37 |        if (probeTryCount < 8) {
  38 |          setTimeout(openProbePage, 800);
  ```

  两个触发点，同一次编译都报：① 把局部函数名**直接当实参**传给 `setTimeout`；② 在**对象字面量的回调**里引用外层 `<script setup>` 的局部函数（同一个函数在 `uni.navigateTo({ fail: () => { ... } })` 的 `fail` 里也报）。

- **底层原理**：`<script setup lang="uts">` 的顶层代码会被装进 setup 函数，函数声明随之变成 Kotlin 的**局部函数**。Kotlin 的局部函数是语句级声明，**不能作为函数值直接传递**，在嵌套 lambda / 局部类（对象字面量编译产物）里也可能解析不到。
- **强制规范**：统一包一层 lambda 再传：

  ```uts
  // ❌ 错误：局部函数当值传递，Kotlin 报 error18 找不到名称
  setTimeout(openProbePage, 1200);

  // ✅ 正确：包一层 lambda 再传
  setTimeout(() => {
    openProbePage();
  }, 1200);
  ```

- **与 1.13 的关系**：同属「Kotlin 里局部声明的可见域比 JS 窄」这一族 —— 1.13 是「在其自身初始化表达式内不可见」，本条是「不能当值传递 / 嵌套作用域内可能不可见」。3.14 与 A.2 第 16 条的「局部函数必须定义在调用点之前」是同一族的第三种表现。
- **只在 Kotlin 阶段暴露**：字节码 / 蒸汽模式与 H5 都正常。

---

## 1.16 Kotlin 下**剩余参数不能写在对象类型的属性上** —— `back: (...args: Array<number>) => void` 报 `Function type parameters cannot have modifiers.`

- **错误码**（本项目实测，unix-router-guard 任务 9，真机 VDOM/Kotlin 通道）：

  ```text
  [plugin:uni:app-uts] kotlin编译失败
  error: Function type parameters cannot have modifiers.
  at uni_modules/unix-router-guard/lib/types.uts:75:9
  74 |    /** 返回；back() 等价 back(1) */
  75 |    back: (...args: Array<number>) => void;
     |           ^
  ```

- **底层原理**：UTS 只在**顶层 `type` 别名**这一层接受函数类型的参数修饰符；同样的 `...args` 一旦嵌进**对象类型的属性位置**就被拒收。这是实测出来的边界（官方文档未见说明），按下面的「抽成顶层别名」处理即可。
- **关键对照**：同样的 `...args` 写在**顶层 `type` 别名**里是合法的 —— 同一文件的 `export type Next = (...args: Array<any>) => void;` 没报错，只有放进**对象类型的属性**才被拒。
- **强制规范**：抽成顶层别名再引用：

  ```uts
  // ❌ 错误：对象类型属性里直接写剩余参数，编译报 Function type parameters cannot have modifiers.
  export type Router = {
    back: (...args: Array<number>) => void;
  };

  // ✅ 正确：抽成顶层别名（剩余参数合法），属性处只引用别名
  export type BackFn = (...args: Array<number>) => void;
  export type Router = {
    back: BackFn;
  };
  ```

- **只在 Kotlin 阶段暴露**：蒸汽 / 字节码模式与 H5 都放行，`pnpm lint` / node harness 也不报。

---

## 1.17 内置 `decodeURIComponent` 在 UTS 里返回 `string?` —— 直接 `return` 给 `: string` 报 `error1 返回类型不匹配`

- **错误码**（本项目实测，unix-router-guard 任务 9，真机 VDOM/Kotlin 通道）：

  ```text
  error: 返回类型不匹配：预期类型为 'String'，实际类型为 'String?'。错误详情链接: https://doc.dcloud.net.cn/uni-app-x/uts/uts-optimize.html#error1
  at uni_modules/unix-router-guard/lib/url.uts:65:11
  64 |    try {
  65 |      return decodeURIComponent(value);
     |             ^
  66 |    }
  ```

- **底层原理**：UTS 的 `decodeURIComponent` 声明为**可空返回**（转义非法时给 null），而函数签名是 `: string` 非空；外层 `try/catch` 只在运行时兜底，挡不住类型层的可空。
- **强制规范**：显式判空兜底，行为与 `catch` 分支保持一致：

  ```uts
  // ❌ 错误：decodeURIComponent 返回 string?，直接 return 给 `: string` 报 error1
  return decodeURIComponent(value);

  // ✅ 正确：先判空兜底，与 catch 分支行为一致
  try {
    const decoded = decodeURIComponent(value);
    if (decoded == null) {
      return value;
    }
    return decoded;
  }
  catch (e) {
    return value;
  }
  ```

- **同族情形**：任何声明为 `T?` 的标准库 / 内置 API 直接 `return` 给非空签名都会撞 `error1`。
- **只在 Kotlin 阶段暴露**：蒸汽 / 字节码模式与 H5 都放行。

---

## 1.18 uni 跳转 API 的 Promise **收不进 `Promise<any> | null`** —— UTS 泛型不协变且 `any` 等价非空 Kotlin `Any`，只能写 `any | null`

- **错误码**（本项目实测，unix-router-guard 任务 9，真机 VDOM/Kotlin 通道；同一处代码按提示改一轮换一种错）：

  ```text
  # 第一轮：声明 Promise<any> | null
  error: Return type mismatch: expected 'UTSPromise<Any>?', actual 'UTSPromise<AsyncApiSuccessResult>?'.   ×3

  # 第二轮：按第一轮提示把返回类型改成 any
  error: Return type mismatch: expected 'Any', actual 'UTSPromise<AsyncApiSuccessResult>?'.                ×4
  error: Return type mismatch: expected 'UTSPromise<Any>?', actual 'Any'.

  # 第三轮：改成 any | null → 项目 unibestX 编译成功。
  ```

- **底层原理**（两条）：① UTS 泛型**不协变** —— `UTSPromise<AsyncApiSuccessResult>?` 不能当 `UTSPromise<Any>?` 用（`AsyncApiSuccessResult` 是各跳转 API 的真实返回类型）；② UTS 的 `any` 映射到 Kotlin **非空** `Any`，接不住 `uni.navigateTo` 这类**可空**返回。两条叠加后，唯一可用的写法是 `any | null`。
- **强制规范**：跳转门面用具名函数派发时，**函数与被调用方都写 `any | null`**（`null` 表示入参为空、什么都没做）：

  ```uts
  // ❌ 错误：前两种声明都报 Return type mismatch（泛型不协变 + `any` 接不住可空返回）
  function go(url: string): Promise<any> | null { return uni.navigateTo({ url: url }); }
  function go2(url: string): any { return uni.navigateTo({ url: url }); }

  // ✅ 正确：函数与被调用方都写 `any | null`
  function navigateBy(api: string, url: string): any | null {
    if (api == 'redirectTo') {
      return uni.redirectTo({ url: url });
    }
    return uni.navigateTo({ url: url });
  }

  push: (to: any): any | null => {
    const url = resolveUrl(to);
    if (url == null) {
      return null;
    }
    return navigateBy('navigateTo', url);
  },
  ```

- **代价**：调用方拿到的是 `any`，链式 `await` 的类型提示会丢失；「返回的是该 uni API 的 Promise」只能靠 JSDoc 说明。
- **只在 Kotlin 阶段暴露**：蒸汽 / 字节码模式与 H5 都放行（这也正是「必须先用 `grep -c "编译为android class"` 确认进了 Kotlin 阶段」的原因，见 3.20）。

## 1.19 同一函数里**不同块内重名的 `const` 会被 UTS 合并成一个变量** —— H5 报 `Cannot access 'x' before initialization`

- **错误码**：H5 端运行时报 `ReferenceError: Cannot access 'l' before initialization`（`l` 是压缩后的变量名）—— 代码看着毫无问题，App 端不复现。
- **底层原理**：UTS 收集变量时按**函数级去重**，同一函数里不同块的同名局部量会被合并成一个变量，声明点落在最后一次声明处；JS 本该有的块级作用域在合并后失效，于是先执行的那个分支引用了还没声明的变量，落进 TDZ。
- **强制规范**：**同一个函数体里，不同分支 / 不同循环不要复用同名局部变量**（哪怕它们分处不同 `{}`）。按语义改名即可：`bare` / `sized` / `grouped` / `placed`。
- **最小复现**（mermaid-lite `parseNodeSpec` 实测，两处都叫 `id`，一个在 `if` 里、一个在函数体里）：

  ```uts
  // ❌ 错误：两个分支各写了一个 `id`
  const at: number = firstBracket(body)
  if (at < 0) {
    const id: string = body.trim()                      // ← ①
    return { id, text: id, round: false, hasLabel: false } as MNodeSpec
  }
  const id: string = body.substring(0, at).trim()         // ← ②
  ```

  H5 编译产物把它们**合成同一个变量**，且声明点落在 ②：

  ```js
  if (n < 0) { const e = t.trim(); return new qn({ id: l, ... }) }   // ← l 此刻还在 TDZ 里
  const l = t.substring(0, n).trim(), s = ...
  ```

  ```uts
  // ✅ 正确：按语义改名，两个分支各用各的变量
  const at: number = firstBracket(body)
  if (at < 0) {
    const bare: string = body.trim()
    return { id: bare, text: bare, round: false, hasLabel: false } as MNodeSpec
  }
  const sized: string = body.substring(0, at).trim()
  // 后续两段逻辑各用 bare / sized，不再共用名字
  ```

- **安全的例外**：多个**顺序** `for (let i ...)` 里的计数器重名没问题 —— 每个 `for` 都先赋值再使用，合并后语义不变（项目里大量存在）。
- **自查脚本**（本项目实测有效）：把每个 `function` 的函数体按大括号配平切出来，正则收集 `(const|let)\s+(\w+)\s*[:=]`，同名即告警。
  ⚠️ 配平前**必须先把字符串字面量里的 `{` `}` 抠掉** —— `spec.indexOf('{')` 这种写法会把配平带偏，得出满屏假阳性。
- **为什么 App 端不复现**：Kotlin 允许内层作用域遮蔽（shadowing），编译出来本来就是两个变量 —— 这个坑**只在 H5 / 小程序这类 JS 产物上炸**，真机跑一遍反而看不见。

---

## 1.20 联合类型上的三元表达式必炸 —— **UTS 在 `typeof` 窄化之前先解析三元**，判据对另一分支非法即 `Expression expected`

- **错误码**（本项目实测，2026-10-07，`src/tabbar/internal/tab-key.uts:90`，真机 VDOM/Kotlin 通道）：

  ```text
  [plugin:uni:app-uts] Expression expected
  at src/tabbar/internal/tab-key.uts:90:17
    88 |  export function resolveTabIndex(target: number | string, apiName: string = 'onTabShow'): number {
    89 |    if (typeof target == 'number') {
    90 |      return target >= 0 ? target : -1;
       |                   ^
    91 |    }
  ```

  报错点看着毫无道理：外层 `if (typeof target == 'number')` 明明已经把 `target` 收窄成 `number` 了，`target >= 0` 怎么看都合法。

- **底层原理**：UTS 编译器在 **`return` 语句位置先解析三元表达式**，**早于** `typeof` 的窄化生效。此时 `target` 的静态类型仍是 `number | string`，三元表达式要求两个候选分支必须是**同一类型**，而 `target >= 0` 这个判据落在 `string` 分支上非法 —— 于是三元整体无法定型，报 `Expression expected` 并把箭头指向第一个类型不合法的操作数。

  **关键点**：窄化（narrowing）在这条语句里不生效，**拆成语句后立即生效**。所以这不是「三元不能用」，而是「三元 + 联合类型」这个组合不能用。

- **强制规范**：**联合类型变量上的三元表达式，一律拆成 `if` 语句提前 `return`**：

  ```uts
  // ❌ 错误：target 是 number | string，三元在窄化前解析，string 分支上 `>= 0` 非法
  //    编译报 Expression expected
  export function resolveTabIndex(target: number | string, apiName: string = 'onTabShow'): number {
    if (typeof target == 'number') {
      return target >= 0 ? target : -1;
    }
    const idx: number = resolveTabIndexByKey(target);
    return idx;
  }

  // ✅ 正确：拆成 if 语句，窄化在语句位置生效
  export function resolveTabIndex(target: number | string, apiName: string = 'onTabShow'): number {
    if (typeof target == 'number') {
      if (target >= 0) {
        return target;
      }
      return -1;
    }
    const idx: number = resolveTabIndexByKey(target);
    return idx;
  }
  ```

- **⚠️ 不要顺手把所有三元都改成 `if`**：本条只针对**联合类型**（`number | string`、`T | null` 等）。单类型变量上的三元是完全合法的 —— 本项目 `src/theme/index.uts`、`src/utils/report/index.uts`、`src/tabbar/internal/strategy.uts` 等几十处三元一直正常编译。**改法要精准命中联合类型，不要全仓机械替换**。
- **⚠️ 为什么 H5 / `lint` / 真机跑一遍都发现不了**：这是**编译期**错误，H5 编译目标是 JS 走的是另一套宽松语法；而 `launch app-android --compile true` 不到 Kotlin 阶段（见 3.15 / 3.20），本地很容易全绿。**只有真正走到 Kotlin 编译阶段才暴露**。

---

## 1.21 链式 `.catch()` 在 Kotlin 端**重载不可解析** —— 一律改用双参 `.then(onFulfilled, onRejected)`

- **错误码**（本项目实测，2026-10-07，HBuilderX 4.26，真机 VDOM/Kotlin 通道）：

  ```text
  [plugin:uni:app-uts] kotlin编译失败
  error: None of the following candidates is applicable
    错误详情链接: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error25
  fun <R> catch(onRejected: () -> UTSPromise<R>): UTSPromise<R>
  fun <R> catch(onRejected: (@ParameterName(...) Any?) -> R): UTSPromise<R>
  fun <R> catch(onRejected: (@ParameterName(...) Any?) -> UTSPromise<R>): UTSPromise<R>
  at src/http/instances/internal/factory.uts:346:43   （历史报错，模块重构后行号会变，报错文本不变）
    346 |      return this.send<T>(config).then(done).catch((err: any) => {
        |                                             ^
  ```

  三个重载都列出来了，但**一个都匹配不上**。

- **⚠️ 最容易踩的误判**：会以为是「回调里混用了 `throw` 与 `return Promise<T>`，推断出联合返回类型」，于是去拆回调、把 `throw` 改写成 `Promise.reject(...)`。**改完错误会在其它同样写了 `.catch()` 的文件里原样复现** —— 因为根因不在回调，而在 `.catch` 这个方法本身。

  **决定性反例**：`.catch((_err: any): boolean => { return false; })` 返回类型完全单一、无任何 `throw`，**照样报同一个错**。

- **底层原理**：该版本 HBuilderX 的 `UTSPromise` 上，三个 `.catch` 重载在 Kotlin 端的类型推导均无法收敛（官方编译器已知问题 error25：重载匹配失败）。**与回调签名、返回类型、是否 `throw` 都无关**。

- **强制规范**：**`.uts` / `.uvue` 里一律不写链式 `.catch()`，把拒绝回调并进 `.then` 的第二个参数**：

  ```uts
  // ❌ 错误：链式 .catch 在 Kotlin 阶段报 error25
  return doX<T>(config)
    .then((data: T): T => {
      return data;
    })
    .catch((err: any) => {
      return fallback;          // 或 throw toError(err)
    });

  // ✅ 正确：双参 .then(onFulfilled, onRejected)，两个回调各自独立标注签名
  return doX<T>(config).then(
    (data: T): T => {
      return data;
    },
    (err: any): T => {
      return fallback;
    }
  );
  ```

  两个收益叠加：① 绕开不可解析的 `.catch` 重载；② 两个回调签名各自独立，**不再需要 `Promise.resolve` 包裹**，直接 `return` 值即可。

- **失败分支要「抛出」时用 `Promise.reject`，不要 `throw`**：

  ```uts
  // ❌ 错误：throw 让该回调推断出的返回类型与 Promise<T> 不一致，
  //    在 .then 第二参上同样报 Return type mismatch: expected 'Function'
  const onRejected = (err: any): Promise<T> => {
    if (!isRetryable(err)) {
      throw toError(err);
    }
    return Promise.reject(new Error('已过期')) as Promise<T>;
  };

  // ✅ 正确：所有失败都通过 Promise.reject 表达，返回类型恒为 Promise<T>
  const onRejected = (err: any): Promise<T> => {
    if (!isRetryable(err)) {
      return Promise.reject(toError(err)) as Promise<T>;
    }
    return Promise.reject(new Error('已过期')) as Promise<T>;
  };
  ```

  同一 `.catch` 报错常伴随 `error: Return type mismatch: expected 'Function', actual 'UTSPromise<T>'` —— 那是**同一个根因的下游症状**，把 `.catch` 改成双参 `.then` 后一并消失，不要单独去修。

- **`throw` 也严禁出现在 `.then` 的 onFulfilled 里吗？** 不 —— **单参 `.then(onFulfilled)` 里 `throw` 是合法的**（本项目拦住器大量使用）。本条的约束是：**当这个回调的返回值要参与 `Promise<R>` 的泛型推导时**（即作为 `.then` 的**第二个参数**、或链式 `.catch` 的参数），才必须用 `Promise.reject` 而非 `throw` 来保持返回类型单一。

- **自查命令**（一条命中全仓）：

  ```bash
  grep -rn "\.catch(" src App.uvue | grep -v "^\S*: *[*#]"    # 排除注释里的示例
  ```

  注释 / JSDoc 里的 `.catch(` 示例不受影响，无需改；但**注释里给出的示例代码本身也应改成双参 `.then`**，避免后来者照抄。

- **只在 Kotlin 阶段暴露**：H5 / 小程序（UTS2JS）与字节码模式全部放行。所以 **`pnpm build:h5` 全绿、`eslint` 干净、单测全过，都不代表没这个问题** —— 必须跑一次真机编译才算验证：

  ```bash
  npx uni-launch app-android --compile true --vaporRenderTarget nativecode
  ```

  验证产物看 `unpackage/cache/.app-android/src/index.kt`（**注意不带 `vapornativecode` 段**，那个目录里是恒为空的 `UniAppConfig`），编译成功时该文件有数千行，可用字符串常量（如 `__REFRESHABLE_401__`）grep 确认应用级 UTS 确实编进去了。

---

## 1.22 全局开发统一遵循「精准导入（Deep / Precise Import）」铁律，杜绝原生类静态初始化死锁与 NPE

- **错误现象**（本项目实测，真机 Android VDOM 模式与原生 Class 加载阶段）：

  ```text
  error: java.lang.NullPointerException: Parameter specified as non-null is null: method ComposerClass.setAvailabilities, parameter <set-?>
  Possible Unhandled Promise Rejection: [java.lang.NoClassDefFoundError] {"message": "uni.UNIB120614.IndexKt", "cause": [java.lang.ExceptionInInitializerError] {"cause": [java.lang.NullPointerException] ...
  ```

- **底层原理**：
  在 UTS 编译为 Android 原生 Kotlin 时，每个 `.uts` 都会映射生成一个 Kotlin Class 文件。
  当某个模块使用 `index.uts` 作为聚合门面（Barrel File）并包含多个 `export *` 时，一旦被任意模块 `import`，Java/Kotlin 类加载器就会强行触发其转发的**所有子模块**的静态初始化代码（`<clinit>`）。
  如果底层模块之间（如 `config`、`utils`、`router`、`store`、`i18n`）互相从 `index.uts` 导入，或者总入口 `index.uts` 反向 `export *` 子目录工具文件，就会瞬间形成**循环引用死锁（Circular Dependency Ring）**。
  JVM 虚拟机为防止无限递归，会强行返回未完成初始化的类，导致类顶层的常量与实例为 `null`，传入 Kotlin 生成的 `@NotNull` 属性 setter 时直接抛出 `NullPointerException`，进而触发 `ExceptionInInitializerError` 导致整个应用崩溃。

- **强制规范**：
  1. **全局开发坚持精准导入（Deep Import）**：所有工具函数、状态与配置导入，一律精准引入具体的实现文件（如 `@/src/config/env/env.uts`、`@/src/utils/systemInfo/index.uts`、`@/src/i18n/utils/index.uts`），严禁跨底层模块引入 `index.uts` 聚合门面。
     - **第三方 `uni_modules` 模块例外**：从该模块**公开入口**导入（如 `@/uni_modules/route-bestX/index.uts`），它内部的文件间引用由模块自己保证单向；**业务代码严禁穿透进 `core/` / `hooks/` 等内部文件**。
  2. **总入口严禁反向导出形成自环**：主入口（如 `src/i18n/index.uts`）严禁再写 `export * from './utils/index.uts'`，彻底保持单向有向无环图（DAG）。
  3. **分层原则**：
     - **业务页面/组件**（`src/pages/`、`src/sub/`）：优先使用业务封装好的对外接口；
     - **基础设施层核心库之间**（`config/`、`utils/`、`router/`、`store/`、`i18n/`）：**铁律**：严禁互相引用任何 `index.uts` 总入口，必须精准引入叶子文件。

- **正反例**：

  ```uts
  // ❌ 错误：从聚合门面引入，连带拉起 privacy / platform 等全部子模块的静态初始化
  import { getApiBaseUrl } from '@/src/config/index.uts';

  // ✅ 正确：精准导入纯净的具体实现文件，0 额外依赖，杜绝循环引用
  import { getApiBaseUrl } from '@/src/config/env/env.uts';
  ```

  ```uts
  // ❌ 错误：在主入口中反向导出子工具，导致 index.uts 还没初始化完就加载子工具，形成自引用死锁
  export * from './utils/index.uts';

  // ✅ 正确：主入口只专注于自身实例创建与导出，工具方法在具体工具文件中独立导出
  export default i18n;
  ```

---

## 1.23 组件实例方法调用必须使用 `ComponentPublicInstance`，严禁强转 `as any` 后调用 `$callMethod`

- **错误码与现象**（Kotlin 原生编译）：

  ```text
  error: 找不到名称“$callMethod”。参考: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error18
  at src/sub/signatureFunctionDemo/signatureFunctionDemo.uvue:201:7
  200|    if (type === 'clear') {
  201|      (el as any).$callMethod('clear');
  ```

- **底层原理**：
  在 UTS 原生编译为 Kotlin 时，`any` 类型**不支持动态方法反射调用**。当把组件引用 `(el as any)` 强转为 `any` 时，UTS 编译器认为 `any` 上没有任何属性与方法，直接抛出 `error18 找不到名称“$callMethod”`。
  `$callMethod` 是 uni-app X 官方专门挂载在 `ComponentPublicInstance` 上的跨端方法分发接口。
- **强制规范**：
  1. 通过 `ref` 承载的组件实例一律声明为 `ref<ComponentPublicInstance | null>(null)`；
  2. 调用时保持 `ComponentPublicInstance` 强类型：`el.$callMethod('methodName', args)`，**严禁使用 `as any`**；
  3. 如在 TS 检查下提示属性不存在，应在全局 `src/types/uni.d.ts` 为 `ComponentCustomProperties` 扩充 `$callMethod` 声明。

- **正反例**：

  ```uts
  // ❌ 错误：强转 as any 导致 Kotlin 编译器丢失类型推断，报 error18 找不到名称 $callMethod
  const el = sigRef.value;
  (el as any).$callMethod('clear');

  // ✅ 正确：声明为 ComponentPublicInstance 强类型，直接调用 $callMethod
  const sigRef = ref<ComponentPublicInstance | null>(null);
  const el = sigRef.value;
  if (el != null) {
    el.$callMethod('clear');
  }
  ```

---

## 1.24 `<web-view>` 组件 `@message` 事件入参必须显式声明为 `UniWebViewMessageEvent`

- **错误码与现象**（Kotlin 原生编译）：

  ```text
  error: 找不到名称“detail”。参考: https://doc.dcloud.net.cn/uni-app-x/uts/compiler-known-issues.html#error18
  at src/sub/webviewFunctionDemo/webviewFunctionDemo.uvue:47:20
  46|  function onWebviewMessage(event: any): void {
  47|    const data = event.detail.data;
  ```

- **底层原理**：
  在 `<web-view>` 组件的 `@message` 回调中，如果参数写成 `(event: any)`，在 Web 动态环境可以读取 `event.detail`，但在 Android Kotlin 编译时，UTS 对 `any` 不支持隐式属性访问，会直接抛出 `error18 找不到名称“detail”`。
- **强制规范**：
  必须将回调参数显式声明为 uni-app X 官方事件强类型 `event: UniWebViewMessageEvent`。

- **正反例**：

  ```uts
  // ❌ 错误：声明为 any，Kotlin 编译期报 error18 找不到名称 detail
  function onWebviewMessage(event: any): void {
    const list = event.detail.data;
  }

  // ✅ 正确：显式声明为官方强类型 UniWebViewMessageEvent
  function onWebviewMessage(event: UniWebViewMessageEvent): void {
    const list = event.detail.data;
  }
  ```

---

## 1.25 「泛型实例化别名」严禁出现在 `as` 断言位置 —— 会被编译成 `new 别名(...)`，别名无运行期绑定，抛 `ReferenceError`

- **报错现象**（本项目实测，mp-weixin 真机 / 开发者工具运行期）：

  ```text
  httpBasicDemo.js:123 loadMockData error: <ReferenceError: FooPageResult is not defined>
  ReferenceError: FooPageResult is not defined
      at fetchFooListApi (.../getmainpackagebundle.js:1136:32)
      at Object.getFooList (.../getmainpackagebundle.js:1231:12)
      at .../getsubpackagebundle_src%2Fsub%2F.js:1529:49
  ```

  注意**编译期一声不吭**：没有 error、没有 warn，构建日志照样 `编译成功`，只在运行期炸。而 `getFooList()` 又恰好被页面的 `try/catch` 包着，最终只表现为「列表渲染不出来 + 一条 `console.error`」，极易被误判成网络问题。

- **错误写法**：

  ```uts
  export type PageResult<T> = {
    list: Array<T>;
    hasMore: boolean;
    total: number;
  };

  // ⚠️ 泛型实例化别名：别名 = 泛型本体 + 实参
  export type FooPageResult = PageResult<FooItem>;

  export function fetchFooListApi(): Promise<FooPageResult> {
    return Promise.resolve({
      list,
      hasMore: false,
      total: 0
    } as FooPageResult);          // ❌ 断言位置写了别名
  }
  ```

- **底层原理（关键）**：
  UTS 编译器把 `as <类型>` 断言**编译成构造调用**（`new <类型>({...})`），而不是纯类型标注 —— 这是 UTS 为「对象字面量 → 强类型实例」做的转换。此时它会直接取断言里写的那个**名字**去构造：

  | 源码 | 编译产物（JS 层） |
  | :--- | :--- |
  | `} as PageResult<FooItem>);` | `return Promise.resolve(new PageResult({ ... }));` ✅ |
  | `} as FooPageResult);` | `return Promise.resolve(new FooPageResult({ ... }));` ❌ |

  而 `FooPageResult` 只是**编译期的 `type` 别名**，编译器为泛型本体生成了 `class PageResult`，**不会**为「别名」再生成任何运行期绑定 ⇒ 产物里出现了一个指向不存在标识符的 `new` ⇒ 运行期 `ReferenceError`。

- **跨端一致性**：本项目实测该缺陷**同时存在于四端产物**（`grep -rl "new FooPageResult" unpackage/` 命中 mp-weixin、app-ios、app-harmony、app-android 的 dist 与 cache），不是某个平台的孤例 —— 只要断言里写了泛型实例化别名，各端都会带上这个坏引用。

- **强制规范**：
  1. **断言必须直写泛型本体**（`as PageResult<FooItem>`），把实参写全，严禁图省事写别名；
  2. 别名**只能出现在类型位置** —— 返回值标注（`Promise<FooPageResult>`）、回调参数标注（`(res: FooPageResult)`）、变量标注（`const r: FooPageResult = ...`）都合法，因为这些位置**不产生运行期代码**（本项目同一文件里这两处写法实测编译通过）；
  3. 判断口诀：**「`as` 后面 / `new` 后面」不许出现泛型实例化别名；「`:` 后面」可以。**

- **正反例**：

  ```uts
  // ❌ 错误：断言里写泛型实例化别名 ⇒ 产物 new FooPageResult(...) ⇒ 运行期 ReferenceError
  return Promise.resolve({
    list,
    hasMore: false,
    total: 0
  } as FooPageResult);

  // ✅ 正确：断言直写泛型本体，实参写全
  return Promise.resolve({
    list,
    hasMore: false,
    total: 0
  } as PageResult<FooItem>);

  // ✅ 正确：别名用在类型位置（返回值标注 / 回调参数标注）是安全的
  export function fetchFooListApi(): Promise<FooPageResult> {
    return fetchFooListRawApi().then((res: FooPageResult): Array<FooItem> => res.list);
  }
  ```

- **同类排查手法**（一条命令扫全仓，防复发）：

  ```bash
  # 1) 先列出所有「泛型实例化别名」定义
  grep -rn "^export type [A-Za-z_]* = [A-Za-z_]*<" --include="*.uts" src
  # 2) 再查这些别名是否被写进了 as 断言位置
  grep -rn "as [A-Za-z_]*PageResult\b\|as [A-Za-z_]*Result\b" --include="*.uts" --include="*.uvue" src | grep -v "as PageResult<"
  # 3) 最终判据落到产物上（编译成功不等于没坏引用）
  grep -rn "new [A-Za-z_]*PageResult(" unpackage/dist/dev/mp-weixin/src/api/*.js
  ```

- **验证方式（本项目实测有效）**：
  单测走的是 esbuild 转译，**不会**复现 UTS 这一层编译行为，因此这类问题单测全绿也照样存在。必须落到产物上：重新编译目标平台后 `grep` 产物，确认「坏引用」已消失、只剩 `new PageResult({...})`（判定方法见 3.15）。

---

## 1.26 定时器句柄报 `TS2322 不能将类型"Timeout"分配给类型"number"` —— **这不是 UTS 编译错误**，是 VSCode / Volar 类型检查；调用点必须就地双层强转 `(setInterval(...) as any) as number`

- **报错现象**（本项目实测，`src/http/hooks/useRequest.uts` 轮询与防抖两处；编辑器内红线画在**被赋值的那个变量**上，而不是 `setInterval` 上）：

  ```text
  pollingTimer = setInterval((): void => {
  ~~~~~~~~~~~~ 不能将类型"Timeout"分配给类型"number"。
    triggerPoll();
  }, optPolling);
  ```

- **先分清是谁在报错（本条最关键的一点）**：这是 **TS / Volar（`ts-plugin`）诊断**，**不是 UTS 编译器报错**。
  - UTS 侧 `setTimeout` / `setInterval` 返回的**确实是 `number`**（HBuilderX `uts-types/common/timers.d.ts`，`clearTimeout(id: number | undefined)` 同理）—— 所以 **UTS 编译、真机运行都毫无问题**；
  - `pnpm typecheck`（`tsc --noEmit`）**也不会报** —— 它压根不加载 `.uts` 文件（`tsc` 的 `include` 只吃到 11 个 `src` 文件，`.uts` 一个都不在列）。
  - 因此：**别因为编辑器一片红就以为代码要炸，也别因为 `typecheck` 全绿就以为编辑器不会红**，两者都不是判据。判据只有一个 —— **VSCode 的 `ts-plugin` 诊断清空**。

- **成因**：`tsconfig.json` 的 `types: ["@dcloudio/types"]` 白名单**挡不住** @types/node —— 只要程序里**有一个被 `include` 的文件**显式 import 了 Node 内置模块（本项目就是 `vite.config.ts`），@types/node 的**全局** `setTimeout` / `setInterval` 声明就整包进程序，其返回类型 `NodeJS.Timeout` 与 UTS 真源的 `number` 直接冲突。

- **触发条件（极易漏判）**：**必须存在显式的 `: number` 标注**才会报。
  - `const timer = setTimeout(...)`（完全交给推断）**不报** —— 项目里 `src/sub/fontBasicDemo/fontBasicDemo.uvue:612`、`:730` 就是这么写的；
  - 一旦按 **1.13** 写成 `let timerId: number = 0;` 再 `timerId = setTimeout(...)`，**就必报**。
  - 结论：**1.13 与 1.26 会同时命中同一个定时器变量** —— 1.13 逼你「先声明后赋值」，先声明就得写类型标注，写了 `number` 标注就撞上本条。两条必须一起处理才干净。

- **强制规范**：**调用点就地双层强转**，只影响类型、不影响产物：

  ```uts
  // ❌ 错误：显式 number 标注 + 直接赋值 → TS2322 不能将类型"Timeout"分配给类型"number"
  pollingTimer = setInterval((): void => {
    triggerPoll();
  }, optPolling);

  // ❌ 错误：单层强转也不行 → TS2352 Conversion of type 'Timeout' to type 'number' may be a mistake
  //    because neither type sufficiently overlaps with the other
  pollingTimer = setInterval((): void => { triggerPoll(); }, optPolling) as number;

  // ✅ 正确：`(…) as any` 再 `as number`
  pollingTimer = (setInterval((): void => {
    triggerPoll();
  }, optPolling) as any) as number;
  ```

- **别走这条弯路（已实测无效）**：在 `src/types/*.d.ts` 里补一条全局 `function setTimeout(...): number` 声明**压不住** —— 全局重载合并后 TS 取**先声明**的那支，@types/node 那支始终排在项目声明之前，仍然报 TS2322。

- **项目内先例（改之前先照抄，严禁发明新写法）**：

  | 位置 | 说明 |
  | :--- | :--- |
  | `src/components/NestedScroll/NestedScroll.uvue:383` | 下拉刷新超时句柄（6000ms） |
  | `src/sub/timeFunctionDemo/timeFunctionDemo.uvue:153` | 官方 API 演示页（100ms） |
  | `src/sub/chartsFunctionDemo/chartsFunctionDemo.uvue:502` | 图表轮播句柄（120ms） |
  | `src/tabbar/internal/navigate.uts:124` | TabBar 切换节流句柄（250ms） |

- **排查手法**（一条命令扫全仓，防复发）。注意**不能用 `grep -A`**：双层强转是多行语句，`as any) as number` 落在三行之后，`grep -v` 是逐行过滤、根本滤不掉，会把所有**正确**写法都当成漏网报出来。必须按**括号配对**把整条赋值语句切出来再看：

  ```bash
  perl -ne 'if (/^\s*\w+\s*=\s*\(?set(?:Timeout|Interval)\(/) { $b=$_; $d=()=$b=~/\(/g; $d-=()=$b=~/\)/g; while ($d>0 && defined($l=<ARGV>)) { $b.=$l; $d+=()=$l=~/\(/g; $d-=()=$l=~/\)/g; } print "$ARGV: $b\n" unless $b=~/as any\) as number/ }' $(git ls-files 'src/**/*.uts' 'src/**/*.uvue')
  ```

  命中即为漏网。**2026-10-13 全仓实扫结果：0 命中**（`const timer = setTimeout(...)` 这类无类型标注的写法不在此列，它本来就不报错）。

- **验证方式**：改完必须落到 **VSCode 的 `ts-plugin` 诊断**上确认已清空 —— `pnpm typecheck` 扫不到 `.uts`（全绿不代表修好），UTS 编译也从来不会因为这个报错（编译成功不代表编辑器不红）。

---

## 1.27 `UTSJSONObject` 未声明字段只能下标访问并断言，禁止点属性

- **错误码**：无独立报错码，通常表现为编译期「属性不存在」或运行期取值恒为 `null`。
- **底层原理**：UTS 在原生端把对象字面量编译成强类型类。**只有声明过字段的 `type` 才有 `obj.key` 这层静态成员**；未经声明的 `UTSJSONObject` 没有对应属性，点访问拿不到值，必须走下标 + 断言。
- **强制规范**：对没有声明强类型字段的 `UTSJSONObject`，**禁止 `obj.key` 与 `obj.key.sub` 点访问**，统一下标访问并对取出的值做类型断言；多层结构逐层断言。

```ts
// ❌ 错误：config 是未声明字段的 UTSJSONObject，点访问取不到 color，嵌套写入更会丢
config.color['up-primary'] = 'red'

// ✅ 正确：逐层下标 + 断言
const colorConfig = config['color'] as UTSJSONObject
colorConfig['up-primary'] = 'red'

// ✅ 取值同样要断言出目标类型
const title = config['title'] as string
```

> ⚠️ 与 1.9 的界限：`Class` 实例**反过来**禁止 `obj[key]` 下标访问，只能点操作符。判据是「这个值的类型是 `Class` 还是 `UTSJSONObject`」，两者下标规则相反。

---

## 1.28 Pinia 自定义基类重写方法必须与父类签名严格一致

- **错误码**：App-Android 端泛型基类方法校验失败（通常表现为重写方法「不存在」或参数不匹配）。
- **底层原理**：项目的 Pinia 基类（`PiniaStoreBase`，来自 `@/uni_modules/x-pinia-s`，仅 x-pinia-s 分支）在 Kotlin 端是带泛型的强类型类，重写（覆写）内置方法（如 `_hydrate`）时，参数数量与类型都属于签名的一部分，与父类不一致就无法构成合法覆写。
- **强制规范**：重写或覆写父类方法时，**参数数量与类型必须与父类类型签名逐一对齐**（参数名可以不同，项目内既有 `data` 与 `_data` 两种写法），并显式写 `override`；不得靠省略参数或放宽类型规避报错。

```ts
// ❌ 错误：擅自增减参数，泛型基类方法在 App-Android 端校验不过
class UserStore extends PiniaStoreBase {
  override _hydrate(data: UTSJSONObject, persisted: boolean): void { /* ... */ }
}

// ✅ 正确：与父类对齐（父类签名：`_hydrate(data: UTSJSONObject): void`）
class UserStore extends PiniaStoreBase {
  override _hydrate(data: UTSJSONObject): void { /* ... */ }
}
```

---

## 1.29 语句分隔与显式类型断言

- **语句分隔**：多行书写时行尾分号 `;` 可省略；**同一行写多条语句必须以分号分隔**。
- **显式类型断言**：在选项式组件 `data()` 定义中，或对 `any` 类型变量取值后，用 `as` 断言出确定类型，避免原生端把类型推成 `Any`/`Nothing`：

  ```ts
  const year = date.getFullYear() as number
  ```

- **注意**：断言不能拿来掩盖空值 —— 对可能为 `null` 的值做 `as` 非空断言前必须先判空（见 A.2 第 19 条）。

---


## 1.30 类型怎么声明、从哪导入

### 1.30.1 类型声明：只写 `type`，只放文件顶层

```uts
// ✅ 顶层：对象结构 / 联合 / 函数类型，一律 type
export type CouponItem = {
  id: number,
  title: string,
  amount: number
};

// ✅ 联合类型：只与 null 联合
export type CouponFilter = 'all' | 'active' | 'expired';
export type CouponOrNull = CouponItem | null;

// ✅ 函数类型：抽成顶层别名（不要写进对象属性，见 1.16）
export type CouponHandler = (item: CouponItem, index: number) => void;

// ✅ 泛型
export type PageResult<T> = {
  list: Array<T>,
  hasMore: boolean,
  total: number
};
```

| 要定义什么 | 写法 | 禁止 |
| :--- | :--- | :--- |
| 对象结构 | `type X = { ... }` | `interface X { ... }`（1.1） |
| 可选字段 | `field?: string \| null` | `field?: string \| undefined`（1.2） |
| 联合 | 只允许 `T \| null` | `string \| number`（改用 `any` 或拆参数） |
| 函数类型 | 顶层 `type Xxx = (...) => ...` | 写进对象属性且带剩余参数（1.16） |
| 泛型容器 | `type PageResult<T> = {...}` | 泛型别名用在 `as` 后（1.25） |
| 类型位置 | 文件顶层 | 函数 / 代码块内部（1.7，`UTS100006`） |

### 1.30.2 类型从哪导入：四种来源

| 来源 | 导入写法 | 说明 |
| :--- | :--- | :--- |
| 本项目类型 | `import type { CouponItem } from '@/src/api/coupon/coupon.uts'` | **必须带 `.uts` 后缀**，`@` 指向项目根 |
| 接口层同目录类型 | `import type { QueryRow } from './types.uts'` | 仅 `src/api/<page>/` 内部用相对路径；页面目录不设 `types.uts` |
| 第三方模块类型 | `import type { RouteLocation } from '@/uni_modules/route-bestX/index.uts'` | 从**公开入口**导入，不穿透内部文件 |
| 框架全局类型 | 无需导入 | `UTSJSONObject`、`UniScrollEvent`、`ComponentPublicInstance` 等 |

```uts
// ❌ 错误：type 与值混在一起用普通 import；无扩展名
import { CouponItem } from '@/src/api/coupon/coupon';

// ✅ 正确：类型用 `import type`，路径带 .uts
import type { CouponItem } from '@/src/api/coupon/coupon.uts';
```

> ⚠️ **`import type` 在本项目不会被擦除成「零运行期成本」**：对象类型别名会生成运行期类（见记忆 `uts-import-type-is-not-erased`）。因此**类型要放在零依赖的叶子文件里**，不要跨文件反向引用实现模块，否则会形成运行期循环。

---

## 1.31 类型系统能表达什么

### 1.31.1 可用类型一览

| 类别 | 可用 | 说明 |
| :--- | :--- | :--- |
| 基础 | `string` / `number` / `boolean` | `string` / `boolean` 可字面量推导；`number` 必须标注（1.5） |
| 空值 | `null` | 没有 `undefined`（1.2） |
| 数组 | `Array<T>` / `T[]` | 必须显式标注元素类型 |
| Map | `Map<K, V>` | 取用 `.get()` / `.set()`；`keys()` 是属性不是方法（1.14） |
| JSON 对象 | `UTSJSONObject` | 未声明字段只能下标 + 断言（1.27） |
| 联合 | `T \| null` | 只允许与 `null` 联合 |
| 函数 | `(a: A) => B` | 顶层别名可带剩余参数，对象属性里不行（1.16） |
| 泛型 | `type Box<T> = {...}` | 泛型**不协变**（1.18） |
| 类 | `class` | 编译为原生类，遵守原生 OOP 规则（1.9） |
| 任意 | `any` | 等价 Kotlin **非空** `Any`；可空返回要写 `any \| null`（1.18） |
| 元组 | ❌ 不支持 | 用 `type` 对象或数组替代 |
| `never` / `unknown` | ❌ 不用 | —— |
| 索引签名 | ❌ 不支持 | 动态键走 `UTSJSONObject` |

### 1.31.2 值语义：什么时候要断言、什么时候要判空

```uts
// ① 具名 type：对象字面量可以直接赋（不需要断言）
const coupon: CouponItem = { id: 1, title: 'A', amount: 10 };

// ② UTSJSONObject 取值：下标 + 断言
const raw = config['amount'];
const amount: number = raw != null ? (raw as number) : 0;

// ③ 插槽变量（Any?）：模板调用点断言（1.8）
// <text>{{ formatItem(item as UTSJSONObject) }}</text>

// ④ any 返回值：先判空再断言（3.17）
const maybe: any | null = map.get('key');
const text: string = maybe != null ? `${maybe}` : '';
```

### 1.31.3 类型与运行期的对应关系（最容易误判的一张表）

| 类型位置 | 是否产生运行期代码 | 能不能写泛型实例化别名 |
| :--- | :--- | :--- |
| `:` 后（变量 / 参数 / 返回值标注） | ❌ 不产生 | ✅ 可以（`Promise<FooPageResult>`） |
| `as` 后 | ✅ 编译成 `new T(...)` | ❌ **禁止**（1.25） |
| `import type` | ⚠️ 对象类型别名仍会生成类 | 类型放零依赖叶子文件 |
| 泛型本体 `PageResult<T>` | ✅ 生成 `class PageResult` | —— |

---

## 1.32 完整示例：一个可直接编译的 `.uts` 工具模块

> 下面这份代码把 1.1–1.29 的规则**全部落在同一个文件里**，可作为新建 `src/utils/<module>/index.uts` 的起点。复制后改业务即可，不要删掉类型标注与判空。

```uts
// src/utils/coupon/index.uts —— UTS 语法标准写法合集（可直接编译）

// ---------- 1. 类型：只在文件顶层，一律 type ----------
export type CouponItem = {
  id: number,
  title: string,
  amount: number,
  expiredAt: number,
  tags: Array<string>
};

export type PageResult<T> = {
  list: Array<T>,
  hasMore: boolean,
  total: number
};

// ---------- 2. 常量：number / Array 必须显式标注；空值用 null ----------
const PAGE_SIZE: number = 10;
const EMPTY_ITEMS: Array<CouponItem> = [];

// ---------- 3. 函数：参数与返回值全标注，无返回值写 : void ----------
export function isExpired(item: CouponItem, now: number): boolean {
  return item.expiredAt > 0 && item.expiredAt < now;
}

export function formatAmount(amount: number): string {
  return `¥${amount}`;
}

// ---------- 4. 可空：`?.` + `??` 兜底；条件必须显式布尔 ----------
export function pickTitle(item: CouponItem | null): string {
  if (item == null) {
    return '';
  }
  const title: string = item.title.trim();
  if (title == '') {
    return '未命名优惠券';
  }
  return title;
}

// ---------- 5. 下标：边界检查与读取写在同一个短路表达式 ----------
export function firstTag(item: CouponItem): string {
  const tags: Array<string> = item.tags;
  if (tags.length == 0 || tags[0] == null) {
    return '';
  }
  const first: string = tags[0];
  return first;
}

// ---------- 6. Map 遍历：值类型是 string 可标注；值类型是 any 时禁止标注 ----------
export function joinQuery(query: Map<string, string>): string {
  const parts: Array<string> = [];
  query.forEach((value: string, key: string): void => {
    parts.push(`${key}=${value}`);
  });
  return parts.join('&');
}

// ---------- 7. Promise：双参 .then(onFulfilled, onRejected)，严禁链式 .catch ----------
export function fetchCouponListApi(pageNo: number = 1, pageSize: number = PAGE_SIZE): Promise<PageResult<CouponItem>> {
  return Promise.resolve({
    list: EMPTY_ITEMS,
    hasMore: false,
    total: 0
  } as PageResult<CouponItem>);
}

export function fetchCouponDetailApi(id: number): Promise<CouponItem | null> {
  return fetchCouponListApi(1, 1).then(
    (res: PageResult<CouponItem>): CouponItem | null => {
      if (res.list.length > 0) {
        return res.list[0];
      }
      return null;
    },
    (err: any): CouponItem | null => {
      console.error('[coupon] 详情加载失败', err);
      return null;
    }
  );
}

// ---------- 8. 导出面：只用具名函数导出，绝不导出「包着函数的对象字面量」 ----------
export function getCouponApiPath(): string {
  return '/api/v1/coupon';
}
```

**逐段对应关系**：类型顶层 + `type` → 1.1 / 1.7；常量标注 → 1.5；函数签名 → 1.6；可空处理 → 1.2 / 1.6 / 3.17；下标边界 → 3.16；Map 遍历 → 1.14；Promise → 1.21 / 1.18；导出面 → 1.10 / 1.11。

---

## 1.33 多种场景写法（可直接复制）

### 1.33.1 定义 DTO + 默认值构造

```uts
export type CouponItem = {
  id: number,
  title: string,
  amount: number
};

// ✅ 统一由工厂函数造默认值，避免每个调用点各写一份 null 判断
export function createEmptyCoupon(): CouponItem {
  return { id: 0, title: '', amount: 0 } as CouponItem;
}

// ✅ 可选字段：用 `?: T | null`，不要写 `| undefined`
export type CouponQuery = {
  keyword?: string | null,
  pageNo?: number | null
};
```

### 1.33.2 写异步函数：三种形态

```uts
// 形态 A：直接返回 Promise.resolve（mock / 同步逻辑）
export function fetchListApi(): Promise<Array<CouponItem>> {
  return Promise.resolve([] as Array<CouponItem>);
}

// 形态 B：链式 then —— 只用双参形式，失败即返回兜底值
export function fetchTitleApi(id: number): Promise<string> {
  return fetchDetailApi(id).then(
    (item: CouponItem | null): string => {
      if (item == null) {
        return '';
      }
      return item.title;
    },
    (err: any): string => {
      console.error('[coupon] fetchTitleApi 失败', err);
      return '';
    }
  );
}

// 形态 C：需要「抛出」失败时用 Promise.reject，不要 throw
export function fetchRequiredApi(id: number): Promise<CouponItem> {
  return fetchDetailApi(id).then(
    (item: CouponItem | null): Promise<CouponItem> => {
      if (item == null) {
        return Promise.reject(new Error('优惠券不存在')) as Promise<CouponItem>;
      }
      return Promise.resolve(item);
    },
    (err: any): Promise<CouponItem> => {
      return Promise.reject(err) as Promise<CouponItem>;
    }
  );
}
```

### 1.33.3 遍历与转换

```uts
// 数组：map / filter 回调要标注参数与返回值
export function toTitles(list: Array<CouponItem>): Array<string> {
  return list.map((item: CouponItem): string => item.title);
}

// 过滤：条件必须显式布尔
export function filterActive(list: Array<CouponItem>, now: number): Array<CouponItem> {
  return list.filter((item: CouponItem): boolean => !isExpired(item, now));
}

// 索引循环：边界与读取同表达式
export function sumAmount(list: Array<CouponItem>): number {
  let total: number = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].amount;
  }
  return total;
}
```

### 1.33.4 `UTSJSONObject` 与 `Map`

```uts
// UTSJSONObject：未声明字段只能下标 + 断言（1.27）
export function readConfig(config: UTSJSONObject): string {
  const raw = config['theme'];
  if (raw == null) {
    return '';
  }
  return `${raw}`;
}

// UTSJSONObject 遍历：用 UTSJSONObject.keys()，不要 map.keys()
export function dumpConfig(config: UTSJSONObject): Array<string> {
  const keys: Array<string> = UTSJSONObject.keys(config);
  const lines: Array<string> = [];
  for (let i = 0; i < keys.length; i++) {
    const key: string = keys[i];
    const value = config[key];
    if (value != null) {
      lines.push(`${key}=${value}`);
    }
  }
  return lines;
}

// Map<string, string>：可以标注 value: string（1.14 的范围界定）
export function mapToLines(map: Map<string, string>): Array<string> {
  const lines: Array<string> = [];
  map.forEach((value: string, key: string): void => {
    lines.push(`${key}:${value}`);
  });
  return lines;
}
```

### 1.33.5 闭包与定时器

```uts
// ✅ 先声明、后赋值（1.13）；句柄显式 number 并做双层强转（1.26）
let timerId: number = 0;

export function startPolling(onTick: () => void, intervalMs: number = 1000): void {
  stopPolling();
  timerId = (setInterval((): void => {
    onTick();
  }, intervalMs) as any) as number;
}

export function stopPolling(): void {
  if (timerId != 0) {
    clearInterval(timerId);
    timerId = 0;
  }
}

// ✅ 局部函数不能当值传递（1.15）：包一层 lambda
function onTimeout(): void {
  stopPolling();
}

export function scheduleStop(delayMs: number): void {
  setTimeout((): void => {
    onTimeout();
  }, delayMs);
}
```

### 1.33.6 类与单例

```uts
// ✅ 原生类：private 不用 #；不写 static {}；继承显式 constructor + super
export class CouponFormatter {
  private prefix: string = '¥';

  constructor(prefix: string = '¥') {
    this.prefix = prefix;
  }

  format(amount: number): string {
    return `${this.prefix}${amount}`;
  }
}

// ✅ 对外提供单例（具名导出，不导出对象字面量）
export const couponFormatter: CouponFormatter = new CouponFormatter();
```

### 1.33.7 模块导出面设计

```uts
// ✅ 一个模块 = 一组具名导出；需要门面时只做一层转发
// src/utils/coupon/index.uts
export * from './types.uts';      // 纯类型叶子，可以转发
export * from './format.uts';     // 每个符号只在这一层转发一次

// ❌ 不要：export const couponApi = { fetchListApi, fetchDetailApi }
// ❌ 不要：子文件再 export * 一次（两层转发 → Kotlin 符号改名 __1）
```

---

## 1.34 坑点清单（按踩坑频率排序）

### ① 写了 `interface`

```uts
// ❌ interface 不能接收对象字面量：UTS110111163
interface User { id: number }
const u: User = { id: 1 };

// ✅ type
type User = { id: number };
```

### ② 用了 `undefined` 或可选参数 `?`

```uts
// ❌
let name: string | undefined;
function f(a?: string): void {}

// ✅
let name: string | null = null;
function f(a: string | null): void {}
```

### ③ 条件位置给了非布尔值

```uts
// ❌ UTS110111120：数组、字符串、对象都不能直接当条件
if (list) {}
if (str) {}

// ✅ 显式比较
if (list.length > 0) {}
if (str != null && str != '') {}
```

### ④ 基础类型用了 `===`

```uts
// ❌ Kotlin 端是引用比较，字符串内容相同也可能为 false
if (code === 200) {}

// ✅
if (code == 200) {}
```

### ⑤ 数字 / 数组没标注类型

```uts
// ❌ 推导结果随平台漂移
let count = 0;
let list = [];

// ✅
let count: number = 0;
let list: Array<string> = [];
```

### ⑥ 联调时把 `UTSJSONObject` 直接抛给页面

```uts
// ❌ 页面模板里必然踩 error17 / ClassCastException
return data as UTSJSONObject;

// ✅ 在 api 层就地转强类型（见分册 6）
return { id: data.getNumber('id') ?? 0 } as CouponItem;
```

### ⑦ 联合类型上写三元

```uts
// ❌ 报 Expression expected（1.20）
return target >= 0 ? target : -1;

// ✅ 拆 if
if (target >= 0) {
  return target;
}
return -1;
```

### ⑧ 写了链式 `.catch()`

```uts
// ❌ Kotlin 端 error25
p.then(ok).catch(err => {});

// ✅ 双参 then
p.then(ok, err => {});
```

### ⑨ 定时器句柄自引用

```uts
// ❌ error18
const id = setInterval(() => clearInterval(id), 1000);

// ✅ 先声明后赋值
let id: number = 0;
id = (setInterval(() => { clearInterval(id); }, 1000) as any) as number;
```

### ⑩ 遍历 `any` 值 Map 时标了 `any`

```uts
// ❌ error17
map.toMap().forEach((v: any, k: string): void => {});

// ✅ 去掉标注，或用 UTSJSONObject.keys()
```

### ⑪ `as` 后面写泛型实例化别名

```uts
// ❌ 产物里 new FooPageResult(...) → 运行期 ReferenceError
} as FooPageResult);

// ✅ 直写泛型本体
} as PageResult<CouponItem>);
```

### ⑫ 把局部函数当值传递

```uts
// ❌ error18
setTimeout(onDone, 1000);

// ✅ 包 lambda
setTimeout(() => { onDone(); }, 1000);
```

### ⑬ 同一函数不同块重名 `const`（H5 才炸）

```uts
// ❌ H5 报 Cannot access 'x' before initialization
if (a) { const id = ...; }
const id = ...;

// ✅ 按语义改名
if (a) { const bare = ...; }
const sized = ...;
```

### ⑭ 导出「包着函数的对象字面量」

```uts
// ❌ Kotlin 报 Function invocation expected
export const env = { getApiBaseUrl };

// ✅ 具名函数导出
export function getApiBaseUrl(): string { ... }
```

### ⑮ 顶层属性与同名 getter 并存

```uts
// ❌ NoSuchMethodError: getWindowHeight()...ComputedRef
export const windowHeight = computed(...);
export function getWindowHeight(): number { ... }

// ✅ 需要面向对象调用就收敛到类实例方法
class SystemUtils { getWindowHeight(): number { ... } }
```

---

## 1.35 报错索引：现象 → 条目

> 先按**报错码 / 现象**定位条目，再读该条的「底层原理」与正反例。同一现象可能命中多条（如 1.13 与 1.26 会同时命中同一个定时器变量）。

| 报错码 / 现象 | 条目 |
| :--- | :--- |
| `UTS110111163` 对象字面量不支持 interface | 1.1 / 1.34① |
| `UTS110111119`（`undefined` / 可选参数 `?`） | 1.2 / 1.34② |
| `UTS110111120`（条件不是布尔） | 1.3 / 1.34③ |
| Kotlin `warning: Identity equality ... implicit boxing` / `===` 判错 | 1.4 / 1.34④ |
| 数字 / 数组类型推导漂移 | 1.5 / 1.34⑤ |
| 函数签名 / 可空调用报错 | 1.6 |
| `UTS100006`（type 写在函数内）/ `UTS110111166` | 1.7 |
| `error17`：插槽变量是 `Any?` | 1.8 |
| `UTS110111128/129/130/131/151`（`#prop` / 下标 / `static {}` / 继承 / 传递 Class） | 1.9 |
| Kotlin `Function invocation expected`（对象字面量裹函数） | 1.10 / 1.34⑭ |
| `NoSuchMethodError: getXxx()...ComputedRef`（顶层同名 getter） | 1.11 / 1.34⑮ |
| Kotlin 符号被改名 `xxx__1` / `error18 找不到名称` | 1.12 |
| `const timerId = setInterval(() => clearInterval(timerId))` 报 error18 | 1.13 / 1.34⑨ |
| 遍历 `any` 值 Map 报 `error17` / `keys cannot be invoked as a function` | 1.14 / 1.34⑩ |
| `setTimeout(localFn, ...)` 报 `error18` | 1.15 / 1.34⑫ |
| `Function type parameters cannot have modifiers.` | 1.16 |
| `error1 返回类型不匹配`（`decodeURIComponent` 等可空返回） | 1.17 |
| `Return type mismatch: expected 'UTSPromise<Any>?'` | 1.18 |
| H5 `Cannot access 'x' before initialization`（同函数重名 const） | 1.19 / 1.34⑬ |
| 联合类型上的三元报 `Expression expected` | 1.20 / 1.34⑦ |
| 链式 `.catch()` 报 `error25 None of the following candidates is applicable` | 1.21 / 1.34⑧ |
| 原生端 `NullPointerException` / `ExceptionInInitializerError`（循环导入） | 1.22 |
| `$callMethod` 报 `error18 找不到名称` | 1.23 |
| `<web-view>` `@message` 读 `e.detail` 报 error18 | 1.24 |
| 运行期 `ReferenceError: XxxPageResult is not defined` | 1.25 / 1.34⑪ |
| VSCode `TS2322 不能将类型"Timeout"分配给类型"number"` | 1.26 |
| `UTSJSONObject` 点属性取不到值 | 1.27 |
| `PiniaStoreBase` 重写方法校验失败 | 1.28 |
| 同行多语句未加分号 / 需要显式断言 | 1.29 |
| 页面模板收到 `UTSJSONObject` 后崩 / 渲染不出 | 1.34⑥ + 分册 6.2 |

---

## 1.36 语法与类型速查表

| 能力 | UTS 支持情况 | 标准写法 |
| :--- | :--- | :--- |
| 对象结构类型 | ✅ 只能用 `type` | `type User = { id: number }` |
| `interface` | ❌ 禁止 | —— |
| `undefined` | ❌ 不存在 | `string \| null` + `null` |
| 可选参数 | ✅ 但含义是「可省略」 | `function f(a?: string)`；**不要**写 `a?: string \| undefined` |
| 任意类型联合 | ❌ 只支持与 `null` 联合 | `string \| number` → 改 `any` 或拆两个参数 |
| 基础类型比较 | `==` / `!=` | `code == 200`、`str == ''` |
| 条件表达式 | 只能是 `boolean` | `if (obj != null)` |
| 数字 / 数组声明 | 必须显式标注 | `let n: number = 0`、`let list: Array<string> = []` |
| 函数签名 | 必须全标注 | `function f(a: number): boolean` |
| 无返回值 | 写 `: void` | `function f(): void` |
| 可空调用 | `?.` | `str?.length ?? 0` |
| 类型断言 | `as T` | `raw as UTSJSONObject`（**不写泛型别名**） |
| `Class` 实例取值 | 只能点操作符 | `obj.prop` |
| `UTSJSONObject` 取值 | 只能下标 | `obj['prop']` |
| Map 遍历 | `forEach`，`any` 值不标注 | `map.forEach((v, k): void => {})` |
| Map 键集合 | `UTSJSONObject.keys()` | 不要 `map.keys()` |
| 异步 | `Promise<T>` + 双参 `.then` | `.then(ok, err)` |
| 链式 `.catch()` | ❌ Kotlin 端编不过 | 并入 `.then` 第二参 |
| `throw` 于拒绝回调 | ❌ 返回类型会裂开 | `Promise.reject(err) as Promise<T>` |
| 三元表达式 | 单类型可用；**联合类型禁用** | 联合类型拆 `if` |
| 局部函数 | 必须先定义后调用、不可当值传 | 包 lambda |
| 定时器句柄 | `number`，调用点双层强转 | `(setTimeout(...) as any) as number` |
| 模块导出 | 只用具名导出 | `export function foo()` |
| 类型定义位置 | 只能文件顶层 | 函数内 `type` 报 `UTS100006` |

---

## 1.37 自检红线清单（语言层）

- [ ] **1. 零 `interface`** —— 所有对象结构、参数、返回值、状态一律 `type`
- [ ] **2. 零 `undefined`** —— 变量必初始化，空值用 `null`，可选字段写 `T | null`
- [ ] **3. 条件全显式** —— `if` / 三元判据只接受 `boolean`，与 `null` / 空串 / 数值显式比较
- [ ] **4. 基础类型只比 `==` / `!=`** —— 字符串、数字、布尔严禁 `===` / `!==`
- [ ] **5. 类型标注到位** —— `number` / `Array` 显式标注，函数参数与返回值全标注，无返回值写 `: void`
- [ ] **6. 类型只在顶层** —— 函数体内不写 `type` / `interface`
- [ ] **7. 可空必判** —— 可空成员用 `?.`，`as` 非空断言前先判空
- [ ] **8. 下标先判边界** —— 边界检查与读取写在同一短路表达式，判断在前
- [ ] **9. 导出面干净** —— 只用具名函数导出，不导出包着函数的对象字面量，不造同名 getter
- [ ] **10. 导入精准** —— 项目模块引具体实现文件，第三方模块引公开入口，不穿透内部文件；类型用 `import type` 并保留 `.uts`
- [ ] **11. 异步只用双参 `.then`** —— 严禁链式 `.catch()`；拒绝回调用 `Promise.reject(...) as Promise<T>`
- [ ] **12. 联合类型不写三元** —— 拆成 `if` 提前 `return`；单类型上的三元不要机械替换
- [ ] **13. `as` 后不写泛型实例化别名** —— 直写 `as PageResult<Item>`；别名只出现在类型位置
- [ ] **14. 局部声明顺序正确** —— 先声明后使用；回调里不引用承载它自身的变量；局部函数不当值传递
- [ ] **15. `UTSJSONObject` 下标取值** —— 不点属性；`Class` 实例反过来只点操作符；**`UTSJSONObject` 不出 api 层**
