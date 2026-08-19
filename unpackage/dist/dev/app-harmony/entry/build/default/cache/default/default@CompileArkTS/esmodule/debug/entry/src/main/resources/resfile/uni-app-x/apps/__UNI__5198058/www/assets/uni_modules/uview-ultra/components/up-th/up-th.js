import { b as addStyle, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpThUpTh";
const { ref, computed, getCurrentInstance, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-th"
  },
  __dynamicSharedData: true,
  __hash: "42b32c44",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-th/up-th.uvue",
  __name: "up-th",
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
    const mergedThStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const th = thStyle.value;
      return deepMerge(th, custom);
    });
    onMounted(() => {
      var _a2;
      getParent("up-table", instance);
      if (parent.value != null) {
        let style = new UTSJSONObject({});
        let styleText = new UTSJSONObject({});
        let parentProps = parent.value.$callMethod("getProps");
        if (props.width != "")
          style["flex"] = `0 0 ${props.width}`;
        styleText["textAlign"] = parentProps.getString("align");
        style["padding"] = parentProps.getString("padding");
        const isBorder = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
        if (isBorder) {
          style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
          style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
        }
        style = deepMerge(style, parentProps.getAny("thStyle"));
        thStyle.value = style;
        thTextStyle.value = styleText;
      }
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 2, ["up-th", [__props.customClass]]);
        _setSharedDataStyle(__sharedData, 3, mergedThStyle.value);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 0, thTextStyle.value);
          _setSharedData(__sharedData, 1, _toDisplayString(__props.text));
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
