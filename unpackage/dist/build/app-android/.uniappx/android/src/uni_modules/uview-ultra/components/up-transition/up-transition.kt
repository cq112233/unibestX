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
open class GenUniModulesUviewUltraComponentsUpTransitionUpTransition : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(newVal: Boolean): Unit {
            if (newVal) {
                this.vueEnter()
            } else {
                this.vueLeave()
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return if (isTrue(_ctx.inited)) {
            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                "up-transition",
                _ctx.classes
            )), "ref" to "up-transition", "onClick" to _ctx.clickHandler, "style" to _nS(_uA(
                _ctx.mergeStyle
            ))), _uA(
                renderSlot(_ctx.`$slots`, "default")
            ), 14, _uA(
                "onClick"
            ))
        } else {
            _cC("v-if", true)
        }
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var mode: String by `$props`
    open var duration: Any by `$props`
    open var timingFunction: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var inited: Boolean by `$data`
    open var viewStyle: UTSJSONObject by `$data`
    open var status: String by `$data`
    open var transitionEnded: Boolean by `$data`
    open var display: Boolean by `$data`
    open var classes: String by `$data`
    open var mergeStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "inited" to false, "viewStyle" to _uO(), "status" to "", "transitionEnded" to false, "display" to false, "classes" to "", "mergeStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val _this = this
            val viewStyle = _this.viewStyle
            val customStyle = _this.customStyle
            val modeVal = (this.`$props`["mode"] ?: "fade").toString()
            val durationVal = this.`$props`["duration"]
            val duration = if (durationVal != null) {
                durationVal.toString()
            } else {
                "0"
            }
            var transitionProp = "all"
            if (modeVal === "fade") {
                transitionProp = "opacity"
            } else if (modeVal.startsWith("slide")) {
                transitionProp = "transform"
            } else if (modeVal.startsWith("fade-zoom") || modeVal === "zoom" || modeVal.startsWith("fade-up") || modeVal.startsWith("fade-down") || modeVal.startsWith("fade-left") || modeVal.startsWith("fade-right")) {
                transitionProp = "transform, opacity"
            }
            return UTSJSONObject.assign(_uO("transitionProperty" to transitionProp, "transitionDuration" to ("" + duration + "ms"), "transitionTimingFunction" to this.timingFunction as String), addStyle(customStyle) as UTSJSONObject, viewStyle)
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
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        this.`$emit`("click")
    }
    open var vueEnter = ::gen_vueEnter_fn
    open fun gen_vueEnter_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend {
                val classNames = getClassNames(this.mode)
                this.status = "enter"
                this.`$emit`("beforeEnter")
                this.inited = true
                this.display = true
                this.classes = classNames["enter"]!!!!.toString()
                this.viewStyle = getModeStyle(this.mode, "enter")
                await(nextTick())
                await(sleep(20))
                this.`$emit`("enter")
                this.transitionEnded = false
                this.`$emit`("afterEnter")
                this.classes = classNames["enter-to"]!!!!.toString()
                this.viewStyle = getModeStyle(this.mode, "enter-to")
        })
    }
    open var vueLeave = ::gen_vueLeave_fn
    open fun gen_vueLeave_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend w@{
                if (!this.display) {
                    return@w
                }
                val classNames = getClassNames(this.mode)
                this.status = "leave"
                this.`$emit`("beforeLeave")
                this.classes = classNames["leave"]!!!!.toString()
                this.viewStyle = getModeStyle(this.mode, "leave")
                await(nextTick())
                this.transitionEnded = false
                this.`$emit`("leave")
                setTimeout(this.onTransitionEnd, parseInt(if (this.duration != null) {
                    this.`$props`["duration"].toString()
                } else {
                    "0"
                }
                ))
                this.classes = classNames["leave-to"]!!!!.toString()
                this.viewStyle = getModeStyle(this.mode, "leave-to")
        })
    }
    open var onTransitionEnd = ::gen_onTransitionEnd_fn
    open fun gen_onTransitionEnd_fn() {
        if (this.transitionEnded) {
            return
        }
        this.transitionEnded = true
        this.`$emit`(if (this.status === "leave") {
            "afterLeave"
        } else {
            "afterEnter"
        }
        )
        if (!isTruthy(this.show) && this.display) {
            this.display = false
            this.inited = false
        }
    }
    companion object {
        var name = "up-transition"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-fade-enter-active" to _pS(_uM("transitionProperty" to "opacity")), "up-fade-leave-active" to _pS(_uM("transitionProperty" to "opacity")), "up-fade-enter" to _pS(_uM("opacity" to 0)), "up-fade-leave-to" to _pS(_uM("opacity" to 0)), "up-fade-zoom-enter" to _pS(_uM("transform" to "scale(0.95)", "opacity" to 0)), "up-fade-zoom-leave-to" to _pS(_uM("transform" to "scale(0.95)", "opacity" to 0)), "up-fade-zoom-enter-active" to _pS(_uM("transitionProperty" to "transform,opacity")), "up-fade-zoom-leave-active" to _pS(_uM("transitionProperty" to "transform,opacity")), "up-fade-down-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-down-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-left-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-left-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-right-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-right-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-enter-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-leave-active" to _pS(_uM("transitionProperty" to "opacity,transform")), "up-fade-up-enter" to _pS(_uM("transform" to "translateY(100%)", "opacity" to 0)), "up-fade-up-leave-to" to _pS(_uM("transform" to "translateY(100%)", "opacity" to 0)), "up-fade-down-enter" to _pS(_uM("transform" to "translateY(-100%)", "opacity" to 0)), "up-fade-down-leave-to" to _pS(_uM("transform" to "translateY(-100%)", "opacity" to 0)), "up-fade-left-enter" to _pS(_uM("transform" to "translateX(-100%)", "opacity" to 0)), "up-fade-left-leave-to" to _pS(_uM("transform" to "translateX(-100%)", "opacity" to 0)), "up-fade-right-enter" to _pS(_uM("transform" to "translateX(100%)", "opacity" to 0)), "up-fade-right-leave-to" to _pS(_uM("transform" to "translateX(100%)", "opacity" to 0)), "up-slide-down-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-down-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-left-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-left-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-right-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-right-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-slide-up-enter" to _pS(_uM("transform" to "translateY(100%)")), "up-slide-up-leave-to" to _pS(_uM("transform" to "translateY(100%)")), "up-slide-down-enter" to _pS(_uM("transform" to "translateY(-100%)")), "up-slide-down-leave-to" to _pS(_uM("transform" to "translateY(-100%)")), "up-slide-left-enter" to _pS(_uM("transform" to "translateX(-100%)")), "up-slide-left-leave-to" to _pS(_uM("transform" to "translateX(-100%)")), "up-slide-right-enter" to _pS(_uM("transform" to "translateX(100%)")), "up-slide-right-leave-to" to _pS(_uM("transform" to "translateX(100%)")), "up-zoom-enter-active" to _pS(_uM("transitionProperty" to "transform")), "up-zoom-leave-active" to _pS(_uM("transitionProperty" to "transform")), "up-zoom-enter" to _pS(_uM("transform" to "scale(0.95)")), "up-zoom-leave-to" to _pS(_uM("transform" to "scale(0.95)")), "@TRANSITION" to _uM("up-fade-enter-active" to _uM("property" to "opacity"), "up-fade-leave-active" to _uM("property" to "opacity"), "up-fade-zoom-enter-active" to _uM("property" to "transform,opacity"), "up-fade-zoom-leave-active" to _uM("property" to "transform,opacity"), "up-fade-down-enter-active" to _uM("property" to "opacity,transform"), "up-fade-down-leave-active" to _uM("property" to "opacity,transform"), "up-fade-left-enter-active" to _uM("property" to "opacity,transform"), "up-fade-left-leave-active" to _uM("property" to "opacity,transform"), "up-fade-right-enter-active" to _uM("property" to "opacity,transform"), "up-fade-right-leave-active" to _uM("property" to "opacity,transform"), "up-fade-up-enter-active" to _uM("property" to "opacity,transform"), "up-fade-up-leave-active" to _uM("property" to "opacity,transform"), "up-slide-down-enter-active" to _uM("property" to "transform"), "up-slide-down-leave-active" to _uM("property" to "transform"), "up-slide-left-enter-active" to _uM("property" to "transform"), "up-slide-left-leave-active" to _uM("property" to "transform"), "up-slide-right-enter-active" to _uM("property" to "transform"), "up-slide-right-leave-active" to _uM("property" to "transform"), "up-slide-up-enter-active" to _uM("property" to "transform"), "up-slide-up-leave-active" to _uM("property" to "transform"), "up-zoom-enter-active" to _uM("property" to "transform"), "up-zoom-leave-active" to _uM("property" to "transform")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "beforeEnter" to null, "enter" to null, "afterEnter" to null, "beforeLeave" to null, "leave" to null, "afterLeave" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to crtProp__2["show"]), "mode" to _uM("type" to "String", "default" to crtProp__2["mode"]), "duration" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to crtProp__2["duration"]), "timingFunction" to _uM("type" to "String", "default" to crtProp__2["timingFunction"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "mode",
            "duration",
            "timingFunction"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
