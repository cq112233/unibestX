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
open class GenUniModulesUviewUltraComponentsUpLoadmoreUpLoadmore : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        return _cE("view", _uM("class" to "up-loadmore", "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle),
            _uM("backgroundColor" to _ctx.bgColor, "marginBottom" to _ctx.addUnit(_ctx.marginBottom), "marginTop" to _ctx.addUnit(_ctx.marginTop), "height" to _ctx.addUnit(_ctx.height))
        ))), _uA(
            if (isTrue(_ctx.line)) {
                _cV(_component_up_line, _uM("key" to 0, "length" to "140rpx", "color" to _ctx.lineColor, "hairline" to false, "dashed" to _ctx.dashed), null, 8, _uA(
                    "color",
                    "dashed"
                ))
            } else {
                _cC("v-if", true)
            }
            ,
            _cE("view", _uM("class" to _nC(_uA(
                if (_ctx.status == "loadmore" || _ctx.status == "nomore") {
                    "up-more"
                } else {
                    ""
                }
                ,
                "up-loadmore__content"
            ))), _uA(
                if (isTrue(_ctx.status === "loading" && _ctx.icon)) {
                    _cE("view", _uM("key" to 0, "class" to "up-loadmore__content__icon-wrap"), _uA(
                        _cV(_component_up_loading_icon, _uM("color" to _ctx.iconColor, "size" to _ctx.iconSize, "mode" to _ctx.loadingIcon), null, 8, _uA(
                            "color",
                            "size",
                            "mode"
                        ))
                    ))
                } else {
                    _cC("v-if", true)
                }
                ,
                _cE("text", _uM("class" to _nC(_uA(
                    "up-line-11",
                    _uA(
                        if ((_ctx.status == "nomore" && _ctx.isDot == true)) {
                            "up-loadmore__content__dot-text"
                        } else {
                            "up-loadmore__content__text"
                        }
                    )
                )), "style" to _nS(_uA(
                    _ctx.loadTextStyle
                )), "onClick" to _ctx.loadMore), _tD(_ctx.showText), 15, _uA(
                    "onClick"
                ))
            ), 2),
            if (isTrue(_ctx.line)) {
                _cV(_component_up_line, _uM("key" to 1, "length" to "140rpx", "color" to _ctx.lineColor, "hairline" to false, "dashed" to _ctx.dashed), null, 8, _uA(
                    "color",
                    "dashed"
                ))
            } else {
                _cC("v-if", true)
            }
        ), 4)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var status: String by `$props`
    open var bgColor: String by `$props`
    open var icon: Boolean by `$props`
    open var fontSize: Any by `$props`
    open var iconSize: Any by `$props`
    open var color: String by `$props`
    open var loadingIcon: String by `$props`
    open var loadmoreText: String by `$props`
    open var loadingText: String by `$props`
    open var nomoreText: String by `$props`
    open var isDot: Boolean by `$props`
    open var iconColor: String by `$props`
    open var marginTop: Any by `$props`
    open var marginBottom: Any by `$props`
    open var height: Any by `$props`
    open var line: Boolean by `$props`
    open var lineColor: String by `$props`
    open var dashed: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var dotText: String by `$data`
    open var loadTextStyle: UTSJSONObject by `$data`
    open var showText: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "dotText" to "●", "loadTextStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("color" to this.color, "fontSize" to uni.UNI5198058.addUnit(this.fontSize), "backgroundColor" to this.bgColor)
        }
        ), "showText" to computed<String>(fun(): String {
            var text = ""
            if (this.status == "loadmore") {
                text = this.loadmoreText
            } else if (this.status == "loading") {
                text = this.loadingText
            } else if (this.status == "nomore" && this.isDot) {
                text = this.dotText
            } else {
                text = this.nomoreText
            }
            return text
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
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
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open var loadMore = ::gen_loadMore_fn
    open fun gen_loadMore_fn() {
        if (this.status == "loadmore") {
            this.`$emit`("loadmore")
        }
    }
    companion object {
        var name = "up-loadmore"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-loadmore" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-loadmore__content" to _pS(_uM("marginTop" to 0, "marginRight" to 15, "marginBottom" to 0, "marginLeft" to 15, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-loadmore__content__icon-wrap" to _pS(_uM("marginRight" to 8)), "up-loadmore__content__text" to _pS(_uM("fontSize" to 14, "color" to "#606266")), "up-loadmore__content__dot-text" to _pS(_uM("fontSize" to 15, "color" to "#909193")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("loadmore" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "status" to _uM("type" to "String", "default" to crtProp__11["status"]), "bgColor" to _uM("type" to "String", "default" to crtProp__11["bgColor"]), "icon" to _uM("type" to "Boolean", "default" to crtProp__11["icon"]), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["fontSize"]), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["iconSize"]), "color" to _uM("type" to "String", "default" to crtProp__11["color"]), "loadingIcon" to _uM("type" to "String", "default" to crtProp__11["loadingIcon"]), "loadmoreText" to _uM("type" to "String", "default" to crtProp__11["loadmoreText"]), "loadingText" to _uM("type" to "String", "default" to crtProp__11["loadingText"]), "nomoreText" to _uM("type" to "String", "default" to crtProp__11["nomoreText"]), "isDot" to _uM("type" to "Boolean", "default" to crtProp__11["isDot"]), "iconColor" to _uM("type" to "String", "default" to crtProp__11["iconColor"]), "marginTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["marginTop"]), "marginBottom" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["marginBottom"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__11["height"]), "line" to _uM("type" to "Boolean", "default" to crtProp__11["line"]), "lineColor" to _uM("type" to "String", "default" to crtProp__11["lineColor"]), "dashed" to _uM("type" to "Boolean", "default" to crtProp__11["dashed"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "status",
            "bgColor",
            "icon",
            "fontSize",
            "iconSize",
            "color",
            "loadingIcon",
            "loadmoreText",
            "loadingText",
            "nomoreText",
            "isDot",
            "iconColor",
            "marginTop",
            "marginBottom",
            "height",
            "line",
            "lineColor",
            "dashed"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
