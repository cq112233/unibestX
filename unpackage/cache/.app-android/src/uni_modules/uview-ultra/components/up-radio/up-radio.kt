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
open class GenUniModulesUviewUltraComponentsUpRadioUpRadio : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-radio cursor-pointer",
            _uA(
                "up-radio-label--" + (if (_ctx.parentData["iconPlacement"] != null) {
                    _ctx.parentData["iconPlacement"].toString()
                } else {
                    "left"
                }
                ),
                if ((_ctx.parentData["borderBottom"] != null && _ctx.parentData["borderBottom"].toString() == "true" && _ctx.parentData["placement"] != null && _ctx.parentData["placement"].toString() == "column")) {
                    "up-border-bottom"
                } else {
                    ""
                }
            )
        )), "onClick" to withModifiers(_ctx.wrapperClickHandler, _uA(
            "stop"
        )), "style" to _nS(_uA(
            _ctx.radioStyle
        ))), _uA(
            _cE("view", _uM("class" to _nC(_uA(
                "up-radio__icon-wrap cursor-pointer",
                _ctx.iconClasses
            )), "onClick" to withModifiers(_ctx.iconClickHandler, _uA(
                "stop"
            )), "style" to _nS(_uA(
                _ctx.iconWrapStyle
            ))), _uA(
                renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                    return _uA(
                        _cV(_component_up_icon, _uM("class" to "up-radio__icon-wrap__icon", "name" to "checkbox-mark", "size" to _ctx.elIconSize, "color" to _ctx.elIconColor), null, 8, _uA(
                            "size",
                            "color"
                        ))
                    )
                }
                )
            ), 14, _uA(
                "onClick"
            )),
            _cE("text", _uM("class" to _nC(_uA(
                "up-radio__label",
                _uA(
                    if (_ctx.elDisabled) {
                        "up-radio__label--disabled"
                    } else {
                        ""
                    }
                )
            )), "onClick" to withModifiers(_ctx.labelClickHandler, _uA(
                "stop"
            )), "style" to _nS(_uM("color" to if (_ctx.elDisabled) {
                _ctx.elInactiveColor
            } else {
                _ctx.elLabelColor
            }
            , "fontSize" to _ctx.elLabelSize, "lineHeight" to _ctx.elLabelSize))), _tD(_ctx.label), 15, _uA(
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
    open var color: String by `$props`
    open var labelColor: String by `$props`
    open var iconColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var checked: Boolean by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var elDisabled: Boolean by `$data`
    open var elLabelDisabled: Boolean by `$data`
    open var elSize: String by `$data`
    open var elIconSize: String by `$data`
    open var elActiveColor: String by `$data`
    open var elInactiveColor: String by `$data`
    open var elLabelColor: String by `$data`
    open var elShape: String by `$data`
    open var elLabelSize: String by `$data`
    open var elIconColor: String by `$data`
    open var iconClasses: String by `$data`
    open var iconWrapStyle: UTSJSONObject by `$data`
    open var radioStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "checked" to false, "parentData" to _uO("iconSize" to "12px", "labelDisabled" to false, "labelColor" to "", "labelSize" to "", "disabled" to false, "shape" to "", "activeColor" to "", "inactiveColor" to "", "size" to "18px", "value" to "", "modelValue" to "", "iconColor" to "", "placement" to "row", "borderBottom" to false, "iconPlacement" to "left"), "elDisabled" to computed<Boolean>(fun(): Boolean {
            val disabledVal = this.disabled
            if (disabledVal != null) {
                val disabledStr = disabledVal.toString()
                if (disabledStr != "") {
                    return disabledStr == "true"
                }
            }
            return if (this.parentData["disabled"] != null) {
                this.parentData["disabled"] as Boolean
            } else {
                false
            }
        }
        ), "elLabelDisabled" to computed<Boolean>(fun(): Boolean {
            val labelDisabledVal = this.labelDisabled
            if (labelDisabledVal != null) {
                val labelDisabledStr = labelDisabledVal.toString()
                if (labelDisabledStr != "") {
                    return labelDisabledStr == "true"
                }
            }
            return if (this.parentData["labelDisabled"] != null) {
                this.parentData["labelDisabled"] as Boolean
            } else {
                false
            }
        }
        ), "elSize" to computed<String>(fun(): String {
            val sizeVal = this.size
            if (sizeVal != null && sizeVal.toString() != "") {
                return sizeVal.toString()
            }
            val parentSizeVal = this.parentData["size"]
            if (parentSizeVal != null && parentSizeVal.toString() != "") {
                return parentSizeVal.toString()
            }
            return "21px"
        }
        ), "elIconSize" to computed<String>(fun(): String {
            val iconSizeVal = this.iconSize
            if (iconSizeVal != null && iconSizeVal.toString() != "") {
                return iconSizeVal.toString()
            }
            val parentIconSizeVal = this.parentData["iconSize"]
            if (parentIconSizeVal != null && parentIconSizeVal.toString() != "") {
                return parentIconSizeVal.toString()
            }
            return "12px"
        }
        ), "elActiveColor" to computed<String>(fun(): String {
            val activeColorVal = this.activeColor
            if (activeColorVal != null && activeColorVal.toString() != "") {
                return activeColorVal.toString()
            }
            val parentActiveColorVal = this.parentData["activeColor"]
            if (parentActiveColorVal != null && parentActiveColorVal.toString() != "") {
                return parentActiveColorVal.toString()
            }
            return "#2979ff"
        }
        ), "elInactiveColor" to computed<String>(fun(): String {
            val inactiveColorVal = this.inactiveColor
            if (inactiveColorVal != null && inactiveColorVal.toString() != "") {
                return inactiveColorVal.toString()
            }
            val parentInactiveColorVal = this.parentData["inactiveColor"]
            if (parentInactiveColorVal != null && parentInactiveColorVal.toString() != "") {
                return parentInactiveColorVal.toString()
            }
            return "#c8c9cc"
        }
        ), "elLabelColor" to computed<String>(fun(): String {
            val labelColorVal = this.labelColor
            if (labelColorVal != null && labelColorVal.toString() != "") {
                return labelColorVal.toString()
            }
            val parentLabelColorVal = this.parentData["labelColor"]
            if (parentLabelColorVal != null && parentLabelColorVal.toString() != "") {
                return parentLabelColorVal.toString()
            }
            return "#606266"
        }
        ), "elShape" to computed<String>(fun(): String {
            val shapeVal = this.shape
            if (shapeVal != null && shapeVal.toString() != "") {
                return shapeVal.toString()
            }
            val parentShapeVal = this.parentData["shape"]
            if (parentShapeVal != null && parentShapeVal.toString() != "") {
                return parentShapeVal.toString()
            }
            return "circle"
        }
        ), "elLabelSize" to computed<String>(fun(): String {
            val labelSizeVal = this.labelSize
            if (labelSizeVal != null && labelSizeVal.toString() != "") {
                return addUnit(labelSizeVal)
            }
            val parentLabelSizeVal = this.parentData["labelSize"]
            if (parentLabelSizeVal != null && parentLabelSizeVal.toString() != "") {
                return addUnit(parentLabelSizeVal)
            }
            return addUnit("15")
        }
        ), "elIconColor" to computed<String>(fun(): String {
            val iconColorVal = this.iconColor
            var iconColorStr = ""
            if (iconColorVal != null && iconColorVal.toString() != "") {
                iconColorStr = iconColorVal.toString()
            } else {
                val parentIconColorVal = this.parentData["iconColor"]
                if (parentIconColorVal != null && parentIconColorVal.toString() != "") {
                    iconColorStr = parentIconColorVal.toString()
                } else {
                    iconColorStr = "#ffffff"
                }
            }
            if (this.elDisabled) {
                return if (this.checked) {
                    this.elInactiveColor
                } else {
                    "transparent"
                }
            } else {
                return if (this.checked) {
                    iconColorStr
                } else {
                    "transparent"
                }
            }
        }
        ), "iconClasses" to computed<String>(fun(): String {
            var classes: UTSArray<String> = _uA()
            classes.push("up-radio__icon-wrap--" + this.elShape)
            if (this.elDisabled) {
                classes.push("up-radio__icon-wrap--disabled")
            }
            if (this.checked && this.elDisabled) {
                classes.push("up-radio__icon-wrap--disabled--checked")
            }
            if (this.checked && !this.elDisabled && this.elActiveColor == "#2979ff") {
                classes.push("up-radio__icon-wrap--active")
            }
            return classes.join(" ")
        }
        ), "iconWrapStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-radio/up-radio.uvue", 234, 11))
            if (this.checked && !this.elDisabled) {
                if (this.elActiveColor != "#2979ff") {
                    style["backgroundColor"] = this.elActiveColor
                    style["borderColor"] = this.elActiveColor
                }
            } else {
                style["backgroundColor"] = "#ffffff"
                style["borderColor"] = this.elInactiveColor
            }
            style["width"] = addUnit(this.elSize)
            style["height"] = addUnit(this.elSize)
            if (this.parentData["iconPlacement"] != null && this.parentData["iconPlacement"].toString() == "right") {
                style["marginRight"] = 0
            }
            return style
        }
        ), "radioStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-radio/up-radio.uvue", 252, 11))
            if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "row") {
                error("检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效")
            }
            if (this.parentData["borderBottom"] != null && this.parentData["borderBottom"].toString() == "true" && this.parentData["placement"] != null && this.parentData["placement"].toString() == "column") {
                style["paddingBottom"] = if (os() == "ios") {
                    "12px"
                } else {
                    "8px"
                }
            }
            return deepMerge(style, addStyle(this.customStyle))
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
    open fun gen_init_fn(): Unit {
        this.updateParentData()
        if (this.parent == null) {
            error("up-radio必须搭配up-radio-group组件使用")
        }
        val modelValueVal = this.parentData["modelValue"]
        if (modelValueVal != null && this.name != null) {
            this.checked = this.name!!.toString() == modelValueVal.toString()
        } else {
            this.checked = false
        }
    }
    open var updateParentData = ::gen_updateParentData_fn
    open fun gen_updateParentData_fn(): Unit {
        this.getParentData("up-radio-group")
    }
    open var iconClickHandler = ::gen_iconClickHandler_fn
    open fun gen_iconClickHandler_fn(e: UniEvent): Unit {
        this.preventEvent(e)
        if (!this.elDisabled) {
            this.setRadioCheckedStatus()
        }
    }
    open var wrapperClickHandler = ::gen_wrapperClickHandler_fn
    open fun gen_wrapperClickHandler_fn(e: UniEvent): Unit {
        if (this.parentData["iconPlacement"] != null && this.parentData["iconPlacement"].toString() == "right") {
            this.iconClickHandler(e)
        }
    }
    open var labelClickHandler = ::gen_labelClickHandler_fn
    open fun gen_labelClickHandler_fn(e: UniEvent): Unit {
        this.preventEvent(e)
        if (!this.elLabelDisabled && !this.elDisabled) {
            this.setRadioCheckedStatus()
        }
    }
    open var emitEvent = ::gen_emitEvent_fn
    open fun gen_emitEvent_fn(): Unit {
        if (!this.checked) {
            this.`$emit`("change", this.name)
            this.`$nextTick`(fun(){
                formValidate(this, "change")
            }
            )
        }
    }
    open var setRadioCheckedStatus = ::gen_setRadioCheckedStatus_fn
    open fun gen_setRadioCheckedStatus_fn(): Unit {
        this.emitEvent()
        this.checked = true
        if (this.`$parent` != null) {
            this.`$parent`!!.`$callMethod`("unCheckedOther", this)
        }
    }
    companion object {
        var name = "up-radio"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-radio" to _pS(_uM("display" to "flex", "flexDirection" to "row", "overflow" to "hidden", "alignItems" to "center", "marginBottom" to 5, "marginTop" to 5)), "up-radio-label--left" to _pS(_uM("flexDirection" to "row")), "up-radio-label--right" to _pS(_uM("flexDirection" to "row-reverse", "justifyContent" to "space-between")), "up-radio__icon-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "marginRight" to 6, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#c8c9cc", "borderRightColor" to "#c8c9cc", "borderBottomColor" to "#c8c9cc", "borderLeftColor" to "#c8c9cc", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-radio__icon-wrap--circle" to _pS(_uM("borderTopLeftRadius" to 50, "borderTopRightRadius" to 50, "borderBottomRightRadius" to 50, "borderBottomLeftRadius" to 50)), "up-radio__icon-wrap--square" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "up-radio__icon-wrap--checked" to _pS(_uM("backgroundColor" to "#FF0000", "borderTopColor" to "#2979ff", "borderRightColor" to "#2979ff", "borderBottomColor" to "#2979ff", "borderLeftColor" to "#2979ff")), "up-radio__icon-wrap--active" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)", "borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)", "borderBottomColor" to "var(--theme-color, #0957de)", "borderLeftColor" to "var(--theme-color, #0957de)")), "up-radio__icon-wrap--disabled" to _pS(_uM("!backgroundColor" to "#ebedf0")), "up-radio__label" to _pS(_uM("marginLeft" to 5, "marginRight" to 12, "color" to "#606266", "fontSize" to 15)), "up-radio__label--disabled" to _pS(_uM("color" to "#c8c9cc")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "default" to crtProp__19["name"]), "shape" to _uM("type" to "String", "default" to crtProp__19["shape"]), "disabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "default" to crtProp__19["disabled"]), "labelDisabled" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "default" to crtProp__19["labelDisabled"]), "activeColor" to _uM("type" to "String", "default" to crtProp__19["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to crtProp__19["inactiveColor"]), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__19["iconSize"]), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__19["labelSize"]), "label" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__19["label"]), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__19["size"]), "color" to _uM("type" to "String", "default" to crtProp__19["color"]), "labelColor" to _uM("type" to "String", "default" to crtProp__19["labelColor"]), "iconColor" to _uM("type" to "String", "default" to crtProp__19["iconColor"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
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
            "color",
            "labelColor",
            "iconColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
