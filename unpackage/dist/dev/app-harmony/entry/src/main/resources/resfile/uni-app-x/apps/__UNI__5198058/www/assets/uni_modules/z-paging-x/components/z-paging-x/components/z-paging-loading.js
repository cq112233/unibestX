import { c as base64Flower } from "../static/index.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading";
const { ref, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1651bc30",
  __className,
  __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.uvue",
  __name: "z-paging-loading",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadingSharedData", sharedDataClassId: 0 })));
    const times = ref(0);
    const element = ref(null);
    const base64FlowerImg = ref(base64Flower);
    const doRotate = () => {
      if (element.value !== null) {
        times.value = times.value + 1;
        element.value.style.setProperty("transform", "rotate(" + times.value * 360 + "deg)");
        element.value.style.setProperty("transition-duration", "1000ms");
      }
    };
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          element.value = uni.getElementById("z-paging-loading-img");
          doRotate();
        }, 10);
      });
    });
    return () => {
      "raw js";
      _setSharedDataEvent(__sharedData, 0, doRotate);
      _renderSharedDataEffect(() => {
        return _setSharedDataAttr(__sharedData, 1, _toSharedDataString(base64FlowerImg.value));
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const zPagingLoading = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  zPagingLoading as z
};
//# sourceMappingURL=z-paging-loading.js.map
