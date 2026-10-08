import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import type { PluginOption } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js';
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared';
import uniModule from '@dcloudio/vite-plugin-uni';
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
import { execSync } from 'node:child_process';
import { viteMockServe } from 'vite-plugin-mock';
import { viteVConsole } from 'vite-plugin-vconsole';
import vitePluginAppinfo from 'vite-plugin-build-info';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const uni = (uniModule as typeof uniModule & { default?: typeof uniModule }).default ?? uniModule;
const projectRoot = dirname(fileURLToPath(import.meta.url));

/**
 * 解析 H5 运行时（uni-h5 / uni-h5-vue）的真实磁盘路径。
 *
 * 为什么不能直接用项目 node_modules 里的副本：
 * `pnpm dev` 走的是 `uni-launch` → HBuilderX CLI，编译器与运行时始终由 HBuilderX 安装目录提供，
 * 项目 node_modules 下的 @dcloudio/* 并不参与 dev 编译（两边版本可能不一致，实测也不同）。
 * 浏览器真正请求的是 /@fs/<HBuilderX 路径>/...，因此预热必须指向 HBuilderX 内的文件；
 * 若误指向项目 node_modules 里的副本，实际预热的是永远不会被请求的另一个版本，等于无效。
 *
 * @param subPath dist-x 目录下的相对入口文件
 * @returns 绝对路径；未找到 HBuilderX 时返回 null（调用方需自行跳过）
 */
function resolveUniRuntimePath(subPath: string): string | null {
  const candidates = [
    process.env.HBUILDERX_PLUGINS_PATH,
    // macOS
    '/Applications/HBuilderX.app/Contents/HBuilderX/plugins',
    // Linux
    '/opt/hbuilderx/HBuilderX/plugins',
    '/opt/HBuilderX/plugins',
    '/usr/local/hbuilderx/HBuilderX/plugins',
    // Windows
    'C:\\Program Files\\HBuilderX\\plugins',
    'C:\\HBuilderX\\plugins'
  ].filter((p): p is string => !!p);

  for (const base of candidates) {
    const full = resolve(base, 'uniapp-cli-vite/node_modules/@dcloudio', subPath);
    if (fs.existsSync(full)) {
      return full;
    }
  }
  return null;
}

// H5 运行时体积巨大（uni-h5.es.js 约 1MB 源码 / 转换后 3.3MB），且被 DCloud 强制排除在
// esbuild 预打包之外，冷启动必须逐个模块转换。这里解析一次供 warmup 使用。
const _uniRuntimeFiles = [
  resolveUniRuntimePath('uni-h5/dist-x/uni-h5.es.js'),
  resolveUniRuntimePath('uni-h5-vue/dist-x/vue.runtime.esm.js')
].filter((p): p is string => !!p);

// 读取 package.json 与 Git 元信息，编译阶段注入环境变量供 import.meta.env 全端安全访问
try {
  const pkgRaw = fs.readFileSync(resolve(projectRoot, 'package.json'), 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  process.env.VITE_APP_VERSION = pkg.version ?? '1.0.0';
}
catch {
  process.env.VITE_APP_VERSION = '1.0.0';
}

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
const env = loadEnv(process.env.NODE_ENV || 'production', projectRoot, '');
const isVisualizer = process.env.VISUALIZER === 'true'
  || env.VISUALIZER === 'true'
  || env.VITE_VISUALIZER === 'true'
  || process.env.ANALYZE === 'true'
  || env.ANALYZE === 'true'
  || process.env.VITE_BUNDLE_ANALYZE === 'true'
  || env.VITE_BUNDLE_ANALYZE === 'true'
  || process.argv.includes('--visualizer')
  || process.argv.includes('--analyze');

const isMock = process.env.VITE_USE_MOCK === 'true'
  || env.VITE_USE_MOCK === 'true'
  || process.env.MOCK === 'true'
  || env.MOCK === 'true'
  || process.argv.includes('--mock');

const isWeb = process.env.UNI_PLATFORM === 'web'
  || process.env.UNI_PLATFORM === 'h5'
  || !process.env.UNI_PLATFORM;

// 生产环境绝对严禁包含 vConsole（即使显式配置了开关或参数也强制屏蔽，防止线上泄漏）
const isProduction = env.VITE_ENV_TYPE === 'production'
  || process.env.VITE_ENV_TYPE === 'production'
  || (isBuild && env.VITE_ENV_TYPE !== 'test');

const isVConsole = !isProduction && isWeb && (
  process.env.VITE_SHOW_VCONSOLE === 'true'
  || env.VITE_SHOW_VCONSOLE === 'true'
  || process.env.VCONSOLE === 'true'
  || env.VCONSOLE === 'true'
  || process.argv.includes('--vconsole')
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
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    // 启用快速文件系统状态缓存，减少启动与热重载时重复 stat 系统调用
    fs: {
      cachedChecks: true
    },
    // Vite 5+ 服务端预热核心入口与首页模块，避免首屏访问时串行等待 Transform
    // ⚠️ 不要把 uniRuntimeFiles 加入 warmup：
    // uni-h5.es.js 静态 import 了 @dcloudio/uni-shared / vue-router / @dcloudio/uni-i18n / vue(→uni-h5-vue)，
    // 这些全在 DCloud 的 optimizeDeps.exclude 列表里、scanner 没预构建。
    // warmup 一请求 uni-h5.es.js，crawler 就沿 import 链发现这些 missing dep → 调度 rerun，
    // rerun 窗口期间浏览器的旧 browserHash 请求会命中 504 (Outdated Optimize Dep)。
    // 业务页面 warmup 保留：main.uts → App.uvue → IndexView 不直接依赖被 exclude 的运行时，
    // 不会主动激活 crawler，rerun 由首屏自然请求按需触发，窗口与用户访问不重叠。
    warmup: {
      clientFiles: [
        './main.uts',
        './App.uvue',
        './src/pages/index/index.uvue',
        './src/pages/index/views/IndexView.uvue'
        // 预热首屏会拉到的业务模块，命中裸路径即触发整页编译，
        // 浏览器后续的 ?import / ?vue&type=script / ?vue&type=style 变体直接命中 moduleGraph 缓存
        // （实测单模块 623ms → 30ms）。
        // 用 glob 而非写死文件名：页面/接口增删改名都不会让这里失效（mapFiles 匹配不到会静默跳过）。
        // 注意：加 './index.html' 无效——warmup 对 html 走 transformIndexHtml('/index.html')，
        // 与浏览器请求的 '/' 不是同一路径，且 '/' 每次重新生成（含可变 buildTime）。
        // 这些都是业务模块，不激活被 exclude 的运行时 + crawler rerun 的 504 窗口。
        // './src/pages/**/*.uvue',
        // './src/sub/**/*.uvue',
        // './src/http/**/*.uts',
        // './src/router/**/*.uts',
        // './src/api/**/*.uts'
      ]
    },
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 改成你的后端地址
        changeOrigin: true
        // 如果后端接口路径本身不带 /api 前缀，放开下面这行去掉前缀
        // rewrite: (p) => p.replace(/^\/api/, ''),
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
    // 修复 H5 模式下外部或 AI 修改 .uvue/.uts 时 Tailwind CSS v4 样式热更新丢失的联动补丁插件
    // tailwindHmrPlugin(),
    // 自动扫描与路由生成插件（基于 pages.config.json + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      // 【总控开关】：是否启用插件自动扫描与 pages.json 生成（设为 false 则完全失效，不扫描、不写入 pages.json、不监听文件变化）
      enabled: true,

      // 【主包扫描目录】：主包页面根目录（相对于项目根目录），默认 'src/pages'
      dir: 'src/pages',

      // 【分包扫描目录】：分包根目录数组，不能是主包目录的子目录，默认 []
      subPackages: ['src/sub'],

      // 【排除扫描规则】：Glob 匹配规则数组，匹配到的文件/目录不会被当作页面路由扫描
      exclude: ['**/components/**/*.*', '**/views/**/*.*'],

      // 【输出文件路径】：生成并同步的 pages.json 相对路径，默认 'pages.json'
      outFile: 'pages.json',

      // 【基础配置文件】：用于继承 globalStyle、tabBar、easycom 等静态配置的基准文件，默认 'pages.config.json'
      configFile: 'pages.config.json',

      // 【强制指定首页】：若指定则优先以该路由为主包第一个首页；留空时默认取 pages.config.json 首项或扫描的第一项
      homePage: ''
    }),
    // 单页 TabBar 基础脚手架与视图组件辅助生成插件（按需根据 src/tabbar/config.uts 辅助创建基础 TabViews）
    tabbarViewsPlugin({
      enabled: true,
      autoCreateViews: !isBuild,
      configFile: 'src/tabbar/config.uts'
    }),
    // 手动补充 easycom 插件（限制非小程序端生效，含 App 与 Web）
    // 该插件内部名为 uni:app-easycom，负责在 App 蒸汽模式与 Web 端把模板里的 easycom 标签转成静态 import；
    // 小程序端（mp-*）由官方编译器基于 usingComponents 原生处理，挂载该插件会导致组件被转为未知动态组件并报错 resolveDynamicComponent。
    ...(!process.env.UNI_PLATFORM?.startsWith('mp-')
      ? [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })]
      : []),
    uniLayoutsPlugin({
      layoutDir: 'src/layouts',
      layout: 'default'
    }),
    uniRootX({
      enabledGlobalRef: false,
      rootFileName: 'App.ku'
    }),
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
            mockPath: 'mock',
            enable: true,
            watchFiles: true,
            logger: true
          }) as PluginOption
        ]
      : []),
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
