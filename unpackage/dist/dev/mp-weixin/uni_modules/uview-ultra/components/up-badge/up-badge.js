"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upBadge_badge = require("./badge.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-badge"
}, { __name: "up-badge", props: {
  // 是否显示圆点
  isDot: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getBoolean("badge.isDot")
  },
  // 显示的内容
  value: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.value")
  },
  // 显示的内容
  modelValue: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.modelValue")
  },
  // 是否显示
  show: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getBoolean("badge.show")
  },
  // 最大值，超过最大值会显示 '{max}+'
  max: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getNumber("badge.max")
  },
  // 主题类型，error|warning|success|primary
  type: {
    type: String,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.type")
  },
  // 当数值为 0 时，是否展示 Badge
  showZero: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getBoolean("badge.showZero")
  },
  // 背景颜色，优先级比type高，如设置，type参数会失效
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.bgColor")
  },
  // 字体颜色
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.color")
  },
  // 徽标形状，circle-四角均为圆角，horn-左下角为直角
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.shape")
  },
  // 设置数字的显示方式，overflow|ellipsis|limit
  // overflow会根据max字段判断，超出显示`${max}+`
  // ellipsis会根据max判断，超出显示`${max}...`
  // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
  numberType: {
    type: String,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getString("badge.numberType")
  },
  // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
  offset: {
    type: Array,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getArray("badge.offset")
  },
  // 是否反转背景和字体颜色
  inverted: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getBoolean("badge.inverted")
  },
  // 是否绝对定位
  absolute: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upBadge_badge.badgeProps.getBoolean("badge.absolute")
  }
}, setup(__props) {
  const props = __props;
  const badgeStyle = common_vendor.computed(() => {
    const style = new UTSJSONObject({});
    if (props.color != "") {
      style["color"] = props.color;
    }
    if (props.bgColor != "" && !props.inverted) {
      style["backgroundColor"] = props.bgColor;
    }
    if (props.absolute) {
      style["position"] = "absolute";
      let offsetArray = props.offset;
      if (offsetArray.length > 0) {
        const top_1 = offsetArray[0];
        style["top"] = uni_modules_uviewUltra_libs_function_index.addUnit(top_1);
        if (offsetArray.length == 2) {
          style["right"] = uni_modules_uviewUltra_libs_function_index.addUnit(offsetArray[1]);
        } else {
          style["right"] = uni_modules_uviewUltra_libs_function_index.addUnit(top_1);
        }
      }
    }
    return style;
  });
  const showValue = common_vendor.computed(() => {
    let valueReturn = "";
    switch (props.numberType.toString()) {
      case "overflow":
        valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? props.max.toString() + "+" : props.value.toString();
        break;
      case "ellipsis":
        valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? "..." : props.value.toString();
        break;
      case "limit":
        valueReturn = parseInt(props.value.toString()) > 999 ? parseInt(props.value.toString()) >= 9999 ? (Math.floor(parseInt(props.value.toString()) / 1e4 * 100) / 100).toString() + "w" : (Math.floor(parseInt(props.value.toString()) / 1e3 * 100) / 100).toString() + "k" : props.value.toString();
        break;
      default:
        valueReturn = props.value.toString();
    }
    return valueReturn;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show && ((parseInt(__props.value.toString()) == 0 ? __props.showZero : true) || __props.isDot)
    }, __props.show && ((parseInt(__props.value.toString()) == 0 ? __props.showZero : true) || __props.isDot) ? {
      b: common_vendor.t(__props.isDot ? "" : showValue.value),
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
      d: common_vendor.n(__props.isDot ? "up-badge--dot" : "up-badge--not-dot"),
      e: common_vendor.n(__props.inverted ? "up-badge--inverted" : ""),
      f: common_vendor.n(__props.shape === "horn" ? "up-badge--horn" : ""),
      g: common_vendor.n(__props.inverted ? `up-badge--${__props.type}--inverted` : `up-badge--${__props.type}`),
      h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      i: common_vendor.s(_ctx.$upAddStyle(_ctx.customStyle)),
      j: common_vendor.s(badgeStyle.value),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    } : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d382ba3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-badge/up-badge.js.map
