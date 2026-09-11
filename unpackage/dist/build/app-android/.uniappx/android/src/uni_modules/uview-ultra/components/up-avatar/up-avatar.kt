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
open class GenUniModulesUviewUltraComponentsUpAvatarUpAvatar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var src: String by `$props`
    open var shape: String by `$props`
    open var size: Any by `$props`
    open var mode: String by `$props`
    open var text: String by `$props`
    open var bgColor: String by `$props`
    open var color: String by `$props`
    open var fontSize: Any by `$props`
    open var icon: String by `$props`
    open var mpAvatar: Boolean by `$props`
    open var randomBgColor: Boolean by `$props`
    open var defaultUrl: String by `$props`
    open var colorIndex: Any by `$props`
    open var name: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpAvatarUpAvatar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpAvatarUpAvatar
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val colors = _uA(
                "#ffb34b",
                "#f2bba9",
                "#f7a196",
                "#f18080",
                "#88a867",
                "#bfbf39",
                "#89c152",
                "#94d554",
                "#f19ec2",
                "#afaae4",
                "#e1b0df",
                "#c38cc1",
                "#72dcdc",
                "#9acdcb",
                "#77b1cc",
                "#448aca",
                "#86cefa",
                "#98d1ee",
                "#73d1f1",
                "#80a7dc"
            )
            val avatarUrl = ref<String>("")
            val getBackColor = computed<String>(fun(): String {
                var result = "#eeeeee"
                if (props.text !== "" || props.icon !== "") {
                    val colorIndexNo = parseInt(props.colorIndex.toString())
                    if (props.randomBgColor) {
                        if (props.colorIndex.toString() !== "") {
                            result = colors[colorIndexNo]
                        } else {
                            result = colors[random(0, 19)]
                        }
                    } else {
                        result = props.bgColor
                    }
                } else {
                    result = "transparent"
                }
                return result
            }
            )
            val avatarStyle = computed(fun(): UTSJSONObject {
                val custom = addStyle(props.customStyle) as UTSJSONObject
                val base: UTSJSONObject = _uO("backgroundColor" to getBackColor.value, "width" to addUnit(props.size), "height" to addUnit(props.size))
                return deepMerge(base, custom) as UTSJSONObject
            }
            )
            val imageSizeStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to addUnit(props.size), "height" to addUnit(props.size))
            }
            )
            val errorHandler = fun(){
                avatarUrl.value = props.defaultUrl
            }
            val clickHandler = fun(){
                emit("click", props.name)
            }
            watch(fun(): String {
                return props.src
            }
            , fun(newValue: String){
                avatarUrl.value = newValue
            }
            )
            onMounted(fun(){
                avatarUrl.value = props.src
            }
            )
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_text = resolveEasyComponent("up-text", GenUniModulesUviewUltraComponentsUpTextUpTextClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border up-avatar",
                    _uA(
                        "up-avatar--" + _ctx.shape
                    )
                )), "style" to _nS(avatarStyle.value), "onClick" to clickHandler), _uA(
                    renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            if (_ctx.icon != "") {
                                _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.icon, "size" to _ctx.fontSize, "color" to _ctx.color), null, 8, _uA(
                                    "name",
                                    "size",
                                    "color"
                                ))
                            } else {
                                if (_ctx.text != "") {
                                    _cV(_component_up_text, _uM("key" to 1, "text" to _ctx.text, "size" to _ctx.fontSize, "color" to _ctx.color, "align" to "center", "style" to _nS(_uM("justifyContent" to "center"))), null, 8, _uA(
                                        "text",
                                        "size",
                                        "color",
                                        "style"
                                    ))
                                } else {
                                    _cE("image", _uM("key" to 2, "class" to _nC(_uA(
                                        "up-avatar__image",
                                        _uA(
                                            "up-avatar__image--" + _ctx.shape
                                        )
                                    )), "src" to if (avatarUrl.value != "") {
                                        avatarUrl.value
                                    } else {
                                        _ctx.defaultUrl
                                    }
                                    , "mode" to _ctx.mode, "onError" to errorHandler, "style" to _nS(imageSizeStyle.value)), null, 46, _uA(
                                        "src",
                                        "mode"
                                    ))
                                }
                            }
                        )
                    }
                    )
                ), 6)
            }
        }
        var name = "up-avatar"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-avatar" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "position" to "relative")), "up-avatar--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-avatar--square" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-avatar__image" to _pS(_uM("width" to "100%", "height" to "100%")), "up-avatar__image--circle" to _pS(_uM("borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-avatar__image--square" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "src" to _uM("type" to "String", "default" to ""), "shape" to _uM("type" to "String", "default" to "circle"), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 40), "mode" to _uM("type" to "String", "default" to "scaleToFill"), "text" to _uM("type" to "String", "default" to ""), "bgColor" to _uM("type" to "String", "default" to "#eee"), "color" to _uM("type" to "String", "default" to "#fff"), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 18), "icon" to _uM("type" to "String", "default" to ""), "mpAvatar" to _uM("type" to "Boolean", "default" to false), "randomBgColor" to _uM("type" to "Boolean", "default" to false), "defaultUrl" to _uM("type" to "String", "default" to ""), "colorIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "name" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "src",
            "shape",
            "size",
            "mode",
            "text",
            "bgColor",
            "color",
            "fontSize",
            "icon",
            "mpAvatar",
            "randomBgColor",
            "defaultUrl",
            "colorIndex",
            "name",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
