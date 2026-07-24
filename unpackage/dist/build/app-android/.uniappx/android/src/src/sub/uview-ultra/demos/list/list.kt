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
        var setup: (__props: GenSrcSubUviewUltraDemosListList) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosListList
            val _cache = __ins.renderCache
            val listItems = ref(_uA<UTSJSONObject>(_uO("title" to "List 列表项 01", "desc" to "这是高性能列表的第一项"), _uO("title" to "List 列表项 02", "desc" to "支持下拉刷新和滚动加载更多"), _uO("title" to "List 列表项 03", "desc" to "基于 scroll-view 封装"), _uO("title" to "List 列表项 04", "desc" to "适用于长列表滚动场景"), _uO("title" to "List 列表项 05", "desc" to "内置 refresher 下拉刷新能力"), _uO("title" to "List 列表项 06", "desc" to "支持 scrolltolower 触底加载")))
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
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_list = resolveEasyComponent("up-list", GenUniModulesUviewUltraComponentsUpListUpListClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-list 列表"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "up-list 列表", "auto-back" to true, "safe-area-inset-top" to true, "bg-color" to "#ffffff")),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "高性能列表"),
                                            _cV(_component_up_list, _uM("height" to 300, "lower-threshold" to 20, "refresher-enabled" to true, "refresher-triggered" to listRefreshing.value, "onScrolltolower" to onListLoadMore, "onRefresherrefresh" to onListRefresh), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(listItems.value, fun(item, idx, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to idx, "class" to "demo-list-cell"), _uA(
                                                            _cE("view", _uM("class" to "demo-list-cell-avatar"), _uA(
                                                                _cV(_component_up_icon, _uM("name" to "account", "size" to "20", "color" to "#ffffff"))
                                                            )),
                                                            _cE("view", _uM("class" to "demo-list-cell-content"), _uA(
                                                                _cE("text", _uM("class" to "text-14px font-500 text-__303133_"), _tD(item["title"] as String), 1),
                                                                _cE("text", _uM("class" to "text-12px text-__909399_ mt-4px"), _tD(item["desc"] as String), 1)
                                                            ))
                                                        ))
                                                    }
                                                    ), 128),
                                                    if (isTrue(listLoading.value)) {
                                                        _cE("view", _uM("key" to 0, "class" to "list-loading"), _uA(
                                                            _cV(_component_up_loading_icon, _uM("mode" to "circle", "size" to "20")),
                                                            _cE("text", _uM("class" to "text-12px text-__909399_ ml-8px"), "加载中...")
                                                        ))
                                                    } else {
                                                        _cC("v-if", true)
                                                    }
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "refresher-triggered"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "简单静态列表"),
                                            _cV(_component_up_list, _uM("height" to 200), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList(10, fun(item, idx, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to idx, "class" to "demo-list-cell"), _uA(
                                                            _cE("text", _uM("class" to "text-14px font-500 text-__303133_"), "静态列表项 " + _tD(item), 1)
                                                        ))
                                                    }
                                                    ), 64)
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
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "font-500" to _pS(_uM("fontWeight" to 500)), "ml-8px" to _pS(_uM("marginLeft" to 8)), "mt-12px" to _pS(_uM("marginTop" to 12)), "mt-4px" to _pS(_uM("marginTop" to 4)), "none" to _pS(_uM("display" to "none")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "text-__303133_" to _pS(_uM("color" to "#303133")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "demo-list-cell" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16, "backgroundColor" to "#ffffff", "borderBottomWidth" to 1, "borderBottomStyle" to "solid", "borderBottomColor" to "#f5f5f5")), "demo-list-cell-avatar" to _pS(_uM("width" to 40, "height" to 40, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "marginRight" to 12, "backgroundColor" to "#2979ff", "display" to "flex", "justifyContent" to "center", "alignItems" to "center")), "demo-list-cell-content" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "list-loading" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "paddingTop" to 15, "paddingRight" to 0, "paddingBottom" to 15, "paddingLeft" to 0)))
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
