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
open class GenSrcSubUviewUltraDemosSignatureSignature : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosSignatureSignature) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosSignatureSignature
            val _cache = __ins.renderCache
            val bgColor = ref<String>("#ffffff")
            val sigRef1 = ref(null as ComponentPublicInstance?)
            val sigRef2 = ref(null as ComponentPublicInstance?)
            val exportPath = ref<String>("")
            val eventLog = ref<String>("绘制完成后点击工具栏对勾导出，confirm 事件返回图片路径")
            fun gen_onConfirm_fn(path: String) {
                exportPath.value = path
                eventLog.value = "confirm => " + path
            }
            val onConfirm = ::gen_onConfirm_fn
            fun gen_onError_fn(msg: Any?) {
                val text = if (msg == null) {
                    "unknown"
                } else {
                    msg.toString()
                }
                eventLog.value = "error => " + text
            }
            val onError = ::gen_onError_fn
            fun gen_onClear_fn() {
                eventLog.value = "clear => 已清空"
            }
            val onClear = ::gen_onClear_fn
            fun gen_clearSig2_fn() {
                val sig = sigRef2.value
                if (sig != null) {
                    sig.`$callMethod`("clearCanvas")
                    eventLog.value = "clear => 第二块签名已清空"
                }
            }
            val clearSig2 = ::gen_clearSig2_fn
            fun gen_exportSig2_fn() {
                val sig = sigRef2.value
                if (sig != null) {
                    sig.`$callMethod`("exportSignature")
                }
            }
            val exportSig2 = ::gen_exportSig2_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_signature = resolveEasyComponent("up-signature", GenUniModulesUviewUltraComponentsUpSignatureUpSignatureClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-signature 签名", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-signature 签名", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基本用法（带工具栏，可撤销/清空/调粗细/换颜色/导出）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_signature, _uM("ref_key" to "sigRef1", "ref" to sigRef1, "width" to 300, "height" to 200, "bg-color" to bgColor.value, "onConfirm" to onConfirm, "onError" to onError, "onClear" to onClear), null, 8, _uA(
                                                "bg-color"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自定义样式（红色笔、粗细 5、隐藏工具栏）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_signature, _uM("ref_key" to "sigRef2", "ref" to sigRef2, "width" to 300, "height" to 160, "bg-color" to "#fff7e6", "color" to "#ff4d4f", "thickness" to 5, "show-toolbar" to false, "onConfirm" to onConfirm, "onError" to onError), null, 512),
                                            _cE("view", _uM("class" to "weapp-tw-border sig-actions"), _uA(
                                                _cV(_component_up_button, _uM("text" to "清空", "type" to "primary", "plain" to "", "size" to "small", "class" to "sig-btn", "onClick" to clearSig2)),
                                                _cV(_component_up_button, _uM("text" to "导出", "type" to "primary", "size" to "small", "class" to "sig-btn", "onClick" to exportSig2))
                                            ))
                                        )),
                                        if (exportPath.value != "") {
                                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                                _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                    return _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "导出结果预览")
                                                    )
                                                }), "_" to 1)),
                                                _cE("image", _uM("src" to exportPath.value, "class" to "preview-image", "mode" to "aspectFit"), null, 8, _uA(
                                                    "src"
                                                ))
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-signature 已适配 vdom/vapor 双模式：App 端（安卓/iOS）基于 DrawableContext 原生绘制，鸿蒙基于 canvas 组件，H5 支持触摸与鼠标绘制、小程序沿用 canvas 2d 实现；支持 undo / clearCanvas / redraw / exportSignature 实例方法，confirm 事件返回导出的图片路径，error 事件返回错误信息。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "sig-actions" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "flex-end", "marginTop" to 10)), "sig-btn" to _pS(_uM("marginLeft" to 10)), "preview-image" to _pS(_uM("width" to "100%", "height" to 160, "backgroundColor" to "#f8fafc", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")))
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
