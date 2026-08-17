"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRowNotice_rowNotice = require("./rowNotice.js");
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
  __name: "up-row-notice",
  props: {
    text: {
      type: String,
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getString("rowNotice.text")
    },
    icon: {
      type: String,
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getString("rowNotice.icon")
    },
    mode: {
      type: String,
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getString("rowNotice.mode")
    },
    color: {
      type: String,
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getString("rowNotice.color")
    },
    bgColor: {
      type: String,
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getString("rowNotice.bgColor")
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getNumber("rowNotice.fontSize")
    },
    speed: {
      type: [String, Number],
      default: uni_modules_uviewUltra_components_upRowNotice_rowNotice.defProps.getNumber("rowNotice.speed")
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var _b;
    var __emit = _a.emit;
    const props = __props;
    const instance = (_b = common_vendor.getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const transform = common_vendor.ref("");
    const animationFrameId = common_vendor.ref(0);
    const startTime = common_vendor.ref(0);
    const currentPosition = common_vendor.ref(0);
    const scrollWidth = common_vendor.ref(0);
    const containerWidth = common_vendor.ref(0);
    const isAnimating = common_vendor.ref(false);
    common_vendor.ref(true);
    common_vendor.ref(false);
    const emit = __emit;
    const textStyle = common_vendor.computed(() => {
      let style = new common_vendor.UTSJSONObject({});
      style["whiteSpace"] = "nowrap !important";
      style["color"] = props.color;
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize);
      return style;
    });
    const animationStyle = common_vendor.computed(() => {
      let style = new common_vendor.UTSJSONObject({});
      style["transform"] = transform.value;
      return style;
    });
    const innerText = common_vendor.computed(() => {
      let result = [], len = 20;
      const textArr = props.text.split("");
      for (let i = 0; i < textArr.length; i += len) {
        result.push(textArr.slice(i, i + len).join(""));
      }
      return result;
    });
    const clickHandler = (index) => {
      emit("click");
    };
    const close = () => {
      emit("close");
    };
    function animate(timestamp) {
      if (!isAnimating.value)
        return null;
      if (startTime.value == 0)
        startTime.value = timestamp;
      const elapsed = timestamp - startTime.value;
      const speedNum = parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.speed));
      const distance = speedNum * elapsed / 1e3;
      currentPosition.value = containerWidth.value - distance;
      if (currentPosition.value <= -scrollWidth.value) {
        startTime.value = timestamp;
        currentPosition.value = containerWidth.value;
      }
      transform.value = `translateX(${currentPosition.value}px)`;
      animationFrameId.value = setTimeout(() => {
        return animate(Date.now());
      }, 16);
    }
    const startScroll = () => {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        var _a2, _b2;
        if (animationFrameId.value > 0) {
          clearTimeout(animationFrameId.value);
          animationFrameId.value = 0;
        }
        yield uni_modules_uviewUltra_libs_function_index.sleep(10);
        const textRect = yield uni_modules_uviewUltra_libs_function_index.upGetRect(".up-notice__content__text", false, instance);
        const containerRect = yield uni_modules_uviewUltra_libs_function_index.upGetRect(".up-notice__content", false, instance);
        scrollWidth.value = (_a2 = textRect.width) !== null && _a2 !== void 0 ? _a2 : 0;
        containerWidth.value = (_b2 = containerRect.width) !== null && _b2 !== void 0 ? _b2 : 0;
        currentPosition.value = containerWidth.value;
        startTime.value = 0;
        isAnimating.value = true;
        animate(0);
      });
    };
    const stopScroll = () => {
      isAnimating.value = false;
      if (animationFrameId.value > 0) {
        clearTimeout(animationFrameId.value);
        animationFrameId.value = 0;
      }
    };
    common_vendor.watch(() => {
      return props.text;
    }, (newValue) => {
      startScroll();
      if (!uni_modules_uviewUltra_libs_function_test.string(newValue)) {
        uni_modules_uviewUltra_libs_function_index.error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    }, { immediate: true });
    common_vendor.watch(() => {
      return props.fontSize;
    }, () => {
      startScroll();
    });
    common_vendor.watch(() => {
      return props.speed;
    }, () => {
      startScroll();
    });
    common_vendor.onMounted(() => {
      startScroll();
      if (!uni_modules_uviewUltra_libs_function_test.string(props.text)) {
        uni_modules_uviewUltra_libs_function_index.error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    });
    common_vendor.onBeforeUnmount(() => {
      stopScroll();
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
          class: "data-v-1b715eeb"
        })
      } : {}, {
        c: common_vendor.f(innerText.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        d: common_vendor.s(textStyle.value),
        e: common_vendor.sei("r0-1b715eeb", "view", "up-notice__content__text"),
        f: common_vendor.s(animationStyle.value),
        g: common_vendor.sei("r1-1b715eeb", "view", "up-notice__content"),
        h: ["link", "closable"].includes(__props.mode)
      }, ["link", "closable"].includes(__props.mode) ? common_vendor.e({
        i: __props.mode === "link"
      }, __props.mode === "link" ? {
        j: common_vendor.p({
          name: "arrow-right",
          size: 17,
          color: __props.color,
          class: "data-v-1b715eeb"
        })
      } : {}, {
        k: __props.mode === "closable"
      }, __props.mode === "closable" ? {
        l: common_vendor.o(close, "f1"),
        m: common_vendor.p({
          name: "close",
          size: 16,
          color: __props.color,
          class: "data-v-1b715eeb"
        })
      } : {}) : {}, {
        n: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        o: common_vendor.o(clickHandler, "0b"),
        p: `${_ctx.u_s_b_h}px`,
        q: `${_ctx.u_s_a_i_b}px`,
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b715eeb"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-row-notice/up-row-notice.js.map
