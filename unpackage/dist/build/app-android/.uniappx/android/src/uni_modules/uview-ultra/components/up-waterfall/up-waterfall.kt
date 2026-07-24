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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
open class GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfall : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.windowWidth = uni_getSystemInfoSync().windowWidth
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-waterfall"), _uA(
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.columnList, fun(column, index, __index, _cached): Any {
                return _cE("view", _uM("key" to index, "id" to ("up-column-" + index), "class" to "up-column", "style" to _nS(_ctx.getColumnStyle(index))), _uA(
                    renderSlot(_ctx.`$slots`, "column", _uM("colIndex" to index, "colList" to column), fun(): UTSArray<Any> {
                        return _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(column, fun(item, itemIndex, __index, _cached): Any {
                                return _cE("view", _uM("key" to itemIndex), _uA(
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
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: UTSArray<UTSJSONObject> by `$props`
    open var addTime: Any by `$props`
    open var idKey: String by `$props`
    open var columns: Any by `$props`
    open var columnsMin: Any by `$props`
    open var minColumnWidth: Number by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var windowWidth: Number by `$data`
    open var columnList: UTSArray<UTSArray<UTSJSONObject>> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "windowWidth" to 375 as Number, "columnList" to computed<UTSArray<UTSArray<UTSJSONObject>>>(fun(): UTSArray<UTSArray<UTSJSONObject>> {
            val cols = this.getColumnsCount()
            val result: UTSArray<UTSArray<UTSJSONObject>> = _uA()
            run {
                var i: Number = 0
                while(i < cols){
                    result.push(_uA<UTSJSONObject>())
                    i++
                }
            }
            run {
                var i: Number = 0
                while(i < this.modelValue.length){
                    val colIndex: Number = i % cols
                    result[colIndex].push(this.modelValue[i])
                    i++
                }
            }
            return result
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
    open var getColumnsCount = ::gen_getColumnsCount_fn
    open fun gen_getColumnsCount_fn(): Number {
        if (this.columns === "auto") {
            val columnGap: Number = 7
            var columnCount: Number = Math.max(1, Math.floor(this.windowWidth / (this.minColumnWidth + columnGap)))
            val minCol: Number = parseInt(this.columnsMin.toString())
            if (columnCount < minCol) {
                columnCount = minCol
            }
            return columnCount
        }
        return parseInt(this.columns.toString())
    }
    open var getColumnStyle = ::gen_getColumnStyle_fn
    open fun gen_getColumnStyle_fn(index: Number): UTSJSONObject {
        val style: UTSJSONObject = _uO()
        if (index > 0) {
            style["marginLeft"] = "10rpx"
        }
        return style
    }
    open var clear = ::gen_clear_fn
    open fun gen_clear_fn() {
        this.`$emit`("update:modelValue", _uA<UTSJSONObject>())
    }
    open var remove = ::gen_remove_fn
    open fun gen_remove_fn(id: Any?) {
        if (id == null) {
            return
        }
        val idx = this.modelValue.findIndex(fun(kVal: UTSJSONObject): Boolean {
            return kVal[this.idKey] != null && kVal[this.idKey].toString() == id.toString()
        }
        )
        if (idx != -1) {
            val newData: UTSArray<UTSJSONObject> = JSON.parse(JSON.stringify(this.modelValue)) as UTSArray<UTSJSONObject>
            newData.splice(idx, 1)
            this.`$emit`("update:modelValue", newData)
        }
    }
    open var modify = ::gen_modify_fn
    open fun gen_modify_fn(id: Any, key: String, value: Any) {
        val idx = this.modelValue.findIndex(fun(kVal: UTSJSONObject): Boolean {
            return kVal[this.idKey] != null && kVal[this.idKey].toString() == id.toString()
        }
        )
        if (idx != -1) {
            val newData: UTSArray<UTSJSONObject> = JSON.parse(JSON.stringify(this.modelValue)) as UTSArray<UTSJSONObject>
            newData[idx][key] = value
            this.`$emit`("update:modelValue", newData)
        }
    }
    companion object {
        var name = "up-waterfall"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-waterfall" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-start")), "up-column" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "overflow" to "hidden")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "update:value" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "Array", "required" to true, "default" to waterfallProp["value"]), "addTime" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to waterfallProp["addTime"]), "idKey" to _uM("type" to "String", "default" to waterfallProp["idKey"]), "columns" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to waterfallProp["columns"]), "columnsMin" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to waterfallProp["columnsMin"]), "minColumnWidth" to _uM("type" to "Number", "default" to waterfallProp["minColumnWidth"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "addTime",
            "idKey",
            "columns",
            "columnsMin",
            "minColumnWidth"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
