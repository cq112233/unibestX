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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcSubUviewUltraDemosListList : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosListList) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosListList
            val _cache = __ins.renderCache
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 1000)
            }
            )
            val listItems = ref(_uA<UTSJSONObject>(_uO("title" to "列表 1 - 项目 01", "desc" to "支持下拉刷新与触底加载"), _uO("title" to "列表 1 - 项目 02", "desc" to "基于 scroll-view 封装"), _uO("title" to "列表 1 - 项目 03", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 04", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 05", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 06", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 07", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 08", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 09", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 10", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 11", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 12", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 13", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 14", "desc" to "支持单指内部滚动"), _uO("title" to "列表 1 - 项目 15", "desc" to "支持单指内部滚动")))
            val staticListItems = ref(_uA<UTSJSONObject>(_uO("title" to "列表 2 - 项目 01", "desc" to "静态列表第 1 项内容"), _uO("title" to "列表 2 - 项目 02", "desc" to "静态列表第 2 项内容"), _uO("title" to "列表 2 - 项目 03", "desc" to "静态列表第 3 项内容"), _uO("title" to "列表 2 - 项目 04", "desc" to "静态列表第 4 项内容"), _uO("title" to "列表 2 - 项目 05", "desc" to "静态列表第 5 项内容"), _uO("title" to "列表 2 - 项目 06", "desc" to "静态列表第 6 项内容"), _uO("title" to "列表 2 - 项目 07", "desc" to "静态列表第 7 项内容"), _uO("title" to "列表 2 - 项目 08", "desc" to "静态列表第 8 项内容"), _uO("title" to "列表 2 - 项目 09", "desc" to "静态列表第 9 项内容"), _uO("title" to "列表 2 - 项目 10", "desc" to "静态列表第 10 项内容"), _uO("title" to "列表 2 - 项目 11", "desc" to "静态列表第 11 项内容"), _uO("title" to "列表 2 - 项目 12", "desc" to "静态列表第 12 项内容"), _uO("title" to "列表 2 - 项目 13", "desc" to "静态列表第 13 项内容"), _uO("title" to "列表 2 - 项目 14", "desc" to "静态列表第 14 项内容"), _uO("title" to "列表 2 - 项目 15", "desc" to "静态列表第 15 项内容")))
            val listLoading = ref(false)
            val listRefreshing = ref(false)
            var listLoadCount: Number = 1
            fun gen_onListLoadMore_fn(): Unit {
                if (listLoading.value) {
                    return
                }
                listLoading.value = true
                setTimeout(fun(){
                    listLoadCount += 1
                    val newItems: UTSArray<UTSJSONObject> = _uA()
                    run {
                        var i: Number = 1
                        while(i <= 3){
                            newItems.push(_uO("title" to ("加载项 " + listLoadCount + "-" + i), "desc" to ("这是第 " + listLoadCount + " 批加载的第 " + i + " 条数据")))
                            i++
                        }
                    }
                    listItems.value = listItems.value.concat(newItems)
                    listLoading.value = false
                    uni_showToast(ShowToastOptions(title = "加载了 " + newItems.length + " 条", icon = "none", duration = 1500))
                }
                , 1000)
            }
            val onListLoadMore = ::gen_onListLoadMore_fn
            fun gen_onListRefresh_fn(): Unit {
                listRefreshing.value = true
                setTimeout(fun(){
                    listRefreshing.value = false
                    uni_showToast(ShowToastOptions(title = "刷新完成", icon = "none", duration = 1500))
                }
                , 1500)
            }
            val onListRefresh = ::gen_onListRefresh_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_list = resolveEasyComponent("up-list", GenUniModulesUviewUltraComponentsUpListUpListClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-list 双列表嵌套", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-list 双列表嵌套", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B flex flex-col flex-1 h-full"), _uA(
                                    _cE("scroll-view", _uM("type" to "nested", "direction" to "vertical", "class" to "flex-1 h-0"), _uA(
                                        _cE("nested-scroll-header", null, _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border p-_b12px_B pb-0"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-bold text-_b_h2979ff_B mb-_b8px_B"), "列表 1：动态加载列表 (高度 380px)"),
                                                _cV(_component_up_list, _uM("height" to 580, "lower-threshold" to 20, "refresher-enabled" to true, "refresher-triggered" to listRefreshing.value, "class" to "bg-white rounded-_b8px_B shadow-xs", "onScrolltolower" to onListLoadMore, "onRefresherrefresh" to onListRefresh), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE(Fragment, null, RenderHelpers.renderList(listItems.value, fun(item, idx, __index, _cached): Any {
                                                            return _cE("view", _uM("key" to idx, "class" to "weapp-tw-border demo-list-cell"), _uA(
                                                                _cE("view", _uM("class" to "weapp-tw-border demo-list-cell-avatar"), _uA(
                                                                    _cV(_component_up_icon, _uM("name" to "account", "size" to "20", "color" to "#ffffff"))
                                                                )),
                                                                _cE("view", _uM("class" to "weapp-tw-border demo-list-cell-content"), _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-_b500_B text-_b_h303133_B"), _tD(item["title"] as String), 1),
                                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h909399_B mt-_b4px_B"), _tD(item["desc"] as String), 1)
                                                                ))
                                                            ))
                                                        }
                                                        ), 128),
                                                        if (isTrue(listLoading.value)) {
                                                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border list-loading"), _uA(
                                                                _cV(_component_up_loading_icon, _uM("mode" to "circle", "size" to "20")),
                                                                _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h909399_B ml-_b8px_B"), "加载中...")
                                                            ))
                                                        } else {
                                                            _cC("v-if", true)
                                                        }
                                                    )
                                                }
                                                ), "_" to 1), 8, _uA(
                                                    "refresher-triggered"
                                                ))
                                            ))
                                        )),
                                        _cE("nested-scroll-header", null, _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border p-_b12px_B pb-_b24px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-bold text-_b_h19be6b_B mb-_b8px_B"), "列表 2：静态展示列表 (高度 280px)"),
                                                _cV(_component_up_list, _uM("height" to 280, "class" to "bg-white rounded-_b8px_B shadow-xs"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE(Fragment, null, RenderHelpers.renderList(staticListItems.value, fun(item, idx, __index, _cached): Any {
                                                            return _cE("view", _uM("key" to idx, "class" to "weapp-tw-border demo-list-cell"), _uA(
                                                                _cE("view", _uM("class" to "weapp-tw-border w-_b8px_B h-_b8px_B rounded-_b4px_B bg-_b_h19be6b_B mr-_b10px_B")),
                                                                _cE("view", _uM("class" to "weapp-tw-border demo-list-cell-content"), _uA(
                                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B font-_b500_B text-_b_h303133_B"), _tD(item["title"] as String), 1),
                                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h909399_B mt-_b4px_B"), _tD(item["desc"] as String), 1)
                                                                ))
                                                            ))
                                                        }
                                                        ), 128)
                                                    )
                                                }
                                                ), "_" to 1))
                                            ))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-list-cell" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16, "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f5f5f5")), "demo-list-cell-avatar" to _pS(_uM("width" to 40, "height" to 40, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "marginRight" to 12, "backgroundColor" to "#2979ff", "display" to "flex", "justifyContent" to "center", "alignItems" to "center")), "demo-list-cell-content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "list-loading" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "paddingTop" to 15, "paddingRight" to 0, "paddingBottom" to 15, "paddingLeft" to 0)))
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
