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
open class GenSrcSubUviewUltraDemosCouponCoupon : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
        var setup: (__props: GenSrcSubUviewUltraDemosCouponCoupon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosCouponCoupon
            val _cache = __ins.renderCache
            val eventLog = ref<String>("点击优惠券查看事件")
            fun gen_onClick_fn() {
                eventLog.value = "click => 点击了优惠券"
            }
            val onClick = ::gen_onClick_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_coupon = resolveEasyComponent("up-coupon", GenUniModulesUviewUltraComponentsUpCouponUpCouponClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-coupon 优惠券", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-coupon 优惠券", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_coupon, _uM("amount" to "50", "title" to "新人专享优惠券", "desc" to "满 100 元可用", "time" to "有效期至 2026-12-31", "action-text" to "立即领取", "onClick" to onClick))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "不同形态（coupon / envelope / card）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_coupon, _uM("amount" to "20", "title" to "信封样式", "shape" to "envelope", "onClick" to onClick)),
                                            _cV(_component_up_coupon, _uM("class" to "mt-_b12px_B", "amount" to "30", "title" to "卡片样式", "desc" to "全场通用", "shape" to "card", "onClick" to onClick))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "不同尺寸（small / medium / large）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_coupon, _uM("amount" to "10", "title" to "小型", "size" to "small", "onClick" to onClick)),
                                            _cV(_component_up_coupon, _uM("class" to "mt-_b12px_B", "amount" to "10", "title" to "中型", "size" to "medium", "onClick" to onClick)),
                                            _cV(_component_up_coupon, _uM("class" to "mt-_b12px_B", "amount" to "10", "title" to "大型", "size" to "large", "onClick" to onClick))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "禁用状态 / 自定义背景色")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_coupon, _uM("amount" to "99", "title" to "已失效优惠券", "action-text" to "已过期", "disabled" to "", "onClick" to onClick)),
                                            _cV(_component_up_coupon, _uM("class" to "mt-_b12px_B", "amount" to "15", "title" to "自定义背景", "bg-color" to "#eef7ff", "action-text" to "去使用", "onClick" to onClick))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自定义操作插槽")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_coupon, _uM("amount" to "88", "title" to "大额优惠券", "desc" to "自定义右侧按钮", "onClick" to onClick), _uM("action" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border custom-action"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border custom-action-text"), "点击领取")
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-coupon 支持 coupon / envelope / card 三种形态、small / medium / large 三种尺寸，可自定义插槽与点击事件。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                        ))
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "custom-action" to _pS(_uM("paddingTop" to 8, "paddingRight" to 14, "paddingBottom" to 8, "paddingLeft" to 14, "backgroundImage" to "linear-gradient(to bottom right, #0957de, #7c3aed)", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "custom-action-text" to _pS(_uM("fontSize" to 13, "color" to "#ffffff")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
