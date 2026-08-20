import { f as fontData } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uniicons_file&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUniIconsComponentsUniIconsUniIcons";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "uni-icons"
  },
  __dynamicSharedData: true,
  __hash: "bd952b70",
  __className,
  __filename: "uni_modules/uni-icons/components/uni-icons/uni-icons.uvue",
  __name: "uni-icons",
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 16
    },
    fontFamily: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUniIconsComponentsUniIconsUniIconsSharedData", sharedDataClassId: 0 })));
    const props = __props;
    function getFontSize(size) {
      return size + "px";
    }
    const unicode = computed(() => {
      const codes = UTS.arrayFind(fontData, (item) => {
        return item.font_class == props.type;
      });
      if (codes != null) {
        return codes.unicode;
      }
      return "";
    });
    const iconSize = computed(() => {
      const size = props.size;
      if (typeof size == "string") {
        const reg = /^[0-9]*$/g;
        return reg.test(size) ? "" + size + "px" : "" + size;
      }
      return getFontSize(size);
    });
    const styleObj = computed(() => {
      if (props.fontFamily != "") {
        return new UTSJSONObject({ color: props.color, fontSize: iconSize.value, fontFamily: props.fontFamily });
      }
      return new UTSJSONObject({ color: props.color, fontSize: iconSize.value });
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 0, styleObj.value);
        _setSharedData(__sharedData, 1, _toDisplayString(unicode.value));
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"@FONT-FACE":[{"src":"url('/assets/uniicons.32e978a5.ttf')","fontFamily":"UniIconsFontFamily"}]};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=uni-icons.js.map
