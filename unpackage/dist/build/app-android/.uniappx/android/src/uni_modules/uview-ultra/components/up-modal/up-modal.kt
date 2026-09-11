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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenUniModulesUviewUltraComponentsUpModalUpModal : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
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
    open var customClass: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpModalUpModal) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpModalUpModal
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val loading = ref<Boolean>(false)
            watch(fun(): Boolean {
                return props.show
            }
            , fun(n: Boolean){
                if (n && loading.value) {
                    loading.value = false
                }
            }
            )
            val elCancelText = computed<String>(fun(): String {
                if (props.cancelText == "取消" || props.cancelText == "") {
                    return t("up_common_cancel", _uO())
                }
                return props.cancelText
            }
            )
            val elConfirmText = computed<String>(fun(): String {
                if (props.confirmText == "确认" || props.confirmText == "确定" || props.confirmText == "") {
                    return t("up_common_confirm", _uO())
                }
                return props.confirmText
            }
            )
            val popupCustomStyle = computed(fun(): UTSJSONObject {
                return _uO("borderRadius" to "6px", "overflow" to "hidden", "marginTop" to ("-" + addUnit(props.negativeTop)))
            }
            )
            val modalStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to addUnit(props.width))
            }
            )
            val buttonGroupStyle = computed(fun(): UTSJSONObject {
                return _uO("flexDirection" to if (props.buttonReverse) {
                    "row-reverse"
                } else {
                    "row"
                }
                )
            }
            )
            val cancelTextStyle = computed(fun(): UTSJSONObject {
                return _uO("color" to props.cancelColor)
            }
            )
            val confirmTextStyle = computed(fun(): UTSJSONObject {
                return _uO("color" to props.confirmColor)
            }
            )
            val contentTextStyle = computed(fun(): UTSJSONObject {
                return _uO("textAlign" to props.contentTextAlign)
            }
            )
            val contentStyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style = (props.contentStyle ?: _uO()) as UTSJSONObject
                style["paddingTop"] = "" + (if (props.title != "") {
                    12
                } else {
                    25
                }
                ) + "px"
                return style
            }
            )
            fun gen_confirmHandler_fn() {
                if (props.asyncClose) {
                    loading.value = true
                } else {
                    emit("update:show", false)
                }
                emit("confirm")
            }
            val confirmHandler = ::gen_confirmHandler_fn
            fun gen_cancelHandler_fn() {
                if (props.asyncClose && loading.value) {
                    if (props.asyncCloseTip != "") {
                        uni_showToast(ShowToastOptions(title = props.asyncCloseTip, icon = "none"))
                    }
                    emit("cancelOnAsync")
                } else {
                    if (!props.asyncCancelClose) {
                        emit("update:show", false)
                    }
                }
                emit("cancel")
            }
            val cancelHandler = ::gen_cancelHandler_fn
            fun gen_clickHandler_fn() {
                if (props.closeOnClickOverlay) {
                    emit("update:show", false)
                }
                emit("close")
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cV(_component_up_popup, _uM("mode" to "center", "zoom" to _ctx.zoom, "show" to _ctx.show, "class" to _nC(_uA(
                    _ctx.customClass
                )), "customStyle" to popupCustomStyle.value, "closeOnClickOverlay" to _ctx.closeOnClickOverlay, "safeAreaInsetBottom" to false, "duration" to _ctx.duration, "onClick" to clickHandler), _uM("bottom" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        renderSlot(_ctx.`$slots`, "popupBottom")
                    )
                }
                ), "default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-modal", "style" to _nS(modalStyle.value)), _uA(
                            if (_ctx.title != "") {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-modal__title"), _tD(_ctx.title), 1)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("view", _uM("class" to "weapp-tw-border up-modal__content", "style" to _nS(contentStyleCpu.value)), _uA(
                                renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-modal__content__text", "style" to _nS(contentTextStyle.value)), _tD(_ctx.content), 5)
                                    )
                                }
                                )
                            ), 4),
                            if (_ctx.`$slots`["confirmButton"] != null) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-modal__button-group--confirm-button"), _uA(
                                    renderSlot(_ctx.`$slots`, "confirmButton")
                                ))
                            } else {
                                _cE(Fragment, _uM("key" to 2), _uA(
                                    _cV(_component_up_line),
                                    _cE("view", _uM("class" to "weapp-tw-border up-modal__button-group", "style" to _nS(buttonGroupStyle.value)), _uA(
                                        if (isTrue(_ctx.showCancelButton)) {
                                            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                                "weapp-tw-border up-modal__button-group__wrapper up-modal__button-group__wrapper--cancel",
                                                _uA(
                                                    if ((_ctx.showCancelButton && !_ctx.showConfirmButton)) {
                                                        "up-modal__button-group__wrapper--only-cancel"
                                                    } else {
                                                        ""
                                                    }
                                                )
                                            )), "hover-stay-time" to 150, "hover-class" to "up-modal__button-group__wrapper--hover", "onClick" to cancelHandler), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border up-modal__button-group__wrapper__text", "style" to _nS(cancelTextStyle.value)), _tD(elCancelText.value), 5)
                                            ), 2)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        if (isTrue(_ctx.showConfirmButton && _ctx.showCancelButton)) {
                                            _cV(_component_up_line, _uM("key" to 1, "direction" to "column"))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        if (isTrue(_ctx.showConfirmButton)) {
                                            _cE("view", _uM("key" to 2, "class" to _nC(_uA(
                                                "weapp-tw-border up-modal__button-group__wrapper up-modal__button-group__wrapper--confirm",
                                                _uA(
                                                    if ((!_ctx.showCancelButton && _ctx.showConfirmButton)) {
                                                        "up-modal__button-group__wrapper--only-confirm"
                                                    } else {
                                                        ""
                                                    }
                                                )
                                            )), "hover-stay-time" to 150, "hover-class" to "up-modal__button-group__wrapper--hover", "onClick" to confirmHandler), _uA(
                                                if (isTrue(loading.value)) {
                                                    _cV(_component_up_loading_icon, _uM("key" to 0))
                                                } else {
                                                    _cE("text", _uM("key" to 1, "class" to "weapp-tw-border up-modal__button-group__wrapper__text", "style" to _nS(confirmTextStyle.value)), _tD(elConfirmText.value), 5)
                                                }
                                            ), 2)
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
                    "duration"
                ))
            }
        }
        var name = "up-modal"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-modal" to _pS(_uM("width" to "650rpx", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "overflow" to "hidden")), "up-modal__title" to _pS(_uM("paddingTop" to 25, "fontWeight" to "bold", "textAlign" to "center", "fontSize" to 16, "color" to "#303133")), "up-modal__content" to _pS(_uM("paddingTop" to 12, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-modal__content__text" to _pS(_uM("fontSize" to 14, "color" to "#606266", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-modal__button-group" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-modal__button-group--confirm-button" to _pS(_uM("flexDirection" to "column", "paddingTop" to 0, "paddingRight" to 20, "paddingBottom" to 15, "paddingLeft" to 20)), "up-modal__button-group__wrapper" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "height" to 48)), "up-modal__button-group__wrapper--confirm" to _pS(_uM("height" to 48, "lineHeight" to "48px", "fontSize" to 16, "color" to "#606266", "textAlign" to "center", "backgroundColor" to "#ffffff")), "up-modal__button-group__wrapper--only-cancel" to _pS(_uM("borderBottomLeftRadius" to 6, "borderBottomRightRadius" to 6)), "up-modal__button-group__wrapper--only-confirm" to _pS(_uM("borderBottomLeftRadius" to 6, "borderBottomRightRadius" to 6)), "up-modal__button-group__wrapper--cancel" to _pS(_uM("height" to 48, "lineHeight" to "48px", "fontSize" to 16, "color" to "#606266", "textAlign" to "center", "backgroundColor" to "#ffffff")), "up-modal__button-group__wrapper--hover" to _pS(_uM("backgroundColor" to "#e6e6e6")), "up-modal__button-group__wrapper__text" to _pS(_uM("color" to "#606266", "fontSize" to 16, "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("confirm" to null, "cancel" to null, "close" to null, "update:show" to null, "cancelOnAsync" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to false), "title" to _uM("type" to "String", "default" to ""), "content" to _uM("type" to "String", "default" to ""), "confirmText" to _uM("type" to "String", "default" to "确认"), "cancelText" to _uM("type" to "String", "default" to "取消"), "showConfirmButton" to _uM("type" to "Boolean", "default" to true), "showCancelButton" to _uM("type" to "Boolean", "default" to false), "confirmColor" to _uM("type" to "String", "default" to "#2979ff"), "cancelColor" to _uM("type" to "String", "default" to "#606266"), "buttonReverse" to _uM("type" to "Boolean", "default" to false), "zoom" to _uM("type" to "Boolean", "default" to true), "asyncClose" to _uM("type" to "Boolean", "default" to false), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to false), "negativeTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "650rpx"), "confirmButtonShape" to _uM("type" to "String", "default" to ""), "duration" to _uM("type" to "Number", "default" to 400), "contentTextAlign" to _uM("type" to "String", "default" to "left"), "asyncCloseTip" to _uM("type" to "String", "default" to ""), "asyncCancelClose" to _uM("type" to "Boolean", "default" to false), "contentStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "customClass" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
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
            "contentStyle",
            "customClass"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
