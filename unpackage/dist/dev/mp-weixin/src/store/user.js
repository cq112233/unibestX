"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../uni_modules/x-pinia-s/instans/types.js");
const uni_modules_xPiniaS_instans_storeBase = require("../../uni_modules/x-pinia-s/instans/storeBase.js");
const uni_modules_xPiniaS_instans_defineStore = require("../../uni_modules/x-pinia-s/instans/defineStore.js");
require("../../uni_modules/x-pinia-s/instans/persist.js");
const DEFAULT_AVATAR = "/static/logo.png";
const defaultUserInfo = {
  userId: -1,
  username: "",
  nickname: "",
  avatar: DEFAULT_AVATAR
};
class UserStore extends uni_modules_xPiniaS_instans_storeBase.PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = common_vendor.reactive({
      userInfo: {
        userId: -1,
        username: "",
        nickname: "",
        avatar: DEFAULT_AVATAR
      }
    });
    this.bindState(this.state);
  }
  // ==========================================
  // 持久化钩子
  // ==========================================
  _doReset() {
    this.state.userInfo.userId = defaultUserInfo.userId;
    this.state.userInfo.username = defaultUserInfo.username;
    this.state.userInfo.nickname = defaultUserInfo.nickname;
    this.state.userInfo.avatar = defaultUserInfo.avatar;
  }
  _hydrate(_data) {
    if (_data.userId != null)
      this.state.userInfo.userId = _data.userId;
    if (_data.username != null)
      this.state.userInfo.username = _data.username;
    if (_data.nickname != null)
      this.state.userInfo.nickname = _data.nickname;
    if (_data.avatar != null)
      this.state.userInfo.avatar = _data.avatar;
    if (_data.userInfo != null) {
      const infoObj = _data.userInfo;
      if (infoObj.userId != null)
        this.state.userInfo.userId = infoObj.userId;
      if (infoObj.username != null)
        this.state.userInfo.username = infoObj.username;
      if (infoObj.nickname != null)
        this.state.userInfo.nickname = infoObj.nickname;
      if (infoObj.avatar != null)
        this.state.userInfo.avatar = infoObj.avatar;
    }
  }
  _serialize() {
    const infoObj = new common_vendor.UTSJSONObject({
      userId: this.state.userInfo.userId,
      username: this.state.userInfo.username,
      nickname: this.state.userInfo.nickname,
      avatar: this.state.userInfo.avatar
    });
    return new common_vendor.UTSJSONObject({
      userInfo: infoObj
    });
  }
  // ==========================================
  // Actions
  // ==========================================
  /**
   * 设置用户信息，头像为空时使用默认头像
   */
  setUserInfo(info) {
    this.state.userInfo = {
      userId: info.userId,
      username: info.username,
      nickname: info.nickname,
      avatar: info.avatar != "" ? info.avatar : DEFAULT_AVATAR
    };
  }
  /**
   * 更新头像
   */
  setAvatar(avatar) {
    this.state.userInfo.avatar = avatar;
  }
  /**
   * 清除用户信息（退出登录时调用）
   */
  clearUserInfo() {
    this._doReset();
    common_vendor.index.removeStorageSync("user");
  }
}
const useUserStore = uni_modules_xPiniaS_instans_defineStore.defineStore("user", () => {
  return new UserStore();
});
exports.useUserStore = useUserStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/store/user.js.map
