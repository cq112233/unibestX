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
open class GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: String by `$props`
    open var modelValue: UTSArray<Any> by `$props`
    open var shape: String by `$props`
    open var disabled: Boolean by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var size: Any by `$props`
    open var placement: String by `$props`
    open var labelSize: Any by `$props`
    open var labelColor: String by `$props`
    open var labelDisabled: Boolean by `$props`
    open var iconColor: String by `$props`
    open var iconSize: Any by `$props`
    open var iconPlacement: String by `$props`
    open var borderBottom: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val modelValue = computed<UTSArray<Any>>(fun(): UTSArray<Any> {
                return props.modelValue
            }
            )
            fun gen_toggle_fn(name: String, checked: Boolean) {
                var currentValues: UTSArray<Any> = _uA()
                if (props.modelValue != null) {
                    val rawArr = props.modelValue as UTSArray<Any>
                    currentValues = rawArr.slice()
                }
                var foundIndex: Number = -1
                run {
                    var i: Number = 0
                    while(i < currentValues.length){
                        if (currentValues[i] != null && currentValues[i].toString() == name.toString()) {
                            foundIndex = i
                            break
                        }
                        i++
                    }
                }
                if (checked) {
                    if (foundIndex == -1) {
                        currentValues.push(name)
                    }
                } else {
                    if (foundIndex != -1) {
                        currentValues.splice(foundIndex, 1)
                    }
                }
                emit("update:modelValue", currentValues)
                emit("change", currentValues)
            }
            val toggle = ::gen_toggle_fn
            provide(CHECKBOX_GROUP_KEY, CheckboxGroupProvide(modelValue = modelValue, shape = computed(fun(): String {
                return props.shape
            }
            ), disabled = computed(fun(): Boolean {
                return props.disabled
            }
            ), activeColor = computed(fun(): String {
                return props.activeColor
            }
            ), inactiveColor = computed(fun(): String {
                return props.inactiveColor
            }
            ), size = computed(fun(): Any {
                return props.size
            }
            ), placement = computed(fun(): String {
                return props.placement
            }
            ), labelSize = computed(fun(): Any {
                return props.labelSize
            }
            ), labelColor = computed(fun(): String {
                return props.labelColor
            }
            ), labelDisabled = computed(fun(): Boolean {
                return props.labelDisabled
            }
            ), iconColor = computed(fun(): String {
                return props.iconColor
            }
            ), iconSize = computed(fun(): Any {
                return props.iconSize
            }
            ), iconPlacement = computed(fun(): String {
                return props.iconPlacement
            }
            ), borderBottom = computed(fun(): Boolean {
                return props.borderBottom
            }
            ), toggle = toggle))
            val bemClass = computed(fun(): String {
                return uni.UNIB120614.bem("checkbox-group", _uA(
                    props.placement
                ), _uA())
            }
            )
            val groupStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["display"] = "flex"
                style["flexDirection"] = if (props.placement == "column") {
                    "column"
                } else {
                    "row"
                }
                style["flexWrap"] = "wrap"
                style["alignItems"] = "center"
                return style
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-checkbox-group",
                    bemClass.value
                )), "style" to _nS(groupStyle.value)), _uA(
                    renderSlot(_ctx.`$slots`, "default")
                ), 6)
            }
        }
        var name = "up-checkbox-group"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-checkbox-group" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-checkbox-group--row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center")), "up-checkbox-group--column" to _pS(_uM("display" to "flex", "flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to "String", "required" to false, "default" to ""), "modelValue" to _uM("type" to "Array", "required" to false, "default" to fun(): UTSArray<Any> {
            return _uA()
        }
        ), "shape" to _uM("type" to "String", "required" to false, "default" to "square"), "disabled" to _uM("type" to "Boolean", "required" to false, "default" to false), "activeColor" to _uM("type" to "String", "required" to false, "default" to "#2979ff"), "inactiveColor" to _uM("type" to "String", "required" to false, "default" to "#c8c9cc"), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 18), "placement" to _uM("type" to "String", "required" to false, "default" to "row"), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 14), "labelColor" to _uM("type" to "String", "required" to false, "default" to "#303133"), "labelDisabled" to _uM("type" to "Boolean", "required" to false, "default" to false), "iconColor" to _uM("type" to "String", "required" to false, "default" to "#ffffff"), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 12), "iconPlacement" to _uM("type" to "String", "required" to false, "default" to "left"), "borderBottom" to _uM("type" to "Boolean", "required" to false, "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "name",
            "modelValue",
            "shape",
            "disabled",
            "activeColor",
            "inactiveColor",
            "size",
            "placement",
            "labelSize",
            "labelColor",
            "labelDisabled",
            "iconColor",
            "iconSize",
            "iconPlacement",
            "borderBottom"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
