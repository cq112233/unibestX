const { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot } = globalThis.Vue
import { p as propsSticky } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { g as getPx, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { z as zIndexConfig } from "../../libs/config/zIndex.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-sticky",
  mixins: [mpMixin, mixin, propsSticky],
  props: {
    scrollTop: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    paddingArray() {
      const top = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
      return [top, 0, 0, 0];
    },
    contentStyle() {
      const style = new UTSJSONObject({});
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      if (this.uZindex > 0) {
        style["zIndex"] = this.uZindex;
      }
      return deepMerge(addStyle(this.customStyle), style);
    },
    webMpStyle() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        style["position"] = "sticky";
        const top_1 = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
        style["top"] = top_1 + "px";
        style["zIndex"] = this.uZindex;
      } else {
        style["position"] = "relative";
      }
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      return deepMerge(addStyle(this.customStyle), style);
    },
    uZindex() {
      var _a;
      const zVal = this.$props["zIndex"];
      if (zVal != null && zVal.toString() != "") {
        const parsed = parseInt(zVal.toString());
        if (!isNaN(parsed)) {
          return parsed;
        }
      }
      return (_a = zIndexConfig["sticky"]) !== null && _a !== void 0 ? _a : 999;
    }
  }
});
const _style_0 = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.disabled ? (openBlock(), createElementBlock("sticky-header", {
    key: 0,
    padding: $options.paddingArray
  }, [
    createElementVNode(
      "view",
      {
        class: "up-sticky",
        style: normalizeStyle($options.contentStyle)
      },
      [
        renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    )
  ], 8, ["padding"])) : (openBlock(), createElementBlock(
    "view",
    {
      key: 1,
      class: "up-sticky",
      style: normalizeStyle($options.contentStyle)
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  ));
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
