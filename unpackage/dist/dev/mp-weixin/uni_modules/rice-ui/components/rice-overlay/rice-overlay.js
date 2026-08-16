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
require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-overlay",
  styleIsolation: "app-and-page"
}, { __name: "rice-overlay", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  zIndex: { default: 998 },
  closeOnClickOverlay: { type: Boolean, default: true },
  duration: { default: 300 },
  bgColor: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "show": {
    type: Boolean,
    default: false
  },
  "showModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["click", "opened", "closed"], ["update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  const emit = __emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("overlay");
  uni_modules_riceUi_libs_use_useTouch_index.useTouch();
  const props = __props;
  const show = common_vendor.useModel(__props, "show");
  const realShow = common_vendor.ref(false);
  const transitionClass = common_vendor.ref("");
  const overlayClick = (e) => {
    e.stopPropagation();
    if (props.closeOnClickOverlay) {
      show.value = false;
    }
    emit("click", e);
  };
  const onTouchmove = (e) => {
  };
  let timer1 = null;
  let timer2 = null;
  const open = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      realShow.value = true;
      yield common_vendor.nextTick$1();
      if (timer1 != null)
        clearTimeout(timer1);
      timer1 = setTimeout(() => {
        transitionClass.value = "rice-overlay--show";
        emit("opened");
      }, 30);
    });
  };
  const close = () => {
    transitionClass.value = "";
    if (timer2 != null)
      clearTimeout(timer2);
    timer2 = setTimeout(() => {
      realShow.value = false;
      emit("closed");
    }, props.duration);
  };
  common_vendor.watch(show, (newVal) => {
    if (newVal && !realShow.value) {
      open();
    }
    if (!newVal && realShow.value) {
      close();
    }
  }, {
    immediate: true
  });
  const rootClass = common_vendor.computed(() => {
    return [
      "rice-overlay",
      ns.theme(),
      transitionClass.value
    ];
  });
  const overlayStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    css.set("z-index", props.zIndex);
    css.set("transition-duration", props.duration + "ms");
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.bgColor)) {
      css.set("background-color", props.bgColor);
    }
    return css;
  });
  common_vendor.onUnmounted(() => {
    if (timer1 != null)
      clearTimeout(timer1);
    if (timer2 != null)
      clearTimeout(timer2);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(realShow)
    }, common_vendor.unref(realShow) ? {
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: common_vendor.n(common_vendor.unref(rootClass)),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      e: common_vendor.s(common_vendor.unref(overlayStyle)),
      f: common_vendor.s(_ctx.customStyle),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      h: common_vendor.o(overlayClick, "66"),
      i: common_vendor.o(onTouchmove, "06")
    } : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-de70bc1d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-overlay/rice-overlay.js.map
