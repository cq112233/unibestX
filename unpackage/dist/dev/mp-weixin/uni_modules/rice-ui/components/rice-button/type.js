"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../rice-loading/type.js");
class ButtonProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: true },
          size: { type: "Unknown", optional: true },
          text: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          darkColor: { type: String, optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          icon: { type: "Unknown", optional: true },
          iconSize: { type: "Unknown", optional: true },
          iconColor: { type: String, optional: true },
          iconFontFamily: { type: String, optional: true },
          plainFill: { type: Boolean, optional: true },
          plain: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          loading: { type: Boolean, optional: true },
          loadingSize: { type: "Unknown", optional: true },
          loadingText: { type: "Unknown", optional: true },
          loadingMode: { type: "Unknown", optional: true },
          shape: { type: "Unknown", optional: true },
          width: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          openType: { type: String, optional: true },
          formType: { type: String, optional: true },
          lang: { type: String, optional: true },
          sessionFrom: { type: String, optional: true },
          sendMessageTitle: { type: String, optional: true },
          sendMessageImg: { type: String, optional: true },
          sendMessagePath: { type: String, optional: true },
          showMessageCard: { type: String, optional: true },
          appParameter: { type: String, optional: true },
          to: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ButtonProps"
    };
  }
  constructor(options, metadata = ButtonProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.size = this.__props__.size;
    this.text = this.__props__.text;
    this.color = this.__props__.color;
    this.darkColor = this.__props__.darkColor;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.icon = this.__props__.icon;
    this.iconSize = this.__props__.iconSize;
    this.iconColor = this.__props__.iconColor;
    this.iconFontFamily = this.__props__.iconFontFamily;
    this.plainFill = this.__props__.plainFill;
    this.plain = this.__props__.plain;
    this.disabled = this.__props__.disabled;
    this.loading = this.__props__.loading;
    this.loadingSize = this.__props__.loadingSize;
    this.loadingText = this.__props__.loadingText;
    this.loadingMode = this.__props__.loadingMode;
    this.shape = this.__props__.shape;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.openType = this.__props__.openType;
    this.formType = this.__props__.formType;
    this.lang = this.__props__.lang;
    this.sessionFrom = this.__props__.sessionFrom;
    this.sendMessageTitle = this.__props__.sendMessageTitle;
    this.sendMessageImg = this.__props__.sendMessageImg;
    this.sendMessagePath = this.__props__.sendMessagePath;
    this.showMessageCard = this.__props__.showMessageCard;
    this.appParameter = this.__props__.appParameter;
    this.to = this.__props__.to;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-button/type.js.map
