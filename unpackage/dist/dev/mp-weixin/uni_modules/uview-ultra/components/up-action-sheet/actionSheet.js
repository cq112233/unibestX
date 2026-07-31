"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./types.js");
const defProps = new common_vendor.UTSJSONObject({
  // action-sheet组件
  actionSheet: new common_vendor.UTSJSONObject({
    show: false,
    title: "",
    description: "",
    // actions: [] as Array<UPActionSheetItem>,
    actions: [],
    index: "",
    cancelText: "",
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: "",
    closeOnClickOverlay: true,
    round: 0,
    wrapMaxHeight: "600px"
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-action-sheet/actionSheet.js.map
