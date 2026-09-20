#!/usr/bin/env node
/**
 * 为 src/utils/<模块>/index.uts 生成同目录的 index.d.uts.ts 类型声明文件
 *
 * ── 为什么需要这个脚本 ────────────────────────────────────────────────
 * tsconfig 开了 `allowArbitraryExtensions`，TS 会把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`。**没有这个声明文件时，导入 `.uts` 一律报 `TS2307`**，
 * IDE 里既没有补全也没有类型（`src/types/uni.d.ts` 里的 `declare module '*.uts'`
 * 只在真实声明缺失时兜底成 any，不提供补全）。
 *
 * 声明文件与 `.uts` 必须**手工保持一致**，否则编译不报错、IDE 补全静默失准。
 * 所以这里不手写，改为从 `.uts` 源码自动生成 —— 改了源码重跑本脚本即可。
 *
 * ── 用法 ──────────────────────────────────────────────────────────────
 *   node scripts/gen-uts-dts.mjs           # 生成 / 更新全部声明文件
 *   node scripts/gen-uts-dts.mjs --check   # 只校验是否与源码同步（不同步则退出码 1）
 *   node scripts/gen-uts-dts.mjs --all     # 连手工维护的模块一起重新生成
 *
 * ── 生成策略 ──────────────────────────────────────────────────────────
 * - `export function`  → `export declare function`，剥掉函数体，保留 JSDoc
 * - `export const`     → `export declare const`，保留显式类型标注；
 *                        无标注时按下述规则推断（推断不出的会告警，需手工补）
 * - `export type`      → 原样拷贝（项目禁用 interface，故只需处理 type）
 * - `export class`     → `export declare class`，只留成员签名（含 private 字段），
 *                        方法体全部剥离，JSDoc 保留
 * - `export default`   → 原样拷贝
 *
 * 推断规则（仅用于无类型标注的 const）：
 *   ref(<字面量>)  → Ref<boolean|string|number>
 *   new Foo()      → Foo
 *   <标识符>        → 引用之前已声明的同名 const 的类型
 *   字面量          → boolean / number / string
 *
 * 推断不出来（结果为 any）时会打印 ⚠️ 告警，请手工到生成的声明文件里补类型。
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const UTILS_DIR = path.join(ROOT, 'src/utils');

/** 手工维护、不参与自动生成的模块（含 computed() 等无法静态推断的类型） */
const HANDWRITTEN = new Set(['systemInfo']);

/**
 * 除 `src/utils/<模块>/index.uts` 外，额外纳入生成的 `.uts` 源文件。
 *
 * 判据是「有没有被 `.ts` / `.uvue` 以 `xxx.uts` 形式导入」：只要被导入，
 * 缺配套声明文件 IDE 就会报 `Cannot find module '...xxx.uts'`
 * （`src/store/types.uts` 即属此类 —— 它被 `src/store/vapor/*.ts` 导入）。
 *
 * 同理，`src/i18n/index.uts` 被 `src/store/vapor/app.ts`、`src/store/vdom/app.uts` 导入，
 * 而它不在 `src/utils/` 下，不补进来就会一直报同一个 `Cannot find module` 警告。
 *
 * `src/tabbar/index.uts` 是纯 `export *` 门面（7 行全是再导出），跟随展开由
 * `collectParts` 里的 `export *` 分支负责 —— 它被 `src/tabbar/tabbar.uvue`、
 * `src/layouts/navbar.uvue`、`src/router/interceptor.uts` 等 13 处以
 * `@/src/tabbar/index.uts` 形式导入。
 */
const EXTRA_SOURCES = [
  path.join(ROOT, 'src/store/types.uts'),
  path.join(ROOT, 'src/i18n/index.uts'),
  path.join(ROOT, 'src/tabbar/index.uts'),
  path.join(ROOT, 'uni_modules/mp-html/common/katex-lite/index.uts'),
  path.join(ROOT, 'uni_modules/mp-html/common/mermaid-lite/index.uts'),
  path.join(ROOT, 'uni_modules/mp-html/index.uts')
];

const args = new Set(process.argv.slice(2));
const CHECK_ONLY = args.has('--check');
const INCLUDE_ALL = args.has('--all');

// ────────────────────────────── 词法工具 ──────────────────────────────

/**
 * 把字符串/注释的内容整体替换成空格，保留长度与换行。
 * 这样后续的花括号配对、`=` 查找都不会被字面量里的符号干扰，
 * 而切片仍然从原文取（保留 JSDoc）。
 */
function mask(src) {
  // 必须用 split('') 取「按 UTF-16 码元」的字符数组：`[...src]` 是按码点展开的，
  // 一旦源码里出现 emoji / 数学字母这类增补平面字符（代理对），数组长度就会比
  // src.length 短，后面 `out[i] = ' '` 的下标映射会整体错位，把代码当成字符串抹掉，
  // 表现为「某些 export 在生成的 d.ts 里凭空消失」。
  const out = src.split('');
  const n = src.length;
  let i = 0;
  while (i < n) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') {
      while (i < n && src[i] !== '\n') out[i++] = ' ';
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      out[i++] = ' ';
      out[i++] = ' ';
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) out[i++] = ' ';
      if (i < n) {
        out[i++] = ' ';
        out[i++] = ' ';
      }
      continue;
    }
    if (c === '\'' || c === '"' || c === '`') {
      const q = c;
      i++; // 保留开引号
      while (i < n) {
        if (src[i] === '\\') {
          out[i++] = ' ';
          if (i < n)
            out[i++] = ' ';
          continue;
        }
        if (src[i] === q)
          break;
        out[i++] = ' ';
      }
      i++; // 跳过闭引号
      continue;
    }
    i++;
  }
  return out.join('');
}

function matchingBrace(m, i) {
  const open = m[i];
  const close = open === '(' ? ')' : open === '[' ? ']' : '}';
  let d = 0;
  for (; i < m.length; i++) {
    if (m[i] === open)
      d++;
    else if (m[i] === close && --d === 0)
      return i;
  }
  throw new Error(`括号不配对，位置 ${i}`);
}

/** 从 from 开始找深度 0 的 `;`（用于 const / type 语句） */
function statementEnd(m, from) {
  let d = 0;
  for (let i = from; i < m.length; i++) {
    const c = m[i];
    if (c === '{' || c === '(' || c === '[')
      d++;
    else if (c === '}' || c === ')' || c === ']')
      d--;
    else if (c === ';' && d === 0)
      return i;
  }
  throw new Error(`找不到语句结束分号，位置 ${from}`);
}

/** 从 from 开始找深度 0 的赋值 `=`（排除 => == != <= >= 等） */
function assignIndex(m, from) {
  let d = 0;
  for (let i = from; i < m.length; i++) {
    const c = m[i];
    if (c === '{' || c === '(' || c === '[') {
      d++;
    }
    else if (c === '}' || c === ')' || c === ']') {
      d--;
    }
    else if (c === '=' && d === 0) {
      if (m[i + 1] === '=' || m[i - 1] === '=' || m[i - 1] === '!' || m[i - 1] === '>' || m[i - 1] === '<')
        continue;
      return i;
    }
  }
  throw new Error(`找不到赋值等号，位置 ${from}`);
}

/** 取紧邻 idx 之前的 JSDoc / 块注释（没有则返回空串） */
function jsdocBefore(src, idx) {
  let j = idx - 1;
  while (j >= 0 && /\s/.test(src[j])) j--;
  if (j < 1 || src[j] !== '/' || src[j - 1] !== '*')
    return '';
  const start = src.lastIndexOf('/*', j - 1);
  return start < 0 ? '' : src.slice(start, j + 1);
}

/** 找出所有顶层（花括号深度 0）的 export 语句起始位置 */
function topLevelExports(m) {
  const res = [];
  let depth = 0;
  for (let i = 0; i < m.length; i++) {
    const c = m[i];
    if (c === '{') {
      depth++;
      continue;
    }
    if (c === '}') {
      depth--;
      continue;
    }
    if (depth === 0 && c === 'e' && m.startsWith('export', i)) {
      const lineStart = m.lastIndexOf('\n', i - 1) + 1;
      if (m.slice(lineStart, i).trim() === '')
        res.push(i);
    }
  }
  return res;
}

// ────────────────────────────── 类型推断 ──────────────────────────────

function inferLiteralType(s) {
  const t = s.trim();
  if (t === 'true' || t === 'false')
    return 'boolean';
  if (/^-?\d+(?:\.\d+)?$/.test(t))
    return 'number';
  if (/^['"]/.test(t))
    return 'string';
  if (t === 'null')
    return 'null';
  return null;
}

function inferType(init, constTypes) {
  const s = init.trim();

  // ref(<字面量>)  →  Ref<T>
  const refMatch = /^ref\(([\s\S]*)\)$/.exec(s);
  if (refMatch) {
    const arg = refMatch[1].trim();
    const inner = inferLiteralType(arg) ?? inferType(arg, constTypes);
    return inner ? `Ref<${inner}>` : null;
  }

  // computed<T>(...)  →  ComputedRef<T>
  // 只认基本类型实参：产物里不会为跨模块的类型名生成 import，硬写 T 会退化成
  // `Cannot find name`（比 any 更难排查）；那种情况返回 null，交给上层打 warning。
  if (/^computed\s*[<(]/.test(s)) {
    // 泛型实参单独匹配：`<([^<>]+)>\(` 里的 `[^<>]` 啃不掉 `>`，边界唯一，
    // 不会像带 `\s*` 的写法那样产生多项式回溯
    const generic = /^computed<([^<>]+)>\(/.exec(s)?.[1]?.trim();
    const PRIMITIVES = new Set(['number', 'string', 'boolean', 'void', 'null', 'undefined', 'any', 'unknown']);
    return generic != null && PRIMITIVES.has(generic) ? `ComputedRef<${generic}>` : null;
  }

  // new Foo(...)  →  Foo
  const newMatch = /^new\s+([A-Za-z_$][\w$]*)\s*\(/.exec(s);
  if (newMatch)
    return newMatch[1];

  // 纯标识符  →  沿用之前同名 const 的推断结果
  const identMatch = /^[A-Z_$][\w$]*$/i.exec(s);
  if (identMatch)
    return constTypes.get(identMatch[0]) ?? null;

  return inferLiteralType(s);
}

// ────────────────────────────── 声明生成 ──────────────────────────────

const warnings = [];

function genFunction(src, m, start) {
  const head = m.slice(start);
  const mm = head.match(/^export\s+function\s+([A-Za-z_$][\w$]*)/);
  const name = mm[1];
  const parenStart = m.indexOf('(', start + mm[0].length);
  const parenEnd = matchingBrace(m, parenStart);

  // 从参数右括号往后找函数体的 `{`（跳过 `: 返回类型` 里的括号/方括号）
  let paren = 0;
  let bracket = 0;
  let bodyStart = -1;
  for (let i = parenEnd + 1; i < m.length; i++) {
    const c = m[i];
    if (c === '(') {
      paren++;
    }
    else if (c === ')') {
      paren--;
    }
    else if (c === '[') {
      bracket++;
    }
    else if (c === ']') {
      bracket--;
    }
    else if (c === '{' && paren === 0 && bracket === 0) {
      bodyStart = i;
      break;
    }
    else if (c === ';' && paren === 0 && bracket === 0) {
      break;
    }
  }
  if (bodyStart < 0)
    throw new Error(`${name}: 找不到函数体`);

  const retPart = m.slice(parenEnd + 1, bodyStart).trim();
  let ret = 'void';
  if (retPart.startsWith(':')) {
    ret = retPart.slice(1).trim();
    if (ret.includes('{'))
      throw new Error(`${name}: 返回类型含对象字面量，需手工处理`);
  }
  else {
    warnings.push(`${name}: 源码未标注返回类型，按 void 生成 —— 请确认`);
  }

  const params = src.slice(parenStart, parenEnd + 1);
  return {
    text: `export declare function ${name}${params}: ${ret};`,
    end: matchingBrace(m, bodyStart)
  };
}

function genConst(src, m, start, constTypes) {
  const head = m.slice(start);
  const mm = head.match(/^export\s+const\s+([A-Za-z_$][\w$]*)/);
  const name = mm[1];
  const nameEnd = start + mm[0].length;
  const eq = assignIndex(m, nameEnd);
  const semicolon = statementEnd(m, eq);

  const annotation = m.slice(nameEnd, eq).trim();
  let type = null;
  if (annotation.startsWith(':')) {
    type = annotation.slice(1).trim();
  }
  else {
    type = inferType(src.slice(eq + 1, semicolon), constTypes);
    if (!type) {
      warnings.push(`${name}: 无法推断类型（初始值 ${JSON.stringify(src.slice(eq + 1, semicolon).trim().slice(0, 40))}），已生成 any —— 请手工补`);
      type = 'any';
    }
  }
  constTypes.set(name, type);
  return { text: `export declare const ${name}: ${type};`, end: semicolon };
}

/**
 * 为「未 `export` 的顶层 `const`，但被 `export default <name>` 引用」补一条声明。
 *
 * 典型形态（`src/i18n/index.uts`）：
 *   const i18n = createI18n({ ... });
 *   export default i18n;
 * 这里 `i18n` 不是 `export const`，走不到 `genConst`，产物里就只有一句
 * `export default i18n;` —— 标识符无任何声明，TS 会报 `Cannot find name 'i18n'`，
 * 比原来的 `Cannot find module` 更难定位。故在此兜底：推断不出类型时降级 `any` 并告警。
 */
function genLocalConst(src, m, name, constTypes) {
  const hit = new RegExp(`^const\\s+${name}\\b`, 'm').exec(m);
  if (!hit)
    return null;

  const nameEnd = hit.index + hit[0].length;
  const eq = assignIndex(m, nameEnd);
  const semicolon = statementEnd(m, eq);
  const init = src.slice(eq + 1, semicolon);
  const annotation = m.slice(nameEnd, eq).trim();

  let type = null;
  if (annotation.startsWith(':')) {
    type = annotation.slice(1).trim();
  }
  else {
    type = inferType(init, constTypes);
    if (!type) {
      warnings.push(`${name}: 默认导出引用的顶层 const 无法推断类型（初始值 ${JSON.stringify(init.trim().slice(0, 40))}），已生成 any —— 请手工补`);
      type = 'any';
    }
  }
  constTypes.set(name, type);
  return `declare const ${name}: ${type};`;
}

function genType(src, m, start) {
  const end = statementEnd(m, start);
  const raw = src.slice(start, end + 1);
  if (/^export\s+type\b/.test(m.slice(start))) {
    return { text: raw, end };
  }
  return null;
}

function hasTopLevelAssign(seg) {
  const mm = mask(seg);
  let d = 0;
  for (let i = 0; i < mm.length; i++) {
    const c = mm[i];
    if (c === '(' || c === '[' || c === '{') {
      d++;
    }
    else if (c === ')' || c === ']' || c === '}') {
      d--;
    }
    else if (c === '=' && d === 0) {
      if (mm[i + 1] === '=' || mm[i - 1] === '=' || mm[i - 1] === '!' || mm[i - 1] === '>' || mm[i - 1] === '<')
        continue;
      return true;
    }
  }
  return false;
}

function genClass(src, m, start) {
  const head = m.slice(start);
  const mm = head.match(/^export\s+class\s+([A-Za-z_$][\w$]*)/);
  const name = mm[1];
  const bodyStart = m.indexOf('{', start);
  const bodyEnd = matchingBrace(m, bodyStart);
  const generics = m.slice(start + mm[0].length, bodyStart).trim(); // 形如 "<T>" 或空

  const members = [];
  let i = bodyStart + 1;
  let segStart = i;
  while (i < bodyEnd) {
    const c = m[i];
    if (c === '{') {
      const seg = src.slice(segStart, i);
      if (hasTopLevelAssign(seg)) {
        // 属性初始化器里的对象字面量，整块跳过
        i = matchingBrace(m, i) + 1;
        continue;
      }
      members.push({ kind: 'method', start: segStart, sig: seg });
      i = matchingBrace(m, i) + 1;
      segStart = i;
    }
    else if (c === ';') {
      members.push({ kind: 'prop', start: segStart, sig: src.slice(segStart, i) });
      i++;
      segStart = i;
    }
    else {
      i++;
    }
  }

  const lines = [];
  for (const mem of members) {
    const doc = jsdocBefore(src, mem.start).trim();
    let sig = mem.sig.replace(/\/\*[\s\S]*?\*\//g, '').trim();
    if (sig === '')
      continue;

    if (mem.kind === 'prop') {
      const eq = sig.indexOf('=');
      if (eq >= 0)
        sig = sig.slice(0, eq).trim();
      if (!sig.includes(':'))
        throw new Error(`${name}.${sig}: 属性缺少类型标注`);
      lines.push(`${sig};`);
    }
    else {
      // 方法：签名里必须带返回类型；构造器除外
      const isCtor = /^constructor\s*\(/.test(sig);
      if (!isCtor && !/\)\s*:\s*\S/.test(sig)) {
        throw new Error(`${name}.${sig.split('\n').pop()?.trim()}: 方法缺少返回类型标注`);
      }
      lines.push(`${sig};`);
    }
    if (doc)
      lines[lines.length - 1] = `${doc}\n  ${lines[lines.length - 1]}`;
  }

  return {
    text: `export declare class ${name}${generics} {\n  ${lines.join('\n\n  ')}\n}`,
    end: bodyEnd,
    name
  };
}

// ────────────────────────────── 主流程 ──────────────────────────────

/**
 * 把 `export * from './x'` 的说明符解析成磁盘上的真实文件。
 * 依次尝试原样、补 `.uts`、补 `.ts`、当作目录取 `index.uts`。
 */
function resolveUts(spec, fromPath) {
  const base = path.resolve(path.dirname(fromPath), spec);
  const candidates = [base, `${base}.uts`, `${base}.ts`, path.join(base, 'index.uts')];
  return candidates.find(p => fs.existsSync(p) && fs.statSync(p).isFile()) ?? null;
}

/**
 * 收集单个 `.uts` 文件的导出声明片段。
 *
 * `export * from './x'` 会被递归跟随（门面文件即靠这条展开成完整导出面）。
 * 注意 `export *` **不转发 `default`**，所以递归进来的子文件只取具名导出，
 * 它的 `defaultIdent` 直接丢弃。`seen` 记录已展开的绝对路径，防住互相 `export *` 的环。
 */
function collectParts(src, srcPath, moduleName, constTypes, seen) {
  const m = mask(src);
  const parts = [];
  /** `export default <identifier>` 里的标识符，循环后校验它是否有声明 */
  let defaultIdent = null;

  for (const start of topLevelExports(m)) {
    const head = m.slice(start);
    const doc = jsdocBefore(src, start).trim();
    let out = null;

    if (/^export\s+function\b/.test(head)) {
      out = genFunction(src, m, start);
    }
    else if (/^export\s+const\b/.test(head)) {
      out = genConst(src, m, start, constTypes);
    }
    else if (/^export\s+type\b/.test(head)) {
      out = genType(src, m, start);
    }
    else if (/^export\s+class\b/.test(head)) {
      out = genClass(src, m, start);
    }
    else if (/^export\s+default\b/.test(head)) {
      const end = statementEnd(m, start);
      out = { text: src.slice(start, end + 1), end };
      // 记录裸标识符形态的默认导出（`export default i18n;`），字面量/表达式的不管
      const dm = /^export\s+default\s+([A-Za-z_$][\w$]*)\s*;?$/.exec(out.text.trim());
      if (dm)
        defaultIdent = dm[1];
    }
    else if (/^export\s+\{/.test(head)) {
      const end = statementEnd(m, start);
      out = { text: src.slice(start, end + 1), end };
    }
    else if (/^export\s+\*\s+from\b/.test(head)) {
      // 说明符要从**原始 src** 取：mask() 把字符串字面量抹成了空白，
      // 在 head 上匹配只会得到一串空格
      const end = statementEnd(m, start);
      const spec = /^export\s+\*\s+from\s+['"]([^'"]+)['"]/.exec(src.slice(start, end + 1))?.[1];
      const target = spec != null && srcPath != null ? resolveUts(spec, srcPath) : null;
      if (target == null) {
        warnings.push(`${moduleName}: 无法解析 \`export * from '${spec}'\` 的目标文件，其导出未纳入声明`);
        continue;
      }
      if (seen.has(target))
        continue;
      seen.add(target);
      const sub = collectParts(fs.readFileSync(target, 'utf8'), target, path.relative(ROOT, target), constTypes, seen);
      parts.push(...sub.parts);
      continue;
    }
    else {
      warnings.push(`${moduleName}: 跳过无法识别的导出 → ${head.split('\n')[0]}`);
      continue;
    }

    if (!out)
      continue;
    parts.push(doc ? `${doc}\n${out.text}` : out.text);
  }

  return { parts, defaultIdent };
}

function generate(src, moduleName, fileName = 'index.uts', srcPath = null) {
  const dtsBase = `${fileName.replace(/\.uts$/, '')}.d.uts.ts`;
  const m = mask(src);
  const constTypes = new Map();
  // 根文件先入 seen，避免它被自己的间接 `export *` 兜回来
  const seen = new Set(srcPath != null ? [path.resolve(srcPath)] : []);
  const { parts, defaultIdent } = collectParts(src, srcPath, moduleName, constTypes, seen);

  // `export default Foo;` 的 Foo 若在产物里没有任何声明，TS 会报 `Cannot find name`，
  // 比「找不到模块」更难定位 —— 这里补一条兜底声明（见 genLocalConst）。
  if (defaultIdent != null) {
    const declared = new RegExp(`\\b(?:declare\\s+)?(?:const|let|var|function|class)\\s+${defaultIdent}\\b`).test(parts.join('\n\n'));
    if (!declared) {
      const decl = genLocalConst(src, m, defaultIdent, constTypes);
      if (decl != null)
        parts.unshift(decl); // 放在 `export default` 之前，读起来更顺
      else
        warnings.push(`${moduleName}: 默认导出 \`${defaultIdent}\` 在源码中找不到顶层 const 声明，产物会引用未声明标识符 —— 请手工补`);
    }
  }

  const body = parts.join('\n\n');
  const imports = [];
  if (/\bRef</.test(body))
    imports.push('Ref');
  if (/\bComputedRef</.test(body))
    imports.push('ComputedRef');
  if (/\bShallowRef</.test(body))
    imports.push('ShallowRef');
  imports.sort(); // 满足 perfectionist/sort-named-imports

  const header = `/**
 * 本文件由 \`scripts/gen-uts-dts.mjs\` 自动生成，请勿手工编辑。
 *
 * 它声明 \`./${fileName}\` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 \`allowArbitraryExtensions\` 把 \`./${fileName}\` 解析到同目录的
 * \`${dtsBase}\`，因此本文件必须与 \`${fileName}\` **同目录同名**，不能挪走。
 *
 * 修改 \`${fileName}\` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */`;

  const importBlock = imports.length > 0
    ? `\nimport type { ${imports.join(', ')} } from 'vue';\n`
    : '';

  return `${header}${importBlock}\n${body}\n`;
}

function main() {
  // src/utils/<模块>/index.uts
  const utilsTargets = fs.readdirSync(UTILS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => fs.existsSync(path.join(UTILS_DIR, name, 'index.uts')))
    .sort()
    .map((name) => {
      const srcPath = path.join(UTILS_DIR, name, 'index.uts');
      return {
        label: name,
        srcPath,
        fileName: 'index.uts',
        dtsPath: path.join(UTILS_DIR, name, 'index.d.uts.ts'),
        handwritten: HANDWRITTEN.has(name)
      };
    });

  // EXTRA_SOURCES 里的独立 .uts 文件
  const extraTargets = EXTRA_SOURCES.map((srcPath) => {
    const fileName = path.basename(srcPath);
    return {
      label: path.relative(ROOT, srcPath),
      srcPath,
      fileName,
      dtsPath: srcPath.replace(/\.uts$/, '.d.uts.ts'),
      handwritten: false
    };
  });

  const targets = [...utilsTargets, ...extraTargets];

  let generated = 0;
  let stale = 0;

  for (const { label, srcPath, fileName, dtsPath, handwritten } of targets) {
    if (handwritten && !INCLUDE_ALL) {
      console.log(`⏭  ${label}  手工维护，跳过（--all 可强制重新生成）`);
      continue;
    }

    let out;
    try {
      out = generate(fs.readFileSync(srcPath, 'utf8'), label, fileName, srcPath);
    }
    catch (e) {
      console.error(`❌ ${label}  生成失败：${e.message}`);
      process.exitCode = 1;
      continue;
    }

    const prev = fs.existsSync(dtsPath) ? fs.readFileSync(dtsPath, 'utf8') : null;

    if (CHECK_ONLY) {
      if (prev === out) {
        console.log(`✅ ${label}  已同步`);
      }
      else {
        console.error(`❌ ${label}  声明文件与 ${fileName} 不同步，请运行 node scripts/gen-uts-dts.mjs`);
        stale++;
      }
      continue;
    }

    if (prev === out) {
      console.log(`=  ${label}  无变化`);
    }
    else {
      fs.writeFileSync(dtsPath, out);
      console.log(`${prev === null ? '＋' : '✎'}  ${label}  ${prev === null ? '新建' : '已更新'} ${path.basename(dtsPath)}`);
      generated++;
    }
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  以下位置的类型是推断/兜底出来的，请人工确认：');
    for (const w of [...new Set(warnings)]) console.log(`   - ${w}`);
  }

  if (CHECK_ONLY) {
    console.log(stale === 0 ? '\n全部声明文件与源码同步 ✅' : `\n有 ${stale} 个模块不同步 ❌`);
    // 用法里承诺「不同步则退出码 1」，供 CI / hooks 拦截，这里必须落实
    if (stale > 0)
      process.exitCode = 1;
  }
  else {
    console.log(`\n完成：更新 ${generated} 个，共扫描 ${targets.length} 个模块`);
  }
}

main();
