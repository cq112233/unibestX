const { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot } = globalThis.Vue
import { p as propsSticky } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { j as guid, b as addStyle, d as deepMerge, g as getPx } from "../../libs/function/index.js";
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
  data() {
    return {
      stickyTop: 0,
      elId: guid(),
      initialTop: 0,
      left: 0,
      width: "auto",
      height: "auto",
      fixed: false
    };
  },
  computed: {
    stickyHeaderStyle() {
      return addStyle(this.customStyle);
    },
    style() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        style["height"] = this.fixed ? this.height == "auto" ? "auto" : this.height + "px" : "auto";
      } else {
        style["position"] = "relative";
      }
      style["backgroundColor"] = this.bgColor;
      return deepMerge(addStyle(this.customStyle), style);
    },
    stickyContent() {
      const style = new UTSJSONObject({});
      if (this.fixed) {
        style["position"] = "fixed";
        style["top"] = this.stickyTop + "px";
        style["left"] = this.left + "px";
        if (this.width != "auto") {
          style["width"] = this.width + "px";
        }
        style["zIndex"] = this.uZindex;
      } else {
        style["position"] = "static";
      }
      return style;
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
  },
  mounted() {
    this.init();
  },
  watch: {
    scrollTop: {
      handler(nval) {
        this.checkSticky(parseFloat(getPx(nval)));
      },
      immediate: true
    },
    offsetTop() {
      this.getStickyTop();
    }
  },
  methods: {
    init() {
      this.getStickyTop();
      this.initObserveContent();
    },
    initObserveContent() {
      setTimeout(() => {
        this.upGetRect("#" + this.elId).then((res) => {
          if (res != null) {
            if (res.height != null && res.height > 0) {
              this.height = res.height.toString();
            }
            if (res.left != null) {
              this.left = res.left;
            }
            if (res.width != null && res.width > 0) {
              this.width = res.width.toString();
            }
            if (res.top != null && res.top > 0) {
              this.initialTop = res.top + parseFloat(getPx(this.scrollTop));
            }
          }
        });
      }, 200);
    },
    checkSticky(scrollTop) {
      if (this.disabled) {
        if (this.fixed)
          this.fixed = false;
        return null;
      }
      if (this.initialTop <= 0) {
        this.upGetRect("#" + this.elId).then((res) => {
          if (res != null && res.top != null && res.top > 0) {
            this.initialTop = res.top + scrollTop;
          }
        });
        return null;
      }
      const threshold = this.initialTop - this.stickyTop;
      const shouldFixed = scrollTop >= threshold;
      if (shouldFixed != this.fixed) {
        this.fixed = shouldFixed;
        if (shouldFixed) {
          this.$emit("fixed", this.index);
        } else {
          this.$emit("unfixed", this.index);
        }
      }
    },
    getStickyTop() {
      this.stickyTop = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
    }
  }
});
const _style_0 = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("sticky-header", null, [
    createElementVNode(
      "view",
      {
        class: "up-sticky",
        style: normalizeStyle($options.stickyHeaderStyle)
      },
      [
        renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    )
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
