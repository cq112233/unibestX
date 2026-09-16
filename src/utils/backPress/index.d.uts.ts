/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 退出应用辅助函数。
 * Android: 先 finishAffinity() 播放退出动画，延迟后 System.exit(0) 彻底杀进程，
 * 确保下次启动是干净冷启动，避免 re-entry 时 setupRenderEffect NPE。
 */
export declare function handleBackPressExit(): boolean;
