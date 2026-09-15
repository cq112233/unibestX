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
 * 已知残余限制（刻意接受的取舍）：
 *   1. 注释剥离是基于正则的近似实现，不解析字符串与模板串。若块注释起始符出现在字符串
 *      或行注释里，它会一路吞到其后第一个块注释收尾符，把中间的真实导出行整行抹掉。已用
 *      「只剥合法块注释」与「真实剥离」的导出行计数守卫兜住这一最危险的后果（静默少算
 *      导出面）：两者行数不等即报错退出、不再继续扫描；
 *   2. 多行模板字符串里独占一行的 `export` 仍会被误判成导出语句。
 *   以上残余影响均为「误报」（可见、变红），而非静默漏计，符合本脚本「宁可变红」的取舍。
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

/** 剥掉块注释与行尾注释；块注释用等长空格替换，保持行号与行内偏移不漂移 */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
    .replace(/\/\/[^\n]*/g, '');
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

  // 守卫：正则剥离不解析字符串与行注释。若「块注释起始符」其实出现在字符串或行注释里，
  // 它会一路吞到其后第一个收尾符，把中间的真实导出行整行抹成空格 —— 静默少算导出面 = 假绿。
  // 但合法块注释里本来就可能写着 export 字样（那是注释不是导出），所以不能拿「原始全文」
  // 当基准。基准取「只剥合法块注释」的结果：两者导出行数一旦不等，即说明有真实导出行被
  // 过度吞掉，立即中止本文件（parseError 随之阻止任何写盘）。
  const countExportLines = ls => ls.filter(l => EXPORT_LINE.test(l.trim())).length;
  const legitStripped = raw.replace(/\/\*[\s\S]*?\*\//g, (comment, offset) => {
    const linePrefix = raw.slice(raw.lastIndexOf('\n', offset) + 1, offset);
    const isRealComment = !linePrefix.includes('//') && !/['"`]/.test(linePrefix);
    return isRealComment ? comment.replace(/[^\n]/g, ' ') : comment;
  });
  const exportsKept = countExportLines(legitStripped.split('\n'));
  const exportsAfterStrip = countExportLines(lines);
  if (exportsAfterStrip < exportsKept) {
    console.error(`✗ 剥注释时疑似吞掉了 ${exportsKept - exportsAfterStrip} 行导出语句：${abs}`);
    console.error('  常见原因：字符串或行注释里出现了未配对的块注释起始符');
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
