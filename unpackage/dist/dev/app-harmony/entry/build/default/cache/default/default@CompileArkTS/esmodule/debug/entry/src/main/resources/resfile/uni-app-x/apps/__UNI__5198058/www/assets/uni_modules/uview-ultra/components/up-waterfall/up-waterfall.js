import { a as __values } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart&";
const { defineComponent, nextTick, openBlock, createElementBlock, createCommentVNode, Fragment, renderList, normalizeStyle, renderSlot } = globalThis.Vue
import { p as propsWaterfall } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-waterfall/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-waterfall",
  mixins: [mpMixin, mixin, propsWaterfall],
  data() {
    return {
      columnList: [[], []],
      // children: [] as ComponentPublicInstance[],
      // 用于标记是否已经初始化
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
          let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;
          this.handleData(nVal.slice(startIndex));
        }
      },
      immediate: true
    },
    columns: {
      handler() {
        this.initColumnList();
        if (this.copyFlowList.length > 0) {
          this.redistributeData();
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
  // 添加beforeUnmount生命周期清理事件监听
  beforeUnmount() {
  },
  computed: {
    // 破坏flowList变量的引用，否则watch的结果新旧值是一样的
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
    // 获取列数，支持auto模式
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
    // 窗口大小变化处理函数
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
        const height = size["windowHeight"];
        if (width != null) {
          this.windowWidth = parseInt(width.toString());
        }
        if (height != null) {
          this.windowHeight = parseInt(height.toString());
        }
      } else {
        this.windowWidth = uni.getSystemInfoSync().windowWidth;
      }
      const newColumnsCount = this.getColumnsCount();
      const oldColumnsCount = this.columnList.length;
      if (newColumnsCount != oldColumnsCount) {
        this.redistributeData();
      }
    },
    // 重新分配所有数据
    async redistributeData() {
      this.initColumnList();
      const allData = this.cloneData(this.copyFlowList);
      this.handleData(allData);
    },
    // 处理新增数据
    async handleData(newData) {
      var e_1, _a;
      var _b, _c;
      if (newData.length == 0)
        return Promise.resolve(null);
      let columnHeights = [];
      for (var index = 0; index < this.columnList.length; index++) {
        columnHeights.push(0);
      }
      for (let i = 0; i < this.columnList.length; i++) {
        try {
          const rect = await this.upGetRect(`#up-column-${i}`);
          columnHeights[i] = (_b = rect.height) !== null && _b !== void 0 ? _b : 0;
        } catch (e) {
          columnHeights[i] = 0;
        }
      }
      try {
        for (var newData_1 = __values(newData), newData_1_1 = newData_1.next(); !newData_1_1.done; newData_1_1 = newData_1.next()) {
          var item = newData_1_1.value;
          let minH = columnHeights[0];
          let minHeightIndex = 0;
          for (let j = 1; j < columnHeights.length; j++) {
            if (columnHeights[j] < minH) {
              minH = columnHeights[j];
              minHeightIndex = j;
            }
          }
          this.columnList[minHeightIndex].push(item);
          await sleep(parseInt(this.addTime.toString()));
          await nextTick();
          try {
            const rect = await this.upGetRect(`#up-column-${minHeightIndex}`);
            if (rect.height != null) {
              columnHeights[minHeightIndex] = (_c = rect.height) !== null && _c !== void 0 ? _c : 0;
              this.$emit("after-add-one", new UTSJSONObject({
                ...item,
                height: rect.height
              }));
            }
          } catch (e) {
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (newData_1_1 && !newData_1_1.done && (_a = newData_1.return))
            _a.call(newData_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.$emit("after-add-all", new UTSJSONObject({
        columnHeights,
        newData
      }));
    },
    // 复制而不是引用对象和数组
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
    // 清除某一条指定的数据，根据id实现
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
    createCommentVNode(" 新增支持多列布局 "),
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
