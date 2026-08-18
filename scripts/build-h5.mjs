#!/usr/bin/env node
// H5 打包脚本：调用 HBuilderX 官方 CLI（本地 macOS / Windows / Linux 服务器通用）
// 说明：
// - 纯 CLI 的 `uni build` 产物不完整（uni-app x 分包页面不会编译进去），
//   因此打包必须走 HBuilderX CLI：`cli publish --platform h5 --project <项目路径>`
// - 构建前后自动备份/恢复 pages.json，避免污染工作区
// - 用法：pnpm build:h5（可先用 pnpm env:test / pnpm env:prod 切换环境）
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesFile = path.join(root, 'pages.json');
const backupFile = path.join(root, '.pages.json.bak');

// ---------- 查找 HBuilderX CLI ----------
function findCli() {
  if (process.env.HBUILDERX_CLI_PATH && fs.existsSync(process.env.HBUILDERX_CLI_PATH)) {
    return process.env.HBUILDERX_CLI_PATH;
  }
  const candidates = [
    // macOS
    '/Applications/HBuilderX.app/Contents/MacOS/cli',
    // Linux（HBuilderX 官方 Linux 版常见安装目录）
    '/opt/hbuilderx/HBuilderX/cli',
    '/opt/HBuilderX/cli',
    '/usr/local/hbuilderx/HBuilderX/cli',
    // Windows
    'C:\\Program Files\\HBuilderX\\cli.exe',
    'C:\\HBuilderX\\cli.exe'
  ];
  return candidates.find(p => fs.existsSync(p)) || null;
}

const cli = findCli();
if (!cli) {
  console.error('❌ 未找到 HBuilderX CLI');
  console.error('请先安装 HBuilderX（Linux 服务器可安装官方 Linux 版），然后：');
  console.error('  方式一：设置环境变量 HBUILDERX_CLI_PATH 指向 cli 路径');
  console.error('  方式二：将 HBuilderX 安装到常见目录（/Applications/HBuilderX.app 或 /opt/hbuilderx/HBuilderX）');
  process.exit(1);
}
console.log(`📌 HBuilderX CLI: ${cli}`);

// ---------- 备份 pages.json ----------
const hadPages = fs.existsSync(pagesFile);
if (hadPages) {
  fs.copyFileSync(pagesFile, backupFile);
}

function restorePages() {
  if (hadPages) {
    fs.copyFileSync(backupFile, pagesFile);
    fs.rmSync(backupFile, { force: true });
  }
  else {
    fs.rmSync(pagesFile, { force: true });
  }
}

// ---------- 执行 cli publish ----------
const openRes = spawnSync(cli, ['project', 'open', '--path', root], { stdio: 'inherit' });
if (openRes.status !== 0) {
  restorePages();
  console.error('❌ 打开项目失败');
  process.exit(openRes.status ?? 1);
}

const publishRes = spawnSync(
  cli,
  ['publish', '--platform', 'h5', '--project', root],
  { stdio: 'inherit', timeout: 10 * 60 * 1000 }
);
restorePages();

if (publishRes.status !== 0) {
  console.error('❌ H5 打包失败');
  process.exit(publishRes.status ?? 1);
}

// ---------- 等待产物生成（cli publish 有时异步写盘） ----------
const outFile = path.join(root, 'unpackage/dist/build/web/index.html');
const deadline = Date.now() + 3 * 60 * 1000;
while (!fs.existsSync(outFile) && Date.now() < deadline) {
  spawnSync('sleep', ['2'], { stdio: 'ignore' });
}

if (!fs.existsSync(outFile)) {
  console.error('❌ 未检测到产物 unpackage/dist/build/web/index.html');
  process.exit(1);
}

console.log('✅ H5 打包成功，产物目录：unpackage/dist/build/web');
