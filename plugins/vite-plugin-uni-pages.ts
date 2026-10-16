import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import JSON5 from 'json5';
import {
  parse as cjParse,
  stringify as cjStringify,
  CommentArray
} from 'comment-json';
import * as ts from 'typescript';
import type { Plugin } from 'vite';
import { loadEnv } from 'vite';
import { loadAllPlatformPageVariants } from './pages-json-util';

/**
 * uni-pages 核心插件：扫描 src/pages 与 src/sub 下的 .uvue，解析页面内的
 * `<route>` / `definePage({...})` 声明，与 pages.config.json 合并，生成 pages.json。
 *
 * 本文件**自包含**：页面扫描、宏解析、.env 读取、落盘都在这里，不依赖任何 plugins/ 下的共享模块。
 *
 * ## 与三个卫星插件（sandbox / tabbar / route-meta）的关系
 *
 * 它们是各自独立的 Vite 插件（各自一个文件、各自在 vite.config.ts 注册），但**不是** Vite 生命周期
 * 独立的：它们必须在**同一次生成 pass** 内、按固定顺序、对同一份可变构建状态做变换。因此本插件在
 * `configResolved` 时从 `config.plugins` 里发现所有携带 `uniPagesStage` 属性的插件，按 `order` 升序收集，
 * 并在每次生成里依次运行 —— 于是「恰好执行一次、顺序固定、route-meta 一定看到最终结果」结构性成立，
 * 不依赖任何 Vite 时序假设。卫星只需在自己的插件对象上挂一个 `uniPagesStage` 字段即可被发现。
 */

// ==========================================
// 类型（自包含；卫星各自定义结构等价的类型，无需 import）
// ==========================================

export type PageConfig = {
  path: string;
  style?: Record<string, any>;
  [key: string]: any;
};

export type SubPackageConfig = {
  root: string;
  pages: PageConfig[];
};

export type PlatformVariant<P> = {
  payload: P;
  valueStr: string;
  platforms: string[] | null;
  platformStr: string;
};

export type MultiPlatformItem<T extends object> = PlatformVariant<T> & {
  passthrough?: { before: any[]; after: any[] };
};

export type MergedPlatformItems = {
  items: any;
  platformUnion: string[];
  owningPlatforms: string[];
};

export type BaseConfig = {
  homePage?: string;
  pages?: PageConfig[];
  subPackages?: SubPackageConfig[];
  globalStyle?: Record<string, any>;
  tabBar?: Record<string, any>;
  easycom?: Record<string, any>;
  [key: string]: any;
};

export type PagesJsonOutput = {
  pages: PageConfig[];
  subPackages?: SubPackageConfig[];
  tabBar?: Record<string, any>;
  [key: string]: any;
};

export type UniPagesOptions = {
  /**
   * 是否启用插件扫描与 pages.json 自动生成总开关
   * @default true
   * @description 设为 false 时完全禁用自动扫描、页面路由生成与 watcher 监听，保留开发者完全手动维护 pages.json 的能力
   */
  enabled?: boolean;
  /** 主包页面扫描目录，默认 'src/pages' */
  dir?: string;
  /** 分包扫描目录列表，如 ['src/sub']，不能是主包 dir 的子目录 */
  subPackages?: string[];
  /** 排除的 glob 模式，默认会排除 components 与 views 目录 */
  exclude?: string[];
  /** 输出的 pages.json 路径，默认项目根目录 */
  outFile?: string;
  /** 基础配置文件路径，默认 'pages.config.json' */
  configFile?: string;
  /** 首页路径 */
  homePage?: string;
};

export type ResolvedUniPagesOptions = {
  enabled: boolean;
  dir: string;
  subPackages: string[];
  exclude: string[];
  outFile: string;
  configFile: string;
  homePage: string;
};

export type PagesBuildFlags = {
  /** 沙盒裁剪已生效（原实现里的 `isSandboxMode && sandboxMainPages.length > 0`） */
  sandboxActive: boolean;
  /** 本次 pass 结束后是否禁止回写 pages.config.json（沙盒生效时禁止） */
  skipConfigWriteback: boolean;
};

export type PagesBuildStats = {
  /** 主包页面数（sandbox 之前的全量口径，与旧日志一致） */
  pageCount: number;
  /** 分包数 */
  subPackageCount: number;
};

export type PagesBuildState = {
  root: string;
  isProduction: boolean;
  options: ResolvedUniPagesOptions;

  baseConfig: BaseConfig;
  baseConfigParseOk: boolean;
  configPath: string;
  outputPath: string;

  /** 已有 pages.json（编辑中途语法错时的兜底），path → page */
  existingPagesMap: Map<string, PageConfig>;

  /** 主包：已合并 + 首页置顶 + alipay 归一 */
  finalPages: PageConfig[];
  /** 分包：已合并 + alipay 归一 */
  scannedSubPkgs: SubPackageConfig[];

  /** 页面内声明了 debug/debugHome/only/isDev 的路径（沙盒用） */
  debugAnnotatedPages: string[];
  /** 页面内声明了 debugHome 的路径（沙盒用） */
  debugHomeAnnotatedPages: string[];

  /** ★ 即将落盘的对象；stages 直接改它 */
  output: PagesJsonOutput;

  flags: PagesBuildFlags;
  stats: PagesBuildStats;
};

export type PagesStageContext = {
  root: string;
  isProduction: boolean;
};

/**
 * 卫星插件在自身插件对象上挂载的阶段描述。
 *
 * 约定：`order` 升序执行。sandbox=100 / tabbar=200 / route-meta=300。
 */
export type PagesStage = {
  name: string;
  order: number;
  run: (state: PagesBuildState, ctx: PagesStageContext) => void;
};

/** 卫星用于被核心发现的属性名 */
export const UNI_PAGES_STAGE_PROP = 'uniPagesStage';

/** 项目内官方阶段名（用于核心做「遗漏注册」自检） */
const KNOWN_PAGES_STAGES: string[] = [
  'uni-pages:sandbox',
  'uni-pages:tabbar',
  'uni-pages:route-meta'
];

// ==========================================
// 选项与常量
// ==========================================

const DEFAULT_DIR = 'src/pages';
const DEFAULT_OUT_FILE = 'pages.json';
const DEFAULT_CONFIG_FILE = 'pages.config.json';

/** 文件变更后等待多久再重新生成（合并一次保存引发的多次事件） */
const DEBOUNCE_MS = 80;

/** 模式 2 下原生 tabBar 会被自定义组件接管，先把宿主 tabbar 隐藏掉，避免切换瞬间闪烁 */
const HIDE_NATIVE_TABBAR_STYLE = '<style id="uni-tabbar-hide-zero-flash">uni-tabbar, uni-tabbar *, .uni-tabbar, .uni-tabbar *, .uni-tabbar-bottom, .uni-tabbar-bottom *, .uni-tabbar__icon, .uni-tabbar__label { display: none !important; visibility: hidden !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; bottom: -9999px !important; }</style>';

/** 默认排除目录（components / views 不当页面扫描） */
const DEFAULT_EXCLUDES: string[] = ['**/components/**/*.*', '**/views/**/*.*'];

export function resolveOptions(userOptions: UniPagesOptions = {}): ResolvedUniPagesOptions {
  return {
    enabled: userOptions.enabled ?? true,
    dir: userOptions.dir ?? DEFAULT_DIR,
    subPackages: userOptions.subPackages ?? [],
    exclude: userOptions.exclude ?? [],
    outFile: userOptions.outFile ?? DEFAULT_OUT_FILE,
    configFile: userOptions.configFile ?? DEFAULT_CONFIG_FILE,
    homePage: userOptions.homePage ?? ''
  };
}

// ==========================================
// 底层工具：glob / 扫描 / 宏解析 / env / 写盘
// ==========================================

/** 轻量级匹配 glob 模式，避免外部模块导出兼容性问题 */
function matchGlob(filePath: string, pattern: string): boolean {
  if (pattern === '**/components/**/*.*' || pattern.includes('components')) {
    return filePath.includes('/components/') || filePath.startsWith('components/');
  }
  if (pattern === '**/views/**/*.*' || pattern.includes('views')) {
    return filePath.includes('/views/') || filePath.startsWith('views/');
  }
  const regexStr = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*\/\*/g, '.*')
    .replace(/\*\*/g, '.*')
    .replace(/\*/g, '[^/]*')
    .replace(/\?/g, '.');
  return new RegExp(`^${regexStr}$`).test(filePath);
}

/** 递归扫描 .uvue 文件，支持 exclude 模式 */
function scanUvueFiles(dir: string, excludes: string[] = [], projectRoot: string = ''): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) {
    return results;
  }

  const allExcludes = [...DEFAULT_EXCLUDES, ...excludes];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // 跳过默认的 components 和 views 目录
      if (entry.name === 'components' || entry.name === 'views') {
        continue;
      }
      results.push(...scanUvueFiles(fullPath, excludes, projectRoot));
    }
    else if (entry.name.endsWith('.uvue')) {
      const relPath = projectRoot ? path.relative(projectRoot, fullPath).replace(/\\/g, '/') : fullPath.replace(/\\/g, '/');
      let excluded = false;
      for (let e = 0; e < allExcludes.length; e++) {
        if (matchGlob(relPath, allExcludes[e])) {
          excluded = true;
          break;
        }
      }
      if (!excluded) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/** 文件路径 → 页面路由 path */
function fileToPagePath(filePath: string, pagesDir: string, projectRoot: string): string {
  const absPages = path.resolve(projectRoot, pagesDir);
  const rel = path.relative(absPages, filePath).replace(/\\/g, '/');
  const withoutExt = rel.replace(/\.uvue$/, '');
  return path.posix.join(pagesDir, withoutExt);
}

/** 一次 definePage 宏调用在源码中的位置 */
type DefinePageCallSite = {
  start: number;
  openParen: number;
  closeParen: number;
};

// ==========================================
// 跨平台条件编译 DSL 与环境变量
// ==========================================

export const GENERATION_MARKER_PREFIX = 'GENERATED BY UNI-PAGES, PLATFORM:';

export class DefineConditional {
  private readonly base: Record<string, any>;
  private readonly branches: Array<{
    condition: 'ifdef' | 'ifndef';
    platforms: string[];
    partial: Record<string, any>;
  }> = [];

  constructor(base: Record<string, any>) {
    this.base = base || {};
  }

  ifdef(platform: string | string[], partial: Record<string, any>): this {
    this.branches.push({
      condition: 'ifdef',
      platforms: Array.isArray(platform) ? platform : [platform],
      partial
    });
    return this;
  }

  ifndef(platform: string | string[], partial: Record<string, any>): this {
    this.branches.push({
      condition: 'ifndef',
      platforms: Array.isArray(platform) ? platform : [platform],
      partial
    });
    return this;
  }

  resolve(platform: string): Record<string, any> {
    let result = { ...this.base };
    const cur = platform.toLowerCase();
    const h5Aliases = ['h5', 'web'];
    const matches = (list: string[]) => {
      const lower = list.map(p => p.toLowerCase());
      if (lower.includes(cur))
        return true;
      if (h5Aliases.includes(cur) && lower.some(p => h5Aliases.includes(p)))
        return true;
      return false;
    };

    for (const branch of this.branches) {
      const matched = branch.condition === 'ifdef'
        ? matches(branch.platforms)
        : !matches(branch.platforms);
      if (matched) {
        result = deepMerge(result, branch.partial);
      }
    }
    return result;
  }
}

function isPlainObject(val: unknown): val is Record<string, any> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}

function deepMerge(base: Record<string, any>, partial: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = { ...base };
  for (const key of Object.keys(partial)) {
    const baseVal = result[key];
    const partialVal = partial[key];
    result[key] = isPlainObject(baseVal) && isPlainObject(partialVal)
      ? deepMerge(baseVal, partialVal)
      : partialVal;
  }
  return result;
}

export const ALL_APP_PLATFORMS = [
  'APP-ANDROID',
  'APP-IOS',
  'APP-HARMONY'
] as const;

export const ALL_MP_PLATFORMS = [
  'MP-WEIXIN',
  'MP-ALIPAY',
  'MP-BAIDU',
  'MP-TOUTIAO',
  'MP-QQ',
  'MP-KUAISHOU',
  'MP-LARK',
  'MP-JD',
  'MP-XHS',
  'MP-360',
  'MP-HARMONY'
] as const;

export const AUTO_EVAL_PLATFORMS = [
  'h5',
  'app-android',
  'app-ios',
  'app-harmony',
  'mp-weixin',
  'mp-alipay',
  'mp-baidu',
  'mp-toutiao',
  'mp-qq',
  'mp-kuaishou',
  'mp-lark',
  'mp-jd',
  'mp-xhs',
  'mp-360',
  'mp-harmony'
];

export function getPlatformEnv(platformInput?: string) {
  const platform = (platformInput || process.env.UNI_PLATFORM || 'h5').toLowerCase();
  let appPlatform = process.env.UNI_APP_PLATFORM?.toLowerCase();

  // 若显式传入具体 App 子平台（如 app-android, app-ios, app-harmony），精确拆解子平台标识；
  // 若传入非 App 平台（如 h5, mp-weixin, mp-alipay），必须清空 appPlatform，杜绝外部环境污染
  if (platform === 'app-android') {
    appPlatform = 'android';
  }
  else if (platform === 'app-ios') {
    appPlatform = 'ios';
  }
  else if (platform === 'app-harmony') {
    appPlatform = 'harmony';
  }
  else if (platform !== 'app' && platform !== 'app-plus') {
    appPlatform = undefined;
  }

  const isH5 = platform === 'h5' || platform === 'web';
  const isWeb = isH5;
  const isMp = /^mp-/i.test(platform);
  const isMpWeixin = platform === 'mp-weixin';
  const isMpAlipay = platform === 'mp-alipay';
  const isMpBaidu = platform === 'mp-baidu';
  const isMpToutiao = platform === 'mp-toutiao';
  const isMpQQ = platform === 'mp-qq';
  const isMpKuaishou = platform === 'mp-kuaishou';
  const isMpLark = platform === 'mp-lark';
  const isMpJD = platform === 'mp-jd';
  const isMpXHS = platform === 'mp-xhs';
  const isMp360 = platform === 'mp-360';
  const isMpHarmony = platform === 'mp-harmony';
  const isApp = platform === 'app' || platform === 'app-plus' || platform.startsWith('app-');
  const isAppAndroid = isApp && (platform === 'app-android' || appPlatform === 'android');
  const isAppIOS = isApp && (platform === 'app-ios' || appPlatform === 'ios');
  const isAppHarmony = isApp && (platform === 'app-harmony' || appPlatform === 'harmony');

  return {
    platform,
    isH5,
    isWeb,
    isMp,
    isMpWeixin,
    isMpAlipay,
    isMpBaidu,
    isMpToutiao,
    isMpQQ,
    isMpKuaishou,
    isMpLark,
    isMpJD,
    isMpXHS,
    isMp360,
    isMpHarmony,
    isApp,
    isAppAndroid,
    isAppIOS,
    isAppHarmony
  };
}

/** 缓存读取当前项目的环境变量 */
let cachedLoadedEnv: Record<string, string> | null = null;
let cachedEnvRoot: string = '';

export function getLoadedEnv(projectRoot: string = process.cwd(), mode?: string): Record<string, string> {
  const currentMode = mode || process.env.NODE_ENV || 'development';
  if (cachedLoadedEnv != null && cachedEnvRoot === projectRoot) {
    return cachedLoadedEnv;
  }
  try {
    const loaded = loadEnv(currentMode, projectRoot, '');
    cachedLoadedEnv = { ...process.env, ...loaded } as Record<string, string>;
    cachedEnvRoot = projectRoot;
    return cachedLoadedEnv;
  }
  catch {
    return { ...process.env } as Record<string, string>;
  }
}

/** 清理环境变量缓存 */
export function clearLoadedEnvCache(): void {
  cachedLoadedEnv = null;
  cachedEnvRoot = '';
}

/**
 * 定位源码中第一次 `definePage(...)` 调用的括号位置。
 * 括号计数会跳过字符串与注释，准确捕获对象字面量、普通函数、箭头函数与 async 函数等各种宏参数边界。
 */
function scanDefinePageCall(code: string): DefinePageCallSite | null {
  const startRegex = /definePage\s*\(/;
  const match = code.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }

  const openParen = code.indexOf('(', match.index);
  if (openParen === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = openParen; i < code.length; i++) {
    const ch = code[i];
    const prev = i > 0 ? code[i - 1] : '';

    if (inString) {
      if (ch === stringChar && prev !== '\\') {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === '\'' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    // 跳过注释
    if (ch === '/' && i + 1 < code.length) {
      if (code[i + 1] === '/') {
        const newline = code.indexOf('\n', i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (code[i + 1] === '*') {
        const end = code.indexOf('*/', i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }

    if (ch === '(') {
      depth++;
    }
    else if (ch === ')') {
      depth--;
      if (depth === 0) {
        return { start: match.index, openParen, closeParen: i };
      }
    }
  }
  return null;
}

/** 解析 <route> 块（JSON5 格式） */
function parseRouteBlock(content: string): Record<string, any> | null {
  const regex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const match = content.match(regex);
  if (match == null) {
    return null;
  }
  try {
    return JSON5.parse(match[1].trim()) as Record<string, any>;
  }
  catch (e) {
    console.warn('[uni-pages] Failed to parse <route> block:', e);
    return null;
  }
}

/**
 * 从源码中提取 definePage(...) 的配置。
 * 支持对象字面量、普通函数、箭头函数、async 异步函数以及 null，并向宏沙箱注入 platform、isH5 等全套跨端环境。
 * 若宏函数为 async 或返回 Promise，会先执行异步操作并 await 其结果。
 */
async function parseDefinePage(
  content: string,
  filename: string = 'page.uvue',
  currentPlatform: string = '',
  projectRoot: string = process.cwd()
): Promise<Record<string, any> | null> {
  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }

  const site = scanDefinePageCall(targetContent);
  if (site == null) {
    return null;
  }

  const arg = targetContent.slice(site.openParen + 1, site.closeParen).trim();
  if (!arg) {
    return null;
  }

  // 显式 definePage(null) 表示在当前平台排除该页面
  if (arg === 'null') {
    return { _skipPage: true };
  }

  // 1. 针对简单静态纯对象字面量（无函数、无动态表达式）做快速解析优化
  const isFunctionForm
    = arg.includes('=>')
      || arg.includes('function')
      || arg.includes('isH5')
      || arg.includes('isWeb')
      || arg.includes('isApp')
      || arg.includes('isMp')
      || arg.includes('platform')
      || arg.includes('define(');

  if (arg.startsWith('{') && !isFunctionForm) {
    try {
      const parsed = JSON5.parse(arg) as Record<string, any>;
      if (parsed != null && typeof parsed === 'object') {
        parsed._isStaticMacro = true;
        return parsed;
      }
    }
    catch {}
  }

  // 2. 提取 <script> 标签内的 import 声明
  const imports: string[] = [];
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const importMatches = targetContent.matchAll(/(?:^|\n)\s*(import\s+[\s\S]+?\s+from\s+['"][^'"]+['"]\s*;?)/g);
  for (const m of importMatches) {
    if (!m[1].startsWith('import type')) {
      imports.push(m[1]);
    }
  }

  // 3. 构建宏沙箱执行环境
  try {
    const platformEnv = getPlatformEnv(currentPlatform);
    const dir = path.dirname(filename);

    const macroCode = arg;
    const buildCode = (codeStr: string) => `${imports.join('\n')}\nexport default (${codeStr});`;

    const jsCode = ts.transpileModule(buildCode(macroCode), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
        allowJs: true,
        skipLibCheck: true
      }
    }).outputText;

    const defineHelper = (base: Record<string, any>) => new DefineConditional(base);
    const envVars = getLoadedEnv(projectRoot);
    const platformObj = {
      ...platformEnv,
      name: platformEnv.platform,
      toString: () => platformEnv.platform,
      valueOf: () => platformEnv.platform
    };

    const macroCtx = {
      ...platformEnv,
      platform: platformObj,
      env: envVars,
      define: defineHelper
    };

    const vmContext = {
      module: {},
      exports: {},
      __filename: filename,
      __dirname: dir,
      require: createRequire(path.join(dir, 'define-page.mjs')),
      console,
      URL,
      URLSearchParams,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      setImmediate,
      clearImmediate,
      fetch: (globalThis as any).fetch,
      process,
      Promise,
      global: globalThis,
      globalThis,
      ...macroCtx
    };

    const script = new vm.Script(jsCode, { filename });
    script.runInNewContext(vmContext, { timeout: 15000 });

    const exportsObj = vmContext.exports as any;
    const parsed = 'default' in exportsObj ? exportsObj.default : exportsObj;

    let result: any = null;
    let variants: Array<{ platform: string; page: any }> | null = null;
    if (typeof parsed === 'function') {
      // 1. 先执行当前平台的求值（支持 async 函数及 Promise 返回）
      result = await parsed(macroCtx);

      // 针对函数式宏，主动按全端跨端矩阵进行静态采样求值（App: Android/iOS/鸿蒙, Web/H5, 小程序: 微信/支付宝/百度/抖音/QQ/快手/飞书/京东/小红书/360/鸿蒙等），
      // 一步到位抽取出各端的差异化配置，彻底杜绝不同平台竞争同一标签导致的来回覆写翻转
      try {
        // 在跨端矩阵采样阶段静默 console，避免将页面内部的 console.log 打印 15 次
        const quietConsole = {
          ...console,
          log: () => {},
          info: () => {},
          debug: () => {},
          warn: () => {},
          error: () => {}
        };
        (vmContext as any).console = quietConsole;

        const sampledPromises = AUTO_EVAL_PLATFORMS.map(async (p) => {
          const pEnv = getPlatformEnv(p);
          const pPlatformObj = {
            ...pEnv,
            name: pEnv.platform,
            toString: () => pEnv.platform,
            valueOf: () => pEnv.platform
          };
          const pCtx = {
            ...pEnv,
            platform: pPlatformObj,
            env: envVars,
            define: defineHelper
          };
          let pRes = parsed(pCtx);
          if (pRes != null && typeof pRes.then === 'function') {
            pRes = await pRes;
          }
          if (pRes instanceof DefineConditional) {
            pRes = pRes.resolve(pEnv.platform);
          }
          if (pRes != null && typeof pRes === 'object' && !Array.isArray(pRes)) {
            if (p.toUpperCase() === 'MP-ALIPAY' || p.toUpperCase() === 'MP') {
              normalizeCustomNavForAlipay(pRes as any);
            }
            return {
              platform: p.toUpperCase(),
              page: pRes
            };
          }
          return null;
        });
        const sampledResults = await Promise.all(sampledPromises);
        const validSampled = sampledResults.filter(Boolean) as Array<{ platform: string; page: any }>;
        if (validSampled.length > 0) {
          variants = validSampled;
        }
      }
      catch {}
      finally {
        (vmContext as any).console = console;
      }
    }
    else {
      result = parsed;
    }

    if (result != null && typeof result.then === 'function') {
      result = await result;
    }

    if (result instanceof DefineConditional) {
      result = result.resolve(platformEnv.platform);
    }

    if (result === null) {
      return { _skipPage: true };
    }

    if (result != null && typeof result === 'object' && !Array.isArray(result)) {
      if (typeof parsed === 'function') {
        result._keepType = true;
        if (variants && variants.length > 0) {
          result._variants = variants;
        }
      }
      return result;
    }
  }
  catch (e) {
    console.warn(`[uni-pages] Failed to evaluate definePage in ${filename}:`, (e as Error).message);
  }

  return null;
}

/** 解析页面 meta：优先 <route> 块，其次 definePage */
async function parsePageMeta(
  content: string,
  filename: string = 'page.uvue',
  currentPlatform: string = '',
  projectRoot: string = process.cwd()
): Promise<Record<string, any> | null> {
  const route = parseRouteBlock(content);
  if (route != null) {
    return route;
  }
  return await parseDefinePage(content, filename, currentPlatform, projectRoot);
}

/** 定位 <script> 块内容在整份源码中的区间（definePage 是脚本级宏，模板里的同名文本不是宏调用） */
function findScriptBlocks(code: string): Array<{ start: number; end: number }> {
  const blocks: Array<{ start: number; end: number }> = [];
  const openRegex = /<script\b[^>]*>/g;
  let match = openRegex.exec(code);
  while (match != null) {
    const start = match.index + match[0].length;
    const close = code.indexOf('</script>', start);
    if (close === -1) {
      break;
    }
    blocks.push({ start, end: close });
    openRegex.lastIndex = close;
    match = openRegex.exec(code);
  }
  return blocks;
}

/**
 * 移除 definePage(...) 宏调用，避免运行时报错；未命中时返回 null。
 *
 * 搜索范围限定在 [from, to)：调用方传入 <script> 块区间后，模板中作为文档展示的
 * `definePage({...})` 文本不会被误删（曾把 `IndexView.uvue` 说明卡片里的示例整段删掉，
 * 留下一个内容为空的 <text>）。
 */
function stripDefinePageMacro(code: string, from: number = 0, to: number = code.length): string | null {
  const site = scanDefinePageCall(code.slice(from, to));
  if (site == null) {
    return null;
  }

  let start = from + site.start;
  let endIdx = from + site.closeParen + 1;

  // 往前清除多余换行
  if (start > 0 && code[start - 1] === '\n') {
    start--;
    if (start > 0 && code[start - 1] === '\r') {
      start--;
    }
  }
  while (endIdx < code.length && (code[endIdx] === '\n' || code[endIdx] === '\r')) {
    endIdx++;
  }

  return code.slice(0, start) + code.slice(endIdx);
}

/** 读取 Tabbar 策略模式配置（0=无Tabbar, 1=原生Tabbar, 2=自定义Tabbar） */
function getTabbarMode(projectRoot: string): string {
  if (process.env.VITE_TABBAR_MODE != null && process.env.VITE_TABBAR_MODE !== '') {
    return process.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path.resolve(projectRoot, '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  }
  catch {
    // 忽略异常
  }
  return '1';
}

/** 判断一个绝对路径是否是需要触发重新生成的页面文件（供 watcher 用） */
function isPageFile(
  filePath: string,
  dir: string,
  subPackages: string[],
  exclude: string[],
  projectRoot: string
): boolean {
  const n = filePath.replace(/\\/g, '/');
  if (!n.endsWith('.uvue') || n.includes('?')) {
    return false;
  }
  const allExcludes = [...DEFAULT_EXCLUDES, ...exclude];
  const relPath = projectRoot ? path.relative(projectRoot, filePath).replace(/\\/g, '/') : n;
  for (let e = 0; e < allExcludes.length; e++) {
    if (matchGlob(relPath, allExcludes[e])) {
      return false;
    }
  }
  // 带 / 边界匹配，避免 src/pages 误匹配 src/pages-xxx
  if (n.includes(`${dir.replace(/\\/g, '/')}/`)) {
    return true;
  }
  for (let i = 0; i < subPackages.length; i++) {
    if (n.includes(`${subPackages[i].replace(/\\/g, '/')}/`)) {
      return true;
    }
  }
  return false;
}

/** 自动为支付宝小程序适配自定义导航栏（transparentTitle + titlePenetrate + defaultTitle） */
function normalizeCustomNavForAlipay(p: PageConfig): void {
  const topMpAlipay = (p as any)['mp-alipay'];
  if (topMpAlipay != null) {
    p.style = p.style ?? {};
    p.style['mp-alipay'] = { ...(p.style['mp-alipay'] ?? {}), ...topMpAlipay };
    delete (p as any)['mp-alipay'];
  }
  if (p.style?.navigationStyle === 'custom') {
    p.style['mp-alipay'] = {
      transparentTitle: 'always',
      titlePenetrate: 'YES',
      defaultTitle: '',
      ...(p.style['mp-alipay'] ?? {})
    };
  }
}

/** 剥离写盘前的内部临时标记属性 */
function cleanTempProps(page: PageConfig, cleanMeta: boolean = false): void {
  if (cleanMeta) {
    delete (page as any)._hasMeta;
    delete (page as any)._variants;
  }
  delete (page as any)._skipPage;
  if ((page as any)._keepType !== true && (page as any).type === 'home' && (page as any)._isStaticMacro === true) {
    delete (page as any).type;
  }
  delete (page as any)._isStaticMacro;
  delete (page as any)._keepType;
  delete (page as any).debug;
  delete (page as any).debugHome;
  delete (page as any).only;
  delete (page as any).isDev;
}

function lineComment(value: string): any {
  return {
    type: 'LineComment',
    value,
    inline: false,
    loc: {
      start: { line: 0, column: 0 },
      end: { line: 0, column: 0 }
    }
  };
}

function isGenerationMarker(token: any): boolean {
  return (
    token
    && token.type !== 'BlankLine'
    && typeof token.value === 'string'
    && token.value.trim().startsWith(GENERATION_MARKER_PREFIX)
  );
}

function simplifyPlatformList(platforms: string[]): string[] {
  const set = new Set(platforms);

  // 1. 如果包含了所有的 APP 子平台，折叠合并为通用的 APP
  if (ALL_APP_PLATFORMS.every(p => set.has(p))) {
    for (const p of ALL_APP_PLATFORMS) {
      set.delete(p);
    }
    set.add('APP');
  }

  // 2. 如果包含了所有的 MP 小程序子平台，折叠合并为通用的 MP
  if (ALL_MP_PLATFORMS.every(p => set.has(p))) {
    for (const p of ALL_MP_PLATFORMS) {
      set.delete(p);
    }
    set.add('MP');
  }

  // 3. 规范化 WEB -> H5
  if (set.has('WEB') && set.has('H5')) {
    set.delete('WEB');
  }

  return [...set].sort();
}

function expandPlatformTokens(tokens: string[]): string[] {
  const result: string[] = [];
  for (const token of tokens) {
    if (token === 'APP') {
      result.push(...ALL_APP_PLATFORMS);
    }
    else if (token === 'MP') {
      result.push(...ALL_MP_PLATFORMS);
    }
    else {
      result.push(token);
    }
  }
  return [...new Set(result)];
}

function platformsExcluding(platformList: string, currentPlatform: string): string[] {
  const rawTokens = platformList
    .split('||')
    .map(p => p.trim())
    .filter(Boolean);
  const expanded = expandPlatformTokens(rawTokens);

  const toExclude = new Set<string>();
  toExclude.add(currentPlatform);
  if (currentPlatform === 'MP') {
    ALL_MP_PLATFORMS.forEach(p => toExclude.add(p));
  }
  if (currentPlatform === 'APP') {
    ALL_APP_PLATFORMS.forEach(p => toExclude.add(p));
  }

  const remaining = expanded.filter(p => !toExclude.has(p));
  return simplifyPlatformList(remaining);
}

function extractLastPlatforms(src: any, currentPlatform: string): string[] {
  let lastPlatforms: string[] = [];
  const before0 = src ? src[Symbol.for('before:0')] : undefined;
  if (Array.isArray(before0)) {
    for (const comment of before0) {
      if (comment && comment.type !== 'BlankLine' && typeof comment.value === 'string') {
        const trimmed = comment.value.trim();
        if (trimmed.startsWith(GENERATION_MARKER_PREFIX)) {
          lastPlatforms = platformsExcluding(trimmed.slice(GENERATION_MARKER_PREFIX.length), currentPlatform);
        }
      }
    }
  }
  return lastPlatforms;
}

function stringifyForCompare<T extends object>(val: T): string {
  if (val != null && typeof val === 'object') {
    const { type: _type, _variants: _var, ...rest } = val as any;
    return JSON.stringify(rest);
  }
  return JSON.stringify(val);
}

function homeStatusCompatible(a: any, b: any): boolean {
  const typeA = a?.type;
  const typeB = b?.type;
  return typeA === undefined || typeB === undefined || typeA === typeB;
}

function upsertCurrentVariant<P>(
  variants: PlatformVariant<P>[],
  payload: P,
  valueStr: string,
  currentPlatform: string,
  compatible?: (a: P, b: P) => boolean
): void {
  const isSame = (variant: PlatformVariant<P>): boolean =>
    variant.valueStr === valueStr && (compatible ? compatible(variant.payload, payload) : true);

  if (variants.some(variant => variant.platforms === null && isSame(variant))) {
    return;
  }

  const equal = variants.find((variant): variant is PlatformVariant<P> & { platforms: string[] } =>
    variant.platforms !== null && isSame(variant)
  );
  if (equal) {
    if (!equal.platforms.includes(currentPlatform)) {
      equal.platforms.push(currentPlatform);
      equal.platforms = simplifyPlatformList(equal.platforms);
      equal.platformStr = equal.platforms.join(' || ');
    }
    return;
  }

  const platforms = simplifyPlatformList([currentPlatform]);
  variants.push({
    payload,
    valueStr,
    platforms,
    platformStr: platforms.join(' || ')
  });
}

function sortVariants<P>(variants: PlatformVariant<P>[]): void {
  variants.sort((a, b) => (a.platformStr < b.platformStr ? -1 : a.platformStr > b.platformStr ? 1 : 0));
}

function collectVariantPlatforms<P>(mergedMap: Map<string, PlatformVariant<P>[]>): Set<string> {
  const platforms = new Set<string>();
  for (const variants of mergedMap.values()) {
    for (const { platforms: variantPlatforms } of variants) {
      if (variantPlatforms) {
        for (const platform of variantPlatforms) {
          platforms.add(platform);
        }
      }
    }
  }
  return platforms;
}

function resolvePlatformUnion<P>(
  mergedMap: Map<string, PlatformVariant<P>[]>,
  currentPlatform: string,
  lastPlatforms: string[],
  extraPlatforms: string[] = []
): string[] {
  const union = new Set<string>([
    currentPlatform,
    ...lastPlatforms,
    ...extraPlatforms,
    ...collectVariantPlatforms(mergedMap)
  ]);
  return simplifyPlatformList([...union]);
}

/**
 * 确保各页面的多端变体能完全覆盖目标平台全集（尤其是 APP）。
 * 如果某个变体是由非 Web 平台（如 MP-WEIXIN）生成的通用项，而 APP 尚未独立运行过，
 * 必须将 APP 兜底合并至该通用变体中（如 APP || MP-WEIXIN），
 * 彻底防止 App-Android/iOS 原生编译器在加载 pages.json 时因缺失 App 对应页面而报错。
 */
function ensureAllPlatformsCovered<T extends object>(
  mergedMap: Map<string, MultiPlatformItem<T>[]>,
  platformUnion: string[]
): void {
  for (const list of mergedMap.values()) {
    if (list.length <= 1) {
      continue;
    }
    const covered = new Set<string>();
    for (const item of list) {
      if (item.platforms) {
        for (const p of item.platforms) {
          covered.add(p);
          if (p === 'APP') {
            for (const app of ALL_APP_PLATFORMS) {
              covered.add(app);
            }
          }
          if (p === 'MP') {
            for (const mp of ALL_MP_PLATFORMS) {
              covered.add(mp);
            }
          }
        }
      }
    }

    const missing = platformUnion.filter((p) => {
      if (covered.has(p))
        return false;
      if (p === 'APP' && ALL_APP_PLATFORMS.some(app => covered.has(app)))
        return false;
      if (p === 'MP' && ALL_MP_PLATFORMS.some(mp => covered.has(mp)))
        return false;
      return true;
    });
    if (missing.length === 0) {
      continue;
    }

    // 优先将缺失平台（如 APP）挂载至非 H5/WEB 的通用变体中
    let targetVariant = list.find(v => v.platforms && !v.platforms.includes('H5') && !v.platforms.includes('WEB'));
    if (!targetVariant) {
      targetVariant = list[list.length - 1];
    }

    if (targetVariant && targetVariant.platforms) {
      for (const m of missing) {
        if (!targetVariant.platforms.includes(m)) {
          targetVariant.platforms.push(m);
        }
      }
      targetVariant.platforms = simplifyPlatformList(targetVariant.platforms);
      targetVariant.platformStr = targetVariant.platforms.join(' || ');
    }
  }
}

export function mergePlatformItems<T extends object>(
  source: any,
  currentPlatform: string,
  items: T[],
  uniqueKeyName: string,
  sandboxActive: boolean = false,
  extraPlatforms: string[] = []
): MergedPlatformItems {
  const src = source || new CommentArray();
  currentPlatform = currentPlatform.toUpperCase();

  const lastPlatforms = extractLastPlatforms(src, currentPlatform);
  const allowedKeys = sandboxActive ? new Set(items.map(item => (item as any)[uniqueKeyName])) : null;
  const fullMacroKeys = new Set(
    items
      .filter(item => (Array.isArray((item as any)._variants) && (item as any)._variants.length > 0) || (item as any)._hasMeta === true)
      .map(item => (item as any)[uniqueKeyName])
  );

  const mergedMap = new Map<string, MultiPlatformItem<T>[]>();
  const variantsOf = (uniqueKey: string): MultiPlatformItem<T>[] => {
    let list = mergedMap.get(uniqueKey);
    if (!list) {
      list = [];
      mergedMap.set(uniqueKey, list);
    }
    return list;
  };

  for (let i = 0; i < src.length; i++) {
    const item = src[i] as any;
    const uniqueKey = item?.[uniqueKeyName];
    if (!uniqueKey)
      continue;
    if (allowedKeys && !allowedKeys.has(uniqueKey))
      continue;
    if (fullMacroKeys.has(uniqueKey))
      continue;

    const beforeComments = src[Symbol.for(`before:${i}`)] as any[] | undefined;
    const conditionalComment = beforeComments?.find(
      c => c && c.type !== 'BlankLine' && typeof c.value === 'string' && /^#(?:ifdef|ifndef)/.test(c.value.trim())
    );

    if (conditionalComment?.value.trim().startsWith('#ifndef')) {
      variantsOf(uniqueKey).push({
        payload: item,
        valueStr: stringifyForCompare(item),
        platforms: null,
        platformStr: '',
        passthrough: {
          before: [...(beforeComments || [])].filter(c => !isGenerationMarker(c)),
          after: [lineComment(' #endif')]
        }
      });
      continue;
    }

    let platforms: string[] = [...lastPlatforms];
    if (conditionalComment) {
      const match = conditionalComment.value.match(/#ifdef\s+(.+)/);
      if (match) {
        platforms = platformsExcluding(match[1], currentPlatform);
      }
    }

    if (platforms.length === 0) {
      continue;
    }

    variantsOf(uniqueKey).push({
      payload: item,
      valueStr: stringifyForCompare(item),
      platforms,
      platformStr: platforms.join(' || ')
    });
  }

  for (const item of items) {
    const uniqueKey = (item as any)[uniqueKeyName];
    if (!uniqueKey)
      continue;
    const variantsList = (item as any)._variants;
    if (Array.isArray(variantsList) && variantsList.length > 0) {
      for (const v of variantsList) {
        const vPayload = { ...item, ...v.page };
        delete (vPayload as any)._variants;
        if (v.platform.includes('MP-ALIPAY') || v.platform === 'MP') {
          normalizeCustomNavForAlipay(vPayload as any);
        }
        cleanTempProps(vPayload as any, true);
        upsertCurrentVariant(
          variantsOf(uniqueKey),
          vPayload,
          stringifyForCompare(vPayload),
          v.platform,
          homeStatusCompatible
        );
      }
    }
    else {
      const cleanItem = { ...item };
      delete (cleanItem as any)._variants;
      if (currentPlatform.toUpperCase().includes('MP-ALIPAY') || currentPlatform.toUpperCase() === 'MP') {
        normalizeCustomNavForAlipay(cleanItem as any);
      }
      cleanTempProps(cleanItem as any, true);
      upsertCurrentVariant(variantsOf(uniqueKey), cleanItem, stringifyForCompare(cleanItem), currentPlatform, homeStatusCompatible);
    }
  }

  const platformUnion = resolvePlatformUnion(mergedMap, currentPlatform, lastPlatforms, extraPlatforms);
  ensureAllPlatformsCovered(mergedMap, platformUnion);

  const result = new CommentArray();
  const resArray: any = result;
  for (const variants of mergedMap.values()) {
    sortVariants(variants);
  }

  const platformUnionStr = platformUnion.join(' || ');
  const owningPlatforms = collectVariantPlatforms(mergedMap);

  resArray[Symbol.for('before:0')] = [lineComment(` ${GENERATION_MARKER_PREFIX} ${platformUnionStr}`)];

  for (const [_, list] of mergedMap) {
    for (const { payload: item, platformStr, passthrough } of list) {
      result.push(item);
      const currIdx = result.length - 1;

      if (passthrough) {
        resArray[Symbol.for(`before:${currIdx}`)] = [
          ...(resArray[Symbol.for(`before:${currIdx}`)] || []),
          ...passthrough.before
        ];
        if (passthrough.after.length > 0) {
          resArray[Symbol.for(`after:${currIdx}`)] = passthrough.after;
        }
        continue;
      }

      if (list.length > 1) {
        resArray[Symbol.for(`before:${currIdx}`)] = [
          ...(resArray[Symbol.for(`before:${currIdx}`)] || []),
          lineComment(` #ifdef ${platformStr}`)
        ];
        resArray[Symbol.for(`after:${currIdx}`)] = [lineComment(' #endif')];
      }
    }
  }

  return { items: result, platformUnion, owningPlatforms: [...owningPlatforms].sort() };
}

export function ensureHomePageFirst(pagesArray: any[], homePath?: string): void {
  if (!pagesArray || pagesArray.length === 0)
    return;

  const isHome = pagesArray.map((page: any) => page?.type === 'home');
  if (homePath && !pagesArray.some((page: any) => page?.path === homePath && page?.type === 'home')) {
    pagesArray.forEach((page: any, index: number) => {
      if (page?.path === homePath) {
        isHome[index] = true;
      }
    });
  }

  const homeCount = isHome.filter(Boolean).length;
  if (homeCount === 0)
    return;
  if (isHome.slice(0, homeCount).every(Boolean))
    return;

  const commentArray = pagesArray as any;
  const length = pagesArray.length;
  const beforeTokens: any[][] = [];
  const afterTokens: any[][] = [];

  for (let i = 0; i < length; i++) {
    beforeTokens.push(commentArray[Symbol.for(`before:${i}`)] || []);
    afterTokens.push(commentArray[Symbol.for(`after:${i}`)] || []);
    Reflect.deleteProperty(commentArray, Symbol.for(`before:${i}`));
    Reflect.deleteProperty(commentArray, Symbol.for(`after:${i}`));
  }

  const markerTokens = beforeTokens[0]?.filter(isGenerationMarker) || [];
  if (beforeTokens[0]) {
    beforeTokens[0] = beforeTokens[0].filter((token: any) => !isGenerationMarker(token));
  }

  const order: number[] = [];
  for (let i = 0; i < length; i++) {
    if (isHome[i])
      order.push(i);
  }
  for (let i = 0; i < length; i++) {
    if (!isHome[i])
      order.push(i);
  }

  pagesArray.splice(0, length, ...order.map(i => pagesArray[i]));

  for (let i = 0; i < length; i++) {
    const sourceIndex = order[i];
    const before = i === 0 ? [...markerTokens, ...beforeTokens[sourceIndex]] : beforeTokens[sourceIndex];
    if (before && before.length > 0) {
      commentArray[Symbol.for(`before:${i}`)] = before;
    }
    if (afterTokens[sourceIndex] && afterTokens[sourceIndex].length > 0) {
      commentArray[Symbol.for(`after:${i}`)] = afterTokens[sourceIndex];
    }
  }
}

export function mergePagesJson(
  existingContent: string,
  output: PagesJsonOutput,
  currentPlatform: string,
  sandboxActive: boolean = false,
  extraPlatforms: string[] = []
): string {
  let oldConfig: any = {};
  if (existingContent && existingContent.trim() !== '') {
    try {
      oldConfig = cjParse(existingContent);
    }
    catch (e) {
      console.warn('[uni-pages] Failed to parse existing pages.json with comment-json:', e);
      oldConfig = {};
    }
  }

  const oldPages = Array.isArray(oldConfig.pages) ? oldConfig.pages : undefined;
  const mergedPagesRes = mergePlatformItems(oldPages, currentPlatform, output.pages, 'path', sandboxActive, extraPlatforms);
  const mergedPages = mergedPagesRes.items;

  // 首页置顶
  ensureHomePageFirst(mergedPages as any[]);

  // 构造最终对象
  const finalJson: any = {};
  finalJson[Symbol.for('before:pages')] = [
    lineComment(' =============================================================================='),
    lineComment(' ⚠️ 提示：本文件由 vite-plugin-uni-pages 自动生成，请勿手动修改（手动修改会被覆盖）！'),
    lineComment(' 📌 如需配置页面路由与样式，请前往 pages.config.json 或页面 .uvue 的 definePage 中配置。'),
    lineComment(' ==============================================================================')
  ];
  finalJson.pages = mergedPages;

  // 复制 baseConfig 或 output 上的其他顶层字段
  const keys = Object.keys(output);
  for (const k of keys) {
    if (k !== 'pages' && k !== 'subPackages') {
      finalJson[k] = output[k];
    }
  }

  // 合并分包 subPackages
  if (output.subPackages && output.subPackages.length > 0) {
    const oldSubPackages = Array.isArray(oldConfig.subPackages) ? oldConfig.subPackages : new CommentArray();
    const newSubMap = new Map<string, SubPackageConfig>();
    for (const sp of output.subPackages) {
      newSubMap.set(sp.root, sp);
    }

    const mergedSubs = new CommentArray();
    for (const existingSub of oldSubPackages) {
      const sub = newSubMap.get(existingSub.root);
      if (sub) {
        const subMerged = mergePlatformItems(existingSub.pages, currentPlatform, sub.pages, 'path', sandboxActive, extraPlatforms).items;
        existingSub.pages = subMerged;
        mergedSubs.push(existingSub);
        newSubMap.delete(existingSub.root);
      }
      else if (!sandboxActive) {
        mergedSubs.push(existingSub);
      }
    }
    for (const remaining of newSubMap.values()) {
      const subMerged = mergePlatformItems(undefined, currentPlatform, remaining.pages, 'path', sandboxActive, extraPlatforms).items;
      mergedSubs.push({
        ...remaining,
        pages: subMerged
      });
    }
    finalJson.subPackages = mergedSubs;
  }
  else if (oldConfig.subPackages && !sandboxActive) {
    finalJson.subPackages = oldConfig.subPackages;
  }

  const outputStr = cjStringify(finalJson, null, 2);
  return `${outputStr}\n`;
}

/** 序列化并写入 pages.json；内容未变化时不写。返回是否发生了写入 */
function writePagesJson(
  output: PagesJsonOutput,
  outputPath: string,
  currentPlatformStr: string = '',
  sandboxActive: boolean = false
): boolean {
  let existing = '';
  if (fs.existsSync(outputPath)) {
    existing = fs.readFileSync(outputPath, 'utf-8');
  }

  const currentPlatform = (currentPlatformStr || process.env.UNI_PLATFORM || 'h5').toUpperCase();
  // unibestX 作为 uni-app X 项目，APP（Android/iOS/Harmony）是核心编译底座。
  // 必须将 APP 纳入基线覆盖集，确保无论当前单端跑的是 H5 还是小程序，生成的 pages.json 始终保证 App-Android/iOS 有页可用，杜绝原生拦截报错
  const extraPlatforms = ['APP'];
  const mergedContent = mergePagesJson(existing, output, currentPlatform, sandboxActive, extraPlatforms);

  if (mergedContent !== existing) {
    fs.writeFileSync(outputPath, mergedContent, 'utf-8');
    return true;
  }
  return false;
}

/** 安全提取 JSONC / 带注释文件的头部注释块，避免正则表达式灾难性回溯 */
function extractHeaderComments(raw: string): string {
  let index = 0;
  const len = raw.length;
  while (index < len) {
    while (index < len && (raw[index] === ' ' || raw[index] === '\t' || raw[index] === '\r' || raw[index] === '\n')) {
      index++;
    }
    if (index >= len) {
      break;
    }
    if (raw[index] === '/' && raw[index + 1] === '/') {
      const nextLine = raw.indexOf('\n', index);
      index = nextLine === -1 ? len : nextLine + 1;
    }
    else if (raw[index] === '/' && raw[index + 1] === '*') {
      const endBlock = raw.indexOf('*/', index + 2);
      index = endBlock === -1 ? len : endBlock + 2;
    }
    else {
      break;
    }
  }
  return raw.slice(0, index);
}

/** 把「本次扫描 + 合并」的结果同步回 pages.config.json，保证手写配置与磁盘页面双向一致 */
function writeBackConfig(
  configPath: string,
  finalPages: PageConfig[],
  scannedSubPkgs: SubPackageConfig[],
  outputPath?: string
): boolean {
  if (!fs.existsSync(configPath)) {
    return false;
  }

  let configUpdated = false;
  const currentConfigRaw = fs.readFileSync(configPath, 'utf-8');
  const headerComments = extractHeaderComments(currentConfigRaw);

  let currentConfig: BaseConfig = {};
  try {
    currentConfig = cjParse(currentConfigRaw) as BaseConfig;
  }
  catch {
    try {
      currentConfig = JSON5.parse(currentConfigRaw) as BaseConfig;
    }
    catch {}
  }

  // 检查 pages.json 中是否存在多平台变体
  const multiPlatformPages = new Set<string>();
  if (outputPath && fs.existsSync(outputPath)) {
    try {
      const variantsMap = loadAllPlatformPageVariants(outputPath);
      for (const [pathKey, variants] of variantsMap.entries()) {
        if (variants.length > 1 || variants.some(v => v.condition != null)) {
          const normKey = pathKey.replace(/\\/g, '/').replace(/^\//, '');
          multiPlatformPages.add(normKey);
          multiPlatformPages.add(normKey.replace(/^src\//, ''));
        }
      }
    }
    catch {}
  }

  // 1) 同步主包（新增、修改、剔除已删除）
  const newMainPages: PageConfig[] = [];
  for (let i = 0; i < finalPages.length; i++) {
    const p = finalPages[i];
    const norm = p.path.replace(/\\/g, '/').replace(/^\//, '');
    const hasVariants = Array.isArray((p as any)._variants) && (p as any)._variants.length > 1;
    const isMultiPlatform = hasVariants || multiPlatformPages.has(norm) || multiPlatformPages.has(`src/${norm}`);
    const existingInConfig = currentConfig.pages?.find((cp) => {
      const cpNorm = cp.path.replace(/\\/g, '/').replace(/^\//, '');
      return cpNorm === norm || cpNorm === `src/${norm}` || `src/${cpNorm}` === norm;
    });

    if (existingInConfig && isMultiPlatform) {
      // 保持 pages.config.json 中的原配置不变，避免单端运行覆盖多端配置触发 watcher 恶性循环
      const cleanExisting = { ...existingInConfig };
      cleanTempProps(cleanExisting, true);
      newMainPages.push(cleanExisting);
    }
    else {
      const cleanP = { ...p };
      cleanTempProps(cleanP, true);
      newMainPages.push(cleanP);
    }
  }
  if (currentConfig.pages == null || JSON.stringify(currentConfig.pages) !== JSON.stringify(newMainPages)) {
    currentConfig.pages = newMainPages;
    configUpdated = true;
  }

  // 2) 同步分包（新增、修改、剔除已删除）
  currentConfig.subPackages ??= [];
  for (let s = 0; s < scannedSubPkgs.length; s++) {
    const spkg = scannedSubPkgs[s];
    const targetSub = currentConfig.subPackages.find(cp => cp.root === spkg.root);
    if (targetSub == null) {
      currentConfig.subPackages.push({ root: spkg.root, pages: spkg.pages });
      configUpdated = true;
    }
    else {
      const newSubPages: PageConfig[] = [];
      for (let pIdx = 0; pIdx < spkg.pages.length; pIdx++) {
        const p = spkg.pages[pIdx];
        const fullRel = `${spkg.root}/${p.path}`.replace(/\\/g, '/').replace(/^\//, '');
        const hasVariants = Array.isArray((p as any)._variants) && (p as any)._variants.length > 1;
        const isMultiPlatform = hasVariants || multiPlatformPages.has(fullRel) || multiPlatformPages.has(`src/${fullRel}`);
        const existingInSub = targetSub.pages?.find((cp) => {
          const cpNorm = cp.path.replace(/\\/g, '/').replace(/^\//, '');
          return cpNorm === p.path.replace(/\\/g, '/').replace(/^\//, '');
        });

        if (existingInSub && isMultiPlatform) {
          const cleanExisting = { ...existingInSub };
          cleanTempProps(cleanExisting, true);
          newSubPages.push(cleanExisting);
        }
        else {
          const cleanP = { ...p };
          cleanTempProps(cleanP, true);
          newSubPages.push(cleanP);
        }
      }

      if (JSON.stringify(targetSub.pages) !== JSON.stringify(newSubPages)) {
        targetSub.pages = newSubPages;
        configUpdated = true;
      }
    }
  }

  if (configUpdated) {
    let newConfigJson = '';
    try {
      newConfigJson = `${cjStringify(currentConfig, null, 2)}\n`;
    }
    catch {
      newConfigJson = `${JSON.stringify(currentConfig, null, 2)}\n`;
    }
    if (headerComments && !newConfigJson.startsWith('//') && !newConfigJson.startsWith('/*')) {
      newConfigJson = headerComments + newConfigJson.replace(/^\s*/, '');
    }
    if (newConfigJson !== currentConfigRaw) {
      fs.writeFileSync(configPath, newConfigJson, 'utf-8');
      return true;
    }
  }
  return false;
}

/** 最近一次成功解析的 pages.config.json，用于语法错误时的防崩缓存兜底（需跨多次生成存活） */
let lastGoodBaseConfig: BaseConfig | null = null;

// ==========================================
// 从插件数组中发现卫星阶段
// ==========================================

/** 从（已解析的）插件数组里收集所有携带 `uniPagesStage` 的卫星阶段，按 order 升序 */
export function collectStagesFromPlugins(plugins: readonly any[]): PagesStage[] {
  const stages: PagesStage[] = [];
  for (let i = 0; i < plugins.length; i++) {
    const stage = plugins[i]?.[UNI_PAGES_STAGE_PROP];
    if (stage != null) {
      stages.push(stage as PagesStage);
    }
  }
  return stages.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

// ==========================================
// 核心：构建状态（不落盘）
// ==========================================

/**
 * 扫描 → 合并 → 装配 → 按序跑 stages，产出**即将落盘**的构建状态。
 *
 * 刻意不触碰磁盘产物（不写 pages.json、不回写 pages.config.json），因此既被 dev/build 生命周期调用，
 * 也被逐字节回归单测直接驱动。
 *
 * @returns 正常时返回状态；pages.config.json 语法错误且无缓存可兜底时返回 null。
 */
export async function buildPages(
  userOptions: UniPagesOptions,
  ctx: PagesStageContext,
  stages: PagesStage[] = []
): Promise<PagesBuildState | null> {
  const options = resolveOptions(userOptions);
  const root = ctx.root;
  const isProduction = ctx.isProduction;
  clearLoadedEnvCache();

  // 1. 读取基础配置
  let baseConfig: BaseConfig = {};
  let configParseFailed = false;
  const configPath = path.resolve(root, options.configFile);
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf-8');
      baseConfig = JSON5.parse(raw) as BaseConfig;
      lastGoodBaseConfig = baseConfig;
    }
    catch (e) {
      // 配置存在语法错误（通常为用户正在编辑中途）：用上次成功的配置兜底，本次生成绝不同步回写
      configParseFailed = true;
      if (lastGoodBaseConfig != null) {
        baseConfig = lastGoodBaseConfig;
      }
      console.warn(`[uni-pages] ${options.configFile} has syntax errors, using last good cache and skipping write-back:`, (e as Error).message);
    }
  }

  // 无缓存可用时直接中止，保持 pages.config.json 与 pages.json 原样，等待用户修复语法
  if (configParseFailed && lastGoodBaseConfig == null) {
    console.error(`[uni-pages] Aborted: ${options.configFile} has syntax errors and no cached config is available. Fix the file first.`);
    return null;
  }

  // 读取已有的 pages.json 作为回退兜底
  const outputPath = path.resolve(root, options.outFile);
  const existingPagesMap = new Map<string, PageConfig>();
  if (fs.existsSync(outputPath)) {
    try {
      const existingData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
      if (Array.isArray(existingData.pages)) {
        existingData.pages.forEach((p: PageConfig) => {
          if (p.path) {
            existingPagesMap.set(p.path, p);
          }
        });
      }
    }
    catch {}
  }

  // 2. 扫描主包 .uvue 文件（并发解析多个页面的 definePage 宏）
  const pagesDir = path.resolve(root, options.dir);
  const files = scanUvueFiles(pagesDir, options.exclude, root);
  files.sort();

  const scannedResults = await Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(file, 'utf-8');
      const meta = await parsePageMeta(raw, file, process.env.UNI_PLATFORM, root);
      return { file, raw, meta };
    })
  );

  const scanned: (PageConfig & { _hasMeta?: boolean })[] = [];
  const debugAnnotatedPages: string[] = [];
  const debugHomeAnnotatedPages: string[] = [];

  for (const { file, raw, meta } of scannedResults) {
    if ((meta as any)?._skipPage === true) {
      continue;
    }
    const pagePath = fileToPagePath(file, options.dir, root);

    const page: PageConfig & { _hasMeta?: boolean } = { path: pagePath };
    if (meta != null) {
      Object.assign(page, meta);
      page._hasMeta = true;

      // 规则：debug: false 具有最高否决权；显式配置 debug: false 时直接彻底排除沙盒调试
      if (meta.debug !== false) {
        const isDebugHome = meta.debugHome === true || meta.debug === 'home';
        const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
        if (isDebugHome) {
          debugHomeAnnotatedPages.push(pagePath);
        }
        else if (isDebug) {
          debugAnnotatedPages.push(pagePath);
        }
      }
    }
    else if (raw.includes('definePage(') || raw.includes('<route')) {
      const old = existingPagesMap.get(pagePath);
      if (old != null) {
        Object.assign(page, old);
        page._hasMeta = true;
      }
    }
    scanned.push(page);
  }

  // 3. 扫描分包（并发解析每个分包下的所有页面）
  const configSubPkgs = baseConfig.subPackages ?? [];
  const scannedSubPkgs: SubPackageConfig[] = [];

  for (let s = 0; s < options.subPackages.length; s++) {
    const subDir = options.subPackages[s];
    const absSubDir = path.resolve(root, subDir);
    if (!fs.existsSync(absSubDir)) {
      continue;
    }

    const subFiles = scanUvueFiles(absSubDir, options.exclude, root);
    subFiles.sort();

    const subResults = await Promise.all(
      subFiles.map(async (subFile) => {
        const raw = fs.readFileSync(subFile, 'utf-8');
        const meta = await parsePageMeta(raw, subFile, process.env.UNI_PLATFORM, root);
        return { subFile, raw, meta };
      })
    );

    const subPages: (PageConfig & { _hasMeta?: boolean })[] = [];
    for (const { subFile, raw, meta } of subResults) {
      if ((meta as any)?._skipPage === true) {
        continue;
      }
      const relPath = path.relative(absSubDir, subFile).replace(/\\/g, '/').replace(/\.uvue$/, '');
      const fullSubPath = `${subDir}/${relPath}`;

      const page: PageConfig & { _hasMeta?: boolean } = { path: relPath };
      if (meta != null) {
        Object.assign(page, meta);
        page._hasMeta = true;

        if (meta.debug !== false) {
          const isDebugHome = meta.debugHome === true || meta.debug === 'home';
          const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
          if (isDebugHome) {
            debugHomeAnnotatedPages.push(fullSubPath);
          }
          else if (isDebug) {
            debugAnnotatedPages.push(fullSubPath);
          }
        }
      }
      else if (raw.includes('definePage(') || raw.includes('<route')) {
        const fullRel = `${subDir}/${relPath}`;
        const old = existingPagesMap.get(fullRel);
        if (old != null) {
          Object.assign(page, old);
          page._hasMeta = true;
        }
      }
      subPages.push(page);
    }

    // 与 baseConfig 中同名 root 的分包合并（以磁盘实际存在的文件为准，自动剔除已删除的页面）
    const existing = configSubPkgs.find(p => p.root === subDir);
    const existingMap = new Map<string, PageConfig>();
    if (existing != null && Array.isArray(existing.pages)) {
      for (let k = 0; k < existing.pages.length; k++) {
        existingMap.set(existing.pages[k].path, existing.pages[k]);
      }
    }

    const mergedPages: PageConfig[] = [];
    for (let k = 0; k < subPages.length; k++) {
      const sp = subPages[k];
      const manual = existingMap.get(sp.path);
      if (sp._hasMeta) {
        mergedPages.push(sp);
      }
      else if (manual != null) {
        mergedPages.push({
          ...manual,
          path: sp.path
        });
      }
      else {
        mergedPages.push(sp);
      }
    }

    scannedSubPkgs.push({ root: subDir, pages: mergedPages });
  }

  // 将 baseConfig 中未扫描的分包原样保留
  for (let i = 0; i < configSubPkgs.length; i++) {
    const cp = configSubPkgs[i];
    if (!scannedSubPkgs.some(sp => sp.root === cp.root)) {
      scannedSubPkgs.push(cp);
    }
  }

  // 4. 合并主包 pages（以磁盘实际存在的文件为准，自动剔除已删除的页面）
  const manualPages = baseConfig.pages ?? [];
  const manualPagesMap = new Map<string, PageConfig>();
  for (let k = 0; k < manualPages.length; k++) {
    manualPagesMap.set(manualPages[k].path, manualPages[k]);
  }

  const finalPages: PageConfig[] = [];
  for (let k = 0; k < scanned.length; k++) {
    const sp = scanned[k];
    const manual = manualPagesMap.get(sp.path);
    if (sp._hasMeta) {
      finalPages.push(sp);
    }
    else if (manual != null) {
      finalPages.push({
        ...manual,
        path: sp.path
      });
    }
    else {
      finalPages.push(sp);
    }
  }

  // 保留手动配置中、磁盘上真实存在但不在扫描目录内的页面（如 uni_modules 内置页面）
  for (let k = 0; k < manualPages.length; k++) {
    const mp = manualPages[k];
    if (finalPages.some(p => p.path === mp.path)) {
      continue;
    }
    if (fs.existsSync(path.resolve(root, `${mp.path}.uvue`))) {
      finalPages.push(mp);
    }
  }

  // 5. 首页排最前（pages.json 的第一项 pages[0] 即为应用默认启动首页）
  // 优先级：definePage type: 'home' / isHome: true（页面内显式声明最高）> opts.homePage（插件选项）> baseConfig.homePage（配置文件）
  let home = '';
  const homeItem = scanned.find(p => (p as any).type === 'home' || (p as any).isHome === true);
  if (homeItem != null) {
    home = homeItem.path;
  }
  else if (options.homePage !== '') {
    home = options.homePage;
  }
  else if (baseConfig.homePage != null && baseConfig.homePage !== '') {
    home = baseConfig.homePage;
  }

  if (home !== '' && finalPages.length > 0) {
    const idx = finalPages.findIndex(p => p.path === home);
    if (idx > 0) {
      const [item] = finalPages.splice(idx, 1);
      finalPages.unshift(item);
    }
  }

  // 6. 支付宝自定义导航栏归一 + 剥离临时标记
  finalPages.forEach(normalizeCustomNavForAlipay);
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach(normalizeCustomNavForAlipay);
  });
  if (baseConfig.globalStyle?.navigationStyle === 'custom') {
    baseConfig.globalStyle['mp-alipay'] = {
      transparentTitle: 'always',
      titlePenetrate: 'YES',
      ...(baseConfig.globalStyle['mp-alipay'] ?? {})
    };
  }

  finalPages.forEach(p => cleanTempProps(p, false));
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach(p => cleanTempProps(p, false));
  });

  // 7. 装配待落盘对象（subPackages 由 stages 之后的 finalize 统一补，保证键序）
  const output = { pages: finalPages } as PagesJsonOutput;
  const keys = Object.keys(baseConfig);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (k !== 'pages' && k !== 'homePage' && k !== 'subPackages') {
      output[k] = baseConfig[k];
    }
  }

  const state: PagesBuildState = {
    root,
    isProduction,
    options,
    baseConfig,
    baseConfigParseOk: !configParseFailed,
    configPath,
    outputPath,
    existingPagesMap,
    finalPages,
    scannedSubPkgs,
    debugAnnotatedPages,
    debugHomeAnnotatedPages,
    output,
    flags: {
      sandboxActive: false,
      skipConfigWriteback: false
    },
    stats: {
      pageCount: finalPages.length,
      subPackageCount: scannedSubPkgs.length
    }
  };

  // 8. 按序跑 stages（sandbox → tabbar → route-meta）：唯一调用点，顺序结构性固定
  for (let i = 0; i < stages.length; i++) {
    stages[i].run(state, ctx);
  }

  // 9. finalize：subPackages 最后赋值，保证键序为 pages → 基座键 → subPackages
  if (state.scannedSubPkgs.length > 0) {
    output.subPackages = state.scannedSubPkgs;
  }
  else {
    delete output.subPackages;
  }

  return state;
}

// ==========================================
// 核心：落盘
// ==========================================

export function resolveCurrentPlatform(platformInput?: string): string {
  const p = (platformInput || process.env.UNI_PLATFORM || 'h5').toUpperCase();
  if (p === 'WEB')
    return 'H5';
  if (p === 'APP' || p === 'APP-PLUS') {
    const sub = (process.env.UNI_APP_PLATFORM || '').toUpperCase();
    if (sub === 'ANDROID')
      return 'APP-ANDROID';
    if (sub === 'IOS')
      return 'APP-IOS';
    if (sub === 'HARMONY')
      return 'APP-HARMONY';
    return 'APP';
  }
  return p;
}

/** 把构建结果落盘：写 pages.json（内容不变则跳过）+ ws 全量刷新 + 回写 pages.config.json */
export function commitPages(state: PagesBuildState, server: any = null): void {
  const currentPlatform = resolveCurrentPlatform(process.env.UNI_PLATFORM);
  const changed = writePagesJson(state.output, state.outputPath, currentPlatform, state.flags.sandboxActive);

  if (changed) {
    if (state.flags.sandboxActive) {
      const allPaths = [
        ...state.output.pages.map((p: PageConfig) => p.path),
        ...state.scannedSubPkgs.flatMap(s => s.pages.map(p => `${s.root}/${p.path}`))
      ];
      console.log(`\x1B[33m⚡ [uni-pages] 沙盒独立调试模式已生效: 共 ${allPaths.length} 个页面 (首页: ${state.output.pages[0].path})\x1B[0m`);
      console.log(`\x1B[33m   包含页面: ${allPaths.join(' | ')}\x1B[0m`);
    }
    else {
      console.log(`[uni-pages] Generated ${state.options.outFile} (${state.stats.pageCount} pages, ${state.stats.subPackageCount} subpackages)`);
    }

    // 触发 Vite 开发服务器全量热重载，通知 H5 / App 开发客户端立即刷新路由
    if (server != null) {
      try {
        const mod = server.moduleGraph.getModuleById(state.outputPath);
        if (mod != null) {
          server.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
      catch {}
    }
  }

  // 回写 pages.config.json：沙盒生效或基座语法错误时绝不回写
  if (!state.flags.skipConfigWriteback && state.baseConfigParseOk) {
    if (writeBackConfig(state.configPath, state.finalPages, state.scannedSubPkgs, state.outputPath)) {
      console.log(`[uni-pages] Automatically synced changes into ${state.options.configFile}`);
    }
  }
}

// ==========================================
// Vite 插件导出
// ==========================================

export default function uniPagesPlugin(userOptions: UniPagesOptions = {}): Plugin {
  const options = resolveOptions(userOptions);

  let projectRoot = process.cwd();
  let server: any = null;
  let isProduction = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let generation: Promise<void> = Promise.resolve();
  let stages: PagesStage[] = [];
  let stageChecked = false;
  let hasGeneratedInConfigResolved = false;

  async function runGenerate(): Promise<void> {
    if (!options.enabled) {
      return;
    }
    const ctx: PagesStageContext = { root: projectRoot, isProduction };

    // 能力自检（仅开发期一次）：卫星是独立可选插件，缺失只告警不阻断
    if (!isProduction && !stageChecked) {
      stageChecked = true;
      const present = new Set(stages.map(s => s.name));
      for (let i = 0; i < KNOWN_PAGES_STAGES.length; i++) {
        const known = KNOWN_PAGES_STAGES[i];
        if (!present.has(known)) {
          console.warn(`\x1B[33m[uni-pages] 阶段 ${known} 未注册，对应功能（sandbox / tabBar / route-meta）将不生效\x1B[0m`);
        }
      }
    }

    const state = await buildPages(userOptions, ctx, stages);
    if (state == null) {
      // pages.config.json 语法错误且无缓存：保持现状，等用户修好
      return;
    }
    commitPages(state, server);
  }

  function enqueueGenerate(): Promise<void> {
    generation = generation.then(runGenerate, runGenerate);
    return generation;
  }

  function debouncedGenerate(): void {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      void enqueueGenerate();
    }, DEBOUNCE_MS);
  }

  let hasWatchedChanges = false;
  let hasRelevantRouteChanges = false;

  const matchesPage = (filePath: string): boolean =>
    isPageFile(filePath, options.dir, options.subPackages, options.exclude, projectRoot);

  const isConfigFile = (filePath: string): boolean => {
    const normalized = filePath.replace(/\\/g, '/');
    const configPath = path.resolve(projectRoot, options.configFile).replace(/\\/g, '/');
    const tabbarConfigPath = path.resolve(projectRoot, 'src/tabbar/config.uts').replace(/\\/g, '/');
    const envPath = path.resolve(projectRoot, '.env').replace(/\\/g, '/');
    return (
      normalized === configPath
      || normalized === tabbarConfigPath
      || normalized === envPath
      || normalized.includes('pages.config')
      || normalized.includes('tabbar/config')
      || normalized.endsWith('.env')
    );
  };

  return {
    name: 'uni-pages',
    enforce: 'pre' as const,

    async configResolved(config: any) {
      projectRoot = config.root ?? process.cwd();
      // 发现所有独立注册的卫星插件
      stages = collectStagesFromPlugins(config.plugins ?? []);
      // 只有在明确的生产发版打包构建（非 watch 开发模式）时才判定为生产模式
      // 本地开发调试（H5 dev serve 与 iOS / Android / HarmonyOS 本地原生基座编译）均允许沙盒模式生效
      const mode = config.mode ?? process.env.NODE_ENV ?? 'development';
      const isExplicitProd = mode === 'production' || process.env.NODE_ENV === 'production';
      const isWatch = Boolean(config.build?.watch || process.env.UNI_WATCH || process.env.UNI_APP_WATCH);
      isProduction = isExplicitProd && !isWatch;

      if (options.enabled) {
        await enqueueGenerate();
        hasGeneratedInConfigResolved = true;
      }
    },

    watchChange(id: string) {
      if (!options.enabled) {
        return;
      }
      hasWatchedChanges = true;
      const normalized = id.replace(/\\/g, '/');
      if (isConfigFile(normalized) || matchesPage(normalized)) {
        hasRelevantRouteChanges = true;
      }
    },

    async buildStart() {
      if (!options.enabled) {
        return;
      }
      if (hasGeneratedInConfigResolved) {
        // 首次构建已在 configResolved 阶段完成生成，跳过 buildStart 的重复初始执行；
        hasGeneratedInConfigResolved = false;
        return;
      }
      // 在 watch 重新构建阶段，如果明确捕获到了文件变动且变动的文件全部与页面/路由无关（如 views/**、components/**），
      // 则坚决跳过本次路由重新生成与写盘，避免修改普通组件引发无谓的全量路由重写与多端互踩
      if (hasWatchedChanges && !hasRelevantRouteChanges) {
        hasWatchedChanges = false;
        return;
      }
      hasWatchedChanges = false;
      hasRelevantRouteChanges = false;
      await enqueueGenerate();
    },

    /**
     * 移除 definePage(...) 宏调用，避免运行时报错。
     *
     * definePage 是脚本级宏，所以整份 SFC 源码里只在 <script> 块内搜索：模板中作为文档
     * 展示的 `definePage({...})` 文本必须原样保留。已被拆出的纯脚本子模块没有 <script>
     * 标签，此时退回整段搜索，保持原行为。
     */
    transform(code: string, id: string) {
      if (!code.includes('definePage(')) {
        return null;
      }
      const rawId = id.split('?')[0].replace(/\\/g, '/');
      if (!rawId.endsWith('.uvue') && !rawId.endsWith('.vue')) {
        return null;
      }

      const scriptBlocks = findScriptBlocks(code);
      if (scriptBlocks.length === 0) {
        const newCode = stripDefinePageMacro(code);
        if (newCode == null) {
          return null;
        }
        return { code: newCode, map: null };
      }

      for (let i = 0; i < scriptBlocks.length; i++) {
        const newCode = stripDefinePageMacro(code, scriptBlocks[i].start, scriptBlocks[i].end);
        if (newCode != null) {
          return { code: newCode, map: null };
        }
      }
      return null;
    },

    configureServer(s: any) {
      if (!options.enabled) {
        return;
      }
      server = s;
      const pagesDir = path.resolve(projectRoot, options.dir);
      const configPath = path.resolve(projectRoot, options.configFile);
      const tabbarConfigPath = path.resolve(projectRoot, 'src/tabbar/config.uts');
      const envPath = path.resolve(projectRoot, '.env');

      if (fs.existsSync(pagesDir)) {
        server.watcher.add(pagesDir);
      }
      for (let i = 0; i < options.subPackages.length; i++) {
        const subDir = path.resolve(projectRoot, options.subPackages[i]);
        if (fs.existsSync(subDir)) {
          server.watcher.add(subDir);
        }
      }
      if (fs.existsSync(configPath)) {
        server.watcher.add(configPath);
      }
      if (fs.existsSync(tabbarConfigPath)) {
        server.watcher.add(tabbarConfigPath);
      }
      if (fs.existsSync(envPath)) {
        server.watcher.add(envPath);
      }

      server.watcher.on('add', (filePath: string) => {
        if (matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on('unlink', (filePath: string) => {
        if (matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on('change', (filePath: string) => {
        if (isConfigFile(filePath) || matchesPage(filePath)) {
          debouncedGenerate();
        }
      });
    },

    transformIndexHtml(html: string) {
      const mode = getTabbarMode(projectRoot);
      if (mode === '2' || mode === 'CUSTOM_TABBAR_WITH_NATIVE' || mode === 'CUSTOM_TABBAR') {
        return html.replace('</head>', `${HIDE_NATIVE_TABBAR_STYLE}\n</head>`);
      }
      return html;
    }
  };
}
