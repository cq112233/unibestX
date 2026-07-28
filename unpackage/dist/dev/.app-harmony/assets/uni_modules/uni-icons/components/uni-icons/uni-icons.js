const { defineComponent, openBlock, createElementBlock, normalizeStyle, renderSlot, createTextVNode, toDisplayString } = globalThis.Vue
import { f as fontData } from "./uniicons_file.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "uni-icons",
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
  data() {
    return {};
  },
  computed: {
    unicode() {
      let codes = UTS.arrayFind(fontData, (item) => {
        return item.font_class == this.type;
      });
      if (codes !== null) {
        return codes.unicode;
      }
      return "";
    },
    iconSize() {
      const size = this.size;
      if (typeof size == "string") {
        const reg = /^[0-9]*$/g;
        return reg.test(size) ? "" + size + "px" : "" + size;
      }
      return this.getFontSize(size);
    },
    styleObj() {
      if (this.fontFamily !== "") {
        return new UTSJSONObject({ color: this.color, fontSize: this.iconSize, fontFamily: this.fontFamily });
      }
      return new UTSJSONObject({ color: this.color, fontSize: this.iconSize });
    }
  },
  created() {
  },
  methods: {
    /**
     * 字体大小
     */
    getFontSize(size) {
      return size + "px";
    }
  }
});
const _style_0 = { "uni-icons": { "": { "fontFamily": "UniIconsFontFamily", "fontSize": 18, "fontStyle": "normal", "color": "#333333" } }, "@FONT-FACE": [{ "fontFamily": "UniIconsFontFamily", "src": "url('/assets/uniicons.32e978a5.ttf')" }] };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "text",
    {
      class: "uni-icons",
      style: normalizeStyle($options.styleObj)
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(
          toDisplayString($options.unicode),
          1
          /* TEXT */
        )
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=uni-icons.js.map
