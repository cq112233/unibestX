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
    open var unCheckedOther: (childInstance: ComponentPublicInstance) -> Unit
        get() {
            return unref(this.`$exposed`["unCheckedOther"]) as (childInstance: ComponentPublicInstance) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "unCheckedOther", value)
        }
    open var getProps: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getProps"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getProps", value)
        }
    open var getRefs: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getRefs"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getRefs", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val children = _useUltraUI.children
            val getChildren = _useUltraUI.getChildren
            val addChild = _useUltraUI.addChild
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val parentDataSelf = computed(fun(): UTSJSONObject {
                return _uO("modelValue" to props.modelValue, "disabled" to props.disabled, "inactiveColor" to props.inactiveColor, "activeColor" to props.activeColor, "size" to props.size, "labelColor" to props.labelColor, "labelDisabled" to props.labelDisabled, "labelSize" to props.labelSize, "shape" to props.shape, "iconColor" to props.iconColor, "iconSize" to props.iconSize, "iconPlacement" to props.iconPlacement, "borderBottom" to props.borderBottom, "placement" to props.placement)
            }
            )
            val bemClass = computed(fun(): String {
                return uni.UNI5198058.bem("checkbox-group", _uA(
                    props.placement
                ), _uA())
            }
            )
            fun gen_unCheckedOther_fn(childInstance: ComponentPublicInstance) {
                val values = _uA<String>()
                children.value?.map(fun(child: ComponentPublicInstance){
                    var istats = child.`$callMethod`("getInternalState") as UTSJSONObject
                    if (istats["name"] != null && istats["isChecked"] != null && istats["isChecked"].toString() == "true") {
                        values.push(istats["name"].toString())
                    }
                }
                )
                emit("change", values, childInstance.`$callMethod`("getInternalState") as UTSJSONObject)
                emit("update:modelValue", values)
            }
            val unCheckedOther = ::gen_unCheckedOther_fn
            watch(parentDataSelf, fun(){
                children.value?.map(fun(child: ComponentPublicInstance){
                    child?.`$callMethod`("init")
                }
                )
            }
            , WatchOptions(deep = true))
            val getProps = fun(): UTSJSONObject {
                return parentDataSelf.value
            }
            val getRefs = fun(): UTSJSONObject {
                return _uO()
            }
            __expose(_uM("unCheckedOther" to unCheckedOther, "getChildren" to getChildren, "addChild" to addChild, "getProps" to getProps, "getRefs" to getRefs))
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-checkbox-group",
                    bemClass.value
                ))), _uA(
                    renderSlot(_ctx.`$slots`, "default")
                ), 2)
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
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-checkbox-group--row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-checkbox-group--column" to _pS(_uM("display" to "flex", "flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.name")), "modelValue" to _uM("type" to "Array", "default" to fun(): UTSArray<Any>? {
            return default__72.getArray<Any>("checkboxGroup.value")
        }
        ), "shape" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.shape")), "disabled" to _uM("type" to "Boolean", "default" to default__72.getBoolean("checkboxGroup.disabled")), "activeColor" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.activeColor")), "inactiveColor" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.inactiveColor")), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__72.getNumber("checkboxGroup.size")), "placement" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.placement")), "labelSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__72.getNumber("checkboxGroup.labelSize")), "labelColor" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.labelColor")), "labelDisabled" to _uM("type" to "Boolean", "default" to default__72.getBoolean("checkboxGroup.labelDisabled")), "iconColor" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.iconColor")), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__72.getNumber("checkboxGroup.iconSize")), "iconPlacement" to _uM("type" to "String", "default" to default__72.getString("checkboxGroup.iconPlacement")), "borderBottom" to _uM("type" to "Boolean", "default" to default__72.getBoolean("checkboxGroup.borderBottom"))))
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
