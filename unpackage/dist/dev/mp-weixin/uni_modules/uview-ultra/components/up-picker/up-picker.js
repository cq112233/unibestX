"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upPicker_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-picker",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upPicker_props.propsPicker],
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
      return uni_modules_uviewUltra_libs_function_index.addUnit(tmp);
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
      return uni_modules_uviewUltra_libs_function_index.addUnit(str);
    },
    testArray(obj = null) {
      return uni_modules_uviewUltra_libs_function_test.array(obj);
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
if (!Array) {
  const _easycom_up_toolbar2 = common_vendor.resolveComponent("up-toolbar");
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_toolbar2 + _easycom_up_loading_icon2 + _easycom_up_popup2)();
}
const _easycom_up_toolbar = () => "../up-toolbar/up-toolbar.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_toolbar + _easycom_up_loading_icon + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.hasInput
  }, _ctx.hasInput ? {
    b: common_vendor.t($options.inputLabel.length > 0 ? $options.inputLabel.join("/") : _ctx.placeholder),
    c: common_vendor.o(($event) => $data.showByClickInput = !$data.showByClickInput, "da")
  } : {}, {
    d: _ctx.showToolbar
  }, _ctx.showToolbar ? {
    e: common_vendor.o($options.cancel, "26"),
    f: common_vendor.o($options.confirm, "df"),
    g: common_vendor.p({
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      title: _ctx.title,
      rightSlot: _ctx.toolbarRightSlot ? true : false,
      class: "data-v-4aec16d9"
    })
  } : {}, {
    h: common_vendor.f($data.innerColumns, (item, index, i0) => {
      return common_vendor.e({
        a: $options.testArray(item)
      }, $options.testArray(item) ? {
        b: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: common_vendor.t($options.getItemText(item1)),
            b: $data.innerIndex.length - 1 >= index && index1 === $data.innerIndex[index] ? "bold" : "normal",
            c: index1
          };
        }),
        c: $options.addUnit(_ctx.itemHeight),
        d: $options.addUnit(_ctx.itemHeight)
      } : {}, {
        e: index
      });
    }),
    i: `height: ${$options.addUnit(_ctx.itemHeight)}`,
    j: $data.innerIndex,
    k: _ctx.immediateChange,
    l: $options.pickerViewHeight,
    m: common_vendor.o((...args) => $options.changeHandler && $options.changeHandler(...args), "7f"),
    n: _ctx.loading
  }, _ctx.loading ? {
    o: common_vendor.p({
      mode: "circle",
      class: "data-v-4aec16d9"
    })
  } : {}, {
    p: common_vendor.o($options.closeHandler, "56"),
    q: common_vendor.p({
      show: _ctx.pageInline || _ctx.show || _ctx.hasInput && $data.showByClickInput,
      mode: _ctx.popupMode,
      pageInline: _ctx.pageInline,
      class: "data-v-4aec16d9"
    }),
    r: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    s: `${_ctx.u_s_b_h}px`,
    t: `${_ctx.u_s_a_i_b}px`,
    v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4aec16d9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-picker/up-picker.js.map
