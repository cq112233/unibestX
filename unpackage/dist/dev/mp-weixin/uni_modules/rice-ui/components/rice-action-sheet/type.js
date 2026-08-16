"use strict";
const common_vendor = require("../../../../common/vendor.js");
class ActionSheetAction extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          value: { type: "Unknown", optional: true },
          subname: { type: String, optional: true },
          color: { type: String, optional: true },
          icon: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          iconFontFamily: { type: String, optional: true },
          disabled: { type: Boolean, optional: true }
        };
      },
      name: "ActionSheetAction"
    };
  }
  constructor(options, metadata = ActionSheetAction.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.value = this.__props__.value;
    this.subname = this.__props__.subname;
    this.color = this.__props__.color;
    this.icon = this.__props__.icon;
    this.iconSize = this.__props__.iconSize;
    this.iconFontFamily = this.__props__.iconFontFamily;
    this.disabled = this.__props__.disabled;
    delete this.__props__;
  }
}
class ActionSheetProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          actions: { type: common_vendor.UTS.UTSType.withGenerics(Array, [ActionSheetAction]), optional: true },
          title: { type: String, optional: true },
          showCancel: { type: Boolean, optional: true },
          cancelText: { type: String, optional: true },
          duration: { type: Number, optional: true },
          zIndex: { type: Number, optional: true },
          opacity: { type: Boolean, optional: true },
          overlay: { type: Boolean, optional: true },
          overlayBgColor: { type: String, optional: true },
          closeOnClickAction: { type: Boolean, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          radius: { type: "Unknown", optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          useDialogPage: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true },
          target: { type: "Unknown", optional: true },
          select: { type: "Unknown", optional: true },
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
      name: "ActionSheetProps"
    };
  }
  constructor(options, metadata = ActionSheetProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.actions = this.__props__.actions;
    this.title = this.__props__.title;
    this.showCancel = this.__props__.showCancel;
    this.cancelText = this.__props__.cancelText;
    this.duration = this.__props__.duration;
    this.zIndex = this.__props__.zIndex;
    this.opacity = this.__props__.opacity;
    this.overlay = this.__props__.overlay;
    this.overlayBgColor = this.__props__.overlayBgColor;
    this.closeOnClickAction = this.__props__.closeOnClickAction;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.radius = this.__props__.radius;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.useDialogPage = this.__props__.useDialogPage;
    this.customStyle = this.__props__.customStyle;
    this.target = this.__props__.target;
    this.select = this.__props__.select;
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
exports.ActionSheetAction = ActionSheetAction;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-action-sheet/type.js.map
