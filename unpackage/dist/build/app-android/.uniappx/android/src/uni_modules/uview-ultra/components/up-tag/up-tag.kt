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
open class GenUniModulesUviewUltraComponentsUpTagUpTag : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var type: String by `$props`
    open var disabled: Any by `$props`
    open var size: String by `$props`
    open var shape: String by `$props`
    open var text: Any by `$props`
    open var bgColor: String by `$props`
    open var color: String by `$props`
    open var borderColor: String by `$props`
    open var closeColor: String by `$props`
    open var name: Any by `$props`
    open var plainFill: Boolean by `$props`
    open var plain: Boolean by `$props`
    open var closable: Boolean by `$props`
    open var show: Boolean by `$props`
    open var icon: String by `$props`
    open var iconColor: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTagUpTag) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTagUpTag
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val style = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val s: UTSJSONObject = _uO()
                if (props.bgColor != "") {
                    s["backgroundColor"] = props.bgColor
                }
                if (props.color != "") {
                    s["color"] = props.color
                }
                if (props.borderColor != "") {
                    s["borderColor"] = props.borderColor
                }
                return s
            }
            )
            val tagMergedStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val marginObj: UTSJSONObject = _uO("marginRight" to if (props.closable) {
                    "10px"
                } else {
                    "0px"
                }
                , "marginTop" to if (props.closable) {
                    "10px"
                } else {
                    "0px"
                }
                )
                return deepMerge(marginObj, style.value) as UTSJSONObject
            }
            )
            val textColor = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val s: UTSJSONObject = _uO()
                if (props.color != "") {
                    s["color"] = props.color
                }
                return s
            }
            )
            val closeStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("backgroundColor" to props.closeColor)
            }
            )
            val isImageIcon = computed<Boolean>(fun(): Boolean {
                return image(props.icon)
            }
            )
            val imgStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val width = if (props.size == "large") {
                    "17px"
                } else {
                    if (props.size == "medium") {
                        "15px"
                    } else {
                        "13px"
                    }
                }
                return _uO("width" to width, "height" to width)
            }
            )
            val closeSize = computed<String>(fun(): String {
                return if (props.size == "large") {
                    "15px"
                } else {
                    if (props.size == "medium") {
                        "13px"
                    } else {
                        "12px"
                    }
                }
            }
            )
            val iconSize = computed<String>(fun(): String {
                return if (props.size == "large") {
                    "21px"
                } else {
                    if (props.size == "medium") {
                        "19px"
                    } else {
                        "16px"
                    }
                }
            }
            )
            val elIconColor = computed<String>(fun(): String {
                return if (props.iconColor != "") {
                    props.iconColor
                } else {
                    if (props.plain) {
                        props.type
                    } else {
                        "#ffffff"
                    }
                }
            }
            )
            fun gen_closeHandler_fn(): Unit {
                emit("close", props.name.toString())
            }
            val closeHandler = ::gen_closeHandler_fn
            fun gen_clickHandler_fn(): Unit {
                emit("click", props.name.toString())
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cV(_component_up_transition, _uM("mode" to "fade", "show" to _ctx.show, "style" to _nS(_uM("display" to "flex"))), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-tag-wrapper wtu-f02bob-0"), _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-tag",
                                _uA(
                                    "up-tag--" + _ctx.shape,
                                    if (!_ctx.plain) {
                                        "up-tag--" + _ctx.type
                                    } else {
                                        ""
                                    }
                                    ,
                                    if (_ctx.plain) {
                                        "up-tag--" + _ctx.type + "--plain"
                                    } else {
                                        ""
                                    }
                                    ,
                                    "up-tag--" + _ctx.size,
                                    if ((_ctx.plain && _ctx.plainFill)) {
                                        "up-tag--" + _ctx.type + "--plain--fill"
                                    } else {
                                        ""
                                    }
                                )
                            )), "onClick" to withModifiers(clickHandler, _uA(
                                "stop"
                            )), "style" to _nS(tagMergedStyle.value)), _uA(
                                renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (_ctx.icon != "") {
                                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-tag__icon"), _uA(
                                                if (isTrue(isImageIcon.value)) {
                                                    _cE("image", _uM("key" to 0, "src" to _ctx.icon, "style" to _nS(imgStyle.value)), null, 12, _uA(
                                                        "src"
                                                    ))
                                                } else {
                                                    _cV(_component_up_icon, _uM("key" to 1, "color" to elIconColor.value, "name" to _ctx.icon, "size" to iconSize.value), null, 8, _uA(
                                                        "color",
                                                        "name",
                                                        "size"
                                                    ))
                                                }
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                ),
                                renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to _nC(_uA(
                                            "weapp-tw-border up-tag__text",
                                            _uA(
                                                "up-tag__text--" + _ctx.type,
                                                if (_ctx.plain) {
                                                    "up-tag__text--" + _ctx.type + "--plain"
                                                } else {
                                                    ""
                                                }
                                                ,
                                                "up-tag__text--" + _ctx.size
                                            )
                                        )), "style" to _nS(textColor.value)), _tD(_ctx.text), 7)
                                    )
                                }
                                )
                            ), 6),
                            if (isTrue(_ctx.closable)) {
                                _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                    "weapp-tw-border up-tag__close",
                                    _uA(
                                        "up-tag__close--" + _ctx.size
                                    )
                                )), "onClick" to withModifiers(closeHandler, _uA(
                                    "stop"
                                )), "style" to _nS(closeStyle.value)), _uA(
                                    _cV(_component_up_icon, _uM("name" to "close", "size" to closeSize.value, "color" to "#ffffff"), null, 8, _uA(
                                        "size"
                                    ))
                                ), 6)
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    )
                }
                ), "_" to 3), 8, _uA(
                    "show",
                    "style"
                ))
            }
        }
        var name = "up-tag"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tag-wrapper" to _pS(_uM("position" to "relative")), "up-tag" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-tag--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-tag--square" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-tag__icon" to _pS(_uM("marginRight" to 4)), "up-tag__text--mini" to _pS(_uM("fontSize" to 12, "lineHeight" to "12px")), "up-tag__text--medium" to _pS(_uM("fontSize" to 13, "lineHeight" to "13px")), "up-tag__text--large" to _pS(_uM("fontSize" to 15, "lineHeight" to "15px")), "up-tag--primary" to _pS(_uM("backgroundColor" to "var(--theme-color)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "var(--theme-color)", "borderRightColor" to "var(--theme-color)", "borderBottomColor" to "var(--theme-color)", "borderLeftColor" to "var(--theme-color)")), "up-tag--primary--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "var(--theme-color)", "borderRightColor" to "var(--theme-color)", "borderBottomColor" to "var(--theme-color)", "borderLeftColor" to "var(--theme-color)")), "up-tag--primary--plain--fill" to _pS(_uM("backgroundColor" to "#ecf5ff")), "up-tag__text--primary" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--primary--plain" to _pS(_uM("color" to "var(--theme-color)")), "up-tag--error" to _pS(_uM("backgroundColor" to "#f56c6c", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f56c6c", "borderRightColor" to "#f56c6c", "borderBottomColor" to "#f56c6c", "borderLeftColor" to "#f56c6c")), "up-tag--error--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f56c6c", "borderRightColor" to "#f56c6c", "borderBottomColor" to "#f56c6c", "borderLeftColor" to "#f56c6c")), "up-tag--error--plain--fill" to _pS(_uM("backgroundColor" to "#fef0f0")), "up-tag__text--error" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--error--plain" to _pS(_uM("color" to "#f56c6c")), "up-tag--warning" to _pS(_uM("backgroundColor" to "#f9ae3d", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f9ae3d", "borderRightColor" to "#f9ae3d", "borderBottomColor" to "#f9ae3d", "borderLeftColor" to "#f9ae3d")), "up-tag--warning--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f9ae3d", "borderRightColor" to "#f9ae3d", "borderBottomColor" to "#f9ae3d", "borderLeftColor" to "#f9ae3d")), "up-tag--warning--plain--fill" to _pS(_uM("backgroundColor" to "#fdf6ec")), "up-tag__text--warning" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--warning--plain" to _pS(_uM("color" to "#f9ae3d")), "up-tag--success" to _pS(_uM("backgroundColor" to "#5ac725", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderBottomColor" to "#5ac725", "borderLeftColor" to "#5ac725")), "up-tag--success--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderBottomColor" to "#5ac725", "borderLeftColor" to "#5ac725")), "up-tag--success--plain--fill" to _pS(_uM("backgroundColor" to "#f5fff0")), "up-tag__text--success" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--success--plain" to _pS(_uM("color" to "#5ac725")), "up-tag--info" to _pS(_uM("backgroundColor" to "#909399", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#909399", "borderRightColor" to "#909399", "borderBottomColor" to "#909399", "borderLeftColor" to "#909399")), "up-tag--info--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#909399", "borderRightColor" to "#909399", "borderBottomColor" to "#909399", "borderLeftColor" to "#909399")), "up-tag--info--plain--fill" to _pS(_uM("backgroundColor" to "#f4f4f5")), "up-tag__text--info" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--info--plain" to _pS(_uM("color" to "#909399")), "up-tag--mini" to _pS(_uM("height" to 19, "paddingTop" to 0, "paddingRight" to 5, "paddingBottom" to 0, "paddingLeft" to 5)), "up-tag--medium" to _pS(_uM("height" to 22, "paddingTop" to 0, "paddingRight" to 7, "paddingBottom" to 0, "paddingLeft" to 7)), "up-tag--large" to _pS(_uM("height" to 25, "paddingTop" to 0, "paddingRight" to 10, "paddingBottom" to 0, "paddingLeft" to 10)), "up-tag__close" to _pS(_uM("position" to "absolute", "zIndex" to 999, "top" to 10, "right" to 10, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#C6C7CB", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "transform" to "scale(0.6) translate(80% -80%)")), "up-tag__close--mini" to _pS(_uM("width" to 18, "height" to 18)), "up-tag__close--medium" to _pS(_uM("width" to 22, "height" to 22)), "up-tag__close--large" to _pS(_uM("width" to 25, "height" to 25)), "wtu-f02bob-0" to _pS(_uM("cursor" to "pointer")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to "primary"), "disabled" to _uM("type" to _uA(
            "Boolean",
            "String"
        ), "default" to false), "size" to _uM("type" to "String", "default" to "medium"), "shape" to _uM("type" to "String", "default" to "square"), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "bgColor" to _uM("type" to "String", "default" to ""), "color" to _uM("type" to "String", "default" to ""), "borderColor" to _uM("type" to "String", "default" to ""), "closeColor" to _uM("type" to "String", "default" to "#C6C7CB"), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "plainFill" to _uM("type" to "Boolean", "default" to false), "plain" to _uM("type" to "Boolean", "default" to false), "closable" to _uM("type" to "Boolean", "default" to false), "show" to _uM("type" to "Boolean", "default" to true), "icon" to _uM("type" to "String", "default" to ""), "iconColor" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "type",
            "disabled",
            "size",
            "shape",
            "text",
            "bgColor",
            "color",
            "borderColor",
            "closeColor",
            "name",
            "plainFill",
            "plain",
            "closable",
            "show",
            "icon",
            "iconColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
