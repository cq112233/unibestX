import { _ as __easycom_0 } from "../up-overlay/up-overlay.js";
import { _ as __easycom_0$1 } from "../up-status-bar/up-status-bar.js";
import { _ as __easycom_0$2 } from "../up-icon/up-icon.js";
import { _ as __easycom_0$3 } from "../up-safe-bottom/up-safe-bottom.js";
import { _ as __easycom_0$4 } from "../up-transition/up-transition.js";
import { d as deepMerge, a as addUnit, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataStyle: _setSharedDataStyle, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPopupUpPopup";
const { computed, ref, shallowRef, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-popup"
  },
  __dynamicSharedData: true,
  __className,
  __filename: "uni_modules/uview-ultra/components/up-popup/up-popup.uvue",
  __name: "up-popup",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: "bottom"
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    closeable: {
      type: Boolean,
      default: false
    },
    overlayStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 10075
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    },
    closeIconPos: {
      type: String,
      default: "top-right"
    },
    round: {
      type: [Boolean, String, Number],
      default: 0
    },
    zoom: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ""
    },
    overlayOpacity: {
      type: [Number, String],
      default: 0.5
    },
    pageInline: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 是否允许手势关闭
    closeOnSlideDown: {
      type: Boolean,
      default: false
    },
    // 滑动关闭阈值 (px)
    slideDownThreshold: {
      type: [Number, String],
      default: 40
    },
    // 弹窗内部滚动容器 ID
    scrollId: {
      type: String,
      default: ""
    },
    // 是否显示拖拽手柄条
    showDragBar: {
      type: Boolean,
      default: false
    },
    dragBarClass: {
      type: String,
      default: ""
    },
    dragWrapClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:show", "close", "open", "click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpPopupUpPopupSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const position = computed(() => {
      if (props.mode == "center") {
        return props.zoom ? "fade-zoom" : "fade";
      }
      if (props.mode == "left") {
        return "slide-left";
      }
      if (props.mode == "right") {
        return "slide-right";
      }
      if (props.mode == "bottom") {
        return "slide-up";
      }
      if (props.mode == "top") {
        return "slide-down";
      }
      return "";
    });
    const transitionStyle = computed(() => {
      const style = new UTSJSONObject({
        display: "flex"
      });
      if (!props.pageInline) {
        style["zIndex"] = parseInt(props.zIndex.toString()) + 1;
        style["position"] = "fixed";
      }
      style[props.mode] = 0;
      if (props.mode == "left" || props.mode == "right") {
        return deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (props.mode == "top" || props.mode == "bottom") {
        return deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (props.mode == "center") {
        return deepMerge(style, new UTSJSONObject({
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }));
      }
      return style;
    });
    ref("");
    ref("");
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode != "center") {
        style["flex"] = 1;
      }
      if (props.bgColor != "") {
        style["backgroundColor"] = props.bgColor;
      }
      if (props.round.toString() != "" && props.round != false) {
        const value = addUnit(props.round);
        if (props.mode == "top") {
          style["borderBottomLeftRadius"] = value;
          style["borderBottomRightRadius"] = value;
        } else if (props.mode == "bottom") {
          style["borderTopLeftRadius"] = value;
          style["borderTopRightRadius"] = value;
        } else if (props.mode == "center") {
          style["borderRadius"] = value;
        }
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const overlayDuration = computed(() => {
      return parseInt(props.duration.toString()) + 50;
    });
    const contentRef = shallowRef(null);
    let isAnimation = false;
    let halfScreenX = 0;
    let halfScreenY = 0;
    let currentX = 0;
    let currentY = 0;
    let previousX = 0;
    let previousY = 0;
    let lastDragDirectionY = 0;
    let lastDragDirectionX = 0;
    let halfOffsetY = 0;
    let halfOffsetX = 0;
    let scrollEl = null;
    let contentTouchStartX = 0;
    let contentTouchStartY = 0;
    let isContentDragging = false;
    const canDrag = computed(() => {
      if (!props.closeOnSlideDown) {
        return false;
      }
      return props.mode == "bottom" || props.mode == "top" || props.mode == "left" || props.mode == "right";
    });
    function lockScrollAtTop() {
      if (scrollEl == null) {
        return null;
      }
      if (scrollEl.scrollTop > 0) {
        scrollEl.scrollTop = 0;
      }
    }
    function noop() {
    }
    function overlayClick() {
      if (props.closeOnClickOverlay) {
        emit("update:show", false);
        emit("close");
      }
    }
    function close() {
      emit("update:show", false);
      emit("close");
    }
    function setContentTransform(transform, durationMs = -1) {
      const el = contentRef.value;
      if (el != null && el.style != null) {
        if (durationMs >= 0) {
          el.style.setProperty("transition-duration", `${durationMs}ms`);
        }
        el.style.setProperty("transform", transform);
      }
    }
    function setContentTransitionDuration(durationMs) {
      const el = contentRef.value;
      if (el != null && el.style != null) {
        el.style.setProperty("transition-duration", `${durationMs}ms`);
      }
    }
    function resetDragState(startY, startX = 0) {
      halfScreenY = startY;
      currentY = startY;
      previousY = startY;
      halfScreenX = startX;
      currentX = startX;
      previousX = startX;
      lastDragDirectionY = 0;
      lastDragDirectionX = 0;
      halfOffsetY = 0;
      halfOffsetX = 0;
      setContentTransitionDuration(0);
    }
    function resetContentTransform() {
      setContentTransform("none", 0);
      halfScreenX = 0;
      halfScreenY = 0;
      halfOffsetY = 0;
      halfOffsetX = 0;
      lastDragDirectionY = 0;
      lastDragDirectionX = 0;
      isContentDragging = false;
      isAnimation = false;
    }
    function onDragstart(e) {
      if (e.touches.length == 0) {
        return null;
      }
      const startY = e.touches[0].screenY;
      const startX = e.touches[0].screenX;
      resetDragState(startY, startX);
      isContentDragging = false;
    }
    function onDragmove(e) {
      if (isAnimation || !canDrag.value || e.touches.length == 0) {
        return null;
      }
      const p = e.touches[0];
      previousY = currentY;
      currentY = p.screenY;
      previousX = currentX;
      currentX = p.screenX;
      const moveDeltaY = currentY - previousY;
      const moveDeltaX = currentX - previousX;
      if (Math.abs(moveDeltaY) >= 2) {
        lastDragDirectionY = moveDeltaY > 0 ? 1 : -1;
      }
      if (Math.abs(moveDeltaX) >= 2) {
        lastDragDirectionX = moveDeltaX > 0 ? 1 : -1;
      }
      if (halfScreenY == 0) {
        halfScreenY = p.screenY;
      }
      if (halfScreenX == 0) {
        halfScreenX = p.screenX;
      }
      const offsetY = p.screenY - halfScreenY;
      const offsetX = p.screenX - halfScreenX;
      if (props.mode == "bottom") {
        if (offsetY > 0) {
          lockScrollAtTop();
          setContentTransform(`translateY(${offsetY}px)`);
          halfOffsetY = offsetY;
        }
      } else if (props.mode == "top") {
        if (offsetY < 0) {
          setContentTransform(`translateY(${offsetY}px)`);
          halfOffsetY = offsetY;
        }
      } else if (props.mode == "left") {
        if (offsetX < 0) {
          setContentTransform(`translateX(${offsetX}px)`);
          halfOffsetX = offsetX;
        }
      } else if (props.mode == "right") {
        if (offsetX > 0) {
          setContentTransform(`translateX(${offsetX}px)`);
          halfOffsetX = offsetX;
        }
      }
    }
    function resumedPopup() {
      const durationMs = parseInt(props.duration.toString());
      setContentTransform("none", durationMs);
      halfScreenX = 0;
      halfScreenY = 0;
      halfOffsetY = 0;
      halfOffsetX = 0;
      lastDragDirectionY = 0;
      lastDragDirectionX = 0;
      isContentDragging = false;
      isAnimation = false;
    }
    function onDragend() {
      const durationMs = parseInt(props.duration.toString());
      setContentTransitionDuration(durationMs);
      if (!canDrag.value) {
        return null;
      }
      halfScreenY = 0;
      halfScreenX = 0;
      if (isAnimation) {
        return null;
      }
      const threshold = Math.max(0, parseInt(props.slideDownThreshold.toString()));
      let shouldClose = false;
      if (props.mode == "bottom") {
        shouldClose = halfOffsetY >= threshold && lastDragDirectionY > 0;
      } else if (props.mode == "top") {
        shouldClose = Math.abs(halfOffsetY) >= threshold && lastDragDirectionY < 0;
      } else if (props.mode == "left") {
        shouldClose = Math.abs(halfOffsetX) >= threshold && lastDragDirectionX < 0;
      } else if (props.mode == "right") {
        shouldClose = halfOffsetX >= threshold && lastDragDirectionX > 0;
      }
      if (shouldClose) {
        isContentDragging = false;
        if (props.mode == "bottom") {
          setContentTransform("translateY(100%)");
        } else if (props.mode == "top") {
          setContentTransform("translateY(-100%)");
        } else if (props.mode == "left") {
          setContentTransform("translateX(-100%)");
        } else if (props.mode == "right") {
          setContentTransform("translateX(100%)");
        }
        close();
        setTimeout(() => {
          resetContentTransform();
        }, durationMs);
      } else {
        resumedPopup();
      }
    }
    function getFirstScrollEl(el = null) {
      if (el == null) {
        return null;
      }
      const scrollTags = ["SCROLL-VIEW", "LIST-VIEW", "WATERFLOW"];
      const rawTag = el.tagName;
      if (rawTag != null) {
        const tagName = rawTag.toUpperCase();
        if (scrollTags.includes(tagName)) {
          return el;
        }
      }
      const children = el.children;
      if (children != null) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          const target = getFirstScrollEl(child);
          if (target != null) {
            return target;
          }
        }
      }
      return null;
    }
    function onContentstart(e) {
      if (!props.closeOnSlideDown || e.touches.length == 0 || !canDrag.value) {
        return null;
      }
      if (props.scrollId != "") {
        scrollEl = uni.getElementById(props.scrollId);
      } else {
        scrollEl = getFirstScrollEl(contentRef.value);
      }
      contentTouchStartY = e.touches[0].screenY;
      contentTouchStartX = e.touches[0].screenX;
      isContentDragging = false;
      resetDragState(contentTouchStartY, contentTouchStartX);
    }
    function onContentmove(e) {
      var _a2;
      if (!props.closeOnSlideDown || !canDrag.value || isAnimation || e.touches.length == 0) {
        return null;
      }
      const currentTouchY = e.touches[0].screenY;
      const currentTouchX = e.touches[0].screenX;
      const gestureOffsetY = currentTouchY - contentTouchStartY;
      const gestureOffsetX = currentTouchX - contentTouchStartX;
      if (isContentDragging) {
        lockScrollAtTop();
        onDragmove(e);
        return null;
      }
      let isMovingToDismiss = false;
      if (props.mode == "bottom") {
        isMovingToDismiss = gestureOffsetY > 4;
      } else if (props.mode == "top") {
        isMovingToDismiss = gestureOffsetY < -4;
      } else if (props.mode == "left") {
        isMovingToDismiss = gestureOffsetX < -4;
      } else if (props.mode == "right") {
        isMovingToDismiss = gestureOffsetX > 4;
      }
      if (!isMovingToDismiss) {
        return null;
      }
      if (scrollEl != null) {
        const top_1 = (_a2 = scrollEl === null || scrollEl === void 0 ? null : scrollEl.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0;
        if (top_1 > 0) {
          return null;
        }
      }
      isContentDragging = true;
      resetDragState(contentTouchStartY, contentTouchStartX);
      lockScrollAtTop();
      onDragmove(e);
    }
    function onContentend() {
      const durationMs = parseInt(props.duration.toString());
      setContentTransitionDuration(durationMs);
      if (!props.closeOnSlideDown || !canDrag.value) {
        return null;
      }
      if (!isContentDragging) {
        resumedPopup();
        return null;
      }
      onDragend();
    }
    watch(() => {
      return props.show;
    }, (newVal) => {
      if (newVal) {
        resetContentTransform();
      }
    });
    function afterEnter() {
      resetContentTransform();
      emit("open");
    }
    function clickHandler() {
      if (props.mode == "center") {
        overlayClick();
      }
      emit("click");
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_overlay = __easycom_0;
      const _component_up_status_bar = __easycom_0$1;
      const _component_up_icon = __easycom_0$2;
      const _component_up_safe_bottom = __easycom_0$3;
      const _component_up_transition = __easycom_0$4;
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 32, ["weapp-tw-border up-popup", [__props.customClass]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.overlay && !__props.pageInline));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_overlay, "5082c1ba", {
          show: () => {
            return __props.show && !__props.pageInline;
          },
          "z-index": () => {
            return __props.zIndex;
          },
          duration: () => {
            return overlayDuration.value;
          },
          "custom-style": () => {
            return __props.overlayStyle;
          },
          opacity: () => {
            return __props.overlayOpacity;
          },
          onClick: () => {
            return overlayClick;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      const n27 = _createSharedDataComponentWithFallback(_component_up_transition, "80553210", {
        show: () => {
          return __props.pageInline ? true : __props.show;
        },
        "custom-style": () => {
          return transitionStyle.value;
        },
        mode: () => {
          return __props.pageInline ? "none" : position.value;
        },
        duration: () => {
          return __props.duration;
        },
        onAfterEnter: () => {
          return afterEnter;
        },
        onClick: () => {
          return clickHandler;
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 31, [contentStyle.value]);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.showDragBar && __props.mode == "bottom"));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 9, ["weapp-tw-border up-popup__drag", __props.dragWrapClass]);
            });
            _createSharedDataSlot("drag", null, null, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 4, ["weapp-tw-border up-popup__drag__bar", __props.dragBarClass]);
              });
            });
            _setSharedDataEvent(__sharedData, 5, onDragstart);
            _setSharedDataEvent(__sharedData, 6, onDragmove);
            _setSharedDataEvent(__sharedData, 7, onDragend);
            _setSharedDataEvent(__sharedData, 8, onDragend);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 10, _toSharedDataBoolean(__props.safeAreaInsetTop));
          }, () => {
            const n11 = _createSharedDataComponentWithFallback(_component_up_status_bar, "3ad692e6");
            _setSharedData(__sharedData, 11, n11?.sharedData);
          });
          _createSharedDataSlot("default", null, null);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.showDragBar && __props.mode == "top"));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 18, ["weapp-tw-border up-popup__drag", __props.dragWrapClass]);
            });
            _createSharedDataSlot("drag", null, null, () => {
              _renderSharedDataEffect(() => {
                return _setSharedDataClass(__sharedData, 13, ["weapp-tw-border up-popup__drag__bar", __props.dragBarClass]);
              });
            });
            _setSharedDataEvent(__sharedData, 14, onDragstart);
            _setSharedDataEvent(__sharedData, 15, onDragmove);
            _setSharedDataEvent(__sharedData, 16, onDragend);
            _setSharedDataEvent(__sharedData, 17, onDragend);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 19, _toSharedDataBoolean(__props.closeable));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 22, ["weapp-tw-border up-popup__content__close", [`up-popup__content__close--${__props.closeIconPos}`]]);
            });
            const n21 = _createSharedDataComponentWithFallback(_component_up_icon, "3ad70324", {
              name: "close",
              color: "#909399",
              size: "18",
              bold: ""
            });
            _setSharedData(__sharedData, 20, n21?.sharedData);
            _setSharedDataEvent(__sharedData, 21, close);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 23, _toSharedDataBoolean(__props.safeAreaInsetBottom));
          }, () => {
            const n25 = _createSharedDataComponentWithFallback(_component_up_safe_bottom, "3ad7077d");
            _setSharedData(__sharedData, 24, n25?.sharedData);
          });
          _setSharedDataEvent(__sharedData, 25, onContentstart);
          _setSharedDataEvent(__sharedData, 26, onContentmove);
          _setSharedDataEvent(__sharedData, 27, onContentend);
          _setSharedDataEvent(__sharedData, 28, onContentend);
          _setSharedDataEvent(__sharedData, 29, noop);
          _setSharedDataTemplateRef(__sharedData, 30, (n26) => {
            _setTemplateRef(n26, contentRef, null, "contentRef");
          });
        })
      });
      _setSharedData(__sharedData, 2, n27?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}},"fixed":{"":{"position":"fixed"}}};
const _style_1 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_1 as _
};
