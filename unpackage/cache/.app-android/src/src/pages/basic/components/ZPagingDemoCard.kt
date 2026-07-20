@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
open class GenSrcPagesBasicComponentsZPagingDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
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
        var setup: (__props: GenSrcPagesBasicComponentsZPagingDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsZPagingDemoCard
            val _cache = __ins.renderCache
            val shouldFail = ref<Boolean>(false)
            val tabList = _uA(
                "全部",
                "技术",
                "设计"
            )
            val tabIndex = ref<Number>(0)
            val pagingX = ref<ComponentPublicInstance?>(null)
            val dataList = ref(_uA<CompactArticleItem>())
            fun gen_onUpdateModelValue_fn(kVal: UTSArray<Any>) {
                dataList.value = kVal as UTSArray<CompactArticleItem>
            }
            val onUpdateModelValue = ::gen_onUpdateModelValue_fn
            fun gen_tabChange_fn(index: Number) {
                tabIndex.value = index
                if (pagingX.value != null) {
                    pagingX.value!!.`$callMethod`("reload")
                }
            }
            val tabChange = ::gen_tabChange_fn
            fun gen_triggerError_fn() {
                shouldFail.value = true
                if (pagingX.value != null) {
                    pagingX.value!!.`$callMethod`("reload")
                }
            }
            val triggerError = ::gen_triggerError_fn
            fun gen_triggerClear_fn() {
                dataList.value = _uA()
                if (pagingX.value != null) {
                    pagingX.value!!.`$callMethod`("complete", _uA<CompactArticleItem>())
                }
            }
            val triggerClear = ::gen_triggerClear_fn
            fun gen_getMockArticles_fn(category: String, pageNo: Number, pageSize: Number): UTSArray<CompactArticleItem> {
                val list = _uA<CompactArticleItem>()
                val start = (pageNo - 1) * pageSize
                run {
                    var i: Number = 0
                    while(i < pageSize){
                        val itemId = start + i + 1
                        if (itemId > 12) {
                            break
                        }
                        var tag = category
                        if (category == "全部") {
                            tag = if (itemId % 2 == 0) {
                                "技术"
                            } else {
                                "设计"
                            }
                        }
                        var tagBgColor = "#e0f2fe"
                        var tagColor = "#0284c7"
                        if (tag == "设计") {
                            tagBgColor = "#f3e8ff"
                            tagColor = "#7c3aed"
                        }
                        list.push(CompactArticleItem(id = itemId, title = "" + tag + "动态 \u00B7 原生探索第 " + itemId + " 篇", summary = "卡片演示中的 " + tag + " 文章，支持局部滚动加载数据。", tag = tag, tagBgColor = tagBgColor, tagColor = tagColor))
                        i++
                    }
                }
                return list
            }
            val getMockArticles = ::gen_getMockArticles_fn
            fun gen_onQuery_fn(pageNo: Number, pageSize: Number) {
                val currentCategory = tabList[tabIndex.value]
                setTimeout(fun(){
                    if (shouldFail.value) {
                        shouldFail.value = false
                        if (pagingX.value != null) {
                            pagingX.value!!.`$callMethod`("completeByError")
                        }
                        return
                    }
                    val data = getMockArticles(currentCategory, pageNo, pageSize)
                    if (pagingX.value != null) {
                        pagingX.value!!.`$callMethod`("complete", data)
                    }
                }
                , 600)
            }
            val onQuery = ::gen_onQuery_fn
            return fun(): Any? {
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_z_paging_x = resolveEasyComponent("z-paging-x", GenUniModulesZPagingXComponentsZPagingXZPagingXClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "数据分页列表 (z-paging-x)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "flex-col mb-12px"), _uA(
                            _cE("text", _uM("class" to "text-13px text-__64748b_ leading-18px mb-8px"), " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
                            _cE("view", _uM("class" to "flex-row mb-12px"), _uA(
                                _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                    _cV(_component_up_button, _uM("size" to "mini", "type" to "error", "plain" to true, "onClick" to triggerError), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            " 模拟加载错误 "
                                        )
                                    }
                                    ), "_" to 1))
                                )),
                                _cE("view", _uM("class" to "flex-1"), _uA(
                                    _cV(_component_up_button, _uM("size" to "mini", "type" to "warning", "plain" to true, "onClick" to triggerClear), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            " 清空数据 "
                                        )
                                    }
                                    ), "_" to 1))
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "bg-white py-8px px-12px border-width-1px border-style-solid border-color-__edf2f7_ border-bottom-width-0px", "style" to _nS(_uM("border-top-left-radius" to "12px", "border-top-right-radius" to "12px"))), _uA(
                            _cE("view", _uM("class" to "flex-row bg-__f1f5f9_ rounded-8px p-2px"), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(tabList, fun(tab, index, __index, _cached): Any {
                                    return _cE("view", _uM("key" to index, "class" to "flex-1 items-center justify-center py-6px rounded-6px", "style" to _nS(_uM("backgroundColor" to if (tabIndex.value === index) {
                                        "#ffffff"
                                    } else {
                                        "transparent"
                                    }
                                    )), "onClick" to fun(){
                                        tabChange(index)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "text-12px font-bold", "style" to _nS(_uM("color" to if (tabIndex.value === index) {
                                            "var(--theme-color, #37c2bc)"
                                        } else {
                                            "#64748b"
                                        }
                                        ))), _tD(tab), 5)
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                }
                                ), 64)
                            ))
                        ), 4),
                        _cV(_component_z_paging_x, _uM("ref_key" to "pagingX", "ref" to pagingX, "model-value" to dataList.value, "default-page-size" to 5, "list-is" to "scroll-view", "paging-style" to _uO("height" to "200px", "border" to "1px solid #edf2f7", "borderTopWidth" to "0px", "borderBottomLeftRadius" to "12px", "borderBottomRightRadius" to "12px", "backgroundColor" to "#f8fafc"), "onUpdate:modelValue" to onUpdateModelValue, "onQuery" to onQuery), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(dataList.value, fun(item, __key, __index, _cached): Any {
                                    return _cE("view", _uM("key" to item.id, "class" to "mx-12px my-8px p-12px bg-white rounded-8px border-width-1px border-style-solid border-color-__edf2f7_"), _uA(
                                        _cE("view", _uM("class" to "flex-row justify-between items-center mb-6px"), _uA(
                                            _cE("view", _uM("style" to _nS(_uM("backgroundColor" to item.tagBgColor, "padding" to "1px 6px", "borderRadius" to "4px"))), _uA(
                                                _cE("text", _uM("style" to _nS(_uM("color" to item.tagColor, "fontSize" to "9px", "fontWeight" to "bold"))), _tD(item.tag), 5)
                                            ), 4),
                                            _cE("text", _uM("class" to "text-11px text-__94a3b8_"), "#" + _tD(item.id), 1)
                                        )),
                                        _cE("text", _uM("class" to "text-14px font-bold text-__1e293b_ mb-4px"), _tD(item.title), 1),
                                        _cE("text", _uM("class" to "text-12px text-__64748b_ leading-16px"), _tD(item.summary), 1)
                                    ))
                                }
                                ), 128)
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "model-value"
                        ))
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
                return _uM("bg-__f1f5f9_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f1f5f9")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "border-bottom-width-0px" to _pS(_uM("borderBottomWidth" to 0)), "border-color-__edf2f7_" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to "700")), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "leading-16px" to _pS(_uM("lineHeight" to "16px")), "leading-18px" to _pS(_uM("lineHeight" to "18px")), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mb-4px" to _pS(_uM("marginBottom" to 4)), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "mr-8px" to _pS(_uM("marginRight" to 8)), "mx-12px" to _pS(_uM("marginLeft" to 12, "marginRight" to 12)), "my-8px" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-2px" to _pS(_uM("paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2)), "px-12px" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "py-6px" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "py-8px" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "rounded-6px" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-11px" to _pS(_uM("fontSize" to 11)), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)))
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
