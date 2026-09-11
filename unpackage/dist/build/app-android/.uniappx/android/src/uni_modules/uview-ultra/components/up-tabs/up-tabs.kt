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
open class GenUniModulesUviewUltraComponentsUpTabsUpTabs : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var duration: Number by `$props`
    open var list: UTSArray<UTSJSONObject> by `$props`
    open var lineColor: String by `$props`
    open var activeStyle: Any by `$props`
    open var inactiveStyle: Any by `$props`
    open var lineWidth: Any by `$props`
    open var lineHeight: Any by `$props`
    open var lineBgSize: String by `$props`
    open var itemStyle: Any by `$props`
    open var scrollable: Boolean by `$props`
    open var current: Any by `$props`
    open var keyName: String by `$props`
    open var iconStyle: Any by `$props`
    open var height: Any by `$props`
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
    open var resize: () -> Unit
        get() {
            return unref(this.`$exposed`["resize"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "resize", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTabsUpTabs, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTabsUpTabs
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val firstTime = ref<Boolean>(true)
            val scrollLeft = ref<Number>(0)
            val scrollViewWidth = ref<Number>(0)
            val lineOffsetLeft = ref<Number>(0)
            val tabsRect = ref<NodeInfo>(NodeInfo(left = 0, right = 0))
            val innerCurrent = ref<Number>(0)
            val retryCount = ref<Number>(0)
            val itemRects = ref(_uA<NodeInfo>())
            val tabsWrapperStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to addUnit(props.height))
            }
            )
            val iconCustomStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.iconStyle) as UTSJSONObject
            }
            )
            val propsBadge = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return default__27["badge"] as UTSJSONObject
            }
            )
            val lineStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["width"] = addUnit(props.lineWidth)
                style["transform"] = "translateX(" + lineOffsetLeft.value + "px)"
                style["transitionDuration"] = "" + (if (firstTime.value) {
                    0
                } else {
                    props.duration
                }
                ) + "ms"
                style["height"] = addUnit(props.lineHeight)
                style["backgroundSize"] = props.lineBgSize
                if (props.lineColor != "#3c9cff") {
                    style["backgroundColor"] = props.lineColor
                }
                return style
            }
            )
            fun gen_getShowValue_fn(itemObj: UTSJSONObject): Boolean {
                if (itemObj["badge"] != null) {
                    var itemObjBadge = itemObj["badge"] as UTSJSONObject
                    if (itemObjBadge["show"] != null && (itemObjBadge["show"] as Boolean) || (itemObjBadge["isDot"] != null && (itemObjBadge["isDot"] as Boolean)) || itemObjBadge["value"] != null) {
                        return true
                    }
                }
                return false
            }
            val getShowValue = ::gen_getShowValue_fn
            fun gen_getBadgePropValue_fn(itemObj: UTSJSONObject, name: String): Any {
                if (itemObj != null && itemObj["badge"] != null) {
                    var itemObjBadge = itemObj["badge"] as UTSJSONObject
                    if (itemObjBadge != null && itemObjBadge[name] != null) {
                        return if (itemObjBadge[name] != null) {
                            itemObjBadge[name]
                        } else {
                            ""
                        } as Any
                    } else {
                        return if (propsBadge.value != null && propsBadge.value[name] != null) {
                            propsBadge.value[name]
                        } else {
                            ""
                        }
                         as Any
                    }
                }
                return ""
            }
            val getBadgePropValue = ::gen_getBadgePropValue_fn
            fun gen_textStyle_fn(index: Number): Any {
                val style: UTSJSONObject = _uO()
                val customeStyle = if ((index == innerCurrent.value)) {
                    addStyle(props.activeStyle)
                } else {
                    addStyle(props.inactiveStyle)
                }
                if (props.list[index]["disabled"] != null && (props.list[index]["disabled"] as Boolean)) {
                    style["color"] = "#c8c9cc"
                }
                return deepMerge(customeStyle, style)
            }
            val textStyle = ::gen_textStyle_fn
            fun gen_getItemStyle_fn(): UTSJSONObject {
                val custom = addStyle(props.itemStyle) as UTSJSONObject
                val base: UTSJSONObject = _uO("flex" to if (props.scrollable) {
                    "none"
                } else {
                    "1"
                }
                )
                return deepMerge(base, custom) as UTSJSONObject
            }
            val getItemStyle = ::gen_getItemStyle_fn
            fun gen_isListEqual_fn(list1: UTSArray<UTSJSONObject>, list2: UTSArray<UTSJSONObject>): Boolean {
                if (list1.length != list2.length) {
                    return false
                }
                run {
                    var i: Number = 0
                    while(i < list1.length){
                        val item1 = list1[i]
                        val item2 = list2[i]
                        if (item1[props.keyName] != item2[props.keyName]) {
                            return false
                        }
                        i++
                    }
                }
                return true
            }
            val isListEqual = ::gen_isListEqual_fn
            fun gen_getTabsRect_fn(): UTSPromise<NodeInfo> {
                return uni.UNIB120614.upGetRect(".up-tabs__wrapper__scroll-view", false, instance?.proxy)
            }
            val getTabsRect = ::gen_getTabsRect_fn
            fun gen_getAllItemRect_fn(): UTSPromise<UTSArray<NodeInfo>> {
                return UTSPromise(fun(resolve: (res: UTSArray<NodeInfo>) -> Unit, _reject){
                    val total = props.list.length
                    if (total == 0) {
                        resolve(_uA<NodeInfo>())
                        return
                    }
                    var results: UTSArray<NodeInfo> = _uA()
                    var count: Number = 0
                    run {
                        var i: Number = 0
                        while(i < total){
                            val idx = i
                            uni.UNIB120614.upGetRect(".up-tabs__wrapper__nav__item-" + idx, false, instance?.proxy).then(fun(size: NodeInfo){
                                results.push(size)
                                count++
                                if (count == total) {
                                    resolve(results)
                                }
                            }
                            )
                            i++
                        }
                    }
                }
                )
            }
            val getAllItemRect = ::gen_getAllItemRect_fn
            fun gen_setLineLeft_fn() {
                if (itemRects.value.length <= innerCurrent.value) {
                    return
                }
                val tabItem = itemRects.value[innerCurrent.value]
                if (tabItem == null) {
                    return
                }
                var totalOffset = itemRects.value.slice(0, innerCurrent.value).reduce(fun(total: Number, curr: NodeInfo): Number {
                    return total + (curr.width ?: 0)
                }
                , 0)
                val lineWidthVal = parseFloat(getPx(props.lineWidth))
                val tabWidth = tabItem.width ?: 0
                val offset = if (tabWidth > 0) {
                    (tabWidth - lineWidthVal) / 2
                } else {
                    0
                }
                lineOffsetLeft.value = totalOffset + offset
                if (firstTime.value) {
                    setTimeout(fun(){
                        firstTime.value = false
                    }
                    , 30)
                }
            }
            val setLineLeft = ::gen_setLineLeft_fn
            fun gen_setScrollLeft_fn() {
                if (innerCurrent.value < 0) {
                    innerCurrent.value = 0
                }
                if (itemRects.value.length <= innerCurrent.value) {
                    return
                }
                val tabRect = itemRects.value[innerCurrent.value]
                if (tabRect == null) {
                    return
                }
                val offsetLeft = itemRects.value.slice(0, innerCurrent.value).reduce(fun(total: Number, curr: NodeInfo): Number {
                    return total + (curr.width ?: 0)
                }
                , 0)
                val windowWidth = getWindowInfo().windowWidth
                var nextScrollLeft = offsetLeft - ((tabsRect.value.width ?: 0) - (tabRect.width ?: 0)) / 2 - (windowWidth - (tabsRect.value.right ?: 0)) / 2 + (tabsRect.value.left ?: 0) / 2
                nextScrollLeft = Math.min(nextScrollLeft, scrollViewWidth.value - (tabsRect.value.width ?: 0))
                scrollLeft.value = Math.max(0, nextScrollLeft)
            }
            val setScrollLeft = ::gen_setScrollLeft_fn
            fun gen_resize_fn() {
                if (props.list.length == 0) {
                    return
                }
                getTabsRect().then(fun(tRect: NodeInfo){
                    getAllItemRect().then(fun(iRect: UTSArray<NodeInfo>){
                        val firstWidth = if ((iRect.length > 0 && iRect[0] != null)) {
                            (iRect[0].width ?: 0)
                        } else {
                            0
                        }
                        var minWidthExpected: Number = 30
                        if (props.list.length > 0) {
                            val firstItemName = props.list[0][props.keyName]
                            if (firstItemName != null) {
                                val nameStr = firstItemName.toString()
                                minWidthExpected = nameStr.length * 12 + 20
                            }
                        }
                        if ((firstWidth < minWidthExpected) && retryCount.value < 5) {
                            retryCount.value++
                            setTimeout(fun(){
                                gen_resize_fn()
                            }
                            , 50)
                            return
                        }
                        if ((tRect.left ?: 0) > (tRect.width ?: 0)) {
                            tRect.right = (tRect.right ?: 0) - Math.floor((tRect.left ?: 0) / (tRect.width ?: 0)) * (tRect.width ?: 0)
                            tRect.left = (tRect.left ?: 0) % (tRect.width ?: 1)
                        }
                        tabsRect.value = tRect
                        itemRects.value = iRect
                        scrollViewWidth.value = 0
                        run {
                            var i: Number = 0
                            while(i < iRect.length){
                                val item = iRect[i]
                                if (item != null) {
                                    scrollViewWidth.value = scrollViewWidth.value + (item.width ?: 0)
                                }
                                i++
                            }
                        }
                        setLineLeft()
                        setScrollLeft()
                    }
                    )
                }
                )
            }
            val resize = ::gen_resize_fn
            fun gen_clickHandler_fn(item: Any, index: Number) {
                emit("click", UTSJSONObject.assign(_uO(), item as UTSJSONObject, _uO("index" to index)), index)
                if (item["disabled"] != null && (item["disabled"] as Boolean)) {
                    return
                }
                if (innerCurrent.value == index) {
                    return
                }
                innerCurrent.value = index
                nextTick(fun(){
                    val hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && (itemRects.value[0].width ?: 0) > 0
                    if (hasRect) {
                        setLineLeft()
                        setScrollLeft()
                    } else {
                        resize()
                    }
                }
                )
                emit("update:current", index)
                emit("change", UTSJSONObject.assign(_uO(), item as UTSJSONObject, _uO("index" to index)), index)
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_longPressHandler_fn(item: UTSJSONObject, index: Number) {
                emit("longPress", UTSJSONObject.assign(_uO(), item, _uO("index" to index)))
            }
            val longPressHandler = ::gen_longPressHandler_fn
            fun gen_init_fn() {
                retryCount.value = 0
                sleep(30).then(fun(){
                    resize()
                }
                )
            }
            val init = ::gen_init_fn
            watch(fun(): Any {
                return props.current
            }
            , fun(newValue: Any){
                var num = if (UTSAndroid.`typeof`(newValue) == "string") {
                    parseInt((newValue as String).toString())
                } else {
                    (newValue as Number)
                }
                if (num != innerCurrent.value) {
                    innerCurrent.value = num
                    nextTick(fun(){
                        val hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && (itemRects.value[0].width ?: 0) > 0
                        if (hasRect) {
                            setLineLeft()
                            setScrollLeft()
                        } else {
                            resize()
                        }
                    }
                    )
                }
            }
            , WatchOptions(immediate = true))
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.list
            }
            , fun(newValue: UTSArray<UTSJSONObject>, oldValue: UTSArray<UTSJSONObject>?){
                if (oldValue != null && isListEqual(newValue, oldValue)) {
                    return
                }
                nextTick(fun(){
                    resize()
                }
                )
            }
            )
            onMounted(fun(){
                init()
            }
            )
            __expose(_uM("init" to init, "resize" to resize))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_badge = resolveEasyComponent("up-badge", GenUniModulesUviewUltraComponentsUpBadgeUpBadgeClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-tabs"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-tabs__wrapper", "style" to _nS(tabsWrapperStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "left"),
                        _cE("view", _uM("class" to "weapp-tw-border up-tabs__wrapper__scroll-view-wrapper"), _uA(
                            _cE("scroll-view", _uM("direction" to if (isTruthy(_ctx.scrollable)) {
                                "horizontal"
                            } else {
                                "none"
                            }
                            , "scroll-left" to scrollLeft.value, "scroll-with-animation" to "", "class" to "up-tabs__wrapper__scroll-view", "show-scrollbar" to false, "ref" to "up-tabs__wrapper__scroll-view", "style" to _nS(tabsWrapperStyle.value)), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-tabs__wrapper__nav", "ref" to "up-tabs__wrapper__nav", "style" to _nS(tabsWrapperStyle.value)), _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                                        return _cE("view", _uM("class" to _nC(_uA(
                                            "weapp-tw-border up-tabs__wrapper__nav__item",
                                            _uA(
                                                "up-tabs__wrapper__nav__item-" + index,
                                                if ((item["disabled"] != null && (item["disabled"] as Boolean))) {
                                                    "up-tabs__wrapper__nav__item--disabled"
                                                } else {
                                                    ""
                                                }
                                                ,
                                                if (innerCurrent.value == index) {
                                                    "up-tabs__wrapper__nav__item-active"
                                                } else {
                                                    ""
                                                }
                                            )
                                        )), "key" to index, "onClick" to fun(){
                                            clickHandler(item, index)
                                        }
                                        , "onLongpress" to fun(){
                                            longPressHandler(item, index)
                                        }
                                        , "ref_for" to true, "ref" to ("up-tabs__wrapper__nav__item-" + index), "style" to _nS(getItemStyle())), _uA(
                                            if (isTrue(_ctx.`$slots`["icon"])) {
                                                renderSlot(_ctx.`$slots`, "icon", _uM("key" to 0, "item" to item, "keyName" to _ctx.keyName, "index" to index))
                                            } else {
                                                _cE(Fragment, _uM("key" to 1), _uA(
                                                    if (item["icon"] != null) {
                                                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-tabs__wrapper__nav__item__prefix-icon"), _uA(
                                                            _cV(_component_up_icon, _uM("name" to item["icon"], "customStyle" to iconCustomStyle.value), null, 8, _uA(
                                                                "name",
                                                                "customStyle"
                                                            ))
                                                        ))
                                                    } else {
                                                        _cC("v-if", true)
                                                    }
                                                ), 64)
                                            }
                                            ,
                                            if (_ctx.`$slots`["content"] != null) {
                                                renderSlot(_ctx.`$slots`, "content", _uM("key" to 2, "item" to item, "keyName" to _ctx.keyName, "index" to index))
                                            } else {
                                                if (isTrue(_ctx.`$slots`["content"] == null && (_ctx.`$slots`["default"] != null || _ctx.`$slots`["\$default"] != null))) {
                                                    renderSlot(_ctx.`$slots`, "default", _uM("key" to 3, "item" to item, "keyName" to _ctx.keyName, "index" to index))
                                                } else {
                                                    _cE("text", _uM("key" to 4, "class" to _nC(_uA(
                                                        _uA(
                                                            if ((item["disabled"] != null && (item["disabled"] as Boolean))) {
                                                                "up-tabs__wrapper__nav__item__text--disabled"
                                                            } else {
                                                                ""
                                                            }
                                                        ),
                                                        "weapp-tw-border up-tabs__wrapper__nav__item__text"
                                                    )), "style" to _nS(textStyle(index))), _tD(item[_ctx.keyName]), 7)
                                                }
                                            }
                                            ,
                                            _cV(_component_up_badge, _uM("show" to getShowValue(item), "isDot" to getBadgePropValue(item, "isDot"), "value" to getBadgePropValue(item, "value"), "max" to getBadgePropValue(item, "max"), "type" to getBadgePropValue(item, "type"), "showZero" to getBadgePropValue(item, "showZero"), "bgColor" to getBadgePropValue(item, "bgColor"), "color" to getBadgePropValue(item, "color"), "shape" to getBadgePropValue(item, "shape"), "numberType" to getBadgePropValue(item, "numberType"), "inverted" to getBadgePropValue(item, "inverted"), "customStyle" to "margin-left: 4px;"), null, 8, _uA(
                                                "show",
                                                "isDot",
                                                "value",
                                                "max",
                                                "type",
                                                "showZero",
                                                "bgColor",
                                                "color",
                                                "shape",
                                                "numberType",
                                                "inverted"
                                            ))
                                        ), 46, _uA(
                                            "onClick",
                                            "onLongpress"
                                        ))
                                    }
                                    ), 128),
                                    _cE("view", _uM("class" to "weapp-tw-border up-tabs__wrapper__nav__line", "ref" to "up-tabs__wrapper__nav__line", "style" to _nS(lineStyle.value)), null, 4)
                                ), 4)
                            ), 12, _uA(
                                "direction",
                                "scroll-left"
                            ))
                        )),
                        renderSlot(_ctx.`$slots`, "right")
                    ), 4)
                ))
            }
        }
        var name = "up-tabs"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "width" to "100%")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "height" to "100%")), "up-tabs__wrapper__nav__item" to _pS(_uM("paddingTop" to 0, "paddingRight" to 11, "paddingBottom" to 0, "paddingLeft" to 11, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexShrink" to 0, "height" to "100%")), "up-tabs__wrapper__nav__item__text" to _pS(_uM("fontSize" to 15, "color" to "#606266", "!whiteSpace" to "nowrap")), "up-tabs__wrapper__nav__item__text--disabled" to _pS(_uM("!color" to "#c8c9cc")), "up-tabs__wrapper__nav__line" to _pS(_uM("height" to 3, "backgroundColor" to "var(--theme-color, #0957de)", "width" to 30, "position" to "absolute", "bottom" to 2, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "transitionProperty" to "transform", "transitionDuration" to "300ms")), "@TRANSITION" to _uM("up-tabs__wrapper__nav__line" to _uM("property" to "transform", "duration" to "300ms")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "longPress" to null, "change" to null, "update:current" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "duration" to _uM("type" to "Number", "default" to 200), "list" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "lineColor" to _uM("type" to "String", "default" to "#3c9cff"), "activeStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to fun(): UTSJSONObject {
            return (_uO("color" to "#303133"))
        }
        ), "inactiveStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to fun(): UTSJSONObject {
            return (_uO("color" to "#606266"))
        }
        ), "lineWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "20px"), "lineHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "3px"), "lineBgSize" to _uM("type" to "String", "default" to "cover"), "itemStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to fun(): UTSJSONObject {
            return (_uO("height" to "44px"))
        }
        ), "scrollable" to _uM("type" to "Boolean", "default" to true), "current" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 0), "keyName" to _uM("type" to "String", "default" to "name"), "iconStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "44px")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "duration",
            "list",
            "lineColor",
            "activeStyle",
            "inactiveStyle",
            "lineWidth",
            "lineHeight",
            "lineBgSize",
            "itemStyle",
            "scrollable",
            "current",
            "keyName",
            "iconStyle",
            "height"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
