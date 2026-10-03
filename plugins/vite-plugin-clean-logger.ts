import type { Plugin } from 'vite';
import { createLogger } from 'vite';

export type CleanLoggerOptions = {
  /**
   * 是否完全过滤控制台所有 warning 级别输出，默认 true
   */
  silenceAll?: boolean;
  /**
   * 需过滤的关键词匹配列表（支持字符串或正则）
   */
  ignoredPatterns?: (string | RegExp)[];
};

const DEFAULT_IGNORED_PATTERNS: (string | RegExp)[] = [
  '--allowArbitraryExtensions',
  'allowArbitraryExtensions',
  'rice-ui',
  'useChildren.uts',
  'No overload matches this call',
  'neither type sufficiently overlaps',
  'Conversion of type',
  'utf8'
];

let isConsolePatched = false;
let globalSilenceAll = true;
let globalIgnoredPatterns: (string | RegExp)[] = DEFAULT_IGNORED_PATTERNS;

function checkShouldIgnore(text: string): boolean {
  if (globalSilenceAll) {
    return true;
  }
  return globalIgnoredPatterns.some((pattern) => {
    if (typeof pattern === 'string') {
      return text.includes(pattern);
    }
    return pattern.test(text);
  });
}

/**
 * 控制台警告与代码片段净化 Vite 插件
 *
 * 功能：
 * 1. 过滤 Vite 开发服务器及构建阶段的 warning 日志输出（保留 error 与 info）
 * 2. 拦截第三方库及插件直接调用的 console.warn 以及紧随其后的定位行与代码片段
 * 3. 拦截 DCloud 编译期通过 console.log 打印的 WARN_BLOCK（\uFEFF）与代码片段（Code Frame）
 */
export default function cleanLoggerPlugin(options: CleanLoggerOptions = {}): Plugin {
  const {
    silenceAll = true,
    ignoredPatterns = []
  } = options;

  globalSilenceAll = silenceAll;
  globalIgnoredPatterns = [...DEFAULT_IGNORED_PATTERNS, ...ignoredPatterns];

  function shouldIgnore(text: string): boolean {
    return checkShouldIgnore(text);
  }

  // 补丁拦截全局 console.warn 与 console.log（防止 DCloud / uni-uts-v1 打印告警代码片段）
  if (!isConsolePatched) {
    isConsolePatched = true;

    let suppressCodeFrameCount = 0;

    const originalConsoleWarn = console.warn;
    console.warn = (...args: any[]) => {
      const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');

      // 如果需要忽略此 warning
      if (shouldIgnore(str)) {
        suppressCodeFrameCount = 3;
        return;
      }

      // 如果当前正处于被忽略告警的后续定位行（如 "at src/store/vapor/app.ts:10:7"）
      if (suppressCodeFrameCount > 0 && (str.startsWith('at ') || str.includes(' at '))) {
        return;
      }

      suppressCodeFrameCount = 0;
      originalConsoleWarn.apply(console, args);
    };

    const originalConsoleLog = console.log;

    console.log = (...args: any[]) => {
      const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');

      // 绝对不拦截错误信息（\u2060 为 DCloud ERROR_BLOCK）
      if (str.includes('\u2060') || str.includes('error:') || str.includes('Error:') || str.includes('failed') || str.includes('失败')) {
        suppressCodeFrameCount = 0;
        originalConsoleLog.apply(console, args);
        return;
      }

      // 1. DCloud 编译告警标识符 (\uFEFF 为 SPECIAL_CHARS.WARN_BLOCK)
      if (str.includes('\uFEFF')) {
        suppressCodeFrameCount = 3;
        return;
      }

      // 2. 紧跟在告警后面的定位行 (at relativeFileName:line:column)
      if (suppressCodeFrameCount > 0 && (str.startsWith('at ') || str.includes(' at '))) {
        return;
      }

      // 3. 代码片段 Code Frame 格式（例如 "  8 | ..."、"> 10 | ..." 或 "     |   ^^^^"）
      const isCodeFrame = /(?:^|\n)\s*(?:>\s*)?\d+\s*\|/.test(str) || /(?:^|\n)\s*\|\s*\^+/.test(str);
      if (isCodeFrame && (suppressCodeFrameCount > 0 || globalSilenceAll)) {
        suppressCodeFrameCount = Math.max(0, suppressCodeFrameCount - 1);
        return;
      }

      // 4. 空行跟随在代码片段后时，如果刚才抑制了告警，也吃掉避免多余空行
      if (suppressCodeFrameCount > 0 && str.trim() === '') {
        return;
      }

      suppressCodeFrameCount = 0;
      originalConsoleLog.apply(console, args);
    };
  }

  return {
    name: 'vite-plugin-clean-logger',
    enforce: 'pre',
    config(config) {
      // 1. 注入自定义 Vite Logger
      const customLogger = createLogger(config.logLevel, {
        allowClearScreen: config.clearScreen
      });
      const originalWarn = customLogger.warn;
      const originalWarnOnce = customLogger.warnOnce;

      customLogger.warn = (msg, opts) => {
        if (shouldIgnore(msg)) {
          return;
        }
        originalWarn(msg, opts);
      };

      customLogger.warnOnce = (msg, opts) => {
        if (shouldIgnore(msg)) {
          return;
        }
        originalWarnOnce(msg, opts);
      };

      config.customLogger = customLogger;

      // 2. 注入 Rollup 构建阶段的 onwarn 拦截
      if (!config.build) {
        config.build = {};
      }
      if (!config.build.rollupOptions) {
        config.build.rollupOptions = {};
      }

      const prevOnwarn = config.build.rollupOptions.onwarn;
      config.build.rollupOptions.onwarn = (warning, defaultHandler) => {
        const msg = warning.message || '';
        if (shouldIgnore(msg)) {
          return;
        }
        if (prevOnwarn) {
          prevOnwarn(warning, defaultHandler);
        }
        else {
          defaultHandler(warning);
        }
      };
    },

    configResolved(config) {
      // 确保在其他插件（如 @dcloudio/vite-plugin-uni）合并后，仍然保持拦截生效
      if (config.customLogger) {
        const originalWarn = config.customLogger.warn;
        config.customLogger.warn = (msg, opts) => {
          if (shouldIgnore(msg)) {
            return;
          }
          originalWarn(msg, opts);
        };
        const originalWarnOnce = config.customLogger.warnOnce;
        config.customLogger.warnOnce = (msg, opts) => {
          if (shouldIgnore(msg)) {
            return;
          }
          originalWarnOnce(msg, opts);
        };
      }

      if (config.build?.rollupOptions) {
        const prevOnwarn = config.build.rollupOptions.onwarn;
        config.build.rollupOptions.onwarn = (warning, defaultHandler) => {
          const msg = warning.message || '';
          if (shouldIgnore(msg)) {
            return;
          }
          if (prevOnwarn) {
            prevOnwarn(warning, defaultHandler);
          }
          else {
            defaultHandler(warning);
          }
        };
      }
    }
  };
}
