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
open class GenUniModulesUviewUltraComponentsUpTextUpText : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
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
    open var decoration: String by `$props`
    open var margin: Any by `$props`
    open var lineHeight: Any by `$props`
    open var align: String by `$props`
    open var wordWrap: String by `$props`
    open var customClass: String by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTextUpText) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTextUpText
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val isMp = computed<Boolean>(fun(): Boolean {
                var mp = false
                return mp
            }
            )
            val valueStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO("textDecoration" to props.decoration, "fontWeight" to if (props.bold) {
                    "bold"
                } else {
                    "normal"
                }
                , "wordWrap" to props.wordWrap, "fontSize" to addUnit(props.size))
                if (props.type == "") {
                    style["color"] = props.color
                }
                if (props.lines.toString() != "") {
                    style["lines"] = props.lines
                }
                if (props.lineHeight.toString() != "") {
                    style["lineHeight"] = addUnit(props.lineHeight)
                }
                if (props.block) {
                    style["display"] = "block"
                }
                return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
            }
            )
            val customIconStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.iconStyle) as UTSJSONObject
            }
            )
            fun gen_formatName_fn(name: String): String {
                var kVal = ""
                if (name.length == 2) {
                    kVal = name.substring(0, 1) + "*"
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
                    kVal = name.substring(0, 1) + char + name.substring(name.length - 1)
                } else {
                    kVal = name
                }
                return kVal
            }
            val formatName = ::gen_formatName_fn
            val value = computed<String>(fun(): String {
                val textStr = props.text.toString()
                if (props.mode === "price") {
                    if (!UTSRegExp("^\\d+(\\.\\d+)?\$", "").test(textStr)) {
                        error("金额模式下，text参数需要为金额格式")
                    }
                    return priceFormat(textStr, 2)
                }
                if (props.mode === "date") {
                    if (!date(textStr)) {
                        error("日期模式下，text参数需要为日期或时间戳格式" + textStr)
                    }
                    if (props.format != null && props.format.toString() != "") {
                        return timeFormat(textStr, props.format.toString())
                    }
                    return timeFormat(textStr, "yyyy-mm-dd")
                }
                if (props.mode === "phone") {
                    if (props.format === "encrypt") {
                        return "" + textStr.substring(0, 3) + "****" + textStr.substring(7)
                    }
                    return textStr
                }
                if (props.mode === "name") {
                    if (props.format === "encrypt") {
                        return formatName(textStr)
                    }
                    return textStr
                }
                if (props.mode === "link") {
                    if (!uni.UNIB120614.url(props.href)) {
                        error("超链接模式下，href参数需要为URL格式")
                    }
                    return textStr
                }
                return textStr
            }
            )
            fun gen_clickHandler_fn() {
                emit("click")
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_onGetUserInfo_fn() {}
            val onGetUserInfo = ::gen_onGetUserInfo_fn
            fun gen_onContact_fn() {}
            val onContact = ::gen_onContact_fn
            fun gen_onGetPhoneNumber_fn() {}
            val onGetPhoneNumber = ::gen_onGetPhoneNumber_fn
            fun gen_onError_fn() {}
            val onError = ::gen_onError_fn
            fun gen_onLaunchApp_fn() {}
            val onLaunchApp = ::gen_onLaunchApp_fn
            fun gen_onOpenSetting_fn() {}
            val onOpenSetting = ::gen_onOpenSetting_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_link = resolveEasyComponent("up-link", GenUniModulesUviewUltraComponentsUpLinkUpLinkClass)
                return if (isTrue(_ctx.show)) {
                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                        "weapp-tw-border up-text",
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
                    })), "onClick" to clickHandler), _uA(
                        if (_ctx.mode === "price") {
                            _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                                "weapp-tw-border",
                                _uA(
                                    "up-text__price",
                                    "up-text__value--" + _ctx.type
                                )
                            )), "style" to _nS(valueStyle.value)), "￥", 6)
                        } else {
                            _cC("v-if", true)
                        },
                        if (_ctx.prefixIcon != "") {
                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-text__prefix-icon"), _uA(
                                _cV(_component_up_icon, _uM("name" to _ctx.prefixIcon, "customStyle" to customIconStyle.value), null, 8, _uA(
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
                            )), "style" to _nS(_uM("fontWeight" to valueStyle.value["fontWeight"], "wordWrap" to valueStyle.value["wordWrap"], "fontSize" to valueStyle.value["fontSize"])), "text" to value.value, "href" to _ctx.href, "underLine" to ""), null, 8, _uA(
                                "style",
                                "class",
                                "text",
                                "href"
                            ))
                        } else {
                            if (isTrue(_ctx.openType != "" && isMp.value)) {
                                _cE("button", _uM("key" to 3, "class" to "up-reset-button up-text__value", "style" to _nS(valueStyle.value), "data-index" to "index", "openType" to _ctx.openType, "onGetuserinfo" to onGetUserInfo, "onContact" to onContact, "onGetphonenumber" to onGetPhoneNumber, "onError" to onError, "onLaunchapp" to onLaunchApp, "onOpensetting" to onOpenSetting, "lang" to _ctx.lang, "session-from" to _ctx.sessionFrom, "send-message-title" to _ctx.sendMessageTitle, "send-message-path" to _ctx.sendMessagePath, "send-message-img" to _ctx.sendMessageImg, "show-message-card" to _ctx.showMessageCard, "app-parameter" to _ctx.appParameter), _tD(value.value), 45, _uA(
                                    "openType",
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
                                    "weapp-tw-border up-text__value",
                                    _uA(
                                        "up-text__value--" + _ctx.type,
                                        "up-line-" + _ctx.lines
                                    )
                                )), "style" to _nS(valueStyle.value)), _tD(value.value), 7)
                            }
                        },
                        if (_ctx.suffixIcon != "") {
                            _cE("view", _uM("key" to 5, "class" to "weapp-tw-border up-text__suffix-icon"), _uA(
                                _cV(_component_up_icon, _uM("name" to _ctx.suffixIcon, "customStyle" to customIconStyle.value), null, 8, _uA(
                                    "name",
                                    "customStyle"
                                ))
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ), 6)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-text"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-text" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexWrap" to "nowrap", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "width" to "100%")), "up-text__price" to _pS(_uM("fontSize" to 14, "color" to "#606266")), "up-text__value" to _pS(_uM("fontSize" to 14, "color" to "#606266", "textOverflow" to "ellipsis")), "up-text__value--primary" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-text__value--warning" to _pS(_uM("color" to "#f9ae3d")), "up-text__value--success" to _pS(_uM("color" to "#5ac725")), "up-text__value--info" to _pS(_uM("color" to "#909399")), "up-text__value--error" to _pS(_uM("color" to "#f56c6c")), "up-text__value--main" to _pS(_uM("color" to "#303133")), "up-text__value--content" to _pS(_uM("color" to "#606266")), "up-text__value--tips" to _pS(_uM("color" to "#909193")), "up-text__value--light" to _pS(_uM("color" to "#c0c4cc")), "up-text__prefix-icon" to _pS(_uM("marginRight" to 5)), "up-text__suffix-icon" to _pS(_uM("marginLeft" to 5)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to ""), "show" to _uM("type" to "Boolean", "default" to true), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "prefixIcon" to _uM("type" to "String", "default" to ""), "suffixIcon" to _uM("type" to "String", "default" to ""), "mode" to _uM("type" to "String", "default" to ""), "href" to _uM("type" to "String", "default" to ""), "format" to _uM("type" to _uA(
            "String",
            "Function"
        ), "default" to ""), "call" to _uM("type" to "Boolean", "default" to false), "openType" to _uM("type" to "String", "default" to ""), "bold" to _uM("type" to "Boolean", "default" to false), "block" to _uM("type" to "Boolean", "default" to false), "lines" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "color" to _uM("type" to "String", "default" to "#303133"), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "15px"), "iconStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to fun(): UTSJSONObject {
            return (_uO("fontSize" to "15px"))
        }
        ), "decoration" to _uM("type" to "String", "default" to "none"), "margin" to _uM("type" to _uA(
            "Object",
            "String",
            "Number"
        ), "default" to "0"), "lineHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "align" to _uM("type" to "String", "default" to "left"), "wordWrap" to _uM("type" to "String", "default" to "normal"), "customClass" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "lang" to _uM("type" to "String", "default" to "en"), "sessionFrom" to _uM("type" to "String", "default" to ""), "sendMessageTitle" to _uM("type" to "String", "default" to ""), "sendMessagePath" to _uM("type" to "String", "default" to ""), "sendMessageImg" to _uM("type" to "String", "default" to ""), "showMessageCard" to _uM("type" to "Boolean", "default" to false), "appParameter" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
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
            "customClass",
            "customStyle",
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
