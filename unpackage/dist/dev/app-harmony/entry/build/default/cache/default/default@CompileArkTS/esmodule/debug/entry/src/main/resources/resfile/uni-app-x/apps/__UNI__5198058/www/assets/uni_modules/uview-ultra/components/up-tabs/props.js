
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-tabs/tabs&";
let crtProps = defProps["tabs"];
const propsTabs = {
  props: {
    // 滑块的移动过渡时间，单位ms
    duration: {
      type: Number,
      default: crtProps["duration"]
    },
    // tabs标签数组
    list: {
      type: Array,
      default: crtProps["list"]
    },
    // 滑块颜色
    lineColor: {
      type: String,
      default: crtProps["lineColor"]
    },
    // 菜单选择中时的样式
    activeStyle: {
      type: [String, UTSJSONObject],
      default: crtProps["activeStyle"]
    },
    // 菜单非选中时的样式
    inactiveStyle: {
      type: [String, UTSJSONObject],
      default: crtProps["inactiveStyle"]
    },
    // 滑块长度
    lineWidth: {
      type: [String, Number],
      default: crtProps["lineWidth"]
    },
    // 滑块高度
    lineHeight: {
      type: [String, Number],
      default: crtProps["lineHeight"]
    },
    // 滑块背景显示大小，当滑块背景设置为图片时使用
    lineBgSize: {
      type: String,
      default: crtProps["lineBgSize"]
    },
    // 菜单item的样式
    itemStyle: {
      type: [String, UTSJSONObject],
      default: crtProps["itemStyle"]
    },
    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: crtProps["scrollable"]
    },
    // 当前选中标签的索引
    current: {
      type: [Number, String],
      default: crtProps["current"]
    },
    // 默认读取的键名
    keyName: {
      type: String,
      default: crtProps["keyName"]
    },
    // 左侧图标样式
    iconStyle: {
      type: [String, UTSJSONObject],
      default: crtProps["iconStyle"]
    },
    // tabs高度
    height: {
      type: [String, Number],
      default: crtProps["height"] != null ? crtProps["height"] : "44px"
    }
  }
};
export {
  propsTabs as p
};
//# sourceMappingURL=props.js.map
