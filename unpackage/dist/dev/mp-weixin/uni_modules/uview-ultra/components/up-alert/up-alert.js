"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upAlert_alert = require("./alert.js");
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
  //...mpSharedMpOptions,
  name: "up-alert"
}, { __name: "up-alert", props: {
  // 主题，success/warning/info/error
  type: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getString("alert.type")
  },
  // 辅助性文字
  description: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getString("alert.description")
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getBoolean("alert.closable")
  },
  // 是否显示图标
  showIcon: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getBoolean("alert.showIcon")
  },
  // 浅或深色调，light-浅色，dark-深色
  effect: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getString("alert.effect")
  },
  // 文字是否居中
  center: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getBoolean("alert.center")
  },
  // 字体大小
  fontSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getNumber("alert.fontSize")
  },
  // 自定义样式
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  // 标题文字
  title: {
    type: String,
    default: uni_modules_uviewUltra_components_upAlert_alert.defProps.getString("alert.title", "")
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const show = common_vendor.ref(true);
  const style1 = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize),
      textAlign: props.center ? "center" : "left"
    });
  });
  const iconColor = common_vendor.computed(() => {
    return props.effect == "light" ? props.type : "#ffffff";
  });
  const iconName = common_vendor.computed(() => {
    switch (props.type) {
      case "success":
        return "checkmark-circle-fill";
      case "error":
        return "close-circle-fill";
      case "warning":
        return "error-circle-fill";
      case "info":
        return "info-circle-fill";
      case "primary":
        return "more-circle-fill";
      default:
        return "error-circle-fill";
    }
  });
  const clickHandler = () => {
    emit("click");
  };
  const closeHandler = () => {
    show.value = false;
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.showIcon
    }, __props.showIcon ? {
      b: common_vendor.p({
        name: iconName.value,
        size: "18",
        color: iconColor.value,
        class: "data-v-63fe4c88"
      })
    } : {}, {
      c: __props.title
    }, __props.title ? {
      d: common_vendor.t(__props.title),
      e: common_vendor.s(style1.value),
      f: common_vendor.n(__props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${__props.type}--light`)
    } : {}, {
      g: __props.description
    }, __props.description ? {
      h: common_vendor.t(__props.description),
      i: common_vendor.s(style1.value),
      j: common_vendor.n(__props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${__props.type}--light`)
    } : {}, {
      k: common_vendor.s({
        paddingRight: __props.closable ? "20px" : 0
      }),
      l: __props.closable
    }, __props.closable ? {
      m: common_vendor.p({
        name: "close",
        color: iconColor.value,
        size: "15",
        class: "data-v-63fe4c88"
      }),
      n: common_vendor.o(closeHandler, "2e")
    } : {}, {
      o: common_vendor.n(`up-alert--${__props.type}--${__props.effect}`),
      p: common_vendor.o(clickHandler, "bf"),
      q: common_vendor.s(_ctx.$upAddStyle(__props.customStyle)),
      r: common_vendor.gei(_ctx, ""),
      s: common_vendor.p({
        mode: "fade",
        show: show.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-63fe4c88"
      }),
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-63fe4c88"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-alert/up-alert.js.map
