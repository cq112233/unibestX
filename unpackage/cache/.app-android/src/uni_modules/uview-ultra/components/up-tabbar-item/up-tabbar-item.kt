@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
open class GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {
            this.init()
        }
        , __ins)
        onMounted(fun() {
            this.startRouteSync()
        }
        , __ins)
        onBeforeUnmount(fun() {
            this.clearRouteSync()
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_badge = resolveEasyComponent("up-badge", GenUniModulesUviewUltraComponentsUpBadgeUpBadgeClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-tabbar-item",
            _uA(
                if (_ctx.isMidButton) {
                    "up-tabbar-item--mid-button"
                } else {
                    ""
                }
            )
        )), "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle)
        )), "onClick" to _ctx.clickHandler), _uA(
            _cE("view", _uM("class" to _nC(_uA(
                "up-tabbar-item__icon",
                _uA(
                    if (_ctx.isMidButton) {
                        "up-tabbar-item__icon--mid-button"
                    } else {
                        ""
                    }
                )
            ))), _uA(
                if (isTrue(_ctx.isMidButton)) {
                    _cE("view", _uM("key" to 0, "class" to "up-tabbar-item--mid-button-cover"))
                } else {
                    _cC("v-if", true)
                }
                ,
                if (isTrue(_ctx.icon)) {
                    _cV(_component_up_icon, _uM("key" to 1, "name" to _ctx.icon, "color" to if (_ctx.isActive) {
                        _ctx.parentData["activeColor"]
                    } else {
                        _ctx.parentData["inactiveColor"]
                    }, "size" to if (_ctx.isMidButton) {
                        26
                    } else {
                        20
                    }), null, 8, _uA(
                        "name",
                        "color",
                        "size"
                    ))
                } else {
                    _cE(Fragment, _uM("key" to 2), _uA(
                        if (isTrue(_ctx.isActive)) {
                            renderSlot(_ctx.`$slots`, "active-icon", _uM("key" to 0))
                        } else {
                            renderSlot(_ctx.`$slots`, "inactive-icon", _uM("key" to 1))
                        }
                    ), 64)
                }
                ,
                _cV(_component_up_badge, _uM("absolute" to "", "offset" to _uA(
                    0,
                    if (isTruthy(_ctx.dot)) {
                        "34rpx"
                    } else {
                        if (_ctx.badge != null && parseInt(_ctx.badge!!.toString()) > 9) {
                            "14rpx"
                        } else {
                            "20rpx"
                        }
                    }
                ), "customStyle" to _ctx.badgeStyle, "isDot" to _ctx.dot, "value" to if (_ctx.badge != null) {
                    if (isTruthy(_ctx.dot)) {
                        1
                    } else {
                        _ctx.badge
                    }
                } else {
                    0
                }
                , "show" to if (isTruthy(_ctx.dot)) {
                    true
                } else {
                    if (_ctx.badge != null) {
                        parseInt(_ctx.badge!!.toString()) > 0
                    } else {
                        false
                    }
                }
                ), null, 8, _uA(
                    "offset",
                    "customStyle",
                    "isDot",
                    "value",
                    "show"
                ))
            ), 2),
            renderSlot(_ctx.`$slots`, "text", _uO(), fun(): UTSArray<Any> {
                return _uA(
                    _cE("text", _uM("class" to "up-tabbar-item__text", "style" to _nS(_uM("color" to if (_ctx.isActive) {
                        _ctx.parentData["activeColor"]
                    } else {
                        _ctx.parentData["inactiveColor"]
                    }
                    ))), _tD(_ctx.text), 5)
                )
            }
            )
        ), 14, _uA(
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: Any? by `$props`
    open var icon: Any? by `$props`
    open var badge: Any? by `$props`
    open var dot: Boolean by `$props`
    open var text: String by `$props`
    open var badgeStyle: Any by `$props`
    open var mode: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var isActive: Boolean by `$data`
    open var routeSyncTimer: Number by `$data`
    open var routeSyncLast: String by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var isMidButton: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "isActive" to false, "routeSyncTimer" to 0 as Number, "routeSyncLast" to "", "parentData" to _uO("value" to null as Any?, "activeColor" to "", "inactiveColor" to ""), "isMidButton" to computed<Boolean>(fun(): Boolean {
            return this.mode === "midButton"
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(kVal: Any): Any {
        return uni.UNI5198058.addStyle(kVal)
    }
    open var clearRouteSync = ::gen_clearRouteSync_fn
    open fun gen_clearRouteSync_fn() {
        if (this.routeSyncTimer != null) {
            clearInterval(this.routeSyncTimer)
            this.routeSyncTimer = 0
        }
    }
    open var getCurrentRoutePath = ::gen_getCurrentRoutePath_fn
    open fun gen_getCurrentRoutePath_fn(): String {
        val pages = getCurrentPages()
        if (pages == null || pages.length == 0) {
            return ""
        }
        val currentPage = pages[pages.length - 1]
        val route = if ((currentPage != null && currentPage.route != null)) {
            currentPage.route.toString()
        } else {
            ""
        }
        if (route == "") {
            return ""
        }
        return if (route.startsWith("/")) {
            route
        } else {
            "/" + route
        }
    }
    open var normalizeRoutePath = ::gen_normalizeRoutePath_fn
    open fun gen_normalizeRoutePath_fn(path: String): String {
        return path.replace(UTSRegExp("^[#\\\\/]+", ""), "")
    }
    open var syncActiveByRouteOrValue = ::gen_syncActiveByRouteOrValue_fn
    open fun gen_syncActiveByRouteOrValue_fn() {
        this.updateParentData()
        val index = this.getChildIndex(this)
        val name = if (this.name != null) {
            this.name!!
        } else {
            index
        }
        val routePath = this.getCurrentRoutePath()
        if (UTSAndroid.`typeof`(name) === "string" && routePath != "") {
            val isRouteMatch = this.normalizeRoutePath(name as String) == this.normalizeRoutePath(routePath)
            if (isRouteMatch) {
                this.isActive = true
                return
            }
        }
        this.isActive = name === this.parentData["value"]
    }
    open var startRouteSync = ::gen_startRouteSync_fn
    open fun gen_startRouteSync_fn() {
        this.clearRouteSync()
        if (!(UTSAndroid.`typeof`(this.name) === "string" && (this.name as String).indexOf("/") > -1)) {
            return
        }
        this.routeSyncLast = this.getCurrentRoutePath()
        this.routeSyncTimer = setInterval(fun(){
            val current = this.getCurrentRoutePath()
            if (current != this.routeSyncLast) {
                this.routeSyncLast = current
                this.syncActiveByRouteOrValue()
            }
        }
        , 200) as Number
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        if (this.parent == null) {
            error("up-tabbar-item必须搭配up-tabbar组件使用")
        }
        this.syncActiveByRouteOrValue()
    }
    open var updateParentData = ::gen_updateParentData_fn
    open fun gen_updateParentData_fn() {
        this.getParentData("up-tabbar")
    }
    open var updateFromParent = ::gen_updateFromParent_fn
    open fun gen_updateFromParent_fn() {
        this.init()
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        nextTick(fun(){
            val index = this.getChildIndex(this)
            val name = if (this.name != null) {
                this.name!!
            } else {
                index
            }
            if (this.parent != null && name.toString() != this.parent!!.`$props`["value"].toString()) {
                this.parent!!.`$emit`("change", name)
            }
            this.`$emit`("click", name)
        }
        )
    }
    companion object {
        var name = "up-tabbar-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabbar-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "width" to "100%", "height" to 50)), "up-tabbar-item__icon" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "width" to "150rpx", "justifyContent" to "center")), "up-tabbar-item__text" to _pS(_uM("marginTop" to 2, "fontSize" to 12, "color" to "#606266")), "up-tabbar-item--mid-button" to _pS(_uM("transform" to "translateY(-10px)")), "up-tabbar-item--mid-button-cover" to _pS(_uM("backgroundColor" to "#ffffff", "position" to "absolute", "top" to 22, "left" to -10, "width" to 90, "bottom" to 0)), "up-tabbar-item__icon--mid-button" to _pS(_uM("width" to 70, "height" to 70, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#ffffff", "boxShadow" to "0 0 10px rgba(0, 0, 0, 0.1)", "display" to "flex", "alignItems" to "center", "justifyContent" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to tabbarItemProp["name"]), "icon" to _uM("default" to tabbarItemProp["icon"]), "badge" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to tabbarItemProp["badge"]), "dot" to _uM("type" to "Boolean", "default" to tabbarItemProp["dot"]), "text" to _uM("type" to "String", "default" to tabbarItemProp["text"]), "badgeStyle" to _uM("type" to _uA(
            "UTSJSONObject",
            "String"
        ), "default" to tabbarItemProp["badgeStyle"]), "mode" to _uM("type" to "String", "default" to tabbarItemProp["mode"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "name",
            "icon",
            "badge",
            "dot",
            "text",
            "badgeStyle",
            "mode"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
