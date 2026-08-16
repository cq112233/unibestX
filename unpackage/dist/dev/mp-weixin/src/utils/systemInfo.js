"use strict";
const common_vendor = require("../../common/vendor.js");
class SystemSafeAreaInsets extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          right: { type: Number, optional: false },
          bottom: { type: Number, optional: false },
          left: { type: Number, optional: false }
        };
      },
      name: "SystemSafeAreaInsets"
    };
  }
  constructor(options, metadata = SystemSafeAreaInsets.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.right = this.__props__.right;
    this.bottom = this.__props__.bottom;
    this.left = this.__props__.left;
    delete this.__props__;
  }
}
class SystemInfoType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          screenWidth: { type: Number, optional: false },
          screenHeight: { type: Number, optional: false },
          windowWidth: { type: Number, optional: false },
          windowHeight: { type: Number, optional: false },
          statusBarHeight: { type: Number, optional: false },
          pixelRatio: { type: Number, optional: false }
        };
      },
      name: "SystemInfoType"
    };
  }
  constructor(options, metadata = SystemInfoType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.screenWidth = this.__props__.screenWidth;
    this.screenHeight = this.__props__.screenHeight;
    this.windowWidth = this.__props__.windowWidth;
    this.windowHeight = this.__props__.windowHeight;
    this.statusBarHeight = this.__props__.statusBarHeight;
    this.pixelRatio = this.__props__.pixelRatio;
    delete this.__props__;
  }
}
const systemInfo = common_vendor.ref(null);
const safeAreaInsets = common_vendor.ref(null);
function updateSystemInfo() {
  const windowInfo = common_vendor.index.getWindowInfo();
  systemInfo.value = new SystemInfoType({
    screenWidth: windowInfo.screenWidth,
    screenHeight: windowInfo.screenHeight,
    windowWidth: windowInfo.windowWidth,
    windowHeight: windowInfo.windowHeight,
    statusBarHeight: windowInfo.statusBarHeight,
    pixelRatio: windowInfo.pixelRatio
  });
  const safeArea = windowInfo.safeArea;
  if (safeArea != null) {
    safeAreaInsets.value = new SystemSafeAreaInsets({
      top: safeArea.top,
      right: windowInfo.windowWidth - safeArea.right,
      bottom: windowInfo.windowHeight - safeArea.bottom,
      left: safeArea.left
    });
  }
}
updateSystemInfo();
exports.safeAreaInsets = safeAreaInsets;
exports.systemInfo = systemInfo;
exports.updateSystemInfo = updateSystemInfo;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/systemInfo.js.map
