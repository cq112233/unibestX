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
open class GenUniModulesUviewUltraComponentsUpTextUpText : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        val _component_up_link = resolveEasyComponent("up-link", GenUniModulesUviewUltraComponentsUpLinkUpLinkClass)
        return if (isTrue(_ctx.show)) {
            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                "up-text",
                _uA(
                    _ctx.customClass
                )
            )), "style" to _nS(_uM("margin" to _ctx.margin, "justifyContent" to if (_ctx.align === "left") {
                "flex-start"
            } else {
                if (_ctx.align === "center") {
                    "center"
                } else {
                    "flex-end"
                }
            })), "onClick" to _ctx.clickHandler), _uA(
                if (_ctx.mode === "price") {
                    _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                        "up-text__price",
                        "up-text__value--" + _ctx.type
                    )), "style" to _nS(_uA(
                        _ctx.valueStyle
                    ))), "￥", 6)
                } else {
                    _cC("v-if", true)
                },
                if (isTrue(_ctx.prefixIcon)) {
                    _cE("view", _uM("key" to 1, "class" to "up-text__prefix-icon"), _uA(
                        _cV(_component_up_icon, _uM("name" to _ctx.prefixIcon, "customStyle" to _ctx.addStyle(_ctx.iconStyle)), null, 8, _uA(
                            "name",
                            "customStyle"
                        ))
                    ))
                } else {
                    _cC("v-if", true)
                },
                if (_ctx.mode === "link") {
                    _cV(_component_up_link, _uM("key" to 2, "class" to _nC(_uA(
                        "up-text__value",
                        _uA(
                            "up-text__value--" + _ctx.type,
                            "up-line-" + _ctx.lines
                        )
                    )), "style" to _nS(_uM("fontWeight" to _ctx.valueStyle["fontWeight"], "wordWrap" to _ctx.valueStyle["wordWrap"], "fontSize" to _ctx.valueStyle["fontSize"])), "text" to _ctx.value, "href" to _ctx.href, "underLine" to ""), null, 8, _uA(
                        "style",
                        "class",
                        "text",
                        "href"
                    ))
                } else {
                    if (isTrue(_ctx.openType != "" && _ctx.isMp)) {
                        _cE("button", _uM("key" to 3, "class" to "up-reset-button up-text__value", "style" to _nS(_uA(
                            _ctx.valueStyle
                        )), "data-index" to "index", "openType" to _ctx.openType, "onGetuserinfo" to _ctx.onGetUserInfo, "onContact" to _ctx.onContact, "onGetphonenumber" to _ctx.onGetPhoneNumber, "onError" to _ctx.onError, "onLaunchapp" to _ctx.onLaunchApp, "onOpensetting" to _ctx.onOpenSetting, "lang" to _ctx.lang, "session-from" to _ctx.sessionFrom, "send-message-title" to _ctx.sendMessageTitle, "send-message-path" to _ctx.sendMessagePath, "send-message-img" to _ctx.sendMessageImg, "show-message-card" to _ctx.showMessageCard, "app-parameter" to _ctx.appParameter), _tD(_ctx.value), 45, _uA(
                            "openType",
                            "onGetuserinfo",
                            "onContact",
                            "onGetphonenumber",
                            "onError",
                            "onLaunchapp",
                            "onOpensetting",
                            "lang",
                            "session-from",
                            "send-message-title",
                            "send-message-path",
                            "send-message-img",
                            "show-message-card",
                            "app-parameter"
                        ))
                    } else {
                        _cE("text", _uM("key" to 4, "class" to _nC(_uA(
                            "up-text__value",
                            _uA(
                                "up-text__value--" + _ctx.type,
                                "up-line-" + _ctx.lines
                            )
                        )), "style" to _nS(_uA(
                            _ctx.valueStyle
                        ))), _tD(_ctx.value), 7)
                    }
                },
                if (_ctx.suffixIcon != "") {
                    _cE("view", _uM("key" to 5, "class" to "up-text__suffix-icon"), _uA(
                        _cV(_component_up_icon, _uM("name" to _ctx.suffixIcon, "customStyle" to _ctx.addStyle(_ctx.iconStyle)), null, 8, _uA(
                            "name",
                            "customStyle"
                        ))
                    ))
                } else {
                    _cC("v-if", true)
                }
            ), 14, _uA(
                "onClick"
            ))
        } else {
            _cC("v-if", true)
        }
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var type: String by `$props`
    open var show: Boolean by `$props`
    open var text: Any by `$props`
    open var prefixIcon: String by `$props`
    open var suffixIcon: String by `$props`
    open var mode: String by `$props`
    open var href: String by `$props`
    open var format: Any by `$props`
    open var call: Boolean by `$props`
    open var openType: String by `$props`
    open var bold: Boolean by `$props`
    open var block: Boolean by `$props`
    open var lines: Any by `$props`
    open var color: String by `$props`
    open var size: Any by `$props`
    open var iconStyle: Any by `$props`
    open var decoration: Any? by `$props`
    open var margin: Any by `$props`
    open var lineHeight: Any by `$props`
    open var align: String by `$props`
    open var wordWrap: String by `$props`
    open var lang: String by `$props`
    open var sessionFrom: String by `$props`
    open var sendMessageTitle: String by `$props`
    open var sendMessagePath: String by `$props`
    open var sendMessageImg: String by `$props`
    open var showMessageCard: Boolean by `$props`
    open var appParameter: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var valueStyle: UTSJSONObject by `$data`
    open var value: String by `$data`
    open var isMp: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "valueStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-text/up-text.uvue", 125, 17), "textDecoration" to this.decoration, "fontWeight" to if (this.bold) {
                "bold"
            } else {
                "normal"
            }
            , "wordWrap" to this.wordWrap, "fontSize" to addUnit(this.size))
            if (this.type == "") {
                style["color"] = this.color
            }
            if (this.lines != "") {
                style["lines"] = this.lines
            }
            if (this.lineHeight != "") {
                style["lineHeight"] = addUnit(this.lineHeight)
            }
            if (this.block) {
                style["display"] = "block"
            }
            return deepMerge(style, uni.UNI5198058.addStyle(this.customStyle)) as UTSJSONObject
        }
        ), "value" to computed<String>(fun(): String {
            var _this = this
            var text = _this.text
            var mode = _this.mode
            var format = _this.format
            var href = _this.href
            var textStr = text.toString()
            if (mode === "price") {
                if (!UTSRegExp("^\\d+(\\.\\d+)?\$", "").test(textStr)) {
                    error("金额模式下，text参数需要为金额格式")
                }
                return priceFormat(textStr, 2)
            }
            if (mode === "date") {
                if (!date(textStr)) {
                    error("日期模式下，text参数需要为日期或时间戳格式" + textStr)
                }
                if (format != "") {
                    return timeFormat(textStr, format.toString())
                }
                return timeFormat(textStr, "yyyy-mm-dd")
            }
            if (mode === "phone") {
                if (format === "encrypt") {
                    return "" + textStr.substring(0, 3) + "****" + textStr.substring(7)
                }
                return textStr
            }
            if (mode === "name") {
                if (!(UTSAndroid.`typeof`(textStr) === "string")) {
                    error("姓名模式下，text参数需要为字符串格式")
                }
                if (format === "encrypt") {
                    return this.formatName(textStr)
                }
                return textStr
            }
            if (mode === "link") {
                if (!uni.UNI5198058.url(href)) {
                    error("超链接模式下，href参数需要为URL格式")
                }
                return textStr
            }
            return textStr
        }
        ), "isMp" to computed<Boolean>(fun(): Boolean {
            var mp = false
            return mp
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(style: Any): Any {
        return uni.UNI5198058.addStyle(style)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        if (this.call && this.mode === "phone") {}
        this.`$emit`("click")
    }
    open var formatName = ::gen_formatName_fn
    open fun gen_formatName_fn(name: String): String {
        var value = ""
        if (name.length == 2) {
            value = name.substring(0, 1) + "*"
        } else if (name.length > 2) {
            var char = ""
            run {
                var i: Number = 0
                var len = name.length - 2
                while(i < len){
                    char += "*"
                    i++
                }
            }
            value = name.substring(0, 1) + char + name.substring(-1, 1)
        } else {
            value = name
        }
        return value
    }
    open var onGetUserInfo = ::gen_onGetUserInfo_fn
    open fun gen_onGetUserInfo_fn(): Unit {}
    open var onContact = ::gen_onContact_fn
    open fun gen_onContact_fn(): Unit {}
    open var onGetPhoneNumber = ::gen_onGetPhoneNumber_fn
    open fun gen_onGetPhoneNumber_fn(): Unit {}
    open var onError = ::gen_onError_fn
    open fun gen_onError_fn(): Unit {}
    open var onLaunchApp = ::gen_onLaunchApp_fn
    open fun gen_onLaunchApp_fn(): Unit {}
    open var onOpenSetting = ::gen_onOpenSetting_fn
    open fun gen_onOpenSetting_fn(): Unit {}
    companion object {
        var name = "up-text"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-text" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexWrap" to "nowrap", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "width" to "100%")), "up-text__price" to _pS(_uM("fontSize" to 14, "color" to "#606266")), "up-text__value" to _pS(_uM("fontSize" to 14, "color" to "#606266", "textOverflow" to "ellipsis")), "up-text__value--primary" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-text__value--warning" to _pS(_uM("color" to "#f9ae3d")), "up-text__value--success" to _pS(_uM("color" to "#5ac725")), "up-text__value--info" to _pS(_uM("color" to "#909399")), "up-text__value--error" to _pS(_uM("color" to "#f56c6c")), "up-text__value--main" to _pS(_uM("color" to "#303133")), "up-text__value--content" to _pS(_uM("color" to "#606266")), "up-text__value--tips" to _pS(_uM("color" to "#909193")), "up-text__value--light" to _pS(_uM("color" to "#c0c4cc")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to crtProp__4["type"]), "show" to _uM("type" to "Boolean", "default" to crtProp__4["show"]), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__4["text"]), "prefixIcon" to _uM("type" to "String", "default" to crtProp__4["prefixIcon"]), "suffixIcon" to _uM("type" to "String", "default" to crtProp__4["suffixIcon"]), "mode" to _uM("type" to "String", "default" to crtProp__4["mode"]), "href" to _uM("type" to "String", "default" to crtProp__4["href"]), "format" to _uM("type" to _uA(
            "String",
            "Function"
        ), "default" to crtProp__4["format"]), "call" to _uM("type" to "Boolean", "default" to crtProp__4["call"]), "openType" to _uM("type" to "String", "default" to crtProp__4["openType"]), "bold" to _uM("type" to "Boolean", "default" to crtProp__4["bold"]), "block" to _uM("type" to "Boolean", "default" to crtProp__4["block"]), "lines" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__4["lines"]), "color" to _uM("type" to "String", "default" to crtProp__4["color"]), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__4["size"]), "iconStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to crtProp__4["iconStyle"]), "decoration" to _uM("default" to crtProp__4["decoration"]), "margin" to _uM("type" to _uA(
            "Object",
            "String",
            "Number"
        ), "default" to crtProp__4["margin"]), "lineHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__4["lineHeight"]), "align" to _uM("type" to "String", "default" to crtProp__4["align"]), "wordWrap" to _uM("type" to "String", "default" to crtProp__4["wordWrap"]), "lang" to _uM("type" to "String", "default" to crtProp__4["lang"]), "sessionFrom" to _uM("type" to "String", "default" to crtProp__4["sessionFrom"]), "sendMessageTitle" to _uM("type" to "String", "default" to crtProp__4["sendMessageTitle"]), "sendMessagePath" to _uM("type" to "String", "default" to crtProp__4["sendMessagePath"]), "sendMessageImg" to _uM("type" to "String", "default" to crtProp__4["sendMessageImg"]), "showMessageCard" to _uM("type" to "Boolean", "default" to crtProp__4["showMessageCard"]), "appParameter" to _uM("type" to "String", "default" to crtProp__4["appParameter"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "type",
            "show",
            "text",
            "prefixIcon",
            "suffixIcon",
            "mode",
            "href",
            "format",
            "call",
            "openType",
            "bold",
            "block",
            "lines",
            "color",
            "size",
            "iconStyle",
            "decoration",
            "margin",
            "lineHeight",
            "align",
            "wordWrap",
            "lang",
            "sessionFrom",
            "sendMessageTitle",
            "sendMessagePath",
            "sendMessageImg",
            "showMessageCard",
            "appParameter"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
