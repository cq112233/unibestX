#!/usr/bin/env node
/**
 * 小程序包体积预算与主包限制门禁检查脚本 (Bundle Size Budget Checker)
 *
 * 工业级规范约束（微信官方标准）：
 * 1. 主包体积（Main Package）上限不得超过 2048 KB (2 MB)
 * 2. 单个分包体积（Subpackage）上限不得超过 2048 KB (2 MB)
 * 3. 整包总体积上限不得超过 20480 KB (20 MB)
 *
 * 核心功能：
 * 1. 自动定位编译产物（优先 unpackage/dist/build/mp-weixin，后 dev/mp-weixin 等）
 * 2. 依据产物 app.json / pages.json 解析分包拓扑，精确拆分核算主包与各分包体积
 * 3. 提取主包 Top 10 重点大文件（Heavy Assets & Vendors），为瘦身优化提供直接依据
 * 4. 具备预警线（80%）与阻断线（100%），超标时在 CI / 本地构建中抛出错误拦截
 * 5. 无编译产物时自动降级执行 static/ 静态大文件扫描预警
 *
 * 用法：
 *   pnpm size:check             # 检查小程序包体积
 *   pnpm size:check --warn-only # 仅警告不中断（用于非严格门禁流水线）
 *   pnpm size:check --json      # 输出 JSON 格式
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// 微信官方默认硬性限制（单位：KB）
export const DEFAULT_BUDGETS = {
  maxMainKB: 2048, // 主包上限 2MB
  maxSubKB: 2048, // 单个分包上限 2MB
  maxTotalKB: 20480, // 整包上限 20MB
  warnRatio: 0.8 // 80% 触发预警
};

/**
 * 递归收集目录下的全部文件信息
 */
export function collectFiles(dirPath, baseDir = dirPath) {
  const results = [];
  if (!fs.existsSync(dirPath))
    return results;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath, baseDir));
    }
    else if (entry.isFile()) {
      try {
        const stat = fs.statSync(fullPath);
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        results.push({
          relPath,
          fullPath,
          sizeBytes: stat.size,
          sizeKB: +(stat.size / 1024).toFixed(2)
        });
      }
      catch {}
    }
  }
  return results;
}

/**
 * 寻找小程序产物路径
 */
export function findMpDistDir(customDir) {
  if (customDir) {
    const resolved = path.isAbsolute(customDir) ? customDir : path.resolve(root, customDir);
    if (fs.existsSync(resolved))
      return resolved;
  }

  const candidates = [
    path.join(root, 'unpackage', 'dist', 'build', 'mp-weixin'),
    path.join(root, 'unpackage', 'dist', 'dev', 'mp-weixin'),
    path.join(root, 'unpackage', 'dist', 'build', 'mp-alipay'),
    path.join(root, 'unpackage', 'dist', 'dev', 'mp-alipay')
  ];

  for (const dir of candidates) {
    if (fs.existsSync(dir)) {
      return dir;
    }
  }
  return null;
}

/**
 * 解析分包配置信息
 */
export function resolveSubPackages(distDir) {
  const subPackages = [];
  let source = '';

  // 1. 优先从产物 app.json 读取（真源）
  if (distDir) {
    const appJsonPath = path.join(distDir, 'app.json');
    if (fs.existsSync(appJsonPath)) {
      try {
        const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf-8'));
        const subs = appJson.subPackages || appJson.subpackages || [];
        for (const sub of subs) {
          if (sub.root) {
            subPackages.push({
              root: sub.root.replace(/^\/+|\/+$/g, '').replace(/\\/g, '/'),
              name: sub.name || sub.root
            });
          }
        }
        source = 'app.json';
      }
      catch {}
    }
  }

  // 2. 兜底从 pages.json 或 pages.config.json 读取
  if (subPackages.length === 0) {
    const pagesJsonPath = path.join(root, 'pages.json');
    const pagesConfigPath = path.join(root, 'pages.config.json');
    const targetFile = fs.existsSync(pagesJsonPath) ? pagesJsonPath : pagesConfigPath;

    if (fs.existsSync(targetFile)) {
      try {
        const raw = fs.readFileSync(targetFile, 'utf-8');
        // 简易去除 JSON 注释
        const cleanJson = raw.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
        const pagesData = JSON.parse(cleanJson);
        const subs = pagesData.subPackages || pagesData.subpackages || [];
        for (const sub of subs) {
          if (sub.root) {
            subPackages.push({
              root: sub.root.replace(/^\/+|\/+$/g, '').replace(/\\/g, '/'),
              name: sub.name || sub.root
            });
          }
        }
        source = path.basename(targetFile);
      }
      catch {}
    }
  }

  return { subPackages, source };
}

/**
 * 核心包体积预算分析函数
 */
export function checkBundleSize(options = {}) {
  const budgets = { ...DEFAULT_BUDGETS, ...options.budgets };
  const distDir = findMpDistDir(options.dir);

  if (!distDir) {
    // 降级：未编译产物时扫描 static 大文件
    const staticFiles = collectFiles(path.join(root, 'static'), path.join(root, 'static'));
    const bigStaticFiles = staticFiles
      .filter(f => f.sizeKB >= 100)
      .sort((a, b) => b.sizeBytes - a.sizeBytes);

    return {
      hasDist: false,
      distDir: null,
      bigStaticFiles,
      passed: true
    };
  }

  const { subPackages, source } = resolveSubPackages(distDir);
  const allFiles = collectFiles(distDir);

  const mainFiles = [];
  const subMap = new Map();

  for (const sub of subPackages) {
    subMap.set(sub.root, {
      root: sub.root,
      name: sub.name,
      files: [],
      sizeBytes: 0,
      sizeKB: 0
    });
  }

  // 文件归属分流
  for (const file of allFiles) {
    let matchedSub = null;
    for (const [subRoot] of subMap) {
      if (file.relPath === subRoot || file.relPath.startsWith(`${subRoot}/`)) {
        matchedSub = subRoot;
        break;
      }
    }

    if (matchedSub) {
      const subInfo = subMap.get(matchedSub);
      subInfo.files.push(file);
      subInfo.sizeBytes += file.sizeBytes;
    }
    else {
      mainFiles.push(file);
    }
  }

  // 计算主包指标
  const mainSizeBytes = mainFiles.reduce((acc, f) => acc + f.sizeBytes, 0);
  const mainSizeKB = +(mainSizeBytes / 1024).toFixed(2);
  const mainRatio = +(mainSizeKB / budgets.maxMainKB).toFixed(3);
  const mainPassed = mainSizeKB <= budgets.maxMainKB;
  const mainWarn = !mainPassed || mainRatio >= budgets.warnRatio;

  // 计算分包指标
  const subResults = [];
  let totalSizeBytes = mainSizeBytes;
  let allSubPassed = true;

  for (const [, subInfo] of subMap) {
    subInfo.sizeKB = +(subInfo.sizeBytes / 1024).toFixed(2);
    const subRatio = +(subInfo.sizeKB / budgets.maxSubKB).toFixed(3);
    const passed = subInfo.sizeKB <= budgets.maxSubKB;
    const warn = !passed || subRatio >= budgets.warnRatio;

    if (!passed)
      allSubPassed = false;
    totalSizeBytes += subInfo.sizeBytes;

    subResults.push({
      root: subInfo.root,
      name: subInfo.name,
      fileCount: subInfo.files.length,
      sizeBytes: subInfo.sizeBytes,
      sizeKB: subInfo.sizeKB,
      ratio: subRatio,
      passed,
      warn
    });
  }

  // 整包总计
  const totalSizeKB = +(totalSizeBytes / 1024).toFixed(2);
  const totalRatio = +(totalSizeKB / budgets.maxTotalKB).toFixed(3);
  const totalPassed = totalSizeKB <= budgets.maxTotalKB;

  // 主包 Top 10 大文件
  const topMainFiles = [...mainFiles]
    .sort((a, b) => b.sizeBytes - a.sizeBytes)
    .slice(0, 10);

  const passed = mainPassed && allSubPassed && totalPassed;

  return {
    hasDist: true,
    distDir,
    configSource: source,
    budgets,
    passed,
    main: {
      fileCount: mainFiles.length,
      sizeBytes: mainSizeBytes,
      sizeKB: mainSizeKB,
      ratio: mainRatio,
      passed: mainPassed,
      warn: mainWarn,
      topFiles: topMainFiles
    },
    subPackages: subResults,
    total: {
      fileCount: allFiles.length,
      sizeBytes: totalSizeBytes,
      sizeKB: totalSizeKB,
      ratio: totalRatio,
      passed: totalPassed
    }
  };
}

/**
 * 进度条绘制函数
 */
function renderProgressBar(ratio, width = 16) {
  const percent = Math.min(Math.max(ratio, 0), 1);
  const filled = Math.round(percent * width);
  const empty = width - filled;
  return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${(percent * 100).toFixed(1)}%`;
}

// ==================== CLI 主入口 ====================
if (process.argv[1] && fileURLToPath(import.meta.url) === fs.realpathSync(process.argv[1])) {
  const args = process.argv.slice(2);
  const isJson = args.includes('--json');
  const isWarnOnly = args.includes('--warn-only');

  const dirArgIndex = args.indexOf('--dir');
  const customDir = dirArgIndex !== -1 ? args[dirArgIndex + 1] : undefined;

  const result = checkBundleSize({ dir: customDir });

  if (isJson) {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.passed || isWarnOnly ? 0 : 1);
  }

  const divider = '━'.repeat(64);
  console.log(`\n${divider}`);
  console.log('📊 小程序包体积预算与主包限制门禁 (Bundle Size Budget)');
  console.log(divider);

  if (!result.hasDist) {
    console.log('⚠️  未在项目中发现小程序编译产物（如 unpackage/dist/build/mp-weixin）。');
    console.log('💡 建议：可先通过 HBuilderX 发行小程序，或在 CI 构建完成后运行本检查。\n');

    if (result.bigStaticFiles.length > 0) {
      console.log('🔍 [源码预警] static/ 目录中发现体积大于 100KB 的大资源文件：');
      for (const file of result.bigStaticFiles.slice(0, 8)) {
        console.log(`   - ${file.relPath} (${file.sizeKB} KB)`);
      }
      console.log('\n💡 提示：静态大图片若未进分包将直接打入主包，建议：');
      console.log('   1. 挪至对应分包目录内引用；或');
      console.log('   2. 运行 pnpm optimize:img 压缩图片；或');
      console.log('   3. 上传至对象存储/CDN 并在模板中使用网络 URL。\n');
    }
    else {
      console.log('✅ static/ 目录下未发现超 100KB 的大图片，静态资源状态健康。\n');
    }
    process.exit(0);
  }

  console.log(`📁 产物目录: ${path.relative(root, result.distDir)}`);
  console.log(`📑 分包来源: ${result.configSource || '默认配置'}`);
  console.log('⚙️  限制标准: 主包 ≤ 2MB, 单分包 ≤ 2MB, 整包 ≤ 20MB\n');

  // 1. 主包概况
  const mainStatus = result.main.passed
    ? (result.main.warn ? '⚠️  接近预警线' : '✅ 安全')
    : '❌ 超标（微信将拒绝发布）';
  console.log(`📦 主包 (Main Package):`);
  console.log(`   体积: ${result.main.sizeKB} KB / ${result.budgets.maxMainKB} KB  ${renderProgressBar(result.main.ratio)}`);
  console.log(`   状态: ${mainStatus}`);
  console.log(`   文件数: ${result.main.fileCount} 个\n`);

  // 2. 分包概况
  if (result.subPackages.length > 0) {
    console.log(`🧩 分包列表 (${result.subPackages.length} 个分包):`);
    for (const sub of result.subPackages) {
      const subStatus = sub.passed
        ? (sub.warn ? '⚠️  接近预警' : '✅ 安全')
        : '❌ 超标';
      console.log(`   - [${sub.root}] (${sub.name})`);
      console.log(`     体积: ${sub.sizeKB} KB / ${result.budgets.maxSubKB} KB  ${renderProgressBar(sub.ratio)}`);
      console.log(`     状态: ${subStatus} | 文件数: ${sub.fileCount}`);
    }
    console.log();
  }
  else {
    console.log('🧩 分包列表: 当前未配置独立分包\n');
  }

  // 3. 整包总体积
  console.log(`📊 整包总计:`);
  console.log(`   总体积: ${result.total.sizeKB} KB / ${result.budgets.maxTotalKB} KB  ${renderProgressBar(result.total.ratio)}`);
  console.log(`   总文件数: ${result.total.fileCount} 个\n`);

  // 4. 主包 Top 10 大文件深度剖析
  if (result.main.topFiles.length > 0) {
    console.log('🔎 主包体积最大的前 8 个文件 (Top Heavy Assets):');
    for (let i = 0; i < Math.min(8, result.main.topFiles.length); i++) {
      const f = result.main.topFiles[i];
      console.log(`   ${i + 1}. [${f.sizeKB.toFixed(1)} KB] ${f.relPath}`);
    }
    console.log();
  }

  // 5. 门禁判定与输出
  console.log(divider);
  if (result.passed) {
    console.log('🎉 门禁检查通过！主包及各分包体积均符合微信小程序发布规范。');
    console.log(`${divider}\n`);
    process.exit(0);
  }
  else {
    console.error('🚫 门禁拦截失败！检测到主包或分包体积超标！');
    console.error('⚠️  若直接提交发布，微信公众平台将在上传/代码审核阶段强制驳回。');
    console.error('🛠️  建议优化方案：');
    console.error('   1. 优先排查上方「主包体积最大的文件」列表中的大型依赖或图片');
    console.error('   2. 将非首屏页面及独占组件迁移至 subPackages 分包目录');
    console.error('   3. 执行 pnpm optimize:img 压缩大图片，或将图片转为 CDN 链接');
    console.error('   4. 检查是否误在主包页面中全量静态导入了大型三方库\n');
    console.error(`${divider}\n`);

    if (isWarnOnly) {
      console.warn('⚠️  已开启 --warn-only 模式，跳过阻断退出。');
      process.exit(0);
    }
    process.exit(1);
  }
}
