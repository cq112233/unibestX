"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-pdf-reader"
}, { __name: "up-pdf-reader", props: {
  src: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: "500px"
  },
  baseUrl: {
    type: String,
    default: "https://uview-plus.jiangruyi.com/h5"
  }
}, setup(__props) {
  const props = __props;
  const baseUrlInner = common_vendor.ref(props.baseUrl.length > 0 ? props.baseUrl : "https://uview-plus.jiangruyi.com/h5");
  const viewerUrl = common_vendor.ref("");
  const readerStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["height"] = props.height;
    return style;
  });
  const webViewStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = "100%";
    style["height"] = props.height;
    return style;
  });
  function updateViewerUrl() {
    const base = baseUrlInner.value.length > 0 ? baseUrlInner.value : "https://uview-plus.jiangruyi.com/h5";
    viewerUrl.value = base + "/static/pdfjs/web/viewer.html?file=" + encodeURIComponent(props.src);
  }
  common_vendor.watch(() => {
    return props.baseUrl;
  }, (val) => {
    baseUrlInner.value = val;
    updateViewerUrl();
  });
  common_vendor.watch(() => {
    return props.src;
  }, () => {
    updateViewerUrl();
  });
  common_vendor.onMounted(() => {
    updateViewerUrl();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: viewerUrl.value,
      b: common_vendor.s(webViewStyle.value),
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      d: common_vendor.s(readerStyle.value),
      e: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc816389"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-pdf-reader/up-pdf-reader.js.map
