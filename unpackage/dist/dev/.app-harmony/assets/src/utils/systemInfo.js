const { ref } = globalThis.Vue
class SystemSafeAreaInsets extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.right = this.__props__.right;
    this.bottom = this.__props__.bottom;
    this.left = this.__props__.left;
    delete this.__props__;
  }
}
class SystemInfoType extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.screenWidth = this.__props__.screenWidth;
    this.screenHeight = this.__props__.screenHeight;
    this.windowWidth = this.__props__.windowWidth;
    this.windowHeight = this.__props__.windowHeight;
    this.statusBarHeight = this.__props__.statusBarHeight;
    this.pixelRatio = this.__props__.pixelRatio;
    delete this.__props__;
  }
}
const systemInfo = ref(null);
const safeAreaInsets = ref(null);
function updateSystemInfo() {
  const sysInfo = uni.getSystemInfoSync();
  systemInfo.value = new SystemInfoType({
    screenWidth: sysInfo.screenWidth,
    screenHeight: sysInfo.screenHeight,
    windowWidth: sysInfo.windowWidth,
    windowHeight: sysInfo.windowHeight,
    statusBarHeight: sysInfo.statusBarHeight,
    pixelRatio: sysInfo.pixelRatio
  });
  const safeArea = sysInfo.safeAreaInsets;
  if (safeArea != null) {
    safeAreaInsets.value = new SystemSafeAreaInsets({
      top: safeArea.top,
      right: safeArea.right,
      bottom: safeArea.bottom,
      left: safeArea.left
    });
  }
}
updateSystemInfo();
export {
  systemInfo as a,
  safeAreaInsets as s,
  updateSystemInfo as u
};
//# sourceMappingURL=systemInfo.js.map
