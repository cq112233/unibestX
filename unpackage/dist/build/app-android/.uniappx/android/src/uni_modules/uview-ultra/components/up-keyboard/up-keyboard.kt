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
open class GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var mode: String by `$props`
    open var dotDisabled: Boolean by `$props`
    open var tooltip: Boolean by `$props`
    open var showTips: Boolean by `$props`
    open var tips: String by `$props`
    open var showCancel: Boolean by `$props`
    open var showConfirm: Boolean by `$props`
    open var random: Boolean by `$props`
    open var safeAreaInsetBottom: Boolean by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var show: Boolean by `$props`
    open var overlay: Boolean by `$props`
    open var zIndex: Any by `$props`
    open var cancelText: String by `$props`
    open var confirmText: String by `$props`
    open var autoChange: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboard
            val _cache = __ins.renderCache
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            fun gen_keyboardChange_fn(e: Any) {
                emit("change", e.toString())
            }
            val keyboardChange = ::gen_keyboardChange_fn
            fun gen_popupClose_fn() {
                emit("close")
            }
            val popupClose = ::gen_popupClose_fn
            fun gen_onConfirm_fn() {
                emit("confirm")
            }
            val onConfirm = ::gen_onConfirm_fn
            fun gen_onCancel_fn() {
                emit("cancel")
            }
            val onCancel = ::gen_onCancel_fn
            fun gen_keyboardBackspace_fn() {
                emit("backspace")
            }
            val keyboardBackspace = ::gen_keyboardBackspace_fn
            return fun(): Any? {
                val _component_up_number_keyboard = resolveEasyComponent("up-number-keyboard", GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboardClass)
                val _component_up_car_keyboard = resolveEasyComponent("up-car-keyboard", GenUniModulesUviewUltraComponentsUpCarKeyboardUpCarKeyboardClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cV(_component_up_popup, _uM("overlay" to _ctx.overlay, "closeOnClickOverlay" to _ctx.closeOnClickOverlay, "mode" to "bottom", "popup" to false, "show" to _ctx.show, "safeAreaInsetBottom" to _ctx.safeAreaInsetBottom, "onClose" to popupClose, "zIndex" to _ctx.zIndex, "customStyle" to _uO("backgroundColor" to "rgb(214, 218, 220)")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-keyboard"), _uA(
                            renderSlot(_ctx.`$slots`, "default"),
                            if (isTrue(_ctx.tooltip)) {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-keyboard__tooltip"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border", "hover-class" to "up-hover-class", "hover-stay-time" to 100), _uA(
                                        if (isTrue(_ctx.showCancel)) {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-keyboard__tooltip__item up-keyboard__tooltip__cancel", "onClick" to onCancel), _tD(_ctx.cancelText), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                                        if (isTrue(_ctx.showTips)) {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-keyboard__tooltip__item up-keyboard__tooltip__tips"), _tD(if (_ctx.tips != "") {
                                                _ctx.tips
                                            } else {
                                                if (_ctx.mode == "number") {
                                                    "数字键盘"
                                                } else {
                                                    if (_ctx.mode == "card") {
                                                        "身份证键盘"
                                                    } else {
                                                        "车牌号键盘"
                                                    }
                                                }
                                            }), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border", "hover-class" to "up-hover-class", "hover-stay-time" to 100), _uA(
                                        if (isTrue(_ctx.showConfirm)) {
                                            _cE("text", _uM("key" to 0, "onClick" to onConfirm, "class" to "weapp-tw-border up-keyboard__tooltip__item up-keyboard__tooltip__submit", "hover-class" to "up-hover-class"), _tD(if (_ctx.showConfirm) {
                                                _ctx.confirmText
                                            } else {
                                                ""
                                            }), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(_ctx.mode == "number" || _ctx.mode == "card")) {
                                _cV(_component_up_number_keyboard, _uM("key" to 1, "random" to _ctx.random, "onBackspace" to keyboardBackspace, "onChange" to keyboardChange, "mode" to _ctx.mode, "dotDisabled" to _ctx.dotDisabled), null, 8, _uA(
                                    "random",
                                    "mode",
                                    "dotDisabled"
                                ))
                            } else {
                                _cV(_component_up_car_keyboard, _uM("key" to 2, "random" to _ctx.random, "autoChange" to _ctx.autoChange, "onBackspace" to keyboardBackspace, "onChange" to keyboardChange), null, 8, _uA(
                                    "random",
                                    "autoChange"
                                ))
                            }
                        ))
                    )
                }
                ), "_" to 3), 8, _uA(
                    "overlay",
                    "closeOnClickOverlay",
                    "show",
                    "safeAreaInsetBottom",
                    "zIndex",
                    "customStyle"
                ))
            }
        }
        var name = "up-keyboard"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-keyboard__tooltip" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-between", "backgroundColor" to "#FFFFFF", "paddingTop" to 14, "paddingRight" to 12, "paddingBottom" to 14, "paddingLeft" to 12)), "up-keyboard__tooltip__item" to _pS(_uM("color" to "#333333", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "textAlign" to "center", "fontSize" to 15)), "up-keyboard__tooltip__submit" to _pS(_uM("textAlign" to "right", "color" to "var(--theme-color, #0957de)")), "up-keyboard__tooltip__cancel" to _pS(_uM("textAlign" to "left", "color" to "#888888")), "up-keyboard__tooltip__tips" to _pS(_uM("color" to "#909193")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "close" to null, "confirm" to null, "cancel" to null, "backspace" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "mode" to _uM("type" to "String", "default" to "number"), "dotDisabled" to _uM("type" to "Boolean", "default" to false), "tooltip" to _uM("type" to "Boolean", "default" to true), "showTips" to _uM("type" to "Boolean", "default" to true), "tips" to _uM("type" to "String", "default" to ""), "showCancel" to _uM("type" to "Boolean", "default" to true), "showConfirm" to _uM("type" to "Boolean", "default" to true), "random" to _uM("type" to "Boolean", "default" to false), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to true), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to true), "show" to _uM("type" to "Boolean", "default" to false), "overlay" to _uM("type" to "Boolean", "default" to true), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 1075), "cancelText" to _uM("type" to "String", "default" to "取消"), "confirmText" to _uM("type" to "String", "default" to "确认"), "autoChange" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "mode",
            "dotDisabled",
            "tooltip",
            "showTips",
            "tips",
            "showCancel",
            "showConfirm",
            "random",
            "safeAreaInsetBottom",
            "closeOnClickOverlay",
            "show",
            "overlay",
            "zIndex",
            "cancelText",
            "confirmText",
            "autoChange"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
