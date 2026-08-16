"use strict";
const common_vendor = require("../../../../common/vendor.js");
class RadioGroupProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          direction: { type: "Unknown", optional: true },
          checkedColor: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          labelSize: { type: "Unknown", optional: true },
          labelColor: { type: String, optional: true },
          shape: { type: "Unknown", optional: true },
          iconPosition: { type: "Unknown", optional: true },
          spaceBetween: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true },
          customClass: { type: String, optional: true }
        };
      },
      name: "RadioGroupProps"
    };
  }
  constructor(options, metadata = RadioGroupProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.direction = this.__props__.direction;
    this.checkedColor = this.__props__.checkedColor;
    this.iconSize = this.__props__.iconSize;
    this.labelSize = this.__props__.labelSize;
    this.labelColor = this.__props__.labelColor;
    this.shape = this.__props__.shape;
    this.iconPosition = this.__props__.iconPosition;
    this.spaceBetween = this.__props__.spaceBetween;
    this.customStyle = this.__props__.customStyle;
    this.customClass = this.__props__.customClass;
    delete this.__props__;
  }
}
class RadioGroupProvide extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          modelValue: { type: "Unknown", optional: false },
          disabled: { type: "Unknown", optional: false },
          readonly: { type: "Unknown", optional: false },
          direction: { type: "Unknown", optional: false },
          iconPosition: { type: "Unknown", optional: false },
          spaceBetween: { type: "Unknown", optional: false },
          iconSize: { type: "Unknown", optional: false },
          labelSize: { type: "Unknown", optional: false },
          labelColor: { type: "Unknown", optional: false },
          checkedColor: { type: "Unknown", optional: false },
          shape: { type: "Unknown", optional: false },
          updateValue: { type: "Unknown", optional: false }
        };
      },
      name: "RadioGroupProvide"
    };
  }
  constructor(options, metadata = RadioGroupProvide.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.modelValue = this.__props__.modelValue;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.direction = this.__props__.direction;
    this.iconPosition = this.__props__.iconPosition;
    this.spaceBetween = this.__props__.spaceBetween;
    this.iconSize = this.__props__.iconSize;
    this.labelSize = this.__props__.labelSize;
    this.labelColor = this.__props__.labelColor;
    this.checkedColor = this.__props__.checkedColor;
    this.shape = this.__props__.shape;
    this.updateValue = this.__props__.updateValue;
    delete this.__props__;
  }
}
exports.RadioGroupProvide = RadioGroupProvide;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-radio-group/type.js.map
