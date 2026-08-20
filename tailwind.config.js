const darkMode = [
  'variant',
  [
    '&.dark',
    '.dark &'
  ]
];

// 原 a-hua-unocss 自定义规则迁移到 Tailwind CSS v4：
// - p-safe / pt-safe / pb-safe：安全区适配工具类，Tailwind 无内置，需显式注册
// - justify-start/end、self-start/end、items-start/end：Tailwind v4 原生输出
//   flex-start/flex-end（uni-app X 原生不支持 start/end 简写），无需额外配置
// - table/grid/block/inline/inline-block/break-all/break-words/break-normal：
//   Tailwind v4 原生支持，且项目未使用；v4 无 blocklist 配置项，无需处理

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './App.uvue',
    './App.ku.uvue',
    './src/**/*.{uts,uvue}',
    '!./uni_modules/**/*',
    '!./unpackage/**/*'
  ],
  darkMode,
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-color, #0957DE)'
      },
      fontSize: {
        /** 提供更小号的字体，用法如：text-2xs */
        '2xs': ['20rpx', '28rpx'],
        '3xs': ['18rpx', '26rpx']
      }
    }
  },
  plugins: [
    // 安全区工具类（原 unovite rules 迁移）
    function ({ addUtilities }) {
      addUtilities({
        '.p-safe': {
          padding:
            'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
        },
        '.pt-safe': { 'padding-top': 'env(safe-area-inset-top)' },
        '.pb-safe': { 'padding-bottom': 'env(safe-area-inset-bottom)' }
      });
    }
  ],
  corePlugins: {
    preflight: false,
    container: false
  }
};
