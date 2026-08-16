"use strict";
const common_vendor = require("../../../../common/vendor.js");
class PopupProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          duration: { type: Number, optional: true },
          position: { type: "Unknown", optional: true },
          zIndex: { type: Number, optional: true },
          opacity: { type: Boolean, optional: true },
          zoom: { type: Boolean, optional: true },
          overlay: { type: Boolean, optional: true },
          overlayBgColor: { type: String, optional: true },
          closeable: { type: Boolean, optional: true },
          closeIcon: { type: String, optional: true },
          closeIconPosition: { type: "Unknown", optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          radius: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          safeAreaInsetTop: { type: Boolean, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          closeOnSlideDown: { type: Boolean, optional: true },
          slideDownThreshold: { type: Number, optional: true },
          showDragBar: { type: Boolean, optional: true },
          dragWrapClass: { type: String, optional: true },
          dragBarClass: { type: String, optional: true },
          lockScroll: { type: Boolean, optional: true },
          scrollId: { type: String, optional: true },
          beforeClose: { type: "Unknown", optional: true },
          marginTop: { type: "Unknown", optional: true },
          popupClass: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "PopupProps"
    };
  }
  constructor(options, metadata = PopupProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.duration = this.__props__.duration;
    this.position = this.__props__.position;
    this.zIndex = this.__props__.zIndex;
    this.opacity = this.__props__.opacity;
    this.zoom = this.__props__.zoom;
    this.overlay = this.__props__.overlay;
    this.overlayBgColor = this.__props__.overlayBgColor;
    this.closeable = this.__props__.closeable;
    this.closeIcon = this.__props__.closeIcon;
    this.closeIconPosition = this.__props__.closeIconPosition;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.radius = this.__props__.radius;
    this.bgColor = this.__props__.bgColor;
    this.safeAreaInsetTop = this.__props__.safeAreaInsetTop;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.closeOnSlideDown = this.__props__.closeOnSlideDown;
    this.slideDownThreshold = this.__props__.slideDownThreshold;
    this.showDragBar = this.__props__.showDragBar;
    this.dragWrapClass = this.__props__.dragWrapClass;
    this.dragBarClass = this.__props__.dragBarClass;
    this.lockScroll = this.__props__.lockScroll;
    this.scrollId = this.__props__.scrollId;
    this.beforeClose = this.__props__.beforeClose;
    this.marginTop = this.__props__.marginTop;
    this.popupClass = this.__props__.popupClass;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-popup/type.js.map
