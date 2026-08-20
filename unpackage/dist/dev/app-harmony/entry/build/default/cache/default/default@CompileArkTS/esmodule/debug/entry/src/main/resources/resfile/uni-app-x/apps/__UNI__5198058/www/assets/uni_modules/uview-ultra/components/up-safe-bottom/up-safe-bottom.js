import { d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSafeBottomUpSafeBottom";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-safe-bottom"
  },
  __dynamicSharedData: true,
  __hash: "7fb32e18",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue",
  __name: "up-safe-bottom",
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSafeBottomUpSafeBottomSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const style = computed(() => {
      const s = new UTSJSONObject({});
      return deepMerge(s, addStyle(props.customStyle));
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 0, [style.value]);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-safe-bottom.js.map
