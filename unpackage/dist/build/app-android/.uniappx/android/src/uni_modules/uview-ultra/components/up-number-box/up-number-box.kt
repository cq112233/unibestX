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
open class GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBox : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBox) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBox
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val type = ref<String>("")
            val currentValue = ref<Any>("")
            val longPressTimer = ref<Number?>(null)
            val hideMinus = computed<Boolean>(fun(): Boolean {
                return currentValue.value.toString() == "0" && props.miniMode == true
            }
            )
            val getCursorSpacing = computed<String>(fun(): String {
                return getPx(props.cursorSpacing)
            }
            )
            val inputStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("color" to props.color, "backgroundColor" to if (props.inputBgColor != "") {
                    props.inputBgColor
                } else {
                    props.bgColor
                }
                , "height" to addUnit(props.buttonSize), "width" to addUnit(props.inputWidth))
                return style
            }
            )
            fun filter(value: Any): String {
                var kVal = value.toString()
                kVal = kVal.replace(UTSRegExp("[^0-9.-]", "g"), "")
                if (props.integer && kVal.indexOf(".") != -1) {
                    kVal = kVal.split(".")[0]
                }
                return kVal
            }
            fun gen_format_fn(value: String): Number {
                val filtered = filter(value)
                var valueNum: Number = if (filtered == "") {
                    0
                } else {
                    parseFloat(filtered)
                }
                val minVal = parseFloat(props.min.toString())
                val maxVal = parseFloat(props.max.toString())
                valueNum = Math.max(Math.min(maxVal, valueNum), minVal)
                val decimalLen = parseInt(props.decimalLength.toString())
                if (decimalLen != 0 && valueNum != 0) {
                    valueNum = parseFloat(valueNum.toFixed(decimalLen))
                }
                return valueNum
            }
            val format = ::gen_format_fn
            fun gen_isDisabled_fn(btnType: String): Boolean {
                if (btnType === "plus") {
                    return props.disabled || props.disablePlus
                }
                return (props.disabled || props.disableMinus || parseFloat(currentValue.value.toString()) <= parseFloat(props.min.toString()))
            }
            val isDisabled = ::gen_isDisabled_fn
            fun gen_buttonStyle_fn(btnType: String): UTSJSONObject {
                val style: UTSJSONObject = _uO("backgroundColor" to props.bgColor, "width" to addUnit(props.buttonWidth), "height" to addUnit(props.buttonSize), "borderRadius" to props.buttonRadius)
                if (isDisabled(btnType)) {
                    style["backgroundColor"] = props.disabledBgColor
                }
                return style
            }
            val buttonStyle = ::gen_buttonStyle_fn
            fun emitChange(value: Any, changeType: String = "") {
                if (!props.asyncChange) {
                    nextTick(fun(){
                        emit("update:modelValue", value)
                        currentValue.value = value
                    }
                    )
                }
                emit("change", _uO("value" to parseFloat(value.toString()), "name" to props.name, "type" to changeType))
            }
            fun gen_check_fn() {
                val kVal = format(currentValue.value.toString())
                if (kVal !== currentValue.value) {
                    currentValue.value = kVal
                    emitChange(kVal)
                }
            }
            val check = ::gen_check_fn
            fun gen_add_fn(num1: Number, num2: Number): Number {
                val cardinal = Math.pow(10, 10)
                return Math.round((num1 + num2) * cardinal) / cardinal
            }
            val add = ::gen_add_fn
            fun gen_onChange_fn() {
                val crtType = type.value
                if (isDisabled(crtType)) {
                    emit("overlimit", crtType)
                    return
                }
                val stepVal = parseFloat(props.step.toString())
                val diff = if (crtType === "minus") {
                    -stepVal
                } else {
                    stepVal
                }
                val value = format(add(parseFloat(currentValue.value.toString()), diff).toString(10))
                emitChange(value, crtType)
                if (crtType == "plus") {
                    emit("plus")
                } else if (crtType == "minus") {
                    emit("minus")
                }
            }
            val onChange = ::gen_onChange_fn
            fun gen_clearTimeoutHandler_fn() {
                if (longPressTimer.value != null) {
                    clearTimeout(longPressTimer.value!!)
                    longPressTimer.value = null
                }
            }
            val clearTimeoutHandler = ::gen_clearTimeoutHandler_fn
            fun gen_longPressStep_fn() {
                clearTimeoutHandler()
                longPressTimer.value = setTimeout(fun(){
                    onChange()
                    gen_longPressStep_fn()
                }
                , 250)
            }
            val longPressStep = ::gen_longPressStep_fn
            fun gen_onTouchStart_fn(btnType: String) {
                if (!props.longPress) {
                    return
                }
                clearTimeoutHandler()
                type.value = btnType
                longPressTimer.value = setTimeout(fun(){
                    onChange()
                    longPressStep()
                }
                , 600)
            }
            val onTouchStart = ::gen_onTouchStart_fn
            fun gen_clickHandler_fn(btnType: String): Unit {
                type.value = btnType
                onChange()
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_onFocus_fn(event: UniInputFocusEvent) {
                emit("focus", UTSJSONObject.assign<UTSJSONObject>(_uO(), event.detail, _uO("name" to props.name)) as UTSJSONObject)
            }
            val onFocus = ::gen_onFocus_fn
            fun gen_onBlur_fn(event: UniInputBlurEvent) {
                val value = format(event.detail.value)
                emitChange(value)
                emit("blur", UTSJSONObject.assign<UTSJSONObject>(_uO(), event.detail, _uO("name" to props.name)) as UTSJSONObject)
            }
            val onBlur = ::gen_onBlur_fn
            fun gen_onInput_fn(e: UniInputEvent) {
                val value = e.detail.value
                if (value === "") {
                    currentValue.value = ""
                    return
                }
                var formatted = filter(value.toString())
                emitChange(value)
                val decimalLen = parseInt(props.decimalLength.toString())
                if (formatted.indexOf(".") != -1 && decimalLen > 0) {
                    val pair = formatted.split(".")
                    formatted = "" + pair[0] + "." + pair[1].slice(0, decimalLen)
                }
                val formatted2 = format(formatted)
                emitChange(formatted2)
            }
            val onInput = ::gen_onInput_fn
            fun gen_init_fn() {
                currentValue.value = format(if (props.modelValue != null) {
                    props.modelValue.toString()
                } else {
                    "0"
                }
                )
            }
            val init = ::gen_init_fn
            watch(fun(): Any {
                return props.modelValue
            }
            , fun(newV: Any){
                if (newV !== currentValue.value) {
                    currentValue.value = format(newV.toString())
                }
            }
            )
            watch(fun(): UTSArray<Any?> {
                return _uA<Any?>(props.integer, props.decimalLength, props.min, props.max)
            }
            , fun(){
                check()
            }
            )
            onMounted(fun(){
                init()
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-number-box"), _uA(
                    if (isTrue(_ctx.showMinus && !hideMinus.value && _ctx.`$slots`["minus"] != null)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-number-box__slot wtu-1pb5hvl-0", "onClick" to withModifiers(fun(){
                            clickHandler("minus")
                        }, _uA(
                            "stop"
                        )), "onTouchstart" to fun(){
                            onTouchStart("minus")
                        }, "onTouchend" to withModifiers(clearTimeoutHandler, _uA(
                            "stop"
                        ))), _uA(
                            renderSlot(_ctx.`$slots`, "minus")
                        ), 40, _uA(
                            "onClick",
                            "onTouchstart"
                        ))
                    } else {
                        if (isTrue(_ctx.showMinus && !hideMinus.value)) {
                            _cE("view", _uM("key" to 1, "class" to _nC(_uA(
                                "weapp-tw-border up-number-box__minus wtu-1pb5hvl-0",
                                _uM("up-number-box__minus--disabled" to isDisabled("minus"))
                            )), "onClick" to withModifiers(fun(){
                                clickHandler("minus")
                            }, _uA(
                                "stop"
                            )), "onTouchstart" to fun(){
                                onTouchStart("minus")
                            }, "onTouchend" to withModifiers(clearTimeoutHandler, _uA(
                                "stop"
                            )), "hover-class" to "up-number-box__minus--hover", "hover-stay-time" to "150", "style" to _nS(buttonStyle("minus"))), _uA(
                                _cV(_component_up_icon, _uM("name" to "minus", "color" to if (isDisabled("minus")) {
                                    "#c8c9cc"
                                } else {
                                    "#323233"
                                }, "size" to "15", "bold" to "", "customStyle" to _ctx.iconStyle), null, 8, _uA(
                                    "color",
                                    "customStyle"
                                ))
                            ), 46, _uA(
                                "onClick",
                                "onTouchstart"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    }
                    ,
                    if (isTrue(!hideMinus.value)) {
                        renderSlot(_ctx.`$slots`, "input", _uM("key" to 2), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("input", _uM("disabled" to (_ctx.disabledInput || _ctx.disabled), "cursor-spacing" to getCursorSpacing.value, "class" to _nC(_uA(
                                    _uM("up-number-box__input--disabled" to (_ctx.disabled || _ctx.disabledInput)),
                                    "up-number-box__input"
                                )), "modelValue" to currentValue.value, "onInput" to _uA<Any?>(fun(`$event`: UniInputEvent){
                                    currentValue.value = `$event`.detail.value
                                }, onInput), "onBlur" to onBlur, "onFocus" to onFocus, "type" to "number", "style" to _nS(inputStyle.value)), null, 46, _uA(
                                    "disabled",
                                    "cursor-spacing",
                                    "modelValue",
                                    "onInput"
                                ))
                            )
                        })
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(_ctx.showPlus && _ctx.`$slots`["plus"] != null)) {
                        _cE("view", _uM("key" to 3, "class" to "weapp-tw-border up-number-box__slot wtu-1pb5hvl-0", "onClick" to withModifiers(fun(){
                            clickHandler("plus")
                        }, _uA(
                            "stop"
                        )), "onTouchstart" to fun(){
                            onTouchStart("plus")
                        }, "onTouchend" to withModifiers(clearTimeoutHandler, _uA(
                            "stop"
                        ))), _uA(
                            renderSlot(_ctx.`$slots`, "plus")
                        ), 40, _uA(
                            "onClick",
                            "onTouchstart"
                        ))
                    } else {
                        if (isTrue(_ctx.showPlus)) {
                            _cE("view", _uM("key" to 4, "class" to _nC(_uA(
                                "weapp-tw-border up-number-box__plus wtu-1pb5hvl-0",
                                _uM("up-number-box__minus--disabled" to isDisabled("plus"))
                            )), "onClick" to withModifiers(fun(){
                                clickHandler("plus")
                            }, _uA(
                                "stop"
                            )), "onTouchstart" to fun(){
                                onTouchStart("plus")
                            }, "onTouchend" to withModifiers(clearTimeoutHandler, _uA(
                                "stop"
                            )), "hover-class" to "up-number-box__plus--hover", "hover-stay-time" to "150", "style" to _nS(buttonStyle("plus"))), _uA(
                                _cV(_component_up_icon, _uM("name" to "plus", "color" to if (isDisabled("plus")) {
                                    "#c8c9cc"
                                } else {
                                    "#323233"
                                }, "size" to "15", "bold" to "", "customStyle" to _ctx.iconStyle), null, 8, _uA(
                                    "color",
                                    "customStyle"
                                ))
                            ), 46, _uA(
                                "onClick",
                                "onTouchstart"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    }
                ))
            }
        }
        var name = "up-number-box"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-number-box" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-number-box__plus" to _pS(_uM("width" to 35, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4)), "up-number-box__minus" to _pS(_uM("width" to 35, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "borderTopLeftRadius" to 4, "borderBottomLeftRadius" to 4)), "up-number-box__plus--hover" to _pS(_uM("!backgroundColor" to "#E6E6E6")), "up-number-box__minus--hover" to _pS(_uM("!backgroundColor" to "#E6E6E6")), "up-number-box__plus--disabled" to _pS(_uM("backgroundColor" to "#f7f8fa")), "up-number-box__minus--disabled" to _pS(_uM("backgroundColor" to "#f7f8fa")), "up-number-box__input" to _pS(_uM("textAlign" to "center", "fontSize" to 15, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "marginTop" to 0, "marginRight" to 2, "marginBottom" to 0, "marginLeft" to 2)), "up-number-box__input--disabled" to _pS(_uM("color" to "#c8c9cc", "backgroundColor" to "#f2f3f5")), "wtu-1pb5hvl-0" to _pS(_uM("cursor" to "pointer")))
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
        ), "default" to ""), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "min" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 1), "max" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 999999999), "step" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 1), "integer" to _uM("type" to "Boolean", "default" to false), "disabled" to _uM("type" to "Boolean", "default" to false), "disabledInput" to _uM("type" to "Boolean", "default" to false), "asyncChange" to _uM("type" to "Boolean", "default" to false), "inputWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 35), "showMinus" to _uM("type" to "Boolean", "default" to true), "showPlus" to _uM("type" to "Boolean", "default" to true), "decimalLength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "longPress" to _uM("type" to "Boolean", "default" to true), "color" to _uM("type" to "String", "default" to "#323233"), "buttonWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 35), "buttonSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 30), "buttonRadius" to _uM("type" to "String", "default" to "4px"), "bgColor" to _uM("type" to "String", "default" to "#EBECEE"), "disabledBgColor" to _uM("type" to "String", "default" to "#f7f8fa"), "inputBgColor" to _uM("type" to "String", "default" to ""), "cursorSpacing" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 100), "disablePlus" to _uM("type" to "Boolean", "default" to false), "disableMinus" to _uM("type" to "Boolean", "default" to false), "iconStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "miniMode" to _uM("type" to "Boolean", "default" to false)))
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
