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
      columnList: [[], []],
      initialized: false,
      windowWidth: 375,
      windowHeight: 0,
      resizeTimer: 0
    };
  },
  watch: {
    copyFlowList: {
      handler(nVal, oVal) {
        if (nVal.length == 0) {
          this.clear(false);
        } else {
          if (this.columnList.length == 1) {
            this.initColumnList();
          }
          this.syncDistribute(nVal);
        }
      },
      immediate: true
    },
    columns: {
      handler() {
        this.initColumnList();
        if (this.copyFlowList.length > 0) {
          this.syncDistribute(this.copyFlowList);
        }
      },
      immediate: false
    }
  },
  created() {
    this.initColumnList();
  },
  mounted() {
    this.initialized = true;
  },
  beforeUnmount() {
  },
  computed: {
    copyFlowList() {
      if (this.modelValue.length == 0) {
        return [];
      } else {
        return this.cloneData(this.modelValue);
      }
    }
  },
  emits: ["update:modelValue", "update:value", "after-add-one", "after-add-all"],
  methods: {
    // 初始化列数据数组
    initColumnList() {
      this.windowWidth = uni.getSystemInfoSync().windowWidth;
      const cols = this.getColumnsCount();
      this.columnList = [];
      for (var index = 0; index < cols; index++) {
        this.columnList.push([]);
      }
    },
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
    handleWindowResize(res) {
      const size = res["size"];
      if (size != null) {
        const width = size["windowWidth"];
        if (width != null) {
          this.windowWidth = parseInt(width.toString());
        }
      } else {
        this.windowWidth = uni.getSystemInfoSync().windowWidth;
      }
      const newColumnsCount = this.getColumnsCount();
      const oldColumnsCount = this.columnList.length;
      if (newColumnsCount != oldColumnsCount) {
        this.initColumnList();
        this.syncDistribute(this.copyFlowList);
      }
    },
    /**
     * 同步分配数据到各列（核心方法）
     * 采用纯同步轮询策略，不依赖任何异步 DOM 测量 API，
     * 确保在 H5 / Android / iOS / 小程序全端正常工作。
     */
    syncDistribute(allData) {
      if (allData.length == 0)
        return null;
      const cols = this.columnList.length;
      for (let i = 0; i < cols; i++) {
        this.columnList[i] = [];
      }
      for (let i = 0; i < allData.length; i++) {
        const colIndex = i % cols;
        this.columnList[colIndex].push(allData[i]);
      }
      this.$emit("after-add-all", new UTSJSONObject({
        newData: allData
      }));
    },
    // 复制数据
    cloneData(data) {
      return UTS.JSON.parse(UTS.JSON.stringify(data));
    },
    // 清空数据列表
    clear(bak = true) {
      this.initColumnList();
      if (bak) {
        this.$emit("update:modelValue", []);
      }
    },
    // 清除某一条指定的数据
    remove(id = null) {
      if (id == null)
        return null;
      for (let i = 0; i < this.columnList.length; i++) {
        const index = this.columnList[i].findIndex((val) => {
          return val[this.idKey].toString() == id.toString();
        });
        if (index != -1) {
          this.columnList[i].splice(index, 1);
          break;
        }
      }
      const modelValueIndex = this.modelValue.findIndex((val) => {
        return val[this.idKey].toString() == id.toString();
      });
      if (modelValueIndex != -1) {
        const newModelValue = this.cloneData(this.modelValue);
        newModelValue.splice(modelValueIndex, 1);
        this.$emit("update:modelValue", newModelValue);
      }
    },
    // 修改某条数据的某个属性
    modify(id = null, key, value = null) {
      let found = false;
      let targetItem = new UTSJSONObject({});
      for (let i = 0; i < this.columnList.length; i++) {
        const index = this.columnList[i].findIndex((val) => {
          return val[this.idKey] != null && val[this.idKey].toString() == id.toString();
        });
        if (index != -1) {
          this.columnList[i][index][key] = value;
          targetItem = this.columnList[i][index];
          found = true;
          break;
        }
      }
      if (found && targetItem != null) {
        const modelValueIndex = this.modelValue.findIndex((val) => {
          return val[this.idKey] != null && val[this.idKey].toString() == id.toString();
        });
        if (modelValueIndex != -1) {
          let data = this.cloneData(this.modelValue);
          data[modelValueIndex][key] = value;
          this.$emit("update:modelValue", data);
        }
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
      renderList($data.columnList, (column, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          ref_for: true,
          ref: `up-column-${index}`,
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
