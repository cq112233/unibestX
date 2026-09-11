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
open class GenSrcPagesFunctionComponentsZPagingDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesFunctionComponentsZPagingDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsZPagingDemoCard
            val _cache = __ins.renderCache
            val showList = ref<Boolean>(true)
            val loadFailed = ref<Boolean>(false)
            val tabList = _uA(
                "全部",
                "技术",
                "设计"
            )
            val tabIndex = ref<Number>(0)
            val pagingX = ref<ComponentPublicInstance?>(null)
            val dataList = ref(_uA<CompactArticleItem>())
            val emptyText = "暂无数据 ~"
            val emptyErrorText = "加载失败，请点击重试"
            fun gen_onUpdateModelValue_fn(kVal: UTSArray<Any>) {
                dataList.value = kVal as UTSArray<CompactArticleItem>
            }
            val onUpdateModelValue = ::gen_onUpdateModelValue_fn
            fun gen_tabChange_fn(index: Number) {
                tabIndex.value = index
                loadFailed.value = false
                showList.value = true
                if (pagingX.value != null) {
                    pagingX.value!!.`$callMethod`("reload")
                }
            }
            val tabChange = ::gen_tabChange_fn
            fun gen_triggerError_fn() {
                dataList.value = _uA()
                loadFailed.value = true
                showList.value = false
            }
            val triggerError = ::gen_triggerError_fn
            fun gen_triggerClear_fn() {
                dataList.value = _uA()
                loadFailed.value = false
                showList.value = false
            }
            val triggerClear = ::gen_triggerClear_fn
            fun gen_onEmptyReload_fn() {
                loadFailed.value = false
                showList.value = true
            }
            val onEmptyReload = ::gen_onEmptyReload_fn
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
                    loadFailed.value = false
                    val data = getMockArticles(currentCategory, pageNo, pageSize)
                    if (pagingX.value != null) {
                        pagingX.value!!.`$callMethod`("complete", data)
                    }
                }
                , 600)
            }
            val onQuery = ::gen_onQuery_fn
            return fun(): Any? {
                val _component_z_paging_x = resolveEasyComponent("z-paging-x", GenUniModulesZPagingXComponentsZPagingXZPagingXClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "数据分页列表 (z-paging-x)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-363vo5-0 wtu-1yjgjtw-1"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1shi4c1-2 wtu-k196jf-3 wtu-ipjkxr-4 wtu-1qa8yup-5"), " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-13t3cxb-6 wtu-1yjgjtw-1"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-13lz6jk-7 wtu-dqdach-8"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-11r5j79-c wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f", "onClick" to triggerError), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-1q1c76l-g wtu-a0x5no-h wtu-vbfg4k-i"), "模拟加载错误")
                                    ))
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-13lz6jk-7"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-1vy0ete-j wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f", "onClick" to triggerClear), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-12jt6bz-k wtu-a0x5no-h wtu-vbfg4k-i"), "清空数据")
                                    ))
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1vo8z52-l wtu-1qagzpp-m wtu-unk8et-n wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q wtu-wquw4l-r", "style" to _nS(_uM("border-top-left-radius" to "12px", "border-top-right-radius" to "12px"))), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-13t3cxb-6 wtu-9b5i85-s wtu-118m6zx-b wtu-mhanxm-t"), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(tabList, fun(tab, index, __index, _cached): Any {
                                    return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                                        "weapp-tw-border wtu-13lz6jk-7 wtu-99t06f-e wtu-1a6bk3r-f wtu-1to6p8f-u wtu-5shwin-v",
                                        if (tabIndex.value === index) {
                                            "wtu-1vo8z52-l"
                                        } else {
                                            "wtu-9b5i85-s"
                                        }
                                    )), "onClick" to fun(){
                                        tabChange(index)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to _nC(_uA(
                                            "weapp-tw-border wtu-a0x5no-h wtu-vbfg4k-i",
                                            if (tabIndex.value === index) {
                                                "wtu-1vqo4p2-w"
                                            } else {
                                                "wtu-k196jf-3"
                                            }
                                        ))), _tD(tab), 3)
                                    ), 10, _uA(
                                        "onClick"
                                    ))
                                }
                                ), 64)
                            ))
                        ), 4),
                        if (isTrue(showList.value)) {
                            _cV(_component_z_paging_x, _uM("key" to 0, "ref_key" to "pagingX", "ref" to pagingX, "list-is" to "list-view", "list-id" to "zpagingDemoList", "custom-nested-scroll" to true, "model-value" to dataList.value, "default-page-size" to 10, "show-back-to-top" to true, "back-to-top-threshold" to 60, "paging-style" to _uO("height" to "200px", "border" to "1px solid #edf2f7", "borderTopWidth" to "0px", "borderBottomLeftRadius" to "12px", "borderBottomRightRadius" to "12px", "backgroundColor" to "#f8fafc"), "onUpdate:modelValue" to onUpdateModelValue, "onQuery" to onQuery), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                return _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(dataList.value, fun(item, __key, __index, _cached): Any {
                                        return _cE("list-item", _uM("key" to item.id), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-d1mip6-x wtu-1nrqtt4-y wtu-r4yzsb-z wtu-1vo8z52-l wtu-118m6zx-b wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border wtu-13t3cxb-6 wtu-1d8uwje-10 wtu-99t06f-e wtu-1qnpy9n-11"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("backgroundColor" to item.tagBgColor, "padding" to "1px 6px", "borderRadius" to "4px"))), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("color" to item.tagColor, "fontSize" to "9px", "fontWeight" to "bold"))), _tD(item.tag), 5)
                                                    ), 4),
                                                    _cE("text", _uM("class" to "weapp-tw-border wtu-tfarvr-12 wtu-1oi0tuv-13"), "#" + _tD(item.id), 1)
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-s0l2i6-14 wtu-vbfg4k-i wtu-fw3sss-15 wtu-10ykoyt-16"), _tD(item.title), 1),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-a0x5no-h wtu-k196jf-3 wtu-fbtvf1-17"), _tD(item.summary), 1)
                                            ))
                                        ))
                                    }), 128)
                                )
                            }), "_" to 1), 8, _uA(
                                "model-value"
                            ))
                        } else {
                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border wtu-cab7ja-d wtu-363vo5-0 wtu-99t06f-e wtu-1a6bk3r-f", "style" to _nS(_uM("height" to "200px", "background-color" to "#f8fafc", "border" to "1px solid #edf2f7", "border-top-width" to "0px", "border-bottom-left-radius" to "12px", "border-bottom-right-radius" to "12px"))), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-1g95nuf-18 wtu-19vg9w2-19"), _tD(if (loadFailed.value) {
                                    "😓"
                                } else {
                                    "📭"
                                }
                                ), 1),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-1shi4c1-2 wtu-1oi0tuv-13 wtu-hi0epa-1a"), _tD(if (loadFailed.value) {
                                    emptyErrorText
                                } else {
                                    emptyText
                                }
                                ), 1),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1weq3bl-1b wtu-o763ll-1c wtu-118m6zx-b wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f", "style" to _nS(_uM("background-color" to "#37c2bc")), "onClick" to onEmptyReload), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-a0x5no-h wtu-1cgqaq-1d wtu-vbfg4k-i"), _tD(if (loadFailed.value) {
                                        "点击重试"
                                    } else {
                                        "点击刷新"
                                    }
                                    ), 1)
                                ), 4)
                            ), 4)
                        }
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-363vo5-0" to _pS(_uM("flexDirection" to "column")), "wtu-1yjgjtw-1" to _pS(_uM("marginBottom" to 12)), "wtu-1shi4c1-2" to _pS(_uM("fontSize" to 13)), "wtu-k196jf-3" to _pS(_uM("color" to "#64748b")), "wtu-ipjkxr-4" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-1qa8yup-5" to _pS(_uM("marginBottom" to 8)), "wtu-13t3cxb-6" to _pS(_uM("flexDirection" to "row")), "wtu-13lz6jk-7" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-dqdach-8" to _pS(_uM("marginRight" to 8)), "wtu-1q4uxtw-9" to _pS(_uM("width" to "100%")), "wtu-1wj5rfx-a" to _pS(_uM("height" to 36)), "wtu-118m6zx-b" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-11r5j79-c" to _pS(_uM("backgroundColor" to "#fee2e2")), "wtu-cab7ja-d" to _pS(_uM("display" to "flex")), "wtu-99t06f-e" to _pS(_uM("alignItems" to "center")), "wtu-1a6bk3r-f" to _pS(_uM("justifyContent" to "center")), "wtu-1q1c76l-g" to _pS(_uM("color" to "#dc2626")), "wtu-a0x5no-h" to _pS(_uM("fontSize" to 12)), "wtu-vbfg4k-i" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1vy0ete-j" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-12jt6bz-k" to _pS(_uM("color" to "#d97706")), "wtu-1vo8z52-l" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-1qagzpp-m" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "wtu-unk8et-n" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-1n43ppt-o" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-5jnqzp-p" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1s5dir1-q" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "wtu-wquw4l-r" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 0)), "wtu-9b5i85-s" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-mhanxm-t" to _pS(_uM("paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2)), "wtu-1to6p8f-u" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "wtu-5shwin-v" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1vqo4p2-w" to _pS(_uM("color" to "#37c2bc")), "wtu-d1mip6-x" to _pS(_uM("marginLeft" to 12, "marginRight" to 12)), "wtu-1nrqtt4-y" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "wtu-r4yzsb-z" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "wtu-1d8uwje-10" to _pS(_uM("justifyContent" to "space-between")), "wtu-1qnpy9n-11" to _pS(_uM("marginBottom" to 6)), "wtu-tfarvr-12" to _pS(_uM("fontSize" to 11)), "wtu-1oi0tuv-13" to _pS(_uM("color" to "#94a3b8")), "wtu-s0l2i6-14" to _pS(_uM("fontSize" to 14)), "wtu-fw3sss-15" to _pS(_uM("color" to "#1e293b")), "wtu-10ykoyt-16" to _pS(_uM("marginBottom" to 4)), "wtu-fbtvf1-17" to _pS(_uM("--tw-leading" to "16px", "lineHeight" to "16px")), "wtu-1g95nuf-18" to _pS(_uM("fontSize" to 28)), "wtu-19vg9w2-19" to _pS(_uM("marginBottom" to 10)), "wtu-hi0epa-1a" to _pS(_uM("marginBottom" to 14)), "wtu-1weq3bl-1b" to _pS(_uM("height" to 32)), "wtu-o763ll-1c" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "wtu-1cgqaq-1d" to _pS(_uM("color" to "#ffffff")))
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
