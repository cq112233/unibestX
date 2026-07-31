"use strict";
const common_vendor = require("../../../../common/vendor.js");
const defProps = new common_vendor.UTSJSONObject({
  // picker
  picker: new common_vendor.UTSJSONObject({
    show: false,
    popupMode: "bottom",
    showToolbar: true,
    title: "",
    columns: [],
    loading: false,
    itemHeight: 44,
    cancelText: "取消",
    confirmText: "确定",
    cancelColor: "#909193",
    confirmColor: "#3c9cff",
    visibleItemCount: 5,
    keyName: "text",
    closeOnClickOverlay: false,
    defaultIndex: [],
    immediateChange: true,
    pageInline: false
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-picker/picker.js.map
