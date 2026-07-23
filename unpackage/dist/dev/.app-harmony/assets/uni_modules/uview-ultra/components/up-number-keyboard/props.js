
import { d as defProps } from "./numberKeyboard.js";
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
