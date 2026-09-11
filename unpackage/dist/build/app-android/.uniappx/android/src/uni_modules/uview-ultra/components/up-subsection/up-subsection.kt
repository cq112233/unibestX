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
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
open class GenUniModulesUviewUltraComponentsUpSubsectionUpSubsection : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var list: UTSArray<Any> by `$props`
    open var current: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var mode: String by `$props`
    open var fontSize: Any by `$props`
    open var bold: Boolean by `$props`
    open var bgColor: String by `$props`
    open var keyName: String by `$props`
    open var activeColorKeyName: String by `$props`
    open var inactiveColorKeyName: String by `$props`
    open var disabled: Boolean by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSubsectionUpSubsection) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSubsectionUpSubsection
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val innerCurrent = ref<Number>(parseInt(props.current.toString()))
            val componentWidth = ref<Number>(0)
            val firstTime = ref<Boolean>(true)
            watch(fun(): Any {
                return props.current
            }
            , fun(n: Any){
                val nn = parseInt(n.toString())
                if (nn != innerCurrent.value) {
                    innerCurrent.value = nn
                }
            }
            )
            watch(fun(): UTSArray<Any> {
                return props.list
            }
            , fun(){
                init()
            }
            )
            val wrapperStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.mode == "button") {
                    style["backgroundColor"] = props.bgColor
                }
                return style
            }
            )
            val computedRootStyle = computed(fun(): UTSJSONObject {
                val custom = addStyle(props.customStyle) as UTSJSONObject
                val wrapper = wrapperStyle.value
                return deepMerge(wrapper, custom) as UTSJSONObject
            }
            )
            val barStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (componentWidth.value > 0) {
                    val itemWidth = componentWidth.value / props.list.length
                    style["width"] = itemWidth.toString(10) + "px"
                    style["transform"] = "translateX(" + innerCurrent.value * itemWidth + "px)"
                } else {
                    if (props.list.length > 0) {
                        style["width"] = ((100.0 as Number) / props.list.length).toString(10) + "%"
                    }
                    style["transform"] = "translateX(" + innerCurrent.value * 100 + "%)"
                }
                if (firstTime.value) {
                    style["transitionDuration"] = "0ms"
                } else {
                    style["transitionDuration"] = "300ms"
                }
                style["left"] = "0px"
                style["top"] = "0px"
                style["bottom"] = "0px"
                return style
            }
            )
            val innerBarStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.mode === "subsection") {
                    if (props.activeColor != "#3c9cff") {
                        style["backgroundColor"] = props.activeColor
                    }
                }
                return style
            }
            )
            fun gen_getWrapperRect_fn(): UTSPromise<NodeInfo?> {
                return UTSPromise(fun(resolve, _reject){
                    uni_createSelectorQuery().`in`(instance?.proxy).select(".up-subsection").boundingClientRect().exec(fun(rect){
                        if (rect != null && rect.length > 0) {
                            resolve(rect[0] as NodeInfo)
                        } else {
                            resolve(null)
                        }
                    }
                    )
                }
                )
            }
            val getWrapperRect = ::gen_getWrapperRect_fn
            fun gen_resize_fn() {
                getWrapperRect().then(fun(rect: NodeInfo?){
                    if (rect != null && rect.width != null && rect.width!! > 0) {
                        componentWidth.value = rect.width!!
                        if (firstTime.value) {
                            nextTick(fun(){
                                setTimeout(fun(){
                                    firstTime.value = false
                                }
                                , 50)
                            }
                            )
                        }
                    }
                }
                )
            }
            val resize = ::gen_resize_fn
            fun gen_init_fn() {
                innerCurrent.value = parseInt(props.current.toString())
                nextTick(fun(){
                    resize()
                }
                )
            }
            val init = ::gen_init_fn
            fun gen_itemStyle_fn(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.mode === "subsection") {
                    if (props.activeColor != "#3c9cff") {
                        style["borderColor"] = props.activeColor
                    }
                    style["borderWidth"] = "1px"
                    style["borderStyle"] = "solid"
                }
                return style
            }
            val itemStyle = ::gen_itemStyle_fn
            fun gen_textStyle_fn(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.disabled) {
                    style["fontWeight"] = "normal"
                    style["fontSize"] = addUnit(props.fontSize)
                    style["color"] = "#c8c9cc"
                    return style
                }
                style["fontWeight"] = if (props.bold && innerCurrent.value === index) {
                    "bold"
                } else {
                    "normal"
                }
                style["fontSize"] = addUnit(props.fontSize)
                val item = props.list[index]
                val activeColorTemp = if (UTSAndroid.`typeof`(item) == "object" && item != null) {
                    (((item as UTSJSONObject)[props.activeColorKeyName] ?: "") as String)
                } else {
                    ""
                }
                val inactiveColorTemp = if (UTSAndroid.`typeof`(item) === "object" && item != null) {
                    (((item as UTSJSONObject)[props.inactiveColorKeyName] ?: "") as String)
                } else {
                    ""
                }
                if (props.mode === "subsection") {
                    style["color"] = if (innerCurrent.value === index) {
                        if (activeColorTemp != "") {
                            activeColorTemp
                        } else {
                            "#fff"
                        }
                    } else {
                        if (inactiveColorTemp != "") {
                            inactiveColorTemp
                        } else {
                            props.inactiveColor
                        }
                    }
                } else {
                    val c = if (activeColorTemp != "") {
                        activeColorTemp
                    } else {
                        props.activeColor
                    }
                    if (innerCurrent.value == index) {
                        if (c != "#3c9cff") {
                            style["color"] = c
                        }
                    } else {
                        style["color"] = if (inactiveColorTemp != "") {
                            inactiveColorTemp
                        } else {
                            props.inactiveColor
                        }
                    }
                }
                return style
            }
            val textStyle = ::gen_textStyle_fn
            fun gen_getText_fn(item: Any?): String? {
                if (UTSAndroid.`typeof`(item) === "string") {
                    return item as String
                } else if (UTSAndroid.`typeof`(item) === "object" && item != null) {
                    var temp = JSON.parse(JSON.stringify(item)) as UTSJSONObject
                    return temp.getString(props.keyName)
                } else {
                    return "error"
                }
            }
            val getText = ::gen_getText_fn
            fun gen_clickHandler_fn(index: Number) {
                if (props.disabled) {
                    return
                }
                innerCurrent.value = index
                emit("change", index)
            }
            val clickHandler = ::gen_clickHandler_fn
            onMounted(fun(){
                init()
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-subsection",
                    _uA(
                        "up-subsection--" + _ctx.mode
                    )
                )), "ref" to "upSubsectionRef", "style" to _nS(computedRootStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-subsection__bar wtu-cqyuct-0", "style" to _nS(barStyle.value)), _uA(
                        _cE("view", _uM("class" to _nC(_uA(
                            "weapp-tw-border up-subsection__bar__inner",
                            _uM("up-subsection--button__bar" to (_ctx.mode == "button"), "up-subsection__bar__inner--button" to (_ctx.mode == "button"), "up-subsection__bar--first" to (innerCurrent.value == 0 && _ctx.mode == "subsection"), "up-subsection__bar--center" to (innerCurrent.value > 0 && innerCurrent.value < _ctx.list.length - 1 && _ctx.mode == "subsection"), "up-subsection__bar--last" to (innerCurrent.value == _ctx.list.length - 1 && _ctx.mode == "subsection"))
                        )), "style" to _nS(innerBarStyle.value)), null, 6)
                    ), 4),
                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to _nC(_uA(
                            "weapp-tw-border up-subsection__item wtu-cqyuct-0",
                            _uA(
                                "up-subsection__item--" + index.toString(10),
                                if (index < _ctx.list.length - 1) {
                                    "up-subsection__item--no-border-right"
                                } else {
                                    ""
                                }
                                ,
                                if (index == 0) {
                                    "up-subsection__item--first"
                                } else {
                                    ""
                                }
                                ,
                                if (index == _ctx.list.length - 1) {
                                    "up-subsection__item--last"
                                } else {
                                    ""
                                }
                                ,
                                if (_ctx.disabled) {
                                    "up-subsection__item--disabled"
                                } else {
                                    ""
                                }
                            )
                        )), "style" to _nS(itemStyle(index)), "onClick" to fun(){
                            clickHandler(index)
                        }
                        , "key" to index), _uA(
                            renderSlot(_ctx.`$slots`, "item", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "weapp-tw-border up-subsection__item__text",
                                        _uA(
                                            if (_ctx.disabled) {
                                                "up-subsection__item__text--disabled"
                                            } else {
                                                ""
                                            }
                                            ,
                                            if ((innerCurrent.value == index && _ctx.mode == "button" && _ctx.activeColor == "#3c9cff")) {
                                                "up-subsection__item__text--active"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "style" to _nS(textStyle(index))), _tD(getText(item)), 7)
                                )
                            }
                            )
                        ), 14, _uA(
                            "onClick"
                        ))
                    }
                    ), 128)
                ), 6)
            }
        }
        var name = "up-subsection"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-subsection" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "overflow" to "hidden", "width" to "100%", "boxSizing" to "border-box")), "up-subsection--button" to _pS(_uM("height" to 32, "backgroundColor" to "#eeeeef", "paddingTop" to 3, "paddingRight" to 3, "paddingBottom" to 3, "paddingLeft" to 3, "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3, "alignItems" to "stretch")), "up-subsection--button__bar" to _pS(_uM("backgroundColor" to "#ffffff", "!borderTopLeftRadius" to 3, "!borderTopRightRadius" to 3, "!borderBottomRightRadius" to 3, "!borderBottomLeftRadius" to 3)), "up-subsection--subsection" to _pS(_uM("height" to 30)), "up-subsection__bar" to _pS(_uM("position" to "absolute", "transitionProperty" to "transform,color", "transitionDuration" to "0.3s", "transitionTimingFunction" to "ease-in-out")), "up-subsection__bar--first" to _pS(_uM("borderTopLeftRadius" to 3, "borderBottomLeftRadius" to 3)), "up-subsection__bar--center" to _pS(_uM("borderTopLeftRadius" to 0, "borderBottomLeftRadius" to 0)), "up-subsection__bar--last" to _pS(_uM("borderTopRightRadius" to 3, "borderBottomRightRadius" to 3)), "up-subsection__bar__inner" to _pS(_uM("height" to "100%", "backgroundColor" to "var(--theme-color)")), "up-subsection__bar__inner--button" to _pS(_uM("!borderTopLeftRadius" to 3, "!borderTopRightRadius" to 3, "!borderBottomRightRadius" to 3, "!borderBottomLeftRadius" to 3, "backgroundColor" to "#ffffff", "boxShadow" to "0 1px 3px rgba(0, 0, 0, 0.1)")), "up-subsection__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to "100%", "alignItems" to "center", "justifyContent" to "center", "position" to "relative")), "up-subsection__item--no-border-right" to _pS(_uM("!borderRightWidth" to 0)), "up-subsection__item--first" to _pS(_uM("borderTopLeftRadius" to 3, "borderBottomLeftRadius" to 3)), "up-subsection__item--last" to _pS(_uM("borderTopRightRadius" to 3, "borderBottomRightRadius" to 3)), "up-subsection__item__text" to _pS(_uM("fontSize" to 12, "lineHeight" to "12px", "transitionProperty" to "color", "transitionDuration" to "0.3s")), "up-subsection__item__text--active" to _pS(_uM("color" to "var(--theme-color)")), "up-subsection__item__text--disabled" to _pS(_uM("color" to "#c8c9cc")), "wtu-cqyuct-0" to _pS(_uM("cursor" to "pointer")), "@TRANSITION" to _uM("up-subsection__bar" to _uM("property" to "transform,color", "duration" to "0.3s", "timingFunction" to "ease-in-out"), "up-subsection__item__text" to _uM("property" to "color", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "list" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "current" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "activeColor" to _uM("type" to "String", "default" to "#3c9cff"), "inactiveColor" to _uM("type" to "String", "default" to "#303133"), "mode" to _uM("type" to "String", "default" to "button"), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 12), "bold" to _uM("type" to "Boolean", "default" to true), "bgColor" to _uM("type" to "String", "default" to "#eeeeef"), "keyName" to _uM("type" to "String", "default" to "name"), "activeColorKeyName" to _uM("type" to "String", "default" to "activeColor"), "inactiveColorKeyName" to _uM("type" to "String", "default" to "inactiveColor"), "disabled" to _uM("type" to "Boolean", "default" to false), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "list",
            "current",
            "activeColor",
            "inactiveColor",
            "mode",
            "fontSize",
            "bold",
            "bgColor",
            "keyName",
            "activeColorKeyName",
            "inactiveColorKeyName",
            "disabled",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
