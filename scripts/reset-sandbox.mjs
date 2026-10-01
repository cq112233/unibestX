#!/usr/bin/env node
/**
 * 一键还原页面沙盒独立调试标记脚本
 * 用法: node scripts/reset-sandbox.mjs 或 pnpm sandbox:reset
 *
 * 作用:
 * 遍历 src 目录下所有 .uvue / .vue 文件，将 definePage 中的:
 *   debug: true     -> debug: false
 *   debugHome: true -> debugHome: false
 * 还原为 false，以便恢复全量页面编译与生产/全量联调状态。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(rootDir, 'src');

/**
 * 递归收集指定目录下所有匹配扩展名的文件
 */
function walkDir(dir, exts, results = []) {
  if (!fs.existsSync(dir)) {
    return results;
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, exts, results);
    }
    else if (entry.isFile() && exts.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function run() {
  console.log('🔍 正在扫描 src 目录下的页面文件...');
  const files = walkDir(srcDir, ['.uvue', '.vue']);
  let modifiedFilesCount = 0;
  let resetItemsCount = 0;

  for (const filePath of files) {
    const originalContent = fs.readFileSync(filePath, 'utf8');

    // 匹配 debug: true 与 debugHome: true（保留缩进、前缀、空格与后缀注释）
    let changedInFile = 0;
    const newContent = originalContent
      .replace(/(\bdebugHome\s*:\s*)true\b/g, (match, prefix) => {
        changedInFile++;
        return `${prefix}false`;
      })
      .replace(/(\bdebug\s*:\s*)true\b/g, (match, prefix) => {
        changedInFile++;
        return `${prefix}false`;
      });

    if (newContent !== originalContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modifiedFilesCount++;
      resetItemsCount += changedInFile;
      const relativePath = path.relative(rootDir, filePath);
      console.log(`  ✅ 已重置 [${changedInFile} 处]: ${relativePath}`);
    }
  }

  console.log('\n========================================');
  if (modifiedFilesCount === 0) {
    console.log('✨ 扫描完成，当前所有页面的 debug / debugHome 均为 false，无需修改。');
  }
  else {
    console.log(`🎉 重置成功！共更新 ${modifiedFilesCount} 个页面文件，还原了 ${resetItemsCount} 处调试标记。`);
  }
  console.log('========================================\n');
}

run();
