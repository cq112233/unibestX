"use strict";
const common_vendor = require("../../../../common/vendor.js");
class SwitchProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          activeValue: { type: "Unknown", optional: true },
          inactiveValue: { type: "Unknown", optional: true },
          loading: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          width: { type: "Unknown", optional: true },
          iconSize: { type: "Unknown", optional: true },
          textSize: { type: "Unknown", optional: true },
          activeColor: { type: String, optional: true },
          inactiveColor: { type: String, optional: true },
          activeText: { type: "Unknown", optional: true },
          inactiveText: { type: "Unknown", optional: true },
          activeIcon: { type: "Unknown", optional: true },
          inactiveIcon: { type: "Unknown", optional: true },
          promptPosition: { type: "Unknown", optional: true },
          beforeChange: { type: "Unknown", optional: true },
          vibrate: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SwitchProps"
    };
  }
  constructor(options, metadata = SwitchProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.activeValue = this.__props__.activeValue;
    this.inactiveValue = this.__props__.inactiveValue;
    this.loading = this.__props__.loading;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.width = this.__props__.width;
    this.iconSize = this.__props__.iconSize;
    this.textSize = this.__props__.textSize;
    this.activeColor = this.__props__.activeColor;
    this.inactiveColor = this.__props__.inactiveColor;
    this.activeText = this.__props__.activeText;
    this.inactiveText = this.__props__.inactiveText;
    this.activeIcon = this.__props__.activeIcon;
    this.inactiveIcon = this.__props__.inactiveIcon;
    this.promptPosition = this.__props__.promptPosition;
    this.beforeChange = this.__props__.beforeChange;
    this.vibrate = this.__props__.vibrate;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-switch/type.js.map
