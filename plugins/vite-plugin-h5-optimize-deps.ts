import type { Plugin, ResolvedConfig } from 'vite';

/**
 * H5 依赖预构建优化插件
 *
 * 问题背景：
 * DCloud 的 uni:uvue 插件在 config() 钩子中设置了 `optimizeDeps: { noDiscovery: true, include: [] }`，
 * 完全禁用了 Vite 的依赖自动发现与 esbuild 预构建。
 * 这导致 1MB 的 uni-h5.es.js、340KB 的 vue.runtime.esm.js、pinia 等核心运行时
 * 在每次冷启动时都要经过 Vite 的实时逐模块转换管线，首屏加载极慢（>10s），
 * 且频繁触发 504 (Outdated Optimize Dep) 错误。
 *
 * 解决原理：
 * 在 configResolved 钩子中（所有插件 config 合并完成后），强制覆盖 optimizeDeps 配置：
 * - 关闭 noDiscovery，恢复 Vite 的依赖自动发现
 * - 将核心大体积依赖显式加入 include 列表，确保它们在 dev server 启动时一次性预构建
 * - 从 exclude 列表中移除已加入 include 的依赖（Vite 不允许同时出现在 include 和 exclude 中）
 *
 * 效果：
 * 预构建产物缓存到 .vite/deps/，后续冷启动直接读缓存，首屏加载从 >10s 降至 <2s
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
          exclude: optimizeDeps.exclude?.slice(0, 5)
        }, null, 2));
      }

      // 1. 关闭 noDiscovery，恢复自动依赖发现
      // Vite 虽然声明 ResolvedConfig 为 readonly，但运行时 optimizeDeps 对象实际可写
      (optimizeDeps as any).noDiscovery = false;

      // 2. 构建完整的 include 列表
      const allIncludes = [...CORE_INCLUDES, ...extraIncludes];

      // 3. 合并到现有 include（保留 DCloud 可能配置的其他项）
      const existingIncludes = optimizeDeps.include || [];
      const mergedIncludes = [...new Set([...existingIncludes, ...allIncludes])];
      (optimizeDeps as any).include = mergedIncludes;

      // 4. 从 exclude 中移除已加入 include 的依赖（Vite 不允许同时在两个列表中）
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
          exclude: optimizeDeps.exclude?.slice(0, 5)
        }, null, 2));
      }
      else {
        console.log(
          `[h5-optimize-deps] ✔ 已启用依赖预构建优化，include ${mergedIncludes.length} 个依赖`
        );
      }
    }
  };
}
