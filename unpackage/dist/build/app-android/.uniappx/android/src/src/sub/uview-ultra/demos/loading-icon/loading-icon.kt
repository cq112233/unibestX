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
open class GenSrcSubUviewUltraDemosLoadingIconLoadingIcon : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosLoadingIconLoadingIcon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosLoadingIconLoadingIcon
            val _cache = __ins.renderCache
            val loadingShow = ref(true)
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "LoadingIcon 加载图标", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "LoadingIcon 加载图标", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "基础用法"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("class" to "mr-_b20px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "其他模式"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("mode" to "circle", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("mode" to "semicircle", "class" to "mr-_b20px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义大小"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("size" to "16", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("size" to "24", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("size" to "40", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("size" to "60", "class" to "mr-_b20px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义颜色"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("color" to "#2979ff", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("color" to "#19be6b", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("color" to "#fa3534", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("color" to "#ff9900", "mode" to "circle", "class" to "mr-_b20px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "带提示文字"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("text" to "加载中...", "class" to "mr-_b24px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("text" to "正在提交", "color" to "#2979ff", "class" to "mr-_b24px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("text" to "请求失败", "color" to "#fa3534", "mode" to "circle", "class" to "mr-_b24px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "文字与图标垂直排列"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("vertical" to "", "text" to "加载中", "class" to "mr-_b30px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("vertical" to "", "text" to "请稍候", "color" to "#19be6b", "mode" to "circle", "class" to "mr-_b30px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("vertical" to "", "text" to "拼命加载中", "color" to "#ff9900", "size" to "36", "class" to "mr-_b30px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义文字颜色与字号"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("text" to "大号文字", "text-size" to "20", "text-color" to "#2979ff", "class" to "mr-_b24px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("text" to "小号文字", "text-size" to "12", "text-color" to "#909193", "class" to "mr-_b24px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义圆环暗边颜色（仅 circle 模式生效）"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("mode" to "circle", "color" to "#fa3534", "inactive-color" to "#fbd6d8", "class" to "mr-_b20px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("mode" to "circle", "color" to "#2979ff", "inactive-color" to "#d4e2fd", "class" to "mr-_b20px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "自定义动画速度（duration，单位 ms）"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row flex-wrap items-center"), _uA(
                                                _cV(_component_up_loading_icon, _uM("duration" to "600", "text" to "快 600", "class" to "mr-_b24px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("duration" to "1200", "text" to "标准 1200", "class" to "mr-_b24px_B my-_b10px_B")),
                                                _cV(_component_up_loading_icon, _uM("duration" to "2400", "text" to "慢 2400", "class" to "mr-_b24px_B my-_b10px_B"))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "显示与隐藏（show）"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center h-_b40px_B"), _uA(
                                                _cV(_component_up_loading_icon, _uM("show" to loadingShow.value, "text" to "切换下方按钮查看效果", "color" to "#2979ff"), null, 8, _uA(
                                                    "show"
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border mt-_b12px_B"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "size" to "mini", "text" to if (loadingShow.value) {
                                                    "隐藏加载动画"
                                                } else {
                                                    "显示加载动画"
                                                }
                                                , "onClick" to fun(){
                                                    loadingShow.value = !loadingShow.value
                                                }
                                                ), null, 8, _uA(
                                                    "text",
                                                    "onClick"
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "var(--theme-color, #0957de)")))
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
