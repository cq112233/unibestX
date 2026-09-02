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
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesIndexIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesIndexIndex
            val _cache = __ins.renderCache
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 1000)
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
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to false, "hide-navbar" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "首页", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", null, _uA(
                                    _cE("view", _uM("class" to "content-container"), _uA(
                                        _cE("image", _uM("class" to "wtu-1ijr6ye-0 wtu-jhzgjb-1 wtu-1kpaxbq-2 wtu-76k8bv-3 wtu-u3sk51-4", "src" to "/static/logo.png")),
                                        _cE("text", _uM("class" to "wtu-11fqucj-5 wtu-1h272rc-6 wtu-1kpaxbq-2 wtu-1ni8q32-7 wtu-a7oh1k-8"), " unibestX "),
                                        _cE("text", _uM("class" to "wtu-6d0iwi-9 wtu-6kdfg0-a wtu-1uoczot-b wtu-2lciq2-c wtu-1ax9487-d"), " 最好用的 uni-appX 开发模板 "),
                                        _cE("view", null, _uA(
                                            _cE("text", _uM("class" to "wtu-1ni8q32-7 wtu-f2chv7-e wtu-k8abjg-f wtu-1kxtjp2-g wtu-w9w6vm-h"), " 　　unibestX 是一个集成了多种工具与技术的 uni-appX 开发模板，由 uni-appX + Vue3 + Ts + weapp-tailwindcss + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了 ECharts 图表、主题配置、暗黑模式、加密方式配置等常用功能与基本组件，让你编写 uni-appX 拥有 best 体验。 ")
                                        )),
                                        _cE("view", _uM("class" to "wtu-1wmf5qf-i wtu-1059bec-j wtu-6ezqn4-k wtu-byz6wt-l wtu-ejnzxm-m wtu-1f7ofdn-n"), _uA(
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-oogtoa-o wtu-joy599-p"), " ⚡ 渲染模式：本项目全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　Vapor 蒸汽模式是新一代渲染引擎，渲染性能超过原生，Android 端语法要求更宽松，AI 友好度与动态性更强；从 2026 年起将逐渐替代老的 VDOM 模式。 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　推荐使用 Vapor 蒸汽模式，可在 manifest.json 中按需切换回 VDOM 模式。 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　注意：Vapor 模式下开发过的代码，切换回 VDOM 模式可能因编译检查更严格而报类型或语法错误，请按需选择。 ")
                                        )),
                                        _cE("view", _uM("class" to "wtu-1wmf5qf-i wtu-1059bec-j wtu-6ezqn4-k wtu-byz6wt-l wtu-ejnzxm-m wtu-1ed0d8l-r"), _uA(
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-oogtoa-o wtu-1ein7bi-s"), " 🎨 样式引擎：Tailwind CSS v4 + weapp-tailwindcss "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　weapp-tailwindcss 是 uni-app X 的 Tailwind CSS 适配方案，类名写法与 Web 端完全一致：支持方括号任意值（text-[14px]、mt-[12px]、bg-[#3b82f6] 等），免去手写 CSS。 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　内置 dark: 暗黑变体与 wx:、h5:、app: 等平台变体，一套类名多端生效；支持 @apply 样式复用，可在「基础 → weapp-tailwindcss Demo」查看完整示例。 ")
                                        )),
                                        _cE("view", _uM("class" to "wtu-1wmf5qf-i wtu-1059bec-j wtu-6ezqn4-k wtu-byz6wt-l wtu-ejnzxm-m wtu-pb3jfp-t"), _uA(
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-oogtoa-o wtu-16wxq6m-u"), " 📦 UI 组件库说明（当前分支未内置组件库） "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　当前 main 分支为轻量纯净底座，未自带第三方 UI 组件库，方便开发者按需接入或使用 Tailwind CSS 灵活封装。 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　如需使用开箱即用的成套组件库，可切换至对应组件库分支： "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-16wxq6m-u wtu-2lciq2-c wtu-w9w6vm-h"), " 　　• uniX-rice-ui 分支：集成 Rice UI 组件库（推荐，官方团队持续维护） "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-16wxq6m-u wtu-2lciq2-c wtu-w9w6vm-h"), " 　　• uniX-uview-ultra 分支：集成 uview-ultra 组件库 ")
                                        )),
                                        _cE("view", _uM("class" to "wtu-1wmf5qf-i wtu-1059bec-j wtu-6ezqn4-k wtu-byz6wt-l wtu-ejnzxm-m wtu-1nk3btt-v"), _uA(
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-oogtoa-o wtu-1eeu7o1-w"), " ⚠️ 页面路由配置须知（重要） "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 　　本项目内置 vite-plugin-uni-pages 自动文件路由插件：当页面代码中有 definePage 或 <route> 配置时，插件会自动双向同步 pages.config.json 和 pages.json；当页面中未写配置时，请在 pages.config.json 中配置，也会自动同步到 pages.json。 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-oogtoa-o wtu-aycepd-x wtu-1eeu7o1-w wtu-1dx92xw-y"), " 　　注意：pages.json 为自动构建产物，切勿直接在 pages.json 中修改！ ")
                                        )),
                                        _cE("view", _uM("class" to "wtu-1wmf5qf-i wtu-1059bec-j wtu-6ezqn4-k wtu-byz6wt-l wtu-ejnzxm-m wtu-1f7ofdn-n wtu-1s0zndm-z"), _uA(
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 📄 文件路由 — 自动扫描路由，通过 pages.config.json / definePage 统一配置 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " ⚡ 渲染模式 — 全面支持 VDOM / Vapor 两种模式，默认 Vapor 蒸汽模式 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🧱 样式引擎 — Tailwind CSS v4 + weapp-tailwindcss，方括号任意值与 dark: 变体全端生效 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 📦 组件库选型 — 当前为轻量基础版（未自带组件库），提供 uniX-rice-ui / uniX-uview-ultra 专属分支 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 📱 系统信息 — 获取安全区域、屏幕尺寸、设备像素比等系统参数 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🎨 图标字体 — 支持 uni-icon、lime-icon 双图标方案 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🌐 多语言切换 — 内置 i18n 国际化方案，中英文一键切换 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🎭 主题配置 — 五种预设主题色 + 暗黑模式（auto / light / dark），原生与组件同步生效 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🕐 日期时间 — 基于 lime-dayuts，实时时钟、日期偏移、月份边界等 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🔀 路由拦截 — 登录鉴权路由守卫，未登录自动跳转登录页 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🌐 网络请求 — 封装 lime-request，Mock 数据与真实接口演示 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 🔐 加密配置 — 内置 unix-crypto，AES / DES / MD5 / SHA-256 / HMAC-SHA1 / Base64 / RSA 全端加密解密 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 📊 图表渲染 — ECharts 图表集成，折线图、柱状图、饼图自适应 "),
                                            _cE("text", _uM("class" to "wtu-k8abjg-f wtu-13jhek8-q wtu-w9w6vm-h"), " 📋 分页列表 — z-paging-x 分页加载，Tab 筛选、错误模拟、空数据 ")
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
                return _uM("wtu-1ijr6ye-0" to _pS(_uM("width" to 100)), "wtu-jhzgjb-1" to _pS(_uM("height" to 100)), "wtu-1kpaxbq-2" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "wtu-76k8bv-3" to _pS(_uM("marginTop" to 20)), "wtu-u3sk51-4" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-11fqucj-5" to _pS(_uM("fontSize" to 26)), "wtu-1h272rc-6" to _pS(_uM("--tw-font-weight" to "var(--font-weight-semibold, 600)", "fontWeight" to 600)), "wtu-1ni8q32-7" to _pS(_uM("marginTop" to 10)), "wtu-a7oh1k-8" to _pS(_uM("color" to "#d14328")), "wtu-6d0iwi-9" to _pS(_uM("textAlign" to "center")), "wtu-6kdfg0-a" to _pS(_uM("fontSize" to 18)), "wtu-1uoczot-b" to _pS(_uM("color" to "#334155")), "wtu-2lciq2-c" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-1ax9487-d" to _pS(_uM("marginTop" to 6)), "wtu-f2chv7-e" to _pS(_uM("paddingLeft" to 30, "paddingRight" to 30)), "wtu-k8abjg-f" to _pS(_uM("fontSize" to 14)), "wtu-1kxtjp2-g" to _pS(_uM("color" to "#475569")), "wtu-w9w6vm-h" to _pS(_uM("--tw-leading" to "26px", "lineHeight" to "26px")), "wtu-1wmf5qf-i" to _pS(_uM("marginTop" to 15)), "wtu-1059bec-j" to _pS(_uM("marginLeft" to 30, "marginRight" to 30)), "wtu-6ezqn4-k" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "wtu-byz6wt-l" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "wtu-ejnzxm-m" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1f7ofdn-n" to _pS(_uM("backgroundColor" to "#37c2bc14")), "wtu-oogtoa-o" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-joy599-p" to _pS(_uM("color" to "#0f8f8a")), "wtu-13jhek8-q" to _pS(_uM("color" to "#666666")), "wtu-1ed0d8l-r" to _pS(_uM("backgroundColor" to "#3182ce14")), "wtu-1ein7bi-s" to _pS(_uM("color" to "#3182ce")), "wtu-pb3jfp-t" to _pS(_uM("backgroundColor" to "#6366f114")), "wtu-16wxq6m-u" to _pS(_uM("color" to "#4f46e5")), "wtu-1nk3btt-v" to _pS(_uM("backgroundColor" to "#f59e0b1a")), "wtu-1eeu7o1-w" to _pS(_uM("color" to "#d97706")), "wtu-aycepd-x" to _pS(_uM("marginTop" to 4)), "wtu-1dx92xw-y" to _pS(_uM("--tw-leading" to "24px", "lineHeight" to "24px")), "wtu-1s0zndm-z" to _pS(_uM("marginBottom" to 30)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
