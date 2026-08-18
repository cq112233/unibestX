"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../uni_modules/x-pinia-s/instans/types.js");
const uni_modules_xPiniaS_instans_storeBase = require("../../uni_modules/x-pinia-s/instans/storeBase.js");
const uni_modules_xPiniaS_instans_defineStore = require("../../uni_modules/x-pinia-s/instans/defineStore.js");
require("../../uni_modules/x-pinia-s/instans/persist.js");
class TokenStore extends uni_modules_xPiniaS_instans_storeBase.PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = common_vendor.reactive({
      token: "",
      expiresIn: 0,
      accessToken: "",
      accessExpiresIn: 0,
      refreshToken: "",
      refreshExpiresIn: 0,
      tokenExpireTime: 0
    });
    this.bindState(this.state);
  }
  // ==========================================
  // 持久化钩子
  // ==========================================
  _doReset() {
    this.state.token = "";
    this.state.expiresIn = 0;
    this.state.accessToken = "";
    this.state.accessExpiresIn = 0;
    this.state.refreshToken = "";
    this.state.refreshExpiresIn = 0;
    this.state.tokenExpireTime = 0;
  }
  _hydrate(_data) {
    if (_data.token != null)
      this.state.token = _data.token;
    if (_data.expiresIn != null)
      this.state.expiresIn = _data.expiresIn;
    if (_data.accessToken != null)
      this.state.accessToken = _data.accessToken;
    if (_data.accessExpiresIn != null)
      this.state.accessExpiresIn = _data.accessExpiresIn;
    if (_data.refreshToken != null)
      this.state.refreshToken = _data.refreshToken;
    if (_data.refreshExpiresIn != null)
      this.state.refreshExpiresIn = _data.refreshExpiresIn;
    if (_data.tokenExpireTime != null)
      this.state.tokenExpireTime = _data.tokenExpireTime;
  }
  _serialize() {
    return new common_vendor.UTSJSONObject({
      token: this.state.token,
      expiresIn: this.state.expiresIn,
      accessToken: this.state.accessToken,
      accessExpiresIn: this.state.accessExpiresIn,
      refreshToken: this.state.refreshToken,
      refreshExpiresIn: this.state.refreshExpiresIn,
      tokenExpireTime: this.state.tokenExpireTime
    });
  }
  // ==========================================
  // Actions
  // ==========================================
  /**
   * 设置单 token 信息，并记录过期时间
   */
  setSingleToken(res) {
    this.state.token = res.token;
    this.state.expiresIn = res.expiresIn;
    const expireTime = Date.now() + res.expiresIn * 1e3;
    this.state.tokenExpireTime = expireTime;
    common_vendor.index.setStorageSync("accessTokenExpireTime", expireTime);
  }
  /**
   * 设置双 token 信息，并记录过期时间
   */
  setDoubleToken(res) {
    this.state.accessToken = res.accessToken;
    this.state.accessExpiresIn = res.accessExpiresIn;
    this.state.refreshToken = res.refreshToken;
    this.state.refreshExpiresIn = res.refreshExpiresIn;
    const now = Date.now();
    const expireTime = now + res.accessExpiresIn * 1e3;
    this.state.tokenExpireTime = expireTime;
    common_vendor.index.setStorageSync("accessTokenExpireTime", expireTime);
    common_vendor.index.setStorageSync("refreshTokenExpireTime", now + res.refreshExpiresIn * 1e3);
  }
  /**
   * 清除所有 token 信息
   */
  clearToken() {
    this._doReset();
    common_vendor.index.removeStorageSync("accessTokenExpireTime");
    common_vendor.index.removeStorageSync("refreshTokenExpireTime");
  }
  /**
   * 获取当前有效的 token 字符串（不校验过期，仅返回内存中的值）
   * 建议配合 isTokenValid 使用
   */
  getToken() {
    if (this.state.accessToken != "") {
      return this.state.accessToken;
    }
    return this.state.token;
  }
  /**
   * 检查 accessToken 是否有效（未过期）
   */
  isTokenValid() {
    if (this.state.tokenExpireTime <= 0) {
      const val = common_vendor.index.getStorageSync("accessTokenExpireTime");
      if (val != null && val !== "") {
        const num = Number.parseFloat(val.toString());
        if (!isNaN(num)) {
          this.state.tokenExpireTime = num;
        }
      }
    }
    return this.state.tokenExpireTime > 0 && Date.now() < this.state.tokenExpireTime;
  }
  /**
   * 检查 refreshToken 是否有效（未过期）
   */
  isRefreshTokenValid() {
    const val = common_vendor.index.getStorageSync("refreshTokenExpireTime");
    if (val == null || val === "")
      return false;
    const num = Number.parseFloat(val.toString());
    if (isNaN(num))
      return false;
    return Date.now() < num;
  }
  /**
   * 是否已有登录 token 信息（不论是否过期）
   */
  hasLoginInfo() {
    return this.state.accessToken != "" || this.state.token != "";
  }
  /**
   * 是否已登录且 token 有效
   */
  hasValidLogin() {
    return this.hasLoginInfo() && this.isTokenValid();
  }
}
const useTokenStore = uni_modules_xPiniaS_instans_defineStore.defineStore("token", () => {
  return new TokenStore();
});
exports.useTokenStore = useTokenStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/store/token.js.map
