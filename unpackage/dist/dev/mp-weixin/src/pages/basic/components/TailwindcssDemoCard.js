"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TailwindcssDemoCard",
  setup(__props) {
    function navigateToDemo() {
      common_vendor.index.navigateTo({
        url: "/src/sub/tailwindcss/tailwindcss",
        fail: (err) => {
          common_vendor.index.__f__("error", "at src/pages/basic/components/TailwindcssDemoCard.uvue:40", "navigateToDemo fail:", err);
        }
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(navigateToDemo, "ab"),
        b: common_vendor.gei(_ctx, ""),
        c: common_vendor.p({
          title: "weapp-tailwindcss Demo",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-cccf47db"
        }),
        d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cccf47db"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/TailwindcssDemoCard.js.map
