"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-toolbar"
}, { __name: "up-toolbar", props: {
  show: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  cancelColor: {
    type: String,
    default: "#909193"
  },
  confirmColor: {
    type: String,
    default: "#3c9cff"
  },
  title: {
    type: String,
    default: ""
  },
  rightSlot: {
    type: Boolean,
    default: false
  }
}, emits: ["confirm", "cancel"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const elCancelText = common_vendor.computed(() => {
    if (props.cancelText == "取消" || props.cancelText == "") {
      return uni_modules_uviewUltra_libs_i18n_index.t("up_common_cancel", new common_vendor.UTSJSONObject({}));
    }
    return props.cancelText;
  });
  const elConfirmText = common_vendor.computed(() => {
    if (props.confirmText == "确认" || props.confirmText == "确定" || props.confirmText == "") {
      return uni_modules_uviewUltra_libs_i18n_index.t("up_common_confirm", new common_vendor.UTSJSONObject({}));
    }
    return props.confirmText;
  });
  const cancelStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    if (props.cancelColor != "") {
      style["color"] = props.cancelColor;
    }
    return style;
  });
  const confirmStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    if (props.confirmColor != "" && props.confirmColor != "#3c9cff") {
      style["color"] = props.confirmColor;
    }
    return style;
  });
  function noop() {
  }
  function cancel() {
    emit("cancel");
  }
  function confirm() {
    emit("confirm");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show
    }, __props.show ? common_vendor.e({
      b: common_vendor.t(elCancelText.value),
      c: common_vendor.o(cancel, "62"),
      d: common_vendor.s(cancelStyle.value),
      e: __props.title != ""
    }, __props.title != "" ? {
      f: common_vendor.t(__props.title)
    } : {}, {
      g: !__props.rightSlot
    }, !__props.rightSlot ? {
      h: common_vendor.t(elConfirmText.value),
      i: common_vendor.o(confirm, "4b"),
      j: common_vendor.s(confirmStyle.value)
    } : {}, {
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.o(noop, "a0"),
      m: `${_ctx.u_s_b_h}px`,
      n: `${_ctx.u_s_a_i_b}px`,
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc1fa64b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js.map
