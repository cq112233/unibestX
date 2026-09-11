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
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
open class GenUniModulesUviewUltraComponentsUpStickyUpSticky : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpStickyUpSticky) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpStickyUpSticky
            val _cache = __ins.renderCache
            val props = __props
            val instance = getCurrentInstance()
            val uZindex = computed<Number>(fun(): Number {
                val zVal = props.zIndex
                if (zVal != null && zVal.toString() != "") {
                    val parsed = parseInt(zVal.toString())
                    if (!isNaN(parsed)) {
                        return parsed
                    }
                }
                return (default__47["sticky"] as Number ?: 999)
            }
            )
            val webMpStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (!props.disabled) {
                    style["position"] = "sticky"
                    val top = parseFloat(getPx(props.offsetTop))
                    style["top"] = top + "px"
                    style["zIndex"] = uZindex.value
                } else {
                    style["position"] = "relative"
                }
                if (props.bgColor != "") {
                    style["backgroundColor"] = props.bgColor
                }
                return deepMerge(addStyle(props.customStyle), style) as UTSJSONObject
            }
            )
            val elId = ref<String>("up-sticky-" + guid())
            val isFixed = ref<Boolean>(false)
            val initialTop = ref<Number>(0)
            val height = ref<Number>(0)
            val left = ref<Number>(0)
            val width = ref<Number>(0)
            val isInit = ref<Boolean>(false)
            val stickyTop = computed<Number>(fun(): Number {
                return parseFloat(getPx(props.offsetTop)) + parseFloat(getPx(props.customNavHeight))
            }
            )
            val wrapperStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (isFixed.value && height.value > 0) {
                    style["height"] = height.value + "px"
                }
                return style
            }
            )
            val contentStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (!props.disabled && isFixed.value) {
                    style["position"] = "fixed"
                    style["top"] = stickyTop.value + "px"
                    style["left"] = left.value + "px"
                    if (width.value > 0) {
                        style["width"] = width.value + "px"
                    }
                    style["zIndex"] = uZindex.value
                } else {
                    style["position"] = "relative"
                }
                if (props.bgColor != "") {
                    style["backgroundColor"] = props.bgColor
                }
                return deepMerge(addStyle(props.customStyle), style) as UTSJSONObject
            }
            )
            fun gen_getRect_fn(): UTSPromise<NodeInfo> {
                return UTSPromise(fun(resolve, _reject){
                    uni_createSelectorQuery().`in`(instance?.proxy).select("#" + elId.value).boundingClientRect().exec(fun(ret){
                        resolve(ret[0] as NodeInfo)
                    }
                    )
                }
                )
            }
            val getRect = ::gen_getRect_fn
            fun gen_checkFixed_fn(st: Number) {
                if (!isInit.value) {
                    init()
                    return
                }
                val currentY = initialTop.value - st
                if (currentY <= stickyTop.value && initialTop.value > 0) {
                    if (!isFixed.value) {
                        getRect().then(fun(res: NodeInfo){
                            if (res.width != null && res.width!! > 0) {
                                width.value = res.width!!
                            }
                            if (res.left != null) {
                                left.value = res.left!!
                            }
                            if (res.height != null && res.height!! > 0) {
                                height.value = res.height!!
                            }
                        }
                        )
                    }
                    isFixed.value = true
                } else {
                    isFixed.value = false
                }
            }
            val checkFixed = ::gen_checkFixed_fn
            fun gen_init_fn() {
                getRect().then(fun(res: NodeInfo){
                    if (res.height != null && res.height!! > 0) {
                        height.value = res.height!!
                    }
                    if (res.left != null) {
                        left.value = res.left!!
                    }
                    if (res.width != null && res.width!! > 0) {
                        width.value = res.width!!
                    }
                    val currentTop = res.top ?: 0
                    val st = parseFloat(props.scrollTop.toString())
                    initialTop.value = currentTop + st
                    isInit.value = true
                    checkFixed(st)
                }
                )
            }
            val init = ::gen_init_fn
            watch(fun(): Any {
                return props.scrollTop
            }
            , fun(kVal: Any){
                if (props.disabled) {
                    return
                }
                val st = parseFloat(kVal.toString())
                checkFixed(st)
            }
            )
            onMounted(fun(){
                init()
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-sticky", "id" to elId.value, "style" to _nS(wrapperStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-sticky__content", "style" to _nS(contentStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4)
                ), 12, _uA(
                    "id"
                ))
            }
        }
        var name = "up-sticky"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-sticky" to _pS(_uM("width" to "100%", "boxSizing" to "border-box")), "up-sticky__content" to _pS(_uM("boxSizing" to "border-box")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "offsetTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "customNavHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "disabled" to _uM("type" to "Boolean", "default" to false), "bgColor" to _uM("type" to "String", "default" to "transparent"), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "index" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "offsetTop",
            "customNavHeight",
            "disabled",
            "bgColor",
            "zIndex",
            "index",
            "scrollTop",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
