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
open class GenSrcSubUviewUltraDemosMpHtmlMpHtml : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosMpHtmlMpHtml) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosMpHtmlMpHtml
            val _cache = __ins.renderCache
            val content1 = ref("\n  <h2>mp-html 跨端富文本组件</h2>\n  <p>这是一个专门为 <b>uni-app X</b> 打造的高性能原生 HTML 解析器组件，支持多种 HTML 5 常见标签与样式。</p>\n  <hr />\n  <p>支持 <i>斜体</i>、<b>加粗</b>、<u>下划线</u> 以及 <span style=\"color: #e11d48; font-weight: bold;\">自定义颜色文本</span>。</p>\n")
            val contentTable = ref("\n  <table border=\"1\">\n    <tr>\n      <th>组件名称</th>\n      <th>类型</th>\n      <th>平台支持</th>\n    </tr>\n    <tr>\n      <td>mp-html</td>\n      <td>富文本</td>\n      <td>全端 (Android / iOS / H5)</td>\n    </tr>\n    <tr>\n      <td>up-waterfall</td>\n      <td>瀑布流</td>\n      <td>全端支持</td>\n    </tr>\n  </table>\n")
            val contentList = ref("\n  <p><b>框架核心优势：</b></p>\n  <ul>\n    <li>原生 Kotlin / Swift 高效渲染</li>\n    <li>无缝嵌入 UniAppX 架构</li>\n    <li>自动适配屏幕尺寸</li>\n  </ul>\n  <p><b>部署步骤：</b></p>\n  <ol>\n    <li>导入 mp-html 插件</li>\n    <li>配置 uni_modules 节点</li>\n    <li>直接使用 &lt;mp-html :content=\"html\" /&gt;</li>\n  </ol>\n")
            val contentCode = ref("\n  <p>示例代码：</p>\n  <pre><code>const html = '&lt;h1&gt;Hello UniAppX&lt;/h1&gt;'\nconst node = parse(html)</code></pre>\n")
            val contentMedia = ref("\n  <p>访问官方链接：<a href=\"https://uniapp.dcloud.net.cn/\">DCloud 官方文档</a></p>\n  <p>示例图片展示：</p>\n  <img src=\"/static/logo.png\" style=\"width: 120px; height: 120px;\" />\n")
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_mp_html = resolveEasyComponent("mp-html", GenUniModulesMpHtmlComponentsMpHtmlMpHtmlClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-bar-title-text" to "mp-html 富文本组件", "navigation-style" to "custom"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "mp-html 富文本组件", "auto-back" to true)),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "基础文本与排版"),
                                            _cE("view", _uM("class" to "content-box"), _uA(
                                                _cV(_component_mp_html, _uM("content" to content1.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "HTML 表格解析 (Table)"),
                                            _cE("view", _uM("class" to "content-box"), _uA(
                                                _cV(_component_mp_html, _uM("content" to contentTable.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "列表解析 (List)"),
                                            _cE("view", _uM("class" to "content-box"), _uA(
                                                _cV(_component_mp_html, _uM("content" to contentList.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "代码块解析 (Code)"),
                                            _cE("view", _uM("class" to "content-box"), _uA(
                                                _cV(_component_mp_html, _uM("content" to contentCode.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block mt-12px"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "超链接与图片展示"),
                                            _cE("view", _uM("class" to "content-box"), _uA(
                                                _cV(_component_mp_html, _uM("content" to contentMedia.value), null, 8, _uA(
                                                    "content"
                                                ))
                                            ))
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
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "mt-12px" to _pS(_uM("marginTop" to 12)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "content-box" to _pS(_uM("backgroundColor" to "#f8fafc", "paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)))
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
