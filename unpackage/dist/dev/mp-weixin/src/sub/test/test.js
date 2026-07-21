"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "test",
  setup(__props) {
    const optionKeys = common_vendor.ref([]);
    const queryOptions = common_vendor.ref(null);
    common_vendor.onLoad((options = null) => {
      common_vendor.index.__f__("log", "at src/sub/test/test.uvue:32", "test page onLoad options:", options);
      if (options != null) {
        queryOptions.value = options;
        optionKeys.value = UTSJSONObject.keys(options);
      }
    });
    function getOptionValue(key) {
      const options = queryOptions.value;
      if (options != null) {
        const val = options[key];
        if (val != null) {
          return `${val}`;
        }
      }
      return "";
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.f(optionKeys.value, (key, k0, i0) => {
          return {
            a: common_vendor.t(key),
            b: common_vendor.t(getOptionValue(key)),
            c: key
          };
        }),
        b: optionKeys.value.length == 0
      }, optionKeys.value.length == 0 ? {} : {}, {
        c: common_vendor.p({
          ["navigation-bar-title-text"]: ""
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/test/test.js.map
