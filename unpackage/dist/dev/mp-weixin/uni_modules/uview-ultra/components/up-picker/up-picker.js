"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
if (!Array) {
  const _easycom_up_toolbar_1 = common_vendor.resolveComponent("up-toolbar");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_toolbar_1 + _easycom_up_loading_icon_1 + _easycom_up_popup_1)();
}
const _easycom_up_toolbar = () => "../up-toolbar/up-toolbar.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_toolbar + _easycom_up_loading_icon + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-picker"
}, { __name: "up-picker", props: {
  modelValue: {
    type: Array,
    default: () => {
      return [];
    }
  },
  hasInput: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: "请选择"
  },
  show: {
    type: Boolean,
    default: false
  },
  popupMode: {
    type: String,
    default: "bottom"
  },
  pageInline: {
    type: Boolean,
    default: false
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  toolbarRightSlot: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => {
      return [];
    }
  },
  loading: {
    type: Boolean,
    default: false
  },
  itemHeight: {
    type: [String, Number],
    default: 44
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确定"
  },
  cancelColor: {
    type: String,
    default: "#909193"
  },
  confirmColor: {
    type: String,
    default: "#3c9cff"
  },
  visibleItemCount: {
    type: [String, Number],
    default: 5
  },
  keyName: {
    type: String,
    default: "text"
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  defaultIndex: {
    type: Array,
    default: () => {
      return [];
    }
  },
  immediateChange: {
    type: Boolean,
    default: true
  }
}, emits: ["close", "cancel", "confirm", "change", "update:modelValue"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const lastIndex = common_vendor.ref([]);
  const innerIndex = common_vendor.ref([]);
  const innerColumns = common_vendor.ref([]);
  const columnIndex = common_vendor.ref(0);
  const showByClickInput = common_vendor.ref(false);
  common_vendor.watch(() => {
    return props.defaultIndex;
  }, (n) => {
    setIndexs(n, true);
  }, { immediate: true, deep: true });
  common_vendor.watch(() => {
    return props.columns;
  }, (n) => {
    setColumns(n);
  }, { immediate: true, deep: true });
  const pickerViewHeight = common_vendor.computed(() => {
    let tmp = parseInt(props.visibleItemCount.toString()) * parseInt(props.itemHeight.toString());
    return uni_modules_uviewUltra_libs_function_index.addUnit(tmp);
  });
  const inputLabel = common_vendor.computed(() => {
    let items = [];
    innerColumns.value.map((item, index) => {
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        items.push(item[idx]);
      }
    });
    let res = [];
    items.forEach((element = null) => {
      if (typeof element == "object") {
        let eleObj = element;
        if (eleObj[props.keyName] != null) {
          res.push(eleObj[props.keyName].toString());
        }
      } else {
        res.push(element.toString());
      }
    });
    return res;
  });
  const inputValue = common_vendor.computed(() => {
    let items = [];
    innerColumns.value.map((item, index) => {
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        items.push(item[idx]);
      }
    });
    let res = [];
    items.forEach((element = null) => {
      if (typeof element == "string") {
        res.push(element.toString());
      } else {
        let ele1 = element["id"];
        if (ele1 != null) {
          res.push(ele1);
        }
      }
    });
    return res;
  });
  function getItemText(item = null) {
    if (typeof item == "object" && item != null) {
      let ele1 = item[props.keyName];
      if (ele1 != null) {
        return ele1.toString();
      }
      return "";
    }
    return item != null ? item.toString() : "";
  }
  function closeHandler() {
    if (props.closeOnClickOverlay) {
      if (props.hasInput) {
        showByClickInput.value = false;
      }
      emit("close");
    }
  }
  function cancel() {
    if (props.hasInput) {
      showByClickInput.value = false;
    }
    emit("cancel");
  }
  function confirm() {
    emit("update:modelValue", inputValue.value);
    if (props.hasInput) {
      showByClickInput.value = false;
    }
    emit("confirm", new common_vendor.UTSJSONObject({
      indexs: innerIndex.value,
      value: innerColumns.value.map((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        return idx < item.length ? item[idx] : null;
      }),
      values: innerColumns.value
    }));
  }
  function changeHandler(e) {
    const value = e.detail.value;
    let changedIndex = 0;
    let curColIndex = 0;
    for (let i = 0; i < value.length; i++) {
      let item = value[i];
      if (item !== (i < lastIndex.value.length ? lastIndex.value[i] : 0)) {
        curColIndex = i;
        changedIndex = item;
        break;
      }
    }
    columnIndex.value = curColIndex;
    const values = innerColumns.value;
    setLastIndex(value);
    setIndexs(value, false);
    emit("update:modelValue", inputValue.value);
    let valueOrigin = [];
    innerColumns.value.map((item, index) => {
      const idx = index < value.length ? value[index] : 0;
      if (idx < item.length) {
        valueOrigin.push(item[idx]);
      }
    });
    emit("change", new common_vendor.UTSJSONObject({
      value: valueOrigin,
      index: changedIndex,
      indexs: value,
      values,
      columnIndex: curColIndex
    }));
  }
  function setIndexs(index = null, shouldSetLast) {
    innerIndex.value = index != null ? [...index] : [];
    if (shouldSetLast) {
      setLastIndex(innerIndex.value);
    }
  }
  function setLastIndex(index) {
    lastIndex.value = [...index];
  }
  function setColumnValues(colIdx, values) {
    innerColumns.value.splice(colIdx, 1, values);
    setLastIndex(innerIndex.value.slice(0, colIdx));
    let tmpIndex = [...innerIndex.value];
    for (let i = 0; i < innerColumns.value.length; i++) {
      if (i > columnIndex.value) {
        tmpIndex[i] = 0;
      }
    }
    setIndexs(tmpIndex, false);
  }
  function getColumnValues(colIdx) {
    return innerColumns.value[colIdx];
  }
  function setColumns(cols) {
    innerColumns.value = cols;
    if (innerIndex.value.length == 0) {
      innerIndex.value = new Array(cols.length).fill(0);
    }
  }
  function getIndexs() {
    return innerIndex.value;
  }
  function getValues() {
    let res = [];
    innerColumns.value.forEach((item, index) => {
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        res.push(item[idx]);
      }
    });
    return res;
  }
  __expose({
    setIndexs,
    setLastIndex,
    setColumnValues,
    getColumnValues,
    setColumns,
    getIndexs,
    getValues
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.hasInput
    }, __props.hasInput ? {
      b: common_vendor.t(inputLabel.value.length > 0 ? inputLabel.value.join("/") : __props.placeholder),
      c: common_vendor.o(($event) => {
        return showByClickInput.value = !showByClickInput.value;
      }, "5f")
    } : {}, {
      d: __props.showToolbar
    }, __props.showToolbar ? {
      e: common_vendor.o(cancel, "3e"),
      f: common_vendor.o(confirm, "d7"),
      g: common_vendor.p({
        cancelColor: __props.cancelColor,
        confirmColor: __props.confirmColor,
        cancelText: __props.cancelText,
        confirmText: __props.confirmText,
        title: __props.title,
        rightSlot: __props.toolbarRightSlot ? true : false,
        class: "data-v-4aec16d9"
      })
    } : {}, {
      h: common_vendor.f(innerColumns.value, (item, index, i0) => {
        return common_vendor.e({
          a: common_vendor.unref(uni_modules_uviewUltra_libs_function_test.array)(item)
        }, common_vendor.unref(uni_modules_uviewUltra_libs_function_test.array)(item) ? {
          b: common_vendor.f(item, (item1, index1, i1) => {
            return {
              a: common_vendor.t(getItemText(item1)),
              b: innerIndex.value.length - 1 >= index && index1 === innerIndex.value[index] ? "bold" : "normal",
              c: index1
            };
          }),
          c: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.itemHeight),
          d: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.itemHeight)
        } : {}, {
          e: index
        });
      }),
      i: `height: ${common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.itemHeight)}`,
      j: innerIndex.value,
      k: __props.immediateChange,
      l: pickerViewHeight.value,
      m: common_vendor.o(changeHandler, "63"),
      n: __props.loading
    }, __props.loading ? {
      o: common_vendor.p({
        mode: "circle",
        class: "data-v-4aec16d9"
      })
    } : {}, {
      p: common_vendor.o(closeHandler, "96"),
      q: common_vendor.p({
        show: __props.pageInline || __props.show || __props.hasInput && showByClickInput.value,
        mode: __props.popupMode,
        pageInline: __props.pageInline,
        class: "data-v-4aec16d9"
      }),
      r: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      s: `${_ctx.u_s_b_h}px`,
      t: `${_ctx.u_s_a_i_b}px`,
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4aec16d9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-picker/up-picker.js.map
