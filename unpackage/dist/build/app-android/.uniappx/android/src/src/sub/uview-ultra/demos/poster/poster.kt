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
open class GenSrcSubUviewUltraDemosPosterPoster : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosPosterPoster) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosPosterPoster
            val _cache = __ins.renderCache
            val baseJson = ref<UTSJSONObject>(_uO("css" to _uO("width" to "375px", "height" to "600px", "background" to "linear-gradient(to bottom, #0957de, #7c3aed)", "radius" to "12px"), "views" to _uA(
                _uO("type" to "view", "css" to _uO("left" to 20, "top" to 20, "width" to 335, "height" to 120, "background" to "rgba(255, 255, 255, 0.2)", "radius" to 12)),
                _uO("type" to "text", "text" to "unibestX", "css" to _uO("left" to 40, "top" to 40, "width" to 240, "fontSize" to 28, "lineHeight" to 34, "color" to "#ffffff", "fontWeight" to "bold")),
                _uO("type" to "text", "text" to "uni-app X 开发模板", "css" to _uO("left" to 40, "top" to 84, "width" to 260, "fontSize" to 15, "lineHeight" to 20, "color" to "#e2e8f0")),
                _uO("type" to "image", "src" to "/static/logo.png", "css" to _uO("left" to 30, "top" to 170, "width" to 100, "height" to 100, "radius" to 50)),
                _uO("type" to "text", "text" to "uview-ultra", "css" to _uO("left" to 150, "top" to 188, "width" to 200, "fontSize" to 22, "lineHeight" to 28, "color" to "#1e293b", "fontWeight" to "bold")),
                _uO("type" to "text", "text" to "基于 uni-app X 的组件库", "css" to _uO("left" to 150, "top" to 224, "width" to 200, "fontSize" to 14, "lineHeight" to 20, "color" to "#64748b")),
                _uO("type" to "view", "css" to _uO("left" to 30, "top" to 300, "width" to 315, "height" to 120, "background" to "#f8fafc", "radius" to 12)),
                _uO("type" to "text", "text" to "扫码查看", "css" to _uO("left" to 60, "top" to 320, "width" to 120, "fontSize" to 16, "lineHeight" to 22, "color" to "#334155", "fontWeight" to "bold")),
                _uO("type" to "qrcode", "text" to "https://uview-ultra.lingyun.net", "css" to _uO("left" to 200, "top" to 310, "width" to 100, "foreground" to "#0957de", "background" to "#ffffff", "lv" to 3)),
                _uO("type" to "view", "css" to _uO("left" to 30, "top" to 440, "width" to 315, "height" to 130, "background" to "linear-gradient(to right, #f59e0b, #ef4444)", "radius" to 12)),
                _uO("type" to "text", "text" to "2026.08.20", "css" to _uO("left" to 60, "top" to 486, "width" to 260, "fontSize" to 24, "lineHeight" to 30, "color" to "#ffffff", "fontWeight" to "bold"))
            )))
            val posterJson = ref<UTSJSONObject>(baseJson.value)
            val customJson = ref<UTSJSONObject>(_uO("css" to _uO("width" to "300px", "height" to "480px", "background" to "linear-gradient(to bottom, #0f172a, #334155)", "radius" to "8px"), "views" to _uA(
                _uO("type" to "text", "text" to "CUSTOM POSTER", "css" to _uO("left" to 30, "top" to 30, "width" to 240, "fontSize" to 24, "lineHeight" to 30, "color" to "#fbbf24", "fontWeight" to "bold")),
                _uO("type" to "text", "text" to "自定义样式海报", "css" to _uO("left" to 30, "top" to 74, "width" to 240, "fontSize" to 15, "lineHeight" to 20, "color" to "#e2e8f0")),
                _uO("type" to "qrcode", "text" to "https://github.com/cq112233/unibestX", "css" to _uO("left" to 100, "top" to 140, "width" to 100, "foreground" to "#f8fafc", "background" to "#ffffff", "lv" to 3)),
                _uO("type" to "text", "text" to "扫码关注", "css" to _uO("left" to 30, "top" to 270, "width" to 240, "fontSize" to 16, "lineHeight" to 22, "color" to "#94a3b8")),
                _uO("type" to "view", "css" to _uO("left" to 30, "top" to 330, "width" to 240, "height" to 80, "background" to "linear-gradient(to right, #0ea5e9, #6366f1)", "radius" to 40)),
                _uO("type" to "text", "text" to "立即体验", "css" to _uO("left" to 30, "top" to 360, "width" to 240, "fontSize" to 20, "lineHeight" to 26, "color" to "#ffffff", "fontWeight" to "bold"))
            )))
            val posterPath = ref<String>("")
            val eventLog = ref<String>("")
            val isCustom = ref<Boolean>(false)
            val posterRef = ref(null as ComponentPublicInstance?)
            fun gen_onGenerate_fn() {
                val poster = posterRef.value
                if (poster == null) {
                    return
                }
                poster.`$callMethod`("exportImage")
                eventLog.value = "正在生成海报..."
            }
            val onGenerate = ::gen_onGenerate_fn
            fun gen_onSwitchJson_fn() {
                val poster = posterRef.value
                if (poster == null) {
                    return
                }
                if (isCustom.value) {
                    posterJson.value = baseJson.value
                    isCustom.value = false
                    eventLog.value = "已切换回默认样式，正在生成..."
                } else {
                    posterJson.value = customJson.value
                    isCustom.value = true
                    eventLog.value = "已切换自定义样式，正在生成..."
                }
                poster.`$callMethod`("exportImage")
            }
            val onSwitchJson = ::gen_onSwitchJson_fn
            fun gen_onExport_fn(event: UTSJSONObject) {
                val path = event["path"]
                if (path != null && path.toString().length > 0) {
                    posterPath.value = path.toString()
                    eventLog.value = "生成成功"
                } else {
                    eventLog.value = "生成失败：未返回图片路径"
                }
            }
            val onExport = ::gen_onExport_fn
            fun gen_onError_fn(event: UTSJSONObject) {
                val message = event["message"]
                eventLog.value = "error => " + (if (message == null) {
                    "生成失败"
                } else {
                    message.toString()
                }
                )
            }
            val onError = ::gen_onError_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_poster = resolveEasyComponent("up-poster", GenUniModulesUviewUltraComponentsUpPosterUpPosterClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-poster 海报", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-poster 海报", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法（生成海报图片）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            if (posterPath.value.length > 0) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border poster-preview"), _uA(
                                                    _cE("image", _uM("src" to posterPath.value, "class" to "poster-image", "mode" to "aspectFit"), null, 8, _uA(
                                                        "src"
                                                    ))
                                                ))
                                            } else {
                                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border poster-placeholder"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border poster-placeholder-text"), "点击下方按钮生成海报")
                                                ))
                                            }
                                            ,
                                            _cE("view", _uM("class" to "weapp-tw-border btn-row mt-_b10px_B"), _uA(
                                                _cV(_component_up_button, _uM("text" to "生成海报", "type" to "primary", "size" to "small", "class" to "demo-btn", "onClick" to onGenerate)),
                                                _cV(_component_up_button, _uM("text" to "切换样式", "type" to "primary", "plain" to "", "size" to "small", "class" to "demo-btn", "onClick" to onSwitchJson))
                                            )),
                                            _cE("text", _uM("class" to "weapp-tw-border log-text mt-_b10px_B"), _tD(eventLog.value), 1)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-poster 通过 :json 配置海报内容（背景/文本/图片/二维码），调用 exportImage() 生成图片并触发 export 事件返回临时路径。 ")
                                        ))
                                    )),
                                    _cV(_component_up_poster, _uM("ref_key" to "posterRef", "ref" to posterRef, "json" to posterJson.value, "onExport" to onExport, "onError" to onError), null, 8, _uA(
                                        "json"
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "poster-preview" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to "100%", "paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "poster-image" to _pS(_uM("width" to 260, "height" to 400)), "poster-placeholder" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "width" to "100%", "height" to 200, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "poster-placeholder-text" to _pS(_uM("fontSize" to 13, "color" to "#94a3b8")), "log-text" to _pS(_uM("fontSize" to 13, "color" to "#475569", "lineHeight" to "20px")), "btn-row" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "demo-btn" to _pS(_uM("marginRight" to 10)))
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
