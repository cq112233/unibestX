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
open class GenSrcPagesBasicComponentsToastDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsToastDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsToastDemoCard
            val _cache = __ins.renderCache
            fun gen_handleDefaultToast_fn() {
                toast__1("这是一条通过 App.ku 全局组件触发的轻提示")
            }
            val handleDefaultToast = ::gen_handleDefaultToast_fn
            fun gen_handleSuccessToast_fn() {
                toastSuccess("恭喜！全局 Toast 触发成功")
            }
            val handleSuccessToast = ::gen_handleSuccessToast_fn
            fun gen_handleErrorToast_fn() {
                toastError("操作异常，全局 Toast 报错提示")
            }
            val handleErrorToast = ::gen_handleErrorToast_fn
            fun gen_handleWarningToast_fn() {
                toastWarning("注意：这是一条全局警告轻提示")
            }
            val handleWarningToast = ::gen_handleWarningToast_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "全局 Toast 轻提示"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1bttlw5-0 wtu-1uxb1kq-1 wtu-16etgk3-2 wtu-ghwkpc-3 wtu-u4o9tc-4 wtu-gs0gzi-5"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-17lkbu7-6 wtu-q8b26m-7 wtu-h2u4nj-8"), " 通过 App.ku.uvue 全局挂载的 <up-toast />，直接导入 @/src/utils/toast 即可在任意页面与逻辑中唤起轻提示。 ")
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1vpegqf-9 wtu-1ate7qk-a"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1vpegqf-9 wtu-6fefs2-b wtu-1z0mo75-c"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-19zbq4t-d wtu-109salt-e wtu-1d2a3bm-f wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleDefaultToast), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "默认 Toast")
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-19zbq4t-d wtu-h4bkhu-n wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleSuccessToast), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "成功 Toast")
                                ))
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1vpegqf-9 wtu-6fefs2-b"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-19zbq4t-d wtu-109salt-e wtu-kqvbsq-o wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleErrorToast), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "错误 Toast")
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-19zbq4t-d wtu-1hkdjp8-p wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleWarningToast), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "警告 Toast")
                                ))
                            ))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-1bttlw5-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1uxb1kq-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-16etgk3-2" to _pS(_uM("marginBottom" to 16)), "wtu-ghwkpc-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-u4o9tc-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-gs0gzi-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-17lkbu7-6" to _pS(_uM("fontSize" to 12)), "wtu-q8b26m-7" to _pS(_uM("color" to "#64748b")), "wtu-h2u4nj-8" to _pS(_uM("--tw-leading" to "20px", "lineHeight" to "20px")), "wtu-1vpegqf-9" to _pS(_uM("display" to "flex")), "wtu-1ate7qk-a" to _pS(_uM("flexDirection" to "column")), "wtu-6fefs2-b" to _pS(_uM("flexDirection" to "row")), "wtu-1z0mo75-c" to _pS(_uM("marginBottom" to 10)), "wtu-19zbq4t-d" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-109salt-e" to _pS(_uM("marginRight" to 10)), "wtu-1d2a3bm-f" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-7qumcm-g" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-n1y8nz-h" to _pS(_uM("height" to 40)), "wtu-veardi-i" to _pS(_uM("alignItems" to "center")), "wtu-1b7vdei-j" to _pS(_uM("justifyContent" to "center")), "wtu-yniy87-k" to _pS(_uM("color" to "#ffffff")), "wtu-19sabru-l" to _pS(_uM("fontSize" to 13)), "wtu-1lwcb0b-m" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-h4bkhu-n" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-kqvbsq-o" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-1hkdjp8-p" to _pS(_uM("backgroundColor" to "#f59e0b")))
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
