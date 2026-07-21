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
open class GenUniModulesUviewUltraComponentsUpCountToUpCountTo : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var startVal: Any by `$props`
    open var endVal: Any by `$props`
    open var duration: Any by `$props`
    open var autoplay: Boolean by `$props`
    open var decimals: Any by `$props`
    open var useEasing: Boolean by `$props`
    open var decimal: String by `$props`
    open var color: String by `$props`
    open var fontSize: Any by `$props`
    open var bold: Boolean by `$props`
    open var separator: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var start: () -> Unit
        get() {
            return unref(this.`$exposed`["start"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "start", value)
        }
    open var stop: () -> Unit
        get() {
            return unref(this.`$exposed`["stop"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "stop", value)
        }
    open var resume: () -> Unit
        get() {
            return unref(this.`$exposed`["resume"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "resume", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCountToUpCountTo, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCountToUpCountTo
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            var localStartVal = ref<Number>(0)
            var displayValue = ref<String>("")
            var printVal = ref<Number?>(null)
            var paused = ref<Boolean>(false)
            var localDuration = ref<Number>(0)
            var startTime = ref<Number?>(null)
            var timestamp = ref<Number?>(null)
            var remaining = ref<Number?>(null)
            var rAF = ref<Number>(0)
            var lastTime = ref<Number>(0)
            val countDown: Boolean = parseInt(props.startVal.toString()) > parseInt(props.endVal.toString())
            fun gen_easingFn_fn(t: Number, b: Number, c: Number, d: Number): Number {
                return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
            }
            val easingFn = ::gen_easingFn_fn
            fun gen_formatNumber_fn(reassignedNum: Any): String {
                var num = reassignedNum
                num = parseFloat(num.toString())
                var numStr: String = num.toFixed(parseFloat(props.decimals.toString())).toString()
                val x: UTSArray<String> = numStr.split(".")
                var x1 = x[0]
                val x2 = if (x.length > 1) {
                    props.decimals.toString() + x[1]
                } else {
                    ""
                }
                val rgx = UTSRegExp("(\\d+)(\\d{3})", "")
                if (props.separator != "" && !isNumber(props.separator)) {
                    while(rgx.test(x1)){
                        x1 = x1.replace(rgx, "\$1" + props.separator + "\$2")
                    }
                }
                return x1 + x2
            }
            val formatNumber = ::gen_formatNumber_fn
            fun gen_animateCount_fn(timestamp: Number) {
                if (startTime.value == null) {
                    startTime.value = timestamp
                }
                val progress = timestamp - startTime.value!!
                remaining.value = localDuration.value - progress
                if (props.useEasing) {
                    if (countDown) {
                        printVal.value = localStartVal.value - easingFn(progress, 0, localStartVal.value - parseInt(props.endVal.toString()), localDuration.value)
                    } else {
                        printVal.value = localStartVal.value + (parseInt(props.endVal.toString()) - localStartVal.value) * (progress / localDuration.value)
                    }
                } else {
                    if (countDown) {
                        printVal.value = localStartVal.value - (localStartVal.value - parseInt(props.endVal.toString())) * (progress / localDuration.value)
                    } else {
                        printVal.value = localStartVal.value + (parseInt(props.endVal.toString()) - localStartVal.value) * (progress / localDuration.value)
                    }
                }
                if (countDown) {
                    printVal.value = if (printVal.value!! < parseInt(props.endVal.toString())) {
                        parseInt(props.endVal.toString())
                    } else {
                        printVal.value
                    }
                } else {
                    printVal.value = if (printVal.value!! > parseInt(props.endVal.toString())) {
                        parseInt(props.endVal.toString())
                    } else {
                        printVal.value
                    }
                }
                displayValue.value = formatNumber(printVal.value!!)
                if (progress < localDuration.value) {
                    val currTime = Date().getTime()
                    val timeToCall = Math.max(0, 16 - (currTime - lastTime.value))
                    rAF.value = setTimeout(fun(){
                        gen_animateCount_fn(currTime + timeToCall)
                    }, timeToCall)
                    lastTime.value = currTime + timeToCall
                } else {
                    displayValue.value = formatNumber(parseInt(props.endVal.toString()))
                    emit("end")
                }
            }
            val animateCount = ::gen_animateCount_fn
            fun gen_cancelAnimationFrame_fn(id: Number) {
                clearTimeout(id)
            }
            val cancelAnimationFrame = ::gen_cancelAnimationFrame_fn
            fun gen_start_fn() {
                localStartVal.value = parseInt(props.startVal.toString())
                startTime.value = null
                localDuration.value = parseInt(props.duration.toString())
                paused.value = false
                val currTime = Date().getTime()
                lastTime.value = currTime
                rAF.value = setTimeout(fun(){
                    animateCount(currTime)
                }
                , 0)
            }
            val start = ::gen_start_fn
            fun gen_stop_fn() {
                animateCount(rAF.value)
            }
            val stop = ::gen_stop_fn
            fun gen_resume_fn() {
                if (remaining.value == null) {
                    return
                }
                startTime.value = 0
                localDuration.value = remaining.value!!
                localStartVal.value = printVal.value as Number
                val currTime = Date().getTime()
                rAF.value = setTimeout(fun(){
                    animateCount(currTime)
                }
                , 0)
            }
            val resume = ::gen_resume_fn
            fun gen_reStart_fn() {
                if (paused.value) {
                    resume()
                    paused.value = false
                } else {
                    stop()
                    paused.value = true
                }
            }
            val reStart = ::gen_reStart_fn
            fun gen_reset_fn() {
                startTime.value = null
                if (rAF.value != null) {
                    cancelAnimationFrame(rAF.value)
                }
                displayValue.value = formatNumber(props.startVal.toString())
            }
            val reset = ::gen_reset_fn
            fun gen_isNumber_fn(kVal: String): Boolean {
                return !isNaN(parseFloat(kVal))
            }
            val isNumber = ::gen_isNumber_fn
            localStartVal.value = parseInt(props.startVal.toString())
            displayValue.value = formatNumber(props.startVal.toString())
            localDuration.value = parseInt(props.duration.toString())
            if (props.autoplay) {
                start()
            }
            fun gen_destroyed_fn() {
                if (rAF.value != null) {
                    clearTimeout(rAF.value)
                }
            }
            val destroyed = ::gen_destroyed_fn
            __expose(_uM("start" to start, "stop" to stop, "resume" to resume))
            return fun(): Any? {
                return _cE("text", _uM("class" to "up-count-num", "style" to _nS(_uM("fontSize" to _ctx.`$up`.addUnit(_ctx.fontSize), "fontWeight" to if (isTruthy(_ctx.bold)) {
                    "bold"
                } else {
                    "normal"
                }
                , "color" to _ctx.color))), _tD(unref(displayValue)), 5)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-count-num" to _pS(_uM("display" to "flex", "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("end" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "startVal" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__57.getNumber("countTo.startVal")), "endVal" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__57.getNumber("countTo.endVal")), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__57.getNumber("countTo.duration")), "autoplay" to _uM("type" to "Boolean", "default" to default__57.getBoolean("countTo.autoplay")), "decimals" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__57.getNumber("countTo.decimals")), "useEasing" to _uM("type" to "Boolean", "default" to default__57.getBoolean("countTo.useEasing")), "decimal" to _uM("type" to "String", "default" to default__57.getString("countTo.decimal")), "color" to _uM("type" to "String", "default" to default__57.getString("countTo.color")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__57.getNumber("countTo.fontSize")), "bold" to _uM("type" to "Boolean", "default" to default__57.getBoolean("countTo.bold")), "separator" to _uM("type" to "String", "default" to default__57.getString("countTo.separator"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "startVal",
            "endVal",
            "duration",
            "autoplay",
            "decimals",
            "useEasing",
            "decimal",
            "color",
            "fontSize",
            "bold",
            "separator"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
