/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./types.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./types.uts` 解析到同目录的
 * `types.d.uts.ts`，因此本文件必须与 `types.uts` **同目录同名**，不能挪走。
 *
 * 修改 `types.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 登录入参
 */
export type LoginParams = {
  username: string;
  password: string;
};

/**
 * 用户信息
 */
export type AuthUserInfo = {
  userId: number;
  username: string;
  nickname: string;
  avatar: string;
  roles: Array<string>;
  permissions?: Array<string> | null;
};

/**
 * 登录成功返回凭据
 */
export type LoginResult = {
  token: string;
  expiresIn: number;
  userInfo: AuthUserInfo;
};
