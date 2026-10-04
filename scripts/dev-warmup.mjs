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
import { spawn } from 'node:child_process';

const PORT = process.env.PORT || '8080';
const BASE = `http://127.0.0.1:${PORT}/`;
// 冷启动时前几次请求是"痛苦期"（首次 1.1s、第二次 1.9s，并发抢 CPU），实测第 5 次才收敛到 40ms。
// 打 4 发足够越过痛苦期；每发之间留间隔，避免自身并发反而拖慢。
const WARMUP_HITS = Number(process.env.DEV_WARMUP_HITS || 4);
const READY_TIMEOUT_MS = 180_000;
// 默认安静：只打一行汇总；设 DEV_WARMUP_VERBOSE=1 显示每发耗时（调试预热曲线时用）
const VERBOSE = process.env.DEV_WARMUP_VERBOSE === '1';

const child = spawn('uni-launch', process.argv.slice(2), {
  stdio: ['inherit', 'pipe', 'pipe'],
  // 与父进程同进程组：终端 Ctrl+C 时两者一起收到 SIGINT，不产生僵尸进程
  detached: false
});

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
