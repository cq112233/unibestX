#!/usr/bin/env node
/**
 * HBuilderX / HBuilderV 编译器版本同步脚本 (pnpm sync:hbuilderx)
 *
 * 背景：本项目 pin 了 4 个 @dcloudio/* 依赖，它们必须与本机编辑器的编译器版本对齐。
 * 编辑器每次升级，这 4 个版本号都要跟着手动改，改错了会在「配置期 / 编译期两套代码」
 * 之间产生难以定位的怪问题（vite.config.ts 顶层 import 用的是项目副本，dev 编译用的是
 * 编辑器自带副本，见 vite.config.ts 中 resolveUniRuntimePath 的注释）。
 *
 * 同时支持两个产品：HBuilderX（CEF/Qt）与 HBuilderV（VSCode fork，2026-09 起 alpha）。
 * 两者**版本号编码完全一致**，但安装布局截然不同 —— 详见 detectIde 与 installFromExecutable。
 *
 * 版本号映射规律（把 npm 上 3.0.0-* 全部发布按前缀分桶核对得出，3.x → 5.x 通用）：
 *   npm 版本前缀是 5 位 = 主版本(1) + 次版本(2) + 修订号(2)，即编辑器显示的 `X.YZ`
 *   实际是 `X.Y.Z`。后面拼日期与序号，构成 `3.0.0-<X0Y0Z><YYYYMMDD><序号>`。
 *
 *   | 编辑器显示 | 实际   | npm 前缀 | 实例                        |
 *   |------------|--------|----------|-----------------------------|
 *   | 3.6.17     | 3.6.17 | 30617    | 3.0.0-3061720230112001      |
 *   | 4.87       | 4.8.7  | 40807    | 3.0.0-4080720251210001      |
 *   | 5.24       | 5.2.4  | 50204    | 3.0.0-5020420260813002      |
 *   | 5.26       | 5.2.6  | 50206    | 3.0.0-5020620260917001      |
 *   | 5.31 (V)   | 5.3.1  | 50301    | 3.0.0-alpha-5030120260930001 |
 *
 *   4.x/5.x 的次版本与修订号从未超过 9（次版本快满 10 时 DCloud 直接跳主版本，
 *   4.8.7 → 5.0.3），所以这个编码在整个 uni-app x 实用范围内都成立。但编辑器
 * 各版本报出来的写法并不统一（`5.26` 是折叠的 5.2.6，`3.6.17` 是三段全写），
 *   光看字符串分不清 `5.26` 到底是 5.2.6 还是 5.26.0 —— 所以脚本不做判断，
 *   把可能的候选前缀都算出来，交给 registry 上真实存在的版本去裁决。
 *
 * 本脚本做三件事：
 *   1. 探测本机编辑器安装位置与版本号。开发者装在哪都有可能，所以不写死默认路径碰运气，
 *      而是按优先级四轮找：显式指定 → 正在运行的进程 → 系统已安装软件索引
 *      （Spotlight / 注册表 / .desktop）→ 常见默认路径兜底。版本号按布局取：
 *        HBuilderX → 自带 CLI 的 `cli --version`（如 `5.26.2026091802`，即「关于」里那个），
 *                    失败回退读 plugins/uniapp-cli-vite/package.json
 *        HBuilderV → Resources/app/product.json 的 `hbuilderxVersion` 字段
 *                    （注意：它的 Info.plist 版本是上游 VSCode 版本，用不得）
 *   2. 按上面的规律推导 npm 版本前缀，去 registry 查出 4 个包都存在的最新版本
 *   3. 只在有差异时改写 package.json 对应行并执行 pnpm install（行级替换，不重排整个文件）
 *
 * 为什么默认优先「稳定版」而不是 alpha：仓库历史上为兼容支付宝小程序临时切过 alpha 通道
 * （3973bd8ba 用 3.0.0-alpha-5030120260930001），说明 alpha 是应急手段而非默认策略。
 * 不过 HBuilderV 目前只在 alpha 通道发 npm 构建，此时会自动落到 alpha 并标注。
 *
 * 用法：
 *   pnpm sync:hbuilderx              # 同步到本机编辑器对应版本并安装依赖
 *   pnpm sync:hbuilderx --check      # 只检查是否对齐，未对齐时以退出码 1 结束（供 CI / doctor 调用）
 *   pnpm sync:hbuilderx --dry-run    # 只展示将要改成什么，不落盘（退出码始终为 0）
 *   pnpm sync:hbuilderx --alpha      # 允许并优先选择 alpha 通道的最新构建
 *   pnpm sync:hbuilderx --no-install # 只改 package.json，不跑 pnpm install
 *   pnpm sync:hbuilderx --plugins-path /path/to/HBuilderX/plugins
 *   pnpm sync:hbuilderx --ensure     # 对齐就静默过，不对齐才自动同步（挂在 dev / build 脚本前）
 *   pnpm sync:hbuilderx --preflight  # 只做本地比对，不联网；不对齐时提示并退出码 3（供 vite 插件调用）
 *
 * 为什么要 --ensure / --preflight：手动跑的脚本等于没有。--ensure 挂在所有 dev / build 脚本前面，
 * 开发者升级编辑器后下一次跑命令就自动对齐；--preflight 由 plugins/vite-plugin-editor-version.ts
 * 调用，覆盖从编辑器「运行」「发行」按钮启动的那条路（那条路不经过 npm 脚本，修不了）。
 * --preflight **只提示不阻断** —— 版本不一致未必立刻报错，但一旦报错往往是 API 行为差异、
 * 类型不匹配这类看不出根因的问题，所以每次都提醒，由开发者自己决定要不要先同步。
 */

import { execFileSync, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkgFile = path.join(root, 'package.json');

const args = process.argv.slice(2);
const hasFlag = (...names) => names.some(n => args.includes(n));

function readOption(name) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : null;
}

const isCheck = hasFlag('--check');
const isDryRun = hasFlag('--dry-run');
const skipInstall = hasFlag('--no-install');
const preferAlpha = hasFlag('--alpha');
const isPreflight = hasFlag('--preflight');
const isEnsure = hasFlag('--ensure');

/** --preflight 判定「不一致」的退出码。与「脚本自身崩了」的 1 区分开，避免误拦 */
const EXIT_DRIFT = 3;

/** 需要与编辑器编译器保持同版本号的包（顺序即 package.json 中的出现顺序） */
const UNI_PACKAGES = [
  '@dcloudio/uni-app',
  '@dcloudio/uni-cli-shared',
  '@dcloudio/uni-components',
  '@dcloudio/vite-plugin-uni'
];

// ==================== 编辑器探测 ====================

/**
 * 从「编辑器可执行文件路径」反推安装目录，给出该安装下所有可能藏着版本号的落点。
 *
 * HBuilderX（CEF/Qt）与 HBuilderV（VSCode fork）的布局完全不同，所以一次返回三种线索，
 * 由 detectIde() 逐个试：
 *
 *   macOS     <X>.app/Contents/MacOS/<exe>
 *     HBuilderX → Contents/HBuilderX/plugins、Contents/MacOS/cli
 *     HBuilderV → Contents/Resources/app/product.json
 *   Win/Linux <root>/<exe>(.exe)
 *     HBuilderX → <root>/plugins、<root>/cli
 *     HBuilderV → <root>/resources/app/product.json
 */
function installFromExecutable(execPath) {
  const exe = path.resolve(execPath);
  const macOsSegment = `${path.sep}Contents${path.sep}MacOS${path.sep}`;
  const macIdx = exe.indexOf(macOsSegment);

  if (macIdx > 0) {
    const appRoot = exe.slice(0, macIdx);
    return {
      appRoot,
      pluginsDir: path.join(appRoot, 'Contents', 'HBuilderX', 'plugins'),
      cliPath: path.join(appRoot, 'Contents', 'MacOS', 'cli'),
      productJson: path.join(appRoot, 'Contents', 'Resources', 'app', 'product.json')
    };
  }

  const installRoot = path.dirname(exe);
  return {
    appRoot: installRoot,
    pluginsDir: path.join(installRoot, 'plugins'),
    cliPath: path.join(installRoot, process.platform === 'win32' ? 'cli.exe' : 'cli'),
    productJson: path.join(installRoot, 'resources', 'app', 'product.json')
  };
}

/**
 * 列出正在运行的编辑器主程序可执行文件路径 —— 也就是「你现在打开的那个 HBuilderX / HBuilderV」。
 *
 * 为什么不照抄 @dcloudio/hbuilderx-cli 的做法：它对 `ps -ax` 的输出用
 * `/\d+\s+\?\?\s+[\d:.]+\s+(.+)/` 抽路径，依赖 TTY 列恰好显示 `??`，换个平台或
 * 换个 ps 版本就匹配不上。这里让 ps 只输出 pid 与 comm 两列，不去猜列布局；
 * Linux 的 comm 只有进程名（不带路径），再去 /proc/<pid>/exe 取真实路径。
 *
 * 进程名不写死：HBuilderV 的可执行文件叫 `HBuilderV-Alpha`（带通道后缀），
 * 且 Electron 应用会派生 `HBuilderV-Alpha Helper` 子进程，一并排掉。
 */
function runningIdeExecutables() {
  const found = [];
  const isMainBinary = p =>
    /(?:^|[/\\])HBuilder[XV][^/\\]*$/i.test(p) && !/ Helper$/i.test(p);

  try {
    if (process.platform === 'win32') {
      // wmic 从 Windows 11 24H2 起被移除，改用 PowerShell 的 CIM 查询；
      // 命令内只用单引号，避免 cmd.exe 对嵌套双引号的转义歧义
      const out = execSync(
        `powershell -NoProfile -NonInteractive -Command "Get-CimInstance Win32_Process | Where-Object { $_.Name -like 'HBuilder*' } | Select-Object -ExpandProperty ExecutablePath"`,
        { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 20_000 }
      );
      return out.split(/\r?\n/).map(s => s.trim()).filter(s => s && isMainBinary(s));
    }

    const out = execSync('ps -axo pid=,comm=', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 10_000
    });

    for (const line of out.split('\n')) {
      // 不用正则切分：`ps` 的列之间是空白，regex 里 \s+ 与后续的 .+ 能互换字符，
      // 会触发 no-super-linear-backtracking。只按第一个空格切出 pid，剩下的整体留作路径
      // —— 安装路径本身可能含空格（如 "Dino Apps"）。
      const trimmed = line.trim();
      const sep = trimmed.indexOf(' ');
      if (sep < 0) {
        continue;
      }
      const pid = trimmed.slice(0, sep);
      const comm = trimmed.slice(sep + 1).trimStart();
      if (!/^\d+$/.test(pid) || !isMainBinary(comm)) {
        continue; // 顺手排掉 crashpad_handler、HBuilderX 自带的 node 等插件进程
      }
      if (comm.includes('/')) {
        found.push(comm);
        continue;
      }
      try {
        found.push(fs.realpathSync(`/proc/${pid}/exe`));
      }
      catch {
        // 进程刚好退出或没有权限读 /proc，忽略这条
      }
    }
  }
  catch {
    // 进程探测失败不影响后面的手段
  }

  return found;
}

/**
 * 到系统自带的「已安装软件」索引里找编辑器，覆盖非默认安装位置。
 *
 * 开发者把编辑器装到哪都有可能：macOS 的 ~/Applications、Windows 的非系统盘、
 * Linux 的 AppImage 解压目录。这些位置各有各的系统级登记处，比写死一批路径靠谱。
 */
function installedIdeExecutables() {
  const found = [];
  const push = (p) => {
    if (p) {
      found.push(p);
    }
  };

  try {
    if (process.platform === 'darwin') {
      // 按 bundle id 搜：HBuilderX 是 io.dcloud.HBuilderX，HBuilderV 是 io.dcloud.hbuilderv.alpha，
      // 一条查询覆盖两个产品。再按 .app 名过滤，排掉 DCloud 产出的调试包
      // （unpackage/debug/Pandora_simulator_*.app 的 bundle id 也是 io.dcloud.*）。
      const out = execSync(`mdfind "kMDItemCFBundleIdentifier == 'io.dcloud.*'c"`, {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'pipe'],
        timeout: 20_000
      });
      for (const app of out.split('\n').map(s => s.trim()).filter(Boolean)) {
        if (/^HBuilder/i.test(path.basename(app))) {
          push(findAppExecutable(app));
        }
      }
    }
    else if (process.platform === 'win32') {
      // 查安装记录里的 InstallLocation —— 装在 D 盘、装到用户目录都能找到
      const out = execSync(
        `powershell -NoProfile -NonInteractive -Command "Get-ItemProperty 'HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*','HKLM:\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*','HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*' -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName -like '*HBuilder*' } | Select-Object -ExpandProperty InstallLocation"`,
        { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 25_000 }
      );
      for (const dir of out.split(/\r?\n/).map(s => s.trim()).filter(Boolean)) {
        push(path.join(dir, 'HBuilderX.exe'));
        push(path.join(dir, 'HBuilderV.exe'));
      }
    }
    else {
      // Linux：桌面入口文件的 Exec= 里记着真实安装路径
      const out = execSync(
        `grep -h '^Exec=' /usr/share/applications/*.desktop /usr/local/share/applications/*.desktop ~/.local/share/applications/*.desktop 2>/dev/null | grep -i hbuilder`,
        { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15_000 }
      );
      for (const line of out.split('\n')) {
        const exe = line.replace(/^Exec=/, '').trim().split(/\s+/)[0];
        push(exe ? exe.replace(/^"|"$/g, '') : null);
      }
    }
  }
  catch {
    // 系统索引查不到就靠默认路径兜底
  }

  return found;
}

/**
 * 在 .app 的 Contents/MacOS/ 下找出主可执行文件。
 *
 * 不写死名字：HBuilderX 是 `HBuilderX`，HBuilderV 是 `HBuilderV-Alpha`（带通道后缀，
 * 将来还有可能是 `HBuilderV`）。顺手排掉 Electron 的 `... Helper` 子进程。
 */
function findAppExecutable(appPath) {
  const macOsDir = path.join(appPath, 'Contents', 'MacOS');
  try {
    return fs.readdirSync(macOsDir)
      .filter(name => /^HBuilder/i.test(name) && !/ Helper/i.test(name))
      .map(name => path.join(macOsDir, name))
      .find(p => fs.statSync(p).isFile()) || null;
  }
  catch {
    return null;
  }
}

/**
 * 从版本字符串里取出 HBuilderX 版本号。
 *
 * 故意不锚定行首：HBuilderX CLI 的输出带 ANSI 颜色码（实测形如 `\x1b[1;32m5.26.2026091802\x1b[0m`），
 * 直接从中把版本号本身捞出来，既完成解析也顺带剥掉了颜色码——省掉一个独立的 ANSI 清理正则，
 * 也顺带避开了 no-control-regex 这条 lint 规则。
 *
 * 版本号后面跟着构建戳，段长度会骤增到 8 位以上，据此截断出真正的版本段。各版本报出来的
 * 写法并不统一，所以返回的是「段数组」而不是拼好的字符串：
 *   `5.26.2026091802`       → ['5', '26']       （折叠写法，实际是 5.2.6）
 *   `4.76.2025082101.0001`  → ['4', '76']
 *   `3.6.17.2023011201`     → ['3', '6', '17']  （三段全写）
 *
 * @returns {{ versionParts: string[], rawVersion: string }|null}
 */
function parseHbVersion(raw) {
  // 必须含小数点：不然 ANSI 颜色码里的 `1;32` 会被 \d+ 当成版本号匹配上
  const m = /(\d+(?:\.\d+)+)/.exec(String(raw || ''));
  if (!m) {
    return null;
  }

  const versionParts = [];
  for (const part of m[1].split('.')) {
    if (part.length > 2) {
      break; // 到构建戳了
    }
    versionParts.push(part);
  }

  if (versionParts.length < 2) {
    return null;
  }
  return { versionParts, rawVersion: m[1] };
}

const pad2 = value => String(value).padStart(2, '0');

/**
 * 由 HBuilderX 版本段推导候选 npm 版本前缀，按可能性从高到低排列。
 *
 * `5.26` 这样的折叠写法说不清是 5.2.6 还是 5.26.0，`4.8.7` 这样的三段则没有歧义。
 * 这里不做判断，把可能的都算出来，由真正存在的 npm 版本裁决（见 pickTargetVersion）。
 */
function prefixCandidates(versionParts) {
  const [major, ...rest] = versionParts;

  // 三段及以上：minor 与 patch 都显式给了，如 3.6.17 / 4.8.7
  if (rest.length >= 2) {
    return [`${major}${pad2(rest[0])}${pad2(rest[1])}`];
  }

  const collapsed = rest.join(''); // 折叠写法，如 `26`
  const candidates = [];

  // 5.26 → 5.2.6（现役规则：minor / patch 各一位）
  if (collapsed.length >= 2) {
    candidates.push(`${major}${pad2(collapsed[0])}${pad2(collapsed[1])}`);
  }
  // 5.26 → 5.26.0（minor 两位数；3.x 之后没出现过，纯保险）
  candidates.push(`${major}${pad2(collapsed)}00`);

  return candidates.filter(p => /^\d{5}$/.test(p));
}

/** 在候选位置里找 HBuilderX 的 cli 可执行文件（HBuilderV 没有这个入口） */
function findCli({ pluginsDir, cliPath }) {
  const candidates = [
    cliPath,
    path.resolve(pluginsDir, '..', 'cli'), // Windows / Linux：HBuilderX 根目录
    path.resolve(pluginsDir, '..', 'cli.exe'),
    path.resolve(pluginsDir, '..', '..', 'MacOS', 'cli') // macOS：与 plugins 不同层
  ].filter(p => typeof p === 'string' && p.length > 0);

  return candidates.find(p => fs.existsSync(p)) || null;
}

/**
 * 调 HBuilderX 自带 CLI 读主程序版本号 —— 即 HBuilderX「关于」里显示的那个，
 * 与安装包一一对应，不会因为插件目录结构调整而失效。
 *
 * 为什么不复用 node_modules/.bin/hbuilderx（@dcloudio/hbuilderx-cli）：它在检测到 HBuilderX
 * 未运行时会先执行 `open` 把应用启动起来（见该包 bin/hbuilderx.js），一个「读版本号」的动作
 * 不该带这种副作用。这里直接调安装目录里的 cli 本体，超时或失败就回退到读插件清单。
 *
 * cli 的输出带 ANSI 颜色码（实测形如 `\x1b[1;32m5.26.2026091802\x1b[0m`），
 * parseHbVersion 的正则不锚定行首，从中把版本号本身捞出来即可，无需单独清理颜色码。
 */
function readCliVersion(cli) {
  try {
    return parseHbVersion(execFileSync(cli, ['--version'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf-8',
      timeout: 15_000
    }));
  }
  catch {
    return null;
  }
}

/**
 * 读 HBuilderV 的版本号（VSCode 系布局）。
 *
 * HBuilderV 是 VSCode 的 fork，`Info.plist` 里的 CFBundleShortVersionString 是**上游 VSCode
 * 版本**（实测 `1.129.0-alpha`），拿它去推 npm 前缀只会得到垃圾。真正的产品版本在
 * `Resources/app/product.json` 的 `hbuilderxVersion` 字段（键名就叫 hbuilderxVersion），
 * 实测形如 `5.31.2026093020-alpha` —— 编号规则与 HBuilderX 完全一致，
 * 对应 npm 上的 `3.0.0-alpha-5030120260930001`（5.3.1，发布日期 2026-09-30 与构建号同日）。
 */
function readProductJsonVersion(productJson) {
  try {
    const { hbuilderxVersion } = JSON.parse(fs.readFileSync(productJson, 'utf-8'));
    const parsed = parseHbVersion(hbuilderxVersion);
    return parsed ? { ...parsed, source: productJson } : null;
  }
  catch {
    return null;
  }
}

/**
 * 读 HBuilderX 自带插件的清单版本号（HBuilderX 布局下的兜底）。
 *
 * uniapp-cli-vite 是 HBuilderX 自带的 uni-app CLI 插件，版本形如 `5.26.2026091411.1611`，
 * 前两段即编辑器主版本；uniappx-launcher / uniapp-uts-v1 同样以编辑器版本开头。
 */
function readPluginVersion(pluginsDir) {
  for (const plugin of ['uniapp-cli-vite', 'uniappx-launcher', 'uniapp-uts-v1']) {
    const manifest = path.join(pluginsDir, plugin, 'package.json');
    if (!fs.existsSync(manifest)) {
      continue;
    }
    try {
      const { version } = JSON.parse(fs.readFileSync(manifest, 'utf-8'));
      const parsed = parseHbVersion(version);
      if (parsed) {
        return { ...parsed, source: manifest };
      }
    }
    catch {
      // 单个清单读不动就继续找下一个，不因为一个坏文件放弃整个探测
    }
  }
  return null;
}

/**
 * 探测本机编辑器（HBuilderX 或 HBuilderV），按优先级分四轮，任意一轮命中即返回：
 *
 *   1. 显式指定：--plugins-path / HBUILDERX_PLUGINS_PATH / HBUILDERX_CLI_PATH
 *   2. 正在运行的编辑器进程 —— 真正意义上的「根据你打开的那个」
 *   3. 系统已安装软件索引（Spotlight / 注册表 / .desktop）
 *   4. 各平台最常见的默认安装路径，纯兜底
 *
 * 分轮而不是一次性拼出全部候选，是因为后两轮要起子进程（PowerShell / mdfind / grep），
 * 显式指定过路径或进程还在跑时没必要付这个代价。
 *
 * @returns {{ hx: object|null, tried: string[] }} hx 为 null 时 tried 记录试过哪些位置
 */
function detectIde() {
  const tried = [];
  const seen = new Set();

  const attempt = (install, via) => {
    if (!install || !install.pluginsDir) {
      return null;
    }
    const dedupeKey = process.platform === 'win32' ? install.pluginsDir.toLowerCase() : install.pluginsDir;
    if (seen.has(dedupeKey)) {
      return null;
    }
    seen.add(dedupeKey);
    tried.push(`${via} → ${install.pluginsDir}`);

    const cli = findCli(install);
    if (cli) {
      const parsed = readCliVersion(cli);
      if (parsed) {
        return { ...parsed, ...install, cliPath: cli, via, versionSource: 'cli --version' };
      }
    }
    if (fs.existsSync(install.pluginsDir)) {
      const parsed = readPluginVersion(install.pluginsDir);
      if (parsed) {
        return { ...parsed, ...install, cliPath: cli, via, versionSource: '插件清单兜底' };
      }
    }
    // HBuilderV：VSCode 系布局，没有 plugins/ 也没有 HBuilderX 的 cli
    if (fs.existsSync(install.productJson)) {
      const parsed = readProductJsonVersion(install.productJson);
      if (parsed) {
        return { ...parsed, ...install, cliPath: cli, via, versionSource: 'product.json' };
      }
    }
    return null;
  };

  const explicitPlugins = readOption('--plugins-path') || process.env.HBUILDERX_PLUGINS_PATH;
  if (explicitPlugins) {
    const hit = attempt({ pluginsDir: explicitPlugins, cliPath: null }, '--plugins-path / HBUILDERX_PLUGINS_PATH');
    if (hit) {
      return { hx: hit, tried };
    }
  }
  if (process.env.HBUILDERX_CLI_PATH) {
    const hit = attempt(installFromExecutable(process.env.HBUILDERX_CLI_PATH), 'HBUILDERX_CLI_PATH');
    if (hit) {
      return { hx: hit, tried };
    }
  }

  for (const exe of runningIdeExecutables()) {
    const hit = attempt(installFromExecutable(exe), `运行中的进程 ${exe}`);
    if (hit) {
      return { hx: hit, tried };
    }
  }

  for (const exe of installedIdeExecutables()) {
    const hit = attempt(installFromExecutable(exe), `系统索引 ${exe}`);
    if (hit) {
      return { hx: hit, tried };
    }
  }

  const home = process.env.HOME || process.env.USERPROFILE || '';
  const fallbackPluginsDirs = [
    '/Applications/HBuilderX.app/Contents/HBuilderX/plugins',
    home ? path.join(home, 'Applications/HBuilderX.app/Contents/HBuilderX/plugins') : null,
    '/opt/hbuilderx/HBuilderX/plugins',
    '/opt/HBuilderX/plugins',
    '/usr/local/hbuilderx/HBuilderX/plugins',
    'C:\\Program Files\\HBuilderX\\plugins',
    'C:\\HBuilderX\\plugins'
  ].filter(Boolean);

  for (const pluginsDir of fallbackPluginsDirs) {
    const hit = attempt({ pluginsDir, cliPath: null }, '默认安装路径');
    if (hit) {
      return { hx: hit, tried };
    }
  }

  return { hx: null, tried };
}

// ==================== npm 版本查询 ====================

/** 查某个包在 registry 上的全部版本；失败返回 null（供调用方区分「查不到」与「没有匹配」） */
function fetchVersions(pkg) {
  try {
    const out = execSync(`npm view ${pkg} versions --json`, {
      cwd: root,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf-8',
      timeout: 60_000
    });
    const parsed = JSON.parse(out);
    return Array.isArray(parsed) ? parsed : [parsed];
  }
  catch {
    return null;
  }
}

function registryUrl() {
  try {
    return execSync('npm config get registry', {
      cwd: root,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf-8'
    }).trim();
  }
  catch {
    return 'unknown';
  }
}

/**
 * 挑目标版本：候选前缀按顺序试，第一个「4 个包都发布过」的前缀胜出，
 * 在其中再按通道与日期序号排序（默认稳定版优先，--alpha 时整体按最新排）。
 *
 * 用「试前缀」而不是「算一个前缀」，是因为 HBuilderX 的版本写法不统一，
 * 单凭字符串推不出唯一答案，而 registry 上的真实版本能直接给出裁决。
 */
function pickTargetVersion(versionsByPackage, prefixes) {
  for (const prefix of prefixes) {
    const re = new RegExp(`^3\\.0\\.0-(alpha-)?${prefix}(\\d+)$`);
    const primary = versionsByPackage.get(UNI_PACKAGES[0]) || [];

    const picked = primary
      .map((version) => {
        const m = re.exec(version);
        return m ? { version, alpha: Boolean(m[1]), build: Number(m[2]) } : null;
      })
      .filter(Boolean)
      .filter(v => UNI_PACKAGES.every(p => (versionsByPackage.get(p) || []).includes(v.version)))
      .sort((a, b) => (a.alpha === b.alpha ? b.build - a.build : (preferAlpha ? Number(b.alpha) - Number(a.alpha) : Number(a.alpha) - Number(b.alpha))))[0];

    if (picked) {
      return { ...picked, prefix };
    }
  }
  return null;
}

// ==================== package.json 读写 ====================

/** 行级替换，避免 JSON.parse / stringify 重排整个 package.json 造成无谓 diff */
function patchPackageJson(source, updates) {
  let next = source;
  const applied = [];
  for (const [name, version] of updates) {
    const lineRe = new RegExp(`^(\\s*"${escapeRe(name)}":\\s*")([^"]+)(",\\s*)$`, 'm');
    const m = lineRe.exec(next);
    if (!m) {
      applied.push({ name, from: null, to: version });
      continue;
    }
    applied.push({ name, from: m[2], to: version });
    if (m[2] !== version) {
      next = next.replace(lineRe, `$1${version}$3`);
    }
  }
  return { next, applied };
}

/** 转义正则里的字面量 */
function escapeRe(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 从 package.json 现有内容里取出这 4 个依赖当前的 npm 版本前缀（`3.0.0-` / `3.0.0-alpha-` 之后那 5 位） */
function currentPinnedPrefix(source) {
  for (const pkg of UNI_PACKAGES) {
    const m = new RegExp(`^\\s*"${escapeRe(pkg)}":\\s*"3\\.0\\.0-(?:alpha-)?(\\d{5})`, 'm').exec(source);
    if (m) {
      return m[1];
    }
  }
  return null;
}

/**
 * 本地快速比对：编辑器版本推出的候选前缀，是否与 package.json 当前 pin 的前缀一致。
 *
 * 刻意**不查 registry** —— 这一步会被挂到每次 dev / build 前面，不能有网络开销。
 * 它只回答「是不是同一个编译器世代」；「这个版本还在不在 registry 上」由完整同步负责。
 *
 * @returns {{ status: 'aligned'|'drift'|'no-editor'|'no-pin'|'no-prefix', hx?: object, prefixes?: string[], pinned?: string }}
 */
function fastCheck() {
  const { hx } = detectIde();
  if (!hx) {
    return { status: 'no-editor' };
  }

  const prefixes = prefixCandidates(hx.versionParts);
  if (prefixes.length === 0) {
    return { status: 'no-prefix', hx };
  }

  const pinned = currentPinnedPrefix(fs.readFileSync(pkgFile, 'utf-8'));
  if (!pinned) {
    return { status: 'no-pin', hx };
  }

  return {
    status: prefixes.includes(pinned) ? 'aligned' : 'drift',
    hx,
    prefixes,
    pinned
  };
}

/**
 * --preflight：只回答「对齐了没」，供 vite 插件在每次 dev / build 前调用。
 *
 * **只警告、不阻断**：检出不一致时把提示写到 stderr 并以 3 退出，由调用方决定要不要拦。
 * 之所以只警告，是因为版本不一致未必立刻出错 —— 但一旦出错，症状通常是 API 行为差异或
 * 类型不匹配这种看不出根因的问题，所以值得每次都提醒一次。
 *
 * 退出码：0 = 对齐（含「本机没有编辑器」这类不该打扰人的情况）；3 = 不一致；1 = 脚本自身出错。
 */
function runPreflight() {
  const result = fastCheck();

  // 「本机没装编辑器」必须静默放行 —— CI、以及不用编辑器的同事都不该被打扰
  if (result.status !== 'drift') {
    return;
  }

  const { hx, prefixes, pinned } = result;
  console.error('');
  console.error('╔══════════════════════════════════════════════════════════════╗');
  console.error('║  ⚠️   编辑器与 package.json pin 的编译器版本不一致           ║');
  console.error('╚══════════════════════════════════════════════════════════════╝');
  console.error('');
  console.error(`    本机编辑器      ${hx.versionParts.join('.')}  (${hx.rawVersion})`);
  console.error(`    期望版本前缀    ${prefixes.join(' / ')}`);
  console.error(`    package.json    ${pinned}   ← 对不上`);
  console.error('');
  console.error('    编译器和项目依赖不同版本时，API 可能出现行为差异或类型不匹配。');
  console.error('    这类问题的报错位置通常看不出根因，排查成本很高。');
  console.error('');
  console.error('    修好它： pnpm sync:hbuilderx');
  console.error('');

  process.exit(EXIT_DRIFT);
}

/**
 * --ensure：给 dev / build 脚本用的「自动修」入口，挂在命令前面即可。
 * 对齐就一声不吭直接过（只花一次版本探测的功夫），不对齐才走完整的联网同步 + 装依赖。
 * 探测不到编辑器时同样静默放行，绝不因为 CI 或同事机器上没装编辑器就把命令卡住。
 */
function runEnsure() {
  const result = fastCheck();

  if (result.status !== 'drift') {
    return;
  }

  console.log(`\n📦 编辑器已升级到 ${result.hx.versionParts.join('.')}，package.json 还停在 ${result.pinned}，自动同步中...`);
  runSync();
}

// ==================== 主流程 ====================

function runSync() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║   📦 HBuilderX / HBuilderV 编译器版本同步 (X)    ║');
  console.log('╚══════════════════════════════════════════════════╝');

  // 1. 探测编辑器
  const { hx, tried } = detectIde();
  if (!hx) {
    console.error('\n❌ 未找到本机 HBuilderX / HBuilderV。已尝试：');
    for (const t of tried) {
      console.error(`     - ${t}`);
    }
    console.error('   请确认编辑器已安装（或先启动它），或者显式指定路径：');
    console.error('     export HBUILDERX_PLUGINS_PATH="/path/to/HBuilderX/plugins"');
    console.error('     export HBUILDERX_CLI_PATH="/path/to/HBuilderX/cli"');
    process.exit(2);
  }

  const prefixes = prefixCandidates(hx.versionParts);
  console.log(`\n🔎 编辑器: ${hx.versionParts.join('.')}  (${hx.rawVersion})`);
  console.log(`   定位: ${hx.via}`);
  console.log(`   版本来源: ${hx.source || hx.cliPath}  [${hx.versionSource}]`);
  console.log(`   候选 npm 版本前缀: ${prefixes.join(' / ')}`);

  // 2. 查 registry
  console.log(`\n🌐 查询 registry: ${registryUrl()}`);
  const versionsByPackage = new Map();
  for (const pkg of UNI_PACKAGES) {
    const versions = fetchVersions(pkg);
    if (!versions) {
      console.error(`\n❌ 无法从 registry 获取 ${pkg} 的版本列表（网络不通或包名错误）。`);
      process.exit(2);
    }
    versionsByPackage.set(pkg, versions);
  }

  const target = pickTargetVersion(versionsByPackage, prefixes);
  if (!target) {
    console.error(`\n❌ registry 上找不到匹配 ${prefixes.join(' / ')} 的版本（且 4 个包都发布过的）。`);
    const newest = (versionsByPackage.get(UNI_PACKAGES[0]) || []).slice(-5);
    console.error(`   ${UNI_PACKAGES[0]} 目前最新的几个版本：`);
    for (const v of newest) {
      console.error(`     - ${v}`);
    }
    console.error('   说明该编辑器版本尚未发 npm 构建（或镜像未同步）。可稍后重试，或改用 --alpha。');
    process.exit(2);
  }

  const channel = target.alpha ? 'alpha' : '稳定版';
  console.log(`\n🎯 匹配版本: ${target.version}  (前缀 ${target.prefix}，${channel})`);

  // 3. 对比并改写
  const source = fs.readFileSync(pkgFile, 'utf-8');
  const updates = UNI_PACKAGES.map(p => [p, target.version]);
  const { next, applied } = patchPackageJson(source, updates);

  const drifted = applied.filter(a => a.from !== a.to);
  if (drifted.length === 0) {
    console.log('\n✅ package.json 已对齐，无需改动。');
    console.log('');
    process.exit(0);
  }

  console.log('\n📋 待变更：');
  for (const a of applied) {
    if (a.from === a.to) {
      continue;
    }
    console.log(`  ${a.name}`);
    console.log(`    ${a.from === null ? '(未在 package.json 中找到)' : a.from}  →  ${a.to}`);
  }

  if (isCheck) {
    console.log('\n❌ 版本未对齐（--check 模式，不落盘）。');
    console.log('   执行 pnpm sync:hbuilderx 进行同步。');
    console.log('');
    process.exit(1);
  }

  if (isDryRun) {
    console.log('\n（--dry-run 模式，未写入 package.json。）');
    console.log('');
    process.exit(0);
  }

  fs.writeFileSync(pkgFile, next, 'utf-8');
  console.log(`\n✅ 已更新 package.json（4 处依赖 → ${target.version}）`);

  if (skipInstall) {
    console.log('⏭  已跳过 pnpm install（--no-install）。');
    console.log('');
    return;
  }

  console.log('\n📥 执行 pnpm install ...');
  try {
    execSync('pnpm install', { cwd: root, stdio: 'inherit' });
  }
  catch {
    console.error('\n❌ pnpm install 失败。package.json 已改，可修复后重试 pnpm install，或用 git checkout package.json 回滚。');
    process.exit(1);
  }

  console.log('\n🎉 同步完成。建议重启编辑器后再编译，避免旧进程仍持有旧版本编译器。');
  console.log('');
}

function main() {
  if (isPreflight) {
    runPreflight();
    return;
  }
  if (isEnsure) {
    runEnsure();
    return;
  }
  runSync();
}

try {
  main();
}
catch (err) {
  console.error('❌ 同步脚本执行异常:', err);
  process.exit(1);
}
