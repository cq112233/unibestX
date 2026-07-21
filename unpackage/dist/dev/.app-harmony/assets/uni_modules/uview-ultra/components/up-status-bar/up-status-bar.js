const { defineComponent, openBlock, createElementBlock, normalizeStyle, renderSlot } = globalThis.Vue
import { p as propsStatusBar } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, h as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-status-bar",
  mixins: [mpMixin, mixin, propsStatusBar],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = new UTSJSONObject(
        {}
        // 状态栏高度，由于某些安卓和微信开发工具无法识别css的顶部状态栏变量，所以使用js获取的方式
      );
      style["height"] = addUnit(uni.getSystemInfoSync().statusBarHeight, "px");
      style["backgroundColor"] = this.bgColor;
      return deepMerge(style, addStyle(this.customStyle));
    }
  }
});
const _style_0 = { "up-status-bar": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle([$options.style]),
      class: "up-status-bar"
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-status-bar/up-status-bar.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-status-bar.js.map
