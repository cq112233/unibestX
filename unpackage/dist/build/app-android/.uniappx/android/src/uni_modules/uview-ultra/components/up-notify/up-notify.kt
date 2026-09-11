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
open class GenUniModulesUviewUltraComponentsUpNotifyUpNotify : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var customStyle: Any by `$props`
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
    open var close: () -> Unit
        get() {
            return unref(this.`$exposed`["close"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "close", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNotifyUpNotify, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNotifyUpNotify
            val _cache = __ins.renderCache
            val props = __props
            val open = ref<Boolean>(false)
            val timer = ref<Number?>(null)
            val config: UTSJSONObject = _uO("top" to 0, "type" to "primary", "color" to "#ffffff", "bgColor" to "", "message" to "", "duration" to 3000, "fontSize" to 15, "safeAreaInsetTop" to false)
            val tmpConfig = ref<UTSJSONObject>(_uO("top" to 0, "type" to "primary", "color" to "#ffffff", "bgColor" to "", "message" to "", "duration" to 3000, "fontSize" to 15, "safeAreaInsetTop" to false))
            val isIconVisible = computed(fun(): Boolean {
                val typeStr = tmpConfig.value["type"]?.toString() ?: ""
                return typeStr == "success" || typeStr == "warning" || typeStr == "error"
            }
            )
            val iconSize = computed(fun(): Number {
                val fs = tmpConfig.value["fontSize"] ?: "0"
                return 1.3 * parseFloat(getPx(fs).toString())
            }
            )
            val iconCustomStyle = computed(fun(): UTSJSONObject {
                return _uO("marginRight" to "4px")
            }
            )
            val containerStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var top: Any = 0
                val topValue = tmpConfig.value["top"]
                val isTopZero = topValue != null && parseFloat(topValue.toString()) == 0
                if (isTopZero) {}
                return _uO("top" to addUnit(if (isTopZero) {
                    top
                } else {
                    topValue
                }
                ), "position" to "fixed", "left" to 0, "right" to 0, "zIndex" to 10076)
            }
            )
            val backgroundColor = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val bg = tmpConfig.value["bgColor"]?.toString() ?: ""
                if (bg != "") {
                    style["backgroundColor"] = bg
                }
                return style
            }
            )
            val notifyStyle = computed(fun(): UTSJSONObject {
                val custom = addStyle(props.customStyle) as UTSJSONObject
                val bg = backgroundColor.value
                return deepMerge(bg, custom) as UTSJSONObject
            }
            )
            val notifyTextStyle = computed(fun(): UTSJSONObject {
                return _uO("fontSize" to addUnit(tmpConfig.value["fontSize"] ?: "0"), "color" to (tmpConfig.value["color"] ?: ""))
            }
            )
            fun gen_clearTimer_fn() {
                open.value = false
                if (timer.value != null) {
                    clearTimeout(timer.value!!)
                    timer.value = null
                }
            }
            val clearTimer = ::gen_clearTimer_fn
            fun gen_show_fn(options: UTSJSONObject) {
                tmpConfig.value = deepMerge(config, options)
                clearTimer()
                open.value = true
                val dur = parseInt((tmpConfig.value["duration"] ?: 3000).toString())
                if (dur > 0) {
                    timer.value = setTimeout(fun(){
                        open.value = false
                        clearTimer()
                        val complete = tmpConfig.value["complete"]
                        if (UTSAndroid.`typeof`(complete) === "function") {
                            (complete as () -> Unit)()
                        }
                    }
                    , dur)
                }
            }
            val show = ::gen_show_fn
            fun gen_close_fn() {
                clearTimer()
            }
            val close = ::gen_close_fn
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
            __expose(_uM("show" to show, "close" to close, "primary" to primary, "success" to success, "error" to error, "warning" to warning))
            return fun(): Any? {
                val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cV(_component_up_transition, _uM("mode" to "slide-down", "customStyle" to containerStyle.value, "show" to open.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to _nC(_uA(
                            "weapp-tw-border up-notify",
                            _uA(
                                "up-notify--" + tmpConfig.value["type"]
                            )
                        )), "style" to _nS(notifyStyle.value)), _uA(
                            if (isTrue(tmpConfig.value["safeAreaInsetTop"])) {
                                _cV(_component_up_status_bar, _uM("key" to 0))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("view", _uM("class" to "weapp-tw-border up-notify__warpper"), _uA(
                                renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (isTrue(isIconVisible.value)) {
                                            _cV(_component_up_icon, _uM("key" to 0, "name" to tmpConfig.value["icon"], "color" to tmpConfig.value["color"], "size" to iconSize.value, "customStyle" to iconCustomStyle.value), null, 8, _uA(
                                                "name",
                                                "color",
                                                "size",
                                                "customStyle"
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                ),
                                _cE("text", _uM("class" to "weapp-tw-border up-notify__warpper__text", "style" to _nS(notifyTextStyle.value)), _tD(tmpConfig.value["message"]), 5)
                            ))
                        ), 6)
                    )
                }
                ), "_" to 3), 8, _uA(
                    "customStyle",
                    "show"
                ))
            }
        }
        var name = "up-notify"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-notify" to _pS(_uM("paddingTop" to 8, "paddingRight" to 10, "paddingBottom" to 8, "paddingLeft" to 10)), "up-notify__warpper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "textAlign" to "center", "justifyContent" to "center")), "up-notify__warpper__text" to _pS(_uM("fontSize" to 15, "textAlign" to "center")), "up-notify--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-notify--success" to _pS(_uM("backgroundColor" to "#5ac725")), "up-notify--error" to _pS(_uM("backgroundColor" to "#f56c6c")), "up-notify--warning" to _pS(_uM("backgroundColor" to "#f9ae3d")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
