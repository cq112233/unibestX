"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_column_notice_1 = common_vendor.resolveComponent("up-column-notice");
  const _easycom_up_row_notice_1 = common_vendor.resolveComponent("up-row-notice");
  (_easycom_up_column_notice_1 + _easycom_up_row_notice_1)();
}
const _easycom_up_column_notice = () => "../up-column-notice/up-column-notice.js";
const _easycom_up_row_notice = () => "../up-row-notice/up-row-notice.js";
if (!Math) {
  (_easycom_up_column_notice + _easycom_up_row_notice)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-notice-bar"
}, { __name: "up-notice-bar", props: {
  text: {
    type: [Array, String],
    default: () => {
      return [];
    }
  },
  direction: {
    type: String,
    default: "row"
  },
  step: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: "volume"
  },
  mode: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: "#f9ae3d"
  },
  bgColor: {
    type: String,
    default: "#fdf6ec"
  },
  speed: {
    type: [String, Number],
    default: 80
  },
  fontSize: {
    type: [String, Number],
    default: 14
  },
  duration: {
    type: [String, Number],
    default: 2e3
  },
  disableTouch: {
    type: Boolean,
    default: true
  },
  url: {
    type: String,
    default: ""
  },
  linkType: {
    type: String,
    default: "navigateTo"
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click", "close"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const show = common_vendor.ref(true);
  const noticeBarStyle = common_vendor.computed(() => {
    const base = new common_vendor.UTSJSONObject({
      backgroundColor: props.bgColor
    });
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, custom);
  });
  function click(index) {
    emit("click", index);
    if (props.url != "" && props.linkType != "") {
      if (props.linkType == "navigateTo") {
        common_vendor.index.navigateTo({ url: props.url });
      } else if (props.linkType == "redirectTo") {
        common_vendor.index.redirectTo({ url: props.url });
      } else if (props.linkType == "switchTab") {
        common_vendor.index.switchTab({ url: props.url });
      } else if (props.linkType == "reLaunch") {
        common_vendor.index.reLaunch({ url: props.url });
      }
    }
  }
  function close() {
    show.value = false;
    emit("close");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: show.value
    }, show.value ? common_vendor.e({
      b: __props.direction == "column" || __props.direction == "row" && __props.step
    }, __props.direction == "column" || __props.direction == "row" && __props.step ? {
      c: common_vendor.o(close, "fb"),
      d: common_vendor.o(click, "69"),
      e: common_vendor.p({
        color: __props.color,
        bgColor: __props.bgColor,
        text: __props.text,
        mode: __props.mode,
        step: __props.step,
        icon: __props.icon,
        ["disable-touch"]: __props.disableTouch,
        fontSize: __props.fontSize,
        duration: __props.duration,
        class: "data-v-144649f6"
      })
    } : {
      f: common_vendor.o(close, "b4"),
      g: common_vendor.o(click, "ef"),
      h: common_vendor.p({
        color: __props.color,
        bgColor: __props.bgColor,
        text: __props.text,
        mode: __props.mode,
        fontSize: __props.fontSize,
        speed: __props.speed,
        url: __props.url,
        linkType: __props.linkType,
        icon: __props.icon,
        class: "data-v-144649f6"
      })
    }, {
      i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      j: common_vendor.s(noticeBarStyle.value),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-144649f6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js.map
