"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
if (!Array) {
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_line_1 + _easycom_up_loading_icon_1 + _easycom_up_popup_1)();
}
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_line + _easycom_up_loading_icon + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-modal"
}, { __name: "up-modal", props: {
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: false
  },
  confirmColor: {
    type: String,
    default: "#2979ff"
  },
  cancelColor: {
    type: String,
    default: "#606266"
  },
  buttonReverse: {
    type: Boolean,
    default: false
  },
  zoom: {
    type: Boolean,
    default: true
  },
  asyncClose: {
    type: Boolean,
    default: false
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  negativeTop: {
    type: [String, Number],
    default: 0
  },
  width: {
    type: [String, Number],
    default: "650rpx"
  },
  confirmButtonShape: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 400
  },
  contentTextAlign: {
    type: String,
    default: "left"
  },
  asyncCloseTip: {
    type: String,
    default: ""
  },
  asyncCancelClose: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customClass: {
    type: String,
    default: ""
  }
}, emits: ["confirm", "cancel", "close", "update:show", "cancelOnAsync"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const loading = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.show;
  }, (n) => {
    if (n && loading.value) {
      loading.value = false;
    }
  });
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
  const popupCustomStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      borderRadius: "6px",
      overflow: "hidden",
      marginTop: `-${uni_modules_uviewUltra_libs_function_index.addUnit(props.negativeTop)}`
    });
  });
  const modalStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.width)
    });
  });
  const buttonGroupStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      flexDirection: props.buttonReverse ? "row-reverse" : "row"
    });
  });
  const cancelTextStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      color: props.cancelColor
    });
  });
  const confirmTextStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      color: props.confirmColor
    });
  });
  const contentTextStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      textAlign: props.contentTextAlign
    });
  });
  const contentStyleCpu = common_vendor.computed(() => {
    var _a2;
    const style = (_a2 = props.contentStyle) !== null && _a2 !== void 0 ? _a2 : new common_vendor.UTSJSONObject({});
    style["paddingTop"] = `${props.title != "" ? 12 : 25}px`;
    return style;
  });
  function confirmHandler() {
    if (props.asyncClose) {
      loading.value = true;
    } else {
      emit("update:show", false);
    }
    emit("confirm");
  }
  function cancelHandler() {
    if (props.asyncClose && loading.value) {
      if (props.asyncCloseTip != "") {
        common_vendor.index.showToast({
          title: props.asyncCloseTip,
          icon: "none"
        });
      }
      emit("cancelOnAsync");
    } else {
      if (!props.asyncCancelClose) {
        emit("update:show", false);
      }
    }
    emit("cancel");
  }
  function clickHandler() {
    if (props.closeOnClickOverlay) {
      emit("update:show", false);
    }
    emit("close");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.title != ""
    }, __props.title != "" ? {
      b: common_vendor.t(__props.title)
    } : {}, {
      c: common_vendor.t(__props.content),
      d: common_vendor.s(contentTextStyle.value),
      e: common_vendor.s(contentStyleCpu.value),
      f: _ctx.$slots["confirmButton"] != null
    }, _ctx.$slots["confirmButton"] != null ? {} : common_vendor.e({
      g: common_vendor.p({
        class: "data-v-767ef2b6"
      }),
      h: __props.showCancelButton
    }, __props.showCancelButton ? {
      i: common_vendor.t(elCancelText.value),
      j: common_vendor.s(cancelTextStyle.value),
      k: common_vendor.n(__props.showCancelButton && !__props.showConfirmButton ? "up-modal__button-group__wrapper--only-cancel" : ""),
      l: common_vendor.o(cancelHandler, "9d")
    } : {}, {
      m: __props.showConfirmButton && __props.showCancelButton
    }, __props.showConfirmButton && __props.showCancelButton ? {
      n: common_vendor.p({
        direction: "column",
        class: "data-v-767ef2b6"
      })
    } : {}, {
      o: __props.showConfirmButton
    }, __props.showConfirmButton ? common_vendor.e({
      p: loading.value
    }, loading.value ? {
      q: common_vendor.p({
        class: "data-v-767ef2b6"
      })
    } : {
      r: common_vendor.t(elConfirmText.value),
      s: common_vendor.s(confirmTextStyle.value)
    }, {
      t: common_vendor.n(!__props.showCancelButton && __props.showConfirmButton ? "up-modal__button-group__wrapper--only-confirm" : ""),
      v: common_vendor.o(confirmHandler, "23")
    }) : {}, {
      w: common_vendor.s(buttonGroupStyle.value)
    }), {
      x: common_vendor.s(modalStyle.value),
      y: common_vendor.gei(_ctx, ""),
      z: common_vendor.n(__props.customClass),
      A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      B: common_vendor.o(clickHandler, "23"),
      C: common_vendor.p({
        mode: "center",
        zoom: __props.zoom,
        show: __props.show,
        customStyle: popupCustomStyle.value,
        closeOnClickOverlay: __props.closeOnClickOverlay,
        safeAreaInsetBottom: false,
        duration: __props.duration,
        id: common_vendor.gei(_ctx, ""),
        class: common_vendor.normalizeClass(["data-v-767ef2b6", [__props.customClass]])
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-767ef2b6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-modal/up-modal.js.map
