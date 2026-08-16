"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_components_riceSwipeActions_index = require("../rice-swipe-actions/index.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
const uni_modules_riceUi_libs_use_useRelation_useParent = require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceSwipeActionsItem_type = require("./type.js");
const touch_wxs_vue_type_wxs_index_0_src_true_name_touch_lang = require("../../../../touch.wxs_vue_type_wxs_index_0_src_true_name_touch_lang.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-swipe-actions-item",
  styleIsolation: "app-and-page"
}, { __name: "rice-swipe-actions-item", props: {
  name: {},
  leftMenu: { default: () => {
    return [];
  } },
  rightMenu: { default: () => {
    return [];
  } },
  iosStyle: { type: Boolean, default: null },
  disabled: { type: Boolean, default: false },
  duration: { default: 300 },
  autoClose: { type: Boolean, default: null },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["open", "close", "click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("swipe-actions-item");
  const slot = common_vendor.useSlots();
  const emit = __emit;
  const swipeActions = common_vendor.inject(uni_modules_riceUi_components_riceSwipeActions_index.swipeActionsInjectKey, null);
  uni_modules_riceUi_libs_use_useRelation_useParent.useParent(uni_modules_riceUi_components_riceSwipeActions_index.swipeActionsName);
  const props = __props;
  const hasLeftAction = common_vendor.computed(() => {
    return props.leftMenu.length > 0 || slot["left"] != null;
  });
  const hasRightAction = common_vendor.computed(() => {
    return props.rightMenu.length > 0 || slot["right"] != null;
  });
  const isDisabled = common_vendor.computed(() => {
    var _a2;
    return props.disabled || ((_a2 = swipeActions === null || swipeActions === void 0 ? null : swipeActions.disabled.value) !== null && _a2 !== void 0 ? _a2 : false);
  });
  const isAutoClose = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.autoClose) !== null && _a2 !== void 0 ? _a2 : swipeActions === null || swipeActions === void 0 ? null : swipeActions.autoClose.value) !== null && _b !== void 0 ? _b : true;
  });
  const isIosStyle = common_vendor.computed(() => {
    var _a2, _b;
    return (_b = (_a2 = props.iosStyle) !== null && _a2 !== void 0 ? _a2 : swipeActions === null || swipeActions === void 0 ? null : swipeActions.iosStyle.value) !== null && _b !== void 0 ? _b : true;
  });
  const state = common_vendor.reactive(new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsState({
    x: 0,
    leftWidth: 0,
    rightWidth: 0,
    opened: false,
    position: "cell"
  }));
  const instance = common_vendor.getCurrentInstance();
  const closeOtherSwipe = () => {
    var _a2;
    (_a2 = swipeActions === null || swipeActions === void 0 ? null : swipeActions.closeOtherSwipe) === null || _a2 === void 0 ? null : _a2.call(swipeActions, instance);
  };
  const emitOpen = () => {
    emit("open", new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsItemOpen({
      name: props.name,
      position: state.position
    }));
  };
  function open(position) {
    if (position != "left" && position != "right")
      return null;
    if (state.opened && position == state.position)
      return null;
    state.position = position;
    state.opened = true;
  }
  const emitClose = () => {
    emit("close", new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsItemClose({
      name: props.name
    }));
  };
  const handleClose = () => {
    state.position = "cell";
    if (state.opened)
      state.opened = false;
  };
  const emitClick = (position, index) => {
    emit("click", new uni_modules_riceUi_components_riceSwipeActionsItem_type.SwipeActionsItemClick({
      name: props.name,
      position,
      index,
      opened: state.opened
    }));
  };
  const clickContent = () => {
    emitClick("cell", -1);
    if (isAutoClose.value && state.opened) {
      handleClose();
    }
  };
  const clickMenu = (position, index) => {
    emitClick(position, index);
    if (isAutoClose.value) {
      handleClose();
    }
  };
  const getMenuStyle = (style = null) => {
    return uni_modules_riceUi_libs_utils_basic.splitCssProperty(style).rectCssProperty;
  };
  const getMenuTextStyle = (style = null) => {
    return uni_modules_riceUi_libs_utils_basic.splitCssProperty(style).textCssProperty;
  };
  const currentPosition = common_vendor.computed(() => {
    return state.position;
  });
  const mpProps = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      duration: props.duration,
      iosStyle: isIosStyle.value,
      disabled: isDisabled.value
    });
  });
  const _emitOpen = (params = null) => {
    state.opened = true;
    state.position = params.position;
    emitOpen();
  };
  const _emitClose = () => {
    state.opened = false;
    emitClose();
  };
  __expose({
    open,
    close: handleClose,
    _closeOtherSwipe: closeOtherSwipe,
    _emitOpen,
    _emitClose
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(hasLeftAction)
    }, common_vendor.unref(hasLeftAction) ? {
      b: common_vendor.f(_ctx.leftMenu, (item, index, i0) => {
        var _a2;
        return common_vendor.e({
          a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon)
        }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon) ? {
          b: "406a424e-0-" + i0,
          c: common_vendor.p({
            name: item.icon,
            size: item.iconSize,
            color: (_a2 = item.style) == null ? void 0 : _a2["color"],
            ["custom-style"]: {
              marginRight: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.text) ? "4px" : "0"
            },
            class: "data-v-406a424e"
          })
        } : {}, {
          d: common_vendor.t(item.text),
          e: common_vendor.s(getMenuTextStyle(item.style)),
          f: index,
          g: common_vendor.s(getMenuStyle(item.style)),
          h: common_vendor.o(($event) => {
            return clickMenu("left", index);
          }, index)
        });
      }),
      c: common_vendor.sei("r0-406a424e", "view", "leftActionRef")
    } : {}, {
      d: common_vendor.o(clickContent, "20"),
      e: common_vendor.unref(hasRightAction)
    }, common_vendor.unref(hasRightAction) ? {
      f: common_vendor.f(_ctx.rightMenu, (item, index, i0) => {
        var _a2;
        return common_vendor.e({
          a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon)
        }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.icon) ? {
          b: "406a424e-1-" + i0,
          c: common_vendor.p({
            name: item.icon,
            size: item.iconSize,
            color: (_a2 = item.style) == null ? void 0 : _a2["color"],
            ["custom-style"]: {
              marginRight: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(item.text) ? "4px" : "0"
            },
            class: "data-v-406a424e"
          })
        } : {}, {
          d: common_vendor.t(item.text),
          e: common_vendor.s(getMenuTextStyle(item.style)),
          f: index,
          g: common_vendor.s(getMenuStyle(item.style)),
          h: common_vendor.o(($event) => {
            return clickMenu("right", index);
          }, index)
        });
      }),
      g: common_vendor.sei("r1-406a424e", "view", "rightActionRef")
    } : {}, {
      h: common_vendor.unref(mpProps),
      i: common_vendor.unref(state).opened,
      j: common_vendor.unref(currentPosition),
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.n(common_vendor.unref(ns).theme()),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      n: common_vendor.s(_ctx.customStyle),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const block1 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("_closeOtherSwipe", "_emitOpen", "_emitClose");
};
if (typeof touch_wxs_vue_type_wxs_index_0_src_true_name_touch_lang.block0 === "function")
  touch_wxs_vue_type_wxs_index_0_src_true_name_touch_lang.block0(_sfc_main);
if (typeof block1 === "function")
  block1(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-406a424e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-swipe-actions-item/rice-swipe-actions-item.js.map
