"use strict";
require("../../../../common/vendor.js");
const imageProps = new UTSJSONObject({
  // image组件
  image: new UTSJSONObject({
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
exports.imageProps = imageProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-image/image.js.map
