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
open class GenUniModulesUviewUltraComponentsUpRadioUpRadio : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: Any by `$props`
    open var shape: String by `$props`
    open var disabled: Any by `$props`
    open var labelDisabled: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var iconSize: Any by `$props`
    open var labelSize: Any by `$props`
    open var label: Any by `$props`
    open var size: Any by `$props`
    open var iconColor: String by `$props`
    open var labelColor: String by `$props`
    open var customStyle: UTSJSONObject by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpRadioUpRadio, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpRadioUpRadio
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val group = inject<RadioGroupProvide?>(RADIO_GROUP_KEY, null)
            val selfChecked = ref<Boolean>(false)
            fun gen_pick_fn(own: Any?, parent: Any?, fallback: String): String {
                val o = if (own == null) {
                    ""
                } else {
                    (own.toString() ?: "")
                }
                if (o != "") {
                    return o
                }
                val p = if (parent == null) {
                    ""
                } else {
                    (parent.toString() ?: "")
                }
                if (p != "") {
                    return p
                }
                return fallback
            }
            val pick = ::gen_pick_fn
            fun gen_fromGroup_fn(key: String): Any? {
                if (props.usedAlone || group == null) {
                    return null
                }
                if (key == "modelValue") {
                    return group!!.modelValue.value
                }
                if (key == "shape") {
                    return group!!.shape.value
                }
                if (key == "disabled") {
                    return group!!.disabled.value
                }
                if (key == "activeColor") {
                    return group!!.activeColor.value
                }
                if (key == "inactiveColor") {
                    return group!!.inactiveColor.value
                }
                if (key == "size") {
                    return group!!.size.value
                }
                if (key == "placement") {
                    return group!!.placement.value
                }
                if (key == "labelSize") {
                    return group!!.labelSize.value
                }
                if (key == "labelColor") {
                    return group!!.labelColor.value
                }
                if (key == "labelDisabled") {
                    return group!!.labelDisabled.value
                }
                if (key == "iconColor") {
                    return group!!.iconColor.value
                }
                if (key == "iconSize") {
                    return group!!.iconSize.value
                }
                if (key == "iconPlacement") {
                    return group!!.iconPlacement.value
                }
                if (key == "borderBottom") {
                    return group!!.borderBottom.value
                }
                return null
            }
            val fromGroup = ::gen_fromGroup_fn
            val isChecked = computed<Boolean>(fun(): Boolean {
                if (props.usedAlone || group == null) {
                    return selfChecked.value
                }
                val parentVal = group!!.modelValue.value
                if (parentVal == null || props.name == null) {
                    return false
                }
                return parentVal.toString() == props.name!!.toString()
            }
            )
            val elDisabled = computed<Boolean>(fun(): Boolean {
                val v = pick(props.disabled, fromGroup("disabled"), "false")
                return v == "true"
            }
            )
            val elLabelDisabled = computed<Boolean>(fun(): Boolean {
                val v = pick(props.labelDisabled, fromGroup("labelDisabled"), "false")
                return v == "true"
            }
            )
            val elSize = computed<String>(fun(): String {
                return pick(props.size, fromGroup("size"), "21")
            }
            )
            val elIconSize = computed<String>(fun(): String {
                return pick(props.iconSize, fromGroup("iconSize"), "12")
            }
            )
            val primaryColor = computed(fun(): String {
                val colorMap = default__11["color"] as UTSJSONObject
                val cfg = colorMap["up-primary"] as String?
                return if (cfg != null && cfg != "" && cfg != "#2979ff" && cfg != "#3c9cff") {
                    cfg
                } else {
                    "#37c2bc"
                }
            }
            )
            val elActiveColor = computed<String>(fun(): String {
                val c = pick(props.activeColor, fromGroup("activeColor"), "")
                if (c != "" && c != "#2979ff") {
                    return c
                }
                return primaryColor.value
            }
            )
            val elInactiveColor = computed<String>(fun(): String {
                return pick(props.inactiveColor, fromGroup("inactiveColor"), "#c8c9cc")
            }
            )
            val elLabelColor = computed<String>(fun(): String {
                return pick(props.labelColor, fromGroup("labelColor"), "#606266")
            }
            )
            val elShape = computed<String>(fun(): String {
                return pick(props.shape, fromGroup("shape"), "circle")
            }
            )
            val elLabelSize = computed<String>(fun(): String {
                return addUnit(pick(props.labelSize, fromGroup("labelSize"), "15"))
            }
            )
            val elIconColor = computed<String>(fun(): String {
                val iconColorStr = pick(props.iconColor, fromGroup("iconColor"), "#ffffff")
                if (elDisabled.value) {
                    return if (isChecked.value) {
                        elInactiveColor.value
                    } else {
                        "transparent"
                    }
                }
                return if (isChecked.value) {
                    iconColorStr
                } else {
                    "transparent"
                }
            }
            )
            val iconClasses = computed<String>(fun(): String {
                var classes: UTSArray<String> = _uA()
                classes.push("up-radio__icon-wrap--" + elShape.value)
                if (elDisabled.value) {
                    classes.push("up-radio__icon-wrap--disabled")
                }
                if (isChecked.value && elDisabled.value) {
                    classes.push("up-radio__icon-wrap--disabled--checked")
                }
                if (isChecked.value && !elDisabled.value) {
                    classes.push("up-radio__icon-wrap--active")
                }
                return classes.join(" ")
            }
            )
            val iconWrapStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val size = addUnit(elSize.value)
                style["width"] = size
                style["height"] = size
                style["borderWidth"] = "1px"
                style["borderStyle"] = "solid"
                style["borderRadius"] = if (elShape.value == "square") {
                    "3px"
                } else {
                    "100px"
                }
                style["display"] = "flex"
                style["flexDirection"] = "row"
                style["alignItems"] = "center"
                style["justifyContent"] = "center"
                style["flexShrink"] = 0
                if (isChecked.value && !elDisabled.value) {
                    style["backgroundColor"] = elActiveColor.value
                    style["borderColor"] = elActiveColor.value
                } else if (elDisabled.value) {
                    style["backgroundColor"] = "#ebedf0"
                    style["borderColor"] = elInactiveColor.value
                } else {
                    style["backgroundColor"] = "#ffffff"
                    style["borderColor"] = elInactiveColor.value
                }
                val parentPlacement = fromGroup("iconPlacement")
                if (parentPlacement != null && parentPlacement.toString() == "right") {
                    style["marginRight"] = "0px"
                } else {
                    style["marginRight"] = "6px"
                }
                return style
            }
            )
            val labelStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["color"] = if (elDisabled.value) {
                    elInactiveColor.value
                } else {
                    elLabelColor.value
                }
                style["fontSize"] = elLabelSize.value
                style["lineHeight"] = elLabelSize.value
                style["marginLeft"] = "5px"
                style["marginRight"] = "12px"
                return style
            }
            )
            val iconPlacementClass = computed<String>(fun(): String {
                val p = fromGroup("iconPlacement")
                if (p != null && p.toString() != "") {
                    return "up-radio-label--" + p.toString()
                }
                return "up-radio-label--left"
            }
            )
            val borderBottomClass = computed<String>(fun(): String {
                val borderBottom = fromGroup("borderBottom")
                val placement = fromGroup("placement")
                if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
                    return "up-border-bottom"
                }
                return ""
            }
            )
            val radioStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["display"] = "flex"
                style["flexDirection"] = if (iconPlacementClass.value == "up-radio-label--right") {
                    "row-reverse"
                } else {
                    "row"
                }
                style["alignItems"] = "center"
                style["marginTop"] = "5px"
                style["marginBottom"] = "5px"
                val borderBottom = fromGroup("borderBottom")
                val placement = fromGroup("placement")
                if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
                    error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效")
                }
                if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
                    style["paddingBottom"] = if (os() == "ios") {
                        "12px"
                    } else {
                        "8px"
                    }
                }
                return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
            }
            )
            fun gen_emitEvent_fn() {
                if (!isChecked.value) {
                    emit("change", props.name)
                    if (props.usedAlone) {
                        emit("update:checked", true)
                    }
                }
            }
            val emitEvent = ::gen_emitEvent_fn
            fun gen_setRadioCheckedStatus_fn() {
                emitEvent()
                if (!props.usedAlone && group != null) {
                    group!!.select(props.name)
                } else {
                    selfChecked.value = true
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
                val p = fromGroup("iconPlacement")
                if (p != null && p.toString() == "right") {
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
            val init = fun() {}
            val getInternalState = fun(): UTSJSONObject {
                return _uO("name" to props.name, "isChecked" to isChecked.value)
            }
            __expose(_uM("init" to init, "getInternalState" to getInternalState))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-radio wtu-dmb0mx-0",
                    _uA(
                        iconPlacementClass.value,
                        borderBottomClass.value
                    )
                )), "style" to _nS(radioStyle.value), "onClick" to withModifiers(wrapperClickHandler, _uA(
                    "stop"
                ))), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-radio__icon-wrap wtu-dmb0mx-0",
                        iconClasses.value
                    )), "style" to _nS(iconWrapStyle.value), "onClick" to withModifiers(iconClickHandler, _uA(
                        "stop"
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_icon, _uM("class" to "up-radio__icon-wrap__icon", "name" to "checkbox-mark", "size" to elIconSize.value, "color" to elIconColor.value), null, 8, _uA(
                                    "size",
                                    "color"
                                ))
                            )
                        }
                        )
                    ), 6),
                    renderSlot(_ctx.`$slots`, "label", _uM("label" to _ctx.label, "elDisabled" to elDisabled.value), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-radio__label",
                                _uA(
                                    if (elDisabled.value) {
                                        "up-radio__label--disabled"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(labelStyle.value), "onClick" to withModifiers(labelClickHandler, _uA(
                                "stop"
                            ))), _tD(_ctx.label), 7)
                        )
                    }
                    )
                ), 6)
            }
        }
        var name = "up-radio"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-radio" to _pS(_uM("display" to "flex", "flexDirection" to "row", "overflow" to "hidden", "alignItems" to "center", "marginBottom" to 5, "marginTop" to 5)), "up-radio-label--left" to _pS(_uM("flexDirection" to "row")), "up-radio-label--right" to _pS(_uM("flexDirection" to "row-reverse", "justifyContent" to "space-between")), "up-radio__icon-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "marginRight" to 6, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#c8c9cc", "borderRightColor" to "#c8c9cc", "borderBottomColor" to "#c8c9cc", "borderLeftColor" to "#c8c9cc", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-radio__icon-wrap--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-radio__icon-wrap--square" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-radio__icon-wrap--checked" to _pS(_uM("backgroundColor" to "#FF0000", "borderTopColor" to "#2979ff", "borderRightColor" to "#2979ff", "borderBottomColor" to "#2979ff", "borderLeftColor" to "#2979ff")), "up-radio__icon-wrap--active" to _pS(_uM("backgroundColor" to "#2979ff", "borderTopColor" to "#2979ff", "borderRightColor" to "#2979ff", "borderBottomColor" to "#2979ff", "borderLeftColor" to "#2979ff")), "up-radio__icon-wrap--disabled" to _pS(_uM("backgroundColor" to "#ebedf0")), "up-radio__icon-wrap--disabled--checked" to _pS(_uM("color" to "#c8c9cc")), "up-radio__label" to _pS(_uM("marginLeft" to 5, "marginRight" to 12, "color" to "#606266", "fontSize" to 15)), "up-radio__label--disabled" to _pS(_uM("color" to "#c8c9cc")), "wtu-dmb0mx-0" to _pS(_uM("cursor" to "pointer")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "update:checked" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "required" to false, "default" to ""), "shape" to _uM("type" to "String", "required" to false, "default" to ""), "disabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "required" to false, "default" to ""), "labelDisabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "required" to false, "default" to ""), "activeColor" to _uM("type" to "String", "required" to false, "default" to ""), "inactiveColor" to _uM("type" to "String", "required" to false, "default" to ""), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to ""), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to ""), "label" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to ""), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to ""), "iconColor" to _uM("type" to "String", "required" to false, "default" to ""), "labelColor" to _uM("type" to "String", "required" to false, "default" to ""), "customStyle" to _uM("type" to "UTSJSONObject", "required" to false, "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "usedAlone" to _uM("type" to "Boolean", "required" to false, "default" to false)))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "name",
            "shape",
            "disabled",
            "labelDisabled",
            "activeColor",
            "inactiveColor",
            "iconSize",
            "labelSize",
            "label",
            "size",
            "iconColor",
            "labelColor",
            "customStyle",
            "usedAlone"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
