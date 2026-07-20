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
open class GenUniModulesUviewUltraComponentsUpTabsUpTabs : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        onBeforeUnmount(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.current
        }
        , fun(newValue: Any) {
            if (newValue != this.innerCurrent) {
                if (UTSAndroid.`typeof`(newValue) == "string") {
                    this.innerCurrent = parseInt(newValue as String)
                } else {
                    this.innerCurrent = newValue as Number
                }
                this.`$nextTick`(fun(){
                    val hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && (this.itemRects[0].width ?: 0) > 0
                    if (hasRect) {
                        this.setLineLeft()
                        this.setScrollLeft()
                    } else {
                        this.resize()
                    }
                }
                )
            }
        }
        , WatchOptions(immediate = true))
        this.`$watch`(fun(): Any? {
            return this.list
        }
        , fun(newValue: UTSArray<UTSJSONObject>, oldValue: UTSArray<UTSJSONObject>?) {
            if (oldValue != null && this.isListEqual(newValue, oldValue)) {
                return
            }
            this.`$nextTick`(fun(){
                this.resize()
            }
            )
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_badge = resolveEasyComponent("up-badge", GenUniModulesUviewUltraComponentsUpBadgeUpBadgeClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-tabs",
            _uA(
                _ctx.customClass
            )
        ))), _uA(
            _cE("view", _uM("class" to "up-tabs__wrapper", "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height)))), _uA(
                renderSlot(_ctx.`$slots`, "left"),
                _cE("view", _uM("class" to "up-tabs__wrapper__scroll-view-wrapper"), _uA(
                    _cE("scroll-view", _uM("direction" to "horizontal", "scroll-x" to _ctx.scrollable, "enable-flex" to true, "scroll-left" to _ctx.scrollLeft, "scroll-with-animation" to "", "class" to "up-tabs__wrapper__scroll-view", "show-scrollbar" to false, "ref" to "up-tabs__wrapper__scroll-view", "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height)))), _uA(
                        _cE("view", _uM("class" to "up-tabs__wrapper__nav", "ref" to "up-tabs__wrapper__nav", "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height)))), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("class" to _nC(_uA(
                                    "up-tabs__wrapper__nav__item",
                                    _uA(
                                        "up-tabs__wrapper__nav__item-" + index,
                                        if ((item["disabled"] != null && (item["disabled"] as Boolean))) {
                                            "up-tabs__wrapper__nav__item--disabled"
                                        } else {
                                            ""
                                        }
                                        ,
                                        if (_ctx.innerCurrent == index) {
                                            "up-tabs__wrapper__nav__item-active"
                                        } else {
                                            ""
                                        }
                                    )
                                )), "key" to index, "onClick" to fun(){
                                    _ctx.clickHandler(item, index)
                                }
                                , "onLongpress" to fun(){
                                    _ctx.longPressHandler(item, index)
                                }
                                , "ref_for" to true, "ref" to ("up-tabs__wrapper__nav__item-" + index), "style" to _nS(_uA(
                                    _ctx.addStyle(_ctx.itemStyle),
                                    _uM("flex" to if (_ctx.scrollable) {
                                        "none"
                                    } else {
                                        "1"
                                    }
                                    )
                                ))), _uA(
                                    if (isTrue(_ctx.`$slots`["icon"])) {
                                        renderSlot(_ctx.`$slots`, "icon", _uM("key" to 0, "item" to item, "keyName" to _ctx.keyName, "index" to index))
                                    } else {
                                        _cE(Fragment, _uM("key" to 1), _uA(
                                            if (isTrue(item["icon"])) {
                                                _cE("view", _uM("key" to 0, "class" to "up-tabs__wrapper__nav__item__prefix-icon"), _uA(
                                                    _cV(_component_up_icon, _uM("name" to item["icon"], "customStyle" to _ctx.addStyle(_ctx.iconStyle)), null, 8, _uA(
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
                                                "up-tabs__wrapper__nav__item__text"
                                            )), "style" to _nS(_uA(
                                                _ctx.textStyle(index)
                                            ))), _tD(item[_ctx.keyName]), 7)
                                        }
                                    }
                                    ,
                                    _cV(_component_up_badge, _uM("show" to _ctx.getShowValue(item), "isDot" to _ctx.getBadgePropValue(item, "isDot"), "value" to _ctx.getBadgePropValue(item, "value"), "max" to _ctx.getBadgePropValue(item, "max"), "type" to _ctx.getBadgePropValue(item, "type"), "showZero" to _ctx.getBadgePropValue(item, "showZero"), "bgColor" to _ctx.getBadgePropValue(item, "bgColor"), "color" to _ctx.getBadgePropValue(item, "color"), "shape" to _ctx.getBadgePropValue(item, "shape"), "numberType" to _ctx.getBadgePropValue(item, "numberType"), "inverted" to _ctx.getBadgePropValue(item, "inverted"), "customStyle" to "margin-left: 4px;"), null, 8, _uA(
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
                            _cE("view", _uM("class" to "up-tabs__wrapper__nav__line", "ref" to "up-tabs__wrapper__nav__line", "style" to _nS(_ctx.lineStyle)), null, 4)
                        ), 4)
                    ), 12, _uA(
                        "scroll-x",
                        "scroll-left"
                    ))
                )),
                renderSlot(_ctx.`$slots`, "right")
            ), 4)
        ), 2)
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
    open var firstTime: Boolean by `$data`
    open var scrollLeft: Number by `$data`
    open var scrollViewWidth: Number by `$data`
    open var lineOffsetLeft: Number by `$data`
    open var tabsRect: NodeInfo by `$data`
    open var innerCurrent: Number by `$data`
    open var moving: Boolean by `$data`
    open var retryCount: Number by `$data`
    open var itemRects: UTSArray<NodeInfo> by `$data`
    open var propsBadge: UTSJSONObject by `$data`
    open var lineStyle: Any by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "firstTime" to true, "scrollLeft" to 0, "scrollViewWidth" to 0, "lineOffsetLeft" to 0, "tabsRect" to NodeInfo(left = 0, right = 0), "innerCurrent" to 0, "moving" to false, "retryCount" to 0, "itemRects" to _uA<NodeInfo>(), "propsBadge" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return default__26["badge"] as UTSJSONObject
        }
        ), "lineStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 163, 11))
            style["width"] = uni.UNI5198058.addUnit(this.lineWidth)
            style["transform"] = "translateX(" + this.lineOffsetLeft + "px)"
            style["transitionDuration"] = "" + (if (this.firstTime) {
                0
            } else {
                this.duration
            }
            ) + "ms"
            style["height"] = uni.UNI5198058.addUnit(this.lineHeight)
            style["backgroundSize"] = this.lineBgSize
            if (this.lineColor != "#3c9cff") {
                style["backgroundColor"] = this.lineColor
            }
            return style
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(kVal: Any): Any {
        return uni.UNI5198058.addStyle(kVal)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(kVal: Any): String {
        return uni.UNI5198058.addUnit(kVal)
    }
    open var getShowValue = ::gen_getShowValue_fn
    open fun gen_getShowValue_fn(itemObj: UTSJSONObject): Boolean {
        if (itemObj["badge"] != null) {
            var itemObjBadge = itemObj["badge"] as UTSJSONObject
            if (itemObjBadge["show"] != null && itemObjBadge["show"] as Boolean || (itemObjBadge["isDot"] != null && itemObjBadge["isDot"] as Boolean) || itemObjBadge["value"] != null) {
                return true
            }
        }
        return false
    }
    open var getBadgePropValue = ::gen_getBadgePropValue_fn
    open fun gen_getBadgePropValue_fn(itemObj: UTSJSONObject, name: String): Any? {
        if (itemObj != null && itemObj["badge"] != null) {
            var itemObjBadge = itemObj["badge"] as UTSJSONObject
            if (itemObjBadge != null && itemObjBadge[name] != null) {
                return if (itemObjBadge[name] != null) {
                    itemObjBadge[name]
                } else {
                    ""
                }
            } else {
                return if ((this.propsBadge != null && this.propsBadge[name] != null)) {
                    this.propsBadge[name]
                } else {
                    ""
                }
            }
        }
        return ""
    }
    open var textStyle = ::gen_textStyle_fn
    open fun gen_textStyle_fn(index: Number): UTSJSONObject {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 218, 11))
        val customeStyle = if ((index == this.innerCurrent)) {
            uni.UNI5198058.addStyle(this.activeStyle)
        } else {
            uni.UNI5198058.addStyle(this.inactiveStyle)
        }
        if (this.list[index]["disabled"] != null && this.list[index]["disabled"] as Boolean) {
            style["color"] = "#c8c9cc"
        }
        return deepMerge(customeStyle, style)
    }
    open var isListEqual = ::gen_isListEqual_fn
    open fun gen_isListEqual_fn(list1: UTSArray<UTSJSONObject>, list2: UTSArray<UTSJSONObject>): Boolean {
        if (list1.length != list2.length) {
            return false
        }
        run {
            var i: Number = 0
            while(i < list1.length){
                val item1 = list1[i]
                val item2 = list2[i]
                if (item1[this.keyName] != item2[this.keyName]) {
                    return false
                }
                i++
            }
        }
        return true
    }
    open var setLineLeft = ::gen_setLineLeft_fn
    open fun gen_setLineLeft_fn() {
        if (this.itemRects.length <= this.innerCurrent) {
            return
        }
        val tabItem = this.itemRects[this.innerCurrent]
        if (tabItem == null) {
            return
        }
        var lineOffsetLeft = this.itemRects.slice(0, this.innerCurrent).reduce(fun(total: Number, curr: NodeInfo): Number {
            return total + (curr.width ?: 0)
        }
        , 0)
        val lineWidth = parseFloat(getPx(this.lineWidth))
        val tabWidth = tabItem.width ?: 0
        val offset = if (tabWidth > 0) {
            (tabWidth - lineWidth) / 2
        } else {
            0
        }
        this.lineOffsetLeft = lineOffsetLeft + offset
        if (this.firstTime) {
            setTimeout(fun(){
                this.firstTime = false
            }
            , 30)
        }
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(item: Any, index: Number) {
        this.`$emit`("click", UTSJSONObject.assign(_uO(), item as UTSJSONObject, _uO("index" to index)), index)
        if (item["disabled"] != null && item["disabled"] as Boolean) {
            return
        }
        if (this.innerCurrent == index) {
            return
        }
        this.innerCurrent = index
        this.`$nextTick`(fun(){
            val hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && (this.itemRects[0].width ?: 0) > 0
            if (hasRect) {
                this.setLineLeft()
                this.setScrollLeft()
            } else {
                this.resize()
            }
        }
        )
        this.`$emit`("update:current", index)
        this.`$emit`("change", UTSJSONObject.assign(_uO(), item, _uO("index" to index)), index)
    }
    open var longPressHandler = ::gen_longPressHandler_fn
    open fun gen_longPressHandler_fn(item: UTSJSONObject, index: Number) {
        this.`$emit`("longPress", UTSJSONObject.assign(_uO(), item, _uO("index" to index)))
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.retryCount = 0
        sleep(30).then(fun(){
            this.resize()
        }
        )
    }
    open var setScrollLeft = ::gen_setScrollLeft_fn
    open fun gen_setScrollLeft_fn() {
        if (this.innerCurrent < 0) {
            this.innerCurrent = 0
        }
        if (this.itemRects.length <= this.innerCurrent) {
            return
        }
        val tabRect = this.itemRects[this.innerCurrent]
        if (tabRect == null) {
            return
        }
        val offsetLeft = this.itemRects.slice(0, this.innerCurrent).reduce(fun(total: Number, curr: NodeInfo): Number {
            return total + (curr.width ?: 0)
        }
        , 0)
        val windowWidth = getWindowInfo().windowWidth
        var scrollLeft = offsetLeft - ((this.tabsRect?.width ?: 0) - (tabRect.width ?: 0)) / 2 - (windowWidth - (this.tabsRect?.right ?: 0)) / 2 + (this.tabsRect?.left ?: 0) / 2
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - (this.tabsRect?.width ?: 0))
        this.scrollLeft = Math.max(0, scrollLeft)
    }
    open var resize = ::gen_resize_fn
    open fun gen_resize_fn() {
        if ((this.`$props`["list"] as UTSArray<UTSJSONObject>).length == 0) {
            return
        }
        UTSPromise.all(_uA(
            this.getTabsRect(),
            this.getAllItemRect()
        )).then(fun(res: UTSArray<UTSArray<NodeInfo>>){
            var tabsRect = (res[0] as UTSArray<NodeInfo>)[0]
            var itemRect = res[1] as UTSArray<NodeInfo>
            val firstWidth = if ((itemRect.length > 0 && itemRect[0] != null)) {
                (itemRect[0].width ?: 0)
            } else {
                0
            }
            var minWidthExpected: Number = 30
            if (this.list.length > 0) {
                val firstItemName = this.list[0][this.keyName]
                if (firstItemName != null) {
                    val nameStr = firstItemName.toString()
                    minWidthExpected = nameStr.length * 12 + 20
                }
            }
            if ((firstWidth < minWidthExpected) && this.retryCount < 5) {
                this.retryCount++
                setTimeout(fun(){
                    this.resize()
                }
                , 50)
                return
            }
            if ((tabsRect.left ?: 0) > (tabsRect.width ?: 0)) {
                tabsRect.right = (tabsRect.right ?: 0) - Math.floor((tabsRect?.left ?: 0) / (tabsRect?.width ?: 0)) * (tabsRect?.width ?: 0)
                tabsRect.left = (tabsRect.left ?: 0) % (tabsRect.width ?: 1)
            }
            this.tabsRect = tabsRect
            this.itemRects = itemRect
            this.scrollViewWidth = 0
            itemRect.map(fun(item: NodeInfo, index: Number){
                if (item != null) {
                    this.scrollViewWidth = this.scrollViewWidth + (item.width ?: 0)
                    this.list[index]["rect"] = item
                }
            }
            )
            this.setLineLeft()
            this.setScrollLeft()
        }
        )
    }
    open var getTabsRect = ::gen_getTabsRect_fn
    open fun gen_getTabsRect_fn(): UTSPromise<UTSArray<NodeInfo>> {
        return UTSPromise(fun(resolve, _reject){
            this.queryRect("up-tabs__wrapper__scroll-view").then(fun(size: NodeInfo){
                resolve(_uA(
                    size
                ))
            }
            )
        }
        )
    }
    open var getAllItemRect = ::gen_getAllItemRect_fn
    open fun gen_getAllItemRect_fn(): UTSPromise<UTSArray<NodeInfo>> {
        return UTSPromise(fun(resolve, _reject){
            val promiseAllArr = (this.`$props`["list"] as UTSArray<UTSJSONObject>).map(fun(item: UTSJSONObject, index: Number): UTSPromise<NodeInfo> {
                return this.queryRect("up-tabs__wrapper__nav__item-" + index)
            }
            )
            UTSPromise.all(promiseAllArr).then(fun(sizes: UTSArray<NodeInfo>){
                return resolve(sizes)
            }
            )
        }
        )
    }
    open var queryRect = ::gen_queryRect_fn
    open fun gen_queryRect_fn(el: String): UTSPromise<NodeInfo> {
        return UTSPromise(fun(resolve, _reject){
            this.upGetRect("." + el).then(fun(size: NodeInfo){
                resolve(size)
            }
            )
        }
        )
    }
    companion object {
        var name = "up-tabs"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "width" to "100%")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "height" to "100%")), "up-tabs__wrapper__nav__item" to _pS(_uM("paddingTop" to 0, "paddingRight" to 11, "paddingBottom" to 0, "paddingLeft" to 11, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexShrink" to 0, "height" to "100%")), "up-tabs__wrapper__nav__item__text" to _pS(_uM("fontSize" to 15, "color" to "#606266", "!whiteSpace" to "nowrap")), "up-tabs__wrapper__nav__item__text--disabled" to _pS(_uM("!color" to "#c8c9cc")), "up-tabs__wrapper__nav__line" to _pS(_uM("height" to 3, "backgroundColor" to "var(--theme-color, #0957de)", "width" to 30, "position" to "absolute", "bottom" to 2, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "transitionProperty" to "transform", "transitionDuration" to "300ms")), "@TRANSITION" to _uM("up-tabs__wrapper__nav__line" to _uM("property" to "transform", "duration" to "300ms")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "longPress" to null, "change" to null, "update:current" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "duration" to _uM("type" to "Number", "default" to crtProps["duration"]), "list" to _uM("type" to "Array", "default" to crtProps["list"]), "lineColor" to _uM("type" to "String", "default" to crtProps["lineColor"]), "activeStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "default" to crtProps["activeStyle"]), "inactiveStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "default" to crtProps["inactiveStyle"]), "lineWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProps["lineWidth"]), "lineHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProps["lineHeight"]), "lineBgSize" to _uM("type" to "String", "default" to crtProps["lineBgSize"]), "itemStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "default" to crtProps["itemStyle"]), "scrollable" to _uM("type" to "Boolean", "default" to crtProps["scrollable"]), "current" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to crtProps["current"]), "keyName" to _uM("type" to "String", "default" to crtProps["keyName"]), "iconStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "default" to crtProps["iconStyle"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to if (crtProps["height"] != null) {
            crtProps["height"]
        } else {
            "44px"
        }
        )))
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
