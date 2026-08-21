import { _ as __easycom_0 } from "../up-overlay/up-overlay.js";
import { _ as __easycom_1 } from "../up-status-bar/up-status-bar.js";
import { _ as __easycom_1$1 } from "../up-icon/up-icon.js";
import { _ as __easycom_0$1 } from "../up-safe-bottom/up-safe-bottom.js";
import { _ as __easycom_1$2 } from "../up-transition/up-transition.js";
import "./popup.js";
import { d as deepMerge, b as addUnit, a as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataStyle: _setSharedDataStyle, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPopupUpPopup";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-popup"
  },
  __dynamicSharedData: true,
  __hash: "0133db38",
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
      type: [Object, String],
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
    }
  },
  emits: ["open", "close", "click", "update:show"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpPopupUpPopupSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const overlayDuration = computed(() => {
      return parseInt(props.duration.toString()) + 50;
    });
    const position = computed(() => {
      if (props.mode === "center") {
        return props.zoom ? "fade-zoom" : "fade";
      }
      if (props.mode === "left") {
        return "slide-left";
      }
      if (props.mode === "right") {
        return "slide-right";
      }
      if (props.mode === "bottom") {
        return "slide-up";
      }
      if (props.mode === "top") {
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
      if (props.mode === "left" || props.mode === "right") {
        return deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (props.mode === "top" || props.mode === "bottom") {
        return deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (props.mode === "center") {
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
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode !== "center") {
        style["flex"] = 1;
      }
      if (props.bgColor != "") {
        style["backgroundColor"] = props.bgColor;
      }
      if (props.round.toString() != "" && props.round != false) {
        const value = addUnit(props.round);
        if (props.mode === "top") {
          style["borderBottomLeftRadius"] = value;
          style["borderBottomRightRadius"] = value;
        } else if (props.mode === "bottom") {
          style["borderTopLeftRadius"] = value;
          style["borderTopRightRadius"] = value;
        } else if (props.mode === "center") {
          style["borderRadius"] = value;
        }
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
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
    function afterEnter() {
      emit("open");
    }
    function clickHandler() {
      if (props.mode === "center") {
        overlayClick();
      }
      emit("click");
    }
    return () => {
      "raw js";
      const _component_up_overlay = __easycom_0;
      const _component_up_status_bar = __easycom_1;
      const _component_up_icon = __easycom_1$1;
      const _component_up_safe_bottom = __easycom_0$1;
      const _component_up_transition = __easycom_1$2;
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 13, ["up-popup", [__props.customClass]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.overlay && !__props.pageInline));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_overlay, "5082c17d", {
          show: () => {
            return __props.show && !__props.pageInline;
          },
          onClick: () => {
            return overlayClick;
          },
          zIndex: () => {
            return __props.zIndex;
          },
          duration: () => {
            return overlayDuration.value;
          },
          customStyle: () => {
            return __props.overlayStyle;
          },
          opacity: () => {
            return __props.overlayOpacity;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      const n15 = _createSharedDataComponentWithFallback(_component_up_transition, "8055382a", {
        show: () => {
          return __props.pageInline ? true : __props.show;
        },
        customStyle: () => {
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
            return _setSharedDataStyle(__sharedData, 12, [contentStyle.value]);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.safeAreaInsetTop));
          }, () => {
            const n5 = _createSharedDataComponentWithFallback(_component_up_status_bar, "8055219a");
            _setSharedData(__sharedData, 4, n5?.sharedData);
          });
          _createSharedDataSlot("default", null, null);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.closeable));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataClass(__sharedData, 8, ["up-popup__content__close", ["up-popup__content__close--" + __props.closeIconPos]]);
            });
            const n9 = _createSharedDataComponentWithFallback(_component_up_icon, "8055058a", {
              name: "close",
              color: "#909399",
              size: "18",
              bold: ""
            });
            _setSharedData(__sharedData, 6, n9?.sharedData);
            _setSharedDataEvent(__sharedData, 7, close);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.safeAreaInsetBottom));
          }, () => {
            const n13 = _createSharedDataComponentWithFallback(_component_up_safe_bottom, "3ad68722");
            _setSharedData(__sharedData, 10, n13?.sharedData);
          });
          _setSharedDataEvent(__sharedData, 11, noop);
        })
      });
      _setSharedData(__sharedData, 2, n15?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}}};
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_4 as _
};
//# sourceMappingURL=up-popup.js.map
