import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTdUpTd";
const { ref, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-td"
  },
  __dynamicSharedData: true,
  __hash: "724771a6",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-td/up-td.uvue",
  __name: "up-td",
  props: {
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
    onMounted(() => {
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
        style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
        style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
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
        return _setSharedDataStyle(__sharedData, 1, [tdStyle.value]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 0, [tdTextStyle.value]);
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
