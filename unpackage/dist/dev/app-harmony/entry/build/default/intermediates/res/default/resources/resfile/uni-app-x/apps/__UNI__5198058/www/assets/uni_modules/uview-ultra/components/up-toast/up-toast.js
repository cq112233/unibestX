import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-gap/up-gap.js";
import { _ as __easycom_2$1 } from "../up-overlay/up-overlay.js";
import { y as type2icon, e as getWindowInfo, d as deepMerge } from "../../libs/function/index.js";
import "../../libs/config/color.js";
import "../../libs/function/colorGradient.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpToastUpToast";
const { computed, ref, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-toast"
  },
  __dynamicSharedData: true,
  __hash: "8600597c",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-toast/up-toast.uvue",
  __name: "up-toast",
  setup(__props, _a) {
    var __expose = _a.expose;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpToastUpToastSharedData", sharedDataClassId: 0 })));
    const isShow = ref(false);
    const timer = ref(null);
    const config = new UTSJSONObject({
      message: "",
      type: "",
      zIndex: 10090,
      duration: 2e3,
      icon: true,
      position: "center",
      complete: null,
      overlay: true,
      loading: false
    });
    const tmpConfig = ref(new UTSJSONObject({
      message: "",
      type: "",
      zIndex: 10090,
      duration: 2e3,
      icon: true,
      position: "center",
      complete: null,
      overlay: true,
      loading: false
    }));
    const iconName = computed(() => {
      var _a2;
      const icon = tmpConfig.value["icon"];
      const type = (_a2 = tmpConfig.value["type"]) !== null && _a2 !== void 0 ? _a2 : "";
      if (icon == "" || icon == "none") {
        return "";
      }
      if (icon == true) {
        if (["error", "warning", "success", "primary"].includes(type)) {
          return type2icon(type);
        } else {
          return "";
        }
      } else {
        return icon != null ? icon.toString() : "";
      }
    });
    const overlayStyle = computed(() => {
      const style = new UTSJSONObject({
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0)"
      });
      if (!tmpConfig.value["overlay"]) {
        style["pointerEvents"] = "none";
      }
      return style;
    });
    const iconStyle = computed(() => {
      const style = new UTSJSONObject({
        marginRight: "4px"
      });
      return style;
    });
    const contentStyle = computed(() => {
      var _a2, _b;
      const windowHeight = getWindowInfo().windowHeight;
      const style = new UTSJSONObject({});
      let value = 0;
      const position = (_b = (_a2 = tmpConfig.value["position"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      if (position === "top") {
        value = -windowHeight * 0.25;
      } else if (position === "bottom") {
        value = windowHeight * 0.25;
      }
      style["transform"] = `translateY(${value}px)`;
      return style;
    });
    function clearTimer() {
      isShow.value = false;
      if (timer.value != null) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    }
    function show(options) {
      tmpConfig.value = deepMerge(config, options);
      clearTimer();
      isShow.value = true;
      const duration = tmpConfig.value["duration"];
      if (duration != -1) {
        timer.value = setTimeout(() => {
          clearTimer();
          const complete = tmpConfig.value["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, duration);
      }
    }
    function hide() {
      clearTimer();
    }
    function primary(message) {
      show(new UTSJSONObject({
        type: "primary",
        message
      }));
    }
    function success(message) {
      show(new UTSJSONObject({
        type: "success",
        message
      }));
    }
    function error(message) {
      show(new UTSJSONObject({
        type: "error",
        message
      }));
    }
    function warning(message) {
      show(new UTSJSONObject({
        type: "warning",
        message
      }));
    }
    onBeforeUnmount(() => {
      clearTimer();
    });
    __expose({
      show,
      hide,
      primary,
      success,
      error,
      warning
    });
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_1;
      const _component_up_icon = __easycom_0;
      const _component_up_gap = __easycom_1$1;
      const _component_up_overlay = __easycom_2$1;
      const n10 = _createSharedDataComponentWithFallback(_component_up_overlay, "ef77a4f2", {
        show: () => {
          return isShow.value;
        },
        zIndex: () => {
          return tmpConfig.value["zIndex"];
        },
        "custom-style": () => {
          return overlayStyle.value;
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _renderSharedDataEffect(() => {
            const _tmpConfig = tmpConfig.value;
            const _tmpConfig_type = _tmpConfig["type"];
            _setSharedDataClass(__sharedData, 7, ["up-toast__content", ["up-type-" + _tmpConfig_type, _tmpConfig_type === "loading" || _tmpConfig["loading"] ? "up-toast__content--loading" : ""]]);
            _setSharedDataStyle(__sharedData, 8, [contentStyle.value]);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(tmpConfig.value["type"] === "loading"));
          }, () => {
            const n2 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "ff7cf21a", {
              mode: "circle",
              color: "rgb(255, 255, 255)",
              inactiveColor: "rgb(120, 120, 120)",
              size: "25"
            });
            _setSharedData(__sharedData, 2, n2?.sharedData);
          }, () => {
            return _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean(tmpConfig.value["type"] !== "defalut" && iconName.value != ""));
            }, () => {
              const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "ff7ce320", {
                name: () => {
                  return iconName.value;
                },
                size: "17",
                color: () => {
                  return tmpConfig.value["type"];
                },
                customStyle: () => {
                  return iconStyle.value;
                }
              });
              _setSharedData(__sharedData, 4, n4?.sharedData);
            });
          }, 261);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 5, _toSharedDataBoolean(tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"]));
          }, () => {
            const n7 = _createSharedDataComponentWithFallback(_component_up_gap, "ff7cd450", {
              height: "12",
              bgColor: "transparent"
            });
            _setSharedData(__sharedData, 6, n7?.sharedData);
          });
          _renderSharedDataEffect(() => {
            const _tmpConfig = tmpConfig.value;
            _setSharedDataClass(__sharedData, 9, ["up-toast__content__text", ["up-toast__content__text--" + _tmpConfig["type"]]]);
            _setSharedData(__sharedData, 10, _toDisplayString(_tmpConfig["message"]));
          });
        })
      });
      _setSharedData(__sharedData, 0, n10?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-toast.js.map
