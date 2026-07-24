const { defineComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } = globalThis.Vue
import { p as propsList } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { e as getWindowInfo, a as addUnit, d as deepMerge, b as addStyle, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-list",
  mixins: [mpMixin, mixin, propsList],
  watch: {
    scrollIntoView(n = null) {
      this.scrollIntoViewById(n);
    }
  },
  data() {
    return {
      // 记录内部滚动的距离
      innerScrollTop: 0,
      // vue下，scroll-view在上拉加载时的偏移值
      offset: 0,
      sys: getWindowInfo()
    };
  },
  computed: {
    listStyle() {
      const style = new UTSJSONObject({});
      if (this.width != 0)
        style["width"] = addUnit(this.width);
      if (this.height != 0)
        style["height"] = addUnit(this.height);
      if (style["height"] == null)
        style["height"] = addUnit(this.sys.windowHeight, "px");
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  created() {
  },
  mounted() {
  },
  emits: [
    "scroll",
    "scrolltolower",
    "scroll-to-lower",
    "scrolltoupper",
    "scroll-to-upper",
    "refresherpulling",
    "refresherrefresh",
    "refresherrestore",
    "refresherabort"
  ],
  methods: {
    updateOffsetFromChild(top) {
      this.offset = top;
    },
    onScroll(e) {
      let scrollTop = 0;
      scrollTop = e.detail.scrollTop;
      this.innerScrollTop = scrollTop;
      this.$emit("scroll", scrollTop);
    },
    scrollIntoViewById(id) {
    },
    // 滚动到底部触发事件
    scrolltolower(e) {
      sleep(30).then(() => {
        this.$emit("scrolltolower");
        this.$emit("scroll-to-lower");
      });
    },
    // 滚动到底部时触发，非nvue有效
    scrolltoupper(e) {
      sleep(30).then(() => {
        this.$emit("scrolltoupper");
        this.$emit("scroll-to-upper");
        this.offset = 0;
      });
    },
    refresherpulling(e) {
      this.$emit("refresherpulling", e);
    },
    refresherrefresh(e) {
      this.$emit("refresherrefresh", e);
    },
    refresherrestore(e) {
      this.$emit("refresherrestore", e);
    },
    refresherabort(e) {
      this.$emit("refresherabort", e);
    }
  }
});
const _style_0 = { "up-list": { "": { "flexDirection": "column" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    class: "up-list",
    direction: "vertical",
    "custom-nested-scroll": _ctx.customNestedScroll,
    "scroll-into-view": _ctx.scrollIntoView,
    style: normalizeStyle([$options.listStyle]),
    "scroll-y": _ctx.scrollable,
    "scroll-top": parseFloat(_ctx.scrollTop.toString()),
    "lower-threshold": parseFloat(_ctx.lowerThreshold.toString()),
    "upper-threshold": parseFloat(_ctx.upperThreshold.toString()),
    "show-scrollbar": _ctx.showScrollbar,
    "scroll-with-animation": _ctx.scrollWithAnimation,
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.onScroll && $options.onScroll(...args)),
    onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.scrolltolower && $options.scrolltolower(...args)),
    onScrolltoupper: _cache[2] || (_cache[2] = (...args) => $options.scrolltoupper && $options.scrolltoupper(...args)),
    "refresher-enabled": _ctx.refresherEnabled,
    "refresher-threshold": _ctx.refresherThreshold,
    "refresher-default-style": _ctx.refresherDefaultStyle,
    "refresher-background": _ctx.refresherBackground,
    "refresher-triggered": _ctx.refresherTriggered,
    onRefresherpulling: _cache[3] || (_cache[3] = (...args) => $options.refresherpulling && $options.refresherpulling(...args)),
    onRefresherrefresh: _cache[4] || (_cache[4] = (...args) => $options.refresherrefresh && $options.refresherrefresh(...args)),
    onRefresherrestore: _cache[5] || (_cache[5] = (...args) => $options.refresherrestore && $options.refresherrestore(...args)),
    onRefresherabort: _cache[6] || (_cache[6] = (...args) => $options.refresherabort && $options.refresherabort(...args))
  }, [
    createElementVNode("view", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 44, ["custom-nested-scroll", "scroll-into-view", "scroll-y", "scroll-top", "lower-threshold", "upper-threshold", "show-scrollbar", "scroll-with-animation", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-list/up-list.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-list.js.map
