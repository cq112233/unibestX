import process from 'node:process';
import { defineConfig } from 'vite';
import uniLayoutsPlugin from './plugins/uni-layouts-plugin';
import autoRootPlugin from './plugins/root-plugin';
import uniPagesPlugin from './plugins/vite-plugin-uni-pages';
import tabbarViewsPlugin from './plugins/vite-plugin-tabbar-views';

// 修复 uni-app x web端/h5端 丢掉 easycom 导入的官方 bug
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js';
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared';

import uniModule from '@dcloudio/vite-plugin-uni';
import tailwindcss from 'tailwindcss';
import tailwindConfigModule from './tailwind.config.js';
import { cool as coolPlugin } from '@cool-vue/unix';
import fs from 'node:fs';
import { join } from 'node:path';

// 确保 @cool-vue/unix 根目录环境变量存在
process.env.UNI_INPUT_DIR = process.env.UNI_INPUT_DIR || process.cwd();

// 直接使用 @cool-vue/unix 官方包提供的 uni-app X Tailwind 跨端支持插件套件
// 过滤掉 COOL 框架专属的侵入式逻辑（.cool/bootstrap 客户端注入与 pages.json 覆写），保留其核心 Tailwind 编译套件
function cool() {
  return coolPlugin({
    tailwind: {
      enable: true
    }
  }).filter(p => p && p.name && p.name.includes('tailwind'));
}

const rawUni = (uniModule as typeof uniModule & { default?: typeof uniModule }).default ?? uniModule;

// 消除 HBuilderX 启动时 CLI 入口与 uni() 插件重复输出的编译器版本与启动横幅（确保控制台仅保留一次输出）
function uni(...args: any[]) {
  const originalLog = console.log;
  console.log = function (...logArgs: any[]) {
    const text = logArgs.map(a => (typeof a === 'string' ? a : '')).join(' ').trim();
    if (
      text.includes('请注意运行模式下') ||
      text.startsWith('编译器版本:') ||
      text.includes('当前样式隔离策略') ||
      text === '正在编译中...'
    ) {
      return; // 过滤 uni() 插件初始化阶段重复打印的横幅日志
    }
    return originalLog.apply(console, logArgs);
  };
  try {
    return (rawUni as any)(...args);
  }
  finally {
    // 异步恢复原始 console.log，确保后续正常的构建/运行日志完全不受影响
    setTimeout(() => {
      console.log = originalLog;
    }, 1000);
  }
}
const tailwindConfig = (tailwindConfigModule as any).default ?? tailwindConfigModule;
function resolve(dir: string) {
  return join(__dirname, dir);
}

// 读取 package.json，编译阶段注入应用版本号供 import.meta.env 全端安全访问
try {
  const pkgRaw = fs.readFileSync(resolve('package.json'), 'utf-8');
  const pkg = JSON.parse(pkgRaw);
  process.env.VITE_APP_VERSION = pkg.version ?? '1.0.0';
}
catch {
  process.env.VITE_APP_VERSION = '1.0.0';
}

const isBuild = process.env.NODE_ENV === 'production' || process.argv.includes('build');

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
    sourcemap: false // 关闭 sourcemap，警告直接消失
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(tailwindConfig),
        {
          postcssPlugin: 'clean-uniappx-unsupported-css',
          prepare() {
            return {
              Rule(rule: any) {
                // 1. 如果是 @keyframes 内的关键帧选择器（如 0%, 50%, 100%, from, to），绝不能误删
                if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name && rule.parent.name.includes('keyframes')) {
                  return;
                }
                const platform = process.env.UNI_PLATFORM || '';
                // 2. Web/H5 拥有完整浏览器能力，不作任何裁剪
                if (platform === 'h5' || platform === 'web') {
                  return;
                }
                const s = rule.selector || '';
                // 3. 小程序端（mp-*）：WXSS 语法不支持兄弟选择器（~ 与 +），剔除带 ~ 和 + 的规则防止微信编译器报错 unexpected token
                if (platform.startsWith('mp-')) {
                  if (s.includes('~') || s.includes('+')) {
                    rule.remove();
                  }
                  return;
                }
                // 4. App 原生渲染引擎：剔除原生不支持的选择器（>、~、+、*、::before、::after、带空格的非法复杂选择器）
                if (['>', '~', '+', '*', '::before', '::after'].some(char => s.includes(char)) || s.includes('%') || (s.startsWith('.') && s.includes(' '))) {
                  rule.remove();
                  return;
                }
              },
              Declaration(decl: any) {
                // 仅针对 App 原生平台裁剪
                const platform = process.env.UNI_PLATFORM || '';
                if (platform === 'h5' || platform === 'web' || platform.startsWith('mp-') || platform.startsWith('quickapp')) {
                  return;
                }
                // 移除 position: static
                if (decl.prop === 'position' && decl.value === 'static') {
                  decl.remove();
                  return;
                }
                // 移除 display: inline / list-item
                if (decl.prop === 'display' && ['inline', 'list-item', 'contents', 'table'].includes(decl.value)) {
                  decl.remove();
                  return;
                }
                // 移除视口单位 100vh / 100vw
                if (typeof decl.value === 'string' && (decl.value.includes('vh') || decl.value.includes('vw'))) {
                  decl.remove();
                  return;
                }
              }
            };
          }
        }

      ]
    }
  },
  plugins: [
    ...cool(),
    // 自动为项目源码公共组件（src/components/、src/layouts/）注入 main.scss，解决 App 原生端组件样式隔离问题
    // ⚠️ 极其关键防护：严禁对 uni_modules（180+第三方组件）和 views/ 注入，否则会因数百个组件重复编译全量 Tailwind 导致 5GB+ 内存溢出 (OOM)
    {
      name: 'vite-plugin-component-style-inject',
      enforce: 'pre',
      transform(code: string, id: string) {
        if (process.env.UNI_PLATFORM === 'web' || process.env.UNI_PLATFORM === 'h5') {
          return null;
        }
        // 排除第三方依赖与全局入口
        if (id.includes('node_modules') || id.includes('uni_modules') || id.endsWith('App.uvue') || !id.endsWith('.uvue')) {
          return null;
        }
        // 规范化路径，严格仅匹配项目源码 src/ 目录下的 components、layouts 与 views（杜绝扫描 uni_modules 防止 OOM）
        const normalizedId = id.replace(/\\/g, '/');
        const isTargetComponent = normalizedId.includes('/src/') && /(?:components|layouts|views)[/\\].+\.uvue$/.test(normalizedId);
        if (!isTargetComponent) {
          return null;
        }
        // 若已经手动引入，无需重复注入
        if (code.includes('@import "@/main.scss";') || code.includes('@import \'@/main.scss\';')) {
          return null;
        }
        if (code.includes('<style')) {
          return {
            code: code.replace(/<style([^>]*)>/, '<style$1>\n@import "@/main.scss";\n'),
            map: { mappings: '' }
          };
        }
        else {
          return {
            code: `${code}\n<style lang="scss">\n@import "@/main.scss";\n</style>`,
            map: { mappings: '' }
          };
        }
      }
    },
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
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni()
  ]
});
