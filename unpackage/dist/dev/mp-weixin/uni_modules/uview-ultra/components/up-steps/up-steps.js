"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSteps_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-steps",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSteps_props.propsSteps],
  data() {
    return {};
  },
  watch: {
    children() {
      this.updateChildData();
    },
    parentDataCpu() {
      this.updateChildData();
    }
  },
  computed: {
    // 监听参数的变化，通过watch中，手动去更新子组件的数据，否则子组件不会自动变化
    parentDataCpu() {
      return [this.current, this.direction, this.activeColor, this.inactiveColor, this.activeIcon, this.inactiveIcon, this.dot];
    }
  },
  methods: {
    // 更新子组件的数据
    updateChildData() {
      this.children.map((child) => {
        child.$callMethod("updateFromParent");
      });
    },
    // 接受子组件的通知，去修改其他子组件的数据
    updateFromChild() {
      this.updateChildData();
    }
  },
  created() {
    this.children = [];
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    b: common_vendor.n(`up-steps--${_ctx.direction}`),
    c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    d: `${_ctx.u_s_b_h}px`,
    e: `${_ctx.u_s_a_i_b}px`
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed2353e1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-steps/up-steps.js.map
