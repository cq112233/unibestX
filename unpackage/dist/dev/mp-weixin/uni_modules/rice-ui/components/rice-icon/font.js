"use strict";
const common_vendor = require("../../../../common/vendor.js");
class FontData extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          code: { type: String, optional: false }
        };
      },
      name: "FontData"
    };
  }
  constructor(options, metadata = FontData.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.code = this.__props__.code;
    delete this.__props__;
  }
}
const fontData = [new FontData({
  name: "arrow-up",
  code: ""
}), new FontData({
  name: "arrow-down",
  code: ""
}), new FontData({
  name: "arrow-left",
  code: ""
}), new FontData({
  name: "arrow-right",
  code: ""
}), new FontData({
  name: "up",
  code: ""
}), new FontData({
  name: "down",
  code: ""
}), new FontData({
  name: "left",
  code: ""
}), new FontData({
  name: "right",
  code: ""
}), new FontData({
  name: "back-top",
  code: ""
}), new FontData({
  name: "back-bottom",
  code: ""
}), new FontData({
  name: "double-right",
  code: ""
}), new FontData({
  name: "double-left",
  code: ""
}), new FontData({
  name: "minus",
  code: ""
}), new FontData({
  name: "plus",
  code: ""
}), new FontData({
  name: "search",
  code: ""
}), new FontData({
  name: "search-fill",
  code: ""
}), new FontData({
  name: "scan",
  code: ""
}), new FontData({
  name: "qr",
  code: ""
}), new FontData({
  name: "sort",
  code: ""
}), new FontData({
  name: "sort-menu",
  code: ""
}), new FontData({
  name: "bars",
  code: ""
}), new FontData({
  name: "remind-disabled",
  code: ""
}), new FontData({
  name: "remind",
  code: ""
}), new FontData({
  name: "volume",
  code: ""
}), new FontData({
  name: "volume-fill",
  code: ""
}), new FontData({
  name: "volume-up",
  code: ""
}), new FontData({
  name: "volume-up-fill",
  code: ""
}), new FontData({
  name: "volume-down",
  code: ""
}), new FontData({
  name: "volume-down-fill",
  code: ""
}), new FontData({
  name: "volume-mute",
  code: ""
}), new FontData({
  name: "volume-mute-fill",
  code: ""
}), new FontData({
  name: "voice",
  code: ""
}), new FontData({
  name: "voice-off",
  code: ""
}), new FontData({
  name: "play",
  code: ""
}), new FontData({
  name: "play-fill",
  code: ""
}), new FontData({
  name: "pause",
  code: ""
}), new FontData({
  name: "pause-fill",
  code: ""
}), new FontData({
  name: "headset",
  code: ""
}), new FontData({
  name: "headset-fill",
  code: ""
}), new FontData({
  name: "user",
  code: ""
}), new FontData({
  name: "peoples",
  code: ""
}), new FontData({
  name: "peoples-fill",
  code: ""
}), new FontData({
  name: "trophy",
  code: ""
}), new FontData({
  name: "trophy-fill",
  code: ""
}), new FontData({
  name: "add",
  code: ""
}), new FontData({
  name: "add-fill",
  code: ""
}), new FontData({
  name: "reduce",
  code: ""
}), new FontData({
  name: "reduce-fill",
  code: ""
}), new FontData({
  name: "checked-circle",
  code: ""
}), new FontData({
  name: "checked-circle-fill",
  code: ""
}), new FontData({
  name: "help",
  code: ""
}), new FontData({
  name: "help-fill",
  code: ""
}), new FontData({
  name: "info",
  code: ""
}), new FontData({
  name: "info-fill",
  code: ""
}), new FontData({
  name: "cross",
  code: ""
}), new FontData({
  name: "checked",
  code: ""
}), new FontData({
  name: "camera",
  code: ""
}), new FontData({
  name: "camera-fill",
  code: ""
}), new FontData({
  name: "app",
  code: ""
}), new FontData({
  name: "app-fill",
  code: ""
}), new FontData({
  name: "like",
  code: ""
}), new FontData({
  name: "like-fill",
  code: ""
}), new FontData({
  name: "eyes",
  code: ""
}), new FontData({
  name: "eyes-close",
  code: ""
}), new FontData({
  name: "sleep",
  code: ""
}), new FontData({
  name: "sun",
  code: ""
}), new FontData({
  name: "menu-fold",
  code: ""
}), new FontData({
  name: "menu-unfold",
  code: ""
}), new FontData({
  name: "upload",
  code: ""
}), new FontData({
  name: "download",
  code: ""
}), new FontData({
  name: "full-screen",
  code: ""
}), new FontData({
  name: "off-screen",
  code: ""
}), new FontData({
  name: "switch",
  code: ""
}), new FontData({
  name: "revoke",
  code: ""
}), new FontData({
  name: "comments",
  code: ""
}), new FontData({
  name: "comments-fill",
  code: ""
}), new FontData({
  name: "phone-call",
  code: ""
}), new FontData({
  name: "phone-call-fill",
  code: ""
}), new FontData({
  name: "phone-in",
  code: ""
}), new FontData({
  name: "phone-in-fill",
  code: ""
}), new FontData({
  name: "phone-out",
  code: ""
}), new FontData({
  name: "phone-out-fill",
  code: ""
}), new FontData({
  name: "phone",
  code: ""
}), new FontData({
  name: "phone-fill",
  code: ""
}), new FontData({
  name: "phone-missed",
  code: ""
}), new FontData({
  name: "phone-missed-fill",
  code: ""
}), new FontData({
  name: "location",
  code: ""
}), new FontData({
  name: "location-fill",
  code: ""
}), new FontData({
  name: "bluetooth",
  code: ""
}), new FontData({
  name: "calendar",
  code: ""
}), new FontData({
  name: "calendar-fill",
  code: ""
}), new FontData({
  name: "clear",
  code: ""
}), new FontData({
  name: "clear-fill",
  code: ""
}), new FontData({
  name: "share",
  code: ""
}), new FontData({
  name: "share-fill",
  code: ""
}), new FontData({
  name: "edit",
  code: ""
}), new FontData({
  name: "delete",
  code: ""
}), new FontData({
  name: "delete-fill",
  code: ""
}), new FontData({
  name: "shopping",
  code: ""
}), new FontData({
  name: "shopping-fill",
  code: ""
}), new FontData({
  name: "wallet",
  code: ""
}), new FontData({
  name: "bag",
  code: ""
}), new FontData({
  name: "set",
  code: ""
}), new FontData({
  name: "set-fill",
  code: ""
}), new FontData({
  name: "replay",
  code: ""
}), new FontData({
  name: "home",
  code: ""
}), new FontData({
  name: "home-fill",
  code: ""
}), new FontData({
  name: "chat",
  code: ""
}), new FontData({
  name: "chat-fill",
  code: ""
}), new FontData({
  name: "good",
  code: ""
}), new FontData({
  name: "good-fill",
  code: ""
}), new FontData({
  name: "gift",
  code: ""
}), new FontData({
  name: "gift-fill",
  code: ""
}), new FontData({
  name: "loading",
  code: ""
}), new FontData({
  name: "photo",
  code: ""
}), new FontData({
  name: "photo-fail",
  code: ""
}), new FontData({
  name: "star",
  code: ""
}), new FontData({
  name: "star-fill",
  code: ""
}), new FontData({
  name: "trend",
  code: ""
}), new FontData({
  name: "trend-fill",
  code: ""
}), new FontData({
  name: "file-success-fill",
  code: ""
}), new FontData({
  name: "file-success",
  code: ""
})];
exports.fontData = fontData;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-icon/font.js.map
