"use strict";
require("../../../../common/vendor.js");
const defProps = new UTSJSONObject({
  // cell组件的props
  cell: new UTSJSONObject({
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
    iconStyle: new UTSJSONObject({}),
    rightIconStyle: new UTSJSONObject({}),
    rightIcon: "arrow-right",
    titleStyle: new UTSJSONObject({}),
    size: "",
    stop: true,
    name: ""
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cell/cell.js.map
