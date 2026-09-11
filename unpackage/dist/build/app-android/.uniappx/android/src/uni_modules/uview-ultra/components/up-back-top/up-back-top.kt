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
import io.dcloud.uniapp.extapi.pageScrollTo as uni_pageScrollTo
open class GenUniModulesUviewUltraComponentsUpBackTopUpBackTop : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var mode: String by `$props`
    open var icon: String by `$props`
    open var text: String by `$props`
    open var duration: Any by `$props`
    open var scrollTop: Any by `$props`
    open var top: Any by `$props`
    open var bottom: Any by `$props`
    open var right: Any by `$props`
    open var zIndex: Any by `$props`
    open var iconStyle: Any by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpBackTopUpBackTop) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpBackTopUpBackTop
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val show = computed<Boolean>(fun(): Boolean {
                val sVal = (props.scrollTop ?: 0).toString()
                val tVal = (props.top ?: 100).toString()
                val sTop = parseFloat(sVal)
                val targetTop = parseFloat(tVal)
                if (isNaN(sTop)) {
                    return false
                }
                val threshold = if (isNaN(targetTop)) {
                    100
                } else {
                    targetTop
                }
                return sTop >= threshold
            }
            )
            val finalStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val bStr = (props.bottom ?: 80).toString()
                val rStr = (props.right ?: 20).toString()
                val bVal = if (bStr.includes("px")) {
                    bStr
                } else {
                    (bStr + "px")
                }
                val rVal = if (rStr.includes("px")) {
                    rStr
                } else {
                    (rStr + "px")
                }
                val zVal = parseInt((props.zIndex ?: 999).toString())
                val style: UTSJSONObject = _uO("position" to "fixed", "bottom" to bVal, "right" to rVal, "width" to "44px", "height" to "44px", "zIndex" to if (isNaN(zVal)) {
                    999
                } else {
                    zVal
                }
                , "display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#ffffff", "borderRadius" to if (props.mode === "circle") {
                    "100px"
                } else {
                    "8px"
                }
                , "boxShadow" to "0 4px 12px rgba(0, 0, 0, 0.15)", "borderWidth" to "1px", "borderStyle" to "solid", "borderColor" to "#e2e8f0")
                return deepMerge(style, addStyle(props.customStyle as UTSJSONObject)) as UTSJSONObject
            }
            )
            fun gen_backToTop_fn(e: Any) {
                uni_pageScrollTo(PageScrollToOptions(scrollTop = 0, duration = parseInt(props.duration.toString()), fail = fun(_: Any){}))
                emit("click", e)
            }
            val backToTop = ::gen_backToTop_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return if (isTrue(show.value)) {
                    _cE("view", _uM("key" to 0, "style" to _nS(finalStyle.value), "class" to "weapp-tw-border up-back-top", "onClick" to backToTop), _uA(
                        renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_icon, _uM("name" to _ctx.icon, "size" to "22", "color" to "#2563eb"), null, 8, _uA(
                                    "name"
                                )),
                                if (_ctx.text != "") {
                                    _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-back-top__text"), _tD(_ctx.text), 1)
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        })
                    ), 4)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-back-top"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-back-top__text" to _pS(_uM("fontSize" to 10, "color" to "#2563eb", "marginTop" to 2)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "mode" to _uM("type" to "String", "default" to "circle"), "icon" to _uM("type" to "String", "default" to "arrow-upward"), "text" to _uM("type" to "String", "default" to ""), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 100), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "top" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 100), "bottom" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "right" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 20), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 999), "iconStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "mode",
            "icon",
            "text",
            "duration",
            "scrollTop",
            "top",
            "bottom",
            "right",
            "zIndex",
            "iconStyle",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
