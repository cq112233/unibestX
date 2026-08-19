import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-waterfall"
  },
  __name: "up-waterfall",
  props: {
    modelValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    columns: {
      type: [String, Number],
      default: 2
    },
    columnsMin: {
      type: [String, Number],
      default: 2
    },
    minColumnWidth: {
      type: Number,
      default: 160
    },
    idKey: {
      type: String,
      default: "id"
    }
  },
  emits: ["update:modelValue", "update:value"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const windowWidth = ref(375);
    onMounted(() => {
      windowWidth.value = uni.getSystemInfoSync().windowWidth;
    });
    function getColumnsCount() {
      if (props.columns.toString() == "auto") {
        const columnGap = 7;
        let columnCount = Math.max(1, Math.floor(windowWidth.value / (props.minColumnWidth + columnGap)));
        const minCol = parseInt(props.columnsMin.toString());
        if (columnCount < minCol) {
          columnCount = minCol;
        }
        return columnCount;
      }
      return parseInt(props.columns.toString());
    }
    const columnList = computed(() => {
      const cols = getColumnsCount();
      const result = [];
      for (let i = 0; i < cols; i++) {
        result.push([]);
      }
      const dataList = props.modelValue.length > 0 ? props.modelValue : props.value;
      for (let i = 0; i < dataList.length; i++) {
        const colIndex = i % cols;
        result[colIndex].push(dataList[i]);
      }
      return result;
    });
    function getColumnStyle(index) {
      const style = new UTSJSONObject({});
      if (index > 0) {
        style["marginLeft"] = "10rpx";
      }
      return style;
    }
    function clear() {
      emit("update:modelValue", []);
      emit("update:value", []);
    }
    function remove(id = null) {
      if (id == null)
        return null;
      const dataList = props.modelValue.length > 0 ? props.modelValue : props.value;
      const idx = dataList.findIndex((val) => {
        return val[props.idKey] != null && val[props.idKey].toString() == id.toString();
      });
      if (idx != -1) {
        const newData = UTS.JSON.parse(UTS.JSON.stringify(dataList));
        newData.splice(idx, 1);
        emit("update:modelValue", newData);
        emit("update:value", newData);
      }
    }
    function modify(id = null, key, val = null) {
      const dataList = props.modelValue.length > 0 ? props.modelValue : props.value;
      const idx = dataList.findIndex((item) => {
        return item[props.idKey] != null && item[props.idKey].toString() == id.toString();
      });
      if (idx != -1) {
        const newData = UTS.JSON.parse(UTS.JSON.stringify(dataList));
        newData[idx][key] = val;
        emit("update:modelValue", newData);
        emit("update:value", newData);
      }
    }
    __expose({
      clear,
      remove,
      modify
    });
    const __returned__ = { props, emit, windowWidth, getColumnsCount, columnList, getColumnStyle, clear, remove, modify };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-waterfall": { "": { "display": "flex", "flexDirection": "row", "alignItems": "flex-start" } }, "up-column": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "overflow": "hidden" } } };
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, renderSlot: _renderSlot, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-waterfall" }, [
    (_openBlock(true), _createElementBlock(
      _Fragment,
      null,
      _renderList($setup.columnList, (column, index) => {
        return _openBlock(), _createElementBlock("view", {
          key: index,
          id: `up-column-${index}`,
          class: "up-column",
          style: _normalizeStyle($setup.getColumnStyle(index))
        }, [
          _renderSlot(_ctx.$slots, "column", {
            colIndex: index,
            colList: column
          }, () => [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(column, (item, itemIndex) => {
                return _openBlock(), _createElementBlock("view", { key: itemIndex }, [
                  _renderSlot(_ctx.$slots, "default", {
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
