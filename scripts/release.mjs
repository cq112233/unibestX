#!/usr/bin/env node
/**
 * 自动化发版与版本发布总控脚本 (pnpm release)
 *
 * 流程体系：
 * 1. 预检：检查 Git 工作区状态并执行 TypeScript 类型检查质量门禁
 * 2. 交互式 Bump：调用 bumpp 交互式选择 patch / minor / major 或自定义版本
 * 3. 自动生成 Changelog：通过 conventional-changelog 提取提交信息追加到 CHANGELOG.md
 * 4. 自动 Commit 与 Tag：创建规范提交 chore(release): vX.Y.Z 并打上 Git Tag
 * 5. 自动推送：推送至远程仓库，无缝触发 .github/workflows/release.yml 自动发布 GitHub Release
 *
 * 用法：
 *   pnpm release           # 交互式选择发版类型并发布
 *   pnpm release --patch   # 快速发布 patch 小版本
 *   pnpm release --minor   # 快速发布 minor 中版本
 *   pnpm release --major   # 快速发布 major 主版本
 *   pnpm release --skip-check # 跳过 pre-flight 类型检查
 */

import { execSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const isHelp = args.includes('--help') || args.includes('-h');
const skipCheck = isHelp || args.includes('--skip-check') || args.includes('--no-check');
const bumppArgs = args.filter(arg => arg !== '--skip-check' && arg !== '--no-check');

const divider = '━'.repeat(60);

console.log(`\n${divider}`);
console.log('🚀 unibestX 工业级自动化发版与 CHANGELOG 生成流程');
console.log(divider);

// 1. 读取当前 package.json 版本
let currentVersion = '未知';
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf-8'));
  currentVersion = pkg.version || '1.0.0';
}
catch (err) {
  console.error('❌ 读取 package.json 失败:', err.message);
  process.exit(1);
}

console.log(`📦 当前版本: v${currentVersion}`);

// 2. 检查 Git 分支与未提交状态
try {
  const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: root, stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
  console.log(`🌿 当前分支: ${branch}`);
}
catch {
  console.warn('⚠️  未能获取当前 Git 分支名称');
}

// 3. 执行发布前质量检查 (TypeScript Strict Check)
if (!skipCheck) {
  console.log('\n🔍 [1/3] 正在执行发布前类型检查门禁 (pnpm typecheck)...');
  const typecheck = spawnSync('pnpm', ['typecheck'], { cwd: root, stdio: 'inherit', shell: true });
  if (typecheck.status !== 0) {
    console.error('\n❌ 类型检查未通过，已中断发版流程！请先修复 TypeScript 报错后再发版，或传入 --skip-check 跳过。');
    process.exit(1);
  }
  console.log('✅ 类型检查通过！');
}
else {
  console.log('\n⏭️  已跳过发布前类型检查 (--skip-check)');
}

// 4. 执行 bumpp 交互式版本递增 + CHANGELOG 自动生成
console.log('\n📝 [2/3] 启动交互式版本管理与 CHANGELOG 自动提取...');
console.log('   💡 交互说明：按 ↑ / ↓ 方向键可选择版本；选中最底部的「custom ...」回车即可自己输入任意版本号');
console.log('   💡 命令行直传：也可以直接执行 pnpm release 1.2.0 或 pnpm release minor\n');

const defaultOptions = [
  'exec',
  'bumpp',
  '--commit',
  'chore(release): v%s',
  '--tag',
  'v%s',
  '-x',
  'pnpm changelog && git add CHANGELOG.md'
];

// 如果用户未显式传入 --no-push 或 --push 等参数，bumpp 默认会交互询问或默认 push
const commandArgs = [...defaultOptions, ...bumppArgs];

const bumppProcess = spawnSync('pnpm', commandArgs, {
  cwd: root,
  stdio: 'inherit'
});

if (bumppProcess.status !== 0) {
  console.error('\n⚠️  发版流程已取消或出现异常。');
  process.exit(bumppProcess.status || 1);
}

if (args.includes('--help') || args.includes('-h')) {
  process.exit(0);
}

// 5. 发布后续提示
console.log(`\n${divider}`);
console.log('🎉 [3/3] 恭喜！版本发布成功！');
console.log('📋 流程成果：');
console.log('   1. package.json 版本号已递增并持久化');
console.log('   2. CHANGELOG.md 变更日志已自动生成并追加');
console.log('   3. Release 提交与 Git Tag 已创建并完成');
console.log('\n🌐 持续集成与发布状态追踪：');
console.log('   - 标签推送后，GitHub Actions 将全自动归档源码并发布 Release');
console.log('   - 查看 Release 进度: https://github.com/cq112233/unibestX/actions/workflows/release.yml');
console.log(`${divider}\n`);
