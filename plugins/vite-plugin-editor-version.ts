import type { Plugin } from 'vite';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const syncScript = resolve(projectRoot, 'scripts/sync-hbuilderx.mjs');

/**
 * 编辑器版本对齐提示。
 *
 * 为什么需要它：项目 pin 了 4 个 @dcloudio/* 依赖，应当与本机 HBuilderX / HBuilderV 的编译器
 * 版本对齐（详见 scripts/sync-hbuilderx.mjs 头部）。而 vite.config.ts 是**所有**入口的唯一
 * 必经之路：
 *   - pnpm dev / dev:web / dev:mock / dev:vconsole
 *   - pnpm dev:mp-*、dev:app-*（这些直连 uni-launch，不经过任何包装脚本）
 *   - pnpm build:h5 / build:test / build:prod
 *   - 以及在编辑器里点「运行」「发行」按钮 —— 那条路是编辑器自己起 uni.js 并加载本文件的
 *
 * **只提示、不阻断**：版本不一致未必立刻出错，但一旦出错，症状通常是 API 行为差异或类型
 * 不匹配这种看不出根因的问题，所以每次都提醒一下，由开发者自己判断要不要先同步。
 *
 * 提示文案由 scripts/sync-hbuilderx.mjs 的 --preflight 直接写到 stderr —— 这里不能用
 * console.warn，因为本项目的 cleanLoggerPlugin({ silenceAll: true }) 补丁了全局 console，
 * 会把警告吞掉。同理，子进程用 stdio: 'inherit' 直通终端，不受补丁影响。
 *
 * 静默不打扰的情况：本机没装编辑器（CI、不用 HBuilderX 的同事）、package.json 里没有这几个
 * pin、以及脚本自身异常（比如 Node 版本不符）—— 这些都不该在构建时刷屏。
 */
export default function editorVersionPlugin(): Plugin {
  return {
    name: 'unibestx:editor-version',
    enforce: 'pre',
    // config 是最早的钩子，尽量在编译真正开始前就把提示打出来
    config() {
      try {
        execFileSync(process.execPath, [syncScript, '--preflight'], {
          cwd: projectRoot,
          stdio: ['ignore', 'inherit', 'inherit'],
          // 探测要起 ps / mdfind 等子进程，给宽裕些
          timeout: 30_000
        });
      }
      catch {
        // 不一致时 --preflight 以 3 退出，提示已由子进程直接写到终端。
        // 这里一律吞掉：只提示、不阻断，脚本自身出问题也不该影响构建。
      }
    }
  };
}
