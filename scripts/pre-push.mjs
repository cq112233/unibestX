#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';

// push 前门禁：跑 health:quick + 单元测试，避免把问题留到 CI 才发现
// health:quick 已覆盖依赖/UTS 声明/图片/配置完整性，且跳过 typecheck/lint/test（避免与 test step 重复）
const steps = [
  { name: '项目健康自检 (health:quick)', cmd: 'pnpm', args: ['health:quick'] },
  { name: '单元测试 (vitest)', cmd: 'pnpm', args: ['test'] }
];

function runStep(step) {
  return new Promise((resolve) => {
    const child = spawn(step.cmd, step.args, {
      stdio: ['inherit', 'pipe', 'pipe'],
      shell: true
    });

    let outputLog = '';
    child.stdout?.on('data', (data) => {
      process.stdout.write(data);
      outputLog += data.toString();
    });
    child.stderr?.on('data', (data) => {
      process.stderr.write(data);
      outputLog += data.toString();
    });

    child.on('close', code => resolve({ code: code ?? 1, outputLog }));
  });
}

const divider = '━'.repeat(60);

for (const step of steps) {
  console.log(`\n${divider}`);
  console.log(`▶️  正在执行：${step.name}`);
  console.log(divider);

  const { code, outputLog } = await runStep(step);

  if (code !== 0) {
    console.error(`\n${divider}`);
    console.error(`🚫 Git 推送拦截：${step.name} 未通过！`);
    console.error(divider);

    if (/failed|❌|FAIL/.test(outputLog)) {
      console.error('🔍 排查建议：');
      console.error('   • 用例失败：本地运行 pnpm test 查看完整报错');
      console.error('   • 类型/依赖问题：本地运行 pnpm health 查看全量自检');
    }

    console.error('\n💡 紧急情况下可跳过钩子（不推荐）：');
    console.error('   git push --no-verify');
    console.error(`${divider}\n`);
    process.exit(code);
  }
}

console.log(`\n${divider}`);
console.log('✅ 推送前检查全部通过，正在推送...');
console.log(`${divider}\n`);
