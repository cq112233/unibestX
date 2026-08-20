"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-list"
}, { __name: "up-list", props: {
  showScrollbar: {
    type: Boolean,
    default: false
  },
  lowerThreshold: {
    type: [String, Number],
    default: 50
  },
  upperThreshold: {
    type: [String, Number],
    default: 0
  },
  scrollTop: {
    type: [String, Number],
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  scrollIntoView: {
    type: String,
    default: ""
  },
  scrollWithAnimation: {
    type: Boolean,
    default: false
  },
  height: {
    type: [String, Number],
    default: 0
  },
  width: {
    type: [String, Number],
    default: 0
  },
  refresherEnabled: {
    type: Boolean,
    default: false
  },
  refresherThreshold: {
    type: Number,
    default: 45
  },
  refresherDefaultStyle: {
    type: String,
    default: "black"
  },
  refresherBackground: {
    type: String,
    default: "#FFF"
  },
  refresherTriggered: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: [
  "scroll",
  "scrolltolower",
  "scroll-to-lower",
  "scrolltoupper",
  "scroll-to-upper",
  "refresherpulling",
  "refresherrefresh",
  "refresherrestore",
  "refresherabort"
], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const innerScrollTop = common_vendor.ref(0);
  const offset = common_vendor.ref(0);
  const sys = uni_modules_uviewUltra_libs_function_index.getWindowInfo();
  const listStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.width != 0)
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.width);
    if (props.height != 0)
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.height);
    if (style["height"] == null)
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(sys.windowHeight, "px");
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  common_vendor.provide("upListContext", new common_vendor.UTSJSONObject({
    innerScrollTop,
    updateOffsetFromChild: (top) => {
      offset.value = top;
    }
  }));
  function onScroll(e) {
    let top = e.detail.scrollTop;
    innerScrollTop.value = top;
    emit("scroll", top);
  }
  function scrolltolower(e) {
    uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
      emit("scrolltolower");
      emit("scroll-to-lower");
    });
  }
  function scrolltoupper(e) {
    uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
      emit("scrolltoupper");
      emit("scroll-to-upper");
      offset.value = 0;
    });
  }
  function refresherpulling(e) {
    emit("refresherpulling", e);
  }
  function refresherrefresh(e) {
    emit("refresherrefresh", e);
  }
  function refresherrestore(e) {
    emit("refresherrestore", e);
  }
  function refresherabort(e) {
    emit("refresherabort", e);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "scroll-view"),
      b: __props.scrollIntoView,
      c: common_vendor.s(listStyle.value),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: parseFloat(__props.scrollTop.toString()),
      f: parseFloat(__props.lowerThreshold.toString()),
      g: parseFloat(__props.upperThreshold.toString()),
      h: __props.showScrollbar,
      i: __props.scrollWithAnimation,
      j: common_vendor.o(onScroll, "db"),
      k: common_vendor.o(scrolltolower, "29"),
      l: common_vendor.o(scrolltoupper, "dd"),
      m: __props.refresherEnabled,
      n: __props.refresherThreshold,
      o: __props.refresherDefaultStyle,
      p: __props.refresherBackground,
      q: __props.refresherTriggered,
      r: common_vendor.o(refresherpulling, "eb"),
      s: common_vendor.o(refresherrefresh, "fb"),
      t: common_vendor.o(refresherrestore, "87"),
      v: common_vendor.o(refresherabort, "9a"),
      w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d1e7a7c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-list/up-list.js.map
