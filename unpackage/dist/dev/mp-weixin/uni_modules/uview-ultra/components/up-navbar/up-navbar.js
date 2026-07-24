"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNavbar_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-navbar",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNavbar_props.propsNavbar],
  data() {
    return {
      statusBarHeight: 0,
      placeholderHeight: "0px"
    };
  },
  emits: ["leftClick", "rightClick"],
  created() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.placeholderHeight = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(this.height)) + this.statusBarHeight, "px");
  },
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
    // 点击右侧区域
    rightClick() {
      this.$emit("rightClick");
    }
  }
});
if (!Array) {
  const _easycom_up_status_bar2 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_status_bar2 + _easycom_up_icon2)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.fixed && _ctx.placeholder
  }, _ctx.fixed && _ctx.placeholder ? {
    b: $data.placeholderHeight
  } : {}, {
    c: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {
    d: common_vendor.p({
      bgColor: _ctx.bgColor,
      class: "data-v-61ef0705"
    })
  } : {}, {
    e: _ctx.leftIcon
  }, _ctx.leftIcon ? {
    f: common_vendor.p({
      name: _ctx.leftIcon,
      size: _ctx.leftIconSize,
      color: _ctx.leftIconColor,
      class: "data-v-61ef0705"
    })
  } : {}, {
    g: _ctx.leftText
  }, _ctx.leftText ? {
    h: common_vendor.t(_ctx.leftText),
    i: _ctx.leftIconColor
  } : {}, {
    j: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args), "ed"),
    k: common_vendor.t(_ctx.title),
    l: common_vendor.s({
      width: $options.addUnit(_ctx.titleWidth)
    }),
    m: common_vendor.s($options.addStyle(_ctx.titleStyle)),
    n: _ctx.$slots["right"] != null || _ctx.rightIcon != "" || _ctx.rightText != ""
  }, _ctx.$slots["right"] != null || _ctx.rightIcon != "" || _ctx.rightText != "" ? common_vendor.e({
    o: _ctx.rightIcon
  }, _ctx.rightIcon ? {
    p: common_vendor.p({
      name: _ctx.rightIcon,
      size: "20",
      class: "data-v-61ef0705"
    })
  } : {}, {
    q: _ctx.rightText
  }, _ctx.rightText ? {
    r: common_vendor.t(_ctx.rightText)
  } : {}, {
    s: common_vendor.o((...args) => $options.rightClick && $options.rightClick(...args), "71")
  }) : {}, {
    t: common_vendor.n(_ctx.border ? "up-border-bottom" : ""),
    v: $options.addUnit(_ctx.height),
    w: _ctx.bgColor,
    x: common_vendor.n(_ctx.fixed ? "up-navbar--fixed" : ""),
    y: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    z: common_vendor.n(_ctx.customClass),
    A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    B: `${_ctx.u_s_b_h}px`,
    C: `${_ctx.u_s_a_i_b}px`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-61ef0705"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-navbar/up-navbar.js.map
