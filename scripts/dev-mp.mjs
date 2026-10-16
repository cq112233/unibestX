#!/usr/bin/env node
/**
 * 小程序端开发启动守护脚本 (dev:mp-weixin / dev:mp-alipay)
 *
 * 解决痛点：
 * 1. 终端 Ctrl+C 退出后，HBuilderX 衍生的 `uni.js -p mp-*` 后台编译进程不会退出，沦为僵尸进程；
 * 2. 再次启动或修改 .env / pages.json 时，新老两个编译进程并发争抢 `unpackage/cache/.mp-*` 缓存，
 *    必定触发随机文件的 `[plugin:uts] ENOENT: no such file or directory, open '.../cache_/<hash>'`；
 * 3. 本脚本在启动前清理遗留的同平台编译进程与损坏缓存，并在终端退出时彻底终止后台编译进程。
 */
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const launchArgs = process.argv.slice(2);
const platform = launchArgs[0] || 'mp-weixin';

/**
 * 杀死该平台残留的后台 uni.js 编译进程，避免双进程并发抢写同一个缓存目录
 */
function killStaleProcesses() {
  try {
    if (process.platform === 'win32') {
      execSync(
        `powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*uni.js -p ${platform}*' } | Stop-Process -Force"`,
        { stdio: 'ignore' }
      );
    }
    else {
      execSync(`pkill -f "uni\\.js -p ${platform}"`, { stdio: 'ignore' });
    }
  }
  catch {}
}

/**
 * 清理残存或损坏的缓存目录（仅在显式传入 --clean 参数时执行）
 */
function cleanStaleCache() {
  const cacheDir = path.join(ROOT, 'unpackage', 'cache', `.${platform}`);
  if (fs.existsSync(cacheDir)) {
    try {
      fs.rmSync(cacheDir, { recursive: true, force: true });
      console.log(`[dev-mp] 已清理 ${platform} 编译缓存`);
    }
    catch {}
  }
}

// 1. 启动前清场：杀残留僵尸进程（防止双进程争抢缓存触发 ENOENT）
killStaleProcesses();

// 2. 默认保留增量编译缓存以保证秒级热重载；仅在显式传入 --clean 时才清理
const cleanIndex = launchArgs.indexOf('--clean');
if (cleanIndex !== -1) {
  cleanStaleCache();
  launchArgs.splice(cleanIndex, 1);
}

// 3. 启动 uni-launch
const uniLaunchBin = path.join(ROOT, 'node_modules', '.bin', process.platform === 'win32' ? 'uni-launch.cmd' : 'uni-launch');
const bin = fs.existsSync(uniLaunchBin) ? uniLaunchBin : 'uni-launch';
const child = process.platform === 'win32'
  ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/c', bin, ...launchArgs], { stdio: 'inherit' })
  : spawn(bin, launchArgs, { stdio: 'inherit' });

// 3. 监听退出信号（终端 Ctrl+C / kill），确保后台编译进程随之彻底退出
function cleanupAndExit() {
  killStaleProcesses();
  try {
    child.kill('SIGINT');
  }
  catch {}
  process.exit(0);
}

process.on('SIGINT', cleanupAndExit);
process.on('SIGTERM', cleanupAndExit);

child.on('exit', (code) => {
  killStaleProcesses();
  process.exit(code ?? 0);
});
