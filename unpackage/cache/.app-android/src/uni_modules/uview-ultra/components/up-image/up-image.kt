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
open class GenUniModulesUviewUltraComponentsUpImageUpImage : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var src: String by `$props`
    open var mode: String by `$props`
    open var width: String by `$props`
    open var height: String by `$props`
    open var shape: String by `$props`
    open var radius: String by `$props`
    open var lazyLoad: Boolean by `$props`
    open var showMenuByLongpress: Boolean by `$props`
    open var loadingIcon: String by `$props`
    open var errorIcon: String by `$props`
    open var showLoading: Boolean by `$props`
    open var showError: Boolean by `$props`
    open var fade: Boolean by `$props`
    open var webp: Boolean by `$props`
    open var duration: Number by `$props`
    open var bgColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var onClick: () -> Unit
        get() {
            return unref(this.`$exposed`["onClick"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "onClick", value)
        }
    open var onErrorHandler: (err: Any) -> Unit
        get() {
            return unref(this.`$exposed`["onErrorHandler"]) as (err: Any) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "onErrorHandler", value)
        }
    open var onLoadHandler: (event: Any) -> Unit
        get() {
            return unref(this.`$exposed`["onLoadHandler"]) as (event: Any) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "onLoadHandler", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpImageUpImage, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpImageUpImage
            val _cache = __ins.renderCache
            val props = __props
            val isError = ref(true)
            val loading = ref(true)
            val opacity = ref(1)
            val backgroundStyle = ref(_uO())
            val show = ref(false)
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val wrapStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-image/up-image.uvue", 151, 7))
                style["width"] = addUnit(props.width)
                style["height"] = addUnit(props.height)
                style["borderRadius"] = if (props.shape == "circle") {
                    "10000px"
                } else {
                    addUnit(props.radius)
                }
                if (props.radius != null) {
                    style["overflow"] = if (parseInt(props.radius as String) > 0) {
                        "hidden"
                    } else {
                        "visible"
                    }
                }
                return deepMerge(style, _uO())
            }
            )
            onMounted(fun(){
                show.value = true
                if (props.src == "") {
                    isError.value = true
                } else {
                    isError.value = false
                    loading.value = true
                }
            }
            )
            val onClick = fun(){
                emit("click")
            }
            val onErrorHandler = fun(err: Any){
                loading.value = false
                isError.value = true
                emit("error", err)
            }
            val removeBgColor = fun(){
                backgroundStyle.value = _uO("backgroundColor" to "transparent")
            }
            val onLoadHandler = fun(event: Any){
                loading.value = false
                isError.value = false
                emit("load", event)
                removeBgColor()
            }
            __expose(_uM("onClick" to onClick, "onErrorHandler" to onErrorHandler, "onLoadHandler" to onLoadHandler))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("mode" to "fade", "show" to show.value, "duration" to if (_ctx.fade) {
                    1000
                } else {
                    0
                }
                ), _uA(
                    _cE("view", _uM("class" to "up-image", "onClick" to onClick, "style" to _nS(_uA(
                        wrapStyle.value,
                        backgroundStyle.value,
                        _ctx.`$up`.addStyle(_ctx.customStyle)
                    ))), _uA(
                        _cE("image", _uM("src" to _ctx.src, "mode" to _ctx.mode, "onError" to onErrorHandler, "onLoad" to onLoadHandler, "lazy-load" to _ctx.lazyLoad, "class" to "up-image__image", "style" to _nS(_uM("borderRadius" to if (_ctx.shape == "circle") {
                            "10000px"
                        } else {
                            _ctx.`$up`.addUnit(_ctx.radius)
                        }
                        , "width" to _ctx.`$up`.addUnit(_ctx.width), "height" to _ctx.`$up`.addUnit(_ctx.height)))), null, 44, _uA(
                            "src",
                            "mode",
                            "lazy-load"
                        )),
                        if (isTrue(_ctx.showLoading && loading.value)) {
                            _cE("view", _uM("key" to 0, "class" to "up-image__loading", "style" to _nS(_uM("borderRadius" to if (_ctx.shape == "circle") {
                                "50%"
                            } else {
                                _ctx.`$up`.addUnit(_ctx.radius)
                            }, "backgroundColor" to _ctx.bgColor, "width" to _ctx.`$up`.addUnit(_ctx.width), "height" to _ctx.`$up`.addUnit(_ctx.height)))), _uA(
                                renderSlot(_ctx.`$slots`, "loading", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to _ctx.loadingIcon, "width" to _ctx.width, "height" to _ctx.height), null, 8, _uA(
                                            "name",
                                            "width",
                                            "height"
                                        ))
                                    )
                                })
                            ), 4)
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(_ctx.showError && isError.value && !loading.value)) {
                            _cE("view", _uM("key" to 1, "class" to "up-image__error", "style" to _nS(_uM("borderRadius" to if (_ctx.shape == "circle") {
                                "50%"
                            } else {
                                _ctx.`$up`.addUnit(_ctx.radius)
                            }, "width" to _ctx.`$up`.addUnit(_ctx.width), "height" to _ctx.`$up`.addUnit(_ctx.height)))), _uA(
                                renderSlot(_ctx.`$slots`, "error", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_icon, _uM("name" to _ctx.errorIcon, "width" to _ctx.width, "height" to _ctx.height), null, 8, _uA(
                                            "name",
                                            "width",
                                            "height"
                                        ))
                                    )
                                })
                            ), 4)
                        } else {
                            _cC("v-if", true)
                        }
                    ), 4)
                ), 8, _uA(
                    "show",
                    "duration"
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
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-image" to _pS(_uM("position" to "relative", "transitionProperty" to "opacity", "transitionDuration" to "0.5s", "transitionTimingFunction" to "ease-in-out")), "up-image__image" to _pS(_uM("width" to "100%", "height" to "100%")), "up-image__loading" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "width" to "100%", "height" to "100%", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#f3f4f6")), "up-image__error" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "width" to "100%", "height" to "100%", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#f3f4f6")), "@TRANSITION" to _uM("up-image" to _uM("property" to "opacity", "duration" to "0.5s", "timingFunction" to "ease-in-out")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "error" to null, "load" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "src" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.src")
        }
        ), "mode" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.mode")
        }
        ), "width" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.width")
        }
        ), "height" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.height")
        }
        ), "shape" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.shape")
        }
        ), "radius" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.radius")
        }
        ), "lazyLoad" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.lazyLoad")
        }
        ), "showMenuByLongpress" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.showMenuByLongpress")
        }
        ), "loadingIcon" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.loadingIcon")
        }
        ), "errorIcon" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.errorIcon")
        }
        ), "showLoading" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.showLoading")
        }
        ), "showError" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.showError")
        }
        ), "fade" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.fade")
        }
        ), "webp" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__41.getBoolean("image.webp")
        }
        ), "duration" to _uM("type" to "Number", "default" to fun(): Number? {
            return default__41.getNumber("image.duration")
        }
        ), "bgColor" to _uM("type" to "String", "default" to fun(): String? {
            return default__41.getString("image.bgColor")
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "src",
            "mode",
            "width",
            "height",
            "shape",
            "radius",
            "lazyLoad",
            "showMenuByLongpress",
            "loadingIcon",
            "errorIcon",
            "showLoading",
            "showError",
            "fade",
            "webp",
            "duration",
            "bgColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
