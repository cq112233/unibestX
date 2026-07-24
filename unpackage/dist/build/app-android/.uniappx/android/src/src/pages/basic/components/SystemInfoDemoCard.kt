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
open class GenSrcPagesBasicComponentsSystemInfoDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsSystemInfoDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsSystemInfoDemoCard
            val _cache = __ins.renderCache
            val screenWidth = computed(fun(): Number {
                return systemInfo.value?.screenWidth ?: 0
            }
            )
            val screenHeight = computed(fun(): Number {
                return systemInfo.value?.screenHeight ?: 0
            }
            )
            val windowWidth = computed(fun(): Number {
                return systemInfo.value?.windowWidth ?: 0
            }
            )
            val windowHeight = computed(fun(): Number {
                return systemInfo.value?.windowHeight ?: 0
            }
            )
            val statusBarHeight = computed(fun(): Number {
                return systemInfo.value?.statusBarHeight ?: 0
            }
            )
            val pixelRatio = computed(fun(): Number {
                return systemInfo.value?.pixelRatio ?: 1
            }
            )
            val safeAreaTop = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.top + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaBottom = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.bottom + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaLeft = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.left + "px"
                } else {
                    "N/A"
                }
            }
            )
            val safeAreaRight = computed(fun(): String {
                return if (safeAreaInsets.value != null) {
                    "" + safeAreaInsets.value!!.right + "px"
                } else {
                    "N/A"
                }
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "系统与安全区域信息"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-13px font-bold text-__1e293b_ mb-12px"), "安全区域内边距 (SafeAreaInsets)"),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "Top (顶部距离)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(safeAreaTop.value), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "Bottom (底部距离)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(safeAreaBottom.value), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "Left (左侧距离)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(safeAreaLeft.value), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "Right (右侧距离)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(safeAreaRight.value), 1)
                            ))
                        )),
                        _cE("view", _uM("class" to "rounded-12px p-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-13px font-bold text-__1e293b_ mb-12px"), "设备窗口规格 (WindowInfo)"),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "屏幕宽度"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(screenWidth.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "屏幕高度"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(screenHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "可用窗口宽度"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(windowWidth.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "可用窗口高度"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(windowHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "状态栏高度 (statusBarHeight)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(statusBarHeight.value) + " px", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "设备像素比 (pixelRatio)"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(pixelRatio.value), 1)
                            ))
                        ))
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
                return _uM("border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)))
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
