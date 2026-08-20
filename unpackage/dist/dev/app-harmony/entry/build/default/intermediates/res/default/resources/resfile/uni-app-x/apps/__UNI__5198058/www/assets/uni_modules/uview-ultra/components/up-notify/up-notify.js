import { _ as __easycom_0 } from "../up-status-bar/up-status-bar.js";
import { _ as __easycom_1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { g as getPx, a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNotifyUpNotify";
const { computed, ref, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-notify"
  },
  __dynamicSharedData: true,
  __hash: "a0aad0ee",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-notify/up-notify.uvue",
  __name: "up-notify",
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNotifyUpNotifySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const open = ref(false);
    const timer = ref(null);
    const config = new UTSJSONObject({
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    });
    const tmpConfig = ref(new UTSJSONObject({
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }));
    const isIconVisible = computed(() => {
      var _a2, _b;
      const typeStr = (_b = (_a2 = tmpConfig.value["type"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      return typeStr == "success" || typeStr == "warning" || typeStr == "error";
    });
    const iconSize = computed(() => {
      var _a2;
      const fs = (_a2 = tmpConfig.value["fontSize"]) !== null && _a2 !== void 0 ? _a2 : "0";
      return 1.3 * parseFloat(getPx(fs).toString());
    });
    const iconCustomStyle = computed(() => {
      return new UTSJSONObject({
        marginRight: "4px"
      });
    });
    const containerStyle = computed(() => {
      let top = 0;
      const topValue = tmpConfig.value["top"];
      const isTopZero = topValue != null && parseFloat(topValue.toString()) == 0;
      return new UTSJSONObject({
        top: addUnit(isTopZero ? top : topValue),
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 10076
      });
    });
    const backgroundColor = computed(() => {
      var _a2, _b;
      const style = new UTSJSONObject({});
      const bg = (_b = (_a2 = tmpConfig.value["bgColor"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      if (bg != "") {
        style["backgroundColor"] = bg;
      }
      return style;
    });
    const notifyStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const bg = backgroundColor.value;
      return deepMerge(bg, custom);
    });
    const notifyTextStyle = computed(() => {
      var _a2, _b;
      return new UTSJSONObject({
        fontSize: addUnit((_a2 = tmpConfig.value["fontSize"]) !== null && _a2 !== void 0 ? _a2 : "0"),
        color: (_b = tmpConfig.value["color"]) !== null && _b !== void 0 ? _b : ""
      });
    });
    function clearTimer() {
      open.value = false;
      if (timer.value != null) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    }
    function show(options) {
      var _a2;
      tmpConfig.value = deepMerge(config, options);
      clearTimer();
      open.value = true;
      const dur = parseInt(((_a2 = tmpConfig.value["duration"]) !== null && _a2 !== void 0 ? _a2 : 3e3).toString());
      if (dur > 0) {
        timer.value = setTimeout(() => {
          open.value = false;
          clearTimer();
          const complete = tmpConfig.value["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, dur);
      }
    }
    function close() {
      clearTimer();
    }
    function primary(message) {
      show(new UTSJSONObject({ type: "primary", message }));
    }
    function success(message) {
      show(new UTSJSONObject({ type: "success", message }));
    }
    function error(message) {
      show(new UTSJSONObject({ type: "error", message }));
    }
    function warning(message) {
      show(new UTSJSONObject({ type: "warning", message }));
    }
    onBeforeUnmount(() => {
      clearTimer();
    });
    __expose({
      show,
      close,
      primary,
      success,
      error,
      warning
    });
    return () => {
      "raw js";
      const _component_up_status_bar = __easycom_0;
      const _component_up_icon = __easycom_1;
      const _component_up_transition = __easycom_1$1;
      const n11 = _createSharedDataComponentWithFallback(
        _component_up_transition,
        "231ca9d9",
        {
          mode: "slide-down",
          customStyle: () => {
            return containerStyle.value;
          },
          show: () => {
            return open.value;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 5, ["up-notify", [`up-notify--${tmpConfig.value["type"]}`]]);
              _setSharedDataStyle(__sharedData, 6, notifyStyle.value);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(tmpConfig.value["safeAreaInsetTop"]));
            }, () => {
              const n2 = _createSharedDataComponentWithFallback(_component_up_status_bar, "62ccca18");
              _setSharedData(__sharedData, 2, n2?.sharedData);
            });
            _createSharedDataSlot("icon", null, null, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 3, _toSharedDataBoolean(isIconVisible.value));
              }, () => {
                const n7 = _createSharedDataComponentWithFallback(_component_up_icon, "62ccbcbe", {
                  name: () => {
                    return tmpConfig.value["icon"];
                  },
                  color: () => {
                    return tmpConfig.value["color"];
                  },
                  size: () => {
                    return iconSize.value;
                  },
                  customStyle: () => {
                    return iconCustomStyle.value;
                  }
                });
                _setSharedData(__sharedData, 4, n7?.sharedData);
              }, null, 129);
            });
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 7, notifyTextStyle.value);
              _setSharedData(__sharedData, 8, _toDisplayString(tmpConfig.value["message"]));
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n11?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-notify.js.map
