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
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenUniModulesUviewUltraComponentsUpPopupUpPopup : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {
            this.overlayDuration = parseInt(this.duration!!!!.toString()) + 50
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(newValue: Boolean, oldValue: Boolean) {
            if (newValue == true) {}
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
        val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom", GenUniModulesUviewUltraComponentsUpSafeBottomUpSafeBottomClass)
        val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-popup",
            _uA(
                _ctx.customClass
            )
        ))), _uA(
            if (isTrue(_ctx.overlay && !_ctx.pageInline)) {
                _cV(_component_up_overlay, _uM("key" to 0, "show" to (_ctx.show && !_ctx.pageInline), "onClick" to _ctx.overlayClick, "zIndex" to _ctx.zIndex, "duration" to _ctx.overlayDuration, "customStyle" to _ctx.overlayStyle, "opacity" to _ctx.overlayOpacity), null, 8, _uA(
                    "show",
                    "onClick",
                    "zIndex",
                    "duration",
                    "customStyle",
                    "opacity"
                ))
            } else {
                _cC("v-if", true)
            }
            ,
            _cV(_component_up_transition, _uM("show" to if (_ctx.pageInline) {
                true
            } else {
                _ctx.show
            }
            , "customStyle" to _ctx.transitionStyle, "mode" to if (_ctx.pageInline) {
                "none"
            } else {
                _ctx.position
            }
            , "duration" to _ctx.duration, "onAfterEnter" to _ctx.afterEnter, "onClick" to _ctx.clickHandler), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                return _uA(
                    _cE("view", _uM("class" to "up-popup__content", "style" to _nS(_uA(
                        _ctx.contentStyle
                    )), "onClick" to withModifiers(_ctx.noop, _uA(
                        "stop"
                    ))), _uA(
                        if (isTrue(_ctx.safeAreaInsetTop)) {
                            _cV(_component_up_status_bar, _uM("key" to 0))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        renderSlot(_ctx.`$slots`, "default"),
                        if (isTrue(_ctx.closeable)) {
                            _cE("view", _uM("key" to 1, "onClick" to withModifiers(_ctx.close, _uA(
                                "stop"
                            )), "class" to _nC(_uA(
                                "up-popup__content__close",
                                _uA(
                                    "up-popup__content__close--" + _ctx.closeIconPos
                                )
                            )), "hover-class" to "up-popup__content__close--hover", "hover-stay-time" to "150"), _uA(
                                _cV(_component_up_icon, _uM("name" to "close", "color" to "#909399", "size" to "18", "bold" to ""))
                            ), 10, _uA(
                                "onClick"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(_ctx.safeAreaInsetBottom)) {
                            _cV(_component_up_safe_bottom, _uM("key" to 2))
                        } else {
                            _cC("v-if", true)
                        }
                    ), 12, _uA(
                        "onClick"
                    ))
                )
            }
            ), "_" to 3), 8, _uA(
                "show",
                "customStyle",
                "mode",
                "duration",
                "onAfterEnter",
                "onClick"
            ))
        ), 2)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var overlay: Boolean by `$props`
    open var mode: String by `$props`
    open var duration: Any by `$props`
    open var closeable: Boolean by `$props`
    open var overlayStyle: Any by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var zIndex: Any by `$props`
    open var safeAreaInsetBottom: Boolean by `$props`
    open var safeAreaInsetTop: Boolean by `$props`
    open var closeIconPos: String by `$props`
    open var round: Any by `$props`
    open var zoom: Boolean by `$props`
    open var bgColor: String by `$props`
    open var overlayOpacity: Any by `$props`
    open var pageInline: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var overlayDuration: Number by `$data`
    open var transitionStyle: Any by `$data`
    open var contentStyle: Any by `$data`
    open var position: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "overlayDuration" to 0, "transitionStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-popup/up-popup.uvue", 101, 11), "display" to "flex")
            if (!this.pageInline) {
                style["zIndex"] = parseInt(this.zIndex!!!!.toString()) + 1
                style["position"] = "fixed"
            }
            style[this.mode] = 0
            if (this.mode === "left") {
                return deepMerge(style, _uO("bottom" to 0, "top" to 0))
            } else if (this.mode === "right") {
                return deepMerge(style, _uO("bottom" to 0, "top" to 0))
            } else if (this.mode === "top") {
                return deepMerge(style, _uO("left" to 0, "right" to 0))
            } else if (this.mode === "bottom") {
                return deepMerge(style, _uO("left" to 0, "right" to 0))
            } else if (this.mode === "center") {
                return deepMerge(style, _uO("alignItems" to "center", "justify-content" to "center", "top" to 0, "left" to 0, "right" to 0, "bottom" to 0))
            }
            return _uO()
        }
        ), "contentStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-popup/up-popup.uvue", 143, 11))
            val safeAreaInsets = uni_getWindowInfo().safeAreaInsets
            if (this.mode !== "center") {
                style["flex"] = 1
            }
            if (this.bgColor != "") {
                style["backgroundColor"] = this.bgColor
            }
            if (this.round != "") {
                val value = addUnit(this.round)
                if (this.mode === "top") {
                    style["borderBottomLeftRadius"] = value
                    style["borderBottomRightRadius"] = value
                } else if (this.mode === "bottom") {
                    style["borderTopLeftRadius"] = value
                    style["borderTopRightRadius"] = value
                } else if (this.mode === "center") {
                    style["borderRadius"] = value
                }
            }
            return deepMerge(style, addStyle(this.customStyle))
        }
        ), "position" to computed<String>(fun(): String {
            if (this.mode === "center") {
                return if (this.zoom) {
                    "fade-zoom"
                } else {
                    "fade"
                }
            }
            if (this.mode === "left") {
                return "slide-left"
            }
            if (this.mode === "right") {
                return "slide-right"
            }
            if (this.mode === "bottom") {
                return "slide-up"
            }
            if (this.mode === "top") {
                return "slide-down"
            }
            return ""
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
    open var overlayClick = ::gen_overlayClick_fn
    open fun gen_overlayClick_fn(): Unit {
        if (this.closeOnClickOverlay) {
            this.`$emit`("update:show", false)
            this.`$emit`("close")
        }
    }
    open var close = ::gen_close_fn
    open fun gen_close_fn(e: Any): Unit {
        this.`$emit`("update:show", false)
        this.`$emit`("close")
    }
    open var afterEnter = ::gen_afterEnter_fn
    open fun gen_afterEnter_fn(): Unit {
        this.`$emit`("open")
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(): Unit {
        if (this.mode === "center") {
            this.overlayClick()
        }
        this.`$emit`("click")
    }
    companion object {
        var name = "up-popup"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-popup" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-popup__content" to _pS(_uM("backgroundColor" to "#ffffff", "position" to "relative")), "up-popup__content--round-top" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 10)), "up-popup__content--round-left" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 0, "borderBottomRightRadius" to 10)), "up-popup__content--round-right" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 0, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 0)), "up-popup__content--round-bottom" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 0, "borderBottomRightRadius" to 0)), "up-popup__content--round-center" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomLeftRadius" to 10, "borderBottomRightRadius" to 10)), "up-popup__content__close" to _pS(_uM("position" to "absolute")), "up-popup__content__close--hover" to _pS(_uM("opacity" to 0.4)), "up-popup__content__close--top-left" to _pS(_uM("top" to 15, "left" to 15)), "up-popup__content__close--top-right" to _pS(_uM("top" to 15, "right" to 15)), "up-popup__content__close--bottom-left" to _pS(_uM("bottom" to 15, "left" to 15)), "up-popup__content__close--bottom-right" to _pS(_uM("right" to 15, "bottom" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("open" to null, "close" to null, "click" to null, "update:show" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to crtProp__22["show"]), "overlay" to _uM("type" to "Boolean", "default" to crtProp__22["overlay"]), "mode" to _uM("type" to "String", "default" to crtProp__22["mode"]), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__22["duration"]), "closeable" to _uM("type" to "Boolean", "default" to crtProp__22["closeable"]), "overlayStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to crtProp__22["overlayStyle"]), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to crtProp__22["closeOnClickOverlay"]), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__22["zIndex"]), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to crtProp__22["safeAreaInsetBottom"]), "safeAreaInsetTop" to _uM("type" to "Boolean", "default" to crtProp__22["safeAreaInsetTop"]), "closeIconPos" to _uM("type" to "String", "default" to crtProp__22["closeIconPos"]), "round" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to crtProp__22["round"]), "zoom" to _uM("type" to "Boolean", "default" to crtProp__22["zoom"]), "bgColor" to _uM("type" to "String", "default" to crtProp__22["bgColor"]), "overlayOpacity" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to crtProp__22["overlayOpacity"]), "pageInline" to _uM("type" to "Boolean", "default" to crtProp__22["pageInline"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "overlay",
            "mode",
            "duration",
            "closeable",
            "overlayStyle",
            "closeOnClickOverlay",
            "zIndex",
            "safeAreaInsetBottom",
            "safeAreaInsetTop",
            "closeIconPos",
            "round",
            "zoom",
            "bgColor",
            "overlayOpacity",
            "pageInline"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
