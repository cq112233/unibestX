import process from 'node:process'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { unovite } from './js_sdk/a-hua-unocss'
import uniLayoutsPlugin from './plugins/uni-layouts-plugin'
import autoRootPlugin from './plugins/root-plugin'
import uniPagesPlugin from './plugins/vite-plugin-uni-pages'

// 修复 uni-app x web端/h5端 丢掉 easycom 导入的官方 bug
import { uniEasycomPlugin } from '@dcloudio/uni-cli-shared/dist/vite/plugins/easycom.js'
import { UNI_EASYCOM_EXCLUDE } from '@dcloudio/uni-cli-shared'

export default defineConfig({
  base: './',
  resolve: {
    alias: (process.env.UNI_PLATFORM === 'web' || process.env.UNI_PLATFORM === 'h5')
      ? [
          { find: /^vue$/, replacement: '@dcloudio/uni-h5-vue' },
        ]
      : [],
  },
  define: {
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false,
  },
  server: {
    host: '0.0.0.0',
    port: 9001,
    // H5 走代理模式时生效（.env 里 VITE_H5_USE_PROXY=true）；直连模式（false）请求不经过此代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 改成你的后端地址
        changeOrigin: true,
        // 如果后端接口路径本身不带 /api 前缀，放开下面这行去掉前缀
        // rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: false, // 关闭 sourcemap，警告直接消失
  },
  plugins: [
    // 自动生成 pages.json（基于 pages.config.json 手动配置 + 页面内 <route>/definePage 声明）
    uniPagesPlugin({
      dir: 'src/pages',
      subPackages: ['src/sub'],
    }),
    // 手动补充 easycom 插件（仅在 Web/H5 平台生效，避免影响 App 原生编译）
    (process.env.UNI_PLATFORM === 'web' || process.env.UNI_PLATFORM === 'h5' || !process.env.UNI_PLATFORM)
      ? uniEasycomPlugin({ exclude: UNI_EASYCOM_EXCLUDE })
      : null,
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni(),
    unovite({
      blocklist: ['table', 'grid', 'block', 'inline', 'inline-block', 'break-all', 'break-words', 'break-normal'],
      rules: [
        [
          'p-safe',
          {
            padding:
              'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
          },
        ],
        ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
        ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
        // uni-app X 不支持 start/end 简写，必须用 flex-start/flex-end
        ['justify-start', { 'justify-content': 'flex-start' }],
        ['justify-end', { 'justify-content': 'flex-end' }],
        ['self-start', { 'align-self': 'flex-start' }],
        ['self-end', { 'align-self': 'flex-end' }],
        ['items-start', { 'align-items': 'flex-start' }],
        ['items-end', { 'align-items': 'flex-end' }],
      ],
      shortcuts: {},
      theme: {
        colors: {
          /** 主题色，用法如: text-primary */
          primary: 'var(--theme-color,#0957DE)',
        },
        fontSize: {
          /** 提供更小号的字体，用法如：text-2xs */
          '2xs': ['20rpx', '28rpx'],
          '3xs': ['18rpx', '26rpx'],
        },
      },
    }),
  ],
})
