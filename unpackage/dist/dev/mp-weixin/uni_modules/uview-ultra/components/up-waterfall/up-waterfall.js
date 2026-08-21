"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-waterfall"
}, { __name: "up-waterfall", props: {
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
}, emits: ["update:modelValue", "update:value"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const windowWidth = common_vendor.ref(375);
  common_vendor.onMounted(() => {
    windowWidth.value = common_vendor.index.getSystemInfoSync().windowWidth;
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
  const columnList = common_vendor.computed(() => {
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
    const style = new common_vendor.UTSJSONObject({});
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
      const newData = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(dataList));
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
      const newData = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(dataList));
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
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(columnList.value, (column, index, i0) => {
        return {
          a: common_vendor.f(column, (item, itemIndex, i1) => {
            return {
              a: "d-" + i0 + "-" + i1,
              b: common_vendor.r("d", {
                item,
                itemIndex
              }, i0 + "-" + i1),
              c: itemIndex
            };
          }),
          b: "column-" + i0,
          c: common_vendor.r("column", {
            colIndex: index,
            colList: column
          }, i0),
          d: common_vendor.sei(`up-column-${index}`, "view"),
          e: index,
          f: common_vendor.s(getColumnStyle(index))
        };
      }),
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: `${_ctx.u_s_b_h}px`,
      d: `${_ctx.u_s_a_i_b}px`,
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62247c4e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-waterfall/up-waterfall.js.map
