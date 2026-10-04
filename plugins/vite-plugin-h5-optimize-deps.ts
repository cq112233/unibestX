import type { Plugin, ResolvedConfig } from 'vite';

/**
 * H5 依赖预构建优化插件
 *
 * 问题背景：
 * DCloud 的 uni:uvue 插件设置了 `optimizeDeps: { noDiscovery: true, include: [] }`，
 * 完全禁用了 Vite 的 esbuild 预构建；同时 DCloud 的 createOptimizeDeps 把 vue、pinia 等
 * 核心包加入了 exclude 列表。这导致所有第三方依赖在冷启动时都要经过 Vite 的实时逐模块
 * 转换管线，首屏加载极慢。
 *
 * 解决原理：
 * 保持 noDiscovery: true（避免 scanner 自动发现触发重新优化），
 * 但将核心大体积依赖显式加入 include 列表，同时从 exclude 列表中移除它们，
 * 让 Vite 在 dev server 启动时一次性预构建这些指定依赖。
 *
 * ⚠️ 不能设置 noDiscovery: false！
 * 开启后 scanner 在扫描过程中会不断发现新依赖，触发重新优化，
 * 重新优化期间所有正在请求的模块会返回 504 (Outdated Optimize Dep)。
 *
 * ⚠️ noDiscovery: true 并不能完全消除 504：
 * Vite 还有 crawler 路径——浏览器实际请求模块时，load 钩子会 registerMissingImport
 * 发现 scanner 没扫到的依赖，crawler 发现新依赖后同样会调度 rerun，rerun 期间旧
 * browserHash 的请求全部 504。
 *
 * 504 最常见的触发场景：server.warmup 直接预热 H5 运行时大文件（uni-h5.es.js）。
 * uni-h5.es.js 静态 import 了 @dcloudio/uni-shared / vue-router / @dcloudio/uni-i18n / vue(→uni-h5-vue)，
 * 这些全在 DCloud 的 exclude 列表里、scanner 没预构建。warmup 一请求，crawler 就沿 import 链
 * 发现这些 missing dep → 调度 rerun，rerun 窗口与首屏访问重叠时浏览器收到 504。
 * 解法：不要把 uniRuntimeFiles 加入 server.warmup.clientFiles，让 rerun 由首屏自然请求按需触发。
 *
 * 另一类场景：transform 钩子动态注入 import（如 vite-plugin-vconsole 把 `import VConsole from 'vconsole'`
 * 注入 main.uts），scanner 看不到，需通过 extraIncludes 显式传入让 scanner 预构建。
 * 详见 onCrawlEnd 的 scannerMissedDeps 分支与 registerMissingImport 的 debouncedProcessing。
 */

type H5OptimizeDepsOptions = {
  /**
   * 是否启用预构建优化（仅在 H5/Web 平台且 dev 模式下生效）
   * @default true
   */
  enabled?: boolean;
  /**
   * 额外需要加入预构建的依赖包名
   */
  extraIncludes?: string[];
  /**
   * 是否在控制台输出调试信息
   * @default false
   */
  debug?: boolean;
};

// 需要强制预构建的核心大体积依赖
// 这些包被 DCloud 的 createOptimizeDeps 放入了 exclude 列表，需要移出并加入 include
const CORE_INCLUDES = [
  'pinia',
  'pinia-plugin-persistedstate',
  'crypto-js'
];

export default function h5OptimizeDepsPlugin(options: H5OptimizeDepsOptions = {}): Plugin {
  const {
    enabled = true,
    extraIncludes = [],
    debug = false
  } = options;

  const isH5 = process.env.UNI_PLATFORM === 'web'
    || process.env.UNI_PLATFORM === 'h5'
    || !process.env.UNI_PLATFORM;

  const isBuild = process.env.NODE_ENV === 'production' || process.argv.includes('build');

  // 仅在 H5 dev 模式下生效
  if (!enabled || !isH5 || isBuild) {
    return { name: 'vite-plugin-h5-optimize-deps' };
  }

  return {
    name: 'vite-plugin-h5-optimize-deps',
    // enforce: 'post' 确保在 uni:uvue 插件的 config 钩子之后执行
    enforce: 'post',

    configResolved(resolvedConfig: ResolvedConfig) {
      const optimizeDeps = resolvedConfig.optimizeDeps;

      if (debug) {
        console.log('[h5-optimize-deps] 覆盖前:', JSON.stringify({
          noDiscovery: optimizeDeps.noDiscovery,
          include: optimizeDeps.include,
          exclude: optimizeDeps.exclude
        }, null, 2));
      }

      // 1. 保持 noDiscovery: true（DCloud 默认值），避免动态发现触发 504 重新优化循环
      //    不要设置 noDiscovery = false！

      // 2. 构建完整的 include 列表
      const allIncludes = [...CORE_INCLUDES, ...extraIncludes];

      // 3. 合并到现有 include
      const existingIncludes = optimizeDeps.include || [];
      const mergedIncludes = [...new Set([...existingIncludes, ...allIncludes])];
      (optimizeDeps as any).include = mergedIncludes;

      // 4. 从 exclude 中移除已加入 include 的依赖（Vite 不允许同时出现在两个列表中）
      if (optimizeDeps.exclude && optimizeDeps.exclude.length > 0) {
        const includeSet = new Set(mergedIncludes);
        (optimizeDeps as any).exclude = optimizeDeps.exclude.filter(
          (dep: string) => !includeSet.has(dep)
        );
      }

      if (debug) {
        console.log('[h5-optimize-deps] 覆盖后:', JSON.stringify({
          noDiscovery: optimizeDeps.noDiscovery,
          include: optimizeDeps.include,
          exclude: optimizeDeps.exclude
        }, null, 2));
      }
      else {
        console.log(
          `[h5-optimize-deps] ✔ 已启用依赖预构建优化 (noDiscovery=${optimizeDeps.noDiscovery})，include ${mergedIncludes.length} 个依赖，exclude ${optimizeDeps.exclude?.length ?? 0} 个依赖`
        );
      }
    }
  };
}
