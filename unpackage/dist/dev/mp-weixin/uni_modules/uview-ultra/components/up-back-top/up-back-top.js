"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-back-top"
}, { __name: "up-back-top", props: {
  mode: {
    type: String,
    default: "circle"
  },
  icon: {
    type: String,
    default: "arrow-upward"
  },
  text: {
    type: String,
    default: ""
  },
  duration: {
    type: [String, Number],
    default: 100
  },
  scrollTop: {
    type: [String, Number],
    default: 0
  },
  top: {
    type: [String, Number],
    default: 100
  },
  bottom: {
    type: [String, Number],
    default: 80
  },
  right: {
    type: [String, Number],
    default: 20
  },
  zIndex: {
    type: [String, Number],
    default: 999
  },
  iconStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const show = common_vendor.computed(() => {
    var _a2, _b;
    const sVal = ((_a2 = props.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0).toString();
    const tVal = ((_b = props.top) !== null && _b !== void 0 ? _b : 100).toString();
    const sTop = parseFloat(sVal);
    const targetTop = parseFloat(tVal);
    if (isNaN(sTop))
      return false;
    const threshold = isNaN(targetTop) ? 100 : targetTop;
    return sTop >= threshold;
  });
  const finalStyle = common_vendor.computed(() => {
    var _a2, _b, _c;
    const bStr = ((_a2 = props.bottom) !== null && _a2 !== void 0 ? _a2 : 80).toString();
    const rStr = ((_b = props.right) !== null && _b !== void 0 ? _b : 20).toString();
    const bVal = bStr.includes("px") ? bStr : bStr + "px";
    const rVal = rStr.includes("px") ? rStr : rStr + "px";
    const zVal = parseInt(((_c = props.zIndex) !== null && _c !== void 0 ? _c : 999).toString());
    const style = new common_vendor.UTSJSONObject({
      position: "fixed",
      bottom: bVal,
      right: rVal,
      width: "44px",
      height: "44px",
      zIndex: isNaN(zVal) ? 999 : zVal,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      borderRadius: props.mode === "circle" ? "100px" : "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#e2e8f0"
    });
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function backToTop(e = null) {
    common_vendor.index.pageScrollTo(new common_vendor.UTSJSONObject({
      scrollTop: 0,
      duration: parseInt(props.duration.toString()),
      fail: (_ = null) => {
      }
    }));
    emit("click", e);
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: show.value
    }, show.value ? common_vendor.e({
      b: common_vendor.p({
        name: __props.icon,
        size: "22",
        color: "#2563eb",
        class: "data-v-5283f3ea"
      }),
      c: __props.text != ""
    }, __props.text != "" ? {
      d: common_vendor.t(__props.text)
    } : {}, {
      e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      f: common_vendor.s(finalStyle.value),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      h: common_vendor.o(backToTop, "b0"),
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5283f3ea"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-back-top/up-back-top.js.map
