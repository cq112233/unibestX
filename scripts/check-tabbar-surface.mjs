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
 *      符、正则字面量里的块注释起始符。这类仍会 **静默少算导出面**，而守卫不会报错：
 *      被吞掉的符号会以「已移除：」的面目出现，与「真的被收回」无法区分；此时若执行
 *      `--write`，残缺的面会被直接写成语义上的新基线，锚点从此被污染。这是已知的假绿通道；
 *   3. 守卫的基准与 `stripComments` **共用同一份块注释正则**，两者会一起漂移：只改其中
 *      一处而漏改另一处，守卫的前提会静默失效。因此守卫 **不是** 独立的第二意见 ——
 *      「守卫没报错」推不出「导出面完整」；
 *   4. 反向残余（假红）：同行前缀形如 `"it's" ` 再接块注释起始符时，引号计数为奇数，
 *      合法注释会被判脏而报错。已用报错里的「差异行号 + 原始行文本」缓解 —— 看行号
 *      即可在 1 秒内判断真假；
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
      console.error(`  差异行：第 ${lineNo} 行 ${rawLines[lineNo - 1].trim()}`);
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
