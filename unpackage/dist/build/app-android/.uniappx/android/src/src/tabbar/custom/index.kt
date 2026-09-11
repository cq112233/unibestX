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
open class GenSrcTabbarCustomIndex : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var height: Number by `$props`
    open var bottomOffset: Number by `$props`
    open var showPlaceholder: Boolean by `$props`
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
        var setup: (__props: GenSrcTabbarCustomIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcTabbarCustomIndex
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(appStore.state.isDark)
            }
            )
            val safeAreaBottom = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                return if (insets != null) {
                    insets.bottom
                } else {
                    0
                }
            }
            )
            val activeThemeColor = computed<String>(fun(): String {
                return if (themeColor.value.length > 0) {
                    themeColor.value
                } else {
                    appStore.state.theme
                }
            }
            )
            val activeItemBgColor = computed<String>(fun(): String {
                if (appStore.state.isDark) {
                    return "rgba(255, 255, 255, 0.12)"
                }
                val color = activeThemeColor.value
                return "" + color + "18"
            }
            )
            onMounted(fun(){
                syncCurIdxByCurrentPage()
                safeHideNativeTabBar()
            }
            )
            fun gen_onTabClick_fn(index: Number) {
                handleTabbarClick(index)
            }
            val onTabClick = ::gen_onTabClick_fn
            fun gen_getText_fn(text: String): String {
                return `$t`(text)
            }
            val getText = ::gen_getText_fn
            fun gen_getItemBgColor_fn(index: Number): String {
                return if (curIdx.value == index) {
                    activeItemBgColor.value
                } else {
                    "transparent"
                }
            }
            val getItemBgColor = ::gen_getItemBgColor_fn
            fun gen_getItemIcon_fn(index: Number): String {
                if (tabbarList.length <= index) {
                    return ""
                }
                val item = tabbarList[index]
                if (curIdx.value == index && item.iconActive.length > 0) {
                    return item.iconActive
                }
                return item.icon
            }
            val getItemIcon = ::gen_getItemIcon_fn
            fun gen_getItemIconPath_fn(index: Number): String {
                if (tabbarList.length <= index) {
                    return ""
                }
                val item = tabbarList[index]
                if (curIdx.value == index && item.selectedIconPath != null && item.selectedIconPath!!.length > 0) {
                    return item.selectedIconPath!!
                }
                return if (item.iconPath != null) {
                    item.iconPath!!
                } else {
                    ""
                }
            }
            val getItemIconPath = ::gen_getItemIconPath_fn
            fun gen_getItemIconColor_fn(index: Number): String {
                return if (curIdx.value == index) {
                    activeThemeColor.value
                } else {
                    themeTokens.value.tabColor
                }
            }
            val getItemIconColor = ::gen_getItemIconColor_fn
            fun gen_getItemTextColor_fn(index: Number): String {
                return if (curIdx.value == index) {
                    activeThemeColor.value
                } else {
                    themeTokens.value.tabColor
                }
            }
            val getItemTextColor = ::gen_getItemTextColor_fn
            fun gen_getItemFontWeight_fn(index: Number): String {
                return if (curIdx.value == index) {
                    "600"
                } else {
                    "normal"
                }
            }
            val getItemFontWeight = ::gen_getItemFontWeight_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cE("view", _uM("class" to "weapp-tw-border custom-capsule-wrapper"), _uA(
                    if (isTrue(_ctx.showPlaceholder)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border custom-capsule-placeholder", "style" to _nS(_uM("height" to ("" + (_ctx.height + _ctx.bottomOffset * 2 + unref(safeAreaBottom)) + "px")))), null, 4)
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to "weapp-tw-border custom-capsule-container", "style" to _nS(_uM("bottom" to ("" + (_ctx.bottomOffset + unref(safeAreaBottom)) + "px"), "height" to ("" + _ctx.height + "px"), "backgroundColor" to unref(themeTokens).tabBg, "borderColor" to unref(themeTokens).tabBorder))), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(unref(tabbarList), fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("key" to index, "class" to "weapp-tw-border capsule-item-slot", "onClick" to fun(){
                                onTabClick(index)
                            }
                            ), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border capsule-item-inner", "style" to _nS(_uM("backgroundColor" to getItemBgColor(index)))), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border capsule-icon-wrap"), _uA(
                                        if (item.iconType == "icon") {
                                            _cV(_component_uni_icons, _uM("key" to 0, "type" to getItemIcon(index), "size" to 20, "color" to getItemIconColor(index)), null, 8, _uA(
                                                "type",
                                                "color"
                                            ))
                                        } else {
                                            _cE("image", _uM("key" to 1, "src" to getItemIconPath(index), "class" to "capsule-icon-image"), null, 8, _uA(
                                                "src"
                                            ))
                                        }
                                        ,
                                        if (isTrue(item.badge != null && item.badge == "dot")) {
                                            _cE("view", _uM("key" to 2, "class" to "weapp-tw-border capsule-badge-dot"))
                                        } else {
                                            if (isTrue(item.badge != null && item.badge != "dot")) {
                                                _cE("view", _uM("key" to 3, "class" to "weapp-tw-border capsule-badge-text"), _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border capsule-badge-label"), _tD(item.badge), 1)
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        }
                                    )),
                                    _cE("text", _uM("class" to "weapp-tw-border capsule-item-text", "style" to _nS(_uM("color" to getItemTextColor(index), "fontWeight" to getItemFontWeight(index)))), _tD(getText(item.text)), 5)
                                ), 4)
                            ), 8, _uA(
                                "onClick"
                            ))
                        }
                        ), 128)
                    ), 4)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "custom-capsule-wrapper" to _pS(_uM("width" to "100%")), "custom-capsule-placeholder" to _pS(_uM("width" to "100%")), "custom-capsule-container" to _pS(_uM("position" to "fixed", "left" to 16, "right" to 16, "zIndex" to 999, "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-around", "paddingTop" to 4, "paddingRight" to 6, "paddingBottom" to 4, "paddingLeft" to 6, "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopLeftRadius" to 34, "borderTopRightRadius" to 34, "borderBottomRightRadius" to 34, "borderBottomLeftRadius" to 34, "boxShadow" to "0 8px 24px rgba(0, 0, 0, 0.08)")), "capsule-item-slot" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "alignItems" to "center", "justifyContent" to "center", "height" to "100%")), "capsule-item-inner" to _pS(_uM("flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "width" to "90%", "height" to "84%", "borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20, "paddingTop" to 2, "paddingRight" to 0, "paddingBottom" to 2, "paddingLeft" to 0)), "capsule-icon-wrap" to _pS(_uM("position" to "relative", "alignItems" to "center", "justifyContent" to "center", "height" to 22)), "capsule-icon-image" to _pS(_uM("width" to 20, "height" to 20)), "capsule-item-text" to _pS(_uM("fontSize" to 11, "lineHeight" to "14px", "marginTop" to 2)), "capsule-badge-dot" to _pS(_uM("position" to "absolute", "top" to -2, "right" to -6, "width" to 7, "height" to 7, "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "backgroundColor" to "#ef4444")), "capsule-badge-text" to _pS(_uM("position" to "absolute", "top" to -4, "right" to -12, "paddingTop" to 0, "paddingRight" to 4, "paddingBottom" to 0, "paddingLeft" to 4, "height" to 14, "borderTopLeftRadius" to 999, "borderTopRightRadius" to 999, "borderBottomRightRadius" to 999, "borderBottomLeftRadius" to 999, "backgroundColor" to "#ef4444", "alignItems" to "center", "justifyContent" to "center")), "capsule-badge-label" to _pS(_uM("color" to "#ffffff", "fontSize" to 9, "fontWeight" to "bold")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "height" to _uM("type" to "Number", "default" to 64), "bottomOffset" to _uM("type" to "Number", "default" to 12), "showPlaceholder" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "height",
            "bottomOffset",
            "showPlaceholder"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
