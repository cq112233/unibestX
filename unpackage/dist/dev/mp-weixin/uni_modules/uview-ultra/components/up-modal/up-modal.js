"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upModal_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-modal",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upModal_props.propsModal],
  data() {
    return {
      loading: false
    };
  },
  watch: {
    show(n) {
      if (n && this.loading)
        this.loading = false;
    }
  },
  emits: ["confirm", "cancel", "close", "update:show", "cancelOnAsync"],
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
    contentStyleCpu() {
      let style = this.contentStyle;
      style["paddingTop"] = `${this.title != "" ? 12 : 25}px`;
      return style;
    }
  },
  methods: {
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
    },
    // 点击确定按钮
    confirmHandler() {
      if (this.asyncClose) {
        this.loading = true;
      } else {
        this.$emit("update:show", false);
      }
      this.$emit("confirm");
    },
    // 点击取消按钮
    cancelHandler() {
      if (this.asyncClose && this.loading) {
        if (this.asyncCloseTip != "") {
          common_vendor.index.showToast({
            title: this.asyncCloseTip,
            icon: "none"
          });
        }
        this.$emit("cancelOnAsync");
      } else {
        if (!this.asyncCancelClose) {
          this.$emit("update:show", false);
        }
      }
      this.$emit("cancel");
    },
    // 点击遮罩
    // 从原理上来说，modal的遮罩点击，并不是真的点击到了遮罩
    // 因为modal依赖于popup的中部弹窗类型，中部弹窗比较特殊，虽有然遮罩，但是为了让弹窗内容能flex居中
    // 多了一个透明的遮罩，此透明的遮罩会覆盖在灰色的遮罩上，所以实际上是点击不到灰色遮罩的，popup内部在
    // 透明遮罩的子元素做了.stop处理，所以点击内容区，也不会导致误触发
    clickHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    }
  }
});
if (!Array) {
  const _easycom_up_line2 = common_vendor.resolveComponent("up-line");
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_line2 + _easycom_up_loading_icon2 + _easycom_up_popup2)();
}
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_line + _easycom_up_loading_icon + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.title
  }, _ctx.title ? {
    b: common_vendor.t(_ctx.title)
  } : {}, {
    c: common_vendor.t(_ctx.content),
    d: _ctx.contentTextAlign,
    e: common_vendor.s($options.contentStyleCpu),
    f: _ctx.$slots["confirmButton"]
  }, _ctx.$slots["confirmButton"] ? {} : common_vendor.e({
    g: common_vendor.p({
      class: "data-v-767ef2b6"
    }),
    h: _ctx.showCancelButton
  }, _ctx.showCancelButton ? {
    i: common_vendor.t($options.elCancelText),
    j: _ctx.cancelColor,
    k: common_vendor.n(_ctx.showCancelButton && !_ctx.showConfirmButton ? "up-modal__button-group__wrapper--only-cancel" : ""),
    l: common_vendor.o((...args) => $options.cancelHandler && $options.cancelHandler(...args), "5a")
  } : {}, {
    m: _ctx.showConfirmButton && _ctx.showCancelButton
  }, _ctx.showConfirmButton && _ctx.showCancelButton ? {
    n: common_vendor.p({
      direction: "column",
      class: "data-v-767ef2b6"
    })
  } : {}, {
    o: _ctx.showConfirmButton
  }, _ctx.showConfirmButton ? common_vendor.e({
    p: $data.loading
  }, $data.loading ? {
    q: common_vendor.p({
      class: "data-v-767ef2b6"
    })
  } : {
    r: common_vendor.t($options.elConfirmText),
    s: _ctx.confirmColor
  }, {
    t: common_vendor.n(!_ctx.showCancelButton && _ctx.showConfirmButton ? "up-modal__button-group__wrapper--only-confirm" : ""),
    v: common_vendor.o((...args) => $options.confirmHandler && $options.confirmHandler(...args), "46")
  }) : {}, {
    w: _ctx.buttonReverse ? "row-reverse" : "row"
  }), {
    x: $options.addUnit(_ctx.width),
    y: common_vendor.gei(_ctx, ""),
    z: common_vendor.n(_ctx.customClass),
    A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    B: common_vendor.o($options.clickHandler, "a6"),
    C: common_vendor.p({
      mode: "center",
      zoom: _ctx.zoom,
      show: _ctx.show,
      customStyle: {
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${$options.addUnit(_ctx.negativeTop)}`
      },
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      safeAreaInsetBottom: false,
      duration: _ctx.duration,
      id: common_vendor.gei(_ctx, ""),
      class: common_vendor.normalizeClass(["data-v-767ef2b6", [_ctx.customClass]])
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-767ef2b6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-modal/up-modal.js.map
