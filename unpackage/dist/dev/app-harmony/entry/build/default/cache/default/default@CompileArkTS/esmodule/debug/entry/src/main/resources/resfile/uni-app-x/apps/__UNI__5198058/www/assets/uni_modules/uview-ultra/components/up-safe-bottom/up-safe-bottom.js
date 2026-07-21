const { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle } = globalThis.Vue
import { p as propsSafeBottom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-safe-bottom/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { h as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-safe-bottom", [!$data.isNvue ? "up-safe-area-inset-bottom" : ""]]),
      style: normalizeStyle([$options.style])
    },
    null,
    6
    /* CLASS, STYLE */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-safe-bottom.js.map
