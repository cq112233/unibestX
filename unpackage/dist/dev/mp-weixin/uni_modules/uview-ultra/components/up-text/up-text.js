"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_link_1 = common_vendor.resolveComponent("up-link");
  (_easycom_up_icon_1 + _easycom_up_link_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_link = () => "../up-link/up-link.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_link)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-text"
}, { __name: "up-text", props: {
  type: {
    type: String,
    default: ""
  },
  show: {
    type: Boolean,
    default: true
  },
  text: {
    type: [String, Number],
    default: ""
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  suffixIcon: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: ""
  },
  href: {
    type: String,
    default: ""
  },
  format: {
    type: [String, Function],
    default: ""
  },
  call: {
    type: Boolean,
    default: false
  },
  openType: {
    type: String,
    default: ""
  },
  bold: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  lines: {
    type: [String, Number],
    default: ""
  },
  color: {
    type: String,
    default: "#303133"
  },
  size: {
    type: [String, Number],
    default: "15px"
  },
  iconStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({ fontSize: "15px" });
    }
  },
  decoration: {
    type: String,
    default: "none"
  },
  margin: {
    type: [Object, String, Number],
    default: "0"
  },
  lineHeight: {
    type: [String, Number],
    default: ""
  },
  align: {
    type: String,
    default: "left"
  },
  wordWrap: {
    type: String,
    default: "normal"
  },
  customClass: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  lang: {
    type: String,
    default: "en"
  },
  sessionFrom: {
    type: String,
    default: ""
  },
  sendMessageTitle: {
    type: String,
    default: ""
  },
  sendMessagePath: {
    type: String,
    default: ""
  },
  sendMessageImg: {
    type: String,
    default: ""
  },
  showMessageCard: {
    type: Boolean,
    default: false
  },
  appParameter: {
    type: String,
    default: ""
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const isMp = common_vendor.computed(() => {
    let mp = false;
    mp = true;
    return mp;
  });
  const valueStyle = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({
      textDecoration: props.decoration,
      fontWeight: props.bold ? "bold" : "normal",
      wordWrap: props.wordWrap,
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.size)
    });
    if (props.type == "") {
      style["color"] = props.color;
    }
    if (props.lines.toString() != "") {
      style["lines"] = props.lines;
    }
    if (props.lineHeight.toString() != "") {
      style["lineHeight"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.lineHeight);
    }
    if (props.block) {
      style["display"] = "block";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function formatName(name) {
    let val = "";
    if (name.length == 2) {
      val = name.substring(0, 1) + "*";
    } else if (name.length > 2) {
      let char = "";
      for (let i = 0, len = name.length - 2; i < len; i++) {
        char += "*";
      }
      val = name.substring(0, 1) + char + name.substring(name.length - 1);
    } else {
      val = name;
    }
    return val;
  }
  const value = common_vendor.computed(() => {
    const textStr = props.text.toString();
    if (props.mode === "price") {
      if (!/^\d+(\.\d+)?$/.test(textStr)) {
        uni_modules_uviewUltra_libs_function_index.error("金额模式下，text参数需要为金额格式");
      }
      return uni_modules_uviewUltra_libs_function_index.priceFormat(textStr, 2);
    }
    if (props.mode === "date") {
      if (!uni_modules_uviewUltra_libs_function_test.date(textStr)) {
        uni_modules_uviewUltra_libs_function_index.error("日期模式下，text参数需要为日期或时间戳格式" + textStr);
      }
      if (props.format != null && props.format.toString() != "") {
        return uni_modules_uviewUltra_libs_function_index.timeFormat(textStr, props.format.toString());
      }
      return uni_modules_uviewUltra_libs_function_index.timeFormat(textStr, "yyyy-mm-dd");
    }
    if (props.mode === "phone") {
      if (props.format === "encrypt") {
        return `${textStr.substring(0, 3)}****${textStr.substring(7)}`;
      }
      return textStr;
    }
    if (props.mode === "name") {
      if (props.format === "encrypt") {
        return formatName(textStr);
      }
      return textStr;
    }
    if (props.mode === "link") {
      if (!uni_modules_uviewUltra_libs_function_test.url(props.href)) {
        uni_modules_uviewUltra_libs_function_index.error("超链接模式下，href参数需要为URL格式");
      }
      return textStr;
    }
    return textStr;
  });
  function clickHandler() {
    emit("click");
  }
  function onGetUserInfo() {
  }
  function onContact() {
  }
  function onGetPhoneNumber() {
  }
  function onError() {
  }
  function onLaunchApp() {
  }
  function onOpenSetting() {
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show
    }, __props.show ? common_vendor.e({
      b: __props.mode === "price"
    }, __props.mode === "price" ? {
      c: common_vendor.n(`up-text__value--${__props.type}`),
      d: common_vendor.s(valueStyle.value)
    } : {}, {
      e: __props.prefixIcon != ""
    }, __props.prefixIcon != "" ? {
      f: common_vendor.p({
        name: __props.prefixIcon,
        customStyle: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.iconStyle),
        class: "data-v-7f1955ac"
      })
    } : {}, {
      g: __props.mode === "link"
    }, __props.mode === "link" ? {
      h: valueStyle.value["fontWeight"],
      i: valueStyle.value["wordWrap"],
      j: valueStyle.value["fontSize"],
      k: common_vendor.n(`up-text__value--${__props.type}`),
      l: common_vendor.n(`up-line-${__props.lines}`),
      m: common_vendor.p({
        text: value.value,
        href: __props.href,
        underLine: true,
        class: common_vendor.normalizeClass(["up-text__value data-v-7f1955ac", [`up-text__value--${__props.type}`, `up-line-${__props.lines}`]]),
        style: common_vendor.normalizeStyle({
          fontWeight: valueStyle.value["fontWeight"],
          wordWrap: valueStyle.value["wordWrap"],
          fontSize: valueStyle.value["fontSize"]
        })
      })
    } : __props.openType != "" && isMp.value ? {
      o: common_vendor.t(value.value),
      p: common_vendor.s(valueStyle.value),
      q: __props.openType,
      r: common_vendor.o(onGetUserInfo, "f0"),
      s: common_vendor.o(onContact, "90"),
      t: common_vendor.o(onGetPhoneNumber, "ac"),
      v: common_vendor.o(onError, "9e"),
      w: common_vendor.o(onLaunchApp, "da"),
      x: common_vendor.o(onOpenSetting, "d7"),
      y: __props.lang,
      z: __props.sessionFrom,
      A: __props.sendMessageTitle,
      B: __props.sendMessagePath,
      C: __props.sendMessageImg,
      D: __props.showMessageCard,
      E: __props.appParameter
    } : {
      F: common_vendor.t(value.value),
      G: common_vendor.s(valueStyle.value),
      H: common_vendor.n(`up-text__value--${__props.type}`),
      I: common_vendor.n(`up-line-${__props.lines}`)
    }, {
      n: __props.openType != "" && isMp.value,
      J: __props.suffixIcon != ""
    }, __props.suffixIcon != "" ? {
      K: common_vendor.p({
        name: __props.suffixIcon,
        customStyle: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.iconStyle),
        class: "data-v-7f1955ac"
      })
    } : {}, {
      L: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      M: common_vendor.n(__props.customClass),
      N: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      O: common_vendor.s({
        margin: __props.margin,
        justifyContent: __props.align === "left" ? "flex-start" : __props.align === "center" ? "center" : "flex-end"
      }),
      P: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      Q: common_vendor.o(clickHandler, "0c")
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f1955ac"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-text/up-text.js.map
