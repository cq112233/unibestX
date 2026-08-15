import { d as deepMerge } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpThUpTh";
const { ref, getCurrentInstance, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-th"
  },
  __dynamicSharedData: true,
  __hash: "012fc4eb",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-th/up-th.uvue",
  __name: "up-th",
  props: {
    width: {
      type: [String],
      default: ""
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpThUpThSharedData", sharedDataClassId: 0 })));
    const _a = useUltraUI(new UTSJSONObject({
      padding: 0,
      align: "center",
      borderColor: "",
      thStyle: new UTSJSONObject({})
    })), parent = _a.parent, getParent = _a.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const thStyle = ref(new UTSJSONObject({}));
    const thTextStyle = ref(new UTSJSONObject({}));
    onMounted(() => {
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "")
          style["flex"] = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        style["padding"] = parentProps.getString("padding");
        style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
        style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        style = deepMerge(style, parentProps.getAny("thStyle"));
        thStyle.value = style;
        thTextStyle.value = styleText;
      }
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 1, [thStyle.value]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 0, [thTextStyle.value]);
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-th.js.map
