"use strict";
const common_vendor = require("../../../../common/vendor.js");
class TextareaProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
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
          autoHeight: { type: Boolean, optional: true },
          cursor: { type: Number, optional: true },
          selectionStart: { type: Number, optional: true },
          selectionEnd: { type: Number, optional: true },
          adjustPosition: { type: Boolean, optional: true },
          inputmode: { type: String, optional: true },
          holdKeyboard: { type: Boolean, optional: true },
          fixed: { type: Boolean, optional: true },
          showConfirmBar: { type: Boolean, optional: true },
          disableDefaultPadding: { type: Boolean, optional: true },
          height: { type: "Unknown", optional: true },
          minHeight: { type: "Unknown", optional: true },
          maxHeight: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          showWordLimit: { type: Boolean, optional: true },
          border: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          textareaAlign: { type: "Unknown", optional: true },
          textareaStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "TextareaProps"
    };
  }
  constructor(options, metadata = TextareaProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
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
    this.autoHeight = this.__props__.autoHeight;
    this.cursor = this.__props__.cursor;
    this.selectionStart = this.__props__.selectionStart;
    this.selectionEnd = this.__props__.selectionEnd;
    this.adjustPosition = this.__props__.adjustPosition;
    this.inputmode = this.__props__.inputmode;
    this.holdKeyboard = this.__props__.holdKeyboard;
    this.fixed = this.__props__.fixed;
    this.showConfirmBar = this.__props__.showConfirmBar;
    this.disableDefaultPadding = this.__props__.disableDefaultPadding;
    this.height = this.__props__.height;
    this.minHeight = this.__props__.minHeight;
    this.maxHeight = this.__props__.maxHeight;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.showWordLimit = this.__props__.showWordLimit;
    this.border = this.__props__.border;
    this.bgColor = this.__props__.bgColor;
    this.textareaAlign = this.__props__.textareaAlign;
    this.textareaStyle = this.__props__.textareaStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-textarea/type.js.map
