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
open class GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButton : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var backgroundColor: String by `$props`
    open var color: String by `$props`
    open var width: String by `$props`
    open var height: String by `$props`
    open var borderColor: String by `$props`
    open var right: Any by `$props`
    open var top: Any by `$props`
    open var bottom: Any by `$props`
    open var isMenu: Boolean by `$props`
    open var list: UTSArray<UTSJSONObject> by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButton) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButton
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val showList = ref<Boolean>(false)
            fun gen_stringValue_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val stringValue = ::gen_stringValue_fn
            fun gen_copyObject_fn(item: UTSJSONObject): UTSJSONObject {
                val copied: UTSJSONObject = _uO()
                val keys = UTSJSONObject.keys(item)
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        copied[keys[i]] = item[keys[i]]
                        i++
                    }
                }
                return copied
            }
            val copyObject = ::gen_copyObject_fn
            fun gen_getItemBackgroundColor_fn(item: UTSJSONObject): String {
                val value = stringValue(item["backgroundColor"])
                return if (value == "") {
                    props.backgroundColor
                } else {
                    value
                }
            }
            val getItemBackgroundColor = ::gen_getItemBackgroundColor_fn
            fun gen_getItemColor_fn(item: UTSJSONObject): String {
                val value = stringValue(item["color"])
                return if (value == "") {
                    props.color
                } else {
                    value
                }
            }
            val getItemColor = ::gen_getItemColor_fn
            fun gen_getItemBorderColor_fn(item: UTSJSONObject): String {
                val value = stringValue(item["borderColor"])
                return if (value == "") {
                    props.borderColor
                } else {
                    value
                }
            }
            val getItemBorderColor = ::gen_getItemBorderColor_fn
            fun gen_getItemName_fn(item: UTSJSONObject): String {
                return stringValue(item["name"])
            }
            val getItemName = ::gen_getItemName_fn
            fun gen_getItemStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["backgroundColor"] = getItemBackgroundColor(item)
                style["display"] = "flex"
                style["flexDirection"] = "row"
                style["justifyContent"] = "center"
                style["alignItems"] = "center"
                style["width"] = props.width
                style["height"] = props.height
                style["borderRadius"] = "50%"
                style["borderColor"] = getItemBorderColor(item)
                return style
            }
            val getItemStyle = ::gen_getItemStyle_fn
            fun gen_clickHandler_fn(e: UniPointerEvent): Unit {
                if (props.isMenu) {
                    showList.value = !showList.value
                }
                emit("click", e)
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_itemClick_fn(item: UTSJSONObject, index: Number): Unit {
                val payload = copyObject(item)
                payload["index"] = index
                emit("item-click", payload)
            }
            val itemClick = ::gen_itemClick_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-float-button", "style" to _nS(_uM("position" to "fixed", "top" to _ctx.top, "bottom" to _ctx.bottom, "right" to _ctx.right))), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-float-button__main", "onClick" to clickHandler, "style" to _nS(_uM("backgroundColor" to _ctx.backgroundColor, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "width" to _ctx.width, "height" to _ctx.height, "borderRadius" to "50%", "borderColor" to _ctx.borderColor, "overflow" to "visible"))), _uA(
                        renderSlot(_ctx.`$slots`, "default", _uM("showList" to showList.value), fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_icon, _uM("class" to _nC(_uA(
                                    "wtu-1bvspap-0",
                                    _uM("show-list" to showList.value)
                                )), "name" to "plus", "color" to _ctx.color), null, 8, _uA(
                                    "class",
                                    "color"
                                ))
                            )
                        }
                        )
                    ), 4),
                    if (isTrue(showList.value)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-float-button__list", "style" to _nS(_uM("bottom" to _ctx.height))), _uA(
                            renderSlot(_ctx.`$slots`, "list", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                                        return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-float-button__item", "style" to _nS(getItemStyle(item)), "onClick" to fun(){
                                            itemClick(item, index)
                                        }), _uA(
                                            _cV(_component_up_icon, _uM("name" to getItemName(item), "color" to getItemColor(item)), null, 8, _uA(
                                                "name",
                                                "color"
                                            ))
                                        ), 12, _uA(
                                            "onClick"
                                        ))
                                    }), 128)
                                )
                            })
                        ), 4)
                    } else {
                        _cC("v-if", true)
                    }
                ), 4)
            }
        }
        var name = "up-float-button"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-float-button" to _pS(_uM("zIndex" to 999)), "up-float-button__list" to _pS(_uM("position" to "absolute", "bottom" to 0, "left" to 0, "display" to "flex", "flexDirection" to "column", "zIndex" to 999, "alignItems" to "center")), "show-list" to _pS(_uM("transform" to "rotate(45deg)")), "wtu-1bvspap-0" to _pS(_uM("cursor" to "pointer")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "item-click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "backgroundColor" to _uM("type" to "String", "default" to "#2979ff"), "color" to _uM("type" to "String", "default" to "#fff"), "width" to _uM("type" to "String", "default" to "50px"), "height" to _uM("type" to "String", "default" to "50px"), "borderColor" to _uM("type" to "String", "default" to ""), "right" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "30px"), "top" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "bottom" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "isMenu" to _uM("type" to "Boolean", "default" to false), "list" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "backgroundColor",
            "color",
            "width",
            "height",
            "borderColor",
            "right",
            "top",
            "bottom",
            "isMenu",
            "list"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
