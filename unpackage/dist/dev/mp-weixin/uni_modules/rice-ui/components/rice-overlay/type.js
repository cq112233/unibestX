"use strict";
const common_vendor = require("../../../../common/vendor.js");
class OverlayProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          zIndex: { type: Number, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          duration: { type: Number, optional: true },
          bgColor: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "OverlayProps"
    };
  }
  constructor(options, metadata = OverlayProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.zIndex = this.__props__.zIndex;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.duration = this.__props__.duration;
    this.bgColor = this.__props__.bgColor;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-overlay/type.js.map
