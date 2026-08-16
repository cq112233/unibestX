"use strict";
const common_vendor = require("../../../../common/vendor.js");
class SearchProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          label: { type: String, optional: true },
          shape: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          inputColor: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          height: { type: "Unknown", optional: true },
          maxlength: { type: Number, optional: true },
          holdKeyboard: { type: Boolean, optional: true },
          placeholder: { type: String, optional: true },
          placeholderStyle: { type: String, optional: true },
          focus: { type: Boolean, optional: true },
          clearable: { type: Boolean, optional: true },
          clearIcon: { type: String, optional: true },
          clearTrigger: { type: "Unknown", optional: true },
          showAction: { type: Boolean, optional: true },
          actionText: { type: String, optional: true },
          actionSize: { type: "Unknown", optional: true },
          actionColor: { type: String, optional: true },
          disabled: { type: Boolean, optional: true },
          inputAlign: { type: "Unknown", optional: true },
          leftIcon: { type: String, optional: true },
          rightIcon: { type: String, optional: true },
          leftIconSize: { type: "Unknown", optional: true },
          leftIconColor: { type: String, optional: true },
          rightIconSize: { type: "Unknown", optional: true },
          rightIconColor: { type: String, optional: true },
          wrapperClass: { type: String, optional: true },
          inputClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SearchProps"
    };
  }
  constructor(options, metadata = SearchProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.label = this.__props__.label;
    this.shape = this.__props__.shape;
    this.bgColor = this.__props__.bgColor;
    this.inputColor = this.__props__.inputColor;
    this.fontSize = this.__props__.fontSize;
    this.color = this.__props__.color;
    this.height = this.__props__.height;
    this.maxlength = this.__props__.maxlength;
    this.holdKeyboard = this.__props__.holdKeyboard;
    this.placeholder = this.__props__.placeholder;
    this.placeholderStyle = this.__props__.placeholderStyle;
    this.focus = this.__props__.focus;
    this.clearable = this.__props__.clearable;
    this.clearIcon = this.__props__.clearIcon;
    this.clearTrigger = this.__props__.clearTrigger;
    this.showAction = this.__props__.showAction;
    this.actionText = this.__props__.actionText;
    this.actionSize = this.__props__.actionSize;
    this.actionColor = this.__props__.actionColor;
    this.disabled = this.__props__.disabled;
    this.inputAlign = this.__props__.inputAlign;
    this.leftIcon = this.__props__.leftIcon;
    this.rightIcon = this.__props__.rightIcon;
    this.leftIconSize = this.__props__.leftIconSize;
    this.leftIconColor = this.__props__.leftIconColor;
    this.rightIconSize = this.__props__.rightIconSize;
    this.rightIconColor = this.__props__.rightIconColor;
    this.wrapperClass = this.__props__.wrapperClass;
    this.inputClass = this.__props__.inputClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-search/type.js.map
