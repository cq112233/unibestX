const { defineComponent, nextTick, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } = globalThis.Vue
import { p as propsSticky } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-sticky/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { j as guid, d as deepMerge, b as addStyle, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { z as zIndex } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/zIndex&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-sticky",
  mixins: [mpMixin, mixin, propsSticky],
  data() {
    return {
      cssSticky: false,
      stickyTop: 0,
      elId: guid(),
      left: 0,
      width: "auto",
      height: "auto",
      fixed: false,
      rafId: 0
      // requestAnimationFrame ID
    };
  },
  computed: {
    // 组件样式
    style() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        style["height"] = this.fixed ? this.height + "px" : "auto";
      } else {
        style["position"] = "relative";
      }
      style["backgroundColor"] = this.bgColor;
      return deepMerge(addStyle(this.customStyle), style);
    },
    // 吸顶内容的样式
    stickyContent() {
      const style = new UTSJSONObject({});
      if (!this.cssSticky) {
        style["position"] = this.fixed ? "fixed" : "static";
        style["top"] = this.stickyTop + "px";
        style["left"] = this.left + "px";
        style["width"] = this.width == "auto" ? "auto" : this.width + "px";
        style["zIndex"] = this.uZindex;
      }
      return style;
    },
    uZindex() {
      return this.$props["zIndex"].toString() != "" ? this.zIndex : zIndex["sticky"];
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    offsetTop(nval) {
      this.getStickyTop();
    }
  },
  methods: {
    init() {
      this.getStickyTop();
      if (!this.cssSticky) {
        if (!this.disabled) {
          this.initObserveContent();
        }
      }
    },
    initObserveContent() {
      this.upGetRect("#" + this.elId).then((res) => {
        var _a, _b, _c;
        this.height = ((_a = res.height) !== null && _a !== void 0 ? _a : "").toString();
        this.left = (_b = res.left) !== null && _b !== void 0 ? _b : 0;
        this.width = ((_c = res.width) !== null && _c !== void 0 ? _c : "").toString();
        nextTick(() => {
        });
      });
    },
    observeContent() {
    },
    setFixed(top) {
      const fixed = top > this.stickyTop;
      this.fixed = fixed;
    },
    disconnectObserver(observerName) {
    },
    getStickyTop() {
      this.stickyTop = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight));
    }
  },
  beforeUnmount() {
    this.disconnectObserver("contentObserver");
    if (this.rafId != 0) {
      cancelAnimationFrame(this.rafId);
    }
  }
});
const _style_0 = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-sticky",
      style: normalizeStyle([$options.style])
    },
    [
      createElementVNode("view", {
        id: $data.elId,
        style: normalizeStyle([$options.stickyContent]),
        class: "up-sticky__content"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 12, ["id"])
    ],
    4
    /* STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
