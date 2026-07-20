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
open class GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBox : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.watchChange
        }
        , fun(n: UTSArray<Any>) {
            this.check()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(newV: Any, oldV: Any) {
            if (newV !== this.currentValue) {
                this.currentValue = this.format(newV.toString())
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to "up-number-box"), _uA(
            if (isTrue(_ctx.showMinus && !_ctx.hideMinus && _ctx.`$slots`["minus"] != null)) {
                _cE("view", _uM("key" to 0, "class" to "up-number-box__slot cursor-pointer", "onClick" to withModifiers(fun(){
                    _ctx.clickHandler("minus")
                }, _uA(
                    "stop"
                )), "onTouchstart" to fun(){
                    _ctx.onTouchStart("minus")
                }, "onTouchend" to withModifiers(_ctx.clearTimeout, _uA(
                    "stop"
                ))), _uA(
                    renderSlot(_ctx.`$slots`, "minus")
                ), 40, _uA(
                    "onClick",
                    "onTouchstart",
                    "onTouchend"
                ))
            } else {
                if (isTrue(_ctx.showMinus && !_ctx.hideMinus)) {
                    _cE("view", _uM("key" to 1, "class" to _nC(_uA(
                        "up-number-box__minus cursor-pointer",
                        _uM("up-number-box__minus--disabled" to _ctx.isDisabled("minus"))
                    )), "onClick" to withModifiers(fun(){
                        _ctx.clickHandler("minus")
                    }, _uA(
                        "stop"
                    )), "onTouchstart" to fun(){
                        _ctx.onTouchStart("minus")
                    }, "onTouchend" to withModifiers(_ctx.clearTimeout, _uA(
                        "stop"
                    )), "hover-class" to "up-number-box__minus--hover", "hover-stay-time" to "150", "style" to _nS(_uA(
                        _ctx.buttonStyle("minus")
                    ))), _uA(
                        _cV(_component_up_icon, _uM("name" to "minus", "color" to if (_ctx.isDisabled("minus")) {
                            "#c8c9cc"
                        } else {
                            "#323233"
                        }, "size" to "15", "bold" to "", "customStyle" to _ctx.iconStyle), null, 8, _uA(
                            "color",
                            "customStyle"
                        ))
                    ), 46, _uA(
                        "onClick",
                        "onTouchstart",
                        "onTouchend"
                    ))
                } else {
                    _cC("v-if", true)
                }
            }
            ,
            if (isTrue(!_ctx.hideMinus)) {
                renderSlot(_ctx.`$slots`, "input", _uM("key" to 2), fun(): UTSArray<Any> {
                    return _uA(
                        _cE("input", _uM("disabled" to (_ctx.disabledInput || _ctx.disabled), "cursor-spacing" to _ctx.getCursorSpacing, "class" to _nC(_uA(
                            _uM("up-number-box__input--disabled" to (_ctx.disabled || _ctx.disabledInput)),
                            "up-number-box__input"
                        )), "modelValue" to _ctx.currentValue, "onInput" to _uA<Any?>(fun(`$event`: UniInputEvent){
                            _ctx.currentValue = `$event`.detail.value
                        }, _ctx.onInput), "onBlur" to _ctx.onBlur, "onFocus" to _ctx.onFocus, "type" to "number", "style" to _nS(_uA(
                            _ctx.inputStyle
                        ))), null, 46, _uA(
                            "disabled",
                            "cursor-spacing",
                            "modelValue",
                            "onInput",
                            "onBlur",
                            "onFocus"
                        ))
                    )
                })
            } else {
                _cC("v-if", true)
            }
            ,
            if (isTrue(_ctx.showPlus && _ctx.`$slots`["plus"] != null)) {
                _cE("view", _uM("key" to 3, "class" to "up-number-box__slot cursor-pointer", "onClick" to withModifiers(fun(){
                    _ctx.clickHandler("plus")
                }, _uA(
                    "stop"
                )), "onTouchstart" to fun(){
                    _ctx.onTouchStart("plus")
                }, "onTouchend" to withModifiers(_ctx.clearTimeout, _uA(
                    "stop"
                ))), _uA(
                    renderSlot(_ctx.`$slots`, "plus")
                ), 40, _uA(
                    "onClick",
                    "onTouchstart",
                    "onTouchend"
                ))
            } else {
                if (isTrue(_ctx.showPlus)) {
                    _cE("view", _uM("key" to 4, "class" to _nC(_uA(
                        "up-number-box__plus cursor-pointer",
                        _uM("up-number-box__minus--disabled" to _ctx.isDisabled("plus"))
                    )), "onClick" to withModifiers(fun(){
                        _ctx.clickHandler("plus")
                    }, _uA(
                        "stop"
                    )), "onTouchstart" to fun(){
                        _ctx.onTouchStart("plus")
                    }, "onTouchend" to withModifiers(_ctx.clearTimeout, _uA(
                        "stop"
                    )), "hover-class" to "up-number-box__plus--hover", "hover-stay-time" to "150", "style" to _nS(_uA(
                        _ctx.buttonStyle("plus")
                    ))), _uA(
                        _cV(_component_up_icon, _uM("name" to "plus", "color" to if (_ctx.isDisabled("plus")) {
                            "#c8c9cc"
                        } else {
                            "#323233"
                        }, "size" to "15", "bold" to "", "customStyle" to _ctx.iconStyle), null, 8, _uA(
                            "color",
                            "customStyle"
                        ))
                    ), 46, _uA(
                        "onClick",
                        "onTouchstart",
                        "onTouchend"
                    ))
                } else {
                    _cC("v-if", true)
                }
            }
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: Any by `$props`
    open var modelValue: Any by `$props`
    open var min: Any by `$props`
    open var max: Any by `$props`
    open var step: Any by `$props`
    open var integer: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var disabledInput: Boolean by `$props`
    open var asyncChange: Boolean by `$props`
    open var inputWidth: Any by `$props`
    open var showMinus: Boolean by `$props`
    open var showPlus: Boolean by `$props`
    open var decimalLength: Any by `$props`
    open var longPress: Boolean by `$props`
    open var color: String by `$props`
    open var buttonWidth: Any by `$props`
    open var buttonSize: Any by `$props`
    open var buttonRadius: String by `$props`
    open var bgColor: String by `$props`
    open var disabledBgColor: String by `$props`
    open var inputBgColor: String by `$props`
    open var cursorSpacing: Any by `$props`
    open var disablePlus: Boolean by `$props`
    open var disableMinus: Boolean by `$props`
    open var iconStyle: Any by `$props`
    open var miniMode: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var type: String by `$data`
    open var currentValue: Any by `$data`
    open var longPressTimer: Number? by `$data`
    open var hideMinus: Boolean by `$data`
    open var getCursorSpacing: String by `$data`
    open var inputStyle: UTSJSONObject by `$data`
    open var watchChange: UTSArray<Any> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "type" to "", "currentValue" to "" as Any, "longPressTimer" to null as Number?, "hideMinus" to computed<Boolean>(fun(): Boolean {
            return this.currentValue.toString() == "0" && this.miniMode == true
        }
        ), "getCursorSpacing" to computed<String>(fun(): String {
            return getPx(this.cursorSpacing)
        }
        ), "inputStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val disabled = this.disabled || this.disabledInput
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue", 172, 11), "color" to this.color, "backgroundColor" to if (this.inputBgColor != "") {
                this.inputBgColor
            } else {
                this.bgColor
            }
            , "height" to addUnit(this.buttonSize), "width" to addUnit(this.inputWidth))
            return style
        }
        ), "watchChange" to computed<UTSArray<Any>>(fun(): UTSArray<Any> {
            return _uA(
                this.integer,
                this.decimalLength,
                this.min,
                this.max
            )
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
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.currentValue = this.format(if (this.modelValue != null) {
            (this.modelValue as Any).toString()
        } else {
            "0"
        }
        )
    }
    open var buttonStyle = ::gen_buttonStyle_fn
    open fun gen_buttonStyle_fn(type: String): UTSJSONObject {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue", 199, 11), "backgroundColor" to this.bgColor, "width" to addUnit(this.buttonWidth), "height" to addUnit(this.buttonSize), "borderRadius" to this.buttonRadius)
        if (this.isDisabled(type)) {
            style["backgroundColor"] = this.disabledBgColor
        }
        return style
    }
    @get:JvmName("getIsDisabled0")
    @set:JvmName("setIsDisabled0")
    open var isDisabled = ::gen_isDisabled_fn
    open fun gen_isDisabled_fn(type: String): Boolean {
        if (type === "plus") {
            return (this.disabled || this.disablePlus)
        }
        return (this.disabled || this.disableMinus || parseFloat((this.currentValue as Any).toString()) <= parseFloat((this.min as Any).toString()))
    }
    open var format = ::gen_format_fn
    open fun gen_format_fn(reassignedValue: String): Number {
        var value = reassignedValue
        value = this.filter(value)
        var valueNum: Number = if (value == "") {
            0
        } else {
            parseFloat(value)
        }
        valueNum = Math.max(Math.min(parseFloat(this.max.toString()), parseFloat(value.toString())), parseFloat(this.min.toString()))
        var decimalLength = parseInt(this.decimalLength.toString())
        if (decimalLength != 0 && valueNum != 0) {
            valueNum = parseFloat(valueNum.toFixed(decimalLength))
        }
        return valueNum
    }
    open fun filter(reassignedValue: Any): String {
        var value = reassignedValue
        value = value.toString()
        value = (value as String).replace(UTSRegExp("[^0-9.-]", "g"), "")
        if (this.integer && (value as String).indexOf(".") != -1) {
            value = (value as String).split(".")[0]
        }
        return value as String
    }
    open var check = ::gen_check_fn
    open fun gen_check_fn() {
        val kVal = this.format(this.currentValue.toString())
        if (kVal !== this.currentValue) {
            this.currentValue = kVal
            this.emitChange(kVal)
        }
    }
    open var onFocus = ::gen_onFocus_fn
    open fun gen_onFocus_fn(event: UniInputFocusEvent) {
        this.`$emit`("focus", UTSJSONObject.assign(_uO(), event.detail, _uO("name" to this.name)))
    }
    open var onBlur = ::gen_onBlur_fn
    open fun gen_onBlur_fn(event: UniInputBlurEvent) {
        val value = this.format(event.detail.value)
        this.emitChange(value)
        this.`$emit`("blur", UTSJSONObject.assign(_uO(), event.detail, _uO("name" to this.name)))
    }
    open var onInput = ::gen_onInput_fn
    open fun gen_onInput_fn(e: UniInputEvent) {
        var value = e.detail.value
        if (value === "") {
            this.currentValue = ""
            return
        }
        var formatted = this.filter(value.toString())
        this.emitChange(value)
        if (formatted.indexOf(".") != -1) {
            val pair = formatted.split(".")
            formatted = "" + pair[0] + "." + pair[1].slice(0, parseInt(this.decimalLength.toString()))
        }
        var formatted2 = this.format(formatted)
        this.emitChange(formatted2)
    }
    open fun emitChange(value: Any, type: String = "") {
        if (!this.asyncChange) {
            this.`$nextTick`(fun(){
                this.`$emit`("update:modelValue", value)
                this.currentValue = value
                this.`$forceUpdate`()
            }
            )
        }
        this.`$emit`("change", _uO("value" to parseFloat(value.toString()), "name" to this.name, "type" to type))
    }
    open var onChange = ::gen_onChange_fn
    open fun gen_onChange_fn() {
        val type = this.type
        if (this.isDisabled(type)) {
            return this.`$emit`("overlimit", type)
        }
        val diff = if (type === "minus") {
            0 - parseFloat(this.step.toString())
        } else {
            0 + parseFloat(this.step.toString())
        }
        val value = this.format(this.add(0 + parseFloat(this.currentValue.toString()), diff).toString(10))
        this.emitChange(value, type)
        this.`$emit`(type)
    }
    open var add = ::gen_add_fn
    open fun gen_add_fn(num1: Number, num2: Number): Number {
        val cardinal = Math.pow(10, 10)
        return Math.round((num1 + num2) * cardinal) / cardinal
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(type: String): Unit {
        this.type = type
        this.onChange()
    }
    open var longPressStep = ::gen_longPressStep_fn
    open fun gen_longPressStep_fn() {
        this.clearTimeout()
        this.longPressTimer = setTimeout(fun(){
            this.onChange()
            this.longPressStep()
        }
        , 250)
    }
    open var onTouchStart = ::gen_onTouchStart_fn
    open fun gen_onTouchStart_fn(type: String) {
        if (!this.longPress) {
            return
        }
        this.clearTimeout()
        this.type = type
        this.longPressTimer = setTimeout(fun(){
            this.onChange()
            this.longPressStep()
        }
        , 600)
    }
    open var onTouchEnd = ::gen_onTouchEnd_fn
    open fun gen_onTouchEnd_fn() {
        if (!this.longPress) {
            return
        }
        this.clearTimeout()
    }
    open var clearTimeout = ::gen_clearTimeout_fn
    open fun gen_clearTimeout_fn() {
        clearTimeout(this.longPressTimer ?: 0)
        this.longPressTimer = null
    }
    companion object {
        var name = "up-number-box"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-number-box" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-number-box__plus" to _pS(_uM("width" to 35, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4)), "up-number-box__minus" to _pS(_uM("width" to 35, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "borderTopLeftRadius" to 4, "borderBottomLeftRadius" to 4)), "up-number-box__plus--hover" to _pS(_uM("!backgroundColor" to "#E6E6E6")), "up-number-box__minus--hover" to _pS(_uM("!backgroundColor" to "#E6E6E6")), "up-number-box__plus--disabled" to _pS(_uM("backgroundColor" to "#f7f8fa")), "up-number-box__minus--disabled" to _pS(_uM("backgroundColor" to "#f7f8fa")), "up-number-box__input" to _pS(_uM("textAlign" to "center", "fontSize" to 15, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "marginTop" to 0, "marginRight" to 2, "marginBottom" to 0, "marginLeft" to 2)), "up-number-box__input--disabled" to _pS(_uM("color" to "#c8c9cc", "backgroundColor" to "#f2f3f5")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "focus" to null, "blur" to null, "overlimit" to null, "change" to null, "plus" to null, "minus" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["name"]), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["value"]), "min" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["min"]), "max" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["max"]), "step" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["step"]), "integer" to _uM("type" to "Boolean", "default" to numberBoxProp["integer"]), "disabled" to _uM("type" to "Boolean", "default" to numberBoxProp["disabled"]), "disabledInput" to _uM("type" to "Boolean", "default" to numberBoxProp["disabledInput"]), "asyncChange" to _uM("type" to "Boolean", "default" to numberBoxProp["asyncChange"]), "inputWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["inputWidth"]), "showMinus" to _uM("type" to "Boolean", "default" to numberBoxProp["showMinus"]), "showPlus" to _uM("type" to "Boolean", "default" to numberBoxProp["showPlus"]), "decimalLength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["decimalLength"]), "longPress" to _uM("type" to "Boolean", "default" to numberBoxProp["longPress"]), "color" to _uM("type" to "String", "default" to numberBoxProp["color"]), "buttonWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["buttonWidth"]), "buttonSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["buttonSize"]), "buttonRadius" to _uM("type" to _uA(
            "String"
        ), "default" to numberBoxProp["buttonRadius"]), "bgColor" to _uM("type" to "String", "default" to numberBoxProp["bgColor"]), "disabledBgColor" to _uM("type" to "String", "default" to numberBoxProp["disabledBgColor"]), "inputBgColor" to _uM("type" to "String", "default" to numberBoxProp["inputBgColor"]), "cursorSpacing" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to numberBoxProp["cursorSpacing"]), "disablePlus" to _uM("type" to "Boolean", "default" to numberBoxProp["disablePlus"]), "disableMinus" to _uM("type" to "Boolean", "default" to numberBoxProp["disableMinus"]), "iconStyle" to _uM("type" to _uA(
            "UTSJSONObject",
            "String"
        ), "default" to numberBoxProp["iconStyle"]), "miniMode" to _uM("type" to "Boolean", "default" to numberBoxProp["miniMode"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "name",
            "modelValue",
            "min",
            "max",
            "step",
            "integer",
            "disabled",
            "disabledInput",
            "asyncChange",
            "inputWidth",
            "showMinus",
            "showPlus",
            "decimalLength",
            "longPress",
            "color",
            "buttonWidth",
            "buttonSize",
            "buttonRadius",
            "bgColor",
            "disabledBgColor",
            "inputBgColor",
            "cursorSpacing",
            "disablePlus",
            "disableMinus",
            "iconStyle",
            "miniMode"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
