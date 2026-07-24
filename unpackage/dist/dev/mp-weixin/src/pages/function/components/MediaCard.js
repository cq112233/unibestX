"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MediaCard",
  setup(__props) {
    const photoUrl = common_vendor.ref("");
    const scanResult = common_vendor.ref("");
    function chooseImage() {
      common_vendor.index.chooseImage(new common_vendor.UTSJSONObject({
        count: 1,
        success: (res) => {
          const paths = res.tempFilePaths;
          if (paths.length > 0) {
            photoUrl.value = paths[0];
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at src/pages/function/components/MediaCard.uvue:39", err);
        }
      }));
    }
    function scanCode() {
      common_vendor.index.scanCode(new common_vendor.UTSJSONObject({
        success: (res) => {
          scanResult.value = res.result;
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at src/pages/function/components/MediaCard.uvue:50", err);
        }
      }));
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: photoUrl.value === ""
      }, photoUrl.value === "" ? {} : {
        b: photoUrl.value
      }, {
        c: common_vendor.o(chooseImage, "38"),
        d: common_vendor.t(scanResult.value !== "" ? scanResult.value : "暂无数据"),
        e: common_vendor.o(scanCode, "d8"),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          title: "相机与多媒体",
          id: common_vendor.gei(_ctx, "")
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/MediaCard.js.map
