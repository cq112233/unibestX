const LOGIN_STRATEGY_MAP = new UTSJSONObject(
  {
    /** 黑名单策略：默认无需登录，只在特定页面拦截 */
    DEFAULT_NO_NEED_LOGIN: 0,
    /** 白名单策略：默认全部拦截，仅在特定免登录页面直接放行 */
    DEFAULT_NEED_LOGIN: 1
  }
  /**
   * 选中的全局登录策略（此处默认采用黑名单策略）
   */
);
const LOGIN_STRATEGY = LOGIN_STRATEGY_MAP.DEFAULT_NO_NEED_LOGIN;
const isNeedLoginMode = LOGIN_STRATEGY == LOGIN_STRATEGY_MAP.DEFAULT_NEED_LOGIN;
const LOGIN_PAGE = "/src/sub/auth/login";
const EXCLUDE_LOGIN_PATH_LIST = [
  "/src/sub/test/test"
  // 示例值
];
export {
  EXCLUDE_LOGIN_PATH_LIST as E,
  LOGIN_PAGE as L,
  isNeedLoginMode as i
};
//# sourceMappingURL=config.js.map
