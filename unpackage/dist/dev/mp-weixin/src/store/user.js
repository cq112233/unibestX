"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../uni_modules/x-pinia-s/instans/types.js");
const uni_modules_xPiniaS_instans_storeBase = require("../../uni_modules/x-pinia-s/instans/storeBase.js");
const uni_modules_xPiniaS_instans_defineStore = require("../../uni_modules/x-pinia-s/instans/defineStore.js");
require("../../uni_modules/x-pinia-s/instans/persist.js");
class IUserInfo extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          userId: { type: Number, optional: false },
          username: { type: String, optional: false },
          nickname: { type: String, optional: false },
          avatar: { type: String, optional: false }
        };
      },
      name: "IUserInfo"
    };
  }
  constructor(options, metadata = IUserInfo.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.userId = this.__props__.userId;
    this.username = this.__props__.username;
    this.nickname = this.__props__.nickname;
    this.avatar = this.__props__.avatar;
    delete this.__props__;
  }
}
class IUserState extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          userInfo: { type: IUserInfo, optional: false }
        };
      },
      name: "IUserState"
    };
  }
  constructor(options, metadata = IUserState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.userInfo = this.__props__.userInfo;
    delete this.__props__;
  }
}
const DEFAULT_AVATAR = "/static/logo.png";
const defaultUserInfo = new IUserInfo({
  userId: -1,
  username: "",
  nickname: "",
  avatar: DEFAULT_AVATAR
});
new IUserState(
  {
    userInfo: defaultUserInfo
  }
  // ==========================================
  // Store 实现
  // ==========================================
);
class UserStore extends uni_modules_xPiniaS_instans_storeBase.PiniaStoreBase {
  // 2. constructor
  constructor() {
    super();
    this.state = common_vendor.reactive(new IUserState({
      userInfo: new IUserInfo({
        userId: -1,
        username: "",
        nickname: "",
        avatar: DEFAULT_AVATAR
      })
    }));
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
    if (_data["userId"] != null)
      this.state.userInfo.userId = _data["userId"];
    if (_data["username"] != null)
      this.state.userInfo.username = _data["username"];
    if (_data["nickname"] != null)
      this.state.userInfo.nickname = _data["nickname"];
    if (_data["avatar"] != null)
      this.state.userInfo.avatar = _data["avatar"];
    if (_data["userInfo"] != null) {
      const infoObj = _data["userInfo"];
      if (infoObj["userId"] != null)
        this.state.userInfo.userId = infoObj["userId"];
      if (infoObj["username"] != null)
        this.state.userInfo.username = infoObj["username"];
      if (infoObj["nickname"] != null)
        this.state.userInfo.nickname = infoObj["nickname"];
      if (infoObj["avatar"] != null)
        this.state.userInfo.avatar = infoObj["avatar"];
    }
  }
  _serialize() {
    const infoObj = new UTSJSONObject({
      userId: this.state.userInfo.userId,
      username: this.state.userInfo.username,
      nickname: this.state.userInfo.nickname,
      avatar: this.state.userInfo.avatar
    });
    return new UTSJSONObject({
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
    this.state.userInfo = new IUserInfo({
      userId: info.userId,
      username: info.username,
      nickname: info.nickname,
      avatar: info.avatar != "" ? info.avatar : DEFAULT_AVATAR
    });
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
exports.IUserInfo = IUserInfo;
exports.useUserStore = useUserStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/store/user.js.map
