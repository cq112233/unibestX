"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CheckboxProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          label: { type: String, optional: true },
          value: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          checkedColor: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          labelSize: { type: "Unknown", optional: true },
          labelColor: { type: String, optional: true },
          shape: { type: "Unknown", optional: true },
          iconPosition: { type: "Unknown", optional: true },
          spaceBetween: { type: Boolean, optional: true },
          checkedValue: { type: "Unknown", optional: true },
          incheckedValue: { type: "Unknown", optional: true },
          indeterminate: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true },
          customClass: { type: String, optional: true }
        };
      },
      name: "CheckboxProps"
    };
  }
  constructor(options, metadata = CheckboxProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.label = this.__props__.label;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.checkedColor = this.__props__.checkedColor;
    this.iconSize = this.__props__.iconSize;
    this.labelSize = this.__props__.labelSize;
    this.labelColor = this.__props__.labelColor;
    this.shape = this.__props__.shape;
    this.iconPosition = this.__props__.iconPosition;
    this.spaceBetween = this.__props__.spaceBetween;
    this.checkedValue = this.__props__.checkedValue;
    this.incheckedValue = this.__props__.incheckedValue;
    this.indeterminate = this.__props__.indeterminate;
    this.customStyle = this.__props__.customStyle;
    this.customClass = this.__props__.customClass;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-checkbox/type.js.map
