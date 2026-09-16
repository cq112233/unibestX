#!/usr/bin/env node
// H5 打包脚本：调用 HBuilderX 官方 CLI（本地 macOS / Windows / Linux 服务器通用）
// 说明：
// - 纯 CLI 的 `uni build` 产物不完整（uni-app x 分包页面不会编译进去），
//   因此打包必须走 HBuilderX CLI：`cli publish --platform h5 --project <项目路径>`
// - 构建前后自动备份/恢复 pages.json，避免污染工作区
// - 针对测试打包（--env test）：临时生成 .env.production.local，构建完成后自动清理，绝无残留
// - 用法：
//     pnpm build:h5              # 默认生产打包
//     node scripts/build-h5.mjs --env test   # 测试打包（执行完立即自动清理临时环境）
//     node scripts/build-h5.mjs --env prod   # 生产打包
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesFile = path.join(root, 'pages.json');
const backupFile = path.join(root, '.pages.json.bak');
const commonEnvFile = path.join(root, '.env');
const testEnvFile = path.join(root, '.env.test');
const prodLocalFile = path.join(root, '.env.production.local');

// ---------- 解析环境参数 ----------
const args = process.argv.slice(2);
let targetEnv = 'prod';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--env' && args[i + 1]) {
    targetEnv = args[i + 1];
    break;
  }
  if (args[i] === 'test' || args[i] === 'prod') {
    targetEnv = args[i];
    break;
  }
}

let createdTempEnv = false;
const readIfExists = file => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');

function setupEnv() {
  if (targetEnv === 'test') {
    if (!fs.existsSync(testEnvFile)) {
      console.error(`❌ 未找到测试配置文件: ${testEnvFile}`);
      process.exit(1);
    }
    const content = `${[
      '# ===== 由 scripts/build-h5.mjs 打包临时生成，打包结束后自动清理，勿手改 =====',
      readIfExists(commonEnvFile).trim(),
      readIfExists(testEnvFile).trim()
    ]
      .filter(Boolean)
      .join('\n\n')}\n`;
    fs.writeFileSync(prodLocalFile, content);
    createdTempEnv = true;
    console.log('🧪 正在以【测试环境】打包 H5（已注入临时配置，构建完将自动清理）');
  }
  else {
    if (fs.existsSync(prodLocalFile)) {
      fs.rmSync(prodLocalFile, { force: true });
      console.log('🧹 检测到残留的 .env.production.local，已自动清理以确保纯正生产构建');
    }
    console.log('🚀 正在以【生产环境】打包 H5');
  }
}

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

// ---------- 备份 pages.json 与环境设置 ----------
setupEnv();

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

function restoreEnv() {
  if (createdTempEnv && fs.existsSync(prodLocalFile)) {
    fs.rmSync(prodLocalFile, { force: true });
    console.log('🧹 已自动清理临时测试环境文件（.env.production.local），工作区已恢复默认');
  }
}

function cleanup() {
  restorePages();
  restoreEnv();
}

// 监听中断信号，确保即使被中断也能清理干净
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
  console.error('未捕获异常:', err);
  process.exit(1);
});

try {
  // ---------- 1. 清理旧构建产物，防止构建失败时残留旧包伪装成功 ----------
  const outDir = path.join(root, 'unpackage/dist/build/web');
  const outFile = path.join(outDir, 'index.html');
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
    console.log('🧹 已清理旧的 H5 构建产物，确保全新编译');
  }

  // ---------- 2. 检查并确保 HBuilderX 处于运行状态 ----------
  const checkRes = spawnSync(cli, ['--version'], { encoding: 'utf8' });
  const checkOutput = `${checkRes.stdout ?? ''} ${checkRes.stderr ?? ''}`;
  if (checkOutput.includes('未检测到已打开的HBuilderX')) {
    console.log('⏳ 检测到 HBuilderX 尚未运行，正在自动启动 HBuilderX 并等待就绪...');
    spawnSync(cli, ['open'], { stdio: 'ignore' });
    // 等待 HBuilderX 进程和服务初始化
    for (let i = 0; i < 10; i++) {
      spawnSync('sleep', ['1'], { stdio: 'ignore' });
      const readyRes = spawnSync(cli, ['--version'], { encoding: 'utf8' });
      const readyOut = `${readyRes.stdout ?? ''} ${readyRes.stderr ?? ''}`;
      if (!readyOut.includes('未检测到已打开的HBuilderX')) {
        break;
      }
    }
  }

  // ---------- 3. 打开项目并执行 cli publish ----------
  const openRes = spawnSync(cli, ['project', 'open', '--path', root], { stdio: 'inherit' });
  if (openRes.status !== 0) {
    console.error('❌ 打开项目失败');
    process.exit(openRes.status ?? 1);
  }

  const publishRes = spawnSync(
    cli,
    ['publish', '--platform', 'h5', '--project', root],
    { stdio: 'inherit', timeout: 10 * 60 * 1000 }
  );

  if (publishRes.status !== 0) {
    console.error('❌ H5 打包失败');
    process.exit(publishRes.status ?? 1);
  }

  // ---------- 4. 等待全新产物生成（cli publish 异步写盘） ----------
  const deadline = Date.now() + 3 * 60 * 1000;
  while (!fs.existsSync(outFile) && Date.now() < deadline) {
    spawnSync('sleep', ['2'], { stdio: 'ignore' });
  }

  if (!fs.existsSync(outFile)) {
    console.error('❌ 未检测到新编译产物 unpackage/dist/build/web/index.html，打包未实际生效！');
    process.exit(1);
  }

  console.log('✅ H5 全新打包成功，产物目录：unpackage/dist/build/web');
}
finally {
  cleanup();
}
