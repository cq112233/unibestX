const { defineComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } = globalThis.Vue
import { p as propsSticky } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-sticky/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { j as guid, g as getPx, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { z as zIndexConfig } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/zIndex&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
      elId: "up-sticky-" + guid(),
      isFixed: false,
      initialTop: 0,
      height: 0,
      left: 0,
      width: 0,
      isInit: false
    };
  },
  computed: {
    paddingArray() {
      const top = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
      return [top, 0, 0, 0];
    },
    webMpStyle() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        style["position"] = "sticky";
        const top_1 = parseFloat(getPx(this.offsetTop));
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
    },
    stickyTop() {
      return parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
    },
    wrapperStyle() {
      const style = new UTSJSONObject({});
      if (this.isFixed && this.height > 0) {
        style["height"] = this.height + "px";
      }
      return style;
    },
    contentStyle() {
      const style = new UTSJSONObject({});
      if (!this.disabled && this.isFixed) {
        style["position"] = "fixed";
        style["top"] = this.stickyTop + "px";
        style["left"] = this.left + "px";
        if (this.width > 0) {
          style["width"] = this.width + "px";
        }
        style["zIndex"] = this.uZindex;
      } else {
        style["position"] = "relative";
      }
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      return deepMerge(addStyle(this.customStyle), style);
    }
  },
  watch: {
    scrollTop(val = null) {
      if (this.disabled)
        return null;
      const st = parseFloat(val.toString());
      this.checkFixed(st);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.upGetRect("#" + this.elId, false).then((res) => {
        var _a;
        if (res.height != null && res.height > 0) {
          this.height = res.height;
        }
        if (res.left != null) {
          this.left = res.left;
        }
        if (res.width != null && res.width > 0) {
          this.width = res.width;
        }
        const currentTop = (_a = res.top) !== null && _a !== void 0 ? _a : 0;
        const st = parseFloat(this.scrollTop.toString());
        this.initialTop = currentTop + st;
        this.isInit = true;
        this.checkFixed(st);
      });
    },
    checkFixed(st) {
      if (!this.isInit) {
        this.init();
        return null;
      }
      const currentY = this.initialTop - st;
      if (currentY <= this.stickyTop && this.initialTop > 0) {
        if (!this.isFixed) {
          this.upGetRect("#" + this.elId, false).then((res) => {
            if (res.width != null && res.width > 0) {
              this.width = res.width;
            }
            if (res.left != null) {
              this.left = res.left;
            }
            if (res.height != null && res.height > 0) {
              this.height = res.height;
            }
          });
        }
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
});
const _style_0 = { "up-sticky": { "": { "width": "100%", "boxSizing": "border-box" } }, "up-sticky__content": { "": { "boxSizing": "border-box" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "up-sticky",
    id: $data.elId,
    style: normalizeStyle($options.wrapperStyle)
  }, [
    createElementVNode(
      "view",
      {
        class: "up-sticky__content",
        style: normalizeStyle($options.contentStyle)
      },
      [
        renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    )
  ], 12, ["id"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
