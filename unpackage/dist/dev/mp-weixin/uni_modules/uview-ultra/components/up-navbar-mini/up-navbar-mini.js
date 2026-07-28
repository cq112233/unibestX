"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNavbarMini_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-navbar-mini",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNavbarMini_props.propsNavbarMini],
  data() {
    return {};
  },
  computed: {
    contentStyle() {
      return new UTSJSONObject({
        height: uni_modules_uviewUltra_libs_function_index.addUnit(this.height),
        backgroundColor: this.bgColor
      });
    }
  },
  emits: ["leftClick", "homeClick"],
  methods: {
    addStyle(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
    },
    getPx(val = null) {
      return uni_modules_uviewUltra_libs_function_index.getPx(val);
    },
    // 点击左侧区域
    leftClick() {
      this.$emit("leftClick");
      if (this.autoBack) {
        common_vendor.index.navigateBack();
      }
    },
    homeClick() {
      if (this.homeUrl != "") {
        common_vendor.index.reLaunch({ url: this.homeUrl });
      }
    }
  }
});
if (!Array) {
  const _easycom_up_status_bar2 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line2 = common_vendor.resolveComponent("up-line");
  (_easycom_up_status_bar2 + _easycom_up_icon2 + _easycom_up_line2)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon + _easycom_up_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {
    b: common_vendor.p({
      class: "data-v-d5a87088"
    })
  } : {}, {
    c: common_vendor.p({
      name: _ctx.leftIcon,
      size: _ctx.iconSize,
      color: _ctx.iconColor,
      class: "data-v-d5a87088"
    }),
    d: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args), "e5"),
    e: common_vendor.p({
      direction: "col",
      color: "#fff",
      length: "16px",
      class: "data-v-d5a87088"
    }),
    f: common_vendor.p({
      name: "home",
      size: _ctx.iconSize,
      color: _ctx.iconColor,
      class: "data-v-d5a87088"
    }),
    g: common_vendor.o((...args) => $options.homeClick && $options.homeClick(...args), "9c"),
    h: common_vendor.s($options.contentStyle),
    i: common_vendor.n(_ctx.fixed ? "up-navbar-mini--fixed" : ""),
    j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    k: common_vendor.n(_ctx.customClass),
    l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    m: `${_ctx.u_s_b_h}px`,
    n: `${_ctx.u_s_a_i_b}px`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5a87088"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js.map
