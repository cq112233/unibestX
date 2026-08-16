import { h as hasStrValue, a as addUnit } from "../../libs/utils/basic.js";
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
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceDividerRiceDivider";
const { useSlots, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-divider",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "6509ba04",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-divider/rice-divider.uvue",
  __name: "rice-divider",
  props: {
    dashed: { type: Boolean, default: false },
    hairline: { type: Boolean, default: true },
    width: { type: [String, Number] },
    lineColor: { type: String },
    text: { type: [String, Number] },
    textPosition: { default: "center", type: String },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceDividerRiceDividerSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("divider");
    const slots = useSlots();
    const props = __props;
    const hasText = computed(() => {
      return slots["default"] != null || hasStrValue(props.text);
    });
    const dividerStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.lineColor != null && !hasText.value)
        css.set("border-color", props.lineColor);
      return css;
    });
    const dividerLineStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.lineColor != null)
        css.set("border-color", props.lineColor);
      return css;
    });
    const dividerClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("single", !hasText.value),
        ns.is("hairline", props.hairline && !hasText.value),
        ns.is("dashed", props.dashed && !hasText.value)
      ];
    });
    const getLineClass = (position) => {
      return [
        ns.e(position),
        ns.is("hairline", props.hairline),
        ns.is("sides", props.textPosition == position),
        ns.is("dashed", props.dashed)
      ];
    };
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      if (props.textColor != null)
        css.set("color", props.textColor);
      return css;
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, _unref(dividerClass));
        _setSharedDataStyle(__sharedData, 8, [_unref(dividerStyle), __props.customStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasText)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 3, getLineClass("left"));
          _setSharedDataStyle(__sharedData, 4, _unref(dividerLineStyle));
        });
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 1, _unref(textStyle));
            _setSharedData(__sharedData, 2, _toDisplayString(__props.text));
          });
        });
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 5, getLineClass("right"));
          _setSharedDataStyle(__sharedData, 6, _unref(dividerLineStyle));
        });
      }, null, 2);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-divider.js.map
