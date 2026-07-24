"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_components_upTable_table = require("./table.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-table"
}, { __name: "up-table", props: {
  borderColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getString("table.borderColor")
  },
  align: {
    type: String,
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getString("table.align")
  },
  // td的内边距
  padding: {
    type: String,
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getString("table.padding")
  },
  // 字体大小
  fontSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getNumber("table.fontSize")
  },
  // 字体颜色
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getString("table.color")
  },
  // th的自定义样式
  thStyle: {
    type: Object,
    default: () => {
      return uni_modules_uviewUltra_components_upTable_table.defProps.getAny("table.thStyle");
    }
  },
  // table的背景颜色
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upTable_table.defProps.getString("table.bgColor")
  }
}, setup(__props, _a) {
  var __expose = _a.expose;
  common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const show = common_vendor.ref(true);
  const tableStyle = common_vendor.computed(() => {
    let style = new UTSJSONObject({});
    style["borderLeft"] = `solid 1px ${props.borderColor}`;
    style["borderTop"] = `solid 1px ${props.borderColor}`;
    style["backgroundColor"] = props.bgColor;
    return style;
  });
  function change() {
    show.value = false;
    setTimeout(() => {
      show.value = true;
    }, 0);
  }
  common_vendor.watch(() => {
    return props.align;
  }, () => {
    change();
  });
  common_vendor.watch(() => {
    return props.borderColor;
  }, () => {
    change();
  });
  const getProps = function() {
    return new UTSJSONObject({
      borderColor: props.borderColor,
      align: props.align,
      padding: props.padding,
      fontSize: props.fontSize,
      color: props.color,
      thStyle: props.thStyle,
      bgColor: props.bgColor
    });
  };
  const getRefs = function() {
    return new UTSJSONObject({});
  };
  __expose({
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: show.value
    }, show.value ? {} : {}, {
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: common_vendor.s(tableStyle.value),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-table/up-table.js.map
