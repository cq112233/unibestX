
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper/swiper&";
let swiperProp = defProps["swiper"];
const propsSwiper = {
  props: {
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: swiperProp["list"]
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: swiperProp["indicator"]
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: swiperProp["indicatorActiveColor"]
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: swiperProp["indicatorInactiveColor"]
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: swiperProp["indicatorStyle"]
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: swiperProp["indicatorMode"]
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: swiperProp["autoplay"]
    },
    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: swiperProp["current"]
    },
    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: swiperProp["currentItemId"]
    },
    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: swiperProp["interval"]
    },
    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: swiperProp["duration"]
    },
    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: swiperProp["circular"]
    },
    // 滑动方向是否为纵向
    vertical: {
      type: Boolean,
      default: swiperProp["vertical"]
    },
    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: swiperProp["previousMargin"]
    },
    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: swiperProp["nextMargin"]
    },
    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: swiperProp["acceleration"]
    },
    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: swiperProp["displayMultipleItems"]
    },
    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: swiperProp["easingFunction"]
    },
    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: swiperProp["keyName"]
    },
    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: swiperProp["imgMode"]
    },
    // 组件高度
    height: {
      type: [String, Number],
      default: swiperProp["height"]
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: swiperProp["bgColor"]
    },
    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: swiperProp["radius"]
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: swiperProp["loading"]
    },
    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: swiperProp["showTitle"]
    }
  }
};
export {
  propsSwiper as p
};
//# sourceMappingURL=props.js.map
