"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
const uni_modules_riceUi_libs_use_useRelation_useChildren = require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceSwipeActions_index = require("./index.js");
const uni_modules_riceUi_components_riceSwipeActions_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-swipe-actions",
  styleIsolation: "app-and-page"
}, { __name: "rice-swipe-actions", props: {
  disabled: { type: Boolean, default: false },
  accordion: { type: Boolean, default: false },
  autoClose: { type: Boolean, default: true },
  iosStyle: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props, _a) {
  var __expose = _a.expose;
  const _b = uni_modules_riceUi_libs_use_useRelation_useChildren.useChildren(uni_modules_riceUi_components_riceSwipeActions_index.swipeActionsName), linkChildren = _b.linkChildren, childrenList = _b.childrenList;
  linkChildren();
  const props = __props;
  const submitClose = (item) => {
    var _a2, _b2;
    (_b2 = (_a2 = item.exposed) === null || _a2 === void 0 ? null : _a2.close) === null || _b2 === void 0 ? null : _b2.call(_a2);
  };
  const closeOtherSwipe = (vm = null) => {
    if (!props.accordion || vm == null)
      return null;
    childrenList.value.forEach((item) => {
      if (item.proxy !== vm.proxy) {
        submitClose(item);
      }
    });
  };
  const closeAll = () => {
    childrenList.value.forEach((item) => {
      submitClose(item);
    });
  };
  const close = (names) => {
    childrenList.value.forEach((item) => {
      const name = item.props["name"];
      if (name != null) {
        const hasName = names.includes(name);
        if (hasName)
          submitClose(item);
      }
    });
  };
  common_vendor.provide(uni_modules_riceUi_components_riceSwipeActions_index.swipeActionsInjectKey, new uni_modules_riceUi_components_riceSwipeActions_type.SwipeActionsProvide({
    accordion: common_vendor.toRef(() => {
      return props.accordion;
    }),
    disabled: common_vendor.toRef(() => {
      return props.disabled;
    }),
    autoClose: common_vendor.toRef(() => {
      return props.autoClose;
    }),
    iosStyle: common_vendor.toRef(() => {
      return props.iosStyle;
    }),
    closeOtherSwipe
  }));
  __expose({
    closeAll,
    close
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(_ctx.customStyle),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-434bceec"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-swipe-actions/rice-swipe-actions.js.map
