import { p as propsStatusBar } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent } = globalThis.Vue;
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
const { renderSlot: _renderSlot, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      style: _normalizeStyle([$options.style]),
      class: "up-status-bar"
    },
    [
      _renderSlot(_ctx.$slots, "default")
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
