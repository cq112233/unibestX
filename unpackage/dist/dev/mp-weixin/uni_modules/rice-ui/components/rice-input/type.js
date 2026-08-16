"use strict";
const common_vendor = require("../../../../common/vendor.js");
class InputProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: String, optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          placeholder: { type: String, optional: true },
          placeholderStyle: { type: String, optional: true },
          maxlength: { type: Number, optional: true },
          cursorSpacing: { type: Number, optional: true },
          cursorColor: { type: String, optional: true },
          autoFocus: { type: Boolean, optional: true },
          focus: { type: Boolean, optional: true },
          confirmType: { type: String, optional: true },
          confirmHold: { type: Boolean, optional: true },
          cursor: { type: Number, optional: true },
          selectionStart: { type: Number, optional: true },
          selectionEnd: { type: Number, optional: true },
          adjustPosition: { type: Boolean, optional: true },
          inputmode: { type: String, optional: true },
          holdKeyboard: { type: Boolean, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          border: { type: "Unknown", optional: true },
          focusBorder: { type: Boolean, optional: true },
          bgColor: { type: String, optional: true },
          shape: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          clearable: { type: Boolean, optional: true },
          clearTrigger: { type: "Unknown", optional: true },
          clearIcon: { type: String, optional: true },
          showPassword: { type: Boolean, optional: true },
          showPasswordTrigger: { type: "Unknown", optional: true },
          prefixIcon: { type: String, optional: true },
          suffixIcon: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          iconColor: { type: String, optional: true },
          inputAlign: { type: "Unknown", optional: true },
          iputStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "InputProps"
    };
  }
  constructor(options, metadata = InputProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.placeholder = this.__props__.placeholder;
    this.placeholderStyle = this.__props__.placeholderStyle;
    this.maxlength = this.__props__.maxlength;
    this.cursorSpacing = this.__props__.cursorSpacing;
    this.cursorColor = this.__props__.cursorColor;
    this.autoFocus = this.__props__.autoFocus;
    this.focus = this.__props__.focus;
    this.confirmType = this.__props__.confirmType;
    this.confirmHold = this.__props__.confirmHold;
    this.cursor = this.__props__.cursor;
    this.selectionStart = this.__props__.selectionStart;
    this.selectionEnd = this.__props__.selectionEnd;
    this.adjustPosition = this.__props__.adjustPosition;
    this.inputmode = this.__props__.inputmode;
    this.holdKeyboard = this.__props__.holdKeyboard;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.border = this.__props__.border;
    this.focusBorder = this.__props__.focusBorder;
    this.bgColor = this.__props__.bgColor;
    this.shape = this.__props__.shape;
    this.height = this.__props__.height;
    this.clearable = this.__props__.clearable;
    this.clearTrigger = this.__props__.clearTrigger;
    this.clearIcon = this.__props__.clearIcon;
    this.showPassword = this.__props__.showPassword;
    this.showPasswordTrigger = this.__props__.showPasswordTrigger;
    this.prefixIcon = this.__props__.prefixIcon;
    this.suffixIcon = this.__props__.suffixIcon;
    this.iconSize = this.__props__.iconSize;
    this.iconColor = this.__props__.iconColor;
    this.inputAlign = this.__props__.inputAlign;
    this.iputStyle = this.__props__.iputStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-input/type.js.map
