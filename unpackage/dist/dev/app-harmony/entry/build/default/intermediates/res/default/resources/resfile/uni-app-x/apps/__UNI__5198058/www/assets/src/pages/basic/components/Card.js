import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsCard";
class CardProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: true }
        };
      },
      name: "CardProps"
    };
  }
  constructor(options, metadata = CardProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "00039df3",
  __className,
  __filename: "src/pages/basic/components/Card.uvue",
  __name: "Card",
  props: {
    title: { default: "默认标题", type: String }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsCardSharedData", sharedDataClassId: 0 })));
    return () => {
      "raw js";
      _createSharedDataSlot("title", null, null, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 0, _toDisplayString(__props.title));
        });
      });
      _createSharedDataSlot("default", null, null);
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
