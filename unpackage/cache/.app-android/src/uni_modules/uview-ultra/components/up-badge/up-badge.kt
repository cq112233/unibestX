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
open class GenUniModulesUviewUltraComponentsUpBadgeUpBadge : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var isDot: Boolean by `$props`
    open var value: Any by `$props`
    open var modelValue: Any by `$props`
    open var show: Boolean by `$props`
    open var max: Any by `$props`
    open var type: String by `$props`
    open var showZero: Boolean by `$props`
    open var bgColor: String by `$props`
    open var color: String by `$props`
    open var shape: String by `$props`
    open var numberType: String by `$props`
    open var offset: UTSArray<Number> by `$props`
    open var inverted: Boolean by `$props`
    open var absolute: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpBadgeUpBadge) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpBadgeUpBadge
            val _cache = __ins.renderCache
            val props = __props
            val badgeStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-badge/up-badge.uvue", 124, 9))
                if (props.color != "") {
                    style["color"] = props.color
                }
                if (props.bgColor != "" && !props.inverted) {
                    style["backgroundColor"] = props.bgColor
                }
                if (props.absolute) {
                    style["position"] = "absolute"
                    var offsetArray = props.offset as UTSArray<Number>
                    if (offsetArray.length > 0) {
                        val top = offsetArray[0]
                        style["top"] = addUnit(top)
                        if (offsetArray.length == 2) {
                            style["right"] = addUnit(offsetArray[1])
                        } else {
                            style["right"] = addUnit(top)
                        }
                    }
                }
                return style
            }
            )
            val showValue = computed(fun(): String {
                var valueReturn = ""
                when (props.numberType.toString()) {
                    "overflow" -> 
                        valueReturn = if (parseInt(props.value.toString()) > parseInt(props.max.toString())) {
                            props.max.toString() + "+"
                        } else {
                            props.value.toString()
                        }
                    "ellipsis" -> 
                        valueReturn = if (parseInt(props.value.toString()) > parseInt(props.max.toString())) {
                            "..."
                        } else {
                            props.value.toString()
                        }
                    "limit" -> 
                        valueReturn = if (parseInt(props.value.toString()) > 999) {
                            if (parseInt(props.value.toString()) >= 9999) {
                                (Math.floor(parseInt(props.value.toString()) / 1e4 * 100) / 100).toString(10) + "w"
                            } else {
                                (Math.floor(parseInt(props.value.toString()) / 1e3 * 100) / 100).toString(10) + "k"
                            }
                        } else {
                            props.value.toString()
                        }
                    else -> 
                        valueReturn = props.value.toString()
                }
                return valueReturn
            }
            )
            return fun(): Any? {
                return if (isTrue(_ctx.show && ((if (parseInt(_ctx.value.toString()) == 0) {
                    _ctx.showZero
                } else {
                    true
                }
                ) || _ctx.isDot))) {
                    _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                        "up-badge",
                        _uA(
                            if (_ctx.isDot) {
                                "up-badge--dot"
                            } else {
                                "up-badge--not-dot"
                            },
                            if (_ctx.inverted) {
                                "up-badge--inverted"
                            } else {
                                ""
                            },
                            if (_ctx.shape === "horn") {
                                "up-badge--horn"
                            } else {
                                ""
                            },
                            if (_ctx.inverted) {
                                "up-badge--" + _ctx.type + "--inverted"
                            } else {
                                "up-badge--" + _ctx.type
                            }
                        )
                    )), "style" to _nS(_uA(
                        _ctx.`$upAddStyle`(_ctx.customStyle),
                        badgeStyle.value
                    ))), _tD(if (_ctx.isDot) {
                        ""
                    } else {
                        showValue.value
                    }), 7)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-badge"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-badge" to _pS(_uM("borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "lineHeight" to "11px", "textAlign" to "center", "fontSize" to 11, "color" to "#FFFFFF")), "up-badge--dot" to _pS(_uM("height" to 8, "width" to 8)), "up-badge--inverted" to _pS(_uM("fontSize" to 13)), "up-badge--not-dot" to _pS(_uM("paddingTop" to 2, "paddingRight" to 5, "paddingBottom" to 2, "paddingLeft" to 5)), "up-badge--horn" to _pS(_uM("borderBottomLeftRadius" to 0)), "up-badge--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-badge--primary--inverted" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-badge--error" to _pS(_uM("backgroundColor" to "#f56c6c")), "up-badge--error--inverted" to _pS(_uM("color" to "#f56c6c")), "up-badge--success" to _pS(_uM("backgroundColor" to "#5ac725")), "up-badge--success--inverted" to _pS(_uM("color" to "#5ac725")), "up-badge--info" to _pS(_uM("backgroundColor" to "#909399")), "up-badge--info--inverted" to _pS(_uM("color" to "#909399")), "up-badge--warning" to _pS(_uM("backgroundColor" to "#f9ae3d")), "up-badge--warning--inverted" to _pS(_uM("color" to "#f9ae3d")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "isDot" to _uM("type" to "Boolean", "default" to default__26.getBoolean("badge.isDot")), "value" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__26.getString("badge.value")), "modelValue" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__26.getString("badge.modelValue")), "show" to _uM("type" to "Boolean", "default" to default__26.getBoolean("badge.show")), "max" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__26.getNumber("badge.max")), "type" to _uM("type" to "String", "default" to default__26.getString("badge.type")), "showZero" to _uM("type" to "Boolean", "default" to default__26.getBoolean("badge.showZero")), "bgColor" to _uM("type" to "String", "default" to default__26.getString("badge.bgColor")), "color" to _uM("type" to "String", "default" to default__26.getString("badge.color")), "shape" to _uM("type" to "String", "default" to default__26.getString("badge.shape")), "numberType" to _uM("type" to "String", "default" to default__26.getString("badge.numberType")), "offset" to _uM("type" to "Array", "default" to default__26.getArray<Number>("badge.offset")), "inverted" to _uM("type" to "Boolean", "default" to default__26.getBoolean("badge.inverted")), "absolute" to _uM("type" to "Boolean", "default" to default__26.getBoolean("badge.absolute"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "isDot",
            "value",
            "modelValue",
            "show",
            "max",
            "type",
            "showZero",
            "bgColor",
            "color",
            "shape",
            "numberType",
            "offset",
            "inverted",
            "absolute"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
