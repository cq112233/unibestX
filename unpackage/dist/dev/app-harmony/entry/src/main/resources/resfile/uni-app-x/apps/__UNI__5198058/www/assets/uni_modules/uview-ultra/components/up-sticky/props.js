
import { d as defProps } from "./sticky.js";
let stickyProp = defProps["sticky"];
const propsSticky = {
  props: {
    // 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
    offsetTop: {
      type: [String, Number],
      default: stickyProp["offsetTop"]
    },
    // 自定义导航栏的高度
    customNavHeight: {
      type: [String, Number],
      default: stickyProp["customNavHeight"]
    },
    // 是否开启吸顶功能
    disabled: {
      type: Boolean,
      default: stickyProp["disabled"]
    },
    // 吸顶区域的背景颜色
    bgColor: {
      type: String,
      default: stickyProp["bgColor"]
    },
    // z-index值
    zIndex: {
      type: [String, Number],
      default: stickyProp["zIndex"]
    },
    // 列表中的索引值
    index: {
      type: [String, Number],
      default: stickyProp["index"]
    }
  }
};
export {
  propsSticky as p
};
//# sourceMappingURL=props.js.map
