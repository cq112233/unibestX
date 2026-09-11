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
open class GenUniModulesUviewUltraComponentsUpRateUpRate : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: Any by `$props`
    open var count: Any by `$props`
    open var disabled: Boolean by `$props`
    open var readonly: Boolean by `$props`
    open var size: Any by `$props`
    open var inactiveColor: String by `$props`
    open var activeColor: String by `$props`
    open var inactiveIcon: String by `$props`
    open var activeIcon: String by `$props`
    open var gutter: Any by `$props`
    open var minCount: Any by `$props`
    open var allowHalf: Boolean by `$props`
    open var touchable: Boolean by `$props`
    open var customStyle: UTSJSONObject by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpRateUpRate) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpRateUpRate
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val elId = ref<String>(guid())
            val elClass = ref<String>(guid())
            val rateBoxLeft = ref<Number>(0)
            val activeIndex = ref<Number>(0)
            val rateWidth = ref<Number>(0)
            val moving = ref<Boolean>(false)
            fun toNumber(value: Any, fallback: Number = 0): Number {
                if (value == null) {
                    return fallback
                }
                val num = parseFloat(value.toString() ?: "")
                return if (isNaN(num)) {
                    fallback
                } else {
                    num
                }
            }
            val customRateStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val iconPaddingStyle = computed(fun(): UTSJSONObject {
                return _uO("padding" to ("0 " + addUnit(toNumber(props.gutter, 0) / 2)))
            }
            )
            val halfWidthStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to addUnit(rateWidth.value / 2))
            }
            )
            fun gen_getMinCountValue_fn(): Number {
                return toNumber(props.minCount, 0)
            }
            val getMinCountValue = ::gen_getMinCountValue_fn
            fun gen_getCountValue_fn(): Number {
                return toNumber(props.count, 0)
            }
            val getCountValue = ::gen_getCountValue_fn
            fun gen_normalizeActiveIndex_fn(value: Any): Number {
                var normalized = toNumber(value, getMinCountValue())
                val minCount = getMinCountValue()
                val count = getCountValue()
                if (normalized < minCount) {
                    normalized = minCount
                }
                if (count > 0 && normalized > count) {
                    normalized = count
                }
                return normalized
            }
            val normalizeActiveIndex = ::gen_normalizeActiveIndex_fn
            fun gen_getFallbackRateWidth_fn(): Number {
                val size = toNumber(props.size, 18)
                val gutter = toNumber(props.gutter, 0)
                val width = size + gutter
                return if (width > 0) {
                    width
                } else {
                    18
                }
            }
            val getFallbackRateWidth = ::gen_getFallbackRateWidth_fn
            fun gen_getRateIconWrapRect_fn() {
                uni.UNIB120614.upGetRect("." + elClass.value, false, instance?.proxy).then(fun(res: NodeInfo){
                    val width = res.width ?: NaN
                    if (!isNaN(width) && width > 0) {
                        rateWidth.value = width
                    }
                }
                )
            }
            val getRateIconWrapRect = ::gen_getRateIconWrapRect_fn
            fun gen_getRateItemRect_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        await(sleep())
                        uni.UNIB120614.upGetRect("#" + elId.value, false, instance?.proxy).then(fun(res: NodeInfo){
                            val left = res.left ?: NaN
                            if (!isNaN(left)) {
                                rateBoxLeft.value = left
                            }
                        }
                        )
                })
            }
            val getRateItemRect = ::gen_getRateItemRect_fn
            fun gen_ensureRateMetrics_fn(): Boolean {
                if (isNaN(rateBoxLeft.value)) {
                    rateBoxLeft.value = 0
                }
                if (isNaN(rateWidth.value) || rateWidth.value <= 0) {
                    rateWidth.value = getFallbackRateWidth()
                    getRateIconWrapRect()
                }
                return !isNaN(rateWidth.value) && rateWidth.value > 0
            }
            val ensureRateMetrics = ::gen_ensureRateMetrics_fn
            fun gen_emitEvent_fn() {
                val normalizedValue = normalizeActiveIndex(activeIndex.value)
                if (normalizedValue != activeIndex.value) {
                    activeIndex.value = normalizedValue
                    return
                }
                emit("change", normalizedValue)
                emit("update:modelValue", normalizedValue)
            }
            val emitEvent = ::gen_emitEvent_fn
            fun getActiveIndex(reassignedX: Number, isClick: Boolean = false) {
                var x = reassignedX
                if (props.disabled || props.readonly) {
                    return
                }
                if (!ensureRateMetrics()) {
                    return
                }
                val count = getCountValue()
                if (count <= 0 || isNaN(x)) {
                    return
                }
                val allRateWidth = rateWidth.value * count + rateBoxLeft.value
                x = range(rateBoxLeft.value, allRateWidth, x) - rateBoxLeft.value
                val distance = x
                var index: Number = 0
                if (props.allowHalf) {
                    index = Math.floor(distance / rateWidth.value)
                    val decimal = distance % rateWidth.value
                    if (decimal <= rateWidth.value / 2 && decimal > 0) {
                        index += 0.5
                    } else if (decimal > rateWidth.value / 2) {
                        index++
                    }
                } else {
                    index = Math.floor(distance / rateWidth.value)
                    val decimal = distance % rateWidth.value
                    if (isClick) {
                        if (decimal > 0) {
                            index++
                        }
                    } else {
                        if (decimal > rateWidth.value / 2) {
                            index++
                        }
                    }
                }
                activeIndex.value = normalizeActiveIndex(Math.min(index, count))
                if (activeIndex.value < getMinCountValue()) {
                    activeIndex.value = getMinCountValue()
                }
                emitEvent()
                setTimeout(fun(){
                    moving.value = true
                }
                , 10)
                setTimeout(fun(){
                    moving.value = false
                }
                , 10)
            }
            fun gen_touchMove_fn(e: UniTouchEvent) {
                if (!props.touchable) {
                    return
                }
                ensureRateMetrics()
                val x = e.changedTouches[0].pageX
                getActiveIndex(x)
            }
            val touchMove = ::gen_touchMove_fn
            fun gen_touchEnd_fn(e: UniTouchEvent) {
                if (!props.touchable) {
                    return
                }
                ensureRateMetrics()
                val x = e.changedTouches[0].pageX
                getActiveIndex(x)
            }
            val touchEnd = ::gen_touchEnd_fn
            fun gen_clickHandler_fn(e: Any, index: Number) {
                val ee = e as UniPointerEvent
                if (os() == "ios" && moving.value) {
                    return
                }
                ensureRateMetrics()
                val x = ee.pageX
                getActiveIndex(x, true)
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_init_fn() {
                val modelVal = toNumber(props.modelValue, NaN)
                val defaultActive = toNumber(props.minCount, 0)
                activeIndex.value = if (isNaN(modelVal)) {
                    defaultActive
                } else {
                    if (modelVal == 0) {
                        defaultActive
                    } else {
                        modelVal
                    }
                }
                sleep().then(fun(){
                    getRateItemRect()
                    getRateIconWrapRect()
                }
                )
            }
            val init = ::gen_init_fn
            watch(fun(): Any {
                return props.modelValue
            }
            , fun(kVal: Any){
                activeIndex.value = normalizeActiveIndex(kVal)
            }
            )
            onMounted(fun(){
                init()
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-rate", "id" to elId.value, "style" to _nS(customRateStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-rate__content", "onTouchmove" to withModifiers(touchMove, _uA(
                        "stop"
                    )), "onTouchend" to withModifiers(touchEnd, _uA(
                        "stop"
                    ))), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(parseInt(_ctx.count.toString()), fun(_, index, __index, _cached): Any {
                            return _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-rate__content__item wtu-1h9eaf1-0",
                                _uA(
                                    elClass.value
                                )
                            )), "key" to index), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-rate__content__item__icon-wrap", "onClick" to withModifiers(fun(`$event`: Any){
                                    clickHandler(`$event`, index + 1)
                                }
                                , _uA(
                                    "stop"
                                ))), _uA(
                                    _cV(_component_up_icon, _uM("name" to if (Math.floor(parseFloat(activeIndex.value.toString(10))) > index) {
                                        _ctx.activeIcon
                                    } else {
                                        _ctx.inactiveIcon
                                    }
                                    , "color" to if (_ctx.disabled) {
                                        "#c8c9cc"
                                    } else {
                                        if (Math.floor(parseFloat(activeIndex.value.toString(10))) > index) {
                                            if (_ctx.activeColor == "#FA3534") {
                                                "primary"
                                            } else {
                                                _ctx.activeColor
                                            }
                                        } else {
                                            _ctx.inactiveColor
                                        }
                                    }
                                    , "custom-style" to iconPaddingStyle.value, "size" to _ctx.size), null, 8, _uA(
                                        "name",
                                        "color",
                                        "custom-style",
                                        "size"
                                    ))
                                ), 8, _uA(
                                    "onClick"
                                )),
                                if (isTrue(_ctx.allowHalf)) {
                                    _cE("view", _uM("key" to 0, "onClick" to withModifiers(fun(`$event`: Any){
                                        clickHandler(`$event`, index + 1)
                                    }, _uA(
                                        "stop"
                                    )), "class" to "weapp-tw-border up-rate__content__item__icon-wrap up-rate__content__item__icon-wrap--half", "style" to _nS(halfWidthStyle.value)), _uA(
                                        _cV(_component_up_icon, _uM("name" to if (Math.floor(parseFloat(activeIndex.value.toString(10))) > index) {
                                            _ctx.activeIcon
                                        } else {
                                            _ctx.inactiveIcon
                                        }, "color" to if (_ctx.disabled) {
                                            "#c8c9cc"
                                        } else {
                                            if (Math.ceil(parseFloat(activeIndex.value.toString(10))) > index) {
                                                if (_ctx.activeColor == "#FA3534") {
                                                    "primary"
                                                } else {
                                                    _ctx.activeColor
                                                }
                                            } else {
                                                _ctx.inactiveColor
                                            }
                                        }, "custom-style" to iconPaddingStyle.value, "size" to _ctx.size), null, 8, _uA(
                                            "name",
                                            "color",
                                            "custom-style",
                                            "size"
                                        ))
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 2)
                        }
                        ), 128)
                    ), 32)
                ), 12, _uA(
                    "id"
                ))
            }
        }
        var name = "up-rate"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-rate" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "marginTop" to 0, "marginRight" to 0, "marginBottom" to 0, "marginLeft" to 0, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0)), "up-rate__content" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-rate__content__item" to _pS(_uM("position" to "relative")), "up-rate__content__item__icon-wrap--half" to _pS(_uM("position" to "absolute", "overflow" to "hidden", "top" to 0, "left" to 0)), "up-icon" to _pS(_uM("boxSizing" to "border-box")), "wtu-1h9eaf1-0" to _pS(_uM("cursor" to "pointer")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 1), "count" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 5), "disabled" to _uM("type" to "Boolean", "required" to false, "default" to false), "readonly" to _uM("type" to "Boolean", "required" to false, "default" to false), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 18), "inactiveColor" to _uM("type" to "String", "required" to false, "default" to "#b2b2b2"), "activeColor" to _uM("type" to "String", "required" to false, "default" to "#FA3534"), "inactiveIcon" to _uM("type" to "String", "required" to false, "default" to "star-fill"), "activeIcon" to _uM("type" to "String", "required" to false, "default" to "star-fill"), "gutter" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 4), "minCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false, "default" to 0), "allowHalf" to _uM("type" to "Boolean", "required" to false, "default" to false), "touchable" to _uM("type" to "Boolean", "required" to false, "default" to true), "customStyle" to _uM("type" to "UTSJSONObject", "required" to false, "default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "count",
            "disabled",
            "readonly",
            "size",
            "inactiveColor",
            "activeColor",
            "inactiveIcon",
            "activeIcon",
            "gutter",
            "minCount",
            "allowHalf",
            "touchable",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
