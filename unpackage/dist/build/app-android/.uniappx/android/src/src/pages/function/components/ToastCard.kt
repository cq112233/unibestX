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
open class GenSrcPagesFunctionComponentsToastCard : VueComponent {
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
        var setup: (__props: GenSrcPagesFunctionComponentsToastCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsToastCard
            val _cache = __ins.renderCache
            val customMsg = ref<String>("来自 Function 功能页的 Toast 消息！")
            fun gen_showCustomToast_fn() {
                if (customMsg.value.trim() == "") {
                    toast__1("请输入提示内容")
                    return
                }
                toast__1(customMsg.value)
            }
            val showCustomToast = ::gen_showCustomToast_fn
            fun gen_showSuccessToast_fn() {
                toastSuccess("Function 页面全局 Toast 触发成功！")
            }
            val showSuccessToast = ::gen_showSuccessToast_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "全局 Toast 提示调用"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-mnbm96-0 wtu-1bq9shh-1 wtu-13ryylq-2 wtu-33hvuz-3 wtu-4tuys3-4 wtu-8r66y1-5"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-3i3gs6-6 wtu-1pd9yl-7 wtu-aahijk-8"), " 演示从功能页调用 App.ku.uvue 全局挂载的 <up-toast ref=\"uToastRef\" />，支持自定义消息、类型与轻提示反馈。 ")
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-4tpahe-9"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-3i3gs6-6 wtu-b5uul9-a wtu-9szial-b"), "自定义 Toast 内容"),
                            _cE("input", _uM("modelValue" to customMsg.value, "onInput" to fun(`$event`: UniInputEvent){
                                customMsg.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要提示的文字内容", "class" to "wtu-16m9tth-c wtu-19clxu8-d wtu-6x9tj9-e wtu-y4lian-f wtu-33hvuz-3 wtu-4tuys3-4 wtu-f8q5hx-g wtu-1l8aqp8-h wtu-12c53hp-i"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1yca3x4-j wtu-clldfh-k"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-bte5oa-l wtu-nw1q8k-m wtu-zsktp1-n wtu-13pz9mv-o wtu-1b6qia0-p wtu-1yca3x4-j wtu-clldfh-k wtu-xpmuf1-q wtu-164irp9-r", "onClick" to showCustomToast), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-pubmk8-s wtu-1tbrxcb-t wtu-bj9ji2-u"), "弹出自定义 Toast")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-bte5oa-l wtu-zhey3t-v wtu-13pz9mv-o wtu-1b6qia0-p wtu-1yca3x4-j wtu-clldfh-k wtu-xpmuf1-q wtu-164irp9-r", "onClick" to showSuccessToast), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-pubmk8-s wtu-1tbrxcb-t wtu-bj9ji2-u"), "弹出成功 Toast")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-mnbm96-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1bq9shh-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-13ryylq-2" to _pS(_uM("marginBottom" to 16)), "wtu-33hvuz-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-4tuys3-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-8r66y1-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-3i3gs6-6" to _pS(_uM("fontSize" to 12)), "wtu-1pd9yl-7" to _pS(_uM("color" to "#64748b")), "wtu-aahijk-8" to _pS(_uM("--tw-leading" to "20px", "lineHeight" to "20px")), "wtu-4tpahe-9" to _pS(_uM("marginBottom" to 12)), "wtu-b5uul9-a" to _pS(_uM("color" to "#94a3b8")), "wtu-9szial-b" to _pS(_uM("marginBottom" to 6)), "wtu-16m9tth-c" to _pS(_uM("height" to 38)), "wtu-19clxu8-d" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-6x9tj9-e" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-y4lian-f" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-f8q5hx-g" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-1l8aqp8-h" to _pS(_uM("fontSize" to 14)), "wtu-12c53hp-i" to _pS(_uM("color" to "#334155")), "wtu-1yca3x4-j" to _pS(_uM("display" to "flex")), "wtu-clldfh-k" to _pS(_uM("flexDirection" to "row")), "wtu-bte5oa-l" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-nw1q8k-m" to _pS(_uM("marginRight" to 10)), "wtu-zsktp1-n" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-13pz9mv-o" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1b6qia0-p" to _pS(_uM("height" to 40)), "wtu-xpmuf1-q" to _pS(_uM("alignItems" to "center")), "wtu-164irp9-r" to _pS(_uM("justifyContent" to "center")), "wtu-pubmk8-s" to _pS(_uM("color" to "#ffffff")), "wtu-1tbrxcb-t" to _pS(_uM("fontSize" to 13)), "wtu-bj9ji2-u" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-zhey3t-v" to _pS(_uM("backgroundColor" to "#10b981")))
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
