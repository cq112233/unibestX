"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upIndexItem_indexItem = require("./indexItem.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-index-item"
}, { __name: "up-index-item", props: {
  text: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upIndexItem_indexItem.defProps.getString("indexItem.text")
  }
}, emits: [], setup(__props, _a) {
  var __expose = _a.expose;
  _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), parent = _b.parent;
  _b.getParent;
  const getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const top = common_vendor.ref(0);
  const height = common_vendor.ref(0);
  const itemId = common_vendor.ref("");
  common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const getIndexItemRect = function() {
    return new Promise((resolve) => {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-index-item", false, instance).then((size = null) => {
        resolve(size);
      });
    });
  };
  const init = function() {
    getParentData("up-index-list", instance, false);
    if (parent.value == null) {
      return uni_modules_uviewUltra_libs_function_index.error("up-index-item必须要搭配up-index-list组件使用");
    }
    uni_modules_uviewUltra_libs_function_index.sleep().then(() => {
      getIndexItemRect().then((size) => {
        var _a2, _b2;
        top.value = Math.ceil((_a2 = size.top) !== null && _a2 !== void 0 ? _a2 : 0);
        height.value = Math.ceil((_b2 = size.height) !== null && _b2 !== void 0 ? _b2 : 0);
      });
    });
  };
  common_vendor.onMounted(() => {
    if (props.text != "") {
      itemId.value = props.text.toString().charCodeAt(0).toString();
    }
    init();
  });
  const setId = function(idPam) {
    common_vendor.index.__f__("log", "at uni_modules/uview-ultra/components/up-index-item/up-index-item.uvue:73", idPam);
    itemId.value = idPam;
  };
  const getRefs = function() {
    return new common_vendor.UTSJSONObject({
      height: height.value
    });
  };
  __expose({
    setId,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, "up-index-item-" + itemId.value), "view"),
      b: common_vendor.n("up-index-item-" + itemId.value),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cd333376"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-index-item/up-index-item.js.map
