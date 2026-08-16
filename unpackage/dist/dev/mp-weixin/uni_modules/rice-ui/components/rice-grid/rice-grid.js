"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
const uni_modules_riceUi_libs_use_useRelation_useChildren = require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceGrid_index = require("./index.js");
const uni_modules_riceUi_components_riceGrid_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-grid",
  styleIsolation: "app-and-page"
}, { __name: "rice-grid", props: {
  columnNum: {},
  align: {},
  textColor: {},
  textSize: {},
  iconColor: {},
  iconSize: {},
  border: { type: Boolean, default: true },
  clickable: { type: Boolean, default: true },
  vertical: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props) {
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("grid");
  const props = __props;
  const _a = uni_modules_riceUi_libs_use_useRelation_useChildren.useChildren(uni_modules_riceUi_components_riceGrid_index.gridName), linkChildren = _a.linkChildren, childrenList = _a.childrenList;
  linkChildren();
  const formatColumnNum = common_vendor.computed(() => {
    var _a2;
    const num = (_a2 = props.columnNum) !== null && _a2 !== void 0 ? _a2 : 4;
    return typeof num == "string" ? parseInt(num) : num;
  });
  const rootClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("border", props.border)
    ];
  });
  common_vendor.provide(uni_modules_riceUi_components_riceGrid_index.gridInjectKey, new uni_modules_riceUi_components_riceGrid_type.GridProvice({
    columnNum: common_vendor.toRef(() => {
      return formatColumnNum.value;
    }),
    textColor: common_vendor.toRef(() => {
      return props.textColor;
    }),
    textSize: common_vendor.toRef(() => {
      return props.textSize;
    }),
    iconColor: common_vendor.toRef(() => {
      return props.iconColor;
    }),
    iconSize: common_vendor.toRef(() => {
      return props.iconSize;
    }),
    border: common_vendor.toRef(() => {
      return props.border;
    }),
    clickable: common_vendor.toRef(() => {
      return props.clickable;
    }),
    vertical: common_vendor.toRef(() => {
      return props.vertical;
    }),
    childrenList
  }));
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(common_vendor.unref(rootClass)),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: common_vendor.s(_ctx.customStyle),
      e: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-67b0100e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-grid/rice-grid.js.map
