"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  (_easycom_up_line_1 + _easycom_up_loading_icon_1)();
}
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  (_easycom_up_line + _easycom_up_loading_icon)();
}
const dotText = "●";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-loadmore"
}, { __name: "up-loadmore", props: {
  status: {
    type: String,
    default: "loadmore"
  },
  bgColor: {
    type: String,
    default: "transparent"
  },
  icon: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: [String, Number],
    default: 14
  },
  iconSize: {
    type: [String, Number],
    default: 17
  },
  color: {
    type: String,
    default: "#606266"
  },
  loadingIcon: {
    type: String,
    default: "circle"
  },
  loadmoreText: {
    type: String,
    default: "加载更多"
  },
  loadingText: {
    type: String,
    default: "正在加载..."
  },
  nomoreText: {
    type: String,
    default: "没有更多了"
  },
  isDot: {
    type: Boolean,
    default: false
  },
  iconColor: {
    type: String,
    default: "#b7b7b7"
  },
  lineColor: {
    type: String,
    default: "#E6E8EB"
  },
  marginTop: {
    type: [String, Number],
    default: 10
  },
  marginBottom: {
    type: [String, Number],
    default: 10
  },
  height: {
    type: [String, Number],
    default: "auto"
  },
  line: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["loadmore"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const loadTextStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      color: props.color,
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize),
      backgroundColor: props.bgColor
    });
  });
  const showText = common_vendor.computed(() => {
    let text = "";
    if (props.status == "loadmore")
      text = props.loadmoreText;
    else if (props.status == "loading")
      text = props.loadingText;
    else if (props.status == "nomore" && props.isDot)
      text = dotText;
    else
      text = props.nomoreText;
    return text;
  });
  function loadMore() {
    if (props.status == "loadmore")
      emit("loadmore");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.line
    }, __props.line ? {
      b: common_vendor.p({
        length: "140rpx",
        color: __props.lineColor,
        hairline: false,
        dashed: __props.dashed,
        class: "data-v-2c2f8d2e"
      })
    } : {}, {
      c: __props.status === "loading" && __props.icon
    }, __props.status === "loading" && __props.icon ? {
      d: common_vendor.p({
        color: __props.iconColor,
        size: __props.iconSize,
        mode: __props.loadingIcon,
        class: "data-v-2c2f8d2e"
      })
    } : {}, {
      e: common_vendor.t(showText.value),
      f: common_vendor.s(loadTextStyle.value),
      g: common_vendor.n(__props.status == "nomore" && __props.isDot == true ? "up-loadmore__content__dot-text" : "up-loadmore__content__text"),
      h: common_vendor.o(loadMore, "6f"),
      i: common_vendor.n(__props.status == "loadmore" || __props.status == "nomore" ? "up-more" : ""),
      j: __props.line
    }, __props.line ? {
      k: common_vendor.p({
        length: "140rpx",
        color: __props.lineColor,
        hairline: false,
        dashed: __props.dashed,
        class: "data-v-2c2f8d2e"
      })
    } : {}, {
      l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      m: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      n: common_vendor.s({
        backgroundColor: __props.bgColor,
        marginBottom: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.marginBottom),
        marginTop: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.marginTop),
        height: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height)
      }),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2c2f8d2e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loadmore/up-loadmore.js.map
