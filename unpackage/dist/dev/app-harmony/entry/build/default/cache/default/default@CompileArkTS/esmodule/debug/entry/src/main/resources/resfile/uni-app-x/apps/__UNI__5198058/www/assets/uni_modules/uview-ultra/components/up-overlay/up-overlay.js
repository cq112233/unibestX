import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { d as deepMerge, a as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpOverlayUpOverlay";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-overlay"
  },
  __dynamicSharedData: true,
  __hash: "66c245bb",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue",
  __name: "up-overlay",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [String, Number],
      default: 10070
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    opacity: {
      type: [String, Number],
      default: 0.5
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
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpOverlayUpOverlaySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const overlayStyle = computed(() => {
      const style = new UTSJSONObject({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: props.zIndex,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, ${props.opacity})`
      });
      return deepMerge(style, addStyle(props.customStyle));
    });
    function clickHandler() {
      emit("click");
    }
    return () => {
      "raw js";
      const _component_up_transition = __easycom_1;
      const n1 = _createSharedDataComponentWithFallback(
        _component_up_transition,
        "01f42171",
        {
          show: () => {
            return __props.show;
          },
          "custom-class": "up-overlay",
          duration: () => {
            return __props.duration;
          },
          "custom-style": () => {
            return overlayStyle.value;
          },
          onClick: () => {
            return clickHandler;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataSlot("default", null, null);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n1?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-overlay.js.map
