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

/**
 * 控制台警告与代码片段净化 Vite 插件
 *
 * 功能：
 * 1. 过滤 Vite 开发服务器及构建阶段的 warning 日志输出（保留 error 与 info）
 * 2. 拦截第三方库及插件直接调用的 console.warn
 * 3. 拦截 DCloud 编译期通过 console.log 打印的 WARN_BLOCK（\uFEFF）与代码片段（Code Frame）
 */
export default function cleanLoggerPlugin(options: CleanLoggerOptions = {}): Plugin {
  const {
    silenceAll = true,
    ignoredPatterns = []
  } = options;

  const allPatterns = [...DEFAULT_IGNORED_PATTERNS, ...ignoredPatterns];

  function shouldIgnore(text: string): boolean {
    if (silenceAll) {
      return true;
    }
    return allPatterns.some((pattern) => {
      if (typeof pattern === 'string') {
        return text.includes(pattern);
      }
      return pattern.test(text);
    });
  }

  // 补丁拦截全局 console.warn 与 console.log（防止 DCloud onCompileLog 打印告警代码片段）
  if (!isConsolePatched) {
    isConsolePatched = true;

    const originalConsoleWarn = console.warn;
    console.warn = (...args: any[]) => {
      const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');
      if (shouldIgnore(str)) {
        return;
      }
      originalConsoleWarn.apply(console, args);
    };

    const originalConsoleLog = console.log;
    let lastWasSuppressedWarn = false;

    console.log = (...args: any[]) => {
      const str = args.map(a => (typeof a === 'string' ? a : (a?.message ?? a?.toString?.() ?? ''))).join(' ');

      // 1. DCloud 编译告警标识符 (\uFEFF 为 SPECIAL_CHARS.WARN_BLOCK)
      if (str.includes('\uFEFF')) {
        lastWasSuppressedWarn = true;
        return;
      }

      // 2. 紧跟在告警后面的定位行 (at relativeFileName:line:column)
      if (lastWasSuppressedWarn && (str.startsWith('at ') || str.includes(' at '))) {
        return;
      }

      // 3. 代码片段 Code Frame 格式（例如 "  2 | ..." 或 "> 4 | ..."）
      if (/(?:^|\n)\s*(?:>\s*)?\d+\s*\|/.test(str) && shouldIgnore(str)) {
        lastWasSuppressedWarn = true;
        return;
      }

      lastWasSuppressedWarn = false;
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
    }
  };
}
