"use strict";
const common_vendor = require("../../../../common/vendor.js");
class Config extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          theme: { type: "Unknown", optional: false },
          unit: { type: "Unknown", optional: false }
        };
      },
      name: "Config"
    };
  }
  constructor(options, metadata = Config.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.theme = this.__props__.theme;
    this.unit = this.__props__.unit;
    delete this.__props__;
  }
}
const config = common_vendor.reactive(new Config({
  theme: "light",
  unit: "px"
}));
const isDark = common_vendor.computed(() => {
  return config.theme == "dark";
});
const setTheme = (theme) => {
  config.theme = theme;
};
exports.config = config;
exports.isDark = isDark;
exports.setTheme = setTheme;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/store/useConfig.js.map
