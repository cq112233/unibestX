import fs from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

export interface TailwindHmrPluginOptions {
  /**
   * Tailwind 入口 CSS 文件相对项目根目录的路径，默认 'main.css'
   */
  entry?: string;
  /**
   * 触发防抖毫秒数，默认 80ms
   */
  debounceMs?: number;
}

/**
 * 修复 H5 模式下外部工具或 AI 修改 .uvue/.uts 时，Tailwind CSS v4 样式热更新丢失的联动补丁插件
 *
 * 底层原因：
 * Tailwind CSS v4 采用 JIT 即时按需生成。当 .uvue 页面中新增前所未有的 Tailwind 原子类时，
 * Vite 默认仅向客户端广播 Vue 组件的 Template HMR，而未能触发 main.css 的重编和推送，导致浏览器有 class 却无对应样式。
 *
 * 解决机制：
 * 当检测到 .uvue/.uts 文件发生改动且非构建模式时，通过防抖更新 main.css 的访问与修改时间戳 (utimesSync)，
 * 并主动使 Vite 模块图中的 main.css 模块失效，可靠驱动 Vite 与 Tailwind CSS v4 重新提取 candidates 并将最新 CSS 热推给浏览器。
 */
export default function tailwindHmrPlugin(options: TailwindHmrPluginOptions = {}): Plugin {
  const { entry = 'main.css', debounceMs = 80 } = options;
  let timer: NodeJS.Timeout | null = null;

  return {
    name: 'vite-plugin-tailwind-uvue-hmr',
    apply: 'serve',
    handleHotUpdate({ file, server }) {
      // 仅监听 uvue 与 uts 源文件变动，排除依赖库与产物目录，避免无谓触发与死循环
      if (
        (file.endsWith('.uvue') || file.endsWith('.uts'))
        && !file.endsWith(entry)
        && !file.includes('node_modules')
        && !file.includes('unpackage')
      ) {
        const root = server.config.root || process.cwd();
        const mainCssPath = resolve(root, entry);

        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          try {
            if (fs.existsSync(mainCssPath)) {
              const now = new Date();
              fs.utimesSync(mainCssPath, now, now);
              const mod = server.moduleGraph.getModuleById(mainCssPath);
              if (mod) {
                server.moduleGraph.invalidateModule(mod);
              }
            }
          }
          catch (e) {
            console.warn('[tailwind-hmr] touch main.css failed:', e);
          }
        }, debounceMs);
      }
    }
  };
}
