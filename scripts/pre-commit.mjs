#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';

// 运行 lint-staged，使用非并行与静默模式，去除内部杂乱日志
const child = spawn('npx', ['lint-staged', '--concurrent', 'false', '--quiet'], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  if (code !== 0) {
    const divider = '━'.repeat(60);
    console.error(`\n${divider}`);
    console.error('🚫 Git 提交拦截：代码规范或样式检查未通过！');
    console.error(divider);
    console.error('💡 排查与处理提示：');
    console.error('   1. 请查看上方报错信息中的【文件路径】与【具体行号】进行修复');
    console.error('   2. 本地可运行 pnpm lint 或 pnpm lint:style 查看详细诊断');
    console.error('   3. 紧急情况下可添加 --no-verify 跳过钩子（不推荐）：');
    console.error('      git commit -m "..." --no-verify');
    console.error(`${divider}\n`);
    process.exit(code);
  }
});
