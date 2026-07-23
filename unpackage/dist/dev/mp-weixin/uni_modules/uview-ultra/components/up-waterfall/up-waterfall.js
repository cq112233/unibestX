"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upWaterfall_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-waterfall",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upWaterfall_props.propsWaterfall],
  data() {
    return {
      windowWidth: 375
    };
  },
  mounted() {
    this.windowWidth = common_vendor.index.getSystemInfoSync().windowWidth;
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
        const newData = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(this.modelValue));
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
        const newData = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(this.modelValue));
        newData[idx][key] = value;
        this.$emit("update:modelValue", newData);
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.f($options.columnList, (column, index, i0) => {
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
        f: common_vendor.s($options.getColumnStyle(index))
      };
    }),
    b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    c: `${_ctx.u_s_b_h}px`,
    d: `${_ctx.u_s_a_i_b}px`,
    e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-62247c4e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-waterfall/up-waterfall.js.map
