"use strict";
const common_vendor = require("../../../../common/vendor.js");
class IconProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          size: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          bold: { type: Boolean, optional: true },
          fontFamily: { type: String, optional: true },
          stop: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "IconProps"
    };
  }
  constructor(options, metadata = IconProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.size = this.__props__.size;
    this.color = this.__props__.color;
    this.bold = this.__props__.bold;
    this.fontFamily = this.__props__.fontFamily;
    this.stop = this.__props__.stop;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-icon/type.js.map
