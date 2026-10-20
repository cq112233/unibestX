#!/usr/bin/env node
/**
 * 一键清除 mock/ 下的所有文件（保留 mock/ 目录与 mock/example.ts）
 * 用法: pnpm clean:mock 或 node scripts/clean-mock.mjs
 *
 * 参数:
 *   --dry-run, -n   只预览将删除的文件，不落盘
 *   --help, -h      显示帮助
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mockDir = path.join(rootDir, 'mock');
const preservedFiles = [path.join(mockDir, 'example.ts')];

/**
 * 解析命令行参数
 * @param {string[]} argv process.argv.slice(2)
 * @returns {{ dryRun: boolean, help: boolean }}
 */
function parseArgs(argv) {
  const options = { dryRun: false, help: false };
  for (const arg of argv) {
    if (arg === '--') {
      continue;
    }
    else if (arg === '--dry-run' || arg === '-n') {
      options.dryRun = true;
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
一键清除 mock/ 下的所有文件（保留 mock/ 目录与 mock/example.ts）

用法:
  pnpm clean:mock                 # 直接清除
  pnpm clean:mock -- --dry-run    # 只预览，不删除

保留:
  · mock/example.ts（Mock 示例模板）
`);
}

/**
 * 递归收集文件与目录；返回时子目录排在父目录之前，便于由深到浅删除空目录
 * @param {string} dir 起始目录
 * @returns {{ files: string[], dirs: string[] }}
 */
function collectEntries(dir) {
  const files = [];
  const dirs = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = collectEntries(fullPath);
      files.push(...nested.files);
      dirs.push(...nested.dirs);
      dirs.push(fullPath);
    }
    else {
      files.push(fullPath);
    }
  }

  files.sort();
  return { files, dirs };
}

/**
 * 把字节数格式化为易读文本
 * @param {number} bytes 字节数
 * @returns {string}
 */
function formatSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  if (!fs.existsSync(mockDir)) {
    console.log('ℹ mock/ 目录不存在，无需清理');
    return;
  }

  const { files: allFiles, dirs } = collectEntries(mockDir);
  const files = allFiles.filter(file => !preservedFiles.includes(file));
  if (files.length == 0) {
    console.log('ℹ mock/ 下没有可清理的文件（mock/example.ts 已保留）');
    return;
  }

  const totalBytes = files.reduce((sum, file) => sum + fs.statSync(file).size, 0);
  const modeText = options.dryRun ? '预览（不会删除）' : '执行删除';
  console.log(`📦 Mock 清理目录: ${path.relative(rootDir, mockDir)}`);
  console.log(`🧹 模式: ${modeText} · ${files.length} 个文件 · ${formatSize(totalBytes)}`);
  console.log(`📌 保留: ${preservedFiles.map(file => path.relative(rootDir, file)).join(', ')}`);

  for (const file of files) {
    console.log(`  - ${path.relative(rootDir, file)}`);
  }

  if (options.dryRun) {
    console.log('\n✅ 预览完成；去掉 --dry-run 即可执行清理');
    return;
  }

  for (const file of files) {
    fs.rmSync(file, { force: true });
  }

  for (const dir of dirs) {
    if (fs.existsSync(dir) && fs.readdirSync(dir).length == 0) {
      fs.rmdirSync(dir);
    }
  }

  console.log(`\n✅ 已清除 mock/ 下 ${files.length} 个文件`);
}

try {
  main();
}
catch (error) {
  console.error(`❌ 清理失败: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
