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
open class GenUniModulesUviewUltraComponentsUpCalendarUpCalendar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.start = Date.now()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.defaultDate
        }
        , fun() {
            if (this.inited) {
                this.setMonth()
            }
        }
        , WatchOptions())
        this.`$watch`(fun(): Any? {
            return this.selectedChange
        }
        , fun() {
            if (this.inited) {
                this.setMonth()
            }
        }
        , WatchOptions())
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(nval: Boolean) {
            if (nval) {
                this.init()
            } else {
                this.scrollIntoView = ""
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_uHeader = resolveComponent("uHeader")
        val _component_uMonth = resolveComponent("uMonth")
        val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
        val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
        return _cV(_component_up_popup, _uM("show" to _ctx.show, "mode" to "bottom", "closeable" to "", "onClose" to _ctx.close, "round" to _ctx.round, "closeOnClickOverlay" to _ctx.closeOnClickOverlay), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                _cE("view", _uM("class" to "up-calendar"), _uA(
                    _cV(_component_uHeader, _uM("title" to _ctx.title, "subtitle" to _ctx.subtitle, "showSubtitle" to _ctx.showSubtitle, "showTitle" to _ctx.showTitle, "showSwitch" to _ctx.monthSwitch, "showToday" to _ctx.showToday, "todayText" to _ctx.todayText, "todayDisabled" to _ctx.todayDisabled, "prevDisabled" to _ctx.switchPrevDisabled, "nextDisabled" to _ctx.switchNextDisabled, "prevYearDisabled" to _ctx.switchPrevYearDisabled, "nextYearDisabled" to _ctx.switchNextYearDisabled, "onPrev" to _ctx.prevMonth, "onNext" to _ctx.nextMonth, "onPrevYear" to _ctx.prevYear, "onNextYear" to _ctx.nextYear, "onToday" to _ctx.jumpToToday), null, 8, _uA(
                        "title",
                        "subtitle",
                        "showSubtitle",
                        "showTitle",
                        "showSwitch",
                        "showToday",
                        "todayText",
                        "todayDisabled",
                        "prevDisabled",
                        "nextDisabled",
                        "prevYearDisabled",
                        "nextYearDisabled",
                        "onPrev",
                        "onNext",
                        "onPrevYear",
                        "onNextYear",
                        "onToday"
                    )),
                    if (isTrue(!_ctx.monthSwitch)) {
                        _cE("scroll-view", _uM("key" to 0, "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.listHeight))), "direction" to "vertical", "onScroll" to _ctx.onScroll, "scroll-top" to _ctx.scrollTop, "scrollIntoView" to _ctx.scrollIntoView), _uA(
                            _cV(_component_uMonth, _uM("color" to _ctx.color, "rowHeight" to _ctx.rowHeight, "showMark" to _ctx.showMark, "months" to _ctx.months, "mode" to _ctx.mode, "maxCount" to _ctx.maxCount, "startText" to _ctx.startText, "endText" to _ctx.endText, "defaultDate" to _ctx.defaultDate, "minDate" to _ctx.innerMinDate, "maxDate" to _ctx.innerMaxDate, "maxMonth" to _ctx.monthNum, "readonly" to _ctx.readonly, "maxRange" to _ctx.maxRange, "rangePrompt" to _ctx.rangePrompt, "showRangePrompt" to _ctx.showRangePrompt, "allowSameDay" to _ctx.allowSameDay, "todayDate" to _ctx.todayDate, "ref" to "month", "onMonthSelected" to _ctx.monthSelectedM, "onUpdateMonthTop" to _ctx.onUpdateMonthTopM), null, 8, _uA(
                                "color",
                                "rowHeight",
                                "showMark",
                                "months",
                                "mode",
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
                                "todayDate",
                                "onMonthSelected",
                                "onUpdateMonthTop"
                            ))
                        ), 44, _uA(
                            "onScroll",
                            "scroll-top",
                            "scrollIntoView"
                        ))
                    } else {
                        _cE("view", _uM("key" to 1, "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.listHeight)))), _uA(
                            _cV(_component_uMonth, _uM("color" to _ctx.color, "rowHeight" to _ctx.rowHeight, "showMark" to _ctx.showMark, "months" to _ctx.currentMonths, "mode" to _ctx.mode, "maxCount" to _ctx.maxCount, "startText" to _ctx.startText, "endText" to _ctx.endText, "defaultDate" to _ctx.defaultDate, "minDate" to _ctx.innerMinDate, "maxDate" to _ctx.innerMaxDate, "maxMonth" to _ctx.monthNum, "readonly" to _ctx.readonly, "maxRange" to _ctx.maxRange, "rangePrompt" to _ctx.rangePrompt, "showRangePrompt" to _ctx.showRangePrompt, "allowSameDay" to _ctx.allowSameDay, "todayDate" to _ctx.todayDate, "ref" to "month", "onMonthSelected" to _ctx.monthSelectedM, "onUpdateMonthTop" to _ctx.onUpdateMonthTopM), null, 8, _uA(
                                "color",
                                "rowHeight",
                                "showMark",
                                "months",
                                "mode",
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
                                "todayDate",
                                "onMonthSelected",
                                "onUpdateMonthTop"
                            ))
                        ), 4)
                    }
                    ,
                    if (isTrue(_ctx.showConfirm)) {
                        renderSlot(_ctx.`$slots`, "footer", _uM("key" to 2), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "up-calendar__confirm"), _uA(
                                    _cV(_component_up_button, _uM("shape" to "circle", "text" to if (_ctx.buttonDisabled) {
                                        _ctx.confirmDisabledText
                                    } else {
                                        _ctx.confirmText
                                    }, "color" to if (_ctx.color == "#3c9cff") {
                                        ""
                                    } else {
                                        _ctx.color
                                    }, "type" to if (_ctx.color == "#3c9cff") {
                                        "primary"
                                    } else {
                                        ""
                                    }, "onClick" to _ctx.confirm, "disabled" to _ctx.buttonDisabled), null, 8, _uA(
                                        "text",
                                        "color",
                                        "type",
                                        "onClick",
                                        "disabled"
                                    ))
                                ))
                            )
                        })
                    } else {
                        _cC("v-if", true)
                    }
                ))
            )
        }
        ), "_" to 3), 8, _uA(
            "show",
            "onClose",
            "round",
            "closeOnClickOverlay"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: String by `$props`
    open var showTitle: Boolean by `$props`
    open var showSubtitle: Boolean by `$props`
    open var mode: String by `$props`
    open var startText: String by `$props`
    open var endText: String by `$props`
    open var customList: UTSArray<Any?> by `$props`
    open var color: String by `$props`
    open var minDate: Any by `$props`
    open var maxDate: Any by `$props`
    open var defaultDate: Any? by `$props`
    open var maxCount: Any by `$props`
    open var rowHeight: Any by `$props`
    open var formatter: Any? by `$props`
    open var showLunar: Boolean by `$props`
    open var showMark: Boolean by `$props`
    open var confirmText: String by `$props`
    open var confirmDisabledText: String by `$props`
    open var show: Boolean by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var readonly: Boolean by `$props`
    open var showConfirm: Boolean by `$props`
    open var maxRange: Any by `$props`
    open var rangePrompt: String by `$props`
    open var showRangePrompt: Boolean by `$props`
    open var allowSameDay: Boolean by `$props`
    open var rangeResultMode: String by `$props`
    open var round: Any by `$props`
    open var monthNum: Any by `$props`
    open var monthSwitch: Boolean by `$props`
    open var showToday: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var start: Number by `$data`
    open var inited: Boolean by `$data`
    open var months: UTSArray<monthsItem> by `$data`
    open var monthIndex: Number by `$data`
    open var listHeight: Number by `$data`
    open var selected: UTSArray<String> by `$data`
    open var scrollIntoView: String by `$data`
    open var scrollIntoViewScroll: String by `$data`
    open var scrollTop: Number by `$data`
    open var innerFormatter: (value: UPCalendarMonthsItemDate) -> UPCalendarMonthsItemDate by `$data`
    open var innerMaxDate: String by `$data`
    open var innerMinDate: String by `$data`
    open var todayDate: String by `$data`
    open var todayText: String by `$data`
    open var todayDisabled: Boolean by `$data`
    open var selectedChange: UTSArray<String> by `$data`
    open var subtitle: String by `$data`
    open var currentMonths: UTSArray<monthsItem> by `$data`
    open var switchPrevDisabled: Boolean by `$data`
    open var switchNextDisabled: Boolean by `$data`
    open var switchPrevYearDisabled: Boolean by `$data`
    open var switchNextYearDisabled: Boolean by `$data`
    open var buttonDisabled: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "start" to 0, "inited" to false, "months" to _uA<monthsItem>(), "monthIndex" to 0, "listHeight" to 0, "selected" to _uA<String>(), "scrollIntoView" to "", "scrollIntoViewScroll" to "", "scrollTop" to 0, "innerFormatter" to fun(value: UPCalendarMonthsItemDate): UPCalendarMonthsItemDate {
            return value
        }
        , "innerMaxDate" to computed<String>(fun(): String {
            return if (number(this.maxDate)) {
                (this.maxDate as Number).toString(10)
            } else {
                this.maxDate.toString()
            }
        }
        ), "innerMinDate" to computed<String>(fun(): String {
            return if (number(this.minDate)) {
                (this.minDate as Number).toString(10)
            } else {
                this.minDate.toString()
            }
        }
        ), "todayDate" to computed<String>(fun(): String {
            return dayuts().format("YYYY-MM-DD")
        }
        ), "todayText" to computed<String>(fun(): String {
            return t__1("up.calendar.today", _uO())
        }
        ), "todayDisabled" to computed<Boolean>(fun(): Boolean {
            var today = dayuts(this.todayDate as Any as String)
            var innerMinDate = this.innerMinDate as Any as String
            var innerMaxDate = this.innerMaxDate as Any as String
            if (innerMinDate != "" && innerMinDate != "0" && today.isBefore(dayuts(innerMinDate), "day")) {
                return true
            }
            if (innerMaxDate != "" && innerMaxDate != "0" && today.isAfter(dayuts(innerMaxDate), "day")) {
                return true
            }
            return false
        }
        ), "selectedChange" to computed<UTSArray<String>>(fun(): UTSArray<String> {
            return _uA(
                this.innerMinDate,
                this.innerMaxDate
            )
        }
        ), "subtitle" to computed<String>(fun(): String {
            if (this.months.length > 0) {
                var monthIndex: Number = this.monthIndex as Number
                return "" + this.months[monthIndex]["year"] + "年" + this.months[monthIndex]["month"] + "月"
            } else {
                return ""
            }
        }
        ), "currentMonths" to computed<UTSArray<monthsItem>>(fun(): UTSArray<monthsItem> {
            if (this.monthSwitch && this.months.length > 0) {
                return _uA(
                    this.months[this.monthIndex] as monthsItem
                )
            }
            return this.months as UTSArray<monthsItem>
        }
        ), "switchPrevDisabled" to computed<Boolean>(fun(): Boolean {
            return this.monthIndex <= 0
        }
        ), "switchNextDisabled" to computed<Boolean>(fun(): Boolean {
            return this.monthIndex >= this.months.length - 1
        }
        ), "switchPrevYearDisabled" to computed<Boolean>(fun(): Boolean {
            return this.monthIndex - 12 < 0
        }
        ), "switchNextYearDisabled" to computed<Boolean>(fun(): Boolean {
            return this.monthIndex + 12 > this.months.length - 1
        }
        ), "buttonDisabled" to computed<Boolean>(fun(): Boolean {
            if (this.mode === "range") {
                if (this.selected.length <= 1) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open fun getConfirmValue(selected: UTSArray<String>? = null): UTSArray<String> {
        val sel = selected ?: (this.selected as UTSArray<String>)
        if (this.mode == "range" && this.rangeResultMode == "boundary" && sel.length >= 2) {
            var len = sel.length - 1
            return _uA(
                sel[0],
                sel[len]
            )
        }
        return sel
    }
    open var setFormatter = ::gen_setFormatter_fn
    open fun gen_setFormatter_fn(e: Any) {
        this.innerFormatter = e as ((`val`: UPCalendarMonthsItemDate) -> UPCalendarMonthsItemDate)
    }
    open var monthSelectedM = ::gen_monthSelectedM_fn
    open fun gen_monthSelectedM_fn(e: UTSArray<String>, scene: String) {
        this.selected = e
        if (!this.showConfirm) {
            if (this.mode === "multiple" || this.mode === "single" || (this.mode === "range" && this.selected.length >= 2)) {
                if (scene === "init") {
                    return
                }
                if (scene === "tap") {
                    this.`$emit`("confirm", this.getConfirmValue())
                }
            }
        }
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        if (this.innerMaxDate != "0" && this.innerMaxDate != "" && this.innerMinDate != "0" && this.innerMinDate != "" && Date(this.innerMaxDate).getTime() < Date(this.innerMinDate).getTime()) {
            console.log(this.innerMaxDate, " at uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue:535")
            return error("maxDate不能小于minDate时间")
        }
        this.listHeight = (this.rowHeight as Number) * (if (this.monthSwitch) {
            6
        } else {
            5
        }
        ) + 30
        this.setMonth()
        this.inited = true
    }
    open var close = ::gen_close_fn
    open fun gen_close_fn() {
        this.`$emit`("close")
    }
    open var confirm = ::gen_confirm_fn
    open fun gen_confirm_fn() {
        if (!this.buttonDisabled) {
            this.`$emit`("confirm", this.getConfirmValue())
        }
    }
    open var getMonths = ::gen_getMonths_fn
    open fun gen_getMonths_fn(minDate: Any, maxDate: Any): Number {
        val minYear = dayuts(minDate).year()
        val minMonth = dayuts(minDate).month() + 1
        val maxYear = dayuts(maxDate).year()
        val maxMonth = dayuts(maxDate).month() + 1
        return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1
    }
    open var setMonth = ::gen_setMonth_fn
    open fun gen_setMonth_fn() {
        val minDate = if ((this.innerMinDate != "" && this.innerMinDate != "0")) {
            this.innerMinDate
        } else {
            dayuts().valueOf()
        }
        val maxDate = if ((this.innerMaxDate != "" && this.innerMaxDate != "0")) {
            this.innerMaxDate
        } else {
            dayuts(minDate).add((this.monthNum as Number) - 1, "month").valueOf()
        }
        val months = range(1, this.monthNum as Number, this.getMonths(minDate, maxDate))
        this.months = _uA<monthsItem>()
        val minDateStr = dayuts(minDate).format("YYYY-MM-DD")
        val maxDateStr = dayuts(maxDate).format("YYYY-MM-DD")
        run {
            var i: Number = 0
            while(i < months){
                val monthBase = dayuts(minDate).add(i, "month")
                val daysInMonth = monthBase.daysInMonth()
                val monthValue = monthBase.month() + 1
                val yearValue = monthBase.year()
                var cdate: UTSArray<UPCalendarMonthsItemDate> = _uA()
                run {
                    var day: Number = 1
                    while(day <= daysInMonth){
                        val dayBase = monthBase.date(day)
                        val date = dayBase.format("YYYY-MM-DD")
                        val week = dayBase.day()
                        var bottomInfo = ""
                        var config = UPCalendarMonthsItemDate(day = day.toString(10), week = week, disabled = date < minDateStr || date > maxDateStr, date = Date(date), dateStr = date, bottomInfo = bottomInfo, dot = false, month = monthValue)
                        cdate.push(config)
                        day++
                    }
                }
                var md = monthsItem(top = 0, date = cdate, month = monthValue.toString(10), year = yearValue.toString(10))
                this.months.push(md)
                i++
            }
        }
        if (this.monthSwitch) {
            this.monthIndex = this.getDefaultMonthIndex()
        }
    }
    open var getDefaultMonthIndex = ::gen_getDefaultMonthIndex_fn
    open fun gen_getDefaultMonthIndex_fn(): Number {
        var selected = dayuts().format("YYYY-MM")
        if (this.defaultDate != null) {
            if (!array(this.defaultDate)) {
                selected = dayuts(this.defaultDate!!).format("YYYY-MM")
            } else if ((this.defaultDate as UTSArray<Any>).length > 0) {
                selected = dayuts((this.defaultDate as UTSArray<Any>)[0]).format("YYYY-MM")
            }
        }
        val index = this.months.findIndex(fun(ref__1): Boolean {
            var year = ref__1.year
            var month = ref__1.month
            month = padZero(month)
            return "" + year + "-" + month === selected
        }
        )
        return if (index == -1) {
            0
        } else {
            index
        }
    }
    open var prevMonth = ::gen_prevMonth_fn
    open fun gen_prevMonth_fn() {
        if (!this.switchPrevDisabled) {
            this.monthIndex -= 1
        }
    }
    open var nextMonth = ::gen_nextMonth_fn
    open fun gen_nextMonth_fn() {
        if (!this.switchNextDisabled) {
            this.monthIndex += 1
        }
    }
    open var prevYear = ::gen_prevYear_fn
    open fun gen_prevYear_fn() {
        if (!this.switchPrevYearDisabled) {
            this.monthIndex -= 12
        }
    }
    open var nextYear = ::gen_nextYear_fn
    open fun gen_nextYear_fn() {
        if (!this.switchNextYearDisabled) {
            this.monthIndex += 12
        }
    }
    open var jumpToToday = ::gen_jumpToToday_fn
    open fun gen_jumpToToday_fn() {
        if (this.todayDisabled) {
            return
        }
        val targetMonth = dayuts(this.todayDate).format("YYYY-MM")
        if (this.monthSwitch) {
            val todayMonthIndex = this.months.findIndex(fun(ref__1): Boolean {
                var year = ref__1.year
                var month = ref__1.month
                month = padZero(month)
                return "" + year + "-" + month == targetMonth
            }
            )
            if (todayMonthIndex != -1) {
                this.monthIndex = todayMonthIndex
            }
            return
        }
        this.scrollIntoDefaultMonth(targetMonth)
    }
    open var scrollIntoDefaultMonth = ::gen_scrollIntoDefaultMonth_fn
    open fun gen_scrollIntoDefaultMonth_fn(selected: String) {
        val _index = this.months.findIndex(fun(ref__1): Boolean {
            var year = ref__1.year
            var month = ref__1.month
            month = padZero(month)
            return "" + year + "-" + month === selected
        }
        )
        if (_index != -1) {
            this.`$nextTick`(fun(){
                this.scrollIntoView = ""
                this.scrollIntoView = "month-" + _index
                this.scrollIntoViewScroll = this.scrollIntoView
            }
            )
        }
    }
    open var onScroll = ::gen_onScroll_fn
    open fun gen_onScroll_fn(event: UniScrollEvent) {
        val scrollTop = Math.max(0, event.detail.scrollTop)
        run {
            var i: Number = 0
            while(i < this.months.length){
                if (scrollTop >= (if (this.months[i].top > 0) {
                    this.months[i].top
                } else {
                    this.listHeight
                }
                )) {
                    this.monthIndex = i
                    this.scrollIntoViewScroll = "month-" + i
                }
                i++
            }
        }
    }
    open var onUpdateMonthTopM = ::gen_onUpdateMonthTopM_fn
    open fun gen_onUpdateMonthTopM_fn(topArr: UTSArray<Number>) {
        if (this.monthSwitch) {
            return
        }
        this.updateMonthTopM(topArr)
    }
    open var updateMonthTopM = ::gen_updateMonthTopM_fn
    open fun gen_updateMonthTopM_fn(topArr: UTSArray<Number>) {
        topArr.map(fun(item, index){
            this.months[index]["top"] = item
        }
        )
        if (this.defaultDate == null) {
            val select = dayuts().format("YYYY-MM")
            this.scrollIntoDefaultMonth(select)
            return
        }
        var selected = dayuts().format("YYYY-MM")
        if (!array(this.defaultDate)) {
            selected = dayuts(this.defaultDate!!).format("YYYY-MM")
        } else {
            selected = dayuts((this.defaultDate as UTSArray<Any>)[0]).format("YYYY-MM")
        }
        this.scrollIntoDefaultMonth(selected)
    }
    companion object {
        var name = "up-calendar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-calendar__confirm" to _pS(_uM("paddingTop" to 7, "paddingRight" to 18, "paddingBottom" to 7, "paddingLeft" to 18)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("confirm" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to "String", "default" to calendarProp__2["title"]), "showTitle" to _uM("type" to "Boolean", "default" to calendarProp__2["showTitle"]), "showSubtitle" to _uM("type" to "Boolean", "default" to calendarProp__2["showSubtitle"]), "mode" to _uM("type" to "String", "default" to calendarProp__2["mode"]), "startText" to _uM("type" to "String", "default" to calendarProp__2["startText"]), "endText" to _uM("type" to "String", "default" to calendarProp__2["endText"]), "customList" to _uM("type" to "Array", "default" to calendarProp__2["customList"]), "color" to _uM("type" to "String", "default" to calendarProp__2["color"]), "minDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to calendarProp__2["minDate"]), "maxDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to calendarProp__2["maxDate"]), "defaultDate" to _uM("type" to _uA(
            "Array",
            "String",
            "Date"
        ), "default" to calendarProp__2["defaultDate"]), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to calendarProp__2["maxCount"]), "rowHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to calendarProp__2["rowHeight"]), "formatter" to _uM("type" to _uA(
            "Function"
        ), "default" to calendarProp__2["formatter"]), "showLunar" to _uM("type" to "Boolean", "default" to calendarProp__2["showLunar"]), "showMark" to _uM("type" to "Boolean", "default" to calendarProp__2["showMark"]), "confirmText" to _uM("type" to "String", "default" to calendarProp__2["confirmText"]), "confirmDisabledText" to _uM("type" to "String", "default" to calendarProp__2["confirmDisabledText"]), "show" to _uM("type" to "Boolean", "default" to calendarProp__2["show"]), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to calendarProp__2["closeOnClickOverlay"]), "readonly" to _uM("type" to "Boolean", "default" to calendarProp__2["readonly"]), "showConfirm" to _uM("type" to "Boolean", "default" to calendarProp__2["showConfirm"]), "maxRange" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to calendarProp__2["maxRange"]), "rangePrompt" to _uM("type" to "String", "default" to calendarProp__2["rangePrompt"]), "showRangePrompt" to _uM("type" to "Boolean", "default" to calendarProp__2["showRangePrompt"]), "allowSameDay" to _uM("type" to "Boolean", "default" to calendarProp__2["allowSameDay"]), "rangeResultMode" to _uM("type" to "String", "default" to calendarProp__2["rangeResultMode"]), "round" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to calendarProp__2["round"]), "monthNum" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 3), "monthSwitch" to _uM("type" to "Boolean", "default" to calendarProp__2["monthSwitch"]), "showToday" to _uM("type" to "Boolean", "default" to calendarProp__2["showToday"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "showTitle",
            "showSubtitle",
            "mode",
            "startText",
            "endText",
            "customList",
            "color",
            "minDate",
            "maxDate",
            "defaultDate",
            "maxCount",
            "rowHeight",
            "formatter",
            "showLunar",
            "showMark",
            "confirmText",
            "confirmDisabledText",
            "show",
            "closeOnClickOverlay",
            "readonly",
            "showConfirm",
            "maxRange",
            "rangePrompt",
            "showRangePrompt",
            "allowSameDay",
            "rangeResultMode",
            "round",
            "monthNum",
            "monthSwitch",
            "showToday"
        )
        var components: Map<String, CreateVueComponent> = _uM("uHeader" to GenUniModulesUviewUltraComponentsUpCalendarHeaderClass, "uMonth" to GenUniModulesUviewUltraComponentsUpCalendarMonthClass)
    }
}
