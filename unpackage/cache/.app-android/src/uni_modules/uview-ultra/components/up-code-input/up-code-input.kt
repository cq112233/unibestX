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
open class GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInput : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var adjustPosition: Boolean by `$props`
    open var maxlength: Any by `$props`
    open var dot: Boolean by `$props`
    open var mode: String by `$props`
    open var hairline: Boolean by `$props`
    open var space: Any by `$props`
    open var modelValue: Any by `$props`
    open var focus: Boolean by `$props`
    open var bold: Boolean by `$props`
    open var color: String by `$props`
    open var fontSize: Any by `$props`
    open var size: Any by `$props`
    open var disabledKeyboard: Boolean by `$props`
    open var borderColor: String by `$props`
    open var disabledDot: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInput) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCodeInputUpCodeInput
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val inputValue = ref("")
            val isFocus = ref(false)
            val timer = ref(0)
            val cursorOpacity = ref(1)
            val codeLength = computed(fun(): UTSArray<String> {
                var list: UTSArray<String> = _uA()
                run {
                    var index: Number = 0
                    while(index < (props.maxlength as Number)){
                        list.push("")
                        index++
                    }
                }
                return list
            }
            )
            val codeArray = computed(fun(): UTSArray<String> {
                return inputValue.value.split("")
            }
            )
            val inputLength = computed(fun(): Number {
                val length = inputValue.value.length
                return Math.min(length, codeLength.value.length)
            }
            )
            val lineStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-code-input/up-code-input.uvue", 163, 9))
                style["height"] = if (props.hairline) {
                    "2px"
                } else {
                    "4px"
                }
                style["width"] = addUnit(props.size)
                style["backgroundColor"] = props.borderColor
                return style
            }
            )
            val inputHandler = fun(e: UniInputEvent){
                val value = e.detail.value
                inputValue.value = value
                if (props.disabledDot) {
                    nextTick(fun(){
                        inputValue.value = value.replace(".", "")
                    }
                    )
                }
                emit("change", value)
                emit("update:modelValue", value)
                if (value.length >= (props.maxlength as Number)) {
                    emit("finish", value)
                }
            }
            val getCodeValue = fun(index: Number): String {
                if (index < codeArray.value.length) {
                    return codeArray.value[index]
                }
                return ""
            }
            val clearCursorTimer = fun(){
                if (timer.value > 0) {
                    clearInterval(timer.value)
                    timer.value = 0
                }
            }
            val startCursorTimer = fun(){
                clearCursorTimer()
                cursorOpacity.value = 1
                timer.value = setInterval(fun(){
                    cursorOpacity.value = if (cursorOpacity.value == 1) {
                        0
                    } else {
                        1
                    }
                }
                , 600)
            }
            val itemStyle = fun(index: Number): Any {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-code-input/up-code-input.uvue", 215, 9), "width" to addUnit(props.size), "height" to addUnit(props.size))
                if (props.mode == "box") {
                    style["border"] = "" + (if (props.hairline) {
                        0.5
                    } else {
                        1
                    }
                    ) + "px solid " + props.borderColor
                    if (getPx(props.space) == "0") {
                        if (index == 0) {
                            style["borderTopLeftRadius"] = "3px"
                            style["borderBottomLeftRadius"] = "3px"
                        }
                        if (index == codeLength.value.length - 1) {
                            style["borderTopRightRadius"] = "3px"
                            style["borderBottomRightRadius"] = "3px"
                        }
                        if (index != codeLength.value.length - 1) {
                            style["borderRight"] = "none"
                        }
                    }
                }
                if (index != codeLength.value.length - 1) {
                    style["marginRight"] = addUnit(props.space)
                } else {
                    style["marginRight"] = "0px"
                }
                return style
            }
            isFocus.value = props.focus
            if (isFocus.value) {
                startCursorTimer()
            }
            watch(fun(): Any {
                return props.modelValue
            }
            , fun(kVal: Any){
                inputValue.value = kVal.toString().substring(0, props.maxlength as Number)
            }
            , WatchOptions(immediate = true))
            watch(isFocus, fun(kVal: Boolean){
                if (kVal) {
                    startCursorTimer()
                } else {
                    clearCursorTimer()
                    cursorOpacity.value = 1
                }
            }
            )
            onBeforeUnmount(fun(){
                clearCursorTimer()
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "up-code-input"), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(codeLength.value, fun(item, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to "up-code-input__item", "style" to _nS(_uA(
                            itemStyle(index)
                        )), "key" to index), _uA(
                            if (isTrue(_ctx.dot && codeArray.value.length > index)) {
                                _cE("view", _uM("key" to 0, "class" to "up-code-input__item__dot"))
                            } else {
                                _cE("text", _uM("key" to 1, "style" to _nS(_uM("fontSize" to _ctx.`$upAddUnit`(_ctx.fontSize), "fontWeight" to if (_ctx.bold) {
                                    "bold"
                                } else {
                                    "normal"
                                }
                                , "color" to _ctx.color))), _tD(getCodeValue(index)), 5)
                            }
                            ,
                            if (_ctx.mode == "line") {
                                _cE("view", _uM("key" to 2, "class" to "up-code-input__item__line", "style" to _nS(_uA(
                                    lineStyle.value
                                ))), null, 4)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(isFocus.value && inputLength.value === index)) {
                                _cE("view", _uM("key" to 3, "style" to _nS(_uM("backgroundColor" to _ctx.color, "opacity" to cursorOpacity.value)), "class" to "up-code-input__item__cursor"), null, 4)
                            } else {
                                _cC("v-if", true)
                            }
                        ), 4)
                    }
                    ), 128),
                    _cE("input", _uM("disabled" to _ctx.disabledKeyboard, "type" to "number", "focus" to _ctx.focus, "value" to inputValue.value, "maxlength" to _ctx.maxlength, "adjustPosition" to _ctx.adjustPosition, "class" to "up-code-input__input", "onInput" to inputHandler, "style" to _nS(_uM("height" to _ctx.`$upAddUnit`(_ctx.size))), "onFocus" to fun(){
                        isFocus.value = true
                    }
                    , "onBlur" to fun(){
                        isFocus.value = false
                    }
                    ), null, 44, _uA(
                        "disabled",
                        "focus",
                        "value",
                        "maxlength",
                        "adjustPosition",
                        "onFocus",
                        "onBlur"
                    ))
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-code-input" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "overflow" to "hidden")), "up-code-input__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "position" to "relative")), "up-code-input__item__text" to _pS(_uM("fontSize" to 15, "color" to "#606266")), "up-code-input__item__dot" to _pS(_uM("width" to 7, "height" to 7, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#606266")), "up-code-input__item__line" to _pS(_uM("position" to "absolute", "bottom" to 0, "height" to 4, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "width" to 40, "backgroundColor" to "#606266")), "up-code-input__item__cursor" to _pS(_uM("position" to "absolute", "top" to "50%", "left" to "50%", "opacity" to 1, "transform" to "translate(-50%, -50%)", "width" to 1, "height" to 20)), "up-code-input__input" to _pS(_uM("position" to "absolute", "left" to "-750rpx", "width" to "1500rpx", "top" to 0, "backgroundColor" to "rgba(0,0,0,0)", "textAlign" to "left")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "finish" to null, "update:modelValue" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "adjustPosition" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.adjustPosition")), "maxlength" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__17.getNumber("codeInput.maxlength")), "dot" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.dot")), "mode" to _uM("type" to "String", "default" to default__17.getString("codeInput.mode")), "hairline" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.hairline")), "space" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__17.getNumber("codeInput.space")), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__17.getString("codeInput.value")), "focus" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.focus")), "bold" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.bold")), "color" to _uM("type" to "String", "default" to default__17.getString("codeInput.color")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__17.getNumber("codeInput.fontSize")), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__17.getNumber("codeInput.size")), "disabledKeyboard" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.disabledKeyboard")), "borderColor" to _uM("type" to "String", "default" to default__17.getString("codeInput.borderColor")), "disabledDot" to _uM("type" to "Boolean", "default" to default__17.getBoolean("codeInput.disabledDot"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "adjustPosition",
            "maxlength",
            "dot",
            "mode",
            "hairline",
            "space",
            "modelValue",
            "focus",
            "bold",
            "color",
            "fontSize",
            "size",
            "disabledKeyboard",
            "borderColor",
            "disabledDot"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
