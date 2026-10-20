#!/usr/bin/env node
/**
 * H5 一键独立部署脚本
 *
 * 核心设计：
 * - 源码分支（main）与部署分支（gh-pages）彻底解耦，源码仓库零构建产物污染
 * - 自动保留远程 gh-pages 上的现有 docs/（VitePress 官网），两站互不覆盖
 * - 使用 Git 底层独立索引（GIT_INDEX_FILE + commit-tree）直接推送到远端 gh-pages 分支
 * - 整个过程不改变本地工作区状态、不污染暂存区、不修改本地分支指针
 *
 * 用法：
 *   pnpm deploy:h5              # 自动先执行本地 H5 打包，随后一键推送到 gh-pages 分支
 *   pnpm deploy:h5 --skip-build # 跳过打包步骤，直接使用本地已有的 unpackage/dist/build/web 发布
 *   pnpm deploy:h5 --env test   # 以测试环境打包并部署
 *   pnpm deploy:h5 --dry-run    # 仅模拟部署流程，不执行最后的 git push
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'unpackage/dist/build/web');
const distIndex = path.join(distDir, 'index.html');

// ---------- 解析命令行参数 ----------
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
用法:
  pnpm deploy:h5 [选项]

选项:
  -s, --skip-build    跳过本地 H5 打包步骤，直接发布现有产物
  --env <env>         打包环境（test | prod，默认 prod）
  --remote <remote>   远程仓库名称（默认 origin）
  --branch <branch>   目标部署分支（默认 gh-pages）
  -m, --message <msg> 自定义 Git 提交信息
  --dry-run           演练模式，仅生成提交不执行远程推送
  -h, --help          显示本帮助信息
`);
  process.exit(0);
}

const skipBuild = args.includes('--skip-build') || args.includes('-s');
const dryRun = args.includes('--dry-run');

let targetEnv = 'prod';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--env' && args[i + 1]) {
    targetEnv = args[i + 1];
    break;
  }
}

let remoteName = 'origin';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--remote' && args[i + 1]) {
    remoteName = args[i + 1];
    break;
  }
}

let targetBranch = 'gh-pages';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--branch' && args[i + 1]) {
    targetBranch = args[i + 1];
    break;
  }
}

let customMessage = '';
for (let i = 0; i < args.length; i++) {
  if ((args[i] === '--message' || args[i] === '-m') && args[i + 1]) {
    customMessage = args[i + 1];
    break;
  }
}

console.log('🚀 [unibestX] 开始准备部署 H5 演示站到 GitHub Pages...');

// ---------- 1. 构建前置检查与执行 ----------
if (!skipBuild) {
  console.log(`📦 正在调用 H5 打包脚本（环境: ${targetEnv}）...`);
  const buildCmd = [
    'scripts/sync-hbuilderx.mjs',
    '--ensure'
  ];
  const syncRes = spawnSync('node', buildCmd, { cwd: root, stdio: 'inherit' });
  if (syncRes.status !== 0) {
    console.error('❌ HBuilderX 同步检查失败，终止部署');
    process.exit(syncRes.status ?? 1);
  }

  const buildArgs = ['scripts/build-h5.mjs', '--env', targetEnv];
  const buildRes = spawnSync('node', buildArgs, { cwd: root, stdio: 'inherit' });
  if (buildRes.status !== 0) {
    console.error('❌ H5 打包失败，终止部署');
    process.exit(buildRes.status ?? 1);
  }
}
else {
  console.log('⏩ 已指定 --skip-build，跳过 H5 本地编译步骤');
}

// 确保产物目录与入口文件存在
if (!fs.existsSync(distIndex)) {
  console.error(`❌ 未找到 H5 编译产物：${distIndex}`);
  console.error('   提示：请先执行 pnpm build:h5，或去掉 --skip-build 参数重新运行');
  process.exit(1);
}

// ---------- 2. 创建临时发布目录并拉取现有 docs ----------
const tempDeployDir = fs.mkdtempSync(path.join(os.tmpdir(), 'unibestx-deploy-h5-'));
const tempIndexFile = path.join(tempDeployDir, '.temp-git-index');

function cleanup() {
  try {
    if (fs.existsSync(tempDeployDir)) {
      fs.rmSync(tempDeployDir, { recursive: true, force: true });
    }
  }
  catch (_e) {
    // 忽略清理临时目录时的告警
  }
}

process.on('SIGINT', () => {
  cleanup();
  process.exit(130);
});
process.on('SIGTERM', () => {
  cleanup();
  process.exit(143);
});
process.on('uncaughtException', (err) => {
  cleanup();
  console.error('❌ 部署异常中断:', err);
  process.exit(1);
});

try {
  // 尝试从远程分支提取现存的 docs/ 官网文档，避免 H5 部署把官网覆盖丢了
  console.log(`🔍 正在检查远程 ${remoteName}/${targetBranch} 分支的官网文档（docs/）...`);
  spawnSync('git', ['fetch', remoteName, targetBranch, '--depth=1'], {
    cwd: root,
    stdio: 'ignore'
  });

  const hasRemoteBranch = spawnSync(
    'git',
    ['rev-parse', '--verify', `${remoteName}/${targetBranch}`],
    { cwd: root, stdio: 'ignore' }
  ).status === 0;

  if (hasRemoteBranch) {
    spawnSync(
      'sh',
      ['-c', `git archive ${remoteName}/${targetBranch} docs 2>/dev/null | tar -x -C "${tempDeployDir}" 2>/dev/null || true`],
      { cwd: root, stdio: 'ignore' }
    );
    if (fs.existsSync(path.join(tempDeployDir, 'docs'))) {
      console.log('📚 已成功保留远程 gh-pages 现有的 docs/ 官网文档');
    }
    else {
      console.log('ℹ️ 远程 gh-pages 分支暂无 docs/ 目录，将仅发布 H5 根站');
    }
  }
  else {
    console.log(`ℹ️ 远程暂无 ${targetBranch} 分支，将创建全新孤立分支`);
  }

  // ---------- 3. 复制本地 H5 产物到临时发布目录 ----------
  console.log(`📂 正在合并本地产物到临时发布目录 (${distDir} -> ${tempDeployDir})...`);
  fs.cpSync(distDir, tempDeployDir, {
    recursive: true,
    force: true,
    filter: (src) => {
      // 避免误拷贝子目录内的 docs 冲掉远程官网
      const rel = path.relative(distDir, src);
      return rel !== 'docs';
    }
  });

  // 写入 .nojekyll，防止 GitHub Pages 过滤带下划线的前端静态资源与 JSON
  fs.writeFileSync(path.join(tempDeployDir, '.nojekyll'), '');

  // ---------- 4. 使用 Git 底层命令生成孤立 Commit ----------
  console.log('🔨 正在生成独立的 Git 提交对象（不污染当前工作区与暂存区）...');

  const gitEnv = {
    ...process.env,
    GIT_INDEX_FILE: tempIndexFile
  };

  // 添加所有文件到独立临时索引
  const addRes = spawnSync('git', ['--work-tree', tempDeployDir, 'add', '-A'], {
    cwd: root,
    env: gitEnv,
    stdio: 'inherit'
  });
  if (addRes.status !== 0) {
    throw new Error('git add 到临时索引失败');
  }

  // 写入 tree
  const writeTreeRes = spawnSync('git', ['write-tree'], {
    cwd: root,
    env: gitEnv,
    encoding: 'utf8'
  });
  if (writeTreeRes.status !== 0 || !writeTreeRes.stdout.trim()) {
    throw new Error(`git write-tree 失败: ${writeTreeRes.stderr}`);
  }
  const treeId = writeTreeRes.stdout.trim();

  // 创建 commit
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const commitMsg = customMessage || `deploy: update H5 demo (${timestamp}) [skip ci]`;
  const commitRes = spawnSync('git', ['commit-tree', treeId, '-m', commitMsg], {
    cwd: root,
    encoding: 'utf8'
  });
  if (commitRes.status !== 0 || !commitRes.stdout.trim()) {
    throw new Error(`git commit-tree 失败: ${commitRes.stderr}`);
  }
  const commitId = commitRes.stdout.trim();

  console.log(`📌 生成部署 Commit: ${commitId.slice(0, 8)} (${commitMsg})`);

  // ---------- 5. 推送到远端 gh-pages 分支 ----------
  if (dryRun) {
    console.log('🧪 已开启 --dry-run，跳过远程推送');
    console.log('✅ 部署目录与 Commit 校验全部通过！');
  }
  else {
    console.log(`📡 正在推送到 ${remoteName}/${targetBranch}...`);
    const pushRes = spawnSync(
      'git',
      ['push', remoteName, `${commitId}:refs/heads/${targetBranch}`, '--force'],
      { cwd: root, stdio: 'inherit' }
    );
    if (pushRes.status !== 0) {
      throw new Error(`git push 失败，退出码: ${pushRes.status}`);
    }

    console.log('\n========================================================');
    console.log('🎉 H5 演示站已成功一键部署到 GitHub Pages！');
    console.log(`🌐 访问地址: https://cq112233.github.io/unibestX/`);
    console.log('✨ 提示：main 分支保持 100% 纯净源码，未引入任何构建产物文件');
    console.log('========================================================\n');
  }
}
finally {
  cleanup();
}
