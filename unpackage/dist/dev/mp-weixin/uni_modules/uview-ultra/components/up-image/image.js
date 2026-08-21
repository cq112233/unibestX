"use strict";
const common_vendor = require("../../../../common/vendor.js");
const defProps = new common_vendor.UTSJSONObject({
  // image组件
  image: new common_vendor.UTSJSONObject({
    src: "",
    mode: "aspectFill",
    width: "300",
    height: "225",
    shape: "square",
    radius: "0",
    lazyLoad: false,
    showMenuByLongpress: true,
    loadingIcon: "photo",
    errorIcon: "error-circle",
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: "#f3f4f6"
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-image/image.js.map
