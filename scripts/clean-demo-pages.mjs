#!/usr/bin/env node
/**
 * 一键清除 src/sub 下的 Demo 演示页面。
 *
 * 用法：node scripts/clean-demo-pages.mjs 或 pnpm clean:demo
 *
 * 作用：
 * 1. 删除 src/sub 下匹配 `*Demo` 的演示目录，不影响 auth 等业务分包。
 * 2. 从 pages.config.json 移除对应分包路由。
 * 3. 扫描 src / scripts，报告仍指向这些目录的残留引用。
 *
 * pages.json 是 vite-plugin-uni-pages 的生成物，本脚本不会直接修改；
 * 下次 dev/build 时会根据 pages.config.json 自动重建。
 *
 * 参数：
 *   --dry-run, -n     只预览，不落盘
 *   --pattern <后缀>  自定义目录后缀，默认 Demo
 *   --help, -h        显示帮助
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subDir = path.join(rootDir, 'src', 'sub');
const pagesConfigPath = path.join(rootDir, 'pages.config.json');

/** 需要扫描残留引用的文件扩展名 */
const SCAN_EXTS = ['.uvue', '.vue', '.uts', '.ts', '.mjs', '.json'];

// ---------------------------------------------------------------------------
// 命令行参数
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const options = { dryRun: false, pattern: 'Demo', help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--dry-run' || arg === '-n') {
      options.dryRun = true;
    }
    else if (arg === '--pattern') {
      const value = argv[++i];
      if (!value) {
        throw new Error('--pattern 需要一个后缀参数，例如 --pattern FunctionDemo');
      }
      options.pattern = value;
    }
    else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
    else {
      throw new Error(`未知参数: ${arg}`);
    }
  }
  return options;
}

function printHelp() {
  console.log(`
一键清除 src/sub 下的 Demo 演示页面

用法:
  pnpm clean:demo                              # 清除 *Demo 目录
  pnpm clean:demo -- --dry-run                 # 只预览，不落盘
  pnpm clean:demo -- --pattern FunctionDemo    # 只清除 *FunctionDemo

清除内容:
  · src/sub/<name>Demo/        页面目录
  · pages.config.json          对应分包路由

不会修改:
  · pages.json                 由 uni-pages 插件重新生成
  · src/sub/auth/              登录等业务分包
`);
}

// ---------------------------------------------------------------------------
// 通用工具
// ---------------------------------------------------------------------------
function collectDemoDirs(suffix) {
  if (!fs.existsSync(subDir)) {
    throw new Error(`目录不存在: ${subDir}`);
  }
  return fs.readdirSync(subDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && entry.name.endsWith(suffix))
    .map(entry => entry.name)
    .sort();
}

function walkFiles(dir, exts, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, exts, results);
    }
    else if (entry.isFile() && exts.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function countAllFiles(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    total += entry.isDirectory() ? countAllFiles(path.join(dir, entry.name)) : 1;
  }
  return total;
}

function relative(filePath) {
  return path.relative(rootDir, filePath);
}

const removedDirNames = new Set();

/**
 * 兼容分包相对路径与完整路径：
 * - httpBasicDemo/httpBasicDemo
 * - /src/sub/httpBasicDemo/httpBasicDemo
 */
function isRemovedRoute(pagePath) {
  const normalized = String(pagePath ?? '')
    .replace(/^\/+/, '')
    .replace(/^src\/sub\//, '');
  return removedDirNames.has(normalized.split('/')[0]);
}

// ---------------------------------------------------------------------------
// 1. 删除演示页面目录
// ---------------------------------------------------------------------------
function removeDemoDirs(demoDirs, dryRun) {
  console.log(`📦 匹配到 ${demoDirs.length} 个 Demo 目录：\n`);
  for (const name of demoDirs) {
    const dir = path.join(subDir, name);
    console.log(`  ${dryRun ? '🔎' : '🗑️ '} src/sub/${name}/  （${countAllFiles(dir)} 个源文件）`);
  }
  console.log('');

  if (dryRun) {
    return;
  }
  for (const name of demoDirs) {
    fs.rmSync(path.join(subDir, name), { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------------------
// 2. 清理 pages.config.json 的分包路由
// ---------------------------------------------------------------------------
function cleanPagesConfig(dryRun) {
  if (!fs.existsSync(pagesConfigPath)) {
    console.log('  ⏭️  pages.config.json 不存在，跳过路由清理');
    return 0;
  }

  const original = fs.readFileSync(pagesConfigPath, 'utf8');
  let data;
  try {
    data = JSON.parse(original);
  }
  catch (error) {
    throw new Error(`pages.config.json 解析失败: ${error.message}`);
  }

  let removed = 0;
  if (Array.isArray(data.subPackages)) {
    for (const pkg of data.subPackages) {
      if (!Array.isArray(pkg.pages)) {
        continue;
      }
      pkg.pages = pkg.pages.filter((page) => {
        const hit = isRemovedRoute(page?.path);
        if (hit) {
          removed++;
        }
        return !hit;
      });
    }
  }

  if (removed === 0) {
    console.log('  ⏭️  pages.config.json：没有需要移除的路由条目');
    return 0;
  }

  console.log(`  ${dryRun ? '🔎' : '✅'} pages.config.json：移除 ${removed} 条 Demo 路由`);
  if (!dryRun) {
    fs.writeFileSync(pagesConfigPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  }
  return removed;
}

// ---------------------------------------------------------------------------
// 3. 残留引用扫描
// ---------------------------------------------------------------------------
function reportLeftovers(demoDirs) {
  const files = walkFiles(path.join(rootDir, 'src'), SCAN_EXTS)
    .concat(walkFiles(path.join(rootDir, 'scripts'), SCAN_EXTS));
  const leftovers = [];

  for (const filePath of files) {
    const relPath = relative(filePath).split(path.sep).join('/');
    if (relPath === 'scripts/clean-demo-pages.mjs') {
      continue;
    }
    if (demoDirs.some(name => relPath.startsWith(`src/sub/${name}/`))) {
      continue;
    }

    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    lines.forEach((line, index) => {
      const hit = demoDirs.find(name => line.includes(name));
      if (hit) {
        leftovers.push(`${relative(filePath)}:${index + 1}  ${line.trim().slice(0, 100)}`);
      }
    });
  }

  console.log('\n🔍 残留引用检查：');
  if (leftovers.length === 0) {
    console.log('  ✨ src / scripts 目录下已无指向这些 Demo 的引用');
    return;
  }

  console.log(`  以下 ${leftovers.length} 处仍需手动确认：\n`);
  for (const line of leftovers) {
    console.log(`    ${line}`);
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function run() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  }
  catch (error) {
    console.error(`❌ ${error.message}`);
    process.exitCode = 1;
    return;
  }

  if (options.help) {
    printHelp();
    return;
  }

  const demoDirs = collectDemoDirs(options.pattern);
  if (demoDirs.length === 0) {
    console.log(`✨ src/sub 下没有匹配「*${options.pattern}」的目录，无需清理。`);
    return;
  }
  demoDirs.forEach(name => removedDirNames.add(name));

  console.log('========================================');
  console.log(`🧹 清除 src/sub 下的 Demo 页面${options.dryRun ? '（dry-run 预览模式）' : ''}`);
  console.log('========================================\n');

  removeDemoDirs(demoDirs, options.dryRun);

  console.log('🛣️  清理分包路由：');
  const removedRoutes = cleanPagesConfig(options.dryRun);

  if (!options.dryRun) {
    reportLeftovers(demoDirs);
  }

  console.log('\n========================================');
  if (options.dryRun) {
    console.log(`🔎 预览完成：将删除 ${demoDirs.length} 个目录、${removedRoutes} 条路由。`);
    console.log('   确认无误后去掉 --dry-run 重新执行。');
  }
  else {
    console.log(`🎉 清理完成：删除 ${demoDirs.length} 个 Demo 目录、${removedRoutes} 条路由。`);
    console.log('   pages.json 将在下次 dev/build 时由 uni-pages 插件重新生成。');
  }
  console.log('========================================\n');
}

run();
