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
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsZPagingDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsZPagingDemoCard
            val _cache = __ins.renderCache
            fun gen_onCardTouchStart_fn(): Unit {
                setPageScrollEnabled(false)
            }
            val onCardTouchStart = ::gen_onCardTouchStart_fn
            fun gen_onCardTouchEnd_fn(): Unit {
                setPageScrollEnabled(true)
            }
            val onCardTouchEnd = ::gen_onCardTouchEnd_fn
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
                val _component_z_paging_x = resolveEasyComponent("z-paging-x", GenUniModulesZPagingXComponentsZPagingXZPagingXClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "数据分页列表 (z-paging-x)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-363vo5-0 wtu-1yjgjtw-1"), _uA(
                            _cE("text", _uM("class" to "wtu-1shi4c1-2 wtu-k196jf-3 wtu-ipjkxr-4 wtu-1qa8yup-5"), " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
                            _cE("view", _uM("class" to "wtu-13t3cxb-6 wtu-1yjgjtw-1"), _uA(
                                _cE("view", _uM("class" to "wtu-13lz6jk-7 wtu-dqdach-8"), _uA(
                                    _cE("view", _uM("class" to "wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-11r5j79-c wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f", "onClick" to triggerError), _uA(
                                        _cE("text", _uM("class" to "wtu-1q1c76l-g wtu-a0x5no-h wtu-vbfg4k-i"), "模拟加载错误")
                                    ))
                                )),
                                _cE("view", _uM("class" to "wtu-13lz6jk-7"), _uA(
                                    _cE("view", _uM("class" to "wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-1vy0ete-j wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f", "onClick" to triggerClear), _uA(
                                        _cE("text", _uM("class" to "wtu-12jt6bz-k wtu-a0x5no-h wtu-vbfg4k-i"), "清空数据")
                                    ))
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-1vo8z52-l wtu-1qagzpp-m wtu-unk8et-n wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q wtu-wquw4l-r", "style" to _nS(_uM("border-top-left-radius" to "12px", "border-top-right-radius" to "12px"))), _uA(
                            _cE("view", _uM("class" to "wtu-13t3cxb-6 wtu-9b5i85-s wtu-118m6zx-b wtu-mhanxm-t"), _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(tabList, fun(tab, index, __index, _cached): Any {
                                    return _cE("view", _uM("key" to index, "class" to "wtu-13lz6jk-7 wtu-99t06f-e wtu-1a6bk3r-f wtu-1to6p8f-u wtu-5shwin-v", "style" to _nS(_uM("backgroundColor" to if (tabIndex.value === index) {
                                        "#ffffff"
                                    } else {
                                        "transparent"
                                    }
                                    )), "onClick" to fun(){
                                        tabChange(index)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-a0x5no-h wtu-vbfg4k-i", "style" to _nS(_uM("color" to if (tabIndex.value === index) {
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
                        _cE("view", _uM("onTouchstart" to onCardTouchStart, "onTouchend" to onCardTouchEnd, "onTouchcancel" to onCardTouchEnd), _uA(
                            _cV(_component_z_paging_x, _uM("ref_key" to "pagingX", "ref" to pagingX, "list-is" to "scroll-view", "custom-nested-scroll" to false, "model-value" to dataList.value, "default-page-size" to 10, "paging-style" to _uO("height" to "200px", "border" to "1px solid #edf2f7", "borderTopWidth" to "0px", "borderBottomLeftRadius" to "12px", "borderBottomRightRadius" to "12px", "backgroundColor" to "#f8fafc"), "onUpdate:modelValue" to onUpdateModelValue, "onQuery" to onQuery), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                return _uA(
                                    _cE(Fragment, null, RenderHelpers.renderList(dataList.value, fun(item, __key, __index, _cached): Any {
                                        return _cE("view", _uM("key" to item.id), _uA(
                                            _cE("view", _uM("class" to "wtu-d1mip6-w wtu-1nrqtt4-x wtu-r4yzsb-y wtu-1vo8z52-l wtu-118m6zx-b wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q"), _uA(
                                                _cE("view", _uM("class" to "wtu-13t3cxb-6 wtu-1d8uwje-z wtu-99t06f-e wtu-1qnpy9n-10"), _uA(
                                                    _cE("view", _uM("style" to _nS(_uM("backgroundColor" to item.tagBgColor, "padding" to "1px 6px", "borderRadius" to "4px"))), _uA(
                                                        _cE("text", _uM("style" to _nS(_uM("color" to item.tagColor, "fontSize" to "9px", "fontWeight" to "bold"))), _tD(item.tag), 5)
                                                    ), 4),
                                                    _cE("text", _uM("class" to "wtu-tfarvr-11 wtu-1oi0tuv-12"), "#" + _tD(item.id), 1)
                                                )),
                                                _cE("text", _uM("class" to "wtu-s0l2i6-13 wtu-vbfg4k-i wtu-fw3sss-14 wtu-10ykoyt-15"), _tD(item.title), 1),
                                                _cE("text", _uM("class" to "wtu-a0x5no-h wtu-k196jf-3 wtu-fbtvf1-16"), _tD(item.summary), 1)
                                            ))
                                        ))
                                    }
                                    ), 128)
                                )
                            }
                            ), "_" to 1), 8, _uA(
                                "model-value"
                            ))
                        ), 32)
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
                return _uM("wtu-363vo5-0" to _pS(_uM("flexDirection" to "column")), "wtu-1yjgjtw-1" to _pS(_uM("marginBottom" to 12)), "wtu-1shi4c1-2" to _pS(_uM("fontSize" to 13)), "wtu-k196jf-3" to _pS(_uM("color" to "#64748b")), "wtu-ipjkxr-4" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-1qa8yup-5" to _pS(_uM("marginBottom" to 8)), "wtu-13t3cxb-6" to _pS(_uM("flexDirection" to "row")), "wtu-13lz6jk-7" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-dqdach-8" to _pS(_uM("marginRight" to 8)), "wtu-1q4uxtw-9" to _pS(_uM("width" to "100%")), "wtu-1wj5rfx-a" to _pS(_uM("height" to 36)), "wtu-118m6zx-b" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-11r5j79-c" to _pS(_uM("backgroundColor" to "#fee2e2")), "wtu-cab7ja-d" to _pS(_uM("display" to "flex")), "wtu-99t06f-e" to _pS(_uM("alignItems" to "center")), "wtu-1a6bk3r-f" to _pS(_uM("justifyContent" to "center")), "wtu-1q1c76l-g" to _pS(_uM("color" to "#dc2626")), "wtu-a0x5no-h" to _pS(_uM("fontSize" to 12)), "wtu-vbfg4k-i" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1vy0ete-j" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-12jt6bz-k" to _pS(_uM("color" to "#d97706")), "wtu-1vo8z52-l" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-1qagzpp-m" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "wtu-unk8et-n" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-1n43ppt-o" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-5jnqzp-p" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1s5dir1-q" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "wtu-wquw4l-r" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 0)), "wtu-9b5i85-s" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-mhanxm-t" to _pS(_uM("paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2)), "wtu-1to6p8f-u" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "wtu-5shwin-v" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-d1mip6-w" to _pS(_uM("marginLeft" to 12, "marginRight" to 12)), "wtu-1nrqtt4-x" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "wtu-r4yzsb-y" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "wtu-1d8uwje-z" to _pS(_uM("justifyContent" to "space-between")), "wtu-1qnpy9n-10" to _pS(_uM("marginBottom" to 6)), "wtu-tfarvr-11" to _pS(_uM("fontSize" to 11)), "wtu-1oi0tuv-12" to _pS(_uM("color" to "#94a3b8")), "wtu-s0l2i6-13" to _pS(_uM("fontSize" to 14)), "wtu-fw3sss-14" to _pS(_uM("color" to "#1e293b")), "wtu-10ykoyt-15" to _pS(_uM("marginBottom" to 4)), "wtu-fbtvf1-16" to _pS(_uM("--tw-leading" to "16px", "lineHeight" to "16px")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
