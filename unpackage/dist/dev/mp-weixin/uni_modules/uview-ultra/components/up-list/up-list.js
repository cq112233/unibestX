"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upList_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-list",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upList_props.propsList],
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
      sys: uni_modules_uviewUltra_libs_function_index.getWindowInfo()
    };
  },
  computed: {
    listStyle() {
      const style = new common_vendor.UTSJSONObject({});
      if (this.width != 0)
        style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.width);
      if (this.height != 0)
        style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.height);
      if (style["height"] == null)
        style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.sys.windowHeight, "px");
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
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
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
        this.$emit("scrolltolower");
        this.$emit("scroll-to-lower");
      });
    },
    // 滚动到底部时触发，非nvue有效
    scrolltoupper(e) {
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei(common_vendor.gei(_ctx, ""), "scroll-view"),
    b: _ctx.customNestedScroll,
    c: _ctx.scrollIntoView,
    d: common_vendor.s($options.listStyle),
    e: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    f: _ctx.scrollable,
    g: parseFloat(_ctx.scrollTop.toString()),
    h: parseFloat(_ctx.lowerThreshold.toString()),
    i: parseFloat(_ctx.upperThreshold.toString()),
    j: _ctx.showScrollbar,
    k: _ctx.scrollWithAnimation,
    l: common_vendor.o((...args) => $options.onScroll && $options.onScroll(...args), "ba"),
    m: common_vendor.o((...args) => $options.scrolltolower && $options.scrolltolower(...args), "6e"),
    n: common_vendor.o((...args) => $options.scrolltoupper && $options.scrolltoupper(...args), "64"),
    o: _ctx.refresherEnabled,
    p: _ctx.refresherThreshold,
    q: _ctx.refresherDefaultStyle,
    r: _ctx.refresherBackground,
    s: _ctx.refresherTriggered,
    t: common_vendor.o((...args) => $options.refresherpulling && $options.refresherpulling(...args), "e2"),
    v: common_vendor.o((...args) => $options.refresherrefresh && $options.refresherrefresh(...args), "3c"),
    w: common_vendor.o((...args) => $options.refresherrestore && $options.refresherrestore(...args), "18"),
    x: common_vendor.o((...args) => $options.refresherabort && $options.refresherabort(...args), "29"),
    y: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5d1e7a7c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-list/up-list.js.map
