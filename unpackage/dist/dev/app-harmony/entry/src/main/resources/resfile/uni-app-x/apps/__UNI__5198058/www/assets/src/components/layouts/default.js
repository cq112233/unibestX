import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenSrcComponentsLayoutsDefault";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "29ce4409",
  __className,
  __filename: "src/components/layouts/default.uvue",
  __name: "default",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsLayoutsDefaultSharedData", sharedDataClassId: 0 })));
    return () => {
      "raw js";
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const LayoutComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  LayoutComponent as L
};
//# sourceMappingURL=default.js.map
