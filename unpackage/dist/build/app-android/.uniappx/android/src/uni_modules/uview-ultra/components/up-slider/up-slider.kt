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
open class GenUniModulesUviewUltraComponentsUpSliderUpSlider : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var min: Any by `$props`
    open var max: Any by `$props`
    open var step: Any by `$props`
    open var modelValue: Number by `$props`
    open var isRange: Boolean by `$props`
    open var rangeValue: UTSArray<Number> by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var blockSize: Any by `$props`
    open var blockColor: String by `$props`
    open var blockStyle: Any by `$props`
    open var disabled: Boolean by `$props`
    open var height: Any by `$props`
    open var showValue: Boolean by `$props`
    open var useNative: Boolean by `$props`
    open var innerStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSliderUpSlider) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSliderUpSlider
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val startX = ref<Number>(0)
            val status = ref<String>("end")
            val newValue = ref<Number>(0)
            val distanceX = ref<Number>(0)
            val startValue0 = ref<Number>(0)
            val startValue = ref<Number>(0)
            val barStyle0 = ref<barStyleType>(barStyleType(width = "0px"))
            val barStyle = ref<barStyleType>(barStyleType(width = "0px", transition = ""))
            val sliderRect = ref<sliderRectType>(sliderRectType(left = 0, width = 0))
            val innerStyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style = (props.innerStyle ?: _uO()) as UTSJSONObject
                style["height"] = if ((props.isRange && props.showValue)) {
                    (parseFloat(getPx(props.blockSize)) + 24).toString(10) + "px"
                } else {
                    getPx(props.blockSize) + "px"
                }
                return style
            }
            )
            val sliderCustomStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val computedBlockSize = computed(fun(): Number {
                return parseFloat(getPx(props.blockSize))
            }
            )
            val baseStyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("height" to props.height, "backgroundColor" to props.inactiveColor)
            }
            )
            val rangeGap0StyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to barStyle0.value.width, "transition" to (barStyle0.value.transition ?: ""), "height" to props.height, "marginTop" to ("-" + props.height), "backgroundColor" to props.inactiveColor)
            }
            )
            val blockStyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.blockStyle != null) {
                    UTSJSONObject.assign(style, props.blockStyle as UTSJSONObject)
                }
                style["height"] = getPx(props.blockSize, true)
                style["width"] = getPx(props.blockSize, true)
                style["backgroundColor"] = props.blockColor
                return style
            }
            )
            val gapStyleCpu = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["width"] = barStyle.value.width
                style["transition"] = barStyle.value.transition ?: ""
                style["height"] = props.height
                style["marginTop"] = "-" + props.height
                if (props.activeColor != "#2979ff") {
                    style["backgroundColor"] = props.activeColor
                }
                return style
            }
            )
            val btnWrapStyle0 = computed(fun(): UTSJSONObject {
                val leftVal = (parseFloat(getPx(barStyle0.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString(10) + "px"
                return _uO("left" to leftVal)
            }
            )
            val btnWrapStyle1 = computed(fun(): UTSJSONObject {
                val leftVal = (parseFloat(getPx(barStyle.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString(10) + "px"
                return _uO("left" to leftVal)
            }
            )
            fun format(value: Number, index: Number = 1): Number {
                val minVal = parseFloat(props.min.toString())
                val maxVal = parseFloat(props.max.toString())
                val stepVal = parseFloat(props.step.toString())
                if (props.isRange) {
                    when (index) {
                        0 -> 
                            return Math.round(Math.max(minVal, Math.min(value, parseFloat(props.rangeValue[1].toString(10)) - stepVal, maxVal)) / stepVal) * stepVal
                        1 -> 
                            return Math.round(Math.max(minVal, parseFloat(props.rangeValue[0].toString(10)) + stepVal, Math.min(value, maxVal)) / stepVal) * stepVal
                        else -> 
                            {}
                    }
                } else {
                    return Math.round(Math.max(minVal, Math.min(value, maxVal)) / stepVal) * stepVal
                }
                return 0
            }
            fun updateValue(value: Number, drag: Boolean, index: Number = 1): Any {
                var valueFormat: Number = format(value, index)
                val maxVal = parseFloat(props.max.toString())
                val minVal = parseFloat(props.min.toString())
                if (valueFormat > maxVal) {
                    valueFormat = maxVal
                }
                val width = Math.min((valueFormat - minVal) / (maxVal - minVal) * sliderRect.value.width, sliderRect.value.width)
                val bStyle = barStyleType(width = width.toString(10) + "px", transition = if (drag) {
                    "none"
                } else {
                    ""
                }
                )
                if (props.isRange) {
                    props.rangeValue[index] = valueFormat
                    emit("update:modelValue", props.rangeValue)
                } else {
                    emit("update:modelValue", valueFormat)
                }
                when (index) {
                    0 -> 
                        barStyle0.value.width = bStyle.width
                    1 -> 
                        barStyle.value.width = bStyle.width
                    else -> 
                        {}
                }
                return if (props.isRange) {
                    props.rangeValue
                } else {
                    valueFormat
                }
            }
            fun gen_init_fn() {
                if (props.isRange) {
                    updateValue(parseFloat(props.rangeValue[0].toString(10)), false, 0)
                    updateValue(parseFloat(props.rangeValue[1].toString(10)), false, 1)
                } else {
                    updateValue(props.modelValue, false, 1)
                }
            }
            val init = ::gen_init_fn
            fun gen_changingHandler_fn(e: UniSliderChangeEvent) {
                val value = e.detail.value
                emit("update:modelValue", value)
                emit("changing", value)
            }
            val changingHandler = ::gen_changingHandler_fn
            fun gen_changeHandler_fn(e: UniSliderChangeEvent) {
                val value = e.detail.value
                emit("update:modelValue", value)
                emit("change", value)
            }
            val changeHandler = ::gen_changeHandler_fn
            fun onTouchStart(e: Any, index: Number = 1) {
                val event = e as UniTouchEvent
                if (props.disabled) {
                    return
                }
                startX.value = 0
                val touches = event.touches[0]
                startX.value = touches.clientX
                if (props.isRange) {
                    startValue0.value = format(parseFloat(props.rangeValue[0].toString(10)), 0)
                    startValue.value = format(parseFloat(props.rangeValue[1].toString(10)), 1)
                } else {
                    startValue.value = format(props.modelValue)
                }
                status.value = "start"
                var clientX = touches.clientX
                distanceX.value = clientX - sliderRect.value.left
                val minVal = parseFloat(props.min.toString())
                val maxVal = parseFloat(props.max.toString())
                newValue.value = ((distanceX.value / sliderRect.value.width) * (maxVal - minVal)) + minVal
                status.value = "moving"
                val crtFmt = updateValue(newValue.value, true, index)
                emit("changing", crtFmt)
            }
            fun onTouchMove(e: Any, index: Number = 1) {
                val event = e as UniTouchEvent
                if (props.disabled) {
                    return
                }
                if (status.value == "start") {
                    emit("start")
                }
                val touches = event.touches[0]
                var clientX = touches.clientX
                distanceX.value = clientX - sliderRect.value.left
                val minVal = parseFloat(props.min.toString())
                val maxVal = parseFloat(props.max.toString())
                newValue.value = ((distanceX.value / sliderRect.value.width) * (maxVal - minVal)) + minVal
                status.value = "moving"
                val crtFmt = updateValue(newValue.value, true, index)
                emit("changing", crtFmt)
            }
            fun onTouchEnd(e: Any, index: Number = 1) {
                if (props.disabled) {
                    return
                }
                if (status.value === "moving") {
                    val crtFmt = updateValue(newValue.value, false, index)
                    emit("change", crtFmt)
                }
                status.value = "end"
            }
            fun onTouchStart2(e: Any, index: Number = 1) {}
            fun onTouchMove2(e: Any, index: Number = 1) {}
            fun onTouchEnd2(e: Any, index: Number = 1) {}
            fun gen_onClick_fn(event: UniPointerEvent) {
                if (props.disabled) {
                    return
                }
                val clientX = event.x - sliderRect.value.left
                val minVal = parseFloat(props.min.toString())
                val maxVal = parseFloat(props.max.toString())
                newValue.value = ((clientX / sliderRect.value.width) * (maxVal - minVal)) + minVal
                updateValue(newValue.value, false, 1)
            }
            val onClick = ::gen_onClick_fn
            watch(fun(): Number {
                return props.modelValue
            }
            , fun(n: Number){
                if (status.value == "end") {
                    val crtFmt = updateValue(props.modelValue, false, 1)
                    emit("change", crtFmt)
                }
            }
            )
            watch(fun(): UTSArray<Number> {
                return props.rangeValue
            }
            , fun(n: UTSArray<Number>){
                if (status.value == "end") {
                    updateValue(n[0], false, 0)
                    updateValue(n[1], false, 1)
                    emit("change", n)
                }
            }
            , WatchOptions(deep = true))
            onMounted(fun(){
                if (!props.useNative) {
                    uni.UNIB120614.upGetRect(".up-slider__base", false, instance?.proxy).then(fun(rect: NodeInfo){
                        sliderRect.value.width = rect.width ?: 0
                        sliderRect.value.left = rect.left ?: 0
                        init()
                    }
                    )
                }
            }
            )
            return fun(): Any? {
                val _component_slider = resolveComponent("slider")
                return _cE("view", _uM("class" to "weapp-tw-border up-slider", "style" to _nS(sliderCustomStyle.value)), _uA(
                    if (isTrue(!_ctx.useNative || _ctx.isRange)) {
                        _cE(Fragment, _uM("key" to 0), _uA(
                            _cE("view", _uM("ref" to "upSliderInnerRef", "class" to _nC(_uA(
                                "weapp-tw-border up-slider-inner",
                                _uA(
                                    if (_ctx.disabled) {
                                        "up-slider--disabled"
                                    } else {
                                        ""
                                    }
                                )
                            )), "onClick" to onClick, "on:onTouchStart" to fun(`$event`: Any){
                                onTouchStart2(`$event`, 1)
                            }, "onTouchmove" to fun(`$event`: Any){
                                onTouchMove2(`$event`, 1)
                            }, "onTouchend" to fun(`$event`: Any){
                                onTouchEnd2(`$event`, 1)
                            }, "onTouchcancel" to fun(`$event`: Any){
                                onTouchEnd2(`$event`, 1)
                            }, "style" to _nS(innerStyleCpu.value)), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-slider__base", "style" to _nS(baseStyleCpu.value)), null, 4),
                                _cE("view", _uM("onClick" to onClick, "class" to "weapp-tw-border up-slider__gap", "style" to _nS(gapStyleCpu.value)), null, 4),
                                if (isTrue(_ctx.isRange)) {
                                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-slider__gap up-slider__gap-0", "style" to _nS(rangeGap0StyleCpu.value)), null, 4)
                                } else {
                                    _cC("v-if", true)
                                },
                                if (isTrue(_ctx.isRange && _ctx.showValue)) {
                                    _cE("text", _uM("key" to 1, "class" to "weapp-tw-border up-slider__show-range-value", "style" to _nS(btnWrapStyle0.value)), _tD(_ctx.rangeValue[0] ?: ""), 5)
                                } else {
                                    _cC("v-if", true)
                                },
                                if (isTrue(_ctx.isRange && _ctx.showValue)) {
                                    _cE("text", _uM("key" to 2, "class" to "weapp-tw-border up-slider__show-range-value", "style" to _nS(btnWrapStyle1.value)), _tD(_ctx.rangeValue[1] ?: ""), 5)
                                } else {
                                    _cC("v-if", true)
                                },
                                if (isTrue(_ctx.isRange)) {
                                    _cE("view", _uM("key" to 3, "class" to "weapp-tw-border up-slider__button-wrap up-slider__button-wrap-0", "onTouchstart" to fun(`$event`: Any){
                                        onTouchStart(`$event`, 0)
                                    }, "onTouchmove" to fun(`$event`: Any){
                                        onTouchMove(`$event`, 0)
                                    }, "onTouchend" to fun(`$event`: Any){
                                        onTouchEnd(`$event`, 0)
                                    }, "onTouchcancel" to fun(`$event`: Any){
                                        onTouchEnd(`$event`, 0)
                                    }, "style" to _nS(btnWrapStyle0.value)), _uA(
                                        if (_ctx.`$slots`["min"] != null) {
                                            renderSlot(_ctx.`$slots`, "min", _uM("key" to 0))
                                        } else {
                                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-slider__button", "style" to _nS(blockStyleCpu.value)), null, 4)
                                        }
                                    ), 44, _uA(
                                        "onTouchstart",
                                        "onTouchmove",
                                        "onTouchend",
                                        "onTouchcancel"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                },
                                _cE("view", _uM("class" to "weapp-tw-border up-slider__button-wrap", "onTouchstart" to fun(`$event`: Any){
                                    onTouchStart(`$event`, 1)
                                }, "onTouchmove" to fun(`$event`: Any){
                                    onTouchMove(`$event`, 1)
                                }, "onTouchend" to fun(`$event`: Any){
                                    onTouchEnd(`$event`, 1)
                                }, "onTouchcancel" to fun(`$event`: Any){
                                    onTouchEnd(`$event`, 1)
                                }, "style" to _nS(btnWrapStyle1.value)), _uA(
                                    if (isTrue(_ctx.isRange && _ctx.`$slots`["max"] != null)) {
                                        renderSlot(_ctx.`$slots`, "max", _uM("key" to 0))
                                    } else {
                                        if (_ctx.`$slots`["default"] != null) {
                                            renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
                                        } else {
                                            _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-slider__button", "style" to _nS(blockStyleCpu.value)), null, 4)
                                        }
                                    }
                                ), 44, _uA(
                                    "onTouchstart",
                                    "onTouchmove",
                                    "onTouchend",
                                    "onTouchcancel"
                                ))
                            ), 46, _uA(
                                "on:onTouchStart",
                                "onTouchmove",
                                "onTouchend",
                                "onTouchcancel"
                            )),
                            if (isTrue(_ctx.showValue && !_ctx.isRange)) {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-slider__show-value"), _tD(_ctx.modelValue), 1)
                            } else {
                                _cC("v-if", true)
                            }
                        ), 64)
                    } else {
                        _cV(_component_slider, _uM("key" to 1, "class" to "up-slider__native", "min" to parseFloat(_ctx.min.toString()), "max" to parseFloat(_ctx.max.toString()), "step" to parseFloat(_ctx.step.toString()), "value" to parseFloat(_ctx.modelValue.toString(10)), "activeColor" to _ctx.activeColor, "backgroundColor" to _ctx.inactiveColor, "blockSize" to computedBlockSize.value, "blockColor" to _ctx.blockColor, "showValue" to _ctx.showValue, "disabled" to _ctx.disabled, "onChanging" to changingHandler, "onChange" to changeHandler), null, 8, _uA(
                            "min",
                            "max",
                            "step",
                            "value",
                            "activeColor",
                            "backgroundColor",
                            "blockSize",
                            "blockColor",
                            "showValue",
                            "disabled"
                        ))
                    }
                ), 4)
            }
        }
        var name = "up-slider"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-slider" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-slider__native" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-slider-inner" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "position" to "relative", "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "paddingTop" to 10, "paddingRight" to 18, "paddingBottom" to 10, "paddingLeft" to 18, "justifyContent" to "center")), "up-slider__show-value" to _pS(_uM("marginTop" to 10, "marginRight" to 18, "marginBottom" to 10, "marginLeft" to 0)), "up-slider__show-range-value" to _pS(_uM("paddingTop" to 2, "fontSize" to 12, "lineHeight" to "12px", "position" to "absolute", "bottom" to 0)), "up-slider__base" to _pS(_uM("backgroundColor" to "#ebedf0")), "up-slider__gap" to _pS(_uM("position" to "relative", "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "transitionProperty" to "width", "transitionDuration" to "0.2s", "backgroundColor" to "var(--theme-color, #0957de)", "alignSelf" to "flex-start")), "up-slider__button" to _pS(_uM("width" to 24, "height" to 24, "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#d0d0d0", "borderRightColor" to "#d0d0d0", "borderBottomColor" to "#d0d0d0", "borderLeftColor" to "#d0d0d0", "backgroundColor" to "#ffffff")), "up-slider__button-wrap" to _pS(_uM("position" to "absolute")), "up-slider--disabled" to _pS(_uM("opacity" to 0.5)), "@TRANSITION" to _uM("up-slider__gap" to _uM("property" to "width", "duration" to "0.2s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("start" to null, "changing" to null, "change" to null, "update:modelValue" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "min" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 0), "max" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 100), "step" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 1), "modelValue" to _uM("type" to _uA(
            "Number"
        ), "default" to 0), "isRange" to _uM("type" to "Boolean", "default" to false), "rangeValue" to _uM("type" to "Array", "default" to fun(): UTSArray<Number> {
            return _uA<Number>(0, 0)
        }
        ), "activeColor" to _uM("type" to "String", "default" to "#2979ff"), "inactiveColor" to _uM("type" to "String", "default" to "#c0c4cc"), "blockSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 30), "blockColor" to _uM("type" to "String", "default" to "#ffffff"), "blockStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "disabled" to _uM("type" to "Boolean", "default" to false), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to "6rpx"), "showValue" to _uM("type" to "Boolean", "default" to false), "useNative" to _uM("type" to "Boolean", "default" to false), "innerStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "min",
            "max",
            "step",
            "modelValue",
            "isRange",
            "rangeValue",
            "activeColor",
            "inactiveColor",
            "blockSize",
            "blockColor",
            "blockStyle",
            "disabled",
            "height",
            "showValue",
            "useNative",
            "innerStyle",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
