#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';

// 运行 lint-staged，使用非并行模式并实时输出，同时捕获错误信息进行中文诊断
const child = spawn('npx', ['lint-staged', '--concurrent', 'false', '--quiet'], {
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

child.on('close', (code) => {
  if (code !== 0) {
    const divider = '━'.repeat(60);
    console.error(`\n${divider}`);
    console.error('🚫 Git 提交拦截：代码规范或样式检查未通过！');
    console.error(divider);

    // 智能中文诊断常见错误
    const tips = [];
    if (/is assigned a value but never used|no-unused-vars/.test(outputLog)) {
      tips.push('📌 【存在未使用的变量/代码】：');
      tips.push('   • 若需临时保留，请在变量名前添加下划线 "_"（例如：_a）');
      tips.push('   • 若为残留废代码，请直接删除该变量声明');
    }
    if (/order\/properties-order|Expected.*to come before/.test(outputLog)) {
      tips.push('📌 【CSS 样式属性排序不规范】：');
      tips.push('   • 请在本地执行 pnpm lint:style:fix 自动排版修复');
    }
    if (/property-no-unknown|Unknown property/.test(outputLog)) {
      tips.push('📌 【未知的 CSS 属性名称】：');
      tips.push('   • 请检查该样式属性名称是否有拼写错误');
    }

    if (tips.length > 0) {
      console.error('🔍 错误原因中文诊断：');
      for (const tip of tips) {
        console.error(tip);
      }
      console.error('');
    }

    console.error('💡 通用排查指引：');
    console.error('   1. 请查看上方报错信息中的【文件路径】与【具体行号】进行修复');
    console.error('   2. 本地可运行 pnpm lint 或 pnpm lint:style 查看详细诊断');
    console.error('   3. 紧急情况下可添加 --no-verify 跳过钩子（不推荐）：');
    console.error('      git commit -m "..." --no-verify');
    console.error(`${divider}\n`);
    process.exit(code);
  }
});
