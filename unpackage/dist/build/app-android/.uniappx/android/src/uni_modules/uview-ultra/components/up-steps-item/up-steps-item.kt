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
open class GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: Any by `$props`
    open var desc: Any by `$props`
    open var iconSize: Any by `$props`
    open var error: Boolean by `$props`
    open var index: Any? by `$props`
    open var itemStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem
            val _cache = __ins.renderCache
            val props = __props
            val parentProps = inject<ComputedRef<UTSJSONObject>?>("upStepsProps", null)
            val registerStep = inject<(() -> Number)?>("upStepsRegister", null)
            val totalSteps = inject<Ref<Number>?>("upStepsItemCount", null)
            val internalIndex = ref<Number>(0)
            onMounted(fun(){
                if (props.index != null) {
                    internalIndex.value = parseInt(props.index!!.toString())
                } else if (registerStep != null) {
                    internalIndex.value = registerStep()
                }
            }
            )
            fun gen_getParentProp_fn(key: String, defaultVal: Any): Any {
                if (parentProps == null) {
                    return defaultVal
                }
                val obj = parentProps!!.value
                if (obj != null && obj[key] != null) {
                    return (obj[key] ?: defaultVal) as Any
                }
                return defaultVal
            }
            val getParentProp = ::gen_getParentProp_fn
            val stepIndex = computed<Number>(fun(): Number {
                if (props.index != null) {
                    return parseInt(props.index!!.toString())
                }
                return internalIndex.value
            }
            )
            val childLength = computed<Number>(fun(): Number {
                return totalSteps?.value ?: 0
            }
            )
            val direction = computed<String>(fun(): String {
                return getParentProp("direction", "row").toString()
            }
            )
            val currentStep = computed<Number>(fun(): Number {
                val c = getParentProp("current", 0)
                return parseInt(c.toString())
            }
            )
            val activeColor = computed<String>(fun(): String {
                return getParentProp("activeColor", "#3c9cff").toString()
            }
            )
            val inactiveColor = computed<String>(fun(): String {
                return getParentProp("inactiveColor", "#969799").toString()
            }
            )
            val activeIcon = computed<String>(fun(): String {
                return getParentProp("activeIcon", "").toString()
            }
            )
            val inactiveIcon = computed<String>(fun(): String {
                return getParentProp("inactiveIcon", "").toString()
            }
            )
            val isDot = computed<Boolean>(fun(): Boolean {
                return (getParentProp("dot", false) as Boolean?) ?: false
            }
            )
            val statusClass = computed<String>(fun(): String {
                if (props.error) {
                    return "error"
                }
                if (stepIndex.value < currentStep.value) {
                    return "finish"
                }
                if (stepIndex.value == currentStep.value) {
                    return "process"
                }
                return "wait"
            }
            )
            val itemContainerStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (direction.value == "row") {
                    style["flex"] = "1"
                } else {
                    style["width"] = "100%"
                }
                return style
            }
            )
            val itemStyleInner = computed(fun(): UTSJSONObject {
                return (props.itemStyle ?: _uO()) as UTSJSONObject
            }
            )
            val contentStyle = computed(fun(): UTSJSONObject {
                return _uO()
            }
            )
            val lineLeftStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (stepIndex.value <= currentStep.value) {
                    style["backgroundColor"] = activeColor.value
                } else {
                    style["backgroundColor"] = inactiveColor.value
                }
                return style
            }
            )
            val lineRightStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (stepIndex.value < currentStep.value) {
                    style["backgroundColor"] = activeColor.value
                } else {
                    style["backgroundColor"] = inactiveColor.value
                }
                return style
            }
            )
            val lineColTopStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (stepIndex.value <= currentStep.value) {
                    style["backgroundColor"] = activeColor.value
                } else {
                    style["backgroundColor"] = inactiveColor.value
                }
                return style
            }
            )
            val lineColBottomStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (stepIndex.value < currentStep.value) {
                    style["backgroundColor"] = activeColor.value
                } else {
                    style["backgroundColor"] = inactiveColor.value
                }
                return style
            }
            )
            val dotStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (statusClass.value == "finish" || statusClass.value == "process") {
                    style["backgroundColor"] = activeColor.value
                } else {
                    style["backgroundColor"] = inactiveColor.value
                }
                return style
            }
            )
            val circleStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (statusClass.value == "process") {
                    style["backgroundColor"] = activeColor.value
                    style["borderColor"] = activeColor.value
                } else if (statusClass.value == "finish") {
                    style["backgroundColor"] = "#ffffff"
                    style["borderColor"] = activeColor.value
                } else if (statusClass.value == "error") {
                    style["backgroundColor"] = "#ffffff"
                    style["borderColor"] = "#f56c6c"
                } else {
                    style["backgroundColor"] = "#ffffff"
                    style["borderColor"] = inactiveColor.value
                }
                return style
            }
            )
            val circleTextStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (statusClass.value == "process") {
                    style["color"] = "#ffffff"
                } else {
                    style["color"] = inactiveColor.value
                }
                return style
            }
            )
            val titleStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (statusClass.value == "process" || statusClass.value == "finish") {
                    style["color"] = "#303133"
                    style["fontWeight"] = "bold"
                } else {
                    style["color"] = inactiveColor.value
                }
                return style
            }
            )
            val descStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["color"] = "#909399"
                return style
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-steps-item",
                    _uA(
                        "up-steps-item--" + direction.value
                    )
                )), "style" to _nS(itemContainerStyle.value)), _uA(
                    if (isTrue(direction.value == "row" && stepIndex.value > 0)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-steps-item__line up-steps-item__line--row-left", "style" to _nS(lineLeftStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(direction.value == "row" && (childLength.value == 0 || stepIndex.value < childLength.value - 1))) {
                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-steps-item__line up-steps-item__line--row-right", "style" to _nS(lineRightStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(direction.value == "column" && stepIndex.value > 0)) {
                        _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-steps-item__line up-steps-item__line--col-top", "style" to _nS(lineColTopStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(direction.value == "column" && (childLength.value == 0 || stepIndex.value < childLength.value - 1))) {
                        _cE("view", _uM("key" to 3, "class" to "weapp-tw-border up-steps-item__line up-steps-item__line--col-bottom", "style" to _nS(lineColBottomStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-steps-item__wrapper",
                        _uA(
                            "up-steps-item__wrapper--" + direction.value,
                            if (isDot.value) {
                                "up-steps-item__wrapper--" + direction.value + "--dot"
                            } else {
                                ""
                            }
                        )
                    )), "style" to _nS(itemStyleInner.value)), _uA(
                        renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue(isDot.value)) {
                                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-steps-item__wrapper__dot", "style" to _nS(dotStyle.value)), null, 4)
                                } else {
                                    if (isTrue(activeIcon.value != "" || inactiveIcon.value != "")) {
                                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-steps-item__wrapper__icon"), _uA(
                                            _cV(_component_up_icon, _uM("name" to if (stepIndex.value <= currentStep.value) {
                                                if (activeIcon.value != "") {
                                                    activeIcon.value
                                                } else {
                                                    inactiveIcon.value
                                                }
                                            } else {
                                                if (inactiveIcon.value != "") {
                                                    inactiveIcon.value
                                                } else {
                                                    activeIcon.value
                                                }
                                            }, "size" to _ctx.iconSize, "color" to if (stepIndex.value <= currentStep.value) {
                                                if (activeColor.value != "") {
                                                    activeColor.value
                                                } else {
                                                    "#3c9cff"
                                                }
                                            } else {
                                                inactiveColor.value
                                            }), null, 8, _uA(
                                                "name",
                                                "size",
                                                "color"
                                            ))
                                        ))
                                    } else {
                                        _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-steps-item__wrapper__circle", "style" to _nS(circleStyle.value)), _uA(
                                            if (isTrue(statusClass.value == "process" || statusClass.value == "wait")) {
                                                _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-steps-item__wrapper__circle__text", "style" to _nS(circleTextStyle.value)), _tD(stepIndex.value + 1), 5)
                                            } else {
                                                _cV(_component_up_icon, _uM("key" to 1, "color" to if (statusClass.value == "error") {
                                                    "#f56c6c"
                                                } else {
                                                    if (activeColor.value != "") {
                                                        activeColor.value
                                                    } else {
                                                        "#3c9cff"
                                                    }
                                                }
                                                , "size" to "12", "name" to if (statusClass.value == "error") {
                                                    "close"
                                                } else {
                                                    "checkmark"
                                                }
                                                ), null, 8, _uA(
                                                    "color",
                                                    "name"
                                                ))
                                            }
                                        ), 4)
                                    }
                                }
                            )
                        }
                        )
                    ), 6),
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-steps-item__content",
                        _uA(
                            "up-steps-item__content--" + direction.value
                        )
                    )), "style" to _nS(contentStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "content", _uM("index" to stepIndex.value), fun(): UTSArray<Any> {
                            return _uA(
                                renderSlot(_ctx.`$slots`, "title", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-steps-item__content__title-text", "style" to _nS(titleStyle.value)), _tD(_ctx.title.toString()), 5)
                                    )
                                }
                                ),
                                renderSlot(_ctx.`$slots`, "desc", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (_ctx.desc.toString() != "") {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-steps-item__content__desc-text", "style" to _nS(descStyle.value)), _tD(_ctx.desc.toString()), 5)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                )
                            )
                        }
                        )
                    ), 6)
                ), 6)
            }
        }
        var name = "up-steps-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-steps-item" to _pS(_uM("position" to "relative", "display" to "flex")), "up-steps-item--row" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "flex-start")), "up-steps-item--column" to _pS(_uM("flexDirection" to "row", "alignItems" to "flex-start", "width" to "100%", "minHeight" to 60)), "up-steps-item__wrapper" to _pS(_uM("display" to "flex", "justifyContent" to "center", "alignItems" to "center", "position" to "relative", "backgroundColor" to "#ffffff", "zIndex" to 2)), "up-steps-item__wrapper--row" to _pS(_uM("height" to 24, "width" to 24)), "up-steps-item__wrapper--row--dot" to _pS(_uM("width" to 16, "height" to 16)), "up-steps-item__wrapper--column" to _pS(_uM("width" to 24, "height" to 24, "marginRight" to 10)), "up-steps-item__wrapper--column--dot" to _pS(_uM("height" to 16, "width" to 16)), "up-steps-item__wrapper__circle" to _pS(_uM("width" to 20, "height" to 20, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-steps-item__wrapper__circle__text" to _pS(_uM("fontSize" to 11, "textAlign" to "center", "lineHeight" to "11px")), "up-steps-item__wrapper__dot" to _pS(_uM("width" to 8, "height" to 8, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-steps-item__content" to _pS(_uM("display" to "flex")), "up-steps-item__content--row" to _pS(_uM("flexDirection" to "column", "alignItems" to "center", "marginTop" to 6, "width" to "100%")), "up-steps-item__content--column" to _pS(_uM("flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "paddingBottom" to 16)), "up-steps-item__content__title-text" to _pS(_uM("fontSize" to 13, "lineHeight" to "18px", "textAlign" to "center")), "up-steps-item__content__desc-text" to _pS(_uM("fontSize" to 11, "lineHeight" to "16px", "marginTop" to 2, "textAlign" to "center")), "up-steps-item__line" to _pS(_uM("position" to "absolute", "zIndex" to 1)), "up-steps-item__line--row-left" to _pS(_uM("top" to 11, "left" to 0, "width" to "50%", "height" to 2)), "up-steps-item__line--row-right" to _pS(_uM("top" to 11, "left" to "50%", "width" to "50%", "height" to 2)), "up-steps-item__line--col-top" to _pS(_uM("top" to 0, "left" to 11, "width" to 2, "height" to 12)), "up-steps-item__line--col-bottom" to _pS(_uM("top" to 12, "bottom" to 0, "left" to 11, "width" to 2)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "desc" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 17), "error" to _uM("type" to "Boolean", "default" to false), "index" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to null), "itemStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "desc",
            "iconSize",
            "error",
            "index",
            "itemStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
