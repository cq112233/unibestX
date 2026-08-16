"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
const uni_modules_riceUi_libs_use_useTouch_index = require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceFloatFab_type = require("./type.js");
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
  name: "rice-float-fab",
  styleIsolation: "app-and-page"
}, { __name: "rice-float-fab", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  axis: { default: "xy" },
  adsorption: {},
  gap: { default: "24px" },
  gapTop: {},
  gapBottom: {},
  gapLeft: {},
  gapRight: {},
  overGap: { type: Boolean, default: true },
  defaultPosition: { default: "bottom-right" },
  duration: { default: 300 },
  icon: {},
  iconColor: { default: "#fff" },
  iconSize: { default: "30px" },
  height: { default: "52px" },
  width: { default: "52px" },
  radius: {},
  bgColor: {},
  disabled: { type: Boolean, default: false },
  zIndex: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "offset": {
    type: null,
    default: () => {
      return new uni_modules_riceUi_components_riceFloatFab_type.FloatFabOffset({ x: -1, y: -1 });
    }
  },
  "offsetModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["click", "offsetChange"], ["update:offset"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("float-fab");
  const touch = uni_modules_riceUi_libs_use_useTouch_index.useTouch();
  const emit = __emit;
  const props = __props;
  const offset = common_vendor.useModel(__props, "offset");
  const windowSize = common_vendor.reactive(new uni_modules_riceUi_components_riceFloatFab_type.FloatFabWindowSize({
    width: 0,
    height: 0
  }));
  const state = common_vendor.reactive(new uni_modules_riceUi_components_riceFloatFab_type.FloatFabState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }));
  new uni_modules_riceUi_components_riceFloatFab_type.FloatFabOffset({
    x: 0,
    y: 0
  });
  let initialized = false;
  let timer = null;
  let initTimer = null;
  const fabRef = common_vendor.shallowRef(null);
  const boundaryBottom = common_vendor.computed(() => {
    var _a2;
    return uni_modules_riceUi_libs_utils_basic.getPxNum((_a2 = props.gapBottom) !== null && _a2 !== void 0 ? _a2 : props.gap);
  });
  const boundaryRight = common_vendor.computed(() => {
    var _a2;
    return uni_modules_riceUi_libs_utils_basic.getPxNum((_a2 = props.gapRight) !== null && _a2 !== void 0 ? _a2 : props.gap);
  });
  const boundary = common_vendor.computed(() => {
    var _a2, _b;
    return new uni_modules_riceUi_components_riceFloatFab_type.FloatFabBoundary({
      top: uni_modules_riceUi_libs_utils_basic.getPxNum((_a2 = props.gapTop) !== null && _a2 !== void 0 ? _a2 : props.gap),
      bottom: windowSize.height - state.height - boundaryBottom.value,
      left: uni_modules_riceUi_libs_utils_basic.getPxNum((_b = props.gapLeft) !== null && _b !== void 0 ? _b : props.gap),
      right: windowSize.width - state.width - boundaryRight.value
    });
  });
  const setTransform = (x, y) => {
    var _a2, _b;
    (_a2 = fabRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", `translate(${x}px,${y}px)`);
    (_b = fabRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", `1`);
  };
  const updateOffset = () => {
    offset.value = new uni_modules_riceUi_components_riceFloatFab_type.FloatFabOffset({
      x: state.x,
      y: state.y
    });
  };
  const setPosition = () => {
    var _a2;
    const duration = touch.dragging.value || !initialized ? 0 : props.duration;
    (_a2 = fabRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${duration}ms`);
    setTransform(state.x, state.y);
  };
  const getFabSize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const rect = yield fabRef.value.getBoundingClientRectAsync();
      state.height = rect.height;
      state.width = rect.width;
    });
  };
  function setDefPosition(position = null, isInit = false) {
    if (position == "top-left") {
      state.x = boundary.value.left;
      state.y = boundary.value.top;
    } else if (position == "top-right") {
      state.x = boundary.value.right;
      state.y = boundary.value.top;
    } else if (position == "bottom-left") {
      state.x = boundary.value.left;
      state.y = boundary.value.bottom;
    } else {
      state.x = boundary.value.right;
      state.y = boundary.value.bottom;
    }
    setPosition();
    if (!isInit) {
      updateOffset();
    }
  }
  const updateState = (x, y) => {
    if (props.adsorption == "x") {
      x = uni_modules_riceUi_libs_utils_basic.closeto([boundary.value.left, boundary.value.right], x);
    } else if (props.adsorption == "y") {
      y = uni_modules_riceUi_libs_utils_basic.closeto([boundary.value.top, boundary.value.bottom], y);
    }
    x = uni_modules_riceUi_libs_utils_basic.clamp(x, boundary.value.left, boundary.value.right);
    y = uni_modules_riceUi_libs_utils_basic.clamp(y, boundary.value.top, boundary.value.bottom);
    state.x = x;
    state.y = y;
    setPosition();
  };
  function updatePosition(isInit = false) {
    var _a2, _b, _c, _d;
    let x = (_b = (_a2 = offset.value) === null || _a2 === void 0 ? null : _a2.x) !== null && _b !== void 0 ? _b : -1;
    let y = (_d = (_c = offset.value) === null || _c === void 0 ? null : _c.y) !== null && _d !== void 0 ? _d : -1;
    if (isInit && (x < 0 || y < 0)) {
      const position = props.defaultPosition;
      if (position == "top-left") {
        setTransform(-state.width, boundary.value.top);
      } else if (position == "top-right") {
        setTransform(windowSize.width + state.width, boundary.value.top);
      } else if (position == "bottom-left") {
        setTransform(-state.width, boundary.value.bottom);
      } else {
        setTransform(windowSize.width + state.width, boundary.value.bottom);
      }
      initTimer = setTimeout(() => {
        initialized = true;
        setDefPosition(position, isInit);
      }, 20);
    } else {
      updateState(x, y);
      updateOffset();
    }
    initialized = true;
  }
  function init(isInit = false) {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      const windowInfo = common_vendor.index.getWindowInfo();
      windowSize.height = windowInfo.windowHeight;
      windowSize.width = windowInfo.windowWidth;
      yield getFabSize();
      updatePosition(isInit);
    });
  }
  common_vendor.watch(offset, () => {
    const isSame = offset.value.x == state.x && offset.value.y == state.y;
    if (isSame || touch.dragging.value)
      return null;
    updatePosition();
  }, {
    deep: true
  });
  common_vendor.watch(() => {
    return [props.gap, props.gapTop, props.gapBottom, props.gapLeft, props.gapRight, props.overGap];
  }, () => {
    if (touch.dragging.value)
      return null;
    updateState(state.x, state.y);
  }, {
    deep: true
  });
  common_vendor.watch(() => {
    return [props.height, props.width];
  }, () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (touch.dragging.value)
        return Promise.resolve(null);
      yield common_vendor.nextTick$1();
      yield getFabSize();
      updateState(state.x, state.y);
    });
  }, {
    deep: true
  });
  const floatFabStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    css.set("border-radius", props.radius == null ? "999px" : uni_modules_riceUi_libs_utils_basic.addUnit(props.radius));
    if (props.zIndex != null)
      css.set("z-index", props.zIndex);
    if (props.bgColor != null)
      css.set("background", props.bgColor);
    return css;
  });
  const fabClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme()
    ];
  });
  const resize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      init(true);
    });
  };
  common_vendor.onMounted(() => {
    timer = setTimeout(() => {
      init(true);
    }, 200);
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
    if (initTimer != null)
      clearTimeout(initTimer);
  });
  const setDefaultPosition = (position) => {
    setDefPosition(position, false);
  };
  const mpProps = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      axis: props.axis,
      adsorption: props.adsorption,
      overGap: props.overGap,
      disabled: props.disabled,
      duration: props.duration,
      gapRight: boundaryRight.value,
      gapBottom: boundaryBottom.value
    });
  });
  const _wxsIsDragging = (state2 = null) => {
    var _a2;
    touch.dragging.value = (_a2 = state2.dragging) !== null && _a2 !== void 0 ? _a2 : false;
  };
  const _updateOffset = (params) => {
    state.x = params.x;
    state.y = params.y;
    updateOffset();
  };
  const _emitOffsetChange = (params) => {
    emit("offsetChange", params);
  };
  const handleClick = () => {
    emit("click");
  };
  __expose({
    resize,
    setDefaultPosition,
    _wxsIsDragging,
    _updateOffset,
    _emitOffsetChange
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon) ? {
      b: common_vendor.p({
        name: _ctx.icon,
        color: _ctx.iconColor,
        size: _ctx.iconSize,
        class: "data-v-73dfa3ed"
      })
    } : {}, {
      c: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-73dfa3ed"), "view", fabRef, {
        "k": "fabRef"
      }),
      d: common_vendor.n(common_vendor.unref(fabClass)),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      f: common_vendor.s(common_vendor.unref(floatFabStyle)),
      g: common_vendor.s(_ctx.customStyle),
      h: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      i: common_vendor.unref(state),
      j: common_vendor.unref(boundary),
      k: common_vendor.unref(mpProps),
      l: common_vendor.o(handleClick, "41")
    });
    return __returned__;
  };
} }));
const block1 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("_wxsIsDragging", "_updateOffset", "_emitOffsetChange");
};
if (typeof touch_wxs_vue_type_wxs_index_0_src_true_name_touch_lang.block0 === "function")
  touch_wxs_vue_type_wxs_index_0_src_true_name_touch_lang.block0(_sfc_main);
if (typeof block1 === "function")
  block1(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-73dfa3ed"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-float-fab/rice-float-fab.js.map
