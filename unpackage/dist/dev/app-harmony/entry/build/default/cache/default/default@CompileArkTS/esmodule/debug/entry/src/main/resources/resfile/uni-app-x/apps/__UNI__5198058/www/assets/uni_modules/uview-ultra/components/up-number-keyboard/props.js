
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-number-keyboard/numberKeyboard&";
let keyboardProp = defProps["numberKeyboard"];
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
export {
  propsNumberKeyboard as p
};
//# sourceMappingURL=props.js.map
