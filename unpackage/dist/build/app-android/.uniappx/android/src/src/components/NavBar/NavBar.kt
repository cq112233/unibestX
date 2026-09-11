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
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
import io.dcloud.uniapp.extapi.reLaunch as uni_reLaunch
open class GenSrcComponentsNavBarNavBar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: String by `$props`
    open var titleColor: String by `$props`
    open var bgColor: String by `$props`
    open var fixed: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var showBack: Boolean by `$props`
    open var border: Boolean by `$props`
    open var isNavbarVisible: Boolean by `$props`
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
        var setup: (__props: GenSrcComponentsNavBarNavBar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcComponentsNavBarNavBar
            val _cache = __ins.renderCache
            val props = __props
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            val effectiveBgColor = computed(fun(): String {
                return if (props.bgColor != "") {
                    props.bgColor
                } else {
                    themeTokens.value.navBg
                }
            }
            )
            val effectiveTitleColor = computed(fun(): String {
                return if (props.titleColor != "") {
                    props.titleColor
                } else {
                    themeTokens.value.navText
                }
            }
            )
            val statusBarHeight = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                if (insets != null && insets.top > 0) {
                    return insets.top
                }
                val info = systemInfo.value
                if (info != null && info.statusBarHeight > 0) {
                    return info.statusBarHeight
                }
                return 0
            }
            )
            fun gen_handleBack_fn() {
                if (!props.showBack) {
                    return
                }
                val pages = getCurrentPages()
                if (pages.length > 1) {
                    uni_navigateBack(NavigateBackOptions(delta = 1))
                } else {
                    uni_reLaunch(ReLaunchOptions(url = "/src/pages/index/index"))
                }
            }
            val handleBack = ::gen_handleBack_fn
            return fun(): Any? {
                return if (isTrue(_ctx.isNavbarVisible)) {
                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border wtu-1aith5s-0"), _uA(
                        _cE("view", _uM("class" to _nC(_uA(
                            "weapp-tw-border",
                            if (_ctx.fixed) {
                                "wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2 wtu-1kuus4x-3 wtu-yudqu9-4 wtu-16gfyql-5 wtu-172k480-6 wtu-1jjdtzl-7"
                            } else {
                                "wtu-1aith5s-0 wtu-1hza0m2-1 wtu-v37xsx-2"
                            }
                        )), "style" to _nS(_uM("backgroundColor" to effectiveBgColor.value, "borderBottomWidth" to if ((_ctx.border && _ctx.isNavbarVisible)) {
                            "1px"
                        } else {
                            "0px"
                        }, "borderBottomStyle" to if ((_ctx.border && _ctx.isNavbarVisible)) {
                            "solid"
                        } else {
                            "none"
                        }, "borderBottomColor" to if ((_ctx.border && _ctx.isNavbarVisible)) {
                            "#e2e8f0"
                        } else {
                            "transparent"
                        }))), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border status-bar", "style" to _nS(_uM("height" to ("" + statusBarHeight.value + "px")))), _uA(
                                renderSlot(_ctx.`$slots`, "statusBar")
                            ), 4),
                            _cE("view", _uM("class" to "weapp-tw-border wtu-18yaopx-8 wtu-1aith5s-0 wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b", "style" to _nS(_uM("height" to ("" + unref(NAVBAR_CONTENT_HEIGHT) + "px")))), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border wtu-2b6zb8-c wtu-yudqu9-4 wtu-tm4vo7-d wtu-16gfyql-5 wtu-1sye3kh-e wtu-wna7a7-f wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-xcw4ny-g"), _uA(
                                    renderSlot(_ctx.`$slots`, "left", _uO(), fun(): UTSArray<Any> {
                                        return _uA(
                                            if (isTrue(_ctx.showBack)) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b wtu-4zyuka-h wtu-1jqsajq-i", "onClick" to handleBack), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border wtu-o68kmh-j wtu-13y4yiu-k wtu-1sg8gtf-l wtu-jkppd5-m wtu-13mafgx-n wtu-1dwvfa3-o wtu-1dc31xl-p", "style" to _nS(_uM("borderLeftColor" to effectiveTitleColor.value, "borderBottomColor" to effectiveTitleColor.value, "transform" to "rotate(45deg)"))), null, 4)
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        )
                                    })
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-1hza0m2-1 wtu-1x7okjj-q wtu-1x9vpnw-r wtu-14uskr-9 wtu-15lgj4j-a wtu-e0ckar-b wtu-19jr9qi-s wtu-edlfxo-t"), _uA(
                                    renderSlot(_ctx.`$slots`, "mid", _uO(), fun(): UTSArray<Any> {
                                        return _uA(
                                            renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                                return _uA(
                                                    if (_ctx.title.length > 0) {
                                                        _cE("text", _uM("key" to 0, "class" to "weapp-tw-border wtu-1roo6rl-u wtu-18wne8y-v wtu-1i83dl2-w", "style" to _nS(_uM("color" to effectiveTitleColor.value))), _tD(_ctx.title), 5)
                                                    } else {
                                                        _cC("v-if", true)
                                                    }
                                                )
                                            })
                                        )
                                    })
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border wtu-2b6zb8-c wtu-yudqu9-4 wtu-tm4vo7-d wtu-172k480-6 wtu-1sye3kh-e wtu-wna7a7-f wtu-1hza0m2-1 wtu-14uskr-9 wtu-15lgj4j-a wtu-1jbsm23-x wtu-cttqi0-y"), _uA(
                                    renderSlot(_ctx.`$slots`, "right")
                                ))
                            ), 4)
                        ), 6),
                        if (isTrue(_ctx.fixed && _ctx.placeholder)) {
                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border", "style" to _nS(_uM("height" to ("" + (statusBarHeight.value + (if (_ctx.isNavbarVisible) {
                                unref(NAVBAR_CONTENT_HEIGHT)
                            } else {
                                0
                            })) + "px")))), null, 4)
                        } else {
                            _cC("v-if", true)
                        }
                    ))
                } else {
                    _cE("view", _uM("key" to 1, "class" to "weapp-tw-border status-bar", "style" to _nS(_uM("height" to ("" + statusBarHeight.value + "px")))), null, 4)
                }
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-1aith5s-0" to _pS(_uM("width" to "100%")), "wtu-1hza0m2-1" to _pS(_uM("display" to "flex")), "wtu-v37xsx-2" to _pS(_uM("flexDirection" to "column")), "wtu-1kuus4x-3" to _pS(_uM("position" to "fixed")), "wtu-yudqu9-4" to _pS(_uM("top" to 0)), "wtu-16gfyql-5" to _pS(_uM("left" to 0)), "wtu-172k480-6" to _pS(_uM("right" to 0)), "wtu-1jjdtzl-7" to _pS(_uM("zIndex" to 999)), "wtu-18yaopx-8" to _pS(_uM("position" to "relative")), "wtu-14uskr-9" to _pS(_uM("flexDirection" to "row")), "wtu-15lgj4j-a" to _pS(_uM("alignItems" to "center")), "wtu-e0ckar-b" to _pS(_uM("justifyContent" to "center")), "wtu-2b6zb8-c" to _pS(_uM("position" to "absolute")), "wtu-tm4vo7-d" to _pS(_uM("bottom" to 0)), "wtu-1sye3kh-e" to _pS(_uM("zIndex" to 10)), "wtu-wna7a7-f" to _pS(_uM("width" to 60)), "wtu-xcw4ny-g" to _pS(_uM("justifyContent" to "flex-start")), "wtu-4zyuka-h" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "wtu-1jqsajq-i" to _pS(_uM("paddingLeft" to 15, "paddingRight" to 15)), "wtu-o68kmh-j" to _pS(_uM("height" to 10)), "wtu-13y4yiu-k" to _pS(_uM("width" to 10)), "wtu-1sg8gtf-l" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 0)), "wtu-jkppd5-m" to _pS(_uM("--tw-border-style" to "solid", "borderRightStyle" to "var(--tw-border-style)", "borderRightWidth" to 0)), "wtu-13mafgx-n" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 2)), "wtu-1dwvfa3-o" to _pS(_uM("--tw-border-style" to "solid", "borderLeftStyle" to "var(--tw-border-style)", "borderLeftWidth" to 2)), "wtu-1dc31xl-p" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1x7okjj-q" to _pS(_uM("height" to "100%")), "wtu-1x9vpnw-r" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-19jr9qi-s" to _pS(_uM("paddingLeft" to 60)), "wtu-edlfxo-t" to _pS(_uM("paddingRight" to 60)), "wtu-1roo6rl-u" to _pS(_uM("fontSize" to 17)), "wtu-18wne8y-v" to _pS(_uM("--tw-font-weight" to "var(--font-weight-semibold, 600)", "fontWeight" to 600)), "wtu-1i83dl2-w" to _pS(_uM("textOverflow" to "ellipsis")), "wtu-1jbsm23-x" to _pS(_uM("justifyContent" to "flex-end")), "wtu-cttqi0-y" to _pS(_uM("paddingRight" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to "String", "default" to ""), "titleColor" to _uM("type" to "String", "default" to ""), "bgColor" to _uM("type" to "String", "default" to ""), "fixed" to _uM("type" to "Boolean", "default" to true), "placeholder" to _uM("type" to "Boolean", "default" to true), "showBack" to _uM("type" to "Boolean", "default" to true), "border" to _uM("type" to "Boolean", "default" to false), "isNavbarVisible" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "titleColor",
            "bgColor",
            "fixed",
            "placeholder",
            "showBack",
            "border",
            "isNavbarVisible"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
