"use strict";
const common_vendor = require("../../../../common/vendor.js");
class BadgeProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: "Unknown", optional: true },
          max: { type: Number, optional: true },
          isDot: { type: Boolean, optional: true },
          hidden: { type: Boolean, optional: true },
          type: { type: "Unknown", optional: true },
          showZero: { type: Boolean, optional: true },
          bgColor: { type: String, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          position: { type: "Unknown", optional: true },
          offset: { type: "Unknown", optional: true },
          absolute: { type: Boolean, optional: true },
          textClass: { type: String, optional: true },
          badgeStyle: { type: "Unknown", optional: true }
        };
      },
      name: "BadgeProps"
    };
  }
  constructor(options, metadata = BadgeProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.max = this.__props__.max;
    this.isDot = this.__props__.isDot;
    this.hidden = this.__props__.hidden;
    this.type = this.__props__.type;
    this.showZero = this.__props__.showZero;
    this.bgColor = this.__props__.bgColor;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.position = this.__props__.position;
    this.offset = this.__props__.offset;
    this.absolute = this.__props__.absolute;
    this.textClass = this.__props__.textClass;
    this.badgeStyle = this.__props__.badgeStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-badge/type.js.map
