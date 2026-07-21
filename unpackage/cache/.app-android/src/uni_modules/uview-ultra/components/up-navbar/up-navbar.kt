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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
open class GenUniModulesUviewUltraComponentsUpNavbarUpNavbar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {
            this.statusBarHeight = uni_getSystemInfoSync().statusBarHeight
            this.placeholderHeight = uni.UNI5198058.addUnit(parseInt(uni.UNI5198058.getPx(this.height)) + this.statusBarHeight, "px")
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_status_bar = resolveEasyComponent("up-status-bar", GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarClass)
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to _nC(_uA(
            "up-navbar",
            _uA(
                _ctx.customClass
            )
        ))), _uA(
            if (isTrue(if (isTruthy(_ctx.fixed)) {
                _ctx.placeholder
            } else {
                _ctx.fixed
            }
            )) {
                _cE("view", _uM("key" to 0, "class" to "up-navbar__placeholder", "style" to _nS(_uM("height" to _ctx.placeholderHeight))), null, 4)
            } else {
                _cC("v-if", true)
            }
            ,
            _cE("view", _uM("class" to _nC(_uA(
                if (isTruthy(_ctx.fixed)) {
                    "up-navbar--fixed"
                } else {
                    ""
                }
            ))), _uA(
                if (isTrue(_ctx.safeAreaInsetTop)) {
                    _cV(_component_up_status_bar, _uM("key" to 0, "bgColor" to _ctx.bgColor), null, 8, _uA(
                        "bgColor"
                    ))
                } else {
                    _cC("v-if", true)
                }
                ,
                _cE("view", _uM("class" to _nC(_uA(
                    "up-navbar__content",
                    _uA(
                        if (isTruthy(_ctx.border)) {
                            "up-border-bottom"
                        } else {
                            ""
                        }
                    )
                )), "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height), "backgroundColor" to _ctx.bgColor))), _uA(
                    _cE("view", _uM("class" to "up-navbar__content__left", "hover-class" to "up-navbar__content__left--hover", "hover-start-time" to "150", "onClick" to _ctx.leftClick), _uA(
                        renderSlot(_ctx.`$slots`, "left", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue(_ctx.leftIcon)) {
                                    _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.leftIcon, "size" to _ctx.leftIconSize, "color" to _ctx.leftIconColor), null, 8, _uA(
                                        "name",
                                        "size",
                                        "color"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.leftText)) {
                                    _cE("text", _uM("key" to 1, "style" to _nS(_uM("color" to _ctx.leftIconColor)), "class" to "up-navbar__content__left__text"), _tD(_ctx.leftText), 5)
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        }
                        )
                    ), 8, _uA(
                        "onClick"
                    )),
                    renderSlot(_ctx.`$slots`, "center", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("class" to "up-line-1 up-navbar__content__title", "style" to _nS(_uA(
                                _uM("width" to _ctx.addUnit(_ctx.titleWidth)),
                                _ctx.addStyle(_ctx.titleStyle)
                            ))), _tD(_ctx.title), 5)
                        )
                    }
                    ),
                    if (isTrue(_ctx.`$slots`["right"] != null || _ctx.rightIcon != "" || _ctx.rightText != "")) {
                        _cE("view", _uM("key" to 0, "class" to "up-navbar__content__right", "onClick" to _ctx.rightClick), _uA(
                            renderSlot(_ctx.`$slots`, "right", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.rightIcon)) {
                                        _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.rightIcon, "size" to "20"), null, 8, _uA(
                                            "name"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    if (isTrue(_ctx.rightText)) {
                                        _cE("text", _uM("key" to 1, "class" to "up-navbar__content__right__text"), _tD(_ctx.rightText), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            })
                        ), 8, _uA(
                            "onClick"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ), 6)
            ), 2)
        ), 2)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var safeAreaInsetTop: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var fixed: Boolean by `$props`
    open var border: Boolean by `$props`
    open var leftIcon: String by `$props`
    open var leftText: String by `$props`
    open var rightText: String by `$props`
    open var rightIcon: String by `$props`
    open var title: Any by `$props`
    open var bgColor: String by `$props`
    open var titleWidth: Any by `$props`
    open var height: Any by `$props`
    open var leftIconSize: Any by `$props`
    open var leftIconColor: String by `$props`
    open var autoBack: Boolean by `$props`
    open var titleStyle: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var statusBarHeight: Number by `$data`
    open var placeholderHeight: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "statusBarHeight" to 0 as Number, "placeholderHeight" to "0px" as String)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(kVal: Any): Any {
        return uni.UNI5198058.addStyle(kVal)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(kVal: Any): String {
        return uni.UNI5198058.addUnit(kVal)
    }
    open var getPx = ::gen_getPx_fn
    open fun gen_getPx_fn(kVal: Any): String {
        return uni.UNI5198058.getPx(kVal)
    }
    open var leftClick = ::gen_leftClick_fn
    open fun gen_leftClick_fn(): Unit {
        this.`$emit`("leftClick")
        if (isTruthy(this.autoBack)) {
            uni_navigateBack(null)
        }
    }
    open var rightClick = ::gen_rightClick_fn
    open fun gen_rightClick_fn(): Unit {
        this.`$emit`("rightClick")
    }
    companion object {
        var name = "up-navbar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-navbar--fixed" to _pS(_uM("position" to "fixed", "left" to 0, "right" to 0, "top" to 0, "zIndex" to 11)), "up-navbar__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "height" to 44, "backgroundColor" to "#9acafc", "position" to "relative", "justifyContent" to "center")), "up-navbar__content__left" to _pS(_uM("paddingTop" to 0, "paddingRight" to 13, "paddingBottom" to 0, "paddingLeft" to 13, "position" to "absolute", "top" to 0, "bottom" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "left" to 0)), "up-navbar__content__right" to _pS(_uM("paddingTop" to 0, "paddingRight" to 13, "paddingBottom" to 0, "paddingLeft" to 13, "position" to "absolute", "top" to 0, "bottom" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "right" to 0)), "up-navbar__content__left--hover" to _pS(_uM("opacity" to 0.7)), "up-navbar__content__left__text" to _pS(_uM("fontSize" to 15, "marginLeft" to 3)), "up-navbar__content__title" to _pS(_uM("textAlign" to "center", "fontSize" to 16, "color" to "#303133")), "up-navbar__content__right__text" to _pS(_uM("fontSize" to 15, "marginLeft" to 3)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("leftClick" to null, "rightClick" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "safeAreaInsetTop" to _uM("type" to "Boolean", "default" to crtProp__12["safeAreaInsetTop"]), "placeholder" to _uM("type" to "Boolean", "default" to crtProp__12["placeholder"]), "fixed" to _uM("type" to "Boolean", "default" to crtProp__12["fixed"]), "border" to _uM("type" to "Boolean", "default" to crtProp__12["border"]), "leftIcon" to _uM("type" to "String", "default" to crtProp__12["leftIcon"]), "leftText" to _uM("type" to "String", "default" to crtProp__12["leftText"]), "rightText" to _uM("type" to "String", "default" to crtProp__12["rightText"]), "rightIcon" to _uM("type" to "String", "default" to crtProp__12["rightIcon"]), "title" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__12["title"]), "bgColor" to _uM("type" to "String", "default" to crtProp__12["bgColor"]), "titleWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__12["titleWidth"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__12["height"]), "leftIconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__12["leftIconSize"]), "leftIconColor" to _uM("type" to "String", "default" to crtProp__12["leftIconColor"]), "autoBack" to _uM("type" to "Boolean", "default" to crtProp__12["autoBack"]), "titleStyle" to _uM("type" to _uA(
            "Object"
        ), "default" to crtProp__12["titleStyle"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "safeAreaInsetTop",
            "placeholder",
            "fixed",
            "border",
            "leftIcon",
            "leftText",
            "rightText",
            "rightIcon",
            "title",
            "bgColor",
            "titleWidth",
            "height",
            "leftIconSize",
            "leftIconColor",
            "autoBack",
            "titleStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
