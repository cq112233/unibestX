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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
open class GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfall : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: UTSArray<UTSJSONObject> by `$props`
    open var value: UTSArray<UTSJSONObject> by `$props`
    open var columns: Any by `$props`
    open var columnsMin: Any by `$props`
    open var minColumnWidth: Number by `$props`
    open var idKey: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var clear: () -> Unit
        get() {
            return unref(this.`$exposed`["clear"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "clear", value)
        }
    open var remove: (id: Any?) -> Unit
        get() {
            return unref(this.`$exposed`["remove"]) as (id: Any?) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "remove", value)
        }
    open var modify: (id: Any, key: String, kVal: Any) -> Unit
        get() {
            return unref(this.`$exposed`["modify"]) as (id: Any, key: String, kVal: Any) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "modify", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfall, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfall
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val windowWidth = ref<Number>(375)
            onMounted(fun(){
                windowWidth.value = uni_getSystemInfoSync().windowWidth
            }
            )
            fun gen_getColumnsCount_fn(): Number {
                if (props.columns.toString() == "auto") {
                    val columnGap: Number = 7
                    var columnCount: Number = Math.max(1, Math.floor(windowWidth.value / (props.minColumnWidth + columnGap)))
                    val minCol: Number = parseInt(props.columnsMin.toString())
                    if (columnCount < minCol) {
                        columnCount = minCol
                    }
                    return columnCount
                }
                return parseInt(props.columns.toString())
            }
            val getColumnsCount = ::gen_getColumnsCount_fn
            val columnList = computed<UTSArray<UTSArray<UTSJSONObject>>>(fun(): UTSArray<UTSArray<UTSJSONObject>> {
                val cols = getColumnsCount()
                val result: UTSArray<UTSArray<UTSJSONObject>> = _uA()
                run {
                    var i: Number = 0
                    while(i < cols){
                        result.push(_uA<UTSJSONObject>())
                        i++
                    }
                }
                val dataList = if (props.modelValue.length > 0) {
                    props.modelValue
                } else {
                    props.value
                }
                run {
                    var i: Number = 0
                    while(i < dataList.length){
                        val colIndex: Number = i % cols
                        result[colIndex].push(dataList[i])
                        i++
                    }
                }
                return result
            }
            )
            fun gen_getColumnStyle_fn(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (index > 0) {
                    style["marginLeft"] = "10rpx"
                }
                return style
            }
            val getColumnStyle = ::gen_getColumnStyle_fn
            fun gen_clear_fn() {
                emit("update:modelValue", _uA<UTSJSONObject>())
                emit("update:value", _uA<UTSJSONObject>())
            }
            val clear = ::gen_clear_fn
            fun gen_remove_fn(id: Any?) {
                if (id == null) {
                    return
                }
                val dataList = if (props.modelValue.length > 0) {
                    props.modelValue
                } else {
                    props.value
                }
                val idx = dataList.findIndex(fun(kVal: UTSJSONObject): Boolean {
                    return kVal[props.idKey] != null && kVal[props.idKey]!!.toString() == id.toString()
                }
                )
                if (idx != -1) {
                    val newData: UTSArray<UTSJSONObject> = JSON.parse(JSON.stringify(dataList)) as UTSArray<UTSJSONObject>
                    newData.splice(idx, 1)
                    emit("update:modelValue", newData)
                    emit("update:value", newData)
                }
            }
            val remove = ::gen_remove_fn
            fun gen_modify_fn(id: Any, key: String, kVal: Any) {
                val dataList = if (props.modelValue.length > 0) {
                    props.modelValue
                } else {
                    props.value
                }
                val idx = dataList.findIndex(fun(item: UTSJSONObject): Boolean {
                    return item[props.idKey] != null && item[props.idKey]!!.toString() == id.toString()
                }
                )
                if (idx != -1) {
                    val newData: UTSArray<UTSJSONObject> = JSON.parse(JSON.stringify(dataList)) as UTSArray<UTSJSONObject>
                    newData[idx][key] = kVal
                    emit("update:modelValue", newData)
                    emit("update:value", newData)
                }
            }
            val modify = ::gen_modify_fn
            __expose(_uM("clear" to clear, "remove" to remove, "modify" to modify))
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-waterfall"), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(columnList.value, fun(column, index, __index, _cached): Any {
                        return _cE("view", _uM("key" to index, "id" to ("up-column-" + index), "class" to "weapp-tw-border up-column", "style" to _nS(getColumnStyle(index))), _uA(
                            renderSlot(_ctx.`$slots`, "column", _uM("colIndex" to index, "colList" to column), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(column, fun(item, itemIndex, __index, _cached): Any {
                                        return _cE("view", _uM("class" to "weapp-tw-border", "key" to itemIndex), _uA(
                                            renderSlot(_ctx.`$slots`, "default", _uM("item" to item, "itemIndex" to itemIndex))
                                        ))
                                    }
                                    ), 128)
                                )
                            }
                            )
                        ), 12, _uA(
                            "id"
                        ))
                    }
                    ), 128)
                ))
            }
        }
        var name = "up-waterfall"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-waterfall" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-start")), "up-column" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "overflow" to "hidden")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "update:value" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "value" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "columns" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 2), "columnsMin" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 2), "minColumnWidth" to _uM("type" to "Number", "default" to 160), "idKey" to _uM("type" to "String", "default" to "id")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "value",
            "columns",
            "columnsMin",
            "minColumnWidth",
            "idKey"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
