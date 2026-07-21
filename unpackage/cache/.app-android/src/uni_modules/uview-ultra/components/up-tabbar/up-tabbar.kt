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
open class GenUniModulesUviewUltraComponentsUpTabbarUpTabbar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.setPlaceholderHeight()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.updateChild
        }
        , fun() {
            this.updateChildren()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.updatePlaceholder
        }
        , fun() {
            this.setPlaceholderHeight()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom", GenUniModulesUviewUltraComponentsUpSafeBottomUpSafeBottomClass)
        return _cE("view", _uM("class" to "up-tabbar"), _uA(
            _cE("view", _uM("class" to _nC(_uA(
                "up-tabbar__content",
                _uA(
                    if (isTruthy(_ctx.border)) {
                        "up-border-top"
                    } else {
                        ""
                    }
                    ,
                    if (isTruthy(_ctx.fixed)) {
                        "up-tabbar--fixed"
                    } else {
                        ""
                    }
                )
            )), "ref" to "up-tabbar__content", "onTouchmove" to withModifiers(_ctx.noop, _uA(
                "stop",
                "prevent"
            )), "style" to _nS(_uA(
                _ctx.tabbarStyle
            ))), _uA(
                _cE("view", _uM("class" to "up-tabbar__content__item-wrapper"), _uA(
                    renderSlot(_ctx.`$slots`, "default")
                )),
                if (isTrue(_ctx.safeAreaInsetBottom)) {
                    _cV(_component_up_safe_bottom, _uM("key" to 0))
                } else {
                    _cC("v-if", true)
                }
            ), 46, _uA(
                "onTouchmove"
            )),
            if (isTrue(_ctx.placeholder)) {
                _cE("view", _uM("key" to 0, "class" to "up-tabbar__placeholder", "style" to _nS(_uM("height" to (_ctx.placeholderHeight + "px")))), null, 4)
            } else {
                _cC("v-if", true)
            }
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var value: Any? by `$props`
    open var safeAreaInsetBottom: Boolean by `$props`
    open var border: Boolean by `$props`
    open var borderColor: String by `$props`
    open var zIndex: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var fixed: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var backgroundColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var placeholderHeight: Number by `$data`
    open var tabbarStyle: Any by `$data`
    open var updateChild: UTSArray<Any?> by `$data`
    open var updatePlaceholder: UTSArray<Any> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "placeholderHeight" to 0, "tabbarStyle" to computed<Any>(fun(): Any {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue", 60, 11), "zIndex" to this.zIndex)
            if (this.borderColor != "") {
                style["borderColor"] = this.borderColor + " !important"
            }
            if (this.backgroundColor != "") {
                style["backgroundColor"] = this.backgroundColor
            }
            return deepMerge(style, addStyle(this.customStyle))
        }
        ), "updateChild" to computed<UTSArray<Any?>>(fun(): UTSArray<Any?> {
            return _uA(
                this.value,
                this.activeColor,
                this.inactiveColor
            )
        }
        ), "updatePlaceholder" to computed<UTSArray<Any>>(fun(): UTSArray<Any> {
            return _uA(
                this.fixed,
                this.placeholder
            )
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
    open var updateChildren = ::gen_updateChildren_fn
    open fun gen_updateChildren_fn() {
        if (this.children.length > 0) {
            this.children.map(fun(child: ComponentPublicInstance){
                child?.`$callMethod`("updateFromParent")
            }
            )
        }
    }
    open var setPlaceholderHeight = ::gen_setPlaceholderHeight_fn
    open fun gen_setPlaceholderHeight_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend w@{
                if (!isTruthy(this.fixed) || !isTruthy(this.placeholder)) {
                    return@w
                }
                await(sleep(20))
                this.upGetRect(".up-tabbar__content").then(fun(size: NodeInfo){
                    this.placeholderHeight = size.height ?: 50
                }
                )
        })
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn() {}
    companion object {
        var name = "up-tabbar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabbar" to _pS(_uM("display" to "flex", "flexDirection" to "column", "width" to "100%")), "up-tabbar__content" to _pS(_uM("display" to "flex", "flexDirection" to "column", "backgroundColor" to "#ffffff")), "up-tabbar__content__item-wrapper" to _pS(_uM("height" to 50, "display" to "flex", "flexDirection" to "row", "justifyContent" to "space-around", "alignItems" to "stretch", "width" to "100%")), "up-tabbar--fixed" to _pS(_uM("position" to "fixed", "bottom" to 0, "left" to 0, "right" to 0)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "value" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to tabbarProp["value"]), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to tabbarProp["safeAreaInsetBottom"]), "border" to _uM("type" to "Boolean", "default" to tabbarProp["border"]), "borderColor" to _uM("type" to "String", "default" to tabbarProp["borderColor"]), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to tabbarProp["zIndex"]), "activeColor" to _uM("type" to "String", "default" to tabbarProp["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to tabbarProp["inactiveColor"]), "fixed" to _uM("type" to "Boolean", "default" to tabbarProp["fixed"]), "placeholder" to _uM("type" to "Boolean", "default" to tabbarProp["placeholder"]), "backgroundColor" to _uM("type" to "String", "default" to tabbarProp["backgroundColor"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "value",
            "safeAreaInsetBottom",
            "border",
            "borderColor",
            "zIndex",
            "activeColor",
            "inactiveColor",
            "fixed",
            "placeholder",
            "backgroundColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
