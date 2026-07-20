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
open class GenSrcSubUviewUltraComponentsDemoNav : VueComponent {
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
        var setup: (__props: GenSrcSubUviewUltraComponentsDemoNav) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraComponentsDemoNav
            val _cache = __ins.renderCache
            val transitionShow1 = ref(true)
            val transitionShow3 = ref(true)
            val transitionModes = ref(_uA<UTSJSONObject>(_uO("mode" to "fade-up", "show" to true), _uO("mode" to "slide-down", "show" to true), _uO("mode" to "zoom-in", "show" to true), _uO("mode" to "fade-left", "show" to true)))
            fun gen_toggleTransitionMode_fn(item: UTSJSONObject): Unit {
                val currentShow = item.getBoolean("show") ?: false
                item["show"] = !currentShow
            }
            val toggleTransitionMode = ::gen_toggleTransitionMode_fn
            fun gen_onQrcodeResult_fn(): Unit {
                console.log("qrcode generated", " at src/sub/uview-ultra/components/DemoNav.uvue:38")
            }
            val onQrcodeResult = ::gen_onQrcodeResult_fn
            val parseContent1 = ref("<p>露从今夜白，月是故乡明</p>\n<img src=\"https://cdn.uviewui.com/uview/swiper/2.jpg\" alt=\"示例图片\" />")
            val parseContent2 = ref("<h2>标题 H2</h2><h3>标题 H3</h3>\n<p>普通段落文字，包含<strong>加粗强调</strong>和<em>斜体强调</em>。</p>\n<blockquote>这是一段引用文字，用于突出重要内容。</blockquote>\n<p>内联代码：<code>console.log('hello')</code></p>\n<pre>// 代码块\nfunction hello() {\n  return 'Hello World';\n}</pre>")
            val parseContent3 = ref("<p>点击图片可预览：</p>\n<img src=\"https://picsum.photos/400/200?random=99\" alt=\"示例图片\" />\n<p>点击链接：<a href=\"https://uview-ultra.lingyun.net\">uview-ultra 官网</a></p>")
            val parseContent4 = ref("<table>\n<tr><th>名称</th><th>版本</th><th>状态</th></tr>\n<tr><td>uni-app X</td><td>4.x</td><td>稳定</td></tr>\n<tr><td>uview-ultra</td><td>1.0</td><td>稳定</td></tr>\n</table>")
            val parseContent5 = ref("<p class=\"my-tag\">这段文字应用了自定义样式</p><p>普通段落对比</p>")
            val parseTagStyle = ref(_uO("my-tag" to "color-_19be6b;font-weight:bold;font-size:16px;"))
            fun gen_onParseReady_fn(): Unit {
                console.log("parse ready", " at src/sub/uview-ultra/components/DemoNav.uvue:66")
            }
            val onParseReady = ::gen_onParseReady_fn
            fun gen_onParseImgTap_fn(attrs: UTSJSONObject): Unit {
                uni_showToast(ShowToastOptions(title = "点击了图片", icon = "none"))
            }
            val onParseImgTap = ::gen_onParseImgTap_fn
            fun gen_onParseLinkTap_fn(attrs: UTSJSONObject): Unit {
                uni_showToast(ShowToastOptions(title = "链接: " + (attrs.getString("href") ?: ""), icon = "none"))
            }
            val onParseLinkTap = ::gen_onParseLinkTap_fn
            fun gen_onNavbarMiniLeftClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "点击了返回", icon = "none"))
            }
            val onNavbarMiniLeftClick = ::gen_onNavbarMiniLeftClick_fn
            fun gen_onNavbarMiniHomeClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "点击了首页", icon = "none"))
            }
            val onNavbarMiniHomeClick = ::gen_onNavbarMiniHomeClick_fn
            val tabbarValue1 = ref(0)
            fun gen_onTabbarChange1_fn(name: Number) {
                tabbarValue1.value = name
            }
            val onTabbarChange1 = ::gen_onTabbarChange1_fn
            val tabbarValue2 = ref(0)
            fun gen_onTabbarChange2_fn(name: Number) {
                tabbarValue2.value = name
            }
            val onTabbarChange2 = ::gen_onTabbarChange2_fn
            val tabbarValue3 = ref("home")
            fun gen_onTabbarChange3_fn(name: String) {
                tabbarValue3.value = name
            }
            val onTabbarChange3 = ::gen_onTabbarChange3_fn
            val tabbarValue4 = ref(0)
            fun gen_onTabbarChange4_fn(name: Number) {
                tabbarValue4.value = name
            }
            val onTabbarChange4 = ::gen_onTabbarChange4_fn
            val tabbarValue5 = ref(0)
            fun gen_onTabbarChange5_fn(name: Number) {
                tabbarValue5.value = name
            }
            val onTabbarChange5 = ::gen_onTabbarChange5_fn
            val tabbarValue6 = ref(0)
            fun gen_onTabbarChange6_fn(name: Number) {
                tabbarValue6.value = name
            }
            val onTabbarChange6 = ::gen_onTabbarChange6_fn
            val tabbarValue7 = ref(0)
            fun gen_onTabbarChange7_fn(name: Number) {
                if (name === 1) {
                    uni_showToast(ShowToastOptions(title = "请您先登录", icon = "none"))
                    return
                }
                tabbarValue7.value = name
            }
            val onTabbarChange7 = ::gen_onTabbarChange7_fn
            val tabsList1 = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "科技"), _uO("name" to "音乐"), _uO("name" to "美食"), _uO("name" to "文化"), _uO("name" to "财经"), _uO("name" to "手工")))
            val tabsList2 = ref(_uA<UTSJSONObject>(_uO("name" to "关注", "disabled" to true), _uO("name" to "推荐", "badge" to _uO("isDot" to true)), _uO("name" to "电影", "badge" to _uO("value" to 5)), _uO("name" to "科技", "disabled" to true), _uO("name" to "音乐"), _uO("name" to "美食"), _uO("name" to "文化"), _uO("name" to "财经"), _uO("name" to "手工")))
            val tabsList4 = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "科技"), _uO("name" to "音乐"), _uO("name" to "美食"), _uO("name" to "文化"), _uO("name" to "财经"), _uO("name" to "手工")))
            val tabsList4Small = ref(_uA<UTSJSONObject>(_uO("name" to "推荐"), _uO("name" to "热门"), _uO("name" to "最新"), _uO("name" to "关注")))
            fun gen_onTabsClick_fn(item: UTSJSONObject): Unit {
                uni_showToast(ShowToastOptions(title = "点击了: " + (item.getString("name") ?: ""), icon = "none"))
            }
            val onTabsClick = ::gen_onTabsClick_fn
            fun gen_onTabsChange_fn(item: UTSJSONObject): Unit {
                console.log("tabs change:", item, " at src/sub/uview-ultra/components/DemoNav.uvue:175")
            }
            val onTabsChange = ::gen_onTabsChange_fn
            fun gen_onTabsRightClick_fn(): Unit {
                uni_showToast(ShowToastOptions(title = "点击了右侧插槽", icon = "none"))
            }
            val onTabsRightClick = ::gen_onTabsRightClick_fn
            val subsectionCurrent = ref(0)
            val subsectionList = ref(_uA<String>("待付款", "待发货", "待收货"))
            fun gen_onSubsectionChange_fn(index: Number) {
                subsectionCurrent.value = index
            }
            val onSubsectionChange = ::gen_onSubsectionChange_fn
            return fun(): Any? {
                val _component_up_divider = resolveEasyComponent("up-divider", GenUniModulesUviewUltraComponentsUpDividerUpDividerClass)
                return _cE("view", null, _uA(
                    _cE("text", _uM("class" to "section-title"), " 导航组件 "),
                    _cV(_component_up_divider, _uM("text" to "导航组件结束"))
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
                return _uM("color-_19be6b" to _pS(_uM("color" to "rgba(25,190,107,var(--un-color-opacity,1))")), "none" to _pS(_uM("display" to "none")))
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
