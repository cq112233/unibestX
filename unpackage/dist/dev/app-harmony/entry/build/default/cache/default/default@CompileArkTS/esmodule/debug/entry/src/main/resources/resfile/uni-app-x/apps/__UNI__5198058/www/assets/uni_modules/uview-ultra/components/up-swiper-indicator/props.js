
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper-indicator/swipterIndicator&";
let swiperIndicatorProp = defProps["swiperIndicator"];
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
export {
  propsSwiperIndicator as p
};
//# sourceMappingURL=props.js.map
