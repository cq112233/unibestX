
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-waterfall/waterfall&";
let waterfallProp = defProps["waterfall"];
const propsWaterfall = {
  props: {
    modelValue: {
      // 瀑布流数据
      type: Array,
      required: true,
      default: waterfallProp["value"]
    },
    // 每次向结构插入数据的时间间隔，单位ms
    // 单位ms
    addTime: {
      type: [Number, String],
      default: waterfallProp["addTime"]
    },
    // id值，用于清除某一条数据时，根据此idKey名称找到并移除，如数据为{idx: 22, name: 'lisa'}
    // 那么该把idKey设置为idx
    idKey: {
      type: String,
      default: waterfallProp["idKey"]
    },
    // 瀑布流列数
    columns: {
      type: [Number, String],
      default: waterfallProp["columns"]
    },
    // 瀑布流最小列数
    columnsMin: {
      type: [Number, String],
      default: waterfallProp["columnsMin"]
    },
    // 最小列宽
    minColumnWidth: {
      type: Number,
      default: waterfallProp["minColumnWidth"]
    }
  }
};
export {
  propsWaterfall as p
};
//# sourceMappingURL=props.js.map
