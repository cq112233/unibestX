/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./auth.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./auth.uts` 解析到同目录的
 * `auth.d.uts.ts`，因此本文件必须与 `auth.uts` **同目录同名**，不能挪走。
 *
 * 修改 `auth.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
export type { AuthUserInfo, LoginParams, LoginResult } from './types.uts';

/**
 * 用户登录接口
 * @param params 账号与密码
 */
export declare function login(params: LoginParams): Promise<LoginResult>;

/**
 * 远程真实登录示范（后端联调时启用）
 */
export declare function loginRemote(params: LoginParams): Promise<LoginResult>;

/**
 * 获取当前登录用户信息
 */
export declare function fetchUserInfo(): Promise<AuthUserInfo>;

/**
 * 退出登录接口
 */
export declare function logout(): Promise<boolean>;
