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
open class GenUniModulesUviewUltraComponentsUpTransitionUpTransition : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var mode: String by `$props`
    open var duration: Any by `$props`
    open var timingFunction: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTransitionUpTransition) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTransitionUpTransition
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val inited = ref<Boolean>(false)
            val viewStyle = ref<UTSJSONObject>(_uO())
            val status = ref<String>("")
            val transitionEnded = ref<Boolean>(false)
            val display = ref<Boolean>(false)
            val classes = ref<String>("")
            val getClassNames = fun(name: String): UTSJSONObject {
                return _uO("enter" to ("up-" + name + "-enter up-" + name + "-enter-active"), "enter-to" to ("up-" + name + "-enter-to up-" + name + "-enter-active"), "leave" to ("up-" + name + "-leave up-" + name + "-leave-active"), "leave-to" to ("up-" + name + "-leave-to up-" + name + "-leave-active"))
            }
            val getModeStyle = fun(mode: String, state: String): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (state == "enter" || state == "leave-to") {
                    if (mode == "fade") {
                        style["opacity"] = 0
                    } else if (mode == "zoom") {
                        style["transform"] = "scale(0.95)"
                    } else if (mode == "fade-zoom") {
                        style["transform"] = "scale(0.95)"
                        style["opacity"] = 0
                    } else if (mode == "fade-up") {
                        style["transform"] = "translateY(100%)"
                        style["opacity"] = 0
                    } else if (mode == "fade-down") {
                        style["transform"] = "translateY(-100%)"
                        style["opacity"] = 0
                    } else if (mode == "fade-left") {
                        style["transform"] = "translateX(-100%)"
                        style["opacity"] = 0
                    } else if (mode == "fade-right") {
                        style["transform"] = "translateX(100%)"
                        style["opacity"] = 0
                    } else if (mode == "slide-up") {
                        style["transform"] = "translateY(100%)"
                    } else if (mode == "slide-down") {
                        style["transform"] = "translateY(-100%)"
                    } else if (mode == "slide-left") {
                        style["transform"] = "translateX(-100%)"
                    } else if (mode == "slide-right") {
                        style["transform"] = "translateX(100%)"
                    }
                } else if (state == "enter-to" || state == "leave") {
                    if (mode == "fade") {
                        style["opacity"] = 1
                    } else if (mode == "zoom") {
                        style["transform"] = "scale(1)"
                    } else if (mode == "fade-zoom") {
                        style["transform"] = "scale(1)"
                        style["opacity"] = 1
                    } else if (mode == "fade-up" || mode == "fade-down" || mode == "fade-left" || mode == "fade-right" || mode == "slide-up" || mode == "slide-down" || mode == "slide-left" || mode == "slide-right") {
                        style["transform"] = "translate(0, 0)"
                        if (mode.startsWith("fade")) {
                            style["opacity"] = 1
                        }
                    }
                }
                return style
            }
            val mergeStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val modeVal = if (props.mode != "") {
                    props.mode
                } else {
                    "fade"
                }
                val durationVal = props.duration
                val duration = if (durationVal != null) {
                    durationVal.toString()
                } else {
                    "0"
                }
                var transitionProp = "all"
                if (modeVal == "fade") {
                    transitionProp = "opacity"
                } else if (modeVal.startsWith("slide")) {
                    transitionProp = "transform"
                } else if (modeVal.startsWith("fade-zoom") || modeVal == "zoom" || modeVal.startsWith("fade-up") || modeVal.startsWith("fade-down") || modeVal.startsWith("fade-left") || modeVal.startsWith("fade-right")) {
                    transitionProp = "transform, opacity"
                }
                return UTSJSONObject.assign<UTSJSONObject>(_uO("transitionProperty" to transitionProp, "transitionDuration" to ("" + duration + "ms"), "transitionTimingFunction" to props.timingFunction), addStyle(props.customStyle) as UTSJSONObject, viewStyle.value) as UTSJSONObject
            }
            )
            fun gen_clickHandler_fn() {
                emit("click")
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_onTransitionEnd_fn() {
                if (transitionEnded.value) {
                    return
                }
                transitionEnded.value = true
                emit(if (status.value == "leave") {
                    "afterLeave"
                } else {
                    "afterEnter"
                }
                )
                if (!props.show && display.value) {
                    display.value = false
                    inited.value = false
                }
            }
            val onTransitionEnd = ::gen_onTransitionEnd_fn
            fun gen_vueEnter_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        val classNames = getClassNames(props.mode)
                        status.value = "enter"
                        emit("beforeEnter")
                        inited.value = true
                        display.value = true
                        classes.value = classNames["enter"]?.toString() ?: ""
                        viewStyle.value = getModeStyle(props.mode, "enter")
                        await(nextTick())
                        await(sleep(20))
                        emit("enter")
                        transitionEnded.value = false
                        emit("afterEnter")
                        classes.value = classNames["enter-to"]?.toString() ?: ""
                        viewStyle.value = getModeStyle(props.mode, "enter-to")
                })
            }
            val vueEnter = ::gen_vueEnter_fn
            fun gen_vueLeave_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend w1@{
                        if (!display.value) {
                            return@w1
                        }
                        val classNames = getClassNames(props.mode)
                        status.value = "leave"
                        emit("beforeLeave")
                        classes.value = classNames["leave"]?.toString() ?: ""
                        viewStyle.value = getModeStyle(props.mode, "leave")
                        await(nextTick())
                        transitionEnded.value = false
                        emit("leave")
                        setTimeout(onTransitionEnd, parseInt(if (props.duration != null) {
                            props.duration.toString()
                        } else {
                            "0"
                        }
                        ))
                        classes.value = classNames["leave-to"]?.toString() ?: ""
                        viewStyle.value = getModeStyle(props.mode, "leave-to")
                })
            }
            val vueLeave = ::gen_vueLeave_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newVal: Boolean){
                if (newVal) {
                    vueEnter()
                } else {
                    vueLeave()
                }
            }
            , WatchOptions(immediate = true))
            return fun(): Any? {
                return if (isTrue(inited.value)) {
                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                        "weapp-tw-border up-transition",
                        classes.value
                    )), "ref" to "up-transition", "onClick" to clickHandler, "style" to _nS(mergeStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 6)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-transition"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-fade-enter-active" to _pS(_uM("transitionProperty" to "opacity")), "up-fade-leave-active" to _pS(_uM("transitionProperty" to "opacity")), "up-fade-enter" to _pS(_uM("opacity" to 0)), "up-fade-leave-to" to _pS(_uM("opacity" to 0)), "up-fade-zoom-enter" to _pS(_uM("transform" to "scale(0.95)", "opacity" to 0)), "up-fade-zoom-leave-to" to _pS(_uM("transform" to "scale(0.95)", "opacity" to 0)), "up-fade-zoom-enter-active" to _pS(_uM("transitionProperty" to "transform,opacity")), "up-fade-zoom-leave-active" to _pS(_uM("transitionProperty" to "transform,opacity")), "up-fade-down-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-down-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-left-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-left-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-right-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-right-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-enter" to _pS(_uM("transform" to "translateY(100%)", "opacity" to 0)), "up-fade-up-leave-to" to _pS(_uM("transform" to "translateY(100%)", "opacity" to 0)), "up-fade-down-enter" to _pS(_uM("transform" to "translateY(-100%)", "opacity" to 0)), "up-fade-down-leave-to" to _pS(_uM("transform" to "translateY(-100%)", "opacity" to 0)), "up-fade-left-enter" to _pS(_uM("transform" to "translateX(-100%)", "opacity" to 0)), "up-fade-left-leave-to" to _pS(_uM("transform" to "translateX(-100%)", "opacity" to 0)), "up-fade-right-enter" to _pS(_uM("transform" to "translateX(100%)", "opacity" to 0)), "up-fade-right-leave-to" to _pS(_uM("transform" to "translateX(100%)", "opacity" to 0)), "up-slide-down-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-down-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-left-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-left-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-right-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-right-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-enter" to _pS(_uM("transform" to "translateY(100%)")), "up-slide-up-leave-to" to _pS(_uM("transform" to "translateY(100%)")), "up-slide-down-enter" to _pS(_uM("transform" to "translateY(-100%)")), "up-slide-down-leave-to" to _pS(_uM("transform" to "translateY(-100%)")), "up-slide-left-enter" to _pS(_uM("transform" to "translateX(-100%)")), "up-slide-left-leave-to" to _pS(_uM("transform" to "translateX(-100%)")), "up-slide-right-enter" to _pS(_uM("transform" to "translateX(100%)")), "up-slide-right-leave-to" to _pS(_uM("transform" to "translateX(100%)")), "up-zoom-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-zoom-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-zoom-enter" to _pS(_uM("transform" to "scale(0.95)")), "up-zoom-leave-to" to _pS(_uM("transform" to "scale(0.95)")), "up-fade-enter-to" to _pS(_uM("opacity" to 1)), "up-fade-leave" to _pS(_uM("opacity" to 1)), "up-fade-zoom-enter-to" to _pS(_uM("transform" to "scale(1)", "opacity" to 1)), "up-fade-zoom-leave" to _pS(_uM("transform" to "scale(1)", "opacity" to 1)), "up-zoom-enter-to" to _pS(_uM("transform" to "scale(1)")), "up-zoom-leave" to _pS(_uM("transform" to "scale(1)")), "up-slide-up-enter-to" to _pS(_uM("transform" to "translateY(0)")), "up-slide-up-leave" to _pS(_uM("transform" to "translateY(0)")), "up-slide-down-enter-to" to _pS(_uM("transform" to "translateY(0)")), "up-slide-down-leave" to _pS(_uM("transform" to "translateY(0)")), "up-slide-left-enter-to" to _pS(_uM("transform" to "translateX(0)")), "up-slide-left-leave" to _pS(_uM("transform" to "translateX(0)")), "up-slide-right-enter-to" to _pS(_uM("transform" to "translateX(0)")), "up-slide-right-leave" to _pS(_uM("transform" to "translateX(0)")), "up-fade-up-enter-to" to _pS(_uM("transform" to "translateY(0)", "opacity" to 1)), "up-fade-up-leave" to _pS(_uM("transform" to "translateY(0)", "opacity" to 1)), "up-fade-down-enter-to" to _pS(_uM("transform" to "translateY(0)", "opacity" to 1)), "up-fade-down-leave" to _pS(_uM("transform" to "translateY(0)", "opacity" to 1)), "up-fade-left-enter-to" to _pS(_uM("transform" to "translateX(0)", "opacity" to 1)), "up-fade-left-leave" to _pS(_uM("transform" to "translateX(0)", "opacity" to 1)), "up-fade-right-enter-to" to _pS(_uM("transform" to "translateX(0)", "opacity" to 1)), "up-fade-right-leave" to _pS(_uM("transform" to "translateX(0)", "opacity" to 1)), "@TRANSITION" to _uM("up-fade-enter-active" to _uM("property" to "opacity"), "up-fade-leave-active" to _uM("property" to "opacity"), "up-fade-zoom-enter-active" to _uM("property" to "transform,opacity"), "up-fade-zoom-leave-active" to _uM("property" to "transform,opacity"), "up-fade-down-enter-active" to _uM("property" to "opacity,transform"), "up-fade-down-leave-active" to _uM("property" to "opacity,transform"), "up-fade-left-enter-active" to _uM("property" to "opacity,transform"), "up-fade-left-leave-active" to _uM("property" to "opacity,transform"), "up-fade-right-enter-active" to _uM("property" to "opacity,transform"), "up-fade-right-leave-active" to _uM("property" to "opacity,transform"), "up-fade-up-enter-active" to _uM("property" to "opacity,transform"), "up-fade-up-leave-active" to _uM("property" to "opacity,transform"), "up-slide-down-enter-active" to _uM("property" to "transform"), "up-slide-down-leave-active" to _uM("property" to "transform"), "up-slide-left-enter-active" to _uM("property" to "transform"), "up-slide-left-leave-active" to _uM("property" to "transform"), "up-slide-right-enter-active" to _uM("property" to "transform"), "up-slide-right-leave-active" to _uM("property" to "transform"), "up-slide-up-enter-active" to _uM("property" to "transform"), "up-slide-up-leave-active" to _uM("property" to "transform"), "up-zoom-enter-active" to _uM("property" to "transform"), "up-zoom-leave-active" to _uM("property" to "transform")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "beforeEnter" to null, "enter" to null, "afterEnter" to null, "beforeLeave" to null, "leave" to null, "afterLeave" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to false), "mode" to _uM("type" to "String", "default" to "fade"), "duration" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to "300"), "timingFunction" to _uM("type" to "String", "default" to "ease-out"), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "show",
            "mode",
            "duration",
            "timingFunction",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
