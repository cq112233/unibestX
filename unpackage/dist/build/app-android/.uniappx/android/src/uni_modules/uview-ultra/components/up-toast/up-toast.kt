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
open class GenUniModulesUviewUltraComponentsUpToastUpToast : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var show: (options: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["show"]) as (options: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "show", value)
        }
    open var hide: () -> Unit
        get() {
            return unref(this.`$exposed`["hide"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "hide", value)
        }
    open var primary: (message: String) -> Unit
        get() {
            return unref(this.`$exposed`["primary"]) as (message: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "primary", value)
        }
    open var success: (message: String) -> Unit
        get() {
            return unref(this.`$exposed`["success"]) as (message: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "success", value)
        }
    open var error: (message: String) -> Unit
        get() {
            return unref(this.`$exposed`["error"]) as (message: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "error", value)
        }
    open var warning: (message: String) -> Unit
        get() {
            return unref(this.`$exposed`["warning"]) as (message: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "warning", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpToastUpToast, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpToastUpToast
            val _cache = __ins.renderCache
            val isShow = ref<Boolean>(false)
            val timer = ref<Number?>(null)
            val config: UTSJSONObject = _uO("message" to "", "type" to "", "zIndex" to 10090, "duration" to 2000, "icon" to true, "position" to "center", "complete" to null as (() -> Unit)?, "overlay" to true, "loading" to false)
            val tmpConfig = ref<UTSJSONObject>(_uO("message" to "", "type" to "", "zIndex" to 10090, "duration" to 2000, "icon" to true, "position" to "center", "complete" to null as (() -> Unit)?, "overlay" to true, "loading" to false))
            val iconName = computed<String>(fun(): String {
                val icon = tmpConfig.value["icon"]
                val type = (tmpConfig.value["type"] ?: "") as String
                if (icon == "" || icon == "none") {
                    return ""
                }
                if (icon == true) {
                    if (_uA(
                        "error",
                        "warning",
                        "success",
                        "primary"
                    ).includes(type)) {
                        return type2icon(type)
                    } else {
                        return ""
                    }
                } else {
                    return if (icon != null) {
                        icon.toString()
                    } else {
                        ""
                    }
                }
            }
            )
            val overlayStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("justifyContent" to "center", "alignItems" to "center", "display" to "flex", "backgroundColor" to "rgba(0, 0, 0, 0)")
                if (!(tmpConfig.value["overlay"] as Boolean)) {
                    style["pointerEvents"] = "none"
                }
                return style
            }
            )
            val iconStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("marginRight" to "4px")
                return style
            }
            )
            val contentStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val windowHeight = getWindowInfo().windowHeight
                val style: UTSJSONObject = _uO()
                var value: Number = 0
                val position = tmpConfig.value["position"]?.toString() ?: ""
                if (position === "top") {
                    value = -windowHeight * 0.25
                } else if (position === "bottom") {
                    value = windowHeight * 0.25
                }
                style["transform"] = "translateY(" + value + "px)"
                return style
            }
            )
            fun gen_clearTimer_fn() {
                isShow.value = false
                if (timer.value != null) {
                    clearTimeout(timer.value!!)
                    timer.value = null
                }
            }
            val clearTimer = ::gen_clearTimer_fn
            fun gen_show_fn(options: UTSJSONObject) {
                tmpConfig.value = deepMerge(config, options)
                clearTimer()
                isShow.value = true
                val duration = tmpConfig.value["duration"] as Number
                if (duration != -1) {
                    timer.value = setTimeout(fun(){
                        clearTimer()
                        val complete = tmpConfig.value["complete"]
                        if (UTSAndroid.`typeof`(complete) === "function") {
                            (complete as () -> Unit)()
                        }
                    }
                    , duration)
                }
            }
            val show = ::gen_show_fn
            fun gen_hide_fn() {
                clearTimer()
            }
            val hide = ::gen_hide_fn
            fun gen_primary_fn(message: String) {
                show(_uO("type" to "primary", "message" to message))
            }
            val primary = ::gen_primary_fn
            fun gen_success_fn(message: String) {
                show(_uO("type" to "success", "message" to message))
            }
            val success = ::gen_success_fn
            fun gen_error_fn(message: String) {
                show(_uO("type" to "error", "message" to message))
            }
            val error = ::gen_error_fn
            fun gen_warning_fn(message: String) {
                show(_uO("type" to "warning", "message" to message))
            }
            val warning = ::gen_warning_fn
            onBeforeUnmount(fun(){
                clearTimer()
            }
            )
            __expose(_uM("show" to show, "hide" to hide, "primary" to primary, "success" to success, "error" to error, "warning" to warning))
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_gap = resolveEasyComponent("up-gap", GenUniModulesUviewUltraComponentsUpGapUpGapClass)
                val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-toast"), _uA(
                    _cV(_component_up_overlay, _uM("show" to isShow.value, "zIndex" to tmpConfig.value["zIndex"], "custom-style" to overlayStyle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-toast__content",
                                _uA(
                                    "up-type-" + tmpConfig.value["type"],
                                    if ((tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"] as Boolean)) {
                                        "up-toast__content--loading"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(_uA(
                                contentStyle.value
                            ))), _uA(
                                if (tmpConfig.value["type"] === "loading") {
                                    _cV(_component_up_loading_icon, _uM("key" to 0, "mode" to "circle", "color" to "rgb(255, 255, 255)", "inactiveColor" to "rgb(120, 120, 120)", "size" to "25"))
                                } else {
                                    if (isTrue(tmpConfig.value["type"] !== "defalut" && iconName.value != "")) {
                                        _cV(_component_up_icon, _uM("key" to 1, "name" to iconName.value, "size" to "17", "color" to tmpConfig.value["type"], "customStyle" to iconStyle.value), null, 8, _uA(
                                            "name",
                                            "color",
                                            "customStyle"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                }
                                ,
                                if (isTrue(tmpConfig.value["type"] === "loading" || tmpConfig.value["loading"] as Boolean)) {
                                    _cV(_component_up_gap, _uM("key" to 2, "height" to "12", "bgColor" to "transparent"))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE("text", _uM("class" to _nC(_uA(
                                    "weapp-tw-border up-toast__content__text",
                                    _uA(
                                        "up-toast__content__text--" + tmpConfig.value["type"]
                                    )
                                )), "style" to _nS(_uM("max-width" to "400rpx"))), _tD(tmpConfig.value["message"]), 7)
                            ), 6)
                        )
                    }
                    ), "_" to 1), 8, _uA(
                        "show",
                        "zIndex",
                        "custom-style"
                    ))
                ))
            }
        }
        var name = "up-toast"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-toast__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "paddingTop" to 12, "paddingRight" to 20, "paddingBottom" to 12, "paddingLeft" to 20, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "backgroundColor" to "#585858", "alignItems" to "center", "maxWidth" to "600rpx", "position" to "relative")), "up-toast__content--loading" to _pS(_uM("flexDirection" to "column", "paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "up-toast__content__text" to _pS(_uM("color" to "#ffffff", "fontSize" to 15, "lineHeight" to "15px")), "up-toast__content__text--default" to _pS(_uM("color" to "#ffffff")), "up-toast__content__text--error" to _pS(_uM("color" to "#f56c6c")), "up-toast__content__text--primary" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-toast__content__text--success" to _pS(_uM("color" to "#5ac725")), "up-toast__content__text--warning" to _pS(_uM("color" to "#f9ae3d")), "up-type-primary" to _pS(_uM("backgroundColor" to "#ecf5ff", "borderTopColor" to "#d7eafe", "borderRightColor" to "#d7eafe", "borderBottomColor" to "#d7eafe", "borderLeftColor" to "#d7eafe", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "up-type-success" to _pS(_uM("backgroundColor" to "#dbf1e1", "borderTopColor" to "#BEF5C8", "borderRightColor" to "#BEF5C8", "borderBottomColor" to "#BEF5C8", "borderLeftColor" to "#BEF5C8", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "up-type-error" to _pS(_uM("backgroundColor" to "#fef0f0", "borderTopColor" to "#fde2e2", "borderRightColor" to "#fde2e2", "borderBottomColor" to "#fde2e2", "borderLeftColor" to "#fde2e2", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "up-type-warning" to _pS(_uM("backgroundColor" to "#fdf6ec", "borderTopColor" to "#faecd8", "borderRightColor" to "#faecd8", "borderBottomColor" to "#faecd8", "borderLeftColor" to "#faecd8", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "up-type-default" to _pS(_uM("backgroundColor" to "#585858")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
