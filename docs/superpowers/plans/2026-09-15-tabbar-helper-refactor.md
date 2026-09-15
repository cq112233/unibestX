# src/tabbar/helper 职责归位与导出面收敛 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 把 `src/tabbar/helper/`（更名后为 `src/tabbar/internal/`）从「两个文件装八种职责」拆成 5 个单一职责的叶子文件，把模块对外导出收敛为单层门面、收回 8 个不该外露的符号（导出面 41 → 33），并把 `themeColor` 迁到主题域以解开 `store ↔ tabbar` 双向依赖——全程不改变任何运行时行为。

**架构：** `src/tabbar/index.uts` 是模块唯一对外门面，对 5 个叶子文件做**单层** `export *`（不使用无先例的具名再导出语法）。叶子文件按职责划分：`strategy`（策略判定）、`metrics`（尺寸/视口计算）、`state`（列表与激活状态）、`navigate`（跳转行为）、`native`（平台桥接）。`themeColor` 上移到 `src/utils/theme/index.uts`，`store → tabbar` 的直接依赖边随之消除；经 `i18n` 中介的间接环是改造前既有状况，本次不动（详见下表后的说明）。

**技术栈：** uni-app X / UTS (`.uts`) / Vue 3 / Pinia（vapor + vdom 双分支）/ Tailwind CSS 4。无测试框架，验证依赖静态导出面快照 + 真实编译产物。

**规格：** `docs/superpowers/specs/2026-09-15-tabbar-helper-refactor-design.md`

---

## 前置事实（已实测，实施者无需重新验证）

| 事实 | 证据 |
| --- | --- |
| 本项目**没有**测试框架 | `package.json` 无 vitest/jest；`scripts/guard-test/` 只有空的 `.build/{whitelist,blacklist}` 目录 |
| H5 基线构建**通过**，耗时约 41 秒 | `pnpm build:h5` → `项目 unibestX 编译成功。` + `✅ H5 打包成功` |
| 基线构建日志含**既存噪声** | `[plugin:uts] ... error TS2305: Module '"@dcloudio/uni-app"' has no exported member 'resolveEasycom'`，由 easycom 自动注入产生，**不阻断构建**。判断「是否引入新错误」时必须以此噪声为对照，不能要求零 error |
| 改造前 `@/src/tabbar` 的可达导出面 = **41 个符号** | 静态解析 `export *` 图得出，清单见任务 0 的基线文件 |
| 未使用私有常量只是 **warning**，不阻断 `pnpm lint` | 探针实测：`warning 'unusedPrivateFlag' is assigned a value but never used` + `eslint exit=0` |
| 项目内**无** `export { x } from '...'` 先例 | 全仓 grep 无命中。故门面一律用已验证的单层 `export *` |
| 项目内**无** `src/tabbar/index.d.uts.ts`，但 `@/src/tabbar` 已被 3 个 `.uvue` 正常导入 | 无扩展名的目录路径不需要配套声明文件；红线 39 只约束「以字面 `xxx.uts` 路径导入」的情形 |
| `unpackage/dist/build/web/` 的 H5 产物**被 git 跟踪**，每次 `pnpm build:h5` 会重写约 55 个文件 | 建立基线时跑过一次构建，`git status` 随即出现大量 ` D`（旧 hash js）+ `??`（新 hash js） |
| 存在一条**改造前就有**的间接依赖环：`store/*/app` → `utils/i18n` → `tabbar/helper` → `store` | `src/store/vapor/app.ts:4` 与 `src/store/vdom/app.uts:3` 均 `import i18n from '@/src/i18n/index.uts'`；`src/utils/i18n/index.uts:2` `import { tabbarList } from '../../tabbar/helper/index.uts'`；而 tabbar 的 `themeTokens` 反过来 `import { useAppStore } from '@/src/store'` |

> **关于「解开双向依赖」的准确表述**：任务 1 解开的是 `store → tabbar` 的**直接**边（`themeColor`）。经 `i18n` 中介的间接环**本次不动**——它改造前就存在且当前工作正常。若要彻底切断，做法与 `themeColor` 同构：把暗色标志也上移到主题域（新增 `isDark` ref，由 app store 写入），`themeTokens` 改读它而不再 `useAppStore()`。那属于独立改动，不在本计划范围，需要时另开规格。

## 🚨 全局硬性约束（每个任务都适用，实施者动手前先读这一节）

1. **禁止 `git add -A` / `git add .` / `git add -A <dir>`**。本仓库跟踪着约 55 个 H5 构建产物（`unpackage/dist/build/web/`，每次 `pnpm build:h5` 都会重写），且 `src/tabbar/types.uts` 有**用户未提交的改动**。任何一次 `-A` 都会把这些一并扫进提交。**每个 commit 都必须逐个写出改动文件的明确路径。**
2. **本分支有另一条并行会话在活动**（uni-router-guard 特性线，近期提交 `261d18d04`、`3a037bbe3`、`9dbcd4519`、`1573a7706`）。**不要** `rebase`、**不要** `amend`、**不要** `push --force`，**不要**顺手修复工作区里不属于本重构的改动。

   **该会话会实时改动工作区，以下是会实际撞到的四件事**（任务 2 实施与审查期间实测）：

   - `main.uts` 被插入十几行 `console.log('[probe-guard] …')` 探针，`manifest.json` 被摘掉 `"vapor": true` 与 `"vapor-render-target": "bytecode"`（切到 VDOM 模式做真机 Kotlin 验证）。**这两个文件当前是脏的，不是你造成的，不要还原、不要提交、不要"修好"它们。**
   - 有常驻 `uni.js` 进程（`-p h5` / `-p app` / `-p mp-weixin`），HBuilderX 开着本项目 watch。
   - 因此 **`pnpm build:h5` 的编译本身照常成功**（`项目 unibestX 编译成功。` 会正常打出），但收尾的 `scripts/build-h5.mjs` `restorePages()` 可能因 `.pages.json.bak` 被并发构建删掉而抛 `copyfile ENOENT`，脚本以 exit 1 结束。**这不算你的失败**——判据是**编译结论行**，不是脚本 exit code。撞上时补做一件事：`git diff --name-only pages.json` 应为空，确认 `pages.json` 没被留在损坏状态。
   - **提交前先看 `git diff --cached --name-only`**。若输出非空，说明并行会话正在准备提交，**此时不要 add**（你的 add 会把它的暂存内容一并卷进你的提交）。等几分钟重试。
3. **单文件 eslint 必须在清掉 `VSCODE_PID` 之后跑**，否则 @antfu/eslint-config 会走编辑器分支、静默关掉部分规则，得到**假绿**：

   ```bash
   env -u VSCODE_PID -u VSCODE_CWD -u VSCODE_ESM_ENTRYPOINT pnpm eslint <单个文件>
   ```

   **只对本次改动的单文件跑**，绝不跑 `pnpm lint:fix` 或 `eslint . --fix`（会全仓改写）。
4. **`--expect` 存在假绿通道**：脚本只校验「总数」与「是否有新增」，**不校验「移除的是不是预期的那几个」**。所以每个任务的导出面断言都必须**额外肉眼核对输出的 `已移除：` 行集合**，光看 `✓ 导出面符号数符合预期` 不算通过。
5. **不要改 `scripts/check-tabbar-surface.mjs`**（任务 0 已定稿并复审通过）。任务 0 复审记录的改进项一律不在本次范围。
6. **同一次 `pnpm build:h5` 会重写 `unpackage/` 下约 55 个文件**。这是预期噪声，**不要**试图 revert 它们，也**不要**把它们加进任何 commit。

   > **任务 3 后实测补充**：`unpackage/` 下共 **470** 个被跟踪文件，**全部**在 `dist/build/` 里；`dist/dev/` 与 `cache/` 被 `.gitignore` 忽略（`.gitignore:6`、`:2`），所以那底下 8 个仍含旧 `src/tabbar/helper` 路径的陈旧产物目录 **git 完全看不见**，无需处理。
   >
   > 但 `dist/build/` 里有**两个已跟踪文件仍嵌着旧路径**：`unpackage/dist/build/app-android/app-service.js` 与 `unpackage/dist/build/app-ios/app-service.js`（内容是编译进去的日志串 `at src/tabbar/helper/index.uts:250`）。它们只有等任务 8 重建 App 端才会更新，**而按本条规则又不该提交**——所以任务 8 结束时这两个文件显示为 ` M` 是**预期状态，不是遗漏**。不要手工去改它们，也不要为了「让它们干净」而 commit。

## 文件结构

**创建：**

| 文件 | 职责 |
| --- | --- |
| `scripts/check-tabbar-surface.mjs` | 静态解析 `src/tabbar/index.uts` 的 `export *` 图，输出/断言门面导出面 |
| `src/tabbar/internal/strategy.uts` | 策略枚举与模式判定（`TABBAR_STRATEGY_MAP`、`parseTabbarStrategy`、`selectedTabbarStrategy`、`isSinglePageTabbar`、`isNativeTabbar`、`needHideNativeTabbar`、`tabbarType`、`customTabbarEnable`） |
| `src/tabbar/internal/metrics.uts` | 尺寸常量与视口/主题计算（`TABBAR_HEIGHT`、`TABBAR_CONTAINER_HEIGHT`、`themeTokens`、`safeAreaBottom`、`isVersionGte525`、`tabbarPlaceholderHeight`） |
| `src/tabbar/internal/state.uts` | 列表与激活状态（`tabbarList`、`curIdx`、`setCurIdx`、`setCurIdxByPath`、`syncCurIdxByCurrentPage`、`isPageTabbar`、`setTabbarItemBadge`、`onTabShow`） |
| `src/tabbar/internal/navigate.uts` | 跳转行为（`switchTabbar`、`handleTabbarClick`、`initNativeMidButtonTap`） |
| `src/tabbar/internal/native.uts` | 平台桥接（`safeHideNativeTabBar`） |

**修改：**

| 文件 | 改动 |
| --- | --- |
| `src/tabbar/index.uts` | 任务 3 把聚合行改为 `./internal`；任务 4-7 改为对 5 个叶子文件单层 `export *` |
| `src/utils/theme/index.uts` | 新增 `export const themeColor = ref(getDefaultTheme())` |
| `src/store/vapor/app.ts`、`src/store/vdom/app.uts` | `themeColor` 改从主题域导入 |
| `src/tabbar/helper/index.uts` | 任务 3 随目录更名移至 `internal/`，此后逐任务掏空，任务 7 删除 |
| `src/tabbar/helper/store.uts` | 任务 3 随目录更名移至 `internal/`，任务 6 迁为 `state.uts` 后删除 |
| 12 处消费者 | import 路径归一为 `@/src/tabbar` |
| `README.md:590` | 任务 3 把小节标题里的 `src/tabbar/helper` 改为 `src/tabbar`（文档里唯一引用旧目录名的位置） |

**移动：** `src/tabbar/helper/` → `src/tabbar/internal/`（任务 3）

**删除：** `src/tabbar/internal/index.uts`、`src/tabbar/internal/store.uts`

**消费者 import 归一清单（12 处，即任务 2 的归一表）：**

`App.uvue:4`、`App.ku.uvue:25`、`src/layouts/navbar.uvue:56`、`src/sub/auth/login.uvue:20`、`src/pages/me/views/MeView.uvue:49`、`src/router/interceptor.uts:2`、`src/utils/i18n/index.uts:2`、`src/tabbar/tabbar.uvue:14`、`src/tabbar/components/TabContent.uvue:11`、`src/tabbar/ui/default/index.uvue:13`、`src/tabbar/ui/default/TabbarItem.uvue:3`、`src/tabbar/ui/capsule/index.uvue:14`

> 🚨 **`App.uvue` 与 `App.ku.uvue` 是规格 §3.4 表里漏掉的两处**（原表只扫了 `src/` 目录，两个根组件不在扫描范围内）。它们用的是最深、最不显眼的两种相对写法，靠肉眼搜 `@/src/tabbar/helper` 根本搜不到，必须显式列入，否则任务 7 删掉 `internal/index.uts` 后根组件直接编译失败。规格 §3.4 已同步补入。

**无需改动**（入口已是 `@/src/tabbar`）：`src/pages/index/index.uvue`、`src/pages/function/views/FunctionView.uvue`、`src/tabbar/ui/template.uvue`（后者另在任务 1 已把 `themeColor` 改走主题域）。

---

### 任务 0：建立导出面快照检查

这是本次重构唯一的可执行测试：导出面是这个模块的对外契约，重构期间任何符号的意外丢失或泄漏都必须让检查变红。

**文件：**
- 创建：`scripts/check-tabbar-surface.mjs`
- 创建：`docs/superpowers/plans/tabbar-surface-baseline.txt`（由脚本 `--write` 生成）

- [ ] **步骤 1：编写检查脚本**

创建 `scripts/check-tabbar-surface.mjs`。**本代码块与 `scripts/check-tabbar-surface.mjs` 同步维护**：任何一方改动都必须同步另一方，并用程序化比较确认两者逐字一致（`block === script`）。

```js
#!/usr/bin/env node
/**
 * TabBar 门面导出面快照检查
 *
 * 静态解析 src/tabbar/index.uts 的 `export *` 图，列出可经 `@/src/tabbar` 导入的全部顶层
 * 符号。用于重构期间证明「对外契约只减不增、且减少的正是预期的那几个」。
 *
 * 用法（参数必须显式给出；不认识的参数一律报错退出）：
 *   node scripts/check-tabbar-surface.mjs              # 打印当前导出面并与基线比对
 *   node scripts/check-tabbar-surface.mjs --write      # 写入基线文件
 *   node scripts/check-tabbar-surface.mjs --expect 32  # 断言符号数，且不得出现新增符号（被移除者的身份需人工核对 `已移除：` 行）
 *
 * 解析策略：先剥注释，再逐行白名单 —— 不静默计数
 *   读入文件后先剥掉块注释（含跨行）与行尾注释（用等长空格替换，保持行号对齐），
 *   然后逐行扫描：任何匹配 `^\s*export\b` 的行都必须落在 EXPORT_SHAPES 这张形态表里，
 *   否则直接报错并以退出码 1 中止（`--write` 也不会写盘，避免把残缺的面写成新基线）。
 *   形态表是校验与计数的唯一事实来源，两者共用同一处定义，不会脱钩。
 *
 *   已支持的形态：
 *     1. `export * from '…'`                                    —— 递归遍历目标文件
 *     2. `export { a, b }` / `export type { a, b }`（不带 from） —— 只记名字，不遍历
 *     3. `export const|let|var|function|class|type|enum|interface <标识符>`
 *
 *   故意 **不支持**、命中即报错的写法（白名单之外的一切）：
 *     `export default`、`export * as ns from`、带 `from` 的 `export { … } from`、
 *     `export async function`、`export function*`、`export declare …`、
 *     `export abstract class`、`export namespace …`、`export = …`、
 *     `export const { a, b } = obj`（解构）等等。
 *   宁可让检查变红，也不产出一份看起来正确、实则残缺的导出面。
 *
 * 已知残余限制（如实陈述 —— 请勿把吞行守卫当成「导出面已被证明完好」的依据）：
 *   1. 注释剥离是正则近似实现，不解析字符串、模板串与正则字面量。「块注释起始符出现在
 *      字符串或行注释里」时会一路吞到其后第一个块注释收尾符，把中间的真实导出行整行抹掉。
 *      吞行守卫只覆盖其中「同行前缀含 `//`，或含未闭合（奇数个）引号」的这一类；
 *   2. 守卫 **覆盖不到** 同行前缀干净的过度吞并 —— 例如跨行模板串里独占一行的块注释起始
 *      符、正则字面量里的块注释起始符。这类仍会 **静默少算导出面**，守卫不会报错；被吞
 *      符号以「已移除：」的面目出现，与真收回无法区分。两个假绿通道都由此而来：
 *      (a) `--expect <被吞后的数量>` —— 当它恰好等于该步的计划值时（例如阶梯上的 `40`），
 *          会打印「✓ 导出面符号数符合预期」并 exit 0。`--expect` 的判定只查「数量不符」
 *          与「是否有新增」，**没有任何 removed 校验**，而吞行只减少符号、从不新增，
 *          因此拦不住它；
 *      (b) `--write` 会把残缺面直接写成新基线，锚点从此被污染；
 *   3. 守卫的基准与 `stripComments` 共用同一份块注释正则（`BLOCK_COMMENT`）：改动这份正则
 *      时两条通路会一起变，守卫 **发现不了正则本身的过度吞并**。因此守卫 **不是** 独立的
 *      第二意见 ——「守卫没报错」推不出「导出面完整」；
 *   4. 反向残余（假红）：同行前缀含未闭合引号（形如 `"it's" ` 再接块注释起始符）或含 `//`
 *      （形如 `'https://…'` 再接块注释起始符）时，该注释会被判脏而报错 —— 但**仅当注释体
 *      内存在独占一行、以 `export` 开头的文字**时才会报错；同样的前缀配一个纯说明注释则
 *      不报错。跨行模板串区域内的合法块注释同理（同源，未被覆盖）。已用报错里的
 *      「差异行号 + 原始行文本」缓解 —— 看行号即可在 1 秒内判断真假；
 *   5. 多行模板字符串里独占一行的 `export` 仍会被误判成导出语句（假红方向，可见）。
 *   早先版本曾声称「其余影响是误报、不会静默漏计」，该说法已被反例证伪，故删除。
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FACADE = path.join(ROOT, 'src/tabbar/index.uts');
const BASELINE = path.join(ROOT, 'docs/superpowers/plans/tabbar-surface-baseline.txt');
const USAGE = '用法：node scripts/check-tabbar-surface.mjs [--write | --expect <数量>]';

/**
 * 导出形态表：唯一的事实来源，同时驱动「逐行白名单校验」与「符号计数」。
 * name 用于报错文案；re 匹配已 trim 的整行；kind 决定如何取名字。
 * 第 3 条用 `\b` 收尾，因此 `export const {`（解构）、`export function*`（生成器）、
 * `export async function` / `export declare` / `export abstract class` / `export namespace`
 * / `export =` 都会被挡在白名单之外，走报错路径。
 */
const EXPORT_SHAPES = [
  {
    name: 'export * from \'<spec>\'',
    re: /^export\s+\*\s+from\s+['"]([^'"]+)['"]\s*;?$/,
    kind: 'reexport'
  },
  {
    name: 'export { … } / export type { … }（不带 from）',
    re: /^export\s+(?:type\s+)?\{([^}]*)\}\s*;?$/,
    kind: 'names'
  },
  {
    name: 'export const|let|var|function|class|type|enum|interface <标识符>',
    re: /^export\s+(?:const|let|var|function|class|type|enum|interface)\s+([A-Za-z_$][\w$]*)\b.*$/,
    kind: 'name'
  }
];

const EXPORT_LINE = /^export\b/;

/**
 * 块注释正则：`stripComments` 与吞行守卫共用同一处定义，避免「只改一处」让对方静默失效。
 * 两处都只经 String.replace 使用 —— 不要在这份共享的带 g 正则上调用 test/exec，
 * 那会污染 lastIndex。
 */
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;
const blankOut = comment => comment.replace(/[^\n]/g, ' ');

/** 剥掉块注释与行尾注释；块注释用等长空格替换，保持行号与行内偏移不漂移 */
function stripComments(src) {
  return src.replace(BLOCK_COMMENT, blankOut).replace(/\/\/[^\n]*/g, '');
}

/**
 * 同行前缀是否像「真注释」的位置。判脏（不像）的条件：前缀含 `//`，或三种引号里任一种
 * 出现**奇数**次（即未闭合）。反斜杠转义的引号不计入。
 * 这是启发式而非词法分析 —— 残余假红见头注释的「已知残余限制」第 4 条。
 */
function looksLikeRealComment(prefix) {
  if (prefix.includes('//'))
    return false;
  for (const quote of ['\'', '"', '`']) {
    let count = 0;
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] === '\\') {
        i++;
        continue;
      }
      if (prefix[i] === quote)
        count++;
    }
    if (count % 2 === 1)
      return false;
  }
  return true;
}

/** 解析模块路径，依次尝试：原样、补 .uts、补 .ts、补 /index.uts、补 /index.ts */
function resolveModule(fromFile, spec) {
  const base = spec.startsWith('@/')
    ? path.join(ROOT, spec.slice(2))
    : path.resolve(path.dirname(fromFile), spec);
  const candidates = [base, `${base}.uts`, `${base}.ts`, path.join(base, 'index.uts'), path.join(base, 'index.ts')];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile())
      return c;
  }
  return null;
}

let parseError = false;
/** 基线「存在但读不了」时置位：调用方据此不再补一句误导性的「不存在」 */
let baselineReadError = false;
const visited = new Set();
const found = new Map();

function walk(file) {
  const abs = path.resolve(file);
  if (visited.has(abs))
    return;
  visited.add(abs);

  let raw;
  try {
    raw = fs.readFileSync(abs, 'utf8');
  }
  catch (error) {
    console.error(`✗ 无法读取文件：${abs}（${error.message}）`);
    parseError = true;
    return;
  }

  const rel = path.relative(ROOT, abs);
  const rawLines = raw.split('\n');
  const lines = stripComments(raw).split('\n');

  // 守卫：正则剥离不解析字符串/模板串/正则字面量。若「块注释起始符」其实出现在字符串或
  // 行注释里，它会一路吞到其后第一个收尾符，把中间的真实导出行整行抹成空格 —— 静默少算
  // 导出面 = 假绿。合法块注释里本来就可能写着 export 字样（那是注释不是导出），所以基准
  // 取「只剥真注释」的结果，再逐行比出「基准里是导出、真实剥离后不是」的行。
  // 注意：基准与生产线共用同一份块注释正则，故守卫只覆盖「脏前缀」这一类，见头注释。
  const legitStripped = raw.replace(BLOCK_COMMENT, (comment, offset) => {
    const linePrefix = raw.slice(raw.lastIndexOf('\n', offset) + 1, offset);
    return looksLikeRealComment(linePrefix) ? blankOut(comment) : comment;
  });
  const legitLines = legitStripped.split('\n');
  const swallowed = [];
  for (let i = 0; i < lines.length; i++) {
    if (EXPORT_LINE.test(lines[i].trim()))
      continue;
    if (EXPORT_LINE.test((legitLines[i] ?? '').trim()))
      swallowed.push(i + 1);
  }
  if (swallowed.length > 0) {
    console.error(`✗ 剥注释时疑似吞掉了 ${swallowed.length} 行导出语句：${abs}`);
    for (const lineNo of swallowed)
      console.error(`  差异行：第 ${lineNo} 行 ${rawLines[lineNo - 1]}`);
    console.error('  可能原因：字符串/行注释里出现了未配对的块注释起始符（本工具确实吞了真实代码）；或本工具误判了同行前缀（该块注释其实合法）。请核对上面列出的行。');
    parseError = true;
    return;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!EXPORT_LINE.test(line))
      continue;

    const shape = EXPORT_SHAPES.find(s => s.re.test(line));
    if (shape === undefined) {
      console.error(`✗ 第 ${i + 1} 行是无法识别的导出写法：${rawLines[i].trim()}`);
      console.error(`  来自 ${rel}，请更新本脚本的 EXPORT_SHAPES 后再继续`);
      console.error(`  本脚本支持：${EXPORT_SHAPES.map(s => s.name).join(' / ')}`);
      parseError = true;
      return;
    }

    const m = line.match(shape.re);
    if (shape.kind === 'reexport') {
      const target = resolveModule(abs, m[1]);
      if (target == null) {
        console.error(`✗ 无法解析重导出目标：${m[1]}（来自 ${rel}，第 ${i + 1} 行）`);
        parseError = true;
        continue;
      }
      walk(target);
    }
    else if (shape.kind === 'names') {
      for (const part of m[1].split(',')) {
        const name = part.trim().split(/\s+as\s+/).pop()?.trim();
        if (name != null && name !== '')
          found.set(name, rel);
      }
    }
    else {
      found.set(m[1], rel);
    }
  }
}

const args = process.argv.slice(2);
let wantWrite = false;
let wantExpect = false;
let expectRaw;
let usageError = null;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--write') {
    wantWrite = true;
  }
  else if (arg === '--expect') {
    wantExpect = true;
    expectRaw = args[++i];
  }
  else if (usageError == null) {
    // 只报第一个不认识的 token：这通常就是拼错的那个，后续 token 多是它的连带参数
    usageError = `✗ 无法识别的参数：${arg}`;
  }
}

if (usageError == null) {
  try {
    walk(FACADE);
  }
  catch (error) {
    // 兜底：具体是哪个文件读不了已由 walk 内部用真实 abs 报出，这里不再宣称路径
    console.error(`✗ 解析导出面失败：${error.message}`);
    parseError = true;
  }
}

const names = [...found.keys()].sort();
const baselineRel = path.relative(ROOT, BASELINE);

/** 读取基线；「不存在」返回 null，「存在但读不了」额外置 baselineReadError 后返回 null */
function readBaseline() {
  if (!fs.existsSync(BASELINE))
    return null;
  try {
    return fs.readFileSync(BASELINE, 'utf8').split('\n').map(s => s.trim()).filter(s => s !== '');
  }
  catch (error) {
    console.error(`✗ 无法读取基线文件：${BASELINE}（${error.message}）`);
    baselineReadError = true;
    return null;
  }
}

/** 与基线做差集：removed 保基线序，added 保当前面序（来源文件取自 found） */
function diffAgainst(baseline) {
  return {
    removed: baseline.filter(n => !found.has(n)),
    added: names.filter(n => !baseline.includes(n))
  };
}

function formatAdded(added) {
  return added.map(n => `${n} (${found.get(n)})`).join(', ');
}

/** 基线/当前数量 + 已移除/新增清单，默认模式与 --expect 模式共用 */
function printDiff(baseline, diff) {
  console.log(`基线 ${baseline.length} 个，当前 ${names.length} 个`);
  if (diff.removed.length > 0)
    console.log(`已移除：${diff.removed.join(', ')}`);
  if (diff.added.length > 0)
    console.log(`新增：${formatAdded(diff.added)}`);
}

if (usageError != null) {
  console.error(usageError);
  console.error(USAGE);
  process.exitCode = 1;
}
else if (parseError) {
  console.error('✗ 导出面解析失败，已中止本次检查（未写入任何文件）');
  process.exitCode = 1;
}
else if (wantWrite && wantExpect) {
  console.error('✗ --write 与 --expect 不能同时使用');
  process.exitCode = 1;
}
else if (wantWrite) {
  const prev = readBaseline();
  if (baselineReadError) {
    // 旧基线读不出来就不要覆盖它（EACCES 下写同样会失败，别把好文件写坏）
    console.error('✗ 基线不可读，未写入任何文件');
    process.exitCode = 1;
  }
  else {
    if (prev != null) {
      const diff = diffAgainst(prev);
      if (diff.removed.length > 0 || diff.added.length > 0) {
        const parts = [];
        if (diff.removed.length > 0)
          parts.push(`已移除 ${diff.removed.join(', ')}`);
        if (diff.added.length > 0)
          parts.push(`新增 ${formatAdded(diff.added)}`);
        console.log(`与现有基线不同，即将覆盖：${parts.join('；')}`);
      }
    }
    fs.writeFileSync(BASELINE, `${names.join('\n')}\n`);
    console.log(`已写入基线：${baselineRel}（${names.length} 个符号）`);
  }
}
else if (wantExpect) {
  const expected = Number(expectRaw);
  if (expectRaw === undefined || String(expectRaw).trim() === '' || !Number.isInteger(expected) || expected < 0) {
    console.error(`✗ 无效的 --expect 参数：${expectRaw === undefined ? '(缺失)' : expectRaw}`);
    console.error(USAGE);
    process.exitCode = 1;
  }
  else {
    const baseline = readBaseline();
    if (baseline == null) {
      // 读失败时 readBaseline 已打印过真实原因，别再补一句误导性的「不存在」
      if (!baselineReadError)
        console.error(`✗ 基线文件不存在：${baselineRel}，请先运行 --write`);
      process.exitCode = 1;
    }
    else {
      const diff = diffAgainst(baseline);
      printDiff(baseline, diff);
      const countMismatch = names.length !== expected;
      const hasAdded = diff.added.length > 0;
      if (countMismatch || hasAdded) {
        console.log(names.join('\n'));
        if (countMismatch)
          console.error('✗ 导出面符号数不符');
        if (hasAdded)
          console.error(`✗ 导出面出现新增符号（对外契约只减不增）：${formatAdded(diff.added)}`);
        process.exitCode = 1;
      }
      else {
        console.log('✓ 导出面符号数符合预期');
      }
    }
  }
}
else {
  const baseline = readBaseline();
  if (baseline == null) {
    // 读失败时 readBaseline 已打印过真实原因，别再补一句误导性的「不存在」
    if (!baselineReadError) {
      console.log(names.join('\n'));
      console.error(`✗ 基线文件不存在：${baselineRel}，请先运行 --write`);
    }
    process.exitCode = 1;
  }
  else {
    const diff = diffAgainst(baseline);
    printDiff(baseline, diff);
    console.log(diff.removed.length === 0 && diff.added.length === 0
      ? '✓ 与基线一致'
      : '⚠ 与基线有差异（请核对是否为预期收回）');
  }
}
```

- [ ] **步骤 2：运行脚本，确认能算出改造前的 41 个符号**

运行：`node scripts/check-tabbar-surface.mjs`
预期：打印 41 个符号（首行 `CustomTabBarItem`，末行 `themeTokens`）；此时基线尚未生成，脚本以失败告终 —— `✗ 基线文件不存在：docs/superpowers/plans/tabbar-surface-baseline.txt，请先运行 --write` + `exit=1`。**这是刻意的**：基线是整条阶梯的唯一锚点，缺失必须以失败告终，不能静默通过；符号清单照常打印，供本步骤核对 41 个符号。

- [ ] **步骤 3：写入基线**

运行：`node scripts/check-tabbar-surface.mjs --write`
预期：`已写入基线：docs/superpowers/plans/tabbar-surface-baseline.txt（41 个符号）`

- [ ] **步骤 4：验证断言模式可用（红 / 绿）**

运行：`node scripts/check-tabbar-surface.mjs --expect 41; echo "exit=$?"`
预期：`基线 41 个，当前 41 个` + `✓ 导出面符号数符合预期` + `exit=0`（通过时不打印全量名字清单，避免噪声）

运行：`node scripts/check-tabbar-surface.mjs --expect 99; echo "exit=$?"`
预期：`基线 41 个，当前 41 个` 后跟全量 41 个名字，末行 `✗ 导出面符号数不符` + `exit=1`

运行：`node scripts/check-tabbar-surface.mjs --expect abc; echo "exit=$?"`
预期：`✗ 无效的 --expect 参数：abc` + `exit=1`（`--expect` 缺值、负数同理）

运行：`node scripts/check-tabbar-surface.mjs --write --expect 41; echo "exit=$?"`
预期：`✗ --write 与 --expect 不能同时使用` + `exit=1`

运行：`node scripts/check-tabbar-surface.mjs --expect=41; echo "exit=$?"`
预期：`✗ 无法识别的参数：--expect=41` + `用法：node scripts/check-tabbar-surface.mjs [--write | --expect <数量>]` + `exit=1`（`--expect` 必须写成空格分隔的 `--expect 41`；`--expect ""`、拼错的 `--expct`、`-e`、其它未知参数同样 exit 1）

> 参数必须显式给出：任何不认识的 token 一律报错退出，**绝不静默落进默认模式**——否则一个等号（`--expect=41`）就能得到「什么都没断言」的绿灯。
>
> `--expect` 同时断言**符号数**与**符号集**：删掉一个已有符号、再塞进一个凑数的假符号，总数虽不变，也会因「新增」非空而变红。本重构的不变式是「对外契约只减不增」，任何新增都必须立即失败。

- [ ] **步骤 5：Commit**

```bash
git add scripts/check-tabbar-surface.mjs docs/superpowers/plans/tabbar-surface-baseline.txt
git commit -m "test: 添加 tabbar 门面导出面快照检查与改造前基线"
```

---

#### 任务 0 复审留档（已记录，本轮**不实施**）

任务 0 的规格审查与代码质量审查均已通过，无「必须修复」项。以下是质量审查留下的改进点，**明确不在本次重构范围内**，实施任务 1-8 时**不要**顺手改动 `scripts/check-tabbar-surface.mjs`：

1. **重复符号被静默去重**（`found.set(name, rel)`，脚本 221/225 行）：同一符号被两个叶子文件导出时，后者覆盖前者，数量少 1 且丢失来源归属。这是本次重构最关心的 `xxx__1` 改名风险的静态对应物。之所以可接受：仓库现实路径下它几乎总会因数量不符先变红（被搬走的符号若在旧文件残留，数量不会按阶梯下降）。**若它真的触发，症状是「数量比预期少 1」而非「多 1」，排查时优先怀疑重名而非真丢符号。**
2. `--expect` 数量不符的报错未带「预期 vs 实际」（359 行），失败时需在屏幕二次对账。
3. 默认模式下有新差异仍 `exit 0`（383-385 行）——这是计划刻意要求的（任务 8 期望「8 个移除」时退出码必须为 0），但意味着「8 个预期移除 + 1 个意外新增」这种组合只能靠肉眼读输出。**这正是每个任务都必须手工核对 `已移除：` 行集合的原因。**
4. 基线装载失败的处理在三个分支里近乎逐字重复（314-319 / 344-350 / 371-379 行）。
5. 输出图标用 `✗ / ✓ / ⚠`，与仓库既有脚本（`scripts/switch-env.mjs`、`scripts/build-h5.mjs`、`scripts/gen-uts-dts.mjs`）的 `❌ / ✅ / ⚠️` 不一致。
6. 未在 `package.json` 加 `check:tabbar-surface` 别名（同类脚本 `check:uts-dts` 已有先例）。计划内全部调用点都直接写 `node scripts/check-tabbar-surface.mjs`，不依赖别名。

此外「仅供参考」级共 7 条（stdout/stderr 分流、绝对与相对路径混用、helper 声明顺序、死防御 `?? ''`、常量提取不对称、`found`/`printDiff` 命名、基线文件放在 `plans/` 目录），一并留作记录。

---

### 任务 1：themeColor 迁至主题域

先做这一步，因为它独立于 helper 拆分，且解开双向依赖后，后续每一步的依赖方向都是单向的，便于排查。

**文件：**
- 修改：`src/utils/theme/index.uts`（新增 `themeColor`）
- 修改：`src/store/vapor/app.ts:3`、`src/store/vdom/app.uts:2`
- 修改：`src/tabbar/helper/store.uts`（删掉 `themeColor` 声明）
- 修改：`src/tabbar/ui/template.uvue`、`src/tabbar/ui/default/TabbarItem.uvue`、`src/tabbar/ui/capsule/index.uvue`（`themeColor` 改从主题域导入）
- 重生成：`src/utils/theme/index.d.uts.ts`（由 `pnpm gen:uts-dts` 产出，**禁止手工编辑**）

- [ ] **步骤 1：在 `src/utils/theme/index.uts` 顶部补 `ref` 导入**

把第 1 行：

```uts
import { nextTick } from 'vue';
```

改为：

```uts
import { nextTick, ref } from 'vue';
```

- [ ] **步骤 2：在 `getDefaultTheme` 之后新增 `themeColor`**

在 `getDefaultTheme()` 函数体结束（第 58 行 `}`）之后、`getSystemTheme` 的文档注释之前，插入：

```uts
/**
 * 全局主题色（响应式）：由 app store 在主题变更时写入，TabBar 各 UI 组件读取。
 * 迁入主题域后 store 不再反向依赖 tabbar。
 */
export const themeColor = ref(getDefaultTheme());
```

**必须放在 `getDefaultTheme` 定义之后**，避免依赖顶层声明的求值顺序。

> ⚠️ **这段 JSDoc 会被 `gen-uts-dts` 原样拷进公开声明 `src/utils/theme/index.d.uts.ts`**，所以措辞错误等于固化进对外契约。初版写的是「TabBar / NavBar 等 UI 组件读取」，**事实有误**：全仓只有 3 个 TabBar 组件读 `themeColor`（`ui/template.uvue`、`ui/default/TabbarItem.uvue`、`ui/capsule/index.uvue`），`src/components/NavBar/NavBar.uvue` 走的是 `getThemeTokens()`、从不读它。已改为「TabBar 各 UI 组件读取」。
>
> 同时删掉了「原先寄居在 `src/tabbar/helper/store.uts`」这个文件指针：`store.uts` 会在任务 6 被删除，指针必成死链；且迁移史对 d.ts 的消费者毫无意义。保留的是不变量（store 不再反向依赖 tabbar）。

- [ ] **步骤 3：改 store 两个分支的导入**

`src/store/vapor/app.ts` 第 3 行：

```ts
import { themeColor } from '@/src/tabbar/helper';
```

改为：

```ts
import { themeColor } from '@/src/utils/theme/index.uts';
```

`src/store/vdom/app.uts` 第 2 行做同样替换。

- [ ] **步骤 4：删掉 store.uts 里的原声明**

在 `src/tabbar/helper/store.uts` 中删除这一行及其上方注释：

```uts
/** 全局主题色，供主题设置和 Tabbar 联动使用 */
export const themeColor = ref(getDefaultTheme());
```

同时把第 3 行的导入：

```uts
import { getDefaultTheme } from '@/src/utils/theme/index.uts';
```

整行删除（该文件不再使用 `getDefaultTheme`）。

- [ ] **步骤 5：改三个 tabbar UI 组件的 `themeColor` 来源**

三处都是在已有的 import 列表中把 `themeColor` 移出、改从主题域引入。

⚠️ **不要另起一行新增 `import { themeColor } from '@/src/utils/theme/index.uts';`** —— 这三个文件本来就已从 `@/src/utils/theme/index.uts` 导入其它符号（`isDarkMode` / `getThemeTokens` 等），另起一行会触发 eslint 的 `import/no-duplicates`（实测 4 个文件各 2 处 error）。**正确做法是把 `themeColor` 并入已有那条主题域导入列表**，语义完全等价且 lint 干净。

`src/tabbar/ui/template.uvue`：从 `@/src/tabbar` 的具名导入列表中删除 `themeColor,` 一行，并把 `themeColor` 并入已有的主题域导入列表（形如 `import { isDarkMode, themeColor } from '@/src/utils/theme/index.uts';`）。

`src/tabbar/ui/default/TabbarItem.uvue` 第 3 行：

```uts
import { curIdx, themeColor } from '../../helper';
```

改为：

```uts
import { curIdx } from '../../helper';
```

再把 `themeColor` 并入已有的主题域导入列表。

`src/tabbar/ui/capsule/index.uvue` 第 8-15 行的具名导入列表中删除 `themeColor` 一项（注意上一行 `handleTabbarClick,` 的尾逗号处理），再把 `themeColor` 并入已有的主题域导入列表。

- [ ] **步骤 6：重生成类型声明并验证同步**

运行：`pnpm gen:uts-dts && pnpm check:uts-dts; echo "exit=$?"`
预期：`exit=0`，且 `git diff src/utils/theme/index.d.uts.ts` 显示新增了 `themeColor` 声明

> ⚠️ **已实测的既知结果：生成的声明是 `export declare const themeColor: any;`，不是 `Ref<string>`。**
>
> 原因：`gen-uts-dts.mjs` 的推断规则只覆盖 `ref(<字面量>)` / `new Foo()` / 纯标识符，`ref(getDefaultTheme())` 是函数调用，推断不出，按设计降级 `any` 并打印「请手工补」告警（见该脚本头部「生成策略」）。生成器里 `HANDWRITTEN` 只列了 `systemInfo`，`theme` 不在其中。
>
> **处置：接受 `any`，不手工补、不改生成器。** 依据有三：（1）红线 40 严禁手工编辑 `.d.uts.ts`；（2）`src/i18n/index.d.uts.ts:11` 有同类先例；（3）改造前 `themeColor` 走 `@/src/tabbar/helper` 这条**目录路径**、根本没有配套声明文件，TS 侧解析不到类型，`any` 严格优于「解析失败」。项目无 `ref<T>()` 显式泛型先例，按既定取舍「已验证形态优于语法优雅」不引入未验证语法。
>
> 代价：`.ts` / `.uvue` 侧读 `themeColor.value` 无 IDE 补全。若日后要修，正确方向是**增强 `gen-uts-dts.mjs` 让它能从函数声明的返回类型推断**（`getDefaultTheme(): string` 就在同文件 55 行），而不是手改产物。

- [ ] **步骤 7：检查红线 1.1.11（getter 撞名）**

运行：

```bash
grep -nE "^export const [A-Za-z_]" src/utils/theme/index.uts
grep -nE "^export function get[A-Z]" src/utils/theme/index.uts
```

预期：第二条命令**会列出 4 个既有函数**（`getDefaultTheme` / `getSystemTheme` / `getThemeTokens` / `getRootThemeStyle`），它们在改造前就存在、且本次改动前后逐一对齐（只是整体下移了几行）。**红线 1.1.11 的真正判据不是「无输出」，而是：**

1. 新增的 `themeColor` 必须在第一条命令的输出里（它生成 Kotlin 静态 getter `getThemeColor()`）；
2. 第二条命令的输出里**不得出现 `getThemeColor`**（否则与之撞名）；
3. 第二组函数数量与改造前一致（本次不新增任何 `get*`）。

> ⚠️ 原计划此处写的是「第二条命令无输出」——**该预期本身是错的**，改造前就不成立。以本节的三条判据为准。
>
> 另注：`getRootThemeStyle(themeColor: string, ...)` 里的 `themeColor` 是**函数参数**，与顶层 `themeColor` 不是一回事，不构成冲突。

- [ ] **步骤 8：断言导出面减少 1 个符号**

运行：`node scripts/check-tabbar-surface.mjs --expect 40; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`（`themeColor` 已不在 tabbar 门面上）；并核对 `已移除：` 行恰为以下集合（基线始终是改造前的 41 个符号，故 `已移除` 是**累计**口径，顺序以脚本输出为准）：`themeColor`

- [ ] **步骤 9：H5 编译验证**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`。出现的 `TS2305 resolveEasycom` 属于既存噪声，只要数量与基线相当即可

- [ ] **步骤 10：Commit**

```bash
git add src/utils/theme/index.uts src/utils/theme/index.d.uts.ts src/store/vapor/app.ts src/store/vdom/app.uts src/tabbar/helper/store.uts src/tabbar/ui/template.uvue src/tabbar/ui/default/TabbarItem.uvue src/tabbar/ui/capsule/index.uvue
git commit -m "refactor: themeColor 迁入主题域，解开 store 与 tabbar 的双向依赖"
```

---

#### 任务 1 复审留档（已记录，本次**不实施**）

规格审查与代码质量审查均已通过。质量审查发现一处**本次重构范围之外**的既有问题，记录备查，**不要在任务 2-8 里顺手处理**（本重构的硬性非目标是「不改任何运行时行为」）：

**「当前激活主题色」的三份重复且兜底分支不可达。**

`src/tabbar/ui/template.uvue:132`、`ui/default/TabbarItem.uvue:38`、`ui/capsule/index.uvue:54` 三处字面完全相同：

```uts
return themeColor.value.length > 0 ? themeColor.value : appStore.state.theme;
```

三点使它构成实质问题而非无害重复：

1. 已经在漂移——三份的说明注释已不一致（前两处是完整描述，`capsule` 那份只剩「当前激活的主题色」）。
2. **兜底分支实际不可达**：`getDefaultTheme()` 永不为空（`src/utils/theme/index.uts` 内有 `'#37c2bc'` 兜底），且写入方向成对出现（`store/vapor/app.ts` 与 `store/vdom/app.uts` 每次写 `themeColor.value` 都同步写 `state.theme`），故 `themeColor.value` 与 `state.theme` 恒等；能让它进兜底分支的条件（`themeColor.value` 为空串）成立时兜底值同样是空串。
3. 于是三份都是「重复的死逻辑」。

**建议的收敛方向**（若日后要做）：在主题域导出一个 `activeThemeColor` 的 `computed<string>`，三处消费方收敛为一次导入，顺带删掉不可达兜底。改动落在 `src/utils/theme/index.uts` + 3 个组件，规模与任务 1 相当。**不要**把它做成 `ThemeUtils` 类的 getter——该类门面其余方法一律返回值类型（`string` / `boolean`），返回 `Ref` 会破坏其一致性。

---

### 任务 2：消费者 import 路径归一（**前置**，原任务 6）

> 🚨 **本任务由原「任务 6」前置而来。** 它必须在**任何符号搬出 `helper/index.uts` 之前**完成，否则后续每一步的「H5 编译通过」断言都无法成立。

**为什么必须前置**：`src/tabbar/helper/index.uts` 被多处**深引用**。一旦某个符号搬进 `helper/` 下的新叶子文件，指向 `helper` 的深引用立刻断掉。而导出面脚本只遍历门面的 `export *` 图，**完全看不见深引用**，所以它一直是绿的——这个洞是实测出来的，不是推测。

实测证据（把任务 3 的改动应用后跑 `pnpm build:h5`）：

```text
[uts] .../src/tabbar/tabbar.uvue: "tabbarType" is not exported by ".../src/tabbar/helper/index.uts"
项目 unibestX 编译失败。
```

同一份改动在**基线**（未搬家）上 exit 0、0 条非噪声 error；搬家后新增 4 条 error。原计划把归一排在最后，等于让任务 3、4、5、6 各自带着一个编译不过的中间态。

**为什么前置是安全的**：门面 `src/tabbar/index.uts` 当前 `export *` 了 `./config`、`./helper`、`./types`，下表**全部 12 处**所需的符号现在就能从门面拿到。归一化只改 import 路径字符串、不动具名导入列表，因此**对门面导出面零影响**——阶梯值 41 → 40 保持不变。

**文件：** 见下方清单，全部改为 `@/src/tabbar`

- [ ] **步骤 1：逐个替换 import 路径**

| 文件 | 现状 | 改为 |
| --- | --- | --- |
| `App.uvue:4` | `from './src/tabbar/helper'` | `from '@/src/tabbar'` |
| `App.ku.uvue:25` | `from '@/src/tabbar/helper/index.uts'` | `from '@/src/tabbar'` |
| `src/layouts/navbar.uvue:56` | `from '@/src/tabbar/helper'` | `from '@/src/tabbar'` |
| `src/sub/auth/login.uvue:20` | `from '../../tabbar/helper'` | `from '@/src/tabbar'` |
| `src/pages/me/views/MeView.uvue:49` | `from '@/src/tabbar/helper'` | `from '@/src/tabbar'` |
| `src/router/interceptor.uts:2` | `from '../tabbar/helper/index.uts'` | `from '@/src/tabbar'` |
| `src/utils/i18n/index.uts:2` | `from '../../tabbar/helper/index.uts'` | `from '@/src/tabbar'` |
| `src/tabbar/tabbar.uvue:14` | `from './helper'` | `from '@/src/tabbar'` |
| `src/tabbar/components/TabContent.uvue:11` | `from '@/src/tabbar/helper'` | `from '@/src/tabbar'` |
| `src/tabbar/ui/default/index.uvue:13` | `from '../../helper'` | `from '@/src/tabbar'` |
| `src/tabbar/ui/default/TabbarItem.uvue:3` | `from '../../helper'` | `from '@/src/tabbar'` |
| `src/tabbar/ui/capsule/index.uvue:14` | `from '../../helper'` | `from '@/src/tabbar'` |

只改路径字符串，**不要动具名导入列表**。

> ⚠️ **唯一的例外**：若某个文件**本来就有一条**指向 `@/src/tabbar` 的值导入，归一后同一文件会出现两条指向同一模块的**值导入**，触发 `import/no-duplicates`（error，不是 warning）。此时必须把两条**合并成一条**，符号一个不增不减。
>
> 本次实测只有 `App.ku.uvue` 命中：它第 20 行原本就是 `from '@/src/tabbar'`（导入 `customTabbarEnable, isPageTabbar, syncCurIdxByCurrentPage`），第 25 行归一后 `selectedTabbarStrategy` 也来自同一模块。合并结果：
>
> ```uts
> import { customTabbarEnable, isPageTabbar, selectedTabbarStrategy, syncCurIdxByCurrentPage } from '@/src/tabbar';
> ```
>
> 其余 11 个文件不受影响。**已用对照实验确认**：把改造前的 `App.ku.uvue` 单独跑同一条规则是 exit 0、零输出，所以这 2 条 error 确属本次改动新引入。项目里另有 16 处「同文件重复导入同一模块」的既有情形，**全部是 `import type` + 值导入的配对**（该规则允许），只有 `App.ku.uvue` 是值导入重复。

> `App.uvue` 与 `App.ku.uvue` 是仓库根目录的**手工维护、已被 git 跟踪**的源文件（不是生成物），且都**不在**原规格 §3.4 的归一化表里——本表已补上。`App.uvue` 原本清一色用 `./src/...` 相对路径，这里改成 `@/` 是为了统一；根目录文件用 `@/src/tabbar` 有现成先例（`App.ku.uvue:20`、`src/pages/index/index.uvue:20` 都是这么写的，且构建通过）。
>
> `src/tabbar/ui/template.uvue` 的入口本就是 `@/src/tabbar`，无需改动。

- [ ] **步骤 2：确认已无残留旧路径**

运行：

```bash
grep -rn "tabbar/helper\|from './helper'\|from '../../helper'" src/ App.uvue App.ku.uvue --include='*.uts' --include='*.uvue' --include='*.ts'
```

预期：**唯一命中是 `src/tabbar/index.uts` 的 `export * from './helper';`**。那是门面自身的聚合行，要到**任务 3**（目录更名）才改掉、**任务 7** 才移除，本步骤不要动它。除此之外不应有任何输出。

> **已全仓扫过、确认无需改动、也不要顺手改的两处**（实施前用 `grep -rn "tabbar" --include='*.uts' --include='*.uvue' --include='*.ts'` 排除 `node_modules/`、`unpackage/` 复核过）：
>
> - `plugins/vite-plugin-tabbar-views.ts:170` 的 `import { curIdx, onTabShow } from '@/src/tabbar';`——它在一段**模板字符串**里（插件用反引号拼出的 `viewTemplate`），是自动生成 `View.uvue` 时写进产出文件的代码，不是插件自身的导入语句。路径本就是门面路径，**正确，勿动**。
> - `src/utils/systemInfo/index.uts:2` 的 `import { customTabbarConfig } from '../../tabbar/config.uts';`——指向 `config.uts`，本次**不搬家**（规格 §2 明确把这条同模块环形依赖列为非目标）。**勿动**。
>
> `src/pages/index/index.uvue:18-19` 直接导入 `TabViews.uvue` 与 `tabbar.uvue` 这两个**组件**，与导出面无关，同样勿动。

- [ ] **步骤 3：确认导出面一个符号都没变**

运行：`node scripts/check-tabbar-surface.mjs --expect 40; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`，且 `已移除：` 行仍恰为 `themeColor` 一个符号。

**归一是纯路径改动，导出面必须纹丝不动**。若数量变了，说明你误改了具名导入列表；若 `已移除：` 集合变了，说明门面被动了。

- [ ] **步骤 4：H5 编译验证**

运行：`pnpm build:h5 2>&1 | grep -aE "编译成功|打包成功|编译失败"`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`。既存的 `TS2305 resolveEasycom` 属噪声，只要数量与基线相当即可

- [ ] **步骤 5：Lint 无新增问题**

对上面 12 个文件逐个跑（或一次列出全部 12 个路径），**不要跑 `pnpm lint` / `eslint .` 这类全仓命令**。⚠️ 本环境设了 `VSCODE_PID`/`VSCODE_CWD`，antfu 配置会进 editor 分支关掉部分规则导致假绿，必须带 `env -u` 前缀：

```bash
env -u VSCODE_PID -u VSCODE_CWD -u VSCODE_ESM_ENTRYPOINT pnpm eslint <12 个文件路径>
```

预期：exit 0。若出现 `unused-imports/no-unused-vars` 指向本次改动的文件，说明某处导入已失效，需清理

- [ ] **步骤 6：Commit**

```bash
git add App.uvue App.ku.uvue src/layouts/navbar.uvue src/sub/auth/login.uvue src/pages/me/views/MeView.uvue src/router/interceptor.uts src/utils/i18n/index.uts src/tabbar/tabbar.uvue src/tabbar/components/TabContent.uvue src/tabbar/ui/default/index.uvue src/tabbar/ui/default/TabbarItem.uvue src/tabbar/ui/capsule/index.uvue
git commit -m "refactor: 统一 tabbar 模块对外导入入口为 @/src/tabbar"
```

> ⚠️ **不要写 `git add -A src`**（那是原任务 6 的写法，已废弃）：`src/tabbar/types.uts` 有用户未提交的改动，`-A` 会把它一并扫进提交。必须逐个写出上表 12 条路径。

---

### 任务 3：把内部实现目录 `helper/` 更名为 `internal/`

**为什么单独成一个任务**：更名是**纯路径移动**，与「搬符号」正交。独立成一个提交才能单独回退，也避免把「改名」和「搬家」混进同一个 diff。

**为什么必须排在所有搬家之前**：理由与任务 2 同源。改完任务 2 之后，全仓对 `./helper` 的引用**只剩门面那一行**，此刻更名就是一次 `git mv` 加一行门面改动。若等搬完再改，`helper/` 与 `internal/` 会同时存在，中间态更乱，且每个搬家任务的 diff 里都会混进一堆路径前缀变化。

**为什么用 `internal` 这个名字**：`src/tabbar/helper` 是**全项目唯一的 `helper/` 目录**（已 `find` 全仓确认），所以更名不破坏任何既有惯例。而这 5 个叶子文件——`strategy`（策略解析）、`metrics`（尺寸计算）、`state`（状态）、`navigate`（跳转）、`native`（原生桥接）——装的是 tabbar 模块的**实现主体**，不是「辅助工具」，`helper` 名不副实。`internal` 则明说「这是模块内部实现、请走门面」，与本次「把 8 个符号从对外面收回」的目标同构；同时避开了与全局 `src/utils/` 撞名（那会让叶子文件里出现「utils 引用 @/src/utils/…」这种读起来含糊的导入）。

**文件：**
- 移动：`src/tabbar/helper/` → `src/tabbar/internal/`（其中含 `index.uts`、`store.uts`）
- 修改：`src/tabbar/index.uts`（门面那一行）
- 修改：`README.md:590`（文档小节标题引用了旧目录名）

> 📌 **已确认：没有任何构建配置硬编码 `tabbar/helper`**（任务 3 派发前实测）。`tsconfig.json`、`vite.config.ts`、`package.json`、`pages.json`、`manifest.json`、`plugins/`、`scripts/` 中**一次 `helper` 都没有出现**（`package.json` 的 `@uni-helper/*` 与 `eslint.config.mjs` 的 `uniHelper` 是 npm scope，非路径）。全仓对 `tabbar/helper` 的其余命中只有三类：构建产物里的源码路径日志串（下次构建即重写）、`docs/` 下本次重构自己的文档、以及 `README.md:590`。**所以更名不会静默打断任何构建链路**，实施者无需重新验证这一点。

- [ ] **步骤 1：移动目录**

运行：`git mv src/tabbar/helper src/tabbar/internal`

> **相对导入无需改动**：`internal/` 与 `helper/` 平级，目录深度不变，所以两个文件里的 `./store`、`../config`、`../types`、`../types.uts` 等相对路径全部继续有效。

- [ ] **步骤 2：改门面那一行**

`src/tabbar/index.uts` 现在是：

```uts
export * from './config';
export * from './helper';
export * from './types';
```

把中间那行改为 `export * from './internal';`：

```uts
export * from './config';
export * from './internal';
export * from './types';
```

- [ ] **步骤 3：同步 README 里的小节标题**

`README.md:590` 现为：

```markdown
#### 5. 统一路由跳转与安全 API（`src/tabbar/helper`）
```

改为：

```markdown
#### 5. 统一路由跳转与安全 API（`src/tabbar`）
```

> 这里写门面路径而不是 `internal`：该小节列举的 5 个 API 是**对使用者公开的入口**，消费者本就该从 `@/src/tabbar` 导入。写成 `internal` 反而在文档里暗示「请深入模块内部引用」，与本次「收回内部实现、只留门面」的目标相悖。

- [ ] **步骤 4：确认旧路径已彻底消失**

运行：

```bash
grep -rn "tabbar/helper\|from './helper'\|from '../../helper'" src/ App.uvue App.ku.uvue README.md --include='*.uts' --include='*.uvue' --include='*.ts' --include='*.md'
```

预期：**无输出**。（任务 2 之后唯一残留的门面聚合行已在步骤 2 改掉，README 那处在步骤 3 改掉，所以这次连一行命中都不该有。）

> 扫描范围含 `README.md`：步骤 3 的改动就是为堵住这个漏网之鱼，若不把它纳入本步骤的 grep，这条检查就证不了「旧路径已彻底消失」。

- [ ] **步骤 5：确认导出面一个符号都没变**

运行：`node scripts/check-tabbar-surface.mjs --expect 40; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`，且**肉眼核对** `已移除：` 行仍恰为 `themeColor` 一个符号。

> 更名对导出面必须是**完全透明**的。脚本按门面的 `export *` 动态解析模块路径、没有硬编码任何目录名，所以它能忠实反映这次更名有没有漏掉某条转发。
>
> ⚠️ 老规矩：脚本只校验「总数」与「是否有新增」，**不校验移除的是不是预期的那几个**。光看 `✓` 不算通过。

- [ ] **步骤 6：H5 编译验证**

运行：`pnpm build:h5 2>&1 | grep -aE "编译成功|打包成功|编译失败"`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`。既存的 `TS2305 resolveEasycom` 属基线噪声，数量与基线相当即可。

- [ ] **步骤 7：Lint 无新增问题**

```bash
env -u VSCODE_PID -u VSCODE_CWD -u VSCODE_ESM_ENTRYPOINT pnpm eslint src/tabbar/index.uts src/tabbar/internal/index.uts src/tabbar/internal/store.uts
```

预期：exit 0

- [ ] **步骤 8：Commit**

`git mv` 已自动暂存了目录改名，只需补上步骤 2、步骤 3 改过的两个文件：

```bash
git add src/tabbar/index.uts README.md
git commit -m "refactor: 把 tabbar 内部实现目录 helper 更名为 internal"
```

---

### 任务 4：拆出 `internal/strategy.uts`

**文件：**
- 创建：`src/tabbar/internal/strategy.uts`
- 修改：`src/tabbar/internal/index.uts`（摘掉整段策略代码）
- 修改：`src/tabbar/index.uts`（门面加一行）

- [ ] **步骤 1：创建 `src/tabbar/internal/strategy.uts`**

```uts
import { customTabbarConfig } from '../config.uts';

/**
 * Tabbar 策略映射结构类型
 */
export type TabbarStrategyType = {
  NO_TABBAR: number;
  NATIVE_TABBAR: number;
  CUSTOM_TABBAR_WITH_NATIVE: number;
  CUSTOM_TABBAR_WITHOUT_NATIVE: number;
  SINGLE_PAGE_TABBAR: number;
  CUSTOM_TABBAR: number;
};

/**
 * tabbar 选择的策略（支持 5 种模式）
 * 0: NO_TABBAR (无 tabbar)
 * 1: NATIVE_TABBAR (原生 tabbar，pages.json 自动生成配置，带页面状态缓存，使用 uni.switchTab)
 * 2: CUSTOM_TABBAR_WITH_NATIVE (【带缓存】自定义 tabbar，pages.json custom:true，隐藏原生，保留页面状态缓存，使用 uni.switchTab)
 * 3: CUSTOM_TABBAR_WITHOUT_NATIVE (【不缓存】纯自定义 tabbar，pages.json 无 tabBar 节点，使用 uni.redirectTo，每次切换重新加载页面)
 * 4: SINGLE_PAGE_TABBAR (【单页保活零闪烁】单页面容器切换 TabBar：无跨页面路由跳转，零闪烁，页面状态天然保活，参考 rice-ui)
 */
export const TABBAR_STRATEGY_MAP: TabbarStrategyType = {
  NO_TABBAR: 0,
  NATIVE_TABBAR: 1,
  CUSTOM_TABBAR_WITH_NATIVE: 2,
  CUSTOM_TABBAR_WITHOUT_NATIVE: 3,
  SINGLE_PAGE_TABBAR: 4,
  CUSTOM_TABBAR: 2
};

/** 解析环境变量中的 Tabbar 模式 */
export function parseTabbarStrategy(): number {
  const envMode: string = `${import.meta.env.VITE_TABBAR_MODE ?? '1'}`.trim();
  if (envMode == '0' || envMode == 'NO_TABBAR') {
    return TABBAR_STRATEGY_MAP.NO_TABBAR;
  }
  if (envMode == '2' || envMode == 'CUSTOM_TABBAR' || envMode == 'CUSTOM_TABBAR_WITH_NATIVE') {
    return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;
  }
  if (envMode == '3' || envMode == 'CUSTOM_TABBAR_WITHOUT_NATIVE') {
    return TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
  }
  if (envMode == '4' || envMode == 'SINGLE_PAGE_TABBAR') {
    return TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR;
  }
  return TABBAR_STRATEGY_MAP.NATIVE_TABBAR;
}

/** 当前激活的 Tabbar 策略 */
export const selectedTabbarStrategy: number = parseTabbarStrategy();

/** 是否为单页面容器 TabBar 模式（模式 4 为 true） */
export const isSinglePageTabbar: boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR;

/** 是否使用原生 tabbar（模式 1 为 true） */
export const isNativeTabbar: boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NATIVE_TABBAR;

/** 是否需要隐藏原生 tabbar（模式 2 为 true） */
export const needHideNativeTabbar: boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE;

/** 当前配置的 TabBar UI 风格形态（如 'capsule' | 'default'，从 config.uts 中读取） */
export const tabbarType: string = customTabbarConfig.type ?? 'default';

/** 是否启用了自定义 TabBar（模式 2 或 3 为 true）——根组件 App.ku.uvue 用它决定是否渲染 <Tabbar> */
export const customTabbarEnable: boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITH_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE;
```

> 🚨 **`customTabbarEnable` 必须保留为导出，不要删。** 原规格 §1.3.3 称这 5 个布尔「全项目零引用」——**该判断有误**：`App.ku.uvue`（仓库根目录手工维护、已被 git 跟踪的根组件）在第 14 行模板里用 `v-if="customTabbarEnable && isCurrentPageTabbar"`，第 20 行从门面具名导入它。实测删掉它会直接编译失败。已实测确认只有它一个有引用，其余 4 个确实零引用。
>
> **有意删除的 4 个符号（规格 §3.1 的「收回非导出」在此落地为「删除」）**：
> `tabbarCacheEnable`、`hasNativeTabbarConfig`、`isNoTabbar`、`isCapsuleTabbar`。
> 全项目零引用（已逐个 grep 实测）；保留为非导出常量只会产出 4 条 `unused-imports/no-unused-vars` 警告（已实测为 warning 而非 error），而本项目把构建警告当缺陷看。策略矩阵的语义仍完整保留在 `TABBAR_STRATEGY_MAP` 的文档注释与 `config.uts` 的说明里。
> **若使用者希望保留这些语义的对外可见性，这是本计划中唯一一处需要回退的决定**：把它们恢复为 `export const` 即可，后续各步的期望符号数各 +4（最终 37）。

- [ ] **步骤 2：从 `src/tabbar/internal/index.uts` 摘掉整段策略代码**

删除从 `/** Tabbar 策略映射结构类型 */` 起、到 `export const hasNativeTabbarConfig: boolean = ...;` 止的**全部内容**（含 `TabbarStrategyType`、`TABBAR_STRATEGY_MAP`、`parseTabbarStrategy`、`selectedTabbarStrategy`、`tabbarCacheEnable`、`customTabbarEnable`、`isSinglePageTabbar`、`isNoTabbar`、`tabbarType`、`isCapsuleTabbar`、`needHideNativeTabbar`、`isNativeTabbar`、`hasNativeTabbarConfig`）。

> ⚠️ **摘除范围的准确边界（改造前实测行号）：第 17 行 `/** Tabbar 策略映射结构类型 */` 至第 92 行 `export const hasNativeTabbarConfig` 止，共 13 个 `export`。**
>
> 初版此处把终点写成「到 `tabbarType` 止」是**错的**——`isCapsuleTabbar`(83)、`needHideNativeTabbar`(86)、`isNativeTabbar`(89)、`hasNativeTabbarConfig`(92) 都在 `tabbarType`(80) **之后**。照那个锚点做会留下半截：这几个派生态仍在引用已被删掉的 `TABBAR_STRATEGY_MAP`，**直接编译失败**。以上面枚举的 13 个符号为准，不要用行号锚点。

**然后补上该文件残留代码所需的新导入**。摘掉策略段后，文件里剩下的跳转与桥接代码（`switchTabbar`、`handleTabbarClick`、`initNativeMidButtonTap`）仍在引用策略符号，必须改从新文件导入——**漏掉这一步会直接编译失败**。在 import 区新增：

```uts
import { isNativeTabbar, isSinglePageTabbar, selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from './strategy.uts';
```

> 该文件此时用到的策略符号逐个核对如下，四者缺一不可：
> - `initNativeMidButtonTap` → `isNativeTabbar`
> - `switchTabbar` → `isSinglePageTabbar`、`selectedTabbarStrategy`、`TABBAR_STRATEGY_MAP`
> - `handleTabbarClick` → `isSinglePageTabbar`
>
> `import { watch } from 'vue';` 与 `import { customTabbarConfig } from '../config';` **本步骤不要删**：前者供仍在文件内的 `onTabShow` 使用（**任务 6** 才随 `onTabShow` 一并迁入 `state.uts`，届时本文件的 `watch` 导入才可删），后者供 `initNativeMidButtonTap` 读取 `midButton`。

- [ ] **步骤 3：门面加一行**

`src/tabbar/index.uts` 改为：

```uts
export * from './config';
export * from './internal';
export * from './internal/strategy.uts';
export * from './types';
```

> 每一符号仍只有**一条**可达路径（策略符号已不在 `internal/index.uts` 里），不构成红线 21 的多层转发。

- [ ] **步骤 4：断言导出面只少 5 个符号**

运行：`node scripts/check-tabbar-surface.mjs --expect 36; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`；并核对 `已移除：` 行恰为以下集合（**累计**口径——含任务 1 已迁出的 `themeColor`，共 5 个，顺序以脚本输出为准）：`hasNativeTabbarConfig`、`isCapsuleTabbar`、`isNoTabbar`、`tabbarCacheEnable`、`themeColor`

> `customTabbarEnable` **不在**这个集合里——它被保留为导出。

- [ ] **步骤 5：H5 编译验证**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`

- [ ] **步骤 6：Commit**

```bash
git add src/tabbar/internal/strategy.uts src/tabbar/internal/index.uts src/tabbar/index.uts
git commit -m "refactor: 拆出 tabbar 策略判定为独立叶子文件，删除 4 个零引用派生死常量"
```

---

### 任务 5：拆出 `internal/metrics.uts`

**文件：**
- 创建：`src/tabbar/internal/metrics.uts`
- 修改：`src/tabbar/internal/index.uts`
- 修改：`src/tabbar/index.uts`

- [ ] **步骤 1：创建 `src/tabbar/internal/metrics.uts`**

```uts
import { useAppStore } from '@/src/store';
import { getThemeTokens } from '@/src/utils/theme/index.uts';
import type { ThemeTokens } from '@/src/utils/theme/index.uts';
import { isCompilerVersionGte, safeAreaInsets, TABBAR_BASE_HEIGHT } from '@/src/utils/systemInfo/index.uts';

/** tabbar 白色底板高度（px），基准值统一引用 systemInfo 中的 TABBAR_BASE_HEIGHT */
export const TABBAR_HEIGHT: number = TABBAR_BASE_HEIGHT;

/** tabbar 容器总高度（包含鼓包突出的部分，px） */
export const TABBAR_CONTAINER_HEIGHT: number = 80;

/** 亮 / 暗主题 token（与 theme.json tabBar 配置同步） */
export const themeTokens = computed((): ThemeTokens => {
  return getThemeTokens(useAppStore().state.isDark);
});

/** 安全区底部高度，从全局 systemInfo 工具中响应式读取 */
export const safeAreaBottom = computed<number>((): number => {
  const insets = safeAreaInsets.value;
  if (insets != null) {
    return insets.bottom;
  }
  return 0;
});

/** 是否为 5.25 及以上版本编译器（仅在 5.25 及以上 H5 启用 absolute 脱离文档流） */
export const isVersionGte525 = computed<boolean>((): boolean => {
  // #ifdef H5
  return isCompilerVersionGte('5.25');
  // #endif
  // #ifndef H5
  return false;
  // #endif
});

/** 占位块高度：统一为 50 + 底部安全区，占据正常文档流防止遮挡滚动内容 */
export const tabbarPlaceholderHeight = computed<number>((): number => {
  return TABBAR_HEIGHT + safeAreaBottom.value;
});
```

> `computed` 在原文件中即为框架全局（未从 vue 显式导入），此处沿用同一写法，避免引入任何语义差异。

- [ ] **步骤 2：从 `src/tabbar/internal/index.uts` 摘掉整段尺寸/主题计算**

删除从 `/** tabbar 白色底板高度（px）...` 起、到 `tabbarPlaceholderHeight` 计算属性结束的整段（含 `TABBAR_HEIGHT`、`TABBAR_CONTAINER_HEIGHT`、`themeTokens`、`safeAreaBottom`、`isVersionGte525`、`tabbarPlaceholderHeight`）。

同时删除该文件里已无人使用的导入：

```uts
import { useAppStore } from '@/src/store';
import { getThemeTokens } from '@/src/utils/theme/index.uts';
import type { ThemeTokens } from '@/src/utils/theme/index.uts';
import { isCompilerVersionGte, safeAreaInsets, TABBAR_BASE_HEIGHT } from '@/src/utils/systemInfo/index.uts';
```

保留 `import { customTabbarConfig } from '../config';`（中间按钮相关代码仍在用）与 `import { watch } from 'vue';`（`onTabShow` 仍在）。

- [ ] **步骤 3：门面加一行**

`src/tabbar/index.uts` 改为：

```uts
export * from './config';
export * from './internal';
export * from './internal/metrics.uts';
export * from './internal/strategy.uts';
export * from './types';
```

- [ ] **步骤 4：断言导出面数量不变**

运行：`node scripts/check-tabbar-surface.mjs --expect 36; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`；并核对 `已移除：` 行恰为以下集合（**累计口径，与任务 4 相同**——本步不收回任何符号，故 `已移除：` 行仍然存在且为这 5 个，**不是空**；顺序以脚本输出为准）：`hasNativeTabbarConfig`、`isCapsuleTabbar`、`isNoTabbar`、`tabbarCacheEnable`、`themeColor`；且 `新增：` 一行不出现

- [ ] **步骤 5：H5 编译验证**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`

- [ ] **步骤 6：Commit**

```bash
git add src/tabbar/internal/metrics.uts src/tabbar/internal/index.uts src/tabbar/index.uts
git commit -m "refactor: 拆出 tabbar 尺寸与视口计算为独立叶子文件"
```

---

### 任务 6：`store.uts` 迁为 `state.uts`

**文件：**
- 创建：`src/tabbar/internal/state.uts`
- 删除：`src/tabbar/internal/store.uts`
- 修改：`src/tabbar/internal/index.uts`（摘掉 store 转发、store 导入与 `onTabShow`）
- 修改：`src/tabbar/index.uts`

- [ ] **步骤 1：创建 `src/tabbar/internal/state.uts`**

```uts
import { watch } from 'vue';
import type { CustomTabBarItem, CustomTabBarItemBadge, TabBarConfig } from '../types.uts';
import { customTabbarConfig } from '../config.uts';
import { cleanPath, getCurrentPath, isSamePath } from '@/src/utils/route/index.uts';

/** 组合 list 与 midButton 供自定义 TabBar 渲染（自动将 midButton 插入居中位置） */
function buildFullTabbarList(config: TabBarConfig): CustomTabBarItem[] {
  const result: CustomTabBarItem[] = [];
  const list = config.list;
  const mid = config.midButton;

  if (mid != null) {
    const midItem: CustomTabBarItem = {
      text: mid.text ?? 'AI',
      pagePath: mid.pagePath ?? '',
      iconType: mid.iconType ?? 'icon',
      icon: mid.icon ?? 'chatboxes',
      iconActive: mid.iconActive ?? 'chatboxes-filled',
      iconPath: mid.iconPath ?? '',
      selectedIconPath: mid.selectedIconPath ?? '',
      badge: mid.badge ?? null,
      isBulge: mid.isBulge ?? true
    };
    const half = Math.floor(list.length / 2);
    for (let i = 0; i < list.length; i++) {
      if (i == half) {
        result.push(midItem);
      }
      result.push(list[i]);
    }
    if (half >= list.length) {
      result.push(midItem);
    }
  }
  else {
    for (let i = 0; i < list.length; i++) {
      result.push(list[i]);
    }
  }
  return result;
}

/** 完整 TabBar 列表（含中间鼓包项），仅本文件内部使用 */
const customTabbarList: CustomTabBarItem[] = buildFullTabbarList(customTabbarConfig);

/**
 * tabbar 响应式列表（统一加前导 /）
 */
function normalizeList(): CustomTabBarItem[] {
  const result: CustomTabBarItem[] = [];
  for (let i = 0; i < customTabbarList.length; i++) {
    const item = customTabbarList[i];
    result.push({
      text: item.text,
      pagePath: item.pagePath.startsWith('/') ? item.pagePath : `/${item.pagePath}`,
      iconType: item.iconType,
      icon: item.icon,
      iconActive: item.iconActive,
      badge: item.badge,
      isBulge: item.isBulge
    });
  }
  return result;
}

export const tabbarList: CustomTabBarItem[] = reactive(normalizeList());

/**
 * 当前选中的 tab 索引（持久化到 storage）
 */
export const curIdx = ref(0);

/** 设置当前索引并持久化 */
export function setCurIdx(idx: number): void {
  curIdx.value = idx;
  uni.setStorageSync('app-tabbar-index', idx);
}

/** 设置某项的 badge */
export function setTabbarItemBadge(idx: number, badge: CustomTabBarItemBadge): void {
  if (tabbarList.length > idx) {
    tabbarList[idx].badge = badge;
  }
}

/** 根据给定的页面路径手动同步索引 */
export function setCurIdxByPath(path: string): void {
  const targetPath = cleanPath(path);
  for (let i = 0; i < tabbarList.length; i++) {
    if (isSamePath(tabbarList[i].pagePath, targetPath)) {
      setCurIdx(i);
      break;
    }
  }
}

/** 根据当前页面路径自动同步索引 */
export function syncCurIdxByCurrentPage(): void {
  const currentPath = getCurrentPath();
  if (currentPath.length == 0) {
    return;
  }
  setCurIdxByPath(currentPath);
}

/** 判断是否是 tabbar 页面 */
export function isPageTabbar(path: string): boolean {
  const targetPath = cleanPath(path);
  for (let i = 0; i < tabbarList.length; i++) {
    if (isSamePath(tabbarList[i].pagePath, targetPath)) {
      return true;
    }
  }
  return false;
}

/**
 * 监听指定 Tab 激活显示（当单页面模式切换到该 Tab 时触发，可用于刷新数据或重新请求接口）
 * @param index 对应 Tab 索引（0: 首页, 1: 基础, 2: 功能, 3: 我的）
 * @param callback 激活显示时的回调函数
 * @param immediate 若首次加载时当前 Tab 正好处于激活状态，是否立即执行一次（默认 false）
 */
export function onTabShow(index: number, callback: () => void, immediate: boolean = false): void {
  if (immediate && curIdx.value == index) {
    callback();
  }
  watch(curIdx, (newVal: number, oldVal: number) => {
    if (newVal == index && oldVal != index) {
      callback();
    }
  });
}
```

相对原 `store.uts` 的三处变化，均为**语义等价**或**声明收紧**：
1. `themeColor` 与 `getDefaultTheme` 已在任务 1 移除；
2. `buildFullTabbarList`、`customTabbarList` 由导出改为文件私有（全项目零外部引用）；
3. `setCurIdx`、`setTabbarItemBadge`、`syncCurIdxByCurrentPage`、`isPageTabbar`、`onTabShow` 补上 `: void` / `: boolean` 返回类型标注（原文件缺省，违反项目规范 1.1.6；补标注不改变行为）。

- [ ] **步骤 2：删除 `src/tabbar/internal/store.uts`**

运行：`git rm src/tabbar/internal/store.uts`

- [ ] **步骤 3：从 `src/tabbar/internal/index.uts` 摘掉 store 相关代码**

删除该文件中的：

```uts
import { curIdx, setCurIdx, setCurIdxByPath, tabbarList } from './store';
```

```uts
export * from './store';
```

以及 `onTabShow` 的完整定义（从 `/**` 文档注释起到函数体结束）。

**然后补上该文件残留代码所需的新导入**。文件里剩下的跳转代码仍在引用状态符号，必须改从新文件导入——**漏掉这一步会直接编译失败**。新增：

```uts
import { curIdx, setCurIdx, setCurIdxByPath, tabbarList } from './state.uts';
```

> 残留代码的引用点：`switchTabbar` → `setCurIdxByPath`；`handleTabbarClick` → `curIdx`、`setCurIdx`、`tabbarList`。四者缺一不可。
>
> 同时确认 `import { watch } from 'vue';` 已可删除：`onTabShow` 是本文件中唯一使用 `watch` 的地方，它随本步骤迁入 `state.uts`（`state.uts` 自己已导入 `watch`）。删除后 `grep -n "watch" src/tabbar/internal/index.uts` 应无输出。

- [ ] **步骤 4：门面加一行、换一行**

`src/tabbar/index.uts` 改为：

```uts
export * from './config';
export * from './internal';
export * from './internal/metrics.uts';
export * from './internal/state.uts';
export * from './internal/strategy.uts';
export * from './types';
```

- [ ] **步骤 5：确认旧 store.uts 已无任何引用**

运行：`grep -rn "internal/store\|from './store'" src/ --include='*.uts' --include='*.uvue' --include='*.ts'`
预期：无输出

> 此处**不要**把 `tabbar/internal` 一并放进检查模式：消费者在任务 2 就已全部改走 `@/src/tabbar`，此刻残留的 `tabbar/internal` 字样**只剩门面自身那一行 `export * from './internal';`**（以及本文件为了兼容而保留的 `./state.uts` 导入）。`internal/index.uts` 本身要到**任务 7** 才删除，那一刻才做 `tabbar/internal` 的残留检查，属任务 7 步骤 2 的范围。

- [ ] **步骤 6：断言导出面少 2 个符号**

运行：`node scripts/check-tabbar-surface.mjs --expect 34; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`（`buildFullTabbarList`、`customTabbarList` 已收回）；并核对 `已移除：` 行恰为以下集合（**累计**口径，共 7 个，顺序以脚本输出为准）：`buildFullTabbarList`、`customTabbarList`、`hasNativeTabbarConfig`、`isCapsuleTabbar`、`isNoTabbar`、`tabbarCacheEnable`、`themeColor`

- [ ] **步骤 7：H5 编译验证**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`

- [ ] **步骤 8：Commit**

```bash
git add src/tabbar/internal/state.uts src/tabbar/internal/store.uts src/tabbar/internal/index.uts src/tabbar/index.uts
git commit -m "refactor: store.uts 迁为 state.uts 并收拢列表派生内部化"
```

---

### 任务 7：拆出 `navigate.uts` 与 `native.uts`，删除 `internal/index.uts`

**文件：**
- 创建：`src/tabbar/internal/navigate.uts`、`src/tabbar/internal/native.uts`
- 删除：`src/tabbar/internal/index.uts`
- 修改：`src/tabbar/index.uts`

- [ ] **步骤 1：创建 `src/tabbar/internal/navigate.uts`**

```uts
import { curIdx, setCurIdx, setCurIdxByPath, tabbarList } from './state.uts';
import { isNativeTabbar, isSinglePageTabbar, selectedTabbarStrategy, TABBAR_STRATEGY_MAP } from './strategy.uts';
import { customTabbarConfig } from '../config.uts';

/** 中间鼓包 tabbarItem 点击事件 */
function handleClickBulge(url: string = '/src/pages/ai/ai'): void {
  uni.navigateTo({
    url
  });
}

/**
 * 根据当前 TabBar 模式安全跳转到指定的 Tabbar 页面
 * - 模式 1 / 模式 2 (具备原生底座配置)：调用 uni.switchTab，保留页面缓存
 * - 模式 0 / 模式 3 (无原生配置)：调用 uni.redirectTo
 * 内部自动同步激活索引
 */
export function switchTabbar(url: string): void {
  setCurIdxByPath(url);
  if (isSinglePageTabbar) {
    try {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const currentRoute = pages[pages.length - 1].route;
        const normalizedRoute = currentRoute.startsWith('/') ? currentRoute : `/${currentRoute}`;
        if (normalizedRoute == '/pages/index/index' || normalizedRoute == '/src/pages/index/index') {
          return;
        }
      }
    }
    catch { }
    uni.redirectTo({
      url: '/src/pages/index/index',
      fail: (_err: any) => {
        uni.reLaunch({
          url: '/src/pages/index/index'
        });
      }
    });
    return;
  }
  if (selectedTabbarStrategy == TABBAR_STRATEGY_MAP.CUSTOM_TABBAR_WITHOUT_NATIVE || selectedTabbarStrategy == TABBAR_STRATEGY_MAP.NO_TABBAR) {
    uni.redirectTo({
      url,
      fail: (_err: any) => {
        uni.navigateTo({
          url,
          fail: () => {
            uni.showToast({
              title: '沙盒调试中：目标页面未编译',
              icon: 'none'
            });
          }
        });
      }
    });
  }
  else {
    uni.switchTab({
      url,
      fail: (_err: any) => {
        uni.redirectTo({
          url,
          fail: () => {
            uni.showToast({
              title: '沙盒调试中：目标页面未编译',
              icon: 'none'
            });
          }
        });
      }
    });
  }
}

/** 路由切换节流锁，防止快速连击导致原生视图切换重叠错乱 */
let isSwitchingTab = false;

/** 点击 tab 切换路由跳转逻辑 */
export function handleTabbarClick(index: number): void {
  if (index == curIdx.value || isSwitchingTab) {
    return;
  }
  const list = tabbarList;
  if (list.length <= index) {
    return;
  }
  if (isSinglePageTabbar) {
    setCurIdx(index);
    return;
  }
  if (list[index].isBulge) {
    handleClickBulge(list[index].pagePath.length > 0 ? list[index].pagePath : '/src/pages/ai/ai');
    return;
  }
  isSwitchingTab = true;
  const url = list[index].pagePath;
  setCurIdx(index);
  switchTabbar(url);
  setTimeout(() => {
    isSwitchingTab = false;
  }, 250);
}

/**
 * 初始化原生 TabBar 中间按钮 (midButton) 点击监听
 * 仅在原生 TabBar 模式 (模式 1) 且配置了 midButton 时自动注册
 */
export function initNativeMidButtonTap(): void {
  if (!isNativeTabbar || customTabbarConfig.midButton == null) {
    return;
  }
  // #ifndef MP-WEIXIN
  try {
    const mid = customTabbarConfig.midButton;
    const targetUrl = (mid != null && mid.pagePath != null && mid.pagePath!.length > 0)
      ? mid.pagePath!
      : '/src/pages/ai/ai';
    uni.onTabBarMidButtonTap(() => {
      handleClickBulge(targetUrl);
    });
  }
  catch (e) {
    console.warn('onTabBarMidButtonTap registration error', e);
  }
  // #endif
}
```

- [ ] **步骤 2：创建 `src/tabbar/internal/native.uts`**

```uts
import { isCompilerVersionGte } from '@/src/utils/systemInfo/index.uts';

/**
 * 隐藏系统原生 TabBar 并根据编译器版本动态适配 H5 底部容器
 */
export function safeHideNativeTabBar(): void {
  // #ifdef H5
  try {
    if (typeof document !== 'undefined' && document.getElementById('hide-native-tabbar-style') == null) {
      const style = document.createElement('style');
      style.id = 'hide-native-tabbar-style';
      if (isCompilerVersionGte('5.25')) {
        style.innerHTML = 'uni-tabbar, .uni-tabbar, .uni-tabbar-bottom, .uni-tabbar__icon, .uni-tabbar__label { display: none !important; } :root { --window-bottom: 0px !important; } uni-page-wrapper { height: 100% !important; } uni-page-body { padding-bottom: 0px !important; }';
      }
      else {
        // 5.24 及以下版本（与 uniX-rice-ui 100% 相同原版逻辑）
        style.innerHTML = 'uni-tabbar, .uni-tabbar, .uni-tabbar-bottom, .uni-tabbar__icon, .uni-tabbar__label { display: none !important; }';
      }
      document.head.appendChild(style);
    }
  }
  catch { }
  // #endif

  // #ifndef MP-WEIXIN
  try {
    uni.hideTabBar({
      animation: false,
      fail: (err: any) => {
        console.log('hideTabBar fail: ', err);
      }
    });
  }
  catch { }
  // #endif
}
```

- [ ] **步骤 3：删除 `src/tabbar/internal/index.uts`**

本步骤之前，该文件里最后两块代码（跳转、平台桥接）已被移入新文件，它只剩文件头注释、一串**已经失效的 import 语句**（`watch`、`./state.uts`、`./strategy.uts`、`../config`）与空行。

先确认其中已不含任何导出语句：

运行：`grep -nE "^export" src/tabbar/internal/index.uts`
预期：无输出。若仍有输出，说明前面步骤漏删，先补齐再继续。

再确认残留的 import 已无人使用（这些导入指向的文件依然存在，因此不会报错，只会在 lint 里表现为 unused）：

运行：`grep -nE "^import" src/tabbar/internal/index.uts`
预期：仅余 4 条左右导入语句，且文件内任何位置都不再引用它们。

因为整个文件都要删除，**不需要**逐条清理这些导入。直接删除：

运行：`git rm src/tabbar/internal/index.uts`

- [ ] **步骤 4：门面移除 internal 聚合行**

`src/tabbar/index.uts` 改为最终形态：

```uts
export * from './config';
export * from './internal/metrics.uts';
export * from './internal/native.uts';
export * from './internal/navigate.uts';
export * from './internal/state.uts';
export * from './internal/strategy.uts';
export * from './types';
```

> 至此门面为**单层** `export *`：没有任何一个符号需要经过两层转发。

- [ ] **步骤 5：断言导出面少 1 个符号**

运行：`node scripts/check-tabbar-surface.mjs --expect 33; echo "exit=$?"`
预期：`✓ 导出面符号数符合预期` + `exit=0`（`handleClickBulge` 已收回为文件私有）；并核对 `已移除：` 行恰为以下集合（**累计**口径，顺序以脚本输出为准，共 8 个）：`buildFullTabbarList`、`customTabbarList`、`handleClickBulge`、`hasNativeTabbarConfig`、`isCapsuleTabbar`、`isNoTabbar`、`tabbarCacheEnable`、`themeColor`

- [ ] **步骤 6：H5 编译验证**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`

- [ ] **步骤 7：Commit**

```bash
git add src/tabbar/internal/navigate.uts src/tabbar/internal/native.uts src/tabbar/internal/index.uts src/tabbar/index.uts
git commit -m "refactor: 拆出跳转与平台桥接叶子文件，删除 internal 聚合层"
```

---

### 任务 8：全量跨端验证

这一步不使用「假绿」命令（skill 红线 32：`launch app-android --compile true` 与 `compile app-android --file` 都**不执行**「编译为android class」，对故意写坏的代码同样报「编译成功」）。

**文件：** 无代码改动，仅验证

- [ ] **步骤 1：类型声明同步检查**

运行：`pnpm check:uts-dts; echo "exit=$?"`
预期：`exit=0`

- [ ] **步骤 2：确认 tabbar 侧不需要新增声明文件**

运行：`ls src/tabbar/*.d.uts.ts 2>/dev/null; grep -rn "tabbar/[a-z]*\.uts'" src/ --include='*.uvue' --include='*.ts'`
预期：无输出。`@/src/tabbar` 是无扩展名的目录路径，现状即无声明文件且构建正常；本步骤只是确认改造没有引入「以字面 `xxx.uts` 路径导入 tabbar 内文件」的新情形

- [ ] **步骤 3：H5 构建**

运行：`pnpm build:h5 2>&1 | tail -5`
预期：`项目 unibestX 编译成功。` + `✅ H5 打包成功`

- [ ] **步骤 4：微信小程序链路（uts2js 对导出面最敏感）**

先确认没有开着 IDE 的编译进程抢占缓存：

```bash
ps -eo pid,command | grep -E "uniapp-cli-vite.*uni\.js" | grep -v grep
```

若存在 `uni.js -p mp-weixin`，提示使用者关闭 IDE 里的该平台运行，否则会命中 skill 1.3.18 的 `ENOENT ... .uts2js/cache/...` 竞态。

运行：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch mp-weixin --compile true --project /Users/chenqi/Desktop/unibestX 2>&1 | tail -20
test -d unpackage/dist/dev/mp-weixin/src/tabbar && echo "✓ 产物存在"
```

预期：`✓ 产物存在`。

> **判定只看产物，不看退出码**：skill 红线 41 明确记录该命令在竞态被打断时**仍返回 exit 0**。若产物缺失，重跑一次（同一份代码重试即可通过），不要回头改代码。

再确认小程序产物走的是预期实现分支、且含新结构：

```bash
ls unpackage/dist/dev/mp-weixin/src/tabbar/internal/
grep -c "tabbarList" unpackage/dist/dev/mp-weixin/src/tabbar/internal/state.js
```

预期：`internal/` 下可见 `strategy.js`、`metrics.js`、`state.js`、`navigate.js`、`native.js`；`state.js` 中 `tabbarList` 命中数 ≥ 1

- [ ] **步骤 5：真机 Kotlin 阶段（唯一可信的 UTS 编译验证）**

先列出可用设备：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli devices list
```

再用**不带** `--compile` 的真机构建（会安装到手机，约 1-2 分钟）：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android --project /Users/chenqi/Desktop/unibestX --deviceId <上一步列出的序列号> 2>&1 | tee /tmp/tabbar-refactor-android.log | tail -20
```

判定（缺一不可）：

```bash
grep -c "编译为android class" /tmp/tabbar-refactor-android.log   # 必须 >= 1
grep -nE "kotlin编译失败|error:|编译成功" /tmp/tabbar-refactor-android.log
```

预期：第一个数字 ≥ 1，且出现 `项目 unibestX 编译成功。`，不出现 `kotlin编译失败`。

> 若日志只跑了十几秒就 `已停止运行`、且既无 `编译成功` 也无 `编译为android class`，那是被 IDE 里正在跑的真机/预览抢占了（skill 1.3.15），不是代码问题，重跑即可。
>
> 顺带捞取 Kotlin 阶段警告：`grep -n "warning:" /tmp/tabbar-refactor-android.log`。本项目把构建警告当缺陷看（skill 1.1.4），特别是 `Identity equality` 与新出现的 `unused` 警告。

- [ ] **步骤 6：运行时行为抽查（真机或 H5 预览）**

确认以下行为与改造前一致：

1. 首页 TabBar 正常渲染，图标/文字/主题色与改造前一致；
2. 依次点击 4 个 Tab，跳转正常、激活态跟随、无闪烁；
3. 切换深色/浅色主题，TabBar 颜色跟随变化（验证 `themeColor` 迁移后主题联动未断）；
4. 进入 `src/sub/auth` 下的登录页与 `src/pages/me` 页面，确认 `switchTabbar`、`isPageTabbar` 工作正常；
5. 底部内容不被 TabBar 遮挡（验证 `tabbarPlaceholderHeight` 与安全区计算）。

- [ ] **步骤 7：Commit（若步骤 5 捞出的警告带来修复）**

```bash
# 逐个写出步骤 5 实际改动的文件路径（不要用 -A / . 通配）
git add <改动文件 1> <改动文件 2>
git commit -m "fix: 处理 tabbar 重构后 Kotlin 阶段新增警告"
```

> 🚨 **本步骤极易误用 `git add -A src`。严禁。** 两个理由：
> 1. `unpackage/dist/build/web/` 的 H5 产物被本仓库跟踪，任务 8 全程会跑 `pnpm build:h5`，产物早被重写（旧 hash 文件变删除、新 hash 文件变未跟踪，约 55 个文件）——`-A` 会把它们全扫进来；
> 2. `src/tabbar/types.uts` 有**用户未提交的改动**，`-A src` 同样会扫进来，污染用户的工作区。
>
> 只 `git add` 步骤 5 里真正改过的那几个文件。

若步骤 5 无新增警告，则本步骤跳过，直接进入验收。

- [ ] **步骤 8：同步 README 的 `src/tabbar/` 目录树**

**为什么放在这里而不是任务 3**：README 的目录树（`README.md` 第 317-328 行）在本次重构**之前就已整体过时**——它列出的 `tabbar/custom/`、顶层 `tabbar/TabbarItem.uvue`、顶层 `tabbar/index.uvue` 三个条目**都不存在**。而任务 4-7 会立刻再次改变 `internal/` 的形态，在任务 3 改写必然作废。现在（任务 7 已完成、结构定型）是唯一不会白做的时机。

**只改 `src/tabbar/` 那一段。** 紧随其后的 `src/utils/` 一段（第 329-335 行）同样过时（实际全是子目录 `backPress/`、`env/`、`i18n/`、`refresh/`、`route/`、`rxjs-lite/`、`systemInfo/`、`theme/`、`toast/`、`upload/`，树里却写成扁平文件），但那与本重构无关，**不在本次范围，不要顺手改**。

把 `README.md` 第 317-328 行这一段：

```text
│   ├── tabbar/               # 底部 TabBar 体系
│   │   ├── custom/           #   悬浮胶囊 TabBar（悬空圆角 Dock 栏风格）
│   │   │   └── index.uvue    #     悬浮胶囊组件
│   │   ├── helper/           #   TabBar 状态与辅助工具
│   │   │   ├── index.uts     #     TabBar 策略、安全路由跳转与主题 Token 辅助
│   │   │   └── store.uts     #     TabBar 选中状态管理与响应式数据
│   │   ├── TabbarItem.uvue   #   单个 Tab 项与角标（标准底座）
│   │   ├── index.uvue        #   标准自定义 TabBar（带中间凸起鼓包 midButton）
│   │   ├── config.uts        #   TabBar 统一配置（对齐 pages.json 规范，支持 type 风格切换）
│   │   └── types.uts         #   TabBar 强类型定义
```

替换为（**执行前先跑 `find src/tabbar -type f | sort` 核对，若与实际不符以实际为准**）：

```text
│   ├── tabbar/               # 底部 TabBar 体系
│   │   ├── internal/         #   模块内部实现（不对消费者暴露，请走 index.uts 门面）
│   │   │   ├── strategy.uts  #     策略枚举与模式判定
│   │   │   ├── metrics.uts   #     尺寸常量与视口 / 主题计算
│   │   │   ├── state.uts     #     列表与激活状态、路径匹配、激活订阅
│   │   │   ├── navigate.uts  #     跳转行为与原生中间按钮监听
│   │   │   └── native.uts    #     平台桥接（隐藏原生 tabbar）
│   │   ├── ui/               #   TabBar 视图层
│   │   │   ├── capsule/      #     悬浮胶囊风格
│   │   │   ├── default/      #     标准贴底风格（含 midButton 鼓包）
│   │   │   └── template.uvue #     TabBar 视图模板
│   │   ├── components/       #   容器与调度组件（TabViews、TabContent）
│   │   ├── tabbar.uvue       #   TabBar 入口组件
│   │   ├── index.uts         #   模块唯一门面（单层 export *）
│   │   ├── config.uts        #   TabBar 统一配置（对齐 pages.json 规范，支持 type 风格切换）
│   │   └── types.uts         #   TabBar 强类型定义
```

**验证**：

```bash
grep -n "helper/" README.md          # 预期：只剩 src/utils 无关命中（若有），无 tabbar 相关
grep -n "internal/" README.md        # 预期：命中上面新增的那一行
```

**提交**：

```bash
git add README.md
git commit -m "docs: README 目录树同步 tabbar 模块拆分后的结构"
```

> 🚨 只 `git add README.md`。不要 `git add -A`——本步骤前后跑过多次构建，`unpackage/` 下约 55 个已跟踪产物早被重写；`src/tabbar/types.uts` 也仍有用户未提交的改动。

---

## 验收标准

- [ ] `src/tabbar/internal/` 下只有 5 个文件：`strategy.uts`、`metrics.uts`、`state.uts`、`navigate.uts`、`native.uts`；`index.uts` 与 `store.uts` 均已删除
- [ ] `src/tabbar/index.uts` 为单层 `export *`，无 `export * from './internal'` 这类二次转发
- [ ] `node scripts/check-tabbar-surface.mjs` 报告「已移除」恰好 8 个预期符号、「新增」为空
- [ ] `grep -rn "tabbar/internal" src/` 无输出
- [ ] `grep -rn "themeColor" src/tabbar/` 只在新位置（`@/src/utils/theme/index.uts`）的导入行出现
- [ ] `src/store` 下不再有任何对 `src/tabbar` 的导入
- [ ] `pnpm check:uts-dts` 退出码 0
- [ ] `pnpm build:h5` 输出 `编译成功` + `打包成功`
- [ ] 微信小程序产物目录存在，且 `src/tabbar/internal/` 下 5 个 `.js` 齐全
- [ ] 真机构建日志含 `编译为android class`（≥ 1 次）与 `项目 unibestX 编译成功。`
- [ ] 任务 8 步骤 6 的 5 项行为抽查全部通过

## 风险与回退

| 风险 | 触发迹象 | 处置 |
| --- | --- | --- |
| 门面出现两条可达路径导致 Kotlin 符号改名 `xxx__1`（红线 21） | `.uts` 报 `error18 找不到名称`，或 `.uvue` 运行期 `NoSuchMethodError` | 立即用 `grep -rn "export \*" src/tabbar/` 检查是否某符号被两条路径转发；每个任务的门面状态都是「一符号一路径」，出现即说明有步骤漏删旧声明 |
| task 1 的 `themeColor` 与本文件某个 `get*` 函数在 Kotlin 端撞名（红线 1.1.11） | 真机构建 `NoSuchMethodError: getThemeColor()` | 已在任务 1 步骤 7 用 grep 前置拦截；若仍出现，把 `themeColor` 改名为 `currentThemeColor`（同步改 3 个 UI 组件与 2 个 store 分支） |
| mp-weixin 报 `ENOENT ... .uts2js/cache/...` | 报错文件每次都不同 | 红线 41：IDE 与 CLI 抢缓存，**同一份代码重试即可**，不要改代码 |
| H5 日志里的 `TS2305 resolveEasycom` 被误当成新错误 | 该错误在基线中已存在 | 以任务 0 记录的基线噪声为对照；只关注 `src/tabbar/**` 相关的新错误 |
| 真机构建被 IDE 抢占而中断 | 日志十几秒即 `已停止运行`，无 `编译成功` | skill 1.3.15：重跑，或先停掉 IDE 里的运行 |

**整体回退**：本次改动按任务分 8 个 commit（任务 1-8，每个任务一个 commit），每个 commit 都能独立编译通过。回退到改造前状态：

```bash
git log --oneline            # 找到「test: 添加 tabbar 门面导出面快照检查与改造前基线」之前的一个 commit
git revert --no-commit <各个 refactor commit>   # 或逐个 revert
```

若只想放弃某一项决定（例如恢复那 4 个被删除的策略常量），按**任务 4 步骤 1** 的说明把 `export const` 加回 `strategy.uts` 即可，门面会自动重新转发。
