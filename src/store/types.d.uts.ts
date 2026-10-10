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
export type IThemeState = {
  theme: string;
  themeMode: string; // 'auto'（跟随系统）| 'light' | 'dark'
  isDark: boolean; // 实际生效的亮/暗（auto 模式下跟随系统/宿主主题）
};

export type II18nState = {
  locale: string;
};

export type IAppState = {
  mode: string; // 当前 Store 实现模式：'vapor'（官方 Pinia）| 'vdom'（x-pinia-s）
};

/**
 * 登录表单参数
 */
export type ILoginForm = {
  username: string;
  password: string;
};

/**
 * 单 Token 模式返回值
 */
export type ISingleTokenRes = {
  token: string;
  expiresIn: number;
};

/**
 * 双 Token 模式返回值
 */
export type IDoubleTokenRes = {
  accessToken: string;
  accessExpiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
};

/**
 * Token 信息联合类型（为保持 UTS 严格类型，使用单一 state 结构）
 */
export type ITokenState = {
  /** 单 token 模式 */
  token: string;
  expiresIn: number;
  /** 双 token 模式 */
  accessToken: string;
  accessExpiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
  /** AccessToken 过期时间戳 (ms) */
  tokenExpireTime: number;
  /** RefreshToken 过期时间戳 (ms)；0 表示无 */
  refreshTokenExpireTime: number;
};

export type IUserInfo = {
  userId: number;
  username: string;
  nickname: string;
  avatar: string;
};

export type IUserState = {
  userInfo: IUserInfo;
};

/**
 * 打开弹窗时传入的数据（由调用方直接透传给组件 `$callMethod`，store 不参与）
 *
 * ⚠️ 刻意用扁平的基础类型字段，而不是 `UTSJSONObject`：
 * 该类型要同时喂给 Vapor 分支（官方 Pinia，`.ts`）与 VDOM 分支（x-pinia-s，`.uts`），
 * 对象字面量字段类型越简单，两端行为越一致。
 */
export type IModalPayload = {
  /** 弹窗标题 */
  title: string;
  /** 弹窗正文文案 */
  message: string;
  /** 数据来源标识（用来演示「同一实例被不同入口驱动」） */
  source: string;
};
