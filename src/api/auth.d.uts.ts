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
export type LoginParams = {
  username: string;
  password: string;
};

export type AuthUserInfo = {
  userId: number;
  username: string;
  nickname: string;
  avatar: string;
  roles: Array<string>;
  permissions?: Array<string> | null;
};

export type LoginResult = {
  token: string;
  expiresIn: number;
  userInfo: AuthUserInfo;
};

/**
 * 用户登录接口
 * 运行 pnpm dev:mock 时发起网络请求并由根目录 mock/auth.ts 拦截响应
 * 离线无服务时平滑降级回退到本地 UTS Mock 数据
 */
export declare function login(params: LoginParams): Promise<LoginResult>;

/**
 * 获取当前登录用户信息
 */
export declare function fetchUserInfo(): Promise<AuthUserInfo>;

/**
 * 退出登录接口
 */
export declare function logout(): Promise<boolean>;
