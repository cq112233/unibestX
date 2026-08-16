"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceCollapse_type = require("./type.js");
const uni_modules_riceUi_components_riceCollapse_index = require("./index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-collapse",
  styleIsolation: "app-and-page"
}, { __name: "rice-collapse", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  accordion: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  duration: { default: 250 }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [Array, Number, String],
    default: () => {
      return [];
    }
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("collapse");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const castArray = () => {
    if (modelValue.value == null)
      return [];
    return Array.isArray(modelValue.value) ? modelValue.value.slice(0) : [modelValue.value];
  };
  const activeNames = common_vendor.ref(castArray());
  const setActiveNames = (names) => {
    activeNames.value = names;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    modelValue.value = value;
    emit("change", value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value.length > 0 && activeNames.value[0] == name ? "" : name]);
    } else {
      const _activeNames = activeNames.value.slice(0);
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  common_vendor.watch(modelValue, () => {
    activeNames.value = castArray();
  }, {
    deep: true
  });
  common_vendor.provide(uni_modules_riceUi_components_riceCollapse_index.collapseInjectKey, new uni_modules_riceUi_components_riceCollapse_type.CollapseInjectKey({
    activeNames,
    duration: common_vendor.toRef(() => {
      return props.duration;
    }),
    handleItemClick
  }));
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("border", props.border)
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(common_vendor.unref(rootClass)),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b943f5d6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-collapse/rice-collapse.js.map
