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
open class GenSrcSubUviewUltraDemosStickySticky : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosStickySticky) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosStickySticky
            val _cache = __ins.renderCache
            val scrollTop = ref(0)
            val windowHeight = ref(uni_getWindowInfo().windowHeight)
            val navHeight = computed(fun(): Number {
                val top = safeAreaInsets.value?.top ?: systemInfo.value?.statusBarHeight ?: 0
                return top + 44
            }
            )
            fun gen_handleScroll_fn(e: UniScrollEvent) {
                scrollTop.value = e.detail.scrollTop
            }
            val handleScroll = ::gen_handleScroll_fn
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_sticky = resolveEasyComponent("up-sticky", GenUniModulesUviewUltraComponentsUpStickyUpStickyClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-sticky 吸顶"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_", "style" to _nS(_uM("height" to ("" + windowHeight.value + "px")))), _uA(
                                    _cV(_component_NavBar, _uM("title" to "Sticky 吸顶", "auto-back" to true)),
                                    _cE("scroll-view", _uM("style" to _nS(_uM("flex" to "1", "padding" to "16px")), "scroll-y" to true, "onScroll" to handleScroll), _uA(
                                        _cE("view", _uM("class" to "bg-white rounded-8px p-12px mb-12px shadow-xs"), _uA(
                                            _cE("view", _uM("class" to "flex-row items-center mb-10px"), _uA(
                                                _cE("view", _uM("class" to "w-3px h-14px bg-__2979ff_ mr-6px rounded-2px")),
                                                _cE("text", _uM("class" to "text-14px font-bold text-__1e293b_"), "吸顶效果说明")
                                            )),
                                            _cE("text", _uM("class" to "text-13px text-__64748b_ leading-20px"), " 向上滑动页面，当下面的操作栏滚动到顶部时，会触发 up-sticky 组件吸顶悬浮固定。 ")
                                        )),
                                        _cV(_component_up_sticky, _uM("offset-top" to 0, "custom-nav-height" to navHeight.value, "scroll-top" to scrollTop.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE("view", _uM("class" to "bg-__2979ff_ p-12px rounded-8px flex-row items-center justify-between shadow-sm mb-10px"), _uA(
                                                    _cE("text", _uM("class" to "text-white font-bold text-14px"), "📌 悬浮吸顶操作栏"),
                                                    _cV(_component_up_button, _uM("size" to "small", "type" to "warning", "text" to "立即体验", "class" to "w-90px"))
                                                ))
                                            )
                                        }
                                        ), "_" to 1), 8, _uA(
                                            "custom-nav-height",
                                            "scroll-top"
                                        )),
                                        _cE(Fragment, null, RenderHelpers.renderList(25, fun(i, __key, __index, _cached): Any {
                                            return _cE("view", _uM("key" to i, "class" to "bg-white rounded-8px p-12px mt-10px shadow-xs"), _uA(
                                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), "列表条目 #" + _tD(i), 1),
                                                _cE("text", _uM("class" to "text-12px text-__94a3b8_ mt-4px"), "向下滑动页面查看吸顶保持效果...")
                                            ))
                                        }
                                        ), 64)
                                    ), 36)
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
                return _uM("bg-__2979ff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#2979ff")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "h-14px" to _pS(_uM("height" to 14)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "mb-10px" to _pS(_uM("marginBottom" to 10)), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mr-6px" to _pS(_uM("marginRight" to 6)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-4px" to _pS(_uM("marginTop" to 4)), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "rounded-2px" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "shadow-sm" to _pS(_uM("boxShadow" to "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow" to "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))")), "shadow-xs" to _pS(_uM("boxShadow" to "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow" to "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))")), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-white" to _pS(_uM("color" to "rgba(255,255,255,var(--un-color-opacity,1))")), "w-3px" to _pS(_uM("width" to 3)), "w-90px" to _pS(_uM("width" to 90)), "page-container" to _pS(_uM("display" to "flex", "flexDirection" to "column")))
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
