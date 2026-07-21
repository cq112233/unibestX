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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenUniModulesUviewUltraComponentsUpModalUpModal : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(n: Boolean) {
            if (n && this.loading) {
                this.loading = false
            }
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
        return _cV(_component_up_popup, _uM("mode" to "center", "zoom" to _ctx.zoom, "show" to _ctx.show, "class" to _nC(_uA(
            _ctx.customClass
        )), "customStyle" to _uO("borderRadius" to "6px", "overflow" to "hidden", "marginTop" to ("-" + _ctx.addUnit(_ctx.negativeTop))), "closeOnClickOverlay" to _ctx.closeOnClickOverlay, "safeAreaInsetBottom" to false, "duration" to _ctx.duration, "onClick" to _ctx.clickHandler), _uM("bottom" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                renderSlot(_ctx.`$slots`, "popupBottom")
            )
        }
        ), "default" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                _cE("view", _uM("class" to "up-modal", "style" to _nS(_uM("width" to _ctx.addUnit(_ctx.width)))), _uA(
                    if (isTrue(_ctx.title)) {
                        _cE("view", _uM("key" to 0, "class" to "up-modal__title"), _tD(_ctx.title), 1)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to "up-modal__content", "style" to _nS(_ctx.contentStyleCpu)), _uA(
                        renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("text", _uM("class" to "up-modal__content__text", "style" to _nS(_uM("textAlign" to _ctx.contentTextAlign))), _tD(_ctx.content), 5)
                            )
                        }
                        )
                    ), 4),
                    if (isTrue(_ctx.`$slots`["confirmButton"])) {
                        _cE("view", _uM("key" to 1, "class" to "up-modal__button-group--confirm-button"), _uA(
                            renderSlot(_ctx.`$slots`, "confirmButton")
                        ))
                    } else {
                        _cE(Fragment, _uM("key" to 2), _uA(
                            _cV(_component_up_line),
                            _cE("view", _uM("class" to "up-modal__button-group", "style" to _nS(_uM("flexDirection" to if (isTruthy(_ctx.buttonReverse)) {
                                "row-reverse"
                            } else {
                                "row"
                            }
                            ))), _uA(
                                if (isTrue(_ctx.showCancelButton)) {
                                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                        "up-modal__button-group__wrapper up-modal__button-group__wrapper--cancel",
                                        _uA(
                                            if ((isTruthy(_ctx.showCancelButton) && !isTruthy(_ctx.showConfirmButton))) {
                                                "up-modal__button-group__wrapper--only-cancel"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "hover-stay-time" to 150, "hover-class" to "up-modal__button-group__wrapper--hover", "onClick" to _ctx.cancelHandler), _uA(
                                        _cE("text", _uM("class" to "up-modal__button-group__wrapper__text", "style" to _nS(_uM("color" to _ctx.cancelColor))), _tD(_ctx.cancelText), 5)
                                    ), 10, _uA(
                                        "onClick"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(if (isTruthy(_ctx.showConfirmButton)) {
                                    _ctx.showCancelButton
                                } else {
                                    _ctx.showConfirmButton
                                }
                                )) {
                                    _cV(_component_up_line, _uM("key" to 1, "direction" to "column"))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.showConfirmButton)) {
                                    _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                        "up-modal__button-group__wrapper up-modal__button-group__wrapper--confirm",
                                        _uA(
                                            if ((!isTruthy(_ctx.showCancelButton) && isTruthy(_ctx.showConfirmButton))) {
                                                "up-modal__button-group__wrapper--only-confirm"
                                            } else {
                                                ""
                                            }
                                        )
                                    )), "hover-stay-time" to 150, "hover-class" to "up-modal__button-group__wrapper--hover", "onClick" to _ctx.confirmHandler), _uA(
                                        if (isTrue(_ctx.loading)) {
                                            _cV(_component_up_loading_icon, _uM("key" to 0))
                                        } else {
                                            _cE("text", _uM("key" to 1, "class" to "up-modal__button-group__wrapper__text", "style" to _nS(_uM("color" to _ctx.confirmColor))), _tD(_ctx.confirmText), 5)
                                        }
                                    ), 10, _uA(
                                        "onClick"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 4)
                        ), 64)
                    }
                ), 4)
            )
        }
        ), "_" to 3), 8, _uA(
            "zoom",
            "show",
            "class",
            "customStyle",
            "closeOnClickOverlay",
            "duration",
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var title: String by `$props`
    open var content: String by `$props`
    open var confirmText: String by `$props`
    open var cancelText: String by `$props`
    open var showConfirmButton: Boolean by `$props`
    open var showCancelButton: Boolean by `$props`
    open var confirmColor: String by `$props`
    open var cancelColor: String by `$props`
    open var buttonReverse: Boolean by `$props`
    open var zoom: Boolean by `$props`
    open var asyncClose: Boolean by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var negativeTop: Any by `$props`
    open var width: Any by `$props`
    open var confirmButtonShape: String by `$props`
    open var duration: Number by `$props`
    open var contentTextAlign: String by `$props`
    open var asyncCloseTip: String by `$props`
    open var asyncCancelClose: Boolean by `$props`
    open var contentStyle: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var loading: Boolean by `$data`
    open var contentStyleCpu: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "loading" to false, "contentStyleCpu" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style = this.contentStyle as UTSJSONObject
            style["paddingTop"] = "" + (if (this.title != "") {
                12
            } else {
                25
            }
            ) + "px"
            return style
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(kVal: Any): Any {
        return uni.UNI5198058.addUnit(kVal)
    }
    open var confirmHandler = ::gen_confirmHandler_fn
    open fun gen_confirmHandler_fn() {
        if (isTruthy(this.asyncClose)) {
            this.loading = true
        } else {
            this.`$emit`("update:show", false)
        }
        this.`$emit`("confirm")
    }
    open var cancelHandler = ::gen_cancelHandler_fn
    open fun gen_cancelHandler_fn() {
        if (isTruthy(this.asyncClose) && this.loading) {
            if (this.asyncCloseTip != "") {
                uni_showToast(ShowToastOptions(title = this.asyncCloseTip, icon = "none"))
            }
            this.`$emit`("cancelOnAsync")
        } else {
            if (!isTruthy(this.asyncCancelClose)) {
                this.`$emit`("update:show", false)
            }
        }
        this.`$emit`("cancel")
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        if (isTruthy(this.closeOnClickOverlay)) {
            this.`$emit`("update:show", false)
            this.`$emit`("close")
        }
    }
    companion object {
        var name = "up-modal"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-modal" to _pS(_uM("width" to "650rpx", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "overflow" to "hidden")), "up-modal__title" to _pS(_uM("display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center", "fontSize" to 16, "fontWeight" to "bold", "color" to "#606266", "textAlign" to "center", "paddingTop" to 25)), "up-modal__content" to _pS(_uM("paddingTop" to 12, "paddingRight" to 25, "paddingBottom" to 25, "paddingLeft" to 25, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-modal__content__text" to _pS(_uM("fontSize" to 15, "color" to "#606266", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-modal__button-group" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-modal__button-group--confirm-button" to _pS(_uM("flexDirection" to "column", "paddingTop" to 0, "paddingRight" to 25, "paddingBottom" to 15, "paddingLeft" to 25)), "up-modal__button-group__wrapper" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "height" to 48)), "up-modal__button-group__wrapper--confirm" to _pS(_uM("borderBottomRightRadius" to 6)), "up-modal__button-group__wrapper--only-cancel" to _pS(_uM("borderBottomRightRadius" to 6)), "up-modal__button-group__wrapper--cancel" to _pS(_uM("borderBottomLeftRadius" to 6)), "up-modal__button-group__wrapper--only-confirm" to _pS(_uM("borderBottomLeftRadius" to 6)), "up-modal__button-group__wrapper--hover" to _pS(_uM("backgroundColor" to "#f3f4f6")), "up-modal__button-group__wrapper__text" to _pS(_uM("color" to "#606266", "fontSize" to 16, "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("confirm" to null, "cancel" to null, "close" to null, "update:show" to null, "cancelOnAsync" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to crtProp__26["show"]), "title" to _uM("type" to "String", "default" to crtProp__26["title"]), "content" to _uM("type" to "String", "default" to crtProp__26["content"]), "confirmText" to _uM("type" to "String", "default" to crtProp__26["confirmText"]), "cancelText" to _uM("type" to "String", "default" to crtProp__26["cancelText"]), "showConfirmButton" to _uM("type" to "Boolean", "default" to crtProp__26["showConfirmButton"]), "showCancelButton" to _uM("type" to "Boolean", "default" to crtProp__26["showCancelButton"]), "confirmColor" to _uM("type" to "String", "default" to crtProp__26["confirmColor"]), "cancelColor" to _uM("type" to "String", "default" to crtProp__26["cancelColor"]), "buttonReverse" to _uM("type" to "Boolean", "default" to crtProp__26["buttonReverse"]), "zoom" to _uM("type" to "Boolean", "default" to crtProp__26["zoom"]), "asyncClose" to _uM("type" to "Boolean", "default" to crtProp__26["asyncClose"]), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to crtProp__26["closeOnClickOverlay"]), "negativeTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__26["negativeTop"]), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__26["width"]), "confirmButtonShape" to _uM("type" to "String", "default" to crtProp__26["confirmButtonShape"]), "duration" to _uM("type" to "Number", "default" to crtProp__26["duration"]), "contentTextAlign" to _uM("type" to "String", "default" to crtProp__26["contentTextAlign"]), "asyncCloseTip" to _uM("type" to "String", "default" to crtProp__26["asyncCloseTip"]), "asyncCancelClose" to _uM("type" to "Boolean", "default" to crtProp__26["asyncCancelClose"]), "contentStyle" to _uM("default" to crtProp__26["contentStyle"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "title",
            "content",
            "confirmText",
            "cancelText",
            "showConfirmButton",
            "showCancelButton",
            "confirmColor",
            "cancelColor",
            "buttonReverse",
            "zoom",
            "asyncClose",
            "closeOnClickOverlay",
            "negativeTop",
            "width",
            "confirmButtonShape",
            "duration",
            "contentTextAlign",
            "asyncCloseTip",
            "asyncCancelClose",
            "contentStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
