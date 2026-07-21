import { _ as __easycom_0 } from "../up-toolbar/up-toolbar.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, renderSlot, createElementVNode, toDisplayString, createCommentVNode, createVNode, withCtx, createBlock, normalizeStyle, Fragment, renderList } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_41 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_12 } from "../up-popup/up-popup.js";
import { p as propsPicker } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit } from "../../libs/function/index.js";
import { a as array } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-picker",
  mixins: [mpMixin, mixin, propsPicker],
  data() {
    return {
      // 上一次选择的列索引
      lastIndex: [],
      // 索引值 ，对应picker-view的value
      innerIndex: [],
      // 各列的值
      innerColumns: [],
      // 上一次的变化列索引
      columnIndex: 0,
      showByClickInput: false
    };
  },
  watch: {
    // 监听默认索引的变化，重新设置对应的值
    defaultIndex: {
      immediate: true,
      deep: true,
      handler(n) {
        this.setIndexs(n, true);
      }
    },
    // 监听columns参数的变化
    columns: {
      immediate: true,
      deep: true,
      handler(n) {
        this.setColumns(n);
      }
    }
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  computed: {
    pickerViewHeight() {
      let tmp = parseInt(this.visibleItemCount.toString()) * parseInt(this.itemHeight.toString());
      return addUnit(tmp);
    },
    inputLabel() {
      let items = [];
      this.innerColumns.map((item, index) => {
        const idx = index < this.innerIndex.length ? this.innerIndex[index] : 0;
        if (idx < item.length) {
          items.push(item[idx]);
        }
      });
      let res = [];
      items.forEach((element = null) => {
        if (typeof element == "object") {
          res.push(element[this.keyName].toString());
        }
      });
      return res;
    },
    inputValue() {
      let items = [];
      this.innerColumns.map((item, index) => {
        const idx = index < this.innerIndex.length ? this.innerIndex[index] : 0;
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
    }
  },
  methods: {
    addUnit(str = null) {
      return addUnit(str);
    },
    testArray(obj = null) {
      return array(obj);
    },
    // 获取item需要显示的文字，判别为对象还是文本
    getItemText(item = null) {
      if (typeof item == "object") {
        let ele1 = item[this.keyName];
        if (ele1 != null) {
          return ele1.toString();
        }
        return "";
      } else {
        return item;
      }
    },
    // 关闭选择器
    closeHandler() {
      if (this.closeOnClickOverlay) {
        if (this.hasInput) {
          this.showByClickInput = false;
        }
        this.$emit("close");
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("cancel");
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("update:modelValue", this.inputValue);
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("confirm", new UTSJSONObject({
        indexs: this.innerIndex,
        value: this.innerColumns.map((item, index) => {
        }),
        values: this.innerColumns
      }));
    },
    // 选择器某一列的数据发生变化时触发
    changeHandler(e) {
      const value = e.detail.value;
      let index = 0, columnIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (i < this.lastIndex.length ? this.lastIndex[i] : 0)) {
          columnIndex = i;
          index = item;
          break;
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      this.setLastIndex(value);
      this.setIndexs(value, false);
      this.$emit("update:modelValue", this.inputValue);
      let valueOrigin = [];
      this.innerColumns.map((item, index2) => {
        const idx = index2 < value.length ? value[index2] : 0;
        if (idx < item.length) {
          valueOrigin.push(item[idx]);
        }
      });
      this.$emit("change", new UTSJSONObject({
        value: valueOrigin,
        index,
        indexs: value,
        // values为当前变化列的数组内容
        values,
        columnIndex
      }));
    },
    // 设置index索引，此方法可被外部调用设置
    setIndexs(index = null, setLastIndex) {
      this.innerIndex = index != null ? [...index] : [];
      if (setLastIndex) {
        this.setLastIndex(this.innerIndex);
      }
    },
    // 记录上一次的各列索引位置
    setLastIndex(index) {
      this.lastIndex = [...index];
    },
    // 设置对应列选项的所有值
    setColumnValues(columnIndex, values) {
      this.innerColumns.splice(columnIndex, 1, values);
      this.setLastIndex(this.innerIndex.slice(0, columnIndex));
      let tmpIndex = [...this.innerIndex];
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      this.setIndexs(tmpIndex, false);
    },
    // 获取对应列的所有选项
    getColumnValues(columnIndex) {
      return this.innerColumns[columnIndex];
    },
    // 设置整体各列的columns的值
    setColumns(columns) {
      this.innerColumns = columns;
      if (this.innerIndex.length == 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    // 获取各列选中值对应的索引
    getIndexs() {
      return this.innerIndex;
    },
    // 获取各列选中的值
    getValues() {
      let res = [];
      return this.innerColumns.map((item, index) => {
        res.push(item[this.innerIndex[index]]);
      });
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-picker": { "": { "position": "relative", "backgroundColor": "#ffffff" } }, "up-picker__view__column": { "": { "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "center" } }, "up-picker__view__column__item": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-picker__view__column__item__text": { "": { "fontSize": 16, "textAlign": "center", "color": "#303133" } }, "up-picker__view__column__item--disabled": { "": { "opacity": 0.35 } }, "up-picker--loading": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "bottom": 0, "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "backgroundColor": "rgba(255,255,255,0.87)", "zIndex": 1e3 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_toolbar = resolveEasycom(resolveDynamicComponent("up-toolbar"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_12);
  return openBlock(), createElementBlock("view", { class: "up-picker-warrper" }, [
    _ctx.hasInput ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "up-picker-input cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $data.showByClickInput = !$data.showByClickInput)
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode(
          "view",
          null,
          toDisplayString($options.inputLabel.length > 0 ? $options.inputLabel.join("/") : _ctx.placeholder),
          1
          /* TEXT */
        )
      ])
    ])) : createCommentVNode("v-if", true),
    createVNode(_component_up_popup, {
      show: _ctx.pageInline || _ctx.show || _ctx.hasInput && $data.showByClickInput,
      mode: _ctx.popupMode,
      pageInline: _ctx.pageInline,
      onClose: $options.closeHandler
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "up-picker" }, [
          _ctx.showToolbar ? (openBlock(), createBlock(_component_up_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            rightSlot: _ctx.toolbarRightSlot ? true : false,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, {
            right: withCtx(() => [
              renderSlot(_ctx.$slots, "toolbar-right")
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "rightSlot", "onCancel", "onConfirm"])) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "toolbar-bottom"),
          createElementVNode("picker-view", {
            class: "up-picker__view",
            indicatorStyle: `height: ${$options.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: normalizeStyle({
              height: $options.pickerViewHeight
            }),
            onChange: _cache[1] || (_cache[1] = (...args) => $options.changeHandler && $options.changeHandler(...args))
          }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.innerColumns, (item, index) => {
                return openBlock(), createElementBlock("picker-view-column", {
                  key: index,
                  class: "up-picker__view__column"
                }, [
                  $options.testArray(item) ? (openBlock(true), createElementBlock(
                    Fragment,
                    { key: 0 },
                    renderList(item, (item1, index1) => {
                      return openBlock(), createElementBlock(
                        "view",
                        {
                          class: "up-picker__view__column__item up-line-1",
                          key: index1,
                          style: normalizeStyle({
                            height: $options.addUnit(_ctx.itemHeight)
                          })
                        },
                        [
                          createElementVNode(
                            "text",
                            {
                              class: "up-picker__view__column__item__text",
                              style: normalizeStyle({
                                lineHeight: $options.addUnit(_ctx.itemHeight),
                                fontWeight: $data.innerIndex.length - 1 >= index && index1 === $data.innerIndex[index] ? "bold" : "normal"
                              })
                            },
                            toDisplayString($options.getItemText(item1)),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        4
                        /* STYLE */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 44, ["indicatorStyle", "value", "immediateChange"]),
          _ctx.loading ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "up-picker--loading"
          }, [
            createVNode(_component_up_loading_icon, { mode: "circle" })
          ])) : createCommentVNode("v-if", true)
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "mode", "pageInline", "onClose"])
  ]);
}
const __easycom_16 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-picker/up-picker.uvue"]]);
export {
  __easycom_16 as _
};
//# sourceMappingURL=up-picker.js.map
