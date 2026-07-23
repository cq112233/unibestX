"use strict";
require("../../../../common/vendor.js");
require("./types.js");
const defProps = new UTSJSONObject({
  // action-sheet组件
  actionSheet: new UTSJSONObject({
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
