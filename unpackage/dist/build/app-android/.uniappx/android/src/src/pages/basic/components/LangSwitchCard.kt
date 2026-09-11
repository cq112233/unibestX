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
        var setup: (__props: GenSrcPagesBasicComponentsLangSwitchCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsLangSwitchCard
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val langTitle = computed(fun(): String {
                return `$t`("basic.langTitle")
            }
            )
            val langPreview = computed(fun(): String {
                return `$t`("basic.langPreview")
            }
            )
            val welcomeText = computed(fun(): String {
                return `$t`("message.welcome")
            }
            )
            val helloText = computed(fun(): String {
                return `$t`("message.hello", _uO("msg" to "hi"))
            }
            )
            val uviewPreview = computed(fun(): String {
                return `$t`("basic.uviewPreview")
            }
            )
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
            val uViewChooseDates = computed(fun(): String {
                val _dummy = currentLocale.value
                return t("up.calendar.chooseDates", _uO())
            }
            )
            val uViewConfirm = computed(fun(): String {
                val _dummy = currentLocale.value
                return t("up.common.confirm", _uO())
            }
            )
            val uViewStart = computed(fun(): String {
                val _dummy = currentLocale.value
                return t("up.common.start", _uO())
            }
            )
            val uViewEnd = computed(fun(): String {
                val _dummy = currentLocale.value
                return t("up.common.end", _uO())
            }
            )
            fun gen_switchLanguage_fn(lang: String) {
                appStore.setLocale(lang)
                setTabbarItem()
                uni_showToast(ShowToastOptions(title = `$t`("message.switch_success"), icon = "none", duration = 1500))
            }
            val switchLanguage = ::gen_switchLanguage_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to langTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-zeqk4z-0 wtu-1py2ikc-1 wtu-1aqjbfx-2 wtu-w8jmyu-3 wtu-opyasy-4 wtu-13g5z0w-5"), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8"), _tD(langPreview.value), 1),
                            _cE("text", _uM("class" to "weapp-tw-border wtu-f1cbux-9 wtu-tg5bk5-a wtu-uqoqln-b"), _tD(welcomeText.value), 1),
                            _cE("text", _uM("class" to "weapp-tw-border wtu-1wrjlrz-c wtu-apgfmb-d wtu-1nykptg-e"), _tD(helloText.value), 1),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-16287mo-f wtu-u63ba2-g wtu-ui2fkq-h")),
                            _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8"), _tD(uviewPreview.value), 1),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j wtu-uadth0-k"), _uA(
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-3p92ns-l wtu-zus43i-m wtu-grn2i8-n wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t"), _tD(uViewChooseDates.value), 1),
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-3p92ns-l wtu-6g0b4e-u wtu-en5wvg-v wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t"), _tD(uViewConfirm.value), 1),
                                    _cE("text", _uM("class" to "weapp-tw-border wtu-3p92ns-l wtu-ky8bvg-w wtu-14ion4g-x wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-l3s08e-t"), _tD(uViewStart.value) + " / " + _tD(uViewEnd.value), 1)
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z", "onClick" to fun(){
                            switchLanguage("zh-CN")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j"), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r"), "简体中文")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j"), _uA(
                                if (isTrue(isZhCN.value)) {
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
                        _cE("view", _uM("class" to "weapp-tw-border wtu-16287mo-f wtu-u63ba2-g")),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z", "onClick" to fun(){
                            switchLanguage("en-US")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j"), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r"), "English")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1xpqddw-i wtu-1t7tavk-j"), _uA(
                                if (isTrue(isEnUS.value)) {
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-zeqk4z-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1py2ikc-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-1aqjbfx-2" to _pS(_uM("marginBottom" to 16)), "wtu-w8jmyu-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-opyasy-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-13g5z0w-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1vqucrp-6" to _pS(_uM("fontSize" to 12)), "wtu-9qob8-7" to _pS(_uM("color" to "#94a3b8")), "wtu-1hy0bj4-8" to _pS(_uM("marginBottom" to 6)), "wtu-f1cbux-9" to _pS(_uM("fontSize" to 16)), "wtu-tg5bk5-a" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-uqoqln-b" to _pS(_uM("color" to "#1e293b")), "wtu-1wrjlrz-c" to _pS(_uM("fontSize" to 14)), "wtu-apgfmb-d" to _pS(_uM("color" to "#475569")), "wtu-1nykptg-e" to _pS(_uM("marginTop" to 8)), "wtu-16287mo-f" to _pS(_uM("height" to 1)), "wtu-u63ba2-g" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-ui2fkq-h" to _pS(_uM("marginTop" to 12, "marginBottom" to 12)), "wtu-1xpqddw-i" to _pS(_uM("flexDirection" to "row")), "wtu-1t7tavk-j" to _pS(_uM("alignItems" to "center")), "wtu-uadth0-k" to _pS(_uM("flexWrap" to "wrap")), "wtu-3p92ns-l" to _pS(_uM("fontSize" to 13)), "wtu-zus43i-m" to _pS(_uM("color" to "#2563eb")), "wtu-grn2i8-n" to _pS(_uM("backgroundColor" to "#eff6ff")), "wtu-j3s3ch-o" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "wtu-1x56in2-p" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "wtu-8n2rm8-q" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-re8qpd-r" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-11kd58a-s" to _pS(_uM("marginRight" to 8)), "wtu-l3s08e-t" to _pS(_uM("marginBottom" to 4)), "wtu-6g0b4e-u" to _pS(_uM("color" to "#059669")), "wtu-en5wvg-v" to _pS(_uM("backgroundColor" to "#ecfdf5")), "wtu-ky8bvg-w" to _pS(_uM("color" to "#d97706")), "wtu-14ion4g-x" to _pS(_uM("backgroundColor" to "#fffbe2")), "wtu-1fek2j3-y" to _pS(_uM("justifyContent" to "space-between")), "wtu-17qg8e9-z" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "wtu-6xv57u-10" to _pS(_uM("fontSize" to 15)), "wtu-1au22ic-11" to _pS(_uM("color" to "#334155")))
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
