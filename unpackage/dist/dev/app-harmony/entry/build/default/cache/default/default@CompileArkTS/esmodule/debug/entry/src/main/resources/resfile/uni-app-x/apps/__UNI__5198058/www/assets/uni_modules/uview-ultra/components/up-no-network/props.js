
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-no-network/noNetwork&";
let noNetworkProp = defProps["noNetwork"];
const propsNoNetwork = {
  props: {
    // 页面文字提示
    tips: {
      type: String,
      default: noNetworkProp["tips"]
    },
    // 一个z-index值，用于设置没有网络这个组件的层次，因为页面可能会有其他定位的元素层级过高，导致此组件被覆盖
    zIndex: {
      type: [String, Number],
      default: noNetworkProp["zIndex"]
    },
    // image 没有网络的图片提示
    image: {
      type: String,
      default: noNetworkProp["image"]
    }
  }
};
export {
  propsNoNetwork as p
};
//# sourceMappingURL=props.js.map
