import { p as propsSafeBottom } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent } = globalThis.Vue;
const _sfc_main = defineComponent({
  name: "up-safe-bottom",
  mixins: [mpMixin, mixin, propsSafeBottom],
  data() {
    return {
      safeAreaBottomHeight: 0,
      isNvue: false
    };
  },
  computed: {
    style() {
      const style = new UTSJSONObject({});
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  mounted() {
  }
});
const _style_0 = { "up-safe-bottom": { "": { "width": "100%" } } };
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-safe-bottom", [!$data.isNvue ? "up-safe-area-inset-bottom" : ""]]),
      style: _normalizeStyle([$options.style])
    },
    null,
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-safe-bottom.js.map
