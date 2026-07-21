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
open class GenUniModulesUviewUltraComponentsUpTableUpTable : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var borderColor: String by `$props`
    open var align: String by `$props`
    open var padding: String by `$props`
    open var fontSize: Any by `$props`
    open var color: String by `$props`
    open var thStyle: Any by `$props`
    open var bgColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTableUpTable, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTableUpTable
            val _cache = __ins.renderCache
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            val show = ref<Boolean>(true)
            val tableStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-table/up-table.uvue", 62, 7))
                style["borderLeft"] = "solid 1px " + props.borderColor
                style["borderTop"] = "solid 1px " + props.borderColor
                style["backgroundColor"] = props.bgColor
                return style
            }
            )
            fun gen_change_fn() {
                show.value = false
                setTimeout(fun(){
                    show.value = true
                }
                , 0)
            }
            val change = ::gen_change_fn
            watch(fun(): String {
                return props.align
            }
            , fun(){
                change()
            }
            )
            watch(fun(): String {
                return props.borderColor
            }
            , fun(){
                change()
            }
            )
            val getProps = fun(): UTSJSONObject {
                return _uO("borderColor" to props.borderColor, "align" to props.align, "padding" to props.padding, "fontSize" to props.fontSize, "color" to props.color, "thStyle" to props.thStyle, "bgColor" to props.bgColor)
            }
            val getRefs = fun(): UTSJSONObject {
                return _uO()
            }
            __expose(_uM("getProps" to getProps, "getRefs" to getRefs))
            return fun(): Any? {
                return _cE("view", _uM("class" to "up-table", "style" to _nS(_uA(
                    tableStyle.value
                ))), _uA(
                    if (isTrue(show.value)) {
                        renderSlot(_ctx.`$slots`, "default", _uM("key" to 0))
                    } else {
                        _cC("v-if", true)
                    }
                ), 4)
            }
        }
        var name = "up-table"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA())
        }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "borderColor" to _uM("type" to "String", "default" to default__15.getString("table.borderColor")), "align" to _uM("type" to "String", "default" to default__15.getString("table.align")), "padding" to _uM("type" to "String", "default" to default__15.getString("table.padding")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__15.getNumber("table.fontSize")), "color" to _uM("type" to "String", "default" to default__15.getString("table.color")), "thStyle" to _uM("default" to fun(): UTSJSONObject {
            return default__15.getAny("table.thStyle") as UTSJSONObject
        }
        ), "bgColor" to _uM("type" to "String", "default" to default__15.getString("table.bgColor"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "borderColor",
            "align",
            "padding",
            "fontSize",
            "color",
            "thStyle",
            "bgColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
