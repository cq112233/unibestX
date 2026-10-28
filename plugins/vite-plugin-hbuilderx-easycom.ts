import { createRequire } from 'node:module';
import type { Plugin } from 'vite';

type HBuilderXEasycomOptions = {
  dirs: string[];
  platform: string | undefined;
  isX: boolean;
};

type HBuilderXUniCliShared = {
  initEasycoms: (inputDir: string, options: HBuilderXEasycomOptions) => unknown;
  resolveComponentsLibDirs: () => string[];
};

const require = createRequire(import.meta.url);

/**
 * HBuilderX 发行小程序时会混用两套 @dcloudio 运行时：
 * 项目依赖负责 Vite 主流程，HBuilderX 自带的 uni-mp-compiler 负责模板编译。
 * easycom 注册表是模块级状态，两套运行时并不共享，因此发行产物里的
 * usingComponents 会丢失。这里按 UNI_CLI_CONTEXT 精确加载 HBuilderX 的
 * uni-cli-shared，并在模板开始编译前补一次注册。
 */
function loadHBuilderXUniCliShared(): HBuilderXUniCliShared | undefined {
  const cliContext = process.env.UNI_CLI_CONTEXT;
  if (!cliContext) {
    return;
  }

  try {
    const entry = require.resolve('@dcloudio/uni-cli-shared', { paths: [cliContext] });
    return require(entry) as HBuilderXUniCliShared;
  }
  catch {
    return;
  }
}

export default function hbuilderxEasycomPlugin(): Plugin {
  return {
    name: 'unibestx:hbuilderx-easycom',
    enforce: 'pre',
    configResolved() {
      if (!process.env.UNI_PLATFORM?.startsWith('mp-')) {
        return;
      }

      const inputDir = process.env.UNI_INPUT_DIR;
      const shared = loadHBuilderXUniCliShared();
      if (!inputDir || !shared) {
        return;
      }

      try {
        shared.initEasycoms(inputDir, {
          dirs: shared.resolveComponentsLibDirs(),
          platform: process.env.UNI_PLATFORM,
          isX: process.env.UNI_APP_X === 'true'
        });
      }
      catch {
        // HBuilderX 编译器版本变化时不能因此阻断正常构建；匹配不到时保持官方行为。
      }
    }
  };
}
