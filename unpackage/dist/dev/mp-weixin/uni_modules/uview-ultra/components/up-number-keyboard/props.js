"use strict";
const uni_modules_uviewUltra_components_upNumberKeyboard_numberKeyboard = require("./numberKeyboard.js");
let keyboardProp = uni_modules_uviewUltra_components_upNumberKeyboard_numberKeyboard.defProps["numberKeyboard"];
const propsNumberKeyboard = {
  props: {
    // 键盘的类型，number-数字键盘，card-身份证键盘
    mode: {
      type: String,
      default: keyboardProp["mode"]
    },
    // 是否显示键盘的"."符号
    dotDisabled: {
      type: Boolean,
      default: keyboardProp["dotDisabled"]
    },
    // 是否打乱键盘按键的顺序
    random: {
      type: Boolean,
      default: keyboardProp["random"]
    }
  }
};
exports.propsNumberKeyboard = propsNumberKeyboard;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-number-keyboard/props.js.map
