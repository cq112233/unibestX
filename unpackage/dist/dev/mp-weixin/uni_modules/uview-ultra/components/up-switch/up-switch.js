"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSwitch_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
require("../../types/common.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-switch",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSwitch_props.propsSwitch],
  watch: {
    modelValue: {
      immediate: true,
      handler(n = null) {
        if (n !== this.inactiveValue && n !== this.activeValue) {
          uni_modules_uviewUltra_libs_function_index.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");
        }
      }
    }
  },
  data() {
    return {
      bgColor: "#ffffff"
    };
  },
  computed: {
    switchClass() {
      let classes = ["up-switch", "cursor-pointer"];
      if (this.disabled) {
        classes.push("up-switch--disabled");
      }
      if (this.isActive) {
        classes.push("up-switch--on");
      } else {
        classes.push("up-switch--off");
      }
      return classes.join(" ");
    },
    isActive() {
      return this.modelValue === this.activeValue;
    },
    switchStyle() {
      let style = new UTSJSONObject(
        {}
        // 仅当 size 不是默认值 25 时，才把 width 和 height 写入内联样式中，避免内联属性污染
      );
      if (this.size.toString() != "25") {
        style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) * 2 + 2);
        style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) + 2);
      }
      if (this.isActive) {
        style["borderColor"] = "rgba(0, 0, 0, 0)";
      } else {
        if (this.customInactiveColor) {
          style["borderColor"] = "rgba(0, 0, 0, 0)";
        } else {
          style["borderColor"] = "rgba(0, 0, 0, 0.12)";
        }
      }
      return style;
    },
    bgActiveStyle() {
      let style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) * 2 + 2);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) + 2);
      if (this.activeColor != "#2979ff") {
        style["backgroundColor"] = this.activeColor;
      }
      return style;
    },
    nodeStyle() {
      let style = new UTSJSONObject(
        {}
        // 如果自定义非激活颜色，将node圆点的尺寸减少两个像素，让其与外边框距离更大一点
        // @ts-ignore
      );
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()));
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()));
      const translateX = this.isActive ? uni_modules_uviewUltra_libs_function_index.addUnit(this.space) : uni_modules_uviewUltra_libs_function_index.addUnit(this.size);
      style["transform"] = `translateX(-${translateX})`;
      return style;
    },
    bgStyle() {
      let style = new UTSJSONObject(
        {}
        // 这里宽度设置为 parseInt(size) * 2，刚好填满容器内部宽度，防止关闭时两侧露出绿色背景
        // @ts-ignore
      );
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()) * 2);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(this.size.toString()));
      style["backgroundColor"] = this.inactiveColor;
      style["transform"] = `scale(${this.isActive ? 0 : 1})`;
      return style;
    },
    customInactiveColor() {
      return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff";
    }
  },
  emits: ["update:modelValue", "change"],
  methods: {
    getPx(e = null) {
      return uni_modules_uviewUltra_libs_function_index.getPx(e);
    },
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    clickHandler() {
      if (!this.disabled && !this.loading) {
        const oldValue = this.isActive ? this.inactiveValue : this.activeValue;
        if (!this.asyncChange) {
          this.$emit("update:modelValue", oldValue);
        }
        this.$nextTick(() => {
          this.$emit("change", oldValue);
        });
      }
    }
  }
});
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  _easycom_up_loading_icon2();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
if (!Math) {
  _easycom_up_loading_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $options.isActive
  }, $options.isActive ? {
    b: common_vendor.s($options.bgActiveStyle)
  } : {}, {
    c: !$options.isActive
  }, !$options.isActive ? {
    d: common_vendor.s($options.bgStyle)
  } : {}, {
    e: common_vendor.p({
      show: _ctx.loading,
      mode: "circle",
      timingFunction: "linear",
      color: _ctx.modelValue == _ctx.activeValue ? _ctx.activeColor : "#AAABAD",
      size: parseInt($options.getPx(_ctx.size)) * 0.6,
      class: "data-v-83df4f71"
    }),
    f: common_vendor.sei("r0-83df4f71", "view", "up-switch__node"),
    g: common_vendor.n(_ctx.modelValue == _ctx.activeValue ? "up-switch__node--on" : ""),
    h: common_vendor.s($options.nodeStyle),
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    j: common_vendor.n($options.switchClass),
    k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    l: common_vendor.s($options.switchStyle),
    m: common_vendor.s($options.addStyle(_ctx.customStyle)),
    n: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    o: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "35")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83df4f71"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-switch/up-switch.js.map
