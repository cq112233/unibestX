"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceNoticeBar_type = require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-notice-bar",
  styleIsolation: "app-and-page",
  externalClasses: ["text-class"]
}, { __name: "rice-notice-bar", props: {
  type: { default: "warning" },
  message: {},
  color: {},
  fontSize: {},
  bgColor: {},
  leftIcon: {},
  rightIcon: {},
  delay: {},
  speed: { default: 60 },
  closeable: { type: Boolean, default: false },
  scrollable: { type: Boolean, default: null },
  wrapable: { type: Boolean },
  textClass: { default: "" },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click", "clickLeft", "clickRight"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("notice-bar");
  const emit = __emit;
  const props = __props;
  const state = common_vendor.reactive(new uni_modules_riceUi_components_riceNoticeBar_type.NoticeBarState({
    show: true,
    offset: 0,
    duration: 0,
    wrapWidth: 0,
    contentWidth: 0
  }));
  let startTimer = null;
  let endTimer = null;
  let transitionTimer = null;
  const wrapperRef = common_vendor.shallowRef(null);
  const contentRef = common_vendor.shallowRef(null);
  const startSleep = () => {
    return new Promise((resolve) => {
      var _a2;
      const ms = (_a2 = props.delay) !== null && _a2 !== void 0 ? _a2 : 0.3;
      if (startTimer != null)
        clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        resolve(true);
      }, ms * 1e3);
    });
  };
  const reset = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      if (startTimer != null)
        clearTimeout(startTimer);
      yield startSleep();
      if (wrapperRef.value == null || contentRef.value == null)
        return Promise.resolve(null);
      state.duration = 0;
      state.offset = 0;
      const wrapperRet = yield wrapperRef.value.getBoundingClientRectAsync();
      const contentRet = yield contentRef.value.getBoundingClientRectAsync();
      const wrapperWidth = wrapperRet.width;
      const contentWidth = contentRet.width;
      if ((props.scrollable == true || contentWidth > wrapperWidth) && props.wrapable == false) {
        if (transitionTimer != null)
          clearTimeout(transitionTimer);
        transitionTimer = setTimeout(() => {
          state.wrapWidth = wrapperWidth;
          state.contentWidth = contentWidth;
          state.offset = -contentWidth;
          state.duration = contentWidth / props.speed;
        }, 50);
      }
    });
  };
  const onTransitionend = () => {
    state.duration = 0;
    state.offset = state.wrapWidth;
    if (endTimer != null)
      clearTimeout(endTimer);
    endTimer = setTimeout(() => {
      state.duration = (state.contentWidth + state.wrapWidth) / props.speed;
      state.offset = -state.contentWidth;
    }, 50);
  };
  const handleClick = () => {
    emit("click");
  };
  const clickLeft = () => {
    emit("clickLeft");
  };
  const clickRight = () => {
    emit("clickRight");
  };
  const handleClose = () => {
    state.show = false;
  };
  common_vendor.watch(() => {
    return [props.message, props.scrollable];
  }, () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      common_vendor.index.__f__("log", "at uni_modules/rice-ui/components/rice-notice-bar/rice-notice-bar.uvue:132", "ios change");
      reset();
    });
  }, {
    deep: true
  });
  const noticeBarStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.bgColor != null)
      css.set("background-color", props.bgColor);
    return css;
  });
  const contentStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (state.offset != 0) {
      css.set("transform", `translateX(${state.offset}px)`);
    }
    css.set("transition-duration", `${state.duration}s`);
    if (props.color != null)
      css.set("color", props.color);
    if (props.fontSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    return css;
  });
  const noticeBarType = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.isThemeColor(props.type) ? props.type : "warning";
  });
  const noticeBarClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.m(noticeBarType.value),
      ns.is("wrapable", props.wrapable == true)
    ];
  });
  const contentClass = common_vendor.computed(() => {
    const ellipsis = props.scrollable == false && props.wrapable == false;
    return [
      ns.e("content"),
      ns.is("__content--wrapable", props.wrapable == true),
      ns.is("__content--ellipsis", ellipsis)
    ];
  });
  const iconColor = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.color) !== null && _a2 !== void 0 ? _a2 : `var(--rice-${noticeBarType.value}-color)`;
  });
  common_vendor.onMounted(() => {
    reset();
  });
  __expose({
    reset
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(state).show
    }, common_vendor.unref(state).show ? common_vendor.e({
      b: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.leftIcon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.leftIcon) ? {
      c: common_vendor.o(clickLeft, "e2"),
      d: common_vendor.p({
        name: _ctx.leftIcon,
        color: common_vendor.unref(iconColor),
        size: "18px",
        ["custom-style"]: {
          width: "25px"
        },
        class: "data-v-2bbdd2d2"
      })
    } : {}, {
      e: common_vendor.t(_ctx.message),
      f: common_vendor.sei("r0-2bbdd2d2", "text", contentRef, {
        "k": "contentRef"
      }),
      g: common_vendor.n(common_vendor.unref(contentClass)),
      h: common_vendor.n(_ctx.textClass),
      i: common_vendor.s(common_vendor.unref(contentStyle)),
      j: common_vendor.o(onTransitionend, "fc"),
      k: common_vendor.sei("r1-2bbdd2d2", "view", wrapperRef, {
        "k": "wrapperRef"
      }),
      l: common_vendor.o(handleClick, "86"),
      m: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.rightIcon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.rightIcon) ? {
      n: common_vendor.o(clickRight, "d5"),
      o: common_vendor.p({
        name: _ctx.rightIcon,
        ["custom-style"]: {
          width: "25px",
          textAlign: "right"
        },
        color: common_vendor.unref(iconColor),
        size: "18px",
        class: "data-v-2bbdd2d2"
      })
    } : {}, {
      p: _ctx.closeable
    }, _ctx.closeable ? {
      q: common_vendor.o(handleClose, "6d"),
      r: common_vendor.p({
        name: "cross",
        ["custom-style"]: {
          width: "25px",
          textAlign: "right"
        },
        color: common_vendor.unref(iconColor),
        size: "18px",
        class: "data-v-2bbdd2d2"
      })
    } : {}, {
      s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      t: common_vendor.n(common_vendor.unref(noticeBarClass)),
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      w: common_vendor.s(common_vendor.unref(noticeBarStyle)),
      x: common_vendor.s(_ctx.customStyle),
      y: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2bbdd2d2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-notice-bar/rice-notice-bar.js.map
