import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-link/link&";
import { a as addUnit, g as getPx, b as addStyle, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLinkUpLink";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-link"
  },
  __dynamicSharedData: true,
  __hash: "4c867104",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-link/up-link.uvue",
  __name: "up-link",
  props: {
    color: {
      type: String,
      default: "#3c9cff"
    },
    fontSize: {
      type: [String, Number],
      default: "15px"
    },
    underLine: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    },
    mpTips: {
      type: String,
      default: "链接已复制，请在浏览器打开"
    },
    lineColor: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLinkUpLinkSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const linkStyle = computed(() => {
      const style = new UTSJSONObject({
        color: props.color,
        fontSize: addUnit(props.fontSize),
        lineHeight: addUnit(parseInt(getPx(props.fontSize)) + 2),
        textDecoration: props.underLine ? "underline" : "none"
      });
      return style;
    });
    const mergedLinkStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const link = linkStyle.value;
      return deepMerge(link, custom);
    });
    function openLink() {
      emit("click");
    }
    return () => {
      "raw js";
      _setSharedDataEvent(__sharedData, 0, openLink);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 1, mergedLinkStyle.value);
        _setSharedData(__sharedData, 2, _toDisplayString(__props.text));
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
//# sourceMappingURL=up-link.js.map
