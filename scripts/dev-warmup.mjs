/**
 * dev 启动包装：管理 HBuilderX 状态守门、Mock 环境与端口生命周期。
 *
 * 1. 作为 dev 的「HBuilderX 状态守门人」：编辑器没开时直接报错退出，
 *    避免让 uni-launch 自动启动 HBuilderX 导致终端卡死（见 ensureHbuilderxRunning）。
 * 2. 透传启动 `uni-launch` 并监听动态端口，在进程退出时准确清理对应端口与子进程。
 * 3. 维护本地 Mock 模式标记缓存。
 */
import { execFileSync, execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = process.env.PORT || '9527';
let actualPort = PORT;

const spawnOpts = {
  stdio: ['inherit', 'pipe', 'pipe'],
  // 与父进程同进程组：终端 Ctrl+C 时两者一起收到 SIGINT，不产生僵尸进程
  detached: false
};

const launchArgs = process.argv.slice(2);

// 缓存落在 node_modules 里，随依赖一起被清掉，不必额外加 .gitignore
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CLI_CACHE_FILE = path.join(ROOT, 'node_modules', '.hbuilderx-cli-path');

const MOCK_CACHE_DIR = path.join(ROOT, 'node_modules', '.cache');
const MOCK_ACTIVE_FILE = path.join(MOCK_CACHE_DIR, 'mock-active.json');
const isMockMode = process.env.VITE_USE_MOCK === 'true';

if (isMockMode) {
  try {
    if (!fs.existsSync(MOCK_CACHE_DIR)) {
      fs.mkdirSync(MOCK_CACHE_DIR, { recursive: true });
    }
    fs.writeFileSync(MOCK_ACTIVE_FILE, JSON.stringify({ pid: process.pid, time: Date.now() }), 'utf-8');
    console.log('\x1B[32m[dev:mock] 🚀 本地 Mock 模式已激活（已自动切换为 H5 代理模式）\x1B[0m');
  }
  catch {}
}
else {
  // 普通开发模式，确保清理残留的 mock 标记
  try {
    if (fs.existsSync(MOCK_ACTIVE_FILE)) {
      fs.unlinkSync(MOCK_ACTIVE_FILE);
    }
  }
  catch {}
}

function cleanupMockActiveFile() {
  if (isMockMode) {
    try {
      if (fs.existsSync(MOCK_ACTIVE_FILE)) {
        fs.unlinkSync(MOCK_ACTIVE_FILE);
      }
    }
    catch {}
  }
}

/**
 * 自动填充 HBUILDERX_CLI_PATH 环境变量：
 * 避免在 macOS / Linux 上 HBuilderX 未开启时，uni-launch 找不到 cli 路径报错退出。
 */
function populateHbuilderxCliEnv() {
  if (process.env.HBUILDERX_CLI_PATH && fs.existsSync(process.env.HBUILDERX_CLI_PATH)) {
    return;
  }

  // 1. 尝试从 process.env 或 .env 文件的 HBUILDERX_PLUGINS_PATH 反推 cli
  let pluginsPath = process.env.HBUILDERX_PLUGINS_PATH;
  if (!pluginsPath) {
    const envFile = path.join(ROOT, '.env');
    if (fs.existsSync(envFile)) {
      try {
        const envContent = fs.readFileSync(envFile, 'utf-8');
        const match = envContent.match(/^HBUILDERX_PLUGINS_PATH=(.+)$/m);
        if (match && match[1]) {
          pluginsPath = match[1].trim();
        }
      }
      catch {}
    }
  }

  if (pluginsPath) {
    const candidate = path.resolve(pluginsPath, '..', '..', 'MacOS', 'cli');
    if (fs.existsSync(candidate)) {
      process.env.HBUILDERX_CLI_PATH = candidate;
      return;
    }
  }

  // 2. macOS 常见位置推导（优先 Alpha，再稳定版）
  if (process.platform === 'darwin') {
    const macCandidates = [
      '/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli',
      '/Applications/HBuilderX.app/Contents/MacOS/cli'
    ];
    for (const p of macCandidates) {
      if (fs.existsSync(p)) {
        process.env.HBUILDERX_CLI_PATH = p;
        return;
      }
    }
  }
}

populateHbuilderxCliEnv();

/**
 * 确认 HBuilderX 在运行，并把它的 cli.exe 交给 uni-launch；没在运行就直接拦下。
 *
 * 为什么要自己拦这一步：uni-launch 拿到 cli 路径后，只要它认为「HBuilderX 没在运行」
 * （Windows 上它用 `wmic process where "name='HBuilderX.exe'"` 查进程，而 wmic 从 Win11
 * 24H2 起已被系统移除，这个判断在 Windows 上**永远**是「没在运行」），就会先跑 `cli open`
 * 把编辑器拉起来，紧接着对**还没就绪**的编辑器发 `project open` / `launch`。后两条命令等不到
 * 响应就永远等下去 —— 表现出来就是编辑器被拉起来了、终端却卡死。所以「编辑器没开」这个前置条件
 * 必须由我们自己判断掉，根本不进那条自动启动路径。
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

// 透传子进程输出，并捕获实际监听端口供退出时精准清理
function handleStdout(chunk) {
  process.stdout.write(chunk);
  const text = chunk.toString();
  const portMatch = text.match(/Local:\s+http:\/\/localhost:(\d+)\//i);
  if (portMatch && portMatch[1]) {
    actualPort = portMatch[1];
  }
}

child.stdout.on('data', handleStdout);
child.stderr.on('data', chunk => process.stderr.write(chunk));

/**
 * 杀死占用指定端口的服务端进程（仅针对 LISTENING 状态，严禁误杀客户端进程或 HBuilderX）
 */
function killPortProcesses(port) {
  const targetPort = port || actualPort || PORT;
  try {
    if (process.platform === 'win32') {
      const out = execSync(`netstat -ano -p tcp | findstr /R /C:":${targetPort} .*LISTENING"`, {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore']
      });
      const pids = out.split(/\r?\n/)
        .map(line => line.trim().split(/\s+/).pop())
        .filter(pid => pid && /^\d+$/.test(pid) && pid !== '0');
      for (const pid of pids) {
        try {
          const procName = execSync(`tasklist /FI "PID eq ${pid}" /FO CSV /NH`, {
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'ignore']
          });
          if (/hbuilder/i.test(procName)) {
            continue;
          }
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
        }
        catch {}
      }
    }
    else {
      // 必须加 -sTCP:LISTEN！绝不查 ESTABLISHED 等客户端连接（否则会命中并误杀 HBuilderX 内置浏览器进程）
      const out = execSync(`lsof -ti tcp:${targetPort} -sTCP:LISTEN`, {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore']
      });
      const pids = out.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      for (const pid of pids) {
        try {
          const comm = execSync(`ps -p ${pid} -o comm=`, {
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'ignore']
          });
          // 绝对不能误杀 HBuilderX 进程
          if (/hbuilder/i.test(comm)) {
            continue;
          }
          process.kill(Number(pid), 'SIGKILL');
        }
        catch {}
      }
    }
  }
  catch {}
}

function cleanupAndExit() {
  cleanupMockActiveFile();
  if (child && !child.killed) {
    try {
      child.kill('SIGINT');
    }
    catch {}
  }
  killPortProcesses(actualPort || PORT);
  process.exit(0);
}

process.on('SIGINT', cleanupAndExit);
process.on('SIGTERM', cleanupAndExit);
process.on('exit', cleanupMockActiveFile);

child.on('exit', (code) => {
  cleanupMockActiveFile();
  process.exit(code ?? 0);
});
