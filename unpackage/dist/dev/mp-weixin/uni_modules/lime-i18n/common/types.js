"use strict";
const common_vendor = require("../../../common/vendor.js");
class Composer extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          locale: { type: "Unknown", optional: false },
          fallbackLocale: { type: "Unknown", optional: false },
          messages: { type: "Unknown", optional: false },
          t: { type: "Unknown", optional: false },
          tc: { type: "Unknown", optional: false },
          d: { type: "Unknown", optional: false },
          n: { type: "Unknown", optional: false },
          setLocaleMessage: { type: "Unknown", optional: false },
          getLocaleMessage: { type: "Unknown", optional: false },
          mergeLocaleMessage: { type: "Unknown", optional: false },
          setDateTimeFormat: { type: "Unknown", optional: false },
          getDateTimeFormat: { type: "Unknown", optional: false },
          mergeDateTimeFormat: { type: "Unknown", optional: false },
          setNumberFormat: { type: "Unknown", optional: false },
          getNumberFormat: { type: "Unknown", optional: false },
          mergeNumberFormat: { type: "Unknown", optional: false },
          setTabBar: { type: "Unknown", optional: false },
          getTabBar: { type: "Unknown", optional: false },
          availableLocales: { type: common_vendor.UTS.UTSType.withGenerics(Array, [String]), optional: false },
          availabilities: { type: "Unknown", optional: false }
        };
      },
      name: "Composer"
    };
  }
  constructor(options, metadata = Composer.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.locale = this.__props__.locale;
    this.fallbackLocale = this.__props__.fallbackLocale;
    this.messages = this.__props__.messages;
    this.t = this.__props__.t;
    this.tc = this.__props__.tc;
    this.d = this.__props__.d;
    this.n = this.__props__.n;
    this.setLocaleMessage = this.__props__.setLocaleMessage;
    this.getLocaleMessage = this.__props__.getLocaleMessage;
    this.mergeLocaleMessage = this.__props__.mergeLocaleMessage;
    this.setDateTimeFormat = this.__props__.setDateTimeFormat;
    this.getDateTimeFormat = this.__props__.getDateTimeFormat;
    this.mergeDateTimeFormat = this.__props__.mergeDateTimeFormat;
    this.setNumberFormat = this.__props__.setNumberFormat;
    this.getNumberFormat = this.__props__.getNumberFormat;
    this.mergeNumberFormat = this.__props__.mergeNumberFormat;
    this.setTabBar = this.__props__.setTabBar;
    this.getTabBar = this.__props__.getTabBar;
    this.availableLocales = this.__props__.availableLocales;
    this.availabilities = this.__props__.availabilities;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/types.js.map
