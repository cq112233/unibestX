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
open class GenSrcSubTailwindcssTailwindcss : BasePage {
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
        var setup: (__props: GenSrcSubTailwindcssTailwindcss) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubTailwindcssTailwindcss
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val isDark = computed(fun(): Boolean {
                return appStore.state.isDark
            }
            )
            fun gen_toggleDark_fn(): Unit {
                val nextMode = if (appStore.state.isDark) {
                    "light"
                } else {
                    "dark"
                }
                appStore.setThemeMode(nextMode)
            }
            val toggleDark = ::gen_toggleDark_fn
            val buttonColors = _uA(
                "bg-_b_h000_B",
                "bg-_b_h111_B",
                "bg-_b_h222_B",
                "bg-_b_h333_B",
                "bg-_b_h444_B",
                "bg-_b_h555_B",
                "bg-_b_h666_B",
                "bg-_b_h777_B",
                "bg-_b_h888_B",
                "bg-_b_h999_B",
                "bg-_b_haaa_B",
                "bg-_b_hbbb_B",
                "bg-_b_hccc_B",
                "bg-_b_hddd_B",
                "bg-_b_heee_B",
                "bg-_b_hfff_B"
            ) as UTSArray<String>
            val globalNum = ref(0)
            val buttonClass = computed(fun(): String {
                val index: Number = globalNum.value % buttonColors.length
                return buttonColors[index]
            }
            )
            val templateCorpusDynamicClass = computed(fun(): String {
                return "template-corpus-dynamic bg-_b_h68c828_B text-slate-700 text-_b26px_B w-_b323px_B h-_b45px_B leading-_b45px_B px-3"
            }
            )
            fun gen_setGlobalNum_fn(num: Number): Unit {
                globalNum.value = num
            }
            val setGlobalNum = ::gen_setGlobalNum_fn
            onLoad(fun(_options): Unit {
                console.log("欢迎使用 weapp-tailwindcss 模板")
            }
            )
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "weapp-tailwindcss 示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "weapp-tailwindcss 示例", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                                    _cE("view", _uM("class" to _nC(_uA(
                                        "weapp-tw-border content",
                                        _uM("dark" to unref(isDark))
                                    ))), _uA(
                                        _cV(unref(GenSrcSubTailwindcssComponentsWeappTailwindcssClass)),
                                        _cV(unref(GenSrcSubTailwindcssComponentsBindClassClass)),
                                        _cE("button", _uM("class" to "mt-4 w-64 rounded-full px-4 py-2 text-white", "style" to _nS(_uM("backgroundColor" to if (unref(isDark)) {
                                            "#3498db"
                                        } else {
                                            "#eccc68"
                                        }
                                        )), "onClick" to toggleDark), _tD(if (unref(isDark)) {
                                            "切换到亮色模式"
                                        } else {
                                            "切换到暗色模式"
                                        }
                                        ), 5),
                                        _cE("view", _uM("class" to "weapp-tw-border w-full bg-_b_h164e63_B p-_b12px_B issue-1002-probe"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border text-xs text-white"), "issue-1002 text-xs"),
                                            _cE("text", _uM("class" to "weapp-tw-border text-sm text-white"), "issue-1002 text-sm"),
                                            _cE("text", _uM("class" to "weapp-tw-border text-base text-white"), "issue-1002 text-base"),
                                            _cE("text", _uM("class" to "weapp-tw-border text-xl text-white"), "issue-1002 text-xl"),
                                            _cE("view", _uM("class" to "weapp-tw-border mt-_b8px_B h-_b48px_B w-_b48px_B rounded-full bg-_b_hf21903_B")),
                                            _cE("text", _uM("class" to "weapp-tw-border issue-1002-apply"), "issue-1002 scoped apply")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border issue-902-theme-probe issue-902-theme-scope bg-primary p-_b12px_B text-white"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border"), "issue 902 theme variable")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border template-corpus-card flex flex-col gap-3 rounded-_b28px_B border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white shadow-xl wx_cbg-blue-500 h5_cbg-green-500 harmony_cbg-_b_hc64b4b_B ios_cbg-_b_h0169f0_B android_cbg-_b_h2d6f08_B"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border template-corpus-radial bg-_b_he0f2fe_B px-_b48px_B py-_b24px_B text-_b_h123456_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border"), "template corpus radial")
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border template-corpus-space space-y-2"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border rounded-_b20px_B bg-white px-3 py-1 text-_b26px_B text-slate-700"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border"), "space item 1")
                                                )),
                                                _cE("view", _uM("class" to _nC(_uA(
                                                    "weapp-tw-border",
                                                    unref(templateCorpusDynamicClass)
                                                ))), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border"), "space item 2")
                                                ), 2)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border template-corpus-apply"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border"), "apply corpus")
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border my-3 w-full border-t border-solid border-gray-200")),
                                        _cE("text", _uM("class" to "weapp-tw-border text-xl text-gray-600_f95"), " 写法示例Start! "),
                                        _cE("view", _uM("class" to "weapp-tw-border mt-_b13_d14758px_B flex flex-col items-center"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border w-32 rounded-md bg-_b_hf21903_B py-2 text-center text-white"), " 圆角+背景+文本 "),
                                            _cE("view", _uM("class" to "weapp-tw-border mt-3"), _uA(
                                                _cE("button", _uM("class" to _nC(_uA(
                                                    "w-64 text-white",
                                                    unref(buttonClass)
                                                )), "onClick" to fun(){
                                                    setGlobalNum(unref(globalNum) + 1)
                                                }
                                                ), " click here to inc " + _tD(unref(globalNum)), 11, _uA(
                                                    "onClick"
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border test"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b_hda0e3c_B text-center"), " @apply 多端写法示例 ")
                                            )),
                                            _cE("view", _uM("class" to _nC(_uA(
                                                "weapp-tw-border theme-mode-demo mt-4 rounded px-4 py-3",
                                                if (unref(isDark)) {
                                                    "bg-zinc-900 text-zinc-50"
                                                } else {
                                                    "bg-white text-slate-900"
                                                }
                                            ))), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border"), "uni-app x Tailwind CSS v4 system dark"),
                                                _cE("view", _uM("class" to _nC(_uA(
                                                    "weapp-tw-border theme-dark mt-2 rounded px-3 py-2",
                                                    if (unref(isDark)) {
                                                        "bg-zinc-950 text-zinc-50"
                                                    } else {
                                                        "bg-white text-slate-900"
                                                    }
                                                ))), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border"), "uni-app x Tailwind CSS v4 manual dark")
                                                ), 2)
                                            ), 2),
                                            _cV(unref(GenSrcSubTailwindcssComponentsTButtonClass), _uM("t-class" to "bg-_b_h0977ee_B text-_b31rpx_B", "t-class-content" to "px-_b29rpx_B"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border"), "issue 977 t-class")
                                                )
                                            }
                                            ), "_" to 1))
                                        ))
                                    ), 2)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "content" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "paddingTop" to "32rpx", "paddingBottom" to "32rpx")), "test" to _pS(_uM("marginTop" to "24rpx", "display" to "flex", "height" to 100, "width" to 222.222, "alignItems" to "center", "justifyContent" to "center", "borderTopLeftRadius" to 40, "borderTopRightRadius" to 40, "borderBottomRightRadius" to 40, "borderBottomLeftRadius" to 40, "backgroundColor" to "rgba(49,237,216,0.54)")), "issue-1002-apply" to _pS(_uM("borderTopLeftRadius" to 9999, "borderTopRightRadius" to 9999, "borderBottomRightRadius" to 9999, "borderBottomLeftRadius" to 9999, "backgroundColor" to "#164e63", "fontSize" to "24rpx", "lineHeight" to 1.33333, "color" to "#ffffff")))
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
