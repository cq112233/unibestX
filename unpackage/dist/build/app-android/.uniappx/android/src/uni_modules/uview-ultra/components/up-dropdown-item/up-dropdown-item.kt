@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: Any by `$props`
    open var title: Any by `$props`
    open var options: UTSArray<UTSJSONObject> by `$props`
    open var disabled: Boolean by `$props`
    open var height: Any by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
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
    open var active: Boolean
        get() {
            return unref(this.`$exposed`["active"]) as Boolean
        }
        set(value) {
            setRefValue(this.`$exposed`, "active", value)
        }
    open var setActive: (kVal: Boolean) -> Unit
        get() {
            return unref(this.`$exposed`["setActive"]) as (kVal: Boolean) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setActive", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI(_uO("activeColor" to `default`.getString("color.up-primary"), "inactiveColor" to "#606266"))
            val parent = _useUltraUI.parent
            val parentData = _useUltraUI.parentData
            val getParentData = _useUltraUI.getParentData
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val active = ref(false)
            val activeColor = ref(`default`.getString("color.up-primary") as String)
            val inactiveColor = ref("#606266")
            val propsChange = computed(fun(): String {
                return "" + props.title + "-" + props.disabled
            }
            )
            watch(active, fun(kVal: Boolean){})
            watch(propsChange, fun(){
                if (parent.value != null) {
                    parent.value!!.`$callMethod`("init")
                }
            }
            )
            fun gen_init_fn() {
                getParentData("up-dropdown", instance, false)
                var parentRef = parent.value
                if (parentRef != null) {
                    if (parentData.value["activeColor"] != null) {
                        activeColor.value = parentData.value["activeColor"] as String
                    }
                    if (parentData.value["inactiveColor"] != null) {
                        inactiveColor.value = parentData.value["inactiveColor"] as String
                    }
                    var childrenList = parentRef.`$callMethod`("getChildren") as UTSArray<ComponentPublicInstance>?
                    if (childrenList == null) {
                        childrenList = parentRef.`$data`["children"] as UTSArray<ComponentPublicInstance>?
                    }
                    if (childrenList != null && childrenList.length == 1) {
                        active.value = true
                    }
                    parentRef.`$callMethod`("addMenuListItem", UPDropdownMenu(title = props.title.toString(), disabled = props.disabled))
                }
            }
            val init = ::gen_init_fn
            fun gen_cellClick_fn(value: Any?) {
                emit("update:modelValue", value)
                if (parent.value != null) {
                    parent.value!!.`$callMethod`("close")
                }
                emit("change", value)
            }
            val cellClick = ::gen_cellClick_fn
            val setActive = fun(kVal: Boolean){
                active.value = kVal
            }
            fun gen_getItemTextStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val isSelected = props.modelValue.toString() == item["value"].toString()
                if (isSelected) {
                    if (activeColor.value != "#2979ff") {
                        style["color"] = activeColor.value
                    }
                } else {
                    style["color"] = inactiveColor.value
                }
                return style
            }
            val getItemTextStyle = ::gen_getItemTextStyle_fn
            onMounted(fun(){
                init()
            }
            )
            __expose(_uM("init" to init, "active" to active, "setActive" to setActive))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_cell_group = resolveEasyComponent("up-cell-group", GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupClass)
                return if (isTrue(active.value)) {
                    _cE("view", _uM("key" to 0, "class" to "up-dropdown-item", "onTouchmove" to withModifiers(fun(){}, _uA(
                        "stop",
                        "prevent"
                    )), "onClick" to withModifiers(fun(){}, _uA(
                        "stop",
                        "prevent"
                    ))), _uA(
                        if (isTrue(_ctx.`$slots`["default"] == null && _ctx.`$slots`["\$default"] == null)) {
                            _cE("view", _uM("key" to 0, "class" to "up-dropdown-item__scroll", "scroll-y" to "false", "style" to _nS(_uM("height" to _ctx.`$up`.addUnit(props.height)))), _uA(
                                _cE("view", _uM("class" to "up-dropdown-item__options"), _uA(
                                    _cV(_component_up_cell_group, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(props.options, fun(item, index, __index, _cached): Any {
                                                return _cV(_component_up_cell, _uM("onClick" to fun(){
                                                    cellClick(item["value"])
                                                }, "arrow" to false, "key" to index), _uM("title" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("text", _uM("class" to _nC(_uA(
                                                            "up-dropdown-item__text",
                                                            _uM("up-dropdown-item__text--active" to (props.modelValue.toString() == item["value"].toString() && activeColor.value == "#2979ff"))
                                                        )), "style" to _nS(_uA(
                                                            getItemTextStyle(item)
                                                        ))), _tD(item["label"].toString()), 7)
                                                    )
                                                }), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        if (props.modelValue.toString() == item["value"].toString()) {
                                                            _cV(_component_up_icon, _uM("key" to 0, "name" to "checkbox-mark", "color" to if (activeColor.value == "#2979ff") {
                                                                "primary"
                                                            } else {
                                                                activeColor.value
                                                            }, "size" to "32"), null, 8, _uA(
                                                                "color"
                                                            ))
                                                        } else {
                                                            _cC("v-if", true)
                                                        }
                                                    )
                                                }), "_" to 2), 1032, _uA(
                                                    "onClick"
                                                ))
                                            }), 128)
                                        )
                                    }), "_" to 1))
                                ))
                            ), 4)
                        } else {
                            renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
                        }
                    ), 32)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-dropdown-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-dropdown-item__scroll" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ffffff")), "up-dropdown-item__text" to _pS(_uM("fontSize" to 15)), "up-dropdown-item__text--active" to _pS(_uM("color" to "var(--theme-color, #0957de)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to _uA(
            "Number",
            "String",
            "Array"
        ), "default" to default__83.getAny("dropdownItem.value")), "title" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__83.getString("dropdownItem.title")), "options" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject>? {
            return default__83.getArray<UTSJSONObject>("dropdownItem.options")
        }
        ), "disabled" to _uM("type" to "Boolean", "default" to default__83.getBoolean("dropdownItem.disabled")), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__83.getNumber("dropdownItem.height")), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to default__83.getBoolean("dropdownItem.closeOnClickOverlay"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "title",
            "options",
            "disabled",
            "height",
            "closeOnClickOverlay"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
