import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createLogger, defineConfig } from 'vite';
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js';
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared';
import uniModule from '@dcloudio/vite-plugin-uni';
import { uniAppX } from 'weapp-tailwindcss/presets';
import { WeappTailwindcss } from 'weapp-tailwindcss/vite';
import autoRootPlugin from './plugins/root-plugin';
import uniLayoutsPlugin from './plugins/uni-layouts-plugin';
import tabbarViewsPlugin from './plugins/vite-plugin-tabbar-views';
import uniPagesPlugin from './plugins/vite-plugin-uni-pages';

// 控制台警告过滤配置：彻底净化控制台，拦截过滤无害编译警告（如 UTS/TS 声明文件扩展名提示、第三方库类型推断等）
const SILENCE_ALL_WARNINGS = true; // 设为 true 则完全不在控制台打印 warning，只保留 error 和 info

const IGNORED_WARNINGS = [
  '--allowArbitraryExtensions',
  'allowArbitraryExtensions',
  'rice-ui',
  'useChildren.uts',
  'No overload matches this call',
  'neither type sufficiently overlaps',
  'Conversion of type',
  'utf8'
];

const customLogger = createLogger();
const originalWarn = customLogger.warn;
const originalWarnOnce = customLogger.warnOnce;

customLogger.warn = (msg, options) => {
  if (SILENCE_ALL_WARNINGS || IGNORED_WARNINGS.some(k => msg.includes(k))) {
    return;
  }
  originalWarn(msg, options);
};

customLogger.warnOnce = (msg, options) => {
  if (SILENCE_ALL_WARNINGS || IGNORED_WARNINGS.some(k => msg.includes(k))) {
    return;
  }
  originalWarnOnce(msg, options);
};

// 拦截直接通过 console.warn 打印的第三方库或插件警告
const originalConsoleWarn = console.warn;
console.warn = (...args: any[]) => {
  const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');
  if (SILENCE_ALL_WARNINGS || IGNORED_WARNINGS.some(k => str.includes(k))) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

// 拦截直接通过 console.log 打印的 DCloud 编译告警代码片段 (Code Frame)
const originalConsoleLog = console.log;
let lastWasSuppressedWarn = false;
console.log = (...args: any[]) => {
  const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');
  if (str.includes('\uFEFF')) {
    lastWasSuppressedWarn = true;
    return;
  }
  if (lastWasSuppressedWarn && (str.startsWith('at ') || str.includes(' at '))) {
    return;
  }
  if (/(?:^|\n)\s*(?:>\s*)?\d+\s*\|/.test(str) && (SILENCE_ALL_WARNINGS || IGNORED_WARNINGS.some(k => str.includes(k)))) {
    lastWasSuppressedWarn = true;
    return;
  }
  lastWasSuppressedWarn = false;
  originalConsoleLog.apply(console, args);
};

const uni = (uniModule as typeof uniModule & { default?: typeof uniModule }).default ?? uniModule;
const projectRoot = dirname(fileURLToPath(import.meta.url));

// 读取 package.json，编译阶段注入应用版本号供 import.meta.env 全端安全访问
try {
  const pkgRaw = fs.readFileSync(resolve(projectRoot, 'package.json'), 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  process.env.VITE_APP_VERSION = pkg.version ?? '1.0.0';
}
catch {
  process.env.VITE_APP_VERSION = '1.0.0';
}

const isBuild = process.env.NODE_ENV === 'production' || process.argv.includes('build');

const weappTailwindcssPlugins = WeappTailwindcss(
  uniAppX({
    base: projectRoot,
    cssEntries: [resolve(projectRoot, 'main.css')],
    cssSourceTrace: !isBuild,
    rem2rpx: true,
    customAttributes: {
      '*': [/^t-class(?:-.+)?$/]
    },
    componentLocalStyles: {
      enabled: true,
      onlyWhenStyleIsolationVersion2: true,
      componentMatcher: id => /(?:^|[/\\])(?:components|layouts)(?:[/\\].+)?\.(?:uvue|nvue)$/.test(id)
    },
    uvueUnsupported: 'warn'
  })
) ?? [];

export default defineConfig({
  customLogger,
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
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 改成你的后端地址
        changeOrigin: true
        // 如果后端接口路径本身不带 /api 前缀，放开下面这行去掉前缀
        // rewrite: (p) => p.replace(/^\/api/, ''),
      }
    }
  },
  build: {
    sourcemap: false, // 关闭 sourcemap，警告直接消失
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (SILENCE_ALL_WARNINGS)
          return;
        const msg = warning.message || '';
        if (IGNORED_WARNINGS.some(k => msg.includes(k)))
          return;
        defaultHandler(warning);
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'strip-unsupported-sticky',
          Declaration(decl: any) {
            if (decl.prop === 'position' && decl.value === 'sticky') {
              decl.value = 'relative';
            }
          }
        }
      ]
    }
  },
  plugins: [
    // 拦截并自动将原生 CSS 编译器不支持的 position: sticky 修正为 position: relative，杜绝 App 平台编译报错
    {
      name: 'vite-plugin-strip-sticky',
      enforce: 'pre',
      transform(code: string, id: string) {
        if (id.includes('node_modules')) {
          return null;
        }
        if ((id.endsWith('.uvue') || id.endsWith('.css') || id.endsWith('.scss') || id.includes('type=style')) && code.includes('sticky')) {
          return {
            code: code.replace(/position\s*:\s*sticky\s*;?/g, 'position: relative;')
          };
        }
        return null;
      }
    },
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
    ...(!process.env.UNI_PLATFORM?.startsWith('mp-')
      ? [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })]
      : []),
    // 手动补充 easycom 插件（限制非小程序端生效，含 App 与 Web）
    // 该插件内部名为 uni:app-easycom，负责在 App 蒸汽模式与 Web 端把模板里的 easycom 标签转成静态 import；
    // 小程序端（mp-*）由官方编译器基于 usingComponents 原生处理，挂载该插件会导致组件被转为未知动态组件并报错 resolveDynamicComponent。
    // ...(process.env.UNI_PLATFORM?.startsWith('mp-') ? [] : [uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })]),
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni(),
    ...weappTailwindcssPlugins
  ]
});
