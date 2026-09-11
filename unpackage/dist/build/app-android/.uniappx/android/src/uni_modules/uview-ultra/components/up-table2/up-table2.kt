@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIB120614
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesUviewUltraComponentsUpTable2UpTable2 : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var data: UTSArray<UTSJSONObject> by `$props`
    open var columns: UTSArray<UTSJSONObject> by `$props`
    open var rowKey: String by `$props`
    open var border: Boolean by `$props`
    open var stripe: Boolean by `$props`
    open var height: Any? by `$props`
    open var maxHeight: Any? by `$props`
    open var showHeader: Boolean by `$props`
    open var emptyText: String by `$props`
    open var sortable: Boolean by `$props`
    open var multiSort: Boolean by `$props`
    open var filters: UTSJSONObject by `$props`
    open var highlightCurrentRow: Boolean by `$props`
    open var currentRowKey: Any? by `$props`
    open var treeProps: UTSJSONObject by `$props`
    open var expandRowKeys: UTSArray<Any> by `$props`
    open var rowHeight: Any by `$props`
    open var expandWidth: Any by `$props`
    open var mainCol: String by `$props`
    open var fixedHeader: Boolean by `$props`
    open var spanMethod: SpanMethodCallback? by `$props`
    open var cellStyle: CellStyleCallback? by `$props`
    open var cellClassName: CellClassNameCallback? by `$props`
    open var rowClassName: RowClassNameCallback? by `$props`
    open var headerCellClassName: HeaderCellClassNameCallback? by `$props`
    open var showSummary: Boolean by `$props`
    open var sumText: String by `$props`
    open var summaryMethod: SummaryMethodCallback? by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var getSelectedRows: () -> UTSArray<UTSJSONObject>
        get() {
            return unref(this.`$exposed`["getSelectedRows"]) as () -> UTSArray<UTSJSONObject>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getSelectedRows", value)
        }
    open var toggleSelectAll: () -> Unit
        get() {
            return unref(this.`$exposed`["toggleSelectAll"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "toggleSelectAll", value)
        }
    open var toggleSelect: (row: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["toggleSelect"]) as (row: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "toggleSelect", value)
        }
    open var toggleExpand: (row: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["toggleExpand"]) as (row: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "toggleExpand", value)
        }
    open var isExpanded: (row: UTSJSONObject) -> Boolean
        get() {
            return unref(this.`$exposed`["isExpanded"]) as (row: UTSJSONObject) -> Boolean
        }
        set(value) {
            setRefValue(this.`$exposed`, "isExpanded", value)
        }
    open var isSelected: (row: UTSJSONObject) -> Boolean
        get() {
            return unref(this.`$exposed`["isSelected"]) as (row: UTSJSONObject) -> Boolean
        }
        set(value) {
            setRefValue(this.`$exposed`, "isSelected", value)
        }
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>())
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNIB120614.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open var getChildIndex = ::gen_getChildIndex_fn
    open fun gen_getChildIndex_fn(ins: ComponentPublicInstance): Number {
        var index: Number = -1
        if (this.parent != null) {
            (this.parent!!!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, idx: Number){
                if (child == ins) {
                    index = idx
                }
            }
            )
        }
        return index
    }
    open var getParent = ::gen_getParent_fn
    open fun gen_getParent_fn(name: String): ComponentPublicInstance? {
        var parent = this.`$parent`
        while(parent != null){
            if (parent.`$options`["name"] != name) {
                parent = parent.`$parent`
            } else {
                break
            }
        }
        return parent
    }
    open var addChild = ::gen_addChild_fn
    open fun gen_addChild_fn(ins: ComponentPublicInstance): Unit {
        var exist = false
        var childs: UTSArray<ComponentPublicInstance> = this.children
        childs.map(fun(child: ComponentPublicInstance){
            if (ins == child) {
                exist = true
            }
        }
        )
        if (exist == false) {
            this.children.push(ins)
        }
    }
    open var addChildRef = ::gen_addChildRef_fn
    open fun gen_addChildRef_fn(str: String): Unit {
        var index = this.childrenRefs.indexOf("str")
        if (index <= -1) {
            this.childrenRefs.push(str)
        }
    }
    open fun getParentData(parentName: String, refMode: Boolean = false): Any {
        var parent = this.getParent(parentName)
        this.parent = parent
        if (parent != null) {
            if (parent?.`$data` != null && parent?.`$data`?.get("children") != null) {
                if (refMode) {
                    parent?.`$callMethod`("addChildRef", this.`$data`["refstr"])
                } else {
                    parent?.`$callMethod`("addChild", this)
                }
            }
            UTSJSONObject.keys(this.parentData).map(fun(key: String){
                if (parent?.`$props` != null && parent?.`$props`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$props`?.get(key)
                    }
                }
                if (parent?.`$data` != null && parent?.`$data`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$data`?.get(key)
                    }
                }
            }
            )
        }
        return _uO()
    }
    open var preventEvent = ::gen_preventEvent_fn
    open fun gen_preventEvent_fn(e: UniEvent) {
        e.stopPropagation()
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTable2UpTable2, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTable2UpTable2
            val _cache = __ins.renderCache
            fun gen_createRowList_fn(): UTSArray<UTSJSONObject> {
                return _uA<UTSJSONObject>()
            }
            val createRowList = ::gen_createRowList_fn
            fun gen_createStringList_fn(): UTSArray<String> {
                return _uA<String>()
            }
            val createStringList = ::gen_createStringList_fn
            fun gen_createEmptyObject_fn(): UTSJSONObject {
                return _uO()
            }
            val createEmptyObject = ::gen_createEmptyObject_fn
            fun createSpan(rowspan: Number = 1, colspan: Number = 1): UTSJSONObject {
                return _uO("rowspan" to rowspan, "colspan" to colspan)
            }
            fun gen_createSpanArray_fn(): UTSArray<Number> {
                return _uA<Number>(1, 1)
            }
            val createSpanArray = ::gen_createSpanArray_fn
            fun gen_valueToString_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val valueToString = ::gen_valueToString_fn
            fun toNumber(value: Any?, fallback: Number = 0): Number {
                if (value == null) {
                    return fallback
                }
                val text = valueToString(value)
                if (text == "") {
                    return fallback
                }
                val parsed = parseInt(text)
                return if (isNaN(parsed)) {
                    fallback
                } else {
                    parsed
                }
            }
            fun gen_normalizeColumnWidth_fn(value: Any?): Number {
                val width = toNumber(value, 80)
                return if (width < 80) {
                    80
                } else {
                    width
                }
            }
            val normalizeColumnWidth = ::gen_normalizeColumnWidth_fn
            fun gen_addUnitLocal_fn(value: Any?): String {
                if (value == null) {
                    return "auto"
                }
                val text = valueToString(value)
                if (text == "") {
                    return "auto"
                }
                if (text.endsWith("px") || text.endsWith("%") || text.endsWith("rpx")) {
                    return text
                }
                val numeric = UTSRegExp("^-?\\d+(\\.\\d+)?\$", "").test(text)
                return if (numeric) {
                    (text + "px")
                } else {
                    text
                }
            }
            val addUnitLocal = ::gen_addUnitLocal_fn
            fun gen_getTableMinWidthPx_fn(): Number {
                return 375
            }
            val getTableMinWidthPx = ::gen_getTableMinWidthPx_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            fun gen_normalizeKey_fn(value: Any?): String {
                return valueToString(value)
            }
            val normalizeKey = ::gen_normalizeKey_fn
            fun gen_normalizeKeys_fn(keys: UTSArray<Any>?): UTSArray<String> {
                val result = createStringList()
                if (keys == null) {
                    return result
                }
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        result.push(normalizeKey(keys[i]))
                        i++
                    }
                }
                return result
            }
            val normalizeKeys = ::gen_normalizeKeys_fn
            val expandedKeys = ref<UTSArray<String>>(normalizeKeys(props.expandRowKeys))
            val selectedKeys = ref<UTSArray<String>>(createStringList())
            val sortKey = ref<String>("")
            val sortOrder = ref<String>("")
            val currentRowValue = ref<String>(normalizeKey(props.currentRowKey))
            val scrollLeftValue = ref<Number>(0)
            onMounted(fun(){
                expandedKeys.value = normalizeKeys(props.expandRowKeys)
                currentRowValue.value = normalizeKey(props.currentRowKey)
            }
            )
            val rowHeightValue = computed<String>(fun(): String {
                return addUnitLocal(props.rowHeight)
            }
            )
            val expandWidthValue = computed<String>(fun(): String {
                return addUnitLocal(props.expandWidth)
            }
            )
            fun gen_isSelectionColumn_fn(col: UTSJSONObject): Boolean {
                return valueToString(col["type"]) == "selection"
            }
            val isSelectionColumn = ::gen_isSelectionColumn_fn
            fun gen_getColumnField_fn(col: UTSJSONObject): String {
                return valueToString(col["key"])
            }
            val getColumnField = ::gen_getColumnField_fn
            val mainColumnKey = computed<String>(fun(): String {
                if (props.mainCol != "") {
                    return props.mainCol
                }
                val cols = props.columns
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        val col = cols[i] as UTSJSONObject
                        if (!isSelectionColumn(col)) {
                            val key = getColumnField(col)
                            if (key != "") {
                                return key
                            }
                        }
                        i++
                    }
                }
                return ""
            }
            )
            fun gen_isMainColumn_fn(col: UTSJSONObject): Boolean {
                val field = getColumnField(col)
                return field != "" && field == mainColumnKey.value
            }
            val isMainColumn = ::gen_isMainColumn_fn
            fun gen_getChildrenKey_fn(): String {
                val tree = props.treeProps
                val key = tree["children"]
                return if (valueToString(key) == "") {
                    "children"
                } else {
                    valueToString(key)
                }
            }
            val getChildrenKey = ::gen_getChildrenKey_fn
            fun gen_getRowKeyValue_fn(row: UTSJSONObject): String {
                return normalizeKey(row[props.rowKey])
            }
            val getRowKeyValue = ::gen_getRowKeyValue_fn
            fun gen_getRowKey_fn(row: UTSJSONObject, index: Number): String {
                val key = getRowKeyValue(row)
                return if (key == "") {
                    index.toString(10)
                } else {
                    key
                }
            }
            val getRowKey = ::gen_getRowKey_fn
            fun gen_getParentRow_fn(item: UTSJSONObject): UTSJSONObject? {
                return item["parentRow"] as UTSJSONObject?
            }
            val getParentRow = ::gen_getParentRow_fn
            fun gen_getColumnKey_fn(col: UTSJSONObject, index: Number): String {
                val key = getColumnField(col)
                if (key != "") {
                    return key
                }
                val typeText = valueToString(col["type"])
                return if (typeText == "") {
                    ("col_" + index.toString(10))
                } else {
                    (typeText + "_" + index.toString(10))
                }
            }
            val getColumnKey = ::gen_getColumnKey_fn
            fun gen_getColumnIndex_fn(col: UTSJSONObject): Number {
                val cols = props.columns
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        if ((cols[i] as UTSJSONObject) == col) {
                            return i
                        }
                        i++
                    }
                }
                return 0
            }
            val getColumnIndex = ::gen_getColumnIndex_fn
            fun gen_getColumnTitle_fn(col: UTSJSONObject): String {
                return valueToString(col["title"])
            }
            val getColumnTitle = ::gen_getColumnTitle_fn
            fun gen_isSortableColumn_fn(col: UTSJSONObject): Boolean {
                if (isSelectionColumn(col)) {
                    return false
                }
                if (props.sortable) {
                    return true
                }
                val colSortable = valueToString(col["sortable"])
                return colSortable == "true" || colSortable == "1"
            }
            val isSortableColumn = ::gen_isSortableColumn_fn
            fun gen_getHeaderAlignValue_fn(col: UTSJSONObject): String {
                val headerAlign = valueToString(col["headerAlign"])
                if (headerAlign == "center" || headerAlign == "right" || headerAlign == "left") {
                    return headerAlign
                }
                val align = valueToString(col["align"])
                if (align == "center" || align == "right" || align == "left") {
                    return align
                }
                return "center"
            }
            val getHeaderAlignValue = ::gen_getHeaderAlignValue_fn
            fun gen_getHeaderAlignClass_fn(col: UTSJSONObject): String {
                return "up-text-" + getHeaderAlignValue(col)
            }
            val getHeaderAlignClass = ::gen_getHeaderAlignClass_fn
            fun gen_getCellAlignValue_fn(col: UTSJSONObject): String {
                val align = valueToString(col["align"])
                if (align == "center" || align == "right" || align == "left") {
                    return align
                }
                return "center"
            }
            val getCellAlignValue = ::gen_getCellAlignValue_fn
            fun gen_getCellAlignClass_fn(col: UTSJSONObject): String {
                return "up-text-" + getCellAlignValue(col)
            }
            val getCellAlignClass = ::gen_getCellAlignClass_fn
            fun gen_getCellClassName_fn(row: UTSJSONObject, col: UTSJSONObject): String {
                if (props.cellClassName == null) {
                    return ""
                }
                val callback = props.cellClassName as CellClassNameCallback
                val result = callback(row, col)
                return valueToString(result)
            }
            val getCellClassName = ::gen_getCellClassName_fn
            fun gen_getColumnWidthNumber_fn(col: UTSJSONObject): Number {
                val cols = props.columns
                var total: Number = 0
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        total += normalizeColumnWidth((cols[i] as UTSJSONObject)["width"])
                        i++
                    }
                }
                val width = normalizeColumnWidth(col["width"])
                if (total <= 0) {
                    return width
                }
                val contentWidth = Math.max(total, getTableMinWidthPx())
                return Math.floor(width * contentWidth / total)
            }
            val getColumnWidthNumber = ::gen_getColumnWidthNumber_fn
            fun gen_getColumnWidth_fn(col: UTSJSONObject): String {
                return getColumnWidthNumber(col).toString(10) + "px"
            }
            val getColumnWidth = ::gen_getColumnWidth_fn
            fun gen_getHeaderCellStyle_fn(col: UTSJSONObject): UTSJSONObject {
                val style = createEmptyObject()
                style["width"] = getColumnWidth(col)
                return style
            }
            val getHeaderCellStyle = ::gen_getHeaderCellStyle_fn
            fun gen_getFixedHeaderCellStyle_fn(col: UTSJSONObject): UTSJSONObject {
                val style = getHeaderCellStyle(col)
                style["backgroundColor"] = "#f5f7fa"
                return style
            }
            val getFixedHeaderCellStyle = ::gen_getFixedHeaderCellStyle_fn
            fun getSpanValue(value: Any?, fallback: Number = 1): Number {
                if (value == null || valueToString(value) == "") {
                    return fallback
                }
                val parsed = parseInt(value.toString())
                return if (isNaN(parsed)) {
                    fallback
                } else {
                    parsed
                }
            }
            fun gen_getCellSpanArray_fn(row: UTSJSONObject, column: UTSJSONObject, rowIndex: Number, columnIndex: Number): UTSArray<Number> {
                if (UTSAndroid.`typeof`(props.spanMethod) != "function" || props.spanMethod == null) {
                    return createSpanArray()
                }
                val callback = props.spanMethod as SpanMethodCallback
                val result = callback(_uO("row" to row, "column" to column, "rowIndex" to rowIndex, "columnIndex" to columnIndex))
                if (UTSArray.isArray(result)) {
                    val arr = result as UTSArray<Number>
                    val rowspan = if (arr.length > 0) {
                        getSpanValue(arr[0], 1)
                    } else {
                        1
                    }
                    val colspan = if (arr.length > 1) {
                        getSpanValue(arr[1], 1)
                    } else {
                        1
                    }
                    return _uA<Number>(rowspan, colspan)
                }
                val spanObject = result as UTSJSONObject?
                if (spanObject != null) {
                    val rowspan = getSpanValue(spanObject["rowspan"], 1)
                    val colspan = getSpanValue(spanObject["colspan"], 1)
                    return _uA<Number>(rowspan, colspan)
                }
                return createSpanArray()
            }
            val getCellSpanArray = ::gen_getCellSpanArray_fn
            fun gen_getCellSpan_fn(row: UTSJSONObject, column: UTSJSONObject, rowIndex: Number, columnIndex: Number): UTSJSONObject {
                val span = getCellSpanArray(row, column, rowIndex, columnIndex)
                val rowspan = if (span.length > 0) {
                    span[0]
                } else {
                    1
                }
                val colspan = if (span.length > 1) {
                    span[1]
                } else {
                    1
                }
                return createSpan(rowspan, colspan)
            }
            val getCellSpan = ::gen_getCellSpan_fn
            fun gen_getCellSpanClass_fn(row: UTSJSONObject, column: UTSJSONObject, rowIndex: Number, columnIndex: Number): String {
                val span = getCellSpan(row, column, rowIndex, columnIndex)
                if ((span["rowspan"] as Number) == 0 || (span["colspan"] as Number) == 0) {
                    return "up-table-cell-hidden"
                }
                if ((span["rowspan"] as Number) > 1 || (span["colspan"] as Number) > 1) {
                    return "up-table-cell-merged"
                }
                return ""
            }
            val getCellSpanClass = ::gen_getCellSpanClass_fn
            fun gen_getCellSpanStyle_fn(row: UTSJSONObject, column: UTSJSONObject, rowIndex: Number, columnIndex: Number): UTSJSONObject {
                val span = getCellSpan(row, column, rowIndex, columnIndex)
                val style = createEmptyObject()
                val rowspan = span["rowspan"] as Number
                val colspan = span["colspan"] as Number
                if (rowspan == 0 || colspan == 0) {
                    return style
                }
                if (rowspan > 1) {
                    val rHeight = toNumber(props.rowHeight, 44)
                    style["height"] = (rowspan * rHeight).toString(10) + "px"
                }
                if (colspan > 1) {
                    val cols = props.columns
                    var width: Number = 0
                    run {
                        var i = columnIndex
                        while(i < columnIndex + colspan && i < cols.length){
                            width += getColumnWidthNumber(cols[i] as UTSJSONObject)
                            i++
                        }
                    }
                    style["width"] = width.toString(10) + "px"
                }
                return style
            }
            val getCellSpanStyle = ::gen_getCellSpanStyle_fn
            val hasTree = computed<Boolean>(fun(): Boolean {
                val cKey = getChildrenKey()
                val rows = props.data
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val row = rows[i] as UTSJSONObject
                        val children = row[cKey] as UTSArray<UTSJSONObject>?
                        if (UTSArray.isArray(children) && (children as UTSArray<UTSJSONObject>).length > 0) {
                            return true
                        }
                        i++
                    }
                }
                return false
            }
            )
            fun gen_getBaseCellStyle_fn(row: UTSJSONObject, col: UTSJSONObject, rowIndex: Number, columnIndex: Number, level: Number): UTSJSONObject {
                val style = createEmptyObject()
                val spanStyle = getCellSpanStyle(row, col, rowIndex, columnIndex)
                val spanKeys = UTSJSONObject.keys(spanStyle)
                if (spanKeys.indexOf("width") == -1) {
                    style["width"] = getColumnWidth(col)
                }
                if (hasTree.value && isMainColumn(col) && level > 1) {
                    style["paddingLeft"] = ((level - 1) * 16).toString(10) + "px"
                }
                val colStyle = col["style"] as UTSJSONObject?
                if (colStyle != null) {
                    val keys = UTSJSONObject.keys(colStyle)
                    run {
                        var i: Number = 0
                        while(i < keys.length){
                            val key = keys[i]
                            if (key == "color" || key == "textAlign" || key == "text-align") {
                                i++
                                continue
                            }
                            style[key] = colStyle[key]
                            i++
                        }
                    }
                }
                run {
                    var i: Number = 0
                    while(i < spanKeys.length){
                        val key = spanKeys[i]
                        style[key] = spanStyle[key]
                        i++
                    }
                }
                return style
            }
            val getBaseCellStyle = ::gen_getBaseCellStyle_fn
            fun gen_getCellStyle_fn(row: UTSJSONObject, col: UTSJSONObject, rowIndex: Number, columnIndex: Number, level: Number): UTSJSONObject {
                return getBaseCellStyle(row, col, rowIndex, columnIndex, level)
            }
            val getCellStyle = ::gen_getCellStyle_fn
            fun gen_getFixedCellStyle_fn(row: UTSJSONObject, col: UTSJSONObject, rowIndex: Number, columnIndex: Number, level: Number): UTSJSONObject {
                val style = getBaseCellStyle(row, col, rowIndex, columnIndex, level)
                style["backgroundColor"] = "#ffffff"
                return style
            }
            val getFixedCellStyle = ::gen_getFixedCellStyle_fn
            fun gen_isExpanded_fn(row: UTSJSONObject): Boolean {
                val key = getRowKeyValue(row)
                if (key == "") {
                    return false
                }
                return expandedKeys.value.indexOf(key) > -1
            }
            val isExpanded = ::gen_isExpanded_fn
            fun gen_hasChildrenRow_fn(row: UTSJSONObject): Boolean {
                val rawChildren = row[getChildrenKey()] as Any?
                if (rawChildren == null || !UTSArray.isArray(rawChildren)) {
                    return false
                }
                val children = rawChildren as UTSArray<UTSJSONObject>
                return children.length > 0
            }
            val hasChildrenRow = ::gen_hasChildrenRow_fn
            fun gen_showTreeIcon_fn(col: UTSJSONObject, row: UTSJSONObject): Boolean {
                if (!hasTree.value) {
                    return false
                }
                if (!isMainColumn(col)) {
                    return false
                }
                return hasChildrenRow(row)
            }
            val showTreeIcon = ::gen_showTreeIcon_fn
            fun gen_compareRows_fn(a: UTSJSONObject, b: UTSJSONObject): Number {
                val key = sortKey.value
                if (key == "") {
                    return 0
                }
                val textA = valueToString(a[key])
                val textB = valueToString(b[key])
                var result: Number = 0
                val numberA = parseFloat(textA)
                val numberB = parseFloat(textB)
                val bothNumeric = !isNaN(numberA) && !isNaN(numberB)
                if (bothNumeric) {
                    result = if (numberA > numberB) {
                        1
                    } else {
                        if (numberA < numberB) {
                            -1
                        } else {
                            0
                        }
                    }
                } else {
                    result = if (textA > textB) {
                        1
                    } else {
                        if (textA < textB) {
                            -1
                        } else {
                            0
                        }
                    }
                }
                return if (sortOrder.value == "descending") {
                    -result
                } else {
                    result
                }
            }
            val compareRows = ::gen_compareRows_fn
            fun gen_applySort_fn(rows: UTSArray<UTSJSONObject>): UTSArray<UTSJSONObject> {
                if (!UTSArray.isArray(rows) || rows.length == 0) {
                    return createRowList()
                }
                if (sortKey.value == "" || sortOrder.value == "") {
                    return rows.slice()
                }
                val data = rows.slice()
                data.sort(fun(a: UTSJSONObject, b: UTSJSONObject): Number {
                    return compareRows(a, b)
                }
                )
                return data
            }
            val applySort = ::gen_applySort_fn
            fun gen_applyFilters_fn(rows: UTSArray<UTSJSONObject>): UTSArray<UTSJSONObject> {
                if (!UTSArray.isArray(rows) || rows.length == 0) {
                    return createRowList()
                }
                val flt = props.filters
                val filterKeys = UTSJSONObject.keys(flt)
                if (filterKeys.length == 0) {
                    return rows.slice()
                }
                val result = createRowList()
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val row = rows[i] as UTSJSONObject
                        var matched = true
                        run {
                            var j: Number = 0
                            while(j < filterKeys.length){
                                val filterKey = filterKeys[j]
                                val filterValue = flt[filterKey]
                                val filterText = valueToString(filterValue)
                                if (filterText == "") {
                                    j++
                                    continue
                                }
                                val rowText = valueToString(row[filterKey])
                                if (rowText.indexOf(filterText) == -1) {
                                    matched = false
                                    break
                                }
                                j++
                            }
                        }
                        if (matched) {
                            result.push(row)
                        }
                        i++
                    }
                }
                return result
            }
            val applyFilters = ::gen_applyFilters_fn
            val processedData = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                val rows = props.data
                val filtered = applyFilters(rows)
                return applySort(filtered)
            }
            )
            fun gen_collectFlatRows_fn(rows: UTSArray<UTSJSONObject>, parentRow: UTSJSONObject?, level: Number, result: UTSArray<UTSJSONObject>): Unit {
                if (!UTSArray.isArray(rows) || rows.length == 0) {
                    return
                }
                val cKey = getChildrenKey()
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val row = rows[i] as UTSJSONObject
                        result.push(_uO("row" to row, "parentRow" to parentRow, "level" to level, "rowIndex" to i))
                        val children = row[cKey] as UTSArray<UTSJSONObject>?
                        if (children != null && children.length > 0 && isExpanded(row)) {
                            gen_collectFlatRows_fn(children, row, level + 1, result)
                        }
                        i++
                    }
                }
            }
            val collectFlatRows = ::gen_collectFlatRows_fn
            val flatRows = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                val result = createRowList()
                collectFlatRows(processedData.value, null, 1, result)
                return result
            }
            )
            val hasData = computed<Boolean>(fun(): Boolean {
                return flatRows.value.length > 0
            }
            )
            val fixedLeftColumns = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                val result = createRowList()
                val cols = props.columns
                var started = false
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        val col = cols[i] as UTSJSONObject
                        if (valueToString(col["fixed"]) == "left") {
                            result.push(col)
                            started = true
                        } else if (started) {
                            break
                        }
                        i++
                    }
                }
                return result
            }
            )
            val showFixedShadow = computed<Boolean>(fun(): Boolean {
                return scrollLeftValue.value > 0 && fixedLeftColumns.value.length > 0
            }
            )
            fun safeToNumber(value: Any?, fallback: Number = 0): Number {
                return toNumber(value, fallback)
            }
            fun gen_getTableContentWidthValue_fn(): Number {
                val cols = props.columns
                var total: Number = 0
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        total += normalizeColumnWidth((cols[i] as UTSJSONObject)["width"])
                        i++
                    }
                }
                val minWidth = getTableMinWidthPx()
                return if (total > 0) {
                    Math.max(total, minWidth)
                } else {
                    minWidth
                }
            }
            val getTableContentWidthValue = ::gen_getTableContentWidthValue_fn
            fun gen_getTableContentWidth_fn(): String {
                return getTableContentWidthValue().toString(10) + "px"
            }
            val getTableContentWidth = ::gen_getTableContentWidth_fn
            fun gen_getTableContentStyle_fn(): UTSJSONObject {
                val style = createEmptyObject()
                val contentWidth = getTableContentWidth()
                style["width"] = "100%"
                style["minWidth"] = contentWidth
                return style
            }
            val getTableContentStyle = ::gen_getTableContentStyle_fn
            fun gen_getNaturalTableHeight_fn(): String {
                val headerHeight = if (props.showHeader) {
                    44
                } else {
                    0
                }
                val rHeight = toNumber(props.rowHeight, 44)
                var rows = if (hasData.value) {
                    flatRows.value.length
                } else {
                    1
                }
                if (props.showSummary && hasData.value) {
                    rows += 1
                }
                return (headerHeight + rHeight * rows).toString(10) + "px"
            }
            val getNaturalTableHeight = ::gen_getNaturalTableHeight_fn
            val summaryData = computed<UTSArray<String>>(fun(): UTSArray<String> {
                if (!props.showSummary) {
                    return createStringList()
                }
                val cols = props.columns
                val rows = processedData.value
                if (UTSAndroid.`typeof`(props.summaryMethod) == "function" && props.summaryMethod != null) {
                    val callback = props.summaryMethod as SummaryMethodCallback
                    val result = callback(_uO("columns" to cols, "data" to rows))
                    if (result != null && UTSArray.isArray(result)) {
                        val arr = result as UTSArray<String>
                        val customList = createStringList()
                        run {
                            var i: Number = 0
                            while(i < arr.length){
                                customList.push(valueToString(arr[i]))
                                i++
                            }
                        }
                        return customList
                    }
                }
                val sums = createStringList()
                var isFirstCol = true
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        val col = cols[i] as UTSJSONObject
                        if (isSelectionColumn(col)) {
                            sums.push("")
                            i++
                            continue
                        }
                        if (isFirstCol) {
                            sums.push(if (props.sumText != "") {
                                props.sumText
                            } else {
                                "合计"
                            }
                            )
                            isFirstCol = false
                            i++
                            continue
                        }
                        val key = getColumnField(col)
                        if (key == "") {
                            sums.push("")
                            i++
                            continue
                        }
                        var total: Number = 0
                        var hasNumber = false
                        var isAllNumber = true
                        run {
                            var j: Number = 0
                            while(j < rows.length){
                                val row = rows[j] as UTSJSONObject
                                val kVal = row[key]
                                if (kVal != null) {
                                    val strVal = valueToString(kVal).trim()
                                    if (strVal != "") {
                                        val num = parseFloat(strVal)
                                        if (!isNaN(num)) {
                                            total += num
                                            hasNumber = true
                                        } else {
                                            isAllNumber = false
                                            break
                                        }
                                    }
                                }
                                j++
                            }
                        }
                        if (hasNumber && isAllNumber) {
                            val rounded = Math.round(total * 100) / 100
                            sums.push(rounded.toString(10))
                        } else {
                            sums.push("-")
                        }
                        i++
                    }
                }
                return sums
            }
            )
            fun gen_getSummaryValue_fn(index: Number): String {
                val list = summaryData.value
                if (index >= 0 && index < list.length) {
                    return list[index]
                }
                return ""
            }
            val getSummaryValue = ::gen_getSummaryValue_fn
            fun gen_getScrollStyle_fn(): UTSJSONObject {
                val style = createEmptyObject()
                val heightText = addUnitLocal(props.height)
                if (heightText != "auto") {
                    style["height"] = heightText
                } else {
                    style["height"] = getNaturalTableHeight()
                }
                return style
            }
            val getScrollStyle = ::gen_getScrollStyle_fn
            fun gen_getBodyStyle_fn(): UTSJSONObject {
                val style = createEmptyObject()
                val maxHeightText = addUnitLocal(props.maxHeight)
                if (maxHeightText != "auto") {
                    style["maxHeight"] = maxHeightText
                }
                return style
            }
            val getBodyStyle = ::gen_getBodyStyle_fn
            fun gen_getFixedShadowWidth_fn(): Number {
                val cols = fixedLeftColumns.value
                var total: Number = 0
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        val col = cols[i] as UTSJSONObject
                        val width = getColumnWidthNumber(col)
                        total += width
                        if (props.border) {
                            total += 1
                        }
                        i++
                    }
                }
                return total
            }
            val getFixedShadowWidth = ::gen_getFixedShadowWidth_fn
            fun gen_getFixedShadowStyle_fn(): UTSJSONObject {
                val style = createEmptyObject()
                style["height"] = getNaturalTableHeight()
                style["width"] = getFixedShadowWidth().toString(10) + "px"
                return style
            }
            val getFixedShadowStyle = ::gen_getFixedShadowStyle_fn
            fun gen_isHiddenBySameRowColspan_fn(row: UTSJSONObject, rowIndex: Number, columnIndex: Number): Boolean {
                val cols = props.columns
                run {
                    var i: Number = 0
                    while(i < columnIndex && i < cols.length){
                        val span = getCellSpan(row, cols[i] as UTSJSONObject, rowIndex, i)
                        val rowspan = span["rowspan"] as Number
                        val colspan = span["colspan"] as Number
                        if (rowspan > 0 && colspan > 1 && i + colspan > columnIndex) {
                            return true
                        }
                        i++
                    }
                }
                return false
            }
            val isHiddenBySameRowColspan = ::gen_isHiddenBySameRowColspan_fn
            fun gen_isCellRendered_fn(row: UTSJSONObject, rowIndex: Number, columnIndex: Number): Boolean {
                val col = props.columns[columnIndex] as UTSJSONObject
                val span = getCellSpan(row, col, rowIndex, columnIndex)
                val rowspan = span["rowspan"] as Number
                val colspan = span["colspan"] as Number
                if (rowspan == 0 || colspan == 0) {
                    return !isHiddenBySameRowColspan(row, rowIndex, columnIndex)
                }
                return true
            }
            val isCellRendered = ::gen_isCellRendered_fn
            fun gen_getRowCells_fn(row: UTSJSONObject, rowIndex: Number): UTSArray<UTSJSONObject> {
                val result = createRowList()
                val cols = props.columns
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        if (isCellRendered(row, rowIndex, i)) {
                            result.push(_uO("col" to cols[i], "colIndex" to i))
                        }
                        i++
                    }
                }
                return result
            }
            val getRowCells = ::gen_getRowCells_fn
            fun gen_getFixedRowCells_fn(row: UTSJSONObject, rowIndex: Number): UTSArray<UTSJSONObject> {
                val result = createRowList()
                val cols = fixedLeftColumns.value
                run {
                    var i: Number = 0
                    while(i < cols.length){
                        val colIndex = getColumnIndex(cols[i] as UTSJSONObject)
                        if (isCellRendered(row, rowIndex, colIndex)) {
                            result.push(_uO("col" to cols[i], "colIndex" to colIndex))
                        }
                        i++
                    }
                }
                return result
            }
            val getFixedRowCells = ::gen_getFixedRowCells_fn
            fun gen_getCellText_fn(row: UTSJSONObject, col: UTSJSONObject): String {
                val field = getColumnField(col)
                if (field == "") {
                    return ""
                }
                val text = valueToString(row[field])
                return if (text == "") {
                    "-"
                } else {
                    text
                }
            }
            val getCellText = ::gen_getCellText_fn
            fun gen_toggleExpand_fn(row: UTSJSONObject): Unit {
                if (!hasChildrenRow(row)) {
                    return
                }
                val key = getRowKeyValue(row)
                if (key == "") {
                    return
                }
                val list = expandedKeys.value
                val index = list.indexOf(key)
                if (index > -1) {
                    list.splice(index, 1)
                } else {
                    list.push(key)
                }
                expandedKeys.value = list
                emit("expand-change", list.slice())
            }
            val toggleExpand = ::gen_toggleExpand_fn
            fun gen_isSelected_fn(row: UTSJSONObject): Boolean {
                val key = getRowKeyValue(row)
                if (key == "") {
                    return false
                }
                return selectedKeys.value.indexOf(key) > -1
            }
            val isSelected = ::gen_isSelected_fn
            fun gen_addSelectedRowAndChildren_fn(row: UTSJSONObject, selKeys: UTSArray<String>): Unit {
                val key = getRowKeyValue(row)
                if (key != "" && selKeys.indexOf(key) == -1) {
                    selKeys.push(key)
                }
                val children = row[getChildrenKey()] as UTSArray<UTSJSONObject>?
                if (children == null || !UTSArray.isArray(children)) {
                    return
                }
                run {
                    var i: Number = 0
                    while(i < children.length){
                        gen_addSelectedRowAndChildren_fn(children[i] as UTSJSONObject, selKeys)
                        i++
                    }
                }
            }
            val addSelectedRowAndChildren = ::gen_addSelectedRowAndChildren_fn
            fun gen_removeSelectedRowAndChildren_fn(row: UTSJSONObject, selKeys: UTSArray<String>): Unit {
                val key = getRowKeyValue(row)
                val index = selKeys.indexOf(key)
                if (index > -1) {
                    selKeys.splice(index, 1)
                }
                val children = row[getChildrenKey()] as UTSArray<UTSJSONObject>?
                if (children == null || !UTSArray.isArray(children)) {
                    return
                }
                run {
                    var i: Number = 0
                    while(i < children.length){
                        gen_removeSelectedRowAndChildren_fn(children[i] as UTSJSONObject, selKeys)
                        i++
                    }
                }
            }
            val removeSelectedRowAndChildren = ::gen_removeSelectedRowAndChildren_fn
            fun gen_collectAllRows_fn(rows: UTSArray<UTSJSONObject>, result: UTSArray<UTSJSONObject>): Unit {
                if (!UTSArray.isArray(rows) || rows.length == 0) {
                    return
                }
                val cKey = getChildrenKey()
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val row = rows[i] as UTSJSONObject
                        result.push(row)
                        val children = row[cKey] as UTSArray<UTSJSONObject>?
                        if (children != null && UTSArray.isArray(children) && children.length > 0) {
                            gen_collectAllRows_fn(children, result)
                        }
                        i++
                    }
                }
            }
            val collectAllRows = ::gen_collectAllRows_fn
            fun gen_getAllRows_fn(): UTSArray<UTSJSONObject> {
                val result = createRowList()
                collectAllRows(processedData.value, result)
                return result
            }
            val getAllRows = ::gen_getAllRows_fn
            fun gen_getSelectedRows_fn(): UTSArray<UTSJSONObject> {
                val result = createRowList()
                val rows = getAllRows()
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val row = rows[i] as UTSJSONObject
                        if (isSelected(row)) {
                            result.push(row)
                        }
                        i++
                    }
                }
                return result
            }
            val getSelectedRows = ::gen_getSelectedRows_fn
            fun gen_isAllSelected_fn(): Boolean {
                val rows = getAllRows()
                if (rows.length == 0) {
                    return false
                }
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        if (!isSelected(rows[i] as UTSJSONObject)) {
                            return false
                        }
                        i++
                    }
                }
                return true
            }
            val isAllSelected = ::gen_isAllSelected_fn
            fun gen_toggleSelectAll_fn(): Unit {
                val rows = getAllRows()
                if (isAllSelected()) {
                    selectedKeys.value = createStringList()
                } else {
                    val next = createStringList()
                    run {
                        var i: Number = 0
                        while(i < rows.length){
                            val key = getRowKeyValue(rows[i] as UTSJSONObject)
                            if (key != "") {
                                next.push(key)
                            }
                            i++
                        }
                    }
                    selectedKeys.value = next
                }
                val selRows = getSelectedRows()
                emit("select-all", selRows)
                emit("selection-change", selRows)
            }
            val toggleSelectAll = ::gen_toggleSelectAll_fn
            fun gen_toggleSelect_fn(row: UTSJSONObject): Unit {
                val key = getRowKeyValue(row)
                if (key == "") {
                    return
                }
                val selKeys = selectedKeys.value
                val index = selKeys.indexOf(key)
                if (index > -1) {
                    removeSelectedRowAndChildren(row, selKeys)
                } else {
                    addSelectedRowAndChildren(row, selKeys)
                }
                selectedKeys.value = selKeys
                emit("select", row, isSelected(row))
                emit("selection-change", getSelectedRows())
            }
            val toggleSelect = ::gen_toggleSelect_fn
            fun gen_pruneSelection_fn(): Unit {
                val valid = createStringList()
                val rows = getAllRows()
                run {
                    var i: Number = 0
                    while(i < rows.length){
                        val key = getRowKeyValue(rows[i] as UTSJSONObject)
                        if (key != "") {
                            valid.push(key)
                        }
                        i++
                    }
                }
                val next = createStringList()
                val selKeys = selectedKeys.value
                run {
                    var i: Number = 0
                    while(i < selKeys.length){
                        val key = selKeys[i]
                        if (valid.indexOf(key) > -1) {
                            next.push(key)
                        }
                        i++
                    }
                }
                selectedKeys.value = next
            }
            val pruneSelection = ::gen_pruneSelection_fn
            fun gen_handleRowClick_fn(row: UTSJSONObject): Unit {
                if (props.highlightCurrentRow) {
                    currentRowValue.value = getRowKeyValue(row)
                    emit("current-change", row)
                }
                emit("row-click", row)
            }
            val handleRowClick = ::gen_handleRowClick_fn
            fun gen_getRowClass_fn(row: UTSJSONObject, flatIndex: Number): String {
                var className = ""
                if (props.highlightCurrentRow && currentRowValue.value != "" && currentRowValue.value == getRowKeyValue(row)) {
                    className += " up-table-row-highlight"
                }
                if (props.stripe && flatIndex % 2 == 1) {
                    className += " up-table-row-zebra"
                }
                if (props.rowClassName != null) {
                    val callback = props.rowClassName as RowClassNameCallback
                    val customClass = valueToString(callback(row, flatIndex))
                    if (customClass != "") {
                        className += " " + customClass
                    }
                }
                return className
            }
            val getRowClass = ::gen_getRowClass_fn
            fun gen_getSortConditions_fn(): UTSArray<UTSJSONObject> {
                if (sortKey.value == "" || sortOrder.value == "") {
                    return createRowList()
                }
                return _uA(
                    _uO("key" to sortKey.value, "order" to sortOrder.value)
                )
            }
            val getSortConditions = ::gen_getSortConditions_fn
            fun gen_handleHeaderClick_fn(col: UTSJSONObject): Unit {
                emit("header-click", col)
                if (!isSortableColumn(col)) {
                    return
                }
                val key = getColumnField(col)
                if (key == "") {
                    return
                }
                if (sortKey.value != key) {
                    sortKey.value = key
                    sortOrder.value = "ascending"
                } else if (sortOrder.value == "ascending") {
                    sortOrder.value = "descending"
                } else {
                    sortKey.value = ""
                    sortOrder.value = ""
                }
                emit("sort-change", getSortConditions())
            }
            val handleHeaderClick = ::gen_handleHeaderClick_fn
            fun gen_getSortIcon_fn(col: UTSJSONObject): String {
                val key = getColumnField(col)
                if (key == "" || !isSortableColumn(col)) {
                    return ""
                }
                if (sortKey.value != key || sortOrder.value == "") {
                    return "-"
                }
                return if (sortOrder.value == "ascending") {
                    "^"
                } else {
                    "v"
                }
            }
            val getSortIcon = ::gen_getSortIcon_fn
            fun gen_onScroll_fn(e: UniScrollEvent): Unit {
                scrollLeftValue.value = e.detail.scrollLeft
            }
            val onScroll = ::gen_onScroll_fn
            watch(fun(): UTSArray<Any> {
                return props.expandRowKeys
            }
            , fun(newVal: UTSArray<Any>?){
                expandedKeys.value = normalizeKeys(newVal)
            }
            , WatchOptions(immediate = true))
            watch(fun(): Any? {
                return props.currentRowKey
            }
            , fun(newVal: Any?){
                currentRowValue.value = normalizeKey(newVal)
            }
            , WatchOptions(immediate = true))
            watch(fun(): UTSJSONObject {
                return props.filters
            }
            , fun(newVal: UTSJSONObject){
                emit("filter-change", newVal)
            }
            , WatchOptions(deep = true))
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.data
            }
            , fun(){
                pruneSelection()
            }
            , WatchOptions(deep = true))
            __expose(_uM("getSelectedRows" to getSelectedRows, "toggleSelectAll" to toggleSelectAll, "toggleSelect" to toggleSelect, "toggleExpand" to toggleExpand, "isExpanded" to isExpanded, "isSelected" to isSelected))
            return fun(): Any? {
                val _component_checkbox = resolveComponent("checkbox")
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-table2",
                    if (isTruthy(_ctx.border)) {
                        "up-table-border"
                    } else {
                        ""
                    }
                ))), _uA(
                    _cE("scroll-view", _uM("direction" to "horizontal", "class" to "up-table2-scroll", "style" to _nS(getScrollStyle()), "onScroll" to onScroll), _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-table2-content", "style" to _nS(getTableContentStyle())), _uA(
                            if (isTrue(_ctx.showHeader)) {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-table-row up-table-header-row"), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.columns, fun(col, colIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to getColumnKey(col, colIndex), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-cell up-table-header-cell",
                                            _uA(
                                                getHeaderAlignClass(col)
                                            )
                                        )), "style" to _nS(getHeaderCellStyle(col)), "onClick" to fun(){
                                            handleHeaderClick(col)
                                        }), _uA(
                                            if (isTrue(isSelectionColumn(col))) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border"), _uA(
                                                    _cV(_component_checkbox, _uM("checked" to isAllSelected(), "onClick" to withModifiers(toggleSelectAll, _uA(
                                                        "stop"
                                                    ))), null, 8, _uA(
                                                        "checked"
                                                    ))
                                                ))
                                            } else {
                                                _cE(Fragment, _uM("key" to 1), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-header-text", "style" to _nS(_uM("textAlign" to getHeaderAlignValue(col)))), _tD(getColumnTitle(col)), 5),
                                                    if (isTrue(isSortableColumn(col))) {
                                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-table-sort-icon"), _tD(getSortIcon(col)), 1)
                                                    } else {
                                                        _cC("v-if", true)
                                                    }
                                                ), 64)
                                            }
                                        ), 14, _uA(
                                            "onClick"
                                        ))
                                    }), 128)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(hasData.value)) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-table-body", "style" to _nS(getBodyStyle())), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(flatRows.value, fun(item, flatIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to getRowKey(item["row"] as UTSJSONObject, flatIndex), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-row up-table-body-row",
                                            getRowClass(item["row"] as UTSJSONObject, flatIndex)
                                        )), "style" to _nS(_uM("height" to rowHeightValue.value)), "onClick" to fun(){
                                            handleRowClick(item["row"] as UTSJSONObject)
                                        }), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(getRowCells(item["row"] as UTSJSONObject, safeToNumber(item["rowIndex"])), fun(cell, idx, __index, _cached): Any {
                                                return _cE("view", _uM("key" to getColumnKey(cell["col"] as UTSJSONObject, safeToNumber(cell["colIndex"])), "class" to _nC(_uA(
                                                    "weapp-tw-border up-table-cell up-table-body-cell",
                                                    _uA(
                                                        getCellAlignClass(cell["col"] as UTSJSONObject),
                                                        getCellClassName(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject),
                                                        getCellSpanClass(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject, safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]))
                                                    )
                                                )), "style" to _nS(getCellStyle(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject, safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]), safeToNumber(item["level"], 1)))), _uA(
                                                    if (isTrue(isSelectionColumn(cell["col"] as UTSJSONObject))) {
                                                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border"), _uA(
                                                            _cV(_component_checkbox, _uM("checked" to isSelected(item["row"] as UTSJSONObject), "onClick" to withModifiers(fun(){
                                                                toggleSelect(item["row"] as UTSJSONObject)
                                                            }, _uA(
                                                                "stop"
                                                            ))), null, 8, _uA(
                                                                "checked",
                                                                "onClick"
                                                            ))
                                                        ))
                                                    } else {
                                                        _cE(Fragment, _uM("key" to 1), _uA(
                                                            if (isTrue(showTreeIcon(cell["col"] as UTSJSONObject, item["row"] as UTSJSONObject))) {
                                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-table-tree-toggle", "style" to _nS(_uM("width" to expandWidthValue.value)), "onClick" to withModifiers(fun(){
                                                                    toggleExpand(item["row"] as UTSJSONObject)
                                                                }, _uA(
                                                                    "stop"
                                                                ))), _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border"), _tD(if (isExpanded(item["row"] as UTSJSONObject)) {
                                                                        "-"
                                                                    } else {
                                                                        "+"
                                                                    }), 1)
                                                                ), 12, _uA(
                                                                    "onClick"
                                                                ))
                                                            } else {
                                                                _cC("v-if", true)
                                                            },
                                                            renderSlot(_ctx.`$slots`, "cell", _uM("row" to item["row"] as UTSJSONObject, "column" to cell["col"] as UTSJSONObject, "prow" to getParentRow(item), "rowIndex" to safeToNumber(item["rowIndex"]), "columnIndex" to safeToNumber(cell["colIndex"]), "level" to safeToNumber(item["level"], 1)), fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-cell-text"), _tD(getCellText(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject)), 1)
                                                                )
                                                            })
                                                        ), 64)
                                                    }
                                                ), 6)
                                            }), 128)
                                        ), 14, _uA(
                                            "onClick"
                                        ))
                                    }), 128)
                                ), 4)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(if (isTruthy(_ctx.showSummary)) {
                                hasData.value
                            } else {
                                _ctx.showSummary
                            }
                            )) {
                                _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-table-row up-table-footer-row", "style" to _nS(_uM("height" to rowHeightValue.value))), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.columns, fun(col, colIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to ("sum_" + getColumnKey(col, colIndex)), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-cell up-table-footer-cell",
                                            _uA(
                                                getCellAlignClass(col)
                                            )
                                        )), "style" to _nS(getHeaderCellStyle(col))), _uA(
                                            renderSlot(_ctx.`$slots`, "summary-cell", _uM("column" to col, "columnIndex" to colIndex, "value" to getSummaryValue(colIndex)), fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-footer-text", "style" to _nS(_uM("textAlign" to getCellAlignValue(col)))), _tD(getSummaryValue(colIndex)), 5)
                                                )
                                            })
                                        ), 6)
                                    }), 128)
                                ), 4)
                            } else {
                                if (isTrue(!hasData.value)) {
                                    _cE("view", _uM("key" to 3, "class" to "weapp-tw-border up-table-empty"), _uA(
                                        renderSlot(_ctx.`$slots`, "empty", _uO(), fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border up-table-empty-text"), _tD(_ctx.emptyText), 1)
                                            )
                                        })
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            }
                        ), 4)
                    ), 36),
                    if (isTrue(showFixedShadow.value)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-table-fixed-shadow", "style" to _nS(getFixedShadowStyle())), _uA(
                            if (isTrue(_ctx.showHeader)) {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-table-row up-table-header-row"), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(fixedLeftColumns.value, fun(col, fixedIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to getColumnKey(col, fixedIndex), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-cell up-table-header-cell",
                                            _uA(
                                                getHeaderAlignClass(col)
                                            )
                                        )), "style" to _nS(getFixedHeaderCellStyle(col)), "onClick" to fun(){
                                            handleHeaderClick(col)
                                        }), _uA(
                                            if (isTrue(isSelectionColumn(col))) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border"), _uA(
                                                    _cV(_component_checkbox, _uM("checked" to isAllSelected(), "onClick" to withModifiers(toggleSelectAll, _uA(
                                                        "stop"
                                                    ))), null, 8, _uA(
                                                        "checked"
                                                    ))
                                                ))
                                            } else {
                                                _cE(Fragment, _uM("key" to 1), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-header-text", "style" to _nS(_uM("textAlign" to getHeaderAlignValue(col)))), _tD(getColumnTitle(col)), 5),
                                                    if (isTrue(isSortableColumn(col))) {
                                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-table-sort-icon"), _tD(getSortIcon(col)), 1)
                                                    } else {
                                                        _cC("v-if", true)
                                                    }
                                                ), 64)
                                            }
                                        ), 14, _uA(
                                            "onClick"
                                        ))
                                    }), 128)
                                ))
                            } else {
                                _cC("v-if", true)
                            },
                            if (isTrue(hasData.value)) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-table-body", "style" to _nS(getBodyStyle())), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(flatRows.value, fun(item, flatIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to ("fixed_" + getRowKey(item["row"] as UTSJSONObject, flatIndex)), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-row up-table-body-row",
                                            getRowClass(item["row"] as UTSJSONObject, flatIndex)
                                        )), "style" to _nS(_uM("height" to rowHeightValue.value)), "onClick" to fun(){
                                            handleRowClick(item["row"] as UTSJSONObject)
                                        }), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(getFixedRowCells(item["row"] as UTSJSONObject, safeToNumber(item["rowIndex"])), fun(cell, idx, __index, _cached): Any {
                                                return _cE("view", _uM("key" to ("fixed_" + getColumnKey(cell["col"] as UTSJSONObject, safeToNumber(cell["colIndex"]))), "class" to _nC(_uA(
                                                    "weapp-tw-border up-table-cell up-table-body-cell",
                                                    _uA(
                                                        getCellAlignClass(cell["col"] as UTSJSONObject),
                                                        getCellClassName(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject),
                                                        getCellSpanClass(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject, safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]))
                                                    )
                                                )), "style" to _nS(getFixedCellStyle(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject, safeToNumber(item["rowIndex"]), safeToNumber(cell["colIndex"]), safeToNumber(item["level"], 1)))), _uA(
                                                    if (isTrue(isSelectionColumn(cell["col"] as UTSJSONObject))) {
                                                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border"), _uA(
                                                            _cV(_component_checkbox, _uM("checked" to isSelected(item["row"] as UTSJSONObject), "onClick" to withModifiers(fun(){
                                                                toggleSelect(item["row"] as UTSJSONObject)
                                                            }, _uA(
                                                                "stop"
                                                            ))), null, 8, _uA(
                                                                "checked",
                                                                "onClick"
                                                            ))
                                                        ))
                                                    } else {
                                                        _cE(Fragment, _uM("key" to 1), _uA(
                                                            if (isTrue(showTreeIcon(cell["col"] as UTSJSONObject, item["row"] as UTSJSONObject))) {
                                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-table-tree-toggle", "style" to _nS(_uM("width" to expandWidthValue.value)), "onClick" to withModifiers(fun(){
                                                                    toggleExpand(item["row"] as UTSJSONObject)
                                                                }, _uA(
                                                                    "stop"
                                                                ))), _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border"), _tD(if (isExpanded(item["row"] as UTSJSONObject)) {
                                                                        "-"
                                                                    } else {
                                                                        "+"
                                                                    }), 1)
                                                                ), 12, _uA(
                                                                    "onClick"
                                                                ))
                                                            } else {
                                                                _cC("v-if", true)
                                                            },
                                                            renderSlot(_ctx.`$slots`, "cell", _uM("row" to item["row"] as UTSJSONObject, "column" to cell["col"] as UTSJSONObject, "prow" to getParentRow(item), "rowIndex" to safeToNumber(item["rowIndex"]), "columnIndex" to safeToNumber(cell["colIndex"]), "level" to safeToNumber(item["level"], 1)), fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-cell-text"), _tD(getCellText(item["row"] as UTSJSONObject, cell["col"] as UTSJSONObject)), 1)
                                                                )
                                                            })
                                                        ), 64)
                                                    }
                                                ), 6)
                                            }), 128)
                                        ), 14, _uA(
                                            "onClick"
                                        ))
                                    }), 128)
                                ), 4)
                            } else {
                                _cC("v-if", true)
                            },
                            if (isTrue(if (isTruthy(_ctx.showSummary)) {
                                hasData.value
                            } else {
                                _ctx.showSummary
                            })) {
                                _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-table-row up-table-footer-row", "style" to _nS(_uM("height" to rowHeightValue.value))), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(fixedLeftColumns.value, fun(col, fixedIndex, __index, _cached): Any {
                                        return _cE("view", _uM("key" to ("fixed_sum_" + getColumnKey(col, fixedIndex)), "class" to _nC(_uA(
                                            "weapp-tw-border up-table-cell up-table-footer-cell",
                                            _uA(
                                                getCellAlignClass(col)
                                            )
                                        )), "style" to _nS(getFixedHeaderCellStyle(col))), _uA(
                                            renderSlot(_ctx.`$slots`, "summary-cell", _uM("column" to col, "columnIndex" to getColumnIndex(col), "value" to getSummaryValue(getColumnIndex(col))), fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border up-table-footer-text", "style" to _nS(_uM("textAlign" to getCellAlignValue(col)))), _tD(getSummaryValue(getColumnIndex(col))), 5)
                                                )
                                            })
                                        ), 6)
                                    }), 128)
                                ), 4)
                            } else {
                                _cC("v-if", true)
                            }
                        ), 4)
                    } else {
                        _cC("v-if", true)
                    }
                ), 2)
            }
        }
        var name = "up-table2"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-table2" to _pS(_uM("width" to "100%", "position" to "relative", "overflow" to "hidden")), "up-table2-scroll" to _pS(_uM("width" to "100%")), "up-table2-content" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0)), "up-table-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "overflow" to "visible")), "up-table-header-row" to _pS(_uM("backgroundColor" to "#f5f7fa")), "up-table-footer-row" to _pS(_uM("backgroundColor" to "#f8fafc")), "up-table-footer-cell" to _pS(_uM("borderTopWidth" to 1, "borderTopStyle" to "solid", "borderTopColor" to "#ebeef5", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#ebeef5", "backgroundColor" to "#f8fafc")), "up-table-footer-text" to _pS(_uM("width" to "100%", "overflow" to "hidden", "whiteSpace" to "nowrap", "textOverflow" to "ellipsis", "fontSize" to 13, "fontWeight" to "bold", "color" to "#334155")), "up-table-body" to _pS(_uM("width" to "100%")), "up-table-body-cell" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "up-table-cell" to _pS(_uM("minWidth" to 0, "display" to "flex", "flexDirection" to "row", "flexShrink" to 0, "boxSizing" to "border-box", "alignItems" to "center", "paddingTop" to 6, "paddingRight" to 6, "paddingBottom" to 6, "paddingLeft" to 6, "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#ebeef5")), "up-table-header-cell" to _pS(_uM("borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#dcdfe6")), "up-table-header-text" to _pS(_uM("width" to "100%", "overflow" to "hidden", "whiteSpace" to "nowrap", "textOverflow" to "ellipsis", "fontSize" to 13)), "up-table-cell-text" to _pS(_uM("overflow" to "hidden", "textOverflow" to "ellipsis", "whiteSpace" to "nowrap", "fontSize" to 13)), "up-table-sort-icon" to _pS(_uM("marginLeft" to 6, "color" to "#909399")), "up-table-tree-toggle" to _pS(_uM("width" to 24, "marginRight" to 4, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-table-empty" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "up-table-empty-text" to _pS(_uM("color" to "#999999")), "up-table-row-zebra" to _pS(_uM("backgroundColor" to "#fafafa")), "up-table-row-highlight" to _pS(_uM("backgroundColor" to "#ecf5ff")), "up-text-left" to _pS(_uM("justifyContent" to "flex-start")), "up-text-center" to _pS(_uM("justifyContent" to "center")), "up-text-right" to _pS(_uM("justifyContent" to "flex-end")), "up-table-border" to _pS(_uM("borderTopWidth" to 1, "borderTopStyle" to "solid", "borderTopColor" to "#ebeef5", "borderLeftWidth" to 1, "borderLeftStyle" to "solid", "borderLeftColor" to "#ebeef5", "borderRightWidth" to 1, "borderRightStyle" to "solid", "borderRightColor" to "#ebeef5")), "up-table-cell-hidden" to _pS(_uM("opacity" to 0, "pointerEvents" to "none")), "up-table-cell-merged" to _pS(_uM("position" to "relative", "zIndex" to 2, "alignItems" to "center", "overflow" to "visible")), "up-table-fixed-shadow" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "zIndex" to 20, "overflow" to "hidden", "backgroundColor" to "#ffffff", "boxShadow" to "2px 0 5px rgba(0, 0, 0, 0.15)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("row-click" to null, "header-click" to null, "selection-change" to null, "select" to null, "select-all" to null, "sort-change" to null, "filter-change" to null, "expand-change" to null, "current-change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "data" to _uM("type" to "Array", "required" to true, "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "columns" to _uM("type" to "Array", "required" to true, "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "rowKey" to _uM("type" to "String", "default" to "id"), "border" to _uM("type" to "Boolean", "default" to false), "stripe" to _uM("type" to "Boolean", "default" to false), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to null), "maxHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to null), "showHeader" to _uM("type" to "Boolean", "default" to true), "emptyText" to _uM("type" to "String", "default" to "No Data"), "sortable" to _uM("type" to "Boolean", "default" to false), "multiSort" to _uM("type" to "Boolean", "default" to false), "filters" to _uM("type" to "Object", "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "highlightCurrentRow" to _uM("type" to "Boolean", "default" to false), "currentRowKey" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to null), "treeProps" to _uM("type" to "Object", "default" to fun(): UTSJSONObject {
            return (_uO("children" to "children", "hasChildren" to "hasChildren"))
        }
        ), "expandRowKeys" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "rowHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 44), "expandWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 24), "mainCol" to _uM("type" to "String", "default" to ""), "fixedHeader" to _uM("type" to "Boolean", "default" to false), "spanMethod" to _uM("type" to "Function", "default" to null), "cellStyle" to _uM("type" to "Function", "default" to null), "cellClassName" to _uM("type" to "Function", "default" to null), "rowClassName" to _uM("type" to "Function", "default" to null), "headerCellClassName" to _uM("type" to "Function", "default" to null), "showSummary" to _uM("type" to "Boolean", "default" to false), "sumText" to _uM("type" to "String", "default" to "合计"), "summaryMethod" to _uM("type" to "Function", "default" to null)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "data",
            "columns",
            "rowKey",
            "border",
            "stripe",
            "height",
            "maxHeight",
            "showHeader",
            "emptyText",
            "sortable",
            "multiSort",
            "filters",
            "highlightCurrentRow",
            "currentRowKey",
            "treeProps",
            "expandRowKeys",
            "rowHeight",
            "expandWidth",
            "mainCol",
            "fixedHeader",
            "spanMethod",
            "cellStyle",
            "cellClassName",
            "rowClassName",
            "headerCellClassName",
            "showSummary",
            "sumText",
            "summaryMethod"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
