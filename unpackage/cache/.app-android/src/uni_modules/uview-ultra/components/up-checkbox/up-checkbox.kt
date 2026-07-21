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
open class GenUniModulesUviewUltraComponentsUpCheckboxUpCheckbox : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: Any by `$props`
    open var shape: String by `$props`
    open var size: Any by `$props`
    open var checked: Boolean by `$props`
    open var disabled: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var iconSize: Any by `$props`
    open var iconColor: String by `$props`
    open var label: Any by `$props`
    open var labelColor: String by `$props`
    open var labelSize: Any by `$props`
    open var labelDisabled: Any by `$props`
    open var customStyle: Any by `$props`
    open var usedAlone: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var init: () -> Unit
        get() {
            return unref(this.`$exposed`["init"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "init", value)
        }
    open var getInternalState: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getInternalState"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getInternalState", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCheckboxUpCheckbox, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCheckboxUpCheckbox
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val parent = _useUltraUI.parent
            val parentData = _useUltraUI.parentData
            val getParentData = _useUltraUI.getParentData
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val isChecked = ref(false)
            val elDisabled = computed(fun(): Boolean {
                var disabledStr = props.disabled
                if (disabledStr != "") {
                    if (disabledStr == "true") {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return if (parentData.value["disabled"] != null) {
                        parentData.value["disabled"] as Boolean
                    } else {
                        false
                    }
                }
            }
            )
            val elLabelDisabled = computed(fun(): Boolean {
                var labelDisabledStr = props.labelDisabled
                if (labelDisabledStr != "") {
                    if (labelDisabledStr == "true") {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return if (parentData.value["labelDisabled"] != null) {
                        parentData.value["labelDisabled"] as Boolean
                    } else {
                        false
                    }
                }
            }
            )
            val elSize = computed(fun(): String {
                return if (props.size!!.toString() != "") {
                    props.size!!.toString()
                } else {
                    if (parentData.value["size"] != null) {
                        parentData.value["size"].toString()
                    } else {
                        "21"
                    }
                }
            }
            )
            val elIconSize = computed(fun(): String {
                return if (props.iconSize!!.toString() != "") {
                    props.iconSize!!.toString()
                } else {
                    if (parentData.value["iconSize"] != null) {
                        parentData.value["iconSize"].toString()
                    } else {
                        "12"
                    }
                }
            }
            )
            val elActiveColor = computed(fun(): String {
                val activeColorProp = props.activeColor
                if (activeColorProp != null && activeColorProp.toString() != "") {
                    return activeColorProp.toString()
                }
                val parentActiveColor = parentData.value["activeColor"]
                if (parentActiveColor != null && parentActiveColor.toString() != "") {
                    return parentActiveColor.toString()
                }
                return "#2979ff"
            }
            )
            val elInactiveColor = computed(fun(): String {
                val inactiveColorProp = props.inactiveColor
                if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
                    return inactiveColorProp.toString()
                }
                val parentInactiveColor = parentData.value["inactiveColor"]
                if (parentInactiveColor != null && parentInactiveColor.toString() != "") {
                    return parentInactiveColor.toString()
                }
                return "#c8c9cc"
            }
            )
            val elLabelColor = computed(fun(): String {
                return if (props.labelColor != null) {
                    props.labelColor.toString()
                } else {
                    if (parentData.value["labelColor"] != null) {
                        parentData.value["labelColor"].toString()
                    } else {
                        "#606266"
                    }
                }
            }
            )
            val elShape = computed(fun(): String {
                return if (props.shape != null) {
                    props.shape.toString()
                } else {
                    if (parentData.value["shape"] != null) {
                        parentData.value["shape"].toString()
                    } else {
                        "circle"
                    }
                }
            }
            )
            val elLabelSize = computed(fun(): String {
                return addUnit(if (props.labelSize != null) {
                    props.labelSize!!.toString()
                } else {
                    if (parentData.value["labelSize"] != null) {
                        parentData.value["labelSize"].toString()
                    } else {
                        "15"
                    }
                }
                )
            }
            )
            val elIconColor = computed(fun(): String {
                val iconColor = if (props.iconColor.toString() != "") {
                    props.iconColor.toString()
                } else {
                    if (parentData.value["iconColor"] != null) {
                        parentData.value["iconColor"].toString()
                    } else {
                        "#ffffff"
                    }
                }
                if (elDisabled.value as Boolean) {
                    return if (isChecked.value) {
                        elInactiveColor.value
                    } else {
                        "transparent"
                    }
                } else {
                    return if (isChecked.value) {
                        iconColor
                    } else {
                        "transparent"
                    }
                }
            }
            )
            val iconClasses = computed(fun(): String {
                var classes = _uA<String>()
                classes.push("up-checkbox__icon-wrap--" + elShape.value.toString())
                if (elDisabled.value as Boolean) {
                    classes.push("up-checkbox__icon-wrap--disabled")
                }
                if (isChecked.value && elDisabled.value as Boolean) {
                    classes.push("up-checkbox__icon-wrap--disabled--checked")
                }
                if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
                    classes.push("up-checkbox__icon-wrap--active")
                }
                var classStr = ""
                classStr = classes.join(" ")
                return classStr
            }
            )
            val iconWrapStyle = computed(fun(): Any {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue", 271, 9))
                if (isChecked.value && !elDisabled.value) {
                    if (elActiveColor.value != "#2979ff") {
                        style["backgroundColor"] = elActiveColor.value
                        style["borderColor"] = elActiveColor.value
                    }
                } else {
                    style["backgroundColor"] = "#ffffff"
                    style["borderColor"] = elInactiveColor.value
                }
                style["width"] = addUnit(elSize.value)
                style["height"] = addUnit(elSize.value)
                if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
                    if (parentData.value["iconPlacement"].toString() == "right") {
                        style["marginRight"] = 0
                    }
                }
                return style
            }
            )
            val checkboxStyle = computed(fun(): Any {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue", 294, 9))
                if (!props.usedAlone && parentData.value != null && parentData.value["borderBottom"] != null) {
                    if (parentData.value["borderBottom"]!!.toString() == "true" && parentData.value["placement"] == "row") {
                        error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效")
                    }
                    if (parentData.value["borderBottom"]!!.toString() == "true" && parentData.value["placement"] == "column") {
                        style["paddingBottom"] = "8px"
                    }
                }
                return deepMerge(style, addStyle(props.customStyle))
            }
            )
            val init = fun() {
                if (!props.usedAlone) {
                    parentData.value = _uO("iconSize" to 12, "labelDisabled" to null, "disabled" to null, "shape" to "square", "activeColor" to null, "inactiveColor" to null, "size" to 18, "modelValue" to null, "iconColor" to null, "placement" to "row", "borderBottom" to false, "iconPlacement" to "left")
                    getParentData("up-checkbox-group", instance, false)
                    if (parent.value == null) {
                        error("up-checkbox必须搭配up-checkbox-group组件使用")
                    }
                    val value = parentData.value["modelValue"]
                    if (props.checked) {
                        isChecked.value = true
                    } else if (value != null) {
                        val valueTmp: UTSArray<Any> = value as UTSArray<Any>
                        if (valueTmp != null) {
                            val even = fun(element: Any): Boolean {
                                return element.toString() == props.name!!.toString()
                            }
                            isChecked.value = valueTmp.some(even)
                        }
                    }
                } else {
                    if (props.checked) {
                        isChecked.value = true
                    }
                }
            }
            fun gen_emitEvent_fn() {
                emit("change", isChecked.value)
                if (props.usedAlone) {
                    emit("update:checked", isChecked.value)
                }
                setTimeout(fun(){
                    formValidate(instance, "change")
                }
                , 10)
            }
            val emitEvent = ::gen_emitEvent_fn
            fun gen_setRadioCheckedStatus_fn() {
                isChecked.value = !isChecked.value
                emitEvent()
                if (!props.usedAlone && parent.value != null) {
                    parent.value!!.`$callMethod`("unCheckedOther", instance)
                }
            }
            val setRadioCheckedStatus = ::gen_setRadioCheckedStatus_fn
            fun gen_iconClickHandler_fn(e: UniEvent) {
                e.stopPropagation()
                if (!elDisabled.value) {
                    setRadioCheckedStatus()
                }
            }
            val iconClickHandler = ::gen_iconClickHandler_fn
            fun gen_wrapperClickHandler_fn(e: UniEvent) {
                if (!props.usedAlone && parentData.value != null && parentData.value["iconPlacement"] != null) {
                    if (parentData.value["iconPlacement"].toString() == "right") {
                        iconClickHandler(e)
                    } else {
                        iconClickHandler(e)
                    }
                } else {
                    iconClickHandler(e)
                }
            }
            val wrapperClickHandler = ::gen_wrapperClickHandler_fn
            fun gen_labelClickHandler_fn(e: UniEvent) {
                e.stopPropagation()
                if (!elLabelDisabled.value && !elDisabled.value) {
                    setRadioCheckedStatus()
                }
            }
            val labelClickHandler = ::gen_labelClickHandler_fn
            watch(fun(): Boolean {
                return props.checked
            }
            , fun(newVal: Boolean){
                if (newVal != isChecked.value) {
                    isChecked.value = newVal
                }
            }
            )
            onMounted(fun(){
                init()
            }
            )
            val getInternalState = fun(): UTSJSONObject {
                return _uO("name" to props.name, "isChecked" to isChecked.value)
            }
            __expose(_uM("init" to init, "getInternalState" to getInternalState))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-checkbox cursor-pointer",
                    _uA(
                        "up-checkbox-label--" + (if (unref(parentData)["iconPlacement"] != null) {
                            unref(parentData)["iconPlacement"].toString()
                        } else {
                            ""
                        }
                        ),
                        if ((unref(parentData)["borderBottom"] != false && unref(parentData)["placement"] != null && unref(parentData)["placement"].toString() == "column")) {
                            "up-border-bottom"
                        } else {
                            ""
                        }
                    )
                )), "style" to _nS(_uA(
                    checkboxStyle.value
                )), "onClick" to withModifiers(wrapperClickHandler, _uA(
                    "stop"
                ))), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "up-checkbox__icon-wrap cursor-pointer",
                        iconClasses.value
                    )), "onClick" to withModifiers(iconClickHandler, _uA(
                        "stop"
                    )), "style" to _nS(_uA(
                        iconWrapStyle.value
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_icon, _uM("class" to "up-checkbox__icon-wrap__icon", "name" to "checkbox-mark", "size" to elIconSize.value, "color" to elIconColor.value), null, 8, _uA(
                                    "size",
                                    "color"
                                ))
                            )
                        }
                        )
                    ), 6),
                    renderSlot(_ctx.`$slots`, "label", _uM("label" to _ctx.label, "elDisabled" to elDisabled.value), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("onClick" to withModifiers(labelClickHandler, _uA(
                                "stop"
                            )), "style" to _nS(_uM("color" to if (elDisabled.value) {
                                elInactiveColor.value
                            } else {
                                elLabelColor.value
                            }
                            , "fontSize" to elLabelSize.value, "lineHeight" to elLabelSize.value))), _tD(_ctx.label), 5)
                        )
                    }
                    )
                ), 6)
            }
        }
        var name = "up-checkbox"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-checkbox" to _pS(_uM("display" to "flex", "flexDirection" to "row", "overflow" to "hidden", "alignItems" to "center", "marginBottom" to 5, "marginTop" to 5)), "up-checkbox-label--left" to _pS(_uM("flexDirection" to "row")), "up-checkbox-label--right" to _pS(_uM("flexDirection" to "row-reverse", "justifyContent" to "space-between")), "up-checkbox__icon-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "marginRight" to 6, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#c8c9cc", "borderRightColor" to "#c8c9cc", "borderBottomColor" to "#c8c9cc", "borderLeftColor" to "#c8c9cc", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-checkbox__icon-wrap--circle" to _pS(_uM("borderTopLeftRadius" to 99, "borderTopRightRadius" to 99, "borderBottomRightRadius" to 99, "borderBottomLeftRadius" to 99)), "up-checkbox__icon-wrap--square" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-checkbox__icon-wrap--checked" to _pS(_uM("color" to "#ffffff", "backgroundColor" to "#FF0000", "borderTopColor" to "#2979ff", "borderRightColor" to "#2979ff", "borderBottomColor" to "#2979ff", "borderLeftColor" to "#2979ff")), "up-checkbox__icon-wrap--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-checkbox__icon-wrap--disabled" to _pS(_uM("!backgroundColor" to "#ebedf0")), "up-checkbox__icon-wrap--disabled--checked" to _pS(_uM("!color" to "#c8c9cc")), "up-checkbox__label" to _pS(_uM("marginLeft" to 5, "marginRight" to 12, "color" to "#606266", "fontSize" to 15)), "up-checkbox__label--disabled" to _pS(_uM("color" to "#c8c9cc")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "update:checked" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "default" to default__70.getAny("checkbox.name")), "shape" to _uM("type" to "String", "default" to default__70.getString("checkbox.shape")), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__70.getAny("checkbox.size")), "checked" to _uM("type" to "Boolean", "default" to default__70.getBoolean("checkbox.checked")), "disabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "default" to default__70.getAny("checkbox.disabled")), "activeColor" to _uM("type" to "String", "default" to default__70.getString("checkbox.activeColor")), "inactiveColor" to _uM("type" to "String", "default" to default__70.getString("checkbox.inactiveColor")), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__70.getAny("checkbox.iconSize")), "iconColor" to _uM("type" to "String", "default" to default__70.getString("checkbox.iconColor")), "label" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__70.getAny("checkbox.label")), "labelColor" to _uM("type" to "String", "default" to default__70.getString("checkbox.labelColor")), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__70.getAny("checkbox.labelSize")), "labelDisabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "default" to default__70.getAny("checkbox.labelDisabled")), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "usedAlone" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "name",
            "shape",
            "size",
            "checked",
            "disabled",
            "activeColor",
            "inactiveColor",
            "iconSize",
            "iconColor",
            "label",
            "labelColor",
            "labelSize",
            "labelDisabled",
            "customStyle",
            "usedAlone"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
