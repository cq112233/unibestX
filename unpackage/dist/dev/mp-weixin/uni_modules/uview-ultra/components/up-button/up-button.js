"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_throttle = require("../../libs/function/throttle.js");
const uni_modules_uviewUltra_libs_config_config = require("../../libs/config/config.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_loading_icon_1 + _easycom_up_icon_1)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-button"
}, { __name: "up-button", props: {
  hairline: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "info"
  },
  size: {
    type: String,
    default: "normal"
  },
  shape: {
    type: String,
    default: "square"
  },
  plain: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: ""
  },
  loadingMode: {
    type: String,
    default: "spinner"
  },
  loadingSize: {
    type: Number,
    default: 15
  },
  openType: {
    type: String,
    default: ""
  },
  formType: {
    type: String,
    default: ""
  },
  appParameter: {
    type: String,
    default: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    default: false
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
  dataName: {
    type: String,
    default: ""
  },
  throttleTime: {
    type: [String, Number],
    default: 0
  },
  hoverStartTime: {
    type: [String, Number],
    default: 20
  },
  hoverStayTime: {
    type: [String, Number],
    default: 70
  },
  text: {
    type: [String, Number],
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  iconColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const bemClass = common_vendor.computed(() => {
    let ret = "";
    if (props.color == "") {
      ret = uni_modules_uviewUltra_libs_function_index.bem("button", [props.type, props.shape, props.size], [
        ["disabled", props.disabled],
        ["plain", props.plain],
        ["hairline", props.hairline]
      ]);
    } else {
      ret = uni_modules_uviewUltra_libs_function_index.bem("button", [props.shape, props.size], [
        ["disabled", props.disabled],
        ["plain", props.plain],
        ["hairline", props.hairline]
      ]);
    }
    return ret;
  });
  const textColorCom = common_vendor.computed(() => {
    if (props.color != "") {
      return props.plain ? props.color : "#ffffff";
    }
    if (props.plain) {
      if (props.type == "primary")
        return uni_modules_uviewUltra_libs_config_config.config.getString("color.up-primary");
      if (props.type == "info")
        return "#000000";
      if (props.type == "success")
        return "#5ac725";
      if (props.type == "error")
        return "#f56c6c";
      if (props.type == "warning")
        return "#f56c6c";
      return "#323233";
    }
    if (props.type == "info") {
      return "#323233";
    }
    return "#ffffff";
  });
  const loadingColor = common_vendor.computed(() => {
    if (props.plain) {
      return props.color != "" ? props.color : uni_modules_uviewUltra_libs_config_config.config.getString(`color.up-${props.type}`);
    }
    if (props.type == "info") {
      return "#c9c9c9";
    }
    return "rgb(200, 200, 200)";
  });
  const iconColorCom = common_vendor.computed(() => {
    if (props.iconColor != "")
      return props.iconColor;
    if (props.plain) {
      return props.color != "" ? props.color : props.type;
    } else {
      return "";
    }
  });
  const baseColor = common_vendor.computed(() => {
    let style = new common_vendor.UTSJSONObject({});
    if (props.color != "") {
      if (!props.plain) {
        style["backgroundColor"] = props.color;
      }
      if (props.color.toString().indexOf("gradient") != -1) {
        style["borderWidth"] = 0;
        if (!props.plain) {
          style["backgroundImage"] = props.color;
        }
      } else {
        style["borderColor"] = props.color;
        style["borderWidth"] = "1px";
        style["borderStyle"] = "solid";
      }
    }
    return style;
  });
  const textSize = common_vendor.computed(() => {
    let fontSize = "14";
    if (props.size === "large")
      fontSize = "16";
    if (props.size === "normal")
      fontSize = "14";
    if (props.size === "small")
      fontSize = "12";
    if (props.size === "mini")
      fontSize = "10";
    return fontSize;
  });
  const buttonRootStyle = common_vendor.computed(() => {
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    return uni_modules_uviewUltra_libs_function_index.deepMerge(baseColor.value, custom);
  });
  const loadingIconSize = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(props.loadingSize * 1.15);
  });
  const textStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: textSize.value + "px",
      color: textColorCom.value
    });
  });
  const iconSizeComputed = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(textSize.value)) * 1.35);
  });
  const clickHandler = () => {
    if (!props.disabled && !props.loading) {
      uni_modules_uviewUltra_libs_function_throttle.throttle(() => {
        emit("click");
      }, parseInt(props.throttleTime.toString()));
    }
  };
  const getphonenumber = (res) => {
    emit("getphonenumber", res);
  };
  const getuserinfo = (res) => {
    emit("getuserinfo", res);
  };
  const error = (res) => {
    emit("error", res);
  };
  const opensetting = (res) => {
    emit("opensetting", res);
  };
  const launchapp = (res) => {
    emit("launchapp", res);
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.loading
    }, __props.loading ? {
      b: common_vendor.p({
        mode: __props.loadingMode,
        size: loadingIconSize.value,
        color: loadingColor.value,
        class: "data-v-0816b018"
      }),
      c: common_vendor.t(__props.loadingText != "" ? __props.loadingText : __props.text),
      d: common_vendor.s(textStyle.value)
    } : common_vendor.e({
      e: __props.icon != ""
    }, __props.icon != "" ? {
      f: common_vendor.p({
        name: __props.icon,
        color: iconColorCom.value,
        size: iconSizeComputed.value,
        customStyle: {
          marginRight: "2px"
        },
        class: "data-v-0816b018"
      })
    } : {}, {
      g: common_vendor.t(__props.text),
      h: common_vendor.s(textStyle.value)
    }), {
      i: __props.hoverStartTime,
      j: __props.hoverStayTime,
      k: __props.formType,
      l: __props.openType,
      m: __props.appParameter,
      n: __props.hoverStopPropagation,
      o: __props.sendMessageTitle,
      p: __props.sendMessagePath,
      q: __props.lang,
      r: __props.dataName,
      s: __props.sessionFrom,
      t: __props.sendMessageImg,
      v: __props.showMessageCard,
      w: common_vendor.o(getphonenumber, "22"),
      x: common_vendor.o(getuserinfo, "83"),
      y: common_vendor.o(error, "5f"),
      z: common_vendor.o(opensetting, "a1"),
      A: common_vendor.o(launchapp, "e7"),
      B: __props.loading,
      C: !__props.disabled && !__props.loading ? "up-button__button--active" : "",
      D: common_vendor.o(clickHandler, "b5"),
      E: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      F: common_vendor.s(buttonRootStyle.value),
      G: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      H: !__props.disabled && !__props.loading ? "up-button--active" : "",
      I: common_vendor.n(bemClass.value),
      J: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0816b018"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-button/up-button.js.map
