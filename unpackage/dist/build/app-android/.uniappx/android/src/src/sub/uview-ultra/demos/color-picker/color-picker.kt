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
open class GenSrcSubUviewUltraDemosColorPickerColorPicker : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosColorPickerColorPicker) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosColorPickerColorPicker
            val _cache = __ins.renderCache
            val color1 = ref<String>("#ff0000")
            val color2 = ref<String>("#2979ff")
            val color3 = ref<String>("#19be6b")
            val gradientColor = ref<String>("linear-gradient(to right, #ff0000, #0000ff)")
            val customColors = ref<UTSArray<String>>(_uA<String>("#2979ff", "#fa3534", "#19be6b", "#ff9900", "#ff00ff", "#00ffff"))
            val apiLog = ref<String>("")
            val colorPickerRef = ref(null as ComponentPublicInstance?)
            fun gen_onOpenPicker_fn() {
                val picker = colorPickerRef.value
                if (picker != null) {
                    picker.`$callMethod`("open")
                    apiLog.value = "已调用 open()"
                }
            }
            val onOpenPicker = ::gen_onOpenPicker_fn
            fun gen_onConfirm_fn(color: String) {
                apiLog.value = "confirm => " + color
            }
            val onConfirm = ::gen_onConfirm_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_color_picker = resolveEasyComponent("up-color-picker", GenUniModulesUviewUltraComponentsUpColorPickerUpColorPickerClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-color-picker 颜色选择", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-color-picker 颜色选择", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法（点击色块选择颜色）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_color_picker, _uM("modelValue" to color1.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    color1.value = `$event`
                                                }
                                                ), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-text ml-_b12px_B"), "当前颜色：" + _tD(color1.value), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自定义常用颜色")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_color_picker, _uM("modelValue" to color2.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    color2.value = `$event`
                                                }
                                                , "common-colors" to customColors.value), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue",
                                                    "common-colors"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-text ml-_b12px_B"), "当前颜色：" + _tD(color2.value), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "渐变模式（默认值传入渐变字符串）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_color_picker, _uM("modelValue" to gradientColor.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    gradientColor.value = `$event`
                                                }
                                                ), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-text ml-_b12px_B"), _tD(gradientColor.value), 1)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border gradient-preview mt-_b10px_B", "style" to _nS(_uM("background" to gradientColor.value))), null, 4)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "通过 ref 调用 open")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                _cV(_component_up_color_picker, _uM("ref_key" to "colorPickerRef", "ref" to colorPickerRef, "modelValue" to color3.value, "onUpdate:modelValue" to fun(`$event`: String){
                                                    color3.value = `$event`
                                                }
                                                , "onConfirm" to onConfirm), null, 8, _uA(
                                                    "modelValue",
                                                    "onUpdate:modelValue"
                                                )),
                                                _cV(_component_up_button, _uM("text" to "打开选择器", "type" to "primary", "size" to "small", "class" to "demo-btn ml-_b12px_B", "onClick" to onOpenPicker))
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border log-text mt-_b10px_B"), _tD(apiLog.value), 1)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569")), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "gradient-preview" to _pS(_uM("width" to "100%", "height" to 48, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e5e7eb", "borderRightColor" to "#e5e7eb", "borderBottomColor" to "#e5e7eb", "borderLeftColor" to "#e5e7eb")))
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
