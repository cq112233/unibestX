"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("./type.js");
require("./api.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
const uni_modules_riceUi_libs_use_useSafeArea_index = require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_rice_overlay_1 + _easycom_rice_icon_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-action-sheet",
  styleIsolation: "app-and-page"
}, { __name: "rice-action-sheet", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  actions: {},
  title: {},
  showCancel: { type: Boolean, default: true },
  cancelText: { default: "取消" },
  duration: { default: 300 },
  zIndex: { default: 999 },
  opacity: { type: Boolean },
  overlay: { type: Boolean, default: true },
  overlayBgColor: { default: "rgba(0,0,0,.6)" },
  closeOnClickAction: { type: Boolean, default: true },
  closeOnClickOverlay: { type: Boolean, default: true },
  radius: { default: "12px" },
  safeAreaInsetBottom: { type: Boolean, default: true },
  useDialogPage: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  target: {},
  select: {},
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
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["select", "cancel", "open", "close", "opened", "closed", "clickOverlay"], ["update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("action-sheet");
  uni_modules_riceUi_libs_use_useSafeArea_index.useSafeArea();
  const emit = __emit;
  const props = __props;
  const show = common_vendor.useModel(__props, "show");
  const actionsList = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.actions) !== null && _a2 !== void 0 ? _a2 : [];
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
  const actionSheetRef = common_vendor.shallowRef(null);
  const open = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (realShow.value)
        return Promise.resolve(null);
      realShow.value = true;
      yield common_vendor.nextTick$1();
      handleOpenTimer();
      openTimer = setTimeout(() => {
        var _a2, _b, _c;
        (_a2 = actionSheetRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", props.duration + "ms");
        (_b = actionSheetRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", "1");
        (_c = actionSheetRef.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(0px, 0px)");
        openedTimer = setTimeout(() => {
          emit("opened");
        }, props.duration);
      }, 30);
    });
  };
  const handleSelect = (action, index) => {
    if (action.disabled == true)
      return null;
    if (props.closeOnClickAction == true) {
      show.value = false;
    }
    emit("select", action, index);
  };
  const cancel = () => {
    show.value = false;
    emit("cancel");
  };
  const close = () => {
    var _a2, _b;
    if (!realShow.value)
      return null;
    const opacity = props.opacity == true ? "0" : "1";
    (_a2 = actionSheetRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", opacity);
    (_b = actionSheetRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", "translate(0px, 100%)");
    handleCloseTimer();
    closeTimer = setTimeout(() => {
      realShow.value = false;
      emit("closed");
    }, props.duration);
  };
  const overlayClick = () => {
    if (props.closeOnClickOverlay == true) {
      show.value = false;
    }
    emit("clickOverlay");
  };
  const showOverlay = common_vendor.computed(() => {
    return props.overlay;
  });
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
  const getIconColor = (menu) => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(menu.color))
      return menu.color;
    return "inherit";
  };
  const getMenuTextStyle = (menu) => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(menu.color))
      css.set("color", menu.color);
    return css;
  };
  const getMenuTextClass = (menu) => {
    return [
      ns.e("menu__text")
    ];
  };
  const getMenuSubnameClass = (menu) => {
    return [
      ns.e("menu__subname")
    ];
  };
  const actionSheetStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("z-index", props.zIndex);
    css.set("border-top-left-radius", uni_modules_riceUi_libs_utils_basic.addUnit(props.radius));
    css.set("border-top-right-radius", uni_modules_riceUi_libs_utils_basic.addUnit(props.radius));
    if (props.safeAreaInsetBottom) {
      css.set("padding-bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    return css;
  });
  const actionSheetClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("opacity", props.opacity)
    ];
  });
  const getMenuClass = (menu, index) => {
    return [
      ns.e("menu"),
      ns.is("__menu--border", index < actionsList.value.length - 1),
      ns.is(`__menu--disabled`, menu.disabled == true)
    ];
  };
  common_vendor.onUnmounted(() => {
    handleOpenTimer();
    handleCloseTimer();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(showOverlay)
    }, common_vendor.unref(showOverlay) ? {
      b: common_vendor.o(overlayClick, "8f"),
      c: common_vendor.p({
        show: show.value,
        ["z-index"]: _ctx.zIndex - 1,
        ["close-on-click-overlay"]: false,
        duration: _ctx.duration,
        ["bg-color"]: _ctx.overlayBgColor,
        class: "data-v-36d96d8c"
      })
    } : {}, {
      d: common_vendor.unref(realShow)
    }, common_vendor.unref(realShow) ? common_vendor.e({
      e: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(props.title)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(props.title) ? {
      f: common_vendor.t(props.title)
    } : {}, {
      g: common_vendor.f(common_vendor.unref(actionsList), (item, index, i0) => {
        return common_vendor.e({
          a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon)
        }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon) ? {
          b: "36d96d8c-1-" + i0,
          c: common_vendor.p({
            color: getIconColor(item),
            name: item.icon,
            size: item.iconSize,
            ["font-family"]: item.iconFontFamily,
            ["custom-style"]: {
              marginRight: "6px"
            },
            class: "data-v-36d96d8c"
          })
        } : {}, {
          d: common_vendor.t(item.name),
          e: common_vendor.n(getMenuTextClass()),
          f: common_vendor.s(getMenuTextStyle(item)),
          g: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.subname)
        }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.subname) ? {
          h: common_vendor.t(item.subname),
          i: common_vendor.n(getMenuSubnameClass())
        } : {}, {
          j: `${item.name}${index}`,
          k: common_vendor.n(getMenuClass(item, index)),
          l: item.disabled == true ? "none" : "rice-action-sheet--hover",
          m: common_vendor.o(($event) => {
            return handleSelect(item, index);
          }, `${item.name}${index}`)
        });
      }),
      h: _ctx.showCancel
    }, _ctx.showCancel ? {} : {}, {
      i: _ctx.showCancel
    }, _ctx.showCancel ? {
      j: common_vendor.t(_ctx.cancelText),
      k: common_vendor.o(cancel, "20")
    } : {}, {
      l: common_vendor.sei("r0-36d96d8c", "view", actionSheetRef, {
        "k": "actionSheetRef"
      }),
      m: common_vendor.n(common_vendor.unref(actionSheetClass)),
      n: common_vendor.s(common_vendor.unref(actionSheetStyle)),
      o: common_vendor.s(_ctx.customStyle),
      p: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-36d96d8c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-action-sheet/rice-action-sheet.js.map
