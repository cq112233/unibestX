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
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
import io.dcloud.uniapp.extapi.reLaunch as uni_reLaunch
open class GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMini : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var safeAreaInsetTop: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var fixed: Boolean by `$props`
    open var leftIcon: String by `$props`
    open var bgColor: String by `$props`
    open var height: Any by `$props`
    open var iconSize: Any by `$props`
    open var iconColor: String by `$props`
    open var autoBack: Boolean by `$props`
    open var homeUrl: String by `$props`
    open var customClass: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMini) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNavbarMiniUpNavbarMini
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val contentStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("height" to addUnit(props.height), "backgroundColor" to props.bgColor)
            }
            )
            fun gen_leftClick_fn(): Unit {
                emit("leftClick")
                if (props.autoBack) {
                    uni_navigateBack(null)
                }
            }
            val leftClick = ::gen_leftClick_fn
            fun gen_homeClick_fn(): Unit {
                emit("homeClick")
                if (props.homeUrl != "") {
                    uni_reLaunch(ReLaunchOptions(url = props.homeUrl))
                }
            }
            val homeClick = ::gen_homeClick_fn
            return fun(): Any? {
                val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-navbar-mini",
                    _uA(
                        _ctx.customClass
                    )
                ))), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-navbar-mini__inner",
                        _uA(
                            if (_ctx.fixed) {
                                "up-navbar-mini--fixed"
                            } else {
                                ""
                            }
                        )
                    ))), _uA(
                        if (isTrue(_ctx.safeAreaInsetTop)) {
                            _cV(_component_up_status_bar, _uM("key" to 0))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        _cE("view", _uM("class" to "weapp-tw-border up-navbar-mini__content", "style" to _nS(contentStyle.value)), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-navbar-mini__content__left", "hover-class" to "up-navbar-mini__content__left--hover", "hover-start-time" to "150", "onClick" to leftClick), _uA(
                                renderSlot(_ctx.`$slots`, "left", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to _ctx.leftIcon, "size" to _ctx.iconSize, "color" to _ctx.iconColor), null, 8, _uA(
                                            "name",
                                            "size",
                                            "color"
                                        ))
                                    )
                                }
                                )
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("padding" to "10px 10px"))), _uA(
                                _cV(_component_up_line, _uM("direction" to "col", "color" to "#fff", "length" to "16px"))
                            ), 4),
                            _cE("view", _uM("class" to "weapp-tw-border up-navbar-mini__content__center", "onClick" to homeClick), _uA(
                                renderSlot(_ctx.`$slots`, "center", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to "home", "size" to _ctx.iconSize, "color" to _ctx.iconColor), null, 8, _uA(
                                            "size",
                                            "color"
                                        ))
                                    )
                                }
                                )
                            ))
                        ), 4)
                    ), 2)
                ), 2)
            }
        }
        var name = "up-navbar-mini"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-navbar-mini__inner" to _pS(_uM("width" to "180rpx", "overflow" to "hidden")), "up-navbar-mini--fixed" to _pS(_uM("position" to "fixed", "left" to 20, "right" to 0, "top" to 10, "zIndex" to 11)), "up-navbar-mini__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "paddingTop" to 0, "paddingRight" to 15, "paddingBottom" to 0, "paddingLeft" to 15, "borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20, "alignItems" to "center", "height" to 36, "backgroundColor" to "#9acafc", "position" to "relative", "justifyContent" to "space-between")), "up-navbar-mini__content__left" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-navbar-mini__content__left--hover" to _pS(_uM("opacity" to 0.7)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("leftClick" to null, "homeClick" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "safeAreaInsetTop" to _uM("type" to "Boolean", "default" to true), "placeholder" to _uM("type" to "Boolean", "default" to false), "fixed" to _uM("type" to "Boolean", "default" to false), "leftIcon" to _uM("type" to "String", "default" to "arrow-left"), "bgColor" to _uM("type" to "String", "default" to "#ffffff"), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "44px"), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "20px"), "iconColor" to _uM("type" to "String", "default" to "#303133"), "autoBack" to _uM("type" to "Boolean", "default" to false), "homeUrl" to _uM("type" to "String", "default" to ""), "customClass" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "url",
            "linkType",
            "safeAreaInsetTop",
            "placeholder",
            "fixed",
            "leftIcon",
            "bgColor",
            "height",
            "iconSize",
            "iconColor",
            "autoBack",
            "homeUrl",
            "customClass"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
