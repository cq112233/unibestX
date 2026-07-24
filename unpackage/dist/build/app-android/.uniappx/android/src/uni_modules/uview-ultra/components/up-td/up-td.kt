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
open class GenUniModulesUviewUltraComponentsUpTdUpTd : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var width: String by `$props`
    open var textAlign: String by `$props`
    open var fontSize: String by `$props`
    open var borderColor: String by `$props`
    open var color: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTdUpTd) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTdUpTd
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI(_uO("padding" to 0, "align" to "", "borderColor" to "", "thStyle" to _uO()))
            val parent = _useUltraUI.parent
            val getParent = _useUltraUI.getParent
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            val tdStyle = ref(_uO())
            val tdTextStyle = ref(_uO())
            onMounted(fun(){
                getParent("up-table", instance)
                if (parent.value != null) {
                    var style: UTSJSONObject = _uO()
                    var styleText: UTSJSONObject = _uO()
                    var parentProps = parent.value!!.`$callMethod`("getProps") as UTSJSONObject
                    if (props.width != "auto") {
                        style["flex"] = "0 0 " + props.width
                    }
                    styleText["textAlign"] = parentProps.getString("align")
                    styleText["fontSize"] = addUnit(parentProps.getString("fontSize"))
                    style["padding"] = parentProps.getString("padding")
                    style["borderBottom"] = "solid 1px " + parentProps.getString("borderColor")
                    style["borderRight"] = "solid 1px " + parentProps.getString("borderColor")
                    styleText["color"] = parentProps.getString("color")
                    if (props.textAlign != "") {
                        styleText["textAlign"] = props.textAlign
                    }
                    if (props.fontSize != "") {
                        styleText["fontSize"] = props.fontSize
                    }
                    if (props.borderColor != "") {
                        style["borderColor"] = props.borderColor
                    }
                    if (props.color != "") {
                        styleText["color"] = props.color
                    }
                    tdStyle.value = style
                    tdTextStyle.value = styleText
                }
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "up-td", "style" to _nS(_uA(
                    tdStyle.value
                ))), _uA(
                    _cE("text", _uM("class" to "up-td__text", "style" to _nS(_uA(
                        tdTextStyle.value
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4),
                    renderSlot(_ctx.`$slots`, "content")
                ), 4)
            }
        }
        var name = "up-td"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-td" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "center", "alignSelf" to "stretch", "boxSizing" to "border-box", "height" to "100%")), "up-td__text" to _uM(".up-td " to _uM("fontSize" to 14, "color" to "#606266")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "width" to _uM("type" to _uA(
            "String"
        ), "default" to default__39.getString("td.width")), "textAlign" to _uM("type" to "String", "default" to default__39.getString("td.textAlign")), "fontSize" to _uM("type" to "String", "default" to default__39.getString("td.fontSize")), "borderColor" to _uM("type" to "String", "default" to default__39.getString("td.borderColor")), "color" to _uM("type" to "String", "default" to default__39.getString("td.color"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "width",
            "textAlign",
            "fontSize",
            "borderColor",
            "color"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
