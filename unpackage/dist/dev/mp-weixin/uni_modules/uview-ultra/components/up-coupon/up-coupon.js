"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_tag_1 = common_vendor.resolveComponent("up-tag");
  _easycom_up_tag_1();
}
const _easycom_up_tag = () => "../up-tag/up-tag.js";
if (!Math) {
  _easycom_up_tag();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-coupon"
}, { __name: "up-coupon", props: {
  amount: {
    type: [String, Number],
    default: ""
  },
  unit: {
    type: String,
    default: "￥"
  },
  unitPosition: {
    type: String,
    default: "left"
  },
  limit: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "优惠券"
  },
  desc: {
    type: String,
    default: ""
  },
  time: {
    type: String,
    default: ""
  },
  actionText: {
    type: String,
    default: "使用"
  },
  shape: {
    type: String,
    default: "coupon"
  },
  size: {
    type: String,
    default: "medium"
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const couponStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.bgColor.length > 0)
      style["backgroundColor"] = props.bgColor;
    return style;
  });
  function hasType() {
    return props.type.length > 0;
  }
  function handleClick() {
    if (props.disabled)
      return null;
    emit("click");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.unitPosition == "left"
    }, __props.unitPosition == "left" ? common_vendor.e({
      b: __props.unitPosition == "left"
    }, __props.unitPosition == "left" ? {
      c: common_vendor.t(__props.unit)
    } : {}, {
      d: common_vendor.r("unit", {
        unit: __props.unit,
        unitPosition: __props.unitPosition
      })
    }) : {}, {
      e: common_vendor.t(__props.amount),
      f: common_vendor.r("amount", {
        amount: __props.amount
      }),
      g: __props.unitPosition == "right"
    }, __props.unitPosition == "right" ? common_vendor.e({
      h: __props.unitPosition == "right"
    }, __props.unitPosition == "right" ? {
      i: common_vendor.t(__props.unit)
    } : {}, {
      j: common_vendor.r("unit", {
        unit: __props.unit,
        unitPosition: __props.unitPosition
      })
    }) : {}, {
      k: __props.limit
    }, __props.limit ? {
      l: common_vendor.t(__props.limit)
    } : {}, {
      m: common_vendor.r("limit", {
        limit: __props.limit
      }),
      n: common_vendor.t(__props.title),
      o: common_vendor.r("title", {
        title: __props.title
      }),
      p: __props.desc
    }, __props.desc ? {
      q: common_vendor.t(__props.desc)
    } : {}, {
      r: common_vendor.r("desc", {
        desc: __props.desc
      }),
      s: __props.time
    }, __props.time ? {
      t: common_vendor.t(__props.time)
    } : {}, {
      v: common_vendor.r("time", {
        time: __props.time
      }),
      w: common_vendor.p({
        type: "error",
        text: __props.actionText,
        bgColor: hasType() ? "transparent" : "#eb433d",
        borderColor: hasType() ? "#eee" : "#eb433d",
        borderRadius: "6px",
        size: "medium",
        shape: __props.circle ? "circle" : "square",
        class: "up-coupon__action-text data-v-c916a564"
      }),
      x: common_vendor.r("action", {
        actionText: __props.actionText,
        circle: __props.circle
      }),
      y: __props.shape == "envelope"
    }, __props.shape == "envelope" ? {} : {}, {
      z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      A: common_vendor.n(`up-coupon--${__props.shape}`),
      B: common_vendor.n(`up-coupon--${__props.type}`),
      C: common_vendor.n(`up-coupon--${__props.size}`),
      D: common_vendor.n({
        "up-coupon--disabled": __props.disabled
      }),
      E: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      F: common_vendor.s(couponStyle.value),
      G: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      H: common_vendor.o(handleClick, "e5")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c916a564"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-coupon/up-coupon.js.map
