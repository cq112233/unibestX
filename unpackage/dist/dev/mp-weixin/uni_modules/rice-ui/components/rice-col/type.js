"use strict";
const common_vendor = require("../../../../common/vendor.js");
class ColProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          span: { type: Number, optional: true },
          offset: { type: Number, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ColProps"
    };
  }
  constructor(options, metadata = ColProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.span = this.__props__.span;
    this.offset = this.__props__.offset;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-col/type.js.map
