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
open class GenUniModulesUviewUltraComponentsUpCouponUpCoupon : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var amount: Any by `$props`
    open var unit: String by `$props`
    open var unitPosition: String by `$props`
    open var limit: String by `$props`
    open var title: String by `$props`
    open var desc: String by `$props`
    open var time: String by `$props`
    open var actionText: String by `$props`
    open var shape: String by `$props`
    open var size: String by `$props`
    open var circle: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var bgColor: String by `$props`
    open var color: String by `$props`
    open var type: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCouponUpCoupon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCouponUpCoupon
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val couponStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.bgColor.length > 0) {
                    style["backgroundColor"] = props.bgColor
                }
                return style
            }
            )
            fun gen_hasType_fn(): Boolean {
                return props.type.length > 0
            }
            val hasType = ::gen_hasType_fn
            fun gen_handleClick_fn() {
                if (props.disabled) {
                    return
                }
                emit("click")
            }
            val handleClick = ::gen_handleClick_fn
            return fun(): Any? {
                val _component_up_tag = resolveEasyComponent("up-tag", GenUniModulesUviewUltraComponentsUpTagUpTagClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-coupon",
                    _uA(
                        "up-coupon--" + _ctx.shape,
                        "up-coupon--" + _ctx.type,
                        "up-coupon--" + _ctx.size,
                        _uM("up-coupon--disabled" to _ctx.disabled)
                    )
                )), "style" to _nS(_uA(
                    couponStyle.value
                )), "onClick" to handleClick), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-coupon__content"), _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-coupon__amount"), _uA(
                            if (_ctx.unitPosition == "left") {
                                renderSlot(_ctx.`$slots`, "unit", _uM("key" to 0, "unit" to _ctx.unit, "unitPosition" to _ctx.unitPosition), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (_ctx.unitPosition == "left") {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__amount-unit"), _tD(_ctx.unit), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                })
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            renderSlot(_ctx.`$slots`, "amount", _uM("amount" to _ctx.amount), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border up-coupon__amount-value"), _tD(_ctx.amount), 1)
                                )
                            }
                            ),
                            if (_ctx.unitPosition == "right") {
                                renderSlot(_ctx.`$slots`, "unit", _uM("key" to 1, "unit" to _ctx.unit, "unitPosition" to _ctx.unitPosition), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (_ctx.unitPosition == "right") {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__amount-unit"), _tD(_ctx.unit), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                })
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            renderSlot(_ctx.`$slots`, "limit", _uM("limit" to _ctx.limit), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.limit)) {
                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__amount-limit"), _tD(_ctx.limit), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            )
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border up-coupon__info"), _uA(
                            renderSlot(_ctx.`$slots`, "title", _uM("title" to _ctx.title), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border up-coupon__info-title"), _tD(_ctx.title), 1)
                                )
                            }
                            ),
                            renderSlot(_ctx.`$slots`, "desc", _uM("desc" to _ctx.desc), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.desc)) {
                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__info-desc"), _tD(_ctx.desc), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            ),
                            renderSlot(_ctx.`$slots`, "time", _uM("time" to _ctx.time), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.time)) {
                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__info-time"), _tD(_ctx.time), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            )
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border up-coupon__action up-padding-right-20"), _uA(
                            renderSlot(_ctx.`$slots`, "action", _uM("actionText" to _ctx.actionText, "circle" to _ctx.circle), fun(): UTSArray<Any> {
                                return _uA(
                                    _cV(_component_up_tag, _uM("type" to "error", "text" to _ctx.actionText, "bgColor" to if (hasType()) {
                                        "transparent"
                                    } else {
                                        "#eb433d"
                                    }
                                    , "borderColor" to if (hasType()) {
                                        "#eee"
                                    } else {
                                        "#eb433d"
                                    }
                                    , "borderRadius" to "6px", "size" to "medium", "class" to "up-coupon__action-text", "shape" to if (_ctx.circle) {
                                        "circle"
                                    } else {
                                        "square"
                                    }
                                    ), null, 8, _uA(
                                        "text",
                                        "bgColor",
                                        "borderColor",
                                        "shape"
                                    ))
                                )
                            }
                            )
                        ))
                    )),
                    if (_ctx.shape == "envelope") {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-coupon__rope"))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    renderSlot(_ctx.`$slots`, "default")
                ), 6)
            }
        }
        var name = "up-coupon"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-coupon" to _pS(_uM("position" to "relative", "overflow" to "hidden", "borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx", "backgroundColor" to "#ffffff", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopColor" to "#f0f1f4", "borderRightColor" to "#f0f1f4", "borderBottomColor" to "#f0f1f4", "borderLeftColor" to "#f0f1f4", "width" to "100%")), "up-coupon--coupon" to _pS(_uM("borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx", "overflow" to "hidden")), "up-coupon--envelope" to _pS(_uM("borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx")), "up-coupon--card" to _pS(_uM("borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx")), "up-coupon--small" to _pS(_uM("height" to "160rpx")), "up-coupon--medium" to _pS(_uM("height" to "180rpx")), "up-coupon--large" to _pS(_uM("height" to "220rpx")), "up-coupon--disabled" to _pS(_uM("opacity" to 0.5)), "up-coupon__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between", "paddingTop" to "20rpx", "paddingRight" to "20rpx", "paddingBottom" to "20rpx", "paddingLeft" to "20rpx", "height" to "100%", "boxSizing" to "border-box")), "up-coupon__amount" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-end", "minWidth" to "140rpx")), "up-coupon__amount-unit" to _pS(_uM("fontSize" to "28rpx", "color" to "#eb433d", "fontWeight" to "bold")), "up-coupon__amount-value" to _pS(_uM("fontSize" to "52rpx", "color" to "#eb433d", "fontWeight" to "bold", "lineHeight" to 1)), "up-coupon__amount-limit" to _pS(_uM("fontSize" to "20rpx", "color" to "#909193", "marginLeft" to "8rpx")), "up-coupon__info" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "paddingTop" to 0, "paddingRight" to "20rpx", "paddingBottom" to 0, "paddingLeft" to "20rpx", "overflow" to "hidden")), "up-coupon__info-title" to _pS(_uM("fontSize" to "28rpx", "fontWeight" to "bold", "color" to "#303133", "marginBottom" to "8rpx", "textOverflow" to "ellipsis")), "up-coupon__info-desc" to _pS(_uM("fontSize" to "22rpx", "color" to "#909193", "marginBottom" to "6rpx", "textOverflow" to "ellipsis")), "up-coupon__info-time" to _pS(_uM("fontSize" to "20rpx", "color" to "#c0c4cc")), "up-coupon__action" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-coupon__rope" to _pS(_uM("position" to "absolute", "top" to "-10rpx", "right" to "60rpx", "width" to "6rpx", "height" to "40rpx", "backgroundColor" to "#ffd700", "borderTopLeftRadius" to "3rpx", "borderTopRightRadius" to "3rpx", "borderBottomRightRadius" to "3rpx", "borderBottomLeftRadius" to "3rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "amount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "unit" to _uM("type" to "String", "default" to "￥"), "unitPosition" to _uM("type" to "String", "default" to "left"), "limit" to _uM("type" to "String", "default" to ""), "title" to _uM("type" to "String", "default" to "优惠券"), "desc" to _uM("type" to "String", "default" to ""), "time" to _uM("type" to "String", "default" to ""), "actionText" to _uM("type" to "String", "default" to "使用"), "shape" to _uM("type" to "String", "default" to "coupon"), "size" to _uM("type" to "String", "default" to "medium"), "circle" to _uM("type" to "Boolean", "default" to false), "disabled" to _uM("type" to "Boolean", "default" to false), "bgColor" to _uM("type" to "String", "default" to ""), "color" to _uM("type" to "String", "default" to ""), "type" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "amount",
            "unit",
            "unitPosition",
            "limit",
            "title",
            "desc",
            "time",
            "actionText",
            "shape",
            "size",
            "circle",
            "disabled",
            "bgColor",
            "color",
            "type"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
