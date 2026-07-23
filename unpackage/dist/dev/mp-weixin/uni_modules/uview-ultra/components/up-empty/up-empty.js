"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const uni_modules_uviewUltra_components_upEmpty_empty = require("./empty.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-empty"
}, { __name: "up-empty", props: {
  // 内置图标名称，或图片路径，建议绝对路径
  icon: {
    type: String,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getString("empty.icon")
  },
  // 提示文字
  text: {
    type: String,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getString("empty.text")
  },
  // 文字颜色
  textColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getString("empty.textColor")
  },
  // 文字大小
  textSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getNumber("empty.textSize")
  },
  // 图标的颜色
  iconColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getString("empty.iconColor")
  },
  // 图标的大小
  iconSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getNumber("empty.iconSize")
  },
  // 选择预置的图标类型
  mode: {
    type: String,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getString("empty.mode")
  },
  // 图标宽度，单位px
  width: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getNumber("empty.width")
  },
  // 图标高度，单位px
  height: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getNumber("empty.height")
  },
  // 是否显示组件
  show: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getBoolean("empty.show")
  },
  // 组件距离上一个元素之间的距离，默认px单位
  marginTop: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upEmpty_empty.defProps.getNumber("empty.marginTop")
  }
  // 自定义样式
  // ...commonProps
}, emits: ["click", "close"], setup(__props, _a) {
  _a.emit;
  common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const icons = new common_vendor.UTSJSONObject(
    {
      car: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.car", new common_vendor.UTSJSONObject({})),
      page: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.page", new common_vendor.UTSJSONObject({})),
      search: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.search", new common_vendor.UTSJSONObject({})),
      address: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.address", new common_vendor.UTSJSONObject({})),
      wifi: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.wifi", new common_vendor.UTSJSONObject({})),
      order: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.order", new common_vendor.UTSJSONObject({})),
      coupon: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.coupon", new common_vendor.UTSJSONObject({})),
      favor: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.favor", new common_vendor.UTSJSONObject({})),
      permission: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.permission", new common_vendor.UTSJSONObject({})),
      history: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.history", new common_vendor.UTSJSONObject({})),
      news: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.news", new common_vendor.UTSJSONObject({})),
      message: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.message", new common_vendor.UTSJSONObject({})),
      list: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.list", new common_vendor.UTSJSONObject({})),
      data: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.data", new common_vendor.UTSJSONObject({})),
      comment: uni_modules_uviewUltra_libs_i18n_index.t("up.empty.comment", new common_vendor.UTSJSONObject({}))
    }
    // 计算属性
    // 组件样式
  );
  const emptyStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["marginTop"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.marginTop);
    return style;
  });
  const textStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["color"] = props.textColor;
    style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.textSize);
    return style;
  });
  const isSrc = common_vendor.computed(() => {
    return props.icon.indexOf("/") >= 0;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show
    }, __props.show ? common_vendor.e({
      b: !isSrc.value
    }, !isSrc.value ? {
      c: common_vendor.p({
        name: __props.mode === "message" ? "chat" : `empty-${__props.mode}`,
        size: __props.iconSize,
        color: __props.iconColor,
        ["margin-top"]: "14",
        class: "data-v-0d55c80f"
      })
    } : {
      d: _ctx.$up.addUnit(__props.width),
      e: _ctx.$up.addUnit(__props.height),
      f: __props.icon
    }, {
      g: common_vendor.t(__props.text != "" ? __props.text : icons[__props.mode]),
      h: common_vendor.s(textStyle.value),
      i: _ctx.$slots["default"] != null || _ctx.$slots["$default"] != null
    }, _ctx.$slots["default"] != null || _ctx.$slots["$default"] != null ? {} : {}, {
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.s(emptyStyle.value),
      l: common_vendor.s(_ctx.$up.addStyle(_ctx.customStyle)),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0d55c80f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-empty/up-empty.js.map
