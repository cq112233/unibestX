import { _ as __easycom_0 } from "../up-toolbar/up-toolbar.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_2$1 } from "../up-popup/up-popup.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-picker"
  },
  __name: "up-picker",
  props: {
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
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const lastIndex = ref([]);
    const innerIndex = ref([]);
    const innerColumns = ref([]);
    const columnIndex = ref(0);
    const showByClickInput = ref(false);
    const columnScrollTops = ref([]);
    const itemHeightNumber = computed(() => {
      const h = parseInt(props.itemHeight.toString());
      return isNaN(h) || h <= 0 ? 44 : h;
    });
    const visibleCountNumber = computed(() => {
      const c = parseInt(props.visibleItemCount.toString());
      return isNaN(c) || c <= 0 ? 5 : c;
    });
    const pickerViewHeight = computed(() => {
      return addUnit(visibleCountNumber.value * itemHeightNumber.value);
    });
    const indicatorTop = computed(() => {
      const topCount = Math.floor(visibleCountNumber.value / 2);
      return addUnit(topCount * itemHeightNumber.value);
    });
    const itemHeightUnit = computed(() => {
      return addUnit(itemHeightNumber.value);
    });
    const indicatorStyle = computed(() => {
      return new UTSJSONObject({
        top: indicatorTop.value,
        height: itemHeightUnit.value
      });
    });
    const itemStyle = computed(() => {
      return new UTSJSONObject({
        height: itemHeightUnit.value
      });
    });
    const inputLabel = computed(() => {
      let items = [];
      innerColumns.value.map((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          items.push(item[idx]);
        }
      });
      let res = [];
      items.forEach((element = null) => {
        if (typeof element == "object" && element != null) {
          let ele1 = element[props.keyName];
          if (ele1 != null) {
            res.push(ele1.toString());
          }
        } else if (element != null) {
          res.push(element.toString());
        }
      });
      return res;
    });
    const inputValue = computed(() => {
      let items = [];
      innerColumns.value.map((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          items.push(item[idx]);
        }
      });
      let res = [];
      items.forEach((element = null) => {
        if (typeof element == "object" && element != null) {
          let ele1 = element["id"];
          if (ele1 != null) {
            res.push(ele1.toString());
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
    function isItemSelected(colIdx, itemIdx) {
      if (innerIndex.value.length > colIdx) {
        return innerIndex.value[colIdx] == itemIdx;
      }
      return itemIdx == 0;
    }
    function getItemTextStyle(colIndex, itemIndex) {
      const isSel = isItemSelected(colIndex, itemIndex);
      return new UTSJSONObject({
        lineHeight: itemHeightUnit.value,
        color: isSel ? "#303133" : "#909399",
        fontWeight: isSel ? "bold" : "normal",
        fontSize: "16px"
      });
    }
    function setLastIndex(index) {
      lastIndex.value = [...index];
    }
    function syncScrollPositions() {
      let tops = [];
      for (let i = 0; i < innerColumns.value.length; i++) {
        const idx = i < innerIndex.value.length ? innerIndex.value[i] : 0;
        tops.push(idx * itemHeightNumber.value);
      }
      columnScrollTops.value = tops;
    }
    function setIndexs(index = null, shouldSetLast) {
      if (index != null && index.length > 0) {
        innerIndex.value = [...index];
      } else {
        let newIndexes = [];
        for (let i = 0; i < innerColumns.value.length; i++) {
          newIndexes.push(0);
        }
        innerIndex.value = newIndexes;
      }
      if (shouldSetLast) {
        setLastIndex(innerIndex.value);
      }
      syncScrollPositions();
    }
    function notifyChange(colIdx, changedItemIdx) {
      const values = innerColumns.value;
      setLastIndex(innerIndex.value);
      emit("update:modelValue", inputValue.value);
      let valueOrigin = [];
      for (let index = 0; index < innerColumns.value.length; index++) {
        const item = innerColumns.value[index];
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          valueOrigin.push(item[idx]);
        }
      }
      emit("change", new UTSJSONObject({
        value: valueOrigin,
        index: changedItemIdx,
        indexs: innerIndex.value,
        values,
        columnIndex: colIdx
      }));
    }
    function onColumnScroll(e = null, colIndex) {
      const scrollEvent = e;
      const scrollTop = scrollEvent.detail.scrollTop;
      const targetIndex = Math.max(0, Math.min(innerColumns.value[colIndex].length - 1, Math.round(scrollTop / itemHeightNumber.value)));
      if (innerIndex.value.length > colIndex && innerIndex.value[colIndex] != targetIndex) {
        innerIndex.value[colIndex] = targetIndex;
        columnIndex.value = colIndex;
        notifyChange(colIndex, targetIndex);
      }
    }
    function onColumnTouchEnd(colIndex) {
      setTimeout(() => {
        if (innerIndex.value.length > colIndex) {
          const idx = innerIndex.value[colIndex];
          columnScrollTops.value[colIndex] = idx * itemHeightNumber.value;
        }
      }, 80);
    }
    function onItemClick(colIndex, itemIndex) {
      if (innerIndex.value.length > colIndex) {
        innerIndex.value[colIndex] = itemIndex;
        columnScrollTops.value[colIndex] = itemIndex * itemHeightNumber.value;
        columnIndex.value = colIndex;
        notifyChange(colIndex, itemIndex);
      }
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
      let confirmValues = [];
      for (let index = 0; index < innerColumns.value.length; index++) {
        const item = innerColumns.value[index];
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          confirmValues.push(item[idx]);
        }
      }
      emit("confirm", new UTSJSONObject({
        indexs: innerIndex.value,
        value: confirmValues,
        values: innerColumns.value
      }));
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
      let newIndexes = [];
      for (let i = 0; i < cols.length; i++) {
        if (props.defaultIndex.length > i) {
          newIndexes.push(props.defaultIndex[i]);
        } else if (innerIndex.value.length > i) {
          newIndexes.push(innerIndex.value[i]);
        } else {
          newIndexes.push(0);
        }
      }
      innerIndex.value = newIndexes;
      setLastIndex(newIndexes);
      syncScrollPositions();
    }
    function getIndexs() {
      return innerIndex.value;
    }
    function getValues() {
      let res = [];
      for (let index = 0; index < innerColumns.value.length; index++) {
        const item = innerColumns.value[index];
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          res.push(item[idx]);
        }
      }
      return res;
    }
    watch(() => {
      return props.defaultIndex;
    }, (n) => {
      setIndexs(n, true);
    }, { immediate: true, deep: true });
    watch(() => {
      return props.columns;
    }, (n) => {
      setColumns(n);
    }, { immediate: true, deep: true });
    watch(() => {
      return props.show;
    }, (val) => {
      if (val) {
        setColumns(props.columns);
        nextTick(() => {
          syncScrollPositions();
        });
      }
    });
    __expose({
      setIndexs,
      setLastIndex,
      setColumnValues,
      getColumnValues,
      setColumns,
      getIndexs,
      getValues
    });
    const __returned__ = { props, emit, lastIndex, innerIndex, innerColumns, columnIndex, showByClickInput, columnScrollTops, itemHeightNumber, visibleCountNumber, pickerViewHeight, indicatorTop, itemHeightUnit, indicatorStyle, itemStyle, inputLabel, inputValue, getItemText, isItemSelected, getItemTextStyle, setLastIndex, syncScrollPositions, setIndexs, notifyChange, onColumnScroll, onColumnTouchEnd, onItemClick, closeHandler, cancel, confirm, setColumnValues, getColumnValues, setColumns, getIndexs, getValues };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-picker": { "": { "position": "relative", "backgroundColor": "#ffffff" } }, "up-picker__body": { "": { "position": "relative", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "up-picker__indicator": { "": { "position": "absolute", "left": 0, "right": 0, "borderTopWidth": 1, "borderBottomWidth": 1, "borderTopStyle": "solid", "borderBottomStyle": "solid", "borderTopColor": "#e5e7eb", "borderBottomColor": "#e5e7eb", "backgroundColor": "rgba(0,0,0,0.02)", "pointerEvents": "none", "zIndex": 2 } }, "up-picker__mask": { "": { "position": "absolute", "left": 0, "right": 0, "pointerEvents": "none", "zIndex": 3 } }, "up-picker__mask--top": { "": { "top": 0, "backgroundImage": "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3))" } }, "up-picker__mask--bottom": { "": { "bottom": 0, "backgroundImage": "linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.3))" } }, "up-picker__columns": { "": { "display": "flex", "flexDirection": "row", "height": "100%", "width": "100%" } }, "up-picker__column": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "height": "100%" } }, "up-picker__item": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "textAlign": "center", "width": "100%" } }, "up-picker__item__text": { "": { "fontSize": 16, "textAlign": "center" } }, "up-picker--loading": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgba(255,255,255,0.87)", "zIndex": 1e3 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock, normalizeStyle: _normalizeStyle, renderList: _renderList, Fragment: _Fragment, createVNode: _createVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_toolbar = resolveEasycom(__resolveDynamicComponent("up-toolbar"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_popup = resolveEasycom(__resolveDynamicComponent("up-popup"), __easycom_2$1);
  return _openBlock(), _createElementBlock("view", { class: "up-picker-wrapper" }, [
    $props.hasInput ? (_openBlock(), _createElementBlock("view", {
      key: 0,
      class: "up-picker-input cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.showByClickInput = !$setup.showByClickInput)
    }, [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        _createElementVNode(
          "view",
          null,
          _toDisplayString($setup.inputLabel.length > 0 ? $setup.inputLabel.join("/") : $props.placeholder),
          1
          /* TEXT */
        )
      ])
    ])) : _createCommentVNode("v-if", true),
    _createVNode(_component_up_popup, {
      show: $props.pageInline || $props.show || $props.hasInput && $setup.showByClickInput,
      mode: $props.popupMode,
      pageInline: $props.pageInline,
      onClose: $setup.closeHandler
    }, {
      default: _withCtx(() => [
        _createElementVNode("view", { class: "up-picker" }, [
          $props.showToolbar ? (_openBlock(), _createBlock(_component_up_toolbar, {
            key: 0,
            cancelColor: $props.cancelColor,
            confirmColor: $props.confirmColor,
            cancelText: $props.cancelText,
            confirmText: $props.confirmText,
            title: $props.title,
            rightSlot: $props.toolbarRightSlot ? true : false,
            onCancel: $setup.cancel,
            onConfirm: $setup.confirm
          }, {
            right: _withCtx(() => [
              _renderSlot(_ctx.$slots, "toolbar-right")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "rightSlot"])) : _createCommentVNode("v-if", true),
          _renderSlot(_ctx.$slots, "toolbar-bottom"),
          _createElementVNode(
            "view",
            {
              class: "up-picker__body",
              style: _normalizeStyle({ height: $setup.pickerViewHeight })
            },
            [
              _createElementVNode(
                "view",
                {
                  class: "up-picker__indicator",
                  style: _normalizeStyle($setup.indicatorStyle)
                },
                null,
                4
                /* STYLE */
              ),
              _createElementVNode(
                "view",
                {
                  class: "up-picker__mask up-picker__mask--top",
                  style: _normalizeStyle({ height: $setup.indicatorTop })
                },
                null,
                4
                /* STYLE */
              ),
              _createElementVNode(
                "view",
                {
                  class: "up-picker__mask up-picker__mask--bottom",
                  style: _normalizeStyle({ height: $setup.indicatorTop })
                },
                null,
                4
                /* STYLE */
              ),
              _createElementVNode("view", { class: "up-picker__columns" }, [
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.innerColumns, (column, colIndex) => {
                    return _openBlock(), _createElementBlock("scroll-view", {
                      key: colIndex,
                      class: "up-picker__column",
                      direction: "vertical",
                      "scroll-top": $setup.columnScrollTops[colIndex],
                      "show-scrollbar": false,
                      onScroll: ($event) => $setup.onColumnScroll($event, colIndex),
                      onTouchend: ($event) => $setup.onColumnTouchEnd(colIndex)
                    }, [
                      _createElementVNode(
                        "view",
                        {
                          style: _normalizeStyle({ height: $setup.indicatorTop })
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      (_openBlock(true), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(column, (item, itemIndex) => {
                          return _openBlock(), _createElementBlock("view", {
                            key: itemIndex,
                            class: "up-picker__item",
                            style: _normalizeStyle($setup.itemStyle),
                            onClick: ($event) => $setup.onItemClick(colIndex, itemIndex)
                          }, [
                            _createElementVNode(
                              "text",
                              {
                                class: "up-picker__item__text",
                                style: _normalizeStyle($setup.getItemTextStyle(colIndex, itemIndex))
                              },
                              _toDisplayString($setup.getItemText(item)),
                              5
                              /* TEXT, STYLE */
                            )
                          ], 12, ["onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      _createElementVNode(
                        "view",
                        {
                          style: _normalizeStyle({ height: $setup.indicatorTop })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ], 40, ["scroll-top", "onScroll", "onTouchend"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            4
            /* STYLE */
          ),
          $props.loading ? (_openBlock(), _createElementBlock("view", {
            key: 1,
            class: "up-picker--loading"
          }, [
            _createVNode(_component_up_loading_icon, { mode: "circle" })
          ])) : _createCommentVNode("v-if", true)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "mode", "pageInline"])
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-picker/up-picker.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-picker.js.map
