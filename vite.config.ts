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
import { uniAppX } from 'weapp-tailwindcss/presets';
import { WeappTailwindcss } from 'weapp-tailwindcss/vite';
import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

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

const weappTailwindcssPlugins = WeappTailwindcss(
  uniAppX({
    base: projectRoot,
    cssEntries: [resolve(projectRoot, 'main.css')],
    cssSourceTrace: true,
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
  plugins: [
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
      autoCreateViews: true,
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
