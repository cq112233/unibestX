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
 *
 * 除了预热，本文件还是 dev 的「HBuilderX 状态守门人」：编辑器没开时直接报错退出，
 * 而不是让 uni-launch 去自动启动它（那条路会让终端无限卡住）。原因见 ensureHbuilderxRunning。
 */
import { execFileSync, execSync, spawn } from 'node:child_process';
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
 * 确认 HBuilderX 在运行，并把它的 cli.exe 交给 uni-launch；没在运行就直接拦下。
 *
 * 为什么要自己拦这一步：uni-launch 拿到 cli 路径后，只要它认为「HBuilderX 没在运行」
 * （Windows 上它用 `wmic process where "name='HBuilderX.exe'"` 查进程，而 wmic 从 Win11
 * 24H2 起已被系统移除，这个判断在 Windows 上**永远**是「没在运行」），就会先跑 `cli open`
 * 把编辑器拉起来，紧接着对**还没就绪**的编辑器发 `project open` / `launch`。后两条命令等不到
 * 响应就永远等下去 —— 表现出来就是编辑器被拉起来了、终端却卡死，180s 后只等到 dev-warmup
 * 那句「未在超时内检测到 ready in」。所以「编辑器没开」这个前置条件必须由我们自己判断掉，
 * 根本不进那条自动启动路径。
 *
 * 判断方式用 `cli --version`：编辑器在跑时它打印版本号（实测 `5.26.2026091802`，耗时约 90ms），
 * 没在跑时打印的是「未检测到已打开的HBuilderX」这类提示。两条线索都认，互为兜底：
 *   - 输出里出现那句提示 → 没在跑（最直接的证据，优先）
 *   - 输出里有版本号     → 在跑
 * 不把提示语当唯一依据，是因为文案会随版本改；也不把版本号当唯一依据，是因为提示语里一旦
 * 带上安装路径（本项目实测就装在 `HBuilderX.5.26.2026091802` 这种带版本号的目录下），
 * 路径本身就能骗过「有没有版本号」的判断。两条一起看，任一信号失效还有另一条兜住。
 *
 * 路径来源的优先级：环境变量 → 上次探测的缓存 → 现场查进程表（PowerShell CIM）。
 * 有缓存时只付一次 cli 调用的代价，不用起 PowerShell 查系统进程表。
 * 一路都取不到 cli 路径就什么都不做：uni-launch 会自己报「未找到 HBuilderX」并以 1 退出，
 * 既快又明确，不必我们再复述一遍。
 * macOS / Linux 上 uni-launch 走 `ps` 能正确判断编辑器在不在，不需要这段。
 */
function ensureHbuilderxRunning() {
  if (process.platform !== 'win32') {
    return;
  }

  const preset = process.env.HBUILDERX_CLI_PATH;
  const known = preset && fs.existsSync(preset) ? preset : readCliCache();
  let notRunning = null;

  if (known) {
    const output = cliVersionOutput(known);
    if (isIdeRunning(output)) {
      process.env.HBUILDERX_CLI_PATH = known;
      return;
    }
    notRunning = { cli: known, output };
  }

  // 缓存/环境变量里的这个 cli 说编辑器没在跑：可能是真没开，也可能是编辑器被移动或升级、
  // 路径指向了旧安装。查一次系统进程表把两者分开，别把「换了新版本」误判成「没开」。
  const located = detectRunningCli();
  if (located) {
    writeCliCache(located);
    process.env.HBUILDERX_CLI_PATH = located;
    return;
  }

  // 进程表里也确实没有。此时若本来就有一个 cli 路径（说明这台机器装过编辑器，只是没开），
  // 就明确报错退出；一路都没找到 cli 则交给 uni-launch 报它自己的「未找到 HBuilderX」。
  if (notRunning) {
    failWithoutHbuilderx(notRunning);
  }
}

/** cli 在「编辑器没打开」时给出的提示语 —— 不是唯一判据，见 ensureHbuilderxRunning */
const IDE_NOT_RUNNING_HINT = '未检测到已打开的HBuilderX';

/**
 * 问一次 cli 本体：编辑器是不是已经能接命令了。
 *
 * 返回原始输出；一旦 cli 自身起不来（超时、非 0 退出）也把 error 上挂着的输出拼回来 ——
 * 判定只看输出内容，不关心退出码。
 */
function cliVersionOutput(cli) {
  const options = { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf-8', timeout: 15_000 };
  try {
    return `${execFileSync(cli, ['--version'], options)}`.trim();
  }
  catch (err) {
    return `${err?.stdout ?? ''}${err?.stderr ?? ''}`.trim();
  }
}

/** 输出带版本号、且没有「没打开」的提示 = 编辑器在跑（两个信号的含义见 ensureHbuilderxRunning） */
function isIdeRunning(output) {
  return !output.includes(IDE_NOT_RUNNING_HINT) && /\d+\.\d+/.test(output);
}

/** 编辑器没开：明确报错退出，绝不把 cli 路径交给 uni-launch 去自动启动（那会卡死） */
function failWithoutHbuilderx({ cli, output }) {
  console.error('');
  console.error('❌ HBuilderX 没有在运行，dev 无法开始编译。');
  console.error('');
  console.error(`   cli 路径：${cli}`);
  console.error(`   cli --version：${output || '(无输出)'}`);
  console.error('');
  console.error('   请先打开 HBuilderX，再重新执行 pnpm dev。');
  console.error('');
  process.exit(1);
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

/** 记下探测到的 cli.exe，下次启动省掉一次系统进程表查询；写不进去不影响本次启动 */
function writeCliCache(cli) {
  try {
    fs.writeFileSync(CLI_CACHE_FILE, cli, 'utf-8');
  }
  catch {
    // 忽略
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

ensureHbuilderxRunning();

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
