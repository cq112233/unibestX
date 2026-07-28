"use strict";
require("../../../../common/vendor.js");
const defProps = new UTSJSONObject({
  // list 组件
  list: new UTSJSONObject({
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: "",
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1,
    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: "black",
    refresherBackground: "#FFF",
    refresherTriggered: false,
    customNestedScroll: true
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-list/list.js.map
