"use strict";
const common_vendor = require("../../../../common/vendor.js");
class TagProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: true },
          size: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          text: { type: "Unknown", optional: true },
          icon: { type: String, optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          show: { type: Boolean, optional: true },
          plain: { type: Boolean, optional: true },
          plainFill: { type: Boolean, optional: true },
          round: { type: Boolean, optional: true },
          mark: { type: Boolean, optional: true },
          closeable: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "TagProps"
    };
  }
  constructor(options, metadata = TagProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.size = this.__props__.size;
    this.color = this.__props__.color;
    this.text = this.__props__.text;
    this.icon = this.__props__.icon;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.show = this.__props__.show;
    this.plain = this.__props__.plain;
    this.plainFill = this.__props__.plainFill;
    this.round = this.__props__.round;
    this.mark = this.__props__.mark;
    this.closeable = this.__props__.closeable;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-tag/type.js.map
