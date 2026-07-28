"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_components_upNumberKeyboard_props = require("./props.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-number-keyboard",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNumberKeyboard_props.propsNumberKeyboard],
  emits: ["change", "backspace"],
  data() {
    return {
      backspace: "backspace",
      dot: ".",
      timer: null,
      cardX: "X"
      // 身份证的X符号
    };
  },
  computed: {
    // 键盘需要显示的内容
    numList() {
      let tmp = [];
      if (this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        } else {
          return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
      } else if (!this.dotDisabled && this.mode == "number") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
        } else {
          return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
        }
      } else if (this.mode == "card") {
        if (!this.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
        } else {
          return uni_modules_uviewUltra_libs_function_index.randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
        }
      }
      return tmp;
    }
  },
  created() {
  },
  methods: {
    // 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
    btnBgGray(index) {
      if (!this.random && index == 9 && (this.mode != "number" || this.mode == "number" && !this.dotDisabled)) {
        return true;
      } else {
        return false;
      }
    },
    // 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
    itemStyle(index) {
      let style = new UTSJSONObject({});
      if (this.mode == "number" && this.dotDisabled && index == 9) {
        style["width"] = "464rpx";
      }
      return style;
    },
    // 点击退格键
    backspaceClick() {
      var _a;
      this.$emit("backspace");
      clearInterval((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
      this.timer = setInterval(() => {
        this.$emit("backspace");
      }, 250);
    },
    clearTimer() {
      var _a;
      clearInterval((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    },
    // 获取键盘显示的内容
    keyboardClick(val = null) {
      if (!this.dotDisabled && val != this.dot && val != this.cardX) {
        val = parseInt(val.toString());
      }
      this.$emit("change", val);
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.f($options.numList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.s($options.itemStyle(index)),
        c: common_vendor.o(($event) => $options.keyboardClick(item), index),
        d: index
      };
    }),
    b: common_vendor.p({
      name: "backspace",
      color: "#303133",
      size: "28",
      class: "data-v-d09600de"
    }),
    c: common_vendor.o((...args) => $options.backspaceClick && $options.backspaceClick(...args), "08"),
    d: common_vendor.o((...args) => $options.clearTimer && $options.clearTimer(...args), "73"),
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    f: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args), "fc"),
    g: `${_ctx.u_s_b_h}px`,
    h: `${_ctx.u_s_a_i_b}px`,
    i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d09600de"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js.map
