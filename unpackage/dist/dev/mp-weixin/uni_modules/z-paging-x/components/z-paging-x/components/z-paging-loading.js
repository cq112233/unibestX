"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_zPagingX_components_zPagingX_static_index = require("../static/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "z-paging-loading",
  setup(__props) {
    const times = common_vendor.ref(0);
    const element = common_vendor.ref(null);
    const base64FlowerImg = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_static_index.base64Flower);
    const doRotate = () => {
      if (element.value !== null) {
        times.value = times.value + 1;
        element.value.style.setProperty("transform", "rotate(" + times.value * 360 + "deg)");
        element.value.style.setProperty("transition-duration", "1000ms");
      }
    };
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
        setTimeout(() => {
          element.value = common_vendor.index.getElementById("z-paging-loading-img");
          doRotate();
        }, 10);
      });
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.sei(common_vendor.gei(_ctx, "z-paging-loading-img"), "image"),
        b: base64FlowerImg.value,
        c: common_vendor.o(doRotate, "da"),
        d: `${_ctx.u_s_b_h}px`,
        e: `${_ctx.u_s_a_i_b}px`,
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js.map
