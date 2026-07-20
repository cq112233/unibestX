@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsLangSwitchCard : VueComponent {
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
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
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
        var setup: (__props: GenSrcPagesBasicComponentsLangSwitchCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsLangSwitchCard
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val currentLocale = computed(fun(): String {
                return appStore.state.locale
            }
            )
            val isZhCN = computed(fun(): Boolean {
                return currentLocale.value == "zh-CN"
            }
            )
            val isEnUS = computed(fun(): Boolean {
                return currentLocale.value == "en-US"
            }
            )
            fun gen_switchLanguage_fn(lang: String) {
                appStore.setLocale(lang)
                uni_showToast(ShowToastOptions(title = t("message.switch_success", null), icon = "none", duration = 1500))
            }
            val switchLanguage = ::gen_switchLanguage_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to _ctx.`$t`("basic.langTitle")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-12px text-__94a3b8_ mb-6px"), _tD(_ctx.`$t`("basic.langPreview")), 1),
                            _cE("text", _uM("class" to "text-16px font-bold text-__1e293b_"), _tD(_ctx.`$t`("message.welcome")), 1),
                            _cE("text", _uM("class" to "text-14px text-__475569_ mt-8px"), _tD(_ctx.`$t`("message.hello", _uO("msg" to "hi"))), 1)
                        )),
                        _cE("view", _uM("class" to "flex-row items-center justify-between py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_", "onClick" to fun(){
                            switchLanguage("zh-CN")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cE("text", _uM("class" to "text-15px text-__334155_ font-medium"), "简体中文")
                            )),
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                if (isTrue(unref(isZhCN))) {
                                    _cV(_component_uni_icons, _uM("key" to 0, "type" to "checkmarkempty", "size" to "20", "style" to _nS(_uM("color" to "#3b82f6"))), null, 8, _uA(
                                        "style"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        ), 8, _uA(
                            "onClick"
                        )),
                        _cE("view", _uM("class" to "flex-row items-center justify-between py-12px", "onClick" to fun(){
                            switchLanguage("en-US")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                _cE("text", _uM("class" to "text-15px text-__334155_ font-medium"), "English")
                            )),
                            _cE("view", _uM("class" to "flex-row items-center"), _uA(
                                if (isTrue(unref(isEnUS))) {
                                    _cV(_component_uni_icons, _uM("key" to 0, "type" to "checkmarkempty", "size" to "20", "style" to _nS(_uM("color" to "#3b82f6"))), null, 8, _uA(
                                        "style"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        ), 8, _uA(
                            "onClick"
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
                return _uM("bg-__3b82f6_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3b82f6")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "border-bottom-color-__f1f5f9_" to _pS(_uM("borderBottomColor" to "#f1f5f9")), "border-bottom-style-solid" to _pS(_uM("borderBottomStyle" to "solid")), "border-bottom-width-1px" to _pS(_uM("borderBottomWidth" to 1)), "border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to "700")), "font-medium" to _pS(_uM("fontWeight" to "500")), "h-20px" to _pS(_uM("height" to 20)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mt-8px" to _pS(_uM("marginTop" to 8)), "none" to _pS(_uM("display" to "none")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "py-12px" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "rounded-10px" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__475569_" to _pS(_uM("color" to "#475569")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-15px" to _pS(_uM("fontSize" to 15)), "text-16px" to _pS(_uM("fontSize" to 16)), "text-white" to _pS(_uM("color" to "rgba(255,255,255,var(--un-color-opacity,1))")), "w-20px" to _pS(_uM("width" to 20)))
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
