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
import io.dcloud.uniapp.extapi.hideKeyboard as uni_hideKeyboard
open class GenUniModulesUviewUltraComponentsUpSearchUpSearch : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var shape: String by `$props`
    open var bgColor: String by `$props`
    open var placeholder: String by `$props`
    open var clearabled: Boolean by `$props`
    open var focus: Boolean by `$props`
    open var showAction: Boolean by `$props`
    open var actionStyle: Any by `$props`
    open var actionText: String by `$props`
    open var inputAlign: String by `$props`
    open var inputStyle: Any by `$props`
    open var disabled: Boolean by `$props`
    open var borderColor: String by `$props`
    open var searchIconColor: String by `$props`
    open var searchIconSize: Any by `$props`
    open var color: String by `$props`
    open var placeholderColor: String by `$props`
    open var searchIcon: String by `$props`
    open var iconPosition: String by `$props`
    open var margin: String by `$props`
    open var animation: Boolean by `$props`
    open var modelValue: Any by `$props`
    open var maxlength: Any by `$props`
    open var height: Any by `$props`
    open var label: String by `$props`
    open var adjustPosition: Boolean by `$props`
    open var autoBlur: Boolean by `$props`
    open var onlyClearableOnFocused: Boolean by `$props`
    open var customStyle: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var clear: () -> Unit
        get() {
            return unref(this.`$exposed`["clear"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "clear", value)
        }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSearchUpSearch, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSearchUpSearch
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val keyword = ref<String>(props.modelValue.toString())
            val show = ref<Boolean>(false)
            val focused = ref<Boolean>(false)
            watch(fun(): Any {
                return props.modelValue
            }
            , fun(nVal: Any){
                keyword.value = if (nVal != null) {
                    nVal.toString()
                } else {
                    ""
                }
            }
            )
            val searchStyle = computed(fun(): UTSJSONObject {
                val base: UTSJSONObject = _uO("margin" to props.margin)
                val custom = addStyle(props.customStyle) as UTSJSONObject
                return deepMerge(base, custom) as UTSJSONObject
            }
            )
            val contentStyle = computed(fun(): UTSJSONObject {
                return _uO("backgroundColor" to props.bgColor, "borderRadius" to if (props.shape == "round") {
                    "100px"
                } else {
                    "4px"
                }
                , "borderColor" to props.borderColor)
            }
            )
            val inputMergedStyle = computed(fun(): UTSJSONObject {
                val base: UTSJSONObject = _uO("pointerEvents" to if (props.disabled) {
                    "none"
                } else {
                    "auto"
                }
                , "textAlign" to props.inputAlign, "color" to props.color, "backgroundColor" to props.bgColor, "height" to addUnit(props.height))
                val custom = (props.inputStyle ?: _uO()) as UTSJSONObject
                return deepMerge(base, custom) as UTSJSONObject
            }
            )
            val actionCustomStyle = computed(fun(): UTSJSONObject {
                return (props.actionStyle ?: _uO()) as UTSJSONObject
            }
            )
            val showActionBtn = computed<Boolean>(fun(): Boolean {
                return !props.animation && props.showAction
            }
            )
            val isShowClear = computed<Boolean>(fun(): Boolean {
                if (!props.clearabled) {
                    return false
                }
                if (props.onlyClearableOnFocused) {
                    return !!focused.value && keyword.value != ""
                } else {
                    return keyword.value != ""
                }
            }
            )
            onMounted(fun(){
                focused.value = props.focus
            }
            )
            fun gen_inputChange_fn(e: UniInputEvent) {
                keyword.value = e.detail.value
                emit("update:modelValue", keyword.value)
                emit("change", keyword.value)
            }
            val inputChange = ::gen_inputChange_fn
            fun gen_clear_fn() {
                keyword.value = ""
                emit("update:modelValue", "")
                emit("change", "")
                nextTick(fun(){
                    emit("clear")
                }
                )
            }
            val clear = ::gen_clear_fn
            fun gen_search_fn(e: UniInputConfirmEvent) {
                emit("search", e.detail.value)
                try {
                    uni_hideKeyboard(null)
                }
                 catch (err: Throwable) {}
            }
            val search = ::gen_search_fn
            fun gen_custom_fn() {
                emit("custom", keyword.value)
                try {
                    uni_hideKeyboard(null)
                }
                 catch (err: Throwable) {}
            }
            val custom = ::gen_custom_fn
            fun gen_getFocus_fn() {
                focused.value = true
                if (props.animation && props.showAction) {
                    show.value = true
                }
                emit("focus", keyword.value)
            }
            val getFocus = ::gen_getFocus_fn
            fun gen_blurFunc_fn() {
                setTimeout(fun(){
                    focused.value = false
                }
                , 100)
                show.value = false
                emit("blur", keyword.value)
            }
            val blurFunc = ::gen_blurFunc_fn
            fun gen_clickHandler_fn() {
                if (props.disabled) {
                    emit("click")
                }
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_clickIcon_fn(e: UniPointerEvent) {
                emit("clickIcon", keyword.value)
                try {
                    uni_hideKeyboard(null)
                }
                 catch (err: Throwable) {}
            }
            val clickIcon = ::gen_clickIcon_fn
            __expose(_uM("clear" to clear))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-search",
                    _uA(
                        if (_ctx.iconPosition == "right") {
                            "up-search__reverse"
                        } else {
                            ""
                        }
                    )
                )), "onClick" to clickHandler, "style" to _nS(searchStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-search__content", "style" to _nS(contentStyle.value)), _uA(
                        if (isTrue(_ctx.`$slots`["label"] != null || _ctx.label != "")) {
                            renderSlot(_ctx.`$slots`, "label", _uM("key" to 0), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border up-search__content__label"), _tD(_ctx.label), 1)
                                )
                            })
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        _cE("view", _uM("class" to "weapp-tw-border up-search__content__icon"), _uA(
                            _cV(_component_up_icon, _uM("onClick" to clickIcon, "size" to _ctx.searchIconSize, "name" to _ctx.searchIcon, "color" to if (_ctx.searchIconColor != "") {
                                _ctx.searchIconColor
                            } else {
                                _ctx.color
                            }
                            ), null, 8, _uA(
                                "size",
                                "name",
                                "color"
                            ))
                        )),
                        _cE("input", _uM("confirm-type" to "search", "onBlur" to blurFunc, "value" to keyword.value, "onConfirm" to search, "onInput" to inputChange, "disabled" to _ctx.disabled, "onFocus" to getFocus, "focus" to _ctx.focus, "maxlength" to _ctx.maxlength, "adjust-position" to _ctx.adjustPosition, "auto-blur" to _ctx.autoBlur, "placeholder-class" to "up-search__content__input--placeholder", "placeholder" to _ctx.placeholder, "placeholder-style" to ("color: " + _ctx.placeholderColor), "class" to "up-search__content__input", "type" to "text", "style" to _nS(inputMergedStyle.value)), null, 44, _uA(
                            "value",
                            "disabled",
                            "focus",
                            "maxlength",
                            "adjust-position",
                            "auto-blur",
                            "placeholder",
                            "placeholder-style"
                        )),
                        if (isTrue(isShowClear.value)) {
                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-search__content__icon up-search__content__close", "onClick" to clear), _uA(
                                _cV(_component_up_icon, _uM("name" to "close", "size" to "11", "color" to "#ffffff", "customStyle" to "line-height: 12px"))
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        renderSlot(_ctx.`$slots`, "inputRight")
                    ), 4),
                    _cE("text", _uM("style" to _nS(actionCustomStyle.value), "class" to _nC(_uA(
                        "weapp-tw-border up-search__action",
                        _uA(
                            if ((showActionBtn.value || show.value)) {
                                "up-search__action--active"
                            } else {
                                ""
                            }
                        )
                    )), "onClick" to withModifiers(custom, _uA(
                        "stop",
                        "prevent"
                    ))), _tD(_ctx.actionText), 7)
                ), 6)
            }
        }
        var name = "up-search"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-search" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-search__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 0, "paddingRight" to 10, "paddingBottom" to 0, "paddingLeft" to 10, "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "space-between", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "rgba(0,0,0,0)", "borderRightColor" to "rgba(0,0,0,0)", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "overflow" to "hidden")), "up-search__content__icon" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-search__content__label" to _pS(_uM("color" to "#303133", "fontSize" to 14, "marginTop" to 0, "marginRight" to 4, "marginBottom" to 0, "marginLeft" to 4)), "up-search__content__close" to _pS(_uM("width" to 20, "height" to 20, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#C6C7CB", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "transform" to "scale(0.82)")), "up-search__content__input" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "fontSize" to 14, "lineHeight" to 1, "marginTop" to 0, "marginRight" to 5, "marginBottom" to 0, "marginLeft" to 5, "color" to "#303133")), "up-search__content__input--placeholder" to _pS(_uM("color" to "#909193")), "up-search__action" to _pS(_uM("fontSize" to 14, "color" to "#303133", "width" to 0, "overflow" to "hidden", "transitionProperty" to "width", "transitionDuration" to "0.3s", "whiteSpace" to "nowrap", "textAlign" to "center")), "up-search__action--active" to _pS(_uM("width" to 40, "marginLeft" to 5)), "@TRANSITION" to _uM("up-search__action" to _uM("property" to "width", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("clear" to null, "search" to null, "custom" to null, "focus" to null, "blur" to null, "click" to null, "clickIcon" to null, "update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "shape" to _uM("type" to "String", "default" to "round"), "bgColor" to _uM("type" to "String", "default" to "#f2f2f2"), "placeholder" to _uM("type" to "String", "default" to "请输入关键字"), "clearabled" to _uM("type" to "Boolean", "default" to true), "focus" to _uM("type" to "Boolean", "default" to false), "showAction" to _uM("type" to "Boolean", "default" to true), "actionStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "actionText" to _uM("type" to "String", "default" to "搜索"), "inputAlign" to _uM("type" to "String", "default" to "left"), "inputStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "disabled" to _uM("type" to "Boolean", "default" to false), "borderColor" to _uM("type" to "String", "default" to "transparent"), "searchIconColor" to _uM("type" to "String", "default" to "#909399"), "searchIconSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 22), "color" to _uM("type" to "String", "default" to "#606266"), "placeholderColor" to _uM("type" to "String", "default" to "#909399"), "searchIcon" to _uM("type" to "String", "default" to "search"), "iconPosition" to _uM("type" to "String", "default" to "left"), "margin" to _uM("type" to "String", "default" to "0"), "animation" to _uM("type" to "Boolean", "default" to false), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "maxlength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to -1), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 34), "label" to _uM("type" to "String", "default" to ""), "adjustPosition" to _uM("type" to "Boolean", "default" to true), "autoBlur" to _uM("type" to "Boolean", "default" to false), "onlyClearableOnFocused" to _uM("type" to "Boolean", "default" to true), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "shape",
            "bgColor",
            "placeholder",
            "clearabled",
            "focus",
            "showAction",
            "actionStyle",
            "actionText",
            "inputAlign",
            "inputStyle",
            "disabled",
            "borderColor",
            "searchIconColor",
            "searchIconSize",
            "color",
            "placeholderColor",
            "searchIcon",
            "iconPosition",
            "margin",
            "animation",
            "modelValue",
            "maxlength",
            "height",
            "label",
            "adjustPosition",
            "autoBlur",
            "onlyClearableOnFocused",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
