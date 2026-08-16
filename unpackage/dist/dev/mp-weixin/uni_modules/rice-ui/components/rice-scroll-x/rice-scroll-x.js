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
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-scroll-x",
  styleIsolation: "app-and-page",
  externalClasses: ["indicator-class", "indicator-active-class"]
}, { __name: "rice-scroll-x", props: {
  showIndicator: { type: Boolean, default: true },
  indicatorWidth: { default: "50px" },
  indicatorHeight: {},
  indicatorBarWidth: { default: "20px" },
  indicatorColor: {},
  indicatorActiveColor: {},
  indicatorClass: { default: "" },
  indicatorActiveClass: { default: "" },
  indicatorStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["scrollToLeft", "scrollToRight"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("scroll-x");
  const emit = __emit;
  const props = __props;
  const bounces = common_vendor.ref(true);
  const scrollXRef = common_vendor.shallowRef(null);
  const barRef = common_vendor.shallowRef(null);
  const _indicatorWidth = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.getPxNum(uni_modules_riceUi_libs_utils_basic.addUnit(props.indicatorWidth));
  });
  const _indicatorBarWidth = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.getPxNum(uni_modules_riceUi_libs_utils_basic.addUnit(props.indicatorBarWidth));
  });
  const scrollXWidth = common_vendor.ref(0);
  const getScrollRect = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      if (scrollXRef.value != null) {
        const rect = yield scrollXRef.value.getBoundingClientRectAsync();
        scrollXWidth.value = rect.width;
      }
    });
  };
  const onScrolltoupper = () => {
    emit("scrollToLeft");
  };
  const onScrolltolower = () => {
    emit("scrollToRight");
  };
  const onScroll = (e) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a2;
      const scrollLeft = e.detail.scrollLeft;
      const scrollWidth = e.detail.scrollWidth;
      if (scrollXWidth.value == 0) {
        yield getScrollRect();
      }
      const x = scrollLeft / (scrollWidth - scrollXWidth.value) * (_indicatorWidth.value - _indicatorBarWidth.value);
      (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", `translateX(${x}px)`);
    });
  };
  const indicatorStyles = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.indicatorHeight != null) {
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.indicatorHeight));
    }
    return css;
  });
  const lineStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.indicatorWidth));
    if (props.indicatorColor != null) {
      css.set("background-color", props.indicatorColor);
    }
    return css;
  });
  const barStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.indicatorBarWidth));
    if (props.indicatorActiveColor != null) {
      css.set("background-color", props.indicatorActiveColor);
    }
    return css;
  });
  let timer = null;
  common_vendor.onMounted(() => {
    timer = setTimeout(() => {
      getScrollRect();
    }, 50);
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(bounces),
      b: common_vendor.o(onScroll, "2c"),
      c: common_vendor.o(onScrolltoupper, "39"),
      d: common_vendor.o(onScrolltolower, "05"),
      e: _ctx.showIndicator
    }, _ctx.showIndicator ? {
      f: common_vendor.sei("r0-f93df285", "view", barRef, {
        "k": "barRef"
      }),
      g: common_vendor.n(_ctx.indicatorActiveClass),
      h: common_vendor.s(common_vendor.unref(barStyle)),
      i: common_vendor.n(_ctx.indicatorClass),
      j: common_vendor.s(common_vendor.unref(lineStyle)),
      k: common_vendor.s(_ctx.indicatorStyle),
      l: common_vendor.s(common_vendor.unref(indicatorStyles))
    } : {}, {
      m: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-f93df285"), "view", scrollXRef, {
        "k": "scrollXRef"
      }),
      n: common_vendor.n(common_vendor.unref(ns).theme()),
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      p: common_vendor.s(_ctx.customStyle),
      q: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f93df285"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-scroll-x/rice-scroll-x.js.map
