#!/usr/bin/env node
/**
 * static/ 静态图片自动化压缩工具
 *
 * 核心特性：
 * 1. 基于 sharp 高性能底层图像引擎（C++ libvips），极速处理 PNG / JPG / JPEG / WEBP
 * 2. 安全机制：压缩后体积若未减小则自动放弃写入，防止反向膨胀或画质受损
 * 3. 智能缓存：记录已处理文件的 mtime 与大小（node_modules/.cache/image-optimizer.json），避免重复压缩
 * 4. 支持模式：
 *    - pnpm optimize:img        # 执行静态资源无损/近无损压缩
 *    - pnpm optimize:img:check  # 仅检查可压缩空间，不修改任何文件
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const staticDir = path.join(root, 'static');
const cacheDir = path.join(root, 'node_modules/.cache');
const cacheFile = path.join(cacheDir, 'image-optimizer.json');

const args = process.argv.slice(2);
const isCheck = args.includes('--check');

// 允许优化的图片扩展名
const SUPPORTED_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

/**
 * 递归获取目录下所有匹配的图片文件
 */
function getAllImageFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) {
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllImageFiles(fullPath));
    }
    else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTS.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/**
 * 读取缓存
 */
function loadCache() {
  try {
    if (fs.existsSync(cacheFile)) {
      return JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    }
  }
  catch {
    // 缓存损坏或不存在时兜底返回空对象
  }
  return {};
}

/**
 * 写入缓存
 */
function saveCache(cache) {
  try {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), 'utf-8');
  }
  catch {
    // 写入失败忽略
  }
}

/**
 * 格式化字节数
 */
function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * 单图压缩处理
 */
async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const inputBuffer = fs.readFileSync(filePath);
  const originalSize = inputBuffer.length;

  let pipeline = sharp(inputBuffer);

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }
  else if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  }
  else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 80 });
  }

  const outputBuffer = await pipeline.toBuffer();
  const compressedSize = outputBuffer.length;

  return {
    originalSize,
    compressedSize,
    outputBuffer,
    savedBytes: originalSize - compressedSize,
    savedRatio: ((1 - compressedSize / originalSize) * 100).toFixed(1)
  };
}

/**
 * 主执行函数
 */
export async function runOptimizer(options = {}) {
  const targetDir = options.dir ?? staticDir;
  const checkOnly = options.check ?? isCheck;

  console.log(`\n🖼️  正在扫描图片目录: ${path.relative(root, targetDir)}/`);
  if (checkOnly) {
    console.log('🔍 运行模式: 仅检查（不修改文件）');
  }

  const files = getAllImageFiles(targetDir);
  if (files.length === 0) {
    console.log('✅ 未发现待处理的图片文件。\n');
    return { totalOriginal: 0, totalCompressed: 0, totalSaved: 0, processedCount: 0 };
  }

  const cache = loadCache();
  let totalOriginal = 0;
  let totalCompressed = 0;
  let optimizedCount = 0;
  let skippedCount = 0;
  let cachedCount = 0;

  for (const file of files) {
    const relPath = path.relative(root, file);
    const stat = fs.statSync(file);
    const cacheKey = `${relPath}:${stat.size}:${stat.mtimeMs}`;

    if (!checkOnly && cache[cacheKey]) {
      cachedCount++;
      continue;
    }

    try {
      const result = await compressImage(file);
      totalOriginal += result.originalSize;

      // 仅当压缩后体积确实变小时才采纳
      if (result.savedBytes > 0) {
        totalCompressed += result.compressedSize;
        optimizedCount++;

        const arrow = checkOnly ? '可节省' : '已压缩';
        console.log(
          `  ✓ ${relPath.padEnd(35)} ${formatBytes(result.originalSize).padStart(9)} -> ${formatBytes(result.compressedSize).padStart(9)} (${arrow} ${result.savedRatio}%)`
        );

        if (!checkOnly) {
          fs.writeFileSync(file, result.outputBuffer);
          const newStat = fs.statSync(file);
          const newCacheKey = `${relPath}:${newStat.size}:${newStat.mtimeMs}`;
          cache[newCacheKey] = true;
        }
      }
      else {
        totalCompressed += result.originalSize;
        skippedCount++;
        if (!checkOnly) {
          cache[cacheKey] = true;
        }
      }
    }
    catch (err) {
      console.warn(`  ⚠️  跳过文件 ${relPath}: ${err.message}`);
    }
  }

  if (!checkOnly) {
    saveCache(cache);
  }

  const totalSaved = totalOriginal - totalCompressed;
  const overallRatio = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : '0';

  console.log('\n📊 图片优化统计汇总:');
  console.log(`  - 扫描图片总数: ${files.length} 个`);
  console.log(`  - 本次优化/可优化: ${optimizedCount} 个`);
  if (cachedCount > 0) {
    console.log(`  - 命中文档缓存: ${cachedCount} 个 (无需重复处理)`);
  }
  if (skippedCount > 0) {
    console.log(`  - 原图已达最优: ${skippedCount} 个 (跳过避免画质损耗)`);
  }

  if (optimizedCount > 0) {
    console.log(`  - 体积优化: ${formatBytes(totalOriginal)} -> ${formatBytes(totalCompressed)} (节约 ${formatBytes(totalSaved)}, 降幅 ${overallRatio}%)`);
  }
  else {
    console.log('  🎉 所有静态图片已处于最优体积，无需额外压缩！');
  }
  console.log('');

  return {
    totalOriginal,
    totalCompressed,
    totalSaved,
    optimizedCount,
    cachedCount,
    skippedCount
  };
}

// 命令行直接执行
if (process.argv[1] && process.argv[1].endsWith('optimize-images.mjs')) {
  runOptimizer().catch((err) => {
    console.error('❌ 图片压缩执行异常:', err);
    process.exit(1);
  });
}
