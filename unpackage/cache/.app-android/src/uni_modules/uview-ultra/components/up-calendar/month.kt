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
open class GenUniModulesUviewUltraComponentsUpCalendarMonth : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.selectedChange
        }
        , fun() {
            this.setDefaultDate()
        }
        , WatchOptions(immediate = true))
        this.`$watch`(fun(): Any? {
            return this.months
        }
        , fun() {
            this.monthsInner = this.months
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-calendar-month-wrapper", "ref" to "up-calendar-month-wrapper"), _uA(
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.monthsInner, fun(item, index, __index, _cached): Any {
                return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                    "up-calendar-month-" + index.toString(10)
                )), "ref_for" to true, "ref" to ("up-calendar-month-" + index.toString(10)), "id" to ("month-" + index.toString(10))), _uA(
                    if (index != 0) {
                        _cE("view", _uM("key" to 0, "class" to "up-calendar-month__title"), _uA(
                            _cE("text", _uM("class" to "up-calendar-month__title-text"), _tD(item["year"]) + "年" + _tD(item["month"]) + "月", 1)
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to "up-calendar-month__days"), _uA(
                        if (isTrue(_ctx.showMark)) {
                            _cE("view", _uM("key" to 0, "class" to "up-calendar-month__days__month-mark-wrapper"), _uA(
                                _cE("text", _uM("class" to "up-calendar-month__days__month-mark-wrapper__text"), _tD(item["month"]), 1)
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        _cE(Fragment, null, RenderHelpers.renderList(item.date, fun(item1, index1, __index, _cached): Any {
                            return _cE("view", _uM("key" to index1, "class" to "up-calendar-month__days__day", "style" to _nS(_uA(
                                _ctx.dayStyle(index, index1, item1)
                            )), "onClick" to fun(){
                                _ctx.clickHandler(index, index1, item1)
                            }
                            ), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "up-calendar-month__days__day__select",
                                    _uM("up-calendar-month__days__day__select--selected" to _ctx.isSelected(item1), "up-calendar-month__days__day__select--today" to _ctx.isToday(item1))
                                )), "style" to _nS(_uA(
                                    _ctx.daySelectStyle(index, index1, item1)
                                ))), _uA(
                                    if (isTrue(_ctx.isRangeMiddle(item1))) {
                                        _cE("view", _uM("key" to 0, "class" to "up-calendar-month__days__day__select__range-bg", "style" to _nS(_uA(
                                            _ctx.rangeBgStyle(item1)
                                        ))), null, 4)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                    ,
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "up-calendar-month__days__day__select__info",
                                        _uM("up-calendar-month__days__day__select__info--disabled" to item1.disabled, "up-calendar-month__days__day__select__info--range-middle" to _ctx.isRangeMiddle(item1))
                                    )), "style" to _nS(_uA(
                                        _ctx.textStyle(item1)
                                    ))), _tD(item1["day"]), 7),
                                    if (isTrue(_ctx.getBottomInfo(index, index1, item1))) {
                                        _cE("text", _uM("key" to 1, "class" to _nC(_uA(
                                            "up-calendar-month__days__day__select__buttom-info",
                                            _uM("up-calendar-month__days__day__select__buttom-info--disabled" to item1["disabled"])
                                        )), "style" to _nS(_uA(
                                            _ctx.textStyle(item1)
                                        ))), _tD(_ctx.getBottomInfo(index, index1, item1)), 7)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                    ,
                                    if (isTrue(item1["dot"])) {
                                        _cE("text", _uM("key" to 2, "class" to "up-calendar-month__days__day__select__dot"))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                ), 6)
                            ), 12, _uA(
                                "onClick"
                            ))
                        }
                        ), 128)
                    ))
                ), 10, _uA(
                    "id"
                ))
            }
            ), 128)
        ), 512)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var showMark: Boolean by `$props`
    open var color: String by `$props`
    open var months: UTSArray<monthsItem> by `$props`
    open var mode: String by `$props`
    open var rowHeight: Any by `$props`
    open var maxCount: Any by `$props`
    open var startText: String by `$props`
    open var endText: String by `$props`
    open var defaultDate: Any? by `$props`
    open var minDate: Any by `$props`
    open var maxDate: Any by `$props`
    open var maxMonth: Any by `$props`
    open var readonly: Boolean by `$props`
    open var maxRange: Any by `$props`
    open var rangePrompt: String by `$props`
    open var showRangePrompt: Boolean by `$props`
    open var allowSameDay: Boolean by `$props`
    open var todayDate: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var width: Number by `$data`
    open var item: UPCalendarMonthsItemDate? by `$data`
    open var monthsInner: UTSArray<monthsItem> by `$data`
    open var selected: UTSArray<String> by `$data`
    open var selectedChange: Any by `$data`
    open var dayStyle: (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> Any by `$data`
    open var daySelectStyle: (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> UTSJSONObject by `$data`
    open var textStyle: (item: UPCalendarMonthsItemDate) -> UTSJSONObject by `$data`
    open var getBottomInfo: (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "width" to 0, "item" to null as UPCalendarMonthsItemDate?, "monthsInner" to _uA<monthsItem>(), "selected" to _uA<String>(), "selectedChange" to computed<Any>(fun(): Any {
            return _uA(
                this.minDate,
                this.maxDate,
                this.defaultDate
            )
        }
        ), "dayStyle" to computed<(index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> Any>(fun(): (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> Any {
            return fun(index1: Number, index2: Number, item: UPCalendarMonthsItemDate): Any {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 185, 12))
                if (item != null) {
                    var week: Number = item.week
                    style["height"] = addUnit(this.rowHeight)
                    if (index2 == 0) {
                        week = (if (week == 0) {
                            7
                        } else {
                            week
                        }
                        ) - 1
                        style["marginLeft"] = "" + (week / 7) * 100 + "%"
                    }
                }
                if (this.mode == "range") {
                    style["padding"] = 0
                }
                return style
            }
        }
        ), "daySelectStyle" to computed<(index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> UTSJSONObject>(fun(): (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> UTSJSONObject {
            return fun(index1: Number, index2: Number, item: UPCalendarMonthsItemDate): UTSJSONObject {
                var date = if (item["dateStr"] != null) {
                    item["dateStr"] as String
                } else {
                    dayuts(item["date"]).format("YYYY-MM-DD")
                }
                var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 205, 7))
                val sameDate = fun(element: String): Boolean {
                    return this.dateSame(element, date)
                }
                if (this.selected.some(sameDate)) {
                    var shouldActiveBg = true
                    if (this.mode == "range" && this.selected.length >= 2) {
                        val len = this.selected.length - 1
                        if (!this.dateSame(date, this.selected[0]) && !this.dateSame(date, this.selected[len])) {
                            shouldActiveBg = false
                        }
                    }
                    if (shouldActiveBg) {
                        if (this.color != "#3c9cff") {
                            style["backgroundColor"] = this.color
                        }
                    }
                }
                if (this.todayDate != "" && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate)) {
                    if (this.color != "#3c9cff") {
                        style["border"] = "1px solid " + this.color
                    }
                    style["boxSizing"] = "border-box"
                }
                if (this.mode == "single") {
                    if (this.selected.length > 0 && date == this.selected[0]) {
                        style["borderRadius"] = "3px"
                    }
                } else if (this.mode == "range") {
                    if (this.selected.length >= 2) {
                        val len = this.selected.length - 1
                        if (this.dateSame(date, this.selected[0])) {
                            style["borderTopLeftRadius"] = "3px"
                            style["borderBottomLeftRadius"] = "3px"
                        }
                        if (this.dateSame(date, this.selected[len])) {
                            style["borderTopRightRadius"] = "3px"
                            style["borderBottomRightRadius"] = "3px"
                        }
                    } else if (this.selected.length == 1) {
                        style["borderTopLeftRadius"] = "3px"
                        style["borderBottomLeftRadius"] = "3px"
                    }
                } else {
                    val sameDate = fun(element: String): Boolean {
                        return this.dateSame(element, date)
                    }
                    if (this.selected.some(sameDate)) {
                        style["borderRadius"] = "3px"
                    }
                }
                return style
            }
        }
        ), "textStyle" to computed<(item: UPCalendarMonthsItemDate) -> UTSJSONObject>(fun(): (item: UPCalendarMonthsItemDate) -> UTSJSONObject {
            return fun(item: UPCalendarMonthsItemDate): UTSJSONObject {
                val date = if (item["dateStr"] != null) {
                    item["dateStr"] as String
                } else {
                    dayuts(item["date"]).format("YYYY-MM-DD")
                }
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 266, 7))
                val sameDate = fun(element: String): Boolean {
                    return this.dateSame(element, date)
                }
                if (this.selected.some(sameDate)) {
                    style["color"] = "#ffffff"
                }
                if (this.mode === "range") {
                    val len = this.selected.length - 1
                    if (dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this.selected[len]))) {
                        if (this.color != "#3c9cff") {
                            style["color"] = this.color
                        }
                    }
                }
                return style
            }
        }
        ), "getBottomInfo" to computed<(index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> String>(fun(): (index1: Number, index2: Number, item: UPCalendarMonthsItemDate) -> String {
            return fun(index1: Number, index2: Number, item: UPCalendarMonthsItemDate): String {
                val date = if (item["dateStr"] != null) {
                    item["dateStr"] as String
                } else {
                    dayuts(item["date"]).format("YYYY-MM-DD")
                }
                var bottomInfo = ""
                if (item["bottomInfo"] != null) {
                    bottomInfo = item["bottomInfo"].toString()
                }
                if (this.mode === "range" && this.selected.length > 0) {
                    if (this.selected.length == 1) {
                        if (this.dateSame(date, this.selected[0])) {
                            return this.startText
                        } else {
                            return bottomInfo
                        }
                    } else {
                        val len = this.selected.length - 1
                        if (this.dateSame(date, this.selected[0]) && this.dateSame(date, this.selected[1]) && len == 1) {
                            return "" + this.startText + "/" + this.endText
                        } else if (this.dateSame(date, this.selected[0])) {
                            return this.startText
                        } else if (this.dateSame(date, this.selected[len])) {
                            return this.endText
                        } else {
                            return bottomInfo
                        }
                    }
                } else {
                    return bottomInfo
                }
            }
        }
        ))
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
    open var isRangeMiddle = ::gen_isRangeMiddle_fn
    open fun gen_isRangeMiddle_fn(item: UPCalendarMonthsItemDate): Boolean {
        if (this.mode != "range" || this.selected.length < 2) {
            return false
        }
        val date = if (item["dateStr"] != null) {
            item["dateStr"] as String
        } else {
            dayuts(item["date"]).format("YYYY-MM-DD")
        }
        val len = this.selected.length - 1
        return dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this.selected[len]))
    }
    open var rangeBgStyle = ::gen_rangeBgStyle_fn
    open fun gen_rangeBgStyle_fn(item: UPCalendarMonthsItemDate): Any {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 332, 11))
        if (this.color != "#3c9cff") {
            style["backgroundColor"] = colorGradient(this.color, "#ffffff", 100)[90]
            style["opacity"] = 0.7
        }
        return style
    }
    @get:JvmName("getIsSelected0")
    @set:JvmName("setIsSelected0")
    open var isSelected = ::gen_isSelected_fn
    open fun gen_isSelected_fn(item: UPCalendarMonthsItemDate): Boolean {
        val date = if (item["dateStr"] != null) {
            item["dateStr"] as String
        } else {
            dayuts(item["date"]).format("YYYY-MM-DD")
        }
        val sameDate = fun(element: String): Boolean {
            return this.dateSame(element, date)
        }
        if (!this.selected.some(sameDate)) {
            return false
        }
        if (this.mode == "range" && this.selected.length >= 2) {
            val len = this.selected.length - 1
            return this.dateSame(date, this.selected[0]) || this.dateSame(date, this.selected[len])
        }
        return true
    }
    open var isToday = ::gen_isToday_fn
    open fun gen_isToday_fn(item: UPCalendarMonthsItemDate): Boolean {
        val date = if (item["dateStr"] != null) {
            item["dateStr"] as String
        } else {
            dayuts(item["date"]).format("YYYY-MM-DD")
        }
        val sameDate = fun(element: String): Boolean {
            return this.dateSame(element, date)
        }
        return this.todayDate != "" && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.`$nextTick`(fun(){
            this.getWrapperWidth()
            this.getMonthRect()
        }
        )
    }
    open var dateSame = ::gen_dateSame_fn
    open fun gen_dateSame_fn(date1: String, date2: String): Boolean {
        return dayuts(date1).isSame(dayuts(date2))
    }
    open var getWrapperWidth = ::gen_getWrapperWidth_fn
    open fun gen_getWrapperWidth_fn() {
        this.upGetRect(".up-calendar-month-wrapper", false).then(fun(res){
            var size = res as NodeInfo
            var width = size.width ?: 0
            if (width <= 0) {
                width = getWindowInfo().windowWidth
            }
            this.width = width
        }
        )
    }
    open var getMonthRect = ::gen_getMonthRect_fn
    open fun gen_getMonthRect_fn() {
        val promiseAllArr: UTSArray<UTSPromise<NodeInfo>> = this.months.map(fun(item: monthsItem, index): UTSPromise<NodeInfo> {
            return this.getMonthRectByPromise("up-calendar-month-" + index)
        }
        )
        UTSPromise.all(promiseAllArr).then(fun(res){
            var sizes = res as UTSArray<NodeInfo>
            var height: Number = 1
            val topArr = _uA<Number>()
            run {
                var i: Number = 0
                while(i < this.months.length){
                    topArr.push(height)
                    height += sizes[i].height ?: 0
                    i++
                }
            }
            this.`$emit`("updateMonthTop", topArr)
        }
        )
    }
    open var getMonthRectByPromise = ::gen_getMonthRectByPromise_fn
    open fun gen_getMonthRectByPromise_fn(el: Any): UTSPromise<NodeInfo> {
        return this.upGetRect("." + el, false)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(index1: Number, index21: Number, item: UPCalendarMonthsItemDate) {
        if (this.readonly) {
            return
        }
        this.item = item
        val date = if (item["dateStr"] != null) {
            item["dateStr"] as String
        } else {
            dayuts(item["date"]).format("YYYY-MM-DD")
        }
        var disabled = item.disabled ?: false
        if (disabled) {
            return
        }
        var selected = this.selected.slice()
        if (this.mode === "single") {
            selected = _uA(
                date
            )
        } else if (this.mode === "multiple") {
            val sameDate = fun(element: String): Boolean {
                return this.dateSame(element, date)
            }
            if (selected.some(sameDate)) {
                val itemIndex = selected.findIndex(fun(item: String): Boolean {
                    return item === date
                })
                selected.splice(itemIndex, 1)
            } else {
                if (selected.length < (this.maxCount as Number)) {
                    selected.push(date)
                }
            }
        } else {
            if (selected.length == 0 || selected.length >= 2) {
                selected = _uA(
                    date
                )
            } else if (selected.length == 1) {
                val existsDate = selected[0]
                if (dayuts(date).isBefore(existsDate)) {
                    selected = _uA(
                        date
                    )
                } else if (dayuts(date).isAfter(existsDate)) {
                    selected.push(date)
                    val startDate = selected[0]
                    val endDate = selected[1]
                    val arr = _uA<String>()
                    var i: Number = 0
                    do {
                        arr.push(dayuts(startDate).add(i, "day").format("YYYY-MM-DD"))
                        i++
                    }while (dayuts(startDate).add(i, "day").isBefore(dayuts(endDate)))
                    arr.push(endDate)
                    selected = arr
                } else {
                    if (selected[0] === date && !this.allowSameDay) {
                        return
                    }
                    selected.push(date)
                }
            }
        }
        this.setSelected(selected)
    }
    open var setDefaultDate = ::gen_setDefaultDate_fn
    open fun gen_setDefaultDate_fn() {
        if (this.defaultDate == null) {
            val selected = _uA(
                dayuts().format("YYYY-MM-DD")
            )
            return this.setSelected(selected, false)
        }
        var defaultDate = _uA<String>()
        var minDateData = this.minDate.toString()
        var maxDateData = this.maxDate.toString()
        val minDate = if (minDateData != "") {
            minDateData
        } else {
            dayuts().format("YYYY-MM-DD")
        }
        val maxDate = if (maxDateData != "") {
            maxDateData
        } else {
            dayuts(minDate).add(this.maxMonth as Number - 1, "month").format("YYYY-MM-DD")
        }
        if (this.mode === "single") {
            if (!array(this.defaultDate)) {
                defaultDate = _uA(
                    dayuts(this.defaultDate!!).format("YYYY-MM-DD")
                )
            } else {
                var tmp = dayuts((this.defaultDate as UTSArray<Any>)[0]).format("YYYY-MM-DD")
                defaultDate = _uA(
                    tmp
                )
            }
        } else {
            if (!array(this.defaultDate)) {
                return
            }
            defaultDate = this.defaultDate as UTSArray<String>
        }
        defaultDate = defaultDate.filter(fun(item): Boolean {
            return dayuts(item).isAfter(dayuts(minDate).subtract(1, "day")) && dayuts(item).isBefore(dayuts(maxDate).add(1, "day"))
        }
        )
        this.setSelected(defaultDate, false)
    }
    open fun setSelected(selected: UTSArray<String>, event: Boolean = true) {
        this.selected = selected
        if (event) {
            this.`$emit`("monthSelected", this.selected, "tap")
        }
    }
    companion object {
        var name = "up-calendar-month"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-calendar-month-wrapper" to _pS(_uM("marginTop" to 4)), "up-calendar-month__title" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "height" to 42)), "up-calendar-month__title-text" to _pS(_uM("fontSize" to 14, "lineHeight" to "42px", "color" to "#303133", "textAlign" to "center", "fontWeight" to "bold")), "up-calendar-month__days" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-calendar-month__days__month-mark-wrapper" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "left" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "up-calendar-month__days__month-mark-wrapper__text" to _pS(_uM("fontSize" to 155, "color" to "rgba(231,232,234,0.83)")), "up-calendar-month__days__day" to _pS(_uM("display" to "flex", "flexDirection" to "row", "paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2, "width" to "14.285%")), "up-calendar-month__days__day__select" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "position" to "relative")), "up-calendar-month__days__day__select__range-bg" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "left" to 0, "right" to 0, "zIndex" to 1, "backgroundColor" to "var(--theme-color, #0957de)", "opacity" to 0.15)), "up-calendar-month__days__day__select__dot" to _pS(_uM("width" to 7, "height" to 7, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#f56c6c", "position" to "absolute", "top" to 12, "right" to 7, "zIndex" to 2)), "up-calendar-month__days__day__select__buttom-info" to _pS(_uM("color" to "#606266", "textAlign" to "center", "position" to "absolute", "bottom" to 5, "fontSize" to 10, "left" to 0, "right" to 0, "zIndex" to 2)), "up-calendar-month__days__day__select__buttom-info--selected" to _pS(_uM("color" to "#ffffff")), "up-calendar-month__days__day__select__buttom-info--disabled" to _pS(_uM("color" to "#cacbcd")), "up-calendar-month__days__day__select__info" to _pS(_uM("textAlign" to "center", "fontSize" to 16, "position" to "relative", "zIndex" to 2)), "up-calendar-month__days__day__select__info--selected" to _pS(_uM("color" to "#ffffff")), "up-calendar-month__days__day__select__info--disabled" to _pS(_uM("color" to "#cacbcd")), "up-calendar-month__days__day__select__info--range-middle" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-calendar-month__days__day__select--today" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)", "boxSizing" to "border-box")), "up-calendar-month__days__day__select--selected" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-calendar-month__days__day__select--range-selected" to _pS(_uM("opacity" to 0.3, "borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomRightRadius" to 0, "borderBottomLeftRadius" to 0)), "up-calendar-month__days__day__select--range-start-selected" to _pS(_uM("borderTopRightRadius" to 0, "borderBottomRightRadius" to 0)), "up-calendar-month__days__day__select--range-end-selected" to _pS(_uM("borderTopLeftRadius" to 0, "borderBottomLeftRadius" to 0)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("monthSelected" to null, "updateMonthTop" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "showMark" to _uM("type" to "Boolean", "default" to true), "color" to _uM("type" to "String", "default" to "#3c9cff"), "months" to _uM("type" to "Array", "default" to _uA<monthsItem>()), "mode" to _uM("type" to "String", "default" to "single"), "rowHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 58), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to Infinity), "startText" to _uM("type" to "String", "default" to "开始"), "endText" to _uM("type" to "String", "default" to "结束"), "defaultDate" to _uM("type" to _uA(
            "String",
            "Date"
        ), "default" to null), "minDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "maxDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "maxMonth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 2), "readonly" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return calendarProp.getBoolean("readonly")
        }
        ), "maxRange" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 365), "rangePrompt" to _uM("type" to "String", "default" to ""), "showRangePrompt" to _uM("type" to "Boolean", "default" to true), "allowSameDay" to _uM("type" to "Boolean", "default" to false), "todayDate" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "showMark",
            "color",
            "months",
            "mode",
            "rowHeight",
            "maxCount",
            "startText",
            "endText",
            "defaultDate",
            "minDate",
            "maxDate",
            "maxMonth",
            "readonly",
            "maxRange",
            "rangePrompt",
            "showRangePrompt",
            "allowSameDay",
            "todayDate"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
