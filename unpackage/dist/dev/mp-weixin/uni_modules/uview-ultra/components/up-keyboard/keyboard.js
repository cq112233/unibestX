"use strict";
require("../../../../common/vendor.js");
const defProps = new UTSJSONObject({
  // keyboard组件
  keyboard: new UTSJSONObject({
    mode: "number",
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: "",
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 1075,
    cancelText: "取消",
    confirmText: "确认",
    autoChange: false
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-keyboard/keyboard.js.map
