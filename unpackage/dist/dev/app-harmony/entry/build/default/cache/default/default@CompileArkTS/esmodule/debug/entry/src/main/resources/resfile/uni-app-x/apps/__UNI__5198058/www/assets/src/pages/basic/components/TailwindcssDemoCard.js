import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsTailwindcssDemoCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "263f1501",
  __className,
  __filename: "src/pages/basic/components/TailwindcssDemoCard.uvue",
  __name: "TailwindcssDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsTailwindcssDemoCardSharedData", sharedDataClassId: 0 })));
    function navigateToDemo() {
      uni.navigateTo({
        url: "/src/sub/tailwindcss/tailwindcss",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/TailwindcssDemoCard.uvue:40", "navigateToDemo fail:", err);
        }
      });
    }
    return () => {
      "raw js";
      const n11 = _createSharedDataComponent(
        Card,
        "0e428ee6",
        { title: "weapp-tailwindcss Demo" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, navigateToDemo);
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n11.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const TailwindcssDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  TailwindcssDemoCard as T
};
//# sourceMappingURL=TailwindcssDemoCard.js.map
