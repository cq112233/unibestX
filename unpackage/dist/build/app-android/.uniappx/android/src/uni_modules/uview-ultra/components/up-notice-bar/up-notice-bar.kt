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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.reLaunch as uni_reLaunch
import io.dcloud.uniapp.extapi.redirectTo as uni_redirectTo
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var text: Any by `$props`
    open var direction: String by `$props`
    open var step: Boolean by `$props`
    open var icon: String by `$props`
    open var mode: String by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var speed: Any by `$props`
    open var fontSize: Any by `$props`
    open var duration: Any by `$props`
    open var disableTouch: Boolean by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBar
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val show = ref<Boolean>(true)
            val noticeBarStyle = computed(fun(): UTSJSONObject {
                val base: UTSJSONObject = _uO("backgroundColor" to props.bgColor)
                val custom = addStyle(props.customStyle) as UTSJSONObject
                return deepMerge(base, custom) as UTSJSONObject
            }
            )
            fun gen_click_fn(index: Number) {
                emit("click", index)
                if (props.url != "" && props.linkType != "") {
                    if (props.linkType == "navigateTo") {
                        uni_navigateTo(NavigateToOptions(url = props.url))
                    } else if (props.linkType == "redirectTo") {
                        uni_redirectTo(RedirectToOptions(url = props.url))
                    } else if (props.linkType == "switchTab") {
                        uni_switchTab(SwitchTabOptions(url = props.url))
                    } else if (props.linkType == "reLaunch") {
                        uni_reLaunch(ReLaunchOptions(url = props.url))
                    }
                }
            }
            val click = ::gen_click_fn
            fun gen_close_fn() {
                show.value = false
                emit("close")
            }
            val close = ::gen_close_fn
            return fun(): Any? {
                val _component_up_column_notice = resolveEasyComponent("up-column-notice", GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNoticeClass)
                val _component_up_row_notice = resolveEasyComponent("up-row-notice", GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNoticeClass)
                return if (isTrue(show.value)) {
                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-notice-bar", "style" to _nS(noticeBarStyle.value)), _uA(
                        if (isTrue(_ctx.direction == "column" || (_ctx.direction == "row" && _ctx.step))) {
                            _cV(_component_up_column_notice, _uM("key" to 0, "color" to _ctx.color, "bgColor" to _ctx.bgColor, "text" to _ctx.text, "mode" to _ctx.mode, "step" to _ctx.step, "icon" to _ctx.icon, "disable-touch" to _ctx.disableTouch, "fontSize" to _ctx.fontSize, "duration" to _ctx.duration, "onClose" to close, "onClick" to click), null, 8, _uA(
                                "color",
                                "bgColor",
                                "text",
                                "mode",
                                "step",
                                "icon",
                                "disable-touch",
                                "fontSize",
                                "duration"
                            ))
                        } else {
                            _cV(_component_up_row_notice, _uM("key" to 1, "color" to _ctx.color, "bgColor" to _ctx.bgColor, "text" to _ctx.text, "mode" to _ctx.mode, "fontSize" to _ctx.fontSize, "speed" to _ctx.speed, "url" to _ctx.url, "linkType" to _ctx.linkType, "icon" to _ctx.icon, "onClose" to close, "onClick" to click), null, 8, _uA(
                                "color",
                                "bgColor",
                                "text",
                                "mode",
                                "fontSize",
                                "speed",
                                "url",
                                "linkType",
                                "icon"
                            ))
                        }
                    ), 4)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-notice-bar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-notice-bar" to _pS(_uM("paddingTop" to 9, "paddingRight" to 12, "paddingBottom" to 9, "paddingLeft" to 12)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "text" to _uM("type" to _uA(
            "Array",
            "String"
        ), "default" to fun(): UTSArray<String> {
            return _uA<String>()
        }
        ), "direction" to _uM("type" to "String", "default" to "row"), "step" to _uM("type" to "Boolean", "default" to false), "icon" to _uM("type" to "String", "default" to "volume"), "mode" to _uM("type" to "String", "default" to ""), "color" to _uM("type" to "String", "default" to "#f9ae3d"), "bgColor" to _uM("type" to "String", "default" to "#fdf6ec"), "speed" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 14), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 2000), "disableTouch" to _uM("type" to "Boolean", "default" to true), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "text",
            "direction",
            "step",
            "icon",
            "mode",
            "color",
            "bgColor",
            "speed",
            "fontSize",
            "duration",
            "disableTouch",
            "url",
            "linkType",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
