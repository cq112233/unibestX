"use strict";
require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const defProps = new UTSJSONObject({
  // modal 组件
  modal: new UTSJSONObject({
    show: false,
    title: "",
    content: "",
    confirmText: uni_modules_uviewUltra_libs_i18n_index.t("up.common.confirm", new UTSJSONObject({})),
    cancelText: uni_modules_uviewUltra_libs_i18n_index.t("up.common.cancel", new UTSJSONObject({})),
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: "#2979ff",
    cancelColor: "#606266",
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: "650rpx",
    confirmButtonShape: "",
    duration: 400,
    contentTextAlign: "left",
    asyncCloseTip: uni_modules_uviewUltra_libs_i18n_index.t("up.common.inOperation", new UTSJSONObject({})) + "...",
    asyncCancelClose: false,
    contentStyle: new UTSJSONObject({})
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-modal/modal.js.map
