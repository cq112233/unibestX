import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsCard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "25b6477d",
  __className,
  __filename: "src/pages/basic/components/Card.uvue",
  __name: "Card",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsCardSharedData", sharedDataClassId: 0 })));
    return () => {
      "raw js";
      _createSharedDataSlot("title", null, null, () => {
        _setSharedDataStyle(__sharedData, 0, { color: "var(--text-color, #2d3748)" });
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 1, _toDisplayString(__props.title));
        });
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataStyle(__sharedData, 2, {
        backgroundColor: "var(--card-bg, #ffffff)",
        borderColor: "var(--border-color, #edf2f7)"
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  Card as C
};
//# sourceMappingURL=Card.js.map
