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
open class GenUniModulesUviewUltraComponentsUpStickyUpSticky : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.scrollTop
        }
        , fun(kVal: Any) {
            if (isTruthy(this.disabled)) {
                return
            }
            val st = parseFloat(kVal.toString())
            this.checkFixed(st)
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-sticky", "id" to _ctx.elId, "style" to _nS(_ctx.wrapperStyle)), _uA(
            _cE("view", _uM("class" to "up-sticky__content", "style" to _nS(_ctx.contentStyle)), _uA(
                renderSlot(_ctx.`$slots`, "default")
            ), 4)
        ), 12, _uA(
            "id"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var offsetTop: Any by `$props`
    open var customNavHeight: Any by `$props`
    open var disabled: Boolean by `$props`
    open var bgColor: String by `$props`
    open var zIndex: Any by `$props`
    open var index: Any by `$props`
    open var scrollTop: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var elId: Any? by `$data`
    open var isFixed: Boolean by `$data`
    open var initialTop: Number by `$data`
    open var height: Number by `$data`
    open var left: Number by `$data`
    open var width: Number by `$data`
    open var isInit: Boolean by `$data`
    open var paddingArray: UTSArray<Number> by `$data`
    open var webMpStyle: Any by `$data`
    open var uZindex: Number by `$data`
    open var stickyTop: Number by `$data`
    open var wrapperStyle: Any by `$data`
    open var contentStyle: Any by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "elId" to ("up-sticky-" + guid()), "isFixed" to false, "initialTop" to 0 as Number, "height" to 0 as Number, "left" to 0 as Number, "width" to 0 as Number, "isInit" to false, "paddingArray" to computed<UTSArray<Number>>(fun(): UTSArray<Number> {
            val top = parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight))
            return _uA<Number>(top, 0, 0, 0)
        }
        ), "webMpStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO()
            if (!isTruthy(this.disabled)) {
                style["position"] = "sticky"
                val top = parseFloat(getPx(this.offsetTop))
                style["top"] = top + "px"
                style["zIndex"] = this.uZindex
            } else {
                style["position"] = "relative"
            }
            if (this.bgColor != "") {
                style["backgroundColor"] = this.bgColor
            }
            return deepMerge(addStyle(this.customStyle), style)
        }
        ), "uZindex" to computed<Number>(fun(): Number {
            val zVal = this.`$props`["zIndex"]
            if (zVal != null && zVal.toString() != "") {
                val parsed = parseInt(zVal.toString())
                if (!isNaN(parsed)) {
                    return parsed
                }
            }
            return (default__79["sticky"] as Number ?: 999)
        }
        ), "stickyTop" to computed<Number>(fun(): Number {
            return parseFloat(getPx(this.offsetTop)) + parseFloat(getPx(this.customNavHeight))
        }
        ), "wrapperStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO()
            if (this.isFixed && this.height > 0) {
                style["height"] = this.height + "px"
            }
            return style
        }
        ), "contentStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO()
            if (!isTruthy(this.disabled) && this.isFixed) {
                style["position"] = "fixed"
                style["top"] = this.stickyTop + "px"
                style["left"] = this.left + "px"
                if (this.width > 0) {
                    style["width"] = this.width + "px"
                }
                style["zIndex"] = this.uZindex
            } else {
                style["position"] = "relative"
            }
            if (this.bgColor != "") {
                style["backgroundColor"] = this.bgColor
            }
            return deepMerge(addStyle(this.customStyle), style)
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
    @get:JvmName("getInit0")
    @set:JvmName("setInit0")
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.upGetRect("#" + this.elId, false).then(fun(res: NodeInfo){
            if (res.height != null && res.height!! > 0) {
                this.height = res.height!!
            }
            if (res.left != null) {
                this.left = res.left!!
            }
            if (res.width != null && res.width!! > 0) {
                this.width = res.width!!
            }
            val currentTop = res.top ?: 0
            val st = parseFloat(this.scrollTop.toString())
            this.initialTop = currentTop + st
            this.isInit = true
            this.checkFixed(st)
        }
        )
    }
    open var checkFixed = ::gen_checkFixed_fn
    open fun gen_checkFixed_fn(st: Number) {
        if (!this.isInit) {
            this.init()
            return
        }
        val currentY = this.initialTop - st
        if (currentY <= this.stickyTop && this.initialTop > 0) {
            if (!this.isFixed) {
                this.upGetRect("#" + this.elId, false).then(fun(res: NodeInfo){
                    if (res.width != null && res.width!! > 0) {
                        this.width = res.width!!
                    }
                    if (res.left != null) {
                        this.left = res.left!!
                    }
                    if (res.height != null && res.height!! > 0) {
                        this.height = res.height!!
                    }
                }
                )
            }
            this.isFixed = true
        } else {
            this.isFixed = false
        }
    }
    companion object {
        var name = "up-sticky"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-sticky" to _pS(_uM("width" to "100%", "boxSizing" to "border-box")), "up-sticky__content" to _pS(_uM("boxSizing" to "border-box")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "offsetTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to stickyProp["offsetTop"]), "customNavHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to stickyProp["customNavHeight"]), "disabled" to _uM("type" to "Boolean", "default" to stickyProp["disabled"]), "bgColor" to _uM("type" to "String", "default" to stickyProp["bgColor"]), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to stickyProp["zIndex"]), "index" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to stickyProp["index"]), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "offsetTop",
            "customNavHeight",
            "disabled",
            "bgColor",
            "zIndex",
            "index",
            "scrollTop"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
