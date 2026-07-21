"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upBackTop_backtop = require("./backtop.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "up-back-top",
  props: {
    // 返回顶部的形状，circle-圆形，square-方形
    mode: {
      type: String,
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getString("backtop.mode")
    },
    // 自定义图标
    icon: {
      type: String,
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getString("backtop.icon")
    },
    // 提示文字
    text: {
      type: String,
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getString("backtop.text")
    },
    // 返回顶部滚动时间
    duration: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.duration")
    },
    // 滚动距离
    scrollTop: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.scrollTop")
    },
    // 距离顶部多少距离显示，单位px
    top: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.top")
    },
    // 返回顶部按钮到底部的距离，单位px
    bottom: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.bottom")
    },
    // 返回顶部按钮到右边的距离，单位px
    right: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.right")
    },
    // 层级
    zIndex: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getNumber("backtop.zIndex")
    },
    // 图标的样式，对象形式
    iconStyle: {
      type: Object,
      default: () => {
        var _a;
        return (_a = uni_modules_uviewUltra_components_upBackTop_backtop.defProps.getAny("backtop.iconStyle")) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
      }
    },
    // 定义需要用到的外部样式
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const prop = __props;
    const emit = __emit;
    const backTopStyle = common_vendor.computed(() => {
      const style = new UTSJSONObject({
        bottom: uni_modules_uviewUltra_libs_function_index.addUnit(prop.bottom),
        right: uni_modules_uviewUltra_libs_function_index.addUnit(prop.right),
        width: "40px",
        height: "40px",
        position: "fixed",
        zIndex: parseInt(prop.zIndex.toString())
      });
      return style;
    });
    const show = common_vendor.ref(false);
    common_vendor.watch(() => {
      return prop.scrollTop;
    }, (newVal = null) => {
      show.value = parseInt(uni_modules_uviewUltra_libs_function_index.getPx(newVal)) > parseInt(uni_modules_uviewUltra_libs_function_index.getPx(prop.top.toString()));
    }, { immediate: true });
    const contentStyle = common_vendor.computed(() => {
      const style = new UTSJSONObject({});
      let radius = "0px";
      if (prop.mode === "circle") {
        radius = "100px";
      } else {
        radius = "4px";
      }
      style["borderRadius"] = radius;
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(prop.customStyle));
    });
    function backToTop(e = null) {
      common_vendor.index.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(prop.duration.toString()),
        fail: (_err) => {
        }
      }));
      emit("click", e);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: show.value
      }, show.value ? common_vendor.e({
        b: _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null
      }, _ctx.$slots["default"] == null && _ctx.$slots["$default"] == null ? common_vendor.e({
        c: common_vendor.p({
          name: __props.icon,
          ["custom-style"]: __props.iconStyle,
          class: "data-v-5283f3ea"
        }),
        d: __props.text
      }, __props.text ? {
        e: common_vendor.t(__props.text)
      } : {}) : {}, {
        f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        g: common_vendor.s(backTopStyle.value),
        h: common_vendor.s(contentStyle.value),
        i: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        j: common_vendor.o(backToTop, "08"),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      }) : {});
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5283f3ea"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-back-top/up-back-top.js.map
