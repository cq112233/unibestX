"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTd_td = require("./td.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-td"
}, { __name: "up-td", props: {
  // 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
  width: {
    type: [String],
    default: uni_modules_uviewUltra_components_upTd_td.defProps.getString("td.width")
  },
  textAlign: {
    type: String,
    default: uni_modules_uviewUltra_components_upTd_td.defProps.getString("td.textAlign")
  },
  fontSize: {
    type: String,
    default: uni_modules_uviewUltra_components_upTd_td.defProps.getString("td.fontSize")
  },
  borderColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upTd_td.defProps.getString("td.borderColor")
  },
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upTd_td.defProps.getString("td.color")
  }
}, setup(__props) {
  const _a = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new UTSJSONObject({
    padding: 0,
    align: "",
    borderColor: "",
    thStyle: new UTSJSONObject({})
  })), parent = _a.parent, getParent = _a.getParent;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const tdStyle = common_vendor.ref(new UTSJSONObject({}));
  const tdTextStyle = common_vendor.ref(new UTSJSONObject({}));
  common_vendor.onMounted(() => {
    getParent("up-table", instance);
    if (parent.value != null) {
      let style = new UTSJSONObject({});
      let styleText = new UTSJSONObject({});
      let parentProps = parent.value.$callMethod("getProps");
      if (props.width != "auto")
        style["flex"] = `0 0 ${props.width}`;
      styleText["textAlign"] = parentProps.getString("align");
      styleText["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(parentProps.getString("fontSize"));
      style["padding"] = parentProps.getString("padding");
      style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
      style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
      styleText["color"] = parentProps.getString("color");
      if (props.textAlign != "") {
        styleText["textAlign"] = props.textAlign;
      }
      if (props.fontSize != "") {
        styleText["fontSize"] = props.fontSize;
      }
      if (props.borderColor != "") {
        style["borderColor"] = props.borderColor;
      }
      if (props.color != "") {
        styleText["color"] = props.color;
      }
      tdStyle.value = style;
      tdTextStyle.value = styleText;
    }
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.s(tdTextStyle.value),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: common_vendor.s(tdStyle.value),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5004b66e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-td/up-td.js.map
