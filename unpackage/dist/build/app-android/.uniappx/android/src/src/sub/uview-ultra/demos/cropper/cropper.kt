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
open class GenSrcSubUviewUltraDemosCropperCropper : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosCropperCropper) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosCropperCropper
            val _cache = __ins.renderCache
            val croppedPath = ref<String>("")
            val eventLog = ref<String>("")
            val cropperRef = ref(null as ComponentPublicInstance?)
            fun gen_onChoose_fn() {
                val cropper = cropperRef.value
                if (cropper == null) {
                    return
                }
                cropper.`$callMethod`("chooseImage", 0, _uO(), null)
                eventLog.value = "正在选择图片..."
            }
            val onChoose = ::gen_onChoose_fn
            fun gen_onReset_fn() {
                croppedPath.value = ""
                eventLog.value = "已清空结果"
            }
            val onReset = ::gen_onReset_fn
            fun gen_onConfirm_fn(event: UTSJSONObject) {
                val path = event["path"]
                croppedPath.value = if (path == null) {
                    ""
                } else {
                    path.toString()
                }
                val len = croppedPath.value.length
                val prefix = if (len > 24) {
                    "" + croppedPath.value.substring(0, 24) + "..."
                } else {
                    croppedPath.value
                }
                eventLog.value = "confirm => 图片长度 " + len + "，前缀 " + prefix
            }
            val onConfirm = ::gen_onConfirm_fn
            fun gen_onCancel_fn() {
                eventLog.value = "cancel => 已取消裁剪"
            }
            val onCancel = ::gen_onCancel_fn
            fun gen_onError_fn(event: UTSJSONObject) {
                val message = event["message"]
                eventLog.value = "error => " + (if (message == null) {
                    "裁剪失败"
                } else {
                    message.toString()
                }
                )
            }
            val onError = ::gen_onError_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_cropper = resolveEasyComponent("up-cropper", GenUniModulesUviewUltraComponentsUpCropperUpCropperClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-cropper 裁剪", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-cropper 裁剪", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法（选择图片并裁剪）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            if (croppedPath.value.length > 0) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border cropper-preview"), _uA(
                                                    _cE("image", _uM("src" to croppedPath.value, "class" to "cropper-image", "mode" to "aspectFit"), null, 8, _uA(
                                                        "src"
                                                    ))
                                                ))
                                            } else {
                                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border cropper-placeholder"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border cropper-placeholder-text"), "点击下方按钮选择图片并裁剪")
                                                ))
                                            }
                                            ,
                                            _cE("view", _uM("class" to "weapp-tw-border btn-row mt-_b10px_B"), _uA(
                                                _cV(_component_up_button, _uM("text" to "选择图片", "type" to "primary", "size" to "small", "class" to "demo-btn", "onClick" to onChoose)),
                                                _cV(_component_up_button, _uM("text" to "清空结果", "type" to "primary", "plain" to "", "size" to "small", "class" to "demo-btn", "onClick" to onReset))
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border log-text mt-_b10px_B"), _tD(eventLog.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-cropper 支持缩放/旋转/预览/导出，点击组件默认插槽即可唤起裁剪面板；confirm 事件返回的 path 为 base64 data URL，鸿蒙真机 image 组件对 data URL 支持有限，若黑屏属平台限制。 ")
                                        ))
                                    )),
                                    _cV(_component_up_cropper, _uM("ref_key" to "cropperRef", "ref" to cropperRef, "can-change-size" to true, "onConfirm" to onConfirm, "onCancel" to onCancel, "onError" to onError), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border cropper-trigger"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border cropper-trigger-text"), "点击此处打开裁剪（默认插槽）")
                                            ))
                                        )
                                    }
                                    ), "_" to 1), 512)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "cropper-preview" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to "100%", "paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "cropper-image" to _pS(_uM("width" to 260, "height" to 260)), "cropper-placeholder" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to "100%", "height" to 200, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "cropper-placeholder-text" to _pS(_uM("fontSize" to 13, "color" to "#94a3b8")), "cropper-trigger" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "marginTop" to 16, "marginRight" to 16, "marginBottom" to 16, "marginLeft" to 16, "height" to 56, "backgroundColor" to "#0957de", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "cropper-trigger-text" to _pS(_uM("fontSize" to 13, "color" to "#ffffff")), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "btn-row" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "demo-btn" to _pS(_uM("marginRight" to 10)))
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
