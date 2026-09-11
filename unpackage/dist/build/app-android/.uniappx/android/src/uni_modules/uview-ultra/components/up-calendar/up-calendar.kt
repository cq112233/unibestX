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
open class GenUniModulesUviewUltraComponentsUpCalendarUpCalendar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
    open var customList: UTSArray<Any> by `$props`
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
    open var safeAreaInsetBottom: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var init: () -> Unit
        get() {
            return unref(this.`$exposed`["init"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "init", value)
        }
    open var setMonth: () -> Unit
        get() {
            return unref(this.`$exposed`["setMonth"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setMonth", value)
        }
    open var confirm: () -> Unit
        get() {
            return unref(this.`$exposed`["confirm"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "confirm", value)
        }
    open var close: () -> Unit
        get() {
            return unref(this.`$exposed`["close"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "close", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCalendarUpCalendar, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCalendarUpCalendar
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val inited = ref<Boolean>(false)
            val months = ref(_uA<CalendarMonthItem>())
            val monthIndex = ref<Number>(0)
            val listHeight = ref<Number>(0)
            val listStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to addUnit(listHeight.value))
            }
            )
            val selected = ref(_uA<String>())
            val scrollIntoView = ref<String>("")
            val scrollTop = ref<Number>(0)
            val innerMaxDate = computed<String>(fun(): String {
                return props.maxDate.toString()
            }
            )
            val innerMinDate = computed<String>(fun(): String {
                return props.minDate.toString()
            }
            )
            val todayDate = computed<String>(fun(): String {
                return dayuts().format("YYYY-MM-DD")
            }
            )
            val todayText = computed<String>(fun(): String {
                return t("up.calendar.today", _uO())
            }
            )
            val todayDisabled = computed<Boolean>(fun(): Boolean {
                var today = dayuts(todayDate.value as Any)
                var minD = innerMinDate.value
                var maxD = innerMaxDate.value
                if (minD != "" && minD != "0" && today.isBefore(dayuts(minD as Any), "day")) {
                    return true
                }
                if (maxD != "" && maxD != "0" && today.isAfter(dayuts(maxD as Any), "day")) {
                    return true
                }
                return false
            }
            )
            val elTitle = computed<String>(fun(): String {
                if (props.title != "" && props.title != "日期选择") {
                    return props.title
                }
                return t("up.calendar.chooseDates", _uO())
            }
            )
            val elConfirmText = computed<String>(fun(): String {
                if (props.confirmText != "" && props.confirmText != "确定") {
                    return props.confirmText
                }
                return t("up.common.confirm", _uO())
            }
            )
            val elConfirmDisabledText = computed<String>(fun(): String {
                if (props.confirmDisabledText != "" && props.confirmDisabledText != "确定") {
                    return props.confirmDisabledText
                }
                return t("up.common.confirm", _uO())
            }
            )
            val elStartText = computed<String>(fun(): String {
                if (props.startText != "" && props.startText != "开始") {
                    return props.startText
                }
                return t("up.common.start", _uO())
            }
            )
            val elEndText = computed<String>(fun(): String {
                if (props.endText != "" && props.endText != "结束") {
                    return props.endText
                }
                return t("up.common.end", _uO())
            }
            )
            val subtitle = computed<String>(fun(): String {
                if (months.value.length > 0) {
                    val item = months.value[monthIndex.value]
                    return formatMonthTitle(item.year, item.month)
                }
                return ""
            }
            )
            val currentMonths = computed<UTSArray<CalendarMonthItem>>(fun(): UTSArray<CalendarMonthItem> {
                if (props.monthSwitch && months.value.length > 0) {
                    return _uA(
                        months.value[monthIndex.value]
                    )
                }
                return months.value
            }
            )
            val switchPrevDisabled = computed<Boolean>(fun(): Boolean {
                return monthIndex.value <= 0
            }
            )
            val switchNextDisabled = computed<Boolean>(fun(): Boolean {
                return monthIndex.value >= months.value.length - 1
            }
            )
            val switchPrevYearDisabled = computed<Boolean>(fun(): Boolean {
                return monthIndex.value - 12 < 0
            }
            )
            val switchNextYearDisabled = computed<Boolean>(fun(): Boolean {
                return monthIndex.value + 12 > months.value.length - 1
            }
            )
            val buttonDisabled = computed<Boolean>(fun(): Boolean {
                if (props.mode === "range") {
                    return selected.value.length <= 1
                }
                return false
            }
            )
            fun getConfirmValue(selParam: UTSArray<String>? = null): UTSArray<String> {
                val sel = selParam ?: selected.value
                if (props.mode == "range" && props.rangeResultMode == "boundary" && sel.length >= 2) {
                    var len = sel.length - 1
                    return _uA(
                        sel[0],
                        sel[len]
                    )
                }
                return sel
            }
            fun gen_monthSelectedM_fn(e: UTSArray<String>, scene: String) {
                selected.value = e
                if (!props.showConfirm) {
                    if (props.mode === "multiple" || props.mode === "single" || (props.mode === "range" && selected.value.length >= 2)) {
                        if (scene === "tap") {
                            emit("confirm", getConfirmValue())
                        }
                    }
                }
            }
            val monthSelectedM = ::gen_monthSelectedM_fn
            fun gen_getMonths_fn(minD: Any, maxD: Any): Number {
                val minYear = dayuts(minD as Any).year()
                val minMonth = dayuts(minD as Any).month() + 1
                val maxYear = dayuts(maxD as Any).year()
                val maxMonth = dayuts(maxD as Any).month() + 1
                return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1
            }
            val getMonths = ::gen_getMonths_fn
            fun gen_getDefaultMonthIndex_fn(): Number {
                var sel = dayuts().format("YYYY-MM")
                if (props.defaultDate != null) {
                    if (!array(props.defaultDate)) {
                        sel = dayuts(props.defaultDate as Any).format("YYYY-MM")
                    } else if ((props.defaultDate as UTSArray<Any>).length > 0) {
                        sel = dayuts((props.defaultDate as UTSArray<Any>)[0] as Any).format("YYYY-MM")
                    }
                }
                val idx = months.value.findIndex(fun(ref__1): Boolean {
                    var year = ref__1.year
                    var month = ref__1.month
                    month = padZero(month)
                    return "" + year + "-" + month === sel
                }
                )
                return if (idx == -1) {
                    0
                } else {
                    idx
                }
            }
            val getDefaultMonthIndex = ::gen_getDefaultMonthIndex_fn
            fun gen_setMonth_fn() {
                val minD = if ((innerMinDate.value != "" && innerMinDate.value != "0")) {
                    innerMinDate.value
                } else {
                    dayuts().valueOf()
                }
                val maxD = if ((innerMaxDate.value != "" && innerMaxDate.value != "0")) {
                    innerMaxDate.value
                } else {
                    dayuts(minD as Any).add(parseInt(props.monthNum.toString()) - 1, "month").valueOf()
                }
                val monthCount = range(1, parseInt(props.monthNum.toString()), getMonths(minD, maxD))
                var newMonths = _uA<CalendarMonthItem>()
                val minDateStr = dayuts(minD as Any).format("YYYY-MM-DD")
                val maxDateStr = dayuts(maxD as Any).format("YYYY-MM-DD")
                run {
                    var i: Number = 0
                    while(i < monthCount){
                        val monthBase = dayuts(minD as Any).add(i, "month")
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
                                var config = UPCalendarMonthsItemDate(day = day.toString(10), week = week, disabled = date < minDateStr || date > maxDateStr, date = Date(date), dateStr = date, bottomInfo = "", dot = false, month = monthValue)
                                cdate.push(config)
                                day++
                            }
                        }
                        var md = CalendarMonthItem(top = 0, date = cdate, month = monthValue.toString(10), year = yearValue.toString(10))
                        newMonths.push(md)
                        i++
                    }
                }
                months.value = newMonths
                if (props.monthSwitch) {
                    monthIndex.value = getDefaultMonthIndex()
                }
            }
            val setMonth = ::gen_setMonth_fn
            fun gen_scrollIntoDefaultMonth_fn(selMonth: String) {
                val _index = months.value.findIndex(fun(ref__1): Boolean {
                    var year = ref__1.year
                    var month = ref__1.month
                    month = padZero(month)
                    return "" + year + "-" + month === selMonth
                }
                )
                if (_index != -1) {
                    nextTick(fun(){
                        scrollIntoView.value = ""
                        scrollIntoView.value = "month-" + _index
                    }
                    )
                }
            }
            val scrollIntoDefaultMonth = ::gen_scrollIntoDefaultMonth_fn
            fun gen_jumpToToday_fn() {
                if (todayDisabled.value) {
                    return
                }
                val targetMonth = dayuts(todayDate.value as Any).format("YYYY-MM")
                if (props.monthSwitch) {
                    val todayMonthIdx = months.value.findIndex(fun(ref__1): Boolean {
                        var year = ref__1.year
                        var month = ref__1.month
                        month = padZero(month)
                        return "" + year + "-" + month == targetMonth
                    }
                    )
                    if (todayMonthIdx != -1) {
                        monthIndex.value = todayMonthIdx
                    }
                    return
                }
                scrollIntoDefaultMonth(targetMonth)
            }
            val jumpToToday = ::gen_jumpToToday_fn
            fun gen_updateMonthTopM_fn(topArr: UTSArray<Number>) {
                topArr.map(fun(item, index){
                    if (index < months.value.length) {
                        months.value[index].top = item
                    }
                }
                )
                if (props.defaultDate == null) {
                    val sel = dayuts().format("YYYY-MM")
                    scrollIntoDefaultMonth(sel)
                    return
                }
                var sel = dayuts().format("YYYY-MM")
                if (!array(props.defaultDate)) {
                    sel = dayuts(props.defaultDate as Any).format("YYYY-MM")
                } else {
                    sel = dayuts((props.defaultDate as UTSArray<Any>)[0] as Any).format("YYYY-MM")
                }
                scrollIntoDefaultMonth(sel)
            }
            val updateMonthTopM = ::gen_updateMonthTopM_fn
            fun gen_onUpdateMonthTopM_fn(topArr: UTSArray<Number>) {
                if (props.monthSwitch) {
                    return
                }
                updateMonthTopM(topArr)
            }
            val onUpdateMonthTopM = ::gen_onUpdateMonthTopM_fn
            fun gen_onScroll_fn(event: UniScrollEvent) {
                val curScrollTop = Math.max(0, event.detail.scrollTop)
                run {
                    var i: Number = 0
                    while(i < months.value.length){
                        if (curScrollTop >= (if (months.value[i].top > 0) {
                            months.value[i].top
                        } else {
                            listHeight.value
                        }
                        )) {
                            monthIndex.value = i
                        }
                        i++
                    }
                }
            }
            val onScroll = ::gen_onScroll_fn
            fun gen_init_fn() {
                listHeight.value = parseInt(props.rowHeight.toString()) * (if (props.monthSwitch) {
                    6
                } else {
                    5
                }
                ) + 30
                setMonth()
                inited.value = true
            }
            val init = ::gen_init_fn
            fun gen_close_fn() {
                emit("close")
            }
            val close = ::gen_close_fn
            fun gen_confirm_fn() {
                if (!buttonDisabled.value) {
                    emit("confirm", getConfirmValue())
                }
            }
            val confirm = ::gen_confirm_fn
            fun gen_prevMonth_fn() {
                if (!switchPrevDisabled.value) {
                    monthIndex.value -= 1
                }
            }
            val prevMonth = ::gen_prevMonth_fn
            fun gen_nextMonth_fn() {
                if (!switchNextDisabled.value) {
                    monthIndex.value += 1
                }
            }
            val nextMonth = ::gen_nextMonth_fn
            fun gen_prevYear_fn() {
                if (!switchPrevYearDisabled.value) {
                    monthIndex.value -= 12
                }
            }
            val prevYear = ::gen_prevYear_fn
            fun gen_nextYear_fn() {
                if (!switchNextYearDisabled.value) {
                    monthIndex.value += 12
                }
            }
            val nextYear = ::gen_nextYear_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(nval: Boolean){
                if (nval) {
                    init()
                } else {
                    scrollIntoView.value = ""
                }
            }
            , WatchOptions(immediate = true))
            watch(fun(): UTSArray<Any?> {
                return _uA<Any?>(props.defaultDate, innerMinDate.value, innerMaxDate.value)
            }
            , fun(){
                if (inited.value) {
                    setMonth()
                }
            }
            )
            onMounted(fun(){
                init()
            }
            )
            __expose(_uM("init" to init, "setMonth" to setMonth, "confirm" to confirm, "close" to close))
            return fun(): Any? {
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cV(_component_up_popup, _uM("show" to _ctx.show, "mode" to "bottom", "closeable" to "", "onClose" to close, "round" to _ctx.round, "closeOnClickOverlay" to _ctx.closeOnClickOverlay, "safeAreaInsetBottom" to _ctx.safeAreaInsetBottom), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-calendar"), _uA(
                            _cV(unref(GenUniModulesUviewUltraComponentsUpCalendarHeaderClass), _uM("title" to elTitle.value, "subtitle" to subtitle.value, "showSubtitle" to _ctx.showSubtitle, "showTitle" to _ctx.showTitle, "showSwitch" to _ctx.monthSwitch, "showToday" to _ctx.showToday, "todayText" to todayText.value, "todayDisabled" to todayDisabled.value, "prevDisabled" to switchPrevDisabled.value, "nextDisabled" to switchNextDisabled.value, "prevYearDisabled" to switchPrevYearDisabled.value, "nextYearDisabled" to switchNextYearDisabled.value, "onPrev" to prevMonth, "onNext" to nextMonth, "onPrevYear" to prevYear, "onNextYear" to nextYear, "onToday" to jumpToToday), null, 8, _uA(
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
                                "nextYearDisabled"
                            )),
                            if (isTrue(!isTruthy(_ctx.monthSwitch))) {
                                _cE("scroll-view", _uM("key" to 0, "style" to _nS(listStyle.value), "direction" to "vertical", "onScroll" to onScroll, "scroll-top" to scrollTop.value, "scroll-into-view" to scrollIntoView.value), _uA(
                                    _cV(unref(GenUniModulesUviewUltraComponentsUpCalendarMonthClass), _uM("color" to _ctx.color, "rowHeight" to _ctx.rowHeight, "showMark" to _ctx.showMark, "months" to months.value, "mode" to _ctx.mode, "maxCount" to _ctx.maxCount, "startText" to elStartText.value, "endText" to elEndText.value, "defaultDate" to _ctx.defaultDate, "minDate" to innerMinDate.value, "maxDate" to innerMaxDate.value, "maxMonth" to _ctx.monthNum, "readonly" to _ctx.readonly, "maxRange" to _ctx.maxRange, "rangePrompt" to _ctx.rangePrompt, "showRangePrompt" to _ctx.showRangePrompt, "allowSameDay" to _ctx.allowSameDay, "todayDate" to todayDate.value, "ref" to "month", "onMonthSelected" to monthSelectedM, "onUpdateMonthTop" to onUpdateMonthTopM), null, 8, _uA(
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
                                        "todayDate"
                                    ))
                                ), 44, _uA(
                                    "scroll-top",
                                    "scroll-into-view"
                                ))
                            } else {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border", "style" to _nS(listStyle.value)), _uA(
                                    _cV(unref(GenUniModulesUviewUltraComponentsUpCalendarMonthClass), _uM("color" to _ctx.color, "rowHeight" to _ctx.rowHeight, "showMark" to _ctx.showMark, "months" to currentMonths.value, "mode" to _ctx.mode, "maxCount" to _ctx.maxCount, "startText" to elStartText.value, "endText" to elEndText.value, "defaultDate" to _ctx.defaultDate, "minDate" to innerMinDate.value, "maxDate" to innerMaxDate.value, "maxMonth" to _ctx.monthNum, "readonly" to _ctx.readonly, "maxRange" to _ctx.maxRange, "rangePrompt" to _ctx.rangePrompt, "showRangePrompt" to _ctx.showRangePrompt, "allowSameDay" to _ctx.allowSameDay, "todayDate" to todayDate.value, "ref" to "month", "onMonthSelected" to monthSelectedM, "onUpdateMonthTop" to onUpdateMonthTopM), null, 8, _uA(
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
                                        "todayDate"
                                    ))
                                ), 4)
                            }
                            ,
                            if (isTrue(_ctx.showConfirm)) {
                                renderSlot(_ctx.`$slots`, "footer", _uM("key" to 2), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-calendar__confirm"), _uA(
                                            _cV(_component_up_button, _uM("shape" to "circle", "text" to if (buttonDisabled.value) {
                                                elConfirmDisabledText.value
                                            } else {
                                                elConfirmText.value
                                            }, "color" to if (_ctx.color == "#3c9cff") {
                                                ""
                                            } else {
                                                _ctx.color
                                            }, "type" to if (_ctx.color == "#3c9cff") {
                                                "primary"
                                            } else {
                                                ""
                                            }, "onClick" to confirm, "disabled" to buttonDisabled.value, "customStyle" to "min-width:120px;"), null, 8, _uA(
                                                "text",
                                                "color",
                                                "type",
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
                    "round",
                    "closeOnClickOverlay",
                    "safeAreaInsetBottom"
                ))
            }
        }
        var name = "up-calendar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-calendar__confirm" to _pS(_uM("paddingTop" to 12, "paddingRight" to 18, "paddingBottom" to 16, "paddingLeft" to 18)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("confirm" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to "String", "default" to ""), "showTitle" to _uM("type" to "Boolean", "default" to true), "showSubtitle" to _uM("type" to "Boolean", "default" to true), "mode" to _uM("type" to "String", "default" to "single"), "startText" to _uM("type" to "String", "default" to "开始"), "endText" to _uM("type" to "String", "default" to "结束"), "customList" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "color" to _uM("type" to "String", "default" to "#3c9cff"), "minDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "maxDate" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "defaultDate" to _uM("type" to _uA(
            "Array",
            "String",
            "Date"
        ), "default" to null), "maxCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 999), "rowHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 56), "formatter" to _uM("default" to null), "showLunar" to _uM("type" to "Boolean", "default" to false), "showMark" to _uM("type" to "Boolean", "default" to true), "confirmText" to _uM("type" to "String", "default" to "确定"), "confirmDisabledText" to _uM("type" to "String", "default" to "确定"), "show" to _uM("type" to "Boolean", "default" to false), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to false), "readonly" to _uM("type" to "Boolean", "default" to false), "showConfirm" to _uM("type" to "Boolean", "default" to true), "maxRange" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 365), "rangePrompt" to _uM("type" to "String", "default" to ""), "showRangePrompt" to _uM("type" to "Boolean", "default" to true), "allowSameDay" to _uM("type" to "Boolean", "default" to false), "rangeResultMode" to _uM("type" to "String", "default" to "all"), "round" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to 0), "monthNum" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 3), "monthSwitch" to _uM("type" to "Boolean", "default" to false), "showToday" to _uM("type" to "Boolean", "default" to true), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to true)))
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
            "showToday",
            "safeAreaInsetBottom"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
