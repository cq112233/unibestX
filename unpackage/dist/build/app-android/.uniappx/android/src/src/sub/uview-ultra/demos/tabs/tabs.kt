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
open class GenSrcSubUviewUltraDemosTabsTabs : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosTabsTabs) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosTabsTabs
            val _cache = __ins.renderCache
            val currentLong = ref<Number>(0)
            val longList = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "电视剧"), _uO("name" to "综艺"), _uO("name" to "动漫"), _uO("name" to "少儿"), _uO("name" to "纪录片"), _uO("name" to "体育"), _uO("name" to "游戏"), _uO("name" to "音乐"), _uO("name" to "搞笑"), _uO("name" to "科技"), _uO("name" to "美食")))
            val currentBase = ref<Number>(0)
            val baseList = ref(_uA<UTSJSONObject>(_uO("name" to "关注"), _uO("name" to "推荐"), _uO("name" to "电影"), _uO("name" to "科技")))
            val currentBadge = ref<Number>(0)
            val badgeList = ref(_uA<UTSJSONObject>(_uO("name" to "关注", "badge" to _uO("isDot" to true)), _uO("name" to "推荐", "badge" to _uO("value" to 5)), _uO("name" to "消息", "badge" to _uO("value" to 99)), _uO("name" to "热榜")))
            val currentDisabled = ref<Number>(0)
            val disabledList = ref(_uA<UTSJSONObject>(_uO("name" to "国内新闻"), _uO("name" to "国际焦点"), _uO("name" to "付费专区", "disabled" to true), _uO("name" to "数码测评")))
            val currentCustom = ref<Number>(1)
            val customList = ref(_uA<UTSJSONObject>(_uO("name" to "最新发布"), _uO("name" to "最热推荐"), _uO("name" to "好评排行"), _uO("name" to "折扣特惠")))
            val currentEqual = ref<Number>(0)
            val equalList = ref(_uA<UTSJSONObject>(_uO("name" to "待付款"), _uO("name" to "待发货"), _uO("name" to "待收货"), _uO("name" to "待评价")))
            fun gen_onLongChange_fn(item: UTSJSONObject) {
                console.log("超长Tabs切换:", item)
            }
            val onLongChange = ::gen_onLongChange_fn
            fun gen_onBaseChange_fn(item: UTSJSONObject) {
                console.log("基础Tabs切换:", item)
            }
            val onBaseChange = ::gen_onBaseChange_fn
            return fun(): Any? {
                val _component_up_tabs = resolveEasyComponent("up-tabs", GenUniModulesUviewUltraComponentsUpTabsUpTabsClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "Tabs 标签页", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "Tabs 标签页", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "超长横向滚动标签 (14项)"),
                                            _cV(_component_up_tabs, _uM("current" to currentLong.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentLong.value = `$event`
                                            }
                                            , "list" to longList.value, "onChange" to onLongChange), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border content-box mt-_b10px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border content-text"), "当前选中：" + _tD(longList.value[currentLong.value]["name"]) + " (第 " + _tD(currentLong.value + 1) + " 项)", 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "基础用法与内容联动"),
                                            _cV(_component_up_tabs, _uM("current" to currentBase.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentBase.value = `$event`
                                            }
                                            , "list" to baseList.value, "onChange" to onBaseChange), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border content-box mt-_b10px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border content-text"), "正在浏览：" + _tD(baseList.value[currentBase.value]["name"]) + " 分类内容", 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "带角标与红点提示"),
                                            _cV(_component_up_tabs, _uM("current" to currentBadge.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentBadge.value = `$event`
                                            }
                                            , "list" to badgeList.value), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "禁用特定标签项"),
                                            _cV(_component_up_tabs, _uM("current" to currentDisabled.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentDisabled.value = `$event`
                                            }
                                            , "list" to disabledList.value), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义滑块与高亮样式"),
                                            _cV(_component_up_tabs, _uM("current" to currentCustom.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentCustom.value = `$event`
                                            }
                                            , "list" to customList.value, "line-color" to "#fa3534", "line-width" to "32px", "line-height" to "4px", "active-style" to _uO("color" to "#fa3534", "fontWeight" to "bold"), "inactive-style" to _uO("color" to "#909399")), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "等分布局 (不可滚动: scrollable=false)"),
                                            _cV(_component_up_tabs, _uM("current" to currentEqual.value, "onUpdate:current" to fun(`$event`: Number){
                                                currentEqual.value = `$event`
                                            }
                                            , "list" to equalList.value, "scrollable" to false, "line-color" to "#19be6b", "active-style" to _uO("color" to "#19be6b", "fontWeight" to "bold")), null, 8, _uA(
                                                "current",
                                                "onUpdate:current",
                                                "list"
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "var(--theme-color, #0957de)")), "content-box" to _pS(_uM("paddingTop" to 14, "paddingRight" to 14, "paddingBottom" to 14, "paddingLeft" to 14, "backgroundColor" to "#f1f5f9", "borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6, "alignItems" to "center", "justifyContent" to "center")), "content-text" to _pS(_uM("fontSize" to 13, "color" to "#475569")))
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
