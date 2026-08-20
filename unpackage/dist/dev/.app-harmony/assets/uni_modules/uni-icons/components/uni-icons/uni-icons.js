import { f as fontData } from "./uniicons_file.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "uni-icons"
  },
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
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
    const __returned__ = { props, getFontSize, unicode, iconSize, styleObj };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "uni-icons": { "": { "fontFamily": "UniIconsFontFamily", "fontSize": 18, "fontStyle": "normal", "color": "#333333" } }, "@FONT-FACE": [{ "fontFamily": "UniIconsFontFamily", "src": "url('/assets/uniicons.32e978a5.ttf')" }] };
const { toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "text",
    {
      class: "uni-icons",
      style: _normalizeStyle($setup.styleObj)
    },
    _toDisplayString($setup.unicode),
    5
    /* TEXT, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=uni-icons.js.map
