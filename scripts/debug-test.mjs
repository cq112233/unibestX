#!/usr/bin/env node
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rawArg = process.argv[2] || '';
let targetTestFile = '';

// 判断传入的是否是测试文件
if (
  rawArg
  && (rawArg.endsWith('.test.ts')
    || rawArg.endsWith('.spec.ts')
    || rawArg.endsWith('.test.uts')
    || rawArg.endsWith('.spec.uts'))
) {
  const fullPath = path.resolve(rootDir, rawArg);
  if (fs.existsSync(fullPath)) {
    targetTestFile = rawArg;
  }
}

const vitestBin = path.resolve(rootDir, 'node_modules/vitest/vitest.mjs');
const isWatch = process.argv.includes('--watch');
const vitestMode = isWatch ? 'watch' : 'run';

const args = [vitestMode];

if (targetTestFile) {
  console.log(`🎯 正在执行单测文件断点调试: ${targetTestFile}\n`);
  args.push(targetTestFile);
}
else {
  if (rawArg) {
    console.log(`💡 提示: 当前打开的 [${rawArg}] 不是测试文件 (*.test.ts)。`);
    console.log(`🚀 已自动切换为全量单元测试断点调试...\n`);
  }
  else {
    console.log(`🚀 开始全量单元测试断点调试...\n`);
  }
}

const child = spawn(process.execPath, [vitestBin, ...args], {
  stdio: 'inherit',
  cwd: rootDir,
  env: {
    ...process.env,
    NODE_ENV: 'test'
  }
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
