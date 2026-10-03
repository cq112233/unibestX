import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { transformWithEsbuild } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@img': resolve(__dirname, './static')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.uts', '.uvue', '.vue']
  },
  plugins: [
    {
      name: 'uvue-script-lang-transform',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.uvue') || id.includes('.uvue?')) {
          // 将 .uvue 中的 lang="uts" 规范为 lang="ts"，供 @vue/compiler-sfc 解析
          return code.replaceAll('lang="uts"', 'lang="ts"').replaceAll('lang=\'uts\'', 'lang=\'ts\'');
        }
      }
    },
    {
      name: 'uts-transform',
      enforce: 'pre',
      async transform(code, id) {
        if (id.endsWith('.uts') || id.includes('.uts?')) {
          // 预处理条件编译：Vitest 运行于模拟浏览器 (happy-dom) 环境，移除针对原生 App 的条件编译块
          const cleaned = code
            .replace(/\/\/\s*#ifdef\s+APP[^\n]*\n[\s\S]*?\/\/\s*#endif/g, '')
            .replace(/\/\/\s*#(?:ifdef|ifndef|endif)[^\n]*/g, '');
          const res = await transformWithEsbuild(cleaned, id, { loader: 'ts' });
          return {
            code: res.code,
            map: res.map as any
          };
        }
      }
    },
    vue({
      include: [/\.vue$/, /\.uvue$/],
      template: {
        compilerOptions: {
          // 声明 uni-app X 核心内置组件为自定义标签，避免 Vue 告警未知组件
          isCustomElement: tag => [
            'view',
            'text',
            'image',
            'scroll-view',
            'list-view',
            'list-item',
            'swiper',
            'swiper-item',
            'root-portal',
            'navigator',
            'rich-text',
            'cover-view',
            'cover-image'
          ].includes(tag)
        }
      }
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.{test,spec}.{ts,js,mjs,uts}']
  }
});
