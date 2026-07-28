
import { d as defProps } from "./swipeAction.js";
defProps["swipeAction"];
const propsSwipeAction = {
  props: {
    // 是否自动关闭其他swipe按钮组
    autoClose: {
      type: Boolean,
      default: defProps["autoClose"]
    },
    // 是否存在打开的按钮组
    opendItem: {
      type: Boolean,
      default: false
    }
  }
};
export {
  propsSwipeAction as p
};
//# sourceMappingURL=props.js.map
