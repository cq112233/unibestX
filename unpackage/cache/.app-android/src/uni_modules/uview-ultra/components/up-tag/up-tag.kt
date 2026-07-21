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
open class GenUniModulesUviewUltraComponentsUpTagUpTag : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
        return _cV(_component_up_transition, _uM("mode" to "fade", "show" to _ctx.show, "style" to _nS(_uM("display" to "flex"))), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                _cE("view", _uM("class" to "up-tag-wrapper cursor-pointer"), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "up-tag",
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
                    )), "onClick" to withModifiers(_ctx.clickHandler, _uA(
                        "stop"
                    )), "style" to _nS(_uA(
                        _uM("marginRight" to if (_ctx.closable) {
                            "10px"
                        } else {
                            0
                        }
                        , "marginTop" to if (_ctx.closable) {
                            "10px"
                        } else {
                            0
                        }
                        ),
                        _ctx.style
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue(_ctx.icon)) {
                                    _cE("view", _uM("key" to 0, "class" to "up-tag__icon"), _uA(
                                        if (isTrue(_ctx.testImage(_ctx.icon))) {
                                            _cE("image", _uM("key" to 0, "src" to _ctx.icon, "style" to _nS(_uA(
                                                _ctx.imgStyle
                                            ))), null, 12, _uA(
                                                "src"
                                            ))
                                        } else {
                                            _cV(_component_up_icon, _uM("key" to 1, "color" to _ctx.elIconColor, "name" to _ctx.icon, "size" to _ctx.iconSize), null, 8, _uA(
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
                        _cE("text", _uM("class" to _nC(_uA(
                            "up-tag__text",
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
                        )), "style" to _nS(_uA(
                            _ctx.textColor
                        ))), _uA(
                            renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    _tD(_ctx.text)
                                )
                            }
                            )
                        ), 6)
                    ), 14, _uA(
                        "onClick"
                    )),
                    if (isTrue(_ctx.closable)) {
                        _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                            "up-tag__close",
                            _uA(
                                "up-tag__close--" + _ctx.size
                            )
                        )), "onClick" to withModifiers(_ctx.closeHandler, _uA(
                            "stop"
                        )), "style" to _nS(_uM("backgroundColor" to _ctx.closeColor))), _uA(
                            _cV(_component_up_icon, _uM("name" to "close", "size" to _ctx.closeSize, "color" to "#ffffff"), null, 8, _uA(
                                "size"
                            ))
                        ), 14, _uA(
                            "onClick"
                        ))
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
    open var style: Any by `$data`
    open var textColor: Any by `$data`
    open var imgStyle: Any by `$data`
    open var closeSize: String by `$data`
    open var iconSize: String by `$data`
    open var elIconColor: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "style" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tag/up-tag.uvue", 100, 11))
            if (this.bgColor != "") {
                style["backgroundColor"] = this.bgColor
            }
            if (this.color != "") {
                style["color"] = this.color
            }
            if (this.borderColor != "") {
                style["borderColor"] = this.borderColor
            }
            return style
        }
        ), "textColor" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tag/up-tag.uvue", 114, 11))
            if (this.color != "") {
                style["color"] = this.color
            }
            return style
        }
        ), "imgStyle" to computed<Any>(fun(): Any {
            val width = if (this.size === "large") {
                "17px"
            } else {
                if (this.size === "medium") {
                    "15px"
                } else {
                    "13px"
                }
            }
            return _uO("width" to width, "height" to width)
        }
        ), "closeSize" to computed<String>(fun(): String {
            val size = if (this.size === "large") {
                "15px"
            } else {
                if (this.size === "medium") {
                    "13px"
                } else {
                    "12px"
                }
            }
            return size
        }
        ), "iconSize" to computed<String>(fun(): String {
            val size = if (this.size === "large") {
                "21px"
            } else {
                if (this.size === "medium") {
                    "19px"
                } else {
                    "16px"
                }
            }
            return size
        }
        ), "elIconColor" to computed<String>(fun(): String {
            return if (this.iconColor != "") {
                this.iconColor
            } else {
                if (this.plain) {
                    this.type
                } else {
                    "#ffffff"
                }
            }
        }
        ))
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
    open var testImage = ::gen_testImage_fn
    open fun gen_testImage_fn(str: String): Boolean {
        return image(str)
    }
    open var closeHandler = ::gen_closeHandler_fn
    open fun gen_closeHandler_fn(): Unit {
        this.`$emit`("close", this.`$props`["name"].toString())
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(): Unit {
        this.`$emit`("click", this.`$props`["name"].toString())
    }
    companion object {
        var name = "up-tag"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tag-wrapper" to _pS(_uM("position" to "relative")), "up-tag" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-tag--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-tag--square" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-tag__icon" to _pS(_uM("marginRight" to 4)), "up-tag__text--mini" to _pS(_uM("fontSize" to 12, "lineHeight" to "12px")), "up-tag__text--medium" to _pS(_uM("fontSize" to 13, "lineHeight" to "13px")), "up-tag__text--large" to _pS(_uM("fontSize" to 15, "lineHeight" to "15px")), "up-tag--mini" to _pS(_uM("height" to 22, "paddingTop" to 0, "paddingRight" to 5, "paddingBottom" to 0, "paddingLeft" to 5)), "up-tag--medium" to _pS(_uM("height" to 26, "paddingTop" to 0, "paddingRight" to 10, "paddingBottom" to 0, "paddingLeft" to 10)), "up-tag--large" to _pS(_uM("height" to 32, "paddingTop" to 0, "paddingRight" to 15, "paddingBottom" to 0, "paddingLeft" to 15)), "up-tag--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-tag--primary--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-tag--primary--plain--fill" to _pS(_uM("backgroundColor" to "#ecf5ff")), "up-tag__text--primary" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--primary--plain" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-tag--error" to _pS(_uM("backgroundColor" to "#f56c6c", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f56c6c", "borderRightColor" to "#f56c6c", "borderBottomColor" to "#f56c6c", "borderLeftColor" to "#f56c6c")), "up-tag--error--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f56c6c", "borderRightColor" to "#f56c6c", "borderBottomColor" to "#f56c6c", "borderLeftColor" to "#f56c6c")), "up-tag--error--plain--fill" to _pS(_uM("backgroundColor" to "#fef0f0")), "up-tag__text--error" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--error--plain" to _pS(_uM("color" to "#f56c6c")), "up-tag--warning" to _pS(_uM("backgroundColor" to "#f9ae3d", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f9ae3d", "borderRightColor" to "#f9ae3d", "borderBottomColor" to "#f9ae3d", "borderLeftColor" to "#f9ae3d")), "up-tag--warning--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f9ae3d", "borderRightColor" to "#f9ae3d", "borderBottomColor" to "#f9ae3d", "borderLeftColor" to "#f9ae3d")), "up-tag--warning--plain--fill" to _pS(_uM("backgroundColor" to "#fdf6ec")), "up-tag__text--warning" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--warning--plain" to _pS(_uM("color" to "#f9ae3d")), "up-tag--success" to _pS(_uM("backgroundColor" to "#5ac725", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderBottomColor" to "#5ac725", "borderLeftColor" to "#5ac725")), "up-tag--success--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#5ac725", "borderRightColor" to "#5ac725", "borderBottomColor" to "#5ac725", "borderLeftColor" to "#5ac725")), "up-tag--success--plain--fill" to _pS(_uM("backgroundColor" to "#f5fff0")), "up-tag__text--success" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--success--plain" to _pS(_uM("color" to "#5ac725")), "up-tag--info" to _pS(_uM("backgroundColor" to "#909399", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#909399", "borderRightColor" to "#909399", "borderBottomColor" to "#909399", "borderLeftColor" to "#909399")), "up-tag--info--plain" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#909399", "borderRightColor" to "#909399", "borderBottomColor" to "#909399", "borderLeftColor" to "#909399")), "up-tag--info--plain--fill" to _pS(_uM("backgroundColor" to "#f4f4f5")), "up-tag__text--info" to _pS(_uM("color" to "#FFFFFF")), "up-tag__text--info--plain" to _pS(_uM("color" to "#909399")), "up-tag__close" to _pS(_uM("position" to "absolute", "zIndex" to 999, "top" to 10, "right" to 10, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#C6C7CB", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "transform" to "scale(0.6) translate(50%, -50%)")), "up-tag__close--mini" to _pS(_uM("width" to 18, "height" to 18)), "up-tag__close--medium" to _pS(_uM("width" to 22, "height" to 22)), "up-tag__close--large" to _pS(_uM("width" to 25, "height" to 25)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to crtProp__16["type"]), "disabled" to _uM("type" to _uA(
            "Boolean",
            "String"
        ), "default" to crtProp__16["disabled"]), "size" to _uM("type" to "String", "default" to crtProp__16["size"]), "shape" to _uM("type" to "String", "default" to crtProp__16["shape"]), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__16["text"]), "bgColor" to _uM("type" to "String", "default" to crtProp__16["bgColor"]), "color" to _uM("type" to "String", "default" to crtProp__16["color"]), "borderColor" to _uM("type" to "String", "default" to crtProp__16["borderColor"]), "closeColor" to _uM("type" to "String", "default" to crtProp__16["closeColor"]), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__16["name"]), "plainFill" to _uM("type" to "Boolean", "default" to crtProp__16["plainFill"]), "plain" to _uM("type" to "Boolean", "default" to crtProp__16["plain"]), "closable" to _uM("type" to "Boolean", "default" to crtProp__16["closable"]), "show" to _uM("type" to "Boolean", "default" to crtProp__16["show"]), "icon" to _uM("type" to "String", "default" to crtProp__16["icon,"]), "iconColor" to _uM("type" to "String", "default" to crtProp__16["iconColor"])))
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
