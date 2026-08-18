import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, createSharedDataFor: _createSharedDataFor, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfall";
const { ref, computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-waterfall"
  },
  __dynamicSharedData: true,
  __hash: "96fac1e4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-waterfall/up-waterfall.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfallSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return columnList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 4, getColumnStyle(_for_key0.value));
        });
        _createSharedDataSlot("column", {
          colIndex: () => {
            return _for_key0.value;
          },
          colList: () => {
            return _for_item0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 1, data);
        }, () => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 2, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
          })), () => {
            return _for_item0.value;
          }, (__sharedData_VFor1, _for_item1, _for_key1) => {
            _createSharedDataSlot("default", {
              item: () => {
                return _for_item1.value;
              },
              itemIndex: () => {
                return _for_key1.value;
              }
            }, (data) => {
              return _setSharedData(__sharedData_VFor1, 1, data);
            });
            return null;
          }, (__sharedData_VFor1, item, itemIndex) => {
            return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(itemIndex));
          });
        });
        _setSharedDataAttr(__sharedData_VFor0, 3, _toSharedDataString(`up-column-${_for_key0.value}`));
        return null;
      }, (__sharedData_VFor0, column, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-waterfall.js.map
