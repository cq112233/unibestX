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
import io.dcloud.uniapp.extapi.hideKeyboard as uni_hideKeyboard
open class GenUniModulesUviewUltraComponentsUpSearchUpSearch : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.focused = this.focus
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.keyword
        }
        , fun(nVal: String) {
            this.`$emit`("update:modelValue", nVal)
            this.`$emit`("change", nVal)
        }
        )
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(nVal: Any) {}, WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-search",
            _uA(
                if (_ctx.iconPosition === "right") {
                    "up-search__reverse"
                } else {
                    ""
                }
            )
        )), "onClick" to _ctx.clickHandler, "style" to _nS(_uA(
            _uM("margin" to _ctx.margin),
            _ctx.addStyle(_ctx.customStyle)
        ))), _uA(
            _cE("view", _uM("class" to "up-search__content", "style" to _nS(_uM("backgroundColor" to _ctx.bgColor, "borderRadius" to if (_ctx.shape == "round") {
                "100px"
            } else {
                "4px"
            }
            , "borderColor" to _ctx.borderColor))), _uA(
                if (isTrue(_ctx.`$slots`["label"] != null || _ctx.label != null)) {
                    renderSlot(_ctx.`$slots`, "label", _uM("key" to 0), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("class" to "up-search__content__label"), _tD(_ctx.label), 1)
                        )
                    })
                } else {
                    _cC("v-if", true)
                }
                ,
                _cE("view", _uM("class" to "up-search__content__icon"), _uA(
                    _cV(_component_up_icon, _uM("onClick" to _ctx.clickIcon, "size" to _ctx.searchIconSize, "name" to _ctx.searchIcon, "color" to if (_ctx.searchIconColor != "") {
                        _ctx.searchIconColor
                    } else {
                        _ctx.color
                    }
                    ), null, 8, _uA(
                        "onClick",
                        "size",
                        "name",
                        "color"
                    ))
                )),
                _cE("input", _uM("confirm-type" to "search", "onBlur" to _ctx.blurFunc, "value" to _ctx.keyword, "onConfirm" to _ctx.search, "onInput" to _ctx.inputChange, "disabled" to _ctx.disabled, "onFocus" to _ctx.getFocus, "focus" to _ctx.focus, "maxlength" to _ctx.maxlength, "adjust-position" to _ctx.adjustPosition, "auto-blur" to _ctx.autoBlur, "placeholder-class" to "up-search__content__input--placeholder", "placeholder" to _ctx.placeholder, "placeholder-style" to ("color: " + _ctx.placeholderColor), "class" to "up-search__content__input", "type" to "text", "style" to _nS(_uA(
                    _uM("pointerEvents" to if (_ctx.disabled) {
                        "none"
                    } else {
                        "auto"
                    }
                    , "textAlign" to _ctx.inputAlign, "color" to _ctx.color, "backgroundColor" to _ctx.bgColor, "height" to _ctx.addUnit(_ctx.height)),
                    _ctx.inputStyle
                ))), null, 44, _uA(
                    "onBlur",
                    "value",
                    "onConfirm",
                    "onInput",
                    "disabled",
                    "onFocus",
                    "focus",
                    "maxlength",
                    "adjust-position",
                    "auto-blur",
                    "placeholder",
                    "placeholder-style"
                )),
                if (isTrue(_ctx.isShowClear)) {
                    _cE("view", _uM("key" to 1, "class" to "up-search__content__icon up-search__content__close", "onClick" to _ctx.clear), _uA(
                        _cV(_component_up_icon, _uM("name" to "close", "size" to "11", "color" to "#ffffff", "customStyle" to "line-height: 12px"))
                    ), 8, _uA(
                        "onClick"
                    ))
                } else {
                    _cC("v-if", true)
                }
                ,
                renderSlot(_ctx.`$slots`, "inputRight")
            ), 4),
            _cE("text", _uM("style" to _nS(_uA(
                _ctx.actionStyle
            )), "class" to _nC(_uA(
                "up-search__action",
                _uA(
                    if ((_ctx.showActionBtn || _ctx.show)) {
                        "up-search__action--active"
                    } else {
                        ""
                    }
                )
            )), "onClick" to withModifiers(_ctx.custom, _uA(
                "stop",
                "prevent"
            ))), _tD(_ctx.actionText), 15, _uA(
                "onClick"
            ))
        ), 14, _uA(
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: Any by `$props`
    open var shape: String by `$props`
    open var bgColor: String by `$props`
    open var placeholder: String by `$props`
    open var clearabled: Boolean by `$props`
    open var onlyClearableOnFocused: Boolean by `$props`
    open var focus: Boolean by `$props`
    open var showAction: Boolean by `$props`
    open var actionText: String by `$props`
    open var label: Any? by `$props`
    open var inputAlign: String by `$props`
    open var disabled: Boolean by `$props`
    open var animation: Boolean by `$props`
    open var borderColor: String by `$props`
    open var searchIconColor: String by `$props`
    open var searchIconSize: Any by `$props`
    open var color: String by `$props`
    open var placeholderColor: String by `$props`
    open var searchIcon: String by `$props`
    open var margin: String by `$props`
    open var iconPosition: String by `$props`
    open var maxlength: Any by `$props`
    open var height: Any by `$props`
    open var adjustPosition: Boolean by `$props`
    open var autoBlur: Boolean by `$props`
    open var inputStyle: UTSJSONObject by `$props`
    open var actionStyle: UTSJSONObject by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var keyword: String by `$data`
    open var show: Boolean by `$data`
    open var focused: Boolean by `$data`
    open var showActionBtn: Boolean by `$data`
    open var isShowClear: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "keyword" to "", "show" to false, "focused" to false, "showActionBtn" to computed<Boolean>(fun(): Boolean {
            return !this.animation && this.showAction
        }
        ), "isShowClear" to computed<Boolean>(fun(): Boolean {
            var clearabled = this.`$props`["clearabled"] as Boolean
            var focused = this.`$data`["focused"] as Boolean
            var keyword = this.`$data`["keyword"] as String
            var onlyClearableOnFocused = this.`$props`["onlyClearableOnFocused"] as Boolean
            if (!clearabled) {
                return false
            }
            if (onlyClearableOnFocused) {
                return !!focused && keyword !== ""
            } else {
                return keyword !== ""
            }
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var inputChange = ::gen_inputChange_fn
    open fun gen_inputChange_fn(e: UniInputEvent) {
        this.keyword = e.detail.value
    }
    open var clear = ::gen_clear_fn
    open fun gen_clear_fn() {
        this.keyword = ""
        this.`$nextTick`(fun(){
            this.`$emit`("clear")
        }
        )
    }
    open var search = ::gen_search_fn
    open fun gen_search_fn(e: UniInputConfirmEvent) {
        this.`$emit`("search", e.detail.value)
        try {
            uni_hideKeyboard(null)
        }
         catch (e: Throwable) {}
    }
    open var custom = ::gen_custom_fn
    open fun gen_custom_fn() {
        this.`$emit`("custom", this.keyword)
        try {
            uni_hideKeyboard(null)
        }
         catch (e: Throwable) {}
    }
    open var getFocus = ::gen_getFocus_fn
    open fun gen_getFocus_fn() {
        this.focused = true
        if (this.animation && this.showAction) {
            this.show = true
        }
        this.`$emit`("focus", this.keyword)
    }
    open var blurFunc = ::gen_blurFunc_fn
    open fun gen_blurFunc_fn() {
        setTimeout(fun(){
            this.focused = false
        }
        , 100)
        this.show = false
        this.`$emit`("blur", this.keyword)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        if (this.disabled) {
            this.`$emit`("click")
        }
    }
    open var clickIcon = ::gen_clickIcon_fn
    open fun gen_clickIcon_fn(e: UniPointerEvent) {
        this.`$emit`("clickIcon", this.keyword)
        try {
            uni_hideKeyboard(null)
        }
         catch (e: Throwable) {}
    }
    companion object {
        var name = "up-search"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-search" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-search__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 0, "paddingRight" to 10, "paddingBottom" to 0, "paddingLeft" to 10, "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "space-between", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "rgba(0,0,0,0)", "borderRightColor" to "rgba(0,0,0,0)", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "overflow" to "hidden")), "up-search__content__icon" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-search__content__label" to _pS(_uM("color" to "#303133", "fontSize" to 14, "marginTop" to 0, "marginRight" to 4, "marginBottom" to 0, "marginLeft" to 4)), "up-search__content__close" to _pS(_uM("width" to 20, "height" to 20, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "backgroundColor" to "#C6C7CB", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "transform" to "scale(0.82)")), "up-search__content__input" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "fontSize" to 14, "marginTop" to 0, "marginRight" to 5, "marginBottom" to 0, "marginLeft" to 5, "color" to "#303133")), "up-search__content__input--placeholder" to _pS(_uM("color" to "#909193")), "up-search__action" to _pS(_uM("fontSize" to 14, "color" to "#303133", "width" to 0, "overflow" to "hidden", "transitionProperty" to "width", "transitionDuration" to "0.3s", "whiteSpace" to "nowrap", "textAlign" to "center")), "up-search__action--active" to _pS(_uM("width" to 40, "marginLeft" to 5)), "@TRANSITION" to _uM("up-search__action" to _uM("property" to "width", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("clear" to null, "search" to null, "custom" to null, "focus" to null, "blur" to null, "click" to null, "clickIcon" to null, "update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__18["value"]), "shape" to _uM("type" to "String", "default" to crtProp__18["shape"]), "bgColor" to _uM("type" to "String", "default" to crtProp__18["bgColor"]), "placeholder" to _uM("type" to "String", "default" to crtProp__18["placeholder"]), "clearabled" to _uM("type" to "Boolean", "default" to crtProp__18["clearabled"]), "onlyClearableOnFocused" to _uM("type" to "Boolean", "default" to true), "focus" to _uM("type" to "Boolean", "default" to crtProp__18["focus"]), "showAction" to _uM("type" to "Boolean", "default" to crtProp__18["showAction"]), "actionText" to _uM("type" to "String", "default" to crtProp__18["actionText"]), "label" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__18["label"]), "inputAlign" to _uM("type" to "String", "default" to crtProp__18["inputAlign"]), "disabled" to _uM("type" to "Boolean", "default" to crtProp__18["disabled"]), "animation" to _uM("type" to "Boolean", "default" to crtProp__18["animation"]), "borderColor" to _uM("type" to "String", "default" to crtProp__18["borderColor"]), "searchIconColor" to _uM("type" to "String", "default" to crtProp__18["searchIconColor"]), "searchIconSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to crtProp__18["searchIconSize"]), "color" to _uM("type" to "String", "default" to crtProp__18["color"]), "placeholderColor" to _uM("type" to "String", "default" to crtProp__18["placeholderColor"]), "searchIcon" to _uM("type" to "String", "default" to crtProp__18["searchIcon"]), "margin" to _uM("type" to "String", "default" to crtProp__18["margin"]), "iconPosition" to _uM("type" to "String", "default" to crtProp__18["iconPosition"]), "maxlength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__18["maxlength"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__18["height"]), "adjustPosition" to _uM("type" to "Boolean", "default" to crtProp__18["adjustPosition"]), "autoBlur" to _uM("type" to "Boolean", "default" to crtProp__18["autoBlur"]), "inputStyle" to _uM("type" to "UTSJSONObject", "default" to crtProp__18["inputStyle"]), "actionStyle" to _uM("type" to "UTSJSONObject", "default" to crtProp__18["actionStyle"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "shape",
            "bgColor",
            "placeholder",
            "clearabled",
            "onlyClearableOnFocused",
            "focus",
            "showAction",
            "actionText",
            "label",
            "inputAlign",
            "disabled",
            "animation",
            "borderColor",
            "searchIconColor",
            "searchIconSize",
            "color",
            "placeholderColor",
            "searchIcon",
            "margin",
            "iconPosition",
            "maxlength",
            "height",
            "adjustPosition",
            "autoBlur",
            "inputStyle",
            "actionStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
