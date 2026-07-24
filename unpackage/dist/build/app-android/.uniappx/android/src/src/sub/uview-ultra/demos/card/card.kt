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
open class GenSrcSubUviewUltraDemosCardCard : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosCardCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosCardCard
            val _cache = __ins.renderCache
            val logoImg = "/static/logo.png"
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_card = resolveEasyComponent("up-card", GenUniModulesUviewUltraComponentsUpCardUpCardClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-card 卡片"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "up-card 卡片", "auto-back" to true, "safe-area-inset-top" to true, "bg-color" to "#ffffff")),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "基础卡片"),
                                            _cV(_component_up_card, _uM("title" to "基础卡片", "sub-title" to "副标题", "margin" to "0", "show-foot" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("slot" to "body", "class" to "text-13px text-__606266_ leading-20px"), "这是卡片主体内容区域，可以放置任意内容。")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "h-10px")),
                                            _cV(_component_up_card, _uM("title" to "带缩略图", "thumb" to logoImg, "thumb-circle" to true, "thumb-width" to "36px", "margin" to "0"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("slot" to "body", "class" to "text-13px text-__606266_ leading-20px"), "左侧缩略图为圆形，适合展示头像或图标。"),
                                                    _cE("view", _uM("slot" to "foot", "class" to "flex-row justify-between w-full"), _uA(
                                                        _cE("text", _uM("class" to "text-12px text-__909399_"), "底部区域"),
                                                        _cE("text", _uM("class" to "text-12px text-__2979ff_"), "查看详情")
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "完整卡片(含头部和尾部)"),
                                            _cV(_component_up_card, _uM("title" to "订单信息", "sub-title" to "已完成", "thumb" to logoImg, "margin" to "0"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("slot" to "body", "class" to "text-14px text-__333_ leading-24px"), "订单编号：2023080112345678\n商品名称：某某精美商品一件\n购买时间：2023-08-01 12:34:56"),
                                                    _cE("view", _uM("slot" to "foot", "class" to "flex-row justify-end w-full"), _uA(
                                                        _cV(_component_up_button, _uM("text" to "评价", "type" to "primary", "size" to "mini", "plain" to true, "class" to "mr-10px")),
                                                        _cV(_component_up_button, _uM("text" to "再次购买", "type" to "primary", "size" to "mini"))
                                                    ))
                                                )
                                            }
                                            ), "_" to 1))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "自定义阴影与边框"),
                                            _cV(_component_up_card, _uM("title" to "带明显阴影", "sub-title" to "自定义", "margin" to "0", "box-shadow" to "0 4px 12px rgba(0,0,0,0.1)", "border" to false), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("slot" to "body", "class" to "text-13px text-__606266_"), "这个卡片去掉了边框，并自定义了较深的阴影效果。")
                                                )
                                            }
                                            ), "_" to 1))
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
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "flex-row" to _pS(_uM("flexDirection" to "row")), "h-10px" to _pS(_uM("height" to 10)), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-end" to _pS(_uM("justifyContent" to "flex-end")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "leading-24px" to _pS(_uM("lineHeight" to "24px")), "mr-10px" to _pS(_uM("marginRight" to 10)), "mt-12px" to _pS(_uM("marginTop" to 12)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "text-__2979ff_" to _pS(_uM("color" to "#2979ff")), "text-__333_" to _pS(_uM("color" to "#333333")), "text-__606266_" to _pS(_uM("color" to "#606266")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "w-full" to _pS(_uM("width" to "100%")), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")))
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
