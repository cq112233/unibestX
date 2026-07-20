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
open class GenUniModulesUviewUltraComponentsUpCalendarHeader : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-calendar-header up-border-bottom"), _uA(
            if (isTrue(_ctx.showTitle)) {
                _cE("text", _uM("key" to 0, "class" to "up-calendar-header__title"), _tD(_ctx.title), 1)
            } else {
                _cC("v-if", true)
            }
            ,
            if (isTrue(_ctx.showSubtitle)) {
                _cE("view", _uM("key" to 1, "class" to "up-calendar-header__subtitle-wrap"), _uA(
                    if (isTrue(_ctx.showSwitch)) {
                        _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                            "up-calendar-header__switch",
                            _uM("up-calendar-header__switch--disabled" to _ctx.prevYearDisabled)
                        )), "onClick" to _ctx.prevYear), "«", 10, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    },
                    if (isTrue(_ctx.showSwitch)) {
                        _cE("text", _uM("key" to 1, "class" to _nC(_uA(
                            "up-calendar-header__switch",
                            _uM("up-calendar-header__switch--disabled" to _ctx.prevDisabled)
                        )), "onClick" to _ctx.prev), "‹", 10, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    },
                    _cE("text", _uM("class" to "up-calendar-header__subtitle"), _tD(_ctx.subtitle), 1),
                    if (isTrue(_ctx.showSwitch)) {
                        _cE("text", _uM("key" to 2, "class" to _nC(_uA(
                            "up-calendar-header__switch",
                            _uM("up-calendar-header__switch--disabled" to _ctx.nextDisabled)
                        )), "onClick" to _ctx.next), "›", 10, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    },
                    if (isTrue(_ctx.showSwitch)) {
                        _cE("text", _uM("key" to 3, "class" to _nC(_uA(
                            "up-calendar-header__switch",
                            _uM("up-calendar-header__switch--disabled" to _ctx.nextYearDisabled)
                        )), "onClick" to _ctx.nextYear), "»", 10, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    },
                    if (isTrue(_ctx.showToday)) {
                        _cE("text", _uM("key" to 4, "class" to _nC(_uA(
                            "up-calendar-header__today",
                            _uM("up-calendar-header__today--disabled" to _ctx.todayDisabled)
                        )), "onClick" to _ctx.today), _tD(_ctx.todayText), 11, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            } else {
                _cC("v-if", true)
            }
            ,
            _cE("view", _uM("class" to "up-calendar-header__weekdays"), _uA(
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "一"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "二"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "三"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "四"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "五"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "六"),
                _cE("text", _uM("class" to "up-calendar-header__weekdays__weekday"), "日")
            ))
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: String by `$props`
    open var subtitle: String by `$props`
    open var showTitle: Boolean by `$props`
    open var showSubtitle: Boolean by `$props`
    open var showSwitch: Boolean by `$props`
    open var prevDisabled: Boolean by `$props`
    open var nextDisabled: Boolean by `$props`
    open var prevYearDisabled: Boolean by `$props`
    open var nextYearDisabled: Boolean by `$props`
    open var showToday: Boolean by `$props`
    open var todayText: String by `$props`
    open var todayDisabled: Boolean by `$props`
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
    open var prev = ::gen_prev_fn
    open fun gen_prev_fn() {
        if (!this.prevDisabled) {
            this.`$emit`("prev")
        }
    }
    open var next = ::gen_next_fn
    open fun gen_next_fn() {
        if (!this.nextDisabled) {
            this.`$emit`("next")
        }
    }
    open var prevYear = ::gen_prevYear_fn
    open fun gen_prevYear_fn() {
        if (!this.prevYearDisabled) {
            this.`$emit`("prevYear")
        }
    }
    open var nextYear = ::gen_nextYear_fn
    open fun gen_nextYear_fn() {
        if (!this.nextYearDisabled) {
            this.`$emit`("nextYear")
        }
    }
    open var today = ::gen_today_fn
    open fun gen_today_fn() {
        if (!this.todayDisabled) {
            this.`$emit`("today")
        }
    }
    companion object {
        var name = "up-calendar-header"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-calendar-header" to _pS(_uM("display" to "flex", "flexDirection" to "column", "paddingBottom" to 4)), "up-calendar-header__title" to _pS(_uM("fontSize" to 16, "color" to "#303133", "textAlign" to "center", "height" to 42, "lineHeight" to "42px", "fontWeight" to "bold")), "up-calendar-header__subtitle-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "height" to 40)), "up-calendar-header__subtitle" to _pS(_uM("fontSize" to 14, "color" to "#303133", "textAlign" to "center", "fontWeight" to "bold", "minWidth" to 120)), "up-calendar-header__switch" to _pS(_uM("width" to 44, "height" to 40, "lineHeight" to "40px", "textAlign" to "center", "color" to "#303133", "fontSize" to 22, "fontWeight" to "bold", "flexShrink" to 0)), "up-calendar-header__switch--disabled" to _pS(_uM("opacity" to 0.35)), "up-calendar-header__weekdays" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-between")), "up-calendar-header__weekdays__weekday" to _pS(_uM("fontSize" to 13, "color" to "#303133", "lineHeight" to "30px", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "textAlign" to "center")), "up-calendar-header__today" to _pS(_uM("marginLeft" to 4, "height" to 28, "lineHeight" to "28px", "paddingTop" to 0, "paddingRight" to 10, "paddingBottom" to 0, "paddingLeft" to 10, "borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14, "fontSize" to 13, "color" to "var(--theme-color, #0957de)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)", "flexShrink" to 0)), "up-calendar-header__today--disabled" to _pS(_uM("opacity" to 0.35)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to "String", "default" to ""), "subtitle" to _uM("type" to "String", "default" to ""), "showTitle" to _uM("type" to "Boolean", "default" to true), "showSubtitle" to _uM("type" to "Boolean", "default" to true), "showSwitch" to _uM("type" to "Boolean", "default" to false), "prevDisabled" to _uM("type" to "Boolean", "default" to false), "nextDisabled" to _uM("type" to "Boolean", "default" to false), "prevYearDisabled" to _uM("type" to "Boolean", "default" to false), "nextYearDisabled" to _uM("type" to "Boolean", "default" to false), "showToday" to _uM("type" to "Boolean", "default" to true), "todayText" to _uM("type" to "String", "default" to "今天"), "todayDisabled" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "subtitle",
            "showTitle",
            "showSubtitle",
            "showSwitch",
            "prevDisabled",
            "nextDisabled",
            "prevYearDisabled",
            "nextYearDisabled",
            "showToday",
            "todayText",
            "todayDisabled"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
