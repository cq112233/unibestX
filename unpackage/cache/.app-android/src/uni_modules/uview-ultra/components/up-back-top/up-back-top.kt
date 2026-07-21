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
import io.dcloud.uniapp.extapi.pageScrollTo as uni_pageScrollTo
open class GenUniModulesUviewUltraComponentsUpBackTopUpBackTop : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var mode: String by `$props`
    open var icon: String by `$props`
    open var text: String by `$props`
    open var duration: Any by `$props`
    open var scrollTop: Any by `$props`
    open var top: Any by `$props`
    open var bottom: Any by `$props`
    open var right: Any by `$props`
    open var zIndex: Any by `$props`
    open var iconStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpBackTopUpBackTop) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpBackTopUpBackTop
            val _cache = __ins.renderCache
            val prop = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val backTopStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue", 93, 9), "bottom" to addUnit(prop.bottom), "right" to addUnit(prop.right), "width" to "40px", "height" to "40px", "position" to "fixed", "zIndex" to parseInt(prop.zIndex.toString()))
                return style
            }
            )
            val show = ref(false)
            watch(fun(): Any {
                return prop.scrollTop
            }
            , fun(newVal: Any){
                show.value = parseInt(getPx(newVal)) > parseInt(getPx(prop.top.toString()))
            }
            , WatchOptions(immediate = true))
            val contentStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue", 112, 9))
                var radius = "0px"
                if (prop.mode === "circle") {
                    radius = "100px"
                } else {
                    radius = "4px"
                }
                style["borderRadius"] = radius
                return deepMerge(style, addStyle(prop.customStyle))
            }
            )
            fun gen_backToTop_fn(e: Any) {
                uni_pageScrollTo(PageScrollToOptions(scrollTop = 0, duration = parseInt(prop.duration.toString()), fail = fun(_err){}))
                emit("click", e)
            }
            val backToTop = ::gen_backToTop_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return if (isTrue(show.value)) {
                    _cE("view", _uM("key" to 0, "style" to _nS(_uA(
                        backTopStyle.value,
                        contentStyle.value
                    )), "class" to "up-back-top", "onClick" to backToTop), _uA(
                        if (isTrue(_ctx.`$slots`["default"] == null && _ctx.`$slots`["\$default"] == null)) {
                            _cE(Fragment, _uM("key" to 0), _uA(
                                _cV(_component_up_icon, _uM("name" to _ctx.icon, "custom-style" to _ctx.iconStyle), null, 8, _uA(
                                    "name",
                                    "custom-style"
                                )),
                                if (isTrue(_ctx.text)) {
                                    _cE("text", _uM("key" to 0, "class" to "up-back-top__text"), _tD(_ctx.text), 1)
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 64)
                        } else {
                            renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
                        }
                    ), 4)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-back-top" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to "100%", "justifyContent" to "center", "backgroundColor" to "#E1E1E1")), "up-back-top__tips" to _pS(_uM("fontSize" to 12, "transform" to "scale(0.8)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "mode" to _uM("type" to "String", "default" to default__66.getString("backtop.mode")), "icon" to _uM("type" to "String", "default" to default__66.getString("backtop.icon")), "text" to _uM("type" to "String", "default" to default__66.getString("backtop.text")), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.duration")), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.scrollTop")), "top" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.top")), "bottom" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.bottom")), "right" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.right")), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__66.getNumber("backtop.zIndex")), "iconStyle" to _uM("default" to fun(): UTSJSONObject {
            return default__66.getAny("backtop.iconStyle") as UTSJSONObject ?: _uO()
        }
        ), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "mode",
            "icon",
            "text",
            "duration",
            "scrollTop",
            "top",
            "bottom",
            "right",
            "zIndex",
            "iconStyle",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
