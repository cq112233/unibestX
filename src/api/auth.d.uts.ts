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
  /** 双 token 模式：用于 401 时静默换取新 accessToken */
  refreshToken: string;
  refreshExpiresIn: number;
  userInfo: AuthUserInfo;
};

export type RefreshTokenParams = {
  refreshToken: string;
};

export type RefreshTokenResult = {
  accessToken: string;
  accessExpiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
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
 * 刷新 accessToken
 *
 * ⚠️ extra.skipRefresh 必须保留：该标记让 request.uts 的拦截器在本次请求 401 时
 * 直接失败、不再触发刷新，否则刷新接口自身 401 会形成无限递归。
 */
export declare function refreshAccessToken(params: RefreshTokenParams): Promise<RefreshTokenResult>;

/**
 * 退出登录接口
 */
export declare function logout(): Promise<boolean>;
