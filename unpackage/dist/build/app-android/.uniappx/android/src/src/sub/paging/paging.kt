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
open class GenSrcSubPagingPaging : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcSubPagingPaging) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubPagingPaging
            val _cache = __ins.renderCache
            val tabList = _uA(
                "全部",
                "技术",
                "设计",
                "生活"
            )
            val tabIndex = ref<Number>(0)
            val pagingX = ref<ComponentPublicInstance?>(null)
            val dataList = ref(_uA<ArticleItem>())
            fun gen_onUpdateModelValue_fn(kVal: UTSArray<Any>) {
                dataList.value = kVal as UTSArray<ArticleItem>
            }
            val onUpdateModelValue = ::gen_onUpdateModelValue_fn
            fun gen_getMockArticles_fn(category: String, pageNo: Number, pageSize: Number): UTSArray<ArticleItem> {
                val list = _uA<ArticleItem>()
                val start = (pageNo - 1) * pageSize
                run {
                    var i: Number = 0
                    while(i < pageSize){
                        val itemId = start + i + 1
                        if (itemId > 35) {
                            break
                        }
                        var tag = category
                        if (category == "全部") {
                            val idx = itemId % 3
                            if (idx == 0) {
                                tag = "技术"
                            } else if (idx == 1) {
                                tag = "设计"
                            } else {
                                tag = "生活"
                            }
                        }
                        var tagBgColor = "#e0f2fe"
                        var tagColor = "#0284c7"
                        if (tag == "设计") {
                            tagBgColor = "#f3e8ff"
                            tagColor = "#7c3aed"
                        } else if (tag == "生活") {
                            tagBgColor = "#dcfce7"
                            tagColor = "#16a34a"
                        }
                        list.push(ArticleItem(id = itemId, title = "" + tag + "专栏 \u00B7 探索移动端开发的未来第 " + itemId + " 篇", summary = "这是关于 " + tag + " 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。", author = "技术专家 · unix", createTime = "06-04 15:" + (30 - i), tag = tag, tagBgColor = tagBgColor, tagColor = tagColor))
                        i++
                    }
                }
                return list
            }
            val getMockArticles = ::gen_getMockArticles_fn
            fun gen_onQuery_fn(pageNo: Number, pageSize: Number) {
                val currentCategory = tabList[tabIndex.value]
                setTimeout(fun(){
                    try {
                        val data = getMockArticles(currentCategory, pageNo, pageSize)
                        if (pagingX.value != null) {
                            pagingX.value!!.`$callMethod`("complete", data)
                        }
                    }
                     catch (e: Throwable) {
                        if (pagingX.value != null) {
                            pagingX.value!!.`$callMethod`("completeByError")
                        }
                    }
                }
                , 800)
            }
            val onQuery = ::gen_onQuery_fn
            fun gen_tabChange_fn(index: Number) {
                tabIndex.value = index
                if (pagingX.value != null) {
                    pagingX.value!!.`$callMethod`("reload")
                }
            }
            val tabChange = ::gen_tabChange_fn
            return fun(): Any? {
                val _component_z_paging_x = resolveEasyComponent("z-paging-x", GenUniModulesZPagingXComponentsZPagingXZPagingXClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "分页加载 (z-paging-x)", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "flex flex-col flex-1 h-full bg-_b_hf7fafc_B"), _uA(
                                    _cE("view", _uM("class" to "bg-white py-_b12px_B px-_b16px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf1f5f9_B"), _uA(
                                        _cE("view", _uM("class" to "flex-row bg-_b_hf1f5f9_B rounded-_b12px_B p-_b4px_B"), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(tabList, fun(tab, index, __index, _cached): Any {
                                                return _cE("view", _uM("key" to index, "class" to "flex-1 items-center justify-center py-_b8px_B rounded-_b8px_B", "style" to _nS(_uM("backgroundColor" to if (tabIndex.value === index) {
                                                    "#ffffff"
                                                } else {
                                                    "transparent"
                                                }
                                                )), "onClick" to fun(){
                                                    tabChange(index)
                                                }
                                                ), _uA(
                                                    _cE("text", _uM("class" to "text-_b13px_B font-bold", "style" to _nS(_uM("color" to if (tabIndex.value === index) {
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
                                    )),
                                    _cV(_component_z_paging_x, _uM("ref_key" to "pagingX", "ref" to pagingX, "model-value" to dataList.value, "default-page-size" to 10, "class" to "flex-1", "onUpdate:modelValue" to onUpdateModelValue, "onQuery" to onQuery), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(dataList.value, fun(item, __key, __index, _cached): Any {
                                                return _cE("list-item", _uM("key" to item.id), _uA(
                                                    _cE("view", _uM("class" to "mx-_b16px_B my-_b8px_B p-_b16px_B bg-white rounded-_b12px_B border-_b1px_B border-solid border-_b_hedf2f7_B shadow-sm"), _uA(
                                                        _cE("view", _uM("class" to "flex-row justify-between items-center mb-_b8px_B"), _uA(
                                                            _cE("view", _uM("style" to _nS(_uM("backgroundColor" to item.tagBgColor, "padding" to "2px 8px", "borderRadius" to "6px"))), _uA(
                                                                _cE("text", _uM("style" to _nS(_uM("color" to item.tagColor, "fontSize" to "10px", "fontWeight" to "bold"))), _tD(item.tag), 5)
                                                            ), 4),
                                                            _cE("text", _uM("class" to "text-_b12px_B text-_b_h94a3b8_B"), "#" + _tD(item.id), 1)
                                                        )),
                                                        _cE("text", _uM("class" to "text-_b15px_B font-bold text-_b_h1e293b_B mb-_b6px_B"), _tD(item.title), 1),
                                                        _cE("text", _uM("class" to "text-_b13px_B text-_b_h64748b_B leading-_b18px_B mb-_b12px_B"), _tD(item.summary), 1),
                                                        _cE("view", _uM("class" to "flex-row justify-between items-center border-t-_b1px_B border-top-style-solid border-top-color-_b_hf8fafc_B pt-_b8px_B"), _uA(
                                                            _cE("text", _uM("class" to "text-_b12px_B text-_b_h475569_B font-medium"), _tD(item.author), 1),
                                                            _cE("text", _uM("class" to "text-_b11px_B text-_b_h94a3b8_B"), _tD(item.createTime), 1)
                                                        ))
                                                    ))
                                                ))
                                            }
                                            ), 128)
                                        )
                                    }
                                    ), "_" to 1), 8, _uA(
                                        "model-value"
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
                return _uM("flex" to _pS(_uM("display" to "flex")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "h-full" to _pS(_uM("height" to "100%")), "bg-_b_hf7fafc_B" to _pS(_uM("backgroundColor" to "#f7fafc")), "bg-white" to _pS(_uM("backgroundColor" to "#ffffff")), "py-_b12px_B" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "px-_b16px_B" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "border-b-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 1)), "flex-row" to _pS(_uM("flexDirection" to "row")), "bg-_b_hf1f5f9_B" to _pS(_uM("backgroundColor" to "#f1f5f9")), "rounded-_b12px_B" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "p-_b4px_B" to _pS(_uM("paddingTop" to 4, "paddingRight" to 4, "paddingBottom" to 4, "paddingLeft" to 4)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "py-_b8px_B" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "rounded-_b8px_B" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-_b13px_B" to _pS(_uM("fontSize" to 13)), "font-bold" to _pS(_uM("--tw-font-weight" to "700", "fontWeight" to 700)), "mx-_b16px_B" to _pS(_uM("marginLeft" to 16, "marginRight" to 16)), "my-_b8px_B" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "p-_b16px_B" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "border-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "border-solid" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-_b_hedf2f7_B" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "shadow-sm" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "mb-_b8px_B" to _pS(_uM("marginBottom" to 8)), "text-_b12px_B" to _pS(_uM("fontSize" to 12)), "text-_b_h94a3b8_B" to _pS(_uM("color" to "#94a3b8")), "text-_b15px_B" to _pS(_uM("fontSize" to 15)), "text-_b_h1e293b_B" to _pS(_uM("color" to "#1e293b")), "mb-_b6px_B" to _pS(_uM("marginBottom" to 6)), "text-_b_h64748b_B" to _pS(_uM("color" to "#64748b")), "leading-_b18px_B" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "mb-_b12px_B" to _pS(_uM("marginBottom" to 12)), "border-t-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 1)), "pt-_b8px_B" to _pS(_uM("paddingTop" to 8)), "text-_b_h475569_B" to _pS(_uM("color" to "#475569")), "font-medium" to _pS(_uM("--tw-font-weight" to "500", "fontWeight" to 500)), "text-_b11px_B" to _pS(_uM("fontSize" to 11)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
