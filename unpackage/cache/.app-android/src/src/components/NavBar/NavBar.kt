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
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenSrcComponentsNavBarNavBar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: String by `$props`
    open var titleColor: String by `$props`
    open var bgColor: String by `$props`
    open var showBack: Boolean by `$props`
    open var fixed: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var border: Boolean by `$props`
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
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcComponentsNavBarNavBar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcComponentsNavBarNavBar
            val _cache = __ins.renderCache
            val statusBarHeight = computed(fun(): Number {
                return safeAreaInsets.value?.top ?: systemInfo.value?.statusBarHeight ?: 0
            }
            )
            fun gen_handleBack_fn() {
                uni_navigateBack(NavigateBackOptions(success = fun(_) {
                    console.log("返回成功", " at src/components/NavBar/NavBar.uvue:90")
                }
                , fail = fun(_) {
                    uni_switchTab(SwitchTabOptions(url = "/src/pages/index/index"))
                }
                ))
            }
            val handleBack = ::gen_handleBack_fn
            return fun(): Any? {
                return _cE("view", null, _uA(
                    _cE("view", _uM("class" to _nC(if (_ctx.fixed) {
                        "navbar-container navbar-fixed"
                    } else {
                        "navbar-container"
                    }
                    ), "style" to _nS(_uM("backgroundColor" to _ctx.bgColor, "borderBottom" to if (_ctx.border) {
                        "1px solid #e2e8f0"
                    } else {
                        "none"
                    }
                    ))), _uA(
                        _cE("view", _uM("style" to _nS(_uM("height" to ("" + statusBarHeight.value + "px")))), null, 4),
                        _cE("view", _uM("class" to "navbar-content"), _uA(
                            _cE("view", _uM("class" to "navbar-left", "onClick" to handleBack), _uA(
                                renderSlot(_ctx.`$slots`, "left", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (isTrue(_ctx.showBack)) {
                                            _cE("view", _uM("key" to 0, "class" to "back-btn-wrapper"), _uA(
                                                _cE("view", _uM("class" to "back-arrow", "style" to _nS(_uM("borderColor" to _ctx.titleColor))), null, 4)
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                )
                            )),
                            _cE("view", _uM("class" to "navbar-title"), _uA(
                                renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("text", _uM("class" to "title-text", "style" to _nS(_uM("color" to _ctx.titleColor))), _tD(_ctx.title), 5)
                                    )
                                }
                                )
                            )),
                            _cE("view", _uM("class" to "navbar-right"), _uA(
                                renderSlot(_ctx.`$slots`, "right")
                            ))
                        ))
                    ), 6),
                    if (isTrue(_ctx.fixed && _ctx.placeholder)) {
                        _cE("view", _uM("key" to 0, "style" to _nS(_uM("height" to ("" + (statusBarHeight.value + 44) + "px")))), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("border" to _pS(_uM("borderTopWidth" to "var(--un-line-width-default,1px)", "borderRightWidth" to "var(--un-line-width-default,1px)", "borderBottomWidth" to "var(--un-line-width-default,1px)", "borderLeftWidth" to "var(--un-line-width-default,1px)")), "fixed" to _pS(_uM("position" to "fixed")), "navbar-container" to _pS(_uM("width" to "100%", "display" to "flex", "flexDirection" to "column")), "navbar-fixed" to _pS(_uM("position" to "fixed", "top" to 0, "left" to 0, "right" to 0, "zIndex" to 999)), "navbar-content" to _pS(_uM("height" to 44, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "position" to "relative", "width" to "100%")), "navbar-left" to _pS(_uM("position" to "absolute", "left" to 0, "top" to 0, "bottom" to 0, "width" to 60, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "flex-start", "zIndex" to 10)), "back-btn-wrapper" to _pS(_uM("paddingTop" to 10, "paddingRight" to 15, "paddingBottom" to 10, "paddingLeft" to 15, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "back-arrow" to _pS(_uM("width" to 10, "height" to 10, "borderLeftWidth" to 2, "borderLeftStyle" to "solid", "borderLeftColor" to "#1e293b", "borderBottomWidth" to 2, "borderBottomStyle" to "solid", "borderBottomColor" to "#1e293b", "transform" to "rotate(45deg)")), "navbar-title" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to "100%", "paddingLeft" to 60, "paddingRight" to 60)), "title-text" to _pS(_uM("fontSize" to 16, "fontWeight" to "700", "textOverflow" to "ellipsis", "overflow" to "hidden", "whiteSpace" to "nowrap")), "navbar-right" to _pS(_uM("position" to "absolute", "right" to 0, "top" to 0, "bottom" to 0, "width" to 60, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "flex-end", "zIndex" to 10, "paddingRight" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to "String", "default" to ""), "titleColor" to _uM("type" to "String", "default" to "#1e293b"), "bgColor" to _uM("type" to "String", "default" to "#ffffff"), "showBack" to _uM("type" to "Boolean", "default" to true), "fixed" to _uM("type" to "Boolean", "default" to true), "placeholder" to _uM("type" to "Boolean", "default" to true), "border" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "titleColor",
            "bgColor",
            "showBack",
            "fixed",
            "placeholder",
            "border"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
