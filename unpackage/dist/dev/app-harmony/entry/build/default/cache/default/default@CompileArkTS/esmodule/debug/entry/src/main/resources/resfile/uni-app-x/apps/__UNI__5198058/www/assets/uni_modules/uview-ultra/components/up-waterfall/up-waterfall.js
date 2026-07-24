const { defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, renderSlot } = globalThis.Vue
import { p as propsWaterfall } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-waterfall/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-waterfall",
  mixins: [mpMixin, mixin, propsWaterfall],
  data() {
    return {
      windowWidth: 375
    };
  },
  mounted() {
    this.windowWidth = uni.getSystemInfoSync().windowWidth;
  },
  computed: {
    // 核心：columnList 完全由 modelValue 派生，纯同步、纯响应式
    columnList() {
      const cols = this.getColumnsCount();
      const result = [];
      for (let i = 0; i < cols; i++) {
        result.push([]);
      }
      for (let i = 0; i < this.modelValue.length; i++) {
        const colIndex = i % cols;
        result[colIndex].push(this.modelValue[i]);
      }
      return result;
    }
  },
  emits: ["update:modelValue", "update:value"],
  methods: {
    // 获取列数
    getColumnsCount() {
      if (this.columns === "auto") {
        const columnGap = 7;
        let columnCount = Math.max(1, Math.floor(this.windowWidth / (this.minColumnWidth + columnGap)));
        const minCol = parseInt(this.columnsMin.toString());
        if (columnCount < minCol) {
          columnCount = minCol;
        }
        return columnCount;
      }
      return parseInt(this.columns.toString());
    },
    // 列样式
    getColumnStyle(index) {
      const style = new UTSJSONObject({});
      if (index > 0) {
        style["marginLeft"] = "10rpx";
      }
      return style;
    },
    // 清空数据
    clear() {
      this.$emit("update:modelValue", []);
    },
    // 清除某一条数据
    remove(id = null) {
      if (id == null)
        return null;
      const idx = this.modelValue.findIndex((val) => {
        return val[this.idKey] != null && val[this.idKey].toString() == id.toString();
      });
      if (idx != -1) {
        const newData = UTS.JSON.parse(UTS.JSON.stringify(this.modelValue));
        newData.splice(idx, 1);
        this.$emit("update:modelValue", newData);
      }
    },
    // 修改某条数据
    modify(id = null, key, value = null) {
      const idx = this.modelValue.findIndex((val) => {
        return val[this.idKey] != null && val[this.idKey].toString() == id.toString();
      });
      if (idx != -1) {
        const newData = UTS.JSON.parse(UTS.JSON.stringify(this.modelValue));
        newData[idx][key] = value;
        this.$emit("update:modelValue", newData);
      }
    }
  }
});
const _style_0 = { "up-waterfall": { "": { "display": "flex", "flexDirection": "row", "alignItems": "flex-start" } }, "up-column": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "overflow": "hidden" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-waterfall" }, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($options.columnList, (column, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          id: `up-column-${index}`,
          class: "up-column",
          style: normalizeStyle($options.getColumnStyle(index))
        }, [
          renderSlot(_ctx.$slots, "column", {
            colIndex: index,
            colList: column
          }, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(column, (item, itemIndex) => {
                return openBlock(), createElementBlock("view", { key: itemIndex }, [
                  renderSlot(_ctx.$slots, "default", {
                    item,
                    itemIndex
                  })
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ], 12, ["id"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-waterfall/up-waterfall.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-waterfall.js.map
