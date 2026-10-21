#!/usr/bin/env node
/**
 * 一键清除 src/sub 下的所有 Demo 演示页面脚本
 * 用法: node scripts/clean-demo-pages.mjs 或 pnpm clean:demo
 *
 * 作用:
 * 1. 删除 src/sub 下所有匹配 `*Demo` 的演示页面目录（默认不碰 auth / privacy / webview 等业务页）
 * 2. 移除 pages.config.json / pages.json 中对应的分包路由条目
 * 3. 清理 Tab 页里指向这些 Demo 的卡片列表（src/pages 下各 Tab 视图的模板区块与脚本区块）
 * 4. 最后扫描 src 目录，报告残留引用（如 router 配置里的示例值），提醒手动确认
 *
 * 页面路由表由 `virtual:uni-pages-route-table` 在构建期自动生成，不再产生物理文件，因此无需清理。
 *
 * 参数:
 *   --dry-run, -n        只预览将执行的操作，不落盘
 *   --pattern <后缀>     自定义匹配后缀，默认 Demo（即匹配 *Demo 目录）
 *   --keep-views         只删目录与路由，保留 Tab 页里的 Demo 卡片列表
 *   --help, -h           显示帮助
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subDir = path.join(rootDir, 'src', 'sub');

/** 页面路由配置文件（pages.json 是产物，pages.config.json 是源，两份都要同步） */
const PAGE_CONFIG_FILES = ['pages.config.json', 'pages.json'];

/** 需要扫描残留引用的文件扩展名 */
const SCAN_EXTS = ['.uvue', '.vue', '.uts', '.ts', '.mjs', '.json'];

// ---------------------------------------------------------------------------
// 命令行参数
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const options = { dryRun: false, pattern: 'Demo', keepViews: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--dry-run' || arg === '-n') {
      options.dryRun = true;
    }
    else if (arg === '--keep-views') {
      options.keepViews = true;
    }
    else if (arg === '--pattern') {
      const value = argv[++i];
      if (!value) {
        throw new Error('--pattern 需要一个后缀参数，例如 --pattern Demo');
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
一键清除 src/sub 下的所有 Demo 演示页面

用法:
  pnpm clean:demo                 # 直接清除（默认匹配 *Demo 目录）
  pnpm clean:demo -- --dry-run    # 只预览，不落盘
  pnpm clean:demo -- --pattern BasicDemo   # 只清除 *BasicDemo 目录
  pnpm clean:demo -- --keep-views # 只删目录与路由，保留 Tab 页卡片列表

清除内容:
  · src/sub/<name>Demo/                 页面目录
  · pages.config.json / pages.json      对应分包路由条目
  · src/pages/*/views/*View.uvue        指向这些 Demo 的卡片列表（模板 + 脚本区块）
  · 页面路由表由 virtual:uni-pages-route-table 在构建期生成，无需清理
`);
}

// ---------------------------------------------------------------------------
// 通用工具
// ---------------------------------------------------------------------------
/** 收集 src/sub 下所有匹配后缀的 Demo 目录名 */
function collectDemoDirs(suffix) {
  if (!fs.existsSync(subDir)) {
    throw new Error(`目录不存在: ${subDir}`);
  }
  return fs.readdirSync(subDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && entry.name.endsWith(suffix))
    .map(entry => entry.name)
    .sort();
}

/** 递归收集目录下所有指定扩展名的文件 */
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

/** 递归统计目录下的全部文件数量 */
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

const removedRoutePrefixes = new Set();

/**
 * 判断某个页面路径是否属于被清除的 Demo，兼容两种写法：
 * - 分包内的相对路径：routerBasicDemo/routerBasicDemo
 * - 完整绝对路径：/src/sub/routerBasicDemo/routerBasicDemo
 */
function isRemovedRoute(pagePath) {
  const normalized = String(pagePath ?? '')
    .replace(/^\/+/, '')
    .replace(/^src\/sub\//, '');
  return removedRoutePrefixes.has(normalized.split('/')[0]);
}

// ---------------------------------------------------------------------------
// 1. 删除演示页面目录
// ---------------------------------------------------------------------------
function removeDemoDirs(demoDirs, dryRun) {
  console.log(`📦 匹配到 ${demoDirs.length} 个 Demo 演示目录：\n`);
  for (const name of demoDirs) {
    const dir = path.join(subDir, name);
    const size = countAllFiles(dir);
    console.log(`  ${dryRun ? '🔎' : '🗑️ '} src/sub/${name}/  （${size} 个源文件）`);
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
// 2. 清理 pages.config.json / pages.json 的分包路由
// ---------------------------------------------------------------------------
function cleanPagesConfig(dryRun) {
  let removedTotal = 0;
  for (const fileName of PAGE_CONFIG_FILES) {
    const filePath = path.join(rootDir, fileName);
    if (!fs.existsSync(filePath)) {
      continue;
    }
    const original = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(original);
    let removed = 0;

    if (Array.isArray(data.subPackages)) {
      for (const pkg of data.subPackages) {
        if (!Array.isArray(pkg.pages)) {
          continue;
        }
        const kept = pkg.pages.filter((page) => {
          const hit = isRemovedRoute(page?.path);
          if (hit) {
            removed++;
          }
          return !hit;
        });
        pkg.pages = kept;
      }
    }

    if (removed === 0) {
      console.log(`  ⏭️  ${fileName}：没有需要移除的路由条目`);
      continue;
    }
    removedTotal += removed;
    console.log(`  ${dryRun ? '🔎' : '✅'} ${fileName}：移除 ${removed} 条 Demo 路由`);
    if (!dryRun) {
      // pages.json / pages.config.json 均为 2 空格缩进 + 结尾换行，round-trip 后字节一致
      fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
    }
  }
  return removedTotal;
}

// ---------------------------------------------------------------------------
// 3. 清理 Tab 页里的 Demo 卡片列表
// ---------------------------------------------------------------------------
/** 脚本中「【可选删除】Demo 数据与跳转方法」区块的起止标记 */
const SCRIPT_BLOCK_START = '【可选删除】';
const SCRIPT_BLOCK_END_PATTERN = /【可选删除】[^\n]*结束/;
/** 模板中「开发指引提示」区块的起始标记 */
const TEMPLATE_BLOCK_START = '<!-- 顶部开发指引提示';
/** 模板占位内容（清空卡片列表后保留一个可继续开发的空容器） */
const TEMPLATE_PLACEHOLDER = '<!-- 业务内容待补充：原 Demo 卡片列表与演示入口已由 scripts/clean-demo-pages.mjs 一键清除 -->';

/** 定位脚本里【可选删除】区块的 [start, end) 下标；找不到返回 null */
function locateScriptBlock(content) {
  const markerIndex = content.indexOf(SCRIPT_BLOCK_START);
  if (markerIndex < 0) {
    return null;
  }
  // 从标记行向前回溯到注释分隔线（// =====...），连同分隔线一起删除
  const lineStart = content.lastIndexOf('\n', markerIndex) + 1;
  const dividerIndex = content.lastIndexOf('// ===', lineStart);
  let start = lineStart;
  if (dividerIndex >= 0) {
    const between = content.slice(content.lastIndexOf('\n', dividerIndex) + 1, lineStart);
    const onlyComments = between.split('\n').every(line => line.trim() === '' || line.trim().startsWith('//'));
    if (onlyComments) {
      start = content.lastIndexOf('\n', dividerIndex) + 1;
    }
  }

  const tail = content.slice(markerIndex);
  const endMatch = SCRIPT_BLOCK_END_PATTERN.exec(tail);
  if (!endMatch) {
    return null;
  }
  const endLineEnd = content.indexOf('\n', markerIndex + endMatch.index + endMatch[0].length) + 1;
  return { start, end: endLineEnd > 0 ? endLineEnd : content.length };
}

/** 定位模板里「开发指引 + Demo 卡片列表」区块的 [start, end) 下标；找不到返回 null */
function locateTemplateBlock(content) {
  const start = content.indexOf(TEMPLATE_BLOCK_START);
  if (start < 0) {
    return null;
  }
  // 卡片列表是外层容器的最后一个子节点，因此区块终点 = 容器 </view> 之前
  const templateEnd = content.lastIndexOf('</template>');
  if (templateEnd < 0) {
    return null;
  }
  const wrapperClose = content.lastIndexOf('</view>', templateEnd);
  if (wrapperClose < 0 || wrapperClose < start) {
    return null;
  }
  const lineStart = content.lastIndexOf('\n', wrapperClose) + 1;
  return { start, end: lineStart };
}

function cleanDemoViews(demoDirs, dryRun) {
  const viewFiles = walkFiles(path.join(rootDir, 'src'), ['.uvue', '.vue'])
    .filter((filePath) => {
      const relPath = relative(filePath).split(path.sep).join('/');
      return !demoDirs.some(name => relPath.startsWith(`src/sub/${name}/`));
    });
  const touched = [];
  const skipped = [];

  for (const filePath of viewFiles) {
    const original = fs.readFileSync(filePath, 'utf8');
    // 该文件是否引用了被清除的 Demo 页面
    const referenced = demoDirs.filter(name => original.includes(`/src/sub/${name}/`));
    if (referenced.length === 0) {
      continue;
    }

    let content = original;
    const scriptBlock = locateScriptBlock(content);
    const templateBlock = locateTemplateBlock(content);

    if (!scriptBlock && !templateBlock) {
      skipped.push({ filePath, referenced });
      continue;
    }

    // 先删脚本区块（位置靠后），再删模板区块（位置靠前），两者的原始下标都不会受影响
    if (scriptBlock) {
      content = content.slice(0, scriptBlock.start) + content.slice(scriptBlock.end);
    }
    if (templateBlock) {
      content = `${content.slice(0, templateBlock.start)}${TEMPLATE_PLACEHOLDER}\n${content.slice(templateBlock.end)}`;
    }
    // 收掉删块留下的多余空行
    content = content.replace(/\n{3,}/g, '\n\n');

    touched.push({ filePath, referenced, content, changed: content !== original });
  }

  console.log(`\n🧹 清理 Tab 页的 Demo 卡片列表：\n`);
  if (touched.length === 0 && skipped.length === 0) {
    console.log('  ⏭️  没有页面引用这些 Demo');
  }
  for (const item of touched) {
    console.log(`  ${dryRun ? '🔎' : '✅'} ${relative(item.filePath)}：移除 ${item.referenced.length} 个 Demo 入口`);
    if (!dryRun) {
      fs.writeFileSync(item.filePath, item.content, 'utf8');
    }
  }
  for (const item of skipped) {
    console.log(`  ⚠️  ${relative(item.filePath)}：未找到标准的 Demo 区块标记，请手动清理 ${item.referenced.length} 处引用`);
  }
  return touched.length;
}

// ---------------------------------------------------------------------------
// 4. 残留引用扫描
// ---------------------------------------------------------------------------
function reportLeftovers(demoDirs) {
  const leftovers = [];
  const files = walkFiles(path.join(rootDir, 'src'), SCAN_EXTS)
    .concat(walkFiles(path.join(rootDir, 'scripts'), SCAN_EXTS));

  for (const filePath of files) {
    const relPath = relative(filePath).split(path.sep).join('/');
    if (relPath === 'scripts/clean-demo-pages.mjs') {
      continue; // 本脚本自身的说明文字不算残留
    }
    if (demoDirs.some(name => relPath.startsWith(`src/sub/${name}/`))) {
      continue; // 属于被清除的目录（dry-run 下这些文件仍在磁盘上）
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
    console.log('  ✨ src / scripts 目录下已无任何指向这些 Demo 的引用');
    return;
  }
  console.log(`  以下 ${leftovers.length} 处仍写着这些 Demo 的名字（多为注释、文档示例或路由示例值，请按需手动确认）：\n`);
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
  demoDirs.forEach(name => removedRoutePrefixes.add(name));

  console.log('========================================');
  console.log(`🧹 一键清除 src/sub 下的 Demo 页面${options.dryRun ? '（dry-run 预览模式）' : ''}`);
  console.log('========================================\n');

  removeDemoDirs(demoDirs, options.dryRun);

  console.log('🛣️  清理分包路由：');
  const removedRoutes = cleanPagesConfig(options.dryRun);

  let touchedViews = 0;
  if (options.keepViews) {
    console.log('\n🧹 已指定 --keep-views，保留 Tab 页的 Demo 卡片列表');
  }
  else {
    touchedViews = cleanDemoViews(demoDirs, options.dryRun);
  }

  console.log('\n🗂️  页面路由表由 virtual:uni-pages-route-table 在构建期生成，无需清理。');

  if (!options.dryRun) {
    reportLeftovers(demoDirs);
  }

  console.log('\n========================================');
  if (options.dryRun) {
    console.log(`🔎 预览完成：将删除 ${demoDirs.length} 个目录、${removedRoutes} 条路由、清理 ${touchedViews} 个 Tab 视图。`);
    console.log('   确认无误后去掉 --dry-run 重新执行即可落盘。');
  }
  else {
    console.log(`🎉 清理完成：删除 ${demoDirs.length} 个 Demo 目录、${removedRoutes} 条路由，`
      + `同步更新 ${touchedViews} 个 Tab 页。`);
    console.log('   提示：改动可随时用 git checkout / git restore 回滚；下次 dev/build 时 vite-plugin-uni-pages 会再校验一次路由。');
  }
  console.log('========================================\n');
}

run();
