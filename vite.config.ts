import process from 'node:process';
import { defineConfig } from 'vite';
import uniLayoutsPlugin from './plugins/uni-layouts-plugin';
import autoRootPlugin from './plugins/root-plugin';
import uniPagesPlugin from './plugins/vite-plugin-uni-pages';

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
    // 自动生成 pages.json（基于 pages.config.json 手动配置 + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      dir: 'src/pages',
      subPackages: ['src/sub'],
      // 页面排除规则：支持排除 components、views 等子目录，防止被扫描生成页面
      exclude: ['**/components/**/*.*', '**/views/**/*.*']
    }),
    // 手动补充 easycom 插件（必须全平台生效，含 App）
    // 该插件内部名为 uni:app-easycom，负责把模板里的 _resolveComponent("rice-button")
    // 转成静态 import；蒸汽模式 + vapor-render-target:bytecode 下，只有进入 import 图的
    // 组件才会生成 bytes/*.bytes 视图层字节码。若在 App 端关闭，uni_modules 下的
    // easycom 组件（rice-* 等）不会生成 bytecode，云打包安装后组件不渲染。
    uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE }),
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni(),
    ...weappTailwindcssPlugins
  ]
});
