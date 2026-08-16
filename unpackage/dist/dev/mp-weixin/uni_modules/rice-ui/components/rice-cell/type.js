"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CellProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: "Unknown", optional: true },
          value: { type: "Unknown", optional: true },
          label: { type: "Unknown", optional: true },
          size: { type: "Unknown", optional: true },
          icon: { type: String, optional: true },
          url: { type: String, optional: true },
          border: { type: Boolean, optional: true },
          clickable: { type: Boolean, optional: true },
          arrow: { type: Boolean, optional: true },
          arrowDirection: { type: "Unknown", optional: true },
          center: { type: Boolean, optional: true },
          titleStyle: { type: "Unknown", optional: true },
          titleTextStyle: { type: "Unknown", optional: true },
          valueStyle: { type: "Unknown", optional: true },
          valueTextStyle: { type: "Unknown", optional: true },
          labelStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CellProps"
    };
  }
  constructor(options, metadata = CellProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.value = this.__props__.value;
    this.label = this.__props__.label;
    this.size = this.__props__.size;
    this.icon = this.__props__.icon;
    this.url = this.__props__.url;
    this.border = this.__props__.border;
    this.clickable = this.__props__.clickable;
    this.arrow = this.__props__.arrow;
    this.arrowDirection = this.__props__.arrowDirection;
    this.center = this.__props__.center;
    this.titleStyle = this.__props__.titleStyle;
    this.titleTextStyle = this.__props__.titleTextStyle;
    this.valueStyle = this.__props__.valueStyle;
    this.valueTextStyle = this.__props__.valueTextStyle;
    this.labelStyle = this.__props__.labelStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-cell/type.js.map
