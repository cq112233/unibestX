#!/usr/bin/env node
/**
 * TabBar 门面导出面快照检查
 *
 * 静态解析 src/tabbar/index.uts 的 `export *` 图，列出可经 `@/src/tabbar` 导入的全部顶层
 * 符号。用于重构期间证明「对外契约只减不增、且减少的正是预期的那几个」。
 *
 * 用法：
 *   node scripts/check-tabbar-surface.mjs              # 打印当前导出面并与基线比对
 *   node scripts/check-tabbar-surface.mjs --write      # 写入基线文件
 *   node scripts/check-tabbar-surface.mjs --expect 32  # 断言符号集与符号数，不符则退出码 1
 *
 * 解析器覆盖范围（刻意的设计取舍）：
 *   只静态识别以下已验证的导出写法，遇到其它写法一律报错退出，绝不静默计数 ——
 *     1. `export * from '…'`                    —— 递归遍历目标文件
 *     2. `export const|function|class|type|let|var|enum|interface <name>`
 *     3. 本地 `export { a, b }` / `export type { a, b }` —— 只记名字，不遍历
 *   命中 `export default`、`export * as ns from`、带 `from` 的 `export { … } from` 时，
 *   直接打印错误并以退出码 1 中止（`--write` 也不会写盘）。宁可让检查失败，也不产出一份
 *   看起来正确、实则残缺的导出面。
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FACADE = path.join(ROOT, 'src/tabbar/index.uts');
const BASELINE = path.join(ROOT, 'docs/superpowers/plans/tabbar-surface-baseline.txt');

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

/** 本脚本无法可靠解析的导出写法：命中即报错中止，不静默漏计 */
const UNSUPPORTED_EXPORTS = [
  /^[ \t]*export\s+default\b.*$/m,
  /^[ \t]*export\s+\*\s+as\s+[\w$]+\s+from\b.*$/m,
  /^[ \t]*export\s+(?:type\s+)?\{[^}]*\}[ \t]*from\b.*$/m
];

let parseError = false;
const visited = new Set();
const found = new Map();

function walk(file) {
  const abs = path.resolve(file);
  if (visited.has(abs))
    return;
  visited.add(abs);
  const src = fs.readFileSync(abs, 'utf8');
  const rel = path.relative(ROOT, abs);

  for (const pattern of UNSUPPORTED_EXPORTS) {
    const bad = src.match(pattern);
    if (bad != null) {
      console.error(`✗ 遇到无法可靠解析的导出写法：${bad[0].trim()}（来自 ${rel}），请更新本脚本后再继续`);
      parseError = true;
      return;
    }
  }

  for (const m of src.matchAll(/^\s*export\s+\*\s+from\s+['"]([^'"]+)['"]/gm)) {
    const target = resolveModule(abs, m[1]);
    if (target == null) {
      console.error(`✗ 无法解析重导出目标：${m[1]}（来自 ${rel}）`);
      parseError = true;
      continue;
    }
    walk(target);
  }
  for (const m of src.matchAll(/^\s*export\s+(?:const|function|class|type|let|var|enum|interface)\s+([A-Za-z_$][\w$]*)/gm))
    found.set(m[1], rel);
  for (const m of src.matchAll(/^\s*export\s+(?:type\s+)?\{([^}]*)\}/gm)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/).pop()?.trim();
      if (name != null && name !== '')
        found.set(name, rel);
    }
  }
}

walk(FACADE);

const names = [...found.keys()].sort();
const args = process.argv.slice(2);
const baselineRel = path.relative(ROOT, BASELINE);

/** 读取基线；文件不存在时返回 null */
function readBaseline() {
  if (!fs.existsSync(BASELINE))
    return null;
  return fs.readFileSync(BASELINE, 'utf8').split('\n').map(s => s.trim()).filter(s => s !== '');
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

if (parseError) {
  console.error('✗ 导出面解析失败，已中止本次检查（未写入任何文件）');
  process.exitCode = 1;
}
else if (args.includes('--write') && args.includes('--expect')) {
  console.error('✗ --write 与 --expect 不能同时使用');
  process.exitCode = 1;
}
else if (args.includes('--write')) {
  const prev = readBaseline();
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
else if (args.includes('--expect')) {
  const raw = args[args.indexOf('--expect') + 1];
  const expected = Number(raw);
  if (raw === undefined || !Number.isInteger(expected) || expected < 0) {
    console.error(`✗ 无效的 --expect 参数：${raw}`);
    process.exitCode = 1;
  }
  else {
    const baseline = readBaseline();
    if (baseline == null) {
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
    console.log(names.join('\n'));
    console.error(`✗ 基线文件不存在：${baselineRel}，请先运行 --write`);
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
