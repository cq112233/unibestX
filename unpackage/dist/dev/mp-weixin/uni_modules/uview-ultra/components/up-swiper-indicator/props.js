"use strict";
const uni_modules_uviewUltra_components_upSwiperIndicator_swipterIndicator = require("./swipterIndicator.js");
let swiperIndicatorProp = uni_modules_uviewUltra_components_upSwiperIndicator_swipterIndicator.defProps["swiperIndicator"];
const propsSwiperIndicator = {
  props: {
    // 轮播的长度
    length: {
      type: [String, Number],
      default: swiperIndicatorProp["length"]
    },
    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: swiperIndicatorProp["current"]
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: swiperIndicatorProp["indicatorActiveColor"]
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: swiperIndicatorProp["indicatorInactiveColor"]
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: swiperIndicatorProp["indicatorMode"]
    }
  }
};
exports.propsSwiperIndicator = propsSwiperIndicator;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swiper-indicator/props.js.map
