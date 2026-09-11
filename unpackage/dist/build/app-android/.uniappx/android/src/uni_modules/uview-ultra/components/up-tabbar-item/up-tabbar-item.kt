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
open class GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var name: Any? by `$props`
    open var icon: String by `$props`
    open var badge: Any? by `$props`
    open var dot: Boolean by `$props`
    open var text: String by `$props`
    open var badgeStyle: Any by `$props`
    open var mode: String by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItem
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val parentProps = inject<ComputedRef<UTSJSONObject>?>("upTabbarProps", null)
            val parentRegister = inject<(() -> Number)?>("upTabbarRegister", null)
            val parentChange = inject<((name: Any) -> Unit)?>("upTabbarChange", null)
            val internalIndex = ref<Number>(0)
            onMounted(fun(){
                if (parentRegister != null) {
                    internalIndex.value = parentRegister()
                }
            }
            )
            val isMidButton = computed<Boolean>(fun(): Boolean {
                return props.mode == "midButton"
            }
            )
            val itemName = computed(fun(): Any {
                if (props.name != null) {
                    return props.name!!
                }
                return internalIndex.value
            }
            )
            val isActive = computed<Boolean>(fun(): Boolean {
                if (parentProps == null) {
                    return false
                }
                val parentObj = parentProps!!.value
                if (parentObj == null) {
                    return false
                }
                val parentVal = parentObj["value"]
                if (parentVal == null) {
                    return false
                }
                return parentVal.toString() == itemName.value.toString()
            }
            )
            val activeColor = computed<String>(fun(): String {
                if (parentProps != null && parentProps!!.value != null) {
                    val kVal = parentProps!!.value!!["activeColor"]
                    if (kVal != null && kVal.toString() != "") {
                        return kVal.toString()
                    }
                }
                return "#1989fa"
            }
            )
            val inactiveColor = computed<String>(fun(): String {
                if (parentProps != null && parentProps!!.value != null) {
                    val kVal = parentProps!!.value!!["inactiveColor"]
                    if (kVal != null && kVal.toString() != "") {
                        return kVal.toString()
                    }
                }
                return "#7d7e80"
            }
            )
            val customTabbarItemStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val customBadgeStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.badgeStyle) as UTSJSONObject
            }
            )
            fun gen_clickHandler_fn() {
                if (parentChange != null) {
                    parentChange(itemName.value)
                }
                emit("click", itemName.value)
            }
            val clickHandler = ::gen_clickHandler_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_badge = resolveEasyComponent("up-badge", GenUniModulesUviewUltraComponentsUpBadgeUpBadgeClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-tabbar-item",
                    _uA(
                        if (isMidButton.value) {
                            "up-tabbar-item--mid-button"
                        } else {
                            ""
                        }
                    )
                )), "style" to _nS(customTabbarItemStyle.value), "onClick" to clickHandler), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "weapp-tw-border up-tabbar-item__icon",
                        _uA(
                            if (isMidButton.value) {
                                "up-tabbar-item__icon--mid-button"
                            } else {
                                ""
                            }
                        )
                    ))), _uA(
                        if (isTrue(isMidButton.value)) {
                            _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-tabbar-item--mid-button-cover"))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (_ctx.icon != "") {
                            _cV(_component_up_icon, _uM("key" to 1, "name" to _ctx.icon, "color" to if (isActive.value) {
                                activeColor.value
                            } else {
                                inactiveColor.value
                            }, "size" to if (isMidButton.value) {
                                26
                            } else {
                                20
                            }), null, 8, _uA(
                                "name",
                                "color",
                                "size"
                            ))
                        } else {
                            _cE(Fragment, _uM("key" to 2), _uA(
                                if (isTrue(isActive.value)) {
                                    renderSlot(_ctx.`$slots`, "active-icon", _uM("key" to 0))
                                } else {
                                    renderSlot(_ctx.`$slots`, "inactive-icon", _uM("key" to 1))
                                }
                            ), 64)
                        }
                        ,
                        _cV(_component_up_badge, _uM("absolute" to "", "offset" to _uA(
                            0,
                            if (_ctx.dot) {
                                "34rpx"
                            } else {
                                if (_ctx.badge != null && parseInt(_ctx.badge.toString()) > 9) {
                                    "14rpx"
                                } else {
                                    "20rpx"
                                }
                            }
                        ), "customStyle" to customBadgeStyle.value, "isDot" to _ctx.dot, "value" to if (_ctx.badge != null) {
                            if (_ctx.dot) {
                                1
                            } else {
                                _ctx.badge
                            }
                        } else {
                            0
                        }
                        , "show" to if (_ctx.dot) {
                            true
                        } else {
                            if (_ctx.badge != null) {
                                parseInt(_ctx.badge.toString()) > 0
                            } else {
                                false
                            }
                        }
                        ), null, 8, _uA(
                            "offset",
                            "customStyle",
                            "isDot",
                            "value",
                            "show"
                        ))
                    ), 2),
                    renderSlot(_ctx.`$slots`, "text", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("text", _uM("class" to "weapp-tw-border up-tabbar-item__text", "style" to _nS(_uM("color" to if (isActive.value) {
                                activeColor.value
                            } else {
                                inactiveColor.value
                            }
                            ))), _tD(_ctx.text), 5)
                        )
                    }
                    )
                ), 6)
            }
        }
        var name = "up-tabbar-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabbar-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-tabbar-item__icon" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "up-tabbar-item__text" to _pS(_uM("marginTop" to 2, "fontSize" to 11, "color" to "#606266", "textAlign" to "center")), "up-tabbar-item--mid-button" to _pS(_uM("position" to "relative")), "up-tabbar-item__icon--mid-button" to _pS(_uM("position" to "absolute", "top" to -18, "width" to 44, "height" to 44, "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "backgroundColor" to "#ffffff", "boxShadow" to "0 2px 8px rgba(0, 0, 0, 0.15)", "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "zIndex" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to null), "icon" to _uM("type" to "String", "default" to ""), "badge" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to null), "dot" to _uM("type" to "Boolean", "default" to false), "text" to _uM("type" to "String", "default" to ""), "badgeStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to fun(): UTSJSONObject {
            return (_uO("top" to "6px", "right" to "2px"))
        }
        ), "mode" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "name",
            "icon",
            "badge",
            "dot",
            "text",
            "badgeStyle",
            "mode",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
