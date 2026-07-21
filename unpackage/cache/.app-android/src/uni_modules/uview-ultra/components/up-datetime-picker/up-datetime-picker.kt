@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePicker : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var hasInput: Boolean by `$props`
    open var placeholder: String by `$props`
    open var format: String by `$props`
    open var show: Boolean by `$props`
    open var pageInline: Boolean by `$props`
    open var popupMode: String by `$props`
    open var showToolbar: Boolean by `$props`
    open var toolbarRightSlot: Boolean by `$props`
    open var modelValue: Any by `$props`
    open var title: String by `$props`
    open var mode: String by `$props`
    open var maxDate: Number by `$props`
    open var minDate: Number by `$props`
    open var minHour: Number by `$props`
    open var maxHour: Number by `$props`
    open var minMinute: Number by `$props`
    open var maxMinute: Number by `$props`
    open var minSecond: Number by `$props`
    open var maxSecond: Number by `$props`
    open var filter: Any? by `$props`
    open var formatter: Any? by `$props`
    open var loading: Boolean by `$props`
    open var itemHeight: Any by `$props`
    open var cancelText: String by `$props`
    open var confirmText: String by `$props`
    open var cancelColor: String by `$props`
    open var confirmColor: String by `$props`
    open var visibleItemCount: Any by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var defaultIndex: UTSArray<Number> by `$props`
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
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePicker) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePicker
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            var inputValue = ref<String>("")
            var showByClickInput = ref<Boolean>(false)
            var columns = ref(_uA<UTSArray<String>>())
            var innerDefaultIndex = ref(_uA<Number>())
            var innerFormatter = ref<(type: String, value: String) -> String>(fun(type: String, value: String): String {
                return value
            }
            )
            var innerValue = ref<Any>("")
            val changeShow = fun(){
                showByClickInput.value = !showByClickInput.value
            }
            fun toInt(value: Any, fallback: Number = 0): Number {
                if (value == null) {
                    return fallback
                }
                val num = parseInt(value.toString())
                return if (isNaN(num)) {
                    fallback
                } else {
                    num
                }
            }
            fun safeColumnValue(values: UTSArray<UTSArray<Any>>, columnIndex: Number, optionIndex: Number, fallback: String = ""): String {
                val column = if (values.length > columnIndex && values[columnIndex] != null) {
                    values[columnIndex]
                } else {
                    _uA()
                }
                if (column.length == 0) {
                    return fallback
                }
                var index = optionIndex
                if (isNaN(index)) {
                    index = 0
                }
                index = range(0, column.length - 1, index)
                val value = column[index]
                if (value == null) {
                    return fallback
                }
                return value.toString()
            }
            fun gen_columnsEqual_fn(left: UTSArray<UTSArray<String>>, right: UTSArray<UTSArray<String>>): Boolean {
                if (left.length != right.length) {
                    return false
                }
                run {
                    var i: Number = 0
                    while(i < left.length){
                        val leftColumn = left[i]
                        val rightColumn = right[i]
                        if (leftColumn.length != rightColumn.length) {
                            return false
                        }
                        run {
                            var j: Number = 0
                            while(j < leftColumn.length){
                                if (leftColumn[j] != rightColumn[j]) {
                                    return false
                                }
                                j++
                            }
                        }
                        i++
                    }
                }
                return true
            }
            val columnsEqual = ::gen_columnsEqual_fn
            fun gen_getInputValue_fn(newValue: String) {
                if (newValue == "" || newValue == null) {
                    inputValue.value = ""
                    return
                }
                if (props.mode == "time" || props.mode == "timesecond") {
                    inputValue.value = newValue
                } else {
                    if (props.format != "") {
                        inputValue.value = dayuts(newValue).format(props.format)
                    } else {
                        var format = ""
                        when (props.mode) {
                            "date" -> 
                                format = "YYYY-MM-DD"
                            "year-month" -> 
                                format = "YYYY-MM"
                            "datetime" -> 
                                format = "YYYY-MM-DD HH:mm"
                            "datehour" -> 
                                format = "YYYY-MM-DD HH"
                            "datetimesecond" -> 
                                format = "YYYY-MM-DD HH:mm:ss"
                            "time" -> 
                                format = "HH:mm"
                            "timesecond" -> 
                                format = "HH:mm:ss"
                            else -> 
                                {}
                        }
                        inputValue.value = dayuts(newValue).format(format)
                    }
                }
            }
            val getInputValue = ::gen_getInputValue_fn
            fun gen_getFormatFunc_fn(): (type: String, value: String) -> String {
                var formatter = fun(type: String, value: String): String {
                    return value
                }
                if (props.formatter != null) {
                    formatter = props.formatter as (type: String, value: String) -> String
                } else {
                    formatter = innerFormatter.value as (type: String, value: String) -> String
                }
                return formatter
            }
            val getFormatFunc = ::gen_getFormatFunc_fn
            fun gen_updateIndexs_fn(value: Any) {
                var values: UTSArray<String> = _uA()
                var formatterFunc = fun(type: String, value: String): String {
                    return value
                }
                formatterFunc = getFormatFunc()
                if (props.mode === "time" || props.mode === "timesecond") {
                    val timeArr: UTSArray<String> = value.toString().split(":")
                    values = _uA(
                        formatterFunc("hour", timeArr[0]),
                        formatterFunc("minute", timeArr[1])
                    )
                    if (props.mode === "timesecond") {
                        values.push(formatterFunc("second", timeArr[2]))
                    }
                } else {
                    val date = Date(value.toString())
                    values = _uA(
                        formatterFunc("year", "" + dayuts(value).year()),
                        formatterFunc("month", padZero(dayuts(value).month() + 1))
                    )
                    if (props.mode === "date" || props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
                        values.push(formatterFunc("day", padZero(dayuts(value).date())))
                    }
                    if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
                        values.push(formatterFunc("hour", padZero(dayuts(value).hour())))
                    }
                    if (props.mode === "datetime" || props.mode === "datetimesecond") {
                        values.push(formatterFunc("minute", padZero(dayuts(value).minute())))
                    }
                    if (props.mode === "datetimesecond") {
                        values.push(formatterFunc("second", padZero(dayuts(value).second())))
                    }
                }
                var indexs: UTSArray<Number> = _uA()
                columns.value.forEach(fun(column: UTSArray<String>, index: Number){
                    indexs.push(Math.max(0, column.findIndex(fun(item: String): Boolean {
                        return item === values[index]
                    }
                    )))
                }
                )
                innerDefaultIndex.value = indexs
            }
            val updateIndexs = ::gen_updateIndexs_fn
            fun gen_getBoundary_fn(type: String, innerValue: Any): UTSJSONObject {
                var value = Date(innerValue.toString())
                if (isNaN(value.getTime())) {
                    value = Date()
                }
                var boundary = Date(props.minDate as Number)
                when (type) {
                    "min" -> 
                        boundary = Date(props.minDate as Number)
                    "max" -> 
                        boundary = Date(props.maxDate as Number)
                    else -> 
                        {}
                }
                val year = dayuts(boundary).year()
                var month: Number = 1
                var date: Number = 1
                var hour: Number = 0
                var minute: Number = 0
                var second: Number = 0
                if (type === "max") {
                    month = 12
                    date = dayuts(boundary).daysInMonth()
                    hour = 23
                    minute = 59
                    second = 59
                }
                if (dayuts(value).year() === year) {
                    month = dayuts(boundary).month() + 1
                    if (dayuts(value).month() + 1 === month) {
                        date = dayuts(boundary).date()
                        if (dayuts(value).date() === date) {
                            hour = dayuts(boundary).hour()
                            if (dayuts(value).hour() === hour) {
                                minute = dayuts(boundary).minute()
                                if (dayuts(value).minute() === minute) {
                                    second = dayuts(boundary).second()
                                }
                            }
                        }
                    }
                }
                var result: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("result", "uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.uvue", 380, 7))
                result["" + type + "Year"] = year
                result["" + type + "Month"] = month
                result["" + type + "Date"] = date
                result["" + type + "Hour"] = hour
                result["" + type + "Minute"] = minute
                result["" + type + "Second"] = second
                return result
            }
            val getBoundary = ::gen_getBoundary_fn
            fun gen_getRanges_fn(): UTSArray<UTSJSONObject> {
                if (props.mode === "time" || props.mode === "timesecond") {
                    val timeColumns = _uA<UTSJSONObject>(_uO("type" to "hour", "ranges" to _uA(
                        props.minHour,
                        props.maxHour
                    )), _uO("type" to "minute", "ranges" to _uA(
                        props.minMinute,
                        props.maxMinute
                    )))
                    if (props.mode === "timesecond") {
                        timeColumns.push(_uO("type" to "second", "ranges" to _uA(
                            props.minSecond,
                            props.maxSecond
                        )))
                    }
                    return timeColumns as UTSArray<UTSJSONObject>
                }
                val maxObj = getBoundary("max", innerValue.value)
                val minObj = getBoundary("min", innerValue.value)
                val maxYear = maxObj["maxYear"]
                val maxDate = maxObj["maxDate"]
                val maxMonth = maxObj["maxMonth"]
                val maxHour = maxObj["maxHour"]
                val maxMinute = maxObj["maxMinute"]
                val maxSecond = maxObj["maxSecond"]
                val minYear = minObj["minYear"]
                val minDate = minObj["minDate"]
                val minMonth = minObj["minMonth"]
                val minHour = minObj["minHour"]
                val minMinute = minObj["minMinute"]
                val minSecond = minObj["minSecond"]
                val result = _uA<UTSJSONObject>(_uO("type" to "year", "ranges" to _uA(
                    minYear,
                    maxYear
                )), _uO("type" to "month", "ranges" to _uA(
                    minMonth,
                    maxMonth
                )), _uO("type" to "day", "ranges" to _uA(
                    minDate,
                    maxDate
                )), _uO("type" to "hour", "ranges" to _uA(
                    minHour,
                    maxHour
                )), _uO("type" to "minute", "ranges" to _uA(
                    minMinute,
                    maxMinute
                )), _uO("type" to "second", "ranges" to _uA(
                    minSecond,
                    maxSecond
                )))
                if (result.length > 2) {
                    val dayItem = result[2]
                    val dayType = dayItem["type"] as String
                    if (dayType == "day") {
                        val dayRange = dayItem["ranges"] as UTSArray<Number>
                        val start = dayRange[0]
                        val end = dayRange[1]
                        if (isNaN(start) || isNaN(end) || start > end) {
                            val fallbackDays = if (dayuts(innerValue.value).isValid()) {
                                dayuts(innerValue.value).daysInMonth()
                            } else {
                                31
                            }
                            dayItem["ranges"] = _uA(
                                1,
                                fallbackDays
                            )
                        }
                    }
                }
                if (props.mode === "date") {
                    result.splice(3, 3)
                }
                if (props.mode === "datehour") {
                    result.splice(4, 2)
                }
                if (props.mode === "datetime") {
                    result.splice(5, 1)
                }
                if (props.mode === "year-month") {
                    result.splice(2, 4)
                }
                return result
            }
            val getRanges = ::gen_getRanges_fn
            fun gen_timesFunc_fn(n: Number, type: String, ranges: UTSArray<Number>): UTSArray<String> {
                var index: Number = -1
                var result: UTSArray<String> = _uA()
                if (n > 0) {
                    run {
                        var i: Number = 0
                        while(i < n){
                            result.push("")
                            i++
                        }
                    }
                }
                var fu = fun(index: Number): String {
                    var value = (parseInt(ranges[0].toString(10)) + index).toString(10)
                    value = if (type === "year") {
                        "" + value
                    } else {
                        padZero(value)
                    }
                    return value
                }
                while(++index < n){
                    result[index] = fu(index)
                }
                return result
            }
            val timesFunc = ::gen_timesFunc_fn
            fun gen_getOriginColumns_fn(): UTSArray<UTSJSONObject> {
                var results: UTSArray<UTSJSONObject> = _uA()
                var rangesList: UTSArray<UTSJSONObject> = getRanges()
                rangesList.forEach(fun(item: UTSJSONObject){
                    var type = item["type"].toString()
                    var ranges: UTSArray<Number> = item["ranges"] as UTSArray<Number>
                    var values: UTSArray<String> = timesFunc((ranges[1] - ranges[0] + 1), type, ranges)
                    if (props.filter != null) {
                        var filterFunc = props.filter as (type: String, value: UTSArray<String>) -> UTSArray<String>
                        var tmp = filterFunc(type, values)
                        if (tmp != null) {
                            values = tmp as UTSArray<String>
                        }
                        if (values == null || (values.length == 0)) {
                            uni_showToast(ShowToastOptions(title = "日期filter结果不能为空", icon = "error", mask = true))
                        }
                    }
                    results.push(_uO("type" to type, "values" to values))
                }
                )
                return results
            }
            val getOriginColumns = ::gen_getOriginColumns_fn
            fun gen_buildColumns_fn(): UTSArray<UTSArray<String>> {
                val formatter = getFormatFunc()
                val originColumns = getOriginColumns()
                val results: UTSArray<UTSArray<String>> = _uA()
                originColumns.forEach(fun(column: UTSJSONObject){
                    val formattedValues: UTSArray<String> = (column["values"] as UTSArray<String>).map(fun(value: String): String {
                        return formatter(column["type"].toString(), value)
                    }
                    )
                    results.push(formattedValues)
                }
                )
                return results
            }
            val buildColumns = ::gen_buildColumns_fn
            fun gen_updateColumns_fn() {
                columns.value = buildColumns()
            }
            val updateColumns = ::gen_updateColumns_fn
            fun gen_updateColumnValue_fn(value: Any) {
                innerValue.value = value
                updateColumns()
                nextTick(fun(){
                    setTimeout(fun(){
                        updateIndexs(value)
                    }
                    , 0)
                }
                )
            }
            val updateColumnValue = ::gen_updateColumnValue_fn
            fun gen_syncColumnsAfterChange_fn(value: Any) {
                val nextColumns = buildColumns()
                if (!columnsEqual(columns.value, nextColumns)) {
                    columns.value = nextColumns
                    nextTick(fun(){
                        setTimeout(fun(){
                            updateIndexs(value)
                        }
                        , 0)
                    }
                    )
                }
            }
            val syncColumnsAfterChange = ::gen_syncColumnsAfterChange_fn
            fun correctValue(kVal: Any?): Any {
                var value: Any = ""
                if (kVal != null && kVal != "") {
                    value = kVal
                }
                val isDateMode = props.mode !== "time" && props.mode !== "timesecond"
                if (isDateMode && (value == null || value == "")) {
                    value = Date().getTime()
                } else if (isDateMode) {
                    var timestamp: Number = 0
                    if (UTSAndroid.`typeof`(value) === "number") {
                        timestamp = value as Number
                    } else if (UTSAndroid.`typeof`(value) === "string") {
                        val numValue = parseInt((value as String).toString())
                        if (!isNaN(numValue)) {
                            timestamp = numValue
                        } else {
                            val date = Date(value as String)
                            if (!isNaN(date.getTime())) {
                                timestamp = date.getTime()
                            } else {
                                timestamp = Date().getTime()
                            }
                        }
                    }
                    value = timestamp
                } else if (!isDateMode && (value == null || value == "")) {
                    val now = Date()
                    value = if (props.mode === "timesecond") {
                        "" + padZero(now.getHours()) + ":" + padZero(now.getMinutes()) + ":" + padZero(now.getSeconds())
                    } else {
                        "" + padZero(now.getHours()) + ":" + padZero(now.getMinutes())
                    }
                }
                if (!isDateMode) {
                    if (value.toString().indexOf(":") == -1) {
                        error("时间错误，请传递如12:24的格式")
                        return ""
                    }
                    val timeArr = value.toString().split(":")
                    var hour = timeArr[0]
                    var minute = timeArr[1]
                    var second = timeArr[2]
                    val hourNum = parseInt(hour)
                    val minuteNum = parseInt(minute)
                    hour = padZero(range(props.minHour, props.maxHour, if (isNaN(hourNum)) {
                        props.minHour
                    } else {
                        hourNum
                    }))
                    minute = padZero(range(props.minMinute, props.maxMinute, if (isNaN(minuteNum)) {
                        props.minMinute
                    } else {
                        minuteNum
                    }))
                    if (props.mode === "timesecond") {
                        val secondNum = parseInt(second)
                        second = padZero(range(props.minSecond, props.maxSecond, if (isNaN(secondNum)) {
                            props.minSecond
                        } else {
                            secondNum
                        }
                        ))
                        return "" + hour + ":" + minute + ":" + second
                    }
                    return "" + hour + ":" + minute
                } else {
                    value = if (dayuts(value).isBefore(dayuts(props.minDate))) {
                        props.minDate
                    } else {
                        value
                    }
                    value = if (dayuts(value).isAfter(dayuts(props.maxDate))) {
                        props.maxDate
                    } else {
                        value
                    }
                    return value
                }
            }
            fun gen_init_fn() {
                innerValue.value = correctValue(props.modelValue)
                updateColumnValue(innerValue.value)
                getInputValue(innerValue.value.toString())
            }
            val init = ::gen_init_fn
            fun gen_setFormatter_fn(e: (type: String, value: String) -> String) {
                innerFormatter.value = e
            }
            val setFormatter = ::gen_setFormatter_fn
            fun gen_close_fn() {
                if (props.closeOnClickOverlay) {
                    if (props.hasInput) {
                        showByClickInput.value = false
                    }
                    emit("close")
                }
            }
            val close = ::gen_close_fn
            fun gen_cancel_fn() {
                if (props.hasInput) {
                    showByClickInput.value = false
                }
                emit("cancel")
            }
            val cancel = ::gen_cancel_fn
            fun gen_confirm_fn() {
                emit("update:modelValue", innerValue.value)
                if (props.hasInput) {
                    getInputValue(innerValue.value.toString())
                    showByClickInput.value = false
                }
                emit("confirm", _uO("value" to innerValue.value, "mode" to props.mode))
            }
            val confirm = ::gen_confirm_fn
            fun intercept(e: String, type: String = ""): String {
                if (e == null) {
                    return if (type != "") {
                        "0000"
                    } else {
                        "00"
                    }
                }
                var judge = e.toString().match(UTSRegExp("\\d+", "g"))
                if (judge != null) {
                    if (judge!!.length > 1) {
                        error("请勿在过滤或格式化函数时添加数字")
                        return "0"
                    } else if (type != "" && judge[0]?.length == 4) {
                        return judge!![0].toString()
                    } else if (judge!![0]!!.length > 2) {
                        error("请勿在过滤或格式化函数时添加数字")
                        return "0"
                    } else {
                        return judge!![0].toString()
                    }
                } else {
                    return if (type != "") {
                        "0000"
                    } else {
                        "00"
                    }
                }
            }
            fun gen_change_fn(e: UTSJSONObject) {
                var indexs = e["indexs"] as UTSArray<Number>
                var values = e["values"] as UTSArray<UTSArray<Any>>
                if (values == null) {
                    values = _uA()
                }
                var selectValue: Any = ""
                if (props.mode === "time" || props.mode === "timesecond") {
                    val hourText = safeColumnValue(values, 0, indexs[0], padZero(props.minHour))
                    val minuteText = safeColumnValue(values, 1, indexs[1], padZero(props.minMinute))
                    val secondText = safeColumnValue(values, 2, indexs[2], padZero(props.minSecond))
                    var hour = toInt(intercept(hourText), props.minHour)
                    var minute = toInt(intercept(minuteText), props.minMinute)
                    var second = toInt(intercept(secondText), props.minSecond)
                    hour = range(props.minHour, props.maxHour, hour)
                    minute = range(props.minMinute, props.maxMinute, minute)
                    second = range(props.minSecond, props.maxSecond, second)
                    selectValue = "" + padZero(hour) + ":" + padZero(minute)
                    if (props.mode === "timesecond") {
                        selectValue = "" + selectValue + ":" + padZero(second)
                    }
                } else {
                    val validCurrent = if (dayuts(innerValue.value).isValid()) {
                        dayuts(innerValue.value)
                    } else {
                        dayuts(props.minDate)
                    }
                    val currentYear = validCurrent.year()
                    val currentMonth = validCurrent.month() + 1
                    val currentDate = validCurrent.date()
                    val currentHour = validCurrent.hour()
                    val currentMinute = validCurrent.minute()
                    val currentSecond = validCurrent.second()
                    val yearText = safeColumnValue(values, 0, indexs[0], currentYear.toString(10))
                    val monthText = safeColumnValue(values, 1, indexs[1], padZero(currentMonth))
                    var year = toInt(intercept(yearText, "year"), currentYear)
                    var month = toInt(intercept(monthText), currentMonth)
                    var hour: Number = 0
                    var minute: Number = 0
                    var second: Number = 0
                    month = range(1, 12, month)
                    val maxDate = dayuts("" + year + "-" + month).daysInMonth()
                    val dayText = safeColumnValue(values, 2, indexs[2], padZero(Math.min(currentDate, maxDate)))
                    var date = toInt(intercept(dayText), Math.min(currentDate, maxDate))
                    if (props.mode === "year-month") {
                        date = 1
                    }
                    date = range(1, maxDate, date)
                    if (props.mode === "datehour" || props.mode === "datetime" || props.mode === "datetimesecond") {
                        val hourText = safeColumnValue(values, 3, indexs[3], padZero(currentHour))
                        hour = range(0, 23, toInt(intercept(hourText), currentHour))
                    }
                    if (props.mode === "datetime" || props.mode === "datetimesecond") {
                        val minuteText = safeColumnValue(values, 4, indexs[4], padZero(currentMinute))
                        minute = range(0, 59, toInt(intercept(minuteText), currentMinute))
                    }
                    if (props.mode === "datetimesecond") {
                        val secondText = safeColumnValue(values, 5, indexs[5], padZero(currentSecond))
                        second = range(0, 59, toInt(intercept(secondText), currentSecond))
                    }
                    selectValue = Date(year, month - 1, date, hour, minute, second).getTime()
                    if (isNaN(selectValue)) {
                        selectValue = correctValue(innerValue.value)
                    }
                }
                var selectValueFormat: Any = correctValue(selectValue)
                innerValue.value = selectValueFormat
                syncColumnsAfterChange(selectValueFormat)
                emit("change", _uO("value" to selectValueFormat, "mode" to props.mode))
            }
            val change = ::gen_change_fn
            fun gen_generateArray_fn(start: Number, end: Number): UTSArray<Number> {
                val result: UTSArray<Number> = _uA()
                run {
                    var i = start
                    while(i <= end){
                        result.push(i)
                        i++
                    }
                }
                return result
            }
            val generateArray = ::gen_generateArray_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newValue: Boolean){
                if (!newValue && props.hasInput) {
                    showByClickInput.value = false
                }
                if (newValue) {
                    updateColumnValue(innerValue.value)
                    setTimeout(fun(){
                        updateIndexs(innerValue.value)
                    }
                    , 150)
                }
            }
            )
            init()
            onMounted(fun(){
                if (props.pageInline) {
                    setTimeout(fun(){
                        updateIndexs(innerValue.value)
                    }
                    , 200)
                }
            }
            )
            return fun(): Any? {
                val _component_up_input = resolveEasyComponent("up-input", GenUniModulesUviewUltraComponentsUpInputUpInputClass)
                val _component_up_picker = resolveEasyComponent("up-picker", GenUniModulesUviewUltraComponentsUpPickerUpPickerClass)
                return _cE("view", _uM("class" to "up-datetime-picker"), _uA(
                    if (isTrue(_ctx.hasInput)) {
                        _cE("view", _uM("key" to 0, "class" to "up-datetime-picker__has-input", "onClick" to changeShow), _uA(
                            _cV(_component_up_input, _uM("placeholder" to _ctx.placeholder, "readonly" to !!unref(showByClickInput), "border" to "surround", "modelValue" to unref(inputValue), "onUpdate:modelValue" to fun(`$event`: String){
                                inputValue = trySetRefValue(inputValue, `$event`)
                            }), null, 8, _uA(
                                "placeholder",
                                "readonly",
                                "modelValue"
                            ))
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cV(_component_up_picker, _uM("ref" to "picker", "show" to (_ctx.pageInline || _ctx.show || (_ctx.hasInput && unref(showByClickInput))), "pageInline" to _ctx.pageInline, "popupMode" to _ctx.popupMode, "closeOnClickOverlay" to _ctx.closeOnClickOverlay, "columns" to unref(columns), "title" to _ctx.title, "itemHeight" to _ctx.itemHeight, "showToolbar" to _ctx.showToolbar, "visibleItemCount" to _ctx.visibleItemCount, "defaultIndex" to unref(innerDefaultIndex), "cancelText" to _ctx.cancelText, "confirmText" to _ctx.confirmText, "cancelColor" to _ctx.cancelColor, "confirmColor" to _ctx.confirmColor, "toolbarRightSlot" to _ctx.toolbarRightSlot, "onClose" to close, "onCancel" to cancel, "onConfirm" to confirm, "onChange" to change), _uM("toolbar-right" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            renderSlot(_ctx.`$slots`, "toolbar-right")
                        )
                    }
                    ), "toolbar-bottom" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            renderSlot(_ctx.`$slots`, "toolbar-bottom")
                        )
                    }
                    ), "_" to 3), 8, _uA(
                        "show",
                        "pageInline",
                        "popupMode",
                        "closeOnClickOverlay",
                        "columns",
                        "title",
                        "itemHeight",
                        "showToolbar",
                        "visibleItemCount",
                        "defaultIndex",
                        "cancelText",
                        "confirmText",
                        "cancelColor",
                        "confirmColor",
                        "toolbarRightSlot"
                    ))
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-datetime-picker" to _pS(_uM("width" to "100%")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("close" to null, "cancel" to null, "confirm" to null, "change" to null, "update:modelValue" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "hasInput" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.hasInput")), "placeholder" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.placeholder")), "format" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.format")), "show" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.show")), "pageInline" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.pageInline")), "popupMode" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.popupMode")), "showToolbar" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.showToolbar")), "toolbarRightSlot" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.toolbarRightSlot")), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__86.getString("datetimePicker.value")), "title" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.title")), "mode" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.mode")), "maxDate" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.maxDate")), "minDate" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.minDate")), "minHour" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.minHour")), "maxHour" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.maxHour")), "minMinute" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.minMinute")), "maxMinute" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.maxMinute")), "minSecond" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.minSecond")), "maxSecond" to _uM("type" to "Number", "default" to default__86.getNumber("datetimePicker.maxSecond")), "filter" to _uM("default" to null), "formatter" to _uM("default" to null), "loading" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.loading")), "itemHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__86.getNumber("datetimePicker.itemHeight")), "cancelText" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.cancelText")), "confirmText" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.confirmText")), "cancelColor" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.cancelColor")), "confirmColor" to _uM("type" to "String", "default" to default__86.getString("datetimePicker.confirmColor")), "visibleItemCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__86.getNumber("datetimePicker.visibleItemCount")), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to default__86.getBoolean("datetimePicker.closeOnClickOverlay")), "defaultIndex" to _uM("type" to "Array", "default" to fun(): UTSArray<Number> {
            return default__86.getArray<Number>("datetimePicker.defaultIndex")!!
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "hasInput",
            "placeholder",
            "format",
            "show",
            "pageInline",
            "popupMode",
            "showToolbar",
            "toolbarRightSlot",
            "modelValue",
            "title",
            "mode",
            "maxDate",
            "minDate",
            "minHour",
            "maxHour",
            "minMinute",
            "maxMinute",
            "minSecond",
            "maxSecond",
            "filter",
            "formatter",
            "loading",
            "itemHeight",
            "cancelText",
            "confirmText",
            "cancelColor",
            "confirmColor",
            "visibleItemCount",
            "closeOnClickOverlay",
            "defaultIndex"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
