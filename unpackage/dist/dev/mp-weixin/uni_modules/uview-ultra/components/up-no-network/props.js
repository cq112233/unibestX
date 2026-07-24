"use strict";
const uni_modules_uviewUltra_components_upNoNetwork_noNetwork = require("./noNetwork.js");
let noNetworkProp = uni_modules_uviewUltra_components_upNoNetwork_noNetwork.defProps["noNetwork"];
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
exports.propsNoNetwork = propsNoNetwork;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-no-network/props.js.map
