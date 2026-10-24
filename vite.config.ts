import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js';
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared';
import uniModule from '@dcloudio/vite-plugin-uni';
import UniManifest from '@uni-helper/vite-plugin-uni-manifest';
import { uniAppX } from 'weapp-tailwindcss/presets';
import { WeappTailwindcss } from 'weapp-tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import uniRootX from './plugins/root-plugin';
import cleanLoggerPlugin from './plugins/vite-plugin-clean-logger';
import editorVersionPlugin from './plugins/vite-plugin-editor-version';
import h5OptimizeDepsPlugin from './plugins/vite-plugin-h5-optimize-deps';
import uniLayoutsPlugin from './plugins/uni-layouts-plugin';
import tabbarViewsPlugin from './plugins/vite-plugin-tabbar-views';
import uniPagesPlugin from './plugins/vite-plugin-uni-pages';
import uniPagesSandboxPlugin from './plugins/vite-plugin-uni-pages-sandbox';
import uniPagesTabbarPlugin from './plugins/vite-plugin-uni-pages-tabbar';
import uniPagesRouteTablePlugin from './plugins/vite-plugin-uni-pages-route-table';
import htmlToUniPlugin from './plugins/vite-plugin-html-to-uni';
import { execSync } from 'node:child_process';
import { viteMockServe } from 'vite-plugin-mock';
import { viteVConsole } from 'vite-plugin-vconsole';
import vitePluginAppinfo from 'vite-plugin-build-info';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const uni = (uniModule as typeof uniModule & { default?: typeof uniModule }).default ?? uniModule;
const projectRoot = dirname(fileURLToPath(import.meta.url));

/**
 * manifest.config.ts → manifest.json 的生成选项。
 *
 * outDir 显式钉在项目根：普通 uni-app 工程的输入目录是 `src/`，但 unibestX 是 HBuilderX 工程，
 * 项目根就是输入目录（manifest.json / pages.json / App.uvue 都在根上），依赖 UNI_INPUT_DIR 迟早踩空。
 * Tab 缩进 + 补齐末尾换行是为了贴合 HBuilderX 自己写出的格式：编辑器界面哪天回写了 manifest.json，
 * 也不会因为格式差异产生满屏噪音 diff。
 *
 * 标注类型是必要的：不标注时 `eol` 会被推成宽泛的 string，传给 UniManifest() 报 TS2345
 * （要求 '\n' | '\r\n' 字面量）。
 */
const manifestPluginOptions: import('@uni-helper/vite-plugin-uni-manifest').UserOptions = {
  cwd: projectRoot,
  outDir: projectRoot,
  indent: '\t',
  eol: '\n',
  insertFinalNewline: true
};

// 读取 package.json 模板版本与 Git 元信息，编译阶段注入环境变量供 import.meta.env 全端安全访问
let pkgVersion = '1.0.0';
try {
  const pkgRaw = fs.readFileSync(resolve(projectRoot, 'package.json'), 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  pkgVersion = pkg.version ?? '1.0.0';
}
catch {
  pkgVersion = '1.0.0';
}
process.env.VITE_PKG_VERSION = pkgVersion;
process.env.VITE_TEMPLATE_VERSION = pkgVersion;

try {
  process.env.VITE_GIT_COMMIT_HASH = execSync('git rev-parse --short HEAD', { stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
  process.env.VITE_GIT_BRANCH = execSync('git rev-parse --abbrev-ref HEAD', { stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
}
catch {
  process.env.VITE_GIT_COMMIT_HASH = 'unknown';
  process.env.VITE_GIT_BRANCH = 'unknown';
}
process.env.VITE_BUILD_TIME = new Date().toISOString();

const isBuild = process.env.NODE_ENV === 'production' || process.argv.includes('build');
const defaultMode = isBuild ? 'production' : 'development';
const mode = process.env.NODE_ENV || defaultMode;
process.env.NODE_ENV = mode;

const loadedEnv = loadEnv(mode, projectRoot, '');
// CLI 显式传入的环境变量（如 VITE_USE_MOCK=true / VITE_H5_USE_PROXY=true）优先于 .env 静态文件，避免被默认值冲掉
const env = { ...loadedEnv, ...process.env };

const isVisualizer = env.VISUALIZER === 'true' || process.argv.includes('--visualizer');

function checkMockActive(): boolean {
  if (env.VITE_USE_MOCK === 'true' || process.argv.includes('--mock')) {
    return true;
  }
  try {
    const activeFile = resolve(projectRoot, 'node_modules/.cache/mock-active.json');
    if (fs.existsSync(activeFile)) {
      const raw = fs.readFileSync(activeFile, 'utf-8');
      const data = JSON.parse(raw);
      if (data && typeof data.pid === 'number') {
        try {
          process.kill(data.pid, 0);
          return true;
        }
        catch {
          fs.unlinkSync(activeFile);
        }
      }
    }
  }
  catch {}
  return false;
}

const isMock = checkMockActive();
if (isMock) {
  env.VITE_USE_MOCK = 'true';
  process.env.VITE_USE_MOCK = 'true';
}

// 🚀 本地 Mock 模式或显式配置代理时，自动切换为 H5 反向代理模式（走 /api 前缀，零心智负担）
const isProxy = isMock || env.VITE_H5_USE_PROXY === 'true';
if (isProxy) {
  env.VITE_H5_USE_PROXY = 'true';
  process.env.VITE_H5_USE_PROXY = 'true';
}

// 同步注入 process.env，确保构建期各插件（包括 UniManifest 解析 manifest.config.ts）无论从何处启动都能读取全量环境变量
Object.assign(process.env, env);

const isWeb = env.UNI_PLATFORM === 'web' || env.UNI_PLATFORM === 'h5';

// 生产环境绝对严禁包含 vConsole（即使显式配置了开关或参数也强制屏蔽，防止线上泄漏）
const isProduction = env.VITE_ENV_TYPE === 'production'
  || (isBuild && env.VITE_ENV_TYPE !== 'test');

const isVConsole = !isProduction && isWeb && (
  env.VITE_SHOW_VCONSOLE === 'true' || process.argv.includes('--vconsole')
);

const weappTailwindcssPlugins: PluginOption[] = (WeappTailwindcss(
  uniAppX({
    base: projectRoot,
    cssEntries: [resolve(projectRoot, 'main.css')],
    rem2rpx: true,
    customAttributes: {
      '*': [/^t-class(?:-.+)?$/]
    },
    componentLocalStyles: {
      enabled: true,
      onlyWhenStyleIsolationVersion2: true,
      componentMatcher: (id: string) => /(?:^|[/\\])src[/\\](?:pages|sub|components)[/\\].*?\.(?:uvue|nvue)$/.test(id)
    },
    uvueUnsupported: 'warn',
    cssSourceTrace: !isBuild
  } as any)
) ?? []) as PluginOption[];

export default defineConfig({
  base: './',
  resolve: {
    alias: (process.env.UNI_PLATFORM === 'web' || process.env.UNI_PLATFORM === 'h5')
      ? [
          { find: /^vue$/, replacement: '@dcloudio/uni-h5-vue' }
        ]
      : []
  },
  define: {
    '__X_STYLE_ISOLATION__': false,
    '__X_STYLE_ISOLATION_UP_ARROW__': false,
    'import.meta.env.VITE_TEMPLATE_VERSION': JSON.stringify(pkgVersion),
    'import.meta.env.VITE_PKG_VERSION': JSON.stringify(pkgVersion),
    ...(isMock ? { 'import.meta.env.VITE_USE_MOCK': JSON.stringify('true') } : {}),
    ...(isProxy ? { 'import.meta.env.VITE_H5_USE_PROXY': JSON.stringify('true') } : {})
  },
  server: {
    host: '0.0.0.0',
    port: 9527,
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      '/api': {
        target: env.VITE_SERVER_BASEURL || 'http://localhost:3000',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, '')
      },
      '/api-secondary': {
        target: env.VITE_SERVER_BASEURL_SECONDARY || env.VITE_GATEWAY_BASEURL || env.VITE_SERVER_BASEURL || 'http://localhost:8080',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api-secondary/, '')
      }
    },
    hmr: true,
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/unpackage/**'
      ]
    }
  },
  build: {
    sourcemap: false // 关闭 sourcemap，警告直接消失
  },
  plugins: [
    // 编辑器版本对齐提示：HBuilderX / HBuilderV 升级后，package.json pin 的 @dcloudio/*
    // 可能还是旧版。只提示不阻断 —— 版本不一致未必立刻报错，但报错时往往是 API 行为差异、
    // 类型不匹配这类看不出根因的问题，所以每次都提醒一下。
    // 没装编辑器、或 package.json 没有这几个 pin 的环境会静默跳过。
    // 自动同步在 npm 脚本层（pnpm dev / build:* 前面挂了 --ensure）。
    editorVersionPlugin(),
    // 控制台警告与代码片段净化插件：拦截 Vite/Rollup/DCloud 编译告警输出
    cleanLoggerPlugin({ silenceAll: true }),
    // H5 冷启动性能优化：覆盖 DCloud 对依赖预构建的禁用，将核心大体积依赖纳入 esbuild 预构建
    // extraIncludes 透传 isVConsole 时的 vconsole：vite-plugin-vconsole 在 transform 钩子里动态注入
    // `import VConsole from 'vconsole'` 到 main.uts，scanner 看不到，需显式 include 让 scanner 预构建。
    h5OptimizeDepsPlugin({ debug: false, extraIncludes: isVConsole ? ['vconsole'] : [] }),
    // Tab 页面补建与 TabViews 生成插件。
    // 必须排在 uni-pages 之前：configResolved 阶段先补齐缺失的 Tab 页面，核心插件随后扫描时才能
    // 在同一轮把新页面写入 pages.json。删除 Tab 配置不会触发任何页面删除。
    tabbarViewsPlugin({
      enabled: true,
      configFile: 'src/tabbar/config.uts'
    }),
    // 自动扫描与路由生成插件（基于 pages.config.json + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      // 【总控开关】：是否启用插件自动扫描与 pages.json 生成（设为 false 则完全失效，不扫描、不写入 pages.json、不监听文件变化）
      enabled: true,

      // 【主包扫描目录】：主包页面根目录（相对于项目根目录），默认 'src/pages'
      dir: 'src/pages',

      // 【分包扫描目录】：分包根目录数组，不能是主包目录的子目录，默认 []
      subPackages: ['src/sub'],

      // 【分包切分模式】：'subdirs'（默认推荐，将 subPackages 下每一个一级子目录自动作为独立分包，彻底避免小程序单包 2MB 限制）| 'root'（将整个目录作为单一分包）
      subPackageMode: 'subdirs',

      // 【排除扫描规则】：Glob 匹配规则数组，匹配到的文件/目录不会被当作页面路由扫描
      exclude: [
        '**/components/**/*.*',
        '**/views/**/*.*',
        '**/common/**/*.*',
        '**/modules/**/*.*',
        '**/font/**/*.*',
        '**/fonts/**/*.*',
        '**/img/**/*.*',
        '**/imgs/**/*.*',
        '**/image/**/*.*',
        '**/images/**/*.*',
        '**/assets/**/*.*'
      ],

      // 【输出文件路径】：生成并同步的 pages.json 相对路径，默认 'pages.json'
      outFile: 'pages.json',

      // 【基础配置文件】：用于继承 globalStyle、tabBar、easycom 等静态配置的基准文件，默认 'pages.config.json'
      configFile: 'pages.config.json',

      // 【强制指定首页】：若指定则优先以该路由为主包第一个首页；留空时默认取 pages.config.json 首项或扫描的第一项
      homePage: '',

      // 【自定义上下文扩展注入】：向 definePage((options) => ...) 的 options 注入业务自定义属性
      // 支持静态对象或函数 (_baseCtx => ({ ... }))，可在页面中解构 options.xxx 读取
      context: _baseCtx => ({
        // 可自由注入业务常量、环境变量、构建参数或辅助方法
        appName: env.VITE_APP_TITLE || 'unibestX',
        isProduction,
        buildVersion: env.VITE_APP_VERSION || process.env.VITE_APP_VERSION || '1.0.0',
        templateVersion: pkgVersion
      })
    }),
    // uni-pages 的三个独立卫星插件：各自一个文件、各自独立注册，核心插件通过 configResolved
    // 从插件数组里发现它们携带的 uniPagesStage 属性，在同一次生成 pass 内按 order 依次运行。
    // 注意：必须无条件并列注册，禁止写成 `...(cond ? [x()] : [])`，否则对应功能会静默失效。
    uniPagesSandboxPlugin(), // 沙盒独立调试模式（VITE_DEV_SANDBOX / definePage({ debug })）
    uniPagesTabbarPlugin(), // TabBar 策略（VITE_TABBAR_MODE 0–4）
    uniPagesRouteTablePlugin(), // 提供 virtual:uni-pages-route-table 虚拟模块（页面路由表数据源）
    // 手动补充 easycom 插件（限制非小程序端生效，含 App 与 Web）
    // 该插件内部名为 uni:app-easycom，负责在 App 蒸汽模式与 Web 端把模板里的 easycom 标签转成静态 import；
    // 小程序端（mp-*）由官方编译器基于 usingComponents 原生处理，挂载该插件会导致组件被转为未知动态组件并报错 resolveDynamicComponent。
    ...(!process.env.UNI_PLATFORM?.startsWith('mp-')
      ? [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })]
      : []),
    htmlToUniPlugin(),
    uniLayoutsPlugin({
      layoutDir: 'src/layouts',
      layout: 'default'
    }),
    uniRootX({
      enabledGlobalRef: false,
      rootFileName: 'src/AppRoot'
    }),
    // manifest.json 由 manifest.config.ts 生成（必须在 uni() 之前注册）。
    // ⚠️ 注意时序：uni-app 在编译进程启动时（vite 之前）就读走 manifest.json 并缓存成进程级 once，
    // 本插件写盘发生在 configResolved，永远晚一步 —— 改了 manifest.config.ts 后，本次编译用的
    // 仍是磁盘上的旧 manifest.json，要再跑一次才生效。所以 manifest.json 必须跟着配置一起提交
    // （尤其发版前：它决定产物里的 appid / versionCode）。
    UniManifest(manifestPluginOptions),
    uni(),
    ...weappTailwindcssPlugins,
    ...(isVisualizer
      ? [
          visualizer({
            filename: resolve(projectRoot, 'stats.html'),
            title: 'unibestX 产物体积分析报告',
            open: process.env.VISUALIZER_OPEN ? process.env.VISUALIZER_OPEN === 'true' : true,
            gzipSize: true,
            brotliSize: true
          }) as PluginOption
        ]
      : []),
    // 构建元信息自动注入插件：向 HTML 注入 meta[name="app-info"]、全局变量 __APP_INFO__ 与控制台徽标
    vitePluginAppinfo({
      enableLog: true,
      enableMeta: true,
      enableGlobal: true
    }),
    // 静态资源自动化压缩插件：在构建阶段压缩打包图片资源
    ...(isBuild
      ? [
          ViteImageOptimizer({
            png: { quality: 80, compressionLevel: 9 },
            jpeg: { quality: 80 },
            jpg: { quality: 80 },
            webp: { quality: 80 },
            logStats: true
          }) as PluginOption
        ]
      : []),
    // 本地 Mock 中间件插件：支持纯前端离线联调（VITE_USE_MOCK=true / pnpm dev:mock）
    ...(isMock
      ? [
          viteMockServe({
            mockPath: resolve(projectRoot, 'mock'),
            enable: true,
            watchFiles: true,
            logger: true
          }) as PluginOption
        ]
      : []),
    // 本地 Mock / 代理模式终端状态提示插件（通过 configResolved 钩子确保在 HBuilderX 编译输出中稳定打印）
    {
      name: 'unibestx:mock-tip',
      configResolved() {
        if (!isBuild) {
          if (isMock) {
            console.log('✔ [mock] 本地 Mock 服务已开启 (vite-plugin-mock)，已自动切换为 H5 代理模式 (VITE_H5_USE_PROXY=true)');
          }
          else {
            console.log(isProxy
              ? 'ℹ [mock] 本地 Mock 服务已关闭（H5 代理模式生效中）'
              : 'ℹ [mock] 本地 Mock 服务已关闭（直连模式）');
          }
        }
      }
    },
    // 移动端真机调试工具 vConsole（仅在 Web/H5 且开启时注入，如 pnpm dev:vconsole）
    ...(isVConsole
      ? [
          viteVConsole({
            entry: [
              resolve(projectRoot, 'main.uts'),
              resolve(projectRoot, 'main')
            ],
            enabled: isVConsole,
            config: {
              maxLogNumber: 1000,
              theme: 'dark'
            },
            customHide: 'location.href.includes("vconsole=false")'
          }) as PluginOption
        ]
      : [])
  ]
});
