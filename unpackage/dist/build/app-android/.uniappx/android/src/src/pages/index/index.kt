@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
open class GenSrcPagesIndexIndex : BasePage {
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
        var setup: (__props: GenSrcPagesIndexIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesIndexIndex
            val _cache = __ins.renderCache
            onBackPress(fun(options: OnBackPressOptions): Boolean {
                if (options.from == "backbutton") {
                    return handleBackPressExit()
                }
                return false
            }
            )
            val themeSwitchVal = ref(true)
            val themeSwitchVal2 = ref(false)
            val checkboxValue = ref(_uA<String>("apple"))
            val radioValue = ref("male")
            val sliderValue = ref(30)
            val rateValue = ref(3)
            val isBg = ref(true)
            fun gen_switchBg_fn() {
                isBg.value = !isBg.value
            }
            val switchBg = ::gen_switchBg_fn
            fun gen_goToUiTest_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/sub/uiTest/uiTest"))
            }
            val goToUiTest = ::gen_goToUiTest_fn
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "首页"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", null, _uA(
                                    _cV(_component_NavBar, _uM("title" to "首页", "show-back" to false)),
                                    _cE("view", _uM("class" to "content-container pb-20px"), _uA(
                                        _cE("image", _uM("class" to "w-100px h-100px mx-auto mt-20px rounded-20px", "src" to "/static/logo.png")),
                                        _cE("text", _uM("class" to "text-32px text-bold mx-auto mt-10px text-__d14328_"), " unibestX "),
                                        _cE("text", _uM("class" to "text-center text-25px mt-10px"), " 最好用的 uni-appX 开发模板 "),
                                        _cE("text", _uM("class" to "mt-10px m-auto px-30px text-justify text-16px text-bold"), " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + UnoCss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能，让你编写 uni-appX 拥有 best 体验。 "),
                                        _cE("view", _uM("class" to "mt-15px mx-30px px-20px py-15px rounded-12px", "style" to _nS(_uM("background-color" to "rgba(55, 194, 188, 0.08)"))), _uA(
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🎭 主题换色 — 五种预设主题色，原生与组件同步生效 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 ", 4),
                                            _cE("text", _uM("class" to "text-14px", "style" to _nS(_uM("color" to "#666", "line-height" to "26px"))), " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ", 4)
                                        ), 4)
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
                return _uM("h-100px" to _pS(_uM("height" to 100)), "m-auto" to _pS(_uM("marginTop" to "auto", "marginRight" to "auto", "marginBottom" to "auto", "marginLeft" to "auto")), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-15px" to _pS(_uM("marginTop" to 15)), "mt-20px" to _pS(_uM("marginTop" to 20)), "mx-30px" to _pS(_uM("marginLeft" to 30, "marginRight" to 30)), "mx-auto" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "pb-20px" to _pS(_uM("paddingBottom" to 20)), "px-20px" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "px-30px" to _pS(_uM("paddingLeft" to 30, "paddingRight" to 30)), "py-15px" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-20px" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "text-__d14328_" to _pS(_uM("color" to "#d14328")), "text-14px" to _pS(_uM("fontSize" to 14)), "text-16px" to _pS(_uM("fontSize" to 16)), "text-25px" to _pS(_uM("fontSize" to 25)), "text-32px" to _pS(_uM("fontSize" to 32)), "text-center" to _pS(_uM("textAlign" to "center")), "w-100px" to _pS(_uM("width" to 100)))
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
