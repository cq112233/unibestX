"use strict";
const common_vendor = require("../../../../common/vendor.js");
class GridProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          columnNum: { type: "Unknown", optional: true },
          align: { type: "Unknown", optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          iconColor: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          border: { type: Boolean, optional: true },
          clickable: { type: Boolean, optional: true },
          vertical: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "GridProps"
    };
  }
  constructor(options, metadata = GridProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.columnNum = this.__props__.columnNum;
    this.align = this.__props__.align;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.iconColor = this.__props__.iconColor;
    this.iconSize = this.__props__.iconSize;
    this.border = this.__props__.border;
    this.clickable = this.__props__.clickable;
    this.vertical = this.__props__.vertical;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
class GridProvice extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          columnNum: { type: "Unknown", optional: false },
          textColor: { type: "Unknown", optional: false },
          textSize: { type: "Unknown", optional: false },
          iconColor: { type: "Unknown", optional: false },
          iconSize: { type: "Unknown", optional: false },
          border: { type: "Unknown", optional: false },
          clickable: { type: "Unknown", optional: false },
          vertical: { type: "Unknown", optional: false },
          childrenList: { type: "Unknown", optional: false }
        };
      },
      name: "GridProvice"
    };
  }
  constructor(options, metadata = GridProvice.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.columnNum = this.__props__.columnNum;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.iconColor = this.__props__.iconColor;
    this.iconSize = this.__props__.iconSize;
    this.border = this.__props__.border;
    this.clickable = this.__props__.clickable;
    this.vertical = this.__props__.vertical;
    this.childrenList = this.__props__.childrenList;
    delete this.__props__;
  }
}
exports.GridProvice = GridProvice;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-grid/type.js.map
