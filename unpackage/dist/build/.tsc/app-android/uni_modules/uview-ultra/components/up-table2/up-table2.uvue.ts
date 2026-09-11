import { ref, computed, watch, onMounted } from 'vue'

type SpanMethodCallback = (scope: UTSJSONObject) => any | null
type CellStyleCallback = (scope: UTSJSONObject) => UTSJSONObject | null
type CellClassNameCallback = (row: UTSJSONObject, col: UTSJSONObject) => string
type RowClassNameCallback = (row: UTSJSONObject, rowIndex: number) => string
type HeaderCellClassNameCallback = (col: UTSJSONObject) => string
type SummaryMethodCallback = (scope: UTSJSONObject) => string[] | null


const __sfc__ = defineComponent({
  __name: 'up-table2',
name: 'up-table2',
  props: {
    data: {
        type: Array as PropType<UTSJSONObject[]>,
        required: true,
        default: () => [] as UTSJSONObject[]
    },
    columns: {
        type: Array as PropType<UTSJSONObject[]>,
        required: true,
        default: () => [] as UTSJSONObject[]
    },
    rowKey: {
        type: String,
        default: 'id'
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
        default: 'No Data'
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
        type: Object as PropType<UTSJSONObject>,
        default: () => ({} as UTSJSONObject)
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
        type: Object as PropType<UTSJSONObject>,
        default: () => ({ children: 'children', hasChildren: 'hasChildren' } as UTSJSONObject)
    },
    expandRowKeys: {
        type: Array as PropType<any[]>,
        default: () => [] as any[]
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
        default: ''
    },
    fixedHeader: {
        type: Boolean,
        default: false
    },
    spanMethod: {
        type: Function as PropType<SpanMethodCallback | null>,
        default: null
    },
    cellStyle: {
        type: Function as PropType<CellStyleCallback | null>,
        default: null
    },
    cellClassName: {
        type: Function as PropType<CellClassNameCallback | null>,
        default: null
    },
    rowClassName: {
        type: Function as PropType<RowClassNameCallback | null>,
        default: null
    },
    headerCellClassName: {
        type: Function as PropType<HeaderCellClassNameCallback | null>,
        default: null
    },
    showSummary: {
        type: Boolean,
        default: false
    },
    sumText: {
        type: String,
        default: '合计'
    },
    summaryMethod: {
        type: Function as PropType<SummaryMethodCallback | null>,
        default: null
    }
},
  emits: [
    'row-click',
    'header-click',
    'selection-change',
    'select',
    'select-all',
    'sort-change',
    'filter-change',
    'expand-change',
    'current-change'
],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function createRowList(): UTSJSONObject[] {
    return [] as UTSJSONObject[]
}

function createStringList(): string[] {
    return [] as string[]
}

function createEmptyObject(): UTSJSONObject {
    return {} as UTSJSONObject
}

function createSpan(rowspan: number = 1, colspan: number = 1): UTSJSONObject {
    return {
        rowspan: rowspan,
        colspan: colspan
    } as UTSJSONObject
}

function createSpanArray(): number[] {
    return [1, 1] as number[]
}

function valueToString(value: any | null): string {
    return value == null ? '' : value.toString()
}

function toNumber(value: any | null, fallback: number = 0): number {
    if (value == null) {
        return fallback
    }
    const text = valueToString(value)
    if (text == '') {
        return fallback
    }
    const parsed = parseInt(text)
    return isNaN(parsed) ? fallback : parsed
}

function normalizeColumnWidth(value: any | null): number {
    const width = toNumber(value, 80)
    return width < 80 ? 80 : width
}

function addUnitLocal(value: any | null): string {
    if (value == null) {
        return 'auto'
    }
    const text = valueToString(value)
    if (text == '') {
        return 'auto'
    }
    if (text.endsWith('px') || text.endsWith('%') || text.endsWith('rpx')) {
        return text
    }
    const numeric = /^-?\d+(\.\d+)?$/.test(text)
    return numeric ? (text + 'px') : text
}

function getTableMinWidthPx(): number {
    return 375
}



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

function normalizeKey(value: any | null): string {
    return valueToString(value)
}

function normalizeKeys(keys: any[] | null): string[] {
    const result = createStringList()
    if (keys == null) {
        return result
    }
    for (let i = 0; i < keys.length; i++) {
        result.push(normalizeKey(keys[i]))
    }
    return result
}

const expandedKeys = ref<string[]>(normalizeKeys(props.expandRowKeys))
const selectedKeys = ref<string[]>(createStringList())
const sortKey = ref<string>('')
const sortOrder = ref<string>('')
const currentRowValue = ref<string>(normalizeKey(props.currentRowKey))
const scrollLeftValue = ref<number>(0)

onMounted(() => {
    expandedKeys.value = normalizeKeys(props.expandRowKeys)
    currentRowValue.value = normalizeKey(props.currentRowKey)
})

const rowHeightValue = computed<string>(() => addUnitLocal(props.rowHeight))
const expandWidthValue = computed<string>(() => addUnitLocal(props.expandWidth))

function isSelectionColumn(col: UTSJSONObject): boolean {
    return valueToString(col['type']) == 'selection'
}

function getColumnField(col: UTSJSONObject): string {
    return valueToString(col['key'])
}

const mainColumnKey = computed<string>(() => {
    if (props.mainCol != '') {
        return props.mainCol
    }
    const cols = props.columns
    for (let i = 0; i < cols.length; i++) {
        const col = cols[i] as UTSJSONObject
        if (!isSelectionColumn(col)) {
            const key = getColumnField(col)
            if (key != '') {
                return key
            }
        }
    }
    return ''
})

function isMainColumn(col: UTSJSONObject): boolean {
    const field = getColumnField(col)
    return field != '' && field == mainColumnKey.value
}

function getChildrenKey(): string {
    const tree = props.treeProps
    const key = tree['children']
    return valueToString(key) == '' ? 'children' : valueToString(key)
}

function getRowKeyValue(row: UTSJSONObject): string {
    return normalizeKey(row[props.rowKey])
}

function getRowKey(row: UTSJSONObject, index: number): string {
    const key = getRowKeyValue(row)
    return key == '' ? index.toString() : key
}

function getParentRow(item: UTSJSONObject): UTSJSONObject | null {
    return item['parentRow'] as UTSJSONObject | null
}

function getColumnKey(col: UTSJSONObject, index: number): string {
    const key = getColumnField(col)
    if (key != '') {
        return key
    }
    const typeText = valueToString(col['type'])
    return typeText == '' ? ('col_' + index.toString()) : (typeText + '_' + index.toString())
}

function getColumnIndex(col: UTSJSONObject): number {
    const cols = props.columns
    for (let i = 0; i < cols.length; i++) {
        if ((cols[i] as UTSJSONObject) == col) {
            return i
        }
    }
    return 0
}

function getColumnTitle(col: UTSJSONObject): string {
    return valueToString(col['title'])
}

function isSortableColumn(col: UTSJSONObject): boolean {
    if (isSelectionColumn(col)) {
        return false
    }
    if (props.sortable) {
        return true
    }
    const colSortable = valueToString(col['sortable'])
    return colSortable == 'true' || colSortable == '1'
}

function getHeaderAlignValue(col: UTSJSONObject): string {
    const headerAlign = valueToString(col['headerAlign'])
    if (headerAlign == 'center' || headerAlign == 'right' || headerAlign == 'left') {
        return headerAlign
    }
    const align = valueToString(col['align'])
    if (align == 'center' || align == 'right' || align == 'left') {
        return align
    }
    return 'center'
}

function getHeaderAlignClass(col: UTSJSONObject): string {
    return 'up-text-' + getHeaderAlignValue(col)
}

function getCellAlignValue(col: UTSJSONObject): string {
    const align = valueToString(col['align'])
    if (align == 'center' || align == 'right' || align == 'left') {
        return align
    }
    return 'center'
}

function getCellAlignClass(col: UTSJSONObject): string {
    return 'up-text-' + getCellAlignValue(col)
}

function getCellClassName(row: UTSJSONObject, col: UTSJSONObject): string {
    if (props.cellClassName == null) {
        return ''
    }
    const callback = props.cellClassName as CellClassNameCallback
    const result = callback(row, col)
    return valueToString(result)
}

function getColumnWidthNumber(col: UTSJSONObject): number {
    const cols = props.columns
    let total = 0
    for (let i = 0; i < cols.length; i++) {
        total += normalizeColumnWidth((cols[i] as UTSJSONObject)['width'])
    }
    const width = normalizeColumnWidth(col['width'])
    if (total <= 0) {
        return width
    }
    const contentWidth = Math.max(total, getTableMinWidthPx())
    return Math.floor(width * contentWidth / total)
}

function getColumnWidth(col: UTSJSONObject): string {
    return getColumnWidthNumber(col).toString() + 'px'
}

function getHeaderCellStyle(col: UTSJSONObject): UTSJSONObject {
    const style = createEmptyObject()
    style['width'] = getColumnWidth(col)
    return style
}

function getFixedHeaderCellStyle(col: UTSJSONObject): UTSJSONObject {
    const style = getHeaderCellStyle(col)
    style['backgroundColor'] = '#f5f7fa'
    return style
}

function getSpanValue(value: any | null, fallback: number = 1): number {
    if (value == null || valueToString(value) == '') {
        return fallback
    }
    const parsed = parseInt(value.toString())
    return isNaN(parsed) ? fallback : parsed
}

function getCellSpanArray(row: UTSJSONObject, column: UTSJSONObject, rowIndex: number, columnIndex: number): number[] {
    if (typeof props.spanMethod != 'function' || props.spanMethod == null) {
        return createSpanArray()
    }
    const callback = props.spanMethod as SpanMethodCallback
    const result = callback({
        row: row,
        column: column,
        rowIndex: rowIndex,
        columnIndex: columnIndex
    } as UTSJSONObject)
    if (Array.isArray(result)) {
        const arr = result as number[]
        const rowspan = arr.length > 0 ? getSpanValue(arr[0], 1) : 1
        const colspan = arr.length > 1 ? getSpanValue(arr[1], 1) : 1
        return [rowspan, colspan] as number[]
    }
    const spanObject = result as UTSJSONObject | null
    if (spanObject != null) {
        const rowspan = getSpanValue(spanObject['rowspan'], 1)
        const colspan = getSpanValue(spanObject['colspan'], 1)
        return [rowspan, colspan] as number[]
    }
    return createSpanArray()
}

function getCellSpan(row: UTSJSONObject, column: UTSJSONObject, rowIndex: number, columnIndex: number): UTSJSONObject {
    const span = getCellSpanArray(row, column, rowIndex, columnIndex)
    const rowspan = span.length > 0 ? span[0] : 1
    const colspan = span.length > 1 ? span[1] : 1
    return createSpan(rowspan, colspan)
}

function getCellSpanClass(row: UTSJSONObject, column: UTSJSONObject, rowIndex: number, columnIndex: number): string {
    const span = getCellSpan(row, column, rowIndex, columnIndex)
    if ((span['rowspan'] as number) == 0 || (span['colspan'] as number) == 0) {
        return 'up-table-cell-hidden'
    }
    if ((span['rowspan'] as number) > 1 || (span['colspan'] as number) > 1) {
        return 'up-table-cell-merged'
    }
    return ''
}

function getCellSpanStyle(row: UTSJSONObject, column: UTSJSONObject, rowIndex: number, columnIndex: number): UTSJSONObject {
    const span = getCellSpan(row, column, rowIndex, columnIndex)
    const style = createEmptyObject()
    const rowspan = span['rowspan'] as number
    const colspan = span['colspan'] as number
    if (rowspan == 0 || colspan == 0) {
        return style
    }
    if (rowspan > 1) {
        const rHeight = toNumber(props.rowHeight, 44)
        style['height'] = (rowspan * rHeight).toString() + 'px'
    }
    if (colspan > 1) {
        const cols = props.columns
        let width = 0
        for (let i = columnIndex; i < columnIndex + colspan && i < cols.length; i++) {
            width += getColumnWidthNumber(cols[i] as UTSJSONObject)
        }
        style['width'] = width.toString() + 'px'
    }
    return style
}

const hasTree = computed<boolean>(() => {
    const cKey = getChildrenKey()
    const rows = props.data
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as UTSJSONObject
        const children = row[cKey] as UTSJSONObject[] | null
        if (Array.isArray(children) && (children as UTSJSONObject[]).length > 0) {
            return true
        }
    }
    return false
})

function getBaseCellStyle(row: UTSJSONObject, col: UTSJSONObject, rowIndex: number, columnIndex: number, level: number): UTSJSONObject {
    const style = createEmptyObject()
    const spanStyle = getCellSpanStyle(row, col, rowIndex, columnIndex)
    const spanKeys = UTSJSONObject.keys(spanStyle)
    if (spanKeys.indexOf('width') == -1) {
        style['width'] = getColumnWidth(col)
    }
    if (hasTree.value && isMainColumn(col) && level > 1) {
        style['paddingLeft'] = ((level - 1) * 16).toString() + 'px'
    }
    const colStyle = col['style'] as UTSJSONObject | null
    if (colStyle != null) {
        const keys = UTSJSONObject.keys(colStyle)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            if (key == 'color' || key == 'textAlign' || key == 'text-align') {
                continue
            }
            style[key] = colStyle[key]
        }
    }
    for (let i = 0; i < spanKeys.length; i++) {
        const key = spanKeys[i]
        style[key] = spanStyle[key]
    }
    return style
}

function getCellStyle(row: UTSJSONObject, col: UTSJSONObject, rowIndex: number, columnIndex: number, level: number): UTSJSONObject {
    return getBaseCellStyle(row, col, rowIndex, columnIndex, level)
}

function getFixedCellStyle(row: UTSJSONObject, col: UTSJSONObject, rowIndex: number, columnIndex: number, level: number): UTSJSONObject {
    const style = getBaseCellStyle(row, col, rowIndex, columnIndex, level)
    style['backgroundColor'] = '#ffffff'
    return style
}

function isExpanded(row: UTSJSONObject): boolean {
    const key = getRowKeyValue(row)
    if (key == '') {
        return false
    }
    return expandedKeys.value.indexOf(key) > -1
}

function hasChildrenRow(row: UTSJSONObject): boolean {
    const rawChildren = row[getChildrenKey()] as any | null
    if (rawChildren == null || !Array.isArray(rawChildren)) {
        return false
    }
    const children = rawChildren as UTSJSONObject[]
    return children.length > 0
}

function showTreeIcon(col: UTSJSONObject, row: UTSJSONObject): boolean {
    if (!hasTree.value) {
        return false
    }
    if (!isMainColumn(col)) {
        return false
    }
    return hasChildrenRow(row)
}

function compareRows(a: UTSJSONObject, b: UTSJSONObject): number {
    const key = sortKey.value
    if (key == '') {
        return 0
    }
    const textA = valueToString(a[key])
    const textB = valueToString(b[key])
    let result = 0
    const numberA = parseFloat(textA)
    const numberB = parseFloat(textB)
    const bothNumeric = !isNaN(numberA) && !isNaN(numberB)
    if (bothNumeric) {
        result = numberA > numberB ? 1 : (numberA < numberB ? -1 : 0)
    } else {
        result = textA > textB ? 1 : (textA < textB ? -1 : 0)
    }
    return sortOrder.value == 'descending' ? -result : result
}

function applySort(rows: UTSJSONObject[]): UTSJSONObject[] {
    if (!Array.isArray(rows) || rows.length == 0) {
        return createRowList()
    }
    if (sortKey.value == '' || sortOrder.value == '') {
        return rows.slice()
    }
    const data = rows.slice()
    data.sort((a: UTSJSONObject, b: UTSJSONObject): number => compareRows(a, b))
    return data
}

function applyFilters(rows: UTSJSONObject[]): UTSJSONObject[] {
    if (!Array.isArray(rows) || rows.length == 0) {
        return createRowList()
    }
    const flt = props.filters
    const filterKeys = UTSJSONObject.keys(flt)
    if (filterKeys.length == 0) {
        return rows.slice()
    }
    const result = createRowList()
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as UTSJSONObject
        let matched = true
        for (let j = 0; j < filterKeys.length; j++) {
            const filterKey = filterKeys[j]
            const filterValue = flt[filterKey]
            const filterText = valueToString(filterValue)
            if (filterText == '') {
                continue
            }
            const rowText = valueToString(row[filterKey])
            if (rowText.indexOf(filterText) == -1) {
                matched = false
                break
            }
        }
        if (matched) {
            result.push(row)
        }
    }
    return result
}

const processedData = computed<UTSJSONObject[]>(() => {
    const rows = props.data
    const filtered = applyFilters(rows)
    return applySort(filtered)
})

function collectFlatRows(rows: UTSJSONObject[], parentRow: UTSJSONObject | null, level: number, result: UTSJSONObject[]): void {
    if (!Array.isArray(rows) || rows.length == 0) {
        return
    }
    const cKey = getChildrenKey()
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as UTSJSONObject
        result.push({
            row: row,
            parentRow: parentRow,
            level: level,
            rowIndex: i
        } as UTSJSONObject)
        const children = row[cKey] as UTSJSONObject[] | null
        if (children != null && children.length > 0 && isExpanded(row)) {
            collectFlatRows(children, row, level + 1, result)
        }
    }
}

const flatRows = computed<UTSJSONObject[]>(() => {
    const result = createRowList()
    collectFlatRows(processedData.value, null, 1, result)
    return result
})

const hasData = computed<boolean>(() => flatRows.value.length > 0)

const fixedLeftColumns = computed<UTSJSONObject[]>(() => {
    const result = createRowList()
    const cols = props.columns
    let started = false
    for (let i = 0; i < cols.length; i++) {
        const col = cols[i] as UTSJSONObject
        if (valueToString(col['fixed']) == 'left') {
            result.push(col)
            started = true
        } else if (started) {
            break
        }
    }
    return result
})

const showFixedShadow = computed<boolean>(() => {
    return scrollLeftValue.value > 0 && fixedLeftColumns.value.length > 0
})

function safeToNumber(value: any | null, fallback: number = 0): number {
    return toNumber(value, fallback)
}

function getTableContentWidthValue(): number {
    const cols = props.columns
    let total = 0
    for (let i = 0; i < cols.length; i++) {
        total += normalizeColumnWidth((cols[i] as UTSJSONObject)['width'])
    }
    const minWidth = getTableMinWidthPx()
    return total > 0 ? Math.max(total, minWidth) : minWidth
}

function getTableContentWidth(): string {
    return getTableContentWidthValue().toString() + 'px'
}

function getTableContentStyle(): UTSJSONObject {
    const style = createEmptyObject()
    const contentWidth = getTableContentWidth()

    style['width'] = '100%'
    style['minWidth'] = contentWidth





    return style
}

function getNaturalTableHeight(): string {
    const headerHeight = props.showHeader ? 44 : 0
    const rHeight = toNumber(props.rowHeight, 44)
    let rows = hasData.value ? flatRows.value.length : 1
    if (props.showSummary && hasData.value) {
        rows += 1
    }
    return (headerHeight + rHeight * rows).toString() + 'px'
}

const summaryData = computed<string[]>(() => {
    if (!props.showSummary) {
        return createStringList()
    }
    const cols = props.columns
    const rows = processedData.value
    if (typeof props.summaryMethod == 'function' && props.summaryMethod != null) {
        const callback = props.summaryMethod as SummaryMethodCallback
        const result = callback({
            columns: cols,
            data: rows
        } as UTSJSONObject)
        if (result != null && Array.isArray(result)) {
            const arr = result as string[]
            const customList = createStringList()
            for (let i = 0; i < arr.length; i++) {
                customList.push(valueToString(arr[i]))
            }
            return customList
        }
    }
    const sums = createStringList()
    let isFirstCol = true
    for (let i = 0; i < cols.length; i++) {
        const col = cols[i] as UTSJSONObject
        if (isSelectionColumn(col)) {
            sums.push('')
            continue
        }
        if (isFirstCol) {
            sums.push(props.sumText != '' ? props.sumText : '合计')
            isFirstCol = false
            continue
        }
        const key = getColumnField(col)
        if (key == '') {
            sums.push('')
            continue
        }
        let total: number = 0
        let hasNumber = false
        let isAllNumber = true
        for (let j = 0; j < rows.length; j++) {
            const row = rows[j] as UTSJSONObject
            const val = row[key]
            if (val != null) {
                const strVal = valueToString(val).trim()
                if (strVal != '') {
                    const num = parseFloat(strVal)
                    if (!isNaN(num)) {
                        total += num
                        hasNumber = true
                    } else {
                        isAllNumber = false
                        break
                    }
                }
            }
        }
        if (hasNumber && isAllNumber) {
            const rounded = Math.round(total * 100) / 100
            sums.push(rounded.toString())
        } else {
            sums.push('-')
        }
    }
    return sums
})

function getSummaryValue(index: number): string {
    const list = summaryData.value
    if (index >= 0 && index < list.length) {
        return list[index]
    }
    return ''
}

function getScrollStyle(): UTSJSONObject {
    const style = createEmptyObject()
    const heightText = addUnitLocal(props.height)
    if (heightText != 'auto') {
        style['height'] = heightText
    } else {
        style['height'] = getNaturalTableHeight()
    }
    return style
}

function getBodyStyle(): UTSJSONObject {
    const style = createEmptyObject()
    const maxHeightText = addUnitLocal(props.maxHeight)
    if (maxHeightText != 'auto') {
        style['maxHeight'] = maxHeightText
    }
    return style
}

function getFixedShadowWidth(): number {
    const cols = fixedLeftColumns.value
    let total = 0
    for (let i = 0; i < cols.length; i++) {
        const col = cols[i] as UTSJSONObject
        const width = getColumnWidthNumber(col)
        total += width
        if (props.border) {
            total += 1
        }
    }
    return total
}

function getFixedShadowStyle(): UTSJSONObject {
    const style = createEmptyObject()
    style['height'] = getNaturalTableHeight()
    style['width'] = getFixedShadowWidth().toString() + 'px'
    return style
}

function isHiddenBySameRowColspan(row: UTSJSONObject, rowIndex: number, columnIndex: number): boolean {
    const cols = props.columns
    for (let i = 0; i < columnIndex && i < cols.length; i++) {
        const span = getCellSpan(row, cols[i] as UTSJSONObject, rowIndex, i)
        const rowspan = span['rowspan'] as number
        const colspan = span['colspan'] as number
        if (rowspan > 0 && colspan > 1 && i + colspan > columnIndex) {
            return true
        }
    }
    return false
}

function isCellRendered(row: UTSJSONObject, rowIndex: number, columnIndex: number): boolean {
    const col = props.columns[columnIndex] as UTSJSONObject
    const span = getCellSpan(row, col, rowIndex, columnIndex)
    const rowspan = span['rowspan'] as number
    const colspan = span['colspan'] as number
    if (rowspan == 0 || colspan == 0) {
        return !isHiddenBySameRowColspan(row, rowIndex, columnIndex)
    }
    return true
}

function getRowCells(row: UTSJSONObject, rowIndex: number): UTSJSONObject[] {
    const result = createRowList()
    const cols = props.columns
    for (let i = 0; i < cols.length; i++) {
        if (isCellRendered(row, rowIndex, i)) {
            result.push({
                col: cols[i],
                colIndex: i
            } as UTSJSONObject)
        }
    }
    return result
}

function getFixedRowCells(row: UTSJSONObject, rowIndex: number): UTSJSONObject[] {
    const result = createRowList()
    const cols = fixedLeftColumns.value
    for (let i = 0; i < cols.length; i++) {
        const colIndex = getColumnIndex(cols[i] as UTSJSONObject)
        if (isCellRendered(row, rowIndex, colIndex)) {
            result.push({
                col: cols[i],
                colIndex: colIndex
            } as UTSJSONObject)
        }
    }
    return result
}

function getCellText(row: UTSJSONObject, col: UTSJSONObject): string {
    const field = getColumnField(col)
    if (field == '') {
        return ''
    }
    const text = valueToString(row[field])
    return text == '' ? '-' : text
}

function toggleExpand(row: UTSJSONObject): void {
    if (!hasChildrenRow(row)) {
        return
    }
    const key = getRowKeyValue(row)
    if (key == '') {
        return
    }
    const list = expandedKeys.value
    const index = list.indexOf(key)
    if (index > -1) {
        list.splice(index, 1)
    } else {
        list.push(key)
    }
    expandedKeys.value = list
    emit('expand-change', list.slice())
}

function isSelected(row: UTSJSONObject): boolean {
    const key = getRowKeyValue(row)
    if (key == '') {
        return false
    }
    return selectedKeys.value.indexOf(key) > -1
}

function addSelectedRowAndChildren(row: UTSJSONObject, selKeys: string[]): void {
    const key = getRowKeyValue(row)
    if (key != '' && selKeys.indexOf(key) == -1) {
        selKeys.push(key)
    }
    const children = row[getChildrenKey()] as UTSJSONObject[] | null
    if (children == null || !Array.isArray(children)) {
        return
    }
    for (let i = 0; i < children.length; i++) {
        addSelectedRowAndChildren(children[i] as UTSJSONObject, selKeys)
    }
}

function removeSelectedRowAndChildren(row: UTSJSONObject, selKeys: string[]): void {
    const key = getRowKeyValue(row)
    const index = selKeys.indexOf(key)
    if (index > -1) {
        selKeys.splice(index, 1)
    }
    const children = row[getChildrenKey()] as UTSJSONObject[] | null
    if (children == null || !Array.isArray(children)) {
        return
    }
    for (let i = 0; i < children.length; i++) {
        removeSelectedRowAndChildren(children[i] as UTSJSONObject, selKeys)
    }
}

function collectAllRows(rows: UTSJSONObject[], result: UTSJSONObject[]): void {
    if (!Array.isArray(rows) || rows.length == 0) {
        return
    }
    const cKey = getChildrenKey()
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as UTSJSONObject
        result.push(row)
        const children = row[cKey] as UTSJSONObject[] | null
        if (children != null && Array.isArray(children) && children.length > 0) {
            collectAllRows(children, result)
        }
    }
}

function getAllRows(): UTSJSONObject[] {
    const result = createRowList()
    collectAllRows(processedData.value, result)
    return result
}

function getSelectedRows(): UTSJSONObject[] {
    const result = createRowList()
    const rows = getAllRows()
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as UTSJSONObject
        if (isSelected(row)) {
            result.push(row)
        }
    }
    return result
}

function isAllSelected(): boolean {
    const rows = getAllRows()
    if (rows.length == 0) {
        return false
    }
    for (let i = 0; i < rows.length; i++) {
        if (!isSelected(rows[i] as UTSJSONObject)) {
            return false
        }
    }
    return true
}

function toggleSelectAll(): void {
    const rows = getAllRows()
    if (isAllSelected()) {
        selectedKeys.value = createStringList()
    } else {
        const next = createStringList()
        for (let i = 0; i < rows.length; i++) {
            const key = getRowKeyValue(rows[i] as UTSJSONObject)
            if (key != '') {
                next.push(key)
            }
        }
        selectedKeys.value = next
    }
    const selRows = getSelectedRows()
    emit('select-all', selRows)
    emit('selection-change', selRows)
}

function toggleSelect(row: UTSJSONObject): void {
    const key = getRowKeyValue(row)
    if (key == '') {
        return
    }
    const selKeys = selectedKeys.value
    const index = selKeys.indexOf(key)
    if (index > -1) {
        removeSelectedRowAndChildren(row, selKeys)
    } else {
        addSelectedRowAndChildren(row, selKeys)
    }
    selectedKeys.value = selKeys
    emit('select', row, isSelected(row))
    emit('selection-change', getSelectedRows())
}

function pruneSelection(): void {
    const valid = createStringList()
    const rows = getAllRows()
    for (let i = 0; i < rows.length; i++) {
        const key = getRowKeyValue(rows[i] as UTSJSONObject)
        if (key != '') {
            valid.push(key)
        }
    }
    const next = createStringList()
    const selKeys = selectedKeys.value
    for (let i = 0; i < selKeys.length; i++) {
        const key = selKeys[i]
        if (valid.indexOf(key) > -1) {
            next.push(key)
        }
    }
    selectedKeys.value = next
}

function handleRowClick(row: UTSJSONObject): void {
    if (props.highlightCurrentRow) {
        currentRowValue.value = getRowKeyValue(row)
        emit('current-change', row)
    }
    emit('row-click', row)
}

function getRowClass(row: UTSJSONObject, flatIndex: number): string {
    let className = ''
    if (props.highlightCurrentRow && currentRowValue.value != '' && currentRowValue.value == getRowKeyValue(row)) {
        className += ' up-table-row-highlight'
    }
    if (props.stripe && flatIndex % 2 == 1) {
        className += ' up-table-row-zebra'
    }
    if (props.rowClassName != null) {
        const callback = props.rowClassName as RowClassNameCallback
        const customClass = valueToString(callback(row, flatIndex))
        if (customClass != '') {
            className += ' ' + customClass
        }
    }
    return className
}

function getSortConditions(): UTSJSONObject[] {
    if (sortKey.value == '' || sortOrder.value == '') {
        return createRowList()
    }
    return [{
        key: sortKey.value,
        order: sortOrder.value
    } as UTSJSONObject]
}

function handleHeaderClick(col: UTSJSONObject): void {
    emit('header-click', col)
    if (!isSortableColumn(col)) {
        return
    }
    const key = getColumnField(col)
    if (key == '') {
        return
    }
    if (sortKey.value != key) {
        sortKey.value = key
        sortOrder.value = 'ascending'
    } else if (sortOrder.value == 'ascending') {
        sortOrder.value = 'descending'
    } else {
        sortKey.value = ''
        sortOrder.value = ''
    }
    emit('sort-change', getSortConditions())
}

function getSortIcon(col: UTSJSONObject): string {
    const key = getColumnField(col)
    if (key == '' || !isSortableColumn(col)) {
        return ''
    }
    if (sortKey.value != key || sortOrder.value == '') {
        return '-'
    }
    return sortOrder.value == 'ascending' ? '^' : 'v'
}

function onScroll(e: UniScrollEvent): void {
    scrollLeftValue.value = e.detail.scrollLeft
}










watch((): any[] => props.expandRowKeys, (newVal: any[] | null) => {
    expandedKeys.value = normalizeKeys(newVal)
}, { immediate: true })

watch((): any | null => props.currentRowKey, (newVal: any | null) => {
    currentRowValue.value = normalizeKey(newVal)
}, { immediate: true })

watch((): UTSJSONObject => props.filters, (newVal: UTSJSONObject) => {
    emit('filter-change', newVal)
}, { deep: true })

watch((): UTSJSONObject[] => props.data, () => {
    pruneSelection()
}, { deep: true })

__expose({
    getSelectedRows,
    toggleSelectAll,
    toggleSelect,
    toggleExpand,
    isExpanded,
    isSelected
})

return (): any | null => {

const _component_checkbox = resolveComponent("checkbox")

  return _cE("view", _uM({
    class: _nC(["weapp-tw-border up-table2", _ctx.border ? 'up-table-border' : ''])
  }), [
    _cE("scroll-view", _uM({
      direction: "horizontal",
      class: "up-table2-scroll",
      style: _nS(getScrollStyle()),
      onScroll: onScroll
    }), [
      _cE("view", _uM({
        class: "weapp-tw-border up-table2-content",
        style: _nS(getTableContentStyle())
      }), [
        isTrue(_ctx.showHeader)
          ? _cE("view", _uM({
              key: 0,
              class: "weapp-tw-border up-table-row up-table-header-row"
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(_ctx.columns, (col, colIndex, __index, _cached): any => {
                return _cE("view", _uM({
                  key: getColumnKey(col, colIndex),
                  class: _nC(["weapp-tw-border up-table-cell up-table-header-cell", [getHeaderAlignClass(col)]]),
                  style: _nS(getHeaderCellStyle(col)),
                  onClick: () => {handleHeaderClick(col)}
                }), [
                  isTrue(isSelectionColumn(col))
                    ? _cE("view", _uM({
                        key: 0,
                        class: "weapp-tw-border"
                      }), [
                        _cV(_component_checkbox, _uM({
                          checked: isAllSelected(),
                          onClick: withModifiers(toggleSelectAll, ["stop"])
                        }), null, 8 /* PROPS */, ["checked"])
                      ])
                    : _cE(Fragment, _uM({ key: 1 }), [
                        _cE("text", _uM({
                          class: "weapp-tw-border up-table-header-text",
                          style: _nS(_uM({ textAlign: getHeaderAlignValue(col) }))
                        }), _tD(getColumnTitle(col)), 5 /* TEXT, STYLE */),
                        isTrue(isSortableColumn(col))
                          ? _cE("text", _uM({
                              key: 0,
                              class: "weapp-tw-border up-table-sort-icon"
                            }), _tD(getSortIcon(col)), 1 /* TEXT */)
                          : _cC("v-if", true)
                      ], 64 /* STABLE_FRAGMENT */)
                ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
              }), 128 /* KEYED_FRAGMENT */)
            ])
          : _cC("v-if", true),
        isTrue(hasData.value)
          ? _cE("view", _uM({
              key: 1,
              class: "weapp-tw-border up-table-body",
              style: _nS(getBodyStyle())
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(flatRows.value, (item, flatIndex, __index, _cached): any => {
                return _cE("view", _uM({
                  key: getRowKey(item['row'] as UTSJSONObject, flatIndex),
                  class: _nC(["weapp-tw-border up-table-row up-table-body-row", getRowClass(item['row'] as UTSJSONObject, flatIndex)]),
                  style: _nS(_uM({ height: rowHeightValue.value })),
                  onClick: () => {handleRowClick(item['row'] as UTSJSONObject)}
                }), [
                  _cE(Fragment, null, RenderHelpers.renderList(getRowCells(item['row'] as UTSJSONObject, safeToNumber(item['rowIndex'])), (cell, idx, __index, _cached): any => {
                    return _cE("view", _uM({
                      key: getColumnKey(cell['col'] as UTSJSONObject, safeToNumber(cell['colIndex'])),
                      class: _nC(["weapp-tw-border up-table-cell up-table-body-cell", [getCellAlignClass(cell['col'] as UTSJSONObject), getCellClassName(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject), getCellSpanClass(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject, safeToNumber(item['rowIndex']), safeToNumber(cell['colIndex']))]]),
                      style: _nS(getCellStyle(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject, safeToNumber(item['rowIndex']), safeToNumber(cell['colIndex']), safeToNumber(item['level'], 1)))
                    }), [
                      isTrue(isSelectionColumn(cell['col'] as UTSJSONObject))
                        ? _cE("view", _uM({
                            key: 0,
                            class: "weapp-tw-border"
                          }), [
                            _cV(_component_checkbox, _uM({
                              checked: isSelected(item['row'] as UTSJSONObject),
                              onClick: withModifiers(() => {toggleSelect(item['row'] as UTSJSONObject)}, ["stop"])
                            }), null, 8 /* PROPS */, ["checked", "onClick"])
                          ])
                        : _cE(Fragment, _uM({ key: 1 }), [
                            isTrue(showTreeIcon(cell['col'] as UTSJSONObject, item['row'] as UTSJSONObject))
                              ? _cE("view", _uM({
                                  key: 0,
                                  class: "weapp-tw-border up-table-tree-toggle",
                                  style: _nS(_uM({ width: expandWidthValue.value })),
                                  onClick: withModifiers(() => {toggleExpand(item['row'] as UTSJSONObject)}, ["stop"])
                                }), [
                                  _cE("text", _uM({ class: "weapp-tw-border" }), _tD(isExpanded(item['row'] as UTSJSONObject) ? '-' : '+'), 1 /* TEXT */)
                                ], 12 /* STYLE, PROPS */, ["onClick"])
                              : _cC("v-if", true),
                            renderSlot(_ctx.$slots, "cell", _uM({
                              row: item['row'] as UTSJSONObject,
                              column: cell['col'] as UTSJSONObject,
                              prow: getParentRow(item),
                              rowIndex: safeToNumber(item['rowIndex']),
                              columnIndex: safeToNumber(cell['colIndex']),
                              level: safeToNumber(item['level'], 1)
                            }), (): any[] => [
                              _cE("text", _uM({ class: "weapp-tw-border up-table-cell-text" }), _tD(getCellText(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject)), 1 /* TEXT */)
                            ])
                          ], 64 /* STABLE_FRAGMENT */)
                    ], 6 /* CLASS, STYLE */)
                  }), 128 /* KEYED_FRAGMENT */)
                ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
              }), 128 /* KEYED_FRAGMENT */)
            ], 4 /* STYLE */)
          : _cC("v-if", true),
        isTrue(_ctx.showSummary && hasData.value)
          ? _cE("view", _uM({
              key: 2,
              class: "weapp-tw-border up-table-row up-table-footer-row",
              style: _nS(_uM({ height: rowHeightValue.value }))
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(_ctx.columns, (col, colIndex, __index, _cached): any => {
                return _cE("view", _uM({
                  key: 'sum_' + getColumnKey(col, colIndex),
                  class: _nC(["weapp-tw-border up-table-cell up-table-footer-cell", [getCellAlignClass(col)]]),
                  style: _nS(getHeaderCellStyle(col))
                }), [
                  renderSlot(_ctx.$slots, "summary-cell", _uM({
                    column: col,
                    columnIndex: colIndex,
                    value: getSummaryValue(colIndex)
                  }), (): any[] => [
                    _cE("text", _uM({
                      class: "weapp-tw-border up-table-footer-text",
                      style: _nS(_uM({ textAlign: getCellAlignValue(col) }))
                    }), _tD(getSummaryValue(colIndex)), 5 /* TEXT, STYLE */)
                  ])
                ], 6 /* CLASS, STYLE */)
              }), 128 /* KEYED_FRAGMENT */)
            ], 4 /* STYLE */)
          : isTrue(!hasData.value)
            ? _cE("view", _uM({
                key: 3,
                class: "weapp-tw-border up-table-empty"
              }), [
                renderSlot(_ctx.$slots, "empty", {}, (): any[] => [
                  _cE("text", _uM({ class: "weapp-tw-border up-table-empty-text" }), _tD(_ctx.emptyText), 1 /* TEXT */)
                ])
              ])
            : _cC("v-if", true)
      ], 4 /* STYLE */)
    ], 36 /* STYLE, NEED_HYDRATION */),
    isTrue(showFixedShadow.value)
      ? _cE("view", _uM({
          key: 0,
          class: "weapp-tw-border up-table-fixed-shadow",
          style: _nS(getFixedShadowStyle())
        }), [
          isTrue(_ctx.showHeader)
            ? _cE("view", _uM({
                key: 0,
                class: "weapp-tw-border up-table-row up-table-header-row"
              }), [
                _cE(Fragment, null, RenderHelpers.renderList(fixedLeftColumns.value, (col, fixedIndex, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: getColumnKey(col, fixedIndex),
                    class: _nC(["weapp-tw-border up-table-cell up-table-header-cell", [getHeaderAlignClass(col)]]),
                    style: _nS(getFixedHeaderCellStyle(col)),
                    onClick: () => {handleHeaderClick(col)}
                  }), [
                    isTrue(isSelectionColumn(col))
                      ? _cE("view", _uM({
                          key: 0,
                          class: "weapp-tw-border"
                        }), [
                          _cV(_component_checkbox, _uM({
                            checked: isAllSelected(),
                            onClick: withModifiers(toggleSelectAll, ["stop"])
                          }), null, 8 /* PROPS */, ["checked"])
                        ])
                      : _cE(Fragment, _uM({ key: 1 }), [
                          _cE("text", _uM({
                            class: "weapp-tw-border up-table-header-text",
                            style: _nS(_uM({ textAlign: getHeaderAlignValue(col) }))
                          }), _tD(getColumnTitle(col)), 5 /* TEXT, STYLE */),
                          isTrue(isSortableColumn(col))
                            ? _cE("text", _uM({
                                key: 0,
                                class: "weapp-tw-border up-table-sort-icon"
                              }), _tD(getSortIcon(col)), 1 /* TEXT */)
                            : _cC("v-if", true)
                        ], 64 /* STABLE_FRAGMENT */)
                  ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
                }), 128 /* KEYED_FRAGMENT */)
              ])
            : _cC("v-if", true),
          isTrue(hasData.value)
            ? _cE("view", _uM({
                key: 1,
                class: "weapp-tw-border up-table-body",
                style: _nS(getBodyStyle())
              }), [
                _cE(Fragment, null, RenderHelpers.renderList(flatRows.value, (item, flatIndex, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: 'fixed_' + getRowKey(item['row'] as UTSJSONObject, flatIndex),
                    class: _nC(["weapp-tw-border up-table-row up-table-body-row", getRowClass(item['row'] as UTSJSONObject, flatIndex)]),
                    style: _nS(_uM({ height: rowHeightValue.value })),
                    onClick: () => {handleRowClick(item['row'] as UTSJSONObject)}
                  }), [
                    _cE(Fragment, null, RenderHelpers.renderList(getFixedRowCells(item['row'] as UTSJSONObject, safeToNumber(item['rowIndex'])), (cell, idx, __index, _cached): any => {
                      return _cE("view", _uM({
                        key: 'fixed_' + getColumnKey(cell['col'] as UTSJSONObject, safeToNumber(cell['colIndex'])),
                        class: _nC(["weapp-tw-border up-table-cell up-table-body-cell", [getCellAlignClass(cell['col'] as UTSJSONObject), getCellClassName(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject), getCellSpanClass(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject, safeToNumber(item['rowIndex']), safeToNumber(cell['colIndex']))]]),
                        style: _nS(getFixedCellStyle(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject, safeToNumber(item['rowIndex']), safeToNumber(cell['colIndex']), safeToNumber(item['level'], 1)))
                      }), [
                        isTrue(isSelectionColumn(cell['col'] as UTSJSONObject))
                          ? _cE("view", _uM({
                              key: 0,
                              class: "weapp-tw-border"
                            }), [
                              _cV(_component_checkbox, _uM({
                                checked: isSelected(item['row'] as UTSJSONObject),
                                onClick: withModifiers(() => {toggleSelect(item['row'] as UTSJSONObject)}, ["stop"])
                              }), null, 8 /* PROPS */, ["checked", "onClick"])
                            ])
                          : _cE(Fragment, _uM({ key: 1 }), [
                              isTrue(showTreeIcon(cell['col'] as UTSJSONObject, item['row'] as UTSJSONObject))
                                ? _cE("view", _uM({
                                    key: 0,
                                    class: "weapp-tw-border up-table-tree-toggle",
                                    style: _nS(_uM({ width: expandWidthValue.value })),
                                    onClick: withModifiers(() => {toggleExpand(item['row'] as UTSJSONObject)}, ["stop"])
                                  }), [
                                    _cE("text", _uM({ class: "weapp-tw-border" }), _tD(isExpanded(item['row'] as UTSJSONObject) ? '-' : '+'), 1 /* TEXT */)
                                  ], 12 /* STYLE, PROPS */, ["onClick"])
                                : _cC("v-if", true),
                              renderSlot(_ctx.$slots, "cell", _uM({
                                row: item['row'] as UTSJSONObject,
                                column: cell['col'] as UTSJSONObject,
                                prow: getParentRow(item),
                                rowIndex: safeToNumber(item['rowIndex']),
                                columnIndex: safeToNumber(cell['colIndex']),
                                level: safeToNumber(item['level'], 1)
                              }), (): any[] => [
                                _cE("text", _uM({ class: "weapp-tw-border up-table-cell-text" }), _tD(getCellText(item['row'] as UTSJSONObject, cell['col'] as UTSJSONObject)), 1 /* TEXT */)
                              ])
                            ], 64 /* STABLE_FRAGMENT */)
                      ], 6 /* CLASS, STYLE */)
                    }), 128 /* KEYED_FRAGMENT */)
                  ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
                }), 128 /* KEYED_FRAGMENT */)
              ], 4 /* STYLE */)
            : _cC("v-if", true),
          isTrue(_ctx.showSummary && hasData.value)
            ? _cE("view", _uM({
                key: 2,
                class: "weapp-tw-border up-table-row up-table-footer-row",
                style: _nS(_uM({ height: rowHeightValue.value }))
              }), [
                _cE(Fragment, null, RenderHelpers.renderList(fixedLeftColumns.value, (col, fixedIndex, __index, _cached): any => {
                  return _cE("view", _uM({
                    key: 'fixed_sum_' + getColumnKey(col, fixedIndex),
                    class: _nC(["weapp-tw-border up-table-cell up-table-footer-cell", [getCellAlignClass(col)]]),
                    style: _nS(getFixedHeaderCellStyle(col))
                  }), [
                    renderSlot(_ctx.$slots, "summary-cell", _uM({
                      column: col,
                      columnIndex: getColumnIndex(col),
                      value: getSummaryValue(getColumnIndex(col))
                    }), (): any[] => [
                      _cE("text", _uM({
                        class: "weapp-tw-border up-table-footer-text",
                        style: _nS(_uM({ textAlign: getCellAlignValue(col) }))
                      }), _tD(getSummaryValue(getColumnIndex(col))), 5 /* TEXT, STYLE */)
                    ])
                  ], 6 /* CLASS, STYLE */)
                }), 128 /* KEYED_FRAGMENT */)
              ], 4 /* STYLE */)
            : _cC("v-if", true)
        ], 4 /* STYLE */)
      : _cC("v-if", true)
  ], 2 /* CLASS */)
}
}

})
export default __sfc__
export type UpTable2ComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTable2UpTable2Styles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-table2", _pS(_uM([["width", "100%"], ["position", "relative"], ["overflow", "hidden"]]))], ["up-table2-scroll", _pS(_uM([["width", "100%"]]))], ["up-table2-content", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0]]))], ["up-table-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["overflow", "visible"]]))], ["up-table-header-row", _pS(_uM([["backgroundColor", "#f5f7fa"]]))], ["up-table-footer-row", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["up-table-footer-cell", _pS(_uM([["borderTopWidth", 1], ["borderTopStyle", "solid"], ["borderTopColor", "#ebeef5"], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#ebeef5"], ["backgroundColor", "#f8fafc"]]))], ["up-table-footer-text", _pS(_uM([["width", "100%"], ["overflow", "hidden"], ["whiteSpace", "nowrap"], ["textOverflow", "ellipsis"], ["fontSize", 13], ["fontWeight", "bold"], ["color", "#334155"]]))], ["up-table-body", _pS(_uM([["width", "100%"]]))], ["up-table-body-cell", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["up-table-cell", _pS(_uM([["minWidth", 0], ["display", "flex"], ["flexDirection", "row"], ["flexShrink", 0], ["boxSizing", "border-box"], ["alignItems", "center"], ["paddingTop", 6], ["paddingRight", 6], ["paddingBottom", 6], ["paddingLeft", 6], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#ebeef5"]]))], ["up-table-header-cell", _pS(_uM([["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#dcdfe6"]]))], ["up-table-header-text", _pS(_uM([["width", "100%"], ["overflow", "hidden"], ["whiteSpace", "nowrap"], ["textOverflow", "ellipsis"], ["fontSize", 13]]))], ["up-table-cell-text", _pS(_uM([["overflow", "hidden"], ["textOverflow", "ellipsis"], ["whiteSpace", "nowrap"], ["fontSize", 13]]))], ["up-table-sort-icon", _pS(_uM([["marginLeft", 6], ["color", "#909399"]]))], ["up-table-tree-toggle", _pS(_uM([["width", 24], ["marginRight", 4], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"]]))], ["up-table-empty", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["up-table-empty-text", _pS(_uM([["color", "#999999"]]))], ["up-table-row-zebra", _pS(_uM([["backgroundColor", "#fafafa"]]))], ["up-table-row-highlight", _pS(_uM([["backgroundColor", "#ecf5ff"]]))], ["up-text-left", _pS(_uM([["justifyContent", "flex-start"]]))], ["up-text-center", _pS(_uM([["justifyContent", "center"]]))], ["up-text-right", _pS(_uM([["justifyContent", "flex-end"]]))], ["up-table-border", _pS(_uM([["borderTopWidth", 1], ["borderTopStyle", "solid"], ["borderTopColor", "#ebeef5"], ["borderLeftWidth", 1], ["borderLeftStyle", "solid"], ["borderLeftColor", "#ebeef5"], ["borderRightWidth", 1], ["borderRightStyle", "solid"], ["borderRightColor", "#ebeef5"]]))], ["up-table-cell-hidden", _pS(_uM([["opacity", 0], ["pointerEvents", "none"]]))], ["up-table-cell-merged", _pS(_uM([["position", "relative"], ["zIndex", 2], ["alignItems", "center"], ["overflow", "visible"]]))], ["up-table-fixed-shadow", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["zIndex", 20], ["overflow", "hidden"], ["backgroundColor", "#ffffff"], ["boxShadow", "2px 0 5px rgba(0, 0, 0, 0.15)"]]))]])]
