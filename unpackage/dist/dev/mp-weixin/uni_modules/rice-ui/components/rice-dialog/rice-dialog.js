"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("./api.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  (_easycom_rice_overlay_1 + _easycom_rice_button_1 + _easycom_rice_loading_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_button = () => "../rice-button/rice-button.js";
const _easycom_rice_loading = () => "../rice-loading/rice-loading.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_button + _easycom_rice_loading)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-dialog",
  styleIsolation: "app-and-page"
}, { __name: "rice-dialog", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  title: {},
  width: {},
  message: {},
  messageAlign: { default: "center" },
  buttonTheme: { default: "default" },
  buttonLayout: { default: "row" },
  showConfirmButton: { type: Boolean, default: true },
  confirmButtonText: { default: "确认" },
  confirmButtonColor: {},
  confirmButtonDisabled: { type: Boolean, default: false },
  showCancelButton: { type: Boolean, default: true },
  cancelButtonText: { default: "取消" },
  cancelButtonColor: {},
  cancelButtonDisabled: { type: Boolean, default: false },
  duration: { default: 250 },
  overlay: { type: Boolean, default: true },
  overlayBgColor: { default: "rgba(0,0,0,.6)" },
  closeOnClickOverlay: { type: Boolean, default: false },
  beforeClose: {},
  zIndex: { default: 999 },
  bgColor: {},
  marginTop: {},
  useDialogPage: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  confirm: {},
  cancel: {},
  clickOverlay: {},
  open: {},
  close: {},
  opened: {},
  closed: {},
  ready: {},
  fail: {}
}), new common_vendor.UTSJSONObject({
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["confirm", "cancel", "open", "close", "closed", "opened", "clickOverlay"], ["update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("dialog");
  const slots = common_vendor.useSlots();
  const emit = __emit;
  const show = common_vendor.useModel(__props, "show");
  const props = __props;
  const hasTitle = common_vendor.computed(() => {
    return slots["title"] != null || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.title);
  });
  let openTimer = null;
  let openedTimer = null;
  let closeTimer = null;
  const handleOpenTimer = () => {
    if (openTimer != null)
      clearTimeout(openTimer);
    if (openedTimer != null)
      clearTimeout(openedTimer);
  };
  const handleCloseTimer = () => {
    if (closeTimer != null)
      clearTimeout(closeTimer);
  };
  const realShow = common_vendor.ref(false);
  const dialogRef = common_vendor.shallowRef(null);
  const open = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (realShow.value)
        return Promise.resolve(null);
      realShow.value = true;
      yield common_vendor.nextTick$1();
      handleOpenTimer();
      openTimer = setTimeout(() => {
        var _a2, _b, _c;
        (_a2 = dialogRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", props.duration + "ms");
        (_b = dialogRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", "1");
        (_c = dialogRef.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(-50%, -50%) scale(1)");
        openedTimer = setTimeout(() => {
          emit("opened");
        }, props.duration);
      }, 30);
    });
  };
  const showOverlay = common_vendor.computed(() => {
    return props.overlay;
  });
  const close = () => {
    var _a2, _b;
    if (!realShow.value)
      return null;
    (_a2 = dialogRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", "0");
    (_b = dialogRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", `translate(-50%, -50%) scale(0.85)`);
    handleCloseTimer();
    closeTimer = setTimeout(() => {
      realShow.value = false;
      emit("closed");
    }, props.duration);
  };
  const confirmLoading = common_vendor.ref(false);
  const confirm = () => {
    if (props.confirmButtonDisabled || confirmLoading.value)
      return null;
    emit("confirm");
    if (typeof props.beforeClose != "function") {
      show.value = false;
      return null;
    }
    confirmLoading.value = true;
    uni_modules_riceUi_libs_utils_basic.callInterceptor(props.beforeClose, new uni_modules_riceUi_libs_utils_basic.InterceptorOption({
      args: null,
      canceled: null,
      error: null,
      undone: null,
      done() {
        show.value = false;
      },
      complete() {
        confirmLoading.value = false;
      }
    }));
  };
  const cancel = () => {
    if (props.cancelButtonDisabled)
      return null;
    show.value = false;
    emit("cancel");
  };
  const overlayClick = () => {
    if (props.closeOnClickOverlay) {
      show.value = false;
    }
    emit("clickOverlay");
  };
  common_vendor.watch(show, (newVal) => {
    if (newVal && !realShow.value) {
      open();
      emit("open");
    }
    if (!newVal && realShow.value) {
      close();
      emit("close");
    }
  }, {
    immediate: true
  });
  const cancelButtonHover = common_vendor.computed(() => {
    return props.cancelButtonDisabled ? "none" : `rice-dialog__button--${uni_modules_riceUi_libs_store_useConfig.isDark.value ? "hover--dark" : "hover"}`;
  });
  const confirmButtonHover = common_vendor.computed(() => {
    return props.confirmButtonDisabled || confirmLoading.value ? "none" : `rice-dialog__button--${uni_modules_riceUi_libs_store_useConfig.isDark.value ? "hover--dark" : "hover"}`;
  });
  const dialogStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("z-index", props.zIndex);
    if (props.width != null) {
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    }
    if (props.marginTop != null) {
      css.set("margin-top", uni_modules_riceUi_libs_utils_basic.addUnit(props.marginTop));
    }
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor)) {
      css.set("background-color", props.bgColor);
    }
    return css;
  });
  const cancelTextStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.cancelButtonColor)) {
      css.set("color", props.cancelButtonColor);
    }
    return css;
  });
  const confirmTextStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.confirmButtonColor)) {
      css.set("color", props.confirmButtonColor);
    }
    return css;
  });
  const dialogClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme()
    ];
  });
  const contentClass = common_vendor.computed(() => {
    return [
      ns.e("content"),
      ns.is("__content--has-title", hasTitle.value)
    ];
  });
  const messageTextClass = common_vendor.computed(() => {
    return [
      ns.e("message__text"),
      ns.e(`message__${props.messageAlign}`)
    ];
  });
  const footerClass = common_vendor.computed(() => {
    const hasSlot = slots["footer"] != null;
    const isDefaultTheme = props.buttonTheme == "default";
    return [
      ns.e("footer"),
      ns.is("__footer--border", isDefaultTheme && !hasSlot),
      ns.is("__footer--vertical", props.buttonLayout == "col" && !isDefaultTheme && !hasSlot),
      ns.is("__footer--btn", !isDefaultTheme && !hasSlot)
    ];
  });
  const getButtonClass = (type) => {
    const base = [
      ns.e("button"),
      ns.is(`__button--disabled`, type == "cancel" ? props.cancelButtonDisabled : props.confirmButtonDisabled)
    ];
    if (type == "cancel" && props.showConfirmButton) {
      base.push(ns.e("button--border"));
    }
    return base;
  };
  const cancelButtonStyle = common_vendor.computed(() => {
    const isVertical = props.buttonLayout == "col";
    const css = /* @__PURE__ */ new Map();
    if (props.buttonLayout == "row") {
      css.set("flex", 1);
    }
    css.set("marginRight", props.showConfirmButton && !isVertical ? "12px" : "0px");
    css.set("marginTop", props.showConfirmButton && isVertical ? "12px" : "0px");
    return css;
  });
  const confirmButtonStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.buttonLayout == "row") {
      css.set("flex", 1);
    }
    return css;
  });
  common_vendor.onUnmounted(() => {
    handleOpenTimer();
    handleCloseTimer();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(showOverlay)
    }, common_vendor.unref(showOverlay) ? {
      b: common_vendor.o(overlayClick, "9b"),
      c: common_vendor.p({
        show: show.value,
        duration: _ctx.duration,
        ["close-on-click-overlay"]: false,
        ["bg-color"]: _ctx.overlayBgColor,
        ["z-index"]: _ctx.zIndex - 1,
        class: "data-v-13572bed"
      })
    } : {}, {
      d: common_vendor.unref(realShow)
    }, common_vendor.unref(realShow) ? common_vendor.e({
      e: common_vendor.unref(hasTitle)
    }, common_vendor.unref(hasTitle) ? {
      f: common_vendor.t(_ctx.title)
    } : {}, {
      g: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.message)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.message) ? {
      h: common_vendor.t(_ctx.message),
      i: common_vendor.n(common_vendor.unref(messageTextClass))
    } : {}, {
      j: common_vendor.n(common_vendor.unref(contentClass)),
      k: _ctx.showCancelButton
    }, _ctx.showCancelButton ? common_vendor.e({
      l: _ctx.buttonTheme != "default"
    }, _ctx.buttonTheme != "default" ? {
      m: common_vendor.s(common_vendor.unref(cancelButtonStyle)),
      n: common_vendor.o(cancel, "08"),
      o: common_vendor.p({
        type: "primary",
        ["plain-fill"]: true,
        text: _ctx.cancelButtonText,
        shape: _ctx.buttonTheme == "round" ? "round" : "",
        color: _ctx.cancelButtonColor,
        disabled: _ctx.cancelButtonDisabled,
        class: "data-v-13572bed",
        style: common_vendor.normalizeStyle(common_vendor.unref(cancelButtonStyle))
      })
    } : {
      p: common_vendor.t(_ctx.cancelButtonText),
      q: common_vendor.s(common_vendor.unref(cancelTextStyle)),
      r: common_vendor.n(getButtonClass("cancel")),
      s: common_vendor.unref(cancelButtonHover),
      t: common_vendor.o(cancel, "26")
    }) : {}, {
      v: _ctx.showConfirmButton
    }, _ctx.showConfirmButton ? common_vendor.e({
      w: _ctx.buttonTheme != "default"
    }, _ctx.buttonTheme != "default" ? {
      x: common_vendor.s(common_vendor.unref(confirmButtonStyle)),
      y: common_vendor.o(confirm, "4c"),
      z: common_vendor.p({
        type: "primary",
        text: _ctx.confirmButtonText,
        color: _ctx.confirmButtonColor,
        shape: _ctx.buttonTheme == "round" ? "round" : "",
        disabled: _ctx.confirmButtonDisabled,
        loading: common_vendor.unref(confirmLoading),
        class: "data-v-13572bed",
        style: common_vendor.normalizeStyle(common_vendor.unref(confirmButtonStyle))
      })
    } : common_vendor.e({
      A: !common_vendor.unref(confirmLoading)
    }, !common_vendor.unref(confirmLoading) ? {
      B: common_vendor.t(_ctx.confirmButtonText),
      C: common_vendor.s(common_vendor.unref(confirmTextStyle))
    } : {
      D: common_vendor.p({
        color: _ctx.confirmButtonColor,
        class: "data-v-13572bed"
      })
    }, {
      E: common_vendor.n(getButtonClass("confirm")),
      F: common_vendor.unref(confirmButtonHover),
      G: common_vendor.o(confirm, "f9")
    })) : {}, {
      H: common_vendor.n(common_vendor.unref(footerClass)),
      I: common_vendor.sei("r0-13572bed", "view", dialogRef, {
        "k": "dialogRef"
      }),
      J: common_vendor.n(common_vendor.unref(dialogClass)),
      K: common_vendor.s(common_vendor.unref(dialogStyle)),
      L: common_vendor.s(_ctx.customStyle),
      M: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-13572bed"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-dialog/rice-dialog.js.map
