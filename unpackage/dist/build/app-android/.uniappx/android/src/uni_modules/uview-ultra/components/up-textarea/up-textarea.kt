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
open class GenUniModulesUviewUltraComponentsUpTextareaUpTextarea : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(newVal: String, oldVal: String) {
            this.innerValue = newVal
            this.firstChange = false
            this.changeFromInner = false
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to _nC(_uA(
            "up-textarea",
            _ctx.textareaClass
        )), "style" to _nS(_ctx.textareaStyle)), _uA(
            _cE("textarea", _uM("class" to "up-textarea__field", "value" to _ctx.innerValue, "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height))), "placeholder" to _ctx.placeholder, "placeholder-style" to _ctx.addStyle(_ctx.placeholderStyle), "placeholder-class" to _ctx.placeholderClass, "disabled" to _ctx.disabled, "focus" to _ctx.focus, "autoHeight" to _ctx.autoHeight, "fixed" to _ctx.fixed, "cursorSpacing" to _ctx.cursorSpacing, "cursor" to _ctx.cursor, "showConfirmBar" to _ctx.showConfirmBar, "selectionStart" to _ctx.selectionStart, "selectionEnd" to _ctx.selectionEnd, "adjustPosition" to _ctx.adjustPosition, "disableDefaultPadding" to _ctx.disableDefaultPadding, "holdKeyboard" to _ctx.holdKeyboard, "maxlength" to _ctx.maxlength, "confirm-type" to _ctx.confirmType, "ignoreCompositionEvent" to _ctx.ignoreCompositionEvent, "onFocus" to _ctx.onFocus, "onBlur" to _ctx.onBlur, "onLinechange" to _ctx.onLinechange, "onInput" to _ctx.onInput, "onConfirm" to _ctx.onConfirm, "onKeyboardheightchange" to _ctx.onKeyboardheightchange), null, 44, _uA(
                "value",
                "placeholder",
                "placeholder-style",
                "placeholder-class",
                "disabled",
                "focus",
                "autoHeight",
                "fixed",
                "cursorSpacing",
                "cursor",
                "showConfirmBar",
                "selectionStart",
                "selectionEnd",
                "adjustPosition",
                "disableDefaultPadding",
                "holdKeyboard",
                "maxlength",
                "confirm-type",
                "ignoreCompositionEvent",
                "onFocus",
                "onBlur",
                "onLinechange",
                "onInput",
                "onConfirm",
                "onKeyboardheightchange"
            )),
            if (isTrue(_ctx.count)) {
                _cE("text", _uM("key" to 0, "class" to "up-textarea__count", "style" to _nS(_uM("background-color" to if (isTruthy(_ctx.disabled)) {
                    "transparent"
                } else {
                    "#fff"
                }))), _tD(_ctx.innerValue.length) + "/" + _tD(_ctx.maxlength), 5)
            } else {
                _cC("v-if", true)
            }
        ), 6)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: String by `$props`
    open var placeholder: String by `$props`
    open var placeholderClass: String by `$props`
    open var placeholderStyle: Any by `$props`
    open var height: Any by `$props`
    open var confirmType: String by `$props`
    open var disabled: Boolean by `$props`
    open var count: Boolean by `$props`
    open var focus: Boolean by `$props`
    open var autoHeight: Boolean by `$props`
    open var fixed: Boolean by `$props`
    open var cursorSpacing: Number by `$props`
    open var cursor: Any by `$props`
    open var showConfirmBar: Boolean by `$props`
    open var selectionStart: Number by `$props`
    open var selectionEnd: Number by `$props`
    open var adjustPosition: Boolean by `$props`
    open var disableDefaultPadding: Boolean by `$props`
    open var holdKeyboard: Boolean by `$props`
    open var maxlength: Any by `$props`
    open var border: String by `$props`
    open var formatter: Any by `$props`
    open var ignoreCompositionEvent: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var innerValue: String by `$data`
    open var focused: Boolean by `$data`
    open var firstChange: Boolean by `$data`
    open var changeFromInner: Boolean by `$data`
    open var innerFormatter: Function<*> by `$data`
    open var textareaClass: String by `$data`
    open var textareaStyle: Any by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "innerValue" to "", "focused" to false, "firstChange" to true, "changeFromInner" to false, "innerFormatter" to defaultFormat as Function<*>, "textareaClass" to computed<String>(fun(): String {
            var classes: UTSArray<String> = _uA()
            var _this = this
            var border = _this.border
            var disabled = _this.disabled
            if (border === "surround") {
                classes = classes.concat(_uA(
                    "up-border",
                    "up-textarea--radius"
                ))
            }
            if (border === "bottom") {
                classes = classes.concat(_uA(
                    "up-border-bottom",
                    "up-textarea--no-radius"
                ))
            }
            if (isTruthy(disabled)) {
                classes.push("up-textarea--disabled")
            }
            return classes.join(" ")
        }
        ), "textareaStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO()
            return deepMerge(style, uni.UNI5198058.addStyle(this.customStyle))
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(style: Any): Any {
        return uni.UNI5198058.addStyle(style)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(str: Any): String {
        return uni.UNI5198058.addUnit(str)
    }
    open var setFormatter = ::gen_setFormatter_fn
    open fun gen_setFormatter_fn(e: Function<*>) {
        this.innerFormatter = e
    }
    open var onFocus = ::gen_onFocus_fn
    open fun gen_onFocus_fn(e: UniTextareaFocusEvent): Unit {
        this.`$emit`("focus", e)
    }
    open var onBlur = ::gen_onBlur_fn
    open fun gen_onBlur_fn(e: UniTextareaBlurEvent): Unit {
        this.`$emit`("blur", e)
        formValidate(this, "blur")
    }
    open var onLinechange = ::gen_onLinechange_fn
    open fun gen_onLinechange_fn(e: UniTextareaLineChangeEvent): Unit {
        this.`$emit`("linechange", e)
    }
    open var onInput = ::gen_onInput_fn
    open fun gen_onInput_fn(e: UniInputEvent): Unit {
        var value = e.detail.value
        val formatValue = value
        this.innerValue = value
        this.`$nextTick`(fun(){
            this.innerValue = formatValue
            this.valueChange()
        }
        )
    }
    open var valueChange = ::gen_valueChange_fn
    open fun gen_valueChange_fn(): Unit {
        val value = this.innerValue
        this.`$nextTick`(fun(){
            this.`$emit`("update:modelValue", value)
            this.changeFromInner = true
            this.`$emit`("change", value)
            formValidate(this, "change")
        }
        )
    }
    open var onConfirm = ::gen_onConfirm_fn
    open fun gen_onConfirm_fn(e: UniInputConfirmEvent) {
        this.`$emit`("confirm", e)
    }
    open var onKeyboardheightchange = ::gen_onKeyboardheightchange_fn
    open fun gen_onKeyboardheightchange_fn(e: UniInputKeyboardHeightChangeEvent) {
        this.`$emit`("keyboardheightchange", e)
    }
    companion object {
        var name = "up-textarea"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-textarea" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "backgroundColor" to "#ffffff", "position" to "relative", "display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "paddingTop" to 9, "paddingRight" to 9, "paddingBottom" to 9, "paddingLeft" to 9)), "up-textarea--radius" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-textarea--no-radius" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomRightRadius" to 0, "borderBottomLeftRadius" to 0)), "up-textarea--disabled" to _pS(_uM("backgroundColor" to "#f5f7fa")), "up-textarea__field" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "fontSize" to 15, "color" to "#606266", "width" to "100%")), "up-textarea__count" to _pS(_uM("position" to "absolute", "right" to 5, "bottom" to 2, "fontSize" to 12, "color" to "#909193", "backgroundColor" to "#ffffff", "paddingTop" to 1, "paddingRight" to 4, "paddingBottom" to 1, "paddingLeft" to 4)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "linechange" to null, "focus" to null, "blur" to null, "change" to null, "confirm" to null, "keyboardheightchange" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "String", "default" to crtProp__11["value"]), "placeholder" to _uM("type" to _uA(
            "String"
        ), "default" to crtProp__11["placeholder"]), "placeholderClass" to _uM("type" to "String", "default" to crtPropInput["placeholderClass"]), "placeholderStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to crtPropInput["placeholderStyle"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["height"]), "confirmType" to _uM("type" to "String", "default" to crtProp__11["confirmType"]), "disabled" to _uM("type" to "Boolean", "default" to crtProp__11["disabled"]), "count" to _uM("type" to "Boolean", "default" to crtProp__11["count"]), "focus" to _uM("type" to "Boolean", "default" to crtProp__11["focus"]), "autoHeight" to _uM("type" to "Boolean", "default" to crtProp__11["autoHeight"]), "fixed" to _uM("type" to "Boolean", "default" to crtProp__11["fixed"]), "cursorSpacing" to _uM("type" to "Number", "default" to crtProp__11["cursorSpacing"]), "cursor" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["cursor"]), "showConfirmBar" to _uM("type" to "Boolean", "default" to crtProp__11["showConfirmBar"]), "selectionStart" to _uM("type" to "Number", "default" to crtProp__11["selectionStart"]), "selectionEnd" to _uM("type" to "Number", "default" to crtProp__11["selectionEnd"]), "adjustPosition" to _uM("type" to "Boolean", "default" to crtProp__11["adjustPosition"]), "disableDefaultPadding" to _uM("type" to "Boolean", "default" to crtProp__11["disableDefaultPadding"]), "holdKeyboard" to _uM("type" to "Boolean", "default" to crtProp__11["holdKeyboard"]), "maxlength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["maxlength"]), "border" to _uM("type" to "String", "default" to crtProp__11["border"]), "formatter" to _uM("type" to _uA(
            "Function"
        ), "default" to crtProp__11["formatter"]), "ignoreCompositionEvent" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "placeholder",
            "placeholderClass",
            "placeholderStyle",
            "height",
            "confirmType",
            "disabled",
            "count",
            "focus",
            "autoHeight",
            "fixed",
            "cursorSpacing",
            "cursor",
            "showConfirmBar",
            "selectionStart",
            "selectionEnd",
            "adjustPosition",
            "disableDefaultPadding",
            "holdKeyboard",
            "maxlength",
            "border",
            "formatter",
            "ignoreCompositionEvent"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
