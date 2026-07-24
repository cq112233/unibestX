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
open class GenUniModulesUviewUltraComponentsUpNotifyUpNotify : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onBeforeUnmount(fun() {
            this.clearTimer()
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
        return _cV(_component_up_transition, _uM("mode" to "slide-down", "customStyle" to _ctx.containerStyle, "show" to _ctx.open), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
            return _uA(
                _cE("view", _uM("class" to _nC(_uA(
                    "up-notify",
                    _uA(
                        "up-notify--" + _ctx.tmpConfig["type"]
                    )
                )), "style" to _nS(_uA(
                    _ctx.backgroundColor,
                    _ctx.addStyle(_ctx.customStyle)
                ))), _uA(
                    if (isTrue(_ctx.tmpConfig["safeAreaInsetTop"])) {
                        _cV(_component_up_status_bar, _uM("key" to 0))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to "up-notify__warpper"), _uA(
                        renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue(_uA(
                                    "success",
                                    "warning",
                                    "error"
                                ).includes(_ctx.tmpConfig["type"].toString()))) {
                                    _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.tmpConfig["icon"], "color" to _ctx.tmpConfig["color"], "size" to (1.3 * parseFloat(_ctx.getPx(_ctx.tmpConfig["fontSize"] ?: "0").toString())), "customStyle" to _uO("marginRight" to "4px")), null, 8, _uA(
                                        "name",
                                        "color",
                                        "size"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        }
                        ),
                        _cE("text", _uM("class" to "up-notify__warpper__text", "style" to _nS(_uM("fontSize" to _ctx.addUnit(_ctx.tmpConfig["fontSize"] ?: "0"), "color" to (_ctx.tmpConfig["color"] ?: "")))), _tD(_ctx.tmpConfig["message"]), 5)
                    ))
                ), 6)
            )
        }
        ), "_" to 3), 8, _uA(
            "customStyle",
            "show"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var top: Any by `$props`
    open var type: String by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var message: String by `$props`
    open var duration: Any by `$props`
    open var fontSize: Any by `$props`
    open var safeAreaInsetTop: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var open: Boolean by `$data`
    open var timer: Number? by `$data`
    open var config: UTSJSONObject by `$data`
    open var tmpConfig: UTSJSONObject by `$data`
    open var containerStyle: UTSJSONObject by `$data`
    open var backgroundColor: UTSJSONObject by `$data`
    open var icon: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "open" to false, "timer" to null as Number?, "config" to _uO("top" to notifyPropCrt["top"], "type" to notifyPropCrt["type"], "color" to notifyPropCrt["color"], "bgColor" to notifyPropCrt["bgColor"], "message" to notifyPropCrt["message"], "duration" to notifyPropCrt["duration"], "fontSize" to notifyPropCrt["fontSize"], "safeAreaInsetTop" to notifyPropCrt["safeAreaInsetTop"]), "tmpConfig" to _uO("top" to notifyPropCrt["top"], "type" to notifyPropCrt["type"], "color" to notifyPropCrt["color"], "bgColor" to notifyPropCrt["bgColor"], "message" to "", "duration" to notifyPropCrt["duration"], "fontSize" to notifyPropCrt["fontSize"], "safeAreaInsetTop" to notifyPropCrt["safeAreaInsetTop"]), "containerStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var top: Number = 0
            val topValue = this.tmpConfig["top"]
            val isTopZero = topValue != null && parseFloat(topValue.toString()) == 0
            if (isTopZero) {}
            val style: UTSJSONObject = _uO("top" to uni.UNI5198058.addUnit(if (isTopZero) {
                top
            } else {
                topValue
            }
            ), "position" to "fixed", "left" to 0, "right" to 0, "zIndex" to 10076)
            return style
        }
        ), "backgroundColor" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO()
            if (this.tmpConfig["bgColor"] != "") {
                style["backgroundColor"] = this.tmpConfig["bgColor"]
            }
            return style
        }
        ), "icon" to computed<String>(fun(): String {
            var icon = ""
            if (this.tmpConfig["type"] === "success") {
                icon = "checkmark-circle"
            } else if (this.tmpConfig["type"] === "error") {
                icon = "close-circle"
            } else if (this.tmpConfig["type"] === "warning") {
                icon = "error-circle"
            }
            return icon
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return uni.UNI5198058.getPx(kVal, unit)
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
    open var getPx = ::gen_getPx_fn
    open fun gen_getPx_fn(e: Any): String {
        return uni.UNI5198058.getPx(e)
    }
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var primary = ::gen_primary_fn
    open fun gen_primary_fn(message: String) {
        this.show(_uO("type" to "primary", "message" to message))
    }
    open var success = ::gen_success_fn
    open fun gen_success_fn(message: String) {
        this.show(_uO("type" to "success", "message" to message))
    }
    open var error = ::gen_error_fn
    open fun gen_error_fn(message: String) {
        this.show(_uO("type" to "error", "message" to message))
    }
    open var warning = ::gen_warning_fn
    open fun gen_warning_fn(message: String) {
        this.show(_uO("type" to "warning", "message" to message))
    }
    open var show = ::gen_show_fn
    open fun gen_show_fn(options: UTSJSONObject) {
        this.tmpConfig = deepMerge(this.config, options)
        this.clearTimer()
        this.open = true
        if (parseInt((this.tmpConfig["duration"] as Any).toString()) > 0) {
            this.timer = setTimeout(fun(){
                this.open = false
                this.clearTimer()
                val complete = this.tmpConfig["complete"]
                if (UTSAndroid.`typeof`(complete) === "function") {
                    (complete as () -> Unit)()
                }
            }
            , parseInt((this.tmpConfig["duration"] as Any).toString()))
        }
    }
    open var close = ::gen_close_fn
    open fun gen_close_fn() {
        this.clearTimer()
    }
    open var clearTimer = ::gen_clearTimer_fn
    open fun gen_clearTimer_fn() {
        this.open = false
        clearTimeout(this.timer ?: 0)
        this.timer = null
    }
    companion object {
        var name = "up-notify"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-notify" to _pS(_uM("paddingTop" to 8, "paddingRight" to 10, "paddingBottom" to 8, "paddingLeft" to 10)), "up-notify__warpper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "textAlign" to "center", "justifyContent" to "center")), "up-notify__warpper__text" to _pS(_uM("fontSize" to 15, "textAlign" to "center")), "up-notify--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-notify--success" to _pS(_uM("backgroundColor" to "#5ac725")), "up-notify--error" to _pS(_uM("backgroundColor" to "#f56c6c")), "up-notify--warning" to _pS(_uM("backgroundColor" to "#f9ae3d")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "top" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to notifyProp["top"]), "type" to _uM("type" to "String", "default" to notifyProp["type"]), "color" to _uM("type" to "String", "default" to notifyProp["color"]), "bgColor" to _uM("type" to "String", "default" to notifyProp["bgColor"]), "message" to _uM("type" to "String", "default" to notifyProp["message"]), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to notifyProp["duration"]), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to notifyProp["fontSize"]), "safeAreaInsetTop" to _uM("type" to "Boolean", "default" to notifyProp["safeAreaInsetTop"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "top",
            "type",
            "color",
            "bgColor",
            "message",
            "duration",
            "fontSize",
            "safeAreaInsetTop"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
