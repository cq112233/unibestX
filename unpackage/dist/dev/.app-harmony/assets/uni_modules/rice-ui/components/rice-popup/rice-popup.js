import { _ as __easycom_0 } from "../rice-overlay/rice-overlay.js";
import { _ as __easycom_0$1 } from "../rice-icon/rice-icon.js";
import { a as addUnit } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import { u as usePopup, U as UsePopupOptions } from "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import { u as useSafeArea, s as safeAreaInsets } from "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataEvent: _setSharedDataEvent, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRicePopupRicePopup";
const { shallowRef, computed, toRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-popup",
    styleIsolation: "app-and-page",
    externalClasses: ["popup-class", "drag-bar-class", "drag-wrap-class"]
  },
  __dynamicSharedData: true,
  __hash: "350cee08",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-popup/rice-popup.uvue",
  __name: "rice-popup",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    duration: { default: 300, type: Number },
    position: { default: "bottom", type: String },
    zIndex: { default: 999, type: Number },
    opacity: { type: Boolean, default: null },
    zoom: { type: Boolean, default: true },
    overlay: { type: Boolean, default: true },
    overlayBgColor: { type: String },
    closeable: { type: Boolean, default: true },
    closeIcon: { default: "cross", type: String },
    closeIconPosition: { default: "top-right", type: String },
    closeOnClickOverlay: { type: Boolean, default: true },
    radius: { type: [Number, String] },
    bgColor: { type: String },
    safeAreaInsetTop: { type: Boolean, default: false },
    safeAreaInsetBottom: { type: Boolean, default: true },
    closeOnSlideDown: { type: Boolean, default: false },
    slideDownThreshold: { default: 40, type: Number },
    showDragBar: { type: Boolean },
    dragWrapClass: { default: "", type: String },
    dragBarClass: { default: "", type: String },
    lockScroll: { type: Boolean, default: true },
    scrollId: { type: String },
    beforeClose: { type: null },
    marginTop: { type: [String, Number] },
    popupClass: { default: "", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "show": {
      type: Boolean,
      default: false
    },
    "showModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["open", "close", "opened", "closed", "clickOverlay"], ["update:show"]),
  __multiRoot: true,
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRicePopupRicePopupSharedData", sharedDataClassId: 0 })));
    useSafeArea();
    const ns = useNamespace("popup");
    const emit = __emit;
    const props = __props;
    const show = _useModel(__props, "show");
    const popupRef = shallowRef(null);
    const _opacity = computed(() => {
      if (props.opacity != null)
        return props.opacity;
      return props.position == "center";
    });
    const _b = usePopup(popupRef, new UsePopupOptions({
      zoomScale: null,
      show,
      position: toRef(() => {
        return props.position;
      }),
      duration: toRef(() => {
        return props.duration;
      }),
      opacity: toRef(() => {
        return _opacity.value;
      }),
      zoom: toRef(() => {
        return props.zoom;
      }),
      beforeClose: toRef(() => {
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
    const canDrag = computed(() => {
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
        scrollEl = uni.getElementById(props.scrollId);
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
    const rootClass = computed(() => {
      const isZoom = props.zoom && props.position == "center";
      const basic = [
        ns.theme(),
        ns.is("opacity", _opacity.value),
        ns.m(props.position),
        ns.is("zoom", isZoom)
      ];
      if (props.position == "center" && !props.zoom) {
        basic.push("rice-popup--notzoom");
      }
      return basic;
    });
    const popupStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const position = props.position;
      css.set("z-index", props.zIndex);
      if (props.bgColor != null) {
        css.set("background-color", props.bgColor);
      }
      if (props.position == "center" && props.marginTop != null) {
        css.set("margin-top", addUnit(props.marginTop));
      }
      if (props.position != "center" && props.safeAreaInsetBottom) {
        css.set("padding-bottom", safeAreaInsets.value.bottom + "px");
      }
      if (props.position != "center" && props.safeAreaInsetTop) {
        css.set("padding-top", safeAreaInsets.value.top + "px");
      }
      if (props.radius != null) {
        const radius = addUnit(props.radius);
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
    const closeStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.position != "center" && props.safeAreaInsetBottom) {
        css.set("bottom", safeAreaInsets.value.bottom + "px");
      }
      if (props.position != "center" && props.safeAreaInsetTop) {
        css.set("top", safeAreaInsets.value.top + "px");
      }
      return css;
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_overlay = __easycom_0;
      const _component_rice_icon = __easycom_0$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.overlay));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_overlay, "045af48d", {
          show: () => {
            return show.value;
          },
          "z-index": () => {
            return __props.zIndex - 1;
          },
          "close-on-click-overlay": false,
          "bg-color": () => {
            return __props.overlayBgColor;
          },
          onClick: () => {
            return overlayClick;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(realShow)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 20, ["rice-popup", [__props.popupClass, _unref(rootClass)]]);
          _setSharedDataStyle(__sharedData, 21, [_unref(popupStyle), __props.customStyle]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.closeable));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 6, ["rice-popup__close", `rice-popup__close--${__props.closeIconPosition}`]);
            _setSharedDataStyle(__sharedData, 7, _unref(closeStyle));
          });
          const n7 = _createSharedDataComponentWithFallback(_component_rice_icon, "59701371", {
            name: () => {
              return __props.closeIcon;
            },
            size: "20px"
          });
          _setSharedData(__sharedData, 4, n7?.sharedData);
          _setSharedDataEvent(__sharedData, 5, handleClose);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.showDragBar == true && __props.position == "bottom"));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData, 14, ["rice-popup__drag", __props.dragWrapClass]);
          });
          _createSharedDataSlot("drag", null, null, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 9, ["rice-popup__drag__bar", __props.dragBarClass]);
            });
          });
          _setSharedDataEvent(__sharedData, 10, onDragstart);
          _setSharedDataEvent(__sharedData, 11, onDragmove);
          _setSharedDataEvent(__sharedData, 12, onDragend);
          _setSharedDataEvent(__sharedData, 13, onDragend);
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 15, onContentstart);
        _setSharedDataEvent(__sharedData, 16, onContentmove);
        _setSharedDataEvent(__sharedData, 17, onContentend);
        _setSharedDataEvent(__sharedData, 18, onContentend);
        _setSharedDataTemplateRef(__sharedData, 19, (n16) => {
          _setTemplateRef(n16, popupRef, null, "popupRef");
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-popup.js.map
