"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCell_cell = require("./cell.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  (_easycom_up_icon_1 + _easycom_up_line_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_line)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-cell"
}, { __name: "up-cell", props: {
  customStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customClass: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.title")
  },
  label: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.label")
  },
  value: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.value")
  },
  icon: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.icon")
  },
  iconStyle: {
    type: [String, Object],
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getAny("cell.iconStyle")
  },
  rightIcon: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.rightIcon")
  },
  rightIconStyle: {
    type: [String, Object],
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getAny("cell.rightIconStyle")
  },
  size: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.size")
  },
  center: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getBoolean("cell.center")
  },
  url: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.url")
  },
  name: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.name")
  },
  linkType: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.linkType")
  },
  clickable: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getBoolean("cell.clickable")
  },
  isLink: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getBoolean("cell.isLink")
  },
  arrowDirection: {
    type: String,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getString("cell.arrowDirection")
  },
  border: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getBoolean("cell.border")
  },
  disabled: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getBoolean("cell.disabled")
  },
  titleStyle: {
    type: Object,
    default: uni_modules_uviewUltra_components_upCell_cell.defProps.getAny("cell.titleStyle")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emits = __emit;
  const testEmpty = function(val) {
    return uni_modules_uviewUltra_libs_function_test.empty(val);
  };
  const titleTextStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.titleStyle);
  });
  const clickHandler = (e = null) => {
    if (props.disabled)
      return null;
    emits("click", new common_vendor.UTSJSONObject({
      name: props.name
    }));
    if (!props.isLink)
      return null;
    if (props.url != "") {
      common_vendor.index.navigateTo({
        url: props.url
      });
    }
  };
  __expose({
    testEmpty
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["icon"] != null || __props.icon != ""
    }, _ctx.$slots["icon"] != null || __props.icon != "" ? common_vendor.e({
      b: _ctx.$slots["icon"] != null
    }, _ctx.$slots["icon"] != null ? {} : {
      c: common_vendor.p({
        name: __props.icon,
        ["custom-style"]: __props.iconStyle,
        size: __props.size === "large" ? "22px" : "18px",
        class: "data-v-7b2bd41d"
      })
    }) : {}, {
      d: _ctx.$slots["title"] != null && __props.title == ""
    }, _ctx.$slots["title"] != null && __props.title == "" ? {} : {
      e: common_vendor.t(__props.title),
      f: common_vendor.s(titleTextStyle.value),
      g: common_vendor.n(__props.disabled && "up-cell--disabled"),
      h: common_vendor.n(__props.size === "large" && "up-cell__title-text--large")
    }, {
      i: __props.label
    }, __props.label ? {
      j: common_vendor.t(__props.label),
      k: common_vendor.n(__props.disabled && "up-cell--disabled"),
      l: common_vendor.n(__props.size === "large" && "up-cell__label--large")
    } : {}, {
      m: testEmpty(__props.value) == false
    }, testEmpty(__props.value) == false ? {
      n: common_vendor.t(__props.value),
      o: common_vendor.n(__props.disabled && "up-cell--disabled"),
      p: common_vendor.n(__props.size === "large" && "up-cell__value--large")
    } : {}, {
      q: _ctx.$slots["right-icon"] != null || __props.isLink
    }, _ctx.$slots["right-icon"] != null || __props.isLink ? common_vendor.e({
      r: __props.rightIcon
    }, __props.rightIcon ? {
      s: common_vendor.p({
        name: __props.rightIcon,
        ["custom-style"]: __props.rightIconStyle,
        color: __props.disabled ? "#c8c9cc" : "info",
        size: __props.size === "large" ? "18px" : "16px",
        class: "data-v-7b2bd41d"
      })
    } : {}, {
      t: common_vendor.n(`up-cell__right-icon-wrap--${__props.arrowDirection}`)
    }) : {}, {
      v: _ctx.$slots["righticon"] != null
    }, _ctx.$slots["righticon"] != null ? {
      w: common_vendor.n(`up-cell__right-icon-wrap--${__props.arrowDirection}`)
    } : {}, {
      x: common_vendor.n(__props.center && "up-cell--center"),
      y: common_vendor.n(__props.size === "large" && "up-cell__body--large"),
      z: __props.border
    }, __props.border ? {
      A: common_vendor.p({
        class: "data-v-7b2bd41d"
      })
    } : {}, {
      B: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      C: common_vendor.n(__props.customClass),
      D: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      E: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      F: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      G: !__props.disabled && (__props.clickable || __props.isLink) ? "up-cell--clickable" : "",
      H: common_vendor.o(clickHandler, "4b")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b2bd41d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cell/up-cell.js.map
