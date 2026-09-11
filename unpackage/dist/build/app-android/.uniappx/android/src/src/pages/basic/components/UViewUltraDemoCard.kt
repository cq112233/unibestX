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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsUViewUltraDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsUViewUltraDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsUViewUltraDemoCard
            val _cache = __ins.renderCache
            fun gen_copyWebsiteUrl_fn() {
                uni_setClipboardData(SetClipboardDataOptions(data = "https://uview-ultra.lingyun.net/", success = fun(_){
                    uni_showToast(ShowToastOptions(title = "官网网址已复制到剪贴板", icon = "none"))
                }
                ))
            }
            val copyWebsiteUrl = ::gen_copyWebsiteUrl_fn
            fun gen_navigateToShowcase_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/sub/uview-ultra/uview-ultra", fail = fun(err){
                    console.error("navigateToShowcase fail:", err)
                }
                ))
            }
            val navigateToShowcase = ::gen_navigateToShowcase_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "uview-ultra 组件库"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-13iqdf5-0 wtu-1d5cxys-1"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-w1o5fx-2 wtu-1785dy7-3 wtu-pfly9v-4 wtu-1kr9ink-5"), " uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库，高度适配 UTS 强类型系统与原生跨端开发，包含按钮、表单、反馈等丰富且精美的组件集。 "),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1q4tojf-6 wtu-w5085f-7 wtu-16me7zd-8 wtu-430mh4-9 wtu-19kp62j-a wtu-1kr9ink-5", "onClick" to copyWebsiteUrl), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-1ksfa3k-b wtu-1qimyho-c wtu-4bvek0-d wtu-1ltypld-e"), "官网："),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-1ksfa3k-b wtu-ficp91-f wtu-htznmv-g wtu-6q2ecc-h"), "https://uview-ultra.lingyun.net/"),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-eqrddv-i wtu-1vmhsdv-j"), "点击复制")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1q4tojf-6 wtu-w5085f-7 wtu-mjrjfl-k wtu-1r3ycv9-l"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-4xy5je-q wtu-18q4kl-r wtu-1dzl0d5-s wtu-1gc7zx2-t"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-eqrddv-i wtu-ficp91-f wtu-4bvek0-d"), "高品质组件")
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1tb23ev-m wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1s7ijmi-u wtu-18q4kl-r wtu-1dzl0d5-s wtu-1fh5oba-v"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-eqrddv-i wtu-2n85i1-w wtu-4bvek0-d"), "原生 UTS 支持")
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-mjrjfl-k wtu-ffxk5r-n wtu-loqjyq-o wtu-emxvyn-p wtu-1gfg2fq-x wtu-18q4kl-r wtu-1dzl0d5-s wtu-1y4kgb1-y"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-eqrddv-i wtu-3gfhmb-z wtu-4bvek0-d"), "跨端一致性")
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1qytvm8-10 wtu-15ubny6-11 wtu-1g7vkj5-12 wtu-y5c8pz-13 wtu-23qlii-14 wtu-1q4tojf-6 wtu-w5085f-7 wtu-1v0n2r7-15", "onClick" to navigateToShowcase), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-53w5ye-16 wtu-1o11cnm-17 wtu-moifc8-18"), "进入 uview-ultra 示例")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-13iqdf5-0" to _pS(_uM("flexDirection" to "column")), "wtu-1d5cxys-1" to _pS(_uM("marginBottom" to 16)), "wtu-w1o5fx-2" to _pS(_uM("fontSize" to 13)), "wtu-1785dy7-3" to _pS(_uM("color" to "#64748b")), "wtu-pfly9v-4" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-1kr9ink-5" to _pS(_uM("marginBottom" to 12)), "wtu-1q4tojf-6" to _pS(_uM("flexDirection" to "row")), "wtu-w5085f-7" to _pS(_uM("alignItems" to "center")), "wtu-16me7zd-8" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-430mh4-9" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "wtu-19kp62j-a" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1ksfa3k-b" to _pS(_uM("fontSize" to 12)), "wtu-1qimyho-c" to _pS(_uM("color" to "#475569")), "wtu-4bvek0-d" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-1ltypld-e" to _pS(_uM("marginRight" to 4)), "wtu-ficp91-f" to _pS(_uM("color" to "#2563eb")), "wtu-htznmv-g" to _pS(_uM("textDecorationLine" to "underline")), "wtu-6q2ecc-h" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-eqrddv-i" to _pS(_uM("fontSize" to 11)), "wtu-1vmhsdv-j" to _pS(_uM("color" to "#94a3b8")), "wtu-mjrjfl-k" to _pS(_uM("marginBottom" to 4)), "wtu-1r3ycv9-l" to _pS(_uM("flexWrap" to "wrap")), "wtu-1tb23ev-m" to _pS(_uM("marginRight" to 6)), "wtu-ffxk5r-n" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "wtu-loqjyq-o" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "wtu-emxvyn-p" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-4xy5je-q" to _pS(_uM("backgroundColor" to "#e0edff")), "wtu-18q4kl-r" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1dzl0d5-s" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1gc7zx2-t" to _pS(_uM("borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe")), "wtu-1s7ijmi-u" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-1fh5oba-v" to _pS(_uM("borderTopColor" to "#a7f3d0", "borderRightColor" to "#a7f3d0", "borderBottomColor" to "#a7f3d0", "borderLeftColor" to "#a7f3d0")), "wtu-2n85i1-w" to _pS(_uM("color" to "#059669")), "wtu-1gfg2fq-x" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-1y4kgb1-y" to _pS(_uM("borderTopColor" to "#fde68a", "borderRightColor" to "#fde68a", "borderBottomColor" to "#fde68a", "borderLeftColor" to "#fde68a")), "wtu-3gfhmb-z" to _pS(_uM("color" to "#d97706")), "wtu-1qytvm8-10" to _pS(_uM("width" to "100%")), "wtu-15ubny6-11" to _pS(_uM("height" to 44)), "wtu-1g7vkj5-12" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-y5c8pz-13" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-23qlii-14" to _pS(_uM("display" to "flex")), "wtu-1v0n2r7-15" to _pS(_uM("justifyContent" to "center")), "wtu-53w5ye-16" to _pS(_uM("color" to "#ffffff")), "wtu-1o11cnm-17" to _pS(_uM("fontSize" to 14)), "wtu-moifc8-18" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)))
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
