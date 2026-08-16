"use strict";
const common_vendor = require("../../../../common/vendor.js");
class RowProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          gutter: { type: Number, optional: true },
          justify: { type: "Unknown", optional: true },
          align: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "RowProps"
    };
  }
  constructor(options, metadata = RowProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.gutter = this.__props__.gutter;
    this.justify = this.__props__.justify;
    this.align = this.__props__.align;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
class RowProvide extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          gutter: { type: "Unknown", optional: false }
        };
      },
      name: "RowProvide"
    };
  }
  constructor(options, metadata = RowProvide.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.gutter = this.__props__.gutter;
    delete this.__props__;
  }
}
exports.RowProvide = RowProvide;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-row/type.js.map
