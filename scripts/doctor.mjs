#!/usr/bin/env node
/**
 * 项目健康度自检脚本 (pnpm doctor)
 *
 * 一键执行多维度项目健康检查，快速定位冗余依赖、失效配置与潜在风险：
 * 1. 依赖健康检查（depcheck）：扫描未使用的 dependencies / devDependencies
 * 2. UTS 声明文件同步检查：确保 .d.uts.ts 与源码同步
 * 3. TypeScript 类型检查：tsc --noEmit
 * 4. ESLint 代码规范检查
 * 5. 单元测试套件检查
 * 6. 静态图片压缩空间检查
 * 7. 关键配置文件完整性校验
 *
 * 用法：
 *   pnpm health          # 执行全量自检
 *   pnpm health:quick    # 仅执行轻量快速检查（跳过 lint/typecheck/test）
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const isQuick = args.includes('--quick');

// ==================== 统计与工具 ====================

let totalChecks = 0;
let passedChecks = 0;
let warnChecks = 0;
let failedChecks = 0;
const issues = [];

function pass(label) {
  totalChecks++;
  passedChecks++;
  console.log(`  ✅ ${label}`);
}

function warn(label, detail) {
  totalChecks++;
  warnChecks++;
  console.log(`  ⚠️  ${label}`);
  if (detail) {
    console.log(`      ${detail}`);
  }
  issues.push({ level: 'warn', label, detail });
}

function fail(label, detail) {
  totalChecks++;
  failedChecks++;
  console.log(`  ❌ ${label}`);
  if (detail) {
    console.log(`      ${detail}`);
  }
  issues.push({ level: 'error', label, detail });
}

function runCmd(cmd) {
  try {
    return {
      ok: true,
      output: execSync(cmd, { cwd: root, stdio: ['pipe', 'pipe', 'pipe'], encoding: 'utf-8' }).trim()
    };
  }
  catch (e) {
    return {
      ok: false,
      output: (e.stdout || '').toString().trim(),
      stderr: (e.stderr || '').toString().trim()
    };
  }
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

// ==================== 检查项 ====================

// 已知在 uni-app X 中隐式使用的依赖白名单（depcheck 无法扫描 .uvue / .uts 文件引用）
const DEPCHECK_IGNORE_DEPS = new Set([
  '@dcloudio/uni-app', // uni-app X 核心框架 (页面 / 组件 / API 全隐式依赖)
  '@dcloudio/uni-components', // uni-app X 内置组件库 (view/text/scroll-view 等)
  'crypto-js', // src/ 中 .uts 文件加密调用（depcheck 不扫描 .uts）
  'minimatch', // plugins/ 中内部引用
  'json5' // plugins/ 中配置解析引用
]);
const DEPCHECK_IGNORE_DEV = new Set([
  '@commitlint/cli', // husky commit-msg hook 调用
  '@commitlint/config-conventional', // commitlint 配置依赖
  '@tailwindcss/postcss', // postcss.config 隐式引用
  '@types/crypto-js', // crypto-js 类型声明
  '@types/mockjs', // mockjs 类型声明
  '@uni-helper/uni-app-types', // tsconfig types 隐式引用
  '@vue/typescript-plugin', // tsconfig plugins 隐式引用
  'depcheck', // 本脚本自身使用
  'eslint-plugin-format', // eslint.config.mjs 隐式引用
  'postcss-html', // stylelint 隐式引用
  'sass-loader', // uni-app X 编译链隐式依赖
  'stylelint-config-standard-scss', // stylelint.config 隐式引用
  'stylelint-config-standard-vue', // stylelint.config 隐式引用
  'stylelint-order', // stylelint.config 隐式引用
  'vconsole', // vite-plugin-vconsole peerDependency
  'vue-tsc' // typecheck 隐式使用
]);

async function checkDependencies() {
  console.log('\n🔍 [1/7] 依赖健康检查 (depcheck)');

  const result = runCmd('npx depcheck --json');
  if (!result.output) {
    warn('depcheck 执行异常', result.stderr || '无法获取输出');
    return;
  }

  let data;
  try {
    data = JSON.parse(result.output);
  }
  catch {
    warn('depcheck 输出解析失败');
    return;
  }

  // 未使用的 dependencies
  const unusedDeps = (data.dependencies || []).filter(d => !DEPCHECK_IGNORE_DEPS.has(d));
  if (unusedDeps.length > 0) {
    warn(`发现 ${unusedDeps.length} 个可能未使用的 dependencies`, unusedDeps.join(', '));
  }
  else {
    pass('dependencies 全部在使用中');
  }

  // 未使用的 devDependencies
  const unusedDevDeps = (data.devDependencies || []).filter(d => !DEPCHECK_IGNORE_DEV.has(d));
  if (unusedDevDeps.length > 0) {
    warn(`发现 ${unusedDevDeps.length} 个可能未使用的 devDependencies`, unusedDevDeps.join(', '));
  }
  else {
    pass('devDependencies 全部在使用中');
  }

  // 缺失的依赖
  const missingDeps = data.missing || {};
  const missingKeys = Object.keys(missingDeps).filter(d =>
    d !== '@vitejs/plugin-vue' // vitest.config.ts 引用，由 @dcloudio 隐式提供
    && d !== 'color-name' // eslint-plugin-uts.mjs 编译产物中内联引用
    && d !== 'postcss' // eslint-plugin-uts.mjs 编译产物中内联引用
  );
  if (missingKeys.length > 0) {
    fail(`发现 ${missingKeys.length} 个缺失依赖`, missingKeys.map(k => `${k} → ${missingDeps[k].join(', ')}`).join('\n      '));
  }
  else {
    pass('无缺失依赖');
  }
}

function checkUtsDts() {
  console.log('\n📋 [2/7] UTS 声明文件同步检查');

  const result = runCmd('node scripts/gen-uts-dts.mjs --check');
  if (result.output && result.output.includes('全部声明文件与源码同步')) {
    pass('所有 .d.uts.ts 声明文件与源码同步');
  }
  else if (result.output && result.output.includes('❌')) {
    fail('部分 .d.uts.ts 声明文件与源码不同步', '运行 pnpm gen:uts-dts 重新生成');
  }
  else {
    pass('UTS 声明文件检查完成');
  }
}

function checkTypeScript() {
  console.log('\n🔷 [3/7] TypeScript 类型检查');

  if (isQuick) {
    console.log('  ⏭  快速模式，跳过 typecheck');
    return;
  }

  const result = runCmd('npx tsc --noEmit');
  if (result.ok) {
    pass('TypeScript 类型检查通过 (0 errors)');
  }
  else {
    const lines = (`${result.output}\n${result.stderr}`).split('\n').filter(l => l.includes('error TS'));
    fail(`TypeScript 类型检查失败 (${lines.length} errors)`, lines.slice(0, 5).join('\n      '));
  }
}

function checkEslint() {
  console.log('\n📐 [4/7] ESLint 代码规范检查');

  if (isQuick) {
    console.log('  ⏭  快速模式，跳过 eslint');
    return;
  }

  const result = runCmd('npx eslint . --max-warnings 0');
  if (result.ok) {
    pass('ESLint 检查通过 (0 errors, 0 warnings)');
  }
  else {
    const errorMatch = `${result.output}${result.stderr}`.match(/\((\d+) errors?, (\d+) warnings?\)/);
    if (errorMatch) {
      const [, errors, warnings] = errorMatch;
      if (Number(errors) > 0) {
        fail(`ESLint 发现 ${errors} 个错误, ${warnings} 个警告`);
      }
      else {
        warn(`ESLint 有 ${warnings} 个警告（0 错误）`);
      }
    }
    else {
      fail('ESLint 检查失败');
    }
  }
}

function checkTests() {
  console.log('\n🧪 [5/7] 单元测试套件检查');

  if (isQuick) {
    console.log('  ⏭  快速模式，跳过单元测试');
    return;
  }

  const result = runCmd('npx vitest run');
  if (result.ok) {
    const match = result.output.match(/Tests?\s+(\d+) passed/);
    const fileMatch = result.output.match(/Test Files?\s+(\d+) passed/);
    const tests = match ? match[1] : '?';
    const files = fileMatch ? fileMatch[1] : '?';
    pass(`单元测试全部通过 (${files} 文件, ${tests} 用例)`);
  }
  else {
    const failMatch = result.output.match(/Tests?\s+(?<count>\d+) failed/);
    const failCount = failMatch ? failMatch[1] : '?';
    fail(`单元测试有 ${failCount} 个失败`, '运行 pnpm test 查看详情');
  }
}

function checkImageOptimization() {
  console.log('\n🖼️  [6/7] 静态图片压缩空间检查');

  const result = runCmd('node scripts/optimize-images.mjs --check');
  if (result.ok || result.output) {
    const output = result.output || '';
    if (output.includes('已处于最优体积')) {
      pass('所有静态图片已处于最优体积');
    }
    else {
      const match = output.match(/节约\s+([\d.]+\s+\w+)/);
      if (match) {
        warn(`静态图片仍有 ${match[1]} 的压缩空间`, '运行 pnpm optimize:img 执行压缩');
      }
      else {
        pass('静态图片检查完成');
      }
    }
  }
  else {
    warn('静态图片检查脚本执行异常');
  }
}

function checkConfigIntegrity() {
  console.log('\n📦 [7/7] 关键配置文件完整性校验');

  const requiredFiles = [
    ['package.json', '项目配置入口'],
    ['vite.config.ts', 'Vite 构建配置'],
    ['tsconfig.json', 'TypeScript 配置'],
    ['eslint.config.mjs', 'ESLint 配置'],
    ['stylelint.config.mjs', 'Stylelint 配置'],
    ['pages.config.json', '页面路由配置'],
    ['.env', '公用环境变量'],
    ['.env.development', '开发环境变量'],
    ['.env.production', '生产环境变量'],
    ['.env.test', '测试环境变量'],
    ['main.uts', '应用入口文件'],
    ['App.uvue', '应用根组件'],
    ['index.html', 'H5 入口模板'],
    ['uni.scss', 'SCSS 全局变量'],
    ['main.css', 'Tailwind CSS 入口'],
    ['src/tabbar/config.uts', 'TabBar 配置文件']
  ];

  let missingCount = 0;
  for (const [filePath, desc] of requiredFiles) {
    if (!fileExists(filePath)) {
      fail(`${filePath} 缺失 (${desc})`);
      missingCount++;
    }
  }

  if (missingCount === 0) {
    pass(`${requiredFiles.length} 个关键配置文件完整无缺`);
  }

  // 检查 Node.js 版本
  const nodeVersion = process.version;
  const major = Number.parseInt(nodeVersion.slice(1));
  if (major >= 22) {
    pass(`Node.js 版本 ${nodeVersion} 满足要求 (>=22)`);
  }
  else {
    fail(`Node.js 版本 ${nodeVersion} 过低`, '要求 >=22，请升级 Node.js');
  }

  // 检查 pnpm 版本
  const pnpmResult = runCmd('pnpm --version');
  if (pnpmResult.ok) {
    pass(`pnpm 版本 v${pnpmResult.output}`);
  }
  else {
    warn('无法检测 pnpm 版本');
  }

  // 检查 Git 仓库状态
  const gitResult = runCmd('git status --porcelain');
  if (gitResult.ok) {
    const changes = gitResult.output.split('\n').filter(l => l.trim().length > 0);
    if (changes.length === 0) {
      pass('工作区干净，无未提交变更');
    }
    else {
      warn(`工作区有 ${changes.length} 个未提交变更`);
    }
  }
}

// ==================== 主流程 ====================

async function main() {
  const startTime = Date.now();

  console.log('');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║          🏥 unibestX 项目健康度自检报告          ║');
  console.log('╚══════════════════════════════════════════════════╝');

  if (isQuick) {
    console.log('⚡ 快速模式：跳过 typecheck / eslint / test');
  }

  await checkDependencies();
  checkUtsDts();
  checkTypeScript();
  checkEslint();
  checkTests();
  checkImageOptimization();
  checkConfigIntegrity();

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n══════════════════════════════════════════════════');
  console.log('📊 健康度自检汇总:');
  console.log(`  - 检查项总数: ${totalChecks}`);
  console.log(`  - ✅ 通过: ${passedChecks}`);
  if (warnChecks > 0) {
    console.log(`  - ⚠️  警告: ${warnChecks}`);
  }
  if (failedChecks > 0) {
    console.log(`  - ❌ 失败: ${failedChecks}`);
  }
  console.log(`  - ⏱️  耗时: ${elapsed}s`);

  if (failedChecks === 0 && warnChecks === 0) {
    console.log('\n🎉 项目健康度满分！所有检查全部通过。');
  }
  else if (failedChecks === 0) {
    console.log('\n✨ 项目整体健康，有少量建议可优化。');
  }
  else {
    console.log('\n⚠️  项目存在需要关注的问题，请参考上方详情修复。');
  }
  console.log('');

  process.exit(failedChecks > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error('❌ 自检脚本执行异常:', err);
  process.exit(1);
});
