@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesUviewUltraComponentsUpIconUpIcon : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: String by `$props`
    open var color: String by `$props`
    open var size: Any by `$props`
    open var bold: Boolean by `$props`
    open var index: String by `$props`
    open var hoverClass: String by `$props`
    open var customPrefix: String by `$props`
    open var label: String by `$props`
    open var labelPos: String by `$props`
    open var labelSize: Any by `$props`
    open var labelColor: String by `$props`
    open var space: Any by `$props`
    open var imgMode: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var top: Any by `$props`
    open var stop: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpIconUpIcon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpIconUpIcon
            val _cache = __ins.renderCache
            val preventEvent = useUltraUI().preventEvent
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val uClasses = computed(fun(): String {
                var classes: UTSArray<String> = _uA()
                classes.push(props.customPrefix + "-" + props.name)
                if (props.customPrefix == "upicon") {
                    classes.push("up-iconfont")
                } else {
                    classes.push(props.customPrefix)
                }
                var types: UTSArray<String>? = `default`.getArray("type") as UTSArray<String>
                if (props.color.toString() != "" && types != null && types?.includes(props.color.toString()) as Boolean) {
                    classes.push("up-icon__icon--" + props.color.toString())
                }
                return classes.join(" ")
            }
            )
            val iconStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("fontSize" to addUnit(props.size.toString()), "lineHeight" to addUnit(props.size.toString()), "fontWeight" to if ((props.bold as Boolean)) {
                    "bold"
                } else {
                    "normal"
                }
                , "top" to addUnit(props.top))
                var types: UTSArray<String>? = `default`.getArray("type") as UTSArray<String>
                if (props.color.toString() != "" && types != null && !types.includes(props.color.toString())) {
                    style["color"] = props.color.toString()
                }
                return style
            }
            )
            val isImg = computed(fun(): Boolean {
                return props.name.toString().indexOf("/") != -1
            }
            )
            val imgStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                style["width"] = if (props.width != "") {
                    addUnit(props.width)
                } else {
                    addUnit(props.size!!!!.toString())
                }
                style["height"] = if (props.height != "") {
                    addUnit(props.height)
                } else {
                    addUnit(props.size!!!!.toString())
                }
                return style
            }
            )
            val icon = computed(fun(): String {
                if (props.customPrefix !== "upicon") {
                    return ""
                }
                if (default__14["upicon-" + props.name] != null) {
                    return default__14["upicon-" + props.name] as String
                } else {
                    return props.name.toString()
                }
            }
            )
            fun gen_clickHandler_fn(e: UniPointerEvent) {
                emit("click", props.index)
                if (props.stop as Boolean) {
                    preventEvent(e)
                }
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-icon",
                    _uA(
                        "up-icon--" + _ctx.labelPos
                    )
                )), "onClick" to clickHandler), _uA(
                    if (isTrue(isImg.value)) {
                        _cE("image", _uM("key" to 0, "class" to "up-icon__img", "src" to _ctx.name, "mode" to if (_ctx.imgMode != "") {
                            _ctx.imgMode
                        } else {
                            "aspectFit"
                        }, "style" to _nS(_uA(
                            imgStyle.value,
                            _ctx.`$up`.addStyle(_ctx.customStyle)
                        ))), null, 12, _uA(
                            "src",
                            "mode"
                        ))
                    } else {
                        _cE("text", _uM("key" to 1, "class" to _nC(_uA(
                            "up-icon__icon",
                            uClasses.value
                        )), "style" to _nS(_uA(
                            iconStyle.value,
                            _ctx.`$up`.addStyle(_ctx.customStyle)
                        )), "hover-class" to _ctx.hoverClass), _tD(icon.value), 15, _uA(
                            "hover-class"
                        ))
                    }
                    ,
                    if (_ctx.label !== "") {
                        _cE("text", _uM("key" to 2, "class" to "up-icon__label", "style" to _nS(_uM("color" to _ctx.labelColor, "fontSize" to _ctx.`$up`.addUnit(_ctx.labelSize), "marginLeft" to if (_ctx.labelPos == "right") {
                            _ctx.`$up`.addUnit(_ctx.space)
                        } else {
                            0
                        }, "marginTop" to if (_ctx.labelPos == "bottom") {
                            _ctx.`$up`.addUnit(_ctx.space)
                        } else {
                            0
                        }, "marginRight" to if (_ctx.labelPos == "left") {
                            _ctx.`$up`.addUnit(_ctx.space)
                        } else {
                            0
                        }, "marginBottom" to if (_ctx.labelPos == "top") {
                            _ctx.`$up`.addUnit(_ctx.space)
                        } else {
                            0
                        }))), _tD(_ctx.label), 5)
                    } else {
                        _cC("v-if", true)
                    }
                ), 2)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-icon" to _pS(_uM("display" to "flex", "alignItems" to "center")), "up-icon--left" to _pS(_uM("flexDirection" to "row-reverse", "alignItems" to "center")), "up-icon--right" to _pS(_uM("flexDirection" to "row", "alignItems" to "center")), "up-icon--top" to _pS(_uM("flexDirection" to "column-reverse", "justifyContent" to "center")), "up-icon--bottom" to _pS(_uM("flexDirection" to "column", "justifyContent" to "center")), "up-icon__icon" to _pS(_uM("fontFamily" to "iconfont", "position" to "relative")), "up-icon__icon--primary" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-icon__icon--success" to _pS(_uM("color" to "#5ac725")), "up-icon__icon--error" to _pS(_uM("color" to "#f56c6c")), "up-icon__icon--warning" to _pS(_uM("color" to "#f9ae3d")), "up-icon__icon--info" to _pS(_uM("color" to "#909399")), "up-icon__label" to _pS(_uM("lineHeight" to 1)), "@FONT-FACE" to _uM("0" to _uM("fontFamily" to "iconfont", "src" to "url(\"/assets/iconfont.4bc8cc97.ttf\")")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.name")
        }
        ), "color" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.color")
        }
        ), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.size")
        }
        ), "bold" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__15.getBoolean("icon.bold")
        }
        ), "index" to _uM("type" to _uA(
            "String"
        ), "default" to fun(): String? {
            return default__15.getString("icon.index")
        }
        ), "hoverClass" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.hoverClass")
        }
        ), "customPrefix" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.customPrefix")
        }
        ), "label" to _uM("type" to _uA(
            "String"
        ), "default" to fun(): String? {
            return default__15.getString("icon.label")
        }
        ), "labelPos" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.labelPos")
        }
        ), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.labelSize")
        }
        ), "labelColor" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.labelColor")
        }
        ), "space" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.space")
        }
        ), "imgMode" to _uM("type" to "String", "default" to fun(): String? {
            return default__15.getString("icon.imgMode")
        }
        ), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.width")
        }
        ), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.height")
        }
        ), "top" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__15.getString("icon.top")
        }
        ), "stop" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__15.getBoolean("icon.stop")
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "name",
            "color",
            "size",
            "bold",
            "index",
            "hoverClass",
            "customPrefix",
            "label",
            "labelPos",
            "labelSize",
            "labelColor",
            "space",
            "imgMode",
            "width",
            "height",
            "top",
            "stop"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
