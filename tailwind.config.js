import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    resolve(projectRoot, './App.uvue'),
    resolve(projectRoot, './App.ku.uvue'),
    resolve(projectRoot, './src/**/*.{uts,uvue,vue}'),
    `!${resolve(projectRoot, './uni_modules/**')}`,
    `!${resolve(projectRoot, './uni_modules/**/*')}`,
    `!${resolve(projectRoot, './unpackage/**')}`,
    `!${resolve(projectRoot, './unpackage/**/*')}`,
    `!${resolve(projectRoot, './node_modules/**')}`,
    `!${resolve(projectRoot, './node_modules/**/*')}`
  ],
  darkMode: 'class',
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

export default config;
