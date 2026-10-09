/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./toLoginPage.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./toLoginPage.uts` 解析到同目录的
 * `toLoginPage.d.uts.ts`，因此本文件必须与 `toLoginPage.uts` **同目录同名**，不能挪走。
 *
 * 修改 `toLoginPage.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 跳转到登录页面，带防抖与节流保护，避免并发请求时重复打开多个登录页。
 * - 权威引用 config.uts 中的 LOGIN_PAGE 配置
 * - 使用 getCurrentPath() 精准判断当前页面，避免重复打开自身
 * - 默认 1000ms 节流窗口
 *
 * @param options 可选配置项（mode: 'navigateTo' | 'reLaunch', queryString: string）
 */
export declare function toLoginPage(options: UTSJSONObject | null = null): void;

export default toLoginPage;
