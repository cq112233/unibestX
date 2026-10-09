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
 * 普通文本轻提示（无图标，时长 1500ms）
 * @param message 提示文本
 */
export declare function toast(message: string): void;

/**
 * 成功轻提示（带成功对勾图标，时长 1500ms）
 * @param message 成功提示文本
 */
export declare function toastSuccess(message: string): void;

/**
 * 失败错误轻提示（带错误图标，时长 1500ms）
 * @param message 错误提示文本
 */
export declare function toastError(message: string): void;

/**
 * 显示全局加载中提示框（默认带透明蒙层防重复操作）
 * @param title 加载中文案，默认为 '加载中...'
 * @param mask 是否显示透明蒙层，默认为 true
 */
export declare function showLoading(title: string = '加载中...', mask: boolean = true): void;

/**
 * 关闭全局加载中提示框
 */
export declare function hideLoading(): void;
