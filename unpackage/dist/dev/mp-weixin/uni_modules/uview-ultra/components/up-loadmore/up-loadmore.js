"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upLoadmore_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-loadmore",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upLoadmore_props.propsLoadmore],
  data() {
    return {
      // 粗点
      dotText: "●"
    };
  },
  computed: {
    // 加载的文字显示的样式
    loadTextStyle() {
      return new common_vendor.UTSJSONObject({
        color: this.color,
        fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(this.fontSize),
        // lineHeight: addUnit(this.fontSize),
        backgroundColor: this.bgColor
      });
    },
    // 显示的提示文字
    showText() {
      let text = "";
      if (this.status == "loadmore")
        text = this.loadmoreText;
      else if (this.status == "loading")
        text = this.loadingText;
      else if (this.status == "nomore" && this.isDot)
        text = this.dotText;
      else
        text = this.nomoreText;
      return text;
    }
  },
  emits: ["loadmore"],
  methods: {
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    loadMore() {
      if (this.status == "loadmore")
        this.$emit("loadmore");
    }
  }
});
if (!Array) {
  const _easycom_up_line2 = common_vendor.resolveComponent("up-line");
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  (_easycom_up_line2 + _easycom_up_loading_icon2)();
}
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  (_easycom_up_line + _easycom_up_loading_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.line
  }, _ctx.line ? {
    b: common_vendor.p({
      length: "140rpx",
      color: _ctx.lineColor,
      hairline: false,
      dashed: _ctx.dashed,
      class: "data-v-2c2f8d2e"
    })
  } : {}, {
    c: _ctx.status === "loading" && _ctx.icon
  }, _ctx.status === "loading" && _ctx.icon ? {
    d: common_vendor.p({
      color: _ctx.iconColor,
      size: _ctx.iconSize,
      mode: _ctx.loadingIcon,
      class: "data-v-2c2f8d2e"
    })
  } : {}, {
    e: common_vendor.t($options.showText),
    f: common_vendor.s($options.loadTextStyle),
    g: common_vendor.n(_ctx.status == "nomore" && _ctx.isDot == true ? "up-loadmore__content__dot-text" : "up-loadmore__content__text"),
    h: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args), "9b"),
    i: common_vendor.n(_ctx.status == "loadmore" || _ctx.status == "nomore" ? "up-more" : ""),
    j: _ctx.line
  }, _ctx.line ? {
    k: common_vendor.p({
      length: "140rpx",
      color: _ctx.lineColor,
      hairline: false,
      dashed: _ctx.dashed,
      class: "data-v-2c2f8d2e"
    })
  } : {}, {
    l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    m: common_vendor.s($options.addStyle(_ctx.customStyle)),
    n: common_vendor.s({
      backgroundColor: _ctx.bgColor,
      marginBottom: $options.addUnit(_ctx.marginBottom),
      marginTop: $options.addUnit(_ctx.marginTop),
      height: $options.addUnit(_ctx.height)
    }),
    o: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c2f8d2e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js.map
