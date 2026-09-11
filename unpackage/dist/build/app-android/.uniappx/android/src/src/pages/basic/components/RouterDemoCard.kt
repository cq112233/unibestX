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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsRouterDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsRouterDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsRouterDemoCard
            val _cache = __ins.renderCache
            val tokenStore = useTokenStore()
            val userStore = useUserStore()
            val hasLogin = computed(fun(): Boolean {
                return tokenStore.hasValidLogin()
            }
            )
            fun gen_jumpToTest_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/sub/test/test?id=999&name=UNIX"))
            }
            val jumpToTest = ::gen_jumpToTest_fn
            fun gen_handleLogout_fn() {
                tokenStore.clearToken()
                userStore.clearUserInfo()
                uni_showToast(ShowToastOptions(title = "已清除登录状态", icon = "success"))
            }
            val handleLogout = ::gen_handleLogout_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "路由拦截与传参测试"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1st5nxt-0 wtu-j0fle6-1 wtu-1v2ij9z-2 wtu-1p7g57o-3 wtu-xh5qwk-4 wtu-198xyh6-5"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1mii4ha-6 wtu-1bpud9-7 wtu-1rv0ode-8 wtu-2onxqk-9"), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-qv3lw9-a wtu-v3kjc2-b"), "当前登录状态:"),
                                _cE("text", _uM("class" to "weapp-tw-border", "style" to _nS(_uM("fontSize" to "14px", "fontWeight" to "bold", "color" to if (hasLogin.value) {
                                    "#10b981"
                                } else {
                                    "#f43f5e"
                                }
                                ))), _tD(if (hasLogin.value) {
                                    "已登录"
                                } else {
                                    "未登录"
                                }
                                ), 5)
                            )),
                            _cE("text", _uM("class" to "weapp-tw-border wtu-15y3kej-c wtu-15zxwf2-d wtu-16blrxy-e"), " 测试场景说明：Test 页面属于需登录拦截页面。未登录时点击跳转将拦截并重定向到登录页，登录成功后会自动跳回 Test 页并解析 query 传参。 ")
                        )),
                        _cE("view", _uM("class" to "weapp-tw-border wtu-1mii4ha-6 wtu-1bpud9-7"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1b8tya1-f wtu-16axtl9-g wtu-1d89kne-h wtu-7mwwf1-i wtu-1h8vv6j-j wtu-1mii4ha-6 wtu-1rv0ode-8 wtu-1d05fpi-k", "onClick" to jumpToTest), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-gc256j-l wtu-qv3lw9-a"), "跳转 Test 页 (传参)")
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-1b8tya1-f wtu-1gwi2a9-m wtu-1echmqm-n wtu-1d89kne-h wtu-7mwwf1-i wtu-1h8vv6j-j wtu-1mii4ha-6 wtu-1rv0ode-8 wtu-1d05fpi-k", "onClick" to handleLogout), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border wtu-gc256j-l wtu-qv3lw9-a"), "清除登录状态")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-1st5nxt-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-j0fle6-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-1v2ij9z-2" to _pS(_uM("marginBottom" to 16)), "wtu-1p7g57o-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-xh5qwk-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-198xyh6-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1mii4ha-6" to _pS(_uM("flexDirection" to "row")), "wtu-1bpud9-7" to _pS(_uM("justifyContent" to "space-between")), "wtu-1rv0ode-8" to _pS(_uM("alignItems" to "center")), "wtu-2onxqk-9" to _pS(_uM("marginBottom" to 8)), "wtu-qv3lw9-a" to _pS(_uM("fontSize" to 14)), "wtu-v3kjc2-b" to _pS(_uM("color" to "#64748b")), "wtu-15y3kej-c" to _pS(_uM("fontSize" to 12)), "wtu-15zxwf2-d" to _pS(_uM("color" to "#94a3b8")), "wtu-16blrxy-e" to _pS(_uM("--tw-leading" to "var(--leading-normal, 1.5)", "lineHeight" to 1.5)), "wtu-1b8tya1-f" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-16axtl9-g" to _pS(_uM("backgroundColor" to "#3182ce")), "wtu-1d89kne-h" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-7mwwf1-i" to _pS(_uM("height" to 42)), "wtu-1h8vv6j-j" to _pS(_uM("display" to "flex")), "wtu-1d05fpi-k" to _pS(_uM("justifyContent" to "center")), "wtu-gc256j-l" to _pS(_uM("color" to "#ffffff")), "wtu-1gwi2a9-m" to _pS(_uM("marginLeft" to 12)), "wtu-1echmqm-n" to _pS(_uM("backgroundColor" to "#ef4444")))
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
