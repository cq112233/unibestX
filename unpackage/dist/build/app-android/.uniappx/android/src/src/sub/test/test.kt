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
open class GenSrcSubTestTest : BasePage {
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
        var setup: (__props: GenSrcSubTestTest) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubTestTest
            val _cache = __ins.renderCache
            val optionKeys = ref(_uA<String>())
            val queryOptions = ref<UTSJSONObject?>(null)
            val countLabel = computed(fun(): String {
                return if (optionKeys.value.length > 0) {
                    "已解析"
                } else {
                    "待解析"
                }
            }
            )
            onLoad(fun(options: UTSJSONObject?){
                console.log("test page onLoad options:", options)
                if (options != null) {
                    queryOptions.value = options
                    optionKeys.value = UTSJSONObject.keys(options)
                }
            }
            )
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 800)
            }
            )
            fun gen_getOptionValue_fn(key: String): String {
                val options = queryOptions.value
                if (options != null) {
                    val kVal = options[key]
                    if (kVal != null) {
                        return "" + kVal
                    }
                }
                return ""
            }
            val getOptionValue = ::gen_getOptionValue_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "URL 参数测试", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "URL 参数测试", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border flex flex-col flex-1 bg-_b_hf8fafc_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border m-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border bg-white rounded-_b16px_B p-_b20px_B mb-_b16px_B border-_b1px_B border-solid border-_b_he2e8f0_B shadow-sm"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center mb-_b16px_B"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b42px_B h-_b42px_B rounded-_b12px_B bg-_b_hebf4ff_B items-center justify-center mr-_b12px_B"), _uA(
                                                    _cV(_component_uni_icons, _uM("type" to "link", "size" to "22", "color" to "#3182ce"))
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-col flex-1"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b18px_B font-bold text-_b_h1e293b_B"), "URL 参数解析"),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B"), "展示当前页面携带的 query 参数")
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center justify-between bg-_b_hf8fafc_B rounded-_b12px_B p-_b12px_B"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border flex-col"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_h64748b_B"), "解析参数数量"),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b20px_B font-bold text-_b_h1e293b_B mt-_b2px_B"), _tD(optionKeys.value.length), 1)
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border bg-_b_h3182ce_B rounded-_b20px_B px-_b14px_B py-_b6px_B"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B font-medium text-white"), _tD(countLabel.value), 1)
                                                    ))
                                                ))
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border bg-white rounded-_b16px_B p-_b20px_B border-_b1px_B border-solid border-_b_he2e8f0_B shadow-sm"), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border flex flex-row items-center mb-_b8px_B"), _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border w-_b4px_B h-_b16px_B bg-_b_h3182ce_B rounded-_b2px_B mr-_b8px_B")),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b16px_B font-bold text-_b_h1e293b_B"), "参数详情")
                                            )),
                                            _cE(Fragment, null, RenderHelpers.renderList(optionKeys.value, fun(key, __key, __index, _cached): Any {
                                                return _cE("view", _uM("key" to key, "class" to "weapp-tw-border flex flex-row items-center justify-between py-_b12px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf1f5f9_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border flex-row items-center mr-_b12px_B"), _uA(
                                                        _cE("view", _uM("class" to "weapp-tw-border w-_b6px_B h-_b6px_B rounded-_b3px_B bg-_b_h3182ce_B mr-_b8px_B")),
                                                        _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B text-_b_h64748b_B font-medium"), _tD(key), 1)
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B text-_b_h334155_B font-semibold"), _tD(getOptionValue(key)), 1)
                                                ))
                                            }
                                            ), 128),
                                            if (optionKeys.value.length == 0) {
                                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border flex flex-col items-center py-_b32px_B"), _uA(
                                                    _cE("view", _uM("class" to "weapp-tw-border w-_b56px_B h-_b56px_B rounded-_b16px_B bg-_b_hf8fafc_B items-center justify-center"), _uA(
                                                        _cV(_component_uni_icons, _uM("type" to "info", "size" to "28", "color" to "#cbd5e1"))
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b14px_B text-_b_h94a3b8_B mt-_b12px_B"), "暂无任何 query 参数"),
                                                    _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_hcbd5e1_B mt-_b4px_B"), "请携带参数访问本页面")
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
                                            ,
                                            _cE("view", _uM("class" to "weapp-tw-border mt-_b12px_B bg-_b_hfffbeb_B rounded-_b10px_B border-_b1px_B border-solid border-_b_hfef3c7_B p-_b10px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b12px_B text-_b_hb45309_B leading-_b18px_B"), "提示：返回时可在页面路径后追加 ?key=value 以测试参数解析效果。")
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)))
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
