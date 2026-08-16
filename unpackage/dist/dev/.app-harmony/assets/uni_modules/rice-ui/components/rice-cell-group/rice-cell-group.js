import { a as addUnit, h as hasStrValue } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCellGroupRiceCellGroup";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-cell-group",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1b2d3f6c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-cell-group/rice-cell-group.uvue",
  __name: "rice-cell-group",
  props: {
    title: { type: [String, Number] },
    border: { type: Boolean, default: false },
    radius: { type: [String, Number] },
    titleStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  __multiRoot: true,
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCellGroupRiceCellGroupSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("cell-group");
    const props = __props;
    const cellGroupStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.radius != null) {
        css.set("border-radius", addUnit(props.radius));
      }
      return css;
    });
    const cellGroupClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("border", props.border)
      ];
    });
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasStrValue)(__props.title)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 1, ["rice-cell-group__title", _unref(ns).theme()]);
          _setSharedDataStyle(__sharedData, 2, __props.titleStyle);
          _setSharedData(__sharedData, 3, _toDisplayString(__props.title));
        });
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, _unref(cellGroupClass));
        _setSharedDataStyle(__sharedData, 5, [_unref(cellGroupStyle), __props.customStyle]);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=rice-cell-group.js.map
