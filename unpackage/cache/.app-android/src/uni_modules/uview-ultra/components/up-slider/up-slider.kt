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
open class GenUniModulesUviewUltraComponentsUpSliderUpSlider : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            if (!this.useNative) {
                this.upGetRect(".up-slider__base").then(fun(rect: NodeInfo){
                    this.sliderRect.width = rect.width ?: 0
                    this.sliderRect.left = rect.left ?: 0
                    if (this.sliderRect.width == 0) {
                        console.info("如在弹窗等元素中使用，请使用v-if来显示滑块，否则无法计算长度。", " at uni_modules/uview-ultra/components/up-slider/up-slider.uvue:219")
                    }
                    this.init()
                }
                )
            }
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(n: Number) {
            if (this.status == "end") {
                val `$crtFmtValue` = this.updateValue(this.modelValue, false)
                this.`$emit`("change", `$crtFmtValue`)
            }
        }
        )
        this.`$watch`(fun(): Any? {
            return this.rangeValue
        }
        , fun(n: UTSArray<Number>) {
            if (this.status == "end") {
                this.updateValue(n[0], false, 0)
                this.updateValue(n[1], false, 1)
                this.`$emit`("change", n)
            }
        }
        , WatchOptions(deep = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_slider = resolveComponent("slider")
        return _cE("view", _uM("class" to "up-slider", "style" to _nS(_ctx.addStyle(_ctx.customStyle))), _uA(
            if (isTrue(!_ctx.useNative || _ctx.isRange)) {
                _cE(Fragment, _uM("key" to 0), _uA(
                    _cE("view", _uM("ref" to "up-slider-inner", "class" to _nC(_uA(
                        "up-slider-inner",
                        _uA(
                            if (_ctx.disabled) {
                                "up-slider--disabled"
                            } else {
                                ""
                            }
                        )
                    )), "onClick" to _ctx.onClick, "on:onTouchStart" to fun(`$event`: Any){
                        _ctx.onTouchStart2(`$event`, 1)
                    }, "onTouchmove" to fun(`$event`: Any){
                        _ctx.onTouchMove2(`$event`, 1)
                    }, "onTouchend" to fun(`$event`: Any){
                        _ctx.onTouchEnd2(`$event`, 1)
                    }, "onTouchcancel" to fun(`$event`: Any){
                        _ctx.onTouchEnd2(`$event`, 1)
                    }, "style" to _nS(_ctx.innerStyleCpu)), _uA(
                        _cE("view", _uM("ref" to "up-slider__base", "class" to "up-slider__base", "style" to _nS(_uM("height" to _ctx.height, "backgroundColor" to _ctx.inactiveColor))), null, 4),
                        _cE("view", _uM("onClick" to _ctx.onClick, "class" to "up-slider__gap", "style" to _nS(_ctx.gapStyleCpu)), null, 12, _uA(
                            "onClick"
                        )),
                        if (isTrue(_ctx.isRange)) {
                            _cE("view", _uM("key" to 0, "class" to "up-slider__gap up-slider__gap-0", "style" to _nS(_uM("width" to _ctx.barStyle0.width, "transition" to _ctx.barStyle0.transition, "height" to _ctx.height, "marginTop" to ("-" + _ctx.height), "backgroundColor" to _ctx.inactiveColor))), null, 4)
                        } else {
                            _cC("v-if", true)
                        },
                        if (isTrue(_ctx.isRange && _ctx.showValue)) {
                            _cE("text", _uM("key" to 1, "class" to "up-slider__show-range-value", "style" to _nS(_uM("left" to ((parseFloat(_ctx.getPx(_ctx.barStyle0.width)) + parseFloat(_ctx.getPx(_ctx.blockSize)) / 2) + "px")))), _tD(this.rangeValue[0] ?: ""), 5)
                        } else {
                            _cC("v-if", true)
                        },
                        if (isTrue(_ctx.isRange && _ctx.showValue)) {
                            _cE("text", _uM("key" to 2, "class" to "up-slider__show-range-value", "style" to _nS(_uM("left" to ((parseFloat(_ctx.getPx(_ctx.barStyle.width)) + parseFloat(_ctx.getPx(_ctx.blockSize)) / 2) + "px")))), _tD(this.rangeValue[1] ?: ""), 5)
                        } else {
                            _cC("v-if", true)
                        },
                        if (isTrue(_ctx.isRange)) {
                            _cE("view", _uM("key" to 3, "class" to "up-slider__button-wrap up-slider__button-wrap-0", "onTouchstart" to fun(`$event`: Any){
                                _ctx.onTouchStart(`$event`, 0)
                            }, "onTouchmove" to fun(`$event`: Any){
                                _ctx.onTouchMove(`$event`, 0)
                            }, "onTouchend" to fun(`$event`: Any){
                                _ctx.onTouchEnd(`$event`, 0)
                            }, "onTouchcancel" to fun(`$event`: Any){
                                _ctx.onTouchEnd(`$event`, 0)
                            }, "style" to _nS(_uM("left" to ((parseFloat(_ctx.getPx(_ctx.barStyle0.width)) + parseFloat(_ctx.getPx(_ctx.blockSize)) / 2).toString(10) + "px")))), _uA(
                                if (isTrue(_ctx.`$slots`["min"] != null || _ctx.`$slots`["\$min"] != null)) {
                                    renderSlot(_ctx.`$slots`, "min", _uM("key" to 0))
                                } else {
                                    _cE("view", _uM("key" to 1, "class" to "up-slider__button", "style" to _nS(_ctx.blockStyleCpu)), null, 4)
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
                        _cE("view", _uM("class" to "up-slider__button-wrap", "onTouchstart" to fun(`$event`: Any){
                            _ctx.onTouchStart(`$event`)
                        }, "onTouchmove" to fun(`$event`: Any){
                            _ctx.onTouchMove(`$event`)
                        }, "onTouchend" to fun(`$event`: Any){
                            _ctx.onTouchEnd(`$event`)
                        }, "onTouchcancel" to fun(`$event`: Any){
                            _ctx.onTouchEnd(`$event`)
                        }, "style" to _nS(_uM("left" to ((parseFloat(_ctx.getPx(_ctx.barStyle.width)) + parseFloat(_ctx.getPx(_ctx.blockSize)) / 2) + "px")))), _uA(
                            if (isTrue(_ctx.isRange && (_ctx.`$slots`["max"] != null || _ctx.`$slots`["\$max"] != null))) {
                                renderSlot(_ctx.`$slots`, "max", _uM("key" to 0))
                            } else {
                                if (isTrue(_ctx.`$slots`["default"] != null || _ctx.`$slots`["\$default"] != null)) {
                                    renderSlot(_ctx.`$slots`, "default", _uM("key" to 1))
                                } else {
                                    _cE("view", _uM("key" to 2, "class" to "up-slider__button", "style" to _nS(_ctx.blockStyleCpu)), null, 4)
                                }
                            }
                        ), 44, _uA(
                            "onTouchstart",
                            "onTouchmove",
                            "onTouchend",
                            "onTouchcancel"
                        ))
                    ), 46, _uA(
                        "onClick",
                        "on:onTouchStart",
                        "onTouchmove",
                        "onTouchend",
                        "onTouchcancel"
                    )),
                    if (isTrue(_ctx.showValue && !_ctx.isRange)) {
                        _cE("view", _uM("key" to 0, "class" to "up-slider__show-value"), _tD(_ctx.modelValue), 1)
                    } else {
                        _cC("v-if", true)
                    }
                ), 64)
            } else {
                _cV(_component_slider, _uM("key" to 1, "class" to "up-slider__native", "min" to _ctx.min, "max" to _ctx.max, "step" to _ctx.step, "value" to _ctx.modelValue, "activeColor" to _ctx.activeColor, "backgroundColor" to _ctx.inactiveColor, "blockSize" to _ctx.getPx(_ctx.blockSize), "blockColor" to _ctx.blockColor, "showValue" to _ctx.showValue, "disabled" to _ctx.disabled, "onChanging" to _ctx.changingHandler, "onChange" to _ctx.changeHandler), null, 8, _uA(
                    "min",
                    "max",
                    "step",
                    "value",
                    "activeColor",
                    "backgroundColor",
                    "blockSize",
                    "blockColor",
                    "showValue",
                    "disabled",
                    "onChanging",
                    "onChange"
                ))
            }
        ), 4)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var min: Any by `$props`
    open var max: Any by `$props`
    open var step: Any by `$props`
    open var modelValue: Number by `$props`
    open var isRange: Boolean by `$props`
    open var rangeValue: UTSArray<Any?> by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var blockSize: Any by `$props`
    open var blockColor: String by `$props`
    open var blockStyle: UTSJSONObject by `$props`
    open var disabled: Boolean by `$props`
    open var showValue: Boolean by `$props`
    open var useNative: Boolean by `$props`
    open var height: String by `$props`
    open var innerStyle: UTSJSONObject by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var startX: Number by `$data`
    open var status: String by `$data`
    open var newValue: Number by `$data`
    open var distanceX: Number by `$data`
    open var startValue0: Number by `$data`
    open var startValue: Number by `$data`
    open var barStyle0: barStyleType by `$data`
    open var barStyle: barStyleType by `$data`
    open var sliderRect: sliderRectType by `$data`
    open var innerStyleCpu: UTSJSONObject by `$data`
    open var blockStyleCpu: UTSJSONObject by `$data`
    open var gapStyleCpu: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "startX" to 0, "status" to "end", "newValue" to 0, "distanceX" to 0, "startValue0" to 0, "startValue" to 0, "barStyle0" to barStyleType(width = "0px"), "barStyle" to barStyleType(width = "0px", transition = ""), "sliderRect" to sliderRectType(left = 0, width = 0), "innerStyleCpu" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = this.innerStyle
            style["height"] = if ((this.isRange && this.showValue)) {
                (parseFloat(uni.UNI5198058.getPx(this.blockSize)) + 24).toString(10) + "px"
            } else {
                uni.UNI5198058.getPx(this.blockSize) + "px"
            }
            return style
        }
        ), "blockStyleCpu" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 183, 9))
            val blockStyle = this.blockStyle
            if (blockStyle != null) {
                UTSJSONObject.assign(style, blockStyle)
            }
            style["height"] = this.getPx(this.blockSize, true)
            style["width"] = this.getPx(this.blockSize, true)
            style["backgroundColor"] = this.blockColor
            return style
        }
        ), "gapStyleCpu" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 199, 9))
            style["width"] = this.barStyle.width
            style["transition"] = this.barStyle.transition
            style["height"] = this.height
            style["marginTop"] = "-" + this.height
            if (this.activeColor !== "#2979ff") {
                style["backgroundColor"] = this.activeColor
            }
            return style
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
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open fun getPx(e: Any, s: Boolean = false): String {
        return uni.UNI5198058.getPx(e, s)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        if (this.isRange) {
            this.updateValue(parseFloat(this.rangeValue[0].toString()), false, 0)
            this.updateValue(parseFloat(this.rangeValue[1].toString()), false, 1)
        } else {
            this.updateValue(this.modelValue, false)
        }
    }
    open var changingHandler = ::gen_changingHandler_fn
    open fun gen_changingHandler_fn(e: UniSliderChangeEvent) {
        val value = e.detail.value
        this.`$emit`("update:modelValue", value)
        this.`$emit`("changing", value)
    }
    open var changeHandler = ::gen_changeHandler_fn
    open fun gen_changeHandler_fn(e: UniSliderChangeEvent) {
        val value = e.detail.value
        this.`$emit`("update:modelValue", value)
        this.`$emit`("change", value)
    }
    open fun onTouchStart(e: Any, index: Number = 1) {
        var event = e as UniTouchEvent
        if (this.disabled) {
            return
        }
        this.startX = 0
        var touches = event.touches[0]
        this.startX = touches.clientX
        if (this.isRange) {
            this.startValue0 = this.format(parseFloat(this.rangeValue[0].toString()), 0)
            this.startValue = this.format(parseFloat(this.rangeValue[1].toString()), 1)
        } else {
            this.startValue = this.format(this.modelValue)
        }
        this.status = "start"
        var clientX: Number = 0
        clientX = touches.clientX
        this.distanceX = clientX - this.sliderRect.left
        this.newValue = ((this.distanceX / this.sliderRect.width) * (parseFloat(this.max.toString()) - parseFloat(this.min.toString()))) + parseFloat(this.min.toString())
        this.status = "moving"
        var `$crtFmtValue` = this.updateValue(this.newValue, true, index)
        this.`$emit`("changing", `$crtFmtValue`)
    }
    open fun onTouchMove(e: Any, index: Number = 1) {
        var event = e as UniTouchEvent
        if (this.disabled) {
            return
        }
        if (this.status == "start") {
            this.`$emit`("start")
        }
        var touches = event.touches[0]
        var clientX: Number = 0
        clientX = touches.clientX
        this.distanceX = clientX - this.sliderRect.left
        this.newValue = ((this.distanceX / this.sliderRect.width) * (parseFloat(this.max.toString()) - parseFloat(this.min.toString()))) + parseFloat(this.min.toString())
        this.status = "moving"
        var crtFmtValue = this.updateValue(this.newValue, true, index)
        this.`$emit`("changing", crtFmtValue)
    }
    open fun onTouchEnd(e: Any, index: Number = 1) {
        if (this.disabled) {
            return
        }
        if (this.status === "moving") {
            var `$crtFmtValue` = this.updateValue(this.newValue, false, index)
            this.`$emit`("change", `$crtFmtValue`)
        }
        this.status = "end"
    }
    open fun onTouchStart2(e: Any, index: Number = 1) {
        if (!this.isRange) {}
    }
    open fun onTouchMove2(e: Any, index: Number = 1) {
        if (!this.isRange) {}
    }
    open fun onTouchEnd2(e: Any, index: Number = 1) {
        if (!this.isRange) {}
    }
    open var onClick = ::gen_onClick_fn
    open fun gen_onClick_fn(event: UniPointerEvent) {
        if (this.disabled) {
            return
        }
        var clientX = event.x - this.sliderRect.left
        this.newValue = ((clientX / this.sliderRect.width) * (parseFloat(this.max.toString()) - parseFloat(this.min.toString()))) + parseFloat(this.min.toString())
        this.updateValue(this.newValue, false, 1)
    }
    open fun updateValue(value: Number, drag: Boolean, index: Number = 1): Any {
        var valueFormat: Number = this.format(value, index)
        if (valueFormat > parseFloat(this.max.toString())) {
            valueFormat = parseFloat(this.max.toString())
        }
        var width = Math.min((valueFormat - parseFloat(this.min.toString())) / (parseFloat(this.max.toString()) - parseFloat(this.min.toString())) * this.sliderRect.width, this.sliderRect.width)
        var barStyle = barStyleType(width = width.toString(10) + "px")
        if (drag == true) {
            barStyle["transition"] = "none"
        } else {
            barStyle["transition"] = ""
        }
        if (this.isRange) {
            this.rangeValue[index] = valueFormat
            this.`$emit`("update:modelValue", this.rangeValue)
        } else {
            this.`$emit`("update:modelValue", valueFormat)
        }
        when (index) {
            0 -> 
                this.barStyle0.width = barStyle.width
            1 -> 
                this.barStyle.width = barStyle.width
            else -> 
                {}
        }
        if (this.isRange) {
            return this.rangeValue
        } else {
            return valueFormat
        }
        return valueFormat
    }
    open fun format(value: Number, index: Number = 1): Number {
        if (this.isRange) {
            when (index) {
                0 -> 
                    return Math.round(Math.max(parseFloat(this.min.toString()), Math.min(value, parseFloat(this.rangeValue[1].toString()) - parseFloat(this.step.toString()), parseFloat(this.max.toString()))) / parseFloat(this.step.toString())) * parseInt(this.step.toString())
                1 -> 
                    return Math.round(Math.max(parseFloat(this.min.toString()), parseFloat(this.rangeValue[0].toString()) + parseFloat(this.step.toString()), Math.min(value, parseFloat(this.max.toString()))) / parseFloat(this.step.toString())) * parseFloat(this.step.toString())
                else -> 
                    {}
            }
        } else {
            return Math.round(Math.max(parseFloat(this.min.toString()), Math.min(value, parseFloat(this.max.toString()))) / parseFloat(this.step.toString())) * parseFloat(this.step.toString())
        }
        return 0
    }
    companion object {
        var name = "up-slider"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-slider" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-slider__native" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-slider-inner" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "column", "position" to "relative", "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "paddingTop" to 10, "paddingRight" to 18, "paddingBottom" to 10, "paddingLeft" to 18, "justifyContent" to "center", "position:before" to "absolute", "right:before" to 0, "left:before" to 0, "top:before" to -8, "bottom:before" to -8, "zIndex:before" to -1)), "up-slider__show-value" to _pS(_uM("marginTop" to 10, "marginRight" to 18, "marginBottom" to 10, "marginLeft" to 0)), "up-slider__show-range-value" to _pS(_uM("paddingTop" to 2, "fontSize" to 12, "lineHeight" to "12px", "position" to "absolute", "bottom" to 0)), "up-slider__base" to _pS(_uM("backgroundColor" to "#ebedf0")), "up-slider__gap" to _pS(_uM("position" to "relative", "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "transitionProperty" to "width", "transitionDuration" to "0.2s", "backgroundColor" to "var(--theme-color, #0957de)", "alignSelf" to "flex-start")), "up-slider__button" to _pS(_uM("width" to 24, "height" to 24, "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#d0d0d0", "borderRightColor" to "#d0d0d0", "borderBottomColor" to "#d0d0d0", "borderLeftColor" to "#d0d0d0", "backgroundColor" to "#ffffff")), "up-slider__button-wrap" to _pS(_uM("position" to "absolute")), "up-slider--disabled" to _pS(_uM("opacity" to 0.5)), "@TRANSITION" to _uM("up-slider__gap" to _uM("property" to "width", "duration" to "0.2s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("start" to null, "changing" to null, "change" to null, "update:modelValue" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "min" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to slProp["min"]), "max" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to slProp["max"]), "step" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to slProp["step"]), "modelValue" to _uM("type" to _uA(
            "Number"
        ), "default" to slProp["value"]), "isRange" to _uM("type" to "Boolean", "default" to false), "rangeValue" to _uM("type" to "Array", "default" to _uA(
            0,
            0
        )), "activeColor" to _uM("type" to "String", "default" to slProp["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to slProp["inactiveColor"]), "blockSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to slProp["blockSize"]), "blockColor" to _uM("type" to "String", "default" to slProp["blockColor"]), "blockStyle" to _uM("type" to "UTSJSONObject", "default" to slProp["blockStyle"]), "disabled" to _uM("type" to "Boolean", "default" to slProp["disabled"]), "showValue" to _uM("type" to "Boolean", "default" to slProp["showValue"]), "useNative" to _uM("type" to "Boolean", "default" to slProp["useNative"]), "height" to _uM("type" to "String", "default" to slProp["height"]), "innerStyle" to _uM("type" to "UTSJSONObject", "default" to slProp["innerStyle"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
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
            "showValue",
            "useNative",
            "height",
            "innerStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
