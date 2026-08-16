"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_icon_1 + _easycom_up_transition_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_transition)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tag"
}, { __name: "up-tag", props: {
  type: {
    type: String,
    default: "primary"
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  shape: {
    type: String,
    default: "square"
  },
  text: {
    type: [String, Number],
    default: ""
  },
  bgColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  closeColor: {
    type: String,
    default: "#C6C7CB"
  },
  name: {
    type: [String, Number],
    default: ""
  },
  plainFill: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: true
  },
  icon: {
    type: String,
    default: ""
  },
  iconColor: {
    type: String,
    default: ""
  }
}, emits: ["click", "close"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const style = common_vendor.computed(() => {
    const s = new common_vendor.UTSJSONObject({});
    if (props.bgColor != "") {
      s["backgroundColor"] = props.bgColor;
    }
    if (props.color != "") {
      s["color"] = props.color;
    }
    if (props.borderColor != "") {
      s["borderColor"] = props.borderColor;
    }
    return s;
  });
  const textColor = common_vendor.computed(() => {
    const s = new common_vendor.UTSJSONObject({});
    if (props.color != "") {
      s["color"] = props.color;
    }
    return s;
  });
  const imgStyle = common_vendor.computed(() => {
    const width = props.size === "large" ? "17px" : props.size === "medium" ? "15px" : "13px";
    return new common_vendor.UTSJSONObject({
      width,
      height: width
    });
  });
  const closeSize = common_vendor.computed(() => {
    return props.size === "large" ? "15px" : props.size === "medium" ? "13px" : "12px";
  });
  const iconSize = common_vendor.computed(() => {
    return props.size === "large" ? "21px" : props.size === "medium" ? "19px" : "16px";
  });
  const elIconColor = common_vendor.computed(() => {
    return props.iconColor != "" ? props.iconColor : props.plain ? props.type : "#ffffff";
  });
  function closeHandler() {
    emit("close", props.name.toString());
  }
  function clickHandler() {
    emit("click", props.name.toString());
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.icon != ""
    }, __props.icon != "" ? common_vendor.e({
      b: common_vendor.unref(uni_modules_uviewUltra_libs_function_test.image)(__props.icon)
    }, common_vendor.unref(uni_modules_uviewUltra_libs_function_test.image)(__props.icon) ? {
      c: __props.icon,
      d: common_vendor.s(imgStyle.value)
    } : {
      e: common_vendor.p({
        color: elIconColor.value,
        name: __props.icon,
        size: iconSize.value,
        class: "data-v-3e67a6dc"
      })
    }) : {}, {
      f: common_vendor.t(__props.text),
      g: common_vendor.s(textColor.value),
      h: common_vendor.n(`up-tag__text--${__props.type}`),
      i: common_vendor.n(__props.plain ? `up-tag__text--${__props.type}--plain` : ""),
      j: common_vendor.n(`up-tag__text--${__props.size}`),
      k: common_vendor.n(`up-tag--${__props.shape}`),
      l: common_vendor.n(!__props.plain ? `up-tag--${__props.type}` : ""),
      m: common_vendor.n(__props.plain ? `up-tag--${__props.type}--plain` : ""),
      n: common_vendor.n(`up-tag--${__props.size}`),
      o: common_vendor.n(__props.plain && __props.plainFill ? `up-tag--${__props.type}--plain--fill` : ""),
      p: common_vendor.o(clickHandler, "c8"),
      q: common_vendor.s({
        marginRight: __props.closable ? "10px" : 0,
        marginTop: __props.closable ? "10px" : 0
      }),
      r: common_vendor.s(style.value),
      s: __props.closable
    }, __props.closable ? {
      t: common_vendor.p({
        name: "close",
        size: closeSize.value,
        color: "#ffffff",
        class: "data-v-3e67a6dc"
      }),
      v: common_vendor.n(`up-tag__close--${__props.size}`),
      w: common_vendor.o(closeHandler, "47"),
      x: __props.closeColor
    } : {}, {
      y: common_vendor.gei(_ctx, ""),
      z: common_vendor.p({
        mode: "fade",
        show: __props.show,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-3e67a6dc",
        style: "display:flex"
      }),
      A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3e67a6dc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tag/up-tag.js.map
