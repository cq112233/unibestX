"use strict";
const common_vendor = require("../../../../common/vendor.js");
const defProps = new common_vendor.UTSJSONObject({
  // cell组件的props
  cell: new common_vendor.UTSJSONObject({
    customClass: "",
    title: "",
    label: "",
    value: "",
    icon: "",
    disabled: false,
    border: true,
    center: false,
    url: "",
    linkType: "navigateTo",
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: "",
    iconStyle: new common_vendor.UTSJSONObject({}),
    rightIconStyle: new common_vendor.UTSJSONObject({}),
    rightIcon: "arrow-right",
    titleStyle: new common_vendor.UTSJSONObject({}),
    size: "",
    stop: true,
    name: ""
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cell/cell.js.map
