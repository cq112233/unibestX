"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-table2"
}, { __name: "up-table2", props: {
  data: {
    type: Array,
    required: true,
    default: () => {
      return [];
    }
  },
  columns: {
    type: Array,
    required: true,
    default: () => {
      return [];
    }
  },
  rowKey: {
    type: String,
    default: "id"
  },
  border: {
    type: Boolean,
    default: false
  },
  stripe: {
    type: Boolean,
    default: false
  },
  height: {
    type: [String, Number],
    default: null
  },
  maxHeight: {
    type: [String, Number],
    default: null
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  emptyText: {
    type: String,
    default: "No Data"
  },
  sortable: {
    type: Boolean,
    default: false
  },
  multiSort: {
    type: Boolean,
    default: false
  },
  filters: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false
  },
  currentRowKey: {
    type: [String, Number],
    default: null
  },
  treeProps: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({ children: "children", hasChildren: "hasChildren" });
    }
  },
  expandRowKeys: {
    type: Array,
    default: () => {
      return [];
    }
  },
  rowHeight: {
    type: [String, Number],
    default: 44
  },
  expandWidth: {
    type: [String, Number],
    default: 24
  },
  mainCol: {
    type: String,
    default: ""
  },
  fixedHeader: {
    type: Boolean,
    default: false
  },
  spanMethod: {
    type: Function,
    default: null
  },
  cellStyle: {
    type: Function,
    default: null
  },
  cellClassName: {
    type: Function,
    default: null
  },
  rowClassName: {
    type: Function,
    default: null
  },
  headerCellClassName: {
    type: Function,
    default: null
  }
}, emits: [
  "row-click",
  "header-click",
  "selection-change",
  "select",
  "select-all",
  "sort-change",
  "filter-change",
  "expand-change",
  "current-change"
], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  function createRowList() {
    return [];
  }
  function createStringList() {
    return [];
  }
  function createEmptyObject() {
    return new common_vendor.UTSJSONObject({});
  }
  function createSpan(rowspan = 1, colspan = 1) {
    return new common_vendor.UTSJSONObject({
      rowspan,
      colspan
    });
  }
  function createSpanArray() {
    return [1, 1];
  }
  function valueToString(value = null) {
    return value == null ? "" : value.toString();
  }
  function toNumber(value = null, fallback = 0) {
    if (value == null) {
      return fallback;
    }
    const text = valueToString(value);
    if (text == "") {
      return fallback;
    }
    const parsed = parseInt(text);
    return isNaN(parsed) ? fallback : parsed;
  }
  function normalizeColumnWidth(value = null) {
    const width = toNumber(value, 80);
    return width < 80 ? 80 : width;
  }
  function addUnitLocal(value = null) {
    if (value == null) {
      return "auto";
    }
    const text = valueToString(value);
    if (text == "") {
      return "auto";
    }
    if (text.endsWith("px") || text.endsWith("%") || text.endsWith("rpx")) {
      return text;
    }
    const numeric = /^-?\d+(\.\d+)?$/.test(text);
    return numeric ? text + "px" : text;
  }
  function getTableMinWidthPx() {
    return 375;
  }
  const props = __props;
  const emit = __emit;
  function normalizeKey(value = null) {
    return valueToString(value);
  }
  function normalizeKeys(keys = null) {
    const result = createStringList();
    if (keys == null) {
      return result;
    }
    for (let i = 0; i < keys.length; i++) {
      result.push(normalizeKey(keys[i]));
    }
    return result;
  }
  const expandedKeys = common_vendor.ref(normalizeKeys(props.expandRowKeys));
  const selectedKeys = common_vendor.ref(createStringList());
  const sortKey = common_vendor.ref("");
  const sortOrder = common_vendor.ref("");
  const currentRowValue = common_vendor.ref(normalizeKey(props.currentRowKey));
  const scrollLeftValue = common_vendor.ref(0);
  common_vendor.onMounted(() => {
    expandedKeys.value = normalizeKeys(props.expandRowKeys);
    currentRowValue.value = normalizeKey(props.currentRowKey);
  });
  const rowHeightValue = common_vendor.computed(() => {
    return addUnitLocal(props.rowHeight);
  });
  const expandWidthValue = common_vendor.computed(() => {
    return addUnitLocal(props.expandWidth);
  });
  function isSelectionColumn(col) {
    return valueToString(col["type"]) == "selection";
  }
  function getColumnField(col) {
    return valueToString(col["key"]);
  }
  const mainColumnKey = common_vendor.computed(() => {
    if (props.mainCol != "") {
      return props.mainCol;
    }
    const cols = props.columns;
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      if (!isSelectionColumn(col)) {
        const key = getColumnField(col);
        if (key != "") {
          return key;
        }
      }
    }
    return "";
  });
  function isMainColumn(col) {
    const field = getColumnField(col);
    return field != "" && field == mainColumnKey.value;
  }
  function getChildrenKey() {
    const tree = props.treeProps;
    const key = tree["children"];
    return valueToString(key) == "" ? "children" : valueToString(key);
  }
  function getRowKeyValue(row) {
    return normalizeKey(row[props.rowKey]);
  }
  function getRowKey(row, index) {
    const key = getRowKeyValue(row);
    return key == "" ? index.toString() : key;
  }
  function getParentRow(item) {
    return item["parentRow"];
  }
  function getColumnKey(col, index) {
    const key = getColumnField(col);
    if (key != "") {
      return key;
    }
    const typeText = valueToString(col["type"]);
    return typeText == "" ? "col_" + index.toString() : typeText + "_" + index.toString();
  }
  function getColumnIndex(col) {
    const cols = props.columns;
    for (let i = 0; i < cols.length; i++) {
      if (cols[i] == col) {
        return i;
      }
    }
    return 0;
  }
  function getColumnTitle(col) {
    return valueToString(col["title"]);
  }
  function isSortableColumn(col) {
    if (isSelectionColumn(col)) {
      return false;
    }
    if (props.sortable) {
      return true;
    }
    const colSortable = valueToString(col["sortable"]);
    return colSortable == "true" || colSortable == "1";
  }
  function getHeaderAlignValue(col) {
    const headerAlign = valueToString(col["headerAlign"]);
    if (headerAlign == "center" || headerAlign == "right" || headerAlign == "left") {
      return headerAlign;
    }
    const align = valueToString(col["align"]);
    if (align == "center" || align == "right" || align == "left") {
      return align;
    }
    return "center";
  }
  function getHeaderAlignClass(col) {
    return "up-text-" + getHeaderAlignValue(col);
  }
  function getCellAlignValue(col) {
    const align = valueToString(col["align"]);
    if (align == "center" || align == "right" || align == "left") {
      return align;
    }
    return "center";
  }
  function getCellAlignClass(col) {
    return "up-text-" + getCellAlignValue(col);
  }
  function getCellClassName(row, col) {
    if (props.cellClassName == null) {
      return "";
    }
    const callback = props.cellClassName;
    const result = callback(row, col);
    return valueToString(result);
  }
  function getColumnWidthNumber(col) {
    const cols = props.columns;
    let total = 0;
    for (let i = 0; i < cols.length; i++) {
      total += normalizeColumnWidth(cols[i]["width"]);
    }
    const width = normalizeColumnWidth(col["width"]);
    if (total <= 0) {
      return width;
    }
    const contentWidth = Math.max(total, getTableMinWidthPx());
    return Math.floor(width * contentWidth / total);
  }
  function getColumnWidth(col) {
    return getColumnWidthNumber(col).toString() + "px";
  }
  function getHeaderCellStyle(col) {
    const style = createEmptyObject();
    style["width"] = getColumnWidth(col);
    return style;
  }
  function getFixedHeaderCellStyle(col) {
    const style = getHeaderCellStyle(col);
    style["backgroundColor"] = "#f5f7fa";
    return style;
  }
  function getSpanValue(value = null, fallback = 1) {
    if (value == null || valueToString(value) == "") {
      return fallback;
    }
    const parsed = parseInt(value.toString());
    return isNaN(parsed) ? fallback : parsed;
  }
  function getCellSpanArray(row, column, rowIndex, columnIndex) {
    if (typeof props.spanMethod != "function" || props.spanMethod == null) {
      return createSpanArray();
    }
    const callback = props.spanMethod;
    const result = callback(new common_vendor.UTSJSONObject({
      row,
      column,
      rowIndex,
      columnIndex
    }));
    if (Array.isArray(result)) {
      const arr = result;
      const rowspan = arr.length > 0 ? getSpanValue(arr[0], 1) : 1;
      const colspan = arr.length > 1 ? getSpanValue(arr[1], 1) : 1;
      return [rowspan, colspan];
    }
    const spanObject = result;
    if (spanObject != null) {
      const rowspan = getSpanValue(spanObject["rowspan"], 1);
      const colspan = getSpanValue(spanObject["colspan"], 1);
      return [rowspan, colspan];
    }
    return createSpanArray();
  }
  function getCellSpan(row, column, rowIndex, columnIndex) {
    const span = getCellSpanArray(row, column, rowIndex, columnIndex);
    const rowspan = span.length > 0 ? span[0] : 1;
    const colspan = span.length > 1 ? span[1] : 1;
    return createSpan(rowspan, colspan);
  }
  function getCellSpanClass(row, column, rowIndex, columnIndex) {
    const span = getCellSpan(row, column, rowIndex, columnIndex);
    if (span["rowspan"] == 0 || span["colspan"] == 0) {
      return "up-table-cell-hidden";
    }
    if (span["rowspan"] > 1 || span["colspan"] > 1) {
      return "up-table-cell-merged";
    }
    return "";
  }
  function getCellSpanStyle(row, column, rowIndex, columnIndex) {
    const span = getCellSpan(row, column, rowIndex, columnIndex);
    const style = createEmptyObject();
    const rowspan = span["rowspan"];
    const colspan = span["colspan"];
    if (rowspan == 0 || colspan == 0) {
      return style;
    }
    if (rowspan > 1) {
      const rHeight = toNumber(props.rowHeight, 44);
      style["height"] = (rowspan * rHeight).toString() + "px";
    }
    if (colspan > 1) {
      const cols = props.columns;
      let width = 0;
      for (let i = columnIndex; i < columnIndex + colspan && i < cols.length; i++) {
        width += getColumnWidthNumber(cols[i]);
      }
      style["width"] = width.toString() + "px";
    }
    return style;
  }
  const hasTree = common_vendor.computed(() => {
    const cKey = getChildrenKey();
    const rows = props.data;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const children = row[cKey];
      if (Array.isArray(children) && children.length > 0) {
        return true;
      }
    }
    return false;
  });
  function getBaseCellStyle(row, col, rowIndex, columnIndex, level) {
    const style = createEmptyObject();
    const spanStyle = getCellSpanStyle(row, col, rowIndex, columnIndex);
    const spanKeys = common_vendor.UTSJSONObject.keys(spanStyle);
    if (spanKeys.indexOf("width") == -1) {
      style["width"] = getColumnWidth(col);
    }
    if (hasTree.value && isMainColumn(col) && level > 1) {
      style["paddingLeft"] = ((level - 1) * 16).toString() + "px";
    }
    const colStyle = col["style"];
    if (colStyle != null) {
      const keys = common_vendor.UTSJSONObject.keys(colStyle);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == "color" || key == "textAlign" || key == "text-align") {
          continue;
        }
        style[key] = colStyle[key];
      }
    }
    for (let i = 0; i < spanKeys.length; i++) {
      const key = spanKeys[i];
      style[key] = spanStyle[key];
    }
    return style;
  }
  function getCellStyle(row, col, rowIndex, columnIndex, level) {
    return getBaseCellStyle(row, col, rowIndex, columnIndex, level);
  }
  function getFixedCellStyle(row, col, rowIndex, columnIndex, level) {
    const style = getBaseCellStyle(row, col, rowIndex, columnIndex, level);
    style["backgroundColor"] = "#ffffff";
    return style;
  }
  function isExpanded(row) {
    const key = getRowKeyValue(row);
    if (key == "") {
      return false;
    }
    return expandedKeys.value.indexOf(key) > -1;
  }
  function hasChildrenRow(row) {
    const rawChildren = row[getChildrenKey()];
    if (rawChildren == null || !Array.isArray(rawChildren)) {
      return false;
    }
    const children = rawChildren;
    return children.length > 0;
  }
  function showTreeIcon(col, row) {
    if (!hasTree.value) {
      return false;
    }
    if (!isMainColumn(col)) {
      return false;
    }
    return hasChildrenRow(row);
  }
  function compareRows(a, b) {
    const key = sortKey.value;
    if (key == "") {
      return 0;
    }
    const textA = valueToString(a[key]);
    const textB = valueToString(b[key]);
    let result = 0;
    const numberA = parseFloat(textA);
    const numberB = parseFloat(textB);
    const bothNumeric = !isNaN(numberA) && !isNaN(numberB);
    if (bothNumeric) {
      result = numberA > numberB ? 1 : numberA < numberB ? -1 : 0;
    } else {
      result = textA > textB ? 1 : textA < textB ? -1 : 0;
    }
    return sortOrder.value == "descending" ? -result : result;
  }
  function applySort(rows) {
    if (!Array.isArray(rows) || rows.length == 0) {
      return createRowList();
    }
    if (sortKey.value == "" || sortOrder.value == "") {
      return rows.slice();
    }
    const data = rows.slice();
    data.sort((a, b) => {
      return compareRows(a, b);
    });
    return data;
  }
  function applyFilters(rows) {
    if (!Array.isArray(rows) || rows.length == 0) {
      return createRowList();
    }
    const flt = props.filters;
    const filterKeys = common_vendor.UTSJSONObject.keys(flt);
    if (filterKeys.length == 0) {
      return rows.slice();
    }
    const result = createRowList();
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      let matched = true;
      for (let j = 0; j < filterKeys.length; j++) {
        const filterKey = filterKeys[j];
        const filterValue = flt[filterKey];
        const filterText = valueToString(filterValue);
        if (filterText == "") {
          continue;
        }
        const rowText = valueToString(row[filterKey]);
        if (rowText.indexOf(filterText) == -1) {
          matched = false;
          break;
        }
      }
      if (matched) {
        result.push(row);
      }
    }
    return result;
  }
  const processedData = common_vendor.computed(() => {
    const rows = props.data;
    const filtered = applyFilters(rows);
    return applySort(filtered);
  });
  function collectFlatRows(rows, parentRow = null, level, result) {
    if (!Array.isArray(rows) || rows.length == 0) {
      return null;
    }
    const cKey = getChildrenKey();
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      result.push(new common_vendor.UTSJSONObject({
        row,
        parentRow,
        level,
        rowIndex: i
      }));
      const children = row[cKey];
      if (children != null && children.length > 0 && isExpanded(row)) {
        collectFlatRows(children, row, level + 1, result);
      }
    }
  }
  const flatRows = common_vendor.computed(() => {
    const result = createRowList();
    collectFlatRows(processedData.value, null, 1, result);
    return result;
  });
  const hasData = common_vendor.computed(() => {
    return flatRows.value.length > 0;
  });
  const fixedLeftColumns = common_vendor.computed(() => {
    const result = createRowList();
    const cols = props.columns;
    let started = false;
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      if (valueToString(col["fixed"]) == "left") {
        result.push(col);
        started = true;
      } else if (started) {
        break;
      }
    }
    return result;
  });
  const showFixedShadow = common_vendor.computed(() => {
    return scrollLeftValue.value > 0 && fixedLeftColumns.value.length > 0;
  });
  function safeToNumber(value = null, fallback = 0) {
    return toNumber(value, fallback);
  }
  function getTableContentWidthValue() {
    const cols = props.columns;
    let total = 0;
    for (let i = 0; i < cols.length; i++) {
      total += normalizeColumnWidth(cols[i]["width"]);
    }
    const minWidth = getTableMinWidthPx();
    return total > 0 ? Math.max(total, minWidth) : minWidth;
  }
  function getTableContentWidth() {
    return getTableContentWidthValue().toString() + "px";
  }
  function getTableContentStyle() {
    const style = createEmptyObject();
    const contentWidth = getTableContentWidth();
    style["width"] = contentWidth;
    style["minWidth"] = contentWidth;
    return style;
  }
  function getNaturalTableHeight() {
    const headerHeight = props.showHeader ? 44 : 0;
    const rHeight = toNumber(props.rowHeight, 44);
    const rows = hasData.value ? flatRows.value.length : 1;
    return (headerHeight + rHeight * rows).toString() + "px";
  }
  function getScrollStyle() {
    const style = createEmptyObject();
    const heightText = addUnitLocal(props.height);
    if (heightText != "auto") {
      style["height"] = heightText;
    } else {
      style["height"] = getNaturalTableHeight();
    }
    return style;
  }
  function getBodyStyle() {
    const style = createEmptyObject();
    const maxHeightText = addUnitLocal(props.maxHeight);
    if (maxHeightText != "auto") {
      style["maxHeight"] = maxHeightText;
    }
    return style;
  }
  function getFixedShadowWidth() {
    const cols = fixedLeftColumns.value;
    let total = 0;
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      const width = getColumnWidthNumber(col);
      total += width;
      if (props.border) {
        total += 1;
      }
    }
    return total;
  }
  function getFixedShadowStyle() {
    const style = createEmptyObject();
    style["height"] = getNaturalTableHeight();
    style["width"] = getFixedShadowWidth().toString() + "px";
    return style;
  }
  function isHiddenBySameRowColspan(row, rowIndex, columnIndex) {
    const cols = props.columns;
    for (let i = 0; i < columnIndex && i < cols.length; i++) {
      const span = getCellSpan(row, cols[i], rowIndex, i);
      const rowspan = span["rowspan"];
      const colspan = span["colspan"];
      if (rowspan > 0 && colspan > 1 && i + colspan > columnIndex) {
        return true;
      }
    }
    return false;
  }
  function isCellRendered(row, rowIndex, columnIndex) {
    const col = props.columns[columnIndex];
    const span = getCellSpan(row, col, rowIndex, columnIndex);
    const rowspan = span["rowspan"];
    const colspan = span["colspan"];
    if (rowspan == 0 || colspan == 0) {
      return !isHiddenBySameRowColspan(row, rowIndex, columnIndex);
    }
    return true;
  }
  function getRowCells(row, rowIndex) {
    const result = createRowList();
    const cols = props.columns;
    for (let i = 0; i < cols.length; i++) {
      if (isCellRendered(row, rowIndex, i)) {
        result.push(new common_vendor.UTSJSONObject({
          col: cols[i],
          colIndex: i
        }));
      }
    }
    return result;
  }
  function getFixedRowCells(row, rowIndex) {
    const result = createRowList();
    const cols = fixedLeftColumns.value;
    for (let i = 0; i < cols.length; i++) {
      const colIndex = getColumnIndex(cols[i]);
      if (isCellRendered(row, rowIndex, colIndex)) {
        result.push(new common_vendor.UTSJSONObject({
          col: cols[i],
          colIndex
        }));
      }
    }
    return result;
  }
  function getCellText(row, col) {
    const field = getColumnField(col);
    if (field == "") {
      return "";
    }
    const text = valueToString(row[field]);
    return text == "" ? "-" : text;
  }
  function toggleExpand(row) {
    if (!hasChildrenRow(row)) {
      return null;
    }
    const key = getRowKeyValue(row);
    if (key == "") {
      return null;
    }
    const list = expandedKeys.value;
    const index = list.indexOf(key);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(key);
    }
    expandedKeys.value = list;
    emit("expand-change", list.slice());
  }
  function isSelected(row) {
    const key = getRowKeyValue(row);
    if (key == "") {
      return false;
    }
    return selectedKeys.value.indexOf(key) > -1;
  }
  function addSelectedRowAndChildren(row, selKeys) {
    const key = getRowKeyValue(row);
    if (key != "" && selKeys.indexOf(key) == -1) {
      selKeys.push(key);
    }
    const children = row[getChildrenKey()];
    if (children == null || !Array.isArray(children)) {
      return null;
    }
    for (let i = 0; i < children.length; i++) {
      addSelectedRowAndChildren(children[i], selKeys);
    }
  }
  function removeSelectedRowAndChildren(row, selKeys) {
    const key = getRowKeyValue(row);
    const index = selKeys.indexOf(key);
    if (index > -1) {
      selKeys.splice(index, 1);
    }
    const children = row[getChildrenKey()];
    if (children == null || !Array.isArray(children)) {
      return null;
    }
    for (let i = 0; i < children.length; i++) {
      removeSelectedRowAndChildren(children[i], selKeys);
    }
  }
  function collectAllRows(rows, result) {
    if (!Array.isArray(rows) || rows.length == 0) {
      return null;
    }
    const cKey = getChildrenKey();
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      result.push(row);
      const children = row[cKey];
      if (children != null && Array.isArray(children) && children.length > 0) {
        collectAllRows(children, result);
      }
    }
  }
  function getAllRows() {
    const result = createRowList();
    collectAllRows(processedData.value, result);
    return result;
  }
  function getSelectedRows() {
    const result = createRowList();
    const rows = getAllRows();
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (isSelected(row)) {
        result.push(row);
      }
    }
    return result;
  }
  function isAllSelected() {
    const rows = getAllRows();
    if (rows.length == 0) {
      return false;
    }
    for (let i = 0; i < rows.length; i++) {
      if (!isSelected(rows[i])) {
        return false;
      }
    }
    return true;
  }
  function toggleSelectAll() {
    const rows = getAllRows();
    if (isAllSelected()) {
      selectedKeys.value = createStringList();
    } else {
      const next = createStringList();
      for (let i = 0; i < rows.length; i++) {
        const key = getRowKeyValue(rows[i]);
        if (key != "") {
          next.push(key);
        }
      }
      selectedKeys.value = next;
    }
    const selRows = getSelectedRows();
    emit("select-all", selRows);
    emit("selection-change", selRows);
  }
  function toggleSelect(row) {
    const key = getRowKeyValue(row);
    if (key == "") {
      return null;
    }
    const selKeys = selectedKeys.value;
    const index = selKeys.indexOf(key);
    if (index > -1) {
      removeSelectedRowAndChildren(row, selKeys);
    } else {
      addSelectedRowAndChildren(row, selKeys);
    }
    selectedKeys.value = selKeys;
    emit("select", row, isSelected(row));
    emit("selection-change", getSelectedRows());
  }
  function pruneSelection() {
    const valid = createStringList();
    const rows = getAllRows();
    for (let i = 0; i < rows.length; i++) {
      const key = getRowKeyValue(rows[i]);
      if (key != "") {
        valid.push(key);
      }
    }
    const next = createStringList();
    const selKeys = selectedKeys.value;
    for (let i = 0; i < selKeys.length; i++) {
      const key = selKeys[i];
      if (valid.indexOf(key) > -1) {
        next.push(key);
      }
    }
    selectedKeys.value = next;
  }
  function handleRowClick(row) {
    if (props.highlightCurrentRow) {
      currentRowValue.value = getRowKeyValue(row);
      emit("current-change", row);
    }
    emit("row-click", row);
  }
  function getRowClass(row, flatIndex) {
    let className = "";
    if (props.highlightCurrentRow && currentRowValue.value != "" && currentRowValue.value == getRowKeyValue(row)) {
      className += " up-table-row-highlight";
    }
    if (props.stripe && flatIndex % 2 == 1) {
      className += " up-table-row-zebra";
    }
    if (props.rowClassName != null) {
      const callback = props.rowClassName;
      const customClass = valueToString(callback(row, flatIndex));
      if (customClass != "") {
        className += " " + customClass;
      }
    }
    return className;
  }
  function getSortConditions() {
    if (sortKey.value == "" || sortOrder.value == "") {
      return createRowList();
    }
    return [new common_vendor.UTSJSONObject({
      key: sortKey.value,
      order: sortOrder.value
    })];
  }
  function handleHeaderClick(col) {
    emit("header-click", col);
    if (!isSortableColumn(col)) {
      return null;
    }
    const key = getColumnField(col);
    if (key == "") {
      return null;
    }
    if (sortKey.value != key) {
      sortKey.value = key;
      sortOrder.value = "ascending";
    } else if (sortOrder.value == "ascending") {
      sortOrder.value = "descending";
    } else {
      sortKey.value = "";
      sortOrder.value = "";
    }
    emit("sort-change", getSortConditions());
  }
  function getSortIcon(col) {
    const key = getColumnField(col);
    if (key == "" || !isSortableColumn(col)) {
      return "";
    }
    if (sortKey.value != key || sortOrder.value == "") {
      return "-";
    }
    return sortOrder.value == "ascending" ? "^" : "v";
  }
  function onScroll(e) {
    scrollLeftValue.value = e.detail.scrollLeft;
  }
  common_vendor.watch(() => {
    return props.expandRowKeys;
  }, (newVal = null) => {
    expandedKeys.value = normalizeKeys(newVal);
  }, { immediate: true });
  common_vendor.watch(() => {
    return props.currentRowKey;
  }, (newVal = null) => {
    currentRowValue.value = normalizeKey(newVal);
  }, { immediate: true });
  common_vendor.watch(() => {
    return props.filters;
  }, (newVal) => {
    emit("filter-change", newVal);
  }, { deep: true });
  common_vendor.watch(() => {
    return props.data;
  }, () => {
    pruneSelection();
  }, { deep: true });
  __expose({
    getSelectedRows,
    toggleSelectAll,
    toggleSelect,
    toggleExpand,
    isExpanded,
    isSelected
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.showHeader
    }, __props.showHeader ? {
      b: common_vendor.f(__props.columns, (col, colIndex, i0) => {
        return common_vendor.e({
          a: isSelectionColumn(col)
        }, isSelectionColumn(col) ? {
          b: isAllSelected(),
          c: common_vendor.o(toggleSelectAll, getColumnKey(col, colIndex))
        } : common_vendor.e({
          d: common_vendor.t(getColumnTitle(col)),
          e: getHeaderAlignValue(col),
          f: isSortableColumn(col)
        }, isSortableColumn(col) ? {
          g: common_vendor.t(getSortIcon(col))
        } : {}), {
          h: getColumnKey(col, colIndex),
          i: common_vendor.n(getHeaderAlignClass(col)),
          j: common_vendor.s(getHeaderCellStyle(col)),
          k: common_vendor.o(($event) => {
            return handleHeaderClick(col);
          }, getColumnKey(col, colIndex))
        });
      })
    } : {}, {
      c: hasData.value
    }, hasData.value ? {
      d: common_vendor.f(flatRows.value, (item, flatIndex, i0) => {
        return {
          a: common_vendor.f(getRowCells(item["row"], safeToNumber(item["rowIndex"])), (cell, idx, i1) => {
            return common_vendor.e({
              a: isSelectionColumn(cell["col"])
            }, isSelectionColumn(cell["col"]) ? {
              b: isSelected(item["row"]),
              c: common_vendor.o(($event) => {
                return toggleSelect(item["row"]);
              }, getColumnKey(cell["col"], safeToNumber(cell["colIndex"])))
            } : common_vendor.e({
              d: showTreeIcon(cell["col"], item["row"])
            }, showTreeIcon(cell["col"], item["row"]) ? {
              e: common_vendor.t(isExpanded(item["row"]) ? "-" : "+"),
              f: expandWidthValue.value,
              g: common_vendor.o(($event) => {
                return toggleExpand(item["row"]);
              }, getColumnKey(cell["col"], safeToNumber(cell["colIndex"])))
            } : {}, {
              h: common_vendor.t(getCellText(item["row"], cell["col"])),
              i: "cell-" + i0 + "-" + i1,
              j: common_vendor.r("cell", {
                row: item["row"],
                column: cell["col"],
                prow: getParentRow(item),
                rowIndex: safeToNumber(item["rowIndex"]),
                columnIndex: safeToNumber(cell["colIndex"]),
                level: safeToNumber(item["level"], 1)
              }, i0 + "-" + i1)
            }), {
              k: getColumnKey(cell["col"], safeToNumber(cell["colIndex"])),
              l: common_vendor.n(getCellAlignClass(cell["col"])),
              m: common_vendor.n(getCellClassName(item["row"], cell["col"])),
              n: common_vendor.n(getCellSpanClass(item["row"], cell["col"], safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]))),
              o: common_vendor.s(getCellStyle(item["row"], cell["col"], safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]), safeToNumber(item["level"], 1)))
            });
          }),
          b: getRowKey(item["row"], flatIndex),
          c: common_vendor.n(getRowClass(item["row"], flatIndex)),
          d: common_vendor.o(($event) => {
            return handleRowClick(item["row"]);
          }, getRowKey(item["row"], flatIndex))
        };
      }),
      e: rowHeightValue.value,
      f: common_vendor.s(getBodyStyle())
    } : {
      g: common_vendor.t(__props.emptyText)
    }, {
      h: common_vendor.s(getTableContentStyle()),
      i: common_vendor.s(getScrollStyle()),
      j: common_vendor.o(onScroll, "91"),
      k: showFixedShadow.value
    }, showFixedShadow.value ? common_vendor.e({
      l: __props.showHeader
    }, __props.showHeader ? {
      m: common_vendor.f(fixedLeftColumns.value, (col, fixedIndex, i0) => {
        return common_vendor.e({
          a: isSelectionColumn(col)
        }, isSelectionColumn(col) ? {
          b: isAllSelected(),
          c: common_vendor.o(toggleSelectAll, getColumnKey(col, fixedIndex))
        } : common_vendor.e({
          d: common_vendor.t(getColumnTitle(col)),
          e: getHeaderAlignValue(col),
          f: isSortableColumn(col)
        }, isSortableColumn(col) ? {
          g: common_vendor.t(getSortIcon(col))
        } : {}), {
          h: getColumnKey(col, fixedIndex),
          i: common_vendor.n(getHeaderAlignClass(col)),
          j: common_vendor.s(getFixedHeaderCellStyle(col)),
          k: common_vendor.o(($event) => {
            return handleHeaderClick(col);
          }, getColumnKey(col, fixedIndex))
        });
      })
    } : {}, {
      n: hasData.value
    }, hasData.value ? {
      o: common_vendor.f(flatRows.value, (item, flatIndex, i0) => {
        return {
          a: common_vendor.f(getFixedRowCells(item["row"], safeToNumber(item["rowIndex"])), (cell, idx, i1) => {
            return common_vendor.e({
              a: isSelectionColumn(cell["col"])
            }, isSelectionColumn(cell["col"]) ? {
              b: isSelected(item["row"]),
              c: common_vendor.o(($event) => {
                return toggleSelect(item["row"]);
              }, "fixed_" + getColumnKey(cell["col"], safeToNumber(cell["colIndex"])))
            } : common_vendor.e({
              d: showTreeIcon(cell["col"], item["row"])
            }, showTreeIcon(cell["col"], item["row"]) ? {
              e: common_vendor.t(isExpanded(item["row"]) ? "-" : "+"),
              f: expandWidthValue.value,
              g: common_vendor.o(($event) => {
                return toggleExpand(item["row"]);
              }, "fixed_" + getColumnKey(cell["col"], safeToNumber(cell["colIndex"])))
            } : {}, {
              h: common_vendor.t(getCellText(item["row"], cell["col"])),
              i: "cell-" + i0 + "-" + i1,
              j: common_vendor.r("cell", {
                row: item["row"],
                column: cell["col"],
                prow: getParentRow(item),
                rowIndex: safeToNumber(item["rowIndex"]),
                columnIndex: safeToNumber(cell["colIndex"]),
                level: safeToNumber(item["level"], 1)
              }, i0 + "-" + i1)
            }), {
              k: "fixed_" + getColumnKey(cell["col"], safeToNumber(cell["colIndex"])),
              l: common_vendor.n(getCellAlignClass(cell["col"])),
              m: common_vendor.n(getCellClassName(item["row"], cell["col"])),
              n: common_vendor.n(getCellSpanClass(item["row"], cell["col"], safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]))),
              o: common_vendor.s(getFixedCellStyle(item["row"], cell["col"], safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]), safeToNumber(item["level"], 1)))
            });
          }),
          b: "fixed_" + getRowKey(item["row"], flatIndex),
          c: common_vendor.n(getRowClass(item["row"], flatIndex)),
          d: common_vendor.o(($event) => {
            return handleRowClick(item["row"]);
          }, "fixed_" + getRowKey(item["row"], flatIndex))
        };
      }),
      p: rowHeightValue.value,
      q: common_vendor.s(getBodyStyle())
    } : {}, {
      r: common_vendor.s(getFixedShadowStyle())
    }) : {}, {
      s: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      t: common_vendor.n(__props.border ? "up-table-border" : ""),
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      w: `${_ctx.u_s_b_h}px`,
      x: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ad94214c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-table2/up-table2.js.map
