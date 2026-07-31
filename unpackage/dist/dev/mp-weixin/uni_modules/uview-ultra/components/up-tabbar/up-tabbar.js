"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTabbar_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-tabbar",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTabbar_props.propsTabbar],
  data() {
    return {
      placeholderHeight: 0
    };
  },
  emits: ["change"],
  computed: {
    tabbarStyle() {
      const style = new common_vendor.UTSJSONObject({
        zIndex: this.zIndex
      });
      if (this.borderColor != "") {
        style["borderColor"] = this.borderColor + " !important";
      }
      if (this.backgroundColor != "") {
        style["backgroundColor"] = this.backgroundColor;
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    },
    // 监听多个参数的变化，通过在computed执行对应的操作
    updateChild() {
      return [this.value, this.activeColor, this.inactiveColor];
    },
    updatePlaceholder() {
      return [this.fixed, this.placeholder];
    }
  },
  watch: {
    updateChild() {
      this.updateChildren();
    },
    updatePlaceholder() {
      this.setPlaceholderHeight();
    }
  },
  created() {
  },
  mounted() {
    this.setPlaceholderHeight();
  },
  methods: {
    updateChildren() {
      if (this.children.length > 0) {
        this.children.map((child) => {
          child === null || child === void 0 ? null : child.$callMethod("updateFromParent");
        });
      }
    },
    // 设置用于防止塌陷元素的高度
    setPlaceholderHeight() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        if (!this.fixed || !this.placeholder)
          return Promise.resolve(null);
        yield uni_modules_uviewUltra_libs_function_index.sleep(20);
        this.upGetRect(".up-tabbar__content").then((size) => {
          var _a;
          this.placeholderHeight = (_a = size.height) !== null && _a !== void 0 ? _a : 50;
        });
      });
    },
    noop() {
    }
  }
});
if (!Array) {
  const _easycom_up_safe_bottom2 = common_vendor.resolveComponent("up-safe-bottom");
  _easycom_up_safe_bottom2();
}
const _easycom_up_safe_bottom = () => "../up-safe-bottom/up-safe-bottom.js";
if (!Math) {
  _easycom_up_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.safeAreaInsetBottom
  }, _ctx.safeAreaInsetBottom ? {
    b: common_vendor.p({
      class: "data-v-1a1a4fcf"
    })
  } : {}, {
    c: common_vendor.sei("r0-1a1a4fcf", "view", "up-tabbar__content"),
    d: common_vendor.o((...args) => $options.noop && $options.noop(...args), "93"),
    e: common_vendor.n(_ctx.border ? "up-border-top" : ""),
    f: common_vendor.n(_ctx.fixed ? "up-tabbar--fixed" : ""),
    g: common_vendor.s($options.tabbarStyle),
    h: _ctx.placeholder
  }, _ctx.placeholder ? {
    i: $data.placeholderHeight + "px"
  } : {}, {
    j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    k: `${_ctx.u_s_b_h}px`,
    l: `${_ctx.u_s_a_i_b}px`,
    m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1a1a4fcf"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js.map
