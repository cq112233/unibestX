import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-table2/up-table2.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../utils/systemInfo.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/helper/index.js";
import "../../../../tabbar/helper/store.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../tabbar/custom/index.js";
import "../../../../utils/toast.js";
import "../../../../components/NavBar/NavBar.js";
import "../../../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataScopedSlot: _createSharedDataScopedSlot, createSharedDataVSlot: _createSharedDataVSlot, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTable2Table2";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/table2/table2.uvue",
  __name: "table2",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTable2Table2SharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTable2Table2SharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const eventLog = ref("点击行 / 勾选 / 排序 / 筛选 / 展开等操作日志将显示在这里");
    const currentRowId = ref("");
    const tableData = ref([
      new UTSJSONObject({ id: 1, name: "张三", age: 25, city: "北京" }),
      new UTSJSONObject({ id: 2, name: "李四", age: 30, city: "上海" }),
      new UTSJSONObject({ id: 3, name: "王五", age: 28, city: "广州" }),
      new UTSJSONObject({ id: 4, name: "赵六", age: 35, city: "深圳" }),
      new UTSJSONObject({ id: 5, name: "张三丰", age: 22, city: "成都" })
    ]);
    const columns = ref([
      new UTSJSONObject({ title: "姓名", key: "name", width: "100px", align: "center" }),
      new UTSJSONObject({ title: "年龄", key: "age", width: "80px", align: "center" }),
      new UTSJSONObject({ title: "城市", key: "city", width: "100px", align: "center" })
    ]);
    const columnsStyle = ref([
      new UTSJSONObject({ title: "姓名", key: "name", width: "100px", align: "center" }),
      new UTSJSONObject({
        align: "center",
        title: "年龄",
        key: "age",
        width: "80px",
        style: new UTSJSONObject({ "background": "#eef2ff", "color": "#4f46e5", "justify-content": "center" })
      }),
      new UTSJSONObject({ title: "城市", key: "city", width: "100px", align: "center" })
    ]);
    const columnsCheck = ref([
      new UTSJSONObject({ type: "selection", width: "60px" }),
      new UTSJSONObject({ title: "姓名", key: "name", width: "100px" }),
      new UTSJSONObject({ title: "年龄", key: "age", width: "80px" }),
      new UTSJSONObject({ title: "城市", key: "city", width: "100px" })
    ]);
    const columnsSort = ref([
      new UTSJSONObject({ title: "姓名", key: "name", sortable: true, width: "100px" }),
      new UTSJSONObject({ title: "年龄", key: "age", sortable: true, width: "80px" }),
      new UTSJSONObject({ title: "城市", key: "city", width: "100px" })
    ]);
    const filtersValue = ref(new UTSJSONObject({ name: "" }));
    const treeData = ref([
      new UTSJSONObject({
        id: 1,
        name: "部门A",
        dept: "研发部",
        age: 0,
        children: [
          new UTSJSONObject({ id: 2, name: "员工1", dept: "前端组", age: 22 }),
          new UTSJSONObject({ id: 3, name: "员工2", dept: "后端组", age: 24 })
        ]
      }),
      new UTSJSONObject({ id: 4, name: "部门B", dept: "产品部", age: 0 }),
      new UTSJSONObject({
        id: 5,
        name: "部门C",
        dept: "设计部",
        age: 0,
        children: [
          new UTSJSONObject({ id: 6, name: "员工3", dept: "UI组", age: 26 }),
          new UTSJSONObject({ id: 7, name: "员工4", dept: "交互组", age: 27 })
        ]
      })
    ]);
    const columnsTree = ref([
      new UTSJSONObject({ title: "名称", key: "name", fixed: "left", width: "110px" }),
      new UTSJSONObject({ title: "部门", key: "dept", width: "110px" }),
      new UTSJSONObject({ title: "年龄", key: "age", width: "80px" })
    ]);
    const treePropsValue = ref(new UTSJSONObject({ children: "children" }));
    const expandKeys = ref(["1", "5"]);
    const spanData = ref([
      new UTSJSONObject({ id: 1, name: "苹果", amount: 10, date: "2023-01-01" }),
      new UTSJSONObject({ id: 2, name: "苹果", amount: 15, date: "2023-01-01" }),
      new UTSJSONObject({ id: 3, name: "香蕉", amount: 8, date: "2023-01-02" }),
      new UTSJSONObject({ id: 4, name: "香蕉", amount: 12, date: "2023-01-02" })
    ]);
    const columnsSpan = ref([
      new UTSJSONObject({ title: "ID", key: "id", width: "60px" }),
      new UTSJSONObject({ title: "姓名", key: "name", width: "90px" }),
      new UTSJSONObject({ title: "数量", key: "amount", width: "80px" }),
      new UTSJSONObject({ title: "日期", key: "date", width: "120px" })
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
      const style = new UTSJSONObject({});
      const key = column.key;
      if (key != null && key.toString() == "age" && row.age != null && row.age.toString() == "25") {
        style.color = "#4f46e5";
        style.fontWeight = "bold";
      }
      return style;
    }
    function cellStyleFunc(scope) {
      const style = new UTSJSONObject({});
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
      filtersValue.value = new UTSJSONObject({ name: value });
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
    const salesData = ref([
      new UTSJSONObject({ id: 1, name: "商品A", amount: 120, sales: 3600, rating: 4.8 }),
      new UTSJSONObject({ id: 2, name: "商品B", amount: 80, sales: 2400, rating: 4.6 }),
      new UTSJSONObject({ id: 3, name: "商品C", amount: 150, sales: 4500, rating: 4.9 }),
      new UTSJSONObject({ id: 4, name: "商品D", amount: 50, sales: 1500, rating: 4.5 })
    ]);
    const columnsSales = ref([
      new UTSJSONObject({ title: "商品名称", key: "name", width: "90px", align: "center" }),
      new UTSJSONObject({ title: "销量(件)", key: "amount", width: "80px", align: "center" }),
      new UTSJSONObject({ title: "销售额(元)", key: "sales", width: "90px", align: "center" }),
      new UTSJSONObject({ title: "评分", key: "rating", width: "70px", align: "center" })
    ]);
    const scoreData = ref([
      new UTSJSONObject({ id: 1, student: "小明", chinese: 88, math: 95, english: 92 }),
      new UTSJSONObject({ id: 2, student: "小红", chinese: 94, math: 90, english: 96 }),
      new UTSJSONObject({ id: 3, student: "小华", chinese: 82, math: 85, english: 80 })
    ]);
    const columnsScore = ref([
      new UTSJSONObject({ title: "学生", key: "student", width: "65px", align: "center" }),
      new UTSJSONObject({ title: "语文", key: "chinese", width: "55px", align: "center" }),
      new UTSJSONObject({ title: "数学", key: "math", width: "55px", align: "center" }),
      new UTSJSONObject({ title: "英语", key: "english", width: "55px", align: "center" }),
      new UTSJSONObject({ title: "总分", key: "total", width: "75px", align: "center" })
    ]);
    function customSummaryMethod(scope) {
      const rawData = scope.data;
      const result = ["总汇", "0 件", "¥0", "均分 0"];
      if (rawData == null || rawData.length == 0) {
        return result;
      }
      let totalAmount = 0;
      let totalSales = 0;
      let totalRating = 0;
      for (let i = 0; i < rawData.length; i++) {
        const row = rawData[i];
        totalAmount += toNumber(row.amount, 0);
        totalSales += toNumber(row.sales, 0);
        const r = parseFloat(valueToString(row.rating));
        if (!isNaN(r)) {
          totalRating += r;
        }
      }
      const avgRating = Math.round(totalRating / rawData.length * 10) / 10;
      return ["总汇", `${totalAmount} 件`, `¥${totalSales}`, `均分 ${avgRating}`];
    }
    function calcScoreTotal(row) {
      const c = toNumber(row.chinese, 0);
      const m = toNumber(row.math, 0);
      const e = toNumber(row.english, 0);
      return `${c + m + e} 分`;
    }
    return () => {
      "raw js";
      const _component_up_title = __easycom_0;
      const _component_up_table2 = __easycom_1;
      const _component_up_button = __easycom_1$1;
      const n61 = _createSharedDataComponent(AppKu, "2e120ae9", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-table2 表格", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n60 = _createSharedDataComponent(LayoutComponent, "1c8a17b0", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-table2 表格", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_title, "1c89f9aa", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_table2, "1c89ec22", {
                data: () => {
                  return tableData.value;
                },
                columns: () => {
                  return columns.value;
                },
                stripe: "",
                border: "",
                onRowClick: () => {
                  return handleRowClick;
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_title, "1c89db6a", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n5?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_table2, "45a3762b", {
                data: () => {
                  return tableData.value;
                },
                columns: () => {
                  return columnsStyle.value;
                },
                stripe: "",
                border: "",
                "cell-style": () => {
                  return cellStyleFunc;
                }
              }, {
                "cell": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                }), (_slotProps0, __sharedData_VSlot0) => {
                  _renderSharedDataEffect(() => {
                    const _column = _slotProps0.column;
                    const _row = _slotProps0.row;
                    _setSharedDataStyle(__sharedData_VSlot0, 0, getCellTextStyle(_column, _row));
                    _setSharedData(__sharedData_VSlot0, 1, _toDisplayString(getLabel(_row, _column)));
                  });
                })
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_title, "45a38cee", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_table2, "45a393d4", {
                data: () => {
                  return tableData.value;
                },
                columns: () => {
                  return columns.value;
                },
                "highlight-current-row": "",
                "current-row-key": () => {
                  return currentRowId.value;
                },
                onRowClick: () => {
                  return handleRowClick;
                },
                onCurrentChange: () => {
                  return onCurrentChange;
                }
              });
              _setSharedData(__sharedData, 7, n12?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_title, "45a3ee8a", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n15?.sharedData);
              const n16 = _createSharedDataComponentWithFallback(_component_up_table2, "45a3f56b", {
                data: () => {
                  return tableData.value;
                },
                columns: () => {
                  return columnsCheck.value;
                },
                "row-key": "id",
                onSelectionChange: () => {
                  return onSelectionChange;
                },
                onSelect: () => {
                  return onSelect;
                }
              });
              _setSharedData(__sharedData, 9, n16?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_title, "45a400b0", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 10, n19?.sharedData);
              const _on_click = () => {
                return changeFilter("");
              };
              const n20 = _createSharedDataComponentWithFallback(_component_up_button, "45a40831", {
                text: "全部",
                type: "primary",
                plain: () => {
                  return !getFilterActive("");
                },
                size: "mini",
                class: "filter-btn",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
              const _on_click1 = () => {
                return changeFilter("张");
              };
              const n21 = _createSharedDataComponentWithFallback(_component_up_button, "45a45b49", {
                text: "筛选姓「张」",
                type: "primary",
                plain: () => {
                  return !getFilterActive("张");
                },
                size: "mini",
                class: "filter-btn",
                onClick: () => {
                  return _on_click1;
                }
              });
              _setSharedData(__sharedData, 13, n21?.sharedData);
              const n23 = _createSharedDataComponentWithFallback(_component_up_table2, "45a4626a", {
                data: () => {
                  return tableData.value;
                },
                columns: () => {
                  return columnsSort.value;
                },
                sortable: "",
                filters: () => {
                  return filtersValue.value;
                },
                onSortChange: () => {
                  return onSortChange;
                },
                onFilterChange: () => {
                  return onFilterChange;
                }
              });
              _setSharedData(__sharedData, 11, n23?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_title, "45a46e28", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 14, n26?.sharedData);
              const n27 = _createSharedDataComponentWithFallback(_component_up_table2, "45a474f5", {
                data: () => {
                  return treeData.value;
                },
                columns: () => {
                  return columnsTree.value;
                },
                "tree-props": () => {
                  return treePropsValue.value;
                },
                "expand-row-keys": () => {
                  return expandKeys.value;
                },
                onExpandChange: () => {
                  return onExpandChange;
                }
              });
              _setSharedData(__sharedData, 15, n27?.sharedData);
              const n30 = _createSharedDataComponentWithFallback(_component_up_title, "45a4cf4c", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 16, n30?.sharedData);
              const n31 = _createSharedDataComponentWithFallback(_component_up_table2, "45a4d389", {
                data: () => {
                  return spanData.value;
                },
                columns: () => {
                  return columnsSpan.value;
                },
                "span-method": () => {
                  return spanMethod;
                },
                border: ""
              });
              _setSharedData(__sharedData, 17, n31?.sharedData);
              const n34 = _createSharedDataComponentWithFallback(_component_up_title, "45a4de8d", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 18, n34?.sharedData);
              const n35 = _createSharedDataComponentWithFallback(_component_up_table2, "45a4e58f", {
                data: () => {
                  return salesData.value;
                },
                columns: () => {
                  return columnsSales.value;
                },
                border: "",
                "show-summary": "",
                "sum-text": "总计"
              });
              _setSharedData(__sharedData, 19, n35?.sharedData);
              const n38 = _createSharedDataComponentWithFallback(_component_up_title, "45a4ee0d", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 20, n38?.sharedData);
              const n39 = _createSharedDataComponentWithFallback(_component_up_table2, "45a543c7", {
                data: () => {
                  return salesData.value;
                },
                columns: () => {
                  return columnsSales.value;
                },
                border: "",
                "show-summary": "",
                "summary-method": () => {
                  return customSummaryMethod;
                }
              });
              _setSharedData(__sharedData, 21, n39?.sharedData);
              const n42 = _createSharedDataComponentWithFallback(_component_up_title, "45a54f25", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 22, n42?.sharedData);
              const n50 = _createSharedDataComponentWithFallback(_component_up_table2, "45a55367", {
                data: () => {
                  return scoreData.value;
                },
                columns: () => {
                  return columnsScore.value;
                },
                border: "",
                stripe: ""
              }, {
                "cell": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                }), (_slotProps0, __sharedData_VSlot1) => {
                  _createSharedDataIf(() => {
                    return _setSharedData(__sharedData_VSlot1, 0, _toSharedDataBoolean(_slotProps0.column.key == "total"));
                  }, () => {
                    _renderSharedDataEffect(() => {
                      return _setSharedData(__sharedData_VSlot1, 1, _toDisplayString(calcScoreTotal(_slotProps0.row)));
                    });
                  }, () => {
                    _renderSharedDataEffect(() => {
                      return _setSharedData(__sharedData_VSlot1, 2, _toDisplayString(getLabel(_slotProps0.row, _slotProps0.column)));
                    });
                  }, 389);
                })
              });
              _setSharedData(__sharedData, 23, n50?.sharedData);
              const n53 = _createSharedDataComponentWithFallback(_component_up_title, "45a5c30e", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 24, n53?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 25, _toDisplayString(eventLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n60.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n61.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const table2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  table2 as default
};
