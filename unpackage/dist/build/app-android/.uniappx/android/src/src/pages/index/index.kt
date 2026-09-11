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
        var setup: (__props: GenSrcPagesIndexIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesIndexIndex
            val _cache = __ins.renderCache
            val systemInfo__1 = computed<SystemInfoType?>(fun(): SystemInfoType? {
                return systemInfo.value
            }
            )
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 1000)
            }
            )
            onNavbarPageScroll(fun(ref__1){
                var scrollTop = ref__1.scrollTop
                console.log("onNavbarPageScroll 触发，当前滚动距离:", scrollTop)
            }
            )
            onNavbarReachBottom(fun(){
                console.log("onNavbarReachBottom 触发，已滑动到底部")
            }
            )
            onBackPress(fun(options: OnBackPressOptions): Boolean {
                if (options.from == "backbutton") {
                    return handleBackPressExit()
                }
                return false
            }
            )
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), _uM("custom-page-class" to "border-radius-12", "custom-page-style" to "background-color: transparent;", "layout" to "navbar", "show-back" to false, "hide-navbar" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarBackgroundColor" to "#ffffff", "navigationBarTitleText" to "首页", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("custom-page-class" to "border-radius-12", "custom-page-style" to "background-color: transparent;", "show-back" to false, "hide-navbar" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarBackgroundColor" to "#ffffff", "navigationBarTitleText" to "首页", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border content-container"), _uA(
                                        _cE("image", _uM("class" to "wtu-1ijr6ye-0 wtu-jhzgjb-1 wtu-1kpaxbq-2 wtu-76k8bv-3 wtu-u3sk51-4", "src" to "/static/logo.png")),
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-11fqucj-5 wtu-1h272rc-6 wtu-1kpaxbq-2 wtu-1ni8q32-7 wtu-a7oh1k-8"), _tD(systemInfo__1.value?.appTitle ?: ""), 1),
                                        _cE("text", _uM("class" to "weapp-tw-border wtu-6d0iwi-9 wtu-6kdfg0-a wtu-1uoczot-b wtu-2lciq2-c wtu-1ax9487-d"), " 最好用的 uni-appX 开发模板 "),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1j2jqw-e wtu-167by10-f wtu-1if6fbe-g wtu-13uepsk-h wtu-bb1xdk-i wtu-mm3ayz-j wtu-uhfqvn-k wtu-194vqw9-l wtu-3a2iag-m wtu-y7fbel-n wtu-u0kjb1-o wtu-14wfwos-p"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u"), "编译平台"),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-16wxq6m-x"), _tD(systemInfo__1.value?.platformName ?: ""), 1)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10")),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u"), "当前环境"),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w", "style" to _nS(_uM("color" to if (systemInfo__1.value?.env == "test") {
                                                    "#d97706"
                                                } else {
                                                    if (systemInfo__1.value?.env == "production") {
                                                        "#dc2626"
                                                    } else {
                                                        "#059669"
                                                    }
                                                }
                                                ))), _tD(systemInfo__1.value?.envName ?: ""), 5)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10")),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u"), "渲染模式"),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1qqe9yz-11"), _tD(if (systemInfo__1.value?.isVapor == true) {
                                                    "Vapor"
                                                } else {
                                                    "VDOM"
                                                }
                                                ), 1)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10")),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u"), "应用版本"),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1eeu7o1-12"), "v" + _tD(systemInfo__1.value?.appVersion ?: ""), 1)
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-w81r72-y wtu-cc0q1m-z wtu-9qzku8-10")),
                                            _cE("view", _uM("class" to "weapp-tw-border wtu-1f3lg56-q wtu-u0kjb1-o wtu-1oyjgn1-r"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-1qvyibs-s wtu-1jbj2n1-t wtu-5hesch-u"), "编译引擎"),
                                                _cE("text", _uM("class" to "weapp-tw-border wtu-127y8dy-v wtu-oogtoa-w wtu-1uoczot-b"), _tD(systemInfo__1.value?.compilerVersion ?: ""), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-1ni8q32-7 wtu-f2chv7-13 wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-w9w6vm-16"), " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + weapp-tailwindcss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了 ECharts 图表、主题配置、暗黑模式、加密方式配置等常用功能与基本组件，让你编写 uni-appX 拥有 best 体验。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1f7ofdn-1c"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-joy599-1d"), " ⚡ 渲染模式：本项目全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　Vapor 蒸汽模式是新一代渲染引擎，渲染性能超过原生，Android 端语法要求更宽松，AI 友好度与动态性更强；从 2026 年起将逐渐替代老的 VDOM 模式。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　推荐使用 Vapor 蒸汽模式，可在 manifest.json 中按需切换回 VDOM 模式。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　注意：Vapor 模式下开发过的代码，切换回 VDOM 模式可能因编译检查更严格而报类型或语法错误，请按需选择。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-xwsxph-1f"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-4yix9d-1g"), " 🧪 沙盒独立调试模式（Page Sandbox）：单页/模块秒级极速开发 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　大型项目或分包页面众多时，开启沙盒模式可仅编译指定目标页面（自动置为启动首页），跳过全量页面构建与 TabBar 启动开销，启动与热重载快如闪电。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-2lciq2-c wtu-w9w6vm-16"), " 　　• 方式一（代码级・推荐）：在任意页面的 definePage 中配置： "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 - debug: true（开启当前页面沙盒调试） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 - debugHome: true（将当前页面设为沙盒默认启动首页，排在第 1 位） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 - debug: false（拥有最高一票否决权，调试完成后改回 false 即可退出沙盒） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-1kxtjp2-15 wtu-2lciq2-c wtu-w9w6vm-16 wtu-aycepd-1l"), " 　　• 方式二（环境级・批量）：在 .env 文件中配置： "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 - VITE_DEV_SANDBOX=true（开启环境级沙盒） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-tp9td9-1i wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 - VITE_DEV_SANDBOX_PAGES=src/sub/auth/login, src/sub/auth/*（指定单页/多页/通配符路径） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-t0imyz-1h wtu-1eeu7o1-12 wtu-2lciq2-c wtu-1dx92xw-1j wtu-hqukzp-1k"), " 　　 ⭐ 优先级规则：.env 开启时拥有最高优先级，完全以 .env 指定的页面为主（自动覆盖代码内的 debug 声明）；.env 关闭时才回退按代码级 debug 独立调试。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-4yix9d-1g wtu-2lciq2-c wtu-w9w6vm-16 wtu-1ax9487-d"), " 　　🔒 安全保护：调试期间全内存路由接管，绝不修改与污染 pages.config.json 生产全量配置！ ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1ed0d8l-1m"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-1ein7bi-1n"), " 🎨 样式引擎：Tailwind CSS v4 + weapp-tailwindcss "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　weapp-tailwindcss 是 uni-app X 的 Tailwind CSS 适配方案，类名写法与 Web 端完全一致：支持方括号任意值（text-[14px]、mt-[12px]、bg-[#3b82f6] 等），免去手写 CSS。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　内置 dark: 暗黑变体与 wx:、h5:、app: 等平台变体，一套类名多端生效；支持 @apply 样式复用，可在「基础 → weapp-tailwindcss Demo」查看完整示例。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-pb3jfp-1o"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-16wxq6m-x"), " 📦 UI 组件库说明（当前分支未内置组件库） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　当前 main 分支为轻量纯净底座，未自带第三方 UI 组件库，方便开发者按需接入或使用 Tailwind CSS 灵活封装。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　如需使用开箱即用的成套组件库，可切换至对应组件库分支： "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-16wxq6m-x wtu-2lciq2-c wtu-w9w6vm-16"), " 　　• uniX-rice-ui 分支：集成 Rice UI 组件库（推荐，官方团队持续维护） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-16wxq6m-x wtu-2lciq2-c wtu-w9w6vm-16"), " 　　• uniX-uview-ultra 分支：集成 uview-ultra 组件库 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1nk3btt-1p"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-1eeu7o1-12"), " ⚠️ 页面路由配置须知（重要） "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 　　本项目内置 vite-plugin-uni-pages 自动文件路由插件：当页面代码中有 definePage 或 <route> 配置时，插件会自动双向同步 pages.config.json 和 pages.json；当页面中未写配置时，请在 pages.config.json 中配置，也会自动同步到 pages.json。 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-oogtoa-w wtu-aycepd-1l wtu-1eeu7o1-12 wtu-1dx92xw-1j"), " 　　注意：pages.json 为自动构建产物，切勿直接在 pages.json 中修改！ ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border wtu-1wmf5qf-17 wtu-1059bec-18 wtu-6ezqn4-19 wtu-byz6wt-1a wtu-ejnzxm-1b wtu-1f7ofdn-1c wtu-1s0zndm-1q"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 📄 文件路由 — 自动扫描路由，通过 pages.config.json / definePage 统一配置 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " ⚡ 渲染模式 — 全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🧱 样式引擎 — Tailwind CSS v4 + weapp-tailwindcss，方括号任意值与 dark: 变体全端生效 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e", "style" to _nS(_uM("line-height" to "26px"))), " 🧩 UI 组件库 — 集成 uview-ultra 组件库，按钮、标签、弹窗等开箱即用 ", 4),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e", "style" to _nS(_uM("line-height" to "26px"))), " 🎨 图标字体 — 支持 uni-icon、lime-icon、up-icon 三套图标方案 ", 4),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🎭 主题配置 — 五种预设主题色 + 暗黑模式（auto / light / dark），原生与组件同步生效 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 🔐 加密配置 — 内置 unix-crypto，AES / DES / MD5 / SHA-256 / HMAC-SHA1 / Base64 / RSA 全端加密解密 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                                            _cE("text", _uM("class" to "weapp-tw-border wtu-k8abjg-14 wtu-13jhek8-1e wtu-w9w6vm-16"), " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-1ijr6ye-0" to _pS(_uM("width" to 100)), "wtu-jhzgjb-1" to _pS(_uM("height" to 100)), "wtu-1kpaxbq-2" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "wtu-76k8bv-3" to _pS(_uM("marginTop" to 20)), "wtu-u3sk51-4" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-11fqucj-5" to _pS(_uM("fontSize" to 26)), "wtu-1h272rc-6" to _pS(_uM("--tw-font-weight" to "var(--font-weight-semibold, 600)", "fontWeight" to 600)), "wtu-1ni8q32-7" to _pS(_uM("marginTop" to 10)), "wtu-a7oh1k-8" to _pS(_uM("color" to "#d14328")), "wtu-6d0iwi-9" to _pS(_uM("textAlign" to "center")), "wtu-6kdfg0-a" to _pS(_uM("fontSize" to 18)), "wtu-1uoczot-b" to _pS(_uM("color" to "#334155")), "wtu-2lciq2-c" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-1ax9487-d" to _pS(_uM("marginTop" to 6)), "wtu-1j2jqw-e" to _pS(_uM("marginLeft" to 16, "marginRight" to 16)), "wtu-167by10-f" to _pS(_uM("marginTop" to 16)), "wtu-1if6fbe-g" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "wtu-13uepsk-h" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "wtu-bb1xdk-i" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "wtu-mm3ayz-j" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-uhfqvn-k" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-194vqw9-l" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-3a2iag-m" to _pS(_uM("display" to "flex")), "wtu-y7fbel-n" to _pS(_uM("flexDirection" to "row")), "wtu-u0kjb1-o" to _pS(_uM("alignItems" to "center")), "wtu-14wfwos-p" to _pS(_uM("justifyContent" to "space-between")), "wtu-1f3lg56-q" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-1oyjgn1-r" to _pS(_uM("justifyContent" to "center")), "wtu-1qvyibs-s" to _pS(_uM("fontSize" to 10)), "wtu-1jbj2n1-t" to _pS(_uM("color" to "#94a3b8")), "wtu-5hesch-u" to _pS(_uM("marginBottom" to 2)), "wtu-127y8dy-v" to _pS(_uM("fontSize" to 12)), "wtu-oogtoa-w" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-16wxq6m-x" to _pS(_uM("color" to "#4f46e5")), "wtu-w81r72-y" to _pS(_uM("width" to 1)), "wtu-cc0q1m-z" to _pS(_uM("height" to 20)), "wtu-9qzku8-10" to _pS(_uM("backgroundColor" to "#e2e8f0")), "wtu-1qqe9yz-11" to _pS(_uM("color" to "#059669")), "wtu-1eeu7o1-12" to _pS(_uM("color" to "#d97706")), "wtu-f2chv7-13" to _pS(_uM("paddingLeft" to 30, "paddingRight" to 30)), "wtu-k8abjg-14" to _pS(_uM("fontSize" to 14)), "wtu-1kxtjp2-15" to _pS(_uM("color" to "#475569")), "wtu-w9w6vm-16" to _pS(_uM("--tw-leading" to "26px", "lineHeight" to "26px")), "wtu-1wmf5qf-17" to _pS(_uM("marginTop" to 15)), "wtu-1059bec-18" to _pS(_uM("marginLeft" to 30, "marginRight" to 30)), "wtu-6ezqn4-19" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "wtu-byz6wt-1a" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "wtu-ejnzxm-1b" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1f7ofdn-1c" to _pS(_uM("backgroundColor" to "#37c2bc14")), "wtu-joy599-1d" to _pS(_uM("color" to "#0f8f8a")), "wtu-13jhek8-1e" to _pS(_uM("color" to "#666666")), "wtu-xwsxph-1f" to _pS(_uM("backgroundColor" to "#8b5cf614")), "wtu-4yix9d-1g" to _pS(_uM("color" to "#7c3aed")), "wtu-t0imyz-1h" to _pS(_uM("fontSize" to 13)), "wtu-tp9td9-1i" to _pS(_uM("color" to "#64748b")), "wtu-1dx92xw-1j" to _pS(_uM("--tw-leading" to "24px", "lineHeight" to "24px")), "wtu-hqukzp-1k" to _pS(_uM("paddingLeft" to 10)), "wtu-aycepd-1l" to _pS(_uM("marginTop" to 4)), "wtu-1ed0d8l-1m" to _pS(_uM("backgroundColor" to "#3182ce14")), "wtu-1ein7bi-1n" to _pS(_uM("color" to "#3182ce")), "wtu-pb3jfp-1o" to _pS(_uM("backgroundColor" to "#6366f114")), "wtu-1nk3btt-1p" to _pS(_uM("backgroundColor" to "#f59e0b1a")), "wtu-1s0zndm-1q" to _pS(_uM("marginBottom" to 30)))
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
