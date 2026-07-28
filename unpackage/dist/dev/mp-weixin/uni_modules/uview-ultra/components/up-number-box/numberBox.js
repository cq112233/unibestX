"use strict";
require("../../../../common/vendor.js");
const defProps = new UTSJSONObject({
  // 步进器组件
  numberBox: new UTSJSONObject({
    name: "",
    value: 0,
    min: 1,
    max: 9999,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: 0,
    longPress: true,
    color: "#323233",
    buttonWidth: 30,
    buttonSize: 30,
    buttonRadius: "0px",
    bgColor: "#EBECEE",
    disabledBgColor: "#f7f8fa",
    inputBgColor: "#EBECEE",
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: "",
    miniMode: false
  })
});
exports.defProps = defProps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-box/numberBox.js.map
