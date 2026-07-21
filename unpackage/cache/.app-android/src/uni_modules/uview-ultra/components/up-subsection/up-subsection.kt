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
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
open class GenUniModulesUviewUltraComponentsUpSubsectionUpSubsection : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        onBeforeUnmount(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.list
        }
        , fun() {
            this.init()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.current
        }
        , fun(n: Any) {
            var nn = parseInt(n.toString())
            if (nn !== this.innerCurrent) {
                this.innerCurrent = nn
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to _nC(_uA(
            "up-subsection",
            _uA(
                "up-subsection--" + _ctx.mode
            )
        )), "ref" to "up-subsection", "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle),
            _ctx.wrapperStyle
        ))), _uA(
            _cE("view", _uM("class" to "up-subsection__bar cursor-pointer", "ref" to "up-subsection__bar", "style" to _nS(_ctx.barStyle)), _uA(
                _cE("view", _uM("class" to _nC(_uA(
                    "up-subsection__bar__inner",
                    _uM("up-subsection--button__bar" to (_ctx.mode === "button"), "up-subsection__bar__inner--button" to (_ctx.mode === "button"), "up-subsection__bar--first" to (_ctx.innerCurrent == 0 && _ctx.mode === "subsection"), "up-subsection__bar--center" to (_ctx.innerCurrent > 0 && _ctx.innerCurrent < _ctx.list.length - 1 && _ctx.mode === "subsection"), "up-subsection__bar--last" to (_ctx.innerCurrent == _ctx.list.length - 1 && _ctx.mode === "subsection"))
                )), "style" to _nS(_ctx.innerBarStyle)), null, 6)
            ), 4),
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-subsection__item cursor-pointer",
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
                        if (isTruthy(_ctx.disabled)) {
                            "up-subsection__item--disabled"
                        } else {
                            ""
                        }
                    )
                )), "ref_for" to true, "ref" to ("up-subsection__item--" + index.toString(10)), "style" to _nS(_uA(
                    _ctx.itemStyle(index)
                )), "onClick" to fun(){
                    _ctx.clickHandler(index)
                }
                , "key" to index), _uA(
                    renderSlot(_ctx.`$slots`, "item", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("class" to _nC(_uA(
                                "up-subsection__item__text",
                                _uA(
                                    if (isTruthy(_ctx.disabled)) {
                                        "up-subsection__item__text--disabled"
                                    } else {
                                        ""
                                    }
                                    ,
                                    if ((_ctx.innerCurrent == index && _ctx.mode === "button" && _ctx.activeColor == "#3c9cff")) {
                                        "up-subsection__item__text--active"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(_uA(
                                _ctx.textStyle(index)
                            ))), _tD(_ctx.getText(item)), 7)
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
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var list: UTSArray<Any?> by `$props`
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
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var innerCurrent: Number by `$data`
    open var componentWidth: Number by `$data`
    open var firstTime: Boolean by `$data`
    open var windowResizeCallback: UTSJSONObject by `$data`
    open var wrapperStyle: UTSJSONObject by `$data`
    open var barStyle: Any by `$data`
    open var innerBarStyle: Any by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "innerCurrent" to 0, "componentWidth" to 0, "firstTime" to true, "windowResizeCallback" to _uO(), "wrapperStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 109, 19))
            if (this.mode === "button") {
                style["backgroundColor"] = this.bgColor
            }
            return style
        }
        ), "barStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 118, 19))
            if (this.componentWidth > 0) {
                val itemWidth = this.componentWidth / this.list.length
                style["width"] = itemWidth.toString(10) + "px"
                style["transform"] = "translateX(" + this.innerCurrent * itemWidth + "px)"
            } else {
                if (this.list.length > 0) {
                    style["width"] = ((100.0 as Number) / this.list.length).toString(10) + "%"
                }
                style["transform"] = "translateX(" + this.innerCurrent * 100 + "%)"
            }
            if (this.firstTime) {
                style["transitionDuration"] = "0ms"
            } else {
                style["transitionDuration"] = "300ms"
            }
            style["left"] = "0px"
            style["top"] = "0px"
            style["bottom"] = "0px"
            return style
        }
        ), "innerBarStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 140, 19))
            if (this.mode === "subsection") {
                if (this.activeColor != "#3c9cff") {
                    style["backgroundColor"] = this.activeColor
                }
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
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.innerCurrent = parseInt(this.current.toString())
        this.`$nextTick`(fun(){
            this.resize()
        }
        )
    }
    open var resize = ::gen_resize_fn
    open fun gen_resize_fn() {
        this.getWrapperRect().then(fun(rect: NodeInfo?){
            if (rect != null && rect.width != null && rect.width!! > 0) {
                this.componentWidth = rect.width!!
                if (this.firstTime) {
                    this.`$nextTick`(fun(){
                        setTimeout(fun(){
                            this.firstTime = false
                        }
                        , 50)
                    }
                    )
                }
            }
        }
        )
    }
    open var getWrapperRect = ::gen_getWrapperRect_fn
    open fun gen_getWrapperRect_fn(): UTSPromise<NodeInfo?> {
        return UTSPromise(fun(resolve, _reject){
            uni_createSelectorQuery().`in`(this).select(".up-subsection").boundingClientRect().exec(fun(rect){
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
    open var itemStyle = ::gen_itemStyle_fn
    open fun gen_itemStyle_fn(index: Number): UTSJSONObject {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 204, 10))
        if (this.mode === "subsection") {
            if (this.activeColor != "#3c9cff") {
                style["borderColor"] = this.activeColor
            }
            style["borderWidth"] = "1px"
            style["borderStyle"] = "solid"
        }
        return style
    }
    open var textStyle = ::gen_textStyle_fn
    open fun gen_textStyle_fn(index: Number): UTSJSONObject {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 216, 10))
        if (isTruthy(this.disabled)) {
            style["fontWeight"] = "normal"
            style["fontSize"] = uni.UNI5198058.addUnit(this.fontSize)
            style["color"] = "#c8c9cc"
            return style
        }
        style["fontWeight"] = if (isTruthy(this.bold) && this.innerCurrent === index) {
            "bold"
        } else {
            "normal"
        }
        style["fontSize"] = uni.UNI5198058.addUnit(this.fontSize)
        val item = this.list[index]
        val activeColorTemp = if (UTSAndroid.`typeof`(item) == "object" && item != null) {
            (((item as UTSJSONObject)[this.activeColorKeyName] ?: "") as String)
        } else {
            ""
        }
        val inactiveColorTemp = if (UTSAndroid.`typeof`(item) === "object" && item != null) {
            (((item as UTSJSONObject)[this.inactiveColorKeyName] ?: "") as String)
        } else {
            ""
        }
        if (this.mode === "subsection") {
            style["color"] = if (this.innerCurrent === index) {
                if (activeColorTemp != "") {
                    activeColorTemp
                } else {
                    "#fff"
                }
            } else {
                if (inactiveColorTemp != "") {
                    inactiveColorTemp
                } else {
                    this.inactiveColor
                }
            }
        } else {
            val c = if (activeColorTemp != "") {
                activeColorTemp
            } else {
                this.activeColor
            }
            if (this.innerCurrent == index) {
                if (c != "#3c9cff") {
                    style["color"] = c
                }
            } else {
                style["color"] = if (inactiveColorTemp != "") {
                    inactiveColorTemp
                } else {
                    this.inactiveColor
                }
            }
        }
        return style
    }
    open var getText = ::gen_getText_fn
    open fun gen_getText_fn(item: Any?): String? {
        if (UTSAndroid.`typeof`(item) === "string") {
            return item as String
        } else if (UTSAndroid.`typeof`(item) === "object") {
            var temp = UTSAndroid.consoleDebugError(JSON.parse(JSON.stringify(item)), " at uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue:257") as UTSJSONObject
            return temp.getString(this.keyName)
        } else {
            return "error"
        }
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(index: Number) {
        if (isTruthy(this.disabled)) {
            return
        }
        this.innerCurrent = index
        this.`$emit`("change", index)
    }
    companion object {
        var name = "up-subsection"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-subsection" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "overflow" to "hidden", "width" to "100%", "boxSizing" to "border-box")), "up-subsection--button" to _pS(_uM("height" to 34, "backgroundColor" to "#eeeeef", "paddingTop" to 3, "paddingRight" to 3, "paddingBottom" to 3, "paddingLeft" to 3, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "alignItems" to "stretch")), "up-subsection--button__bar" to _pS(_uM("backgroundColor" to "#ffffff", "!borderTopLeftRadius" to 4, "!borderTopRightRadius" to 4, "!borderBottomRightRadius" to 4, "!borderBottomLeftRadius" to 4)), "up-subsection--subsection" to _pS(_uM("height" to 32)), "up-subsection__bar" to _pS(_uM("position" to "absolute", "left" to 0, "transitionProperty" to "transform,color", "transitionDuration" to "0.3s", "transitionTimingFunction" to "ease-in-out", "display" to "flex", "flexDirection" to "row", "alignItems" to "stretch")), "up-subsection__bar__inner" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "alignSelf" to "stretch", "backgroundColor" to "var(--theme-color, #0957de)")), "up-subsection__bar__inner--button" to _pS(_uM("marginTop" to 3, "marginRight" to 3, "marginBottom" to 3, "marginLeft" to 3, "backgroundColor" to "#ffffff")), "up-subsection__bar--first" to _pS(_uM("borderTopLeftRadius" to 4, "borderBottomLeftRadius" to 4, "borderTopRightRadius" to 0, "borderBottomRightRadius" to 0)), "up-subsection__bar--center" to _pS(_uM("borderTopLeftRadius" to 0, "borderBottomLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomRightRadius" to 0)), "up-subsection__bar--last" to _pS(_uM("borderTopLeftRadius" to 0, "borderBottomLeftRadius" to 0, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4)), "up-subsection__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "center", "alignItems" to "center", "position" to "relative", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-subsection__item--no-border-right" to _pS(_uM("!borderRightWidth" to 0)), "up-subsection__item--first" to _pS(_uM("borderTopLeftRadius" to 4, "borderBottomLeftRadius" to 4)), "up-subsection__item--last" to _pS(_uM("borderTopRightRadius" to 4, "borderBottomRightRadius" to 4)), "up-subsection__item__text" to _pS(_uM("fontSize" to 12, "lineHeight" to "14px", "transitionProperty" to "color", "transitionDuration" to "0.3s")), "up-subsection__item__text--disabled" to _pS(_uM("!color" to "#c8c9cc")), "up-subsection__item__text--active" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "@TRANSITION" to _uM("up-subsection__bar" to _uM("property" to "transform,color", "duration" to "0.3s", "timingFunction" to "ease-in-out"), "up-subsection__item__text" to _uM("property" to "color", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "list" to _uM("type" to "Array", "default" to crtProp__13["list"]), "current" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__13["current"]), "activeColor" to _uM("type" to "String", "default" to crtProp__13["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to crtProp__13["inactiveColor"]), "mode" to _uM("type" to "String", "default" to crtProp__13["mode"]), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__13["fontSize"]), "bold" to _uM("type" to "Boolean", "default" to crtProp__13["bold"]), "bgColor" to _uM("type" to "String", "default" to crtProp__13["bgColor"]), "keyName" to _uM("type" to "String", "default" to crtProp__13["keyName"]), "activeColorKeyName" to _uM("type" to "String", "default" to crtProp__13["activeColorKeyName"]), "inactiveColorKeyName" to _uM("type" to "String", "default" to crtProp__13["inactiveColorKeyName"]), "disabled" to _uM("type" to "Boolean", "default" to crtProp__13["disabled"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
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
            "disabled"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
