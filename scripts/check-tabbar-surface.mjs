#!/usr/bin/env node
/**
 * TabBar 门面导出面快照检查
 *
 * 静态解析 src/tabbar/index.uts 的 `export *` 图，列出可经 `@/src/tabbar` 导入的全部顶层
 * 符号。用于重构期间证明「对外契约只减不增、且减少的正是预期的那几个」。
 *
 * 用法（必须在项目根目录运行）：
 *   node scripts/check-tabbar-surface.mjs              # 打印当前导出面并与基线比对
 *   node scripts/check-tabbar-surface.mjs --write      # 写入基线文件
 *   node scripts/check-tabbar-surface.mjs --expect 32  # 断言符号数，不符则退出码 1
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()
const FACADE = path.join(ROOT, 'src/tabbar/index.uts')
const BASELINE = path.join(ROOT, 'docs/superpowers/plans/tabbar-surface-baseline.txt')

/** 解析模块路径，依次尝试：原样、补 .uts、补 .ts、补 /index.uts、补 /index.ts */
function resolveModule(fromFile, spec) {
  const base = spec.startsWith('@/')
    ? path.join(ROOT, spec.slice(2))
    : path.resolve(path.dirname(fromFile), spec)
  const candidates = [base, `${base}.uts`, `${base}.ts`,
    path.join(base, 'index.uts'), path.join(base, 'index.ts')]
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile())
      return c
  }
  return null
}

const visited = new Set()
const found = new Map()

function walk(file) {
  const abs = path.resolve(file)
  if (visited.has(abs))
    return
  visited.add(abs)
  const src = fs.readFileSync(abs, 'utf8')
  const rel = path.relative(ROOT, abs)

  for (const m of src.matchAll(/^\s*export\s+\*\s+from\s+['"]([^'"]+)['"]/gm)) {
    const target = resolveModule(abs, m[1])
    if (target == null) {
      console.error(`✗ 无法解析重导出目标：${m[1]}（来自 ${rel}）`)
      process.exitCode = 1
      continue
    }
    walk(target)
  }
  for (const m of src.matchAll(/^\s*export\s+(?:const|function|class|type)\s+([A-Za-z_$][\w$]*)/gm))
    found.set(m[1], rel)
  for (const m of src.matchAll(/^\s*export\s*\{([^}]*)\}/gm)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/).pop()?.trim()
      if (name != null && name !== '')
        found.set(name, rel)
    }
  }
}

walk(FACADE)
const names = [...found.keys()].sort()
const args = process.argv.slice(2)

if (args.includes('--write')) {
  fs.writeFileSync(BASELINE, `${names.join('\n')}\n`)
  console.log(`已写入基线：${path.relative(ROOT, BASELINE)}（${names.length} 个符号）`)
}
else if (args.includes('--expect')) {
  const expected = Number(args[args.indexOf('--expect') + 1])
  console.log(names.join('\n'))
  console.log(`\n当前 ${names.length} 个符号，期望 ${expected} 个`)
  if (names.length !== expected) {
    console.error('✗ 导出面符号数不符')
    process.exitCode = 1
  }
  else {
    console.log('✓ 导出面符号数符合预期')
  }
}
else if (fs.existsSync(BASELINE)) {
  const baseline = fs.readFileSync(BASELINE, 'utf8').split('\n').map(s => s.trim()).filter(s => s !== '')
  const removed = baseline.filter(n => !found.has(n))
  const added = names.filter(n => !baseline.includes(n))
  console.log(`基线 ${baseline.length} 个，当前 ${names.length} 个`)
  if (removed.length > 0)
    console.log(`已移除：${removed.join(', ')}`)
  if (added.length > 0)
    console.log(`新增：${added.join(', ')}`)
  console.log(removed.length === 0 && added.length === 0
    ? '✓ 与基线一致'
    : '⚠ 与基线有差异（请核对是否为预期收回）')
}
else {
  console.log(names.join('\n'))
  console.log(`\n共 ${names.length} 个符号（尚无基线文件，可加 --write 生成）`)
}
