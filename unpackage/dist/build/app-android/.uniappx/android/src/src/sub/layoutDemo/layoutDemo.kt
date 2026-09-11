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
open class GenSrcSubLayoutDemoLayoutDemo : BasePage {
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
        var setup: (__props: GenSrcSubLayoutDemoLayoutDemo) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubLayoutDemoLayoutDemo
            val _cache = __ins.renderCache
            val computedAvailableHeight = computed<Number>(fun(): Number {
                return availableHeight.value ?: 0
            }
            )
            val codeTemplate = "<view class=\"flex flex-col flex-1\">\n  <!-- 顶部固定内容（可选） -->\n\n  <scroll-view direction=\"vertical\" class=\"flex-1 flex flex-col\"\n    @scroll=\"onScroll\" @scrolltolower=\"onLower\">\n    <!-- 滚动内容 -->\n  </scroll-view>\n</view>"
            val demoItems = _uA(
                DemoItem(title = "首页", subtitle = "Home", desc = "根容器 flex-1 撑满开发高度，滚动区域在内部自写 scroll-view。", tag = "首页", avatar = "首", color = "#3b82f6"),
                DemoItem(title = "向下滑动", subtitle = "Scroll me", desc = "此列表由内部 scroll-view 滚动，@scroll 会实时更新 scrollTop。", tag = "滚动", avatar = "滚", color = "#10b981"),
                DemoItem(title = "第三项", subtitle = "Item 3", desc = "滚动超出后内部 scroll-view 接管、触底检测独立生效。", tag = "示例", avatar = "3", color = "#f59e0b"),
                DemoItem(title = "第四项", subtitle = "Item 4", desc = "触底时触发 @scrolltolower，次数在上方指标卡累加。", tag = "触底", avatar = "4", color = "#ec4899"),
                DemoItem(title = "第五项", subtitle = "Item 5", desc = "根容器必须为 view（非 scroll-view），避免与布局产生双重滚动冲突。", tag = "规范", avatar = "5", color = "#8b5cf6"),
                DemoItem(title = "第六项", subtitle = "Item 6", desc = "可用高度 computedAvailableHeight 即你要写的高度，框架已算好。", tag = "高度", avatar = "6", color = "#06b6d4"),
                DemoItem(title = "第七项", subtitle = "Item 7", desc = "VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域，底部非编辑区。", tag = "模式", avatar = "7", color = "#6366f1"),
                DemoItem(title = "第八项", subtitle = "Item 8", desc = "按 H5 正常开发即可，无需再手算状态栏/导航栏/tabbar 偏移。", tag = "H5", avatar = "8", color = "#0ea5e9")
            ) as UTSArray<DemoItem>
            val scrollTop = ref(0)
            val reachBottomCount = ref(0)
            fun gen_handleScroll_fn(e: UniScrollEvent): Unit {
                scrollTop.value = Math.ceil(e.detail.scrollTop)
            }
            val handleScroll = ::gen_handleScroll_fn
            fun gen_handleScrollToLower_fn(): Unit {
                reachBottomCount.value++
            }
            val handleScrollToLower = ::gen_handleScrollToLower_fn
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "布局页面示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "布局页面示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border flex flex-col flex-1 items-center px-_b16px_B pt-_b8px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border w-full mb-_b16px_B", "style" to _nS(_uM("maxWidth" to "520px"))), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B flex flex-col"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center mb-_b10px_B"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b6px_B h-_b16px_B rounded-_b3px_B bg-_b_h3b82f6_B mr-_b8px_B")),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B"), "布局骨架示例"),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h94a3b8_B ml-_b8px_B px-_b6px_B py-_b2px_B rounded-_b4px_B bg-_b_hf1f5f9_B"), "说明")
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h64748b_B leading-_b19px_B"), " 本页演示用 navbar / default 布局写一个能滚动的页面骨架：根容器用 view + flex-1，滚动区域在内部自写 scroll-view，内容高度直接用 computedAvailableHeight，其余交给框架。 "),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap mt-_b12px_B"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_heff6ff_B mr-_b8px_B mb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h1d4ed8_B"), "① 根用 view")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_hecfdf5_B mr-_b8px_B mb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h065f46_B"), "② 内部 scroll-view")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border rounded-_b6px_B px-_b8px_B py-_b4px_B bg-_b_hfffbeb_B mr-_b8px_B mb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h92400e_B"), "③ 高度抄 computedAvailableHeight")
                                                ))
                                            ))
                                        ))
                                    ), 4),
                                    _cE("scroll-view", _uM("direction" to "vertical", "class" to "w-full flex flex-col flex-1", "style" to _nS(_uM("maxWidth" to "520px")), "lower-threshold" to 50, "onScroll" to handleScroll, "onScrolltolower" to handleScrollToLower), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border flex flex-col"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border pb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B"), "你只需要三步")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start mb-_b10px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B"), "1")
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row flex-wrap flex-1"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), "根容器写 "),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B"), "view class=\"flex flex-col flex-1\""),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), "，撑满开发高度。")
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start mb-_b10px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B"), "2")
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row flex-wrap flex-1"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), "要滚动的区域，在根里面自写一个 "),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B"), "scroll-view"),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), " 即可。")
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b20px_B h-_b20px_B rounded-_b5px_B bg-_b_hdbeafe_B flex items-center justify-center mr-_b10px_B flex-none"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B font-bold text-_b_h1d4ed8_B"), "3")
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex flex-row flex-wrap flex-1"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), "内容高度直接绑定 "),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h1d4ed8_B leading-_b20px_B"), "computedAvailableHeight"),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), "，其余交给框架。")
                                                    ))
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border pb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B"), "约定细节")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start mb-_b10px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_h3b82f6_B mr-_b8px_B mt-_b8px_B")),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-1 flex-col"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), " 根容器用 view，不要用 scroll-view 当根，否则和布局的滚动容器双重滚动冲突。 ")
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start mb-_b10px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_h10b981_B mr-_b8px_B mt-_b8px_B")),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-1 flex-col"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), " 可用高度 computedAvailableHeight 就是你要写的高度，状态栏/导航栏/tabbar 框架已算好。 ")
                                                    ))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-start"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_hf59e0b_B mr-_b8px_B mt-_b8px_B")),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-1 flex-col"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b20px_B"), " VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域（底部非编辑区，无需计入）。 ")
                                                    ))
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border pb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B"), "最小模板")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b10px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border w-full bg-_b_h0f172a_B rounded-_b8px_B p-_b12px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_h38bdf8_B leading-_b17px_B", "style" to _nS(_uM("font-family" to "monospace"))), _tD(codeTemplate), 4)
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border pb-_b8px_B"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-semibold text-_b_h334155_B"), "实时指标")
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border h-_b1px_B bg-_b_hf1f5f9_B mb-_b12px_B")),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-col flex-1 items-center"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B font-bold text-_b_h3b82f6_B"), _tD(computedAvailableHeight.value), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B"), "可用高度 px")
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b1px_B bg-_b_hf1f5f9_B")),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-col flex-1 items-center"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B font-bold text-_b_h10b981_B"), _tD(scrollTop.value), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B"), "scrollTop")
                                                    )),
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b1px_B bg-_b_hf1f5f9_B")),
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-col flex-1 items-center"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B font-bold text-_b_hf59e0b_B"), _tD(reachBottomCount.value), 1),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B"), "触底")
                                                    ))
                                                ))
                                            )),
                                            _cE(Fragment, null, RenderHelpers.renderList(demoItems, fun(item, index, __index, _cached): Any {
                                                return _cE("view", _uM("key" to index, "class" to "weapp-tw-border w-full bg-white rounded-_b12px_B p-_b16px_B mb-_b16px_B flex flex-col"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-row items-center mb-_b10px_B"), _uA(
                                                        _cE("view", _uM("style" to _nS(_uM("backgroundColor" to item.color)), "class" to "weapp-tw-border w-_b44px_B h-_b44px_B rounded-_b22px_B flex items-center justify-center mr-_b12px_B flex-none"), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b18px_B font-bold text-_b_hffffff_B"), _tD(item.avatar), 1)
                                                        ), 4),
                                                        _cE("view", _uM("class" to "weapp-tw-border flex-col flex-1"), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b15px_B font-semibold text-_b_h1e293b_B"), _tD(item.title), 1),
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B mt-_b2px_B"), _tD(item.subtitle), 1)
                                                        )),
                                                        _cE("view", _uM("style" to _nS(_uM("backgroundColor" to item.color)), "class" to "weapp-tw-border rounded-_b20px_B px-_b10px_B py-_b3px_B flex-none"), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border text-_b11px_B text-_b_hffffff_B"), _tD(item.tag), 1)
                                                        ), 4)
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-_b_h475569_B leading-_b19px_B"), _tD(item.desc), 1)
                                                ))
                                            }
                                            ), 64),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-col items-center py-_b16px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B"), "已触底 " + _tD(reachBottomCount.value) + " 次 · 内容结束", 1)
                                            ))
                                        ))
                                    ), 36)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)))
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
