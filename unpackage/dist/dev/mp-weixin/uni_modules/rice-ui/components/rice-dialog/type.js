"use strict";
const common_vendor = require("../../../../common/vendor.js");
class DialogProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: true },
          width: { type: "Unknown", optional: true },
          message: { type: String, optional: true },
          messageAlign: { type: "Unknown", optional: true },
          buttonTheme: { type: "Unknown", optional: true },
          buttonLayout: { type: "Unknown", optional: true },
          showConfirmButton: { type: Boolean, optional: true },
          confirmButtonText: { type: String, optional: true },
          confirmButtonColor: { type: String, optional: true },
          confirmButtonDisabled: { type: Boolean, optional: true },
          showCancelButton: { type: Boolean, optional: true },
          cancelButtonText: { type: String, optional: true },
          cancelButtonColor: { type: String, optional: true },
          cancelButtonDisabled: { type: Boolean, optional: true },
          duration: { type: Number, optional: true },
          overlay: { type: Boolean, optional: true },
          overlayBgColor: { type: String, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          beforeClose: { type: "Unknown", optional: true },
          zIndex: { type: Number, optional: true },
          bgColor: { type: String, optional: true },
          marginTop: { type: "Unknown", optional: true },
          useDialogPage: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true },
          confirm: { type: "Unknown", optional: true },
          cancel: { type: "Unknown", optional: true },
          clickOverlay: { type: "Unknown", optional: true },
          open: { type: "Unknown", optional: true },
          close: { type: "Unknown", optional: true },
          opened: { type: "Unknown", optional: true },
          closed: { type: "Unknown", optional: true },
          ready: { type: "Unknown", optional: true },
          fail: { type: "Unknown", optional: true }
        };
      },
      name: "DialogProps"
    };
  }
  constructor(options, metadata = DialogProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.width = this.__props__.width;
    this.message = this.__props__.message;
    this.messageAlign = this.__props__.messageAlign;
    this.buttonTheme = this.__props__.buttonTheme;
    this.buttonLayout = this.__props__.buttonLayout;
    this.showConfirmButton = this.__props__.showConfirmButton;
    this.confirmButtonText = this.__props__.confirmButtonText;
    this.confirmButtonColor = this.__props__.confirmButtonColor;
    this.confirmButtonDisabled = this.__props__.confirmButtonDisabled;
    this.showCancelButton = this.__props__.showCancelButton;
    this.cancelButtonText = this.__props__.cancelButtonText;
    this.cancelButtonColor = this.__props__.cancelButtonColor;
    this.cancelButtonDisabled = this.__props__.cancelButtonDisabled;
    this.duration = this.__props__.duration;
    this.overlay = this.__props__.overlay;
    this.overlayBgColor = this.__props__.overlayBgColor;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.beforeClose = this.__props__.beforeClose;
    this.zIndex = this.__props__.zIndex;
    this.bgColor = this.__props__.bgColor;
    this.marginTop = this.__props__.marginTop;
    this.useDialogPage = this.__props__.useDialogPage;
    this.customStyle = this.__props__.customStyle;
    this.confirm = this.__props__.confirm;
    this.cancel = this.__props__.cancel;
    this.clickOverlay = this.__props__.clickOverlay;
    this.open = this.__props__.open;
    this.close = this.__props__.close;
    this.opened = this.__props__.opened;
    this.closed = this.__props__.closed;
    this.ready = this.__props__.ready;
    this.fail = this.__props__.fail;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-dialog/type.js.map
