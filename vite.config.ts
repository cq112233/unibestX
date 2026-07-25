import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path, { dirname, resolve } from 'node:path'
// import { unovite } from './js_sdk/a-hua-unocss'
import uniLayoutsPlugin from './plugins/uni-layouts-plugin'
import autoRootPlugin from './plugins/root-plugin'

// 修复 uni-app x web端/h5端 丢掉 easycom 导入的官方 bug
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js'
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared'

import { fileURLToPath } from 'node:url'
import { uniAppX } from 'weapp-tailwindcss/presets'
import { WeappTailwindcss } from 'weapp-tailwindcss/vite'

const projectRoot = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: /^vue$/, replacement: '@dcloudio/uni-h5-vue' },
    ],
  },
  define: {
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false,
  },
  server: {
    host: '0.0.0.0',
    port: 9001,
  },
  build: {
    sourcemap: false, // 关闭 sourcemap，警告直接消失
  },
  plugins: [
    // 手动补充 easycom 插件（仅在 Web/H5 平台生效，避免影响 App 原生编译）
    (process.env.UNI_PLATFORM === 'web' || process.env.UNI_PLATFORM === 'h5' || !process.env.UNI_PLATFORM)
      ? uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })
      : null,
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni(),
    WeappTailwindcss({
      // 基础uniAppX预设配置
      ...uniAppX({
        base: projectRoot,
        cssEntries: [resolve(projectRoot, 'main.css')],
        rem2rpx: true,
        // 遇到uvue不兼容语法仅警告，不中断编译
        uvueUnsupported: 'warn',
      }),
    }),
    // unovite({
    //   blocklist: ['table', 'grid', 'block', 'inline', 'inline-block'],
    //   rules: [
    //     [
    //       'p-safe',
    //       {
    //         padding:
    //           'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
    //       },
    //     ],
    //     ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    //     ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    //     // uni-app X 不支持 start/end 简写，必须用 flex-start/flex-end
    //     ['justify-start', { 'justify-content': 'flex-start' }],
    //     ['justify-end', { 'justify-content': 'flex-end' }],
    //     ["self-start", { "align-self": "flex-start" }],
    //     ["self-end", { "align-self": "flex-end" }],
    //     ["items-start", { "align-items": "flex-start" }],
    //     ["items-end", { "align-items": "flex-end" }],
    //   ],
    //   shortcuts: {},
    //   theme: {
    //     colors: {
    //       /** 主题色，用法如: text-primary */
    //       primary: 'var(--theme-color,#0957DE)',
    //     },
    //     fontSize: {
    //       /** 提供更小号的字体，用法如：text-2xs */
    //       '2xs': ['20rpx', '28rpx'],
    //       '3xs': ['18rpx', '26rpx'],
    //     },
    //   },
    // }),
  ],
})
