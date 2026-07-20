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
open class GenUniModulesUviewUltraComponentsUpInputUpInput : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: Any by `$props`
    open var type: String by `$props`
    open var fixed: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var disabledColor: String by `$props`
    open var clearable: Boolean by `$props`
    open var password: Boolean by `$props`
    open var maxlength: Any by `$props`
    open var placeholder: String by `$props`
    open var placeholderClass: String by `$props`
    open var placeholderStyle: Any by `$props`
    open var showWordLimit: Boolean by `$props`
    open var confirmType: String by `$props`
    open var confirmHold: Boolean by `$props`
    open var holdKeyboard: Boolean by `$props`
    open var focus: Boolean by `$props`
    open var autoBlur: Boolean by `$props`
    open var disableDefaultPadding: Boolean by `$props`
    open var cursor: Any by `$props`
    open var cursorSpacing: Any by `$props`
    open var selectionStart: Any by `$props`
    open var selectionEnd: Any by `$props`
    open var adjustPosition: Boolean by `$props`
    open var inputAlign: String by `$props`
    open var fontSize: Any by `$props`
    open var color: String by `$props`
    open var prefixIcon: String by `$props`
    open var prefixIconStyle: Any by `$props`
    open var suffixIcon: String by `$props`
    open var suffixIconStyle: Any by `$props`
    open var border: String by `$props`
    open var readonly: Boolean by `$props`
    open var shape: String by `$props`
    open var formatter: Any by `$props`
    open var ignoreCompositionEvent: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpInputUpInput) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpInputUpInput
            val _cache = __ins.renderCache
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val clearInput = ref(false)
            val innerValue = ref<Any>("")
            val focused = ref(false)
            val firstChange = ref(true)
            val changeFromInner = ref(false)
            val defaultFormat = fun(value: String): String {
                return value
            }
            val innerFormatter = ref(defaultFormat)
            val valueChange = fun(kVal: Any, isOut: Boolean) {
                if (clearInput.value) {
                    innerValue.value = ""
                    clearInput.value = false
                }
                setTimeout(fun(){
                    if (!isOut || clearInput.value) {
                        changeFromInner.value = true
                        emit("change", kVal.toString())
                        emit("update:modelValue", kVal.toString())
                    }
                    formValidate(instance, "change")
                }
                , 0)
            }
            watch(fun(): Any {
                return props.modelValue
            }
            , fun(newVal: Any, oldVal: Any){
                if (changeFromInner.value || innerValue.value == newVal) {
                    changeFromInner.value = false
                    return
                }
                innerValue.value = newVal
                if (firstChange.value == false && changeFromInner.value == false) {
                    valueChange(innerValue.value, true)
                } else {
                    if (!firstChange.value) {
                        formValidate(instance, "change")
                    }
                }
                firstChange.value = false
                changeFromInner.value = false
            }
            , WatchOptions(immediate = true))
            val isShowClear = computed(fun(): Boolean {
                return !!props.clearable && !props.readonly && !!focused.value && innerValue.value !== ""
            }
            )
            val inputClass = computed(fun(): String {
                var classes: UTSArray<String> = _uA()
                if (props.border === "surround") {
                    classes = classes.concat(_uA(
                        "up-border",
                        "up-input--radius"
                    ))
                }
                classes.push("up-input--" + props.shape)
                if (props.border === "bottom") {
                    classes = classes.concat(_uA(
                        "up-border-bottom",
                        "up-input--no-radius"
                    ))
                }
                return classes.join(" ")
            }
            )
            val wrapperStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-input/up-input.uvue", 360, 11))
                if (props.disabled) {
                    style["backgroundColor"] = props.disabledColor
                }
                if (props.border === "none") {
                    style["padding"] = "0"
                } else {
                    style["paddingTop"] = "6px"
                    style["paddingBottom"] = "6px"
                    style["paddingLeft"] = "9px"
                    style["paddingRight"] = "9px"
                }
                return deepMerge(style, _uO())
            }
            )
            val inputStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-input/up-input.uvue", 379, 11), "color" to props.color, "fontSize" to addUnit(props.fontSize), "textAlign" to props.inputAlign)
                return style
            }
            )
            val onInput = fun(e: UniInputEvent){
                var value = e.detail.value
                console.log("onInput", value, innerValue.value, " at uni_modules/uview-ultra/components/up-input/up-input.uvue:391")
                innerValue.value = value
                setTimeout(fun(){
                    valueChange(value.toString(), false)
                }
                , 0)
            }
            val onBlur = fun(event: UniInputBlurEvent){
                emit("blur", event.detail.value)
                focused.value = false
                formValidate(instance, "blur")
            }
            val onFocus = fun(event: UniInputFocusEvent){
                focused.value = true
                emit("focus")
            }
            val onConfirm = fun(event: UniInputConfirmEvent){
                emit("confirm", innerValue.value)
            }
            val onkeyboardheightchange = fun(event: UniInputKeyboardHeightChangeEvent){
                emit("keyboardheightchange", event)
            }
            val onClear = fun(){
                clearInput.value = true
                innerValue.value = ""
                setTimeout(fun(){
                    valueChange("", false)
                    emit("clear")
                }
                , 0)
            }
            val clickHandler = fun(){}
            val inputNativeRef = ref(null)
            onMounted(fun(){
                innerValue.value = props.modelValue
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-input",
                    inputClass.value
                )), "style" to _nS(_uA(
                    wrapperStyle.value,
                    _ctx.`$up`.addStyle(_ctx.customStyle)
                ))), _uA(
                    _cE("view", _uM("class" to "up-input__content"), _uA(
                        if (isTrue(_ctx.prefixIcon != "" || _ctx.`$slots`["prefix"] != null)) {
                            _cE("view", _uM("key" to 0, "class" to "up-input__content__prefix-icon"), _uA(
                                renderSlot(_ctx.`$slots`, "prefix", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to _ctx.prefixIcon, "size" to "18", "customStyle" to _ctx.prefixIconStyle), null, 8, _uA(
                                            "name",
                                            "customStyle"
                                        ))
                                    )
                                })
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        _cE("view", _uM("class" to "up-input__content__field-wrapper", "onClick" to clickHandler), _uA(
                            _cE("input", _uM("ref_key" to "inputNativeRef", "ref" to inputNativeRef, "class" to "up-input__content__field-wrapper__field", "style" to _nS(_uA(
                                inputStyle.value
                            )), "type" to _ctx.type, "focus" to _ctx.focus, "cursor" to _ctx.cursor, "value" to innerValue.value, "auto-blur" to _ctx.autoBlur, "disabled" to (_ctx.disabled || _ctx.readonly), "maxlength" to _ctx.maxlength, "placeholder" to _ctx.placeholder, "placeholder-style" to _ctx.placeholderStyle, "placeholder-class" to _ctx.placeholderClass, "confirm-type" to _ctx.confirmType, "confirm-hold" to _ctx.confirmHold, "hold-keyboard" to _ctx.holdKeyboard, "cursor-spacing" to _ctx.cursorSpacing, "adjust-position" to _ctx.adjustPosition, "selection-end" to _ctx.selectionEnd, "selection-start" to _ctx.selectionStart, "password" to (_ctx.password || _ctx.type === "password" || false), "ignoreCompositionEvent" to _ctx.ignoreCompositionEvent, "onInput" to onInput, "onBlur" to onBlur, "onFocus" to onFocus, "onConfirm" to onConfirm, "onKeyboardheightchange" to onkeyboardheightchange), null, 44, _uA(
                                "type",
                                "focus",
                                "cursor",
                                "value",
                                "auto-blur",
                                "disabled",
                                "maxlength",
                                "placeholder",
                                "placeholder-style",
                                "placeholder-class",
                                "confirm-type",
                                "confirm-hold",
                                "hold-keyboard",
                                "cursor-spacing",
                                "adjust-position",
                                "selection-end",
                                "selection-start",
                                "password",
                                "ignoreCompositionEvent"
                            ))
                        )),
                        if (isTrue(isShowClear.value)) {
                            _cE("view", _uM("key" to 1, "class" to "up-input__content__clear", "onClick" to onClear), _uA(
                                _cV(_component_up_icon, _uM("name" to "close", "size" to "11", "color" to "#ffffff", "customStyle" to "line-height: 12px"))
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(_ctx.suffixIcon != "" || _ctx.`$slots`["suffix"] != null)) {
                            _cE("view", _uM("key" to 2, "class" to "up-input__content__subfix-icon"), _uA(
                                renderSlot(_ctx.`$slots`, "suffix", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to _ctx.suffixIcon, "size" to "18", "customStyle" to _ctx.suffixIconStyle), null, 8, _uA(
                                            "name",
                                            "customStyle"
                                        ))
                                    )
                                })
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ))
                ), 6)
            }
        }
        var name = "up-input"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-input" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-input--radius" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-input--square" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-input--no-radius" to _pS(_uM("borderTopLeftRadius" to 0, "borderTopRightRadius" to 0, "borderBottomRightRadius" to 0, "borderBottomLeftRadius" to 0)), "up-input--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-input__content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between")), "up-input__content__field-wrapper" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "marginTop" to 0, "marginRight" to 0, "marginBottom" to 0, "marginLeft" to 0, "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-input__content__field-wrapper__field" to _pS(_uM("textAlign" to "left", "color" to "#303133", "height" to 24, "fontSize" to 15, "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-input__content__clear" to _pS(_uM("width" to 20, "height" to 20, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#c6c7cb", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "transform" to "scale(0.82)", "marginLeft" to 4)), "up-input__content__subfix-icon" to _pS(_uM("marginLeft" to 4)), "up-input__content__prefix-icon" to _pS(_uM("marginRight" to 4)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "focus" to null, "blur" to null, "change" to null, "confirm" to null, "clear" to null, "keyboardheightchange" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getString("input.value")), "type" to _uM("type" to "String", "default" to default__68.getString("input.type")), "fixed" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.fixed")), "disabled" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.disabled")), "disabledColor" to _uM("type" to "String", "default" to default__68.getString("input.disabledColor")), "clearable" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.clearable")), "password" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.password")), "maxlength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("input.maxlength")), "placeholder" to _uM("type" to "String", "default" to default__68.getString("input.placeholder")), "placeholderClass" to _uM("type" to "String", "default" to default__68.getString("input.placeholderClass")), "placeholderStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to default__68.getString("input.placeholderStyle")), "showWordLimit" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.showWordLimit")), "confirmType" to _uM("type" to "String", "default" to default__68.getString("input.confirmType")), "confirmHold" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.confirmHold")), "holdKeyboard" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.holdKeyboard")), "focus" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.focus")), "autoBlur" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.autoBlur")), "disableDefaultPadding" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.disableDefaultPadding")), "cursor" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("input.cursor")), "cursorSpacing" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("input.cursorSpacing")), "selectionStart" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("input.selectionStart")), "selectionEnd" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getNumber("input.selectionEnd")), "adjustPosition" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.adjustPosition")), "inputAlign" to _uM("type" to "String", "default" to default__68.getString("input.inputAlign")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__68.getString("input.fontSize")), "color" to _uM("type" to "String", "default" to default__68.getString("input.color")), "prefixIcon" to _uM("type" to "String", "default" to default__68.getString("input.prefixIcon")), "prefixIconStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to default__68.getString("input.prefixIconStyle")), "suffixIcon" to _uM("type" to "String", "default" to default__68.getString("input.suffixIcon")), "suffixIconStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to default__68.getString("input.suffixIconStyle")), "border" to _uM("type" to "String", "default" to default__68.getString("input.border")), "readonly" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.readonly")), "shape" to _uM("type" to "String", "default" to default__68.getString("input.shape")), "formatter" to _uM("type" to _uA(
            "Function"
        ), "default" to fun(): (`val`: Any) -> Any {
            return fun(kVal: Any): Any {
                return kVal
            }
        }
        ), "ignoreCompositionEvent" to _uM("type" to "Boolean", "default" to default__68.getBoolean("input.ignoreCompositionEvent"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "type",
            "fixed",
            "disabled",
            "disabledColor",
            "clearable",
            "password",
            "maxlength",
            "placeholder",
            "placeholderClass",
            "placeholderStyle",
            "showWordLimit",
            "confirmType",
            "confirmHold",
            "holdKeyboard",
            "focus",
            "autoBlur",
            "disableDefaultPadding",
            "cursor",
            "cursorSpacing",
            "selectionStart",
            "selectionEnd",
            "adjustPosition",
            "inputAlign",
            "fontSize",
            "color",
            "prefixIcon",
            "prefixIconStyle",
            "suffixIcon",
            "suffixIconStyle",
            "border",
            "readonly",
            "shape",
            "formatter",
            "ignoreCompositionEvent"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
