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
open class GenSrcSubTailwindcssComponentsBindClass : VueComponent {
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
        var setup: (__props: GenSrcSubTailwindcssComponentsBindClass) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubTailwindcssComponentsBindClass
            val _cache = __ins.renderCache
            val condition = ref(true)
            val extra = ref("wtu-1026j5x-g wtu-1cznegj-h")
            val flag = ref(true)
            val toggled = ref(true)
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border wtu-1m49j0s-0 wtu-n3ob0u-1 wtu-1vc4oyx-2 wtu-or3vkz-3"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border issue-822-component-child wtu-12ysphb-4 wtu-rj66cr-5 wtu-79qmlq-6"), _uA(
                        _cE("text", _uM("class" to "weapp-tw-border wtu-1qewyjj-7"), "issue 822 component child")
                    )),
                    _cE("view", _uM("class" to "weapp-tw-border wtu-hahnwa-8 wtu-79qmlq-6 wtu-1g1ucfi-9 wtu-n3ob0u-1"), _uA(
                        _cE("text", _uM("class" to _nC(_uA(
                            "weapp-tw-border",
                            if (unref(flag)) {
                                "wtu-uj646o-a wtu-v1dixk-b"
                            } else {
                                "wtu-s9xl9u-c"
                            }
                        ))), " simple ", 2),
                        _cE("text", _uM("class" to _nC(_uA(
                            "weapp-tw-border",
                            _uA(
                                unref(extra),
                                _uM("wtu-1l82hkd-d" to unref(toggled))
                            )
                        ))), " complex ", 2),
                        _cE("text", _uM("class" to _nC(_uA(
                            "weapp-tw-border",
                            if (unref(condition)) {
                                "wtu-1hf1vho-e wtu-6xzka-f"
                            } else {
                                ""
                            }
                        ))), " fallback ", 2)
                    ))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "issue-822-component-child" to _pS(_uM("borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#7c3aed", "borderRightColor" to "#7c3aed", "borderBottomColor" to "#7c3aed", "borderLeftColor" to "#7c3aed")), "wtu-1m49j0s-0" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-n3ob0u-1" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1vc4oyx-2" to _pS(_uM("borderTopColor" to "#999999", "borderRightColor" to "#999999", "borderBottomColor" to "#999999", "borderLeftColor" to "#999999")), "wtu-or3vkz-3" to _pS(_uM("paddingTop" to "32rpx", "paddingRight" to "32rpx", "paddingBottom" to "32rpx", "paddingLeft" to "32rpx")), "wtu-12ysphb-4" to _pS(_uM("height" to 200)), "wtu-rj66cr-5" to _pS(_uM("width" to "100%")), "wtu-79qmlq-6" to _pS(_uM("backgroundColor" to "#87add3")), "wtu-1qewyjj-7" to _pS(_uM("color" to "#111111")), "wtu-hahnwa-8" to _pS(_uM("paddingTop" to 20.32, "paddingRight" to 20.32, "paddingBottom" to 20.32, "paddingLeft" to 20.32)), "wtu-1g1ucfi-9" to _pS(_uM("borderTopColor" to "#111111", "borderRightColor" to "#111111", "borderBottomColor" to "#111111", "borderLeftColor" to "#111111")), "wtu-uj646o-a" to _pS(_uM("backgroundColor" to "#123456")), "wtu-v1dixk-b" to _pS(_uM("marginBottom" to 12.32)), "wtu-s9xl9u-c" to _pS(_uM("backgroundColor" to "#d7700a")), "wtu-1l82hkd-d" to _pS(_uM("color" to "#ff0000")), "wtu-1hf1vho-e" to _pS(_uM("backgroundColor" to "#f205f6")), "wtu-6xzka-f" to _pS(_uM("color" to "#70ed0a")), "wtu-1026j5x-g" to _pS(_uM("fontSize" to "93.54rpx")), "wtu-1cznegj-h" to _pS(_uM("backgroundColor" to "#d2e252")))
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
