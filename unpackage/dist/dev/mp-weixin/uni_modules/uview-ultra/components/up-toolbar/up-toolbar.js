"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upToolbar_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-toolbar",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upToolbar_props.propsToolbar],
  emits: ["confirm", "cancel"],
  computed: {
    elCancelText() {
      if (this.cancelText == "取消" || this.cancelText == "") {
        return uni_modules_uviewUltra_libs_i18n_index.t("up_common_cancel", new UTSJSONObject({}));
      }
      return this.cancelText;
    },
    elConfirmText() {
      if (this.confirmText == "确认" || this.confirmText == "确定" || this.confirmText == "") {
        return uni_modules_uviewUltra_libs_i18n_index.t("up_common_confirm", new UTSJSONObject({}));
      }
      return this.confirmText;
    },
    elConfirmColor() {
      if (this.confirmColor == "#3c9cff") {
        return "";
      }
      return this.confirmColor;
    }
  },
  created() {
  },
  methods: {
    // 点击取消按钮
    cancel() {
      this.$emit("cancel");
    },
    // 点击确定按钮
    confirm() {
      this.$emit("confirm");
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: common_vendor.t($options.elCancelText),
    c: common_vendor.o((...args) => $options.cancel && $options.cancel(...args), "6e"),
    d: _ctx.cancelColor,
    e: _ctx.title
  }, _ctx.title ? {
    f: common_vendor.t(_ctx.title)
  } : {}, {
    g: !_ctx.rightSlot
  }, !_ctx.rightSlot ? {
    h: common_vendor.t($options.elConfirmText),
    i: common_vendor.o((...args) => $options.confirm && $options.confirm(...args), "d9"),
    j: $options.elConfirmColor
  } : {}, {
    k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    l: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args), "a9"),
    m: `${_ctx.u_s_b_h}px`,
    n: `${_ctx.u_s_a_i_b}px`,
    o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc1fa64b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js.map
