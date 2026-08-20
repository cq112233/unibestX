import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpBackTopUpBackTop";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-back-top"
  },
  __dynamicSharedData: true,
  __hash: "7937cd8a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue",
  __name: "up-back-top",
  props: {
    mode: {
      type: String,
      default: "circle"
    },
    icon: {
      type: String,
      default: "arrow-upward"
    },
    text: {
      type: String,
      default: ""
    },
    duration: {
      type: [String, Number],
      default: 100
    },
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    top: {
      type: [String, Number],
      default: 100
    },
    bottom: {
      type: [String, Number],
      default: 80
    },
    right: {
      type: [String, Number],
      default: 20
    },
    zIndex: {
      type: [String, Number],
      default: 999
    },
    iconStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpBackTopUpBackTopSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const show = computed(() => {
      var _a2, _b;
      const sVal = ((_a2 = props.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0).toString();
      const tVal = ((_b = props.top) !== null && _b !== void 0 ? _b : 100).toString();
      const sTop = parseFloat(sVal);
      const targetTop = parseFloat(tVal);
      if (isNaN(sTop))
        return false;
      const threshold = isNaN(targetTop) ? 100 : targetTop;
      return sTop >= threshold;
    });
    const finalStyle = computed(() => {
      var _a2, _b, _c;
      const bStr = ((_a2 = props.bottom) !== null && _a2 !== void 0 ? _a2 : 80).toString();
      const rStr = ((_b = props.right) !== null && _b !== void 0 ? _b : 20).toString();
      const bVal = bStr.includes("px") ? bStr : bStr + "px";
      const rVal = rStr.includes("px") ? rStr : rStr + "px";
      const zVal = parseInt(((_c = props.zIndex) !== null && _c !== void 0 ? _c : 999).toString());
      const style = new UTSJSONObject({
        position: "fixed",
        bottom: bVal,
        right: rVal,
        width: "44px",
        height: "44px",
        zIndex: isNaN(zVal) ? 999 : zVal,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: props.mode === "circle" ? "100px" : "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e2e8f0"
      });
      return deepMerge(style, addStyle(props.customStyle));
    });
    function backToTop(e = null) {
      uni.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(props.duration.toString()),
        fail: (_ = null) => {
        }
      }));
      emit("click", e);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(show.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 5, finalStyle.value);
        });
        _createSharedDataSlot("default", null, null, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "5178bd53", {
            name: () => {
              return __props.icon;
            },
            size: "22",
            color: "#2563eb"
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.text != ""));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 3, _toDisplayString(__props.text));
            });
          });
        });
        _setSharedDataEvent(__sharedData, 4, backToTop);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}}};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-back-top.js.map
