import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const { ref } = globalThis.Vue;
const __className = "GenSrcSubTailwindcssComponentsBindClass";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "45f95134",
  __className,
  __filename: "src/sub/tailwindcss/components/BindClass.uvue",
  __name: "BindClass",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcSubTailwindcssComponentsBindClassSharedData", sharedDataClassId: 0 })));
    const condition = ref(true);
    const extra = ref("wtu-1026j5x-g wtu-1cznegj-h");
    const flag = ref(true);
    const toggled = ref(true);
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, _unref(flag) ? "wtu-uj646o-a wtu-v1dixk-b" : "wtu-s9xl9u-c");
        _setSharedDataClass(__sharedData, 1, [
          _unref(extra),
          { "wtu-1l82hkd-d": _unref(toggled) }
        ]);
        _setSharedDataClass(__sharedData, 2, _unref(condition) ? "wtu-1hf1vho-e wtu-6xzka-f" : "");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const BindClass = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  BindClass as B
};
//# sourceMappingURL=BindClass.js.map
