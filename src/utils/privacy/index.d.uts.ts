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
/** 是否已同意隐私政策（不校验版本） */
export declare function hasPrivacyAgreed(): boolean;

/** 本地记录的用户已同意的协议版本；无记录返回空串 */
export declare function getAgreedPrivacyVersion(): string;

/** 写入同意状态，并记录当前政策版本 */
export declare function setPrivacyAgreed(): void;

/** 清除同意状态（仅调试用，正式包不要暴露入口） */
export declare function clearPrivacyAgreed(): void;

/**
 * 是否需要因协议版本变更而重新确认。
 *
 * - 未首启同意：返回 false（走首启闸门，不走再确认）
 * - 已同意但无版本记录（老数据）：返回 true，补一次确认
 * - 已同意且版本落后：返回 true
 */
export declare function needsPrivacyReconfirm(): boolean;
