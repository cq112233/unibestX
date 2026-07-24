"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upColumnNotice_columnNotice = require("./columnNotice.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-column-notice",
  props: {
    text: {
      type: Array,
      default: () => {
        return [];
      }
    },
    icon: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getString("columnNotice.icon");
      }
    },
    mode: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getString("columnNotice.mode");
      }
    },
    color: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getString("columnNotice.color");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getString("columnNotice.bgColor");
      }
    },
    fontSize: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getNumber("columnNotice.fontSize");
      }
    },
    speed: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getNumber("columnNotice.speed");
      }
    },
    step: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getBoolean("columnNotice.step");
      }
    },
    duration: {
      type: [String, Number],
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getNumber("columnNotice.duration");
      }
    },
    disableTouch: {
      type: Boolean,
      default: () => {
        return uni_modules_uviewUltra_components_upColumnNotice_columnNotice.defProps.getBoolean("columnNotice.disableTouch");
      }
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const index = common_vendor.ref(0);
    const textStyle = common_vendor.computed(() => {
      let style = new common_vendor.UTSJSONObject({});
      style["color"] = props.color;
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize);
      return style;
    });
    common_vendor.computed(() => {
      if (props.mode == "horizontal")
        return false;
      else
        return true;
    });
    const noticeChange = (e) => {
      index.value = e.detail.current;
    };
    const clickHandler = () => {
      emit("click", index.value);
    };
    const close = () => {
      emit("close");
    };
    common_vendor.watch(() => {
      return props.text;
    }, (newValue) => {
      if (!uni_modules_uviewUltra_libs_function_test.array(newValue)) {
        uni_modules_uviewUltra_libs_function_index.error("noticebar组件direction为column时，要求text参数为数组形式");
      }
    }, {
      immediate: true
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: __props.icon
      }, __props.icon ? {
        b: common_vendor.p({
          name: __props.icon,
          color: __props.color,
          size: "19",
          class: "data-v-94c896de"
        })
      } : {}, {
        c: common_vendor.f(__props.text, (item, index2, i0) => {
          return {
            a: common_vendor.t(item),
            b: index2
          };
        }),
        d: common_vendor.s(textStyle.value),
        e: __props.disableTouch,
        f: __props.step ? false : true,
        g: __props.duration,
        h: common_vendor.o(noticeChange, "91"),
        i: ["link", "closable"].includes(__props.mode)
      }, ["link", "closable"].includes(__props.mode) ? common_vendor.e({
        j: __props.mode === "link"
      }, __props.mode === "link" ? {
        k: common_vendor.p({
          name: "arrow-right",
          size: 17,
          color: __props.color,
          class: "data-v-94c896de"
        })
      } : {}, {
        l: __props.mode === "closable"
      }, __props.mode === "closable" ? {
        m: common_vendor.o(close, "e4"),
        n: common_vendor.p({
          name: "close",
          size: 16,
          color: __props.color,
          class: "data-v-94c896de"
        })
      } : {}) : {}, {
        o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        p: common_vendor.o(clickHandler, "0b"),
        q: `${_ctx.u_s_b_h}px`,
        r: `${_ctx.u_s_a_i_b}px`,
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94c896de"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-column-notice/up-column-notice.js.map
