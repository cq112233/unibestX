"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/config/color.js");
const defProps = new common_vendor.UTSJSONObject({
  //
  tabs: new common_vendor.UTSJSONObject({
    duration: 300,
    list: [],
    lineColor: "#3c9cff",
    activeStyle: new common_vendor.UTSJSONObject({
      color: "#303133"
    }),
    inactiveStyle: new common_vendor.UTSJSONObject({
      color: "#606266"
    }),
    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: "cover",
    itemStyle: new common_vendor.UTSJSONObject({
      height: "44px"
    }),
    height: "44px",
    scrollable: true,
    current: 0,
    keyName: "name",
    iconStyle: new common_vendor.UTSJSONObject({})
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabs/tabs.js.map
