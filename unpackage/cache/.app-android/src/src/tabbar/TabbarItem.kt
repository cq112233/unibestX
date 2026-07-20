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
open class GenSrcTabbarTabbarItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var item: Any by `$props`
    open var index: Number by `$props`
    open var isBulge: Boolean by `$props`
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
        var setup: (__props: GenSrcTabbarTabbarItem) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcTabbarTabbarItem
            val _cache = __ins.renderCache
            val props = __props
            val inactiveColor = "#999999"
            val tabbarItem = computed(fun(): CustomTabBarItem {
                return props.item as CustomTabBarItem
            }
            )
            fun gen_getIcon_fn(): String {
                if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
                    return tabbarItem.value.iconActive
                }
                return tabbarItem.value.icon
            }
            val getIcon = ::gen_getIcon_fn
            fun gen_getActiveColor_fn(): String {
                return if (curIdx.value == props.index) {
                    themeColor.value
                } else {
                    inactiveColor
                }
            }
            val getActiveColor = ::gen_getActiveColor_fn
            fun gen_isDotBadge_fn(): Boolean {
                return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot"
            }
            val isDotBadge = ::gen_isDotBadge_fn
            fun gen_isNumberBadge_fn(): Boolean {
                return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot"
            }
            val isNumberBadge = ::gen_isNumberBadge_fn
            fun gen_getBadgeText_fn(): String {
                val badge = tabbarItem.value.badge
                if (badge == null || badge == "dot") {
                    return ""
                }
                if (UTSAndroid.`typeof`(badge) == "number") {
                    val num = badge as Number
                    if (num > 99) {
                        return "99+"
                    }
                    return "" + num
                }
                return "" + badge
            }
            val getBadgeText = ::gen_getBadgeText_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return if (isTrue(props.isBulge)) {
                    _cE("view", _uM("key" to 0, "class" to "bulge-item"), _uA(
                        _cE("view", _uM("class" to "bulge-btn"), _uA(
                            _cE("text", _uM("class" to "ai-btn-text"), "AI")
                        ))
                    ))
                } else {
                    _cE("view", _uM("key" to 1, "class" to "tabbar-item-inner"), _uA(
                        if (unref(tabbarItem).iconType === "image") {
                            _cE("image", _uM("key" to 0, "src" to getIcon(), "mode" to "scaleToFill", "class" to "icon-normal"), null, 8, _uA(
                                "src"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (unref(tabbarItem).iconType === "icon") {
                            _cE("view", _uM("key" to 1, "class" to "icon-normal", "style" to _nS(_uM("align-items" to "center", "justify-content" to "center"))), _uA(
                                _cV(_component_uni_icons, _uM("type" to getIcon(), "size" to "24", "style" to _nS(_uM("color" to getActiveColor()))), null, 8, _uA(
                                    "type",
                                    "style"
                                ))
                            ), 4)
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        _cE("text", _uM("class" to "tabbar-text", "style" to _nS(_uM("color" to getActiveColor()))), _tD(_ctx.`$t`(unref(tabbarItem).text)), 5),
                        if (isTrue(isDotBadge())) {
                            _cE("view", _uM("key" to 2, "class" to "badge-dot"))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (isTrue(isNumberBadge())) {
                            _cE("view", _uM("key" to 3, "class" to "badge-count"), _uA(
                                _cE("text", _uM("class" to "badge-count-text"), _tD(getBadgeText()), 1)
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ))
                }
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("tabbar-item-inner" to _pS(_uM("alignItems" to "center", "justifyContent" to "center", "position" to "relative")), "icon-normal" to _pS(_uM("width" to 24, "height" to 24)), "tabbar-text" to _pS(_uM("fontSize" to 10, "marginTop" to 2, "textAlign" to "center")), "badge-dot" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "width" to 8, "height" to 8, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "backgroundColor" to "#f56c6c")), "badge-count" to _pS(_uM("position" to "absolute", "top" to 0, "right" to -6, "height" to 16, "paddingLeft" to 4, "paddingRight" to 4, "borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16, "backgroundColor" to "#f56c6c", "alignItems" to "center", "justifyContent" to "center")), "badge-count-text" to _pS(_uM("fontSize" to 10, "color" to "#ffffff", "textAlign" to "center")), "bulge-item" to _pS(_uM("position" to "relative", "width" to "100%", "height" to 80, "alignItems" to "center")), "bulge-btn" to _pS(_uM("position" to "absolute", "top" to 18, "width" to 52, "height" to 52, "borderTopLeftRadius" to 26, "borderTopRightRadius" to 26, "borderBottomRightRadius" to 26, "borderBottomLeftRadius" to 26, "backgroundImage" to "linear-gradient(135deg, #0ea5e9, #2563eb)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "rgba(255,255,255,0.5)", "borderRightColor" to "rgba(255,255,255,0.5)", "borderBottomColor" to "rgba(255,255,255,0.5)", "borderLeftColor" to "rgba(255,255,255,0.5)", "alignItems" to "center", "justifyContent" to "center", "boxShadow" to "0px 3px 8px rgba(37, 99, 235, 0.25)")), "ai-btn-text" to _pS(_uM("color" to "#ffffff", "fontSize" to 14, "fontWeight" to "600", "letterSpacing" to 1, "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "item" to _uM("required" to true), "index" to _uM("type" to "Number", "required" to true), "isBulge" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "isBulge"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
