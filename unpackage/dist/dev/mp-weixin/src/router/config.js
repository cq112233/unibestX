"use strict";
const common_vendor = require("../../common/vendor.js");
const LOGIN_STRATEGY_MAP = new common_vendor.UTSJSONObject(
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
exports.EXCLUDE_LOGIN_PATH_LIST = EXCLUDE_LOGIN_PATH_LIST;
exports.LOGIN_PAGE = LOGIN_PAGE;
exports.isNeedLoginMode = isNeedLoginMode;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/router/config.js.map
