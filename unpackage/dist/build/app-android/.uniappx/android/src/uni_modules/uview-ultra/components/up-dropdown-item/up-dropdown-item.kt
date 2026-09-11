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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val parentDropdownProps = inject<ComputedRef<UTSJSONObject>?>("upDropdownProps", null)
            val parentActive = inject<Ref<Boolean>?>("upDropdownActive", null)
            val parentCurrent = inject<Ref<Number>?>("upDropdownCurrent", null)
            val registerFn = inject<((item: UPDropdownMenu) -> Number)?>("upDropdownRegisterItem", null)
            val updateFn = inject<((idx: Number, title: String) -> Unit)?>("upDropdownUpdateItemTitle", null)
            val closeFn = inject<(() -> Unit)?>("upDropdownClose", null)
            val itemIndex = ref<Number>(-1)
            val isActive = computed<Boolean>(fun(): Boolean {
                if (parentActive != null && parentCurrent != null) {
                    return parentActive!!.value == true && parentCurrent!!.value == itemIndex.value
                }
                return false
            }
            )
            val activeColor = computed<String>(fun(): String {
                if (parentDropdownProps != null && parentDropdownProps!!.value != null && (parentDropdownProps!!.value["activeColor"] ?: "") != "") {
                    return parentDropdownProps!!.value["activeColor"] as String
                }
                return "#2979ff"
            }
            )
            val inactiveColor = computed<String>(fun(): String {
                if (parentDropdownProps != null && parentDropdownProps!!.value != null && (parentDropdownProps!!.value["inactiveColor"] ?: "") != "") {
                    return parentDropdownProps!!.value["inactiveColor"] as String
                }
                return "#606266"
            }
            )
            val scrollHeightStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to addUnit(props.height))
            }
            )
            fun gen_cellClick_fn(value: Any?) {
                emit("update:modelValue", value)
                emit("change", value)
                if (closeFn != null) {
                    closeFn()
                }
            }
            val cellClick = ::gen_cellClick_fn
            fun gen_isItemActive_fn(item: UTSJSONObject): Boolean {
                val kVal = item["value"]
                if (props.modelValue == null || kVal == null) {
                    return false
                }
                return "" + props.modelValue!! == "" + kVal
            }
            val isItemActive = ::gen_isItemActive_fn
            fun gen_getItemTextStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val isSelected = isItemActive(item)
                if (isSelected) {
                    style["color"] = activeColor.value
                } else {
                    style["color"] = inactiveColor.value
                }
                return style
            }
            val getItemTextStyle = ::gen_getItemTextStyle_fn
            onMounted(fun(){
                if (registerFn != null) {
                    itemIndex.value = registerFn(UPDropdownMenu(title = props.title.toString(), disabled = props.disabled))
                }
            }
            )
            watch(fun(): Any {
                return props.title
            }
            , fun(newTitle: Any){
                if (updateFn != null && itemIndex.value >= 0) {
                    updateFn(itemIndex.value, newTitle.toString())
                }
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_cell_group = resolveEasyComponent("up-cell-group", GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupClass)
                return if (isTrue(isActive.value)) {
                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-dropdown-item", "onTouchmove" to withModifiers(fun(){}, _uA(
                        "stop",
                        "prevent"
                    )), "onClick" to withModifiers(fun(){}, _uA(
                        "stop",
                        "prevent"
                    ))), _uA(
                        if (isTrue(_ctx.`$slots`["default"] == null && _ctx.`$slots`["\$default"] == null)) {
                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-dropdown-item__scroll", "style" to _nS(scrollHeightStyle.value)), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-dropdown-item__options"), _uA(
                                    _cV(_component_up_cell_group, null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(props.options, fun(item, index, __index, _cached): Any {
                                                return _cV(_component_up_cell, _uM("onClick" to fun(){
                                                    cellClick(item["value"])
                                                }, "arrow" to false, "key" to index), _uM("title" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("text", _uM("class" to _nC(_uA(
                                                            "weapp-tw-border up-dropdown-item__text",
                                                            _uM("up-dropdown-item__text--active" to (isItemActive(item) && activeColor.value == "#2979ff"))
                                                        )), "style" to _nS(getItemTextStyle(item))), _tD(if (item["label"] != null) {
                                                            item["label"]!!.toString()
                                                        } else {
                                                            ""
                                                        }), 7)
                                                    )
                                                }), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        if (isTrue(isItemActive(item))) {
                                                            _cV(_component_up_icon, _uM("key" to 0, "name" to "checkbox-mark", "color" to if (activeColor.value == "#2979ff") {
                                                                "primary"
                                                            } else {
                                                                activeColor.value
                                                            }, "size" to "18"), null, 8, _uA(
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-dropdown-item__scroll" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ffffff")), "up-dropdown-item__text" to _pS(_uM("fontSize" to 15)), "up-dropdown-item__text--active" to _pS(_uM("color" to "var(--theme-color, #0957de)")))
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
        ), "default" to default__35.getAny("dropdownItem.value")), "title" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__35.getString("dropdownItem.title")), "options" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject>? {
            return default__35.getArray<UTSJSONObject>("dropdownItem.options")
        }
        ), "disabled" to _uM("type" to "Boolean", "default" to default__35.getBoolean("dropdownItem.disabled")), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__35.getNumber("dropdownItem.height")), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to default__35.getBoolean("dropdownItem.closeOnClickOverlay"))))
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
