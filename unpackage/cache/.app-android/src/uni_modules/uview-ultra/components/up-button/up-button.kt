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
open class GenUniModulesUviewUltraComponentsUpButtonUpButton : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var hairline: Boolean by `$props`
    open var type: String by `$props`
    open var size: String by `$props`
    open var shape: String by `$props`
    open var plain: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var loading: Boolean by `$props`
    open var loadingText: String by `$props`
    open var loadingMode: String by `$props`
    open var loadingSize: Number by `$props`
    open var openType: String by `$props`
    open var formType: String by `$props`
    open var appParameter: String by `$props`
    open var hoverStopPropagation: Boolean by `$props`
    open var lang: String by `$props`
    open var sessionFrom: String by `$props`
    open var sendMessageTitle: String by `$props`
    open var sendMessagePath: String by `$props`
    open var sendMessageImg: String by `$props`
    open var showMessageCard: Boolean by `$props`
    open var dataName: String by `$props`
    open var throttleTime: Any by `$props`
    open var hoverStartTime: Any by `$props`
    open var hoverStayTime: Any by `$props`
    open var text: Any by `$props`
    open var icon: String by `$props`
    open var iconColor: String by `$props`
    open var color: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpButtonUpButton) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpButtonUpButton
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val bemClass = computed(fun(): String {
                var ret = ""
                if (props.color == "") {
                    ret = uni.UNI5198058.bem("button", _uA(
                        props.type,
                        props.shape,
                        props.size
                    ), _uA(
                        _uA(
                            "disabled",
                            props.disabled
                        ),
                        _uA(
                            "plain",
                            props.plain
                        ),
                        _uA(
                            "hairline",
                            props.hairline
                        )
                    ))
                } else {
                    ret = uni.UNI5198058.bem("button", _uA(
                        props.shape,
                        props.size
                    ), _uA(
                        _uA(
                            "disabled",
                            props.disabled
                        ),
                        _uA(
                            "plain",
                            props.plain
                        ),
                        _uA(
                            "hairline",
                            props.hairline
                        )
                    ))
                }
                return ret
            }
            )
            val loadingColor = computed(fun(): String {
                if (props.plain) {
                    return if (props.color != "") {
                        props.color
                    } else {
                        `default`.getString("color.up-" + props.type) as String
                    }
                }
                if (props.type == "info") {
                    return "#c9c9c9"
                }
                return "rgb(200, 200, 200)"
            }
            )
            val iconColorCom = computed(fun(): String {
                if (props.iconColor != "") {
                    return props.iconColor
                }
                if (props.plain) {
                    return if (props.color != "") {
                        props.color
                    } else {
                        props.type
                    }
                } else {
                    return ""
                }
            }
            )
            val baseColor = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-button/up-button.uvue", 269, 9))
                if (props.color != "") {
                    if (!props.plain) {
                        style["backgroundColor"] = props.color
                    }
                    if (props.color.toString().indexOf("gradient") != -1) {
                        style["borderWidth"] = 0
                        if (!props.plain) {
                            style["backgroundImage"] = props.color
                        }
                    } else {
                        style["borderColor"] = props.color
                        style["borderWidth"] = "1px"
                        style["borderStyle"] = "solid"
                    }
                }
                return style
            }
            )
            val textSize = computed(fun(): String {
                var fontSize = "14px"
                if (props.size === "large") {
                    fontSize = "16px"
                }
                if (props.size === "normal") {
                    fontSize = "14px"
                }
                if (props.size === "small") {
                    fontSize = "12px"
                }
                if (props.size === "mini") {
                    fontSize = "10px"
                }
                return fontSize
            }
            )
            val clickHandler = fun(): Unit {
                if (!props.disabled && !props.loading) {
                    throttle(fun(){
                        emit("click")
                    }, parseInt(props.throttleTime.toString()))
                } else {
                    console.log("禁止点击", " at uni_modules/uview-ultra/components/up-button/up-button.uvue:314")
                }
            }
            val getphonenumber = fun(res: UniEvent): Unit {
                emit("getphonenumber", res)
            }
            val getuserinfo = fun(res: UniEvent): Unit {
                emit("getuserinfo", res)
            }
            val error = fun(res: UniEvent): Unit {
                emit("error", res)
            }
            val opensetting = fun(res: UniEvent): Unit {
                emit("opensetting", res)
            }
            val launchapp = fun(res: UniEvent): Unit {
                emit("launchapp", res)
            }
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("style" to _nS(_uA(
                    _uM("position" to "relative"),
                    _uA(
                        baseColor.value,
                        _ctx.`$upAddStyle`(_ctx.customStyle)
                    )
                )), "class" to _nC(_uA(
                    "up-button",
                    bemClass.value
                )), "hover-class" to if (!_ctx.disabled && !_ctx.loading) {
                    "up-button--active"
                } else {
                    ""
                }
                ), _uA(
                    if (isTrue(_ctx.loading)) {
                        _cE(Fragment, _uM("key" to 0), _uA(
                            _cV(_component_up_loading_icon, _uM("mode" to _ctx.loadingMode, "size" to _ctx.`$up`.addUnit(_ctx.loadingSize * 1.15), "color" to loadingColor.value), null, 8, _uA(
                                "mode",
                                "size",
                                "color"
                            )),
                            _cE("text", _uM("class" to "up-button__text up-button__loading-text", "style" to _nS(_uA(
                                _uM("fontSize" to (textSize.value + "px"))
                            ))), _tD(if (_ctx.loadingText != "") {
                                _ctx.loadingText
                            } else {
                                _ctx.text
                            }), 5)
                        ), 64)
                    } else {
                        _cE(Fragment, _uM("key" to 1), _uA(
                            if (_ctx.icon != "") {
                                _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.icon, "color" to iconColorCom.value, "size" to _ctx.`$up`.addUnit(parseInt(_ctx.`$up`.getPx(textSize.value)) * 1.35), "customStyle" to _uO("marginRight" to "2px")), null, 8, _uA(
                                    "name",
                                    "color",
                                    "size"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("text", _uM("class" to "up-button__text", "style" to _nS(_uA(
                                        _uM("fontSize" to (textSize.value + "px"))
                                    ))), _tD(_ctx.text), 5)
                                )
                            }
                            )
                        ), 64)
                    }
                    ,
                    _cE("button", _uM("hover-start-time" to _ctx.hoverStartTime, "hover-stay-time" to _ctx.hoverStayTime, "form-type" to _ctx.formType, "open-type" to _ctx.openType, "app-parameter" to _ctx.appParameter, "hover-stop-propagation" to _ctx.hoverStopPropagation, "send-message-title" to _ctx.sendMessageTitle, "send-message-path" to _ctx.sendMessagePath, "lang" to _ctx.lang, "data-name" to _ctx.dataName, "session-from" to _ctx.sessionFrom, "send-message-img" to _ctx.sendMessageImg, "show-message-card" to _ctx.showMessageCard, "onGetphonenumber" to getphonenumber, "onGetuserinfo" to getuserinfo, "onError" to error, "onOpensetting" to opensetting, "onLaunchapp" to launchapp, "loading" to _ctx.loading, "hover-class" to if (!_ctx.disabled && !_ctx.loading) {
                        "up-button__button--active"
                    } else {
                        ""
                    }
                    , "style" to _nS(_uM("background" to "#fff", "position" to "absolute", "top" to "0", "bottom" to "0", "left" to "0", "right" to "0", "opacity" to "0")), "class" to "up-reset-button", "onClick" to clickHandler), null, 44, _uA(
                        "hover-start-time",
                        "hover-stay-time",
                        "form-type",
                        "open-type",
                        "app-parameter",
                        "hover-stop-propagation",
                        "send-message-title",
                        "send-message-path",
                        "lang",
                        "data-name",
                        "session-from",
                        "send-message-img",
                        "show-message-card",
                        "loading",
                        "hover-class"
                    ))
                ), 14, _uA(
                    "hover-class"
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
                return _uM("up-button" to _pS(_uM("height" to 40, "position" to "relative", "boxSizing" to "border-box", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "position:before" to "absolute", "top:before" to "50%", "left:before" to "50%", "width:before" to "100%", "height:before" to "100%", "transform:before" to "translate(-50%, -50%)", "opacity:before" to 0, "!backgroundColor:before" to "#000000", "!borderTopColor:before" to "#000000", "!borderRightColor:before" to "#000000", "!borderBottomColor:before" to "#000000", "!borderLeftColor:before" to "#000000")), "up-button__text" to _uM("" to _uM("fontSize" to 15, "color" to "#ffffff"), ".up-button--normal " to _uM("fontSize" to 14), ".up-button--small " to _uM("fontSize" to 12), ".up-button--mini " to _uM("fontSize" to 10), ".up-button--info " to _uM("color" to "#323233"), ".up-button--success " to _uM("color" to "#ffffff"), ".up-button--primary " to _uM("color" to "#ffffff"), ".up-button--error " to _uM("color" to "#ffffff"), ".up-button--warning " to _uM("color" to "#ffffff"), ".up-button--plain.up-button--primary " to _uM("color" to "var(--theme-color, #0957de)"), ".up-button--plain.up-button--info " to _uM("color" to "#000000"), ".up-button--plain.up-button--success " to _uM("color" to "#5ac725"), ".up-button--plain.up-button--error " to _uM("color" to "#f56c6c"), ".up-button--plain.up-button--warning " to _uM("color" to "#f56c6c")), "up-button__loading-text" to _pS(_uM("fontSize" to 15, "marginLeft" to 4)), "up-button--large" to _pS(_uM("width" to "100%", "height" to 50, "paddingTop" to 0, "paddingRight" to 15, "paddingBottom" to 0, "paddingLeft" to 15)), "up-button--normal" to _pS(_uM("paddingTop" to 0, "paddingRight" to 12, "paddingBottom" to 0, "paddingLeft" to 12)), "up-button--small" to _pS(_uM("minWidth" to 60, "height" to 30, "paddingTop" to 0, "paddingRight" to 8, "paddingBottom" to 0, "paddingLeft" to 8)), "up-button--mini" to _pS(_uM("height" to 22, "minWidth" to 50, "paddingTop" to 0, "paddingRight" to 8, "paddingBottom" to 0, "paddingLeft" to 8)), "up-button--disabled" to _pS(_uM("opacity" to 0.5)), "up-button--active" to _pS(_uM("opacity" to 0.75)), "up-button--info" to _pS(_uM("!backgroundColor" to "#ffffff", "!borderTopColor" to "#ebedf0", "!borderRightColor" to "#ebedf0", "!borderBottomColor" to "#ebedf0", "!borderLeftColor" to "#ebedf0", "!borderTopWidth" to 1, "!borderRightWidth" to 1, "!borderBottomWidth" to 1, "!borderLeftWidth" to 1, "!borderTopStyle" to "solid", "!borderRightStyle" to "solid", "!borderBottomStyle" to "solid", "!borderLeftStyle" to "solid")), "up-button--success" to _pS(_uM("!backgroundColor" to "#5ac725", "!borderTopColor" to "#5ac725", "!borderRightColor" to "#5ac725", "!borderBottomColor" to "#5ac725", "!borderLeftColor" to "#5ac725", "!borderTopWidth" to 1, "!borderRightWidth" to 1, "!borderBottomWidth" to 1, "!borderLeftWidth" to 1, "!borderTopStyle" to "solid", "!borderRightStyle" to "solid", "!borderBottomStyle" to "solid", "!borderLeftStyle" to "solid")), "up-button--primary" to _pS(_uM("!backgroundColor" to "var(--theme-color, #0957de)", "!borderTopColor" to "var(--theme-color, #0957de)", "!borderRightColor" to "var(--theme-color, #0957de)", "!borderBottomColor" to "var(--theme-color, #0957de)", "!borderLeftColor" to "var(--theme-color, #0957de)", "!borderTopWidth" to 1, "!borderRightWidth" to 1, "!borderBottomWidth" to 1, "!borderLeftWidth" to 1, "!borderTopStyle" to "solid", "!borderRightStyle" to "solid", "!borderBottomStyle" to "solid", "!borderLeftStyle" to "solid")), "up-button--error" to _pS(_uM("!backgroundColor" to "#f56c6c", "!borderTopColor" to "#f56c6c", "!borderRightColor" to "#f56c6c", "!borderBottomColor" to "#f56c6c", "!borderLeftColor" to "#f56c6c", "!borderTopWidth" to 1, "!borderRightWidth" to 1, "!borderBottomWidth" to 1, "!borderLeftWidth" to 1, "!borderTopStyle" to "solid", "!borderRightStyle" to "solid", "!borderBottomStyle" to "solid", "!borderLeftStyle" to "solid")), "up-button--warning" to _pS(_uM("!backgroundColor" to "#f9ae3d", "!borderTopColor" to "#f9ae3d", "!borderRightColor" to "#f9ae3d", "!borderBottomColor" to "#f9ae3d", "!borderLeftColor" to "#f9ae3d", "!borderTopWidth" to 1, "!borderRightWidth" to 1, "!borderBottomWidth" to 1, "!borderLeftWidth" to 1, "!borderTopStyle" to "solid", "!borderRightStyle" to "solid", "!borderBottomStyle" to "solid", "!borderLeftStyle" to "solid")), "up-button--block" to _pS(_uM("display" to "flex", "flexDirection" to "row", "width" to "100%")), "up-button--circle" to _pS(_uM("borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100)), "up-button--square" to _pS(_uM("borderBottomLeftRadius" to 3, "borderBottomRightRadius" to 3, "borderTopLeftRadius" to 3, "borderTopRightRadius" to 3)), "up-button__icon" to _pS(_uM("minWidth" to 4)), "up-button--plain" to _pS(_uM("!backgroundColor" to "#ffffff")), "up-button--hairline" to _pS(_uM("!borderTopWidth" to 0.5, "!borderRightWidth" to 0.5, "!borderBottomWidth" to 0.5, "!borderLeftWidth" to 0.5)), "up-button__button--active" to _pS(_uM("!opacity" to 0.2, "opacity:before" to 0.15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "getphonenumber" to null, "getuserinfo" to null, "error" to null, "opensetting" to null, "launchapp" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "hairline" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.hairline")
        }
        ), "type" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.type")
        }
        ), "size" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.size")
        }
        ), "shape" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.shape")
        }
        ), "plain" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.plain")
        }
        ), "disabled" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.disabled")
        }
        ), "loading" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.loading")
        }
        ), "loadingText" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.loadingText")
        }
        ), "loadingMode" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.loadingMode")
        }
        ), "loadingSize" to _uM("type" to "Number", "default" to fun(): Number? {
            return default__12.getNumber("button.loadingSize")
        }
        ), "openType" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.openType")
        }
        ), "formType" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.formType")
        }
        ), "appParameter" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.appParameter")
        }
        ), "hoverStopPropagation" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.hoverStopPropagation")
        }
        ), "lang" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.lang")
        }
        ), "sessionFrom" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.sessionFrom")
        }
        ), "sendMessageTitle" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.sendMessageTitle")
        }
        ), "sendMessagePath" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.sendMessagePath")
        }
        ), "sendMessageImg" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.sendMessageImg")
        }
        ), "showMessageCard" to _uM("type" to "Boolean", "default" to fun(): Boolean? {
            return default__12.getBoolean("button.showMessageCard")
        }
        ), "dataName" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.dataName")
        }
        ), "throttleTime" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__12.getNumber("button.throttleTime")
        }
        ), "hoverStartTime" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__12.getNumber("button.hoverStartTime")
        }
        ), "hoverStayTime" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): Number? {
            return default__12.getNumber("button.hoverStayTime")
        }
        ), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to fun(): String? {
            return default__12.getString("button.text")
        }
        ), "icon" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.icon")
        }
        ), "iconColor" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.iconColor")
        }
        ), "color" to _uM("type" to "String", "default" to fun(): String? {
            return default__12.getString("button.color")
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "hairline",
            "type",
            "size",
            "shape",
            "plain",
            "disabled",
            "loading",
            "loadingText",
            "loadingMode",
            "loadingSize",
            "openType",
            "formType",
            "appParameter",
            "hoverStopPropagation",
            "lang",
            "sessionFrom",
            "sendMessageTitle",
            "sendMessagePath",
            "sendMessageImg",
            "showMessageCard",
            "dataName",
            "throttleTime",
            "hoverStartTime",
            "hoverStayTime",
            "text",
            "icon",
            "iconColor",
            "color"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
