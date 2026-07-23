"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upDivider_divider = require("./divider.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  _easycom_up_line_1();
}
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  _easycom_up_line();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-divider",
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getBoolean("divider.dashed")
    },
    // 是否细线
    hairline: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getBoolean("divider.hairline")
    },
    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getBoolean("divider.dot")
    },
    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getString("divider.textPosition")
    },
    // 文本内容
    text: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getString("divider.text")
    },
    // 文本大小
    textSize: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getNumber("divider.textSize")
    },
    // 文本颜色
    textColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getString("divider.textColor")
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upDivider_divider.defProps.getString("divider.lineColor")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const textStyle = common_vendor.computed(() => {
      const style = new common_vendor.UTSJSONObject({});
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.textSize);
      style["color"] = props.textColor;
      return style;
    });
    const leftLineStyle = common_vendor.computed(() => {
      const style = new common_vendor.UTSJSONObject({});
      if (props.textPosition === "left") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const rightLineStyle = common_vendor.computed(() => {
      const style = new common_vendor.UTSJSONObject({});
      if (props.textPosition === "right") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const clickHandler = () => {
      emit("click");
    };
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          color: __props.lineColor,
          customStyle: leftLineStyle.value,
          hairline: __props.hairline,
          dashed: __props.dashed,
          class: "data-v-06b4239d"
        }),
        b: __props.dot
      }, __props.dot ? {} : __props.text ? {
        d: common_vendor.t(__props.text),
        e: common_vendor.s(textStyle.value)
      } : {}, {
        c: __props.text,
        f: common_vendor.p({
          color: __props.lineColor,
          customStyle: rightLineStyle.value,
          hairline: __props.hairline,
          dashed: __props.dashed,
          class: "data-v-06b4239d"
        }),
        g: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        h: common_vendor.s(_ctx.$up.addStyle(_ctx.customStyle)),
        i: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        j: common_vendor.o(clickHandler, "f1"),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-06b4239d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-divider/up-divider.js.map
