import { b as addStyle, d as deepMerge, a as addUnit } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTdUpTd";
const { ref, computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-td"
  },
  __dynamicSharedData: true,
  __hash: "26196380",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-td/up-td.uvue",
  __name: "up-td",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    text: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: [String, Number],
      default: ""
    },
    width: {
      type: [String],
      default: "auto"
    },
    textAlign: {
      type: String,
      default: ""
    },
    fontSize: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTdUpTdSharedData", sharedDataClassId: 0 })));
    const _a = useUltraUI(new UTSJSONObject({
      padding: 0,
      align: "",
      borderColor: "",
      thStyle: new UTSJSONObject({})
    })), parent = _a.parent, getParent = _a.getParent;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const tdStyle = ref(new UTSJSONObject({}));
    const tdTextStyle = ref(new UTSJSONObject({}));
    const mergedTdStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const td = tdStyle.value;
      return deepMerge(td, custom);
    });
    onMounted(() => {
      var _a2;
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "auto")
          style["flex"] = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        styleText["fontSize"] = addUnit(parentProps.getString("fontSize"));
        style["padding"] = parentProps.getString("padding");
        const isBorder = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
        if (isBorder) {
          style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
          style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        }
        styleText["color"] = parentProps.getString("color");
        if (props.textAlign != "") {
          styleText["textAlign"] = props.textAlign;
        }
        if (props.fontSize != "") {
          styleText["fontSize"] = props.fontSize;
        }
        if (props.borderColor != "") {
          style["borderColor"] = props.borderColor;
        }
        if (props.color != "") {
          styleText["color"] = props.color;
        }
        tdStyle.value = style;
        tdTextStyle.value = styleText;
      }
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 2, ["up-td", [__props.customClass]]);
        _setSharedDataStyle(__sharedData, 3, mergedTdStyle.value);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 0, tdTextStyle.value);
          _setSharedData(__sharedData, 1, _toDisplayString((__props.text != null && __props.text != "" ? __props.text : __props.label).toString()));
        });
      });
      _createSharedDataSlot("content", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-td.js.map
