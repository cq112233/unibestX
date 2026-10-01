#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import process from 'node:process';

const commitMsgFile = process.argv[2];
let commitMsg = '';
if (commitMsgFile) {
  try {
    commitMsg = readFileSync(commitMsgFile, 'utf8').trim();
  }
  catch { }
}

// 执行 commitlint 校验
const result = spawnSync('npx', ['--no-install', 'commitlint', '--edit', commitMsgFile || ''], {
  stdio: 'inherit',
  shell: true
});

if (result.status !== 0) {
  const divider = '━'.repeat(60);
  console.error(`\n${divider}`);
  console.error('🚫 Git 提交拦截：Commit Message 不符合规范！');
  console.error(divider);
  if (commitMsg) {
    console.error(`❌ 当前输入: "${commitMsg}"`);
  }
  console.error('\n📋 标准提交格式：<type>(<可选范围>): <描述>');
  console.error('   例如: feat: 新增商品搜索页面');
  console.error('   例如: fix: 修复 tabbar 切换偶发闪烁问题\n');
  console.error('📌 常用 Type 类型说明：');
  console.error('   feat:     ✨ 新增功能 (feature)');
  console.error('   fix:      🐛 修复 Bug');
  console.error('   docs:     📝 文档变更');
  console.error('   style:    💄 代码格式、样式变动（不影响代码运行逻辑）');
  console.error('   refactor: ♻️  代码重构（既不修复 bug 也不添加功能）');
  console.error('   perf:     ⚡ 性能优化');
  console.error('   test:     ✅ 测试相关（新增、修改测试）');
  console.error('   chore:    🔧 构建流程、依赖管理或辅助工具的变动');
  console.error('   revert:   ⏪ 代码回退/撤销之前的提交');
  console.error('   types:    🏷️  类型声明与契约类型变动\n');
  console.error('⚠️  核心要点：type 后面为英文半角冒号加空格，即 "type: 描述"');
  console.error(`${divider}\n`);
  process.exit(result.status || 1);
}
