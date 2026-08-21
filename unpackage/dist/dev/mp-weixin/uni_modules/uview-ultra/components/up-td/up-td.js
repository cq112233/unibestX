"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-td"
}, { __name: "up-td", props: {
  customStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customClass: {
    type: String,
    default: ""
  },
  text: {
    type: [String, Number],
    default: ""
  },
  label: {
    type: [String, Number],
    default: ""
  },
  width: {
    type: [String],
    default: "auto"
  },
  textAlign: {
    type: String,
    default: ""
  },
  fontSize: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  }
}, setup(__props) {
  const _a = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new common_vendor.UTSJSONObject({
    padding: 0,
    align: "",
    borderColor: "",
    thStyle: new common_vendor.UTSJSONObject({})
  })), parent = _a.parent, getParent = _a.getParent;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const tdStyle = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const tdTextStyle = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const mergedTdStyle = common_vendor.computed(() => {
    const custom = uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
    const td = tdStyle.value;
    return uni_modules_uviewUltra_libs_function_index.deepMerge(td, custom);
  });
  common_vendor.onMounted(() => {
    var _a2;
    getParent("up-table", instance);
    if (parent.value != null) {
      let style = new common_vendor.UTSJSONObject({});
      let styleText = new common_vendor.UTSJSONObject({});
      let parentProps = parent.value.$callMethod("getProps");
      if (props.width != "auto")
        style["flex"] = `0 0 ${props.width}`;
      styleText["textAlign"] = parentProps.getString("align");
      styleText["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(parentProps.getString("fontSize"));
      style["padding"] = parentProps.getString("padding");
      const isBorder = (_a2 = parentProps.getBoolean("border")) !== null && _a2 !== void 0 ? _a2 : true;
      if (isBorder) {
        style["borderBottom"] = `solid 1px ` + parentProps.getString("borderColor");
        style["borderRight"] = `solid 1px ` + parentProps.getString("borderColor");
      }
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
      a: common_vendor.t((__props.text != null && __props.text != "" ? __props.text : __props.label).toString()),
      b: common_vendor.s(tdTextStyle.value),
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      d: common_vendor.n(__props.customClass),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      f: common_vendor.s(mergedTdStyle.value),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5004b66e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-td/up-td.js.map
