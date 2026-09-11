import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsLayoutDemoCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/basic/components/LayoutDemoCard.uvue",
  __name: "LayoutDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLayoutDemoCardSharedData", sharedDataClassId: 0 })));
    function navigateToDemo() {
      uni.navigateTo({
        url: "/src/sub/layoutDemo/layoutDemo",
        fail: (err) => {
          uni.__f__("error", "at src/pages/basic/components/LayoutDemoCard.uvue:30", "navigateToDemo fail:", err);
        }
      });
    }
    return () => {
      "raw js";
      const n4 = _createSharedDataComponent(
        Card,
        "1d828da0",
        { title: "布局页面示例" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, navigateToDemo);
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n4.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const LayoutDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  LayoutDemoCard as L
};
