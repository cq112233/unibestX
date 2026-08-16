"use strict";
const common_vendor = require("../../../../common/vendor.js");
class ScrollXProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          showIndicator: { type: Boolean, optional: true },
          indicatorWidth: { type: "Unknown", optional: true },
          indicatorHeight: { type: "Unknown", optional: true },
          indicatorBarWidth: { type: "Unknown", optional: true },
          indicatorColor: { type: String, optional: true },
          indicatorActiveColor: { type: String, optional: true },
          indicatorClass: { type: String, optional: true },
          indicatorActiveClass: { type: String, optional: true },
          indicatorStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ScrollXProps"
    };
  }
  constructor(options, metadata = ScrollXProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.showIndicator = this.__props__.showIndicator;
    this.indicatorWidth = this.__props__.indicatorWidth;
    this.indicatorHeight = this.__props__.indicatorHeight;
    this.indicatorBarWidth = this.__props__.indicatorBarWidth;
    this.indicatorColor = this.__props__.indicatorColor;
    this.indicatorActiveColor = this.__props__.indicatorActiveColor;
    this.indicatorClass = this.__props__.indicatorClass;
    this.indicatorActiveClass = this.__props__.indicatorActiveClass;
    this.indicatorStyle = this.__props__.indicatorStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-scroll-x/type.js.map
