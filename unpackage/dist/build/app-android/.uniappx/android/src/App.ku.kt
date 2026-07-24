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
open class GenAppku : VueComponent {
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
        var setup: (__props: GenAppku) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenAppku
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val isCurrentPageTabbar = ref(false)
            val uToastRef = ref<ComponentPublicInstance?>(null)
            onBeforeMount(fun(){
                val pages = getCurrentPages()
                if (pages.length > 0) {
                    val route = pages[pages.length - 1].route
                    if (route != null && route.length > 0) {
                        val path = if (route.startsWith("/")) {
                            route
                        } else {
                            "/" + route
                        }
                        val isTabbar = isPageTabbar(path)
                        isCurrentPageTabbar.value = isTabbar
                        if (isTabbar) {
                            syncCurIdxByCurrentPage()
                        }
                    }
                }
                if (uToastRef.value != null) {
                    registerToast(uToastRef.value!!)
                }
            }
            )
            onMounted(fun(){
                if (uToastRef.value != null) {
                    registerToast(uToastRef.value!!)
                }
            }
            )
            onUnmounted(fun(){
                if (uToastRef.value != null) {
                    unregisterToast(uToastRef.value!!)
                }
            }
            )
            return fun(): Any? {
                val _component_up_toast = resolveEasyComponent("up-toast", GenUniModulesUviewUltraComponentsUpToastUpToastClass)
                return _cE("view", _uM("class" to "flex flex-col flex-1 h-full", "style" to _nS(_uM("--theme-color" to unref(appStore).state.theme, "backgroundColor" to "#f8f8f8"))), _uA(
                    _cE("scroll-view", _uM("direction" to "vertical", "class" to "flex-1 h-0", "style" to _nS(_uM("backgroundColor" to "#f8f8f8"))), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4),
                    if (isTrue(isCurrentPageTabbar.value)) {
                        _cV(unref(GenSrcTabbarIndexClass), _uM("key" to 0))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cV(_component_up_toast, _uM("ref_key" to "uToastRef", "ref" to uToastRef), null, 512)
                ), 4)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0,
                styles1,
                styles2
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("absolute" to _pS(_uM("position" to "absolute")), "bg-__0f172a_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#0f172a")), "bg-__10b981_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#10b981")), "bg-__19be6b_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#19be6b")), "bg-__2563eb_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#2563eb")), "bg-__2979ff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#2979ff")), "bg-__3182ce_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3182ce")), "bg-__3b82f6_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3b82f6")), "bg-__a855f7_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#a855f7")), "bg-__d1fae5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#d1fae5")), "bg-__e0edff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#e0edff")), "bg-__e2e8f0_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#e2e8f0")), "bg-__e5e5e5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#e5e5e5")), "bg-__ecfdf5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ecfdf5")), "bg-__ef4444_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ef4444")), "bg-__eff6ff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#eff6ff")), "bg-__f1f5f9_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f1f5f9")), "bg-__f56c6c_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f56c6c")), "bg-__f59e0b_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f59e0b")), "bg-__f7fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f7fafc")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "bg-__fee2e2_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fee2e2")), "bg-__fef3c7_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fef3c7")), "bg-__fff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#ffffff")), "bg-__fff1f2_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fff1f2")), "bg-__fff5f5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fff5f5")), "bg-__fffbe2_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fffbe2")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "blur" to _pS(_uM("filter" to "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)", "--un-blur" to "blur(8rpx)")), "border" to _pS(_uM("borderTopWidth" to "var(--un-line-width-default,1px)", "borderRightWidth" to "var(--un-line-width-default,1px)", "borderBottomWidth" to "var(--un-line-width-default,1px)", "borderLeftWidth" to "var(--un-line-width-default,1px)")), "border-__e2e8f0_" to _pS(_uM("borderTopWidth" to "medium", "borderRightWidth" to "medium", "borderBottomWidth" to "medium", "borderLeftWidth" to "medium", "borderTopStyle" to "none", "borderRightStyle" to "none", "borderBottomStyle" to "none", "borderLeftStyle" to "none", "borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-bottom-color-__f1f5f9_" to _pS(_uM("borderBottomColor" to "#f1f5f9")), "border-bottom-color-__f8fafc_" to _pS(_uM("borderBottomColor" to "#f8fafc")), "border-bottom-style-solid" to _pS(_uM("borderBottomStyle" to "solid")), "border-bottom-width-0px" to _pS(_uM("borderBottomWidth" to 0)), "border-bottom-width-1px" to _pS(_uM("borderBottomWidth" to 1)), "border-color-__a7f3d0_" to _pS(_uM("borderTopColor" to "#a7f3d0", "borderRightColor" to "#a7f3d0", "borderBottomColor" to "#a7f3d0", "borderLeftColor" to "#a7f3d0")), "border-color-__bfdbfe_" to _pS(_uM("borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe")), "border-color-__cbd5e1_" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-color-__edf2f7_" to _pS(_uM("borderTopColor" to "#edf2f7", "borderRightColor" to "#edf2f7", "borderBottomColor" to "#edf2f7", "borderLeftColor" to "#edf2f7")), "border-color-__eee_" to _pS(_uM("borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee")), "border-color-__f1f5f9_" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "border-color-__fde68a_" to _pS(_uM("borderTopColor" to "#fde68a", "borderRightColor" to "#fde68a", "borderBottomColor" to "#fde68a", "borderLeftColor" to "#fde68a")), "border-color-__fecaca_" to _pS(_uM("borderTopColor" to "#fecaca", "borderRightColor" to "#fecaca", "borderBottomColor" to "#fecaca", "borderLeftColor" to "#fecaca")), "border-color-__ffe4e6_" to _pS(_uM("borderTopColor" to "#ffe4e6", "borderRightColor" to "#ffe4e6", "borderBottomColor" to "#ffe4e6", "borderLeftColor" to "#ffe4e6")), "border-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-t" to _pS(_uM("borderTopWidth" to "var(--un-line-width-default,1px)")), "border-top-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0")), "border-top-color-__f1f5f9_" to _pS(_uM("borderTopColor" to "#f1f5f9")), "border-top-color-__f8fafc_" to _pS(_uM("borderTopColor" to "#f8fafc")), "border-top-style-solid" to _pS(_uM("borderTopStyle" to "solid")), "border-top-width-1px" to _pS(_uM("borderTopWidth" to 1)), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "border-width-3px" to _pS(_uM("borderTopWidth" to 3, "borderRightWidth" to 3, "borderBottomWidth" to 3, "borderLeftWidth" to 3)), "fixed" to _pS(_uM("position" to "fixed")), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-col" to _pS(_uM("flexDirection" to "column")), "flex-column" to _pS(_uM("flexDirection" to "column")), "flex-row" to _pS(_uM("flexDirection" to "row")), "flex-wrap" to _pS(_uM("flexWrap" to "wrap")), "font-500" to _pS(_uM("fontWeight" to 500)), "font-bold" to _pS(_uM("fontWeight" to 700)), "font-medium" to _pS(_uM("fontWeight" to 500)), "font-semibold" to _pS(_uM("fontWeight" to 600)), "h-100px" to _pS(_uM("height" to 100)), "h-10px" to _pS(_uM("height" to 10)), "h-14px" to _pS(_uM("height" to 14)), "h-150px" to _pS(_uM("height" to 150)), "h-16px" to _pS(_uM("height" to 16)), "h-180px" to _pS(_uM("height" to 180)), "h-260px" to _pS(_uM("height" to 260)), "h-28px" to _pS(_uM("height" to 28)), "h-32px" to _pS(_uM("height" to 32)), "h-36px" to _pS(_uM("height" to 36)), "h-38px" to _pS(_uM("height" to 38)), "h-40px" to _pS(_uM("height" to 40)), "h-42px" to _pS(_uM("height" to 42)), "h-44px" to _pS(_uM("height" to 44)), "h-48px" to _pS(_uM("height" to 48)), "h-6px" to _pS(_uM("height" to 6)), "h-90px" to _pS(_uM("height" to 90)), "h-full" to _pS(_uM("height" to "100%")), "i_h-full" to _pS(_uM("!height" to "100%")), "items-center" to _pS(_uM("alignItems" to "center")), "justify-around" to _pS(_uM("justifyContent" to "space-around")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "justify-end" to _pS(_uM("justifyContent" to "flex-end")), "leading-16px" to _pS(_uM("lineHeight" to "16px")), "leading-18px" to _pS(_uM("lineHeight" to "18px")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "leading-24px" to _pS(_uM("lineHeight" to "24px")), "leading-normal" to _pS(_uM("lineHeight" to "normal")), "m-16px" to _pS(_uM("marginTop" to 16, "marginRight" to 16, "marginBottom" to 16, "marginLeft" to 16)), "m-auto" to _pS(_uM("marginTop" to "auto", "marginRight" to "auto", "marginBottom" to "auto", "marginLeft" to "auto")), "mb-10px" to _pS(_uM("marginBottom" to 10)), "mb-12px" to _pS(_uM("marginBottom" to 12)))
            }
        val styles1: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("mb-15px" to _pS(_uM("marginBottom" to 15)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-20px" to _pS(_uM("marginBottom" to 20)), "mb-24px" to _pS(_uM("marginBottom" to 24)), "mb-30px" to _pS(_uM("marginBottom" to 30)), "mb-4px" to _pS(_uM("marginBottom" to 4)), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "ml-10px" to _pS(_uM("marginLeft" to 10)), "ml-12px" to _pS(_uM("marginLeft" to 12)), "ml-4px" to _pS(_uM("marginLeft" to 4)), "ml-8px" to _pS(_uM("marginLeft" to 8)), "mr-10px" to _pS(_uM("marginRight" to 10)), "mr-12px" to _pS(_uM("marginRight" to 12)), "mr-15px" to _pS(_uM("marginRight" to 15)), "mr-16px" to _pS(_uM("marginRight" to 16)), "mr-20px" to _pS(_uM("marginRight" to 20)), "mr-4px" to _pS(_uM("marginRight" to 4)), "mr-6px" to _pS(_uM("marginRight" to 6)), "mr-8px" to _pS(_uM("marginRight" to 8)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-12px" to _pS(_uM("marginTop" to 12)), "mt-15px" to _pS(_uM("marginTop" to 15)), "mt-20px" to _pS(_uM("marginTop" to 20)), "mt-2px" to _pS(_uM("marginTop" to 2)), "mt-4px" to _pS(_uM("marginTop" to 4)), "mt-6px" to _pS(_uM("marginTop" to 6)), "mt-8px" to _pS(_uM("marginTop" to 8)), "mx-12px" to _pS(_uM("marginLeft" to 12, "marginRight" to 12)), "mx-16px" to _pS(_uM("marginLeft" to 16, "marginRight" to 16)), "mx-30px" to _pS(_uM("marginLeft" to 30, "marginRight" to 30)), "mx-auto" to _pS(_uM("marginLeft" to "auto", "marginRight" to "auto")), "my-10px" to _pS(_uM("marginTop" to 10, "marginBottom" to 10)), "my-20px" to _pS(_uM("marginTop" to 20, "marginBottom" to 20)), "my-8px" to _pS(_uM("marginTop" to 8, "marginBottom" to 8)), "none" to _pS(_uM("display" to "none")), "overflow-hidden" to _pS(_uM("overflow" to "hidden")), "p-10px" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-15px" to _pS(_uM("paddingTop" to 15, "paddingRight" to 15, "paddingBottom" to 15, "paddingLeft" to 15)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "p-20px" to _pS(_uM("paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "p-2px" to _pS(_uM("paddingTop" to 2, "paddingRight" to 2, "paddingBottom" to 2, "paddingLeft" to 2)), "p-30px" to _pS(_uM("paddingTop" to 30, "paddingRight" to 30, "paddingBottom" to 30, "paddingLeft" to 30)), "p-4px" to _pS(_uM("paddingTop" to 4, "paddingRight" to 4, "paddingBottom" to 4, "paddingLeft" to 4)), "p-5px" to _pS(_uM("paddingTop" to 5, "paddingRight" to 5, "paddingBottom" to 5, "paddingLeft" to 5)), "p-6px" to _pS(_uM("paddingTop" to 6, "paddingRight" to 6, "paddingBottom" to 6, "paddingLeft" to 6)), "p-8px" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "pb-10px" to _pS(_uM("paddingBottom" to 10)), "pb-20px" to _pS(_uM("paddingBottom" to 20)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "pb-8px" to _pS(_uM("paddingBottom" to 8)), "pt-12px" to _pS(_uM("paddingTop" to 12)), "pt-20px" to _pS(_uM("paddingTop" to 20)), "pt-4px" to _pS(_uM("paddingTop" to 4)), "pt-8px" to _pS(_uM("paddingTop" to 8)), "px-10px" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "px-12px" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "px-15px" to _pS(_uM("paddingLeft" to 15, "paddingRight" to 15)), "px-16px" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "px-20px" to _pS(_uM("paddingLeft" to 20, "paddingRight" to 20)), "px-30px" to _pS(_uM("paddingLeft" to 30, "paddingRight" to 30)), "px-6px" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "px-8px" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "py-10px" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "py-12px" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "py-15px" to _pS(_uM("paddingTop" to 15, "paddingBottom" to 15)), "py-24px" to _pS(_uM("paddingTop" to 24, "paddingBottom" to 24)), "py-2px" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "py-30px" to _pS(_uM("paddingTop" to 30, "paddingBottom" to 30)), "py-3px" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "py-4px" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "py-6px" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "py-8px" to _pS(_uM("paddingTop" to 8, "paddingBottom" to 8)), "relative" to _pS(_uM("position" to "relative")), "rounded-10px" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-14px" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "rounded-16px" to _pS(_uM("borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16)), "rounded-18px" to _pS(_uM("borderTopLeftRadius" to 18, "borderTopRightRadius" to 18, "borderBottomRightRadius" to 18, "borderBottomLeftRadius" to 18)), "rounded-20px" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "rounded-24px" to _pS(_uM("borderTopLeftRadius" to 24, "borderTopRightRadius" to 24, "borderBottomRightRadius" to 24, "borderBottomLeftRadius" to 24)), "rounded-2px" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "rounded-3px" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "rounded-45px" to _pS(_uM("borderTopLeftRadius" to 45, "borderTopRightRadius" to 45, "borderBottomRightRadius" to 45, "borderBottomLeftRadius" to 45)), "rounded-4px" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "rounded-5px" to _pS(_uM("borderTopLeftRadius" to 5, "borderTopRightRadius" to 5, "borderBottomRightRadius" to 5, "borderBottomLeftRadius" to 5)), "rounded-6px" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "rounded-bl-16px" to _pS(_uM("borderBottomLeftRadius" to 16)), "rounded-br-16px" to _pS(_uM("borderBottomRightRadius" to 16)), "rounded-l-16px" to _pS(_uM("borderTopLeftRadius" to 16, "borderBottomLeftRadius" to 16)), "rounded-lg" to _pS(_uM("borderTopLeftRadius" to "var(--un-radius-lg-default,8rpx)", "borderTopRightRadius" to "var(--un-radius-lg-default,8rpx)", "borderBottomRightRadius" to "var(--un-radius-lg-default,8rpx)", "borderBottomLeftRadius" to "var(--un-radius-lg-default,8rpx)")), "rounded-md" to _pS(_uM("borderTopLeftRadius" to "var(--un-radius-md-default,6rpx)", "borderTopRightRadius" to "var(--un-radius-md-default,6rpx)", "borderBottomRightRadius" to "var(--un-radius-md-default,6rpx)", "borderBottomLeftRadius" to "var(--un-radius-md-default,6rpx)")), "rounded-r-16px" to _pS(_uM("borderTopRightRadius" to 16, "borderBottomRightRadius" to 16)), "self-start" to _pS(_uM("alignSelf" to "flex-start")), "shadow-sm" to _pS(_uM("boxShadow" to "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow" to "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))")), "shadow-xs" to _pS(_uM("boxShadow" to "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow" to "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))")), "text-__059669_" to _pS(_uM("color" to "#059669")), "text-__065f46_" to _pS(_uM("color" to "#065f46")))
            }
        val styles2: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("text-__10b981_" to _pS(_uM("color" to "#10b981")), "text-__1a202c_" to _pS(_uM("color" to "#1a202c")), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__2563eb_" to _pS(_uM("color" to "#2563eb")), "text-__2979ff_" to _pS(_uM("color" to "#2979ff")), "text-__2d3748_" to _pS(_uM("color" to "#2d3748")), "text-__303133_" to _pS(_uM("color" to "#303133")), "text-__333_" to _pS(_uM("color" to "#333333")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__38bdf8_" to _pS(_uM("color" to "#38bdf8")), "text-__3b82f6_" to _pS(_uM("color" to "#3b82f6")), "text-__475569_" to _pS(_uM("color" to "#475569")), "text-__606266_" to _pS(_uM("color" to "#606266")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__718096_" to _pS(_uM("color" to "#718096")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-__d14328_" to _pS(_uM("color" to "#d14328")), "text-__d97706_" to _pS(_uM("color" to "#d97706")), "text-__dc2626_" to _pS(_uM("color" to "#dc2626")), "text-__e11d48_" to _pS(_uM("color" to "#e11d48")), "text-__ef4444_" to _pS(_uM("color" to "#ef4444")), "text-__f43f5e_" to _pS(_uM("color" to "#f43f5e")), "text-__f59e0b_" to _pS(_uM("color" to "#f59e0b")), "text-__ffffff_" to _pS(_uM("color" to "#ffffff")), "text-_var_--theme-color__37c2bc__" to _pS(_uM("color" to "var(--theme-color,#37c2bc)")), "text-10px" to _pS(_uM("fontSize" to 10)), "text-11px" to _pS(_uM("fontSize" to 11)), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-15px" to _pS(_uM("fontSize" to 15)), "text-16px" to _pS(_uM("fontSize" to 16)), "text-18px" to _pS(_uM("fontSize" to 18)), "text-20px" to _pS(_uM("fontSize" to 20)), "text-24px" to _pS(_uM("fontSize" to 24)), "text-25px" to _pS(_uM("fontSize" to 25)), "text-32px" to _pS(_uM("fontSize" to 32)), "text-center" to _pS(_uM("textAlign" to "center")), "text-white" to _pS(_uM("color" to "rgba(255,255,255,var(--un-color-opacity,1))")), "transition" to _pS(_uM("transitionProperty" to "all", "transitionDuration" to ".3s")), "underline" to _pS(_uM("textDecorationLine" to "underline")), "w-100px" to _pS(_uM("width" to 100)), "w-10px" to _pS(_uM("width" to 10)), "w-150px" to _pS(_uM("width" to 150)), "w-15px" to _pS(_uM("width" to 15)), "w-200px" to _pS(_uM("width" to 200)), "w-28px" to _pS(_uM("width" to 28)), "w-32px" to _pS(_uM("width" to 32)), "w-36px" to _pS(_uM("width" to 36)), "w-3px" to _pS(_uM("width" to 3)), "w-40px" to _pS(_uM("width" to 40)), "w-4px" to _pS(_uM("width" to 4)), "w-6px" to _pS(_uM("width" to 6)), "w-90px" to _pS(_uM("width" to 90)), "w-full" to _pS(_uM("width" to "100%")), "@TRANSITION" to _uM("transition" to _uM("property" to "all", "duration" to ".3s")))
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
