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
open class GenUniModulesUviewUltraComponentsUpRateUpRate : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            val modelVal: Number = if (this.modelValue == null) {
                0
            } else {
                parseFloat(this.modelValue!!.toString())
            }
            val minCount: Number = if (this.minCount == null) {
                0
            } else {
                parseFloat(this.minCount!!.toString())
            }
            val defaultActive = if (isNaN(minCount)) {
                0
            } else {
                minCount
            }
            this.activeIndex = if (isNaN(modelVal)) {
                defaultActive
            } else {
                if (modelVal == 0) {
                    defaultActive
                } else {
                    modelVal
                }
            }
        }
        , __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(kVal: Number) {
            this.activeIndex = this.normalizeActiveIndex(kVal)
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to "up-rate", "id" to _ctx.elId, "ref" to "up-rate", "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle)
        ))), _uA(
            _cE("view", _uM("class" to "up-rate__content", "onTouchmove" to withModifiers(_ctx.touchMove, _uA(
                "stop"
            )), "onTouchend" to withModifiers(_ctx.touchEnd, _uA(
                "stop"
            ))), _uA(
                _cE(Fragment, null, RenderHelpers.renderList(parseInt(_ctx.count.toString()), fun(item, index, __index, _cached): Any {
                    return _cE("view", _uM("class" to _nC(_uA(
                        "up-rate__content__item cursor-pointer",
                        _uA(
                            _ctx.elClass
                        )
                    )), "key" to index), _uA(
                        _cE("view", _uM("class" to "up-rate__content__item__icon-wrap", "ref_for" to true, "ref" to "up-rate__content__item__icon-wrap", "onClick" to withModifiers(fun(`$event`: Any){
                            _ctx.clickHandler(`$event`, index + 1)
                        }
                        , _uA(
                            "stop"
                        ))), _uA(
                            _cV(_component_up_icon, _uM("name" to if (Math.floor(parseFloat(_ctx.activeIndex.toString(10))) > index) {
                                _ctx.activeIcon
                            } else {
                                _ctx.inactiveIcon
                            }
                            , "color" to if (isTruthy(_ctx.disabled)) {
                                "#c8c9cc"
                            } else {
                                if (Math.floor(parseFloat(_ctx.activeIndex.toString(10))) > index) {
                                    if (_ctx.activeColor === "#FA3534") {
                                        "primary"
                                    } else {
                                        _ctx.activeColor
                                    }
                                } else {
                                    _ctx.inactiveColor
                                }
                            }
                            , "custom-style" to _uO("padding" to ("0 " + _ctx.addUnit(parseInt(_ctx.gutter.toString()) / 2))), "size" to _ctx.size), null, 8, _uA(
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
                                _ctx.clickHandler(`$event`, index + 1)
                            }, _uA(
                                "stop"
                            )), "class" to "up-rate__content__item__icon-wrap up-rate__content__item__icon-wrap--half", "style" to _nS(_uA(
                                _uM("width" to _ctx.addUnit(_ctx.rateWidth / 2))
                            )), "ref_for" to true, "ref" to "up-rate__content__item__icon-wrap"), _uA(
                                _cV(_component_up_icon, _uM("name" to if (Math.floor(parseFloat(_ctx.activeIndex.toString(10))) > index) {
                                    _ctx.activeIcon
                                } else {
                                    _ctx.inactiveIcon
                                }, "color" to if (isTruthy(_ctx.disabled)) {
                                    "#c8c9cc"
                                } else {
                                    if (Math.ceil(parseFloat(_ctx.activeIndex.toString(10))) > index) {
                                        if (_ctx.activeColor === "#FA3534") {
                                            "primary"
                                        } else {
                                            _ctx.activeColor
                                        }
                                    } else {
                                        _ctx.inactiveColor
                                    }
                                }, "custom-style" to _uO("padding" to ("0 " + _ctx.addUnit(parseInt(_ctx.gutter.toString()) / 2))), "size" to _ctx.size), null, 8, _uA(
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
            ), 40, _uA(
                "onTouchmove",
                "onTouchend"
            ))
        ), 12, _uA(
            "id"
        ))
    }
    open var customStyle: Any by `$props`
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
    open var gutter: Any by `$props`
    open var minCount: Any by `$props`
    open var allowHalf: Boolean by `$props`
    open var activeIcon: String by `$props`
    open var inactiveIcon: String by `$props`
    open var touchable: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var elId: Any? by `$data`
    open var elClass: Any? by `$data`
    open var rateBoxLeft: Number by `$data`
    open var activeIndex: Number by `$data`
    open var rateWidth: Number by `$data`
    open var moving: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "elId" to guid(), "elClass" to guid(), "rateBoxLeft" to 0, "activeIndex" to 0 as Number, "rateWidth" to 0, "moving" to false)
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open fun toNumber(value: Any, fallback: Number = 0): Number {
        if (value == null) {
            return fallback
        }
        val num = parseFloat(value.toString())
        return if (isNaN(num)) {
            fallback
        } else {
            num
        }
    }
    open var getMinCountValue = ::gen_getMinCountValue_fn
    open fun gen_getMinCountValue_fn(): Number {
        return this.toNumber(this.minCount, 0)
    }
    open var getCountValue = ::gen_getCountValue_fn
    open fun gen_getCountValue_fn(): Number {
        return this.toNumber(this.count, 0)
    }
    open var normalizeActiveIndex = ::gen_normalizeActiveIndex_fn
    open fun gen_normalizeActiveIndex_fn(value: Any): Number {
        var normalized = this.toNumber(value, this.getMinCountValue())
        val minCount = this.getMinCountValue()
        val count = this.getCountValue()
        if (normalized < minCount) {
            normalized = minCount
        }
        if (count > 0 && normalized > count) {
            normalized = count
        }
        return normalized
    }
    open var getFallbackRateWidth = ::gen_getFallbackRateWidth_fn
    open fun gen_getFallbackRateWidth_fn(): Number {
        val size = this.toNumber(this.size, 18)
        val gutter = this.toNumber(this.gutter, 0)
        val width = size + gutter
        return if (width > 0) {
            width
        } else {
            18
        }
    }
    open var ensureRateMetrics = ::gen_ensureRateMetrics_fn
    open fun gen_ensureRateMetrics_fn(): Boolean {
        if (isNaN(this.rateBoxLeft)) {
            this.rateBoxLeft = 0
        }
        if (isNaN(this.rateWidth) || this.rateWidth <= 0) {
            this.rateWidth = this.getFallbackRateWidth()
            this.getRateIconWrapRect()
        }
        return !isNaN(this.rateWidth) && this.rateWidth > 0
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.activeIndex = this.normalizeActiveIndex(this.modelValue)
        sleep().then(fun(){
            this.getRateItemRect()
            this.getRateIconWrapRect()
        }
        )
    }
    open var getRateItemRect = ::gen_getRateItemRect_fn
    open fun gen_getRateItemRect_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend {
                await(sleep())
                this.upGetRect("#" + this.elId).then(fun(res: NodeInfo){
                    val left = res.left ?: NaN
                    if (!isNaN(left)) {
                        this.rateBoxLeft = left
                    }
                }
                )
        })
    }
    open var getRateIconWrapRect = ::gen_getRateIconWrapRect_fn
    open fun gen_getRateIconWrapRect_fn() {
        this.`$uGetRect`("." + this.elClass).then(fun(res: NodeInfo){
            val width = res.width ?: NaN
            if (!isNaN(width) && width > 0) {
                this.rateWidth = width
            }
        }
        )
    }
    open var touchMove = ::gen_touchMove_fn
    open fun gen_touchMove_fn(e: UniTouchEvent) {
        if (!isTruthy(this.touchable)) {
            return
        }
        this.preventEvent(e)
        this.ensureRateMetrics()
        val x = e.changedTouches[0].pageX
        this.getActiveIndex(x)
    }
    open var touchEnd = ::gen_touchEnd_fn
    open fun gen_touchEnd_fn(e: UniTouchEvent) {
        if (!isTruthy(this.touchable)) {
            return
        }
        this.preventEvent(e)
        this.ensureRateMetrics()
        val x = e.changedTouches[0].pageX
        this.getActiveIndex(x)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(e: Any, index: Number) {
        var ee = e as UniPointerEvent
        if (os() === "ios" && this.moving) {
            return
        }
        this.preventEvent(ee)
        this.ensureRateMetrics()
        var x: Number = 0
        x = ee.pageX
        this.getActiveIndex(x, true)
    }
    open var emitEvent = ::gen_emitEvent_fn
    open fun gen_emitEvent_fn() {
        val normalizedValue = this.normalizeActiveIndex(if (this.activeIndex != null) {
            this.activeIndex
        } else {
            0
        }
        )
        if (this.activeIndex == null || normalizedValue != this.activeIndex) {
            this.activeIndex = normalizedValue
            return
        }
        this.`$emit`("change", normalizedValue)
        this.`$emit`("update:modelValue", normalizedValue)
    }
    open fun getActiveIndex(reassignedX: Number, isClick: Boolean = false) {
        var x = reassignedX
        if (isTruthy(this.disabled) || isTruthy(this.readonly)) {
            return
        }
        if (!this.ensureRateMetrics()) {
            return
        }
        val count = this.getCountValue()
        if (count <= 0 || isNaN(x)) {
            return
        }
        val allRateWidth = this.rateWidth * count + this.rateBoxLeft
        x = range(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft
        val distance = x
        var index: Number = 0
        if (isTruthy(this.allowHalf)) {
            index = Math.floor(distance / this.rateWidth)
            val decimal = distance % this.rateWidth
            if (decimal <= this.rateWidth / 2 && decimal > 0) {
                index += 0.5
            } else if (decimal > this.rateWidth / 2) {
                index++
            }
        } else {
            index = Math.floor(distance / this.rateWidth)
            val decimal = distance % this.rateWidth
            if (isClick) {
                if (decimal > 0) {
                    index++
                }
            } else {
                if (decimal > this.rateWidth / 2) {
                    index++
                }
            }
        }
        this.activeIndex = this.normalizeActiveIndex(Math.min(index, count))
        if (this.activeIndex < this.getMinCountValue()) {
            this.activeIndex = this.getMinCountValue()
        }
        setTimeout(fun(){
            this.moving = true
        }
        , 10)
        setTimeout(fun(){
            this.moving = false
        }
        , 10)
    }
    companion object {
        var name = "up-rate"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-rate" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "marginTop" to 0, "marginRight" to 0, "marginBottom" to 0, "marginLeft" to 0, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0)), "up-rate__content" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-rate__content__item" to _pS(_uM("position" to "relative")), "up-rate__content__item__icon-wrap--half" to _pS(_uM("position" to "absolute", "overflow" to "hidden", "top" to 0, "left" to 0)), "up-icon" to _pS(_uM("boxSizing" to "border-box")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["value"]), "count" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["count"]), "disabled" to _uM("type" to "Boolean", "default" to crtProp__10["disabled"]), "readonly" to _uM("type" to "Boolean", "default" to crtProp__10["readonly"]), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["size"]), "inactiveColor" to _uM("type" to "String", "default" to crtProp__10["inactiveColor"]), "activeColor" to _uM("type" to "String", "default" to crtProp__10["activeColor"]), "gutter" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["gutter"]), "minCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__10["minCount"]), "allowHalf" to _uM("type" to "Boolean", "default" to crtProp__10["allowHalf"]), "activeIcon" to _uM("type" to "String", "default" to crtProp__10["activeIcon"]), "inactiveIcon" to _uM("type" to "String", "default" to crtProp__10["inactiveIcon"]), "touchable" to _uM("type" to "Boolean", "default" to crtProp__10["touchable"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
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
            "gutter",
            "minCount",
            "allowHalf",
            "activeIcon",
            "inactiveIcon",
            "touchable"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
