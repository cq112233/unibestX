"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
const uni_modules_riceUi_libs_use_usePopup_index = require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
const uni_modules_riceUi_libs_use_useSafeArea_index = require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_rice_overlay_1 + _easycom_rice_icon_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-popup",
  styleIsolation: "app-and-page",
  externalClasses: ["popup-class", "drag-bar-class", "drag-wrap-class"]
}, { __name: "rice-popup", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  duration: { default: 300 },
  position: { default: "bottom" },
  zIndex: { default: 999 },
  opacity: { type: Boolean, default: null },
  zoom: { type: Boolean, default: true },
  overlay: { type: Boolean, default: true },
  overlayBgColor: {},
  closeable: { type: Boolean, default: true },
  closeIcon: { default: "cross" },
  closeIconPosition: { default: "top-right" },
  closeOnClickOverlay: { type: Boolean, default: true },
  radius: {},
  bgColor: {},
  safeAreaInsetTop: { type: Boolean, default: false },
  safeAreaInsetBottom: { type: Boolean, default: true },
  closeOnSlideDown: { type: Boolean, default: false },
  slideDownThreshold: { default: 40 },
  showDragBar: { type: Boolean },
  dragWrapClass: { default: "" },
  dragBarClass: { default: "" },
  lockScroll: { type: Boolean, default: true },
  scrollId: {},
  beforeClose: {},
  marginTop: {},
  popupClass: { default: "" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["open", "close", "opened", "closed", "clickOverlay"], ["update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  uni_modules_riceUi_libs_use_useSafeArea_index.useSafeArea();
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("popup");
  const emit = __emit;
  const props = __props;
  const show = common_vendor.useModel(__props, "show");
  const popupRef = common_vendor.shallowRef(null);
  const _opacity = common_vendor.computed(() => {
    if (props.opacity != null)
      return props.opacity;
    return props.position == "center";
  });
  const _b = uni_modules_riceUi_libs_use_usePopup_index.usePopup(popupRef, new uni_modules_riceUi_libs_use_usePopup_index.UsePopupOptions({
    zoomScale: null,
    show,
    position: common_vendor.toRef(() => {
      return props.position;
    }),
    duration: common_vendor.toRef(() => {
      return props.duration;
    }),
    opacity: common_vendor.toRef(() => {
      return _opacity.value;
    }),
    zoom: common_vendor.toRef(() => {
      return props.zoom;
    }),
    beforeClose: common_vendor.toRef(() => {
      return props.beforeClose;
    })
  })), realShow = _b.realShow, doClose = _b.doClose;
  const handleClose = (e) => {
    e.stopPropagation();
    doClose();
  };
  const overlayClick = () => {
    emit("clickOverlay");
    if (!props.closeOnClickOverlay) {
      return null;
    }
    doClose();
  };
  let isAnimation = false;
  let halfScreenY = 0;
  let currentY = 0;
  let previousY = 0;
  let lastDragDirection = 0;
  let halfOffset = 0;
  let scrollEl = null;
  let contentTouchStartY = 0;
  let isContentDragging = false;
  const canDrag = common_vendor.computed(() => {
    return props.position == "bottom";
  });
  const lockScrollAtTop = () => {
    if (scrollEl == null)
      return null;
    if (scrollEl.scrollTop > 0) {
      scrollEl.scrollTop = 0;
    }
  };
  const resetDragState = (startY) => {
    var _a2;
    halfScreenY = startY;
    currentY = startY;
    previousY = startY;
    lastDragDirection = 0;
    halfOffset = 0;
    (_a2 = popupRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", "0ms");
  };
  const onDragstart = (e) => {
    const startY = e.touches[0].screenY;
    resetDragState(startY);
    isContentDragging = false;
  };
  const onDragmove = (e) => {
    var _a2;
    if (isAnimation || !canDrag.value)
      return null;
    let p = e.touches[0];
    previousY = currentY;
    currentY = p.screenY;
    const moveDelta = currentY - previousY;
    if (Math.abs(moveDelta) >= 2) {
      lastDragDirection = moveDelta > 0 ? 1 : -1;
    }
    if (halfScreenY == 0) {
      halfScreenY = p.screenY;
    }
    let offset = p.screenY - halfScreenY;
    if (offset > 0) {
      lockScrollAtTop();
      (_a2 = popupRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", `translateY(${offset}px)`);
      halfOffset = offset;
    }
  };
  const resumedPopup = () => {
    var _a2;
    (_a2 = popupRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", "translateY(0px)");
    halfScreenY = 0;
    halfOffset = 0;
    lastDragDirection = 0;
    isContentDragging = false;
    isAnimation = false;
  };
  const onDragend = () => {
    var _a2;
    (_a2 = popupRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${props.duration}ms`);
    if (!canDrag.value)
      return null;
    halfScreenY = 0;
    if (isAnimation)
      return null;
    const threshold = Math.max(0, props.slideDownThreshold);
    const isLastSwipeUp = lastDragDirection < 0;
    let shouldClose = halfOffset >= threshold && !isLastSwipeUp;
    if (shouldClose) {
      isContentDragging = false;
      doClose();
    } else {
      resumedPopup();
    }
  };
  const onContentstart = (e) => {
    if (!props.closeOnSlideDown)
      return null;
    if (props.scrollId != null && props.scrollId != "") {
      scrollEl = common_vendor.index.getElementById(props.scrollId);
    } else {
      scrollEl = null;
    }
    contentTouchStartY = e.touches[0].screenY;
    isContentDragging = false;
    resetDragState(contentTouchStartY);
  };
  const onContentmove = (e) => {
    var _a2;
    if (!props.closeOnSlideDown)
      return null;
    if (!canDrag.value || isAnimation)
      return null;
    const currentTouchY = e.touches[0].screenY;
    const gestureOffset = currentTouchY - contentTouchStartY;
    const isMovingDown = gestureOffset > 0;
    if (isContentDragging) {
      lockScrollAtTop();
      onDragmove(e);
      return null;
    }
    if (!isMovingDown) {
      return null;
    }
    const top = (_a2 = scrollEl === null || scrollEl === void 0 ? null : scrollEl.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0;
    if (top >= 0.01) {
      return null;
    }
    isContentDragging = true;
    resetDragState(contentTouchStartY);
    lockScrollAtTop();
    onDragmove(e);
  };
  const onContentend = () => {
    var _a2;
    (_a2 = popupRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${props.duration}ms`);
    if (!props.closeOnSlideDown)
      return null;
    if (!isContentDragging) {
      resumedPopup();
      return null;
    }
    onDragend();
  };
  const rootClass = common_vendor.computed(() => {
    const isZoom = props.zoom && props.position == "center";
    const basic = [
      ns.theme(),
      ns.is("opacity", _opacity.value),
      ns.m(props.position),
      ns.is("zoom", isZoom)
    ];
    return basic;
  });
  const popupStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const position = props.position;
    css.set("z-index", props.zIndex);
    if (props.bgColor != null) {
      css.set("background-color", props.bgColor);
    }
    if (props.position == "center" && props.marginTop != null) {
      css.set("margin-top", uni_modules_riceUi_libs_utils_basic.addUnit(props.marginTop));
    }
    if (props.position != "center" && props.safeAreaInsetBottom) {
      css.set("padding-bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    if (props.position != "center" && props.safeAreaInsetTop) {
      css.set("padding-top", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.top + "px");
    }
    if (props.radius != null) {
      const radius = uni_modules_riceUi_libs_utils_basic.addUnit(props.radius);
      if (position == "top") {
        css.set("border-bottom-left-radius", radius);
        css.set("border-bottom-right-radius", radius);
      } else if (position == "bottom") {
        css.set("border-top-left-radius", radius);
        css.set("border-top-right-radius", radius);
      } else if (position == "left") {
        css.set("border-top-right-radius", radius);
        css.set("border-bottom-right-radius", radius);
      } else if (position == "right") {
        css.set("border-top-left-radius", radius);
        css.set("border-bottom-left-radius", radius);
      } else {
        css.set("border-radius", radius);
      }
    }
    return css;
  });
  const closeStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.position != "center" && props.safeAreaInsetBottom) {
      css.set("bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    if (props.position != "center" && props.safeAreaInsetTop) {
      css.set("top", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.top + "px");
    }
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.overlay
    }, _ctx.overlay ? {
      b: common_vendor.o(overlayClick, "3e"),
      c: common_vendor.p({
        show: show.value,
        ["z-index"]: _ctx.zIndex - 1,
        ["close-on-click-overlay"]: false,
        ["bg-color"]: _ctx.overlayBgColor,
        class: "data-v-759854fa"
      })
    } : {}, {
      d: common_vendor.unref(realShow)
    }, common_vendor.unref(realShow) ? common_vendor.e({
      e: _ctx.closeable
    }, _ctx.closeable ? {
      f: common_vendor.p({
        name: _ctx.closeIcon,
        size: "20px",
        class: "data-v-759854fa"
      }),
      g: common_vendor.n(`rice-popup__close--${_ctx.closeIconPosition}`),
      h: common_vendor.s(common_vendor.unref(closeStyle)),
      i: common_vendor.o(handleClose, "81")
    } : {}, {
      j: _ctx.showDragBar == true && _ctx.position == "bottom"
    }, _ctx.showDragBar == true && _ctx.position == "bottom" ? {
      k: common_vendor.n(_ctx.dragBarClass),
      l: common_vendor.n(_ctx.dragWrapClass),
      m: common_vendor.o(onDragstart, "d8"),
      n: common_vendor.o(onDragmove, "9f"),
      o: common_vendor.o(onDragend, "16"),
      p: common_vendor.o(onDragend, "10")
    } : {}, {
      q: common_vendor.sei("r0-759854fa", "view", popupRef, {
        "k": "popupRef"
      }),
      r: common_vendor.n(_ctx.popupClass),
      s: common_vendor.n(common_vendor.unref(rootClass)),
      t: common_vendor.s(common_vendor.unref(popupStyle)),
      v: common_vendor.s(_ctx.customStyle),
      w: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      x: common_vendor.o(onContentstart, "c5"),
      y: common_vendor.o(onContentmove, "7b"),
      z: common_vendor.o(onContentend, "2b"),
      A: common_vendor.o(onContentend, "f1")
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-759854fa"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-popup/rice-popup.js.map
