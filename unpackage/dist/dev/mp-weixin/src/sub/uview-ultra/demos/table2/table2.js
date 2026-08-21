"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_title_1 = common_vendor.resolveComponent("up-title");
  const _easycom_up_table2_1 = common_vendor.resolveComponent("up-table2");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  (_easycom_NavBar_1 + _easycom_up_title_1 + _easycom_up_table2_1 + _easycom_up_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_title = () => "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
const _easycom_up_table2 = () => "../../../../../uni_modules/uview-ultra/components/up-table2/up-table2.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_title + _easycom_up_table2 + _easycom_up_button + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "table2",
  setup(__props) {
    const eventLog = common_vendor.ref("点击行 / 勾选 / 排序 / 筛选 / 展开等操作日志将显示在这里");
    const currentRowId = common_vendor.ref("");
    const tableData = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, name: "张三", age: 25, city: "北京" }),
      new common_vendor.UTSJSONObject({ id: 2, name: "李四", age: 30, city: "上海" }),
      new common_vendor.UTSJSONObject({ id: 3, name: "王五", age: 28, city: "广州" }),
      new common_vendor.UTSJSONObject({ id: 4, name: "赵六", age: 35, city: "深圳" }),
      new common_vendor.UTSJSONObject({ id: 5, name: "张三丰", age: 22, city: "成都" })
    ]);
    const columns = common_vendor.ref([
      new common_vendor.UTSJSONObject({ title: "姓名", key: "name", width: "100px", align: "center" }),
      new common_vendor.UTSJSONObject({ title: "年龄", key: "age", width: "80px", align: "center" }),
      new common_vendor.UTSJSONObject({ title: "城市", key: "city", width: "100px", align: "center" })
    ]);
    const columnsStyle = common_vendor.ref([
      new common_vendor.UTSJSONObject({ title: "姓名", key: "name", width: "100px", align: "center" }),
      new common_vendor.UTSJSONObject({
        align: "center",
        title: "年龄",
        key: "age",
        width: "80px",
        style: new common_vendor.UTSJSONObject({ "background": "#eef2ff", "color": "#4f46e5", "justify-content": "center" })
      }),
      new common_vendor.UTSJSONObject({ title: "城市", key: "city", width: "100px", align: "center" })
    ]);
    const columnsCheck = common_vendor.ref([
      new common_vendor.UTSJSONObject({ type: "selection", width: "60px" }),
      new common_vendor.UTSJSONObject({ title: "姓名", key: "name", width: "100px" }),
      new common_vendor.UTSJSONObject({ title: "年龄", key: "age", width: "80px" }),
      new common_vendor.UTSJSONObject({ title: "城市", key: "city", width: "100px" })
    ]);
    const columnsSort = common_vendor.ref([
      new common_vendor.UTSJSONObject({ title: "姓名", key: "name", sortable: true, width: "100px" }),
      new common_vendor.UTSJSONObject({ title: "年龄", key: "age", sortable: true, width: "80px" }),
      new common_vendor.UTSJSONObject({ title: "城市", key: "city", width: "100px" })
    ]);
    const filtersValue = common_vendor.ref(new common_vendor.UTSJSONObject({ name: "" }));
    const treeData = common_vendor.ref([
      new common_vendor.UTSJSONObject({
        id: 1,
        name: "部门A",
        dept: "研发部",
        age: 0,
        children: [
          new common_vendor.UTSJSONObject({ id: 2, name: "员工1", dept: "前端组", age: 22 }),
          new common_vendor.UTSJSONObject({ id: 3, name: "员工2", dept: "后端组", age: 24 })
        ]
      }),
      new common_vendor.UTSJSONObject({ id: 4, name: "部门B", dept: "产品部", age: 0 }),
      new common_vendor.UTSJSONObject({
        id: 5,
        name: "部门C",
        dept: "设计部",
        age: 0,
        children: [
          new common_vendor.UTSJSONObject({ id: 6, name: "员工3", dept: "UI组", age: 26 }),
          new common_vendor.UTSJSONObject({ id: 7, name: "员工4", dept: "交互组", age: 27 })
        ]
      })
    ]);
    const columnsTree = common_vendor.ref([
      new common_vendor.UTSJSONObject({ title: "名称", key: "name", fixed: "left", width: "110px" }),
      new common_vendor.UTSJSONObject({ title: "部门", key: "dept", width: "110px" }),
      new common_vendor.UTSJSONObject({ title: "年龄", key: "age", width: "80px" })
    ]);
    const treePropsValue = common_vendor.ref(new common_vendor.UTSJSONObject({ children: "children" }));
    const expandKeys = common_vendor.ref(["1", "5"]);
    const spanData = common_vendor.ref([
      new common_vendor.UTSJSONObject({ id: 1, name: "苹果", amount: 10, date: "2023-01-01" }),
      new common_vendor.UTSJSONObject({ id: 2, name: "苹果", amount: 15, date: "2023-01-01" }),
      new common_vendor.UTSJSONObject({ id: 3, name: "香蕉", amount: 8, date: "2023-01-02" }),
      new common_vendor.UTSJSONObject({ id: 4, name: "香蕉", amount: 12, date: "2023-01-02" })
    ]);
    const columnsSpan = common_vendor.ref([
      new common_vendor.UTSJSONObject({ title: "ID", key: "id", width: "60px" }),
      new common_vendor.UTSJSONObject({ title: "姓名", key: "name", width: "90px" }),
      new common_vendor.UTSJSONObject({ title: "数量", key: "amount", width: "80px" }),
      new common_vendor.UTSJSONObject({ title: "日期", key: "date", width: "120px" })
    ]);
    function getLabel(row, column) {
      const key = column.key;
      if (key == null) {
        return "";
      }
      const value = row[key.toString()];
      return value == null ? "-" : value.toString();
    }
    function getCellTextStyle(column, row) {
      const style = new common_vendor.UTSJSONObject({});
      const key = column.key;
      if (key != null && key.toString() == "age" && row.age != null && row.age.toString() == "25") {
        style.color = "#4f46e5";
        style.fontWeight = "bold";
      }
      return style;
    }
    function cellStyleFunc(scope) {
      const style = new common_vendor.UTSJSONObject({});
      const column = scope.column;
      const row = scope.row;
      if (column != null && row != null && column.key != null && column.key.toString() == "age" && row.age != null && row.age.toString() == "25") {
        style.backgroundColor = "#eef2ff";
      }
      return style;
    }
    function toNumber(value = null, fallback = 0) {
      if (value == null) {
        return fallback;
      }
      const parsed = parseInt(value.toString());
      return isNaN(parsed) ? fallback : parsed;
    }
    function spanMethod(scope) {
      const rowIndex = toNumber(scope.rowIndex, 0);
      const columnIndex = toNumber(scope.columnIndex, 0);
      if (columnIndex == 1) {
        if (rowIndex == 0 || rowIndex == 1) {
          return rowIndex == 0 ? [2, 1] : [0, 0];
        }
        if (rowIndex == 2 || rowIndex == 3) {
          return rowIndex == 2 ? [2, 1] : [0, 0];
        }
      }
      if (columnIndex == 3) {
        if (rowIndex == 0 || rowIndex == 1) {
          return rowIndex == 0 ? [2, 1] : [0, 0];
        }
        if (rowIndex == 2 || rowIndex == 3) {
          return rowIndex == 2 ? [2, 1] : [0, 0];
        }
      }
      return null;
    }
    function valueToString(value = null) {
      return value == null ? "" : value.toString();
    }
    function getRowText(row) {
      const id = row.id == null ? "" : row.id.toString();
      const name = row.name == null ? "" : row.name.toString();
      return `#${id} ${name}`;
    }
    function getFilterActive(value) {
      return filtersValue.value.name != null && filtersValue.value.name.toString() == value;
    }
    function changeFilter(value) {
      filtersValue.value = new common_vendor.UTSJSONObject({ name: value });
    }
    function handleRowClick(row) {
      currentRowId.value = row.id == null ? "" : row.id.toString();
      eventLog.value = `row-click => ${getRowText(row)}`;
    }
    function onCurrentChange(row) {
      eventLog.value = `current-change => ${getRowText(row)}`;
    }
    function onSelectionChange(selection) {
      eventLog.value = `selection-change => 已选 ${selection.length} 行`;
    }
    function onSelect(row, selected) {
      eventLog.value = `select => ${getRowText(row)} ${selected ? "勾选" : "取消"}`;
    }
    function onSortChange(conditions) {
      if (conditions.length == 0) {
        eventLog.value = "sort-change => 取消排序";
        return null;
      }
      const item = conditions[0];
      eventLog.value = `sort-change => ${valueToString(item.key)} ${valueToString(item.order)}`;
    }
    function onFilterChange(filters) {
      eventLog.value = `filter-change => 筛选 name = "${valueToString(filters.name)}"`;
    }
    function onExpandChange(keys) {
      eventLog.value = `expand-change => 展开行 keys: ${keys.join(",")}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-table2 表格",
          class: "data-v-e49dbf7c"
        }),
        b: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        c: common_vendor.o(handleRowClick, "1c"),
        d: common_vendor.p({
          data: tableData.value,
          columns: columns.value,
          stripe: true,
          border: true,
          class: "data-v-e49dbf7c"
        }),
        e: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        f: common_vendor.w((_a, s0, i0) => {
          var row = _a.row, column = _a.column;
          return {
            a: common_vendor.t(getLabel(row, column)),
            b: common_vendor.s(getCellTextStyle(column, row)),
            c: i0,
            d: s0
          };
        }, {
          name: "cell",
          path: "f",
          vueId: "e49dbf7c-6,e49dbf7c-1"
        }),
        g: common_vendor.p({
          data: tableData.value,
          columns: columnsStyle.value,
          stripe: true,
          border: true,
          ["cell-style"]: cellStyleFunc,
          class: "data-v-e49dbf7c"
        }),
        h: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        i: common_vendor.o(handleRowClick, "0a"),
        j: common_vendor.o(onCurrentChange, "d2"),
        k: common_vendor.p({
          data: tableData.value,
          columns: columns.value,
          ["highlight-current-row"]: true,
          ["current-row-key"]: currentRowId.value,
          class: "data-v-e49dbf7c"
        }),
        l: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        m: common_vendor.o(onSelectionChange, "d2"),
        n: common_vendor.o(onSelect, "9b"),
        o: common_vendor.p({
          data: tableData.value,
          columns: columnsCheck.value,
          ["row-key"]: "id",
          class: "data-v-e49dbf7c"
        }),
        p: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        q: common_vendor.o(($event) => {
          return changeFilter("");
        }, "ad"),
        r: common_vendor.p({
          text: "全部",
          type: "primary",
          plain: !getFilterActive(""),
          size: "mini",
          class: "filter-btn data-v-e49dbf7c"
        }),
        s: common_vendor.o(($event) => {
          return changeFilter("张");
        }, "d3"),
        t: common_vendor.p({
          text: "筛选姓「张」",
          type: "primary",
          plain: !getFilterActive("张"),
          size: "mini",
          class: "filter-btn data-v-e49dbf7c"
        }),
        v: common_vendor.o(onSortChange, "fd"),
        w: common_vendor.o(onFilterChange, "03"),
        x: common_vendor.p({
          data: tableData.value,
          columns: columnsSort.value,
          sortable: true,
          filters: filtersValue.value,
          class: "data-v-e49dbf7c"
        }),
        y: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        z: common_vendor.o(onExpandChange, "50"),
        A: common_vendor.p({
          data: treeData.value,
          columns: columnsTree.value,
          ["tree-props"]: treePropsValue.value,
          ["expand-row-keys"]: expandKeys.value,
          class: "data-v-e49dbf7c"
        }),
        B: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        C: common_vendor.p({
          data: spanData.value,
          columns: columnsSpan.value,
          ["span-method"]: spanMethod,
          border: true,
          class: "data-v-e49dbf7c"
        }),
        D: common_vendor.p({
          class: "demo-title data-v-e49dbf7c"
        }),
        E: common_vendor.t(eventLog.value),
        F: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-table2 表格",
          class: "data-v-e49dbf7c"
        }),
        G: common_vendor.gei(_ctx, ""),
        H: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e49dbf7c"
        }),
        I: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e49dbf7c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/table2/table2.js.map
