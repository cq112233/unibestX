/**
 * dev 启动包装：解决「首次打开 Web 端慢」。
 *
 * 根因：dev server 进程冷启动时，第一个浏览器请求要首次加载整条中间件/插件/uni 运行时链路
 * 并触发 V8 JIT，实测首次 `/` 请求 TTFB 886ms~1.9s（页面 Load 1.6s）；一旦进程被"捂热"，
 * 后续请求 TTFB 降到 20~40ms。
 *
 * 做法：透传启动 `uni-launch`（stdio 全继承，Ctrl+C 行为不变），
 * 另起一个预热器轮询 stdout，等出现 "ready in" 后连打几次首页，把进程捂热。
 * 实测预热后用户首次访问 TTFB = 10.8ms（原 886ms）。
 *
 * 为什么不直接把预热塞进 vite.config：warmupFiles 是异步不 await，与首个浏览器请求抢 CPU，
 * 反而让第二次请求更慢（实测 1.98s）。必须先让 server 完全就绪、串行地打几发请求才有效。
 */
import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = process.env.PORT || '8080';
const BASE = `http://127.0.0.1:${PORT}/`;
// 冷启动时前几次请求是"痛苦期"（首次 1.1s、第二次 1.9s，并发抢 CPU），实测第 5 次才收敛到 40ms。
// 打 4 发足够越过痛苦期；每发之间留间隔，避免自身并发反而拖慢。
const WARMUP_HITS = Number(process.env.DEV_WARMUP_HITS || 4);
const READY_TIMEOUT_MS = 180_000;
// 默认安静：只打一行汇总；设 DEV_WARMUP_VERBOSE=1 显示每发耗时（调试预热曲线时用）
const VERBOSE = process.env.DEV_WARMUP_VERBOSE === '1';

const spawnOpts = {
  stdio: ['inherit', 'pipe', 'pipe'],
  // 与父进程同进程组：终端 Ctrl+C 时两者一起收到 SIGINT，不产生僵尸进程
  detached: false
};

const launchArgs = process.argv.slice(2);

// 缓存落在 node_modules 里，随依赖一起被清掉，不必额外加 .gitignore
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLI_CACHE_FILE = path.join(ROOT, 'node_modules', '.hbuilderx-cli-path');

/**
 * 把 HBuilderX 的 cli.exe 交给 uni-launch。
 *
 * uni-launch 自己找编辑器用的是 `wmic process where "name='HBuilderX.exe'"`，而 wmic 从
 * Windows 11 24H2 起已被系统移除，进程探测必然失败、只能退回 HBUILDERX_CLI_PATH，最后
 * 报「未检测到正在运行的 HBuilderX 进程」并 exit 1 —— 哪怕 HBuilderX 明明开着。
 *
 * 取路径的顺序：环境变量 → 上次探测的缓存 → 运行中的进程（PowerShell CIM，同
 * scripts/sync-hbuilderx.mjs 的做法）。拿到后注入 HBUILDERX_CLI_PATH，子进程默认继承
 * process.env，spawn 时无需再传。
 *
 * 为什么要缓存：HBuilderX 没开着时进程探测必然为空，可 uni-launch 一旦拿到路径就会自己
 * 先跑 `cli open` 把编辑器拉起来。不缓存的话「关掉编辑器再 dev」就直接失败；缓存路径失效
 * （编辑器被移动/升级）时也会自动重新探测，不用手工维护。
 * 一路都取不到就什么都不做，让 uni-launch 照常给出它自己的报错。
 * macOS / Linux 上 uni-launch 走 `ps` 能自己找到，不碰这段。
 */
function injectHbuilderxCliPath() {
  const preset = process.env.HBUILDERX_CLI_PATH;
  if ((preset && fs.existsSync(preset)) || process.platform !== 'win32') {
    return;
  }

  let found = readCliCache();

  if (!found) {
    found = detectRunningCli();
    if (found) {
      try {
        fs.writeFileSync(CLI_CACHE_FILE, found, 'utf-8');
      }
      catch {
        // 写不进去不影响本次启动
      }
    }
  }

  if (found) {
    process.env.HBUILDERX_CLI_PATH = found;
  }
}

/** 读上次探测到的 cli.exe；编辑器被移动或升级后路径失效，就当作没有 */
function readCliCache() {
  try {
    const cached = fs.readFileSync(CLI_CACHE_FILE, 'utf-8').trim();
    return cached && fs.existsSync(cached) ? cached : null;
  }
  catch {
    return null;
  }
}

/** 从运行中的 HBuilderX 进程反推同目录的 cli.exe */
function detectRunningCli() {
  try {
    const out = execSync(
      `powershell -NoProfile -NonInteractive -Command "Get-CimInstance Win32_Process | Where-Object { $_.Name -like 'HBuilder*' } | Select-Object -ExpandProperty ExecutablePath"`,
      { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20_000 }
    );
    for (const exe of out.split(/\r?\n/).map(s => s.trim()).filter(Boolean)) {
      const cli = path.join(path.dirname(exe), 'cli.exe');
      if (fs.existsSync(cli)) {
        return cli;
      }
    }
  }
  catch {
    // 探测失败不阻塞启动
  }
  return null;
}

injectHbuilderxCliPath();

// Windows 下 node_modules/.bin 里只有 uni-launch.cmd，而 child_process 不能直接执行 .cmd
// （spawn 会 ENOENT / EINVAL，.cmd 必须经 cmd.exe 解析 PATHEXT），所以显式套一层 cmd /c；
// 其余平台 .bin 里是带 shebang 的可执行脚本，直接 spawn 即可。
const child = process.platform === 'win32'
  ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/c', 'uni-launch', ...launchArgs], spawnOpts)
  : spawn('uni-launch', launchArgs, spawnOpts);

// 一边透传子进程输出，一边盯 "ready in"
let readyHandled = false;
let buffer = '';

function scanForReady(chunk) {
  process.stdout.write(chunk);
  if (readyHandled) {
    return;
  }
  buffer = (buffer + chunk).slice(-4096);
  if (/ready in\s/i.test(buffer)) {
    readyHandled = true;
    warmup();
  }
}

child.stdout.on('data', scanForReady);
child.stderr.on('data', chunk => process.stderr.write(chunk));

async function warmup() {
  // ready 那行打印时，中间件可能尚未完全挂载，给一个极短的让位
  await sleep(300);
  const t0 = Date.now();
  let failed = 0;
  for (let i = 1; i <= WARMUP_HITS; i++) {
    try {
      const t = Date.now();
      const res = await fetch(BASE, { headers: { 'user-agent': 'dev-warmup' } });
      await res.text();
      if (VERBOSE) {
        console.log(`[dev-warmup] 预热 ${i}/${WARMUP_HITS}  ${Date.now() - t}ms  [${res.status}]`);
      }
    }
    catch (e) {
      failed++;
      if (VERBOSE) {
        console.log(`[dev-warmup] 预热 ${i}/${WARMUP_HITS} 失败：${e.message}`);
      }
    }
    await sleep(150);
  }
  console.log(`[dev-warmup] ✔ Web 端已预热（${WARMUP_HITS} 次${failed ? `，${failed} 次失败` : ''}，${Date.now() - t0}ms）`);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// 兜底：若长时间等不到 ready，不阻塞用户
setTimeout(() => {
  if (!readyHandled) {
    console.log('[dev-warmup] 未在超时内检测到 "ready in"，跳过预热（不影响 dev 正常使用）');
  }
}, READY_TIMEOUT_MS).unref();

child.on('exit', code => process.exit(code ?? 0));
