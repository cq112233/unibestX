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
open class GenUniModulesUviewUltraComponentsUpSwitchUpSwitch : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var loading: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var size: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var modelValue: Any by `$props`
    open var activeValue: Any by `$props`
    open var inactiveValue: Any by `$props`
    open var asyncChange: Boolean by `$props`
    open var space: Any by `$props`
    open var customStyle: UTSJSONObject by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSwitchUpSwitch) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSwitchUpSwitch
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            fun gen_toNum_fn(value: Any?, fallback: Number): Number {
                if (value == null) {
                    return fallback
                }
                val n = parseInt(value.toString() ?: "")
                return if (isNaN(n)) {
                    fallback
                } else {
                    n
                }
            }
            val toNum = ::gen_toNum_fn
            val isActive = computed<Boolean>(fun(): Boolean {
                return props.modelValue == props.activeValue
            }
            )
            val customInactiveColor = computed<Boolean>(fun(): Boolean {
                return props.inactiveColor != "#fff" && props.inactiveColor != "#ffffff"
            }
            )
            val loadingIconSize = computed(fun(): Number {
                return parseInt(getPx(props.size)) * 0.6
            }
            )
            val loadingColor = computed(fun(): String {
                if (isActive.value) {
                    if (props.activeColor != "" && props.activeColor != "#2979ff") {
                        return props.activeColor
                    }
                    return default__11.getString("color.up-primary") as String
                }
                return "#AAABAD"
            }
            )
            val switchClass = computed<String>(fun(): String {
                var classes = _uA(
                    "up-switch",
                    "wtu-abh7w1-0"
                )
                if (props.disabled) {
                    classes.push("up-switch--disabled")
                }
                if (isActive.value) {
                    classes.push("up-switch--on")
                } else {
                    classes.push("up-switch--off")
                }
                return classes.join(" ")
            }
            )
            val switchStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                val sizeNum = toNum(props.size, 25)
                if (sizeNum != 25) {
                    style["width"] = addUnit(sizeNum * 2 + 2)
                    style["height"] = addUnit(sizeNum + 2)
                }
                if (isActive.value) {
                    style["borderColor"] = "rgba(0, 0, 0, 0)"
                } else {
                    if (customInactiveColor.value) {
                        style["borderColor"] = "rgba(0, 0, 0, 0)"
                    } else {
                        style["borderColor"] = "rgba(0, 0, 0, 0.12)"
                    }
                }
                return style
            }
            )
            val mergedSwitchStyle = computed(fun(): UTSJSONObject {
                return deepMerge(switchStyle.value, addStyle(props.customStyle)) as UTSJSONObject
            }
            )
            val bgActiveStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                val sizeNum = toNum(props.size, 25)
                style["width"] = addUnit(sizeNum * 2 + 2)
                style["height"] = addUnit(sizeNum + 2)
                if (props.activeColor != "#2979ff") {
                    style["backgroundColor"] = props.activeColor
                }
                return style
            }
            )
            val nodeStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                val sizeVal = toNum(props.size, 25)
                val spaceVal = toNum(props.space, 0)
                style["width"] = addUnit(sizeVal - spaceVal)
                style["height"] = addUnit(sizeVal - spaceVal)
                val translateX = if (isActive.value) {
                    addUnit(props.space)
                } else {
                    addUnit(props.size)
                }
                style["transform"] = "translateX(-" + translateX + ")"
                return style
            }
            )
            val bgStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                val sizeNum = toNum(props.size, 25)
                style["width"] = addUnit(sizeNum * 2)
                style["height"] = addUnit(sizeNum)
                style["backgroundColor"] = props.inactiveColor
                style["transform"] = "scale(" + (if (isActive.value) {
                    0
                } else {
                    1
                }
                ) + ")"
                return style
            }
            )
            fun gen_clickHandler_fn() {
                if (!props.disabled && !props.loading) {
                    val oldValue = if (isActive.value) {
                        props.inactiveValue
                    } else {
                        props.activeValue
                    }
                    if (!props.asyncChange) {
                        emit("update:modelValue", oldValue)
                    }
                    nextTick(fun(){
                        emit("change", oldValue)
                    }
                    )
                }
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border",
                    switchClass.value
                )), "style" to _nS(mergedSwitchStyle.value), "onClick" to clickHandler), _uA(
                    if (isTrue(isActive.value)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-switch__bg-active", "style" to _nS(bgActiveStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(!isActive.value)) {
                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-switch__bg", "style" to _nS(bgStyle.value)), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-switch__node",
                        _uA(
                            if (_ctx.modelValue == _ctx.activeValue) {
                                "up-switch__node--on"
                            } else {
                                ""
                            }
                        )
                    )), "style" to _nS(nodeStyle.value)), _uA(
                        _cV(_component_up_loading_icon, _uM("show" to _ctx.loading, "mode" to "circle", "timingFunction" to "linear", "color" to loadingColor.value, "size" to loadingIconSize.value), null, 8, _uA(
                            "show",
                            "color",
                            "size"
                        ))
                    ), 6)
                ), 6)
            }
        }
        var name = "up-switch"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-switch" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "backgroundColor" to "rgba(0,0,0,0)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "transitionProperty" to "backgroundColor", "transitionDuration" to "0.4s", "borderTopColor" to "rgba(0,0,0,0.12)", "borderRightColor" to "rgba(0,0,0,0.12)", "borderBottomColor" to "rgba(0,0,0,0.12)", "borderLeftColor" to "rgba(0,0,0,0.12)", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "justifyContent" to "flex-end", "alignItems" to "center", "overflow" to "hidden", "width" to 52, "height" to 27)), "up-switch__bg-active" to _pS(_uM("position" to "absolute", "top" to -1, "left" to -1, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "var(--theme-color)", "width" to 52, "height" to 27)), "up-switch__node" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "boxShadow" to "1px 1px 1px 0 rgba(0, 0, 0, 0.25)", "transitionProperty" to "transform", "transitionDuration" to "0.4s", "transitionTimingFunction" to "cubic-bezier(0.3,1.05,0.4,1.05)")), "up-switch__bg" to _pS(_uM("position" to "absolute", "borderTopLeftRadius" to 0, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 0, "backgroundColor" to "#FFFFFF", "transitionProperty" to "transform", "transitionDuration" to "0.4s", "transitionTimingFunction" to "ease")), "up-switch--disabled" to _pS(_uM("opacity" to 0.6)), "wtu-abh7w1-0" to _pS(_uM("cursor" to "pointer")), "@TRANSITION" to _uM("up-switch" to _uM("property" to "backgroundColor", "duration" to "0.4s"), "up-switch__node" to _uM("property" to "transform", "duration" to "0.4s", "timingFunction" to "cubic-bezier(0.3,1.05,0.4,1.05)"), "up-switch__bg" to _uM("property" to "transform", "duration" to "0.4s", "timingFunction" to "ease")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "loading" to _uM("type" to "Boolean", "required" to false, "default" to false), "disabled" to _uM("type" to "Boolean", "required" to false, "default" to false), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 25), "activeColor" to _uM("type" to "String", "required" to false, "default" to "#2979ff"), "inactiveColor" to _uM("type" to "String", "required" to false, "default" to "#ffffff"), "modelValue" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "required" to false, "default" to false), "activeValue" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "required" to false, "default" to true), "inactiveValue" to _uM("type" to _uA(
            "String",
            "Number",
            "Boolean"
        ), "required" to false, "default" to false), "asyncChange" to _uM("type" to "Boolean", "required" to false, "default" to false), "space" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 0), "customStyle" to _uM("type" to "UTSJSONObject", "required" to false, "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "loading",
            "disabled",
            "size",
            "activeColor",
            "inactiveColor",
            "modelValue",
            "activeValue",
            "inactiveValue",
            "asyncChange",
            "space",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
