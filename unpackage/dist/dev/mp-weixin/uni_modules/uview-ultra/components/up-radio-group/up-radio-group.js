"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRadioGroup_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-radio-group",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upRadioGroup_props.propsRadioGroup],
  computed: {
    // 这里computed的变量，都是子组件up-radio需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(up-radio-group)
    // 拉取父组件新的变化后的参数
    parentChangeData() {
      return [
        this.modelValue,
        this.disabled,
        this.inactiveColor,
        this.activeColor,
        this.size,
        this.labelDisabled,
        this.shape,
        this.iconSize,
        this.borderBottom,
        this.placement
      ];
    },
    bemClass() {
      return uni_modules_uviewUltra_libs_function_index.bem("radio-group", [this.placement], []);
    }
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentChangeData() {
      this.children.forEach((child) => {
        child.$callMethod("init");
      });
    }
  },
  data() {
    return {
      children: []
    };
  },
  created() {
  },
  emits: ["update:modelValue", "change"],
  methods: {
    // 将其他的radio设置为未选中的状态
    unCheckedOther(childInstance) {
      this.children.map((child) => {
        if (childInstance !== child) {
          child.$data["checked"] = false;
        }
      });
      const name = childInstance.$props["name"];
      this.$emit("update:modelValue", name);
      this.$emit("change", name);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    b: common_vendor.n($options.bemClass),
    c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    d: `${_ctx.u_s_b_h}px`,
    e: `${_ctx.u_s_a_i_b}px`
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4a896d15"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js.map
