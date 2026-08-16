"use strict";
const common_vendor = require("../../../../../common/vendor.js");
class SafeAreaInsets extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          bottom: { type: Number, optional: false },
          statusBarHeight: { type: Number, optional: false }
        };
      },
      name: "SafeAreaInsets"
    };
  }
  constructor(options, metadata = SafeAreaInsets.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.bottom = this.__props__.bottom;
    this.statusBarHeight = this.__props__.statusBarHeight;
    delete this.__props__;
  }
}
const safeAreaInsets = common_vendor.ref(new SafeAreaInsets({
  top: 0,
  bottom: 0,
  statusBarHeight: 25
}));
function useSafeArea() {
  let timer = null;
  const getWindowInfo = () => {
    const windowInfo = common_vendor.index.getWindowInfo();
    safeAreaInsets.value.bottom = windowInfo.safeAreaInsets.bottom;
    safeAreaInsets.value.top = windowInfo.safeAreaInsets.top;
    safeAreaInsets.value.statusBarHeight = windowInfo.statusBarHeight;
  };
  common_vendor.onMounted(() => {
    if (timer != null)
      clearTimeout(timer);
    timer = setTimeout(() => {
      getWindowInfo();
    }, 200);
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
}
exports.safeAreaInsets = safeAreaInsets;
exports.useSafeArea = useSafeArea;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/use/useSafeArea/index.js.map
