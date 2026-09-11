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
open class GenSrcSubUviewUltraDemosTable2Table2 : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
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
        var setup: (__props: GenSrcSubUviewUltraDemosTable2Table2) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosTable2Table2
            val _cache = __ins.renderCache
            val eventLog = ref<String>("点击行 / 勾选 / 排序 / 筛选 / 展开等操作日志将显示在这里")
            val currentRowId = ref<String>("")
            val tableData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "name" to "张三", "age" to 25, "city" to "北京"), _uO("id" to 2, "name" to "李四", "age" to 30, "city" to "上海"), _uO("id" to 3, "name" to "王五", "age" to 28, "city" to "广州"), _uO("id" to 4, "name" to "赵六", "age" to 35, "city" to "深圳"), _uO("id" to 5, "name" to "张三丰", "age" to 22, "city" to "成都")))
            val columns = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "姓名", "key" to "name", "width" to "100px", "align" to "center"), _uO("title" to "年龄", "key" to "age", "width" to "80px", "align" to "center"), _uO("title" to "城市", "key" to "city", "width" to "100px", "align" to "center")))
            val columnsStyle = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "姓名", "key" to "name", "width" to "100px", "align" to "center"), _uO("align" to "center", "title" to "年龄", "key" to "age", "width" to "80px", "style" to _uO("background" to "#eef2ff", "color" to "#4f46e5", "justify-content" to "center")), _uO("title" to "城市", "key" to "city", "width" to "100px", "align" to "center")))
            val columnsCheck = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("type" to "selection", "width" to "60px"), _uO("title" to "姓名", "key" to "name", "width" to "100px"), _uO("title" to "年龄", "key" to "age", "width" to "80px"), _uO("title" to "城市", "key" to "city", "width" to "100px")))
            val columnsSort = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "姓名", "key" to "name", "sortable" to true, "width" to "100px"), _uO("title" to "年龄", "key" to "age", "sortable" to true, "width" to "80px"), _uO("title" to "城市", "key" to "city", "width" to "100px")))
            val filtersValue = ref<UTSJSONObject>(_uO("name" to ""))
            val treeData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "name" to "部门A", "dept" to "研发部", "age" to 0, "children" to _uA(
                _uO("id" to 2, "name" to "员工1", "dept" to "前端组", "age" to 22),
                _uO("id" to 3, "name" to "员工2", "dept" to "后端组", "age" to 24)
            )), _uO("id" to 4, "name" to "部门B", "dept" to "产品部", "age" to 0), _uO("id" to 5, "name" to "部门C", "dept" to "设计部", "age" to 0, "children" to _uA(
                _uO("id" to 6, "name" to "员工3", "dept" to "UI组", "age" to 26),
                _uO("id" to 7, "name" to "员工4", "dept" to "交互组", "age" to 27)
            ))))
            val columnsTree = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "名称", "key" to "name", "fixed" to "left", "width" to "110px"), _uO("title" to "部门", "key" to "dept", "width" to "110px"), _uO("title" to "年龄", "key" to "age", "width" to "80px")))
            val treePropsValue = ref<UTSJSONObject>(_uO("children" to "children"))
            val expandKeys = ref(_uA<String>("1", "5"))
            val spanData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "name" to "苹果", "amount" to 10, "date" to "2023-01-01"), _uO("id" to 2, "name" to "苹果", "amount" to 15, "date" to "2023-01-01"), _uO("id" to 3, "name" to "香蕉", "amount" to 8, "date" to "2023-01-02"), _uO("id" to 4, "name" to "香蕉", "amount" to 12, "date" to "2023-01-02")))
            val columnsSpan = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "ID", "key" to "id", "width" to "60px"), _uO("title" to "姓名", "key" to "name", "width" to "90px"), _uO("title" to "数量", "key" to "amount", "width" to "80px"), _uO("title" to "日期", "key" to "date", "width" to "120px")))
            fun gen_getLabel_fn(row: UTSJSONObject, column: UTSJSONObject): String {
                val key = column["key"]
                if (key == null) {
                    return ""
                }
                val value = row[key.toString()]
                return if (value == null) {
                    "-"
                } else {
                    value.toString()
                }
            }
            val getLabel = ::gen_getLabel_fn
            fun gen_getCellTextStyle_fn(column: UTSJSONObject, row: UTSJSONObject): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val key = column["key"]
                if (key != null && key.toString() == "age" && row["age"] != null && row["age"].toString() == "25") {
                    style["color"] = "#4f46e5"
                    style["fontWeight"] = "bold"
                }
                return style
            }
            val getCellTextStyle = ::gen_getCellTextStyle_fn
            fun gen_cellStyleFunc_fn(scope: UTSJSONObject): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val column = scope["column"] as UTSJSONObject?
                val row = scope["row"] as UTSJSONObject?
                if (column != null && row != null && column["key"] != null && column["key"].toString() == "age" && row["age"] != null && row["age"].toString() == "25") {
                    style["backgroundColor"] = "#eef2ff"
                }
                return style
            }
            val cellStyleFunc = ::gen_cellStyleFunc_fn
            fun toNumber(value: Any?, fallback: Number = 0): Number {
                if (value == null) {
                    return fallback
                }
                val parsed = parseInt(value.toString())
                return if (isNaN(parsed)) {
                    fallback
                } else {
                    parsed
                }
            }
            fun gen_spanMethod_fn(scope: UTSJSONObject): Any? {
                val rowIndex = toNumber(scope["rowIndex"], 0)
                val columnIndex = toNumber(scope["columnIndex"], 0)
                if (columnIndex == 1) {
                    if (rowIndex == 0 || rowIndex == 1) {
                        return if (rowIndex == 0) {
                            (_uA<Number>(2, 1))
                        } else {
                            (_uA<Number>(0, 0))
                        }
                    }
                    if (rowIndex == 2 || rowIndex == 3) {
                        return if (rowIndex == 2) {
                            (_uA<Number>(2, 1))
                        } else {
                            (_uA<Number>(0, 0))
                        }
                    }
                }
                if (columnIndex == 3) {
                    if (rowIndex == 0 || rowIndex == 1) {
                        return if (rowIndex == 0) {
                            (_uA<Number>(2, 1))
                        } else {
                            (_uA<Number>(0, 0))
                        }
                    }
                    if (rowIndex == 2 || rowIndex == 3) {
                        return if (rowIndex == 2) {
                            (_uA<Number>(2, 1))
                        } else {
                            (_uA<Number>(0, 0))
                        }
                    }
                }
                return null
            }
            val spanMethod = ::gen_spanMethod_fn
            fun gen_valueToString_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val valueToString = ::gen_valueToString_fn
            fun gen_getRowText_fn(row: UTSJSONObject): String {
                val id = if (row["id"] == null) {
                    ""
                } else {
                    row["id"].toString()
                }
                val name = if (row["name"] == null) {
                    ""
                } else {
                    row["name"].toString()
                }
                return "#" + id + " " + name
            }
            val getRowText = ::gen_getRowText_fn
            fun gen_getFilterActive_fn(value: String): Boolean {
                return filtersValue.value["name"] != null && filtersValue.value["name"].toString() == value
            }
            val getFilterActive = ::gen_getFilterActive_fn
            fun gen_changeFilter_fn(value: String): Unit {
                filtersValue.value = _uO("name" to value)
            }
            val changeFilter = ::gen_changeFilter_fn
            fun gen_handleRowClick_fn(row: UTSJSONObject): Unit {
                currentRowId.value = if (row["id"] == null) {
                    ""
                } else {
                    row["id"].toString()
                }
                eventLog.value = "row-click => " + getRowText(row)
            }
            val handleRowClick = ::gen_handleRowClick_fn
            fun gen_onCurrentChange_fn(row: UTSJSONObject): Unit {
                eventLog.value = "current-change => " + getRowText(row)
            }
            val onCurrentChange = ::gen_onCurrentChange_fn
            fun gen_onSelectionChange_fn(selection: UTSArray<UTSJSONObject>): Unit {
                eventLog.value = "selection-change => 已选 " + selection.length + " 行"
            }
            val onSelectionChange = ::gen_onSelectionChange_fn
            fun gen_onSelect_fn(row: UTSJSONObject, selected: Boolean): Unit {
                eventLog.value = "select => " + getRowText(row) + " " + (if (selected) {
                    "勾选"
                } else {
                    "取消"
                }
                )
            }
            val onSelect = ::gen_onSelect_fn
            fun gen_onSortChange_fn(conditions: UTSArray<UTSJSONObject>): Unit {
                if (conditions.length == 0) {
                    eventLog.value = "sort-change => 取消排序"
                    return
                }
                val item = conditions[0] as UTSJSONObject
                eventLog.value = "sort-change => " + valueToString(item["key"]) + " " + valueToString(item["order"])
            }
            val onSortChange = ::gen_onSortChange_fn
            fun gen_onFilterChange_fn(filters: UTSJSONObject): Unit {
                eventLog.value = "filter-change => 筛选 name = \"" + valueToString(filters["name"]) + "\""
            }
            val onFilterChange = ::gen_onFilterChange_fn
            fun gen_onExpandChange_fn(keys: UTSArray<String>): Unit {
                eventLog.value = "expand-change => 展开行 keys: " + keys.join(",")
            }
            val onExpandChange = ::gen_onExpandChange_fn
            val salesData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "name" to "商品A", "amount" to 120, "sales" to 3600, "rating" to 4.8), _uO("id" to 2, "name" to "商品B", "amount" to 80, "sales" to 2400, "rating" to 4.6), _uO("id" to 3, "name" to "商品C", "amount" to 150, "sales" to 4500, "rating" to 4.9), _uO("id" to 4, "name" to "商品D", "amount" to 50, "sales" to 1500, "rating" to 4.5)))
            val columnsSales = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "商品名称", "key" to "name", "width" to "90px", "align" to "center"), _uO("title" to "销量(件)", "key" to "amount", "width" to "80px", "align" to "center"), _uO("title" to "销售额(元)", "key" to "sales", "width" to "90px", "align" to "center"), _uO("title" to "评分", "key" to "rating", "width" to "70px", "align" to "center")))
            val scoreData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("id" to 1, "student" to "小明", "chinese" to 88, "math" to 95, "english" to 92), _uO("id" to 2, "student" to "小红", "chinese" to 94, "math" to 90, "english" to 96), _uO("id" to 3, "student" to "小华", "chinese" to 82, "math" to 85, "english" to 80)))
            val columnsScore = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("title" to "学生", "key" to "student", "width" to "65px", "align" to "center"), _uO("title" to "语文", "key" to "chinese", "width" to "55px", "align" to "center"), _uO("title" to "数学", "key" to "math", "width" to "55px", "align" to "center"), _uO("title" to "英语", "key" to "english", "width" to "55px", "align" to "center"), _uO("title" to "总分", "key" to "total", "width" to "75px", "align" to "center")))
            fun gen_customSummaryMethod_fn(scope: UTSJSONObject): UTSArray<String> {
                val rawData = scope["data"] as UTSArray<Any>?
                val result = _uA(
                    "总汇",
                    "0 件",
                    "¥0",
                    "均分 0"
                ) as UTSArray<String>
                if (rawData == null || rawData.length == 0) {
                    return result
                }
                var totalAmount: Number = 0
                var totalSales: Number = 0
                var totalRating: Number = 0
                run {
                    var i: Number = 0
                    while(i < rawData.length){
                        val row = rawData[i] as UTSJSONObject
                        totalAmount += toNumber(row["amount"], 0)
                        totalSales += toNumber(row["sales"], 0)
                        val r = parseFloat(valueToString(row["rating"]))
                        if (!isNaN(r)) {
                            totalRating += r
                        }
                        i++
                    }
                }
                val avgRating = Math.round((totalRating / rawData.length) * 10) / 10
                return _uA(
                    "总汇",
                    "" + totalAmount + " 件",
                    "\u00A5" + totalSales,
                    "均分 " + avgRating
                )
            }
            val customSummaryMethod = ::gen_customSummaryMethod_fn
            fun gen_calcScoreTotal_fn(row: UTSJSONObject): String {
                val c = toNumber(row["chinese"], 0)
                val m = toNumber(row["math"], 0)
                val e = toNumber(row["english"], 0)
                return "" + (c + m + e) + " 分"
            }
            val calcScoreTotal = ::gen_calcScoreTotal_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_table2 = resolveEasyComponent("up-table2", GenUniModulesUviewUltraComponentsUpTable2UpTable2Class)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-table2 表格", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-table2 表格", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础表格（斑马纹 + 边框）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to tableData.value, "columns" to columns.value, "stripe" to "", "border" to "", "onRowClick" to handleRowClick), null, 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "表格样式自定义（cellStyle + 列 style）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to tableData.value, "columns" to columnsStyle.value, "stripe" to "", "border" to "", "cell-style" to cellStyleFunc), _uM("cell" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val row = slotProps["row"]
                                                val column = slotProps["column"]
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border custom-cell-text", "style" to _nS(getCellTextStyle(column as UTSJSONObject, row as UTSJSONObject))), _tD(getLabel(row as UTSJSONObject, column as UTSJSONObject)), 5)
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "单选高亮（highlight-current-row）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to tableData.value, "columns" to columns.value, "highlight-current-row" to "", "current-row-key" to currentRowId.value, "onRowClick" to handleRowClick, "onCurrentChange" to onCurrentChange), null, 8, _uA(
                                                "data",
                                                "columns",
                                                "current-row-key"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "复选框选择（type: selection）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to tableData.value, "columns" to columnsCheck.value, "row-key" to "id", "onSelectionChange" to onSelectionChange, "onSelect" to onSelect), null, 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "排序与筛选（sortable + filters）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "weapp-tw-border filter-bar"), _uA(
                                                _cV(_component_up_button, _uM("text" to "全部", "type" to "primary", "plain" to !getFilterActive(""), "size" to "mini", "class" to "filter-btn", "onClick" to fun(){
                                                    changeFilter("")
                                                }
                                                ), null, 8, _uA(
                                                    "plain",
                                                    "onClick"
                                                )),
                                                _cV(_component_up_button, _uM("text" to "筛选姓「张」", "type" to "primary", "plain" to !getFilterActive("张"), "size" to "mini", "class" to "filter-btn", "onClick" to fun(){
                                                    changeFilter("张")
                                                }
                                                ), null, 8, _uA(
                                                    "plain",
                                                    "onClick"
                                                ))
                                            )),
                                            _cV(_component_up_table2, _uM("data" to tableData.value, "columns" to columnsSort.value, "sortable" to "", "filters" to filtersValue.value, "onSortChange" to onSortChange, "onFilterChange" to onFilterChange), null, 8, _uA(
                                                "data",
                                                "columns",
                                                "filters"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "树形结构 + 固定列（fixed: left）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to treeData.value, "columns" to columnsTree.value, "tree-props" to treePropsValue.value, "expand-row-keys" to expandKeys.value, "onExpandChange" to onExpandChange), null, 8, _uA(
                                                "data",
                                                "columns",
                                                "tree-props",
                                                "expand-row-keys"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "单元格合并（span-method）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to spanData.value, "columns" to columnsSpan.value, "span-method" to spanMethod, "border" to ""), null, 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "8. 表尾自动汇总（show-summary + sum-text）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to salesData.value, "columns" to columnsSales.value, "border" to "", "show-summary" to "", "sum-text" to "总计"), null, 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "9. 自定义汇总计算（summary-method）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to salesData.value, "columns" to columnsSales.value, "border" to "", "show-summary" to "", "summary-method" to customSummaryMethod), null, 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "10. 行内动态汇总列（#cell 动态求和）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_table2, _uM("data" to scoreData.value, "columns" to columnsScore.value, "border" to "", "stripe" to ""), _uM("cell" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val row = slotProps["row"]
                                                val column = slotProps["column"]
                                                return _uA(
                                                    if ((column as UTSJSONObject)["key"] == "total") {
                                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border custom-total-text", "style" to _nS(_uM("line-height" to "20px"))), _tD(calcScoreTotal(row as UTSJSONObject)), 5)
                                                    } else {
                                                        _cE("text", _uM("key" to 1, "class" to "weapp-tw-border custom-cell-text", "style" to _nS(_uM("line-height" to "20px"))), _tD(getLabel(row as UTSJSONObject, column as UTSJSONObject)), 5)
                                                    }
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "data",
                                                "columns"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "多端与双模式兼容说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text", "style" to _nS(_uM("line-height" to "22px"))), " 1. 支持开箱即用的 show-summary 表尾合计，自动对纯数值列求和，兼容安卓、鸿蒙、iOS、微信小程序与 H5（VDOM & Vapor 模式）。 2. 支持 summary-method 自定义合计算法（如带货币单位、求平均值等）。 3. 支持通过 #cell 插槽进行行内多列求和计算。 4. 微信小程序平台双线程特性不支持跨线程传递 Function 类型 props，推荐使用内置 show-summary 或数据层响应式 computed 汇总。 ", 4)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                        ))
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "lineHeight" to "20px", "color" to "#64748b")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 12, "paddingBottom" to 10, "paddingLeft" to 12, "backgroundColor" to "#0f172a", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 12, "lineHeight" to "18px", "color" to "#93c5fd")), "filter-bar" to _pS(_uM("display" to "flex", "flexDirection" to "row", "marginBottom" to 10)), "filter-btn" to _pS(_uM("marginRight" to 10)), "custom-cell-text" to _pS(_uM("fontSize" to 13)), "custom-total-text" to _pS(_uM("fontSize" to 13, "fontWeight" to "bold", "color" to "#0284c7")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
