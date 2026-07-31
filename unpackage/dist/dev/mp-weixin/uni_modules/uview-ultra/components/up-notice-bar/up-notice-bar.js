"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNoticeBar_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-notice-bar",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNoticeBar_props.propsNoticeBar],
  data() {
    return {
      show: true
    };
  },
  emits: ["click", "close"],
  methods: {
    addStyle(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    // 点击通告栏
    click(index) {
      this.$emit("click", index);
      if (this.url != "" && this.linkType != "") {
        this.openPage();
      }
    },
    // 点击关闭按钮
    close() {
      this.show = false;
      this.$emit("close");
    }
  }
});
if (!Array) {
  const _easycom_up_column_notice2 = common_vendor.resolveComponent("up-column-notice");
  const _easycom_up_row_notice2 = common_vendor.resolveComponent("up-row-notice");
  (_easycom_up_column_notice2 + _easycom_up_row_notice2)();
}
const _easycom_up_column_notice = () => "../up-column-notice/up-column-notice.js";
const _easycom_up_row_notice = () => "../up-row-notice/up-row-notice.js";
if (!Math) {
  (_easycom_up_column_notice + _easycom_up_row_notice)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.show
  }, $data.show ? common_vendor.e({
    b: _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step
  }, _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step ? {
    c: common_vendor.o($options.close, "f3"),
    d: common_vendor.o($options.click, "c5"),
    e: common_vendor.p({
      color: _ctx.color,
      bgColor: _ctx.bgColor,
      text: _ctx.text,
      mode: _ctx.mode,
      step: _ctx.step,
      icon: _ctx.icon,
      ["disable-touch"]: _ctx.disableTouch,
      fontSize: _ctx.fontSize,
      duration: _ctx.duration,
      class: "data-v-144649f6"
    })
  } : {
    f: common_vendor.o($options.close, "83"),
    g: common_vendor.o($options.click, "71"),
    h: common_vendor.p({
      color: _ctx.color,
      bgColor: _ctx.bgColor,
      text: _ctx.text,
      mode: _ctx.mode,
      fontSize: _ctx.fontSize,
      speed: _ctx.speed,
      url: _ctx.url,
      linkType: _ctx.linkType,
      icon: _ctx.icon,
      class: "data-v-144649f6"
    })
  }, {
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    j: common_vendor.s({
      backgroundColor: _ctx.bgColor
    }),
    k: common_vendor.s($options.addStyle(_ctx.customStyle)),
    l: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-144649f6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js.map
