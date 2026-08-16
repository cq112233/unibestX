"use strict";
const common_vendor = require("../../../../common/vendor.js");
class NoticeBarState extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          show: { type: Boolean, optional: false },
          offset: { type: Number, optional: false },
          duration: { type: Number, optional: false },
          wrapWidth: { type: Number, optional: false },
          contentWidth: { type: Number, optional: false }
        };
      },
      name: "NoticeBarState"
    };
  }
  constructor(options, metadata = NoticeBarState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.show = this.__props__.show;
    this.offset = this.__props__.offset;
    this.duration = this.__props__.duration;
    this.wrapWidth = this.__props__.wrapWidth;
    this.contentWidth = this.__props__.contentWidth;
    delete this.__props__;
  }
}
class NoticeBarProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: true },
          message: { type: String, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          leftIcon: { type: String, optional: true },
          rightIcon: { type: String, optional: true },
          delay: { type: Number, optional: true },
          speed: { type: Number, optional: true },
          closeable: { type: Boolean, optional: true },
          scrollable: { type: Boolean, optional: true },
          wrapable: { type: Boolean, optional: true },
          textClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "NoticeBarProps"
    };
  }
  constructor(options, metadata = NoticeBarProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.message = this.__props__.message;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.bgColor = this.__props__.bgColor;
    this.leftIcon = this.__props__.leftIcon;
    this.rightIcon = this.__props__.rightIcon;
    this.delay = this.__props__.delay;
    this.speed = this.__props__.speed;
    this.closeable = this.__props__.closeable;
    this.scrollable = this.__props__.scrollable;
    this.wrapable = this.__props__.wrapable;
    this.textClass = this.__props__.textClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
exports.NoticeBarState = NoticeBarState;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-notice-bar/type.js.map
