/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./me.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./me.uts` 解析到同目录的
 * `me.d.uts.ts`，因此本文件必须与 `me.uts` **同目录同名**，不能挪走。
 *
 * 修改 `me.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export type { UserMenuItem, UserProfile } from './types.uts';

/**
 * 获取用户个人资料档案
 */
export declare function fetchUserProfile(): Promise<UserProfile>;

/**
 * 获取个人中心菜单列表
 */
export declare function fetchUserMenuList(): Promise<Array<UserMenuItem>>;
