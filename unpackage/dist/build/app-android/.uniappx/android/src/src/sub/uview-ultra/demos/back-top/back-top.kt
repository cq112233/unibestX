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
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenSrcSubUviewUltraDemosBackTopBackTop : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosBackTopBackTop) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosBackTopBackTop
            val _cache = __ins.renderCache
            val currentScrollTop = ref(0)
            val scrollTop = ref(0)
            val windowHeight = ref(uni_getWindowInfo().windowHeight)
            fun gen_handleScroll_fn(e: UniScrollEvent) {
                currentScrollTop.value = e.detail.scrollTop
                scrollTop.value = e.detail.scrollTop
            }
            val handleScroll = ::gen_handleScroll_fn
            fun gen_scrollToTop_fn() {
                scrollTop.value = 0
                currentScrollTop.value = 0
            }
            val scrollToTop = ::gen_scrollToTop_fn
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_back_top = resolveEasyComponent("up-back-top", GenUniModulesUviewUltraComponentsUpBackTopUpBackTopClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-bar-title-text" to "Back Top 返回顶部", "navigation-style" to "custom"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ flex flex-col", "style" to _nS(_uM("height" to ("" + windowHeight.value + "px")))), _uA(
                                    _cV(_component_NavBar, _uM("title" to "Back Top 返回顶部", "auto-back" to true)),
                                    _cE("scroll-view", _uM("class" to "flex-1 p-16px", "scroll-y" to "true", "scroll-top" to scrollTop.value, "onScroll" to handleScroll), _uA(
                                        _cE("view", _uM("class" to "bg-white rounded-8px p-12px mb-12px shadow-xs"), _uA(
                                            _cE("view", _uM("class" to "flex-row items-center mb-10px"), _uA(
                                                _cE("view", _uM("class" to "w-3px h-14px bg-__2979ff_ mr-6px rounded-2px")),
                                                _cE("text", _uM("class" to "text-14px font-bold text-__1e293b_"), "返回顶部说明")
                                            )),
                                            _cE("text", _uM("class" to "text-13px text-__64748b_ leading-20px"), " 请向下滑动页面（超过 100px），右下角会自动浮现返回顶部按钮，点击后平滑一键置顶。 "),
                                            _cE("text", _uM("class" to "text-12px text-__2563eb_ mt-6px"), "当前 实时高度: " + _tD(currentScrollTop.value) + "px", 1)
                                        )),
                                        _cE(Fragment, null, RenderHelpers.renderList(20, fun(i, __key, __index, _cached): Any {
                                            return _cE("view", _uM("key" to i, "class" to "bg-white rounded-8px p-12px mt-10px shadow-xs"), _uA(
                                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), "长列表测试卡片 #" + _tD(i), 1),
                                                _cE("text", _uM("class" to "text-12px text-__94a3b8_ mt-4px"), "向下滚动触发右下角返回顶部悬浮图标...")
                                            ))
                                        }
                                        ), 64)
                                    ), 40, _uA(
                                        "scroll-top"
                                    )),
                                    _cV(_component_up_back_top, _uM("scroll-top" to currentScrollTop.value, "top" to 100, "bottom" to 80, "right" to 20, "onClick" to scrollToTop), null, 8, _uA(
                                        "scroll-top"
                                    ))
                                ), 4)
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
                return _uM("bg-__2979ff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#2979ff")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "h-14px" to _pS(_uM("height" to 14)), "items-center" to _pS(_uM("alignItems" to "center")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "mb-10px" to _pS(_uM("marginBottom" to 10)), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mr-6px" to _pS(_uM("marginRight" to 6)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-4px" to _pS(_uM("marginTop" to 4)), "mt-6px" to _pS(_uM("marginTop" to 6)), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "rounded-2px" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "shadow-xs" to _pS(_uM("boxShadow" to "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow" to "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))")), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__2563eb_" to _pS(_uM("color" to "#2563eb")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "w-3px" to _pS(_uM("width" to 3)), "page-container" to _pS(_uM("display" to "flex", "flexDirection" to "column")))
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
