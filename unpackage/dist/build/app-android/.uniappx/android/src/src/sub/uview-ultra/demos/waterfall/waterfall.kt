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
open class GenSrcSubUviewUltraDemosWaterfallWaterfall : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosWaterfallWaterfall) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosWaterfallWaterfall
            val _cache = __ins.renderCache
            val list = ref(_uA<UTSJSONObject>(_uO("title" to "uview-ultra 核心UI组件", "desc" to "轻量级UI框架", "price" to 129, "imgHeight" to "80px"), _uO("title" to "高性能 UniAppX 跨端套件", "desc" to "支持原生Android/iOS", "price" to 299, "imgHeight" to "160px"), _uO("title" to "智能瀑布流弹性排版", "desc" to "自动适配列高", "price" to 89, "imgHeight" to "110px"), _uO("title" to "极速渲染流畅体验", "desc" to "零延迟丝滑滚动", "price" to 199, "imgHeight" to "200px"), _uO("title" to "炫彩主题切换系统", "desc" to "一键换肤体验", "price" to 49, "imgHeight" to "90px"), _uO("title" to "全套内置工程级图标库", "desc" to "上百款高清矢量图标", "price" to 159, "imgHeight" to "140px"), _uO("title" to "响应式页面布局容器", "desc" to "完美适配屏幕", "price" to 79, "imgHeight" to "180px"), _uO("title" to "开箱即用多端示例", "desc" to "快速构建产品原型", "price" to 99, "imgHeight" to "120px")))
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_waterfall = resolveEasyComponent("up-waterfall", GenUniModulesUviewUltraComponentsUpWaterfallUpWaterfallClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-waterfall 瀑布流"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "Waterfall 瀑布流", "auto-back" to true)),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "基础瀑布流 (2列)"),
                                            _cV(_component_up_waterfall, _uM("modelValue" to list.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<UTSJSONObject>){
                                                list.value = `$event`
                                            }
                                            , "columns" to 2), _uM("column" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                                                val colList = slotProps["colList"]
                                                return _uA(
                                                    _cE(Fragment, null, RenderHelpers.renderList((colList as UTSArray<UTSJSONObject>), fun(item, idx, __index, _cached): Any {
                                                        return _cE("view", _uM("key" to idx, "class" to "p-6px"), _uA(
                                                            _cE("view", _uM("class" to "bg-__f1f5f9_ rounded-8px overflow-hidden p-8px mb-8px"), _uA(
                                                                _cE("image", _uM("src" to "/static/logo.png", "mode" to "aspectFit", "style" to _nS(_uM("width" to "100%", "height" to ((item as UTSJSONObject).getString("imgHeight") ?: "100px"), "borderRadius" to "6px", "backgroundColor" to "#ffffff"))), null, 4),
                                                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_ mt-6px"), _tD((item as UTSJSONObject).getString("title")), 1),
                                                                _cE("text", _uM("class" to "text-12px text-__94a3b8_ mt-2px"), _tD((item as UTSJSONObject).getString("desc")), 1),
                                                                _cE("text", _uM("class" to "text-14px text-__e11d48_ mt-4px font-bold"), "￥" + _tD((item as UTSJSONObject).getNumber("price")), 1)
                                                            ))
                                                        ))
                                                    }
                                                    ), 128)
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "modelValue",
                                                "onUpdate:modelValue"
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
                return _uM("bg-__f1f5f9_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f1f5f9")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "font-bold" to _pS(_uM("fontWeight" to 700)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "mt-2px" to _pS(_uM("marginTop" to 2)), "mt-4px" to _pS(_uM("marginTop" to 4)), "mt-6px" to _pS(_uM("marginTop" to 6)), "overflow-hidden" to _pS(_uM("overflow" to "hidden")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "p-6px" to _pS(_uM("paddingTop" to 6, "paddingRight" to 6, "paddingBottom" to 6, "paddingLeft" to 6)), "p-8px" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-__e11d48_" to _pS(_uM("color" to "#e11d48")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-14px" to _pS(_uM("fontSize" to 14)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")))
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
