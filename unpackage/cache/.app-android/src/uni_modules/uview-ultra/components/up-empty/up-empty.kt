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
open class GenUniModulesUviewUltraComponentsUpEmptyUpEmpty : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var icon: String by `$props`
    open var text: String by `$props`
    open var textColor: String by `$props`
    open var textSize: Any by `$props`
    open var iconColor: String by `$props`
    open var iconSize: Any by `$props`
    open var mode: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var show: Boolean by `$props`
    open var marginTop: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpEmptyUpEmpty) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpEmptyUpEmpty
            val _cache = __ins.renderCache
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            val icons: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("icons", "uni_modules/uview-ultra/components/up-empty/up-empty.uvue", 113, 7), "car" to t__1("up.empty.car", _uO()), "page" to t__1("up.empty.page", _uO()), "search" to t__1("up.empty.search", _uO()), "address" to t__1("up.empty.address", _uO()), "wifi" to t__1("up.empty.wifi", _uO()), "order" to t__1("up.empty.order", _uO()), "coupon" to t__1("up.empty.coupon", _uO()), "favor" to t__1("up.empty.favor", _uO()), "permission" to t__1("up.empty.permission", _uO()), "history" to t__1("up.empty.history", _uO()), "news" to t__1("up.empty.news", _uO()), "message" to t__1("up.empty.message", _uO()), "list" to t__1("up.empty.list", _uO()), "data" to t__1("up.empty.data", _uO()), "comment" to t__1("up.empty.comment", _uO()))
            val emptyStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-empty/up-empty.uvue", 134, 8))
                style["marginTop"] = addUnit(props.marginTop)
                return style
            }
            )
            val textStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-empty/up-empty.uvue", 142, 8))
                style["color"] = props.textColor
                style["fontSize"] = addUnit(props.textSize)
                return style
            }
            )
            val isSrc = computed(fun(): Boolean {
                return props.icon.indexOf("/") >= 0
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return if (isTrue(_ctx.show)) {
                    _cE("view", _uM("key" to 0, "class" to "up-empty", "style" to _nS(_uA(
                        emptyStyle.value,
                        _ctx.`$up`.addStyle(_ctx.customStyle)
                    ))), _uA(
                        if (isTrue(!isSrc.value)) {
                            _cV(_component_up_icon, _uM("key" to 0, "name" to if (_ctx.mode === "message") {
                                "chat"
                            } else {
                                "empty-" + _ctx.mode
                            }, "size" to _ctx.iconSize, "color" to _ctx.iconColor, "margin-top" to "14"), null, 8, _uA(
                                "name",
                                "size",
                                "color"
                            ))
                        } else {
                            _cE("image", _uM("key" to 1, "style" to _nS(_uM("width" to _ctx.`$up`.addUnit(_ctx.width), "height" to _ctx.`$up`.addUnit(_ctx.height))), "src" to _ctx.icon, "mode" to "widthFix"), null, 12, _uA(
                                "src"
                            ))
                        },
                        _cE("text", _uM("class" to "up-empty__text", "style" to _nS(_uA(
                            textStyle.value
                        ))), _tD(if (_ctx.text != "") {
                            _ctx.text
                        } else {
                            icons[_ctx.mode]
                        }), 5),
                        if (isTrue(_ctx.`$slots`["default"] != null || _ctx.`$slots`["\$default"] != null)) {
                            _cE("view", _uM("key" to 2, "class" to "up-empty__wrap"), _uA(
                                renderSlot(_ctx.`$slots`, "default")
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ), 4)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-empty"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "center", "alignContent" to "flex-start", "justifyContent" to "center")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__text" to _pS(_uM("marginTop" to "20rpx")), "up-slot-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "marginTop" to "20rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "icon" to _uM("type" to "String", "default" to default__62.getString("empty.icon")), "text" to _uM("type" to "String", "default" to default__62.getString("empty.text")), "textColor" to _uM("type" to "String", "default" to default__62.getString("empty.textColor")), "textSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__62.getNumber("empty.textSize")), "iconColor" to _uM("type" to "String", "default" to default__62.getString("empty.iconColor")), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__62.getNumber("empty.iconSize")), "mode" to _uM("type" to "String", "default" to default__62.getString("empty.mode")), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__62.getNumber("empty.width")), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__62.getNumber("empty.height")), "show" to _uM("type" to "Boolean", "default" to default__62.getBoolean("empty.show")), "marginTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__62.getNumber("empty.marginTop"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "icon",
            "text",
            "textColor",
            "textSize",
            "iconColor",
            "iconSize",
            "mode",
            "width",
            "height",
            "show",
            "marginTop"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
