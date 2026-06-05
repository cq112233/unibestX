import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { unovite } from './js_sdk/a-hua-unocss'
import uniLayoutsPlugin from './plugins/uni-layouts-plugin'
import autoRootPlugin from './plugins/root-plugin'

export default defineConfig({
  resolve: {
    alias: [
      { find: /^vue$/, replacement: '@dcloudio/uni-h5-vue' }
    ],
  },
  define: {
    __X_STYLE_ISOLATION__: false,
    __X_STYLE_ISOLATION_UP_ARROW__: false,
  },
  server: {
    port: 9001,
  },
  build: {
    sourcemap: false, // 关闭 sourcemap，警告直接消失
  },
  plugins: [
    uniLayoutsPlugin(), // 仿照 vite-plugin-uni-layouts 的跨端 Layout 布局插件
    autoRootPlugin(), // 自动给页面套上 App.ku.uvue 根包裹组件
    uni(),
    unovite({
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
