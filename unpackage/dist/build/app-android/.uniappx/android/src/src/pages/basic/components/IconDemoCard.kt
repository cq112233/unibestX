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
open class GenSrcPagesBasicComponentsIconDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsIconDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsIconDemoCard
            val _cache = __ins.renderCache
            val iconDemoTitle = computed(fun(): String {
                return `$t`("basic.iconDemoTitle")
            }
            )
            val svgAuthWarning = computed(fun(): String {
                return `$t`("basic.svgAuthWarning")
            }
            )
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                val _component_l_icon = resolveEasyComponent("l-icon", GenUniModulesLimeIconComponentsLIconLIconClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to iconDemoTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1i1fm6y-7 wtu-b8dflc-8")),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b"), "uni-icon")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cV(_component_uni_icons, _uM("type" to "contact", "size" to "26", "style" to _nS(_uM("color" to "#3b82f6", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-lbze2f-c wtu-1uc842y-d"), "contact")
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-3wtn0e-e wtu-u07xcs-f")),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-vs4ahm-g wtu-b8dflc-8")),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-no3ft0-h"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b"), "lime-icon"),
                                    _cE("view", _uM("class" to "weapp-tw-border wtu-159q4wc-i wtu-1wj9wbu-j wtu-dktp6a-k wtu-vjo5gh-l wtu-bevybu-m wtu-p0dhsv-n wtu-kl7gdk-o wtu-11fbxns-p wtu-1da3t5c-q"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-12mw64h-r wtu-nnvrio-s"), _tD(svgAuthWarning.value), 1)
                                    ))
                                ))
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cV(_component_l_icon, _uM("name" to "circle", "size" to "24", "style" to _nS(_uM("color" to "#10b981", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-lbze2f-c wtu-1uc842y-d"), "circle")
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-3wtn0e-e wtu-u07xcs-f")),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1fmwiif-t wtu-b8dflc-8")),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b"), "up-icon (uview-ultra)")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cV(_component_up_icon, _uM("name" to "setting", "size" to "24", "style" to _nS(_uM("color" to "#a855f7", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "weapp-tw-border wtu-lbze2f-c wtu-1uc842y-d"), "setting")
                            ))
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "title"
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-edh1ze-0" to _pS(_uM("flexDirection" to "row")), "wtu-r2og8u-1" to _pS(_uM("alignItems" to "center")), "wtu-1c6w9qp-2" to _pS(_uM("justifyContent" to "space-between")), "wtu-e32pgj-3" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "wtu-jjoyn4-4" to _pS(_uM("width" to 6)), "wtu-ubwupt-5" to _pS(_uM("height" to 6)), "wtu-1u0ls6d-6" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "wtu-1i1fm6y-7" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-b8dflc-8" to _pS(_uM("marginRight" to 8)), "wtu-kba525-9" to _pS(_uM("fontSize" to 14)), "wtu-1dcwght-a" to _pS(_uM("color" to "#475569")), "wtu-1lor33j-b" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-lbze2f-c" to _pS(_uM("fontSize" to 12)), "wtu-1uc842y-d" to _pS(_uM("color" to "#94a3b8")), "wtu-3wtn0e-e" to _pS(_uM("height" to 1)), "wtu-u07xcs-f" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-vs4ahm-g" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-no3ft0-h" to _pS(_uM("flexDirection" to "column")), "wtu-159q4wc-i" to _pS(_uM("backgroundColor" to "#fff1f2")), "wtu-1wj9wbu-j" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-dktp6a-k" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "wtu-vjo5gh-l" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "wtu-bevybu-m" to _pS(_uM("marginTop" to 4)), "wtu-p0dhsv-n" to _pS(_uM("alignSelf" to "flex-start")), "wtu-kl7gdk-o" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-11fbxns-p" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1da3t5c-q" to _pS(_uM("borderTopColor" to "#ffe4e6", "borderRightColor" to "#ffe4e6", "borderBottomColor" to "#ffe4e6", "borderLeftColor" to "#ffe4e6")), "wtu-12mw64h-r" to _pS(_uM("fontSize" to 10)), "wtu-nnvrio-s" to _pS(_uM("color" to "#f43f5e")), "wtu-1fmwiif-t" to _pS(_uM("backgroundColor" to "#a855f7")))
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
