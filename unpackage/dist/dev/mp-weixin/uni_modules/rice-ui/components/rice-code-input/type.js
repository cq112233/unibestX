"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CodeInputProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          maxlength: { type: Number, optional: true },
          dot: { type: Boolean, optional: true },
          mode: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          borderColor: { type: String, optional: true },
          showCursor: { type: Boolean, optional: true },
          cursorColor: { type: String, optional: true },
          space: { type: "Unknown", optional: true },
          justifyContent: { type: String, optional: true },
          size: { type: "Unknown", optional: true },
          fontSize: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          bold: { type: Boolean, optional: true },
          focus: { type: Boolean, optional: true },
          disabledKeyboard: { type: Boolean, optional: true },
          adjustPosition: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CodeInputProps"
    };
  }
  constructor(options, metadata = CodeInputProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.maxlength = this.__props__.maxlength;
    this.dot = this.__props__.dot;
    this.mode = this.__props__.mode;
    this.bgColor = this.__props__.bgColor;
    this.borderColor = this.__props__.borderColor;
    this.showCursor = this.__props__.showCursor;
    this.cursorColor = this.__props__.cursorColor;
    this.space = this.__props__.space;
    this.justifyContent = this.__props__.justifyContent;
    this.size = this.__props__.size;
    this.fontSize = this.__props__.fontSize;
    this.color = this.__props__.color;
    this.bold = this.__props__.bold;
    this.focus = this.__props__.focus;
    this.disabledKeyboard = this.__props__.disabledKeyboard;
    this.adjustPosition = this.__props__.adjustPosition;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-code-input/type.js.map
