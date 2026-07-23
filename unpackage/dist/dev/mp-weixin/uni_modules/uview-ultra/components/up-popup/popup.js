"use strict";
require("../../../../common/vendor.js");
const defProps = new UTSJSONObject({
  // popup组件
  popup: new UTSJSONObject({
    show: false,
    overlay: true,
    mode: "bottom",
    duration: 300,
    closeable: false,
    overlayStyle: new UTSJSONObject({}),
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: "top-right",
    round: 0,
    zoom: true,
    bgColor: "",
    overlayOpacity: 0.5,
    pageInline: false
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-popup/popup.js.map
